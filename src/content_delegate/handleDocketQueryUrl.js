import PACER from '../pacer';
import {
  authHeader,
  recapAlertButton,
  recapBanner,
  dispatchBackgroundFetch,
  courtListenerURL,
  searchParamsURL,
} from '../utils';

// If this is a docket query page, ask RECAP whether it has the docket page.
export async function handleDocketQueryUrl() {
  if (!PACER.isDocketQueryUrl(this.url)) return;

  // Logged out users that load a docket page, see a login page, so they
  // shouldn't check for docket availability.
  if (!PACER.hasPacerCookie(document.cookie)) return;

  const msg = {
    warn: 'RECAP: Zero results found for docket lookup.',
    error: 'RECAP: Upload failed. Check the logs for more information.',
    tooMany: (count) =>
      'Recap: More than one result found for docket lookup. ' + `Found ${count}`,
  };

  // fetch using new fetchHandler

  const result = await dispatchBackgroundFetch({
    url: searchParamsURL({
      base: courtListenerURL('dockets'),
      params: {
        pacer_case_id: this.pacer_case_id,
        court: PACER.convertToCourtListenerCourt(this.court),
        // Ensure RECAP is a source so we don't get back IDB-only dockets.
        source__in: '1,3,5,7,9,11,13,15',
        fields: 'absolute_url,date_modified',
      },
    }),
    options: {
      method: 'GET',
      headers: authHeader,
    },
  });

  if (result.count < 1) return console.warn(msg.warn);
  if (result.count > 1) return console.error(msg.tooMany(result.count));
  if (!result.results) return console.error(msg.error);

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
