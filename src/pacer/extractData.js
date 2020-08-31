import { isDocumentUrl } from './setTarget';
import { parseGoDLSFunction } from './links';
import { debug, getHostname } from '../utils';
// EXTRACT DATA FROM URL

// Gets the last path component of a URL.
export function getBaseNameFromUrl(url) {
  return url.replace(/\?.*/, '').replace(/.*\//, '');
}

export function getCourtFromUrl(url) {
  let match = (url || '').toLowerCase().match(/^\w+:\/\/(ecf|pacer)\.(\w+)\.uscourts\.gov\//);
  return match ? match[2] : null;
}

// Returns the document ID for a document view page or single-document page.
export function getDocumentIdFromUrl(url) {
  let match = (url || '').match(/\/(?:doc1|docs1)\/(\d+)/);
  if (match) {
    // PACER sites use the fourth digit of the pacer_doc_id to flag whether
    // the user has been shown a receipt page.  We don't care about that, so
    // we always set the fourth digit to 0 when getting a doc ID.
    return `${match[1].slice(0, 3)}0${match[1].slice(4)}`;
  }
}
// EXTRACT DATA FROM DOCUMENT ELEMENT
export function getCaseIdFromAppellateDocketPage(anchors) {
  const anchor = anchors.find((anchor) => anchor.title === 'Open Document');
  // check the anchors for the title "Open Document" - present on short and full dockets
  // and caseId which will be the second argument in the onclick function
  // for example <a onclick="return doDocPostURL('00107526453','45856') " title="Open Document"></a>
  if (anchor) {
    const onclickString = anchor.attributes.onclick.value;
    // find single quote five digits single quote followed by closing paren
    const caseId = onclickString.match(/\'\d{4,6}\'/)[0];
    return caseId.replace(/\'/g, '');
  }
}

export function getCaseIdFromAppellateCaseQueryPage(inputs) {
  // check the inputs for a value named caseid - present on case query page
  const input = inputs.find((input) => input.name === 'caseid' && !!input.value);
  if (input) {
    return input.value;
  }
}

export function getCaseIdFromAppellateSearchResults(anchors) {
  // only return caseid if between 4 and 6 non-broken digits (can modify)
  const anchor = anchors.find((anchor) => anchor.href.match(/caseid=\d{4,6}/));
  if (!!anchor) {
    const match = anchor.href.match(/caseid=\d{4,6}/)[0];
    return match.replace('caseid=', '');
  }
}
export function getCaseIdFromClaimsPage(document) {
  const links = [...document.querySelectorAll('a')];
  const docketLink = links.find((link) => link.href.match(/DktRpt\.pl/));
  if (docketLink) {
    const match = docketLink.href.match(/\?\d+/);
    return match[0].slice(1);
  }
}
// Get the document ID for a document view page using the "View Document"
// form.
export function getDocumentIdFromForm(url, document) {
  if (isDocumentUrl(url)) {
    let inputs = document.getElementsByTagName('input');
    let last_input = inputs[inputs.length - 1];
    if (inputs.length && last_input.value === 'View Document') {
      // Grab the document ID from the form's onsubmit attribute
      let onsubmit = last_input.form.getAttribute('onsubmit');
      let goDLS = parseGoDLSFunction(onsubmit);
      return goDLS && getDocumentIdFromUrl(goDLS.hyperlink);
    }
  }
}

// Given a URL that satisfies isDocketQueryUrl, gets its case number.
export function getCaseNumberFromUrls(urls) {
  // Iterate over an array of URLs and get the case number from the
  // first one that matches. Because the calling function may pass us URLs
  // other than the page URL, such as referrers, we narrow to
  // *uscourts.gov. (Page URLs are so limited by the "include_globs" in
  // manifest.json; but referrers are not.)
  for (let url of urls) {
    let hostname = getHostname(url);
    // JS is trash. It lacks a way of getting the TLD, so we use endsWith.
    if (hostname.endsWith('uscourts.gov')) {
      let match;
      for (let re of [
        // Appellate CMECF sends us some odd URLs, be aware:
        // https://ecf.mad.uscourts.gov/cgi-bin/DktRpt.pl?caseNumber=1:17-cv-11842-PBS&caseId=0
        // https://ecf.mad.uscourts.gov/cgi-bin/DktRpt.pl?caseNumber=1:17-cv-11842-PBS&caseId=1:17-cv-11842-PBS
        /[?&]caseid=(\d+)/i, // match on caseid GET param
        /\?(\d+)(?:&.*)?$/, // match on DktRpt.pl?178502&blah urls
      ]) {
        match = url.match(re);
        if (match) {
          debug(3, `Found caseid via: ${match[0]}`);
          if (match[1] === '0') {
            // Appellate CMECF calls District CMECF with caseId=0 when it doesn't
            // know the caseid. Ignore that special case here.
            continue;
          }
          return match[1];
        }
      }
      match = url.match(/[?&]caseNum=([-\d]+)/);
      if (match) {
        // Appellate. Actually this is a docket number. Uhoh? xxx
        debug(3, `Found caseNum via: ${match[0]}`);
        return match[1];
      }
      match = url.match(/[?&]caseId=([-\d]+)/);
      if (match) {
        debug(3, `Found caseId via: ${match[0]}`);
        // Also seen in appellate. Note uppercase 'I' and hyphens. Actual caseID. xxx
        return match[1];
      }
    }
  }
}
export function getCaseNumberFromInputs(url, document) {
  if (isDocumentUrl(url)) {
    let inputs = document.getElementsByTagName('input');
    let last_input = inputs[inputs.length - 1];
    if (inputs.length && last_input.value === 'Download All') {
      // Attachment page.
      let onclick = last_input.getAttribute('onclick');
      let match = onclick.match(/[?&]caseid=(\d+)/i);
      if (match && match[1] !== '0') {
        return match[1];
      }
    } else if (inputs.length && last_input.value === 'View Document') {
      // Download receipt page.
      let onsubmit = last_input.form.getAttribute('onsubmit');
      let goDLS = parseGoDLSFunction(onsubmit);
      return goDLS && goDLS.de_caseid;
    }
  }
}
