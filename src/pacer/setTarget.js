import $ from 'jquery';
import { debug } from '../utils';
import { getCourtFromUrl } from './extractData';
import { APPELLATE_COURTS } from './courts';
// Returns true if the given court identifier is for an appellate court.
export function isAppellateCourt(court) {
  return APPELLATE_COURTS.includes(court);
}
// Returns true if the given URL looks like a link to a PACER document.
// For CMECF District:
//   https://ecf.dcd.uscourts.gov/doc1/04503837920
// For CMECF Appellate:
//   https://ecf.ca2.uscourts.gov/docs1/00205695758
export function isDocumentUrl(url) {
  if (
    url.match(/\/(?:doc1|docs1)\/\d+/) ||
    url.match(/\/cgi-bin\/show_doc/) ||
    url.match(/servlet=ShowDoc/)
  ) {
    if (getCourtFromUrl(url)) {
      return true;
    }
  }
  return false;
}

// Returns true if the URL is for docket query page.
export function isDocketQueryUrl(url) {
  // The part after the "?" is all digits.
  return !!url.match(/\/(DktRpt|HistDocQry)\.pl\?\d+$/);
}

// Returns true if the given URL is for a docket display page (i.e. the page
// after submitting the "Docket Sheet" query page).
export function isDocketDisplayUrl(url) {
  // The part after the "?" has hyphens in it.
  //   https://ecf.dcd.uscourts.gov/cgi-bin/DktRpt.pl?591030040473392-L_1_0-1
  // Appellate:
  //   https://ecf.ca1.uscourts.gov/n/beam/servlet/TransportRoom?servlet=CaseSummary.jsp&caseNum=16-1567&incOrigDkt=Y&incDktEntries=Y
  if (url.match(/\/DktRpt\.pl\?\w+-[\w-]+$/)) {
    return true;
  }

  // Regular expression to match on Appellate pages, and if a
  // servlet is specified, to return it as a captured group.
  // If no servlet is specified, it's returned as undefined, which
  // is properly handled in the switch block.
  //
  // The RE is a bit complicated, so let's break it down:
  //
  //   servlet\/TransportRoom # 1: The string servlet/TransportRoom
  //   (?:\?servlet=          # 2: An OPTIONAL, TERMINAL, NON-CAPTURING
  //                          #    group that contains ?servlet=
  //     ([^?&]+)             # 3: A CAPTURING group of >1 non-? or &
  //                          #    chars, as they'd delimit another
  //                          #    url parameter.
  //     (?:[\/&#;].*)?       # 4: An OPTIONAL, NON-CAPTURING group of a
  //                          #    /, &, #, or ; char, followed by
  //                          #    anything at all, which would be
  //                          #    one or more url parameters.
  //   )?                     # Closing of (2) and making it optional
  //   $                      # Making (2) terminal
  //
  // xxx: This would match on
  //   https://ecf.ca1.uscourts.gov/n/beam/underservlet/
  // xxx: This presumes ?servlet= is the first parameter, would fail on
  //   /servlet/TransportRoom?caseId=44381&servlet=DocketReportFilter.jsp
  // xxx: This will if a terminal slash precedes the parameter section:
  //   /servlet/TransportRoom/?...
  let re = /servlet\/TransportRoom(?:\?servlet=([^?&]+)(?:[\/&#;].*)?)?$/;
  let match = url.match(re);
  if (match) {
    let servlet = match[1];
    debug(4, `Identified appellate servlet ${servlet} at ${url}`);

    switch (servlet) {
      case 'CaseSummary.jsp':
      case 'ShowPage': // what is this?
      case undefined:
        return true;

      default:
        debug(4, `Assuming servlet ${servlet} is not a docket.`);
        return false;

      case 'CaseSearch.jsp':
      case 'ShowDoc':
      case 'ShowDocMulti':
      case 'CaseSelectionTable':
      case 'CourtInfo.jsp':
      case 'DocketReportFilter.jsp':
      case 'InvalidUserLogin.jsp':
      case 'OrderJudgment.jsp':
      case 'PACERCalendar.jsp':
      case 'PacerHelp.jsp':
      case 'PACEROpinion.jsp':
      case 'Login':
      case 'k2aframe.jsp': // attorney/java?
      case 'k2ajnlp.jsp':
      case 'RSSGenerator': // maybe we should upload rss?
      case 'PaymentHistory':
      case 'ChangeClient.jsp':
        return false;
    }
  } else {
    return false;
  }
}

// Returns true if the given URL is for a docket history display page.
export function isDocketHistoryDisplayUrl(url) {
  return !!url.match(/\/HistDocQry\.pl\?\w+-[\w-]+$/);
}

// Returns true if this is a "Document Selection Menu" page (a list of the
// attachments for a particular document).
export function isAttachmentMenuPage(url, document) {
  let inputs = document.getElementsByTagName('input');
  let pageCheck =
    isDocumentUrl(url) && inputs.length && inputs[inputs.length - 1].value === 'Download All';
  return !!pageCheck;
}

// Returns true if this is a "Download Documents" page (confirmation of
// pricing for all documents to receive a zip file with all of them)
export function isDownloadAllDocumentsPage(url, document) {
  let inputs = document.getElementsByTagName('input');
  let pageCheck =
    !!url.match(/\/show_multidocs\.pl\?/) &&
    inputs.length &&
    inputs[inputs.length - 1].value === 'Download Documents';
  return !!pageCheck;
}

// Claims Register Page includes an h2 tag with the court and words "Claims Register"
// exampleUrl: https://ecf.nyeb.uscourts.gov/cgi-bin/SearchClaims.pl?610550152546515-L_1_0-1
// exampleHeader: <h2>Eastern District of New York<br>Claims Register </h2>

export function isClaimsRegisterPage(url, document) {
  let headlines = [...document.getElementsByTagName('h2')];
  let pageCheck =
    !!url.match(/\/SearchClaims\.pl\?/) &&
    headlines.length > 0 &&
    headlines[0].innerText.match(/Claims Register/);
  return pageCheck;
}

// Returns true if this is a page for downloading a single document.
// district:
//   https://ecf.dcd.uscourts.gov/doc1/04503837920
// appellate:
//   https://ecf.ca1.uscourts.gov/n/beam/servlet/TransportRoom?servlet=ShowDoc&dls_id=00107215565&caseId=41182&dktType=dktPublic
export function isSingleDocumentPage(url, document) {
  let inputs = document.getElementsByTagName('input');
  let lastInput = inputs.length && inputs[inputs.length - 1].value;
  // If the receipt doesn't say "Image" we don't yet support it on the server.
  // So far, this only appears to apply to bankruptcy claims. This CSS
  // selector is duplicated in onDocumentViewSubmit.
  let hasImageReceipt = !!$('td:contains(Image)').length;

  let pageCheck =
    isDocumentUrl(url) &&
    hasImageReceipt &&
    (lastInput === 'View Document' || lastInput === 'Accept Charges and Retrieve');
  debug(4, ` lastInput ${lastInput}`);
  return !!pageCheck;
}
