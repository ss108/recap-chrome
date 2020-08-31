import PACER from '../pacer';
import {
  getItemsFromStorage,
  checkForOpenerTabId,
  updateTabStorage,
  blobToDataURL,
  dispatchNotifier,
  dispatchBackgroundFetch,
  courtListenerURL,
} from '../utils';

export async function handleAttachmentMenuPage() {
  console.log('handleAttachmentMenuPage');

  // check if this tab was opened by another and use that tabId
  // to get the relevant tabStorage
  const { openerTabId } = await checkForOpenerTabId();
  const tabId = openerTabId ? openerTabId : this.tabId;
  const tabStorage = await getItemsFromStorage(tabId);

  // don't upload more than once per session
  if (history.state && history.state.uploaded)
    return console.info('RECAP: Document already uploaded.');

  // don't upload if the user disabled the option
  const options = await getItemsFromStorage('options');
  if (!options.recap_enabled)
    return console.warn('RECAP: Uploads disabled. Exiting.');

  const dataUrl = await blobToDataURL(
    new Blob([document.documentElement.outerHTML], { type: 'text/html' })
  );
  const stashed = await updateTabStorage({
    [this.tabId]: { file_blob: dataUrl },
  });

  if (!stashed)
    return console.error('RECAP: Unable to stash blob in store. Not Uploading.');

  const uploaded = dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      pacerCourt: PACER.convertToCourtListenerCourt(this.court),
      pacerCaseId: tabStorage ? tabStorage.caseId : undefined,
      filepath_local: true,
      uploadType: 'ATTACHMENT_PAGE',
      debug: false,
    },
  });

  if (!uploaded)
    return console.error('RECAP: File not uploaded. Something went wrong.');

  const notified = dispatchNotifier({
    title: 'appellate_attachment_page_uploaded',
    message: 'Attachment page uploaded to the public RECAP Archive',
    action: 'showUpload',
  });

  if (notified) return console.info('RECAP: Notified user of successful upload');
}
