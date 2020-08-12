import PACER from '../pacer';
// If this is a document's menu of attachments (subdocuments),
// upload it to RECAP.
export function handleAttachmentMenuPage() {
  // if document already uploaded, do nothing
  if (history.state && history.state.uploaded) return;

  // if not an attachment page, do nothing
  if (!PACER.isAttachmentMenuPage(this.url, document)) return;

  const disabledMsg = 'RECAP: Not uploading attachment menu. RECAP is disabled';
  const successMsg = 'Menu page uploaded to the public RECAP Archive.';

  // check if the user enabled recap
  chrome.storage.local.get('options', (items) => {
    // return the disabled message if it isn't
    if (!items.options.recap_enabled) {
      return console.info(disabledMsg);
    }

    //otherwise upload to recap and call notifier
    this.recap.uploadAttachmentMenu(
      this.court,
      this.pacer_case_id,
      document.documentElement.innerHTML,
      (ok) => {
        if (!ok) return;
        history.replaceState({ uploaded: true }, '');
        this.notifier.showUpload(successMsg, () => {});
      }
    );
  });
}
