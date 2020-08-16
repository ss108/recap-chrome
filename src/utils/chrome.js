// helper functions for chrome browser functions
import { COURT_ABBREVS } from '../pacer';

// helper function - returns filename based on user preferences
// ts:
// interface FileNameParams {
//  style: 'ia' | 'lawyer'
//  pacerCaseId?: string;
//  court: string;
// }
// (p: FileNameParams) => String;
const generateFileName = ({ style, pacerCaseId, court }) => {
  if (options === 'lawyer') {
    const firstTable = document.getElementsByTagName('table')[0];
    const firstTableRows = firstTable.querySelectorAll('tr');
    // 4th from bottom
    const matchedRow = firstTableRows[firstTableRows.length - 4];
    const cells = matchedRow.querySelectorAll('td');
    const document_number = cells[0].innerText.match(/\d+(?=\-)/)[0];
    const docket_number = cells[1].innerText;
    return [COURT_ABBREVS[court], docket_number, document_number]
      .join('_')
      .concat('.zip');
  } else {
    return ['gov', 'uscourts', court, pacerCaseId || 'unknown-case-id']
      .join('.')
      .concat('.zip');
  }
};

export const getPacerCaseIdFromStore = async ({ tabId, pacer_doc_id }) => {
  const tabStorage = await getItemsFromStorage(tabId);

  const docsToCases = tabStorage.docsToCases;
  if (!docsToCases) return;
  console.log(docsToCases);

  const caseId = docsToCases[pacer_doc_id];
  if (!caseId) return console.warn('No pacer_case_id found in storage');

  const success = `RECAP: Got case number ${caseId} for docId ${pacer_doc_id}`;
  console.info(success);
  return caseId;
};

// ts: (k: number | string) => string;
export const stringIfNumber = (k) => (typeof k === 'number' ? k.toString() : k);

// ts: (k: number | string) => void;
export const destroyTabStorage = (tab) => {
  const key = stringIfNumber(tab);
  const msg = `Removed item from storage with key ${key}`;

  return chrome.storage.local.get(null, (store) => {
    if (!store[key]) return;
    chrome.storage.local.remove(key, () => console.info(msg));
  });
};

// ts: (p: { action: string, title: string, message: string }) =>
// Promise<void | object>;
export const dispatchNotifier = async ({ action, title, message }) =>
  new Promise((resolve, reject) =>
    chrome.runtime.sendMessage({ notifier: { action, title, message } }, (res) => {
      if (res.error) reject(res.error);
      resolve(res);
    })
  );

// ts: (img: str) => string;
export const getImage = (img) => chrome.extension.getURL(img);

// ts: (tab: string) => Promise<{[key:string]: any}>
export const getItemsFromStorage = async (tab) => {
  const key = stringIfNumber(tab);
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], (result) => {
      console.info(`Retrieved data at ${key} from store`);
      resolve(result[key]);
    });
  });
};

// ts: (obj: { tabId: { [key: string]: any } }) => Promise<void>;
// returns a new promise that resolves to a console message
export const saveItemToStorage = async (obj) => {
  const tabId = Object.keys(obj)[0];
  const msg = `RECAP: Item saved in storage at tabId: ${tabId}`;

  return new Promise((resolve, reject) =>
    chrome.storage.local.set(obj, () => resolve(console.info(msg)))
  );
};

// ts: () => void | string | { [key: string]: any }
// initialize the store with an empty object
export const getTabIdForContentScript = () => {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ requestTabId: true }, (msg) => resolve(msg));
  });
};

// ts: (obj: { tabId: { [key: string]}: any }) => void;
export const updateTabStorage = async (obj) => {
  const tabId = Object.keys(obj)[0];
  const newData = obj[tabId];
  const store = await getItemsFromStorage(tabId);
  // keep store immutable
  return saveItemToStorage({ [tabId]: { ...store, ...newData } });
};
