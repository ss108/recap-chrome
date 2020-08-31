import {
  dispatchBackgroundFetch,
  searchParamsURL,
  courtListenerURL,
  authHeader,
  recapLinkURL,
} from '../utils';

export async function attachRecapLinks() {
  // get links
  // get pacer_doc_ids

  const clCourt = PACER.convertToCourtListenerCourt(this.court);

  const recapLinks = await dispatchBackgroundFetch({
    url: searchParamsURL({
      base: courtListenerURL('recap-query'),
      params: {
        docket_entry__docket__court: clCourt,
        pacer_doc_id__in: pacerDocIds,
      },
    }),
    options: {
      method: 'GET',
      headers: { ...authHeader },
    },
  });

  if (!recapLinks || recapLinks.count === 0)
    return console.warn('RECAP: No links found.');

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
      window.open(recapLinkURL(result.filepath_local));
    });

    // insert recapLink onto DOM adjacent to the pacer link
    return link.insertAdjacentElement('afterend', recapLink);
  });
  return;
}
