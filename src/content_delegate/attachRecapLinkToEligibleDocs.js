import $ from 'jquery';
import {inlineDocumentBanner} from '../utils'
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

      [...this.links].map(link => {
        const pacer_doc_id = $(this.links[i]).data('pacer_doc_id');
        if (!pacer_doc_id) return;
        
        const result = api_results.results.filter((obj) => {
          if (Object.keys(obj).length < 1) return;
          return obj.pacer_doc_id === pacer_doc_id;
        })[0];

        if (!result) return;
      })
      for (let i = 0; i < this.links.length; i++) {
        if (!pacer_doc_id) {
          continue;
        }
        if (!result) {
          continue;
        }
        let href = `https://www.courtlistener.com/${result.filepath_local}`;
        let recap_link = $('<a/>', {
          class: 'recap-inline',
          title: 'Available for free from the RECAP Archive.',
          href: href,
        });
        recap_link.click(
          $.proxy(this.handleRecapLinkClick, this, window, href)
        );
        recap_link.append(
          $('<img/>').attr({
            src: chrome.extension.getURL('icon-16.png'),
          })
        );
        recap_link.insertAfter(this.links[i]);
      }
    }, this)
  );
}
