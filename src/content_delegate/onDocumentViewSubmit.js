import $ from 'jquery';
import PACER from '../pacer';
import {
  debug,
  httpRequest,
  iFrameForPdf,
  toggleLoadingCursor,
  getRecapDataFromPdfDownloadPage,
  getPreviousPageHtmlFromPdfDownloadPage,
  blobToText,
} from '../utils';

export async function onDocumentViewSubmit(event) {
  if (!event.data.id) return;

  // Save a copy of the page source, altered so that the "View Document"
  // button goes forward in the history instead of resubmitting the form.
  const previousPageHtml = getPreviousPageHtmlFromPdfDownloadPage();

  let form = document.getElementById(event.data.id);

  if (PACER.isAppellateCourt(this.court))
    return debug(4, 'Appellate parsing not yet implemented');

  // attempt to extract the document_number, attachment_number, and docket_number
  const data = getRecapDataFromPdfDownloadPage();

  // if there were no matches, submit the form
  if (!data) return form.submit();

  // else destructure the returned data
  const { document_number, attachment_number, docket_number } = data;

  toggleLoadingCursor(); // tell user to wait

  // Now do the form request to get to the view page.  Some PACER sites will
  // return an HTML page containing an <iframe> that loads the PDF document;
  // others just return the PDF document.  As we don't know whether we'll get
  // HTML (text) or PDF (binary), we ask for an ArrayBuffer and convert later.

  const contentFetch = getBrowserFetch();
  const blob = await contentFetch(form.action, {
    method: 'POST',
    body: new FormData(form),
  }).then((res) => {
    const status = res.ok ? 'Success' : 'Error';
    console.info(`RECAP: Submitted RECAP "View" button and got response: ${status}`);
    return res.blob();
  });

  // If we got a PDF, we wrap it in a simple HTML page.
  // This lets us treat both cases uniformly: either way we have an
  // HTML page with an <iframe> in it, which is handled by showPdfPage.
  // canb and ca9 return PDFs and trigger this code path.
  if (blob.type === 'application/pdf') {
    // create a newHtml page with the iframe embedded
    const newHtml = document.documentElement;
    const body = newHtml.querySelector('body');
    body.innerHTML = iFrameForPdf({ src: URL.createObjectURL(blob) });

    // send this page to showPdfPage
    return this.showPdfPage(
      document.documentElement,
      newHtml.innerHTML,
      previousPageHtml,
      document_number,
      attachment_number,
      docket_number
    );
  }

  // else read the blob as text and submit this.showPdfPage
  // dcd (and presumably others) trigger this code path.
  let html = blobToText(blob);

  // check if we have an HTML page which redirects the user to the PDF
  // this was first display by the Northern District of Georgia
  // https://github.com/freelawproject/recap/issues/277
  const redirectResult = [
    ...html.matchAll(/window\.location\s*=\s*["']([^"']+)["'];?/g),
  ];

  if (redirectResult.length > 0) {
    const newHtml = document.documentElement;
    newHtml.querySelector('body').innerHTML = iFrameForPdf({
      src: redirectResult[0][1],
    });
    html = newHtml.innerHTML;
  }

  this.showPdfPage(
    document.documentElement,
    html,
    previousPageHtml,
    document_number,
    attachment_number,
    docket_number
  );
}
