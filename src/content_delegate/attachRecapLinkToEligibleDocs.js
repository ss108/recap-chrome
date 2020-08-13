import { inlineDocumentBanner } from '../utils';
// Check every link in the document to see if there is a free RECAP document
// available. If there is, put a link with a RECAP icon.
export function attachRecapLinkToEligibleDocs() {
  let linkCount = this.pacer_doc_ids.length;
  console.info(
    `RECAP: Attaching links to all eligible documents (${linkCount} found)`
  );
  if (linkCount === 0) return;

  const successMsg =
    'RECAP: Got results from API. Running callback on API results to ' +
    'attach links and icons where appropriate.';

  // Ask the server whether any of these documents are available from RECAP.
  this.recap.getAvailabilityForDocuments(
    this.pacer_doc_ids,
    this.court,
    (api_results) => {
      // tell the user we've got results
      console.info(successMsg);

      [...this.links].map((link) => {
        // get data attribute using jquery
        const pacer_doc_id = link.dataset.pacer_doc_id;

        // if data attribute doesn't exist, exit
        if (!pacer_doc_id) return;

        // find the corresponding link in the dom
        const result = api_results.results.find((obj) => {
          if (Object.keys(obj).length < 1) return;
          return obj.pacer_doc_id === pacer_doc_id;
        });

        // no result, punt
        if (!result) return;

        const recapLink = inlineDocumentBanner({ path: result.filepath_local });
        // insert link onto DOM
        link.insertAdjacentElement('afterend', recapLink);
        // attach event listener
        recapLink.addEventListener('click', (ev) => {
          ev.preventDefault();
          this.handleRecapLinkClick(
            window,
            `https://www.courtlistener.com/${result.filepath_local}`
          );
        });
      });
    }
  );
}
