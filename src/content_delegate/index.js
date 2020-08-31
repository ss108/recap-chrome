//  Abstraction of content scripts to make them modular and testable.
import { checkRestrictions } from './checkRestrictions';
import { findAndStorePacerDocIds } from './findAndStorePacerDocIds';
import { handleDocketQuery } from './handleDocketQueryUrl';
import { handleClaimsPageView } from './handleClaimsPageView';
import { handleDocketQueryUrl } from './handleDocketQueryUrl';
import { handleSingleDocumentPageCheck } from './handleSingleDocumentPageCheck';
import { onDocumentViewSubmit } from './onDocumentViewSubmit';
import { showPdfPage } from './showPdfPage';
import { handleAttachmentMenuPage } from './handleAttachmentMenuPage';
import { handleZipFilePageView } from './handleZipFilePageView';
import { handleRecapLinkClick } from './handleRecapLinkClick';
import { handleSingleDocumentPageView } from './handleSingleDocumentPageView';
import { onDownloadAllSubmit } from './onDownloadAllSubmit';
import { attachRecapLinkToEligibleDocs } from './attachRecapLinkToEligibleDocs';
import { handleDocketDisplayPage } from './handleDocketDisplayPage';

export function ContentDelegate(
  tabId,
  url,
  path,
  court,
  pacer_case_id,
  pacer_doc_id,
  links
) {
  this.tabId = tabId;
  this.url = url;
  this.path = path;
  this.court = court;
  this.pacer_case_id = pacer_case_id;
  if (pacer_doc_id) {
    this.pacer_doc_id = pacer_doc_id;
    this.pacer_doc_ids = [pacer_doc_id];
  } else {
    this.pacer_doc_ids = [];
  }
  this.links = links || [];

  this.findAndStorePacerDocIds();

  this.restricted = this.checkRestrictions();
}

ContentDelegate.prototype.checkRestrictions = checkRestrictions;
ContentDelegate.prototype.findAndStorePacerDocIds = findAndStorePacerDocIds;
ContentDelegate.prototype.handleDocketDisplayPage = handleDocketDisplayPage;
ContentDelegate.prototype.handleDocketQueryUrl = handleDocketQueryUrl;
ContentDelegate.prototype.handleAttachmentMenuPage = handleAttachmentMenuPage;
ContentDelegate.prototype.handleClaimsPageView = handleClaimsPageView;
ContentDelegate.prototype.handleSingleDocumentPageCheck = handleSingleDocumentPageCheck;
ContentDelegate.prototype.handleSingleDocumentPageView = handleSingleDocumentPageView;
ContentDelegate.prototype.onDocumentViewSubmit = onDocumentViewSubmit;
ContentDelegate.prototype.onDownloadAllSubmit = onDownloadAllSubmit;
ContentDelegate.prototype.showPdfPage = showPdfPage;
ContentDelegate.prototype.attachRecapLinkToEligibleDocs = attachRecapLinkToEligibleDocs;
ContentDelegate.prototype.handleZipFilePageView = handleZipFilePageView;
ContentDelegate.prototype.handleRecapLinkClick = handleRecapLinkClick;
