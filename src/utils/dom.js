// dom helpers

import { updateTabStorage } from './chrome';
import PACER from '../pacer';

/* GETTERS */
/* Finds element on DOM and returns element or value from element */

// Save a copy of the page source, except that "View Document" button
// sends the browser forward in history rather than submitting the form
export const getPreviousPageHtmlFromPdfDownloadPage = () => {
  const form = document.forms[0];
  const onSubmit = form.getAttribute('onsubmit');

  // set the onsubmit element to the new one
  form.setAttribute('onsubmit', 'history.forward(); return false;');

  // build the new pageHTML
  const previousPageHtml = document.documentElement.innerHTML;

  // set the form back to the old onsubmit method before returning html
  form.setAttribute('onsubmit', onSubmit);

  return previousPageHtml;
};

// returns extracted data from the Pdf Download Page or
// false if no matches to the regex are found
export const getRecapDataFromPdfDownloadPage = () => {
  const td = [...document.querySelectorAll('td')].find((el) =>
    el.textContent.includes('Image')
  );
  const image_string = td.textContent;

  // get all matches for numbers seperated by a hyphen
  const matches = image_string.match(/(\d+)-(\d+)/);

  // if there aren't any matches, return with false, letting
  // content script know to submit the form
  if (!matches) return false;

  // else return the extracted data

  // docket nubmer is in a table row with 'Case Number'
  // at the first td in the table row
  const docketNumberText = () => {
    const tr = [...document.getElementsByTagName('tr')].find((el) =>
      el.textContent.includes('Case Number')
    );
    return tr.querySelector('td:nth-of-type(1)').textContent;
  };

  return {
    document_number: matches[1],
    attachment_number: matches[2],
    docket_number: docketNumberText(),
  };
};

// if on a singleDoc Zip Download Page, grab the docket and document
// numbers from the table with cost and opinion details.
// ts: () => { document_number: String, docket_number: String }
export const getDocAndDocketNumbersForZipDownload = () => {
  const firstTable = document.getElementsByTagName('table')[0];
  if (!firstTable) return { docket_number: undefined, document_number: undefined };
  const firstTableRows = firstTable.querySelectorAll('tr');
  // 4th from bottom
  const matchedRow = firstTableRows[firstTableRows.length - 4];
  const cells = matchedRow.querySelectorAll('td');
  return {
    document_number: cells[0].innerText.match(/\d+(?=\-)/)[0],
    docket_number: cells[1].innerText,
  };
};

export const getUrlInZipFilePageView = () => {
  const firstInput = document.querySelector(
    'input[type="button"][value="Download Documents"]'
  );

  if (!firstInput) return console.error('RECAP: No download link found.');

  const url = firstInput.getAttribute('onclick');
  // url is parent.location='/cgi-bin/show_multidocs.pl?...got_receipt=1'
  // we extract from show to end excluding the final quotation mark
  return url.match(/show[^\'\s]*/)[0];
};

// extracts the hostname from a url by injecting it into an anchor
// ts: (url: String) => String
export const getHostname = (url) => {
  // Extract the hostname from a URL.
  const a = document.createElement('a');
  a.href = url;
  return a.hostname;
};

// if url contains 'create_appendix' return true;
export const isAppendixPage = (url) => url.match(/create\_appendix\=1/);

// returns the docket type or null if neither docket nor docket history page
// ts: (url: String) => 'DOCKET' | 'DOCKET_HISTORY_REPORT' | null
export const isDocketPage = (url) =>
  PACER.isDocketDisplayUrl(url)
    ? 'DOCKET'
    : PACER.isDocketHistoryDisplayUrl(url)
    ? 'DOCKET_HISTORY_REPORT'
    : null;

// check for more than one radioDateInput and return if true
// (i.e., you are on an interstitial page so no docket to display)
// ts: () => boolean
export const isInterstitialDocketPage = () => {
  const arr = [...document.querySelectorAll('input[type="radio"]')];
  if (!arr) return false;
  const radioDateInputs = arr.filter((i) => i.name === 'date_from');
  return radioDateInputs.length > 1;
};

// helper function - returns filename based on user preferences
// ts:
// interface FileNameMaker {
//   pacerCaseId?: String;
//   docket_number?: String;
//   document_number?: String;
//   attachment_number?: String;
//   court: String;
//   suffix: 'pdf' | 'zip';
//   style: 'ia' | 'lawyer';
// }
// ts: (a: FileNameMaker) => String;
export const generateFileName = ({
  style,
  suffix,
  pacerCaseId,
  court,
  attachment_number,
  docket_number,
  document_number,
}) => {
  if (style === 'lawyer') {
    const pieces = [
      PACER.COURT_ABBREVS[court],
      docket_number || 0,
      document_number || 0,
    ];
    // add attachment_number if its a pdf
    if (suffix === 'pdf') {
      pieces.push(attachment_number || '0');
    }
    return pieces.join('_') + '.' + suffix;
  } else {
    const pieces = ['gov', 'uscourts', court, pacerCaseId || 'unknown-case-id'];
    if (suffix === 'pdf') {
      pieces.push(document_number || '0');
      pieces.push(attachment_number || '0');
    }
    return pieces.join('.') + '.' + suffix;
  }
};

// given a blob, return a promise that resolves in a dataUrL
// ts: (blob: Blob) => Promise<string | void>
export const blobToDataURL = async (blob) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};

export const blobToText = async (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => resolve(reader.result);
    reader.readAsText(blob);
  });

