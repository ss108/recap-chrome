import { ContentDelegate } from '../../src/content_delegate';
import PACER from '../../src/pacer';
import {
  docketQueryPath,
  docketQueryUrl,
  noPacerCaseIdContentDelegate,
  nonsenseUrlContentDelegate,
  setupChromeSpy,
  removeChromeSpy,
  tabId,
  spyOnModule,
} from './mocks';
import * as utils from '../../src/utils/';

jest.mock('../../src/utils', () => ({
  ...jest.requireActual('../../src/utils'),
  debug: jest.fn(),
  getBrowserFetch: jest.fn(),
}));

describe('The ContentDelegate class', () => {
  const link_2 = document.createElement('a');
  link_2.href = 'https://ecf.canb.uscourts.gov/notacase/034031424909';
  const link_3 = document.createElement('a');
  link_3.href = 'https://ecf.canb.uscourts.gov/doc1/034031424910';
  const link_4 = document.createElement('a');
  link_4.href = 'https://ecf.canb.uscourts.gov/doc1/034031424911';
  const test_links = [link_2, link_3, link_4];

  const contentDelegateDLS = new ContentDelegate(
    tabId, // tabId
    docketQueryUrl, // url
    docketQueryPath, // path
    'canb', // court
    undefined, // pacer_case_id
    '127015406472', // pacer_doc_id
    test_links // links
  );
  const contentDelegatePACER = new ContentDelegate(
    tabId,
    docketQueryUrl, // url
    docketQueryPath, // path
    'canb', // court
    '123456', // pacer_case_id
    'redfox', // pacer_doc_id
    test_links // links
  );
  describe('findAndStorePacerDocIds', () => {
    beforeEach(() => {
      chrome.storage.local.get.mockImplementation((msg, cb) =>
        cb({ options: {}, 1234: { docsToCases: {} } })
      );
      chrome.storage.local.set.mockImplementation((obj, cb) => {
        cb({ success: 'msg' });
      });
    });

    // clear all mocks after each test
    afterEach(() => {
      jest.clearAllMocks();
      fetch.resetMocks();
    });

    it('should handle no cookie', async () => {
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(false);
      const ids = await nonsenseUrlContentDelegate.findAndStorePacerDocIds();
      expect(ids).toBe(undefined);
      expect(chrome.storage.local.set).not.toHaveBeenCalled();
    });

    it('should handle pages without case ids', async () => {
      const cd = noPacerCaseIdContentDelegate;
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(true);
      await cd.findAndStorePacerDocIds();
      expect(chrome.storage.local.set).toHaveBeenCalled();
      // chrome storage local set should be called
    });

    it('should iterate links for DLS', async () => {
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(true);
      jest.spyOn(PACER, 'parseGoDLSFunction').mockReturnValue({
        de_caseid: '1234',
      });

      const cd = contentDelegateDLS;
      await cd.findAndStorePacerDocIds();
      expect(chrome.storage.local.set).toHaveBeenCalledWith(
        {
          1234: {
            docId: '127015406472',
            docsToCases: {
              '034031424910': '1234',
              '034031424911': '1234',
            },
          },
        },
        expect.anything()
      );
    });

    it('should iterate links for PACER case id', async () => {
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(true);
      jest.spyOn(PACER, 'parseGoDLSFunction').mockReturnValue(null);
      const cd = contentDelegatePACER;
      await cd.findAndStorePacerDocIds();
      expect(chrome.storage.local.set).toHaveBeenCalledWith(
        {
          1234: {
            caseId: '123456',
            docId: 'redfox',
            docsToCases: {
              redfox: '123456',
              '034031424910': '123456',
              '034031424911': '123456',
            },
          },
        },
        expect.anything()
      );
    });
  });
});
