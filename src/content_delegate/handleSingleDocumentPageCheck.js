import PACER from '../pacer';
import {
  documentBanner,
  dispatchBackgroundFetch,
  searchParamsURL,
  courtListenerURL,
  authHeader,
} from '../utils';

// If this page offers a single document, ask RECAP whether it has the document.
export async function handleSingleDocumentPageCheck() {
  // if not a singleDocument page, punt
  if (!PACER.isSingleDocumentPage(this.url, document)) return;

  const successMsg =
    'RECAP: Got results from API. ' +
    'Running callback on API results to insert link';

  const clCourt = PACER.convertToCourtListenerCourt(this.court);

  const recapDocumentCheck = await dispatchBackgroundFetch({
    url: searchParamsURL({
      base: courtListenerURL('recap-query'),
      params: {
        docket_entry__docket__court: clCourt,
        pacer_doc_id__in: this.pacer_doc_ids.join(','),
      },
    }),
    options: {
      method: 'GET',
      headers: authHeader,
    },
  });

  console.info(successMsg);

  if (!recapDocumentCheck.results) {
    return console.warn('Recap: No documents found');
  }

  // narrow results to links on the page
  const result = recapDocumentCheck.results.find(
    (r) => r.pacer_doc_id === this.pacer_doc_id
  );

  // don't do anything if there are no filtered results
  if (!result) return;

  // else append a recap banner at the end of the form
  document
    .querySelector('form')
    .appendChild(documentBanner({ path: result.filepath_local }));
}
