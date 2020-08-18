import { ContentDelegate } from '../../src/content_delegate';
import PACER from '../../src/pacer';
import {
  singleDocContentDelegate,
  appellateContentDelegate,
  nonsenseUrlContentDelegate,
} from './mocks';
describe('The ContentDelegate class', () => {
  describe('handleSingleDocumentPageView', () => {
    let form;
    const script = document.createElement('script');

    beforeEach(() => {
      form = document.createElement('form');
      document.body.appendChild(form);
    });

    afterEach(() => {
      jest.clearAllMocks();
      fetch.resetMocks();
    });

    it('handles appellate check', () => {
      const cd = appellateContentDelegate;
      jest.spyOn(console, 'log').mockImplementation(() => {});
      let restore = DEBUGLEVEL;
      DEBUGLEVEL = 4;
      cd.handleSingleDocumentPageView();
      expect(console.log).toHaveBeenCalledWith(
        'RECAP debug [4]: No interposition for appellate downloads yet'
      );
      DEBUGLEVEL = restore;
    });

    describe('when there is NO appropriate form', () => {
      it('has no effect when the URL is wrong', () => {
        const cd = nonsenseUrlContentDelegate;
        document.createElement = jest.fn(() => script);
        cd.handleSingleDocumentPageView();
        expect(document.createElement).not.toHaveBeenCalled();
      });

      it('has no effect with a proper URL', () => {
        const cd = singleDocContentDelegate;
        document.createElement = jest.fn(() => script);
        cd.handleSingleDocumentPageView();
        expect(document.createElement).not.toHaveBeenCalled();
        expect(chrome.runtime.sendMessage).not.toBeCalled();
      });
    });

    describe('when there IS an appropriate form', () => {
      let input;
      let table;

      beforeEach(() => {
        const newForm = document.querySelector('form');
        input = document.createElement('input');
        input.value = 'View Document';
        newForm.appendChild(input);

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
        console.warn(scripts[0].innerText);
        expect(scripts).toBeNull();
      });

      it('adds an event listener for the message in the script', () => {
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
