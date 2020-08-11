  // Check every link in the document to see if there is a free RECAP document
  // available. If there is, put a link with a RECAP icon.
  const attachRecapLinkToEligibleDocs = () => {
    let linkCount = this.pacer_doc_ids.length;
    console.info(
      `RECAP: Attaching links to all eligible documents (${linkCount} found)`
    );
    if (linkCount === 0) {
      return;
    }

    // Ask the server whether any of these documents are available from RECAP.
    this.recap.getAvailabilityForDocuments(
      this.pacer_doc_ids,
      this.court,
      $.proxy(function (api_results) {
        console.info(
          `RECAP: Got results from API. Running callback on API results to ` +
            `attach links and icons where appropriate.`
        );
        for (let i = 0; i < this.links.length; i++) {
          const pacer_doc_id = $(this.links[i]).data('pacer_doc_id');
          if (!pacer_doc_id) {
            continue;
          }
          let result = api_results.results.filter(function (obj) {
            return obj.pacer_doc_id === pacer_doc_id;
          })[0];
          if (!result) {
            continue;
          }
          let href = `https://www.courtlistener.com/${result.filepath_local}`;
          let recap_link = $('<a/>', {
            class: 'recap-inline',
            title: 'Available for free from the RECAP Archive.',
            href: href,
          });
          recap_link.click(
            $.proxy(this.handleRecapLinkClick, this, window, href)
          );
          recap_link.append(
            $('<img/>').attr({
              src: chrome.extension.getURL('icon-16.png'),
            })
          );
          recap_link.insertAfter(this.links[i]);
        }
      }, this)
    );
  }
}