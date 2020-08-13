import $ from 'jquery';
import { getHostname } from '../utils';
// Makes an XHR to the given URL, calling a callback with the returned content
// type and response (interpreted according to responseType).  See XHR2 spec
// for details on responseType and response.  Uses GET if postData is null or
// POST otherwise.  postData can be any type accepted by XMLHttpRequest.send().
export function httpRequest(url, postData, callback) {
  let type = null,
    result = null,
    xhr;

  // Firefox requires a special call to get an XMLHttpRequest() that
  // sends Referer headers, which is CMECF needs because of their
  // choice in how to fix the 2017 cross-site/same-origin security
  // vulnerability.
  try {
    // eslint-disable-next-line
    // Firefox. See: https://discourse.mozilla.org/t/webextension-xmlhttprequest-issues-no-cookies-or-referrer-solved/11224/18
    xhr = XPCNativeWrapper(new window.wrappedJSObject.XMLHttpRequest());
  } catch (evt) {
    // Chrome.
    xhr = new XMLHttpRequest();
  }

  xhr.responseType = 'arraybuffer';
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        type = xhr.getResponseHeader('Content-Type');
        result = xhr.response;
      }
      callback && callback(type, result, xhr);
    }
  };
  if (postData) {
    xhr.open('POST', url);
    xhr.send(postData);
  } else {
    xhr.open('GET', url);
    xhr.send();
  }
}

// make token available to helper functions
export const N87GC2 = '45c7946dd8400ad62662565cf79da3c081d9b0e5';

export const fetchPostOptions = (formData) => ({
  method: 'POST',
  body: formData,
  headers: {
    Authorization: `Token ${N87GC2}`,
  },
});

export const fetchGetOptions = () => ({
  method: 'GET',
  headers: {
    Authorization: `Token ${N87GC2}`,
  },
});

// Default settings for any jquery $.ajax call.
$.ajaxSetup({
  // The dataType parameter is a security measure requested by Opera code
  // review. 'json' is the default, but if it is not explicitly set, and if the
  // CourtListener server was hacked, the API could be used to serve JSONP to
  // our users. If the server did that, all of our users would be at risk of
  // running custom JavaScript. We don't want that, so we set this explicitly.
  dataType: 'json',
  beforeSend: function (xhr, settings) {
    let hostname = getHostname(settings.url);
    if (hostname === 'www.courtlistener.com') {
      // If you are reading this code, we ask that you please refrain from
      // using this token. Unfortunately, there is no way to distribute
      // extensions that use hardcoded tokens except through begging and using
      // funny variable names. Do not abuse the RECAP service.
      xhr.setRequestHeader('Authorization', `Token ${N87GC2}`);
    }
  },
});

// django requires the suffix to be followed by a slash
export const courtListenerURL = (suffix) =>
  'https://www.courtlistener.com/api/rest/v3/' + suffix + '/';

// encode the search params for use in the GET request
// https://fetch.spec.whatwg.org/#fetch-api
export const searchParamsURL = ({ url, params }) => {
  const newUrl = new URL(url);
  Object.keys(params).forEach((key) =>
    newUrl.searchParams.append(key, params[key])
  );
  return newUrl;
};

export const dispatchFetch = ({ type, payload }) =>
  new Promise((resolve, reject) =>
    chrome.runtime.sendMessage({ type, payload }, (res) => {
      if (res.error) reject(res.error);
      resolve(res);
    })
  );
