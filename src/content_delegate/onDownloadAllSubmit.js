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
} from '../utils';

// helper function - convert string to html document
const stringToDocBody = (str) => {
  const parser = new DOMParser();
  const newDoc = parser.parseFromString(str, 'text/html');
  return newDoc.body;
};
// helper function - extract the zip by creating html and querying the frame
const extractUrl = (html) => {
  const page = document.createElement('html');
  page.innerHTML = html;
  const frames = page.querySelectorAll('iframe');
  return frames[0].src;
};
// helper function - returns filename based on user preferences
const generateFileName = (
  options,
  pacerCaseId,
  court,
  docket_number,
  document_number
) => {
  if (options.ia_style_filenames) {
    return ['gov', 'uscourts', court, pacerCaseId || 'unknown-case-id']
      .join('.')
      .concat('.zip');
  } else if (options.lawyer_style_filenames) {
    const firstTable = document.getElementsByTagName('table')[0];
    const firstTableRows = firstTable.querySelectorAll('tr');
    // 4th from bottom
    const matchedRow = firstTableRows[firstTableRows.length - 4];
    const cells = matchedRow.querySelectorAll('td');
    const document_number = cells[0].innerText.match(/\d+(?=\-)/)[0];
    const docket_number = cells[1].innerText;
    return [PACER.COURT_ABBREVS[court], docket_number, document_number]
      .join('_')
      .concat('.zip');
  }
};

// PROTOTYPE FUNCTION START //
export async function onDownloadAllSubmit(event) {
  // if no dataId is present, it is not the right event so do nothing
  if (!event.data.id) return;

  // Make the Back button redisplay the previous page.
  window.onpopstate = function (event) {
    if (!event.state.content) return;
    document.documentElement.innerHTML = event.state.content;
  };
  history.replaceState({ content: document.documentElement.innerHTML }, '');

  // tell the user to wait
  document.querySelector('body').classList += 'cursor wait';

  // in Firefox, use content.fetch for content-specific fetch requests
  // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#XHR_and_Fetch
  const contentFetch =
    navigator.userAgent.indexOf('Chrome') < 0 ? content.fetch : window.fetch;

  // fetch the html page which contains the <iframe> link to the zip document.
  const htmlPage = await contentFetch(event.data.id).then((res) => res.text());
  console.log('RECAP: Successfully submitted zip file request', htmlPage);
  const zipUrl = extractUrl(htmlPage);

  //download zip file and save it to chrome storage
  const blob = await fetch(zipUrl).then((res) => res.blob());
  const dataUrl = await blobToDataURL(blob);
  // save blob in storage under tabId
  // we store it as an array to chunk the message
  await updateTabStorage({ [this.tabId]: { ['file_blob']: dataUrl } });

  // the the user we've downloaded the file
  console.info('RECAP: Downloaded zip file');

  // create the blob and inject it into the page
  const pacerCaseId = event.data.id
    .match(/caseid\=\d*/)[0]
    .replace(/caseid\=/, '');

  // generate the filename
  const filename = generateFileName(
    options,
    pacerCaseId,
    this.court,
    docket_number,
    document_number
  );

  if (this.restricted) return console.warn('Page is restricted.');

  // load options
  const options = await getItemsFromStorage('options');
  if (!options.recap_enabled) return console.error('Recap not enabled.');

  const docId = this.pacer_doc_id
    ? this.pacer_doc_id
    : await getItemsFromStorage(this.tabId).docId;

  const uploadZipFile = await dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      headers: authHeader,
      body: {
        court: PACER.convertToCourtListenerCourt(this.court),
        pacer_doc_id: docId,
        pacer_case_id: pacerCaseId,
        upload_type: uploadType('ZIP'),
        debug: false,
        filepath_local: true,
      },
    },
  });

  if (!uploadZipFile) return console.error('RECAP: Upload failed.');
  // show notifier
  this.notifier.showUpload(
    'Zip uploaded to the public RECAP Archive',
    () => {}
  );
  // convert htmlPage to document
  const blobUrl = URL.createObjectURL(blob);
  const link = `<a id="recap-download" href=${blobUrl} download=${filename} width="0" height="0"/>`;
  const htmlBody = stringToDocBody(htmlPage);
  const frame = htmlBody.querySelector('iframe');
  frame.insertAdjacentHTML('beforebegin', link);
  frame.src = '';
  frame.onload = () => document.getElementById('recap-download').click();
  document.body = htmlBody;
  history.pushState({ content: document.body.innerHTML }, '');
}
