import { ContentDelegate } from '../../src/content_delegate';
import PACER from '../../src/pacer';
import { docketQueryContentDelegate, nonsenseUrlContentDelegate } from './mocks';

describe('The ContentDelegate class', () => {
  describe('handleDocketQueryUrl', () => {
    let form;
    beforeEach(function () {
      document.body.innerHTML = '';
      form = document.createElement('form');
      document.body.appendChild(form);
      chrome.extension.getURL.mockImplementation(() => './iconimageurl.png');
      chrome.runtime.sendMessage.mockImplementation((msb, cb) => cb(msg));
    });

    afterEach(() => {
      jest.clearAllMocks();
      fetchMock.mockClear();
    });

    it('has no effect when not on a docket query url', async () => {
      const cd = nonsenseUrlContentDelegate;
      jest.spyOn(PACER, 'hasPacerCookie').mockImplementation(() => {});
      jest.spyOn(PACER, 'isDocketQueryUrl').mockReturnValue(false);
      await cd.handleDocketQueryUrl();
      expect(PACER.hasPacerCookie).not.toHaveBeenCalled();
    });

    // test is dependent on function order of operations,
    // but does exercise all existing branches
    it('checks for a Pacer cookie', async () => {
      const cd = nonsenseUrlContentDelegate;
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(false);
      jest.spyOn(PACER, 'isDocketQueryUrl').mockReturnValue(true);
      await cd.handleDocketQueryUrl();
      expect(fetchMock.calls.length).toBe(0);
    });

    it('handles zero results from getAvailabilityForDocket', async () => {
      const results = {
        count: 0,
        results: [],
      };
      fetchMock.getOnce(/courtlistener/, results);
      const cd = docketQueryContentDelegate;
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(true);
      chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb(results));
      await cd.handleDocketQueryUrl();
      expect(form.innerHTML).toBe('');
    });

    it('inserts the RECAP banner on an appropriate page', async () => {
      const results = {
        count: 1,
        results: [
          {
            date_modified: '2015-12-17T03:24:00',
            absolute_url:
              '/download/gov.uscourts.canb.531591/' +
              'gov.uscourts.canb.531591.docket.html',
          },
        ],
      };
      fetchMock.getOnce(/courtlistener/, results);
      const cd = docketQueryContentDelegate;
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(true);
      chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb(results));

      await cd.handleDocketQueryUrl();
      const banner = document.querySelector('.recap-banner');
      expect(banner).not.toBeNull();
      expect(banner.innerHTML).toContain('2015-12-17T03:24:00');
      const link = banner.querySelector('a');
      expect(link).not.toBeNull();
      expect(link.href).toBe(
        'https://www.courtlistener.com/download/gov.uscourts.' +
          'canb.531591/gov.uscourts.canb.531591.docket.html'
      );
    });

    it('has no effect when on a docket query that has no RECAP', async () => {
      const results = {
        count: 0,
        results: [],
      };
      const cd = docketQueryContentDelegate;
      fetchMock.getOnce('*', results);
      chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb(results));
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(true);
      await cd.handleDocketQueryUrl();
      const banner = document.querySelector('.recap-banner');
      expect(banner).toBeNull();
    });
  });
});
