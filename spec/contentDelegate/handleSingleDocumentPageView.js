import { ContentDelegate } from '../../src/content_delegate';
import './mocks';

export const handleSingleDocumentPageViewTests = () =>
  describe('handleSingleDocumentPageView', () => {
    let form;
    beforeEach(() => {
      form = document.createElement('form');
      document.body.appendChild(form);
    });

    afterEach(() => {
      form.remove();
    });

    it('handles appellate check', () => {
      const cd = appellateContentDelegate;
      spyOn(console, 'log');
      spyOn(PACER, 'isSingleDocumentPage').and.returnValue(true);
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
        spyOn(document, 'createElement');
        cd.handleSingleDocumentPageView();
        expect(document.createElement).not.toHaveBeenCalled();
      });

      it('has no effect with a proper URL', () => {
        const cd = singleDocContentDelegate;
        spyOn(cd.recap, 'getAvailabilityForDocuments');
        cd.handleSingleDocumentPageView();
        expect(cd.recap.getAvailabilityForDocuments).not.toHaveBeenCalled();
      });
    });

    describe('when there IS an appropriate form', () => {
      let input;
      let table;

      beforeEach(() => {
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
        spyOn(window, 'addEventListener').and.callThrough();
      });

      afterEach(() => {
        table.remove();
        const scripts = [...document.querySelectorAll('script')];
        const lastScript = scripts.find((script) =>
          script.innerText.match(/^document\.createElement/)
        );
        if (lastScript) {
          lastScript.remove();
        }
      });

      it('creates a non-empty script element', () => {
        const cd = singleDocContentDelegate;
        const scriptSpy = {};
        spyOn(document, 'createElement').and.returnValue(scriptSpy);
        spyOn(document.body, 'appendChild');
        cd.handleSingleDocumentPageView();

        expect(document.createElement).toHaveBeenCalledWith('script');
        expect(scriptSpy.innerText).toEqual(jasmine.any(String));
        expect(document.body.appendChild).toHaveBeenCalledWith(scriptSpy);
      });

      it('adds an event listener for the message in the script', () => {
        const cd = singleDocContentDelegate;
        cd.handleSingleDocumentPageView();

        expect(window.addEventListener).toHaveBeenCalledWith(
          'message',
          jasmine.any(Function),
          false
        );
      });
    });
  });
