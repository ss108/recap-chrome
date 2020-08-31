// dispatch associated handler
export function dispatchTargetHandler() {
  if (this.targetPage === 'caseQuery') {
    this.handleCaseQueryPage();
  } else if (this.targetPage === 'caseSearchResults') {
    this.handleCaseSearchResultsPage();
  } else if (this.targetPage === 'downloadConfirmation') {
    this.handleDownloadConfirmationPage();
  } else if (this.targetPage === 'attachmentMenu') {
    this.handleAttachmentMenuPage();
  } else if (this.targetPage === 'fullDocketSearch') {
    this.handleFullDocketSearchPage();
  } else if (
    this.targetPage === 'caseSearch' ||
    this.targetPage === 'advancedCaseSearch'
  ) {
    this.handleCaseSearchPage();
  } else if (this.targetPage === 'fullDocket' || this.targetPage === 'shortDocket') {
    this.handleDocketPage();
  }
}
