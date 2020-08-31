import { newAppDel, setTitle, tabId, longDocketTitle, pdf_data } from './mocks';

describe('The Appellate Delegate Class', () => {
  describe('when checkForAndUploadOpinion is called', () => {
    beforeEach(() => {
      // mock the download from the content.fetch method
      window.content.fetch = jest.fn(() =>
        Promise.resolve({
          blob: () =>
            Promise.resolve(new Blob([pdf_data], { type: 'application/pdf' })),
        })
      );
      // mock the background fetch call
      fetchMock.postOnce(/courtlistener/, { success: true });

      chrome.storage.local.get.mockImplementation((k, cb) =>
        cb({
          [tabId]: {},
        })
      );
      chrome.storage.local.set.mockImplementation((obj, cb) =>
        cb({ success: true })
      );

      chrome.runtime.sendMessage.mockImplementation((msg, cb) =>
        cb({ success: true })
      );
    });

    describe('when an opinion is not available', () => {
      it('should do nothing', async () => {
        const ad = newAppDel();
        await ad.checkForAndUploadOpinion({ pacerCaseId: '531931' });
        expect(fetchMock).not.toHaveBeenCalled();
      });
    });

    describe('when an opinion is available', () => {
      let origDocUrl;
      beforeEach(() => {
        const tr = document.createElement('tr');

        const td = document.createElement('td');
        td.textContent = 'OPINION';
        td.setAttribute('width', '90%');
        tr.appendChild(td);

        const anchor = document.createElement('a');
        anchor.href = '/docs1/12345678/docs1/23456789';
        tr.append(anchor);

        const table = document.createElement('table');
        table.appendChild(tr);
        document.querySelector('body').appendChild(table);

        Object.defineProperty(window.document, 'URL', {
          value: [
            'https://ecf.ca9.uscourts.gov',
            'in/bean/servlet/TransportRoom',
            'servlet?="moo"',
          ].join('/'),
        });
        setTitle(longDocketTitle);
      });

      afterEach(() => {
        document.querySelector('table').remove();
        setTitle('');
      });

      it('should try to download the opinion', async () => {
        jest.spyOn(content, 'fetch');
        const ad = newAppDel();
        await ad.checkForAndUploadOpinion({ pacerCaseId: '531931' });
        expect(content.fetch).toHaveBeenCalled();
      });

      describe('it downloads a blob of type pdf', () => {
        beforeEach(() => {});

        it('should store the blob and upload it if the blob if of type pdf', async () => {
          const ad = newAppDel();
          await ad.checkForAndUploadOpinion({ pacerCaseId: '531931' });
          expect(chrome.storage.local.set).toHaveBeenCalledWith(
            {
              [tabId]: {
                ['file_blob']: expect.any(String),
              },
            },
            expect.any(Function)
          );
        });

        it('calls the notifier', async () => {
          const ad = newAppDel();
          await ad.checkForAndUploadOpinion({ pacerCaseId: '531931' });
          expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(
            {
              notifier: expect.anything(),
            },
            expect.any(Function)
          );
        });
      });
    });
  });
});
