describe('when handleDocketPage has been called', () => {
  beforeEach(() => {
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = 'OPINION';
    td.setAttribute('width', '90%');
    tr.appendChild(td);
    table.appendChild(tr);
    document.querySelector('body').appendChild(table);
    const anchor = document.createElement('a');
    anchor.setAttribute('title', 'Open Document');
    anchor.setAttribute('onclick', "return doDocPostURL('00107526453', '45846' )");
    document.querySelector('body').appendChild(anchor);
  });

  afterEach(() => {
    document.querySelector('table').remove();
  });

  it('calls checkForAndUploadOpinion', async () => {
    const ad = newAppDel();
    spyOn(ad, 'checkForAndUploadOpinion').and.callFake(() => {});
    await ad.handleDocketPage();
    expect(ad.checkForAndUploadOpinion).toHaveBeenCalledWith({
      pacerCaseId: '45846',
    });
  });

  it('calls uploadAppellatePage', async () => {
    const ad = newAppDel();
    spyOn(ad.recap, 'uploadAppellatePage').and.callFake((params, cb) => cb(true));
    await ad.handleDocketPage();
    expect(ad.recap.uploadAppellatePage).toHaveBeenCalled();
  });

  it('should dispatch the notifier', async () => {
    const ad = newAppDel();
    spyOn(ad.notifier, 'showUpload').and.callFake((msg, cb) => cb(true));
    await ad.handleDocketPage();
    expect(ad.notifier.showUpload).toHaveBeenCalled();
  });

  describe('recap is not enabled', () => {
    beforeEach(() => {
      window.chrome.storage.local.get = jasmine
        .createSpy()
        .and.returnValue({ options: { recap_enabled: false } });
    });
    it('should do nothing', async () => {
      const ad = newAppDel();
      spyOn(ad.recap, 'uploadAppellatePage').and.callFake((params, cb) => cb(true));
      expect(ad.recap.uploadAppellatePage).not.toHaveBeenCalled();
    });
  });

  describe('the page has already been uploaded', () => {
    beforeEach(() => {
      window.history.pushState({ uploaded: true }, '');
    });

    it('does nothing', async () => {
      const ad = newAppDel();
      spyOn(ad.recap, 'uploadAppellatePage').and.callFake(() => {});
      await ad.handleDocketPage();
      expect(ad.recap.uploadAppellatePage).not.toHaveBeenCalled();
    });
  });
});
