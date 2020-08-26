import PACER from '../pacer';
import {
  blobToDataURL,
  getItemsFromStorage,
  dispatchBackgroundFetch,
  courtListenerURL,
  authHeader,
  jsonHeader,
  uploadType,
  dispatchNotifier,
  saveItemToStorage,
} from '../utils';

const msg = {
  disabled: 'RECAP: Not uploading attachment menu. RECAP is disabled',
  error: 'Uploading failed. Please check logs for more information.',
};

export async function handleAttachmentMenuPage() {
  // don't do anything if already uploaded or if it is not
  // an attachment menu page
  if (history.state && history.state.uploaded) return;
  if (!PACER.isAttachmentMenuPage(this.url, document)) return;

  // check if the user enabled recap by fetching the options store
  const options = await getItemsFromStorage('options');
  if (!options.recap_enabled) return console.info(msg.disabled);

  // save the page as a blob in storage
  const dataUrl = await blobToDataURL(
    new Blob([document.documentElement.innerHTML], { type: 'text/html' })
  );
  await saveItemToStorage({ [this.tabId]: { ['file_blob']: dataUrl } });

  const uploaded = await dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      headers: authHeader,
      body: {
        pacer_case_id: this.pacer_case_id,
        court: PACER.convertToCourtListenerCourt(this.court),
        filepath_local: true,
        upload_type: uploadType('ATTACHMENT_PAGE'),
        debug: false,
      },
    },
  });

  if (!uploaded) return console.error('RECAP: Attachment page not uploaded');

  // indicate to browser that we've already uploaded the page
  history.replaceState({ uploaded: true }, '');

  // dispatch notifier and log success
  const notified = await dispatchNotifier({
    action: 'showUpload',
    title: 'attachment_page_upload_notification',
    message: 'Menu page uploaded to the public RECAP Archive.',
  });

  if (notified.success)
    return console.info('User notified of successful attachment page upload');
}
