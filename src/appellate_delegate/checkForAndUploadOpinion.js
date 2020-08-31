import PACER from '../pacer';
import {
  courtListenerURL,
  authHeader,
  getBrowserFetch,
  blobToDataURL,
  updateTabStorage,
  dispatchBackgroundFetch,
  dispatchNotifier,
  searchParamsURL,
} from '../utils';

// check if the opinion is free to download and if so
// fetch it and upload it to recap in the background
export async function checkForAndUploadOpinion({ pacerCaseId }) {
  const trs = [...document.querySelectorAll('tr')];
  const opinionTr = trs.find((tr) => {
    if ([...tr.children].length > 0) {
      const match = [...tr.children].find(
        (td) => td.textContent.match(/OPINION/) && td.width === '90%'
      );
      if (match) {
        return true;
      }
    }
  });
  const link = opinionTr && opinionTr.querySelector('a');
  if (!link) return console.info('RECAP: No opinion link found. Not uploading.');

  const params = {
    caseId: pacerCaseId,
    dls_id: link.href.match(/docs1\/(\d+)/)[1],
    servlet: 'ShowDoc',
    dktType: 'dktPublic',
  };

  const url = searchParamsURL({ base: document.URL.replace(/\?.*$/, ''), params });

  const contentScriptFetch = getBrowserFetch();
  const blob = await contentScriptFetch(url).then((res) => res.blob());

  if (!blob || !blob.type.includes('pdf'))
    return console.info(
      'RECAP: Not uploading. No blob or incorrect blob type found.'
    );

  const dataUrl = await blobToDataURL(blob);

  const stashedInStorage = await updateTabStorage({
    [this.tabId]: { ['file_blob']: dataUrl },
  });

  if (!stashedInStorage)
    return console.error('RECAP: Blob not stashed in storage. Not uploading.');

  const uploaded = dispatchBackgroundFetch({
    url: courtListenerURL('recap'),
    options: {
      method: 'POST',
      headers: { ...authHeader },
      body: {
        court: PACER.convertToCourtListenerCourt(this.court),
        pacerCaseId: pacerCaseId,
        pacerDocId: params.dls_id,
      },
    },
  });

  if (!uploaded)
    return console.error('RECAP: Opinion not uploaded. Something went wrong.');

  const notified = dispatchNotifier({
    title: 'successful_free_opinion_upload',
    action: 'showUpload',
    message: 'Case Opinion automatically uploaded to the public RECAP Archive.',
  });

  if (notified) console.info('RECAP: User notified of successful upload.');
}
