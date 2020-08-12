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
  let nativeFetch;
  beforeEach(() => {
    nativeFetch = window.fetch;
    window.fetch = async () => Promise.resolve({});
  });

  afterEach(() => {
    window.fetch = nativeFetch;
  });

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
