import { blobToDataURL } from '../../src/utils';
import {
  blob,
  zipFileContentDelegate,
  appendixOnClickUrl,
  expectedOnclick,
  eventUrl,
} from './onDownloadAllSubmit';

describe('The ContentDelegate class', () => {
  describe('handleZipFilePageView', () => {
    beforeEach(async () => {
      const dataUrl = await blobToDataURL(blob);

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

      jest.spyOn(history, 'pushState').mockImplementation((...args) => {});

      window.saveAs = jest.fn((blob, filename) => Promise.resolve(true));
      jest.spyOn(window, 'addEventListener');
      window.URL.createObjectURL = jest.fn((blob) => 'https://fakeblobobjecturl');
      fetchMock.get(/dummyplace/, blob).post(/courtlistener/, { id: 222 });
    });

    afterEach(() => {
      jest.clearAllMocks();
      fetchMock.mockClear();
    });

    describe('it is not a downloadAllDocumentsPage', () => {
      it('should do nothing', () => {
        const cd = zipFileContentDelegate;
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
        const cd = zipFileContentDelegate;
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
        const cd = zipFileContentDelegate;
        cd.handleZipFilePageView();
        const input = document.querySelector('input[value="Download Documents"]');
        expect(input.onclick).not.toBeTruthy();
      });

      it('should add an eventListener to the page', () => {
        const cd = zipFileContentDelegate;
        cd.handleZipFilePageView();
        expect(window.addEventListener).toHaveBeenCalled();
      });
    });
  });
});
