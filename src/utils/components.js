// HTML components built and used by content script

export const showPdfHtml = ({ blobUrl, filename, match }) => {
  const onload =
    'setTimeout(' +
    '() => document.getElementById("recap-download")' +
    '.className = ""' +
    ', 7500)';
  const link =
    `<a href="${blobUrl}" download="${filename}">` + `Save as ${filename}</a>`;
  return [
    match[1],
    '<div id="recap-download" class="initial">',
    link,
    '</div>',
    `<iframe src="${blobUrl}" onload="${onload}"`,
    match[3],
  ].join('');
};

export const restrictedErrorDiv = ({ imgSrc }) => {
  const text =
    'This document <b>will not be uploaded</b>' +
    'to the RECAP Archive because the RECAP extension has detected' +
    'that it may be restricted from public distribution.';
  return `
    <div style="text-align: center">
      <div style="display: inline-block; text-align: left; align: top">
        <div class="recap-banner" style="display: table">
          <div style="display: table-cell; padding: 12px; ">
            <img style="width: auto; height: auto" src="${imgSrc}">
          </div>
          <div style="display: table-cell; vertical-align: middle">
            ${text}
          </div>
        </div>
      </div>
    </div>
  `;
};
export const iFrameForPdf = ({ src }) => {
  return (
    '<style>body { margin: 0; } iframe { border: none; }</style>' +
    `<iframe src="${src}" width="100%" height="100%"></iframe>`
  );
};

export const waitingPage = ({ match }) => {
  return `
    ${match[1]}
    <p id="recap-waiting">Waiting for download...</p>
    <iframe src="about:blank"${match[3]}
  `;
};

// inject a "follow this case on RECAP" button
export const recapAlertButton = (court, pacerCaseId, isActive) => {
  const anchor = document.createElement('a');
  anchor.setAttribute('id', 'recap-alert-button');
  anchor.setAttribute('role', 'button');
  anchor.setAttribute('aria-disabled', isActive ? 'true' : false);
  if (!isActive) {
    anchor.classList.add('disabled');
  }

  const icon = isActive ? 'icon' : 'grey';
  const text = isActive
    ? 'Create an Alert for this Case on RECAP'
    : 'Alerts not yet Supported for this Docket';

  const url = new URL('https://www.courtlistener.com/alert/docket/new/');
  url.searchParams.append('pacer_case_id', pacerCaseId);
  url.searchParams.append('court_id', court);
  anchor.href = url.toString();
  const img = document.createElement('img');
  img.src = chrome.extension.getURL(`${icon}-16.png`);
  anchor.innerHTML = `${img.outerHTML} ${text}`;
  return anchor;
};

export const recapBanner = (result) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'recap-banner');

  const anchor = document.createElement('a');
  anchor.title = 'Docket is available for free in the RECAP Archive.';
  anchor.target = '_blank';
  anchor.href = `https://www.courtlistener.com${result.absolute_url}`;
  const img = document.createElement('img');
  img.src = chrome.extension.getURL('icon-16.png');
  const time = document.createElement('time');
  time.setAttribute('title', result.date_modified);
  time.innerHTML = formatDistanceToNow(parseISO(result.date_modified), {
    addSuffix: 'ago',
  });
  const anchorHtml = [
    img.outerHTML,
    'View and Search this docket as of',
    time.outerHTML,
    'for free from RECAP',
  ].join(' ');
  const small = document.createElement('small');
  small.innerText = 'Note that archived dockets may be out of date';
  anchor.innerHTML = anchorHtml;

  div.appendChild(anchor);
  div.appendChild(document.createElement('br'));
  div.appendChild(small);
  return div;
};