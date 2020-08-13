import PACER from '../pacer';
import {
  alertButtonTr,
  changeAlertButtonStateToActive,
  getItemsFromStorage,
  dispatchFetch,
} from '../utils';

// LOCAL HELPERS //

const alertBtn = () => document.getElementById('recap-alert-button');

// returns the docket type or null if neither docket nor docket history page
const docketType = (url) =>
  PACER.isDocketDisplayUrl(url)
    ? 'DOCKET'
    : PACER.isDocketHistoryDisplayUrl(url)
    ? 'DOCKET_HISTORY_REPORT'
    : null;

const insertIntoTableStart = (el) => {
  const table = document.querySelector('body');
  table.insertBefore(el, table.childNodes[0]);
};
// check for more than one radioDateInput and return if true
// (you are on an interstitial page so no docket to display)
const isInterstitialPage = () => {
  const arr = Array.from(document.querySelectorAll('input[type="radio"]'));
  const radioDateInputs = arr.filter((i) => i.name === 'date_from');
  return radioDateInputs.length > 1;
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
  // If this is a docket page, upload it to RECAP.
  // return if not a docket page, is an interstitial page
  // or page has already been uploaded in this session
  if (!docketType(this.url)) return;
  if (isInterstitialPage()) return;
  if (history.state && history.state.uploaded) return;

  // if the content_delegate didn't pull the case Id on initialization,
  // check the page for a lead case dktrpt url.
  // If we don't have this.pacer_case_id at this point, punt.
  if (!this.pacer_case_id) {
    const storedCaseId = await getItemsFromStorage(this.tabId).caseId;
    if (!storedCaseId) return;
    this.pacer_case_id = storedCaseId;
  }
  // insert the button in a disabled state
  insertIntoTableStart(
    alertButtonTr({
      court: this.court,
      caseId: this.pacer_case_id,
      isActive: false,
    })
  );

  // check to see if we have the docket already
  this.recap.getAvailabilityForDocket(
    this.court,
    this.pacer_case_id,
    (result) => {
      if (result.count === 0) return console.warn(msg.warn);
      if (result.count > 1) return console.error(msg.tooMany(result.count));
      changeAlertButtonStateToActive({ el: alertBtn() });
    }
  );

  // do nothing if recap is not enabled
  const options = await getItemsFromStorage('options');
  if (!options['recap_enabled']) return console.info(msg.disabled);

  // else upload docket to RECAP
  this.recap.uploadDocket(
    this.court,
    this.pacer_case_id,
    document.documentElement.innerHTML,
    docketType(this.url),
    (ok) => {
      if (!ok) return console.error(msg.error);
      history.replaceState({ uploaded: true }, '');
      this.notifier.showUpload(msg.success, () => {});
      changeAlertButtonStateToActive({ el: alertBtn() });
    }
  );
}
