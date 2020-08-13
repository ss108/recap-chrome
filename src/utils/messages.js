import { courtListenerURL, fetchGetOptions, searchParamsURL } from './fetch';
// from content script, dispatch fetch and return the result
// props: { type: string, payload: any }

const recapFetchCalls = {
  getAvailabilityForDocket: {
    suffix: 'dockets',
    requiredKeys: ['court', 'pacer_case_id'],
    staticData: {
      source__in: '1,3,5,7,9,11,13,15',
      fields: 'absolute_url,date_modified',
    },
  },
  getAvailabilityForDocuments: {
    suffix: 'recap-query',
    requiredKeys: ['docket_entry__docket__court', 'pacer_doc_id__in'],
    staticData: {},
  },
};

// returns an error message if a required key is null or undefined
const checkKeys = (keys, obj) => {
  const k = keys.find((k) => obj[k] === undefined || obj[k] === null);
  return k ? `Required key ${k} cannot be undefined` : null;
};

const dispatchFetch = async ({ config, payload }) => {
  // make sure all required keys are present
  const keyCheck = checkKeys(config.requiredKeys, payload);
  if (keyCheck) return console.error(keyCheck);

  // build URL
  const url = searchParamsURL({
    url: courtListenerURL(config.suffix),
    params: { ...config.staticData, ...payload },
  });

  // dispatch fetch and return the result
  const res = await fetch(url, fetchGetOptions());
  if (!res.ok) throw new Error('Fetch failed');
  return res.json();
};

export const backgroundFetchListener = () =>
  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    const { type, payload } = req;
    // find the relevant config object
    const config = recapFetchCalls[type];
    if (!type) {
      console.info('No fetch type detected. Ignoring.');
    } else if (!config) {
      console.error(`No recap fetch action found for ${type}`);
    } else {
      // log the fetch call
      console.info(`Dispatching fetch action ${type}`);
      // dispatch the corresponding action
      dispatchFetch({ config, payload })
        .then((res) => sendResponse(res))
        .catch((err) => sendResponse({ error: err.message }));
    }
    return true;
  });
