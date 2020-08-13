import PACER from '../pacer';
import { debug, updateTabStorage } from '../utils';
// Use a variety of approaches to get and store pacer_doc_id to pacer_case_id
// mappings in local storage.
export function findAndStorePacerDocIds() {
  // no cookie, no love
  if (!PACER.hasPacerCookie(document.cookie)) return;

  // Not all pages have a case ID, and there are corner-cases in merged dockets
  // where there are links to documents on another case.
  const page_pacer_case_id = this.pacer_case_id
    ? this.pacer_case_id
    : this.recap.getPacerCaseIdFromPacerDocId(this.pacer_doc_id, () => {});

  const docsToCases = {};

  // Try getting a mapping from a pacer_doc_id in the URL to a
  if (
    this.pacer_doc_id &&
    page_pacer_case_id &&
    typeof page_pacer_case_id === 'string'
  ) {
    debug(3, `Z doc ${this.pacer_doc_id} to ${page_pacer_case_id}`);
    docsToCases[this.pacer_doc_id] = page_pacer_case_id;
  }

  [...this.links].map((link) => {
    // do nothing if the link is not to a document URL
    if (!PACER.isDocumentUrl(link.href)) return;

    // find the pacer_doc_id and store it in data-attribute
    const pacer_doc_id = PACER.getDocumentIdFromUrl(link.href);
    link.dataset.pacer_doc_id = pacer_doc_id;

    // add the pacer_doc_id to the delegate instance
    this.pacer_doc_ids.push(pacer_doc_id);

    // if you have a goDLS Id, associate it in object
    const goDLS = PACER.parseGoDLSFunction(link.getAttribute('onclick'));
    if (goDLS && goDLS.de_caseid) {
      debug(3, `Y doc ${pacer_doc_id} to ${goDLS.de_caseid}`);
      return (docsToCases[pacer_doc_id] = goDLS.de_caseid);
    }
    // else if you have a page_pacer_case_id, associate that
    if (page_pacer_case_id) {
      debug(3, `X doc ${pacer_doc_id} to ${page_pacer_case_id}`);
      return (docsToCases[pacer_doc_id] = page_pacer_case_id);
    }
  });

  const payload = { docsToCases };
  // add docId to store if it exists
  if (!!this.pacer_doc_id) {
    payload['docId'] = this.pacer_doc_id;
  }
  // add caseId to store if it is a docketQueryUrl
  if (PACER.isDocketQueryUrl(this.url) && page_pacer_case_id) {
    payload['caseId'] = page_pacer_case_id;
  }
  // save JSON object in chrome storage under the tabId
  updateTabStorage({ [this.tabId]: payload });
}
