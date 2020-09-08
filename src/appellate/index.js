import PACER from '../pacer';

import { dispatchTargetHandler } from './dispatchTargetHandler';
import { handleDocketPage } from './handleDocketPage';
import { handleDownloadConfirmationPage } from './handleDownloadConfirmationPage';
import { handleAttachmentMenuPage } from './handleAttachmentMenuPage';
import { onDocumentDownload } from './onDocumentDownload';
import { checkForAndUploadOpinion } from './checkForAndUploadOpinion';
import { handleCaseQueryPage } from './handleCaseQueryPage';
import { attachRecapLinksToEligibleDocs } from './attachRecapLinksToEligibleDocs';

import {
  getBrowserFetch as contentScriptFetch,
  dispatchBackgroundFetch,
  courtListenerURL,
  authHeader,
  dispatchNotifier,
  updateTabStorage,
} from '../utils';

export function AppellateDelegate({ tabId, court, links, pacerDocId }) {
  this.tabId = tabId;
  this.court = court;
  this.targetPage = this.setTargetPage();

  this.links = links || [];
}

// identify the current page
// currently only implements head title check
AppellateDelegate.prototype.setTargetPage = function () {
  // check the document head for a title
  const titleElement = document.querySelector('title');
  const title = titleElement ? titleElement.text.trim() : '';
  // return page name depending on match
  if (title === 'Case Search') {
    return 'caseSearch';
  } else if (title === 'Case Search - Advanced') {
    return 'advancedCaseSearch';
  } else if (title === 'Cases Selection Table') {
    return 'caseSearchResults';
  } else if (title === 'Case Query') {
    return 'caseQuery';
  } else if (title === 'Download Confirmation') {
    return 'downloadConfirmation';
  } else if (title === 'Document') {
    return 'attachmentMenu';
  } else if (title === 'Docket Report Filter') {
    return 'fullDocketSearch';
  } else if (title.match(/\d+-\d+\sDocket/)) {
    return 'fullDocket';
  } else if (title.match(/\d+-\d+\sSummary/)) {
    return 'shortDocket';
  } else {
    // check the page for an embedded pdf viewer
    const embed = document.querySelector('embed');
    // an embed element will indicate a download document page if
    // type = 'application/pdf' or 'application/x-google-chrome-pdf'
    if (embed && embed.type.includes('pdf')) {
      return 'documentDownload';
    } else {
      console.info('No identified appellate page found');
      return;
    }
  }
};
AppellateDelegate.prototype.dispatchTargetHandler = dispatchTargetHandler;
AppellateDelegate.prototype.handleDocketPage = handleDocketPage;
AppellateDelegate.prototype.handleDownloadConfirmationPage = handleDownloadConfirmationPage;
AppellateDelegate.prototype.handleAttachmentMenuPage = handleAttachmentMenuPage;
AppellateDelegate.prototype.onDocumentDownload = onDocumentDownload;
AppellateDelegate.prototype.handleCaseQueryPage = handleCaseQueryPage;
AppellateDelegate.prototype.checkForAndUploadOpinion = checkForAndUploadOpinion;
AppellateDelegate.prototype.attachRecapLinksToEligibleDocs = attachRecapLinksToEligibleDocs;

// unclear if needed
AppellateDelegate.prototype.handleCaseSearchPage = function () {
  console.log('handleCaseSearchPage');
};
// unclear if needed
AppellateDelegate.prototype.handleFullDocketSearchPage = function () {
  console.log('handleFullDocketSearchPage');
};

AppellateDelegate.prototype.handleCaseSearchResultsPage = async function () {
  console.log('handleCaseSearchResults');
  const anchors = [...document.querySelectorAll('a')];
  const pacerCaseId = PACER.getCaseIdFromAppellateSearchResults(anchors);
  if (pacerCaseId) {
    await updateTabStorage({ [this.tabId]: { caseId: pacerCaseId } });
  }
};

// private methods - add private before release
// can't add private now because of eslint issue

// convert formdata to url search params
// see https://fetch.spec.whatwg.org/#fetch-api
AppellateDelegate.prototype.buildSearchParamsUrl = function ({ url, params }) {
  const newUrl = new URL(url);
  Object.keys(params).forEach((key) => newUrl.searchParams.append(key, params[key]));
  return newUrl;
};
