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
} from './mocks';

export const findAndStorePacerDocIdsTests = () =>
  describe('findAndStorePacerDocIds', () => {
    beforeAll(() => setupChromeSpy());
    afterAll(() => removeChromeSpy());

    it('should handle no cookie', () => {
      spyOn(PACER, 'hasPacerCookie').and.returnValue(false);
      expect(nonsenseUrlContentDelegate.findAndStorePacerDocIds()).toBe(
        undefined
      );
    });
    it('should handle pages without case ids', () => {
      const cd = noPacerCaseIdContentDelegate;
      spyOn(PACER, 'hasPacerCookie').and.returnValue(true);
      spyOn(cd.recap, 'getPacerCaseIdFromPacerDocId').and.callFake(
        (_, callback) => {
          callback.tab = { id: 1234 };
          callback('531931');
        }
      );
      chrome.storage.local.set = (docs, cb) => cb();
      cd.findAndStorePacerDocIds();
      expect(cd.recap.getPacerCaseIdFromPacerDocId).toHaveBeenCalled();
    });
    it('should iterate links for DLS', async () => {
      const link_2 = document.createElement('a');
      link_2.href = 'https://ecf.canb.uscourts.gov/notacase/034031424909';
      const link_3 = document.createElement('a');
      link_3.href = 'https://ecf.canb.uscourts.gov/doc1/034031424910';
      const link_4 = document.createElement('a');
      link_4.href = 'https://ecf.canb.uscourts.gov/doc1/034031424911';
      const test_links = [link_2, link_3, link_4];
      const docketQueryWithLinksContentDelegate = new ContentDelegate(
        tabId, // tabId
        docketQueryUrl, // url
        docketQueryPath, // path
        'canb', // court
        undefined, // pacer_case_id
        '127015406472', // pacer_doc_id
        test_links // links
      );

      let documents = {};
      spyOn(PACER, 'hasPacerCookie').and.returnValue(true);
      spyOn(PACER, 'parseGoDLSFunction').and.returnValue({
        de_caseid: '1234',
      });
      const cd = docketQueryWithLinksContentDelegate;
      chrome.storage.local.set = function (storagePayload, cb) {
        const docs = storagePayload[tabId].docsToCases;
        documents = docs;
        cb();
      };
      spyOn(cd.recap, 'getPacerCaseIdFromPacerDocId').and.callFake(
        (_, callback) => {
          callback.tab = { id: 1234 };
          return Promise.resolve(callback('531931'));
        }
      );
      await cd.findAndStorePacerDocIds();
      expect(documents).toEqual({
        '034031424910': '1234',
        '034031424911': '1234',
      });
    });
    it('should iterate links for PACER case id', async () => {
      const link_2 = document.createElement('a');
      link_2.href = 'https://ecf.canb.uscourts.gov/notacase/034031424909';
      const link_3 = document.createElement('a');
      link_3.href = 'https://ecf.canb.uscourts.gov/doc1/034031424910';
      const link_4 = document.createElement('a');
      link_4.href = 'https://ecf.canb.uscourts.gov/doc1/034031424911';
      const test_links = [link_2, link_3, link_4];
      const docketQueryWithLinksContentDelegate = new ContentDelegate(
        tabId,
        docketQueryUrl, // url
        docketQueryPath, // path
        'canb', // court
        '123456', // pacer_case_id
        'redfox', // pacer_doc_id
        test_links // links
      );
      let documents = {};
      spyOn(PACER, 'hasPacerCookie').and.returnValue(true);
      const cd = docketQueryWithLinksContentDelegate;
      chrome.storage.local.set = function (storagePayload, cb) {
        const docs = storagePayload[tabId].docsToCases;
        documents = docs;
        cb();
      };
      await cd.findAndStorePacerDocIds();
      expect(documents).toEqual({
        redfox: '123456',
        '034031424910': '123456',
        '034031424911': '123456',
      });
    });
  });
