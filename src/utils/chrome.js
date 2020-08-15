// helper functions for chrome browser functions

export const blobToDataURL = (blob) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};

export const destroyTabStorage = (_key) => {
  const key = typeof _key === 'number' ? _key.toString() : _key;
  const msg = `Removed item from storage with key ${key}`;

  chrome.storage.local.get(null, (store) => {
    if (!store[key]) return;
    chrome.storage.local.remove(key, () => console.info(msg));
  });
};

export const dispatchNotifier = ({ action, title, message }) => {
  return new Promise(
    (resolve, reject) =>
      chrome.runtime.sendMessage({ notifier: { action, title, message } }),
    (res) => {
      if (res.error) reject(res.error);
      resolve(res);
    }
  );
};
export const getImage = (img) => chrome.extension.getURL(img);

export const getItemsFromStorage = (key) =>
  new Promise((resolve, reject) => {
    const stringKey = typeof key === 'number' ? key.toString() : key;
    chrome.storage.local.get(stringKey, (result) => {
      resolve(result[stringKey]);
    });
  });

// returns a new promise that resolves to a console message
export const saveItemToStorage = (obj) => {
  const tabId = Object.keys(obj)[0];
  const msg = `RECAP: Item saved in storage at tabId: ${tabId}`;

  return new Promise((resolve, reject) =>
    chrome.storage.local.set(obj, () => resolve(console.info(msg)))
  );
};

// initialize the store with an empty object
export const getTabIdForContentScript = () => {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ requestTabId: true }, (msg) => resolve(msg));
  });
};

// object takes shape of { [tabId]: { ...data } }
export const updateTabStorage = async (obj) => {
  const tabId = Object.keys(obj)[0];
  const newData = obj[tabId];
  const store = await getItemsFromStorage(tabId);
  // keep store immutable
  saveItemToStorage({ [tabId]: { ...store, ...newData } });
};
