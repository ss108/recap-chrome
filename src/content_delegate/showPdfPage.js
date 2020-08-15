import PACER from '../pacer';
import {
  blobToDataURL,
  getItemsFromStorage,
  showPdfHtml,
  updateTabStorage,
  waitingPageHtml,
  dispatchBackgroundFetch,
  courtListenerURL,
  authHeader,
  uploadType,
  dispatchNotifier,
} from '../utils';
// Given the HTML for a page with an <iframe> in it, downloads the PDF
// document in the iframe, displays it in the browser, and also
// uploads the PDF document to RECAP.
//
// The documentElement is provided via dependency injection so that it
// can be properly mocked in tests.

export async function showPdfPage(
  documentElement,
  html,
  previousPageHtml,
  document_number,
  attachment_number,
  docket_number
) {
  // Find the <iframe> URL in the HTML string.
  let match = html.match(/([^]*?)<iframe[^>]*src="(.*?)"([^]*)/);
  if (!match) {
    return (document.documentElement.innerHTML = html);
  }

  const options = await getItemsFromStorage('options');

  // Show the page with a blank <iframe> while waiting for the download.
  document.documentElement.innerHTML = waitingPageHtml({ match });

  // Make the Back button redisplay the previous page.
  window.onpopstate = function (event) {
    if (!event.state.content) return;
    document.documentElement.innerHTML = event.state.content;
  };
  history.replaceState({ content: previousPageHtml }, '');

  // Download the file from the <iframe> URL.
  const browserSpecificFetch =
    navigator.userAgent.indexOf('Chrome') < 0 ? content.fetch : window.fetch;
  const blob = await browserSpecificFetch(match[2]).then((res) => res.blob());
  const dataUrl = await blobToDataURL(blob);
  await updateTabStorage({ [this.tabId]: { ['file_blob']: dataUrl } });
  console.info('RECAP: Successfully got PDF as arraybuffer via ajax request.');
  // Get the PACER case ID and, on completion, define displayPDF()
  // to either display the PDF in the provided <iframe>, or, if
  // external_pdf is set, save it using FileSaver.js's saveAs().

  const pacer_case_id = !this.pacer_case_id
    ? await this.recap.getPacerCaseIdFromPacerDocId(this.pacer_doc_id, () => {})
    : this.pacer_case_id;

  const generateFileName = (pacer_case_id) => {
    let filename, pieces;
    if (options.ia_style_filenames) {
      pieces = [
        'gov',
        'uscourts',
        this.court,
        pacer_case_id || 'unknown-case-id',
        document_number || '0',
        attachment_number || '0',
      ];
      filename = `${pieces.join('.')}.pdf`;
    } else if (options.lawyer_style_filenames) {
      pieces = [
        PACER.COURT_ABBREVS[this.court],
        docket_number || '0',
        document_number || '0',
        attachment_number || '0',
      ];
      filename = `${pieces.join('_')}.pdf`;
    }
    return filename;
  };

  const setInnerHtml = (pacer_case_id) => {
    const filename = generateFileName(pacer_case_id);
    let external_pdf = options.external_pdf;
    if (
      navigator.userAgent.indexOf('Chrome') >= 0 &&
      !navigator.plugins.namedItem('Chrome PDF Viewer')
    ) {
      // We are in Google Chrome, and the built-in PDF Viewer has been disabled.
      // So we autodetect and force external_pdf true for proper filenames.
      external_pdf = true;
    }
    if (!external_pdf) {
      const html = showPdfHtml({
        blobUrl: URL.createObjectURL(blob),
        filename,
        match,
      });
      document.querySelector('body').innerHTML = html;
      history.pushState({ content: html }, '');
    } else {
      // Saving to an external PDF.
      const loadingText = document.getElementById('recap-waiting');
      if (loadingText) loadingText.remove();
      window.saveAs(blob, filename);
    }
  };

  setInnerHtml(pacer_case_id);

  // upload the document unless the user has disabled the option
  // or the page is restricted
  if (!options['recap_enabled'] || this.restricted) {
    return console.info('Recap: Not uploading PDF. RECAP is disabled.');
  }

  const uploadDocument = dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      headers: authHeader,
      body: {
        court: PACER.convertToCourtListenerCourt(this.court),
        pacer_case_id: pacer_case_id,
        pacer_doc_id: this.pacer_doc_id,
        document_number: document_number,
        attachment_number: attachment_number,
        filepath_local: true,
        upload_type: uploadType('PDF'),
        debug: false,
      },
    },
  });
  if (!uploadDocument) return console.error('RECAP: Document not uploaded');

  dispatchNotifier({
    action: 'showUpload',
    title: 'Upload Successful',
    message: 'PDF uploaded to the public RECAP Archive',
  });
}
