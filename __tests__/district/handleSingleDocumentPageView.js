import { ContentDelegate } from '../../src/content_delegate';
import PACER from '../../src/pacer';
import {
  singleDocContentDelegate,
  appellateContentDelegate,
  nonsenseUrlContentDelegate,
} from './mocks';
describe('The ContentDelegate class', () => {
  describe('handleSingleDocumentPageView', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('handles appellate check', () => {
      const cd = appellateContentDelegate;
      jest.spyOn(console, 'debug').mockImplementation(() => {});
      let restore = DEBUGLEVEL;
      DEBUGLEVEL = 4;
      cd.handleSingleDocumentPageView();
      expect(console.debug).toHaveBeenCalledWith(
        'RECAP debug [4]: No interposition for appellate downloads yet'
      );
      DEBUGLEVEL = restore;
    });

    describe('when there is NO appropriate form', () => {
      it('has no effect when the URL is wrong', () => {
        jest.spyOn(document, 'createElement');
        const cd = nonsenseUrlContentDelegate;
        cd.handleSingleDocumentPageView();
        expect(document.createElement).not.toHaveBeenCalled();
      });

      it('has no effect with a proper URL', () => {
        jest.spyOn(document, 'createElement');
        chrome.runtime.sendMessage.mockImplementation((msg, cb) => cb({}));
        const cd = singleDocContentDelegate;
        cd.handleSingleDocumentPageView();
        expect(document.createElement).not.toHaveBeenCalled();
        expect(chrome.runtime.sendMessage).not.toBeCalled();
      });
    });

    describe('when there IS an appropriate form', () => {
      let input;
      let table;

      beforeEach(() => {
        const form = document.createElement('form');
        document.body.appendChild(form);
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

      it('creates a non-empty script element', () => {
        const cd = singleDocContentDelegate;
        cd.handleSingleDocumentPageView();

        const scripts = [...document.querySelectorAll('script')];
        expect(scripts[0].innerText).toMatch(/window\.postMessage/);
      });

      it('adds an event listener for the message in the script', () => {
        jest.spyOn(window, 'addEventListener');
        const cd = singleDocContentDelegate;
        cd.handleSingleDocumentPageView();

        expect(window.addEventListener).toHaveBeenCalledWith(
          'message',
          expect.any(Function),
          false
        );
      });
    });
  });
});
