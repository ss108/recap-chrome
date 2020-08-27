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
  if (history.state && history.state.uploaded) {
    return;
  }

  // don't upload if the user disabled the option
  const options = await getItemsFromStorage('options');
  if (options.recap_enabled === false) {
    return;
  }

  const params = {
    pacerCaseId,
    htmlPage: document.documentElement.outerHTML,
    uploadType: this.targetPage === 'fullDocket' ? 'FULL_DOCKET' : 'SHORT_DOCKET',
    pacerCourt: this.court,
  };

  console.log('made it to upload appellate page!');
  // upload page through recap instance
  this.recap.uploadAppellatePage(params, (response) => {
    history.replaceState({ uploaded: true }, '');
    this.notifier.showUpload(
      'Docket page uploaded to the public RECAP Archive',
      () => {}
    );
  });
}
