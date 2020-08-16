import PACER from '../pacer';
import { debug, extractUrlFromZipFileDownloadPage, isAppendixPage } from '../utils';
// Same as handleSingleDocumentPageView, but for zip files
export function handleZipFilePageView() {
  // return if not the download all page
  if (!PACER.isDownloadAllDocumentsPage(this.url, document)) {
    return;
  }

  // return if on the appellate courts
  if (PACER.isAppellateCourt(this.court)) {
    return debug(4, 'No interposition for appellate downloads yet');
  }

  const url = extractUrlFromZipFileDownloadPage();

  // return if on an appendix page
  if (isAppendixPage(url)) {
    return debug(4, 'No interposition for appendix page downloads yet');
  }

  disableDownloadButtonsAndInsertClickListeners();

  // When we receive the message from the new buttons, submit the form
  // via fetch so we can get the document before the browser does.
  window.addEventListener('message', this.onDownloadAllSubmit.bind(this));
}
