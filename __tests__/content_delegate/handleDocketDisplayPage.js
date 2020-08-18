import { ContentDelegate } from '../../src/content_delegate';
import {
  docketDisplayContentDelegate,
  docketDisplayUrl,
  historyDocketDisplayContentDelegate,
  nonsenseUrlContentDelegate,
  tabId,
} from './mocks';

describe('The ContentDelegate class', () => {
  describe('handleDocketDisplayPage', () => {
    describe('option disabled', () => {
      beforeEach(() => {
        chrome.extension.getURL.mockImplementation(() => 'icon.png');
        chrome.runtime.sendMessage.mockImplementation((msg, cb) =>
          cb({
            ['1234']: { caseId: '531591' },
            options: { recap_enabled: false },
          })
        );
        chrome.storage.local.get.mockImplementation((key, cb) => {
          cb({
            ['1234']: { caseId: '531591' },
            options: { recap_enabled: false },
          });
        });
        chrome.storage.local.set.mockImplementation((obj, cb) => cb());
      });

      afterEach(() => {
        jest.clearAllMocks();
        fetch.resetMocks();
      });

      it('has no effect when recap_enabled option is false', async () => {
        const cd = docketDisplayContentDelegate;
        await cd.handleDocketDisplayPage();
        expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
      });
    });

    describe('option enabled', () => {
      beforeEach(() => {
        chrome.extension.getURL.mockImplementation(() => 'icon.png');
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb(msg));
        chrome.storage.local.get.mockImplementation((key, cb) => {
          cb({
            ['1234']: { caseId: '531591' },
            options: { recap_enabled: true },
          });
        });
        chrome.storage.local.set.mockImplementation((obj, cb) => cb());

        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        table.appendChild(tbody);
        document.querySelector('body').appendChild(table);
      });

      afterEach(() => {
        jest.clearAllMocks();
        fetch.resetMocks();
        document.querySelector('table').remove();
      });

      it('has no effect when not on a docket display url', async () => {
        const cd = nonsenseUrlContentDelegate;
        await cd.handleDocketDisplayPage();
        expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
      });

      it('has no effect when there is no casenum', async () => {
        const cd = new ContentDelegate(
          tabId,
          docketDisplayUrl,
          undefined,
          'canb',
          undefined,
          undefined,
          []
        );
        await cd.handleDocketDisplayPage();
        expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
      });

      describe('when the history state is already set', () => {
        beforeEach(() => {
          history.replaceState({ uploaded: true }, '');
        });

        afterEach(() => {
          history.replaceState({}, '');
        });

        it('has no effect', async () => {
          const cd = docketDisplayContentDelegate;
          await cd.handleDocketDisplayPage();
          expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
        });
      });

      // interstitial check is > 1 input with name 'date_from' and type 'radio'
      describe('when the docket page is an interstitial page', () => {
        beforeEach(() => {
          const input = document.createElement('input');
          input.id = 'input1';
          input.name = 'date_from';
          input.type = 'radio';
          const input2 = input.cloneNode();
          input2.id = 'input2';
          document.body.appendChild(input);
          document.body.appendChild(input2);
        });

        afterEach(() => {
          document.getElementById('input1').remove();
          document.getElementById('input2').remove();
        });

        it('does not call uploadDocket', async () => {
          const cd = docketDisplayContentDelegate;
          await cd.handleDocketDisplayPage();
          expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
        });
      });

      describe('when the docket page is not an interstitial page', () => {
        it('adds a button linking to a create alert page on CL', async () => {
          const cd = docketDisplayContentDelegate;
          fetch.mockResponseOnce({ count: 1, results: [{ stuff: 'text' }] });
          await cd.handleDocketDisplayPage();
          const button = document.getElementById('recap-alert-button');
          expect(button).not.toBeNull();
        });

        it('calls uploadDocket and responds to a positive result', async () => {
          const cd = docketDisplayContentDelegate;
          fetch.mockResponseOnce({ count: 1, results: [{ stuff: 'text' }] });
          jest.spyOn(history, 'replaceState').mockImplementation(() => {});

          await cd.handleDocketDisplayPage();
          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
            fetch: {
              url: expect.anything(),
              options: {
                method: 'GET',
                headers: expect.anything(),
              },
            },
          });
          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
            fetch: {
              url: expect.anything(),
              options: {
                method: 'POST',
                headers: expect.anything(),
                body: {
                  court: expect.anything(),
                  pacer_case_id: expect.anything(),
                  filepath_local: true,
                  upload_type: expect.anything(),
                },
              },
            },
          });
          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
            notifier: {
              title: 'recap_successful_docket_display_upload',
              message: expect.anything(),
              action: 'showUpload',
            },
          });
          expect(history.replaceState).toHaveBeenCalledWith({ uploaded: true }, '');
          const button = document.getElementById('recap-alert-button');
          expect(button.className.includes('disabled')).not.toBe(true);
          expect(button.getAttribute('aria-disabled')).toBe('false');
        });

        it('calls uploadDocket and responds to a positive historical result', async () => {
          const cd = historyDocketDisplayContentDelegate;
          chrome.runtime.sendMessage.mockImplementation((msg, cb) => ({
            count: 1,
            results: [{ stuff: 'text' }],
          }));
          fetch.mockResponseOnce({ count: 1, results: [{ stuff: 'text' }] });
          jest.spyOn(history, 'replaceState').mockImplementation(() => {});

          await cd.handleDocketDisplayPage();

          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
            fetch: {
              url: expect.anything(),
              options: {
                method: 'GET',
                headers: expect.anything(),
              },
            },
          });
          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
            fetch: {
              url: expect.anything(),
              options: {
                method: 'POST',
                headers: expect.anything(),
                body: {
                  court: expect.anything(),
                  pacer_case_id: expect.anything(),
                  filepath_local: true,
                  upload_type: expect.anything(),
                },
              },
            },
          });
          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
            notifier: {
              title: 'recap_successful_docket_display_upload',
              message: expect.anything(),
              action: 'showUpload',
            },
          });
          expect(history.replaceState).toHaveBeenCalledWith({ uploaded: true }, '');
          const button = document.getElementById('recap-alert-button');
          expect(button.className.includes('disabled')).not.toBe(true);
          expect(button.getAttribute('aria-disabled')).toBe('false');
        });

        it('calls uploadDocket and responds to a negative result', async () => {
          const cd = docketDisplayContentDelegate;

          fetch.mockResponseOnce({ count: 1, results: [{ stuff: 'text' }] });
          jest.spyOn(history, 'replaceState').mockImplementation(() => {});

          await cd.handleDocketDisplayPage();

          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
            fetch: {
              url: expect.anything(),
              options: {
                method: 'GET',
                headers: expect.anything(),
              },
            },
          });
          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
            fetch: {
              url: expect.anything(),
              options: {
                method: 'POST',
                headers: expect.anything(),
                body: {
                  court: expect.anything(),
                  pacer_case_id: expect.anything(),
                  filepath_local: true,
                  upload_type: expect.anything(),
                },
              },
            },
          });
          expect(chrome.runtime.sendMessage).not.toHaveBeenCalledWith({
            notifier: {
              title: 'recap_successful_docket_display_upload',
              message: expect.anything(),
              action: 'showUpload',
            },
          });
          expect(history.replaceState).not.toHaveBeenCalled();
        });
      });
    });
  });
});
