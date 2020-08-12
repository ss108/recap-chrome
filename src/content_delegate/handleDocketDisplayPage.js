import PACER from '../pacer';
import {
  alertButtonTr,
  changeAlertButtonStateToActive,
  getItemsFromStorage,
} from '../utils';
// If this is a docket page, upload it to RECAP.
export async function handleDocketDisplayPage() {
  // helper functions

  // If it's not a docket display URL or a docket history URL, punt.
  let isDocketDisplayUrl = PACER.isDocketDisplayUrl(this.url);
  let isDocketHistoryDisplayUrl = PACER.isDocketHistoryDisplayUrl(this.url);
  if (!(isDocketHistoryDisplayUrl || isDocketDisplayUrl)) {
    return;
  }

  // check for more than one radioDateInput and return if true
  // (you are on an interstitial page so no docket to display)
  const radioDateInputs = [...document.getElementsByTagName('input')].filter(
    (input) => input.name === 'date_from' && input.type === 'radio'
  );
  if (radioDateInputs.length > 1) {
    return;
  }

  // if you've already uploaded the page, return
  if (history.state && history.state.uploaded) {
    return;
  }

  // check if appellate
  // let isAppellate = PACER.isAppellateCourt(this.court);

  // if the content_delegate didn't pull the case Id on initialization,
  // check the page for a lead case dktrpt url.
  const tabStorage = await getItemsFromStorage(this.tabId);

  this.pacer_case_id = this.pacer_case_id
    ? this.pacer_case_id
    : tabStorage.caseId;

  // If we don't have this.pacer_case_id at this point, punt.
  if (!this.pacer_case_id) return;

  // insert the button in a disabled state
  document.querySelector('tbody').insertBefore(
    alertButtonTr({
      court: this.court,
      caseId: this.pacer_case_id,
      isActive: false,
    }),
    document.querySelector('tbody').childNodes[0]
  );

  this.recap.getAvailabilityForDocket(
    this.court,
    this.pacer_case_id,
    (result) => {
      if (result.count === 0) {
        console.warn('RECAP: Zero results found for docket lookup.');
      } else if (result.count > 1) {
        console.error(
          'RECAP: More than one result found for docket lookup. ' +
            `Found ${result.count}`
        );
      } else {
        changeAlertButtonStateToActive({
          el: document.getElementById('recap-alert-button'),
        });
      }
    }
  );

  const options = await getItemsFromStorage('options');

  if (!options['recap_enabled']) {
    return console.info('RECAP: Not uploading docket. RECAP is disabled.');
  }
  // do nothing if its not a docket page
  if (!isDocketDisplayUrl && !isDocketHistoryDisplayUrl) return;
  this.recap.uploadDocket(
    this.court,
    this.pacer_case_id,
    document.documentElement.innerHTML,
    // send the appropriate label to recap
    isDocketDisplayUrl ? 'DOCKET' : 'DOCKET_HISTORY_REPORT',
    // pass the callback
    (ok) => {
      if (!ok) return;
      changeAlertButtonStateToActive({
        el: document.getElementById('recap-alert-button'),
      });
      history.replaceState({ uploaded: true }, '');
      this.notifier.showUpload(
        'Docket uploaded to the public RECAP Archive.',
        () => {}
      );
    }
  );
}
