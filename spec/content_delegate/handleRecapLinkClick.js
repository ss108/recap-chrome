import { ContentDelegate } from '../../src/content_delegate';
import { docketDisplayContentDelegate, singleDocUrl } from './mocks';

export const handleRecapLinkClickTests = () =>
  describe('handleRecapLinkClick', () => {
    const cd = docketDisplayContentDelegate;
    const linkUrl = singleDocUrl;

    describe('when the popup option is not set', () => {
      beforeEach(() => {
        window.chrome = {
          storage: {
            local: {
              get: jest.fn((_, cb) => {
                cb({ options: {} });
              }),
            },
          },
        };
      });

      it('redirects to the link url immediately', () => {
        const window_obj = {};
        cd.handleRecapLinkClick(window_obj, linkUrl);
        expect(window_obj.location).toBe(linkUrl);
      });
    });

    describe('when the popup option is set', () => {
      beforeEach(() => {
        window.chrome = {
          storage: {
            local: {
              get: jest.fn((_, cb) => {
                cb({ options: { recap_link_popups: true } });
              }),
              set: jest.fn(() => {}),
            },
          },
        };
      });

      it('attaches the RECAP popup', () => {
        cd.handleRecapLinkClick({}, linkUrl);
        expect($('#recap-shade').length).not.toBe(0);
        expect($('.recap-popup').length).not.toBe(0);

        let foundLink = false;
        $('.recap-popup a').each((i, link) => {
          if (link.href === linkUrl) {
            foundLink = true;
          }
        });
        expect(foundLink).toBe(true);
        document.getElementById('recap-shade').remove();
        document.getElementsByClassName('recap-popup')[0].remove();
      });
    });
  });
