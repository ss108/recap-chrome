import PACER from '../pacer';
import {
  alertButtonTr,
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

const insertIntoTableStart = (el) => {
  const table = document.querySelector('tbody');
  table.insertBefore(el, table.childNodes[0]);
};
const toggleAlertButton = (resultCount) => {
  if (resultCount === 0) return console.warn(msg.warn);
  if (resultCount > 1) return console.error(msg.tooMany(resultCount));
  changeAlertButtonStateToActive({
    el: document.getElementById('recap-alert-button'),
  });
};

const msg = {
  disabled: 'RECAP: Not uploading docket. RECAP is disabled',
  warn: 'RECAP: Zero results found for docket lookup.',
  success: 'Docket uploaded to the public RECAP Archive.',
  error: 'RECAP: Upload failed. Check the logs for more information.',
  tooMany: (count) =>
    'Recap: More than one result found for docket lookup. ' + `Found ${count}`,
};

// PROTOTYPE FUNCTION START //
export async function handleDocketDisplayPage() {
  if (!isDocketPage(this.url)) return;
  if (alreadyUploaded(history.state)) return;
  if (isInterstitialDocketPage()) return;

  // Get the case id. If the delegate does not have a case_id
  // and there is not one in storage, then do nothing.
  if (!this.pacer_case_id) {
    this.pacer_case_id = await getItemsFromStorage(this.tabId).caseId;
    if (!this.pacer_case_id) return;
  }

  // insert the create recap alert button into the DOM
  insertIntoTableStart(
    alertButtonTr({
      court: this.court,
      caseId: this.pacer_case_id,
      isActive: false,
    })
  );

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
  if (!options['recap_enabled']) return console.info(msg.disabled);

  // otherwise stash the blob in the store
  const dataUrl = await blobToDataURL(
    new Blob([document.documentElement.innerHTML], { type: 'text/html' })
  );

  await saveItemToStorage({
    [this.tabId]: { ['file_blob']: dataUrl },
  });

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
  // if docketUploaded does not resolve with success
  if (!docketUploaded) return console.error(msg.error);

  // if upload successful, set the upload flag to true, and
  // change the create alert button state to active

  history.replaceState({ uploaded: true }, '');
  changeAlertButtonStateToActive({
    el: document.getElementById('recap-alert-button'),
  });

  // send the toast notification
  const notified = await dispatchNotifier({
    action: 'showUpload',
    title: 'recap_successful_docket_display_upload',
    message: msg.success,
  });

  if (notified.success)
    return console.info('RECAP: User notified of succesful upload');
}
