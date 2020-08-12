import { ContentDelegate } from '../../src/content_delegate';
import {
  singleDocContentDelegate,
  nonsenseUrlContentDelegate,
  docketDisplayContentDelegate,
} from './mocks';

export const handleAttachmentMenuPageTests = () =>
  describe('handleAttachmentMenuPage', () => {
    describe('option disabled', () => {
      let form;
      let input;

      beforeEach(() => {
        form = document.createElement('form');
        document.body.appendChild(form);
        window.chrome = {
          storage: {
            local: {
              get: jasmine.createSpy().and.callFake((_, cb) => {
                cb({ options: { recap_enabled: false } });
              }),
              set: jasmine.createSpy('set').and.callFake(() => {}),
            },
          },
        };
        input = document.createElement('input');
        input.value = 'Download All';
        form.appendChild(input);
      });

      afterEach(() => {
        form.remove();
        window.chrome = {};
      });

      it('has no effect recap_enabled option is not set', () => {
        const cd = singleDocContentDelegate;
        spyOn(cd.recap, 'uploadAttachmentMenu');
        cd.handleAttachmentMenuPage();
        expect(cd.recap.uploadAttachmentMenu).not.toHaveBeenCalled();
      });
    });

    describe('option enabled', () => {
      let form;
      beforeEach(() => {
        form = document.createElement('form');
        document.body.appendChild(form);
        window.chrome = {
          storage: {
            local: {
              get: jasmine.createSpy().and.callFake((_, cb) => {
                cb({ options: { recap_enabled: true } });
              }),
              set: jasmine.createSpy('set').and.callFake(() => {}),
            },
          },
        };
      });

      afterEach(() => {
        form.remove();
        window.chrome = {};
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
          spyOn(cd.recap, 'uploadAttachmentMenu');
          cd.handleAttachmentMenuPage();
          expect(cd.recap.uploadAttachmentMenu).not.toHaveBeenCalled();
        });
      });

      describe('when there is NO appropriate form', () => {
        it('has no effect when the URL is wrong', () => {
          const cd = nonsenseUrlContentDelegate;
          spyOn(cd.recap, 'uploadAttachmentMenu');
          cd.handleAttachmentMenuPage();
          expect(cd.recap.uploadAttachmentMenu).not.toHaveBeenCalled();
        });

        it('has no effect with a proper URL', () => {
          const cd = singleDocContentDelegate;
          spyOn(cd.recap, 'uploadAttachmentMenu');
          cd.handleAttachmentMenuPage();
          expect(cd.recap.uploadAttachmentMenu).not.toHaveBeenCalled();
        });
      });

      describe('when there IS an appropriate form', () => {
        let input;
        beforeEach(() => {
          input = document.createElement('input');
          input.value = 'Download All';
          form.appendChild(input);
        });

        it('has no effect when the URL is wrong', () => {
          const cd = nonsenseUrlContentDelegate;
          spyOn(cd.recap, 'uploadAttachmentMenu');
          cd.handleAttachmentMenuPage();
          expect(cd.recap.uploadAttachmentMenu).not.toHaveBeenCalled();
        });

        it('uploads the page when the URL is right', () => {
          const cd = singleDocContentDelegate;
          spyOn(cd.recap, 'uploadAttachmentMenu');
          cd.handleAttachmentMenuPage();
          expect(cd.recap.uploadAttachmentMenu).toHaveBeenCalled();
        });

        it('calls the upload method and responds to positive result', () => {
          const cd = singleDocContentDelegate;
          const uploadFake = (pc, pci, h, callback) => {
            callback(true);
          };
          spyOn(cd.recap, 'uploadAttachmentMenu').and.callFake(uploadFake);
          spyOn(cd.notifier, 'showUpload');
          spyOn(history, 'replaceState');

          cd.handleAttachmentMenuPage();
          expect(cd.recap.uploadAttachmentMenu).toHaveBeenCalled();
          expect(cd.notifier.showUpload).toHaveBeenCalled();
          expect(history.replaceState).toHaveBeenCalledWith(
            { uploaded: true },
            ''
          );
        });

        it('calls the upload method and responds to negative result', () => {
          const cd = singleDocContentDelegate;
          const uploadFake = (pc, pci, h, callback) => {
            callback(false);
          };
          spyOn(cd.recap, 'uploadAttachmentMenu').and.callFake(uploadFake);
          spyOn(cd.notifier, 'showUpload');
          spyOn(history, 'replaceState');

          cd.handleAttachmentMenuPage();
          expect(cd.recap.uploadAttachmentMenu).toHaveBeenCalled();
          expect(cd.notifier.showUpload).not.toHaveBeenCalled();
          expect(history.replaceState).not.toHaveBeenCalled();
        });
      });
    });
  });
