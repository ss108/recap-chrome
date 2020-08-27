// TODO: add notification that multidocument downloads aren't supported
export async function handleDownloadConfirmationPage() {
  console.log('handleDocumentDownloadConfirmationPage');

  // find the download button and hide it
  const inputs = [...document.querySelectorAll('input')];
  const input = inputs.find(
    (input) => input.type === 'button' && input.value.includes('Accept')
  );
  input.setAttribute('type', 'hidden');
  // build the dummy input and insert it next to the original button
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'button');
  newInput.setAttribute('value', input.value);
  newInput.addEventListener('click', () =>
    window.postMessage(input.attributes.onclick.baseURI)
  );
  input.insertAdjacentElement('beforebegin', newInput);

  // bind the eventListener to the downloadDocumentHandler
  window.addEventListener('message', this.onDocumentDownload.bind(this), false);
}
