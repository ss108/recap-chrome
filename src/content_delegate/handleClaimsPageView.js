import PACER from '../pacer';
import {
  dispatchBackgroundFetch,
  courtListenerURL,
  authHeader,
  uploadType,
  dispatchNotifier,
} from '../utils';

export async function handleClaimsPageView() {
  // return if not a claims register page
  if (!PACER.isClaimsRegisterPage(this.url, document)) return;

  // use the caseId if cached in element state
  // else extract it from the PACER helper
  const pacerCaseId = this.pacer_case_id
    ? this.pacer_case_id
    : PACER.getCaseIdFromClaimsPage(document);

  // stash the page as a blob in the store
  const blob = new Blob([document.documentElement.innerHTML], { type: 'text/html' });
  const dataUrl = await blobToDataURL(blob);
  await saveItemToStorage({ [this.tabId]: dataUrl });

  // upload the page to RECAP
  const uploaded = await dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      headers: authHeader,
      body: {
        pacer_case_id: pacerCaseId,
        court: PACER.convertToCourtListenerCourt(this.court),
        filepath_local: true,
        upload_type: uploadType('CLAIMS_REGISTER_PAGE'),
      },
    },
  });

  if (!uploaded)
    return console.error('RECAP: Claims page not uploaded to the RECAP archive.');

  // dispatch notifier and log success
  const notified = await dispatchNotifier({
    action: 'showUpload',
    title: 'claims_page_upload_notification',
    message: 'Claims page uploaded to the public RECAP archive.',
  });

  if (notified.success)
    return console.info('User notified of successful claims page upload');
}
