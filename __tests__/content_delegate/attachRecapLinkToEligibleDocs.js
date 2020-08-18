import { ContentDelegate } from '../../src/content_delegate';
import PACER from '../../src/pacer';
import { linksFromUrls, tabId } from './mocks';

const fake_urls = ['http://foo.fake/bar/0', 'http://foo.fake/bar/1'];

const urls = [
  'https://ecf.canb.uscourts.gov/doc1/034031424909',
  'https://ecf.canb.uscourts.gov/doc1/034031438754',
];
const expected_url = 'https://ecf.canb.uscourts.gov/cgi-bin/DktRpt.pl?531591';

const localCD = (links) => {
  return new ContentDelegate(tabId, expected_url, null, null, null, null, links);
};

describe('The ContentDelegate class', () => {
  describe('attachRecapLinkToEligibleDocs', () => {
    beforeEach(() => {
      chrome.storage.local.get.mockImplementation((msg, cb) => cb({ options: {} }));
    });

    // clear all mocks after each test
    afterEach(() => {
      jest.clearAllMocks();
      fetch.resetMocks();
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
        const cd = localCD(links);
        fetch.mockResponseOnce({});
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({}));
        await cd.attachRecapLinkToEligibleDocs();
        expect(fetch.mock.calls.length).toEqual(0);
      });
    });

    describe('when there are valid urls', () => {
      const links = linksFromUrls(urls);

      describe('when no urls have recap', () => {
        beforeEach(() => {
          const staleLinks = [...document.querySelectorAll('a#recap-test-suite')];
          staleLinks.map((link) => link.remove());
        });

        it('does not attach any links', async () => {
          const results = [];
          fetch.mockResponseOnce({ results });
          chrome.runtime.sendMessage.mockImplementation((msg, cb) =>
            cb({ results })
          );

          const cd = localCD(links);
          cd.pacer_doc_ids = [1234];
          await cd.attachRecapLinkToEligibleDocs();
          const recapLinks = [...document.querySelectorAll('.recap-inline')];
          expect(recapLinks.length).toBe(0);
        });
      });

      beforeEach(() => {
        const body = document.querySelector('body');
        Array.from(links).map((link) => body.appendChild(link));
      });

      afterEach(() => {
        const staleLinks = [...document.querySelectorAll('a#recap-test-suite')];
        staleLinks.map((link) => link.remove());
      });

      it('attaches a single link to the one url with recap', async () => {
        const cd = localCD(links);
        cd.pacer_doc_ids = [1234];
        const results = [{ pacer_doc_id: '1234', filepath_local: 'download/1234' }];
        fetch.mockResponseOnce({ results });
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({ results }));
        await cd.attachRecapLinkToEligibleDocs();
        const recapLinks = [...document.querySelectorAll('.recap-inline')];
        expect(recapLinks.length).toBe(1);
      });

      it('attaches a working click handler', async () => {
        const cd = localCD(links);
        cd.pacer_doc_ids = [1234];
        const results = [{ pacer_doc_id: '1234', filepath_local: 'download/1234' }];
        jest.spyOn(cd, 'handleRecapLinkClick');
        fetch.mockResponseOnce({ results });
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({ results }));
        await cd.attachRecapLinkToEligibleDocs();
        const anchor = document.querySelector('a.recap-inline');
        anchor.click();
        expect(cd.handleRecapLinkClick).toHaveBeenCalled();
      });
    });
  });
});
