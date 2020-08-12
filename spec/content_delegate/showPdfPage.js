import { ContentDelegate } from '../../src/content_delegate';
import { blobToDataURL, singleDocContentDelegate } from './mocks';

export const showPdfPageTests = () =>
  describe('showPdfPage', () => {
    beforeEach(async () => {
      let documentElement;
      const pre =
        '<head><title>test</title><style>body { margin: 0; } ' +
        'iframe { border: none; }</style></head><body>';
      const iFrameStart = '<iframe src="data:pdf"';
      const iFrameEnd = ' width="100%" height="100%"></iframe>';
      const post = '</body>';
      const html = pre + iFrameStart + iFrameEnd + post;
      const cd = singleDocContentDelegate;
      const blob = new Blob([new ArrayBuffer(1000)], {
        type: 'application/pdf',
      });
      const dataUrl = await blobToDataURL(blob);
      documentElement = document.createElement('html');
      window.chrome = {
        runtime: {
          sendMessage: jasmine.createSpy().and.callFake((_, cb) => cb({})),
        },
        storage: {
          local: {
            get: jasmine.createSpy().and.callFake((_, cb) => {
              cb({
                options: {
                  recap_enabled: true,
                  ['ia_style_filenames']: true,
                  ['lawyer_style_filenames']: false,
                  ['external_pdf']: true,
                },
                [tabId]: {
                  ['pdf_blob']: dataUrl,
                  docsToCases: { ['034031424909']: '531591' },
                },
              });
            }),
            remove: jasmine.createSpy('remove').and.callFake(function () {}),
            set: jasmine.createSpy('set').and.callFake(function () {}),
          },
        },
      };

      window.saveAs = jasmine
        .createSpy('saveAs')
        .and.callFake((blob, file) => Promise.resolve(true));

      spyOn(cd.recap, 'uploadDocument').and.callFake(
        (court, caseId, docId, docNumber, attachNumber, callback) => {
          callback.tab = { id: 1234 };
          callback(true);
        }
      );
    });

    afterEach(() => {
      window.chrome = {};
      window.saveAs = null;
    });

    it('handles no iframe', () => {
      let inner = '<span>html</span>';
      cd.showPdfPage(documentElement, pre + inner + post);
      expect(document.documentElement.innerHTML).toBe(pre + inner + post);
    });

    it('correctly extracts the data before and after the iframe', async () => {
      await cd.showPdfPage(documentElement, html);
      // removed waiting check because the content_delegate
      // removes the paragraph if successful which seems to occur prior
      // to the test running - checking for the new Iframe should be sufficient
      const expected_iframe = '<iframe src="about:blank"' + iFrameEnd;
      expect(document.documentElement.innerHTML).toBe(
        pre + expected_iframe + post
      );
    });

    describe('when it downloads the PDF in the iframe', () => {
      const casenum = '437098';
      const cd = singleDocContentDelegate;

      beforeEach(() => {
        spyOn(cd.recap, 'getPacerCaseIdFromPacerDocId').and.callFake(
          (pdi, callback) => {
            callback.tab = { id: 1234 };
            callback(casenum);
          }
        );
        spyOn(cd.notifier, 'showUpload').and.callFake((message, cb) =>
          cb(true)
        );
        spyOn(URL, 'createObjectURL').and.returnValue('data:blob');
        spyOn(history, 'pushState').and.callFake(() => {});
      });

      afterEach(() => (window.saveAs = null));

      it('makes the back button redisplay the previous page', async () => {
        await cd.showPdfPage(documentElement, html);
        expect(window.onpopstate).toEqual(jasmine.any(Function));
        window.onpopstate({ state: { content: 'previous' } });
        expect(document.documentElement.innerHTML).toBe(
          '<head></head><body>previous</body>'
        );
      });

      it('displays the page with downloaded file in an iframe', async () => {
        await cd.showPdfPage(documentElement, html);
        if (
          navigator.userAgent.indexOf('Chrome') < 0 &&
          navigator.plugins.namedItem('Chrome PDF Viewer')
        ) {
          // isExternalPdf, file is saved with saveAs
          // Test fails on Chrome 78.0.3904 because carriage returns
          // are present in the grabbed html. A quick fix is to use
          // a set of non-null characters [^\0] instead of the dot
          // operator -- see https://www.regular-expressions.info/dot.html
          const iframe = document.querySelector('iframe[src="data:blob"]');
          expect(iframe).not.toBeNull();
        } else {
          const iframe = document.querySelector('iframe[src="about:blank"]');
          expect(iframe).not.toBeNull();
          expect(window.saveAs).toHaveBeenCalled();
        }
      });

      it('puts the generated HTML in the page history', async () => {
        await cd.showPdfPage(documentElement, html);
        if (
          navigator.userAgent.indexOf('Chrome') < 0 &&
          navigator.plugins.namedItem('Chrome PDF Viewer')
        ) {
          // isExternalPdf, file is saved with saveAs
          expect(history.pushState).toHaveBeenCalled();
        } else {
          expect(history.pushState).not.toHaveBeenCalled();
          expect(window.saveAs).toHaveBeenCalled();
        }
      });

      it('uploads the PDF to RECAP', async () => {
        await cd.showPdfPage(documentElement, html);
        expect(cd.recap.uploadDocument).toHaveBeenCalled();
      });

      it('calls the notifier once the upload finishes', async () => {
        await cd.showPdfPage(documentElement, html);
        expect(cd.notifier.showUpload).toHaveBeenCalled();
      });
    });
  });
