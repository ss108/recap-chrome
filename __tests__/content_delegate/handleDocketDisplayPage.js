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
    beforeEach(() => {
      document.body.innerHTML = '';
    });

    afterEach(() => {
      jest.clearAllMocks();
      fetchMock.mockClear();
    });

    describe('option disabled', () => {
      it('has no effect when recap_enabled option is false', async () => {
        const cd = docketDisplayContentDelegate;
        chrome.storage.local.get.mockImplementation((key, cb) => {
          cb({
            ['1234']: { caseId: '531591' },
            options: { recap_enabled: false },
          });
        });
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({}));
        await cd.handleDocketDisplayPage();
        expect(chrome.runtime.sendMessage).not.toHaveBeenCalledWith({
          fetch: {
            options: {
              method: 'POST',
              headers: expect.anything(),
              body: expect.anything(),
            },
            url: expect.stringMatching(/courtlistener/),
          },
        });
      });
    });

    describe('option enabled', () => {
      beforeEach(() => {
        chrome.extension.getURL.mockImplementation(() => 'icon.png');
        chrome.storage.local.get.mockImplementation((key, cb) => {
          cb({
            ['1234']: { caseId: '531591' },
            options: { recap_enabled: true },
          });
        });

        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        table.appendChild(tbody);
        document.querySelector('body').appendChild(table);
      });

      afterEach(() => {
        document.querySelector('table').remove();
      });

      it('has no effect when not on a docket display url', async () => {
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb());
        const cd = nonsenseUrlContentDelegate;
        await cd.handleDocketDisplayPage();
        expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
      });

      it('has no effect when there is no casenum', async () => {
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({}));
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
          chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({}));
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

        it('does not call uploadDocket', async () => {
          chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({}));
          const cd = docketDisplayContentDelegate;
          await cd.handleDocketDisplayPage();
          expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
        });
      });

      describe('when the docket page is not an interstitial page', () => {
        it('adds a button linking to a create alert page on CL', async () => {
          const cd = docketDisplayContentDelegate;
          fetchMock.getOnce(/courtlistener/, {
            count: 1,
            results: [{ stuff: 'text' }],
          });
          await cd.handleDocketDisplayPage();
          const button = document.getElementById('recap-alert-button');
          expect(button).not.toBeNull();
        });

        it('calls uploadDocket and responds to a positive result', async () => {
          chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({}));
          const cd = docketDisplayContentDelegate;
          fetchMock.getOnce(/courtlistener/, {
            count: 1,
            results: [{ stuff: 'text' }],
          });
          jest.spyOn(history, 'replaceState').mockImplementation(() => {});
          await cd.handleDocketDisplayPage();
          expect(chrome.runtime.sendMessage).toHaveBeenNthCalledWith(
            1,
            {
              fetch: {
                url: expect.anything(),
                options: {
                  method: 'GET',
                  headers: expect.anything(),
                },
              },
            },
            expect.any(Function)
          );
          expect(chrome.runtime.sendMessage).toHaveBeenNthCalledWith(
            2,
            {
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
            },
            expect.any(Function)
          );
          expect(chrome.runtime.sendMessage).toHaveBeenNthCalledWith(
            3,
            {
              notifier: {
                title: 'recap_successful_docket_display_upload',
                message: expect.anything(),
                action: 'showUpload',
              },
            },
            expect.any(Function)
          );
          expect(history.replaceState).toHaveBeenCalledWith({ uploaded: true }, '');
          const button = document.getElementById('recap-alert-button');
          expect(button.className.includes('disabled')).not.toBe(true);
          expect(button.getAttribute('aria-disabled')).toBe('false');
        });

        it('calls uploadDocket and responds to a positive historical result', async () => {
          chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({}));
          const cd = historyDocketDisplayContentDelegate;
          fetchMock.getOnce(/courtlistener/, {
            count: 1,
            results: [{ stuff: 'text' }],
          });
          jest.spyOn(history, 'replaceState').mockImplementation(() => {});

          await cd.handleDocketDisplayPage();

          expect(chrome.runtime.sendMessage).toHaveBeenNthCalledWith(
            1,
            {
              fetch: {
                url: expect.anything(),
                options: {
                  method: 'GET',
                  headers: expect.anything(),
                },
              },
            },
            expect.any(Function)
          );
          expect(chrome.runtime.sendMessage).toHaveBeenNthCalledWith(
            2,
            {
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
            },
            expect.any(Function)
          );
          expect(chrome.runtime.sendMessage).toHaveBeenNthCalledWith(
            3,
            {
              notifier: {
                title: 'recap_successful_docket_display_upload',
                message: expect.anything(),
                action: 'showUpload',
              },
            },
            expect.any(Function)
          );
          expect(history.replaceState).toHaveBeenCalledWith({ uploaded: true }, '');
          const button = document.getElementById('recap-alert-button');
          expect(button.className.includes('disabled')).not.toBe(true);
          expect(button.getAttribute('aria-disabled')).toBe('false');
        });

        it('calls uploadDocket and responds to a negative result', async () => {
          chrome.runtime.sendMessage.mockImplementation((msg, cb) =>
            cb({ error: true })
          );
          const cd = docketDisplayContentDelegate;

          fetchMock.getOnce(/courtlistener/, {
            count: 1,
            results: [{ stuff: 'text' }],
          });
          fetchMock.postOnce(/courtlistener/, {});
          jest.spyOn(history, 'replaceState').mockImplementation(() => {});

          await cd.handleDocketDisplayPage();

          expect(chrome.runtime.sendMessage).toHaveBeenNthCalledWith(
            1,
            {
              fetch: {
                url: expect.anything(),
                options: {
                  method: 'GET',
                  headers: expect.anything(),
                },
              },
            },
            expect.any(Function)
          );
          expect(chrome.runtime.sendMessage).toHaveBeenNthCalledWith(
            2,
            {
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
            },
            expect.any(Function)
          );
          expect(chrome.runtime.sendMessage).not.toHaveBeenCalledWith(
            {
              notifier: {
                title: 'recap_successful_docket_display_upload',
                message: expect.anything(),
                action: 'showUpload',
              },
            },
            expect.any(Function)
          );
          expect(history.replaceState).not.toHaveBeenCalled();
        });
      });
    });
  });
});
