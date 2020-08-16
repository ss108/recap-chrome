import {
  getTabById,
  handleBackgroundFetchRequest,
  handleBackgroundNotificationRequest,
  setDefaultOptions,
  showNotificationTab,
  updateToolbarButton,
} from './utils';

// Make services callable from content scripts.
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  // if the req has a requestTabId key, send the tabId back
  if (req.requestTabId) {
    sendResponse({ tabId: sender.tab.id });
  }
  // if the req has a fetch object, dispatch the fetch handler
  else if (req.fetch) {
    handleBackgroundFetchRequest(req, sender, sendResponse);
  }
  // if the req has a notifier object, dispatch the notifier handler
  else if (req.notifier) {
    handleBackgroundNotificationRequest(req, sender, sendResponse);
  }
  // return true to make call async and keep connection open until completed
  return true;
});

chrome.runtime.onInstalled.addListener(setDefaultOptions);
chrome.runtime.onInstalled.addListener(showNotificationTab);

// Watches all the tabs so we can update their toolbar buttons on navigation.
chrome.tabs.onUpdated.addListener(function (tabId, details, tab) {
  updateToolbarButton(tab);
});
chrome.tabs.onActivated.addListener(function (activeInfo) {
  getTabById(activeInfo.tabId, updateToolbarButton);
});
