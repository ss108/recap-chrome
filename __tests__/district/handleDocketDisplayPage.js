import { ContentDelegate } from '../../src/content_delegate';
import {
  docketDisplayContentDelegate,
  docketDisplayUrl,
  historyDocketDisplayContentDelegate,
  nonsenseUrlContentDelegate,
  tabId,
} from './mocks';

const createStore = async (enabled) => {
  return {
    [tabId]: { caseId: '531591' },
    options: { recap_enabled: !!enabled },
  };
};

const createTable = () => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const tr = document.createElement('tr');
  tbody.appendChild(tr);
  table.appendChild(tbody);
  document.body.appendChild(table);
};

const createInputs = () => {
  const input = document.createElement('input');
  input.id = 'input1';
  input.name = 'date_from';
  input.type = 'radio';
  const input2 = input.cloneNode();
  input2.id = 'input2';
  document.body.appendChild(input);
  document.body.appendChild(input2);
};

describe('The ContentDelegate class', () => {
  describe('handleDocketDisplayPage', () => {
    afterEach(() => {
      history.replaceState({}, '');
      document.body.innerHTML = '';
      jest.clearAllMocks();
      fetchMock.reset();
    });

    it('does nothing if it is not a docket page', async () => {
      const cd = nonsenseUrlContentDelegate;
      await cd.handleDocketDisplayPage();
      expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
    });
    it('has no effect when the history state is already set', async () => {
      createTable();
      history.pushState({ uploaded: true }, '');
      const cd = docketDisplayContentDelegate;
      await cd.handleDocketDisplayPage();
      expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
    });
    it('has no effect if it is on an interstitial page', async () => {
      createInputs();
      const cd = docketDisplayContentDelegate;
      await cd.handleDocketDisplayPage();
      expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
    });
    it('does not upload the docket if recap is disabled', async () => {
      const fetchResult = { count: 1, results: [{ id: 22 }] };
      createTable();
      const store = await createStore(false);
      chrome.storage.local.get.mockImplementation((key, cb) => cb(store));
      chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb(fetchResult));
      fetchMock.getOnce(/courtlistener/, fetchResult);
      const cd = docketDisplayContentDelegate;
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
    describe('option enabled', () => {
      beforeEach(async () => {
        const store = await createStore(true);
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({}));
        chrome.extension.getURL.mockImplementation(() => 'icon.png');
        chrome.storage.local.get.mockImplementation((key, cb) => {
          cb(store);
        });
        createTable();
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

      it('adds a button linking to a create alert page on CL', async () => {
        chrome.storage.local.set.mockImplementation((obj, cb) => cb({ success: 'msg' }));
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => {
          cb({ count: 1, results: [{ some: 'result' }] });
        });
        fetchMock
          .getOnce(/courtlistener/, {
            count: 1,
            results: [{ stuff: 'text' }],
          })
          .postOnce(/courtlistener/, { success: true });
        const cd = docketDisplayContentDelegate;
        await cd.handleDocketDisplayPage();
        const button = document.getElementById('recap-alert-button');
        expect(button).not.toBeNull();
      });

      it('calls uploadDocket and responds to a positive result', async () => {
        chrome.storage.local.set.mockImplementation((obj, cb) => cb({ success: 'msg' }));
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => {
          if (msg.fetch && msg.fetch.options.method === 'POST') {
            cb({ success: true });
          } else {
            cb({ count: 1, results: [{ some: 'result' }] });
          }
        });
        fetchMock
          .getOnce(/courtlistener/, {
            count: 1,
            results: [{ stuff: 'text' }],
          })
          .postOnce(/courtlistener/, { success: true });

        const cd = docketDisplayContentDelegate;
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
              title: expect.any(String),
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
        createTable();
        const results = {
          count: 1,
          results: [{ stuff: 'text' }],
        };
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => {
          if (msg.fetch && msg.fetch.options.method === 'GET') {
            return cb(results);
          }
          return cb({ success: true });
        });
        const cd = historyDocketDisplayContentDelegate;
        fetchMock.getOnce(/courtlistener/, results);
        fetchMock.postOnce(/courtlistener/, { success: true });
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
              title: expect.any(String),
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
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => {
          if (msg.fetch && msg.fetch.options.method === 'POST') {
            cb();
          }
          cb({ count: 1, results: [{ stuff: 'text' }] });
        });
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
