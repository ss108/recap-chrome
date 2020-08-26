import PACER from '../pacer';
import {
  blobToDataURL,
  getItemsFromStorage,
  updateTabStorage,
  dispatchBackgroundFetch,
  courtListenerURL,
  authHeader,
  uploadType,
  debug,
  saveZipFileInStorage,
  setPreviousPageinHistory,
  toggleLoadingCursor,
  dispatchNotifier,
  getDocAndDocketNumbersForZipDownload,
  stringToDocBody,
  blobDownloadLink,
  generateFileName,
} from '../utils';

// PROTOTYPE FUNCTION START //
export async function onDownloadAllSubmit(event) {
  // if no dataId is present, it is not the right event so do nothing
  if (!event.data.id) return;

  // Make the Back button redisplay the previous page.
  window.onpopstate = (e) => setPreviousPageinHistory(e);
  history.replaceState({ content: document.documentElement.innerHTML }, '');

  toggleLoadingCursor(); // tell the user to wait

  const { success: blobFetchSuccess, htmlPage, blob } = await saveZipFileInStorage({
    url: event.data.id,
    tabId: this.tabId,
  });

  if (!blobFetchSuccess) return console.error('Could not extract blob from page');

  // do nothing further if the page is restricted
  if (this.restricted) return console.warn('Page is restricted.');

  // else load options, but return if recap not enabled
  const options = await getItemsFromStorage('options');
  if (!options.recap_enabled) return console.error('Recap not enabled.');

  // get the docId from storage if we don't have one.
  const docId = this.pacer_doc_id
    ? this.pacer_doc_id
    : await getItemsFromStorage(this.tabId).docId;

  // dispatch the fetch request
  const uploadZipFile = await dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      headers: authHeader,
      body: {
        court: PACER.convertToCourtListenerCourt(this.court),
        pacer_doc_id: docId,
        pacer_case_id: this.pacer_case_id,
        upload_type: uploadType('ZIP'),
        debug: false,
        filepath_local: true,
      },
    },
  });

  // if it is not successful, do nothing and report error.
  if (!uploadZipFile) return console.error('RECAP: Upload failed.');

  // else, show notifier with a success message
  const { success } = await dispatchNotifier({
    action: 'showUpload',
    title: 'Successful',
    message: 'Zip uploaded to the public RECAP Archive',
  });

  if (success) console.info('RECAP: Notified user of successful upload');

  // convert htmlPage to a document element
  const htmlBody = stringToDocBody(htmlPage);
  // find the target iframe in that document
  const frame = htmlBody.querySelector('iframe');

  // get the docket and document numbers from the DOM
  const { docket_number, document_number } = getDocAndDocketNumbersForZipDownload();

  // insert the blob download anchor string before the iframe
  frame.insertAdjacentHTML(
    'beforebegin',
    // construct the anchor by passing the blobUrl key an objectURL
    // and a filename string, constructed from the included args
    blobDownloadLink({
      blobUrl: URL.createObjectURL(blob),
      filename: generateFileName({
        docket_number,
        document_number,
        suffix: 'zip',
        court: this.court,
        style: options.lawyer_style_filenames ? 'lawyer' : 'ia',
        pacerCaseId: event.data.id.match(/caseid\=(\d*)/)[1],
      }),
    })
  );

  // set the rest of the frame parameters
  frame.src = '';
  frame.onload = () => document.getElementById('recap-download').click();

  // replace the document body with the newly created one
  document.body = htmlBody;

  // add the new html to history
  history.pushState({ content: document.body.innerHTML }, '');
}
