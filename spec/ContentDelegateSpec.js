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
} from './content_delegate';
import { setupChromeSpy, removeChromeSpy } from './content_delegate/mocks';

describe('The ContentDelegate class', () => {
  // cache and mock the window fetch object so that you can return spys on it
  // later make the default return be a response object with blob and ok while
  // you track down the scoping issue for fetch tests.
  let nativeFetch;

  beforeEach(() => {
    nativeFetch = window.fetch;
    window.fetch = async () => {
      const res = {};
      res.ok = true;
      res.blob = {};
      return res;
    };
  });

  afterEach(() => {
    window.fetch = nativeFetch;
  });

  // run the imported tests
  constructorTests();
  attachRecapLinkToEligibleDocsTests();
  findAndStorePacerDocIdsTests();
  handleAttachmentMenuPageTests();

  handleDocketQueryUrlTests();
  handleRecapLinkClickTests();
  handleSingleDocumentPageCheckTests();
  handleSingleDocumentPageViewTests();
  handleDocketDisplayPageTests();
  onDocumentViewSubmitTests();
  showPdfPageTests();
});