// from JSON object, return a formData object
// ts: (body: {[key: string]: any}) => FormData
export const buildFormData = (body) => {
  const formData = new FormData();
  Object.keys(body).map((key) => formData.append(key, body[key]));
  return formData;
};

// If no content key is set in history, stash the page html at the key
// ts: (e: PopStateEvent) => void;
export const setPreviousPageinHistory = (e) => {
  if (!e.state.content) return;
  document.documentElement.innerHTML = e.state.content;
};

// ts: () => void;
export const toggleLoadingCursor = () =>
  (document.querySelector('body').classList += 'cursor wait');

// in Firefox, use content.fetch for content-specific fetch requests
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#XHR_and_Fetch
// ts: () => Fetch;
// github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node-fetch/index.d.ts
export const getBrowserFetch = () =>
  navigator.userAgent.indexOf('Chrome') < 0 ? content.fetch : window.fetch;

// helper function - extract the zip by creating html and querying the frame
// ts: (html: String) => String
export const extractUrl = (html) => {
  const page = document.createElement('html');
  page.innerHTML = html;
  const frames = [...page.querySelectorAll('iframe')];
  return frames[0].src;
};

// if on a zip file page, fetch the html page from the url in the event.data.id
// and then extract the zip file url from the retrieved html and return it
// ts: (url: String) => String;
export const getZipFileUrlFromDownloadedPage = async (url) => {
  const contentFetch = getBrowserFetch();
  const res = await contentFetch(url);
  const html = await res.text();
  console.log('RECAP: Successfully submitted zip file request');
  return { zipUrl: extractUrl(html), htmlPage: html };
};

// ts: (p: {url: string, tabId: string}) => Promise<void>;
export const saveZipFileInStorage = async ({ url, tabId }) => {
  // get the file from the extracted url
  const { zipUrl, htmlPage } = await getZipFileUrlFromDownloadedPage(url);

  // the the user we've downloaded the file
  const res = await fetch(zipUrl);
  if (!res.ok) return console.error('Could not fetch blob');

  const blob = await res.blob();

  // convert the zip file to a dataUrl blob
  console.info('RECAP: Downloaded zip file');
  const dataUrl = await blobToDataURL(blob);

  // store the dataUrl in the tabStorage
  const updated = await updateTabStorage({ [tabId]: { file_blob: dataUrl } });
  if (!updated.success) return console.error(`Could not save zip file: ${err}`);
  return { success: true, htmlPage, blob };
};

// helper function - convert string to html document
// ts: (str: String) => HTMLBodyElement
export const stringToDocBody = (str) => {
  const parser = new DOMParser();
  const newDoc = parser.parseFromString(str, 'text/html');
  return newDoc.body;
};

/* SETTERS */
/* mutate elements on the DOM */

// if on a download documents page or a download zip file page
// find the download buttons, hide them, and replace with listeners
// for onDownload scripts
export const disableDownloadButtonsAndInsertClickListeners = ({ url }) => {
  const forms = [...document.getElementsByTagName('form')];

  forms.map((form) => {
    form.removeAttribute('action');
    const input = form.querySelector('input');
    input.removeAttribute('onclick');
    input.disabled = true;
    form.hidden = true;

    // create new button and inject onto DOM
    const div = document.createElement('div');
    const button = document.createElement('button');
    button.textContent = 'Download Documents';
    button.addEventListener('click', () => window.postMessage({ id: url }));
    div.appendChild(button);
    // insert it before the current form
    form.parentNode.insertBefore(div, form);
  });
};
