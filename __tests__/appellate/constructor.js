import { AppellateDelegate } from '../../src/appellate_delegate';
import {
  tabId,
  court,
  newAppDel,
  setTitle,
  advancedCaseSearchTitle,
  attachmentMenuTitle,
  caseQueryTitle,
  caseSearchTitle,
  caseSearchResultsTitle,
  downloadConfirmationTitle,
  fullDocketSearchTitle,
  shortDocketTitle,
  longDocketTitle,
} from './mocks';

describe('The Appellate Delegate Class', () => {
  beforeEach(() => {
    Object.defineProperty(window.document, 'URL', { value: '' });
    document.body.innerHTML = '';
  });

  afterEach(() => {
    jest.clearAllMocks();
    fetchMock.mockClear();
  });

  describe('AppellateDelegate constructor', () => {
    it('gets created with the necessary arguments', () => {
      const ad = newAppDel();
      expect(ad.tabId).toBe(tabId);
      expect(ad.court).toBe(court);
      expect(ad.links).toEqual([]);
      expect(ad.pacerDocId).toBe(undefined);
    });

    describe('it is not on any identified appellate page', () => {
      beforeEach(() => setTitle(''));

      it('has no targetPage set', () => {
        const ad = newAppDel();
        expect(ad.targetPage).not.toBeTruthy();
      });
    });

    describe('it is on a caseSearchPage', () => {
      beforeEach(() => {
        setTitle(caseSearchTitle);
      });

      it('sets the targetPage to "caseSearch"', () => {
        const ad = newAppDel();
        expect(ad.targetPage).toBe('caseSearch');
      });

      it('calls handleCaseSearchPage', () => {
        const ad = newAppDel();
        jest.spyOn(ad, 'handleCaseSearchPage');
        ad.dispatchTargetHandler();
        expect(ad.handleCaseSearchPage).toHaveBeenCalled();
      });
    });

    describe('it is on an advancedCaseSearchPage', () => {
      beforeEach(() => {
        setTitle(advancedCaseSearchTitle);
      });

      it('sets the targetPage to "advancedCaseSearch"', () => {
        const ad = newAppDel();
        expect(ad.targetPage).toBe('advancedCaseSearch');
      });

      it('calls handleCaseSearchPage', () => {
        const ad = newAppDel();
        jest.spyOn(ad, 'handleCaseSearchPage');
        ad.dispatchTargetHandler();
        expect(ad.handleCaseSearchPage).toHaveBeenCalled();
      });
    });

    describe('it is on a caseSearchResultsPage', () => {
      beforeEach(() => {
        setTitle(caseSearchResultsTitle);
      });

      it('sets the targetPage to "caseSearchResults"', () => {
        const ad = newAppDel();
        expect(ad.targetPage).toBe('caseSearchResults');
      });

      it('calls handleCaseSearchResultsPage', () => {
        const ad = newAppDel();
        jest.spyOn(ad, 'handleCaseSearchResultsPage');
        ad.dispatchTargetHandler();
        expect(ad.handleCaseSearchResultsPage).toHaveBeenCalled();
      });
    });

    describe('it is on a caseQueryPage', () => {
      beforeEach(() => {
        setTitle(caseQueryTitle);
      });

      it('sets the targetPage to "caseQuery"', () => {
        const ad = newAppDel();
        expect(ad.targetPage).toBe('caseQuery');
      });

      it('calls handleCaseQueryPage', () => {
        const ad = newAppDel();
        jest.spyOn(ad, 'handleCaseQueryPage');
        ad.dispatchTargetHandler();
        expect(ad.handleCaseQueryPage).toHaveBeenCalled();
      });
    });

    describe('it is on a downloadConfirmationPage', () => {
      beforeEach(() => {
        setTitle(downloadConfirmationTitle);
      });

      it('sets the targetPage to "downloadConfirmation"', () => {
        const ad = newAppDel();
        expect(ad.targetPage).toBe('downloadConfirmation');
      });

      it('calls handleDownloadConfirmationPage', () => {
        const ad = newAppDel();
        jest.spyOn(ad, 'handleDownloadConfirmationPage');
        ad.dispatchTargetHandler();
        expect(ad.handleDownloadConfirmationPage).toHaveBeenCalled();
      });
    });
    describe('it is on an attachmentMenuPage', () => {
      beforeEach(() => {
        setTitle(attachmentMenuTitle);
      });

      it('sets the targetPage to "attachmentMenu"', () => {
        const ad = newAppDel();
        expect(ad.targetPage).toBe('attachmentMenu');
      });

      it('calls handleAttachmentMenuPage', () => {
        const ad = newAppDel();
        jest.spyOn(ad, 'handleAttachmentMenuPage');
        ad.dispatchTargetHandler();
        expect(ad.handleAttachmentMenuPage).toHaveBeenCalled();
      });
    });
    describe('it is on a fullDocketSearchPage', () => {
      beforeEach(() => {
        setTitle(fullDocketSearchTitle);
      });

      it('sets the targetPage to "fullDocketSearch"', () => {
        const ad = newAppDel();
        expect(ad.targetPage).toBe('fullDocketSearch');
      });

      it('calls handleAttachmentMenuPage', () => {
        const ad = newAppDel();
        jest.spyOn(ad, 'handleFullDocketSearchPage');
        ad.dispatchTargetHandler();
        expect(ad.handleFullDocketSearchPage).toHaveBeenCalled();
      });
    });

    describe('it is on a shortDocketPage', () => {
      beforeEach(() => {
        setTitle(shortDocketTitle);
      });

      it('sets the targetPage to "shortDocket"', () => {
        const ad = newAppDel();
        expect(ad.targetPage).toBe('shortDocket');
      });

      it('calls handleAttachmentMenuPage', () => {
        const ad = newAppDel();
        jest.spyOn(ad, 'handleDocketPage');
        ad.dispatchTargetHandler();
        expect(ad.handleDocketPage).toHaveBeenCalled();
      });
    });
    describe('it is on a fullDocketPage', () => {
      beforeEach(() => {
        setTitle(longDocketTitle);
      });

      it('sets the targetPage to "fullDocket"', () => {
        const ad = newAppDel();
        expect(ad.targetPage).toBe('fullDocket');
      });

      it('calls handleAttachmentMenuPage', () => {
        const ad = newAppDel();
        jest.spyOn(ad, 'handleDocketPage');
        ad.dispatchTargetHandler();
        expect(ad.handleDocketPage).toHaveBeenCalled();
      });
    });
  });
});
