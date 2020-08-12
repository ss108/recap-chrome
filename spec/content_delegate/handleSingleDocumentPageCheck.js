import { ContentDelegate } from '../../src/content_delegate';
import {
  singleDocContentDelegate,
  nonsenseUrlContentDelegate,
  setupChromeSpy,
  removeChromeSpy,
} from './mocks';

export const handleSingleDocumentPageCheckTests = () =>
  describe('handleSingleDocumentPageCheck', () => {
    let form;
    beforeEach(() => {
      form = document.createElement('form');
      document.body.appendChild(form);
      setupChromeSpy();
    });

    afterEach(() => {
      removeChromeSpy();
      form.remove();
    });

    describe('when there is NO appropriate form', () => {
      it('has no effect when the URL is wrong', () => {
        const cd = nonsenseUrlContentDelegate;
        spyOn(cd.recap, 'getAvailabilityForDocuments');
        cd.handleSingleDocumentPageCheck();
        expect(cd.recap.getAvailabilityForDocuments).not.toHaveBeenCalled();
      });

      it('has no effect with a proper URL', () => {
        const cd = singleDocContentDelegate;
        spyOn(cd.recap, 'getAvailabilityForDocuments');
        cd.handleSingleDocumentPageCheck();
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
      });

      afterEach(() => {
        // no need to remove input because it is added to
        // the form and removed in the outer scope
        table.remove();
      });

      it('has no effect when the URL is wrong', () => {
        const cd = nonsenseUrlContentDelegate;
        spyOn(cd.recap, 'getAvailabilityForDocuments');
        cd.handleSingleDocumentPageCheck();
        expect(cd.recap.getAvailabilityForDocuments).not.toHaveBeenCalled();
      });

      it('checks availability for the page when the URL is right', () => {
        const cd = singleDocContentDelegate;
        spyOn(cd.recap, 'getAvailabilityForDocuments');
        cd.handleSingleDocumentPageCheck();
        expect(cd.recap.getAvailabilityForDocuments).toHaveBeenCalled();
      });

      describe('for pacer doc id 531591', () => {
        afterEach(() => {
          const banner = document.querySelector('.recap-banner');
          if (banner) {
            banner.remove();
          }
        });

        it('responds to a positive result', () => {
          const fakePacerDocId = 531591;
          const cd = singleDocContentDelegate;
          cd.pacer_doc_id = fakePacerDocId;
          const fake = function (pc, pci, callback) {
            const response = {
              results: [
                {
                  pacer_doc_id: fakePacerDocId,
                  filepath_local: 'download/1234',
                },
              ],
            };
            callback(response);
          };
          spyOn(cd.recap, 'getAvailabilityForDocuments').and.callFake(fake);

          cd.handleSingleDocumentPageCheck();

          expect(cd.recap.getAvailabilityForDocuments).toHaveBeenCalled();
          const banner = document.querySelector('.recap-banner');
          expect(banner).not.toBeNull();
          const link = banner.querySelector('a');
          expect(link).not.toBeNull();
          expect(link.href).toBe('https://www.courtlistener.com/download/1234');
        });

        it('responds to a negative result', () => {
          const cd = singleDocContentDelegate;
          const fake = (pc, pci, callback) => {
            const response = { results: [{}] };
            callback(response);
          };
          spyOn(cd.recap, 'getAvailabilityForDocuments').and.callFake(fake);

          cd.handleSingleDocumentPageCheck();

          expect(cd.recap.getAvailabilityForDocuments).toHaveBeenCalled();
          const banner = document.querySelector('.recap-banner');
          expect(banner).toBeNull();
        });
      });
    });
  });
