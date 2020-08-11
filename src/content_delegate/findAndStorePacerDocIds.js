// Use a variety of approaches to get and store pacer_doc_id to pacer_case_id
// mappings in local storage.
export const findAndStorePacerDocIds = () => {
  if (!PACER.hasPacerCookie(document.cookie)) {
    return;
  }

  // Not all pages have a case ID, and there are corner-cases in merged dockets
  // where there are links to documents on another case.
  const page_pacer_case_id = this.pacer_case_id
    ? this.pacer_case_id
    : this.recap.getPacerCaseIdFromPacerDocId(this.pacer_doc_id, () => {});

  let docsToCases = {};

  // Try getting a mapping from a pacer_doc_id in the URL to a
  if (
    this.pacer_doc_id &&
    page_pacer_case_id &&
    typeof page_pacer_case_id === 'string'
  ) {
    debug(3, `Z doc ${this.pacer_doc_id} to ${page_pacer_case_id}`);
    docsToCases[this.pacer_doc_id] = page_pacer_case_id;
  }

  for (let i = 0; i < this.links.length; i++) {
    let link = this.links[i];
    if (PACER.isDocumentUrl(link.href)) {
      let pacer_doc_id = PACER.getDocumentIdFromUrl(link.href);
      $(link).data('pacer_doc_id', pacer_doc_id);
      this.pacer_doc_ids.push(pacer_doc_id);

      let onclick = link.getAttribute('onclick');
      let goDLS = PACER.parseGoDLSFunction(onclick);

      if (goDLS && goDLS.de_caseid) {
        docsToCases[pacer_doc_id] = goDLS.de_caseid;
        debug(3, `Y doc ${pacer_doc_id} to ${goDLS.de_caseid}`);
      } else if (page_pacer_case_id) {
        docsToCases[pacer_doc_id] = page_pacer_case_id;
        debug(3, `X doc ${pacer_doc_id} to ${page_pacer_case_id}`);
      }
    }
  }
  // save JSON object in chrome storage under the tabId
  // append caseId if a docketQueryUrl
  const payload = {
    docsToCases: docsToCases,
  };
  if (!!this.pacer_doc_id) {
    payload['docId'] = this.pacer_doc_id;
  }
  if (PACER.isDocketQueryUrl(this.url) && page_pacer_case_id) {
    payload['caseId'] = page_pacer_case_id;
  }
  updateTabStorage({
    [this.tabId]: payload,
  });
};
