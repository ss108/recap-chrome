import { ContentDelegate } from '../../src/district';
import { docketDisplayContentDelegate, singleDocUrl } from './mocks';
import $ from 'jquery';
describe('The ContentDelegate class', () => {
  describe('handleRecapLinkClick', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
    });

    const cd = docketDisplayContentDelegate;
    const linkUrl = singleDocUrl;
    afterEach(() => {
      jest.clearAllMocks();
    });
    describe('when the popup option is not set', () => {
      it('redirects to the link url immediately', () => {
        chrome.storage.local.get.mockImplementation((msg, cb) => cb({ options: {} }));
        const window_obj = {};
        cd.handleRecapLinkClick(window_obj, linkUrl);
        expect(window_obj.location).toBe(linkUrl);
      });
    });

    describe('when the popup option is set', () => {
      beforeEach(() => {
        chrome.storage.local.get.mockImplementation((msg, cb) =>
          cb({ options: { recap_link_popups: true } })
        );
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
});
