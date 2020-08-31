// Parse the goDLS function returning its parameters as a dict.
export function parseGoDLSFunction(goDLS_string) {
  // CMECF provides extra information on Document Links (DLS?) in the goDLS()
  // function of an onclick handler, e.g.:
  //
  //   <a href="https://ecf.mad.uscourts.gov/doc1/09518360046"
  //      onclick="goDLS('/doc1/09518360046','153992','264','','','1','','');
  //               return(false);">95</a>
  //
  // This is similarly used in the onsubmit function of some forms.
  //
  // The parameters are defined in the unminified js
  //   https://ecf.flnd.uscourts.gov/lib/dls_url.js
  // as:
  //   function goDLS(hyperlink, de_caseid, de_seqno, got_receipt,
  //                  pdf_header, pdf_toggle_possible, magic_num, hdr)
  //
  // Bankruptcy courts provide ten parameters, instead of eight. These can
  // be found in unminified js:
  //   https://ecf.paeb.uscourts.gov/lib/dls_url.js
  // as:
  //   function goDLS(hyperlink, de_caseid, de_seqno, got_receipt,
  //                  pdf_header, pdf_toggle_possible, magic_num,
  //                  claim_id, claim_num, claim_doc_seq)
  // Δ:
  // - hdr
  // + claim_id, claim_num, claim_doc_seq
  let goDlsDistrict = /^goDLS\('([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)'\)/.exec(
    goDLS_string
  );
  let goDlsBankr = /^goDLS\('([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)'\)/.exec(
    goDLS_string
  );
  if (!goDlsDistrict && !goDlsBankr) {
    return null;
  }
  let r = {};
  if (goDlsDistrict) {
    [
      ,
      r.hyperlink,
      r.de_caseid,
      r.de_seqno,
      r.got_receipt,
      r.pdf_header,
      r.pdf_toggle_possible,
      r.magic_num,
      r.hdr,
    ] = goDlsDistrict;
  } else {
    [
      ,
      r.hyperlink,
      r.de_caseid,
      r.de_seqno,
      r.got_receipt,
      r.pdf_header,
      r.pdf_toggle_possible,
      r.magic_num,
      r.claim_id,
      r.claim_num,
      r.claim_doc_seq,
    ] = goDlsBankr;
  }
  return r;
}
