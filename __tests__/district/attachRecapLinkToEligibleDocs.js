import { ContentDelegate } from '../../src/district';
import PACER from '../../src/pacer';
import { linksFromUrls, tabId } from './mocks';
import $ from 'jquery';

const fake_urls = ['http://foo.fake/bar/0', 'http://foo.fake/bar/1'];

const urls = [
  'https://ecf.canb.uscourts.gov/doc1/034031424909',
  'https://ecf.canb.uscourts.gov/doc1/034031438754',
];
const expected_url = 'https://ecf.canb.uscourts.gov/cgi-bin/DktRpt.pl?531591';

describe('The ContentDelegate class', () => {
  describe('attachRecapLinkToEligibleDocs', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
      chrome.storage.local.get.mockImplementation((msg, cb) => cb({ options: {} }));
    });

    // clear all mocks after each test
    afterEach(() => {
      jest.clearAllMocks();
      fetchMock.mockClear();
    });

    describe('when there are no valid urls', () => {
      const links = linksFromUrls(fake_urls);

      beforeEach(() => {
        const body = document.querySelector('body');
        Array.from(links).map((link) => body.appendChild(link));
      });

      afterEach(() => {
        const staleLinks = [...document.querySelectorAll('a#recap-test-suite')];
        staleLinks.map((link) => link.remove());
      });

      it('does nothing', async () => {
        const cd = new ContentDelegate(tabId, expected_url, null, null, null, null, links);
        fetchMock.getOnce(/courtlistener/, {});
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({}));
        await cd.attachRecapLinkToEligibleDocs();
        expect(fetchMock.calls.length).toEqual(0);
      });
    });

    describe('when there are valid urls', () => {
      const links = linksFromUrls(urls);

      describe('when no urls have recap', () => {
        it('does not attach any links', async () => {
          const results = [];
          fetchMock.getOnce(/courtlistener/, { results });
          chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({ results }));
          const cd = new ContentDelegate(tabId, expected_url, null, null, null, null, links);
          cd.pacer_doc_ids = [1234];
          await cd.attachRecapLinkToEligibleDocs();
          const recapLinks = [...document.querySelectorAll('.recap-inline')];
          expect(recapLinks.length).toBe(0);
        });
      });

      it('attaches a single link to the one url with recap', async () => {
        const body = document.querySelector('body');
        Array.from(links).map((link) => body.appendChild(link));
        const cd = new ContentDelegate(tabId, expected_url, null, null, null, null, links);
        cd.pacer_doc_ids = [1234];
        const results = [{ pacer_doc_id: '1234', filepath_local: 'download/1234' }];
        fetchMock.getOnce(/courtlistener/, { results });
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({ results }));
        chrome.extension.getURL.mockImplementation(() => 'img-src.png');
        await cd.attachRecapLinkToEligibleDocs();
        const recapLinks = [...document.querySelectorAll('.recap-inline')];
        expect(recapLinks.length).toBe(1);
        const staleLinks = [...document.querySelectorAll('a#recap-test-suite')];
        staleLinks.map((link) => link.remove());
      });

      it('attaches a working click handler', async () => {
        const body = document.querySelector('body');
        Array.from(links).map((link) => body.appendChild(link));

        const cd = new ContentDelegate(
          tabId,
          expected_url,
          null, // path
          null, // court
          null, // pacer_case_id
          null, // pacer_doc_id
          links
        );
        cd.pacer_doc_ids = [1234];

        const results = [{ pacer_doc_id: '1234', filepath_local: 'download/1234' }];

        fetchMock.getOnce(/courtlistener/, { results });
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({ results }));
        chrome.extension.getURL.mockImplementation(() => 'img-src.png');
        cd.handleRecapLinkClick = jest.fn();
        await cd.attachRecapLinkToEligibleDocs();
        const anchor = document.querySelector('a.recap-inline');
        anchor.click();
        expect(cd.handleRecapLinkClick).toHaveBeenCalled();
        const staleLinks = [...document.querySelectorAll('a#recap-test-suite')];
        staleLinks.map((link) => link.remove());
      });
    });
  });
});
