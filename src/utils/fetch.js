// helper functions for fetching data frim content script
import { getHostname } from './index';

// make token available to helper functions
export const N87GC2 = '45c7946dd8400ad62662565cf79da3c081d9b0e5';
export const authHeader = { Authorization: `Token ${N87GC2}` };
export const jsonHeader = { 'Content-Type': 'application/json' };

// build courtlistener URL
// django requires the suffix to be followed by a slash
export const courtListenerURL = (suffix) =>
  'https://www.courtlistener.com/api/rest/v3/' + suffix + '/';

export const recapLinkURL = (filepath) => {
  return `https://www.courtlistener.com/${filepath}`;
};

// same as regular fetch with some differences:
// (1) it calls fetch from the background worker instead of brownser
// (2) the accepted arguments are { url: string, options: Object } instead of (string, Object)
// (3) if the options object has key filepath_local, it is replaced with blob in storage
export const dispatchBackgroundFetch = ({ url, options }) =>
  new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ fetch: { url, options } }, (res) => {
      if (res.error) reject(res.error);
      resolve(res);
    });
  });

// encodes the search params for use in a GET request
// https://fetch.spec.whatwg.org/#fetch-api
export const searchParamsURL = ({ base, params }) => {
  const url = new URL(base);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  return url.toString();
};

// given a string, return the correct upload_type
export const uploadType = (str) => {
  const UPLOAD_TYPES = {
    DOCKET: 1,
    ATTACHMENT_PAGE: 2,
    PDF: 3,
    DOCKET_HISTORY_REPORT: 4,
    APPELLATE_DOCKET: 5,
    APPELLATE_ATTACHMENT_PAGE: 6,
    CLAIMS_REGISTER_PAGE: 9,
    ZIP: 10,
  };
  return UPLOAD_TYPES[str];
};
