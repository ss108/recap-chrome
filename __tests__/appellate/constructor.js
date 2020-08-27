describe('AppellateDelegate constructor', () => {
  it('gets created with the necessary arguments', () => {
    const ad = newAppDel();
    expect(ad.tabId).toBe(tabId);
    expect(ad.court).toBe(court);
    expect(ad.links).toEqual([]);
    expect(ad.pacerDocId).toBe(undefined);
  });

  describe('it is not on any identified appellate page', () => {
    beforeEach(() => setTitle(''));

    it('has no targetPage set', () => {
      const ad = newAppDel();
      expect(ad.targetPage).not.toBeTruthy();
    });
  });

  describe('it is on a caseSearchPage', () => {
    let ad;
    beforeEach(() => {
      setTitle(caseSearchTitle);
      ad = new AppellateDelegate({
        tabId: tabId,
        court: court,
        links: [],
        pacerDocId: undefined,
      });
      spyOn(ad, 'handleCaseSearchPage').and.callFake(() => {});
    });

    it('sets the targetPage to "caseSearch"', () => {
      expect(ad.targetPage).toBe('caseSearch');
    });

    it('calls handleCaseSearchPage', () => {
      ad.dispatchTargetHandler();
      expect(ad.handleCaseSearchPage).toHaveBeenCalled();
    });
  });

  describe('it is on an advancedCaseSearchPage', () => {
    let ad;
    beforeEach(() => {
      setTitle(advancedCaseSearchTitle);
      ad = new AppellateDelegate({
        tabId: tabId,
        court: court,
        links: [],
        pacerDocId: undefined,
      });
      spyOn(ad, 'handleCaseSearchPage').and.callFake(() => {});
    });

    it('sets the targetPage to "advancedCaseSearch"', () => {
      expect(ad.targetPage).toBe('advancedCaseSearch');
    });

    it('calls handleCaseSearchPage', () => {
      ad.dispatchTargetHandler();
      expect(ad.handleCaseSearchPage).toHaveBeenCalled();
    });
  });

  describe('it is on a caseSearchResultsPage', () => {
    let ad;
    beforeEach(() => {
      setTitle(caseSearchResultsTitle);
      ad = new AppellateDelegate({
        tabId: tabId,
        court: court,
        links: [],
        pacerDocId: undefined,
      });
      spyOn(ad, 'handleCaseSearchResultsPage').and.callFake(() => {});
    });

    it('sets the targetPage to "caseSearchResults"', () => {
      expect(ad.targetPage).toBe('caseSearchResults');
    });

    it('calls handleCaseSearchResultsPage', () => {
      ad.dispatchTargetHandler();
      expect(ad.handleCaseSearchResultsPage).toHaveBeenCalled();
    });
  });

  describe('it is on a caseQueryPage', () => {
    let ad;
    beforeEach(() => {
      setTitle(caseQueryTitle);
      ad = new AppellateDelegate({
        tabId: tabId,
        court: court,
        links: [],
        pacerDocId: undefined,
      });
      spyOn(ad, 'handleCaseQueryPage').and.callFake(() => {});
    });

    it('sets the targetPage to "caseQuery"', () => {
      expect(ad.targetPage).toBe('caseQuery');
    });

    it('calls handleCaseQueryPage', () => {
      ad.dispatchTargetHandler();
      expect(ad.handleCaseQueryPage).toHaveBeenCalled();
    });
  });

  describe('it is on a downloadConfirmationPage', () => {
    let ad;
    beforeEach(() => {
      setTitle(downloadConfirmationTitle);
      ad = new AppellateDelegate({
        tabId: tabId,
        court: court,
        links: [],
        pacerDocId: undefined,
      });
      spyOn(ad, 'handleDownloadConfirmationPage').and.callFake(() => {});
    });

    it('sets the targetPage to "downloadConfirmation"', () => {
      expect(ad.targetPage).toBe('downloadConfirmation');
    });

    it('calls handleDownloadConfirmationPage', () => {
      ad.dispatchTargetHandler();
      expect(ad.handleDownloadConfirmationPage).toHaveBeenCalled();
    });

    describe('it is on an attachmentMenuPage', () => {
      let ad;
      beforeEach(() => {
        setTitle(attachmentMenuTitle);
        ad = new AppellateDelegate({
          tabId: tabId,
          court: court,
          links: [],
          pacerDocId: undefined,
        });
        spyOn(ad, 'handleAttachmentMenuPage').and.callFake(() => {});
      });

      it('sets the targetPage to "attachmentMenu"', () => {
        expect(ad.targetPage).toBe('attachmentMenu');
      });

      it('calls handleAttachmentMenuPage', () => {
        ad.dispatchTargetHandler();
        expect(ad.handleAttachmentMenuPage).toHaveBeenCalled();
      });
    });
    describe('it is on a fullDocketSearchPage', () => {
      let ad;
      beforeEach(() => {
        setTitle(fullDocketSearchTitle);
        ad = new AppellateDelegate({
          tabId: tabId,
          court: court,
          links: [],
          pacerDocId: undefined,
        });
        spyOn(ad, 'handleFullDocketSearchPage').and.callFake(() => {});
      });

      it('sets the targetPage to "fullDocketSearch"', () => {
        expect(ad.targetPage).toBe('fullDocketSearch');
      });

      it('calls handleAttachmentMenuPage', () => {
        ad.dispatchTargetHandler();
        expect(ad.handleFullDocketSearchPage).toHaveBeenCalled();
      });
    });

    describe('it is on a shortDocketPage', () => {
      let ad;
      beforeEach(() => {
        setTitle(shortDocketTitle);
        ad = new AppellateDelegate({
          tabId: tabId,
          court: court,
          links: [],
          pacerDocId: undefined,
        });
        spyOn(ad, 'handleDocketPage').and.callFake(() => {});
      });

      it('sets the targetPage to "shortDocket"', () => {
        expect(ad.targetPage).toBe('shortDocket');
      });

      it('calls handleAttachmentMenuPage', () => {
        ad.dispatchTargetHandler();
        expect(ad.handleDocketPage).toHaveBeenCalled();
      });
    });
    describe('it is on a fullDocketPage', () => {
      let ad;
      beforeEach(() => {
        setTitle(longDocketTitle);
        ad = new AppellateDelegate({
          tabId: tabId,
          court: court,
          links: [],
          pacerDocId: undefined,
        });
        spyOn(ad, 'handleDocketPage').and.callFake(() => {});
      });

      it('sets the targetPage to "fullDocket"', () => {
        expect(ad.targetPage).toBe('fullDocket');
      });

      it('calls handleAttachmentMenuPage', () => {
        ad.dispatchTargetHandler();
        expect(ad.handleDocketPage).toHaveBeenCalled();
      });
    });
  });
});
