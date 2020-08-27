describe('when checkForAndUploadOpinion is called', () => {
  describe('when an opinion is not available', () => {
    it('should do nothing', async () => {
      const ad = newAppDel();
      await ad.checkForAndUploadOpinion({ pacerCaseId: '531931' });
      expect(window.fetch).not.toHaveBeenCalled();
    });
  });

  describe('when an opinion is available', () => {
    let origDocUrl;
    beforeEach(() => {
      const tr = document.createElement('tr');

      const td = document.createElement('td');
      td.textContent = 'OPINION';
      td.setAttribute('width', '90%');
      tr.appendChild(td);

      const anchor = document.createElement('a');
      anchor.href = '/docs1/12345678/docs1/23456789';
      tr.append(anchor);

      const table = document.createElement('table');
      table.appendChild(tr);
      document.querySelector('body').appendChild(table);

      origDocUrl = document.URL;
      document.URL = [
        'https://ecf.ca9.uscourts.gov',
        'in/bean/servlet/TransportRoom',
        'servlet?="moo"',
      ].join('/');
      setTitle(longDocketTitle);
    });

    afterEach(() => {
      document.querySelector('table').remove();
      document.URL = origDocUrl;
      setTitle('');
    });

    it('should try to download the opinion', async () => {
      ad = newAppDel();
      await ad.checkForAndUploadOpinion({ pacerCaseId: '531931' });
      expect(window.fetch).toHaveBeenCalled();
    });

    describe('it downloads a blob of type pdf', () => {
      it('should store the blob and upload it if the blob if of type pdf', async () => {
        const ad = newAppDel();
        spyOn(ad.recap, 'uploadAppellateDocument').and.callFake((fetchParams, cb) =>
          cb(true)
        );
        spyOn(ad.notifier, 'showUpload').and.callFake((msg, cb) => cb(msg));
        await ad.checkForAndUploadOpinion({ pacerCaseId: '531931' });
        expect(ad.recap.uploadAppellateDocument).toHaveBeenCalled();
      });

      it('calls the notifier', async () => {
        const ad = newAppDel();
        spyOn(ad.recap, 'uploadAppellateDocument').and.callFake((fetchParams, cb) =>
          cb(true)
        );
        spyOn(ad.notifier, 'showUpload').and.callFake((msg, cb) => cb(msg));
        await ad.checkForAndUploadOpinion({ pacerCaseId: '531931' });
        expect(ad.notifier.showUpload).toHaveBeenCalled();
      });
    });
  });
});
