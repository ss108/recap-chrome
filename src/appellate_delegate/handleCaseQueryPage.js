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

  // set params for upload
  const params = {
    pacerCaseId: pacerCaseId,
    htmlPage: document.documentElement.outerHTML,
    uploadType: 'CASE_QUERY',
    pacerCourt: this.court,
  };

  this.recap.uploadAppellatePage(
    params,
    // send a callback for now to mimic contentDelegate
    (response) => {
      history.replaceState({ uploaded: true }, '');
      this.notifier.showUpload(
        'Case query page uploaded to the public RECAP Archive',
        () => {}
      );
    }
  );
}
