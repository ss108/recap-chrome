/*global jasmine, DEBUGLEVEL */
import PACER from '../src/pacer';
import { ContentDelegate } from '../src/content_delegate';
import { blobToDataURL } from '../src/utils';
import {
  constructorTests,
  attachRecapLinkToEligibleDocsTests,
  findAndStorePacerDocIdsTests,
  handleAttachmentMenuPageTests,
  handleDocketDisplayPageTests,
  handleDocketQueryUrlTests,
  handleRecapLinkClickTests,
  handleSingleDocumentPageCheckTests,
  handleSingleDocumentPageViewTests,
  onDocumentViewSubmitTests,
  showPdfPageTests,
} from './contentDelegate';
import './contentDelegate/mocks';

describe('The ContentDelegate class', () => {
  // 'tabId' values
  let nativeFetch;
  beforeEach(() => {
    // stub the chrome.runtime.sendMessage function
    window.fetch = () =>
      Promise.resolve(
        new window.Response(new Blob([pdf_data], { type: 'application/pdf' }), {
          status: 200,
        })
      );
    jasmine.Ajax.install();
    setupChromeSpy();
  });

  afterEach(function () {
    jasmine.Ajax.uninstall();
    removeChromeSpy();
  });

  constructorTests();
  attachRecapLinkToEligibleDocsTests();
  findAndStorePacerDocIdsTests();
  handleAttachmentMenuPageTests();
  handleDocketDisplayPageTests();
  handleDocketQueryUrlTests();
  handleRecapLinkClickTests();
  handleSingleDocumentPageCheckTests();
  handleSingleDocumentPageViewTests();
  onDocumentViewSubmitTests();
  showPdfPageTests();
});
