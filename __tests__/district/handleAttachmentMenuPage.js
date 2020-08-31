import { ContentDelegate } from '../../src/district';
import {
  singleDocContentDelegate,
  nonsenseUrlContentDelegate,
  docketDisplayContentDelegate,
} from './mocks';

const resetHistory = () => window.history.replaceState({}, '');

describe('The ContentDelegate class', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
    fetchMock.mockClear();
    resetHistory();
  });

  describe('handleAttachmentMenuPage', () => {
    describe('option disabled', () => {
      beforeEach(() => {
        const form = document.createElement('form');
        document.body.appendChild(form);
        chrome.storage.local.get.mockImplementation((key, cb) => {
          cb({
            options: { recap_enabled: false },
            1234: { file_blob: new Blob(['Lookie'], { type: 'text/html' }) },
          });
        });
        chrome.storage.local.set.mockImplementation((obj, cb) => cb({ success: 'yay' }));
        const input = document.createElement('input');
        input.value = 'Download All';
        form.appendChild(input);
      });

      it('has no effect recap_enabled option is not set', async () => {
        const cd = singleDocContentDelegate;
        await cd.handleAttachmentMenuPage();
        expect(fetchMock.calls.length).toBe(0);
      });
    });

    describe('option enabled', () => {
      beforeEach(() => {
        const form = document.createElement('form');
        document.body.appendChild(form);
        chrome.storage.local.get.mockImplementation((key, cb) => {
          cb({ options: { recap_enabled: true } });
        });
        chrome.storage.local.set.mockImplementation((obj, cb) => cb({ success: 'yay' }));
      });

      describe('when the history state is already set', () => {
        beforeEach(() => {
          history.replaceState({ uploaded: true }, '');
        });

        it('has no effect', async () => {
          const cd = docketDisplayContentDelegate;
          await cd.handleAttachmentMenuPage();
          expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
        });
      });

      describe('when there is NO appropriate form', () => {
        it('has no effect when the URL is wrong', async () => {
          const cd = nonsenseUrlContentDelegate;
          await cd.handleAttachmentMenuPage();
          expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
        });

        it('has no effect with a proper URL', async () => {
          const cd = singleDocContentDelegate;
          await cd.handleAttachmentMenuPage();
          expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
        });
      });

      describe('when there IS an appropriate form', () => {
        beforeEach(() => {
          const input = document.createElement('input');
          input.value = 'Download All';
          document.querySelector('form').appendChild(input);
        });

        it('has no effect when the URL is wrong', async () => {
          const cd = nonsenseUrlContentDelegate;
          await cd.handleAttachmentMenuPage();
          expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
        });

        it('uploads the page when the URL is right', async () => {
          const cd = singleDocContentDelegate;
          chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb(true));
          fetchMock.postOnce(/courtlistener/, { success: 'msg' });
          await cd.handleAttachmentMenuPage();
          // tests that the script sends a message to background fetch worker
          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(
            {
              fetch: {
                url: 'https://www.courtlistener.com/api/rest/v3/recap/',
                options: {
                  method: 'POST',
                  headers: expect.anything(),
                  body: expect.anything(),
                },
              },
            },
            expect.any(Function)
          );
        });

        it('calls the upload method and responds to positive result', async () => {
          const cd = singleDocContentDelegate;
          fetchMock.postOnce(/courtlistener/, { res: 200 });
          chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({ success: true }));
          await cd.handleAttachmentMenuPage();
          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(
            {
              notifier: {
                title: 'attachment_page_upload_notification',
                message: expect.anything(),
                action: 'showUpload',
              },
            },
            expect.anything()
          );
        });

        it('calls the upload method and responds to negative result', async () => {
          const cd = singleDocContentDelegate;
          chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb(false));
          fetchMock.postOnce(/courtlistener/, false);

          jest.spyOn(history, 'replaceState').mockImplementation(() => {});

          await cd.handleAttachmentMenuPage();
          expect(chrome.runtime.sendMessage).not.toHaveBeenCalledWith(
            {
              notifier: expect.anything(),
            },
            expect.anything()
          );
          expect(history.replaceState).not.toHaveBeenCalled();
        });
      });
    });
  });
});
