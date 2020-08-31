import PACER from '../pacer';
import { getImage, restrictedErrorDiv } from '../utils';

// Some documents are restricted to case participants. Typically
// this is offered with either an interstitial page (in the case
// of free looks) or an extra box on the receipt page. In both cases
// it's something like this:
//
// <table><tbody>
//   <tr><td>Warning!</td></tr>
//   <tr><td><b>This document is restricted to court users,
//              case participants and public terminal users.</b></td></tr>
// </tbody></table>
//
// The exact text will change, depending on the circumstances. For
// sealed documents, e.g., ohsd offers:
//
//   "The document you are about to view is SEALED; do not allow it
//   to be seen by unauthorized persons."
//
// Sealing behavior differs from CMECF instance to CMECF instance.
//
// Be somewhat paranoid about this and check for either a "Warning!"
// in the first <td> cell of a table, as well as any <b> containing
// "document is restricted", "SEALED", or "do not allow it to be seen".
// Case-insensitively.

// returns true/false if el has textContent matching regex
const isRestricted = (str, regex) => {
  const arr = Array.from(document.querySelectorAll(str));
  return !!arr.find((el) => el.textContent.match(regex));
};

export function checkRestrictions() {
  // The regexes below are pretty broad by design.
  // Only trigger this code on doc1 pages.
  if (!PACER.isSingleDocumentPage(this.url, document)) return false;

  const firstTest = isRestricted('table td:first-child', /Warning!/);
  const secondTest = isRestricted('b', /document is restricted|SEALED|do not allow it to be seen/i);

  // if no restrictedItems found, do nothing
  if (!firstTest && !secondTest) return false;

  console.log('RECAP: Restricted document detected. Skipping upload.');
  // We would like to alter the [R] icon to indicate what's going
  // on, but we cannot call chrome.browserAction.setIcon()
  // here. Instead, we'd need to send a message to the background
  // script? ughhhh. Punt for now.

  // Insert a RECAP banner near the end of the form, before the action button.
  // Ideally this would have some RECAP branding, icon/logo, etc.

  // Ideally we target the form <input>, but absent that
  // we just go to the end of the final form.
  // Should we just always go the end of the final form?
  const target =
    document.querySelector('form input') || document.forms[document.forms.length - 1].lastChild;

  // Nested div for horizontal centering.
  target.insertAdjacentHTML(
    'beforebegin',
    restrictedErrorDiv({ imgSrc: getImage('disabled-38.png') })
  );

  return true;
}
