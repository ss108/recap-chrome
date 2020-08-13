import { ContentDelegate } from '../../src/content_delegate';
import PACER from '../../src/pacer';
import { linksFromUrls, tabId, setupChromeSpy, removeChromeSpy } from './mocks';

export const attachRecapLinkToEligibleDocsTests = () =>
  describe('attachRecapLinkToEligibleDocs', () => {
    beforeEach(() => setupChromeSpy());
    afterEach(() => removeChromeSpy());

    const fake_urls = ['http://foo.fake/bar/0', 'http://foo.fake/bar/1'];

    const urls = [
      'https://ecf.canb.uscourts.gov/doc1/034031424909',
      'https://ecf.canb.uscourts.gov/doc1/034031438754',
    ];
    const expected_url =
      'https://ecf.canb.uscourts.gov/cgi-bin/DktRpt.pl?531591';

    describe('when there are no valid urls', () => {
      it('does nothing', () => {
        const links = linksFromUrls(fake_urls);
        const cd = new ContentDelegate(
          tabId,
          expected_url,
          null,
          null,
          null,
          null,
          links
        );
        cd.attachRecapLinkToEligibleDocs();
        expect(jasmine.Ajax.requests.mostRecent()).toBeUndefined();
      });
    });

    describe('when there are valid urls', () => {
      const links = linksFromUrls(fake_urls);
      beforeEach(() => {
        Array.from(links).map((link) =>
          document.querySelector('body').appendChild(link)
        );
      });

      afterEach(() => {
        Array.from(links).map((link) => link.remove());
      });

      it('does not attach any links if no urls have recap', () => {
        const cd = new ContentDelegate(
          tabId,
          expected_url,
          null,
          null,
          null,
          null,
          links
        );
        cd.pacer_doc_ids = [1234];
        spyOn(cd.recap, 'getAvailabilityForDocuments').and.callFake(
          (pc, pci, callback) => {
            callback({
              results: [],
            });
          }
        );
        cd.attachRecapLinkToEligibleDocs();
        expect($('.recap-inline').length).toBe(0);
      });

      it('attaches a single link to the one url with recap', () => {
        const cd = new ContentDelegate(
          tabId,
          expected_url,
          null,
          null,
          null,
          null,
          links
        );
        cd.pacer_doc_ids = [1234];
        spyOn(cd.recap, 'getAvailabilityForDocuments').and.callFake(
          (pc, pci, callback) => {
            callback({
              results: [
                { pacer_doc_id: 1234, filepath_local: 'download/1234' },
              ],
            });
          }
        );
        cd.attachRecapLinkToEligibleDocs();
        expect($('.recap-inline').length).toBe(1);
        document.getElementsByClassName('recap-inline')[0].remove();
      });

      describe('attachRecapLinkToEligibleDocs', () => {
        const fake_urls = ['http://foo.fake/bar/0', 'http://foo.fake/bar/1'];

        const urls = [
          'https://ecf.canb.uscourts.gov/doc1/034031424909',
          'https://ecf.canb.uscourts.gov/doc1/034031438754',
        ];
        const expected_url =
          'https://ecf.canb.uscourts.gov/cgi-bin/DktRpt.pl?531591';

        describe('when there are no valid urls', () => {
          it('does nothing', () => {
            const links = linksFromUrls(fake_urls);
            const cd = new ContentDelegate(
              tabId,
              expected_url,
              null,
              null,
              null,
              null,
              links
            );
            cd.attachRecapLinkToEligibleDocs();
            expect(jasmine.Ajax.requests.mostRecent()).toBeUndefined();
          });
        });

        describe('when there are valid urls', () => {
          const links = linksFromUrls(urls);
          beforeEach(() => {
            Array.from(links).map((link) =>
              document.querySelector('body').appendChild(link)
            );
          });

          afterEach(() => {
            Array.from(links).map((link) => link.remove());
          });

          it('does not attach any links if no urls have recap', () => {
            const cd = new ContentDelegate(
              tabId,
              expected_url,
              null,
              null,
              null,
              null,
              links
            );
            cd.pacer_doc_ids = [1234];
            spyOn(cd.recap, 'getAvailabilityForDocuments').and.callFake(
              (pc, pci, callback) => {
                callback({
                  results: [],
                });
              }
            );
            cd.attachRecapLinkToEligibleDocs();
            expect($('.recap-inline').length).toBe(0);
          });

          it('attaches a single link to the one url with recap', () => {
            const cd = new ContentDelegate(
              tabId,
              expected_url,
              null,
              null,
              null,
              null,
              links
            );
            cd.pacer_doc_ids = [1234];
            spyOn(cd.recap, 'getAvailabilityForDocuments').and.callFake(
              (pc, pci, callback) => {
                callback({
                  results: [
                    { pacer_doc_id: 1234, filepath_local: 'download/1234' },
                  ],
                });
              }
            );
            cd.attachRecapLinkToEligibleDocs();
            expect($('.recap-inline').length).toBe(1);
            document.getElementsByClassName('recap-inline')[0].remove();
          });

          it('attaches a working click handler', () => {
            const cd = new ContentDelegate(
              tabId,
              expected_url,
              null,
              null,
              null,
              null,
              links
            );
            cd.pacer_doc_ids = [1234];
            spyOn(
              cd,
              'handleRecapLinkClick'
            ).and.callFake((window, href) => {});
            spyOn(cd.recap, 'getAvailabilityForDocuments').and.callFake(
              (pc, pci, callback) => {
                callback({
                  results: [
                    { pacer_doc_id: 1234, filepath_local: 'download/1234' },
                  ],
                });
              }
            );
            cd.attachRecapLinkToEligibleDocs();
            const link = $(links[0]).next().click();
            expect(cd.handleRecapLinkClick).toHaveBeenCalled();
            document.getElementsByClassName('recap-inline')[0].remove();
          });
        });
      });
    });
  });
