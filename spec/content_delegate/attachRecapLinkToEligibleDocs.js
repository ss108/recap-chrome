import { ContentDelegate } from '../../src/content_delegate';
import PACER from '../../src/pacer';
import { linksFromUrls, tabId, setupChromeSpy, removeChromeSpy } from './mocks';

const fake_urls = ['http://foo.fake/bar/0', 'http://foo.fake/bar/1'];

const urls = [
  'https://ecf.canb.uscourts.gov/doc1/034031424909',
  'https://ecf.canb.uscourts.gov/doc1/034031438754',
];
const expected_url = 'https://ecf.canb.uscourts.gov/cgi-bin/DktRpt.pl?531591';

const localCD = (links) => {
  return new ContentDelegate(
    tabId,
    expected_url,
    null,
    null,
    null,
    null,
    links
  );
};

export const attachRecapLinkToEligibleDocsTests = () =>
  describe('attachRecapLinkToEligibleDocs', () => {
    beforeEach(() => setupChromeSpy());
    afterEach(() => removeChromeSpy());

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

      it('does nothing', () => {
        const cd = localCD(links);
        jest.spyOn(window, 'fetch').mockImplementation(() => {});
        cd.attachRecapLinkToEligibleDocs();
        expect(window.fetch).not.toHaveBeenCalled();
      });
    });

    describe('when there are valid urls', () => {
      const links = linksFromUrls(urls);

      describe('when no urls have recap', () => {
        beforeEach(() => {
          const staleLinks = [
            ...document.querySelectorAll('a#recap-test-suite'),
          ];
          staleLinks.map((link) => link.remove());
        });

        it('does not attach any links', () => {
          const cd = localCD(links);
          cd.pacer_doc_ids = [1234];
          jest.spyOn(cd.recap, 'getAvailabilityForDocuments').mockImplementation(
            (pc, pci, callback) => {
              callback({
                results: [],
              });
            }
          );
          cd.attachRecapLinkToEligibleDocs();
          expect($('.recap-inline').length).toBe(0);
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

      it('attaches a single link to the one url with recap', () => {
        const cd = localCD(links);
        cd.pacer_doc_ids = [1234];
        jest.spyOn(cd.recap, 'getAvailabilityForDocuments').mockImplementation(
          (pc, pci, callback) => {
            callback({
              results: [
                { pacer_doc_id: '1234', filepath_local: 'download/1234' },
              ],
            });
          }
        );
        cd.attachRecapLinkToEligibleDocs();
        expect($('.recap-inline').length).toBe(1);
      });

      it('attaches a working click handler', () => {
        const cd = localCD(links);
        cd.pacer_doc_ids = [1234];
        jest.spyOn(cd, 'handleRecapLinkClick').mockImplementation((window, href) => {});
        jest.spyOn(cd.recap, 'getAvailabilityForDocuments').mockImplementation(
          (pc, pci, callback) => {
            callback({
              results: [
                { pacer_doc_id: '1234', filepath_local: 'download/1234' },
              ],
            });
          }
        );
        cd.attachRecapLinkToEligibleDocs();
        const anchor = document.querySelector('a.recap-inline');
        anchor.click();
        expect(cd.handleRecapLinkClick).toHaveBeenCalled();
      });
    });
  });
