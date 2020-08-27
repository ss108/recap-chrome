export async function onDocumentDownload(event) {
  // 0. initialize the function and fetch async data
  console.log('onDocumentDownload');
  document.querySelector('body').className += ' cursor wait';

  // 1.  make the back button display the previous page //
  window.onpopstate = ({ state }) => {
    if (state.content) {
      document.documentElement.innerHTML = state.content;
    }
  };
  history.replaceState({ content: document.documentElement.innerHTML }, '');

  // 2.  collect the formData to request the pdf
  const inputs = [...document.querySelectorAll('form > input')];
  const inputData = [];
  inputs.map(({ name, value }) => {
    // excludes the submit button and the 'recp' undefined field
    if (!!name && !!value) {
      inputData[name] = value;
    }
  });
  // set the receipt field to currentTime to mimic the pacer call
  const formData = { ...inputData, recp: new Date().getTime() };

  // 3. encode the params as URL search params to match the pacer request
  const url = this.buildSearchParamsUrl({ url: event.data, params: formData });

  // 4. get the blob and store it
  const blob = await contentScriptFetch(url).then((res) => res.blob());
  const dataUrl = await blobToDataURL(blob);
  await updateTabStorage({ [this.tabId]: { pdfBlob: dataUrl } });

  // 5. build the innerHtml to show the user

  // set the params before you set the new innerHTML
  const params = {
    pacerCaseId: formData.caseId,
    pacerDocId: formData.dls_id,
    court: this.court,
  };

  // get needed info to build the filename
  const options = await getItemsFromStorage('options');
  const td = [...document.querySelectorAll('td')].find((td) =>
    td.textContent.match(/Case\: \d{2}-\d{4}/)
  );
  const filename = await generateFileName({
    iaStyle: options.ia_style_filenames,
    docketNumber: td.textContent.match(/\d{2}\-\d{4}/)[0],
    attachmentNumber: '', // no relevant number found
    suffix: 'pdf', // for future zip support?
    ...params,
  });

  const externalPdfEnabled = isChromeBrowserAndPdfViewerDisabled()
    ? true
    : options.external_pdf_enabled;

  if (externalPdfEnabled) {
    saveAs(blob, filename);
  } else {
    // create an iframe to display the pdf
    const iframe = document.createElement('iframe');
    iframe.src = URL.createObjectURL(blob);
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('width', '100%');
    iframe.style = 'border: none';

    // insert it into a body and set the style
    const body = document.createElement('body');
    body.style.margin = 0;
    body.style.height = '100vh';
    body.appendChild(iframe);

    // insert it into a top-level html element
    const html = document.createElement('html');
    html.appendChild(body);

    // swap the current documentElement with our new one
    document.documentElement.innerHTML = html.innerHTML;
    // let the browser know we've 'gone forward' a page
    history.pushState({ content: html.innerHTML }, '');
  }

  // 6. upload it to recap
  this.recap.uploadAppellateDocument(params, (response) => {
    history.replaceState({ uploaded: true }, '');
    this.notifier.showUpload(
      'PDF page uploaded to the public RECAP Archive',
      () => {}
    );
  });
}
