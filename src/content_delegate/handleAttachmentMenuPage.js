import PACER from '../pacer';

export function handleAttachmentMenuPage() {
  // don't do anything if already uploaded or if it is not
  // an attachment menu page
  if (history.state && history.state.uploaded) return;
  if (!PACER.isAttachmentMenuPage(this.url, document)) return;

  const msg = {
    disabled: 'RECAP: Not uploading attachment menu. RECAP is disabled',
    success: 'Menu page uploaded to the public RECAP Archive.',
    error: 'Uploading failed. Please check logs for more information.',
  };

  // check if the user enabled recap by fetching the options store
  chrome.storage.local.get('options', (items) => {
    // return the disabled message if it isn't
    if (!items.options.recap_enabled) return console.info(msg.disabled);

    // upload the attachment menu page to RECAP and dispatch the notifier
    this.recap.uploadAttachmentMenu(
      this.court,
      this.pacer_case_id,
      document.documentElement.innerHTML,
      (ok) => {
        if (!ok) return console.error(msg.error);
        history.replaceState({ uploaded: true }, '');
        this.notifier.showUpload(msg.success, () => {});
      }
    );
  });
}
