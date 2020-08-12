import PACER from '../pacer';
import { documentBanner } from '../utils';

// If this page offers a single document, ask RECAP whether it has the document.
export function handleSingleDocumentPageCheck() {
  // if not a singleDocument page, punt
  if (!PACER.isSingleDocumentPage(this.url, document)) return;

  const successMsg =
    'RECAP: Got results from API. ' +
    'Running callback on API results to insert link';

  // else check for availability and insert banners if so
  this.recap.getAvailabilityForDocuments(
    [this.pacer_doc_id],
    PACER.convertToCourtListenerCourt(this.court),
    (api_results) => {
      // tell the user we got results
      console.info(successMsg);

      // narrow results to links on the page
      const result = api_results.results.filter((obj) => {
        if (Object.keys(obj).length < 1) return;
        return obj.pacer_doc_id === this.pacer_doc_id;
      })[0];

      // don't do anything if there are no filtered results
      if (!result) return;
      // else append a recap banner at the end of the form
      document
        .querySelector('form')
        .appendChild(documentBanner({ path: result.filepath_local }));
    }
  );
}
