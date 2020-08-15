import $ from 'jquery';
// helper functions for background script
export function showNotificationTab(details) {
  // Show some kind of notification tab to the user after install/upgrade.
  const msg = 'RECAP: showing install/upgrade notification if version matches';
  console.debug(msg);

  const versions = {
    '1.2.3': '2017',
    '1.2.10': '2018',
    '1.2.15': '2019',
  };

  const currentVersion = chrome.runtime.getManifest().version;

  // don't do anything if not an update
  if (details.reason !== 'update') return;

  const year = versions[currentVersion];

  // if no year found, return
  if (!year) return;

  chrome.tabs.create({ url: `https://free.law/fundraisers/${year}/recap/` });
}

export function setDefaultOptions(details) {
  // Set options to their default values.
  console.debug('RECAP: Setting default options after install/upgrade.');
  chrome.storage.local.get('options', function (items) {
    const msg =
      'RECAP: Attempted to get "options" key from localstorage.' +
      `Got: ${items}`;
    console.debug(msg);
    let defaults = {
      external_pdf: false,
      recap_enabled: true,
      recap_link_popups: true,
      show_notifications: true,

      // Radio button
      ia_style_filenames: false,
      lawyer_style_filenames: true,
    };
    if ($.isEmptyObject(items)) {
      console.debug('RECAP: New install. Attempting to set defaults.');
      chrome.storage.local.set({ options: defaults });
      console.debug('RECAP: Set the defaults on new install successfully.');
    } else {
      console.debug(
        'RECAP: Existing install. Attempting to set new ' + 'defaults, if any'
      );

      // it's weird that we have a `recap_disabled` option
      // when it should be `recap_enabled`.
      //
      // In order to flip the polarity, we'll read out the
      // `recap_disabled` option (which has previously been set,
      // so everyone should have it)
      let optionToUpgrade = 'recap_disabled';
      // if the option is a Boolean (as it should be)
      if (typeof items.options[optionToUpgrade] === 'boolean') {
        // set the inverse option `recap_enabled` to
        // the inverse of `recap_disabled`
        items.options.recap_enabled = !items.options[optionToUpgrade];
      } else {
        // if for some reason it's _not_ a boolean, let's default to uploading.
        items.options.recap_enabled = true;
      }

      // okay now set the rest of the defaults that are missing.
      for (let key in defaults) {
        if (!(key in items.options)) {
          items.options[key] = defaults[key];
        }
      }
      console.debug('RECAP: Persisting new settings object.');
      chrome.storage.local.set({ options: items.options });
    }
  });
}
