// helper functions for chrome local storage

export const getImage = (img) => {
  return chrome.extension.getURL(img);
};

export const getItemsFromStorage = (key) =>
  new Promise((resolve, reject) => {
    const stringKey = typeof key === 'number' ? key.toString() : key;
    chrome.storage.local.get(stringKey, (result) => {
      resolve(result[stringKey]);
    });
  });

export const saveItemToStorage = (dataObj) =>
  new Promise((resolve, reject) =>
    chrome.storage.local.set(dataObj, () =>
      resolve(
        console.log(
          `RECAP: Item saved in storage at tabId: ${Object.keys(dataObj)[0]}`
        )
      )
    )
  );

export const destroyTabStorage = (key) => {
  chrome.storage.local.get(null, (store) => {
    if (store[key]) {
      chrome.storage.local.remove(key.toString(), () =>
        console.log(`Removed item from storage with key ${key}`)
      );
    }
  });
};
// initialize the store with an empty object
export const getTabIdForContentScript = () =>
  new Promise((resolve) => {
    chrome.runtime.sendMessage({ message: 'requestTabId' }, (msg) =>
      resolve(msg)
    );
  });

// object takes shape of { [tabId]: { ...data } }
export const updateTabStorage = async (object) => {
  const tabId = Object.keys(object)[0];
  const updatedVars = object[tabId];
  const store = await getItemsFromStorage(tabId);
  // keep store immutable
  saveItemToStorage({ [tabId]: { ...store, ...updatedVars } });
};

export const blobToDataURL = (blob) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};
