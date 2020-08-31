import { AppellateDelegate } from '../../src/appellate_delegate';
// 'tabId' values
export const tabId = 1234;
export const court = 'ca9';
export const caseSearchTitle = 'Case Search';
export const caseQueryTitle = 'Case Query';
export const advancedCaseSearchTitle = 'Case Search - Advanced';
export const caseSearchResultsTitle = 'Cases Selection Table';
export const downloadConfirmationTitle = 'Download Confirmation';
export const attachmentMenuTitle = 'Document';
export const fullDocketSearchTitle = 'Docket Report Filter';
export const shortDocketTitle = '19-15716 Summary';
export const longDocketTitle = '19-15716 Docket';

// Smallest possible PDF according to: http://stackoverflow.com/
// questions/17279712/what-is-the-smallest-possible-valid-pdf
export const pdf_data =
  '%PDF-1.\ntrailer<</Root<</Pages<</Kids' + '[<</MediaBox[0 0 3 3]>>]>>>>>>\n';

export const newAppDel = () =>
  new AppellateDelegate({
    tabId: tabId,
    court: court,
    links: [],
    pacerDocId: undefined,
  });

export const blob = new Blob([new ArrayBuffer(100)], { type: 'application/pdf' });

export const genDocTitle = (titleString) => {
  const title = document.createElement('title');
  title.text = titleString;
  return title;
};

export const setTitle = (docTitleString) => {
  const title = document.createElement('title');
  title.innerHTML = docTitleString;
  document.querySelector('body').appendChild(title);
};

export const returnFakeStore = async ({ optionsOverride }) => {
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
