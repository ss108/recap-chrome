import { ContentDelegate } from '../src/content_delegate';
import { blobToDataURL } from '../src/utils';

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

  const blob = new Blob([new ArrayBuffer(1000)], { type: 'application/zip' });

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
    let nativeFetch;
    beforeEach(async () => {
      const dataUrl = await blobToDataURL(
        new Blob([new ArrayBuffer(1000), { type: 'application/zip' }])
      );
      window.chrome = {
        storage: {
          local: {
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
          },
        },
      };
      nativeFetch = window.fetch;
      jest.spyOn(window, 'fetch').mockImplementation((url, options) => {
        const res = {};
        res.status = jest.fn(() => Promise.resolve('200'));
        res.text = jest.fn(() =>
            Promise.resolve(
              `<html><iframe src="http://dummylink.com"></iframe></html>`
            )
          );
        res.json = jest.fn(() => Promise.resolve({ result: true }));
        res.blob = jest.fn(() => Promise.resolve(blob));
        return Promise.resolve(res);
      });
      window.saveAs = jest.fn((blob, filename) => Promise.resolve(true));
      jest.spyOn(window, 'addEventListener');
    });

    afterEach(() => {
      window.chrome = {};
      window.fetch = nativeFetch;
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
          const button = document.querySelector(
            'input[value="Download Documents"]'
          );
          expect(button).toBeTruthy();
        });

        it('the Download Documents button should have an onclick attribute', () => {
          const button = document.querySelector(
            'input[value="Download Documents"]'
          );
          const onclick = button.getAttribute('onclick');
          expect(onclick).toEqual(expectedOnclick);
        });

        it('should remove the onclick attribute from the form and input', () => {
          cd.handleZipFilePageView();
          const input = document.querySelector(
            'input[value="Download Documents"]'
          );
          expect(input.onclick).not.toBeTruthy();
        });

        it('should add an eventListener to the page', () => {
          cd.handleZipFilePageView();
          expect(window.addEventListener).toHaveBeenCalled();
        });
      });
    });

    describe('onDownloadAllSubmit', function () {
      const cd = zipFileContentDelegate;
      beforeEach(async () => {
        jest.spyOn(cd.recap, 'uploadZipFile').mockImplementation(
          (court, pacerCaseId, callback) => {
            callback(true);
          }
        );
        jest.spyOn(history, 'pushState').mockImplementation((...args) => {});
        jest.spyOn(cd.notifier, 'showUpload').mockImplementation((message, callback) => {
          callback(true);
        });
        await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
      });

      it('fetches the page html and extracts the zipFile url', function () {
        expect(window.fetch).toHaveBeenCalled();
      });

      it('downloads the zipFile and stores it in chrome storage', () => {
        expect(window.chrome.storage.local.set).toHaveBeenCalled();
      });

      it('checks options to see if recap is enabled', function () {
        expect(window.chrome.storage.local.get).toHaveBeenCalled();
      });

      it('uploads the Zip file to RECAP', function () {
        expect(cd.recap.uploadZipFile).toHaveBeenCalled();
      });

      it('redirects the user to the download page and forwards the zip file', () => {
        expect(history.pushState).toHaveBeenCalled();
      });

      it('calls the notifier once the upload finishes', function () {
        expect(cd.notifier.showUpload).toHaveBeenCalled();
      });
    });
  });
});
