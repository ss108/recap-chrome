import { ContentDelegate } from '../src/content_delegate';
import * as utils from '../src/utils';
import { pdf_data } from './content_delegate/mocks';

jest.mock('../src/utils', () => ({
  ...jest.requireActual('../src/utils'),
  debug: jest.fn(),
  getBrowserFetch: jest.fn(),
  updateTabStorage: jest.fn(),
}));

describe('The ContentDelegate class', () => {
  const tabId = 1234;
  const districtCourtURI = 'https://ecf.dcd.uscourts.gov';
  const zipPreDownloadPath =
    '/cgi-bin/show_multidocs.pl?caseid=178502&arr_de_seq_nums=5&magic_num=&pdf_header=&hdr=&pdf_toggle_possible=&zipit=1';
  const zipPreDownloadUrl = districtCourtURI.concat(zipPreDownloadPath);
  const expectedOnclick =
    "parent.location='/cgi-bin/show_multidocs.pl?caseid=178502&arr_de_seq_nums=5&magic_num=&pdf_header=&hdr=&pdf_toggle_possible=&zipit=1&caseid=178502&zipit=1&magic_num=&arr_de_seq_nums=5&got_warning=&create_roa=&create_appendix=&bates_format=&dkt=&got_receipt=1'";
  const appendixOnClickUrl =
    "parent.location='/cgi-bin/show_multidocs.pl?caseid=44812&pdf_header=1&pdf_toggle_possible=1&caseid=44812&zipit=2&magic_num=&arr_de_seq_nums=13&got_warning=&create_roa=1&create_appendix=1&bates_format=_lt_pagenum_gt_&restricted_entries=on&sealed_entries=on&dkt=a3771446998&got_receipt=1'";
  const eventUrl =
    '/cgi-bin/show_multidocs.pl?caseid=178502&arr_de_seq_nums=5&magic_num=&pdf_header=&hdr=&pdf_toggle_possible=&zipit=1&caseid=178502&zipit=1&magic_num=&arr_de_seq_nums=5&got_warning=&create_roa=&create_appendix=&bates_format=&dkt=&got_receipt=1';

  const blob = new Blob([pdf_data], { type: 'application/pdf' });

  const dummyIFrame = `<html><iframe src="http://dummylink.com"></iframe></html>`;

  const zipFileContentDelegate = new ContentDelegate(
    1234,
    zipPreDownloadUrl,
    zipPreDownloadPath,
    'canb',
    undefined, // caseId
    undefined, // docId
    [] // links
  );

  const pageWithZipUrl = () => {
    const html = document.createElement('html');
    const body = document.createElement('body');
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://dummyplace.com');
    body.appendChild(iframe);
    html.appendChild(body);
    return html;
  };

  describe('attempts to download a zip file', () => {
    beforeEach(async () => {
      // mock the firefox content.fetch function
      window.content = {
        fetch: jest.fn(() => {
          const res = {};
          res.text = () => Promise.resolve(dummyIFrame);
          return Promise.resolve(res);
        }),
      };
      fetch.mockResponse(() => {
        const res = {};
        res.status = jest.fn(() => Promise.resolve('200'));
        res.text = jest.fn(() => Promise.resolve(dummyIFrame));
        res.json = jest.fn(() => Promise.resolve({ result: true }));
        res.blob = jest.fn(() => Promise.resolve(blob));
        return res;
      });

      const dataUrl = await utils.blobToDataURL(blob);

      chrome.storage.local = {
        get: jest.fn((key, cb) => {
          cb({
            options: {
              recap_enabled: true,
              ['ia_style_filenames']: true,
              ['lawyer_style_filenames']: false,
              ['external_pdf']: true,
            },
            [tabId]: {
              ['zip_blob']: dataUrl,
              docsToCases: { ['034031424909']: '531591' },
            },
          });
        }),
        remove: jest.fn(() => {}),
        set: jest.fn(function () {}),
      };
      jest.spyOn(history, 'pushState').mockImplementation((...args) => {});

      window.saveAs = jest.fn((blob, filename) => Promise.resolve(true));
      jest.spyOn(window, 'addEventListener');
    });

    afterEach(() => {
      fetch.resetMocks();
    });

    describe('handleZipFilePageView', () => {
      const cd = zipFileContentDelegate;

      describe('it is not a downloadAllDocumentsPage', () => {
        it('should do nothing', () => {
          cd.handleZipFilePageView();
          expect(window.addEventListener).not.toHaveBeenCalled();
        });
      });

      // see https://github.com/freelawproject/recap/issues/290
      describe('it is on an AppendixDownloadPage', () => {
        beforeEach(() => {
          const form = document.createElement('form');
          form.setAttribute('action', 'jackson');
          const input1 = document.createElement('input');
          input1.setAttribute('value', 'Download Documents');
          input1.setAttribute('onclick', appendixOnClickUrl);
          input1.setAttribute('type', 'button');
          form.appendChild(input1);
          document.body.appendChild(form);
        });
        afterEach(() => {
          const form = document.querySelector('form');
          if (form) {
            form.remove();
          }
          const scripts = [...document.getElementsByTagName('script')];
          const script = scripts.find((script) =>
            script.innerText.match(/^let\sforms/)
          );
          if (script) {
            script.remove();
          }
        });

        it('should do nothing', () => {
          cd.handleZipFilePageView();
          expect(window.addEventListener).not.toHaveBeenCalled();
        });
      });

      describe('it is a downloadAllDocumentPage', () => {
        beforeEach(() => {
          const form = document.createElement('form');
          form.setAttribute('action', 'jackson');
          const input1 = document.createElement('input');
          input1.setAttribute('value', 'Download Documents');
          input1.setAttribute('onclick', expectedOnclick);
          input1.setAttribute('type', 'button');
          form.appendChild(input1);
          document.body.appendChild(form);
        });

        afterEach(() => {
          const form = document.querySelector('form');
          if (form) {
            form.remove();
          }
          const scripts = [...document.getElementsByTagName('script')];
          const script = scripts.find((script) =>
            script.innerText.match(/^let\sforms/)
          );
          if (script) {
            script.remove();
          }
        });

        it('should contain a Download Documents Button', () => {
          const button = document.querySelector('input[value="Download Documents"]');
          expect(button).toBeTruthy();
        });

        it('the Download Documents button should have an onclick attribute', () => {
          const button = document.querySelector('input[value="Download Documents"]');
          const onclick = button.getAttribute('onclick');
          expect(onclick).toEqual(expectedOnclick);
        });

        it('should remove the onclick attribute from the form and input', () => {
          cd.handleZipFilePageView();
          const input = document.querySelector('input[value="Download Documents"]');
          expect(input.onclick).not.toBeTruthy();
        });

        it('should add an eventListener to the page', () => {
          cd.handleZipFilePageView();
          expect(window.addEventListener).toHaveBeenCalled();
        });
      });
    });

    describe('onDownloadAllSubmit', () => {
      beforeEach(() => fetch.mockResponseOnce(pdf_data));
      afterEach(() => fetch.resetMocks());
      const cd = zipFileContentDelegate;

      it('fetches the page html and extracts the zipFile url', async () => {
        await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
        expect(fetch.mock.calls[0][0]).toEqual(eventUrl);
      });

      it('downloads the zipFile and stores it in chrome storage', async () => {
        await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
        expect(chrome.storage.local.set).toHaveBeenCalled();
      });

      it('checks options to see if recap is enabled', async function () {
        await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
        expect(chrome.storage.local.get).toHaveBeenCalledWith('options');
      });

      it('uploads the Zip file to RECAP', async function () {
        await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
        expect(cd.recap.uploadZipFile).toHaveBeenCalled();
      });

      it('redirects the user to the download page and forwards the zip file', async () => {
        await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
        expect(history.pushState).toHaveBeenCalled();
      });

      it('calls the notifier once the upload finishes', async () => {
        await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
        // expect(utils.dispatchNotifier).toHaveBeenCalled();
      });
    });
  });
});
