import { ContentDelegate } from '../../src/content_delegate';
import { blobToDataURL, singleDocContentDelegate, pdf_data, tabId } from './mocks';

const pre =
  '<head><title>test</title><style>body { margin: 0; } ' +
  'iframe { border: none; }</style></head><body>';
const iFrameStart = '<iframe src="data:pdf"';
const iFrameEnd = ' width="100%" height="100%"></iframe>';
const post = '</body>';
const html = pre + iFrameStart + iFrameEnd + post;
const blob = new Blob([pdf_data], { type: 'application/pdf' });

describe('The ContentDelegate class', () => {
  describe('showPdfPage', () => {
    let documentElement;
    const reader = new FileReader();
    reader.onload = (e) => reader.result;
    const dataUrl = reader.readAsDataURL(blob);
    const mockStorage = {
      options: {
        recap_enabled: true,
        ia_style_filenames: true,
        lawyer_style_filenames: false,
        external_pdf: true,
      },
      [tabId]: {
        ['pdf_blob']: dataUrl,
        docsToCases: { ['034031424909']: '531591' },
      },
    };
    const response = async () => {
      const res = {};
      res.text = () => Promise.resolve('text');
      res.blob = () => Promise.resolve(blob);
      return res;
    };
    beforeEach(() => {
      documentElement = document.createElement('html');

      chrome.storage.local.get.mockImplementation((msg, cb) => cb(mockStorage));
      chrome.storage.local.set.mockImplementation((obj, cb) => cb(true));
      chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb(msg));
      window.saveAs = jest.fn((blob, file) => Promise.resolve(true));

      window.content = {
        fetch: jest.fn(response),
      };
    });

    afterEach(() => {
      documentElement = '';
      jest.clearAllMocks();
      fetch.resetMocks();
    });

    it('handles no iframe', async () => {
      let inner = '<span>html</span>';
      const cd = singleDocContentDelegate;
      await cd.showPdfPage(documentElement, pre + inner + post);
      expect(document.documentElement.innerHTML).toBe(pre + inner + post);
    });

    it('correctly extracts the data before and after the iframe', async () => {
      const cd = singleDocContentDelegate;
      fetch.mockResponseOnce(true);
      await cd.showPdfPage(documentElement, html);
      // removed waiting check because the content_delegate
      // removes the paragraph if successful which seems to occur prior
      // to the test running - checking for the new Iframe should be sufficient
      const expected_iframe = '<iframe src="about:blank"' + iFrameEnd;
      expect(document.documentElement.innerHTML).toBe(pre + expected_iframe + post);
    });

    describe('when it downloads the PDF in the iframe', () => {
      it('makes the back button redisplay the previous page', async () => {
        const cd = singleDocContentDelegate;
        await cd.showPdfPage(documentElement, html);
        expect(window.onpopstate).toEqual(jasmine.any(Function));
        window.onpopstate({ state: { content: 'previous' } });
        expect(document.documentElement.innerHTML).toBe(
          '<head></head><body>previous</body>'
        );
      });

      it('displays the page with downloaded file in an iframe', async () => {
        const cd = singleDocContentDelegate;
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
        const cd = singleDocContentDelegate;
        jest.spyOn(history, 'pushState');
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
        const cd = singleDocContentDelegate;
        await cd.showPdfPage(documentElement, html);
        // check to see if the script sent a message to the background listener
        // with the appropriate fetch call
        expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(
          { fetch: expect.anything() },
          expect.anything()
        );
      });

      it('calls the notifier once the upload finishes', async () => {
        const cd = singleDocContentDelegate;
        await cd.showPdfPage(documentElement, html);
        // check to see if the script sent a message to the background listener
        // with the appropriate fetch call
        expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(
          { notifier: expect.anything() },
          expect.anything()
        );
      });
    });
  });
});
