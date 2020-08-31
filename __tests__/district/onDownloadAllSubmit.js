import { ContentDelegate } from '../../src/district';
import { blobToDataURL } from '../../src/utils';
import { tabId, pdf_data } from './mocks';

export const zipDistrictCourtURI = 'https://ecf.dcd.uscourts.gov';
export const zipPreDownloadPath =
  '/cgi-bin/show_multidocs.pl?caseid=178502&arr_de_seq_nums=5&magic_num=&pdf_header=&hdr=&pdf_toggle_possible=&zipit=1';
export const zipPreDownloadUrl = zipDistrictCourtURI.concat(zipPreDownloadPath);
export const expectedOnclick =
  "parent.location='/cgi-bin/show_multidocs.pl?caseid=178502&arr_de_seq_nums=5&magic_num=&pdf_header=&hdr=&pdf_toggle_possible=&zipit=1&caseid=178502&zipit=1&magic_num=&arr_de_seq_nums=5&got_warning=&create_roa=&create_appendix=&bates_format=&dkt=&got_receipt=1'";
export const appendixOnClickUrl =
  "parent.location='/cgi-bin/show_multidocs.pl?caseid=44812&pdf_header=1&pdf_toggle_possible=1&caseid=44812&zipit=2&magic_num=&arr_de_seq_nums=13&got_warning=&create_roa=1&create_appendix=1&bates_format=_lt_pagenum_gt_&restricted_entries=on&sealed_entries=on&dkt=a3771446998&got_receipt=1'";
export const eventUrl =
  '/cgi-bin/show_multidocs.pl?caseid=178502&arr_de_seq_nums=5&magic_num=&pdf_header=&hdr=&pdf_toggle_possible=&zipit=1&caseid=178502&zipit=1&magic_num=&arr_de_seq_nums=5&got_warning=&create_roa=&create_appendix=&bates_format=&dkt=&got_receipt=1';

export const blob = new Blob([pdf_data], { type: 'application/pdf' });

export const dummyIFrame = `<html><iframe src="http://dummylink.com"></iframe></html>`;

export const zipFileContentDelegate = new ContentDelegate(
  1234,
  zipPreDownloadUrl,
  zipPreDownloadPath,
  'canb',
  undefined, // caseId
  undefined, // docId
  [] // links
);

const mockZipUrlExtraction = () => {
  const html = document.createElement('html');
  const body = document.createElement('body');
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://dummyplace.com');
  body.appendChild(iframe);
  html.appendChild(body);
  return new Promise((resolve, reject) =>
    resolve({
      text: () => Promise.resolve(html.outerHTML),
    })
  );
};

describe('The ContentDelegate class', () => {
  describe('onDownloadAllSubmit', () => {
    beforeEach(async () => {
      const dataUrl = await blobToDataURL(blob);

      // override the default content.fetch mock to return the html
      // that represents a page with an iframe containing the zipFile
      // download link
      jest.spyOn(content, 'fetch').mockImplementation(() => mockZipUrlExtraction());

      // don't actually call history.pushState
      jest.spyOn(history, 'pushState').mockImplementation((...args) => {});

      // mock createObjectUrl -- should probably move to global
      window.URL.createObjectURL = jest.fn((blob) => 'https://fakeblobobjecturl');

      // mock filereader -- should probably move to global
      window.FileReader = jest.fn(function () {
        return {
          readAsDataURL: function () {
            this.result = dataUrl;
            this.onload();
          },
        };
      });

      fetchMock.get(/dummyplace/, blob).post(/courtlistener/, { id: 222 });
      chrome.storage.local.get.mockImplementation((key, cb) => {
        cb({
          options: {
            recap_enabled: true,
            ['ia_style_filenames']: true,
            ['lawyer_style_filenames']: false,
            ['external_pdf']: true,
          },
          [tabId]: {
            ['file_blob']: dataUrl,
            docsToCases: { ['034031424909']: '531591' },
          },
        });
      });

      chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({ success: true }));
      chrome.storage.local.set.mockImplementation((obj, cb) => cb({ success: true }));
      fetchMock.getOnce(/dummylink/, blob);
      fetchMock.postOnce(/courtlistener/, { id: 22 });
    });

    afterEach(() => {
      jest.clearAllMocks();
      fetchMock.mockClear();
    });

    it('fetches the page html and extracts the zipFile url', async () => {
      const cd = zipFileContentDelegate;
      await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
      expect(fetchMock).toHaveBeenCalledWith('https://dummyplace.com/');
    });

    it('downloads the zipFile and stores it in chrome storage', async () => {
      const cd = zipFileContentDelegate;
      await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
      expect(chrome.storage.local.set).toHaveBeenCalled();
    });

    it('checks options to see if recap is enabled', async () => {
      const cd = zipFileContentDelegate;
      await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
      expect(chrome.storage.local.get).toHaveBeenCalledWith(['options'], expect.any(Function));
    });

    it('uploads the Zip file to RECAP', async () => {
      const cd = zipFileContentDelegate;
      await cd.onDownloadAllSubmit({ data: { id: eventUrl } });

      // can't mock background worker to fetch call without mocking and testing
      // the dispatchBackgroundFetch function - consider as an improvement
      // for this current unit test, it is sufficient to assume that the fetch
      // post was made after the background worker received the message.
      const upload = {
        fetch: {
          url: 'https://www.courtlistener.com/api/rest/v3/recap/',
          options: {
            method: 'POST',
            headers: expect.anything(),
            body: expect.anything(),
          },
        },
      };
      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(upload, expect.any(Function));
    });

    it('redirects the user to the download page and forwards the zip file', async () => {
      const cd = zipFileContentDelegate;
      await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
      expect(history.pushState).toHaveBeenCalled();
    });

    it('calls the notifier once the upload finishes', async () => {
      const cd = zipFileContentDelegate;
      await cd.onDownloadAllSubmit({ data: { id: eventUrl } });
      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(
        {
          notifier: expect.anything(),
        },
        expect.any(Function)
      );
    });
  });
});
