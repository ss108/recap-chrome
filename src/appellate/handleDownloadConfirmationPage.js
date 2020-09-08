// TODO: add notification that multidocument downloads aren't supported
export async function handleDownloadConfirmationPage() {
  console.log('handleDocumentDownloadConfirmationPage');

  // find the download button and hide it
  const inputs = [...document.querySelectorAll('input')];
  const input = inputs.find((input) => input.type === 'button' && input.value.includes('Accept'));
  if (!input) return console.warn('RECAP: no input button present. Disabling.');
  input.setAttribute('type', 'hidden');
  const baseURI = input.attributes.onclick.baseURI;
  // build the dummy input and insert it next to the original button
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'button');
  newInput.setAttribute('value', input.value);
  input.insertAdjacentElement('beforebegin', newInput);
  newInput.addEventListener('click', (ev) => {
    console.log(baseURI);
    this.onDocumentDownload({ baseURI });
  });

  // bind the eventListener to the downloadDocumentHandler
  // window.addEventListener('message', (ev) => console.log(ev));
}
