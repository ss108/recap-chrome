import PACER from '../pacer';

import {
  blobToDataURL,
  authHeader,
  updateTabStorage,
  dispatchBackgroundFetch,
  dispatchNotifier,
  courtListenerURL,
  getItemsFromStorage,
  saveItemToStorage,
} from '../utils';

export async function handleDocketPage() {
  console.log('handleDocketPage');

  // set pacerCaseId for pages down the line
  const anchors = [...document.querySelectorAll('a')];
  const pacerCaseId = PACER.getCaseIdFromAppellateDocketPage(anchors);
  if (pacerCaseId) {
    await updateTabStorage({ [this.tabId]: { caseId: pacerCaseId } });
  }

  // since opinions may be public we try to grab it
  // if (recapDoesNotHaveOpinion) {
  this.checkForAndUploadOpinion({ pacerCaseId });
  // };

  // don't upload more than once per session
  if (history.state && history.state.uploaded)
    return console.info('RECAP: Document already uploaded.');

  // don't upload if the user disabled the option
  const options = await getItemsFromStorage('options');
  if (!options.recap_enabled) return console.info('RECAP: Disabled. Not uploading.');

  const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });

  await saveItemToStorage({
    [this.tabId]: {
      ['file_blob']: await blobToDataURL(blob),
    },
  });

  const uploaded = await dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      headers: { ...authHeader },
      body: {
        court: PACER.convertToCourtListenerCourt(this.court),
        pacer_case_id: pacerCaseId,
        debug: false,
        upload_type:
          this.targetPage === 'fullDocket' ? 'FULL_DOCKET' : 'SHORT_DOCKET',
        filepath_local: true,
      },
    },
  });

  if (!uploaded) return console.error('Appellate Docket Page Not Uploaded');

  history.replaceState({ uploaded: true }, '');

  const notified = await dispatchNotifier({
    title: 'notify_successful_appellate_docket_page_upload',
    message: 'Docket page uploaded to the public RECAP Archive',
    action: 'showUpload',
  });

  if (notified)
    return console.info(
      'User notified of a successful appellate docket page upload'
    );
}
