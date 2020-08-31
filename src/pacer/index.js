import { APPELLATE_COURTS, COURT_ABBREVS, PACER_TO_CL_IDS } from './courts';
import { parseGoDLSFunction } from './links';
import {
  getBaseNameFromUrl,
  getCourtFromUrl,
  getDocumentIdFromUrl,
  getDocumentIdFromForm,
  getCaseIdFromAppellateDocketPage,
  getCaseIdFromAppellateCaseQueryPage,
  getCaseIdFromAppellateSearchResults,
  getCaseIdFromClaimsPage,
  getCaseNumberFromUrls,
  getCaseNumberFromInputs,
} from './extractData';
import {
  isAppellateCourt,
  isDocumentUrl,
  isDocketQueryUrl,
  isDocketDisplayUrl,
  isDocketHistoryDisplayUrl,
  isAttachmentMenuPage,
  isDownloadAllDocumentsPage,
  isClaimsRegisterPage,
  isSingleDocumentPage,
} from './setTarget';
import { debug, getHostname } from '../utils';

function convertToCourtListenerCourt(pacer_court_id) {
  return PACER_TO_CL_IDS[pacer_court_id] || pacer_court_id;
}

// Given document.cookie, returns true if the user is logged in to PACER.
function hasPacerCookie(cookieString) {
  let cookies = {};
  cookieString.replace(/\s*([^=;]+)=([^;]*)/g, function (match, name, value) {
    cookies[name.trim()] = value.trim();
  });
  let pacerCookie = cookies['PacerUser'] || cookies['PacerSession'];
  return !!(pacerCookie && !pacerCookie.match(/unvalidated/));
}

const PACER = {
  getCourtFromUrl,
  convertToCourtListenerCourt,
  isDocumentUrl,
  getCaseIdFromClaimsPage,
  isDocketQueryUrl,
  isDocketDisplayUrl,
  isDocketHistoryDisplayUrl,
  isAttachmentMenuPage,
  isDownloadAllDocumentsPage,
  isSingleDocumentPage,
  isClaimsRegisterPage,
  getDocumentIdFromUrl,
  getDocumentIdFromForm,
  getCaseIdFromAppellateCaseQueryPage,
  getCaseIdFromAppellateDocketPage,
  getCaseIdFromAppellateSearchResults,
  getCaseNumberFromUrls,
  getCaseNumberFromInputs,
  getBaseNameFromUrl,
  parseGoDLSFunction,
  hasPacerCookie,
  isAppellateCourt,
  COURT_ABBREVS,
  APPELLATE_COURTS,
};

export default PACER;
