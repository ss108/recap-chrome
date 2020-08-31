import PACER from '../pacer';
import { getItemsFromStorage } from '../utils';

export async function handleCaseQueryPage() {
  console.log('handleCaseQuery');
  const inputs = [...document.querySelectorAll('input')];
  const pacerCaseId = PACER.getCaseIdFromAppellateCaseQueryPage(inputs);

  if (pacerCaseId) {
    await updateTabStorage({ [this.tabId]: { caseId: pacerCaseId } });
  }

  // don't upload more than once per session
  if (history.state && history.state.uploaded) {
    return;
  }

  // don't upload if the user disabled the option
  const options = await getItemsFromStorage('options');
  if (options.recap_enabled === false) {
    return;
  }

  const dataUrl = await blobToDataURL(
    new Blob([document.documentElement.outerHTML], { type: 'text/html' })
  );
  const stashed = await updateTabStorage({
    [this.tabId]: { file_blob: dataUrl },
  });

  if (!stashed)
    return console.error('RECAP: Unable to stash blob in store. Not Uploading.');
  // set params for upload

  const uploaded = dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      pacerCourt: PACER.convertToCourtListenerCourt(this.court),
      pacerCaseId: pacerCaseId,
      filepath_local: true,
      uploadType: 'CASE_QUERY',
      debug: false,
    },
  });

  if (!uploaded)
    return console.error('RECAP: File not uploaded. Something went wrong.');

  const notified = dispatchNotifier({
    title: 'appellate_case_query_page_uploaded',
    message: 'Case query page uploaded to the public RECAP Archive',
    action: 'showUpload',
  });

  if (notified) return console.info('RECAP: Notified user of successful upload');
}
