import PACER from '../pacer';
import {
  dispatchBackgroundFetch,
  courtListenerURL,
  authHeader,
  uploadType,
} from '../utils';

// FUNCTION PROTOTYPE START
export async function handleClaimsPageView() {
  // return if not a claims register page
  if (!PACER.isClaimsRegisterPage(this.url, document)) return;

  // use the caseId if cached in element state
  // else extract it from the PACER helper
  const pacerCaseId = this.pacer_case_id
    ? this.pacer_case_id
    : PACER.getCaseIdFromClaimsPage(document);

  // render the page as a string

  const msg = {
    error: 'RECAP: Page not uploaded to the public RECAP archive.',
    success: 'Claims page uploaded to the public RECAP archive.',
  };

  const clCourt = PACER.convertToCourtListenerCourt(this.court);
  // otherwise stash the blob in the store
  const dataUrl = await blobToDataURL(
    new Blob([document.documentElement.innerHTML], { type: 'text/html' })
  );
  await saveItemToStorage({ [this.tabId]: dataUrl });

  const claimsUpload = await dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      headers: authHeader,
      body: {
        pacer_case_id: pacerCaseId,
        court: clCourt,
        filepath_local: true,
        upload_type: uploadType('CLAIMS_REGISTER_PAGE'),
      },
    },
  });

  if (!claimsUpload) return console.error(msg.erro);
  this.notifier.showUpload(msg.success, () => {});
}
