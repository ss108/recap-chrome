import PACER from '../pacer';
import { recapAlertButton, recapBanner } from '../utils';
// If this is a docket query page, ask RECAP whether it has the docket page.
export function handleDocketQueryUrl() {
  if (!PACER.isDocketQueryUrl(this.url)) return;

  // Logged out users that load a docket page, see a login page, so they
  // shouldn't check for docket availability.
  if (!PACER.hasPacerCookie(document.cookie)) return;

  const warnMsg = 'RECAP: Zero results found for docket lookup.';
  const errorMsg = 'RECAP: Upload failed. Check the logs for more information.';
  const tooManyMsg = (count) =>
    'Recap: More than one result found for docket lookup. ' + `Found ${count}`;

  this.recap.getAvailabilityForDocket(
    this.court,
    this.pacer_case_id,
    (result) => {
      if (result.count === 0) return console.warn(warnMsg);
      if (result.count > 1) return console.error(tooManyMsg(result.count));
      if (!result.results) return console.error(errorMsg);

      const form = document.querySelector('form');
      const div = document.createElement('div');
      div.classList.add('recap-banner');
      div.appendChild(
        recapAlertButton({
          court: this.court,
          caseId: this.pacer_case_id,
          isActive: true,
        })
      );
      form.appendChild(recapBanner(result.results[0]));
      form.appendChild(div);
    }
  );
}
