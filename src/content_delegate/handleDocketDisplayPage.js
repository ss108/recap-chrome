import PACER from '../pacer';
import {
  createAlertButtonTr,
  changeAlertButtonStateToActive,
  getItemsFromStorage,
  isInterstitialDocketPage,
  isDocketPage,
  dispatchBackgroundFetch,
  uploadType,
  courtListenerURL,
  authHeader,
  fetchGetOptions,
  searchParamsURL,
  saveItemToStorage,
  blobToDataURL,
  dispatchNotifier,
} from '../utils';

// LOCAL HELPERS //
const alreadyUploaded = (history) => (history.uploaded ? history.uploaded : false);

const insertAlertButtonIntoStartOfTable = ({ court, caseId }) => {
  const alertButton = createAlertButtonTr({ court, caseId, isActive: false });
  const table = document.querySelector('tbody');
  table.insertBefore(alertButton, table.childNodes[0]);
};
const toggleAlertButton = (resultCount) => {
  if (resultCount === 0) return console.warn('RECAP: Zero results found for docket lookup.');
  if (resultCount > 1)
    return console.error(`RECAP: More than one result found for docket: Found ${resultCount}`);
  changeAlertButtonStateToActive();
};

// PROTOTYPE FUNCTION START //
export async function handleDocketDisplayPage() {
  // exit if not a docket page
  if (!isDocketPage(this.url)) return console.info('RECAP: Not a docket page.');
  // exit if docket display page already uploaded
  if (alreadyUploaded(history.state)) return console.info('RECAP: Page already uploaded.');
  // exit if this is an interstitial page with no relevant info
  if (isInterstitialDocketPage()) return console.info('RECAP: On an interstitial page');

  // Get the case id. If the delegate does not have a case_id
  // and there is not one in storage, then do nothing.
  if (!this.pacer_case_id) {
    this.pacer_case_id = await getItemsFromStorage(this.tabId).caseId;
  }
  if (!this.pacer_case_id) return console.warn('RECAP: No pacer_case_id found');

  // insert the create recap alert button into the DOM
  insertAlertButtonIntoStartOfTable({
    court: this.court,
    caseId: this.pacer_case_id,
  });

  // check to see if we have the docket
  const hasDocket = await dispatchBackgroundFetch({
    url: searchParamsURL({
      base: courtListenerURL('dockets'),
      params: {
        court: this.court,
        source__in: '1,3,5,7,9,11,13,15',
        pacer_case_id: this.pacer_case_id,
        fields: 'absolute_url,date_modified',
      },
    }),
    options: {
      method: 'GET',
      headers: authHeader,
    },
  });

  // if the docket exists, change the alert button to active
  if (hasDocket.count) toggleAlertButton(hasDocket.count);

  // do nothing else if recap is not enabled
  const options = await getItemsFromStorage('options');
  if (!options.recap_enabled) return console.warn('RECAP: Uploads disabled.');

  // otherwise stash the blob in the store
  const blob = new Blob([document.documentElement.innerHTML], { type: 'text/html' });
  const dataUrl = await blobToDataURL(blob);
  await saveItemToStorage({ [this.tabId]: { file_blob: dataUrl } });

  // and then upload the docket to recap
  const docketUploaded = await dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      headers: authHeader,
      body: {
        court: PACER.convertToCourtListenerCourt(this.court),
        pacer_case_id: this.pacer_case_id,
        filepath_local: true,
        upload_type: uploadType(isDocketPage(this.url)),
      },
    },
  });

  if (!docketUploaded) return console.error('RECAP: Document Not Uploaded. Check Logs.');

  // if upload successful, set the upload flag to true, and
  // change the create alert button state to active
  history.replaceState({ uploaded: true }, '');
  changeAlertButtonStateToActive({
    el: document.getElementById('recap-alert-button'),
  });

  // send the toast notification
  const notified = await dispatchNotifier({
    action: 'showUpload',
    title: 'Successful Upload',
    message: 'Docket uploaded to the public RECAP Archive.',
  });

  if (notified.success) return console.info('RECAP: User notified of succesful upload');
}
