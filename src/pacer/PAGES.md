// -------------------------------------------------------------------------
// Abstraction of PACER site and services. This file is browser-independent.

// PACER websites are structured like this:
//
// Case query form
// |
// `--> Main menu for a particular case // | // |--> Docket query form ---. // | | //`--> History query form --|
// |
// |--> Possible interstitial large docket page
// |
// |
// '--> Docket, i.e. list of documents or
// History Report (_)
// |
// |--> Attachment menu page for a
// | particular document (aka doc1
// | page.
// | |
// `-----'--> Single document page
// | |
// | '--> PDF view page (_)
// |
// |--> All documents zip page
// |
// '--> Zip file download page (_)
//
// Pages marked (_) cost money. The "Single document page" is a page that
// tells you how much a document will cost before you get to view the PDF.

// Public constants and pure functions. As these are pure, they can be freely
// called from anywhere; by convention we use an ALL_CAPS name to allude to
// the purity (const-ness) of this object's contents.
// Returns the court identifier for a given URL, or null if not a PACER site.
