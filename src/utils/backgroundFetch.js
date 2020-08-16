// background fetch handler
import { destroyTabStorage } from './chrome';
import { buildFormData } from './dom';

export const handleBackgroundFetchRequest = (req, sender, sendResponse) => {
  // create a callback to dispatch the background fetch request
  const dispatchCallback = (_url, _options) => {
    console.info(`RECAP: Dispatching ${_options.method} for ${_url}`);
    // dispatch fetch and return the response
    fetch(_url, _options)
      .then((res) => res.json())
      .then((json) => sendResponse(json))
      .catch((err) => sendResponse({ error: err.message }));
  };

  // if a fetch call, destructure elements
  const { url, options } = req.fetch;

  // if no file in the body, submit the fetch request
  // and return true to allow for the async function to complete
  if (!options.body || !options.body.filepath_local) {
    dispatchCallback(url, options);
    return true;
  }

  // call the store from the tabId to fetch the blob
  chrome.storage.local.get(sender.tab.id.toString(), (store) => {
    // get the dataUrl for the file in storage
    const dataUrl = store[sender.tab.id.toString()]['file_blob'];

    // download it
    fetch(dataUrl)
      .then((res) => {
        console.log(`Fetched blob from browser dataUrl: ${res.statusText}`);
        return res.blob();
      })
      // then dispatch the callback to send the fetch request with file attached
      .then((blob) => {
        const body = buildFormData({ ...options.body, filepath_local: blob });
        dispatchCallback(url, { ...options, body });
      });
    // clear the store
    destroyTabStorage(sender.tab.id);
  });
  // return true to allow for the async function to complete
  return true;
};
