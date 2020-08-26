import {
  inlineDocumentBanner,
  dispatchBackgroundFetch,
  searchParamsURL,
  courtListenerURL,
  fetchGetOptions,
  authHeader,
  recapLinkURL,
} from '../utils';
import PACER from '../pacer';

const msg = {
  noLinks: 'RECAP: No eligible documents found',
  yesLinks: (count) =>
    `RECAP: Attaching links to all eligible documents (${count} found)`,
  error: 'RECAP: Failed getting availability for dockets.',
  success:
    'RECAP: Got results from API. Running callback on API results to ' +
    'attach links and icons where appropriate.',
};

// Check every link in the document to see if there is a free RECAP document
// available. If there is, put a link with a RECAP icon.
export async function attachRecapLinkToEligibleDocs() {
  // check if links exist and return if none eligible
  if (this.pacer_doc_ids.length === 0) return console.info(msg.noLinks);

  // tell the user we've got links
  console.info(msg.yesLinks(this.pacer_doc_ids.length));

  // Ask the server whether any of these documents are available from RECAP.

  const clCourt = PACER.convertToCourtListenerCourt(this.court);

  // submit fetch request through background worker
  const recapLinks = await dispatchBackgroundFetch({
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

  // return if there are no results
  if (!recapLinks) return console.error(msg.error);

  // tell the user we've got results from the API
  console.info(msg.success);

  [...this.links].map((link) => {
    // get data-attr from link
    const pacer_doc_id = link.dataset.pacer_doc_id;

    // if data attribute doesn't exist, exit
    if (!pacer_doc_id) return;

    // find the corresponding link in the dom
    const result = recapLinks.results.find((r) => r.pacer_doc_id === pacer_doc_id);

    // no result, punt
    if (!result) return;

    const recapLink = inlineDocumentBanner({ path: result.filepath_local });

    console.log(recapLink);
    // attach event listener
    recapLink.addEventListener('click', (ev) => {
      // stop the native clickhandler from firing;
      ev.preventDefault();
      this.handleRecapLinkClick(window, recapLinkURL(result.filepath_local));
    });

    // insert recapLink onto DOM adjacent to the pacer link
    return link.insertAdjacentElement('afterend', recapLink);
  });
  return;
}
