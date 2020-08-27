export async function handleAttachmentMenuPage() {
  console.log('handleAttachmentMenuPage');

  // check if this tab was opened by another and use that tabId
  // to get the relevant tabStorage
  const { openerTabId } = await checkForOpenerTabId();
  const tabId = openerTabId ? openerTabId : this.tabId;
  const tabStorage = await getItemsFromStorage(tabId);

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
    pacerCourt: this.court,
    pacerCaseId: tabStorage && tabStorage.caseId,
    htmlPage: document.documentElement.outerHTML,
    uploadType: 'ATTACHMENT_PAGE',
  };

  this.recap.uploadAppellatePage(params, (response) => {
    history.replaceState({ uploaded: true }, '');
    this.notifier.showUpload(
      'Attachment page uploaded to the public RECAP Archive',
      () => {}
    );
  });
}
