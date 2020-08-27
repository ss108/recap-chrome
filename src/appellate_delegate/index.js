export function AppellateDelegate({ tabId, court, links, pacerDocId }) {
  this.tabId = tabId;
  this.court = court;
  this.targetPage = this.setTargetPage();

  this.notifier = importInstance(Notifier);
  this.recap = importInstance(Recap);
  this.links = links || [];
}

// identify the current page
// currently only implements head title check
AppellateDelegate.prototype.setTargetPage = function () {
  // check the document head for a title
  const titleElement = document.querySelector('title');
  const title = titleElement ? titleElement.text.trim() : '';
  // return page name depending on match
  if (title === 'Case Search') {
    return 'caseSearch';
  } else if (title === 'Case Search - Advanced') {
    return 'advancedCaseSearch';
  } else if (title === 'Cases Selection Table') {
    return 'caseSearchResults';
  } else if (title === 'Case Query') {
    return 'caseQuery';
  } else if (title === 'Download Confirmation') {
    return 'downloadConfirmation';
  } else if (title === 'Document') {
    return 'attachmentMenu';
  } else if (title === 'Docket Report Filter') {
    return 'fullDocketSearch';
  } else if (title.match(/\d+-\d+\sDocket/)) {
    return 'fullDocket';
  } else if (title.match(/\d+-\d+\sSummary/)) {
    return 'shortDocket';
  } else {
    // check the page for an embedded pdf viewer
    const embed = document.querySelector('embed');
    // an embed element will indicate a download document page if
    // type = 'application/pdf' or 'application/x-google-chrome-pdf'
    if (embed && embed.type.includes('pdf')) {
      return 'documentDownload';
    } else {
      console.info('No identified appellate page found');
      return;
    }
  }
};

// unclear if needed
AppellateDelegate.prototype.handleCaseSearchpage = function () {
  console.log('handleCaseSearchPage');
};
// unclear if needed
AppellateDelegate.prototype.handleFullDocketSearchPage = function () {
  console.log('handleFullDocketSearchPage');
};

AppellateDelegate.prototype.handleCaseSearchResultsPage = async function () {
  console.log('handleCaseSearchResults');
  const anchors = [...document.querySelectorAll('a')];
  const pacerCaseId = PACER.getCaseIdFromAppellateSearchResults(anchors);
  if (pacerCaseId) {
    await updateTabStorage({ [this.tabId]: { caseId: pacerCaseId } });
  }
};

// private methods - add private before release
// can't add private now because of eslint issue

// convert formdata to url search params
// see https://fetch.spec.whatwg.org/#fetch-api
AppellateDelegate.prototype.buildSearchParamsUrl = function ({ url, params }) {
  const newUrl = new URL(url);
  Object.keys(params).forEach((key) => newUrl.searchParams.append(key, params[key]));
  return newUrl;
};

// check if the opinion is free to download and if so
// fetch it and upload it to recap in the background
AppellateDelegate.prototype.checkForAndUploadOpinion = async function ({
  pacerCaseId,
}) {
  const trs = [...document.querySelectorAll('tr')];
  const opinionTr = trs.find((tr) => {
    if ([...tr.children].length > 0) {
      const match = [...tr.children].find(
        (td) => td.textContent.match(/OPINION/) && td.width === '90%'
      );
      if (match) {
        return true;
      }
    }
  });
  const link = opinionTr && opinionTr.querySelector('a');
  if (link) {
    const params = {
      caseId: pacerCaseId,
      dls_id: link.href.match(/docs1\/(\d+)/)[1],
      servlet: 'ShowDoc',
      dktType: 'dktPublic',
    };
    // encode the params as URL params
    const url = new URL(document.URL.replace(/\?.*$/, ''));
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    const blob = await contentScriptFetch(url).then((res) => {
      return res.blob();
    });

    const fetchParams = {
      court: this.court,
      pacerCaseId: pacerCaseId,
      pacerDocId: params.dls_id,
    };

    if (blob.type.includes('pdf')) {
      // upload it to recap
      const dataUrl = await blobToDataURL(blob);
      await updateTabStorage({ [this.tabId]: { pdfBlob: dataUrl } });
      this.recap.uploadAppellateDocument(fetchParams, (response) => {
        this.notifier.showUpload(
          'Case Opinion automatically uploaded to the public RECAP Archive',
          () => {}
        );
        // insert available for free tag on item
      });
    }
  }
};
