import { ContentDelegate } from '../../src/content_delegate';
import './mocks';

export const handleDocketDisplayPageTests = () =>
  describe('handleDocketDisplayPage', () => {
    describe('option disabled', () => {
      beforeEach(() => {
        window.chrome = {
          storage: {
            local: {
              get: jasmine.createSpy().and.callFake((_, cb) => {
                cb({
                  ['1234']: { caseId: '531591' },
                  options: { recap_enabled: false },
                });
              }),
              set: jasmine.createSpy('set').and.callFake(() => {}),
            },
          },
        };
      });

      afterEach(() => {
        window.chrome = {};
      });

      it('has no effect when recap_enabled option is false', () => {
        const cd = docketDisplayContentDelegate;
        spyOn(cd.recap, 'uploadDocket');
        cd.handleDocketDisplayPage();
        expect(cd.recap.uploadDocket).not.toHaveBeenCalled();
      });
    });

    describe('option enabled', () => {
      beforeEach(() => {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        table.appendChild(tbody);
        document.querySelector('body').appendChild(table);
        window.chrome = {
          extension: { getURL: jasmine.createSpy('gerURL') },
          storage: {
            local: {
              get: jasmine.createSpy().and.callFake((_, cb) => {
                cb({
                  [1234]: { caseId: '531591' },
                  options: { recap_enabled: true },
                });
              }),
              set: jasmine.createSpy('set').and.callFake(() => {}),
            },
          },
          runtime: {
            sendMessage: jasmine
              .createSpy()
              .and.callFake((_, cb) =>
                cb({ count: 1, results: [{ stuff: 'text' }] })
              ),
          },
        };
      });

      afterEach(() => {
        document.querySelector('table').remove();
        window.chrome = {};
      });

      it('has no effect when not on a docket display url', () => {
        const cd = nonsenseUrlContentDelegate;
        spyOn(cd.recap, 'uploadDocket');
        cd.handleDocketDisplayPage();
        expect(cd.recap.uploadDocket).not.toHaveBeenCalled();
      });

      it('has no effect when there is no casenum', () => {
        const cd = new ContentDelegate(
          tabId,
          docketDisplayUrl,
          undefined,
          'canb',
          undefined,
          undefined,
          []
        );
        spyOn(cd.recap, 'uploadDocket');
        cd.handleDocketDisplayPage();
        expect(cd.recap.uploadDocket).not.toHaveBeenCalled();
      });

      describe('when the history state is already set', () => {
        beforeEach(() => {
          history.replaceState({ uploaded: true }, '');
        });

        afterEach(() => {
          history.replaceState({}, '');
        });

        it('has no effect', () => {
          const cd = docketDisplayContentDelegate;
          spyOn(cd.recap, 'uploadDocket');
          cd.handleDocketDisplayPage();
          expect(cd.recap.uploadDocket).not.toHaveBeenCalled();
        });
      });

      // interstitial check is > 1 input with name 'date_from' and type 'radio'
      describe('when the docket page is an interstitial page', () => {
        beforeEach(() => {
          const input = document.createElement('input');
          input.id = 'input1';
          input.name = 'date_from';
          input.type = 'radio';
          const input2 = input.cloneNode();
          input2.id = 'input2';
          document.body.appendChild(input);
          document.body.appendChild(input2);
        });

        afterEach(() => {
          document.getElementById('input1').remove();
          document.getElementById('input2').remove();
        });

        it('does not call uploadDocket', async () => {
          const cd = docketDisplayContentDelegate;
          spyOn(cd.recap, 'uploadDocket');
          await cd.handleDocketDisplayPage();
          expect(cd.recap.uploadDocket).not.toHaveBeenCalled();
        });
      });
      describe('when the docket page is not an interstitial page', () => {
        it('adds a button linking to a create alert page on CL', async () => {
          const cd = docketDisplayContentDelegate;
          spyOn(cd.recap, 'getAvailabilityForDocket').and.callFake(
            (court, pacerId, cb) =>
              cb({
                count: 1,
                results: [{ stuff: 'text' }],
              })
          );
          await cd.handleDocketDisplayPage();
          const button = document.getElementById('recap-alert-button');
          expect(button).not.toBeNull();
        });

        it('calls uploadDocket and responds to a positive result', async () => {
          const cd = docketDisplayContentDelegate;
          spyOn(cd.notifier, 'showUpload');
          spyOn(cd.recap, 'getAvailabilityForDocket').and.callFake(
            (court, pacerId, cb) =>
              cb({
                count: 1,
                results: [{ stuff: 'text' }],
              })
          );
          spyOn(cd.recap, 'uploadDocket').and.callFake((pc, pci, h, ut, cb) => {
            cb.tab = { id: 1234 };
            cb(true);
          });
          spyOn(history, 'replaceState');

          await cd.handleDocketDisplayPage();
          expect(cd.recap.uploadDocket).toHaveBeenCalled();
          expect(cd.notifier.showUpload).toHaveBeenCalled();
          expect(history.replaceState).toHaveBeenCalledWith(
            { uploaded: true },
            ''
          );
          const button = document.getElementById('recap-alert-button');
          expect(button.className.includes('disabled')).not.toBe(true);
          expect(button.getAttribute('aria-disabled')).toBe('false');
        });

        it('calls uploadDocket and responds to a positive historical result', async () => {
          const cd = historyDocketDisplayContentDelegate;
          spyOn(cd.notifier, 'showUpload');
          spyOn(cd.recap, 'getAvailabilityForDocket').and.callFake(
            (court, pacerId, cb) =>
              cb({
                count: 1,
                results: [{ stuff: 'text' }],
              })
          );
          spyOn(cd.recap, 'uploadDocket').and.callFake((pc, pci, h, ut, cb) => {
            cb.tab = { id: 1234 };
            cb(true);
          });
          spyOn(history, 'replaceState');

          await cd.handleDocketDisplayPage();
          expect(cd.recap.uploadDocket).toHaveBeenCalled();
          expect(cd.notifier.showUpload).toHaveBeenCalled();
          expect(history.replaceState).toHaveBeenCalledWith(
            { uploaded: true },
            ''
          );
          const button = document.getElementById('recap-alert-button');
          expect(button.className.includes('disabled')).not.toBe(true);
          expect(button.getAttribute('aria-disabled')).toBe('false');
        });

        it('calls uploadDocket and responds to a negative result', async () => {
          const cd = docketDisplayContentDelegate;
          spyOn(cd.notifier, 'showUpload');
          spyOn(cd.recap, 'getAvailabilityForDocket').and.callFake(
            (court, pacerId, cb) =>
              cb({
                count: 1,
                results: [{ stuff: 'text' }],
              })
          );
          spyOn(cd.recap, 'uploadDocket').and.callFake((pc, pci, h, ut, cb) => {
            cb.tab = { id: 1234 };
            cb(false);
          });
          spyOn(history, 'replaceState');

          await cd.handleDocketDisplayPage();
          expect(cd.recap.uploadDocket).toHaveBeenCalled();
          expect(cd.notifier.showUpload).not.toHaveBeenCalled();
          expect(history.replaceState).not.toHaveBeenCalled();
        });
      });
    });
  });
