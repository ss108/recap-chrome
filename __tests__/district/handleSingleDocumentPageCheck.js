import { ContentDelegate } from '../../src/content_delegate';
import {
  singleDocContentDelegate,
  nonsenseUrlContentDelegate,
  setupChromeSpy,
  removeChromeSpy,
} from './mocks';

describe('The ContentDelegate class', () => {
  describe('handleSingleDocumentPageCheck', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
      chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb(msg));
      chrome.storage.local.get.mockImplementation((key, cb) =>
        cb({ options: {}, 1234: {} })
      );
      chrome.storage.local.set.mockImplementation((key, cb) => cb(true));
      const form = document.createElement('form');
      document.body.appendChild(form);
    });

    afterEach(() => {
      jest.clearAllMocks();
      fetchMock.mockClear();
    });

    describe('when there is NO appropriate form', () => {
      it('has no effect when the URL is wrong', async () => {
        const cd = nonsenseUrlContentDelegate;
        await cd.handleSingleDocumentPageCheck();
        expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
      });

      it('has no effect with a proper URL', async () => {
        const cd = singleDocContentDelegate;
        await cd.handleSingleDocumentPageCheck();
        expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
      });
    });

    describe('when there IS an appropriate form', () => {
      let input;
      let table;

      beforeEach(() => {
        const form = document.querySelector('form');
        input = document.createElement('input');
        input.value = 'View Document';
        form.appendChild(input);

        table = document.createElement('table');
        const table_tr = document.createElement('tr');
        const table_td = document.createElement('td');
        table_td.appendChild(document.createTextNode('Image'));
        table_tr.appendChild(table_td);
        table.appendChild(table_tr);
        document.body.appendChild(table);
      });

      it('has no effect when the URL is wrong', async () => {
        const cd = nonsenseUrlContentDelegate;
        await cd.handleSingleDocumentPageCheck();
        expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
      });

      it('checks availability for the page when the URL is right', async () => {
        const cd = singleDocContentDelegate;
        await cd.handleSingleDocumentPageCheck();
        expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(
          {
            fetch: {
              url: expect.anything(),
              options: { method: 'GET', headers: expect.anything() },
            },
          },
          expect.anything()
        );
      });

      describe('for pacer doc id 531591', () => {
        it('responds to a positive result', async () => {
          const fakePacerDocId = 531591;
          const cd = singleDocContentDelegate;
          cd.pacer_doc_id = fakePacerDocId;
          const response = {
            results: [
              {
                pacer_doc_id: fakePacerDocId,
                filepath_local: 'download/1234',
              },
            ],
          };
          fetchMock.getOnce(/courtlistener/, response);
          chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb(response));

          await cd.handleSingleDocumentPageCheck();

          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(
            {
              fetch: {
                url: expect.anything(),
                options: {
                  method: 'GET',
                  headers: {
                    Authorization: expect.stringContaining('Token'),
                  },
                },
              },
            },
            expect.any(Function)
          );

          const banner = document.querySelector('.recap-banner');
          expect(banner).not.toBeNull();
          const link = banner.querySelector('a');
          expect(link).not.toBeNull();
          expect(link.href).toBe('https://www.courtlistener.com/download/1234');
        });

        it('responds to a negative result', async () => {
          const cd = singleDocContentDelegate;
          const response = { results: [{}] };
          fetchMock.getOnce(/courtlistener/, response);
          chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb(response));

          await cd.handleSingleDocumentPageCheck();
          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(
            {
              fetch: {
                url: expect.anything(),
                options: { method: 'GET', headers: expect.anything() },
              },
            },
            expect.anything()
          );
          const banner = document.querySelector('.recap-banner');
          expect(banner).toBeNull();
        });
      });
    });
  });
});
