// -------------------------------------------------------------------------
// Abstraction of PACER site and services.  This file is browser-independent.
// PACER websites are structured like this:
//
// Case query form
//  |
//  `--> Main menu for a particular case
//        |
//        |--> Docket query form ---.
//        |                         |
//        `--> History query form --|
//                                  |
//                                  |--> Possible interstitial large docket page
//                                  |
//                                  |
//                                  '--> Docket, i.e. list of documents or
//                                       History Report (*)
//                                        |
//                                        |--> Attachment menu page for a
//                                        |    particular document (aka doc1
//                                        |    page.
//                                        |     |
//                                        `-----'--> Single document page
//                                              |     |
//                                              |      '--> PDF view page (*)
//                                              |
//                                              |--> All documents zip page
//                                                   |
//                                                   '--> Zip file download page (*)
//
// Pages marked (*) cost money.  The "Single document page" is a page that
// tells you how much a document will cost before you get to view the PDF.
let PACER_TO_CL_IDS = {
    'azb': 'arb',
    'cofc': 'uscfc',
    'neb': 'nebraskab',
    'nysb-mega': 'nysb' // Remove the mega thing
};
// Public constants and pure functions.  As these are pure, they can be freely
// called from anywhere; by convention we use an ALL_CAPS name to allude to
// the purity (const-ness) of this object's contents.
let PACER = {
    // Returns the court identifier for a given URL, or null if not a PACER site.
    getCourtFromUrl: function(url) {
        let match = (url || '').toLowerCase().match(/^\w+:\/\/(ecf|pacer)\.(\w+)\.uscourts\.gov\//);
        return match ? match[2] : null;
    },
    convertToCourtListenerCourt: function(pacer_court_id) {
        return PACER_TO_CL_IDS[pacer_court_id] || pacer_court_id;
    },
    // Returns true if the given URL looks like a link to a PACER document.
    // For CMECF District:
    //   https://ecf.dcd.uscourts.gov/doc1/04503837920
    // For CMECF Appellate:
    //   https://ecf.ca2.uscourts.gov/docs1/00205695758
    isDocumentUrl: function(url) {
        if (url.match(/\/(?:doc1|docs1)\/\d+/) || url.match(/\/cgi-bin\/show_doc/) || url.match(/servlet=ShowDoc/)) {
            if (PACER.getCourtFromUrl(url)) return true;
        }
        return false;
    },
    getCaseIdFromClaimsPage: function(document) {
        const links = [
            ...document.querySelectorAll('a')
        ];
        const docketLink = links.find((link)=>link.href.match(/DktRpt\.pl/)
        );
        if (docketLink) {
            const match = docketLink.href.match(/\?\d+/);
            return match[0].slice(1);
        }
    },
    // Returns true if the URL is for docket query page.
    isDocketQueryUrl: function(url) {
        // The part after the "?" is all digits.
        return !!url.match(/\/(DktRpt|HistDocQry)\.pl\?\d+$/);
    },
    // Returns true if the given URL is for a docket display page (i.e. the page
    // after submitting the "Docket Sheet" query page).
    isDocketDisplayUrl: function(url) {
        // The part after the "?" has hyphens in it.
        //   https://ecf.dcd.uscourts.gov/cgi-bin/DktRpt.pl?591030040473392-L_1_0-1
        // Appellate:
        //   https://ecf.ca1.uscourts.gov/n/beam/servlet/TransportRoom?servlet=CaseSummary.jsp&caseNum=16-1567&incOrigDkt=Y&incDktEntries=Y
        if (url.match(/\/DktRpt\.pl\?\w+-[\w-]+$/)) return true;
        // Regular expression to match on Appellate pages, and if a
        // servlet is specified, to return it as a captured group.
        // If no servlet is specified, it's returned as undefined, which
        // is properly handled in the switch block.
        //
        // The RE is a bit complicated, so let's break it down:
        //
        //   servlet\/TransportRoom # 1: The string servlet/TransportRoom
        //   (?:\?servlet=          # 2: An OPTIONAL, TERMINAL, NON-CAPTURING
        //                          #    group that contains ?servlet=
        //     ([^?&]+)             # 3: A CAPTURING group of >1 non-? or &
        //                          #    chars, as they'd delimit another
        //                          #    url parameter.
        //     (?:[\/&#;].*)?       # 4: An OPTIONAL, NON-CAPTURING group of a
        //                          #    /, &, #, or ; char, followed by
        //                          #    anything at all, which would be
        //                          #    one or more url parameters.
        //   )?                     # Closing of (2) and making it optional
        //   $                      # Making (2) terminal
        //
        // xxx: This would match on
        //   https://ecf.ca1.uscourts.gov/n/beam/underservlet/
        // xxx: This presumes ?servlet= is the first parameter, would fail on
        //   /servlet/TransportRoom?caseId=44381&servlet=DocketReportFilter.jsp
        // xxx: This will if a terminal slash precedes the parameter section:
        //   /servlet/TransportRoom/?...
        let re = /servlet\/TransportRoom(?:\?servlet=([^?&]+)(?:[\/&#;].*)?)?$/;
        let match = url.match(re);
        if (match) {
            let servlet = match[1];
            debug(4, `Identified appellate servlet ${servlet} at ${url}`);
            switch(servlet){
                case 'CaseSummary.jsp':
                case 'ShowPage':
                case undefined:
                    return true;
                default:
                    debug(4, `Assuming servlet ${servlet} is not a docket.`);
                    return false;
                case 'CaseSearch.jsp':
                case 'ShowDoc':
                case 'ShowDocMulti':
                case 'CaseSelectionTable':
                case 'CourtInfo.jsp':
                case 'DocketReportFilter.jsp':
                case 'InvalidUserLogin.jsp':
                case 'OrderJudgment.jsp':
                case 'PACERCalendar.jsp':
                case 'PacerHelp.jsp':
                case 'PACEROpinion.jsp':
                case 'Login':
                case 'k2aframe.jsp':
                case 'k2ajnlp.jsp':
                case 'RSSGenerator':
                case 'PaymentHistory':
                case 'ChangeClient.jsp':
                    return false;
            }
        } else return false;
    },
    // Returns true if the given URL is for a docket history display page.
    isDocketHistoryDisplayUrl: function(url) {
        return !!url.match(/\/HistDocQry\.pl\?\w+-[\w-]+$/);
    },
    // Returns true if this is a "Document Selection Menu" page (a list of the
    // attachments for a particular document).
    isAttachmentMenuPage: function(url, document) {
        let inputs = document.getElementsByTagName('input');
        let pageCheck = PACER.isDocumentUrl(url) && inputs.length && inputs[inputs.length - 1].value === 'Download All';
        return !!pageCheck;
    },
    // Returns true if this is a "Download Documents" page (confirmation of
    // pricing for all documents to receive a zip file with all of them)
    isDownloadAllDocumentsPage: function(url, document) {
        let inputs = document.getElementsByTagName("input");
        let pageCheck = !!url.match(/\/show_multidocs\.pl\?/) && inputs.length && inputs[inputs.length - 1].value === "Download Documents";
        return !!pageCheck;
    },
    // Claims Register Page includes an h2 tag with the court and words "Claims Register"
    // exampleUrl: https://ecf.nyeb.uscourts.gov/cgi-bin/SearchClaims.pl?610550152546515-L_1_0-1
    // exampleHeader: <h2>Eastern District of New York<br>Claims Register </h2>
    isClaimsRegisterPage: function(url, document) {
        let headlines = [
            ...document.getElementsByTagName('h2')
        ];
        let pageCheck = !!url.match(/\/SearchClaims\.pl\?/) && headlines.length > 0 && headlines[0].innerText.match(/Claims Register/);
        return pageCheck;
    },
    // Returns true if this is a page for downloading a single document.
    // district:
    //   https://ecf.dcd.uscourts.gov/doc1/04503837920
    // appellate:
    //   https://ecf.ca1.uscourts.gov/n/beam/servlet/TransportRoom?servlet=ShowDoc&dls_id=00107215565&caseId=41182&dktType=dktPublic
    isSingleDocumentPage: function(url, document) {
        let inputs = document.getElementsByTagName('input');
        let lastInput = inputs.length && inputs[inputs.length - 1].value;
        // If the receipt doesn't say "Image" we don't yet support it on the server.
        // So far, this only appears to apply to bankruptcy claims. This CSS
        // selector is duplicated in onDocumentViewSubmit.
        let hasImageReceipt = !!$('td:contains(Image)').length;
        let pageCheck = PACER.isDocumentUrl(url) && hasImageReceipt && lastInput === 'View Document' || lastInput === 'Accept Charges and Retrieve';
        debug(4, ` lastInput ${lastInput}`);
        return !!pageCheck;
    },
    // Returns the document ID for a document view page or single-document page.
    getDocumentIdFromUrl: function(url) {
        let match = (url || '').match(/\/(?:doc1|docs1)\/(\d+)/);
        if (match) // PACER sites use the fourth digit of the pacer_doc_id to flag whether
        // the user has been shown a receipt page.  We don't care about that, so
        // we always set the fourth digit to 0 when getting a doc ID.
        return `${match[1].slice(0, 3)}0${match[1].slice(4)}`;
    },
    // Get the document ID for a document view page using the "View Document"
    // form.
    getDocumentIdFromForm: function(url, document) {
        if (PACER.isDocumentUrl(url)) {
            let inputs = document.getElementsByTagName('input');
            let last_input = inputs[inputs.length - 1];
            if (inputs.length && last_input.value === 'View Document') {
                // Grab the document ID from the form's onsubmit attribute
                let onsubmit = last_input.form.getAttribute('onsubmit');
                let goDLS = PACER.parseGoDLSFunction(onsubmit);
                return goDLS && PACER.getDocumentIdFromUrl(goDLS.hyperlink);
            }
        }
    },
    // Given a URL that satisfies isDocketQueryUrl, gets its case number.
    getCaseNumberFromUrls: function(urls) {
        // Iterate over an array of URLs and get the case number from the
        // first one that matches. Because the calling function may pass us URLs
        // other than the page URL, such as referrers, we narrow to
        // *uscourts.gov. (Page URLs are so limited by the "include_globs" in
        // manifest.json; but referrers are not.)
        for (let url of urls){
            let hostname = getHostname(url);
            // JS is trash. It lacks a way of getting the TLD, so we use endsWith.
            if (hostname.endsWith('uscourts.gov')) {
                let match;
                for (let re of [
                    // Appellate CMECF sends us some odd URLs, be aware:
                    // https://ecf.mad.uscourts.gov/cgi-bin/DktRpt.pl?caseNumber=1:17-cv-11842-PBS&caseId=0
                    // https://ecf.mad.uscourts.gov/cgi-bin/DktRpt.pl?caseNumber=1:17-cv-11842-PBS&caseId=1:17-cv-11842-PBS
                    /[?&]caseid=(\d+)/i,
                    /\?(\d+)(?:&.*)?$/
                ]){
                    match = url.match(re);
                    if (match) {
                        debug(3, `Found caseid via: ${match[0]}`);
                        if (match[1] === '0') continue;
                        return match[1];
                    }
                }
                match = url.match(/[?&]caseNum=([-\d]+)/);
                if (match) {
                    // Appellate. Actually this is a docket number. Uhoh? xxx
                    debug(3, `Found caseNum via: ${match[0]}`);
                    return match[1];
                }
                match = url.match(/[?&]caseId=([-\d]+)/);
                if (match) {
                    debug(3, `Found caseId via: ${match[0]}`);
                    // Also seen in appellate. Note uppercase 'I' and hyphens. Actual caseID. xxx
                    return match[1];
                }
            }
        }
    },
    getCaseNumberFromInputs: function(url, document) {
        if (PACER.isDocumentUrl(url)) {
            let inputs = document.getElementsByTagName('input');
            let last_input = inputs[inputs.length - 1];
            if (inputs.length && last_input.value === "Download All") {
                // Attachment page.
                let onclick = last_input.getAttribute("onclick");
                let match = onclick.match(/[?&]caseid=(\d+)/i);
                if (match && match[1] !== '0') return match[1];
            } else if (inputs.length && last_input.value === "View Document") {
                // Download receipt page.
                let onsubmit = last_input.form.getAttribute("onsubmit");
                let goDLS = PACER.parseGoDLSFunction(onsubmit);
                return goDLS && goDLS.de_caseid;
            }
        }
    },
    // Gets the last path component of a URL.
    getBaseNameFromUrl: function(url) {
        return url.replace(/\?.*/, '').replace(/.*\//, '');
    },
    // Parse the goDLS function returning its parameters as a dict.
    parseGoDLSFunction: function(goDLS_string) {
        // CMECF provides extra information on Document Links (DLS?) in the goDLS()
        // function of an onclick handler, e.g.:
        //
        //   <a href="https://ecf.mad.uscourts.gov/doc1/09518360046"
        //      onclick="goDLS('/doc1/09518360046','153992','264','','','1','','');
        //               return(false);">95</a>
        //
        // This is similarly used in the onsubmit function of some forms.
        //
        // The parameters are defined in the unminified js
        //   https://ecf.flnd.uscourts.gov/lib/dls_url.js
        // as:
        //   function goDLS(hyperlink, de_caseid, de_seqno, got_receipt,
        //                  pdf_header, pdf_toggle_possible, magic_num, hdr)
        //
        // Bankruptcy courts provide ten parameters, instead of eight. These can
        // be found in unminified js:
        //   https://ecf.paeb.uscourts.gov/lib/dls_url.js
        // as:
        //   function goDLS(hyperlink, de_caseid, de_seqno, got_receipt,
        //                  pdf_header, pdf_toggle_possible, magic_num,
        //                  claim_id, claim_num, claim_doc_seq)
        // Δ:
        // - hdr
        // + claim_id, claim_num, claim_doc_seq
        let goDlsDistrict = /^goDLS\('([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)'\)/.exec(goDLS_string);
        let goDlsBankr = /^goDLS\('([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)','([^']*)'\)/.exec(goDLS_string);
        if (!goDlsDistrict && !goDlsBankr) return null;
        let r = {
        };
        if (goDlsDistrict) [, r.hyperlink, r.de_caseid, r.de_seqno, r.got_receipt, r.pdf_header, r.pdf_toggle_possible, r.magic_num, r.hdr] = goDlsDistrict;
        else [, r.hyperlink, r.de_caseid, r.de_seqno, r.got_receipt, r.pdf_header, r.pdf_toggle_possible, r.magic_num, r.claim_id, r.claim_num, r.claim_doc_seq] = goDlsBankr;
        return r;
    },
    // Given document.cookie, returns true if the user is logged in to PACER.
    hasPacerCookie: function(cookieString) {
        let cookies = {
        };
        cookieString.replace(/\s*([^=;]+)=([^;]*)/g, function(match, name, value) {
            cookies[name.trim()] = value.trim();
        });
        let pacerCookie = cookies['PacerUser'] || cookies['PacerSession'];
        return !!(pacerCookie && !pacerCookie.match(/unvalidated/));
    },
    // Returns true if the given court identifier is for an appellate court.
    isAppellateCourt: function(court) {
        return PACER.APPELLATE_COURTS.includes(court);
    },
    // These are all the supported PACER court identifiers, together with their
    // West-style court name abbreviations.
    COURT_ABBREVS: {
        // Appellate Courts
        'ca1': '1st-Cir.',
        'ca2': '2d-Cir.',
        'ca3': '3rd-Cir.',
        'ca4': '4th-Cir.',
        'ca5': '5th-Cir.',
        'ca6': '6th-Cir.',
        'ca7': '7th-Cir.',
        'ca8': '8th-Cir.',
        'ca9': '9th-Cir.',
        'ca10': '10th-Cir.',
        'ca11': '11th-Cir.',
        'cadc': 'D.C.-Cir.',
        'cafc': 'Fed.-Cir.',
        // District Courts
        'akb': 'Bankr.D.Alaska',
        'akd': 'D.Alaska',
        'almb': 'Bankr.M.D.Ala.',
        'almd': 'M.D.Ala.',
        'alnb': 'Bankr.N.D.Ala.',
        'alnd': 'N.D.Ala.',
        'alsb': 'Bankr.S.D.Ala.',
        'alsd': 'S.D.Ala.',
        'areb': 'Bankr.E.D.Ark.',
        'ared': 'E.D.Ark.',
        'arwb': 'Bankr.W.D.Ark.',
        'arwd': 'W.D.Ark.',
        'azb': 'Bankr.D.Ariz.',
        'azd': 'D.Ariz.',
        'cacb': 'Bankr.C.D.Cal.',
        'cacd': 'C.D.Cal.',
        'caeb': 'Bankr.E.D.Cal.',
        'caed': 'E.D.Cal.',
        'canb': 'Bankr.N.D.Cal.',
        'cand': 'N.D.Cal.',
        'casb': 'Bankr.S.D.Cal.',
        'casd': 'S.D.Cal.',
        'cit': 'CIT',
        'cob': 'Bankr.D.Colo.',
        'cod': 'D.Colo.',
        'cofc': 'Fed.Cl.',
        'ctb': 'Bankr.D.Conn.',
        'ctd': 'D.Conn.',
        'dcb': 'Bankr.D.D.C.',
        'dcd': 'D.D.C.',
        'deb': 'Bankr.D.Del.',
        'ded': 'D.Del.',
        'flmb': 'Bankr.M.D.Fla.',
        'flmd': 'M.D.Fla.',
        'flnb': 'Bankr.N.D.Fla.',
        'flnd': 'N.D.Fla.',
        'flsb': 'Bankr.S.D.Fla.',
        'flsd': 'S.D.Fla.',
        'gamb': 'Bankr.M.D.Ga.',
        'gamd': 'M.D.Ga.',
        'ganb': 'Bankr.N.D.Ga.',
        'gand': 'N.D.Ga.',
        'gasb': 'Bankr.S.D.Ga.',
        'gasd': 'S.D.Ga.',
        'gub': 'Bankr.D.Guam',
        'gud': 'D.Guam',
        'hib': 'Bankr.D.Hawaii',
        'hid': 'D.Hawaii',
        'ianb': 'Bankr.N.D.Iowa',
        'iand': 'N.D.Iowa',
        'iasb': 'Bankr.S.D.Iowa',
        'iasd': 'S.D.Iowa',
        'idb': 'Bankr.D.Idaho',
        'idd': 'D.Idaho',
        'ilcb': 'Bankr.C.D.Ill.',
        'ilcd': 'C.D.Ill.',
        'ilnb': 'Bankr.N.D.Ill.',
        'ilnd': 'N.D.Ill.',
        'ilsb': 'Bankr.S.D.Ill.',
        'ilsd': 'S.D.Ill.',
        'innb': 'Bankr.N.D.Ind.',
        'innd': 'N.D.Ind.',
        'insb': 'Bankr.S.D.Ind.',
        'insd': 'S.D.Ind.',
        'ksb': 'Bankr.D.Kan.',
        'ksd': 'D.Kan.',
        'kyeb': 'Bankr.E.D.Ky.',
        'kyed': 'E.D.Ky.',
        'kywb': 'Bankr.W.D.Ky.',
        'kywd': 'W.D.Ky.',
        'laeb': 'Bankr.E.D.La.',
        'laed': 'E.D.La.',
        'lamb': 'Bankr.M.D.La.',
        'lamd': 'M.D.La.',
        'lawb': 'Bankr.W.D.La.',
        'lawd': 'W.D.La.',
        'mab': 'Bankr.D.Mass.',
        'mad': 'D.Mass.',
        'mdb': 'Bankr.D.Md.',
        'mdd': 'D.Md.',
        'meb': 'Bankr.D.Me.',
        'med': 'D.Me.',
        'mieb': 'Bankr.E.D.Mich.',
        'mied': 'E.D.Mich.',
        'miwb': 'Bankr.W.D.Mich.',
        'miwd': 'W.D.Mich.',
        'mnb': 'Bankr.D.Minn.',
        'mnd': 'D.Minn.',
        'moeb': 'Bankr.E.D.Mo.',
        'moed': 'E.D.Mo.',
        'mowb': 'Bankr.W.D.Mo.',
        'mowd': 'W.D.Mo.',
        'msnb': 'Bankr.N.D.Miss',
        'msnd': 'N.D.Miss',
        'mssb': 'Bankr.S.D.Miss.',
        'mssd': 'S.D.Miss.',
        'mtb': 'Bankr.D.Mont.',
        'mtd': 'D.Mont.',
        'nceb': 'Bankr.E.D.N.C.',
        'nced': 'E.D.N.C.',
        'ncmb': 'Bankr.M.D.N.C.',
        'ncmd': 'M.D.N.C.',
        'ncwb': 'Bankr.W.D.N.C.',
        'ncwd': 'W.D.N.C.',
        'ndb': 'Bankr.D.N.D.',
        'ndd': 'D.N.D.',
        'neb': 'Bankr.D.Neb.',
        'ned': 'D.Neb.',
        'nhb': 'Bankr.D.N.H.',
        'nhd': 'D.N.H.',
        'njb': 'Bankr.D.N.J.',
        'njd': 'D.N.J.',
        'nmb': 'Bankr.D.N.M.',
        'nmd': 'D.N.M.',
        'nmid': 'N.MarianaIslands',
        'nvb': 'Bankr.D.Nev.',
        'nvd': 'D.Nev.',
        'nyeb': 'Bankr.E.D.N.Y.',
        'nyed': 'E.D.N.Y.',
        'nynb': 'Bankr.N.D.N.Y.',
        'nynd': 'N.D.N.Y.',
        'nysb': 'Bankr.S.D.N.Y.',
        'nysb-mega': 'Bankr.S.D.N.Y.',
        'nysd': 'S.D.N.Y.',
        'nywb': 'Bankr.W.D.N.Y.',
        'nywd': 'W.D.N.Y.',
        'ohnb': 'Bankr.N.D.Ohio',
        'ohnd': 'N.D.Ohio',
        'ohsb': 'Bankr.S.D.Ohio',
        'ohsd': 'S.D.Ohio',
        'okeb': 'Bankr.E.D.Okla.',
        'oked': 'E.D.Okla.',
        'oknb': 'Bankr.N.D.Okla.',
        'oknd': 'N.D.Okla.',
        'okwb': 'Bankr.W.D.Okla.',
        'okwd': 'W.D.Okla.',
        'orb': 'Bankr.D.Or.',
        'ord': 'D.Or.',
        'paeb': 'Bankr.E.D.Pa.',
        'paed': 'E.D.Pa.',
        'pamb': 'Bankr.M.D.Pa.',
        'pamd': 'M.D.Pa.',
        'pawb': 'Bankr.W.D.Pa.',
        'pawd': 'W.D.Pa.',
        'prb': 'Bankr.D.P.R.',
        'prd': 'D.P.R.',
        'rib': 'Bankr.D.R.I.',
        'rid': 'D.R.I.',
        'scb': 'Bankr.D.S.C.',
        'scd': 'D.S.C.',
        'sdb': 'Bankr.D.S.D.',
        'sdd': 'D.S.D.',
        'tneb': 'Bankr.E.D.Tenn.',
        'tned': 'E.D.Tenn.',
        'tnmb': 'Bankr.M.D.Tenn.',
        'tnmd': 'M.D.Tenn.',
        'tnwb': 'Bankr.W.D.Tenn.',
        'tnwd': 'W.D.Tenn.',
        'txeb': 'Bankr.E.D.Tex.',
        'txed': 'E.D.Tex.',
        'txnb': 'Bankr.N.D.Tex.',
        'txnd': 'N.D.Tex.',
        'txsb': 'Bankr.S.D.Tex.',
        'txsd': 'S.D.Tex.',
        'txwb': 'Bankr.W.D.Tex.',
        'txwd': 'W.D.Tex.',
        'utb': 'Bankr.D.Utah',
        'utd': 'D.Utah',
        'vaeb': 'Bankr.E.D.Va.',
        'vaed': 'E.D.Va.',
        'vawb': 'Bankr.W.D.Va.',
        'vawd': 'W.D.Va.',
        'vib': 'Bankr.D.VirginIslands',
        'vid': 'D.VirginIslands',
        'vtb': 'Bankr.D.Vt.',
        'vtd': 'D.Vt.',
        'waeb': 'Bankr.E.D.Wash.',
        'waed': 'E.D.Wash.',
        'wawb': 'Bankr.W.D.Wash.',
        'wawd': 'W.D.Wash.',
        'wieb': 'Bankr.E.D.Wis.',
        'wied': 'E.D.Wis.',
        'wiwb': 'Bankr.W.D.Wis',
        'wiwd': 'W.D.Wis',
        'wvnb': 'Bankr.N.D.W.Va.',
        'wvnd': 'N.D.W.Va.',
        'wvsb': 'Bankr.S.D.W.Va.',
        'wvsd': 'S.D.W.Va.',
        'wyb': 'Bankr.D.Wyo.',
        'wyd': 'D.Wyo.'
    },
    // PACER court identifiers for appellate courts.
    APPELLATE_COURTS: [
        'ca1',
        'ca2',
        'ca3',
        'ca4',
        'ca5',
        'ca6',
        'ca7',
        'ca8',
        'ca9',
        'ca10',
        'ca11',
        'cadc',
        'cafc'
    ]
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6IkFBQUEsRUFBNEUsQUFBNUUsMEVBQTRFO0FBQzVFLEVBQTZFLEFBQTdFLDJFQUE2RTtBQUc3RSxFQUEyQyxBQUEzQyx5Q0FBMkM7QUFDM0MsRUFBRTtBQUNGLEVBQWtCLEFBQWxCLGdCQUFrQjtBQUNsQixFQUFLLEFBQUwsR0FBSztBQUNMLEVBQXdDLEFBQXhDLHNDQUF3QztBQUN4QyxFQUFXLEFBQVgsU0FBVztBQUNYLEVBQXFDLEFBQXJDLG1DQUFxQztBQUNyQyxFQUFxQyxBQUFyQyxtQ0FBcUM7QUFDckMsRUFBcUMsQUFBckMsbUNBQXFDO0FBQ3JDLEVBQXFDLEFBQXJDLG1DQUFxQztBQUNyQyxFQUFnRixBQUFoRiw4RUFBZ0Y7QUFDaEYsRUFBcUMsQUFBckMsbUNBQXFDO0FBQ3JDLEVBQXFDLEFBQXJDLG1DQUFxQztBQUNyQyxFQUEwRSxBQUExRSx3RUFBMEU7QUFDMUUsRUFBMkQsQUFBM0QseURBQTJEO0FBQzNELEVBQTJDLEFBQTNDLHlDQUEyQztBQUMzQyxFQUF5RSxBQUF6RSx1RUFBeUU7QUFDekUsRUFBNEUsQUFBNUUsMEVBQTRFO0FBQzVFLEVBQW9ELEFBQXBELGtEQUFvRDtBQUNwRCxFQUFpRCxBQUFqRCwrQ0FBaUQ7QUFDakQsRUFBeUUsQUFBekUsdUVBQXlFO0FBQ3pFLEVBQXVELEFBQXZELHFEQUF1RDtBQUN2RCxFQUE2RSxBQUE3RSwyRUFBNkU7QUFDN0UsRUFBaUQsQUFBakQsK0NBQWlEO0FBQ2pELEVBQTJFLEFBQTNFLHlFQUEyRTtBQUMzRSxFQUFzRCxBQUF0RCxvREFBc0Q7QUFDdEQsRUFBb0YsQUFBcEYsa0ZBQW9GO0FBQ3BGLEVBQUU7QUFDRixFQUEwRSxBQUExRSx3RUFBMEU7QUFDMUUsRUFBMEUsQUFBMUUsd0VBQTBFO0FBRTFFLEdBQUcsQ0FBQyxlQUFlLEdBQUcsQ0FBQztJQUNuQixDQUFLLE1BQUUsQ0FBSztJQUNaLENBQU0sT0FBRSxDQUFPO0lBQ2YsQ0FBSyxNQUFFLENBQVc7SUFDbEIsQ0FBVyxZQUFFLENBQU0sS0FBRyxDQUF3QixBQUF4QixFQUF3QixBQUF4QixzQkFBd0I7QUFDbEQsQ0FBQztBQUVELEVBQThFLEFBQTlFLDRFQUE4RTtBQUM5RSxFQUEyRSxBQUEzRSx5RUFBMkU7QUFDM0UsRUFBcUQsQUFBckQsbURBQXFEO0FBQ3JELEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUNYLEVBQTZFLEFBQTdFLDJFQUE2RTtJQUM3RSxlQUFlLEVBQUUsUUFBUSxDQUFFLEdBQUcsRUFBRSxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLENBQUUsR0FBRSxXQUFXLEdBQUcsS0FBSztRQUUzQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSTtJQUNoQyxDQUFDO0lBRUQsMkJBQTJCLEVBQUUsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxlQUFlLENBQUMsY0FBYyxLQUFLLGNBQWM7SUFDMUQsQ0FBQztJQUVELEVBQXVFLEFBQXZFLHFFQUF1RTtJQUN2RSxFQUFzQixBQUF0QixvQkFBc0I7SUFDdEIsRUFBa0QsQUFBbEQsZ0RBQWtEO0lBQ2xELEVBQXVCLEFBQXZCLHFCQUF1QjtJQUN2QixFQUFtRCxBQUFuRCxpREFBbUQ7SUFDbkQsYUFBYSxFQUFFLFFBQVEsQ0FBRSxHQUFHLEVBQUUsQ0FBQztRQUM3QixFQUFFLEVBQ0UsR0FBRyxDQUFDLEtBQUssNkJBQ1QsR0FBRyxDQUFDLEtBQUssMkJBQ1QsR0FBRyxDQUFDLEtBQUsscUJBQ1gsQ0FBQztZQUNELEVBQUUsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsR0FDM0IsTUFBTSxDQUFDLElBQUk7UUFFZixDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUs7SUFDZCxDQUFDO0lBRUQsdUJBQXVCLEVBQUUsUUFBUSxDQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzVDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQztlQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFHO1FBQUMsQ0FBQztRQUNqRCxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUMsSUFBSSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSzs7UUFDckQsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQ2YsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFDRCxFQUFvRCxBQUFwRCxrREFBb0Q7SUFDcEQsZ0JBQWdCLEVBQUUsUUFBUSxDQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLEVBQXdDLEFBQXhDLHNDQUF3QztRQUN4QyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUs7SUFDcEIsQ0FBQztJQUVELEVBQTRFLEFBQTVFLDBFQUE0RTtJQUM1RSxFQUFtRCxBQUFuRCxpREFBbUQ7SUFDbkQsa0JBQWtCLEVBQUUsUUFBUSxDQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLEVBQTRDLEFBQTVDLDBDQUE0QztRQUM1QyxFQUEyRSxBQUEzRSx5RUFBMkU7UUFDM0UsRUFBYSxBQUFiLFdBQWE7UUFDYixFQUFtSSxBQUFuSSxpSUFBbUk7UUFDbkksRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLCtCQUFpQyxNQUFNLENBQUMsSUFBSTtRQUV6RCxFQUEyRCxBQUEzRCx5REFBMkQ7UUFDM0QsRUFBMEQsQUFBMUQsd0RBQTBEO1FBQzFELEVBQWdFLEFBQWhFLDhEQUFnRTtRQUNoRSxFQUEyQyxBQUEzQyx5Q0FBMkM7UUFDM0MsRUFBRTtRQUNGLEVBQXVELEFBQXZELHFEQUF1RDtRQUN2RCxFQUFFO1FBQ0YsRUFBaUUsQUFBakUsK0RBQWlFO1FBQ2pFLEVBQXFFLEFBQXJFLG1FQUFxRTtRQUNyRSxFQUE4RCxBQUE5RCw0REFBOEQ7UUFDOUQsRUFBbUUsQUFBbkUsaUVBQW1FO1FBQ25FLEVBQWlFLEFBQWpFLCtEQUFpRTtRQUNqRSxFQUErQyxBQUEvQyw2Q0FBK0M7UUFDL0MsRUFBc0UsQUFBdEUsb0VBQXNFO1FBQ3RFLEVBQWdFLEFBQWhFLDhEQUFnRTtRQUNoRSxFQUFnRSxBQUFoRSw4REFBZ0U7UUFDaEUsRUFBNEQsQUFBNUQsMERBQTREO1FBQzVELEVBQW1FLEFBQW5FLGlFQUFtRTtRQUNuRSxFQUFpRCxBQUFqRCwrQ0FBaUQ7UUFDakQsRUFBRTtRQUNGLEVBQTJCLEFBQTNCLHlCQUEyQjtRQUMzQixFQUFzRCxBQUF0RCxvREFBc0Q7UUFDdEQsRUFBcUUsQUFBckUsbUVBQXFFO1FBQ3JFLEVBQXVFLEFBQXZFLHFFQUF1RTtRQUN2RSxFQUFxRSxBQUFyRSxtRUFBcUU7UUFDckUsRUFBZ0MsQUFBaEMsOEJBQWdDO1FBQ2hDLEdBQUcsQ0FBQyxFQUFFO1FBQ04sR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ1YsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNyQixLQUFLLENBQUMsQ0FBQyxHQUFHLDZCQUE2QixFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRztZQUUxRCxNQUFNLENBQUMsT0FBTztnQkFDWixJQUFJLENBQUMsQ0FBaUI7Z0JBQ3RCLElBQUksQ0FBQyxDQUFVO2dCQUNmLElBQUksQ0FBQyxTQUFTO29CQUNaLE1BQU0sQ0FBQyxJQUFJOztvQkFHWCxLQUFLLENBQUMsQ0FBQyxHQUFHLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUI7b0JBQ3RELE1BQU0sQ0FBQyxLQUFLO2dCQUVkLElBQUksQ0FBQyxDQUFnQjtnQkFDckIsSUFBSSxDQUFDLENBQVM7Z0JBQ2QsSUFBSSxDQUFDLENBQWM7Z0JBQ25CLElBQUksQ0FBQyxDQUFvQjtnQkFDekIsSUFBSSxDQUFDLENBQWU7Z0JBQ3BCLElBQUksQ0FBQyxDQUF3QjtnQkFDN0IsSUFBSSxDQUFDLENBQXNCO2dCQUMzQixJQUFJLENBQUMsQ0FBbUI7Z0JBQ3hCLElBQUksQ0FBQyxDQUFtQjtnQkFDeEIsSUFBSSxDQUFDLENBQWU7Z0JBQ3BCLElBQUksQ0FBQyxDQUFrQjtnQkFDdkIsSUFBSSxDQUFDLENBQU87Z0JBQ1osSUFBSSxDQUFDLENBQWM7Z0JBQ25CLElBQUksQ0FBQyxDQUFhO2dCQUNsQixJQUFJLENBQUMsQ0FBYztnQkFDbkIsSUFBSSxDQUFDLENBQWdCO2dCQUNyQixJQUFJLENBQUMsQ0FBa0I7b0JBQ3JCLE1BQU0sQ0FBQyxLQUFLOztRQUVsQixDQUFDLE1BQ0MsTUFBTSxDQUFDLEtBQUs7SUFFaEIsQ0FBQztJQUVELEVBQXNFLEFBQXRFLG9FQUFzRTtJQUN0RSx5QkFBeUIsRUFBRSxRQUFRLENBQUUsR0FBRyxFQUFFLENBQUM7UUFDekMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLO0lBQ3BCLENBQUM7SUFFRCxFQUEwRSxBQUExRSx3RUFBMEU7SUFDMUUsRUFBMEMsQUFBMUMsd0NBQTBDO0lBQzFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDOUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBTztRQUNsRCxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUNyQyxNQUFNLENBQUMsTUFBTSxJQUNiLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBYztRQUNwRCxNQUFNLEdBQUcsU0FBUztJQUNwQixDQUFDO0lBRUQsRUFBdUUsQUFBdkUscUVBQXVFO0lBQ3ZFLEVBQW9FLEFBQXBFLGtFQUFvRTtJQUNwRSwwQkFBMEIsRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ25ELEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQU87UUFDbEQsR0FBRyxDQUFDLFNBQVMsS0FDVCxHQUFHLENBQUMsS0FBSyw4QkFDWCxNQUFNLENBQUMsTUFBTSxJQUNiLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBb0I7UUFDeEQsTUFBTSxHQUFHLFNBQVM7SUFDcEIsQ0FBQztJQUVELEVBQXFGLEFBQXJGLG1GQUFxRjtJQUNyRixFQUE0RixBQUE1RiwwRkFBNEY7SUFDNUYsRUFBMkUsQUFBM0UseUVBQTJFO0lBRTNFLG9CQUFvQixFQUFFLFFBQVEsQ0FBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDOUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDO2VBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUk7UUFBQyxDQUFDO1FBQ3hELEdBQUcsQ0FBQyxTQUFTLEtBQ1QsR0FBRyxDQUFDLEtBQUssNEJBQ1IsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQ3BCLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUs7UUFDakMsTUFBTSxDQUFDLFNBQVM7SUFDbEIsQ0FBQztJQUVELEVBQW9FLEFBQXBFLGtFQUFvRTtJQUNwRSxFQUFZLEFBQVosVUFBWTtJQUNaLEVBQWtELEFBQWxELGdEQUFrRDtJQUNsRCxFQUFhLEFBQWIsV0FBYTtJQUNiLEVBQWdJLEFBQWhJLDhIQUFnSTtJQUNoSSxvQkFBb0IsRUFBRSxRQUFRLENBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzlDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQU87UUFDbEQsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLO1FBQ2hFLEVBQTRFLEFBQTVFLDBFQUE0RTtRQUM1RSxFQUFvRSxBQUFwRSxrRUFBb0U7UUFDcEUsRUFBa0QsQUFBbEQsZ0RBQWtEO1FBQ2xELEdBQUcsQ0FBQyxlQUFlLEtBQUssQ0FBQyxDQUFDLENBQW9CLHFCQUFFLE1BQU07UUFHdEQsR0FBRyxDQUFDLFNBQVMsR0FBSSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FDdkIsZUFBZSxJQUNkLFNBQVMsS0FBSyxDQUFlLGtCQUM3QixTQUFTLEtBQUssQ0FBNkI7UUFDN0QsS0FBSyxDQUFDLENBQUMsR0FBRSxXQUFXLEVBQUUsU0FBUztRQUMvQixNQUFNLEdBQUcsU0FBUztJQUNwQixDQUFDO0lBRUQsRUFBNEUsQUFBNUUsMEVBQTRFO0lBQzVFLG9CQUFvQixFQUFFLFFBQVEsQ0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNwQyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFFLEdBQUUsS0FBSztRQUM3QixFQUFFLEVBQUUsS0FBSyxFQUNQLEVBQXVFLEFBQXZFLHFFQUF1RTtRQUN2RSxFQUF3RSxBQUF4RSxzRUFBd0U7UUFDeEUsRUFBNkQsQUFBN0QsMkRBQTZEO1FBQzdELE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXRELENBQUM7SUFFRCxFQUF5RSxBQUF6RSx1RUFBeUU7SUFDekUsRUFBUSxBQUFSLE1BQVE7SUFDUixxQkFBcUIsRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBQyxDQUFDO1FBQzdDLEVBQUUsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQU87WUFDbEQsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3pDLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBZSxnQkFBRSxDQUFDO2dCQUMxRCxFQUEwRCxBQUExRCx3REFBMEQ7Z0JBQzFELEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBVTtnQkFDdEQsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUTtnQkFDN0MsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFNBQVM7WUFDNUQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsRUFBcUUsQUFBckUsbUVBQXFFO0lBQ3JFLHFCQUFxQixFQUFFLFFBQVEsQ0FBRSxJQUFJLEVBQUUsQ0FBQztRQUN0QyxFQUFpRSxBQUFqRSwrREFBaUU7UUFDakUsRUFBd0UsQUFBeEUsc0VBQXdFO1FBQ3hFLEVBQTJELEFBQTNELHlEQUEyRDtRQUMzRCxFQUFxRSxBQUFyRSxtRUFBcUU7UUFDckUsRUFBeUMsQUFBekMsdUNBQXlDO1FBQ3pDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUc7WUFDOUIsRUFBc0UsQUFBdEUsb0VBQXNFO1lBQ3RFLEVBQUUsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQWMsZ0JBQUcsQ0FBQztnQkFDdEMsR0FBRyxDQUFDLEtBQUs7Z0JBQ1QsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztvQkFDZCxFQUFvRCxBQUFwRCxrREFBb0Q7b0JBQ3BELEVBQXVGLEFBQXZGLHFGQUF1RjtvQkFDdkYsRUFBdUcsQUFBdkcscUdBQXVHOzs7Z0JBR3pHLENBQUMsQ0FBQyxDQUFDO29CQUNELEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3BCLEVBQUUsRUFBRSxLQUFLLEVBQUMsQ0FBQzt3QkFDVCxLQUFLLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNyQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFHLElBR2xCLFFBQVE7d0JBRVYsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoQixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLO2dCQUNqQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7b0JBQ1YsRUFBeUQsQUFBekQsdURBQXlEO29CQUN6RCxLQUFLLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLO2dCQUNqQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7b0JBQ1YsS0FBSyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDckMsRUFBNkUsQUFBN0UsMkVBQTZFO29CQUM3RSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCx1QkFBdUIsRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBQyxDQUFDO1FBQy9DLEVBQUUsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRSxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQU87WUFDbEQsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRSxDQUFDO1lBQ3hDLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBYyxlQUFFLENBQUM7Z0JBQ3pELEVBQW1CLEFBQW5CLGlCQUFtQjtnQkFDbkIsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQVM7Z0JBQy9DLEdBQUcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7Z0JBQ3pCLEVBQUUsRUFBRSxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFHLElBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVsQixDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFlLGdCQUFFLENBQUM7Z0JBQ2pFLEVBQXlCLEFBQXpCLHVCQUF5QjtnQkFDekIsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFVO2dCQUN0RCxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRO2dCQUM3QyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxTQUFTO1lBQ2pDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELEVBQXlDLEFBQXpDLHVDQUF5QztJQUN6QyxrQkFBa0IsRUFBRSxRQUFRLENBQUUsR0FBRyxFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLFNBQVMsQ0FBRSxHQUFFLE9BQU8sU0FBUyxDQUFFO0lBQ25ELENBQUM7SUFFRCxFQUErRCxBQUEvRCw2REFBK0Q7SUFDL0Qsa0JBQWtCLEVBQUUsUUFBUSxDQUFFLFlBQVksRUFBQyxDQUFDO1FBQzFDLEVBQTJFLEFBQTNFLHlFQUEyRTtRQUMzRSxFQUF3QyxBQUF4QyxzQ0FBd0M7UUFDeEMsRUFBRTtRQUNGLEVBQTRELEFBQTVELDBEQUE0RDtRQUM1RCxFQUEyRSxBQUEzRSx5RUFBMkU7UUFDM0UsRUFBdUMsQUFBdkMscUNBQXVDO1FBQ3ZDLEVBQUU7UUFDRixFQUFpRSxBQUFqRSwrREFBaUU7UUFDakUsRUFBRTtRQUNGLEVBQWtELEFBQWxELGdEQUFrRDtRQUNsRCxFQUFpRCxBQUFqRCwrQ0FBaUQ7UUFDakQsRUFBTSxBQUFOLElBQU07UUFDTixFQUFnRSxBQUFoRSw4REFBZ0U7UUFDaEUsRUFBb0UsQUFBcEUsa0VBQW9FO1FBQ3BFLEVBQUU7UUFDRixFQUF3RSxBQUF4RSxzRUFBd0U7UUFDeEUsRUFBNkIsQUFBN0IsMkJBQTZCO1FBQzdCLEVBQWlELEFBQWpELCtDQUFpRDtRQUNqRCxFQUFNLEFBQU4sSUFBTTtRQUNOLEVBQWdFLEFBQWhFLDhEQUFnRTtRQUNoRSxFQUErRCxBQUEvRCw2REFBK0Q7UUFDL0QsRUFBdUQsQUFBdkQscURBQXVEO1FBQ3ZELEVBQUssQUFBTCxJQUFLO1FBQ0wsRUFBUSxBQUFSLE1BQVE7UUFDUixFQUF1QyxBQUF2QyxxQ0FBdUM7UUFDdkMsR0FBRyxDQUFDLGFBQWEsK0ZBQStGLElBQUksQ0FBQyxZQUFZO1FBQ2pJLEdBQUcsQ0FBQyxVQUFVLG1IQUFrSCxJQUFJLENBQUMsWUFBWTtRQUNqSixFQUFFLEdBQUcsYUFBYSxLQUFLLFVBQVUsRUFDL0IsTUFBTSxDQUFDLElBQUk7UUFFYixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFBQSxDQUFDO1FBQ1YsRUFBRSxFQUFFLGFBQWEsS0FDWixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQ2xFLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksYUFBYTtnQkFFekQsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUNsRSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQzNELENBQUMsQ0FBQyxhQUFhLElBQUksVUFBVTtRQUVqQyxNQUFNLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxFQUF5RSxBQUF6RSx1RUFBeUU7SUFDekUsY0FBYyxFQUFFLFFBQVEsQ0FBRSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUM7UUFBQSxDQUFDO1FBQ2hCLFlBQVksQ0FBQyxPQUFPLHlCQUF5QixRQUFRLENBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUMxRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSTtRQUNuQyxDQUFDO1FBQ0QsR0FBRyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBVyxlQUFLLE9BQU8sQ0FBQyxDQUFjO1FBQ2hFLE1BQU0sSUFBSSxXQUFXLEtBQUssV0FBVyxDQUFDLEtBQUs7SUFDN0MsQ0FBQztJQUVELEVBQXdFLEFBQXhFLHNFQUF3RTtJQUN4RSxnQkFBZ0IsRUFBRSxRQUFRLENBQUUsS0FBSyxFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSztJQUM5QyxDQUFDO0lBRUQsRUFBMkUsQUFBM0UseUVBQTJFO0lBQzNFLEVBQXVDLEFBQXZDLHFDQUF1QztJQUN2QyxhQUFhLEVBQUUsQ0FBQztRQUNkLEVBQW1CLEFBQW5CLGlCQUFtQjtRQUNuQixDQUFLLE1BQUUsQ0FBVTtRQUNqQixDQUFLLE1BQUUsQ0FBUztRQUNoQixDQUFLLE1BQUUsQ0FBVTtRQUNqQixDQUFLLE1BQUUsQ0FBVTtRQUNqQixDQUFLLE1BQUUsQ0FBVTtRQUNqQixDQUFLLE1BQUUsQ0FBVTtRQUNqQixDQUFLLE1BQUUsQ0FBVTtRQUNqQixDQUFLLE1BQUUsQ0FBVTtRQUNqQixDQUFLLE1BQUUsQ0FBVTtRQUNqQixDQUFNLE9BQUUsQ0FBVztRQUNuQixDQUFNLE9BQUUsQ0FBVztRQUNuQixDQUFNLE9BQUUsQ0FBVztRQUNuQixDQUFNLE9BQUUsQ0FBVztRQUNuQixFQUFrQixBQUFsQixnQkFBa0I7UUFDbEIsQ0FBSyxNQUFFLENBQWdCO1FBQ3ZCLENBQUssTUFBRSxDQUFVO1FBQ2pCLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQU0sT0FBRSxDQUFVO1FBQ2xCLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBSyxNQUFFLENBQWU7UUFDdEIsQ0FBSyxNQUFFLENBQVM7UUFDaEIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQU0sT0FBRSxDQUFVO1FBQ2xCLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQU0sT0FBRSxDQUFVO1FBQ2xCLENBQUssTUFBRSxDQUFLO1FBQ1osQ0FBSyxNQUFFLENBQWU7UUFDdEIsQ0FBSyxNQUFFLENBQVM7UUFDaEIsQ0FBTSxPQUFFLENBQVM7UUFDakIsQ0FBSyxNQUFFLENBQWU7UUFDdEIsQ0FBSyxNQUFFLENBQVM7UUFDaEIsQ0FBSyxNQUFFLENBQWM7UUFDckIsQ0FBSyxNQUFFLENBQVE7UUFDZixDQUFLLE1BQUUsQ0FBYztRQUNyQixDQUFLLE1BQUUsQ0FBUTtRQUNmLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQU0sT0FBRSxDQUFVO1FBQ2xCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQUssTUFBRSxDQUFjO1FBQ3JCLENBQUssTUFBRSxDQUFRO1FBQ2YsQ0FBSyxNQUFFLENBQWdCO1FBQ3ZCLENBQUssTUFBRSxDQUFVO1FBQ2pCLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBSyxNQUFFLENBQWU7UUFDdEIsQ0FBSyxNQUFFLENBQVM7UUFDaEIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQU0sT0FBRSxDQUFVO1FBQ2xCLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQU0sT0FBRSxDQUFVO1FBQ2xCLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFLLE1BQUUsQ0FBYztRQUNyQixDQUFLLE1BQUUsQ0FBUTtRQUNmLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQUssTUFBRSxDQUFlO1FBQ3RCLENBQUssTUFBRSxDQUFTO1FBQ2hCLENBQUssTUFBRSxDQUFhO1FBQ3BCLENBQUssTUFBRSxDQUFPO1FBQ2QsQ0FBSyxNQUFFLENBQWE7UUFDcEIsQ0FBSyxNQUFFLENBQU87UUFDZCxDQUFNLE9BQUUsQ0FBaUI7UUFDekIsQ0FBTSxPQUFFLENBQVc7UUFDbkIsQ0FBTSxPQUFFLENBQWlCO1FBQ3pCLENBQU0sT0FBRSxDQUFXO1FBQ25CLENBQUssTUFBRSxDQUFlO1FBQ3RCLENBQUssTUFBRSxDQUFTO1FBQ2hCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBaUI7UUFDekIsQ0FBTSxPQUFFLENBQVc7UUFDbkIsQ0FBSyxNQUFFLENBQWU7UUFDdEIsQ0FBSyxNQUFFLENBQVM7UUFDaEIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQU0sT0FBRSxDQUFVO1FBQ2xCLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBSyxNQUFFLENBQWM7UUFDckIsQ0FBSyxNQUFFLENBQVE7UUFDZixDQUFLLE1BQUUsQ0FBYztRQUNyQixDQUFLLE1BQUUsQ0FBUTtRQUNmLENBQUssTUFBRSxDQUFjO1FBQ3JCLENBQUssTUFBRSxDQUFRO1FBQ2YsQ0FBSyxNQUFFLENBQWM7UUFDckIsQ0FBSyxNQUFFLENBQVE7UUFDZixDQUFLLE1BQUUsQ0FBYztRQUNyQixDQUFLLE1BQUUsQ0FBUTtRQUNmLENBQU0sT0FBRSxDQUFrQjtRQUMxQixDQUFLLE1BQUUsQ0FBYztRQUNyQixDQUFLLE1BQUUsQ0FBUTtRQUNmLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQVcsWUFBRSxDQUFnQjtRQUM3QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQU0sT0FBRSxDQUFVO1FBQ2xCLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBaUI7UUFDekIsQ0FBTSxPQUFFLENBQVc7UUFDbkIsQ0FBTSxPQUFFLENBQWlCO1FBQ3pCLENBQU0sT0FBRSxDQUFXO1FBQ25CLENBQU0sT0FBRSxDQUFpQjtRQUN6QixDQUFNLE9BQUUsQ0FBVztRQUNuQixDQUFLLE1BQUUsQ0FBYTtRQUNwQixDQUFLLE1BQUUsQ0FBTztRQUNkLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQUssTUFBRSxDQUFjO1FBQ3JCLENBQUssTUFBRSxDQUFRO1FBQ2YsQ0FBSyxNQUFFLENBQWM7UUFDckIsQ0FBSyxNQUFFLENBQVE7UUFDZixDQUFLLE1BQUUsQ0FBYztRQUNyQixDQUFLLE1BQUUsQ0FBUTtRQUNmLENBQUssTUFBRSxDQUFjO1FBQ3JCLENBQUssTUFBRSxDQUFRO1FBQ2YsQ0FBTSxPQUFFLENBQWlCO1FBQ3pCLENBQU0sT0FBRSxDQUFXO1FBQ25CLENBQU0sT0FBRSxDQUFpQjtRQUN6QixDQUFNLE9BQUUsQ0FBVztRQUNuQixDQUFNLE9BQUUsQ0FBaUI7UUFDekIsQ0FBTSxPQUFFLENBQVc7UUFDbkIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQU0sT0FBRSxDQUFVO1FBQ2xCLENBQU0sT0FBRSxDQUFnQjtRQUN4QixDQUFNLE9BQUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQU0sT0FBRSxDQUFVO1FBQ2xCLENBQUssTUFBRSxDQUFjO1FBQ3JCLENBQUssTUFBRSxDQUFRO1FBQ2YsQ0FBTSxPQUFFLENBQWU7UUFDdkIsQ0FBTSxPQUFFLENBQVM7UUFDakIsQ0FBTSxPQUFFLENBQWU7UUFDdkIsQ0FBTSxPQUFFLENBQVM7UUFDakIsQ0FBSyxNQUFFLENBQXVCO1FBQzlCLENBQUssTUFBRSxDQUFpQjtRQUN4QixDQUFLLE1BQUUsQ0FBYTtRQUNwQixDQUFLLE1BQUUsQ0FBTztRQUNkLENBQU0sT0FBRSxDQUFpQjtRQUN6QixDQUFNLE9BQUUsQ0FBVztRQUNuQixDQUFNLE9BQUUsQ0FBaUI7UUFDekIsQ0FBTSxPQUFFLENBQVc7UUFDbkIsQ0FBTSxPQUFFLENBQWdCO1FBQ3hCLENBQU0sT0FBRSxDQUFVO1FBQ2xCLENBQU0sT0FBRSxDQUFlO1FBQ3ZCLENBQU0sT0FBRSxDQUFTO1FBQ2pCLENBQU0sT0FBRSxDQUFpQjtRQUN6QixDQUFNLE9BQUUsQ0FBVztRQUNuQixDQUFNLE9BQUUsQ0FBaUI7UUFDekIsQ0FBTSxPQUFFLENBQVc7UUFDbkIsQ0FBSyxNQUFFLENBQWM7UUFDckIsQ0FBSyxNQUFFLENBQVE7SUFDakIsQ0FBQztJQUVELEVBQWdELEFBQWhELDhDQUFnRDtJQUNoRCxnQkFBZ0IsRUFBRSxDQUFDO1FBQUEsQ0FBSztRQUFFLENBQUs7UUFBRSxDQUFLO1FBQUUsQ0FBSztRQUFFLENBQUs7UUFBRSxDQUFLO1FBQUUsQ0FBSztRQUFFLENBQUs7UUFBRSxDQUFLO1FBQUUsQ0FBTTtRQUFFLENBQU07UUFBRSxDQUFNO1FBQUUsQ0FBTTtJQUFBLENBQUM7QUFDbkgsQ0FBQyIsInNvdXJjZXMiOlsic3JjL3BhY2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQWJzdHJhY3Rpb24gb2YgUEFDRVIgc2l0ZSBhbmQgc2VydmljZXMuICBUaGlzIGZpbGUgaXMgYnJvd3Nlci1pbmRlcGVuZGVudC5cclxuXHJcblxyXG4vLyBQQUNFUiB3ZWJzaXRlcyBhcmUgc3RydWN0dXJlZCBsaWtlIHRoaXM6XHJcbi8vXHJcbi8vIENhc2UgcXVlcnkgZm9ybVxyXG4vLyAgfFxyXG4vLyAgYC0tPiBNYWluIG1lbnUgZm9yIGEgcGFydGljdWxhciBjYXNlXHJcbi8vICAgICAgICB8XHJcbi8vICAgICAgICB8LS0+IERvY2tldCBxdWVyeSBmb3JtIC0tLS5cclxuLy8gICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4vLyAgICAgICAgYC0tPiBIaXN0b3J5IHF1ZXJ5IGZvcm0gLS18XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfC0tPiBQb3NzaWJsZSBpbnRlcnN0aXRpYWwgbGFyZ2UgZG9ja2V0IHBhZ2VcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLT4gRG9ja2V0LCBpLmUuIGxpc3Qgb2YgZG9jdW1lbnRzIG9yXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeSBSZXBvcnQgKCopXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfC0tPiBBdHRhY2htZW50IG1lbnUgcGFnZSBmb3IgYVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgIHBhcnRpY3VsYXIgZG9jdW1lbnQgKGFrYSBkb2MxXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgcGFnZS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLS0tLS0nLS0+IFNpbmdsZSBkb2N1bWVudCBwYWdlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICctLT4gUERGIHZpZXcgcGFnZSAoKilcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8LS0+IEFsbCBkb2N1bWVudHMgemlwIHBhZ2VcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tPiBaaXAgZmlsZSBkb3dubG9hZCBwYWdlICgqKVxyXG4vL1xyXG4vLyBQYWdlcyBtYXJrZWQgKCopIGNvc3QgbW9uZXkuICBUaGUgXCJTaW5nbGUgZG9jdW1lbnQgcGFnZVwiIGlzIGEgcGFnZSB0aGF0XHJcbi8vIHRlbGxzIHlvdSBob3cgbXVjaCBhIGRvY3VtZW50IHdpbGwgY29zdCBiZWZvcmUgeW91IGdldCB0byB2aWV3IHRoZSBQREYuXHJcblxyXG5sZXQgUEFDRVJfVE9fQ0xfSURTID0ge1xyXG4gICAgJ2F6Yic6ICdhcmInLCAgICAgICAgIC8vIEFyaXpvbmEgQmFua3J1cHRjeSBDb3VydFxyXG4gICAgJ2NvZmMnOiAndXNjZmMnLCAgICAgIC8vIENvdXJ0IG9mIEZlZGVyYWwgQ2xhaW1zXHJcbiAgICAnbmViJzogJ25lYnJhc2thYicsICAgLy8gTmVicmFza2EgQmFua3J1cHRjeVxyXG4gICAgJ255c2ItbWVnYSc6ICdueXNiJyAgIC8vIFJlbW92ZSB0aGUgbWVnYSB0aGluZ1xyXG59O1xyXG5cclxuLy8gUHVibGljIGNvbnN0YW50cyBhbmQgcHVyZSBmdW5jdGlvbnMuICBBcyB0aGVzZSBhcmUgcHVyZSwgdGhleSBjYW4gYmUgZnJlZWx5XHJcbi8vIGNhbGxlZCBmcm9tIGFueXdoZXJlOyBieSBjb252ZW50aW9uIHdlIHVzZSBhbiBBTExfQ0FQUyBuYW1lIHRvIGFsbHVkZSB0b1xyXG4vLyB0aGUgcHVyaXR5IChjb25zdC1uZXNzKSBvZiB0aGlzIG9iamVjdCdzIGNvbnRlbnRzLlxyXG5sZXQgUEFDRVIgPSB7XHJcbiAgLy8gUmV0dXJucyB0aGUgY291cnQgaWRlbnRpZmllciBmb3IgYSBnaXZlbiBVUkwsIG9yIG51bGwgaWYgbm90IGEgUEFDRVIgc2l0ZS5cclxuICBnZXRDb3VydEZyb21Vcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIGxldCBtYXRjaCA9ICh1cmwgfHwgJycpLnRvTG93ZXJDYXNlKCkubWF0Y2goXHJcbiAgICAgICAgL15cXHcrOlxcL1xcLyhlY2Z8cGFjZXIpXFwuKFxcdyspXFwudXNjb3VydHNcXC5nb3ZcXC8vKTtcclxuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzJdIDogbnVsbDtcclxuICB9LFxyXG5cclxuICBjb252ZXJ0VG9Db3VydExpc3RlbmVyQ291cnQ6IGZ1bmN0aW9uKHBhY2VyX2NvdXJ0X2lkKSB7XHJcbiAgICByZXR1cm4gUEFDRVJfVE9fQ0xfSURTW3BhY2VyX2NvdXJ0X2lkXSB8fCBwYWNlcl9jb3VydF9pZDtcclxuICB9LFxyXG5cclxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIFVSTCBsb29rcyBsaWtlIGEgbGluayB0byBhIFBBQ0VSIGRvY3VtZW50LlxyXG4gIC8vIEZvciBDTUVDRiBEaXN0cmljdDpcclxuICAvLyAgIGh0dHBzOi8vZWNmLmRjZC51c2NvdXJ0cy5nb3YvZG9jMS8wNDUwMzgzNzkyMFxyXG4gIC8vIEZvciBDTUVDRiBBcHBlbGxhdGU6XHJcbiAgLy8gICBodHRwczovL2VjZi5jYTIudXNjb3VydHMuZ292L2RvY3MxLzAwMjA1Njk1NzU4XHJcbiAgaXNEb2N1bWVudFVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIHVybC5tYXRjaCgvXFwvKD86ZG9jMXxkb2NzMSlcXC9cXGQrLykgfHxcclxuICAgICAgICB1cmwubWF0Y2goL1xcL2NnaS1iaW5cXC9zaG93X2RvYy8pIHx8XHJcbiAgICAgICAgdXJsLm1hdGNoKC9zZXJ2bGV0PVNob3dEb2MvKVxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChQQUNFUi5nZXRDb3VydEZyb21VcmwodXJsKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgZ2V0Q2FzZUlkRnJvbUNsYWltc1BhZ2U6IGZ1bmN0aW9uIChkb2N1bWVudCkge1xyXG4gICAgY29uc3QgbGlua3MgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXTtcclxuICAgIGNvbnN0IGRvY2tldExpbmsgPSBsaW5rcy5maW5kKGxpbmsgPT4gbGluay5ocmVmLm1hdGNoKC9Ea3RScHRcXC5wbC8pKTtcclxuICAgIGlmIChkb2NrZXRMaW5rKSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gZG9ja2V0TGluay5ocmVmLm1hdGNoKC9cXD9cXGQrLylcclxuICAgICAgcmV0dXJuIG1hdGNoWzBdLnNsaWNlKDEpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBVUkwgaXMgZm9yIGRvY2tldCBxdWVyeSBwYWdlLlxyXG4gIGlzRG9ja2V0UXVlcnlVcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIC8vIFRoZSBwYXJ0IGFmdGVyIHRoZSBcIj9cIiBpcyBhbGwgZGlnaXRzLlxyXG4gICAgcmV0dXJuICEhdXJsLm1hdGNoKC9cXC8oRGt0UnB0fEhpc3REb2NRcnkpXFwucGxcXD9cXGQrJC8pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gVVJMIGlzIGZvciBhIGRvY2tldCBkaXNwbGF5IHBhZ2UgKGkuZS4gdGhlIHBhZ2VcclxuICAvLyBhZnRlciBzdWJtaXR0aW5nIHRoZSBcIkRvY2tldCBTaGVldFwiIHF1ZXJ5IHBhZ2UpLlxyXG4gIGlzRG9ja2V0RGlzcGxheVVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgLy8gVGhlIHBhcnQgYWZ0ZXIgdGhlIFwiP1wiIGhhcyBoeXBoZW5zIGluIGl0LlxyXG4gICAgLy8gICBodHRwczovL2VjZi5kY2QudXNjb3VydHMuZ292L2NnaS1iaW4vRGt0UnB0LnBsPzU5MTAzMDA0MDQ3MzM5Mi1MXzFfMC0xXHJcbiAgICAvLyBBcHBlbGxhdGU6XHJcbiAgICAvLyAgIGh0dHBzOi8vZWNmLmNhMS51c2NvdXJ0cy5nb3Yvbi9iZWFtL3NlcnZsZXQvVHJhbnNwb3J0Um9vbT9zZXJ2bGV0PUNhc2VTdW1tYXJ5LmpzcCZjYXNlTnVtPTE2LTE1NjcmaW5jT3JpZ0RrdD1ZJmluY0RrdEVudHJpZXM9WVxyXG4gICAgaWYgKHVybC5tYXRjaCgvXFwvRGt0UnB0XFwucGxcXD9cXHcrLVtcXHctXSskLykpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcbiAgICAvLyBSZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggb24gQXBwZWxsYXRlIHBhZ2VzLCBhbmQgaWYgYVxyXG4gICAgLy8gc2VydmxldCBpcyBzcGVjaWZpZWQsIHRvIHJldHVybiBpdCBhcyBhIGNhcHR1cmVkIGdyb3VwLlxyXG4gICAgLy8gSWYgbm8gc2VydmxldCBpcyBzcGVjaWZpZWQsIGl0J3MgcmV0dXJuZWQgYXMgdW5kZWZpbmVkLCB3aGljaFxyXG4gICAgLy8gaXMgcHJvcGVybHkgaGFuZGxlZCBpbiB0aGUgc3dpdGNoIGJsb2NrLlxyXG4gICAgLy9cclxuICAgIC8vIFRoZSBSRSBpcyBhIGJpdCBjb21wbGljYXRlZCwgc28gbGV0J3MgYnJlYWsgaXQgZG93bjpcclxuICAgIC8vXHJcbiAgICAvLyAgIHNlcnZsZXRcXC9UcmFuc3BvcnRSb29tICMgMTogVGhlIHN0cmluZyBzZXJ2bGV0L1RyYW5zcG9ydFJvb21cclxuICAgIC8vICAgKD86XFw/c2VydmxldD0gICAgICAgICAgIyAyOiBBbiBPUFRJT05BTCwgVEVSTUlOQUwsIE5PTi1DQVBUVVJJTkdcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAjICAgIGdyb3VwIHRoYXQgY29udGFpbnMgP3NlcnZsZXQ9XHJcbiAgICAvLyAgICAgKFtePyZdKykgICAgICAgICAgICAgIyAzOiBBIENBUFRVUklORyBncm91cCBvZiA+MSBub24tPyBvciAmXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIyAgICBjaGFycywgYXMgdGhleSdkIGRlbGltaXQgYW5vdGhlclxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICMgICAgdXJsIHBhcmFtZXRlci5cclxuICAgIC8vICAgICAoPzpbXFwvJiM7XS4qKT8gICAgICAgIyA0OiBBbiBPUFRJT05BTCwgTk9OLUNBUFRVUklORyBncm91cCBvZiBhXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIyAgICAvLCAmLCAjLCBvciA7IGNoYXIsIGZvbGxvd2VkIGJ5XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIyAgICBhbnl0aGluZyBhdCBhbGwsIHdoaWNoIHdvdWxkIGJlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIyAgICBvbmUgb3IgbW9yZSB1cmwgcGFyYW1ldGVycy5cclxuICAgIC8vICAgKT8gICAgICAgICAgICAgICAgICAgICAjIENsb3Npbmcgb2YgKDIpIGFuZCBtYWtpbmcgaXQgb3B0aW9uYWxcclxuICAgIC8vICAgJCAgICAgICAgICAgICAgICAgICAgICAjIE1ha2luZyAoMikgdGVybWluYWxcclxuICAgIC8vXHJcbiAgICAvLyB4eHg6IFRoaXMgd291bGQgbWF0Y2ggb25cclxuICAgIC8vICAgaHR0cHM6Ly9lY2YuY2ExLnVzY291cnRzLmdvdi9uL2JlYW0vdW5kZXJzZXJ2bGV0L1xyXG4gICAgLy8geHh4OiBUaGlzIHByZXN1bWVzID9zZXJ2bGV0PSBpcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB3b3VsZCBmYWlsIG9uXHJcbiAgICAvLyAgIC9zZXJ2bGV0L1RyYW5zcG9ydFJvb20/Y2FzZUlkPTQ0MzgxJnNlcnZsZXQ9RG9ja2V0UmVwb3J0RmlsdGVyLmpzcFxyXG4gICAgLy8geHh4OiBUaGlzIHdpbGwgaWYgYSB0ZXJtaW5hbCBzbGFzaCBwcmVjZWRlcyB0aGUgcGFyYW1ldGVyIHNlY3Rpb246XHJcbiAgICAvLyAgIC9zZXJ2bGV0L1RyYW5zcG9ydFJvb20vPy4uLlxyXG4gICAgbGV0IHJlID0gL3NlcnZsZXRcXC9UcmFuc3BvcnRSb29tKD86XFw/c2VydmxldD0oW14/Jl0rKSg/OltcXC8mIztdLiopPyk/JC87XHJcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmUpO1xyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgIGxldCBzZXJ2bGV0ID0gbWF0Y2hbMV07XHJcbiAgICAgIGRlYnVnKDQsIGBJZGVudGlmaWVkIGFwcGVsbGF0ZSBzZXJ2bGV0ICR7c2VydmxldH0gYXQgJHt1cmx9YCk7XHJcblxyXG4gICAgICBzd2l0Y2goc2VydmxldCkge1xyXG4gICAgICAgIGNhc2UgJ0Nhc2VTdW1tYXJ5LmpzcCc6XHJcbiAgICAgICAgY2FzZSAnU2hvd1BhZ2UnOiAvLyB3aGF0IGlzIHRoaXM/XHJcbiAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGRlYnVnKDQsIGBBc3N1bWluZyBzZXJ2bGV0ICR7c2VydmxldH0gaXMgbm90IGEgZG9ja2V0LmApO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjYXNlICdDYXNlU2VhcmNoLmpzcCc6XHJcbiAgICAgICAgY2FzZSAnU2hvd0RvYyc6XHJcbiAgICAgICAgY2FzZSAnU2hvd0RvY011bHRpJzpcclxuICAgICAgICBjYXNlICdDYXNlU2VsZWN0aW9uVGFibGUnOlxyXG4gICAgICAgIGNhc2UgJ0NvdXJ0SW5mby5qc3AnOlxyXG4gICAgICAgIGNhc2UgJ0RvY2tldFJlcG9ydEZpbHRlci5qc3AnOlxyXG4gICAgICAgIGNhc2UgJ0ludmFsaWRVc2VyTG9naW4uanNwJzpcclxuICAgICAgICBjYXNlICdPcmRlckp1ZGdtZW50LmpzcCc6XHJcbiAgICAgICAgY2FzZSAnUEFDRVJDYWxlbmRhci5qc3AnOlxyXG4gICAgICAgIGNhc2UgJ1BhY2VySGVscC5qc3AnOlxyXG4gICAgICAgIGNhc2UgJ1BBQ0VST3Bpbmlvbi5qc3AnOlxyXG4gICAgICAgIGNhc2UgJ0xvZ2luJzpcclxuICAgICAgICBjYXNlICdrMmFmcmFtZS5qc3AnOiAvLyBhdHRvcm5leS9qYXZhP1xyXG4gICAgICAgIGNhc2UgJ2syYWpubHAuanNwJzpcclxuICAgICAgICBjYXNlICdSU1NHZW5lcmF0b3InOiAvLyBtYXliZSB3ZSBzaG91bGQgdXBsb2FkIHJzcz9cclxuICAgICAgICBjYXNlICdQYXltZW50SGlzdG9yeSc6XHJcbiAgICAgICAgY2FzZSAnQ2hhbmdlQ2xpZW50LmpzcCc6XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIFVSTCBpcyBmb3IgYSBkb2NrZXQgaGlzdG9yeSBkaXNwbGF5IHBhZ2UuXHJcbiAgaXNEb2NrZXRIaXN0b3J5RGlzcGxheVVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgcmV0dXJuICEhdXJsLm1hdGNoKC9cXC9IaXN0RG9jUXJ5XFwucGxcXD9cXHcrLVtcXHctXSskLyk7XHJcbiAgfSxcclxuXHJcbiAgLy8gUmV0dXJucyB0cnVlIGlmIHRoaXMgaXMgYSBcIkRvY3VtZW50IFNlbGVjdGlvbiBNZW51XCIgcGFnZSAoYSBsaXN0IG9mIHRoZVxyXG4gIC8vIGF0dGFjaG1lbnRzIGZvciBhIHBhcnRpY3VsYXIgZG9jdW1lbnQpLlxyXG4gIGlzQXR0YWNobWVudE1lbnVQYWdlOiBmdW5jdGlvbiAodXJsLCBkb2N1bWVudCkge1xyXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gICAgbGV0IHBhZ2VDaGVjayA9IFBBQ0VSLmlzRG9jdW1lbnRVcmwodXJsKSAmJlxyXG4gICAgICBpbnB1dHMubGVuZ3RoICYmXHJcbiAgICAgIGlucHV0c1tpbnB1dHMubGVuZ3RoIC0gMV0udmFsdWUgPT09ICdEb3dubG9hZCBBbGwnO1xyXG4gICAgcmV0dXJuICEhcGFnZUNoZWNrO1xyXG4gIH0sXHJcblxyXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGlzIGEgXCJEb3dubG9hZCBEb2N1bWVudHNcIiBwYWdlIChjb25maXJtYXRpb24gb2ZcclxuICAvLyBwcmljaW5nIGZvciBhbGwgZG9jdW1lbnRzIHRvIHJlY2VpdmUgYSB6aXAgZmlsZSB3aXRoIGFsbCBvZiB0aGVtKVxyXG4gIGlzRG93bmxvYWRBbGxEb2N1bWVudHNQYWdlOiBmdW5jdGlvbih1cmwsIGRvY3VtZW50KSB7XHJcbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKTtcclxuICAgIGxldCBwYWdlQ2hlY2sgPVxyXG4gICAgICAhIXVybC5tYXRjaCgvXFwvc2hvd19tdWx0aWRvY3NcXC5wbFxcPy8pICYmXHJcbiAgICAgIGlucHV0cy5sZW5ndGggJiZcclxuICAgICAgaW5wdXRzW2lucHV0cy5sZW5ndGgtMV0udmFsdWUgPT09IFwiRG93bmxvYWQgRG9jdW1lbnRzXCJcclxuICAgIHJldHVybiAhIXBhZ2VDaGVja1xyXG4gIH0sXHJcblxyXG4gIC8vIENsYWltcyBSZWdpc3RlciBQYWdlIGluY2x1ZGVzIGFuIGgyIHRhZyB3aXRoIHRoZSBjb3VydCBhbmQgd29yZHMgXCJDbGFpbXMgUmVnaXN0ZXJcIlxyXG4gIC8vIGV4YW1wbGVVcmw6IGh0dHBzOi8vZWNmLm55ZWIudXNjb3VydHMuZ292L2NnaS1iaW4vU2VhcmNoQ2xhaW1zLnBsPzYxMDU1MDE1MjU0NjUxNS1MXzFfMC0xXHJcbiAgLy8gZXhhbXBsZUhlYWRlcjogPGgyPkVhc3Rlcm4gRGlzdHJpY3Qgb2YgTmV3IFlvcms8YnI+Q2xhaW1zIFJlZ2lzdGVyIDwvaDI+XHJcblxyXG4gIGlzQ2xhaW1zUmVnaXN0ZXJQYWdlOiBmdW5jdGlvbiAodXJsLCBkb2N1bWVudCkge1xyXG4gICAgbGV0IGhlYWRsaW5lcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDInKV1cclxuICAgIGxldCBwYWdlQ2hlY2sgPVxyXG4gICAgICAhIXVybC5tYXRjaCgvXFwvU2VhcmNoQ2xhaW1zXFwucGxcXD8vKVxyXG4gICAgICAmJiBoZWFkbGluZXMubGVuZ3RoID4gMFxyXG4gICAgICAmJiBoZWFkbGluZXNbMF0uaW5uZXJUZXh0Lm1hdGNoKC9DbGFpbXMgUmVnaXN0ZXIvKVxyXG4gICAgcmV0dXJuIHBhZ2VDaGVja1xyXG4gIH0sXHJcblxyXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGlzIGEgcGFnZSBmb3IgZG93bmxvYWRpbmcgYSBzaW5nbGUgZG9jdW1lbnQuXHJcbiAgLy8gZGlzdHJpY3Q6XHJcbiAgLy8gICBodHRwczovL2VjZi5kY2QudXNjb3VydHMuZ292L2RvYzEvMDQ1MDM4Mzc5MjBcclxuICAvLyBhcHBlbGxhdGU6XHJcbiAgLy8gICBodHRwczovL2VjZi5jYTEudXNjb3VydHMuZ292L24vYmVhbS9zZXJ2bGV0L1RyYW5zcG9ydFJvb20/c2VydmxldD1TaG93RG9jJmRsc19pZD0wMDEwNzIxNTU2NSZjYXNlSWQ9NDExODImZGt0VHlwZT1ka3RQdWJsaWNcclxuICBpc1NpbmdsZURvY3VtZW50UGFnZTogZnVuY3Rpb24gKHVybCwgZG9jdW1lbnQpIHtcclxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuICAgIGxldCBsYXN0SW5wdXQgPSBpbnB1dHMubGVuZ3RoICYmIGlucHV0c1tpbnB1dHMubGVuZ3RoIC0gMV0udmFsdWU7XHJcbiAgICAvLyBJZiB0aGUgcmVjZWlwdCBkb2Vzbid0IHNheSBcIkltYWdlXCIgd2UgZG9uJ3QgeWV0IHN1cHBvcnQgaXQgb24gdGhlIHNlcnZlci5cclxuICAgIC8vIFNvIGZhciwgdGhpcyBvbmx5IGFwcGVhcnMgdG8gYXBwbHkgdG8gYmFua3J1cHRjeSBjbGFpbXMuIFRoaXMgQ1NTXHJcbiAgICAvLyBzZWxlY3RvciBpcyBkdXBsaWNhdGVkIGluIG9uRG9jdW1lbnRWaWV3U3VibWl0LlxyXG4gICAgbGV0IGhhc0ltYWdlUmVjZWlwdCA9ICEhJCgndGQ6Y29udGFpbnMoSW1hZ2UpJykubGVuZ3RoO1xyXG5cclxuXHJcbiAgICBsZXQgcGFnZUNoZWNrID0gKFBBQ0VSLmlzRG9jdW1lbnRVcmwodXJsKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICBoYXNJbWFnZVJlY2VpcHQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgKGxhc3RJbnB1dCA9PT0gJ1ZpZXcgRG9jdW1lbnQnKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAobGFzdElucHV0ID09PSAnQWNjZXB0IENoYXJnZXMgYW5kIFJldHJpZXZlJykpO1xyXG4gICAgZGVidWcoNCxgIGxhc3RJbnB1dCAke2xhc3RJbnB1dH1gKTtcclxuICAgIHJldHVybiAhIXBhZ2VDaGVjaztcclxuICB9LFxyXG5cclxuICAvLyBSZXR1cm5zIHRoZSBkb2N1bWVudCBJRCBmb3IgYSBkb2N1bWVudCB2aWV3IHBhZ2Ugb3Igc2luZ2xlLWRvY3VtZW50IHBhZ2UuXHJcbiAgZ2V0RG9jdW1lbnRJZEZyb21Vcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIGxldCBtYXRjaCA9ICh1cmwgfHwgJycpLm1hdGNoKC9cXC8oPzpkb2MxfGRvY3MxKVxcLyhcXGQrKS8pO1xyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgIC8vIFBBQ0VSIHNpdGVzIHVzZSB0aGUgZm91cnRoIGRpZ2l0IG9mIHRoZSBwYWNlcl9kb2NfaWQgdG8gZmxhZyB3aGV0aGVyXHJcbiAgICAgIC8vIHRoZSB1c2VyIGhhcyBiZWVuIHNob3duIGEgcmVjZWlwdCBwYWdlLiAgV2UgZG9uJ3QgY2FyZSBhYm91dCB0aGF0LCBzb1xyXG4gICAgICAvLyB3ZSBhbHdheXMgc2V0IHRoZSBmb3VydGggZGlnaXQgdG8gMCB3aGVuIGdldHRpbmcgYSBkb2MgSUQuXHJcbiAgICAgIHJldHVybiBgJHttYXRjaFsxXS5zbGljZSgwLCAzKX0wJHttYXRjaFsxXS5zbGljZSg0KX1gO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIEdldCB0aGUgZG9jdW1lbnQgSUQgZm9yIGEgZG9jdW1lbnQgdmlldyBwYWdlIHVzaW5nIHRoZSBcIlZpZXcgRG9jdW1lbnRcIlxyXG4gIC8vIGZvcm0uXHJcbiAgZ2V0RG9jdW1lbnRJZEZyb21Gb3JtOiBmdW5jdGlvbih1cmwsIGRvY3VtZW50KXtcclxuICAgIGlmIChQQUNFUi5pc0RvY3VtZW50VXJsKHVybCkpIHtcclxuICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gICAgICBsZXQgbGFzdF9pbnB1dCA9IGlucHV0c1tpbnB1dHMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChpbnB1dHMubGVuZ3RoICYmIGxhc3RfaW5wdXQudmFsdWUgPT09ICdWaWV3IERvY3VtZW50Jykge1xyXG4gICAgICAgIC8vIEdyYWIgdGhlIGRvY3VtZW50IElEIGZyb20gdGhlIGZvcm0ncyBvbnN1Ym1pdCBhdHRyaWJ1dGVcclxuICAgICAgICBsZXQgb25zdWJtaXQgPSBsYXN0X2lucHV0LmZvcm0uZ2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcpO1xyXG4gICAgICAgIGxldCBnb0RMUyA9IFBBQ0VSLnBhcnNlR29ETFNGdW5jdGlvbihvbnN1Ym1pdCk7XHJcbiAgICAgICAgcmV0dXJuIGdvRExTICYmIFBBQ0VSLmdldERvY3VtZW50SWRGcm9tVXJsKGdvRExTLmh5cGVybGluayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyBHaXZlbiBhIFVSTCB0aGF0IHNhdGlzZmllcyBpc0RvY2tldFF1ZXJ5VXJsLCBnZXRzIGl0cyBjYXNlIG51bWJlci5cclxuICBnZXRDYXNlTnVtYmVyRnJvbVVybHM6IGZ1bmN0aW9uICh1cmxzKSB7XHJcbiAgICAvLyBJdGVyYXRlIG92ZXIgYW4gYXJyYXkgb2YgVVJMcyBhbmQgZ2V0IHRoZSBjYXNlIG51bWJlciBmcm9tIHRoZVxyXG4gICAgLy8gZmlyc3Qgb25lIHRoYXQgbWF0Y2hlcy4gQmVjYXVzZSB0aGUgY2FsbGluZyBmdW5jdGlvbiBtYXkgcGFzcyB1cyBVUkxzXHJcbiAgICAvLyBvdGhlciB0aGFuIHRoZSBwYWdlIFVSTCwgc3VjaCBhcyByZWZlcnJlcnMsIHdlIG5hcnJvdyB0b1xyXG4gICAgLy8gKnVzY291cnRzLmdvdi4gKFBhZ2UgVVJMcyBhcmUgc28gbGltaXRlZCBieSB0aGUgXCJpbmNsdWRlX2dsb2JzXCIgaW5cclxuICAgIC8vIG1hbmlmZXN0Lmpzb247IGJ1dCByZWZlcnJlcnMgYXJlIG5vdC4pXHJcbiAgICBmb3IgKGxldCB1cmwgb2YgdXJscykge1xyXG4gICAgICBsZXQgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSh1cmwpO1xyXG4gICAgICAvLyBKUyBpcyB0cmFzaC4gSXQgbGFja3MgYSB3YXkgb2YgZ2V0dGluZyB0aGUgVExELCBzbyB3ZSB1c2UgZW5kc1dpdGguXHJcbiAgICAgIGlmIChob3N0bmFtZS5lbmRzV2l0aCgndXNjb3VydHMuZ292JykpIHtcclxuICAgICAgICBsZXQgbWF0Y2g7XHJcbiAgICAgICAgZm9yIChsZXQgcmUgb2YgW1xyXG4gICAgICAgICAgLy8gQXBwZWxsYXRlIENNRUNGIHNlbmRzIHVzIHNvbWUgb2RkIFVSTHMsIGJlIGF3YXJlOlxyXG4gICAgICAgICAgLy8gaHR0cHM6Ly9lY2YubWFkLnVzY291cnRzLmdvdi9jZ2ktYmluL0RrdFJwdC5wbD9jYXNlTnVtYmVyPTE6MTctY3YtMTE4NDItUEJTJmNhc2VJZD0wXHJcbiAgICAgICAgICAvLyBodHRwczovL2VjZi5tYWQudXNjb3VydHMuZ292L2NnaS1iaW4vRGt0UnB0LnBsP2Nhc2VOdW1iZXI9MToxNy1jdi0xMTg0Mi1QQlMmY2FzZUlkPTE6MTctY3YtMTE4NDItUEJTXHJcbiAgICAgICAgICAvWz8mXWNhc2VpZD0oXFxkKykvaSwgLy8gbWF0Y2ggb24gY2FzZWlkIEdFVCBwYXJhbVxyXG4gICAgICAgICAgL1xcPyhcXGQrKSg/OiYuKik/JC8sICAvLyBtYXRjaCBvbiBEa3RScHQucGw/MTc4NTAyJmJsYWggdXJsc1xyXG4gICAgICAgIF0pe1xyXG4gICAgICAgICAgbWF0Y2ggPSB1cmwubWF0Y2gocmUpO1xyXG4gICAgICAgICAgaWYgKG1hdGNoKXtcclxuICAgICAgICAgICAgZGVidWcoMywgYEZvdW5kIGNhc2VpZCB2aWE6ICR7bWF0Y2hbMF19YCk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaFsxXSA9PT0gJzAnKXtcclxuICAgICAgICAgICAgICAvLyBBcHBlbGxhdGUgQ01FQ0YgY2FsbHMgRGlzdHJpY3QgQ01FQ0Ygd2l0aCBjYXNlSWQ9MCB3aGVuIGl0IGRvZXNuJ3RcclxuICAgICAgICAgICAgICAvLyBrbm93IHRoZSBjYXNlaWQuIElnbm9yZSB0aGF0IHNwZWNpYWwgY2FzZSBoZXJlLlxyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0Y2ggPSB1cmwubWF0Y2goL1s/Jl1jYXNlTnVtPShbLVxcZF0rKS8pO1xyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgLy8gQXBwZWxsYXRlLiBBY3R1YWxseSB0aGlzIGlzIGEgZG9ja2V0IG51bWJlci4gVWhvaD8geHh4XHJcbiAgICAgICAgICBkZWJ1ZygzLCBgRm91bmQgY2FzZU51bSB2aWE6ICR7bWF0Y2hbMF19YCk7XHJcbiAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdGNoID0gdXJsLm1hdGNoKC9bPyZdY2FzZUlkPShbLVxcZF0rKS8pO1xyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgZGVidWcoMywgYEZvdW5kIGNhc2VJZCB2aWE6ICR7bWF0Y2hbMF19YCk7XHJcbiAgICAgICAgICAvLyBBbHNvIHNlZW4gaW4gYXBwZWxsYXRlLiBOb3RlIHVwcGVyY2FzZSAnSScgYW5kIGh5cGhlbnMuIEFjdHVhbCBjYXNlSUQuIHh4eFxyXG4gICAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldENhc2VOdW1iZXJGcm9tSW5wdXRzOiBmdW5jdGlvbih1cmwsIGRvY3VtZW50KXtcclxuICAgIGlmIChQQUNFUi5pc0RvY3VtZW50VXJsKHVybCkpe1xyXG4gICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgICAgIGxldCBsYXN0X2lucHV0ID0gaW5wdXRzW2lucHV0cy5sZW5ndGggLTFdO1xyXG4gICAgICBpZiAoaW5wdXRzLmxlbmd0aCAmJiBsYXN0X2lucHV0LnZhbHVlID09PSBcIkRvd25sb2FkIEFsbFwiKSB7XHJcbiAgICAgICAgLy8gQXR0YWNobWVudCBwYWdlLlxyXG4gICAgICAgIGxldCBvbmNsaWNrID0gbGFzdF9pbnB1dC5nZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIpO1xyXG4gICAgICAgIGxldCBtYXRjaCA9IG9uY2xpY2subWF0Y2goL1s/Jl1jYXNlaWQ9KFxcZCspL2kpO1xyXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAhPT0gJzAnKXtcclxuICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXRzLmxlbmd0aCAmJiBsYXN0X2lucHV0LnZhbHVlID09PSBcIlZpZXcgRG9jdW1lbnRcIikge1xyXG4gICAgICAgIC8vIERvd25sb2FkIHJlY2VpcHQgcGFnZS5cclxuICAgICAgICBsZXQgb25zdWJtaXQgPSBsYXN0X2lucHV0LmZvcm0uZ2V0QXR0cmlidXRlKFwib25zdWJtaXRcIik7XHJcbiAgICAgICAgbGV0IGdvRExTID0gUEFDRVIucGFyc2VHb0RMU0Z1bmN0aW9uKG9uc3VibWl0KTtcclxuICAgICAgICByZXR1cm4gZ29ETFMgJiYgZ29ETFMuZGVfY2FzZWlkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gR2V0cyB0aGUgbGFzdCBwYXRoIGNvbXBvbmVudCBvZiBhIFVSTC5cclxuICBnZXRCYXNlTmFtZUZyb21Vcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHJldHVybiB1cmwucmVwbGFjZSgvXFw/LiovLCAnJykucmVwbGFjZSgvLipcXC8vLCAnJyk7XHJcbiAgfSxcclxuXHJcbiAgLy8gUGFyc2UgdGhlIGdvRExTIGZ1bmN0aW9uIHJldHVybmluZyBpdHMgcGFyYW1ldGVycyBhcyBhIGRpY3QuXHJcbiAgcGFyc2VHb0RMU0Z1bmN0aW9uOiBmdW5jdGlvbiAoZ29ETFNfc3RyaW5nKXtcclxuICAgIC8vIENNRUNGIHByb3ZpZGVzIGV4dHJhIGluZm9ybWF0aW9uIG9uIERvY3VtZW50IExpbmtzIChETFM/KSBpbiB0aGUgZ29ETFMoKVxyXG4gICAgLy8gZnVuY3Rpb24gb2YgYW4gb25jbGljayBoYW5kbGVyLCBlLmcuOlxyXG4gICAgLy9cclxuICAgIC8vICAgPGEgaHJlZj1cImh0dHBzOi8vZWNmLm1hZC51c2NvdXJ0cy5nb3YvZG9jMS8wOTUxODM2MDA0NlwiXHJcbiAgICAvLyAgICAgIG9uY2xpY2s9XCJnb0RMUygnL2RvYzEvMDk1MTgzNjAwNDYnLCcxNTM5OTInLCcyNjQnLCcnLCcnLCcxJywnJywnJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgIHJldHVybihmYWxzZSk7XCI+OTU8L2E+XHJcbiAgICAvL1xyXG4gICAgLy8gVGhpcyBpcyBzaW1pbGFybHkgdXNlZCBpbiB0aGUgb25zdWJtaXQgZnVuY3Rpb24gb2Ygc29tZSBmb3Jtcy5cclxuICAgIC8vXHJcbiAgICAvLyBUaGUgcGFyYW1ldGVycyBhcmUgZGVmaW5lZCBpbiB0aGUgdW5taW5pZmllZCBqc1xyXG4gICAgLy8gICBodHRwczovL2VjZi5mbG5kLnVzY291cnRzLmdvdi9saWIvZGxzX3VybC5qc1xyXG4gICAgLy8gYXM6XHJcbiAgICAvLyAgIGZ1bmN0aW9uIGdvRExTKGh5cGVybGluaywgZGVfY2FzZWlkLCBkZV9zZXFubywgZ290X3JlY2VpcHQsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgIHBkZl9oZWFkZXIsIHBkZl90b2dnbGVfcG9zc2libGUsIG1hZ2ljX251bSwgaGRyKVxyXG4gICAgLy9cclxuICAgIC8vIEJhbmtydXB0Y3kgY291cnRzIHByb3ZpZGUgdGVuIHBhcmFtZXRlcnMsIGluc3RlYWQgb2YgZWlnaHQuIFRoZXNlIGNhblxyXG4gICAgLy8gYmUgZm91bmQgaW4gdW5taW5pZmllZCBqczpcclxuICAgIC8vICAgaHR0cHM6Ly9lY2YucGFlYi51c2NvdXJ0cy5nb3YvbGliL2Rsc191cmwuanNcclxuICAgIC8vIGFzOlxyXG4gICAgLy8gICBmdW5jdGlvbiBnb0RMUyhoeXBlcmxpbmssIGRlX2Nhc2VpZCwgZGVfc2Vxbm8sIGdvdF9yZWNlaXB0LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICBwZGZfaGVhZGVyLCBwZGZfdG9nZ2xlX3Bvc3NpYmxlLCBtYWdpY19udW0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgIGNsYWltX2lkLCBjbGFpbV9udW0sIGNsYWltX2RvY19zZXEpXHJcbiAgICAvLyDOlDpcclxuICAgIC8vIC0gaGRyXHJcbiAgICAvLyArIGNsYWltX2lkLCBjbGFpbV9udW0sIGNsYWltX2RvY19zZXFcclxuICAgIGxldCBnb0Rsc0Rpc3RyaWN0ID0gL15nb0RMU1xcKCcoW14nXSopJywnKFteJ10qKScsJyhbXiddKiknLCcoW14nXSopJywnKFteJ10qKScsJyhbXiddKiknLCcoW14nXSopJywnKFteJ10qKSdcXCkvLmV4ZWMoZ29ETFNfc3RyaW5nKTtcclxuICAgIGxldCBnb0Rsc0JhbmtyPSAvXmdvRExTXFwoJyhbXiddKiknLCcoW14nXSopJywnKFteJ10qKScsJyhbXiddKiknLCcoW14nXSopJywnKFteJ10qKScsJyhbXiddKiknLCcoW14nXSopJywnKFteJ10qKScsJyhbXiddKiknXFwpLy5leGVjKGdvRExTX3N0cmluZyk7XHJcbiAgICBpZiAoIWdvRGxzRGlzdHJpY3QgJiYgIWdvRGxzQmFua3IpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBsZXQgciA9IHt9O1xyXG4gICAgaWYgKGdvRGxzRGlzdHJpY3Qpe1xyXG4gICAgICBbLCByLmh5cGVybGluaywgci5kZV9jYXNlaWQsIHIuZGVfc2Vxbm8sIHIuZ290X3JlY2VpcHQsIHIucGRmX2hlYWRlcixcclxuICAgICAgICByLnBkZl90b2dnbGVfcG9zc2libGUsIHIubWFnaWNfbnVtLCByLmhkcl0gPSBnb0Rsc0Rpc3RyaWN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgWywgci5oeXBlcmxpbmssIHIuZGVfY2FzZWlkLCByLmRlX3NlcW5vLCByLmdvdF9yZWNlaXB0LCByLnBkZl9oZWFkZXIsXHJcbiAgICAgICAgci5wZGZfdG9nZ2xlX3Bvc3NpYmxlLCByLm1hZ2ljX251bSwgci5jbGFpbV9pZCwgci5jbGFpbV9udW0sXHJcbiAgICAgICAgci5jbGFpbV9kb2Nfc2VxXSA9IGdvRGxzQmFua3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcjtcclxuICB9LFxyXG5cclxuICAvLyBHaXZlbiBkb2N1bWVudC5jb29raWUsIHJldHVybnMgdHJ1ZSBpZiB0aGUgdXNlciBpcyBsb2dnZWQgaW4gdG8gUEFDRVIuXHJcbiAgaGFzUGFjZXJDb29raWU6IGZ1bmN0aW9uIChjb29raWVTdHJpbmcpIHtcclxuICAgIGxldCBjb29raWVzID0ge307XHJcbiAgICBjb29raWVTdHJpbmcucmVwbGFjZSgvXFxzKihbXj07XSspPShbXjtdKikvZywgZnVuY3Rpb24gKG1hdGNoLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgICBjb29raWVzW25hbWUudHJpbSgpXSA9IHZhbHVlLnRyaW0oKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IHBhY2VyQ29va2llID0gY29va2llc1snUGFjZXJVc2VyJ10gfHwgY29va2llc1snUGFjZXJTZXNzaW9uJ107XHJcbiAgICByZXR1cm4gISEocGFjZXJDb29raWUgJiYgIXBhY2VyQ29va2llLm1hdGNoKC91bnZhbGlkYXRlZC8pKTtcclxuICB9LFxyXG5cclxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGNvdXJ0IGlkZW50aWZpZXIgaXMgZm9yIGFuIGFwcGVsbGF0ZSBjb3VydC5cclxuICBpc0FwcGVsbGF0ZUNvdXJ0OiBmdW5jdGlvbiAoY291cnQpIHtcclxuICAgIHJldHVybiBQQUNFUi5BUFBFTExBVEVfQ09VUlRTLmluY2x1ZGVzKGNvdXJ0KTtcclxuICB9LFxyXG5cclxuICAvLyBUaGVzZSBhcmUgYWxsIHRoZSBzdXBwb3J0ZWQgUEFDRVIgY291cnQgaWRlbnRpZmllcnMsIHRvZ2V0aGVyIHdpdGggdGhlaXJcclxuICAvLyBXZXN0LXN0eWxlIGNvdXJ0IG5hbWUgYWJicmV2aWF0aW9ucy5cclxuICBDT1VSVF9BQkJSRVZTOiB7XHJcbiAgICAvLyBBcHBlbGxhdGUgQ291cnRzXHJcbiAgICAnY2ExJzogJzFzdC1DaXIuJyxcclxuICAgICdjYTInOiAnMmQtQ2lyLicsXHJcbiAgICAnY2EzJzogJzNyZC1DaXIuJyxcclxuICAgICdjYTQnOiAnNHRoLUNpci4nLFxyXG4gICAgJ2NhNSc6ICc1dGgtQ2lyLicsXHJcbiAgICAnY2E2JzogJzZ0aC1DaXIuJyxcclxuICAgICdjYTcnOiAnN3RoLUNpci4nLFxyXG4gICAgJ2NhOCc6ICc4dGgtQ2lyLicsXHJcbiAgICAnY2E5JzogJzl0aC1DaXIuJyxcclxuICAgICdjYTEwJzogJzEwdGgtQ2lyLicsXHJcbiAgICAnY2ExMSc6ICcxMXRoLUNpci4nLFxyXG4gICAgJ2NhZGMnOiAnRC5DLi1DaXIuJyxcclxuICAgICdjYWZjJzogJ0ZlZC4tQ2lyLicsXHJcbiAgICAvLyBEaXN0cmljdCBDb3VydHNcclxuICAgICdha2InOiAnQmFua3IuRC5BbGFza2EnLFxyXG4gICAgJ2FrZCc6ICdELkFsYXNrYScsXHJcbiAgICAnYWxtYic6ICdCYW5rci5NLkQuQWxhLicsXHJcbiAgICAnYWxtZCc6ICdNLkQuQWxhLicsXHJcbiAgICAnYWxuYic6ICdCYW5rci5OLkQuQWxhLicsXHJcbiAgICAnYWxuZCc6ICdOLkQuQWxhLicsXHJcbiAgICAnYWxzYic6ICdCYW5rci5TLkQuQWxhLicsXHJcbiAgICAnYWxzZCc6ICdTLkQuQWxhLicsXHJcbiAgICAnYXJlYic6ICdCYW5rci5FLkQuQXJrLicsXHJcbiAgICAnYXJlZCc6ICdFLkQuQXJrLicsXHJcbiAgICAnYXJ3Yic6ICdCYW5rci5XLkQuQXJrLicsXHJcbiAgICAnYXJ3ZCc6ICdXLkQuQXJrLicsXHJcbiAgICAnYXpiJzogJ0JhbmtyLkQuQXJpei4nLFxyXG4gICAgJ2F6ZCc6ICdELkFyaXouJyxcclxuICAgICdjYWNiJzogJ0JhbmtyLkMuRC5DYWwuJyxcclxuICAgICdjYWNkJzogJ0MuRC5DYWwuJyxcclxuICAgICdjYWViJzogJ0JhbmtyLkUuRC5DYWwuJyxcclxuICAgICdjYWVkJzogJ0UuRC5DYWwuJyxcclxuICAgICdjYW5iJzogJ0JhbmtyLk4uRC5DYWwuJyxcclxuICAgICdjYW5kJzogJ04uRC5DYWwuJyxcclxuICAgICdjYXNiJzogJ0JhbmtyLlMuRC5DYWwuJyxcclxuICAgICdjYXNkJzogJ1MuRC5DYWwuJyxcclxuICAgICdjaXQnOiAnQ0lUJyxcclxuICAgICdjb2InOiAnQmFua3IuRC5Db2xvLicsXHJcbiAgICAnY29kJzogJ0QuQ29sby4nLFxyXG4gICAgJ2NvZmMnOiAnRmVkLkNsLicsXHJcbiAgICAnY3RiJzogJ0JhbmtyLkQuQ29ubi4nLFxyXG4gICAgJ2N0ZCc6ICdELkNvbm4uJyxcclxuICAgICdkY2InOiAnQmFua3IuRC5ELkMuJyxcclxuICAgICdkY2QnOiAnRC5ELkMuJyxcclxuICAgICdkZWInOiAnQmFua3IuRC5EZWwuJyxcclxuICAgICdkZWQnOiAnRC5EZWwuJyxcclxuICAgICdmbG1iJzogJ0JhbmtyLk0uRC5GbGEuJyxcclxuICAgICdmbG1kJzogJ00uRC5GbGEuJyxcclxuICAgICdmbG5iJzogJ0JhbmtyLk4uRC5GbGEuJyxcclxuICAgICdmbG5kJzogJ04uRC5GbGEuJyxcclxuICAgICdmbHNiJzogJ0JhbmtyLlMuRC5GbGEuJyxcclxuICAgICdmbHNkJzogJ1MuRC5GbGEuJyxcclxuICAgICdnYW1iJzogJ0JhbmtyLk0uRC5HYS4nLFxyXG4gICAgJ2dhbWQnOiAnTS5ELkdhLicsXHJcbiAgICAnZ2FuYic6ICdCYW5rci5OLkQuR2EuJyxcclxuICAgICdnYW5kJzogJ04uRC5HYS4nLFxyXG4gICAgJ2dhc2InOiAnQmFua3IuUy5ELkdhLicsXHJcbiAgICAnZ2FzZCc6ICdTLkQuR2EuJyxcclxuICAgICdndWInOiAnQmFua3IuRC5HdWFtJyxcclxuICAgICdndWQnOiAnRC5HdWFtJyxcclxuICAgICdoaWInOiAnQmFua3IuRC5IYXdhaWknLFxyXG4gICAgJ2hpZCc6ICdELkhhd2FpaScsXHJcbiAgICAnaWFuYic6ICdCYW5rci5OLkQuSW93YScsXHJcbiAgICAnaWFuZCc6ICdOLkQuSW93YScsXHJcbiAgICAnaWFzYic6ICdCYW5rci5TLkQuSW93YScsXHJcbiAgICAnaWFzZCc6ICdTLkQuSW93YScsXHJcbiAgICAnaWRiJzogJ0JhbmtyLkQuSWRhaG8nLFxyXG4gICAgJ2lkZCc6ICdELklkYWhvJyxcclxuICAgICdpbGNiJzogJ0JhbmtyLkMuRC5JbGwuJyxcclxuICAgICdpbGNkJzogJ0MuRC5JbGwuJyxcclxuICAgICdpbG5iJzogJ0JhbmtyLk4uRC5JbGwuJyxcclxuICAgICdpbG5kJzogJ04uRC5JbGwuJyxcclxuICAgICdpbHNiJzogJ0JhbmtyLlMuRC5JbGwuJyxcclxuICAgICdpbHNkJzogJ1MuRC5JbGwuJyxcclxuICAgICdpbm5iJzogJ0JhbmtyLk4uRC5JbmQuJyxcclxuICAgICdpbm5kJzogJ04uRC5JbmQuJyxcclxuICAgICdpbnNiJzogJ0JhbmtyLlMuRC5JbmQuJyxcclxuICAgICdpbnNkJzogJ1MuRC5JbmQuJyxcclxuICAgICdrc2InOiAnQmFua3IuRC5LYW4uJyxcclxuICAgICdrc2QnOiAnRC5LYW4uJyxcclxuICAgICdreWViJzogJ0JhbmtyLkUuRC5LeS4nLFxyXG4gICAgJ2t5ZWQnOiAnRS5ELkt5LicsXHJcbiAgICAna3l3Yic6ICdCYW5rci5XLkQuS3kuJyxcclxuICAgICdreXdkJzogJ1cuRC5LeS4nLFxyXG4gICAgJ2xhZWInOiAnQmFua3IuRS5ELkxhLicsXHJcbiAgICAnbGFlZCc6ICdFLkQuTGEuJyxcclxuICAgICdsYW1iJzogJ0JhbmtyLk0uRC5MYS4nLFxyXG4gICAgJ2xhbWQnOiAnTS5ELkxhLicsXHJcbiAgICAnbGF3Yic6ICdCYW5rci5XLkQuTGEuJyxcclxuICAgICdsYXdkJzogJ1cuRC5MYS4nLFxyXG4gICAgJ21hYic6ICdCYW5rci5ELk1hc3MuJyxcclxuICAgICdtYWQnOiAnRC5NYXNzLicsXHJcbiAgICAnbWRiJzogJ0JhbmtyLkQuTWQuJyxcclxuICAgICdtZGQnOiAnRC5NZC4nLFxyXG4gICAgJ21lYic6ICdCYW5rci5ELk1lLicsXHJcbiAgICAnbWVkJzogJ0QuTWUuJyxcclxuICAgICdtaWViJzogJ0JhbmtyLkUuRC5NaWNoLicsXHJcbiAgICAnbWllZCc6ICdFLkQuTWljaC4nLFxyXG4gICAgJ21pd2InOiAnQmFua3IuVy5ELk1pY2guJyxcclxuICAgICdtaXdkJzogJ1cuRC5NaWNoLicsXHJcbiAgICAnbW5iJzogJ0JhbmtyLkQuTWlubi4nLFxyXG4gICAgJ21uZCc6ICdELk1pbm4uJyxcclxuICAgICdtb2ViJzogJ0JhbmtyLkUuRC5Nby4nLFxyXG4gICAgJ21vZWQnOiAnRS5ELk1vLicsXHJcbiAgICAnbW93Yic6ICdCYW5rci5XLkQuTW8uJyxcclxuICAgICdtb3dkJzogJ1cuRC5Nby4nLFxyXG4gICAgJ21zbmInOiAnQmFua3IuTi5ELk1pc3MnLFxyXG4gICAgJ21zbmQnOiAnTi5ELk1pc3MnLFxyXG4gICAgJ21zc2InOiAnQmFua3IuUy5ELk1pc3MuJyxcclxuICAgICdtc3NkJzogJ1MuRC5NaXNzLicsXHJcbiAgICAnbXRiJzogJ0JhbmtyLkQuTW9udC4nLFxyXG4gICAgJ210ZCc6ICdELk1vbnQuJyxcclxuICAgICduY2ViJzogJ0JhbmtyLkUuRC5OLkMuJyxcclxuICAgICduY2VkJzogJ0UuRC5OLkMuJyxcclxuICAgICduY21iJzogJ0JhbmtyLk0uRC5OLkMuJyxcclxuICAgICduY21kJzogJ00uRC5OLkMuJyxcclxuICAgICduY3diJzogJ0JhbmtyLlcuRC5OLkMuJyxcclxuICAgICduY3dkJzogJ1cuRC5OLkMuJyxcclxuICAgICduZGInOiAnQmFua3IuRC5OLkQuJyxcclxuICAgICduZGQnOiAnRC5OLkQuJyxcclxuICAgICduZWInOiAnQmFua3IuRC5OZWIuJyxcclxuICAgICduZWQnOiAnRC5OZWIuJyxcclxuICAgICduaGInOiAnQmFua3IuRC5OLkguJyxcclxuICAgICduaGQnOiAnRC5OLkguJyxcclxuICAgICduamInOiAnQmFua3IuRC5OLkouJyxcclxuICAgICduamQnOiAnRC5OLkouJyxcclxuICAgICdubWInOiAnQmFua3IuRC5OLk0uJyxcclxuICAgICdubWQnOiAnRC5OLk0uJyxcclxuICAgICdubWlkJzogJ04uTWFyaWFuYUlzbGFuZHMnLFxyXG4gICAgJ252Yic6ICdCYW5rci5ELk5ldi4nLFxyXG4gICAgJ252ZCc6ICdELk5ldi4nLFxyXG4gICAgJ255ZWInOiAnQmFua3IuRS5ELk4uWS4nLFxyXG4gICAgJ255ZWQnOiAnRS5ELk4uWS4nLFxyXG4gICAgJ255bmInOiAnQmFua3IuTi5ELk4uWS4nLFxyXG4gICAgJ255bmQnOiAnTi5ELk4uWS4nLFxyXG4gICAgJ255c2InOiAnQmFua3IuUy5ELk4uWS4nLFxyXG4gICAgJ255c2ItbWVnYSc6ICdCYW5rci5TLkQuTi5ZLicsXHJcbiAgICAnbnlzZCc6ICdTLkQuTi5ZLicsXHJcbiAgICAnbnl3Yic6ICdCYW5rci5XLkQuTi5ZLicsXHJcbiAgICAnbnl3ZCc6ICdXLkQuTi5ZLicsXHJcbiAgICAnb2huYic6ICdCYW5rci5OLkQuT2hpbycsXHJcbiAgICAnb2huZCc6ICdOLkQuT2hpbycsXHJcbiAgICAnb2hzYic6ICdCYW5rci5TLkQuT2hpbycsXHJcbiAgICAnb2hzZCc6ICdTLkQuT2hpbycsXHJcbiAgICAnb2tlYic6ICdCYW5rci5FLkQuT2tsYS4nLFxyXG4gICAgJ29rZWQnOiAnRS5ELk9rbGEuJyxcclxuICAgICdva25iJzogJ0JhbmtyLk4uRC5Pa2xhLicsXHJcbiAgICAnb2tuZCc6ICdOLkQuT2tsYS4nLFxyXG4gICAgJ29rd2InOiAnQmFua3IuVy5ELk9rbGEuJyxcclxuICAgICdva3dkJzogJ1cuRC5Pa2xhLicsXHJcbiAgICAnb3JiJzogJ0JhbmtyLkQuT3IuJyxcclxuICAgICdvcmQnOiAnRC5Pci4nLFxyXG4gICAgJ3BhZWInOiAnQmFua3IuRS5ELlBhLicsXHJcbiAgICAncGFlZCc6ICdFLkQuUGEuJyxcclxuICAgICdwYW1iJzogJ0JhbmtyLk0uRC5QYS4nLFxyXG4gICAgJ3BhbWQnOiAnTS5ELlBhLicsXHJcbiAgICAncGF3Yic6ICdCYW5rci5XLkQuUGEuJyxcclxuICAgICdwYXdkJzogJ1cuRC5QYS4nLFxyXG4gICAgJ3ByYic6ICdCYW5rci5ELlAuUi4nLFxyXG4gICAgJ3ByZCc6ICdELlAuUi4nLFxyXG4gICAgJ3JpYic6ICdCYW5rci5ELlIuSS4nLFxyXG4gICAgJ3JpZCc6ICdELlIuSS4nLFxyXG4gICAgJ3NjYic6ICdCYW5rci5ELlMuQy4nLFxyXG4gICAgJ3NjZCc6ICdELlMuQy4nLFxyXG4gICAgJ3NkYic6ICdCYW5rci5ELlMuRC4nLFxyXG4gICAgJ3NkZCc6ICdELlMuRC4nLFxyXG4gICAgJ3RuZWInOiAnQmFua3IuRS5ELlRlbm4uJyxcclxuICAgICd0bmVkJzogJ0UuRC5UZW5uLicsXHJcbiAgICAndG5tYic6ICdCYW5rci5NLkQuVGVubi4nLFxyXG4gICAgJ3RubWQnOiAnTS5ELlRlbm4uJyxcclxuICAgICd0bndiJzogJ0JhbmtyLlcuRC5UZW5uLicsXHJcbiAgICAndG53ZCc6ICdXLkQuVGVubi4nLFxyXG4gICAgJ3R4ZWInOiAnQmFua3IuRS5ELlRleC4nLFxyXG4gICAgJ3R4ZWQnOiAnRS5ELlRleC4nLFxyXG4gICAgJ3R4bmInOiAnQmFua3IuTi5ELlRleC4nLFxyXG4gICAgJ3R4bmQnOiAnTi5ELlRleC4nLFxyXG4gICAgJ3R4c2InOiAnQmFua3IuUy5ELlRleC4nLFxyXG4gICAgJ3R4c2QnOiAnUy5ELlRleC4nLFxyXG4gICAgJ3R4d2InOiAnQmFua3IuVy5ELlRleC4nLFxyXG4gICAgJ3R4d2QnOiAnVy5ELlRleC4nLFxyXG4gICAgJ3V0Yic6ICdCYW5rci5ELlV0YWgnLFxyXG4gICAgJ3V0ZCc6ICdELlV0YWgnLFxyXG4gICAgJ3ZhZWInOiAnQmFua3IuRS5ELlZhLicsXHJcbiAgICAndmFlZCc6ICdFLkQuVmEuJyxcclxuICAgICd2YXdiJzogJ0JhbmtyLlcuRC5WYS4nLFxyXG4gICAgJ3Zhd2QnOiAnVy5ELlZhLicsXHJcbiAgICAndmliJzogJ0JhbmtyLkQuVmlyZ2luSXNsYW5kcycsXHJcbiAgICAndmlkJzogJ0QuVmlyZ2luSXNsYW5kcycsXHJcbiAgICAndnRiJzogJ0JhbmtyLkQuVnQuJyxcclxuICAgICd2dGQnOiAnRC5WdC4nLFxyXG4gICAgJ3dhZWInOiAnQmFua3IuRS5ELldhc2guJyxcclxuICAgICd3YWVkJzogJ0UuRC5XYXNoLicsXHJcbiAgICAnd2F3Yic6ICdCYW5rci5XLkQuV2FzaC4nLFxyXG4gICAgJ3dhd2QnOiAnVy5ELldhc2guJyxcclxuICAgICd3aWViJzogJ0JhbmtyLkUuRC5XaXMuJyxcclxuICAgICd3aWVkJzogJ0UuRC5XaXMuJyxcclxuICAgICd3aXdiJzogJ0JhbmtyLlcuRC5XaXMnLFxyXG4gICAgJ3dpd2QnOiAnVy5ELldpcycsXHJcbiAgICAnd3ZuYic6ICdCYW5rci5OLkQuVy5WYS4nLFxyXG4gICAgJ3d2bmQnOiAnTi5ELlcuVmEuJyxcclxuICAgICd3dnNiJzogJ0JhbmtyLlMuRC5XLlZhLicsXHJcbiAgICAnd3ZzZCc6ICdTLkQuVy5WYS4nLFxyXG4gICAgJ3d5Yic6ICdCYW5rci5ELld5by4nLFxyXG4gICAgJ3d5ZCc6ICdELld5by4nXHJcbiAgfSxcclxuXHJcbiAgLy8gUEFDRVIgY291cnQgaWRlbnRpZmllcnMgZm9yIGFwcGVsbGF0ZSBjb3VydHMuXHJcbiAgQVBQRUxMQVRFX0NPVVJUUzogWydjYTEnLCAnY2EyJywgJ2NhMycsICdjYTQnLCAnY2E1JywgJ2NhNicsICdjYTcnLCAnY2E4JywgJ2NhOScsICdjYTEwJywgJ2NhMTEnLCAnY2FkYycsICdjYWZjJ11cclxufTtcclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im9wdGlvbnMuY2NjYjQzMWUuanMubWFwIn0=
