import { ContentDelegate } from '../../src/content_delegate';

// ts: (modulePath: string, exportSymbolName: string) => jasmine.Spy
export const spyOnModule = (module, prop) => {
  const spy = jasmine.createSpy(`Spy of ${module}.${prop}`);
  spyOnProperty(module, prop).and.returnValue(spy);
};

export const tabId = 1234;

export function linksFromUrls(urls) {
  return urls.map((url, index) => {
    const link = document.createElement('a');
    link.id = 'recap-test-suite';
    link.href = url;
    if (index === 0) {
      link.dataset.pacer_doc_id = '1234';
    }
    return link;
  });
}

// 'path' values
export const districtCourtURI = 'https://ecf.canb.uscourts.gov';
export const singleDocPath = '/doc1/034031424909';
export const docketDisplayPath = '/cgi-bin/DktRpt.pl?101092135737069-L_1_0-1';
export const docketQueryPath = '/cgi-bin/DktRpt.pl?531591';
export const historyDocketPath = '/cgi-bin/HistDocQry.pl?101092135737069-L_1_0-1';

// 'url' values
export const docketQueryUrl = districtCourtURI.concat(docketQueryPath);
export const docketDisplayUrl = districtCourtURI.concat(docketDisplayPath);
export const singleDocUrl = districtCourtURI.concat(singleDocPath);
export const historyDocketDisplayUrl = districtCourtURI.concat(historyDocketPath);
export const nonsenseUrl = 'http://something.uscourts.gov/foobar/baz';

export const appellateURL = ''; // Todo get good example value
export const appellatePath = ''; // Todo get good example value

// Smallest possible PDF according to: http://stackoverflow.com/
// questions/17279712/what-is-the-smallest-possible-valid-pdf
export const pdf_data =
  '%PDF-1.\ntrailer<</Root<</Pages<</Kids' + '[<</MediaBox[0 0 3 3]>>]>>>>>>\n';

// 'instances'
export const nonsenseUrlContentDelegate = new ContentDelegate(
  tabId,
  nonsenseUrl,
  []
);

export const noPacerCaseIdContentDelegate = new ContentDelegate(
  tabId, // tabId
  docketQueryUrl, // url
  docketQueryPath, // path
  'canb', // court
  undefined, // pacer_case_id
  undefined, // pacer_doc_id
  [] // links
);

export const docketQueryContentDelegate = new ContentDelegate(
  tabId,
  docketQueryUrl,
  docketQueryPath,
  'canb',
  '531591',
  undefined,
  []
);

export const docketDisplayContentDelegate = new ContentDelegate(
  tabId,
  docketDisplayUrl,
  docketDisplayPath,
  'canb',
  '531591',
  undefined,
  []
);

export const historyDocketDisplayContentDelegate = new ContentDelegate(
  tabId,
  historyDocketDisplayUrl,
  docketDisplayPath,
  'canb',
  '531591',
  undefined,
  []
);
export const appellateContentDelegate = new ContentDelegate(
  tabId,
  appellateURL,
  appellatePath,
  'ca9',
  '1919',
  undefined,
  []
);
export const singleDocContentDelegate = new ContentDelegate(
  tabId,
  singleDocUrl,
  singleDocPath,
  'canb',
  '531591',
  undefined,
  []
);
export function setupChromeSpy() {
  window.chrome = {
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
}
export function removeChromeSpy() {
  window.chrome = {};
}
