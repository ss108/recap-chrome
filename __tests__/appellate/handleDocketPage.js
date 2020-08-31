import { newAppDel, tabId, pdf_data } from './mocks';
import { blobToDataURL } from '../../src/utils';

const blob = new Blob([pdf_data], { type: 'application/pdf' });
const resetHistory = () => window.history.replaceState({}, '');

const createStore = async (enabled) => {
  const dataUrl = await blobToDataURL(blob);
  return {
    [tabId]: { file_blob: dataUrl },
    options: {
      recap_enabled: !!enabled,
    },
  };
};

describe('The Appellate Delegate Class', () => {
  afterEach(() => {
    jest.clearAllMocks();
    fetchMock.reset();
    resetHistory();
  });

  describe('when handleDocketPage has been called', () => {
    beforeEach(() => {
      chrome.storage.local.set.mockImplementation((obj, cb) => cb({ success: true }));
      chrome.runtime.sendMessage.mockImplementation((msg, cb) => {
        cb({ success: true });
      });

      const table = document.createElement('table');
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.textContent = 'OPINION';
      td.setAttribute('width', '90%');
      tr.appendChild(td);
      table.appendChild(tr);
      document.querySelector('body').appendChild(table);
      const anchor = document.createElement('a');
      anchor.setAttribute('title', 'Open Document');
      anchor.setAttribute('onclick', "return doDocPostURL('00107526453', '45846' )");
      document.querySelector('body').appendChild(anchor);
    });

    it('calls checkForAndUploadOpinion', async () => {
      const store = await createStore(true);
      chrome.storage.local.get.mockImplementation((key, cb) => cb(store));
      const ad = newAppDel();
      jest.spyOn(ad, 'checkForAndUploadOpinion').mockImplementation(() => {});
      await ad.handleDocketPage();
      expect(ad.checkForAndUploadOpinion).toHaveBeenCalledWith({
        pacerCaseId: '45846',
      });
    });

    it('calls uploadAppellatePage', async () => {
      const store = await createStore(true);
      chrome.storage.local.get.mockImplementation((key, cb) => cb(store));
      const ad = newAppDel();
      jest.spyOn(ad, 'checkForAndUploadOpinion').mockImplementation(() => {});
      await ad.handleDocketPage();
      expect(chrome.runtime.sendMessage).toHaveBeenNthCalledWith(
        1,
        {
          fetch: {
            url: expect.any(String),
            options: {
              method: 'POST',
              headers: expect.anything(),
              body: {
                court: expect.any(String),
                pacer_case_id: '45846',
                upload_type: expect.any(String),
                filepath_local: true,
                debug: false,
              },
            },
          },
        },
        expect.any(Function)
      );
    });

    it('should dispatch the notifier', async () => {
      const store = await createStore(true);
      chrome.storage.local.get.mockImplementation((key, cb) => cb(store));
      const ad = newAppDel();
      jest.spyOn(ad, 'checkForAndUploadOpinion').mockImplementation(() => {});
      await ad.handleDocketPage();
      expect(chrome.runtime.sendMessage).toHaveBeenNthCalledWith(
        2,
        {
          notifier: {
            title: 'notify_successful_appellate_docket_page_upload',
            message: 'Docket page uploaded to the public RECAP Archive',
            action: 'showUpload',
          },
        },
        expect.any(Function)
      );
    });

    it('should do nothing is recap is not enabled', async () => {
      const store = await createStore(false);
      chrome.storage.local.get.mockImplementation((key, cb) => cb(store));
      const ad = newAppDel();
      jest.spyOn(ad, 'checkForAndUploadOpinion').mockImplementation(() => {});
      await ad.handleDocketPage();
      expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
    });

    it('does nothing if the page has already been uploaded', async () => {
      const store = await createStore(true);
      chrome.storage.local.get.mockImplementation((key, cb) => cb(store));
      window.history.pushState({ uploaded: true }, '');
      const ad = newAppDel();
      jest.spyOn(ad, 'checkForAndUploadOpinion').mockImplementation(() => {});
      await ad.handleDocketPage();
      expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
    });
  });
});
