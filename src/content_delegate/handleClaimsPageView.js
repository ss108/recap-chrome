import PACER from '../pacer';

// FUNCTION PROTOTYPE START
export function handleClaimsPageView() {
  // return if not a claims register page
  if (!PACER.isClaimsRegisterPage(this.url, document)) return;

  // use the caseId if cached in element state
  // else extract it from the PACER helper
  const pacerCaseId = this.pacer_case_id
    ? this.pacer_case_id
    : PACER.getCaseIdFromClaimsPage(document);

  // render the page as a string
  const claimsPageHtml = document.documentElement.outerHTML;

  const msg = {
    error: 'RECAP: Page not uploaded to the public RECAP archive.',
    success: 'Claims page uploaded to the public RECAP archive.',
  };

  // upload it to recap
  this.recap.uploadClaimsRegister(
    this.court,
    pacerCaseId,
    claimsPageHtml,
    (ok) => {
      // callback - dispatch the notifier if upload is ok
      if (!ok) return console.error(msg.error);
      this.notifier.showUpload(msg.success, () => {});
    }
  );
}
