// 'tabId' values
const tabId = 1234;
const court = 'ca9';
const caseSearchTitle = 'Case Search';
const caseQueryTitle = 'Case Query';
const advancedCaseSearchTitle = 'Case Search - Advanced';
const caseSearchResultsTitle = 'Cases Selection Table';
const downloadConfirmationTitle = 'Download Confirmation';
const attachmentMenuTitle = 'Document';
const fullDocketSearchTitle = 'Docket Report Filter';
const shortDocketTitle = '19-15716 Summary';
const longDocketTitle = '19-15716 Docket';

const newAppDel = () =>
  new AppellateDelegate({
    tabId: tabId,
    court: court,
    links: [],
    pacerDocId: undefined,
  });
const blob = new Blob([new ArrayBuffer(100)], { type: 'application/pdf' });

const genDocTitle = (titleString) => {
  const title = document.createElement('title');
  title.text = titleString;
  return title;
};

const setTitle = (docTitleString) => {
  let existingTitle = document.querySelector('head > title');
  if (!existingTitle) {
    const title = document.createElement('title');
    document.querySelector('head').appendChild(title);
    existingTitle = title;
  }
  existingTitle.innerText = docTitleString;
};

const returnFakeStore = async ({ optionsOverride }) => {
  const dataUrl = await blobToDataURL(blob);
  const options = optionsOverride
    ? optionsOverride
    : {
        recap_enabled: true,
        ia_style_filenames: true,
        lawyer_style_filenames: false,
        external_pdf: true,
      };
  return {
    options: options,
    [tabId]: {
      zip_blob: dataUrl,
      docsToCases: { ['034031424909']: '531591' },
    },
  };
};

beforeEach(() => {
  window.chrome = {
    storage: {
      local: {
        get: jasmine
          .createSpy('get')
          .and.callFake(async (key, cb) => cb(await returnFakeStore())),
        remove: jasmine.createSpy('remove').and.callFake(() => {}),
        set: jasmine.createSpy('set').and.callFake(function () {}),
      },
    },
  };
  spyOn(window, 'fetch').and.callFake((url, options) => {
    const res = {};
    res.status = jasmine.createSpy().and.callFake(() => Promise.resolve('200'));
    res.text = jasmine
      .createSpy()
      .and.callFake(() =>
        Promise.resolve(`<html><iframe src="http://dummylink.com"></iframe></html>`)
      );
    res.json = jasmine
      .createSpy()
      .and.callFake(() => Promise.resolve({ result: true }));
    res.blob = jasmine.createSpy().and.callFake(() => Promise.resolve(blob));
    return Promise.resolve(res);
  });
  window.saveAs = jasmine
    .createSpy('saveAs')
    .and.callFake((blob, filename) => Promise.resolve(true));
  spyOn(window, 'addEventListener').and.callThrough();
});

afterEach(() => {
  delete window.chrome;
});
