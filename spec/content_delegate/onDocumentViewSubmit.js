import { ContentDelegate } from '../../src/content_delegate';
import {
  appellateContentDelegate,
  singleDocContentDelegate,
  pdf_data,
} from './mocks';

export const onDocumentViewSubmitTests = () =>
  describe('onDocumentViewSubmit', () => {
    let form;
    let table;
    const form_id = '1234';
    const event = { data: { id: form_id } };

    const blob = new Blob([pdf_data], { type: 'application/pdf' });
    beforeAll(() => {
      window.chrome = {
        runtime: {
          sendMessage: jasmine.createSpy().and.callFake((_, cb) => cb()),
        },
        extension: { getURL: jasmine.createSpy() },
        storage: {
          local: {
            get: jasmine.createSpy().and.callFake(function (_, cb) {
              cb({ options: {} });
            }),
            set: jasmine.createSpy('set').and.callFake(function () {}),
            remove: jasmine.createSpy('remove').and.callFake(() => {}),
          },
        },
      };
    });

    afterAll(() => {
      window.chrome = {};
    });

    beforeEach(() => {
      form = document.createElement('form');
      form.id = form_id;
      document.body.appendChild(form);

      table = document.createElement('table');
      let tr_image = document.createElement('tr');
      let td_image = document.createElement('td');
      td_image.innerHTML = 'Image 1234-9876';
      tr_image.appendChild(td_image);
      table.appendChild(tr_image);
      document.body.appendChild(table);
      // set the fetchSpy
    });

    afterEach(() => {
      form.remove();
      table.remove();
    });

    it('handles appellate check', () => {
      const cd = appellateContentDelegate;
      spyOn(console, 'log');
      let restore = DEBUGLEVEL;
      DEBUGLEVEL = 4;
      cd.onDocumentViewSubmit(event);
      expect(console.log).toHaveBeenCalledWith(
        'RECAP debug [4]: Appellate parsing not yet implemented'
      );
      DEBUGLEVEL = restore;
    });

    it('sets the onsubmit attribute of the page form', () => {
      const expected_on_submit = 'expectedOnSubmit();';
      form.setAttribute('onsubmit', expected_on_submit);
      spyOn(form, 'setAttribute');
      singleDocContentDelegate.onDocumentViewSubmit(event);

      expect(form.setAttribute).toHaveBeenCalledWith(
        'onsubmit',
        'history.forward(); return false;'
      );
      expect(form.setAttribute).toHaveBeenCalledWith(
        'onsubmit',
        expected_on_submit
      );
    });

    it('calls showPdfPage when the response is a PDF', async () => {
      const cd = singleDocContentDelegate;
      spyOn(window, 'fetch').and.callFake(async (url, options) => {
        const res = {};
        res.type = 'application/pdf';
        res.ok = true;
        res.blob = jasmine.createSpy().and.callFake(() => blob);
        return res;
      });

      spyOn(cd, 'showPdfPage');

      await cd.onDocumentViewSubmit(event);

      expect(cd.showPdfPage).toHaveBeenCalled();
    });

    it('calls showPdfPage when the response is HTML', async () => {
      const cd = singleDocContentDelegate;
      spyOn(window, 'fetch').and.callFake((url, options) => {
        const res = {};
        res.ok = true;
        res.blob = jasmine
          .createSpy()
          .and.callFake(() =>
            Promise.resolve(new Blob(['htmlString'], { type: 'text/html' }))
          );
        return Promise.resolve(res);
      });
      // can't use arrow functions because mock has 'this'
      spyOn(window, 'FileReader').and.callFake(function () {
        return {
          readAsText: function () {
            this.result = '<html lang="en"></html>';
            this.onload();
          },
        };
      });
      spyOn(cd, 'showPdfPage');
      await cd.onDocumentViewSubmit(event);
      expect(cd.showPdfPage).toHaveBeenCalled();
    });
  });
