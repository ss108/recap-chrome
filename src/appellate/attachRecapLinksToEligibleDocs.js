import {
  dispatchBackgroundFetch,
  searchParamsURL,
  courtListenerURL,
  authHeader,
  recapLinkURL,
} from '../utils';
import PACER from '../pacer';

// Document links are contained in a table taking the following shape
// ------------------------------------------------------------------
//  <tr>
//    <td valign="top">09/01/2020</td>
//    <td valign="top" nowrap>
//      <a
//        href="https://ecf.cafc.uscourts.gov/docs1/01301646325"
//        onclick="return doDocPostURL('01301646325','16239');"
//        title="Open Document"
//      >
//        &nbsp;1&nbsp;
//      </a>
//    </td>
//    <td width="90%" valign="top">
//      Appeal docketed. Received: 08/31/2020. [718915]
//      <br>
//      Entry of Appearance is due on 09/15/2020. Certificate of Interest is due on 09/15/2020. [...]
//    </td>
//  </tr>

const parseDoDocPostURL = (str) => {
  const parseRegex = /\(\'(\d+)\',\'(\d+)\'\)/;
  const match = str.match(parseRegex);
  return {
    caseId: match[2],
    docId: match[1],
  };
};

const findDocLinksWithText = (nodeList) => {
  const links = [];
  Array.from(nodeList).map((a) => {
    // if it's not a document link, do nothing
    if (a.title !== 'Open Document') return;
    // else find the accompanying date and text and store with the link
    const tr = a.parentNode.parentNode;
    const { caseId, docId } = parseDoDocPostURL(a.getAttribute('onclick'));
    links.push({
      caseId,
      docId,
      anchor: a,
      date: tr.firstChild.textContent,
      text: tr.lastChild.textContent,
    });
  });
  return links;
};

// check every link in the document to see if RECAP has it
export async function attachRecapLinksToEligibleDocs() {
  // get links
  const links = findDocLinksWithText(this.links);

  const clCourt = PACER.convertToCourtListenerCourt(this.court);

  const pacerDocIds = links.map(({ docId }) => docId);

  const recapLinks = await dispatchBackgroundFetch({
    url: searchParamsURL({
      base: courtListenerURL('recap-query'),
      params: {
        docket_entry__docket__court: clCourt,
        pacer_doc_id__in: pacerDocIds.join(','),
      },
    }),
    options: {
      method: 'GET',
      headers: { ...authHeader },
    },
  });

  if (!recapLinks || recapLinks.count === 0) return console.warn('RECAP: No links found.');

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
