import PACER from '../pacer';
import {
  generateFileName,
  getItemsFromStorage,
  dispatchBackgroundFetch,
  searchParamsURL,
  isChromeBrowserAndPdfViewerDisabled,
  courtListenerURL,
  authHeader,
  dispatchNotifier,
  blobDownloadLink,
  getBrowserFetch,
  blobToDataURL,
  updateTabStorage,
  toggleLoadingCursor,
} from '../utils';

export async function onDocumentDownload({ baseURI }) {
  // 0. initialize the function and fetch async data
  console.log('onDocumentDownload');

  toggleLoadingCursor();

  // 1.  make the back button display the previous page //
  window.onpopstate = ({ state }) => {
    if (state.content) {
      document.documentElement.innerHTML = state.content;
    }
  };
  history.replaceState({ content: document.documentElement.innerHTML }, '');

  // 2.  collect the formData to request the pdf
  const inputs = [...document.querySelectorAll('form > input')];
  const inputData = [];
  inputs.map(({ name, value }) => {
    // excludes the submit button and the 'recp' undefined field
    if (!!name && !!value) {
      inputData[name] = value;
    }
  });
  // set the receipt field to currentTime to mimic the pacer call
  const formData = { ...inputData, recp: new Date().getTime() };

  // 3. encode the params as URL search params to match the pacer request
  const url = searchParamsURL({ base: baseURI, params: formData });

  // 4. get the blob and store it
  const contentScriptFetch = getBrowserFetch();
  const blob = await contentScriptFetch(url).then((res) => res.blob());
  const dataUrl = await blobToDataURL(blob);
  const stashed = await updateTabStorage({ [this.tabId]: { file_blob: dataUrl } });

  if (!stashed)
    return console.warn('RECAP: Blob not stashed in store. Cancelling upload.');

  // 5. build the innerHtml to show the user

  // get needed info to build the filename
  const options = await getItemsFromStorage('options');
  const td = [...document.querySelectorAll('td')].find((td) =>
    td.textContent.match(/Case\: \d{2}-\d{4}/)
  );

  const pacerDocId = formData.dls_id;
  const docketNumber = td.textContent.match(/\d{2}\-\d{4}/)[0];

  const court = PACER.convertToCourtListenerCourt(this.court);

  const pacerCaseId = formData.caseId;

  const filename = generateFileName({
    style: options.lawyer_style_filenames ? 'laywer' : 'ia',
    suffix: 'pdf', // for future zip support?
    pacerCaseId,
    court,
    docketNumber,
    pacerDocId,
    attachmentNumber: '', // no relevant number found
  });

  const externalPdfEnabled = isChromeBrowserAndPdfViewerDisabled()
    ? true
    : options.external_pdf_enabled;

  if (externalPdfEnabled) {
    saveAs(blob, filename);
  } else {
    // create an iframe to display the pdf
    const iframe = document.createElement('iframe');
    iframe.src = URL.createObjectURL(blob);
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('width', '100%');
    iframe.style = 'border: none';

    // insert it into a body and set the style
    const body = document.createElement('body');
    body.style.margin = 0;
    body.style.height = '100vh';
    body.appendChild(iframe);

    // insert it into a top-level html element
    const html = document.createElement('html');
    html.appendChild(body);

    // swap the current documentElement with our new one
    document.documentElement.innerHTML = html.innerHTML;
    // let the browser know we've 'gone forward' a page
    history.pushState({ content: html.innerHTML }, '');
  }

  const uploaded = dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      headers: { ...authHeader },
      body: {
        pacerCaseId,
        pacerDocId,
        court,
        upload_type: 'APPELLATE_DOCUMENT',
        filepath_local: true,
      },
    },
  });

  if (!uploaded) return console.error('RECAP: Upload failed.');

  history.replaceState({ uploaded: true }, '');

  const notified = dispatchNotifier({
    title: 'notify_successful_appellate_document_upload',
    message: 'Document uploaded to the public RECAP Archive',
    action: 'showUpload',
  });

  if (notified)
    return console.info(
      'User notified of a successful appellate docket page upload'
    );
}
