import { ContentDelegate } from '../../src/content_delegate';
import PACER from '../../src/pacer';
import {
  docketQueryContentDelegate,
  nonsenseUrlContentDelegate,
} from './mocks';

export const handleDocketQueryUrlTests = () =>
  describe('handleDocketQueryUrl', () => {
    let form;
    beforeEach(function () {
      form = document.createElement('form');
      document.body.appendChild(form);
      window.chrome = {
        extension: {
          getURL: jest.fn((str) => '/iconimageurl.png'),
        },
        runtime: {
          sendMessage: jest.fn((_, cb) => cb({})),
        },
      };
    });

    afterEach(() => {
      form.remove();
      window.chrome = {};
    });

    it('has no effect when not on a docket query url', () => {
      const cd = nonsenseUrlContentDelegate;
      jest.spyOn(PACER, 'hasPacerCookie').mockImplementation(() => {});
      jest.spyOn(PACER, 'isDocketQueryUrl').mockReturnValue(false);
      cd.handleDocketQueryUrl();
      expect(PACER.hasPacerCookie).not.toHaveBeenCalled();
    });

    // test is dependent on function order of operations,
    // but does exercise all existing branches
    it('checks for a Pacer cookie', () => {
      const cd = nonsenseUrlContentDelegate;
      jest.spyOn(cd.recap, 'getAvailabilityForDocket').mockImplementation(() => {});
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(false);
      jest.spyOn(PACER, 'isDocketQueryUrl').mockReturnValue(true);
      cd.handleDocketQueryUrl();
      expect(cd.recap.getAvailabilityForDocket).not.toHaveBeenCalled();
    });

    it('handles zero results from getAvailabilityForDocket', () => {
      const cd = docketQueryContentDelegate;
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(true);
      jest.spyOn(cd.recap, 'getAvailabilityForDocket').mockImplementation(
        (court, pacerId, cb) =>
          cb({
            count: 0,
            results: [],
          })
      );
      cd.handleDocketQueryUrl();
      expect(form.innerHTML).toBe('');
    });

    it('inserts the RECAP banner on an appropriate page', () => {
      const cd = docketQueryContentDelegate;
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(true);
      jest.spyOn(cd.recap, 'getAvailabilityForDocket').mockImplementation(
        (court, pacerId, cb) =>
          cb({
            count: 1,
            results: [
              {
                date_modified: '2015-12-17T03:24:00',
                absolute_url:
                  '/download/gov.uscourts.canb.531591/' +
                  'gov.uscourts.canb.531591.docket.html',
              },
            ],
          })
      );
      cd.handleDocketQueryUrl();
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

    it('has no effect when on a docket query that has no RECAP', () => {
      const cd = docketQueryContentDelegate;
      jest.spyOn(cd.recap, 'getAvailabilityForDocket').mockImplementation(
        (court, pacerId, cb) =>
          cb({
            count: 0,
            results: [],
          })
      );
      jest.spyOn(PACER, 'hasPacerCookie').mockReturnValue(true);
      cd.handleDocketQueryUrl();
      const banner = document.querySelector('.recap-banner');
      expect(banner).toBeNull();
    });
  });
