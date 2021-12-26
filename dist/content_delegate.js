// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3JEbm":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "cbd798d872052860";
module.bundle.HMR_BUNDLE_ID = "bcfa562b70746b6c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4tkgu":[function(require,module,exports) {
//  Abstraction of content scripts to make them modular and testable.
//  Functions:
//  checkRestrictions
//  findAndStorePacerIds
//  handleDocketQueryUrl
//  handleDocketDisplayPage
//  handleAttachmentPageMenu
//  handleSingleDocumentPageCheck
//  handleOnDocumentViewSubmit
//  showPdfPage
//  handleSingleDocumentPageView
//  handleRecapLinkClick
//  attachRecapLinkToEligibleDocs
//  onDownloadAllSubmit
//  handleZipFilePageView
let ContentDelegate = function(tabId, url, path, court, pacer_case_id, pacer_doc_id, links) {
    this.tabId = tabId;
    this.url = url;
    this.path = path;
    this.court = court;
    this.pacer_case_id = pacer_case_id;
    if (pacer_doc_id) {
        this.pacer_doc_id = pacer_doc_id;
        this.pacer_doc_ids = [
            pacer_doc_id
        ];
    } else this.pacer_doc_ids = [];
    this.links = links || [];
    this.notifier = importInstance(Notifier);
    this.recap = importInstance(Recap);
    this.findAndStorePacerDocIds();
    this.restricted = this.checkRestrictions();
};
// Check for document restrictions
ContentDelegate.prototype.checkRestrictions = function() {
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
    // The regexes below are pretty broad by design.
    // Only trigger this code on doc1 pages.
    if (!PACER.isSingleDocumentPage(this.url, document)) return false;
    let restrictedDoc = false;
    for (let td of document.querySelectorAll("table td:first-child"))if (td.textContent.match(/Warning!/)) {
        restrictedDoc = true;
        break;
    }
    for (let td1 of document.querySelectorAll("b"))if (td1.textContent.match(/document is restricted|SEALED|do not allow it to be seen/i)) {
        restrictedDoc = true;
        break;
    }
    if (restrictedDoc) {
        console.log("RECAP: Restricted document detected. Skipping upload.");
        // We would like to alter the [R] icon to indicate what's going
        // on, but we cannot call chrome.browserAction.setIcon()
        // here. Instead, we'd need to send a message to the background
        // script? ughhhh. Punt for now.
        // Insert a RECAP banner near the end of the form, before the action button.
        // Ideally this would have some RECAP branding, icon/logo, etc.
        // Ideally we target the form <input>, but absent that
        // we just go to the end of the final form.
        // Should we just always go the end of the final form?
        let target = document.querySelector("form input") || document.forms[document.forms.length - 1].lastChild;
        // Nested div for horizontal centering.
        target.insertAdjacentHTML('beforebegin', `<div style="text-align: center">
              <div style="display: inline-block; text-align: left; align: top">
                <div class="recap-banner" style="display: table">
                  <div style="display: table-cell; padding: 12px; ">
                    <img src="${chrome.extension.getURL('assets/images/disabled-38.png')}"
                         style="width: auto; height: auto">
                  </div>
                  <div style="display: table-cell; vertical-align: middle">This document <b>will not be uploaded</b> to the RECAP Archive because the RECAP extension has detected that it may be restricted from public distribution.
                  </div>
                </div>
              </div>
            </div>`);
    }
    return restrictedDoc;
};
// Use a variety of approaches to get and store pacer_doc_id to pacer_case_id
// mappings in local storage.
ContentDelegate.prototype.findAndStorePacerDocIds = function() {
    if (!PACER.hasPacerCookie(document.cookie)) return;
    // Not all pages have a case ID, and there are corner-cases in merged dockets
    // where there are links to documents on another case.
    let page_pacer_case_id = this.pacer_case_id ? this.pacer_case_id : this.recap.getPacerCaseIdFromPacerDocId(this.pacer_doc_id, function() {
    });
    let docsToCases = {
    };
    // Try getting a mapping from a pacer_doc_id in the URL to a
    if (this.pacer_doc_id && page_pacer_case_id && typeof page_pacer_case_id === 'string') {
        debug(3, `Z doc ${this.pacer_doc_id} to ${page_pacer_case_id}`);
        docsToCases[this.pacer_doc_id] = page_pacer_case_id;
    }
    for(let i = 0; i < this.links.length; i++){
        let link = this.links[i];
        if (PACER.isDocumentUrl(link.href)) {
            let pacer_doc_id = PACER.getDocumentIdFromUrl(link.href);
            $(link).data('pacer_doc_id', pacer_doc_id);
            this.pacer_doc_ids.push(pacer_doc_id);
            let onclick = link.getAttribute('onclick');
            let goDLS = PACER.parseGoDLSFunction(onclick);
            if (goDLS && goDLS.de_caseid) {
                docsToCases[pacer_doc_id] = goDLS.de_caseid;
                debug(3, `Y doc ${pacer_doc_id} to ${goDLS.de_caseid}`);
            } else if (page_pacer_case_id) {
                docsToCases[pacer_doc_id] = page_pacer_case_id;
                debug(3, `X doc ${pacer_doc_id} to ${page_pacer_case_id}`);
            }
        }
    }
    // save JSON object in chrome storage under the tabId
    // append caseId if a docketQueryUrl
    const payload = {
        docsToCases: docsToCases
    };
    if (!!this.pacer_doc_id) payload['docId'] = this.pacer_doc_id;
    if (PACER.isDocketQueryUrl(this.url) && page_pacer_case_id) payload['caseId'] = page_pacer_case_id;
    updateTabStorage({
        [this.tabId]: payload
    });
};
// If this is a docket query page, ask RECAP whether it has the docket page.
ContentDelegate.prototype.handleDocketQueryUrl = function() {
    if (!PACER.isDocketQueryUrl(this.url)) return;
    // Logged out users that load a docket page, see a login page, so they
    // shouldn't check for docket availability.
    if (!PACER.hasPacerCookie(document.cookie)) return;
    this.recap.getAvailabilityForDocket(this.court, this.pacer_case_id, (result)=>{
        if (result.count === 0) console.warn('RECAP: Zero results found for docket lookup.');
        else if (result.count > 1) console.error(`RECAP: More than one result found for docket lookup. Found ${result.count}`);
        else if (result.results) {
            const form = document.querySelector('form');
            const div = document.createElement('div');
            div.classList.add('recap-banner');
            div.appendChild(recapAlertButton(this.court, this.pacer_case_id, true));
            form.appendChild(recapBanner(result.results[0]));
            form.appendChild(div);
        }
    });
};
// If this is a docket page, upload it to RECAP.
ContentDelegate.prototype.handleDocketDisplayPage = async function() {
    // helper functions
    const createAlertButtonTr = ()=>{
        const tr = document.createElement('tr');
        tr.appendChild(recapAlertButton(this.court, this.pacer_case_id, false));
        return tr;
    };
    const changeAlertButtonStateToActive = async ()=>{
        const anchor = await document.getElementById('recap-alert-button');
        if (anchor) {
            anchor.setAttribute('aria-disabled', 'false');
            anchor.classList.remove('disabled');
            const img = document.createElement('img');
            img.src = chrome.extension.getURL('assets/images/icon-16.png');
            anchor.innerText = 'Create an Alert for This Case on RECAP';
            anchor.insertBefore(img, anchor.childNodes[0]);
        }
    };
    // If it's not a docket display URL or a docket history URL, punt.
    let isDocketDisplayUrl = PACER.isDocketDisplayUrl(this.url);
    let isDocketHistoryDisplayUrl = PACER.isDocketHistoryDisplayUrl(this.url);
    if (!(isDocketHistoryDisplayUrl || isDocketDisplayUrl)) return;
    // check for more than one radioDateInput and return if true
    // (you are on an interstitial page so no docket to display)
    const radioDateInputs = [
        ...document.getElementsByTagName('input')
    ].filter((input)=>input.name === 'date_from' && input.type === 'radio'
    );
    if (radioDateInputs.length > 1) return;
    // if you've already uploaded the page, return
    if (history.state && history.state.uploaded) return;
    // check if appellate
    // let isAppellate = PACER.isAppellateCourt(this.court);
    // if the content_delegate didn't pull the case Id on initialization,
    // check the page for a lead case dktrpt url.
    const tabStorage = await getItemsFromStorage(this.tabId);
    this.pacer_case_id = this.pacer_case_id ? this.pacer_case_id : tabStorage.caseId;
    // If we don't have this.pacer_case_id at this point, punt.
    if (!this.pacer_case_id) return;
    // insert the button in a disabled state
    const tableBody = document.querySelector('tbody');
    const tr1 = createAlertButtonTr();
    tableBody.insertBefore(tr1, tableBody.childNodes[0]);
    this.recap.getAvailabilityForDocket(this.court, this.pacer_case_id, (result)=>{
        if (result.count === 0) console.warn('RECAP: Zero results found for docket lookup.');
        else if (result.count > 1) console.error(`RECAP: More than one result found for docket lookup. Found ${result.count}`);
        else changeAlertButtonStateToActive();
    });
    const options = await getItemsFromStorage('options');
    if (options['recap_enabled']) {
        let callback = (ok)=>{
            if (ok) {
                changeAlertButtonStateToActive();
                history.replaceState({
                    uploaded: true
                }, '');
                this.notifier.showUpload('Docket uploaded to the public RECAP Archive.', function() {
                });
            }
        };
        if (isDocketDisplayUrl) this.recap.uploadDocket(this.court, this.pacer_case_id, document.documentElement.innerHTML, 'DOCKET', (ok)=>callback(ok)
        );
        else if (isDocketHistoryDisplayUrl) this.recap.uploadDocket(this.court, this.pacer_case_id, document.documentElement.innerHTML, 'DOCKET_HISTORY_REPORT', (ok)=>callback(ok)
        );
    } else console.info(`RECAP: Not uploading docket. RECAP is disabled.`);
};
// If this is a document's menu of attachments (subdocuments), upload it to
// RECAP.
ContentDelegate.prototype.handleAttachmentMenuPage = function() {
    if (history.state && history.state.uploaded) return;
    if (!PACER.isAttachmentMenuPage(this.url, document)) return;
    chrome.storage.local.get('options', (function(items) {
        if (items['options']['recap_enabled']) {
            let callback = $.proxy(function(ok) {
                if (ok) {
                    history.replaceState({
                        uploaded: true
                    }, '');
                    this.notifier.showUpload('Menu page uploaded to the public RECAP Archive.', function() {
                    });
                }
            }, this);
            this.recap.uploadAttachmentMenu(this.court, this.pacer_case_id, document.documentElement.innerHTML, callback);
        } else console.info("RECAP: Not uploading attachment menu. RECAP is disabled.");
    }).bind(this));
};
// If this page offers a single document, ask RECAP whether it has the document.
ContentDelegate.prototype.handleSingleDocumentPageCheck = function() {
    if (!PACER.isSingleDocumentPage(this.url, document)) return;
    let callback = $.proxy(function(api_results) {
        console.info(`RECAP: Got results from API. Running callback on API results to ` + `insert link`);
        let result = api_results.results.filter(function(obj) {
            return obj.pacer_doc_id === pacer_doc_id;
        })[0];
        if (!result) return;
        let href = `https://www.courtlistener.com/${result.filepath_local}`;
        // Insert a RECAP download link at the bottom of the form.
        $('<div class="recap-banner"/>').append($('<a/>', {
            title: 'Document is available for free in the RECAP Archive.',
            href: href
        }).append($('<img/>', {
            src: chrome.extension.getURL('assets/images/icon-16.png')
        })).append(' Get this document for free from the RECAP Archive.')).appendTo($('form'));
    }, this);
    let cl_court = PACER.convertToCourtListenerCourt(this.court);
    this.recap.getAvailabilityForDocuments([
        this.pacer_doc_id
    ], cl_court, callback);
};
ContentDelegate.prototype.onDocumentViewSubmit = function(event) {
    // Save a copy of the page source, altered so that the "View Document"
    // button goes forward in the history instead of resubmitting the form.
    let originalForm = document.forms[0];
    let originalSubmit = originalForm.getAttribute('onsubmit');
    originalForm.setAttribute('onsubmit', 'history.forward(); return false;');
    let previousPageHtml = document.documentElement.innerHTML;
    originalForm.setAttribute('onsubmit', originalSubmit);
    let form = document.getElementById(event.data.id);
    // Grab the document number, attachment number, and docket number
    let document_number, attachment_number, docket_number;
    if (!PACER.isAppellateCourt(this.court)) {
        // This CSS selector duplicated in isSingleDocumentPage
        let image_string = $('td:contains(Image)').text();
        let regex = /(\d+)-(\d+)/;
        let matches = regex.exec(image_string);
        if (!matches) {
            form.submit();
            return;
        }
        document_number = matches[1];
        attachment_number = matches[2];
        docket_number = $.trim($('tr:contains(Case Number) td:nth(1)').text());
    } else debug(4, "Appellate parsing not yet implemented");
    // Now do the form request to get to the view page.  Some PACER sites will
    // return an HTML page containing an <iframe> that loads the PDF document;
    // others just return the PDF document.  As we don't know whether we'll get
    // HTML (text) or PDF (binary), we ask for an ArrayBuffer and convert later.
    $('body').css('cursor', 'wait');
    let data = new FormData(form);
    httpRequest(form.action, data, (function(type, ab, xhr) {
        console.info(`RECAP: Successfully submitted RECAP "View" button form: ${xhr.statusText}`);
        const blob = new Blob([
            new Uint8Array(ab)
        ], {
            type: type
        });
        // If we got a PDF, we wrap it in a simple HTML page.  This lets us treat
        // both cases uniformly: either way we have an HTML page with an <iframe>
        // in it, which is handled by showPdfPage.
        if (type === 'application/pdf') {
            // canb and ca9 return PDFs and trigger this code path.
            const html = `<style>body { margin: 0; } iframe { border: none; }</style>
                  <iframe src="${URL.createObjectURL(blob)}" width="100%" height="100%"></iframe>`;
            this.showPdfPage(document.documentElement, html, previousPageHtml, document_number, attachment_number, docket_number);
        } else {
            // dcd (and presumably others) trigger this code path.
            const reader = new FileReader();
            reader.onload = (function() {
                let html = reader.result;
                // check if we have an HTML page which redirects the user to the PDF
                // this was first display by the Northern District of Georgia
                // https://github.com/freelawproject/recap/issues/277
                const redirectResult = Array.from(html.matchAll(/window\.location\s*=\s*["']([^"']+)["'];?/g));
                if (redirectResult.length > 0) {
                    const url = redirectResult[0][1];
                    html = `<style>body { margin: 0; } iframe { border: none; }</style>
                    <iframe src="${url}" width="100%" height="100%"></iframe>`;
                }
                this.showPdfPage(document.documentElement, html, previousPageHtml, document_number, attachment_number, docket_number);
            }).bind(this);
            reader.readAsText(blob); // convert blob to HTML text
        }
    }).bind(this));
};
// Given the HTML for a page with an <iframe> in it, downloads the PDF
// document in the iframe, displays it in the browser, and also
// uploads the PDF document to RECAP.
//
// The documentElement is provided via dependency injection so that it
// can be properly mocked in tests.
ContentDelegate.prototype.showPdfPage = async function(documentElement, html, previousPageHtml, document_number, attachment_number, docket_number) {
    // Find the <iframe> URL in the HTML string.
    let match = html.match(/([^]*?)<iframe[^>]*src="(.*?)"([^]*)/);
    if (!match) {
        document.documentElement.innerHTML = html;
        return;
    }
    const options = await getItemsFromStorage('options');
    // Show the page with a blank <iframe> while waiting for the download.
    document.documentElement.innerHTML = `${match[1]}<p id="recap-waiting">Waiting for download...</p><iframe src="about:blank"${match[3]}`;
    // Make the Back button redisplay the previous page.
    window.onpopstate = function(event) {
        if (event.state.content) document.documentElement.innerHTML = event.state.content;
    };
    history.replaceState({
        content: previousPageHtml
    }, '');
    // Download the file from the <iframe> URL.
    const browserSpecificFetch = navigator.userAgent.indexOf('Chrome') < 0 ? content.fetch : window.fetch;
    const blob = await browserSpecificFetch(match[2]).then((res)=>res.blob()
    );
    let blobUrl = URL.createObjectURL(blob);
    const dataUrl = await blobToDataURL(blob);
    await updateTabStorage({
        [this.tabId]: {
            ['pdf_blob']: dataUrl
        }
    });
    console.info("RECAP: Successfully got PDF as arraybuffer via ajax request.");
    // Get the PACER case ID and, on completion, define displayPDF()
    // to either display the PDF in the provided <iframe>, or, if
    // external_pdf is set, save it using FileSaver.js's saveAs().
    const pacer_case_id1 = this.pacer_case_id ? this.pacer_case_id : await this.recap.getPacerCaseIdFromPacerDocId(this.pacer_doc_id, ()=>{
    });
    const generateFileName = (pacer_case_id)=>{
        let filename, pieces;
        if (options.ia_style_filenames) {
            pieces = [
                'gov',
                'uscourts',
                this.court,
                pacer_case_id || 'unknown-case-id',
                document_number || '0',
                attachment_number || '0'
            ];
            filename = `${pieces.join('.')}.pdf`;
        } else if (options.lawyer_style_filenames) {
            pieces = [
                PACER.COURT_ABBREVS[this.court],
                docket_number || '0',
                document_number || '0',
                attachment_number || '0'
            ];
            filename = `${pieces.join('_')}.pdf`;
        }
        return filename;
    };
    const setInnerHtml = (pacer_case_id)=>{
        const filename = generateFileName(pacer_case_id);
        let external_pdf = options.external_pdf;
        if (navigator.userAgent.indexOf('Chrome') >= 0 && !navigator.plugins.namedItem('Chrome PDF Viewer')) // We are in Google Chrome, and the built-in PDF Viewer has been disabled.
        // So we autodetect and force external_pdf true for proper filenames.
        external_pdf = true;
        if (!external_pdf) {
            let downloadLink = `<div id="recap-download" class="initial">
                            <a href="${blobUrl}" download="${filename}">Save as ${filename}</a>
                          </div>`;
            html = `${match[1]}${downloadLink}<iframe onload="setTimeout(function() {
                document.getElementById('recap-download').className = '';
              }, 7500)" src="${blobUrl}"${match[3]}`;
            document.documentElement.innerHTML = html;
            history.pushState({
                content: html
            }, '');
        } else {
            // Saving to an external PDF.
            const waitingGraph = document.getElementById('recap-waiting');
            if (waitingGraph) waitingGraph.remove();
            window.saveAs(blob, filename);
        }
    };
    setInnerHtml(pacer_case_id1);
    // store the blob in chrome storage for background worker
    if (options['recap_enabled'] && !this.restricted) // If we have the pacer_case_id, upload the file to RECAP.
    // We can't pass an ArrayBuffer directly to the background
    // page, so we have to convert to a regular array.
    this.recap.uploadDocument(this.court, pacer_case_id1, this.pacer_doc_id, document_number, attachment_number, (ok)=>{
        if (ok) this.notifier.showUpload('PDF uploaded to the public RECAP Archive.', ()=>{
        });
    });
    else console.info("RECAP: Not uploading PDF. RECAP is disabled.");
};
// If this page offers a single document, intercept navigation to the document
// view page.  The "View Document" button calls the goDLS() function, which
// creates a <form> element and calls submit() on it, so we hook into submit().
ContentDelegate.prototype.handleSingleDocumentPageView = function() {
    if (!PACER.isSingleDocumentPage(this.url, document)) return;
    if (PACER.isAppellateCourt(this.court)) {
        debug(4, "No interposition for appellate downloads yet");
        return;
    }
    // Monkey-patch the <form> prototype so that its submit() method sends a
    // message to this content script instead of submitting the form.  To do this
    // in the page context instead of this script's, we inject a <script> element.
    let script = document.createElement('script');
    script.innerText = "document.createElement(\"form\").__proto__.submit = function () {  this.id = \"form\" + new Date().getTime();  window.postMessage({id: this.id}, \"*\");};";
    document.body.appendChild(script);
    // When we receive the message from the above submit method, submit the form
    // via XHR so we can get the document before the browser does.
    window.addEventListener('message', this.onDocumentViewSubmit.bind(this), false);
};
// Pop up a dialog offering the link to the free cached copy of the document,
// or just go directly to the free document if popups are turned off.
ContentDelegate.prototype.handleRecapLinkClick = function(window_obj, url) {
    chrome.storage.local.get('options', function(items) {
        if (!items.options.recap_link_popups) {
            window_obj.location = url;
            return;
        }
        $('<div id="recap-shade"/>').appendTo($('body'));
        $('<div class="recap-popup"/>').append($('<a/>', {
            'class': 'recap-close-link',
            href: '#',
            onclick: "var d = document; d.body.removeChild(this.parentNode); d.body.removeChild(d.getElementById(\"recap-shade\")); return false"
        }).append('\u00d7')).append($('<a/>', {
            href: url,
            onclick: "var d = document; d.body.removeChild(this.parentNode); d.body.removeChild(d.getElementById(\"recap-shade\"))"
        }).append(' Get this document for free from RECAP.')).append($("<br><br><small>Note that archived documents may be out of date. RECAP is not affiliated with the U.S. Courts. The documents it makes available are voluntarily uploaded by PACER users. RECAP cannot guarantee the authenticity of documents because the courts provide no effective document authentication system.</small>")).appendTo($('body'));
    });
    return false;
};
// Check every link in the document to see if there is a free RECAP document
// available. If there is, put a link with a RECAP icon.
ContentDelegate.prototype.attachRecapLinkToEligibleDocs = function() {
    let linkCount = this.pacer_doc_ids.length;
    console.info(`RECAP: Attaching links to all eligible documents (${linkCount} found)`);
    if (linkCount === 0) return;
    // Ask the server whether any of these documents are available from RECAP.
    this.recap.getAvailabilityForDocuments(this.pacer_doc_ids, this.court, $.proxy(function(api_results) {
        console.info(`RECAP: Got results from API. Running callback on API results to ` + `attach links and icons where appropriate.`);
        for(let i = 0; i < this.links.length; i++){
            let pacer_doc_id = $(this.links[i]).data('pacer_doc_id');
            if (!pacer_doc_id) continue;
            let result = api_results.results.filter(function(obj) {
                return obj.pacer_doc_id === pacer_doc_id;
            })[0];
            if (!result) continue;
            let href = `https://www.courtlistener.com/${result.filepath_local}`;
            let recap_link = $('<a/>', {
                'class': 'recap-inline',
                'title': 'Available for free from the RECAP Archive.',
                'href': href
            });
            recap_link.click($.proxy(this.handleRecapLinkClick, this, window, href));
            recap_link.append($('<img/>').attr({
                src: chrome.extension.getURL('assets/images/icon-16.png')
            }));
            recap_link.insertAfter(this.links[i]);
        }
    }, this));
};
// TODO: Confirm that zip downloading is consistent across jurisdictions
ContentDelegate.prototype.onDownloadAllSubmit = async function(event1) {
    // helper function - extract the zip by creating html and querying the frame
    const extractUrl = (html)=>{
        const page = document.createElement("html");
        page.innerHTML = html;
        const frames = page.querySelectorAll("iframe");
        return frames[0].src;
    };
    // helper function - convert string to html document
    const stringToDocBody = (str)=>{
        const parser = new DOMParser();
        const newDoc = parser.parseFromString(str, 'text/html');
        return newDoc.body;
    };
    // helper function - returns filename based on user preferences
    const generateFileName = (options, pacerCaseId)=>{
        if (options.ia_style_filenames) return [
            'gov',
            'uscourts',
            this.court,
            pacerCaseId || 'unknown-case-id'
        ].join('.').concat('.zip');
        else if (options.lawyer_style_filenames) {
            const firstTable = document.getElementsByTagName('table')[0];
            const firstTableRows = firstTable.querySelectorAll('tr');
            // 4th from bottom
            const matchedRow = firstTableRows[firstTableRows.length - 4];
            const cells = matchedRow.querySelectorAll('td');
            const document_number = cells[0].innerText.match(/\d+(?=\-)/)[0];
            const docket_number = cells[1].innerText;
            return [
                PACER.COURT_ABBREVS[this.court],
                docket_number,
                document_number, 
            ].join('_').concat('.zip');
        }
    };
    // Make the Back button redisplay the previous page.
    window.onpopstate = function(event) {
        if (event.state.content) document.documentElement.innerHTML = event.state.content;
    };
    history.replaceState({
        content: document.documentElement.innerHTML
    }, '');
    // tell the user to wait
    $("body").css("cursor", "wait");
    // in Firefox, use content.fetch for content-specific fetch requests
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#XHR_and_Fetch
    const browserSpecificFetch = navigator.userAgent.indexOf('Chrome') < 0 ? content.fetch : window.fetch;
    // fetch the html page which contains the <iframe> link to the zip document.
    const htmlPage = await browserSpecificFetch(event1.data.id).then((res)=>res.text()
    );
    console.log("RECAP: Successfully submitted zip file request");
    const zipUrl = extractUrl(htmlPage);
    //download zip file and save it to chrome storage
    const blob = await fetch(zipUrl).then((res)=>res.blob()
    );
    const dataUrl = await blobToDataURL(blob);
    console.info('RECAP: Downloaded zip file');
    // save blob in storage under tabId
    // we store it as an array to chunk the message
    await updateTabStorage({
        [this.tabId]: {
            ['zip_blob']: dataUrl
        }
    });
    // create the blob and inject it into the page
    const blobUrl = URL.createObjectURL(blob);
    const pacerCaseId1 = event1.data.id.match(/caseid\=\d*/)[0].replace(/caseid\=/, '');
    // load options
    const options1 = await getItemsFromStorage('options');
    // generate the filename
    const filename = generateFileName(options1, pacerCaseId1);
    if (options1['recap_enabled'] && !this.restricted) this.recap.uploadZipFile(this.court, pacerCaseId1, (ok)=>{
        if (ok) {
            // show notifier
            this.notifier.showUpload('Zip uploaded to the public RECAP Archive', ()=>{
            });
            // convert htmlPage to document
            const link = `<a id="recap-download" href=${blobUrl} download=${filename} width="0" height="0"/>`;
            const htmlBody = stringToDocBody(htmlPage);
            const frame = htmlBody.querySelector('iframe');
            frame.insertAdjacentHTML('beforebegin', link);
            frame.src = "";
            frame.onload = ()=>document.getElementById('recap-download').click()
            ;
            document.body = htmlBody;
            history.pushState({
                content: document.body.innerHTML
            }, '');
        }
    });
};
// Same as handleSingleDocumentPageView, but for zip files
ContentDelegate.prototype.handleZipFilePageView = function() {
    // return if not the download all page
    if (!PACER.isDownloadAllDocumentsPage(this.url, document)) return;
    // return if on the appellate courts
    if (PACER.isAppellateCourt(this.court)) {
        debug(4, 'No interposition for appellate downloads yet');
        return;
    }
    // extract the url from the onclick attribute from one of the two
    // "Download Documents" buttons
    const inputs = [
        ...document.getElementsByTagName('input')
    ];
    const targetInputs = inputs.filter((input)=>input.type === 'button' && input.value === 'Download Documents'
    );
    const url = targetInputs[0].getAttribute('onclick').replace(/p.*\//, '') // remove parent.location='/cgi-bin/
    .replace(/\'(?=$)/, ''); // remove endquote
    const isAppendixPage = url.match(/create\_appendix\=1/);
    if (isAppendixPage) {
        debug(4, 'No interposition for appendix page downloads yet');
        return;
    }
    // imperatively manipulate hte dom elements without injecting a script
    const forms = [
        ...document.querySelectorAll('form')
    ];
    forms.map((form)=>{
        form.removeAttribute('action');
        const input = form.querySelector('input');
        input.removeAttribute('onclick');
        input.disabled = true;
        form.hidden = true;
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.textContent = 'Download Documents';
        button.addEventListener('click', ()=>window.postMessage({
                id: url
            })
        );
        div.appendChild(button);
        const parentNode = form.parentNode;
        parentNode.insertBefore(div, form);
    });
    // When we receive the message from the above submit method, submit the form
    // via fetch so we can get the document before the browser does.
    window.addEventListener('message', this.onDownloadAllSubmit.bind(this));
};
ContentDelegate.prototype.handleClaimsPageView = function() {
    // return if not a claims register page
    if (!PACER.isClaimsRegisterPage(this.url, document)) return;
    const pacerCaseId = this.pacer_case_id ? this.pacer_case_id : PACER.getCaseIdFromClaimsPage(document);
    // render the page as a string and upload it to recap
    const claimsPageHtml = document.documentElement.outerHTML;
    this.recap.uploadClaimsRegister(this.court, pacerCaseId, claimsPageHtml, (ok)=>{
        if (ok) this.notifier.showUpload('Claims page uploaded to the public RECAP Archive', ()=>{
        });
        else console.error("Page not uploaded to the public RECAP archive.");
    });
};

},{}]},["3JEbm","4tkgu"], "4tkgu", "parcelRequire9981")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJLENBQUMsS0FBSyxFQUNWLFdBQVcsRUFDWCxjQUFjLEdBQ2IsRUFBRSxHQUFLLENBQUM7UUFDUCxFQUFFLEVBQUUsRUFBRSxFQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQWtELHVEQUFRLENBQUM7UUFBQyxDQUFDO2FBRXRGLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBZ0Q7SUFFbEUsQ0FBQztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtYnJvd3Nlci1obXIvbGliL3J1bnRpbWUtMDZlOWU0Zjc2OTA4ZjBiOS5qcyIsInNyYy9jb250ZW50X2RlbGVnYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gbnVsbDt2YXIgSE1SX1NFQ1VSRSA9IGZhbHNlO3ZhciBITVJfRU5WX0hBU0ggPSBcImNiZDc5OGQ4NzIwNTI4NjBcIjttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQgPSBcImJjZmE1NjJiNzA3NDZiNmNcIjtcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdC5yZXR1cm4gIT0gbnVsbCkgaXQucmV0dXJuKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKiBnbG9iYWwgSE1SX0hPU1QsIEhNUl9QT1JULCBITVJfRU5WX0hBU0gsIEhNUl9TRUNVUkUgKi9cblxuLyo6OlxuaW1wb3J0IHR5cGUge1xuICBITVJBc3NldCxcbiAgSE1STWVzc2FnZSxcbn0gZnJvbSAnQHBhcmNlbC9yZXBvcnRlci1kZXYtc2VydmVyL3NyYy9ITVJTZXJ2ZXIuanMnO1xuaW50ZXJmYWNlIFBhcmNlbFJlcXVpcmUge1xuICAoc3RyaW5nKTogbWl4ZWQ7XG4gIGNhY2hlOiB7fFtzdHJpbmddOiBQYXJjZWxNb2R1bGV8fTtcbiAgaG90RGF0YTogbWl4ZWQ7XG4gIE1vZHVsZTogYW55O1xuICBwYXJlbnQ6ID9QYXJjZWxSZXF1aXJlO1xuICBpc1BhcmNlbFJlcXVpcmU6IHRydWU7XG4gIG1vZHVsZXM6IHt8W3N0cmluZ106IFtGdW5jdGlvbiwge3xbc3RyaW5nXTogc3RyaW5nfH1dfH07XG4gIEhNUl9CVU5ETEVfSUQ6IHN0cmluZztcbiAgcm9vdDogUGFyY2VsUmVxdWlyZTtcbn1cbmludGVyZmFjZSBQYXJjZWxNb2R1bGUge1xuICBob3Q6IHt8XG4gICAgZGF0YTogbWl4ZWQsXG4gICAgYWNjZXB0KGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIGRpc3Bvc2UoY2I6IChtaXhlZCkgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gYWNjZXB0KGRlcHM6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcsIGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGRlY2xpbmUoKTogdm9pZCxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBBcnJheTwoRnVuY3Rpb24pID0+IHZvaWQ+LFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBBcnJheTwobWl4ZWQpID0+IHZvaWQ+LFxuICB8fTtcbn1cbmRlY2xhcmUgdmFyIG1vZHVsZToge2J1bmRsZTogUGFyY2VsUmVxdWlyZSwgLi4ufTtcbmRlY2xhcmUgdmFyIEhNUl9IT1NUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX0VOVl9IQVNIOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VDVVJFOiBib29sZWFuO1xuKi9cbnZhciBPVkVSTEFZX0lEID0gJ19fcGFyY2VsX19lcnJvcl9fb3ZlcmxheV9fJztcbnZhciBPbGRNb2R1bGUgPSBtb2R1bGUuYnVuZGxlLk1vZHVsZTtcblxuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbiBhY2NlcHQoZm4pIHtcbiAgICAgIHRoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKGZuIHx8IGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uIGRpc3Bvc2UoZm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaChmbik7XG4gICAgfVxuICB9O1xuICBtb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5idW5kbGUuTW9kdWxlID0gTW9kdWxlO1xudmFyIGNoZWNrZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYWNjZXB0ZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYXNzZXRzVG9BY2NlcHRcbi8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi9cbjtcblxuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiBITVJfSE9TVCB8fCAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG59XG5cbmZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gIHJldHVybiBITVJfUE9SVCB8fCBsb2NhdGlvbi5wb3J0O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cblxudmFyIHBhcmVudCA9IG1vZHVsZS5idW5kbGUucGFyZW50O1xuXG5pZiAoKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gIHZhciBwb3J0ID0gZ2V0UG9ydCgpO1xuICB2YXIgcHJvdG9jb2wgPSBITVJfU0VDVVJFIHx8IGxvY2F0aW9uLnByb3RvY29sID09ICdodHRwczonICYmICEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KGhvc3RuYW1lKSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHdzID0gbmV3IFdlYlNvY2tldChwcm90b2NvbCArICc6Ly8nICsgaG9zdG5hbWUgKyAocG9ydCA/ICc6JyArIHBvcnQgOiAnJykgKyAnLycpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50XG4gIC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovXG4gICkge1xuICAgIGNoZWNrZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYWNjZXB0ZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcbiAgICB2YXIgZGF0YVxuICAgIC8qOiBITVJNZXNzYWdlICovXG4gICAgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIFJlbW92ZSBlcnJvciBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhc3NldHMgPSBkYXRhLmFzc2V0cy5maWx0ZXIoZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiBhc3NldC5lbnZIYXNoID09PSBITVJfRU5WX0hBU0g7XG4gICAgICB9KTsgLy8gSGFuZGxlIEhNUiBVcGRhdGVcblxuICAgICAgdmFyIGhhbmRsZWQgPSBhc3NldHMuZXZlcnkoZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiBhc3NldC50eXBlID09PSAnY3NzJyB8fCBhc3NldC50eXBlID09PSAnanMnICYmIGhtckFjY2VwdENoZWNrKG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQuaWQsIGFzc2V0LmRlcHNCeUJ1bmRsZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgICAgICBobXJBcHBseShtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldHNUb0FjY2VwdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpZCA9IGFzc2V0c1RvQWNjZXB0W2ldWzFdO1xuXG4gICAgICAgICAgaWYgKCFhY2NlcHRlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICAgIGhtckFjY2VwdFJ1bihhc3NldHNUb0FjY2VwdFtpXVswXSwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihkYXRhLmRpYWdub3N0aWNzLmFuc2kpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBhbnNpRGlhZ25vc3RpYyA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciBzdGFjayA9IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA/IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA6IGFuc2lEaWFnbm9zdGljLnN0YWNrO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ/CfmqggW3BhcmNlbF06ICcgKyBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICsgJ1xcbicgKyBzdGFjayArICdcXG5cXG4nICsgYW5zaURpYWdub3N0aWMuaGludHMuam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgZmFuY3kgaHRtbCBvdmVybGF5XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGNyZWF0ZUVycm9yT3ZlcmxheShkYXRhLmRpYWdub3N0aWNzLmh0bWwpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICB9O1xuXG4gIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JPdmVybGF5KCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuXG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnW3BhcmNlbF0g4pyoIEVycm9yIHJlc29sdmVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICB2YXIgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG5cbiAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihkaWFnbm9zdGljcyksXG4gICAgICBfc3RlcDI7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgdmFyIGRpYWdub3N0aWMgPSBfc3RlcDIudmFsdWU7XG4gICAgICB2YXIgc3RhY2sgPSBkaWFnbm9zdGljLmNvZGVmcmFtZSA/IGRpYWdub3N0aWMuY29kZWZyYW1lIDogZGlhZ25vc3RpYy5zdGFjaztcbiAgICAgIGVycm9ySFRNTCArPSBcIlxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1xcXCI+XFxuICAgICAgICAgIFxcdUQ4M0RcXHVERUE4IFwiLmNvbmNhdChkaWFnbm9zdGljLm1lc3NhZ2UsIFwiXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxwcmU+XCIpLmNvbmNhdChzdGFjaywgXCI8L3ByZT5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgIFwiKS5jb25jYXQoZGlhZ25vc3RpYy5oaW50cy5tYXAoZnVuY3Rpb24gKGhpbnQpIHtcbiAgICAgICAgcmV0dXJuICc8ZGl2PvCfkqEgJyArIGhpbnQgKyAnPC9kaXY+JztcbiAgICAgIH0pLmpvaW4oJycpLCBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIikuY29uY2F0KGRpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiA/IFwiPGRpdj5cXHVEODNEXFx1RENERCA8YSBzdHlsZT1cXFwiY29sb3I6IHZpb2xldFxcXCIgaHJlZj1cXFwiXCIuY29uY2F0KGRpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5MZWFybiBtb3JlPC9hPjwvZGl2PlwiKSA6ICcnLCBcIlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IyLmYoKTtcbiAgfVxuXG4gIGVycm9ySFRNTCArPSAnPC9kaXY+JztcbiAgb3ZlcmxheS5pbm5lckhUTUwgPSBlcnJvckhUTUw7XG4gIHJldHVybiBvdmVybGF5O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGJ1bmRsZSwgaWQpXG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG57XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcblxuICBmb3IgKGsgaW4gbW9kdWxlcykge1xuICAgIGZvciAoZCBpbiBtb2R1bGVzW2tdWzFdKSB7XG4gICAgICBkZXAgPSBtb2R1bGVzW2tdWzFdW2RdO1xuXG4gICAgICBpZiAoZGVwID09PSBpZCB8fCBBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKFtidW5kbGUsIGtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rKSB7XG4gIHZhciBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcblxuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuXG4gIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgLy8gJEZsb3dGaXhNZVxuICBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNwbGl0KCc/JylbMF0gKyAnPycgKyBEYXRlLm5vdygpKTsgLy8gJEZsb3dGaXhNZVxuXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG5cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcblxuZnVuY3Rpb24gcmVsb2FkQ1NTKCkge1xuICBpZiAoY3NzVGltZW91dCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZlxuICAgICAgLyo6IHN0cmluZyAqL1xuICAgICAgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gICAgICB2YXIgc2VydmVkRnJvbUhNUlNlcnZlciA9IGhvc3RuYW1lID09PSAnbG9jYWxob3N0JyA/IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6JyArIGdldFBvcnQoKSkudGVzdChocmVmKSA6IGhyZWYuaW5kZXhPZihob3N0bmFtZSArICc6JyArIGdldFBvcnQoKSk7XG4gICAgICB2YXIgYWJzb2x1dGUgPSAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KGhyZWYpICYmIGhyZWYuaW5kZXhPZih3aW5kb3cubG9jYXRpb24ub3JpZ2luKSAhPT0gMCAmJiAhc2VydmVkRnJvbUhNUlNlcnZlcjtcblxuICAgICAgaWYgKCFhYnNvbHV0ZSkge1xuICAgICAgICB1cGRhdGVMaW5rKGxpbmtzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjc3NUaW1lb3V0ID0gbnVsbDtcbiAgfSwgNTApO1xufVxuXG5mdW5jdGlvbiBobXJBcHBseShidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGFzc2V0XG4vKjogIEhNUkFzc2V0ICovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgfSBlbHNlIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgdmFyIGRlcHMgPSBhc3NldC5kZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdO1xuXG4gICAgaWYgKGRlcHMpIHtcbiAgICAgIHZhciBmbiA9IG5ldyBGdW5jdGlvbigncmVxdWlyZScsICdtb2R1bGUnLCAnZXhwb3J0cycsIGFzc2V0Lm91dHB1dCk7XG4gICAgICBtb2R1bGVzW2Fzc2V0LmlkXSA9IFtmbiwgZGVwc107XG4gICAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgICBobXJBcHBseShidW5kbGUucGFyZW50LCBhc3NldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbiwgZGVwc0J5QnVuZGxlXG4vKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qL1xuKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRlcHNCeUJ1bmRsZSAmJiAhZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXSkge1xuICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIHJvb3QgYnVuZGxlIHdpdGhvdXQgZmluZGluZyB3aGVyZSB0aGUgYXNzZXQgc2hvdWxkIGdvLFxuICAgIC8vIHRoZXJlJ3Mgbm90aGluZyB0byBkby4gTWFyayBhcyBcImFjY2VwdGVkXCIgc28gd2UgZG9uJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICAgIGlmICghYnVuZGxlLnBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKGJ1bmRsZS5wYXJlbnQsIGlkLCBkZXBzQnlCdW5kbGUpO1xuICB9XG5cbiAgaWYgKGNoZWNrZWRBc3NldHNbaWRdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjaGVja2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBhc3NldHNUb0FjY2VwdC5wdXNoKFtidW5kbGUsIGlkXSk7XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTsgLy8gSWYgbm8gcGFyZW50cywgdGhlIGFzc2V0IGlzIG5ldy4gUHJldmVudCByZWxvYWRpbmcgdGhlIHBhZ2UuXG5cbiAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHMuc29tZShmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayh2WzBdLCB2WzFdLCBudWxsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdFJ1bihidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhID0ge307XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90KSB7XG4gICAgY2FjaGVkLmhvdC5kYXRhID0gYnVuZGxlLmhvdERhdGE7XG4gIH1cblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBjYihidW5kbGUuaG90RGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlKGlkKTtcbiAgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyIGFzc2V0c1RvQWxzb0FjY2VwdCA9IGNiKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc2V0c1RvQWxzb0FjY2VwdCAmJiBhc3NldHNUb0FjY2VwdC5sZW5ndGgpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVttZXRob2QtdW5iaW5kaW5nXVxuICAgICAgICBhc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGFzc2V0c1RvQWNjZXB0LCBhc3NldHNUb0Fsc29BY2NlcHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWNjZXB0ZWRBc3NldHNbaWRdID0gdHJ1ZTtcbn0iLCIvLyAgQWJzdHJhY3Rpb24gb2YgY29udGVudCBzY3JpcHRzIHRvIG1ha2UgdGhlbSBtb2R1bGFyIGFuZCB0ZXN0YWJsZS5cclxuLy8gIEZ1bmN0aW9uczpcclxuLy8gIGNoZWNrUmVzdHJpY3Rpb25zXHJcbi8vICBmaW5kQW5kU3RvcmVQYWNlcklkc1xyXG4vLyAgaGFuZGxlRG9ja2V0UXVlcnlVcmxcclxuLy8gIGhhbmRsZURvY2tldERpc3BsYXlQYWdlXHJcbi8vICBoYW5kbGVBdHRhY2htZW50UGFnZU1lbnVcclxuLy8gIGhhbmRsZVNpbmdsZURvY3VtZW50UGFnZUNoZWNrXHJcbi8vICBoYW5kbGVPbkRvY3VtZW50Vmlld1N1Ym1pdFxyXG4vLyAgc2hvd1BkZlBhZ2VcclxuLy8gIGhhbmRsZVNpbmdsZURvY3VtZW50UGFnZVZpZXdcclxuLy8gIGhhbmRsZVJlY2FwTGlua0NsaWNrXHJcbi8vICBhdHRhY2hSZWNhcExpbmtUb0VsaWdpYmxlRG9jc1xyXG4vLyAgb25Eb3dubG9hZEFsbFN1Ym1pdFxyXG4vLyAgaGFuZGxlWmlwRmlsZVBhZ2VWaWV3XHJcblxyXG5sZXQgQ29udGVudERlbGVnYXRlID0gZnVuY3Rpb24gKHRhYklkLCB1cmwsIHBhdGgsIGNvdXJ0LCBwYWNlcl9jYXNlX2lkLCBwYWNlcl9kb2NfaWQsXHJcbiAgbGlua3MpIHtcclxuICB0aGlzLnRhYklkID0gdGFiSWQ7XHJcbiAgdGhpcy51cmwgPSB1cmw7XHJcbiAgdGhpcy5wYXRoID0gcGF0aDtcclxuICB0aGlzLmNvdXJ0ID0gY291cnQ7XHJcbiAgdGhpcy5wYWNlcl9jYXNlX2lkID0gcGFjZXJfY2FzZV9pZDtcclxuICBpZiAocGFjZXJfZG9jX2lkKSB7XHJcbiAgICB0aGlzLnBhY2VyX2RvY19pZCA9IHBhY2VyX2RvY19pZDtcclxuICAgIHRoaXMucGFjZXJfZG9jX2lkcyA9IFtwYWNlcl9kb2NfaWRdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnBhY2VyX2RvY19pZHMgPSBbXTtcclxuICB9XHJcbiAgdGhpcy5saW5rcyA9IGxpbmtzIHx8IFtdO1xyXG5cclxuICB0aGlzLm5vdGlmaWVyID0gaW1wb3J0SW5zdGFuY2UoTm90aWZpZXIpO1xyXG4gIHRoaXMucmVjYXAgPSBpbXBvcnRJbnN0YW5jZShSZWNhcCk7XHJcblxyXG4gIHRoaXMuZmluZEFuZFN0b3JlUGFjZXJEb2NJZHMoKTtcclxuXHJcbiAgdGhpcy5yZXN0cmljdGVkID0gdGhpcy5jaGVja1Jlc3RyaWN0aW9ucygpO1xyXG59O1xyXG5cclxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50IHJlc3RyaWN0aW9uc1xyXG5Db250ZW50RGVsZWdhdGUucHJvdG90eXBlLmNoZWNrUmVzdHJpY3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gIC8vIFNvbWUgZG9jdW1lbnRzIGFyZSByZXN0cmljdGVkIHRvIGNhc2UgcGFydGljaXBhbnRzLiBUeXBpY2FsbHlcclxuICAvLyB0aGlzIGlzIG9mZmVyZWQgd2l0aCBlaXRoZXIgYW4gaW50ZXJzdGl0aWFsIHBhZ2UgKGluIHRoZSBjYXNlXHJcbiAgLy8gb2YgZnJlZSBsb29rcykgb3IgYW4gZXh0cmEgYm94IG9uIHRoZSByZWNlaXB0IHBhZ2UuIEluIGJvdGggY2FzZXNcclxuICAvLyBpdCdzIHNvbWV0aGluZyBsaWtlIHRoaXM6XHJcbiAgLy9cclxuICAvLyA8dGFibGU+PHRib2R5PlxyXG4gIC8vICAgPHRyPjx0ZD5XYXJuaW5nITwvdGQ+PC90cj5cclxuICAvLyAgIDx0cj48dGQ+PGI+VGhpcyBkb2N1bWVudCBpcyByZXN0cmljdGVkIHRvIGNvdXJ0IHVzZXJzLFxyXG4gIC8vICAgICAgICAgICAgICBjYXNlIHBhcnRpY2lwYW50cyBhbmQgcHVibGljIHRlcm1pbmFsIHVzZXJzLjwvYj48L3RkPjwvdHI+XHJcbiAgLy8gPC90Ym9keT48L3RhYmxlPlxyXG4gIC8vXHJcbiAgLy8gVGhlIGV4YWN0IHRleHQgd2lsbCBjaGFuZ2UsIGRlcGVuZGluZyBvbiB0aGUgY2lyY3Vtc3RhbmNlcy4gRm9yXHJcbiAgLy8gc2VhbGVkIGRvY3VtZW50cywgZS5nLiwgb2hzZCBvZmZlcnM6XHJcbiAgLy9cclxuICAvLyAgIFwiVGhlIGRvY3VtZW50IHlvdSBhcmUgYWJvdXQgdG8gdmlldyBpcyBTRUFMRUQ7IGRvIG5vdCBhbGxvdyBpdFxyXG4gIC8vICAgdG8gYmUgc2VlbiBieSB1bmF1dGhvcml6ZWQgcGVyc29ucy5cIlxyXG4gIC8vXHJcbiAgLy8gU2VhbGluZyBiZWhhdmlvciBkaWZmZXJzIGZyb20gQ01FQ0YgaW5zdGFuY2UgdG8gQ01FQ0YgaW5zdGFuY2UuXHJcbiAgLy9cclxuICAvLyBCZSBzb21ld2hhdCBwYXJhbm9pZCBhYm91dCB0aGlzIGFuZCBjaGVjayBmb3IgZWl0aGVyIGEgXCJXYXJuaW5nIVwiXHJcbiAgLy8gaW4gdGhlIGZpcnN0IDx0ZD4gY2VsbCBvZiBhIHRhYmxlLCBhcyB3ZWxsIGFzIGFueSA8Yj4gY29udGFpbmluZ1xyXG4gIC8vIFwiZG9jdW1lbnQgaXMgcmVzdHJpY3RlZFwiLCBcIlNFQUxFRFwiLCBvciBcImRvIG5vdCBhbGxvdyBpdCB0byBiZSBzZWVuXCIuXHJcbiAgLy8gQ2FzZS1pbnNlbnNpdGl2ZWx5LlxyXG5cclxuICAvLyBUaGUgcmVnZXhlcyBiZWxvdyBhcmUgcHJldHR5IGJyb2FkIGJ5IGRlc2lnbi5cclxuICAvLyBPbmx5IHRyaWdnZXIgdGhpcyBjb2RlIG9uIGRvYzEgcGFnZXMuXHJcbiAgaWYgKCFQQUNFUi5pc1NpbmdsZURvY3VtZW50UGFnZSh0aGlzLnVybCwgZG9jdW1lbnQpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBsZXQgcmVzdHJpY3RlZERvYyA9IGZhbHNlO1xyXG5cclxuICBmb3IgKGxldCB0ZCBvZlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRhYmxlIHRkOmZpcnN0LWNoaWxkXCIpKSB7XHJcbiAgICBpZiAodGQudGV4dENvbnRlbnQubWF0Y2goL1dhcm5pbmchLykpIHtcclxuICAgICAgcmVzdHJpY3RlZERvYyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgdGQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJcIikpIHtcclxuICAgIGlmICh0ZC50ZXh0Q29udGVudC5tYXRjaChcclxuICAgICAgL2RvY3VtZW50IGlzIHJlc3RyaWN0ZWR8U0VBTEVEfGRvIG5vdCBhbGxvdyBpdCB0byBiZSBzZWVuL2lcclxuICAgICkpIHtcclxuICAgICAgcmVzdHJpY3RlZERvYyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHJlc3RyaWN0ZWREb2MpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUkVDQVA6IFJlc3RyaWN0ZWQgZG9jdW1lbnQgZGV0ZWN0ZWQuIFNraXBwaW5nIHVwbG9hZC5cIik7XHJcbiAgICAvLyBXZSB3b3VsZCBsaWtlIHRvIGFsdGVyIHRoZSBbUl0gaWNvbiB0byBpbmRpY2F0ZSB3aGF0J3MgZ29pbmdcclxuICAgIC8vIG9uLCBidXQgd2UgY2Fubm90IGNhbGwgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbigpXHJcbiAgICAvLyBoZXJlLiBJbnN0ZWFkLCB3ZSdkIG5lZWQgdG8gc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmRcclxuICAgIC8vIHNjcmlwdD8gdWdoaGhoLiBQdW50IGZvciBub3cuXHJcblxyXG4gICAgLy8gSW5zZXJ0IGEgUkVDQVAgYmFubmVyIG5lYXIgdGhlIGVuZCBvZiB0aGUgZm9ybSwgYmVmb3JlIHRoZSBhY3Rpb24gYnV0dG9uLlxyXG4gICAgLy8gSWRlYWxseSB0aGlzIHdvdWxkIGhhdmUgc29tZSBSRUNBUCBicmFuZGluZywgaWNvbi9sb2dvLCBldGMuXHJcblxyXG4gICAgLy8gSWRlYWxseSB3ZSB0YXJnZXQgdGhlIGZvcm0gPGlucHV0PiwgYnV0IGFic2VudCB0aGF0XHJcbiAgICAvLyB3ZSBqdXN0IGdvIHRvIHRoZSBlbmQgb2YgdGhlIGZpbmFsIGZvcm0uXHJcbiAgICAvLyBTaG91bGQgd2UganVzdCBhbHdheXMgZ28gdGhlIGVuZCBvZiB0aGUgZmluYWwgZm9ybT9cclxuICAgIGxldCB0YXJnZXQgPVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBpbnB1dFwiKSB8fFxyXG4gICAgICBkb2N1bWVudC5mb3Jtc1tkb2N1bWVudC5mb3Jtcy5sZW5ndGggLSAxXS5sYXN0Q2hpbGQ7XHJcblxyXG4gICAgLy8gTmVzdGVkIGRpdiBmb3IgaG9yaXpvbnRhbCBjZW50ZXJpbmcuXHJcbiAgICB0YXJnZXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsXHJcbiAgICAgIGA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgdGV4dC1hbGlnbjogbGVmdDsgYWxpZ246IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2FwLWJhbm5lclwiIHN0eWxlPVwiZGlzcGxheTogdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IHRhYmxlLWNlbGw7IHBhZGRpbmc6IDEycHg7IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9kaXNhYmxlZC0zOC5wbmcnKX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogYXV0bzsgaGVpZ2h0OiBhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogdGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246IG1pZGRsZVwiPlRoaXMgZG9jdW1lbnQgPGI+d2lsbCBub3QgYmUgdXBsb2FkZWQ8L2I+IHRvIHRoZSBSRUNBUCBBcmNoaXZlIGJlY2F1c2UgdGhlIFJFQ0FQIGV4dGVuc2lvbiBoYXMgZGV0ZWN0ZWQgdGhhdCBpdCBtYXkgYmUgcmVzdHJpY3RlZCBmcm9tIHB1YmxpYyBkaXN0cmlidXRpb24uXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3RyaWN0ZWREb2M7XHJcbn07XHJcblxyXG4vLyBVc2UgYSB2YXJpZXR5IG9mIGFwcHJvYWNoZXMgdG8gZ2V0IGFuZCBzdG9yZSBwYWNlcl9kb2NfaWQgdG8gcGFjZXJfY2FzZV9pZFxyXG4vLyBtYXBwaW5ncyBpbiBsb2NhbCBzdG9yYWdlLlxyXG5Db250ZW50RGVsZWdhdGUucHJvdG90eXBlLmZpbmRBbmRTdG9yZVBhY2VyRG9jSWRzID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICghUEFDRVIuaGFzUGFjZXJDb29raWUoZG9jdW1lbnQuY29va2llKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gTm90IGFsbCBwYWdlcyBoYXZlIGEgY2FzZSBJRCwgYW5kIHRoZXJlIGFyZSBjb3JuZXItY2FzZXMgaW4gbWVyZ2VkIGRvY2tldHNcclxuICAvLyB3aGVyZSB0aGVyZSBhcmUgbGlua3MgdG8gZG9jdW1lbnRzIG9uIGFub3RoZXIgY2FzZS5cclxuICBsZXQgcGFnZV9wYWNlcl9jYXNlX2lkID0gdGhpcy5wYWNlcl9jYXNlX2lkXHJcbiAgICA/IHRoaXMucGFjZXJfY2FzZV9pZFxyXG4gICAgOiB0aGlzLnJlY2FwLmdldFBhY2VyQ2FzZUlkRnJvbVBhY2VyRG9jSWQodGhpcy5wYWNlcl9kb2NfaWQsIGZ1bmN0aW9uICgpIHsgfSk7XHJcblxyXG4gIGxldCBkb2NzVG9DYXNlcyA9IHt9O1xyXG5cclxuICAvLyBUcnkgZ2V0dGluZyBhIG1hcHBpbmcgZnJvbSBhIHBhY2VyX2RvY19pZCBpbiB0aGUgVVJMIHRvIGFcclxuICBpZiAodGhpcy5wYWNlcl9kb2NfaWQgJiYgcGFnZV9wYWNlcl9jYXNlX2lkICYmIHR5cGVvZiBwYWdlX3BhY2VyX2Nhc2VfaWQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBkZWJ1ZygzLCBgWiBkb2MgJHt0aGlzLnBhY2VyX2RvY19pZH0gdG8gJHtwYWdlX3BhY2VyX2Nhc2VfaWR9YCk7XHJcbiAgICBkb2NzVG9DYXNlc1t0aGlzLnBhY2VyX2RvY19pZF0gPSBwYWdlX3BhY2VyX2Nhc2VfaWQ7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBsaW5rID0gdGhpcy5saW5rc1tpXTtcclxuICAgIGlmIChQQUNFUi5pc0RvY3VtZW50VXJsKGxpbmsuaHJlZikpIHtcclxuICAgICAgbGV0IHBhY2VyX2RvY19pZCA9IFBBQ0VSLmdldERvY3VtZW50SWRGcm9tVXJsKGxpbmsuaHJlZik7XHJcbiAgICAgICQobGluaykuZGF0YSgncGFjZXJfZG9jX2lkJywgcGFjZXJfZG9jX2lkKTtcclxuICAgICAgdGhpcy5wYWNlcl9kb2NfaWRzLnB1c2gocGFjZXJfZG9jX2lkKTtcclxuXHJcbiAgICAgIGxldCBvbmNsaWNrID0gbGluay5nZXRBdHRyaWJ1dGUoJ29uY2xpY2snKTtcclxuICAgICAgbGV0IGdvRExTID0gUEFDRVIucGFyc2VHb0RMU0Z1bmN0aW9uKG9uY2xpY2spO1xyXG5cclxuICAgICAgaWYgKGdvRExTICYmIGdvRExTLmRlX2Nhc2VpZCkge1xyXG4gICAgICAgIGRvY3NUb0Nhc2VzW3BhY2VyX2RvY19pZF0gPSBnb0RMUy5kZV9jYXNlaWQ7XHJcbiAgICAgICAgZGVidWcoMywgYFkgZG9jICR7cGFjZXJfZG9jX2lkfSB0byAke2dvRExTLmRlX2Nhc2VpZH1gKTtcclxuICAgICAgfSBlbHNlIGlmIChwYWdlX3BhY2VyX2Nhc2VfaWQpIHtcclxuICAgICAgICBkb2NzVG9DYXNlc1twYWNlcl9kb2NfaWRdID0gcGFnZV9wYWNlcl9jYXNlX2lkO1xyXG4gICAgICAgIGRlYnVnKDMsIGBYIGRvYyAke3BhY2VyX2RvY19pZH0gdG8gJHtwYWdlX3BhY2VyX2Nhc2VfaWR9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gc2F2ZSBKU09OIG9iamVjdCBpbiBjaHJvbWUgc3RvcmFnZSB1bmRlciB0aGUgdGFiSWRcclxuICAvLyBhcHBlbmQgY2FzZUlkIGlmIGEgZG9ja2V0UXVlcnlVcmxcclxuICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgZG9jc1RvQ2FzZXM6IGRvY3NUb0Nhc2VzLFxyXG4gIH07XHJcbiAgaWYgKCEhdGhpcy5wYWNlcl9kb2NfaWQpIHtcclxuICAgIHBheWxvYWRbJ2RvY0lkJ10gPSB0aGlzLnBhY2VyX2RvY19pZDtcclxuICB9XHJcbiAgaWYgKFBBQ0VSLmlzRG9ja2V0UXVlcnlVcmwodGhpcy51cmwpICYmIHBhZ2VfcGFjZXJfY2FzZV9pZCkge1xyXG4gICAgcGF5bG9hZFsnY2FzZUlkJ10gPSBwYWdlX3BhY2VyX2Nhc2VfaWQ7XHJcbiAgfVxyXG4gIHVwZGF0ZVRhYlN0b3JhZ2Uoe1xyXG4gICAgW3RoaXMudGFiSWRdOiBwYXlsb2FkXHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBJZiB0aGlzIGlzIGEgZG9ja2V0IHF1ZXJ5IHBhZ2UsIGFzayBSRUNBUCB3aGV0aGVyIGl0IGhhcyB0aGUgZG9ja2V0IHBhZ2UuXHJcbkNvbnRlbnREZWxlZ2F0ZS5wcm90b3R5cGUuaGFuZGxlRG9ja2V0UXVlcnlVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCFQQUNFUi5pc0RvY2tldFF1ZXJ5VXJsKHRoaXMudXJsKSkgeyByZXR1cm47IH07XHJcbiAgLy8gTG9nZ2VkIG91dCB1c2VycyB0aGF0IGxvYWQgYSBkb2NrZXQgcGFnZSwgc2VlIGEgbG9naW4gcGFnZSwgc28gdGhleVxyXG4gIC8vIHNob3VsZG4ndCBjaGVjayBmb3IgZG9ja2V0IGF2YWlsYWJpbGl0eS5cclxuICBpZiAoIVBBQ0VSLmhhc1BhY2VyQ29va2llKGRvY3VtZW50LmNvb2tpZSkpIHsgcmV0dXJuOyB9O1xyXG5cclxuICB0aGlzLnJlY2FwLmdldEF2YWlsYWJpbGl0eUZvckRvY2tldChcclxuICAgIHRoaXMuY291cnQsXHJcbiAgICB0aGlzLnBhY2VyX2Nhc2VfaWQsXHJcbiAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQuY291bnQgPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1JFQ0FQOiBaZXJvIHJlc3VsdHMgZm91bmQgZm9yIGRvY2tldCBsb29rdXAuJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvdW50ID4gMSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICBgUkVDQVA6IE1vcmUgdGhhbiBvbmUgcmVzdWx0IGZvdW5kIGZvciBkb2NrZXQgbG9va3VwLiBGb3VuZCAke3Jlc3VsdC5jb3VudH1gXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocmVzdWx0LnJlc3VsdHMpIHtcclxuICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdyZWNhcC1iYW5uZXInKTtcclxuICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChyZWNhcEFsZXJ0QnV0dG9uKHRoaXMuY291cnQsIHRoaXMucGFjZXJfY2FzZV9pZCwgdHJ1ZSkpO1xyXG4gICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChyZWNhcEJhbm5lcihyZXN1bHQucmVzdWx0c1swXSkpO1xyXG4gICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBJZiB0aGlzIGlzIGEgZG9ja2V0IHBhZ2UsIHVwbG9hZCBpdCB0byBSRUNBUC5cclxuQ29udGVudERlbGVnYXRlLnByb3RvdHlwZS5oYW5kbGVEb2NrZXREaXNwbGF5UGFnZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gaGVscGVyIGZ1bmN0aW9uc1xyXG4gIGNvbnN0IGNyZWF0ZUFsZXJ0QnV0dG9uVHIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICB0ci5hcHBlbmRDaGlsZChyZWNhcEFsZXJ0QnV0dG9uKHRoaXMuY291cnQsIHRoaXMucGFjZXJfY2FzZV9pZCwgZmFsc2UpKTtcclxuICAgIHJldHVybiB0cjtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VBbGVydEJ1dHRvblN0YXRlVG9BY3RpdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBhbmNob3IgPSBhd2FpdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjYXAtYWxlcnQtYnV0dG9uJyk7XHJcbiAgICBpZiAoYW5jaG9yKSB7XHJcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuICAgICAgYW5jaG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBpbWcuc3JjID0gY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvaWNvbi0xNi5wbmcnKTtcclxuICAgICAgYW5jaG9yLmlubmVyVGV4dCA9ICdDcmVhdGUgYW4gQWxlcnQgZm9yIFRoaXMgQ2FzZSBvbiBSRUNBUCc7XHJcbiAgICAgIGFuY2hvci5pbnNlcnRCZWZvcmUoaW1nLCBhbmNob3IuY2hpbGROb2Rlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gSWYgaXQncyBub3QgYSBkb2NrZXQgZGlzcGxheSBVUkwgb3IgYSBkb2NrZXQgaGlzdG9yeSBVUkwsIHB1bnQuXHJcbiAgbGV0IGlzRG9ja2V0RGlzcGxheVVybCA9IFBBQ0VSLmlzRG9ja2V0RGlzcGxheVVybCh0aGlzLnVybCk7XHJcbiAgbGV0IGlzRG9ja2V0SGlzdG9yeURpc3BsYXlVcmwgPSBQQUNFUi5pc0RvY2tldEhpc3RvcnlEaXNwbGF5VXJsKHRoaXMudXJsKTtcclxuICBpZiAoIShpc0RvY2tldEhpc3RvcnlEaXNwbGF5VXJsIHx8IGlzRG9ja2V0RGlzcGxheVVybCkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIGNoZWNrIGZvciBtb3JlIHRoYW4gb25lIHJhZGlvRGF0ZUlucHV0IGFuZCByZXR1cm4gaWYgdHJ1ZVxyXG4gIC8vICh5b3UgYXJlIG9uIGFuIGludGVyc3RpdGlhbCBwYWdlIHNvIG5vIGRvY2tldCB0byBkaXNwbGF5KVxyXG4gIGNvbnN0IHJhZGlvRGF0ZUlucHV0cyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKV0uZmlsdGVyKFxyXG4gICAgaW5wdXQgPT4gaW5wdXQubmFtZSA9PT0gJ2RhdGVfZnJvbScgJiYgaW5wdXQudHlwZSA9PT0gJ3JhZGlvJ1xyXG4gICk7XHJcbiAgaWYgKHJhZGlvRGF0ZUlucHV0cy5sZW5ndGggPiAxKSB7IHJldHVybjsgfTtcclxuXHJcbiAgLy8gaWYgeW91J3ZlIGFscmVhZHkgdXBsb2FkZWQgdGhlIHBhZ2UsIHJldHVyblxyXG4gIGlmIChoaXN0b3J5LnN0YXRlICYmIGhpc3Rvcnkuc3RhdGUudXBsb2FkZWQpIHsgcmV0dXJuOyB9XHJcblxyXG4gIC8vIGNoZWNrIGlmIGFwcGVsbGF0ZVxyXG4gIC8vIGxldCBpc0FwcGVsbGF0ZSA9IFBBQ0VSLmlzQXBwZWxsYXRlQ291cnQodGhpcy5jb3VydCk7XHJcblxyXG4gIC8vIGlmIHRoZSBjb250ZW50X2RlbGVnYXRlIGRpZG4ndCBwdWxsIHRoZSBjYXNlIElkIG9uIGluaXRpYWxpemF0aW9uLFxyXG4gIC8vIGNoZWNrIHRoZSBwYWdlIGZvciBhIGxlYWQgY2FzZSBka3RycHQgdXJsLlxyXG4gIGNvbnN0IHRhYlN0b3JhZ2UgPSBhd2FpdCBnZXRJdGVtc0Zyb21TdG9yYWdlKHRoaXMudGFiSWQpXHJcbiAgdGhpcy5wYWNlcl9jYXNlX2lkID0gdGhpcy5wYWNlcl9jYXNlX2lkID8gdGhpcy5wYWNlcl9jYXNlX2lkIDogdGFiU3RvcmFnZS5jYXNlSWQ7XHJcblxyXG4gIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcy5wYWNlcl9jYXNlX2lkIGF0IHRoaXMgcG9pbnQsIHB1bnQuXHJcbiAgaWYgKCF0aGlzLnBhY2VyX2Nhc2VfaWQpIHsgcmV0dXJuOyB9XHJcblxyXG4gIC8vIGluc2VydCB0aGUgYnV0dG9uIGluIGEgZGlzYWJsZWQgc3RhdGVcclxuICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xyXG4gIGNvbnN0IHRyID0gY3JlYXRlQWxlcnRCdXR0b25UcigpO1xyXG4gIHRhYmxlQm9keS5pbnNlcnRCZWZvcmUodHIsIHRhYmxlQm9keS5jaGlsZE5vZGVzWzBdKTtcclxuXHJcbiAgdGhpcy5yZWNhcC5nZXRBdmFpbGFiaWxpdHlGb3JEb2NrZXQoXHJcbiAgICB0aGlzLmNvdXJ0LFxyXG4gICAgdGhpcy5wYWNlcl9jYXNlX2lkLFxyXG4gICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LmNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdSRUNBUDogWmVybyByZXN1bHRzIGZvdW5kIGZvciBkb2NrZXQgbG9va3VwLicpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb3VudCA+IDEpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgYFJFQ0FQOiBNb3JlIHRoYW4gb25lIHJlc3VsdCBmb3VuZCBmb3IgZG9ja2V0IGxvb2t1cC4gRm91bmQgJHtyZXN1bHQuY291bnR9YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hhbmdlQWxlcnRCdXR0b25TdGF0ZVRvQWN0aXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gYXdhaXQgZ2V0SXRlbXNGcm9tU3RvcmFnZSgnb3B0aW9ucycpO1xyXG5cclxuICBpZiAob3B0aW9uc1sncmVjYXBfZW5hYmxlZCddKSB7XHJcbiAgICBsZXQgY2FsbGJhY2sgPSAob2spID0+IHtcclxuICAgICAgaWYgKG9rKSB7XHJcbiAgICAgICAgY2hhbmdlQWxlcnRCdXR0b25TdGF0ZVRvQWN0aXZlKCk7XHJcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyB1cGxvYWRlZDogdHJ1ZSB9LCAnJyk7XHJcbiAgICAgICAgdGhpcy5ub3RpZmllci5zaG93VXBsb2FkKFxyXG4gICAgICAgICAgJ0RvY2tldCB1cGxvYWRlZCB0byB0aGUgcHVibGljIFJFQ0FQIEFyY2hpdmUuJyxcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHsgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBpZiAoaXNEb2NrZXREaXNwbGF5VXJsKSB7XHJcbiAgICAgIHRoaXMucmVjYXAudXBsb2FkRG9ja2V0KHRoaXMuY291cnQsIHRoaXMucGFjZXJfY2FzZV9pZCxcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MLFxyXG4gICAgICAgICdET0NLRVQnLFxyXG4gICAgICAgIChvaykgPT4gY2FsbGJhY2sob2spKTtcclxuICAgIH0gZWxzZSBpZiAoaXNEb2NrZXRIaXN0b3J5RGlzcGxheVVybCkge1xyXG4gICAgICB0aGlzLnJlY2FwLnVwbG9hZERvY2tldCh0aGlzLmNvdXJ0LCB0aGlzLnBhY2VyX2Nhc2VfaWQsXHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCxcclxuICAgICAgICAnRE9DS0VUX0hJU1RPUllfUkVQT1JUJyxcclxuICAgICAgICAob2spID0+IGNhbGxiYWNrKG9rKSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuaW5mbyhgUkVDQVA6IE5vdCB1cGxvYWRpbmcgZG9ja2V0LiBSRUNBUCBpcyBkaXNhYmxlZC5gKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBJZiB0aGlzIGlzIGEgZG9jdW1lbnQncyBtZW51IG9mIGF0dGFjaG1lbnRzIChzdWJkb2N1bWVudHMpLCB1cGxvYWQgaXQgdG9cclxuLy8gUkVDQVAuXHJcbkNvbnRlbnREZWxlZ2F0ZS5wcm90b3R5cGUuaGFuZGxlQXR0YWNobWVudE1lbnVQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmIChoaXN0b3J5LnN0YXRlICYmIGhpc3Rvcnkuc3RhdGUudXBsb2FkZWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghUEFDRVIuaXNBdHRhY2htZW50TWVudVBhZ2UodGhpcy51cmwsIGRvY3VtZW50KSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdvcHRpb25zJywgZnVuY3Rpb24gKGl0ZW1zKSB7XHJcbiAgICBpZiAoaXRlbXNbJ29wdGlvbnMnXVsncmVjYXBfZW5hYmxlZCddKSB7XHJcbiAgICAgIGxldCBjYWxsYmFjayA9ICQucHJveHkoZnVuY3Rpb24gKG9rKSB7XHJcbiAgICAgICAgaWYgKG9rKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IHVwbG9hZGVkOiB0cnVlIH0sICcnKTtcclxuICAgICAgICAgIHRoaXMubm90aWZpZXIuc2hvd1VwbG9hZChcclxuICAgICAgICAgICAgJ01lbnUgcGFnZSB1cGxvYWRlZCB0byB0aGUgcHVibGljIFJFQ0FQIEFyY2hpdmUuJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICB0aGlzLnJlY2FwLnVwbG9hZEF0dGFjaG1lbnRNZW51KHRoaXMuY291cnQsIHRoaXMucGFjZXJfY2FzZV9pZCxcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MLCBjYWxsYmFjayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmluZm8oXCJSRUNBUDogTm90IHVwbG9hZGluZyBhdHRhY2htZW50IG1lbnUuIFJFQ0FQIGlzIGRpc2FibGVkLlwiKTtcclxuICAgIH1cclxuICB9LmJpbmQodGhpcykpO1xyXG59O1xyXG5cclxuLy8gSWYgdGhpcyBwYWdlIG9mZmVycyBhIHNpbmdsZSBkb2N1bWVudCwgYXNrIFJFQ0FQIHdoZXRoZXIgaXQgaGFzIHRoZSBkb2N1bWVudC5cclxuQ29udGVudERlbGVnYXRlLnByb3RvdHlwZS5oYW5kbGVTaW5nbGVEb2N1bWVudFBhZ2VDaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIVBBQ0VSLmlzU2luZ2xlRG9jdW1lbnRQYWdlKHRoaXMudXJsLCBkb2N1bWVudCkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBjYWxsYmFjayA9ICQucHJveHkoZnVuY3Rpb24gKGFwaV9yZXN1bHRzKSB7XHJcbiAgICBjb25zb2xlLmluZm8oYFJFQ0FQOiBHb3QgcmVzdWx0cyBmcm9tIEFQSS4gUnVubmluZyBjYWxsYmFjayBvbiBBUEkgcmVzdWx0cyB0byBgICtcclxuICAgICAgYGluc2VydCBsaW5rYCk7XHJcbiAgICBsZXQgcmVzdWx0ID0gYXBpX3Jlc3VsdHMucmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICByZXR1cm4gb2JqLnBhY2VyX2RvY19pZCA9PT0gcGFjZXJfZG9jX2lkO1xyXG4gICAgfSlbMF07XHJcbiAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhyZWYgPSBgaHR0cHM6Ly93d3cuY291cnRsaXN0ZW5lci5jb20vJHtyZXN1bHQuZmlsZXBhdGhfbG9jYWx9YDtcclxuICAgIC8vIEluc2VydCBhIFJFQ0FQIGRvd25sb2FkIGxpbmsgYXQgdGhlIGJvdHRvbSBvZiB0aGUgZm9ybS5cclxuICAgICQoJzxkaXYgY2xhc3M9XCJyZWNhcC1iYW5uZXJcIi8+JykuYXBwZW5kKFxyXG4gICAgICAkKCc8YS8+Jywge1xyXG4gICAgICAgIHRpdGxlOiAnRG9jdW1lbnQgaXMgYXZhaWxhYmxlIGZvciBmcmVlIGluIHRoZSBSRUNBUCBBcmNoaXZlLicsXHJcbiAgICAgICAgaHJlZjogaHJlZlxyXG4gICAgICB9KS5hcHBlbmQoXHJcbiAgICAgICAgJCgnPGltZy8+JywgeyBzcmM6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2ljb24tMTYucG5nJykgfSlcclxuICAgICAgKS5hcHBlbmQoXHJcbiAgICAgICAgJyBHZXQgdGhpcyBkb2N1bWVudCBmb3IgZnJlZSBmcm9tIHRoZSBSRUNBUCBBcmNoaXZlLidcclxuICAgICAgKVxyXG4gICAgKS5hcHBlbmRUbygkKCdmb3JtJykpO1xyXG4gIH0sIHRoaXMpO1xyXG5cclxuICBsZXQgY2xfY291cnQgPSBQQUNFUi5jb252ZXJ0VG9Db3VydExpc3RlbmVyQ291cnQodGhpcy5jb3VydCk7XHJcbiAgdGhpcy5yZWNhcC5nZXRBdmFpbGFiaWxpdHlGb3JEb2N1bWVudHMoW3RoaXMucGFjZXJfZG9jX2lkXSwgY2xfY291cnQsIGNhbGxiYWNrKTtcclxufTtcclxuXHJcbkNvbnRlbnREZWxlZ2F0ZS5wcm90b3R5cGUub25Eb2N1bWVudFZpZXdTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAvLyBTYXZlIGEgY29weSBvZiB0aGUgcGFnZSBzb3VyY2UsIGFsdGVyZWQgc28gdGhhdCB0aGUgXCJWaWV3IERvY3VtZW50XCJcclxuICAvLyBidXR0b24gZ29lcyBmb3J3YXJkIGluIHRoZSBoaXN0b3J5IGluc3RlYWQgb2YgcmVzdWJtaXR0aW5nIHRoZSBmb3JtLlxyXG4gIGxldCBvcmlnaW5hbEZvcm0gPSBkb2N1bWVudC5mb3Jtc1swXTtcclxuICBsZXQgb3JpZ2luYWxTdWJtaXQgPSBvcmlnaW5hbEZvcm0uZ2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcpO1xyXG4gIG9yaWdpbmFsRm9ybS5zZXRBdHRyaWJ1dGUoJ29uc3VibWl0JywgJ2hpc3RvcnkuZm9yd2FyZCgpOyByZXR1cm4gZmFsc2U7Jyk7XHJcbiAgbGV0IHByZXZpb3VzUGFnZUh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MO1xyXG4gIG9yaWdpbmFsRm9ybS5zZXRBdHRyaWJ1dGUoJ29uc3VibWl0Jywgb3JpZ2luYWxTdWJtaXQpO1xyXG5cclxuICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LmRhdGEuaWQpO1xyXG5cclxuICAvLyBHcmFiIHRoZSBkb2N1bWVudCBudW1iZXIsIGF0dGFjaG1lbnQgbnVtYmVyLCBhbmQgZG9ja2V0IG51bWJlclxyXG4gIGxldCBkb2N1bWVudF9udW1iZXIsIGF0dGFjaG1lbnRfbnVtYmVyLCBkb2NrZXRfbnVtYmVyO1xyXG5cclxuICBpZiAoIVBBQ0VSLmlzQXBwZWxsYXRlQ291cnQodGhpcy5jb3VydCkpIHtcclxuICAgIC8vIFRoaXMgQ1NTIHNlbGVjdG9yIGR1cGxpY2F0ZWQgaW4gaXNTaW5nbGVEb2N1bWVudFBhZ2VcclxuICAgIGxldCBpbWFnZV9zdHJpbmcgPSAkKCd0ZDpjb250YWlucyhJbWFnZSknKS50ZXh0KCk7XHJcbiAgICBsZXQgcmVnZXggPSAvKFxcZCspLShcXGQrKS87XHJcbiAgICBsZXQgbWF0Y2hlcyA9IHJlZ2V4LmV4ZWMoaW1hZ2Vfc3RyaW5nKTtcclxuICAgIGlmICghbWF0Y2hlcykge1xyXG4gICAgICBmb3JtLnN1Ym1pdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudF9udW1iZXIgPSBtYXRjaGVzWzFdO1xyXG4gICAgYXR0YWNobWVudF9udW1iZXIgPSBtYXRjaGVzWzJdO1xyXG4gICAgZG9ja2V0X251bWJlciA9ICQudHJpbSgkKCd0cjpjb250YWlucyhDYXNlIE51bWJlcikgdGQ6bnRoKDEpJykudGV4dCgpKTtcclxuICB9IGVsc2UgeyAvLyBBcHBlbGxhdGVcclxuICAgIGRlYnVnKDQsIFwiQXBwZWxsYXRlIHBhcnNpbmcgbm90IHlldCBpbXBsZW1lbnRlZFwiKTtcclxuICB9XHJcblxyXG4gIC8vIE5vdyBkbyB0aGUgZm9ybSByZXF1ZXN0IHRvIGdldCB0byB0aGUgdmlldyBwYWdlLiAgU29tZSBQQUNFUiBzaXRlcyB3aWxsXHJcbiAgLy8gcmV0dXJuIGFuIEhUTUwgcGFnZSBjb250YWluaW5nIGFuIDxpZnJhbWU+IHRoYXQgbG9hZHMgdGhlIFBERiBkb2N1bWVudDtcclxuICAvLyBvdGhlcnMganVzdCByZXR1cm4gdGhlIFBERiBkb2N1bWVudC4gIEFzIHdlIGRvbid0IGtub3cgd2hldGhlciB3ZSdsbCBnZXRcclxuICAvLyBIVE1MICh0ZXh0KSBvciBQREYgKGJpbmFyeSksIHdlIGFzayBmb3IgYW4gQXJyYXlCdWZmZXIgYW5kIGNvbnZlcnQgbGF0ZXIuXHJcbiAgJCgnYm9keScpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcclxuICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuICBodHRwUmVxdWVzdChmb3JtLmFjdGlvbiwgZGF0YSwgZnVuY3Rpb24gKHR5cGUsIGFiLCB4aHIpIHtcclxuICAgIGNvbnNvbGUuaW5mbyhgUkVDQVA6IFN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQgUkVDQVAgXCJWaWV3XCIgYnV0dG9uIGZvcm06ICR7eGhyLnN0YXR1c1RleHR9YCk7XHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KGFiKV0sIHsgdHlwZTogdHlwZSB9KTtcclxuICAgIC8vIElmIHdlIGdvdCBhIFBERiwgd2Ugd3JhcCBpdCBpbiBhIHNpbXBsZSBIVE1MIHBhZ2UuICBUaGlzIGxldHMgdXMgdHJlYXRcclxuICAgIC8vIGJvdGggY2FzZXMgdW5pZm9ybWx5OiBlaXRoZXIgd2F5IHdlIGhhdmUgYW4gSFRNTCBwYWdlIHdpdGggYW4gPGlmcmFtZT5cclxuICAgIC8vIGluIGl0LCB3aGljaCBpcyBoYW5kbGVkIGJ5IHNob3dQZGZQYWdlLlxyXG4gICAgaWYgKHR5cGUgPT09ICdhcHBsaWNhdGlvbi9wZGYnKSB7XHJcbiAgICAgIC8vIGNhbmIgYW5kIGNhOSByZXR1cm4gUERGcyBhbmQgdHJpZ2dlciB0aGlzIGNvZGUgcGF0aC5cclxuICAgICAgY29uc3QgaHRtbCA9IGA8c3R5bGU+Ym9keSB7IG1hcmdpbjogMDsgfSBpZnJhbWUgeyBib3JkZXI6IG5vbmU7IH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cIiR7VVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKX1cIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+PC9pZnJhbWU+YDtcclxuICAgICAgdGhpcy5zaG93UGRmUGFnZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGh0bWwsIHByZXZpb3VzUGFnZUh0bWwsXHJcbiAgICAgICAgZG9jdW1lbnRfbnVtYmVyLCBhdHRhY2htZW50X251bWJlciwgZG9ja2V0X251bWJlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBkY2QgKGFuZCBwcmVzdW1hYmx5IG90aGVycykgdHJpZ2dlciB0aGlzIGNvZGUgcGF0aC5cclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgaHRtbCA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBhbiBIVE1MIHBhZ2Ugd2hpY2ggcmVkaXJlY3RzIHRoZSB1c2VyIHRvIHRoZSBQREZcclxuICAgICAgICAvLyB0aGlzIHdhcyBmaXJzdCBkaXNwbGF5IGJ5IHRoZSBOb3J0aGVybiBEaXN0cmljdCBvZiBHZW9yZ2lhXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZyZWVsYXdwcm9qZWN0L3JlY2FwL2lzc3Vlcy8yNzdcclxuICAgICAgICBjb25zdCByZWRpcmVjdFJlc3VsdCA9IEFycmF5LmZyb20oaHRtbC5tYXRjaEFsbCgvd2luZG93XFwubG9jYXRpb25cXHMqPVxccypbXCInXShbXlwiJ10rKVtcIiddOz8vZykpO1xyXG4gICAgICAgIGlmIChyZWRpcmVjdFJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSByZWRpcmVjdFJlc3VsdFswXVsxXTtcclxuICAgICAgICAgIGh0bWwgPSBgPHN0eWxlPmJvZHkgeyBtYXJnaW46IDA7IH0gaWZyYW1lIHsgYm9yZGVyOiBub25lOyB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cIiR7dXJsfVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj48L2lmcmFtZT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dQZGZQYWdlKFxyXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBodG1sLCBwcmV2aW91c1BhZ2VIdG1sLFxyXG4gICAgICAgICAgZG9jdW1lbnRfbnVtYmVyLCBhdHRhY2htZW50X251bWJlciwgZG9ja2V0X251bWJlcik7XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYik7ICAvLyBjb252ZXJ0IGJsb2IgdG8gSFRNTCB0ZXh0XHJcbiAgICB9XHJcbiAgfS5iaW5kKHRoaXMpKTtcclxufTtcclxuXHJcbi8vIEdpdmVuIHRoZSBIVE1MIGZvciBhIHBhZ2Ugd2l0aCBhbiA8aWZyYW1lPiBpbiBpdCwgZG93bmxvYWRzIHRoZSBQREZcclxuLy8gZG9jdW1lbnQgaW4gdGhlIGlmcmFtZSwgZGlzcGxheXMgaXQgaW4gdGhlIGJyb3dzZXIsIGFuZCBhbHNvXHJcbi8vIHVwbG9hZHMgdGhlIFBERiBkb2N1bWVudCB0byBSRUNBUC5cclxuLy9cclxuLy8gVGhlIGRvY3VtZW50RWxlbWVudCBpcyBwcm92aWRlZCB2aWEgZGVwZW5kZW5jeSBpbmplY3Rpb24gc28gdGhhdCBpdFxyXG4vLyBjYW4gYmUgcHJvcGVybHkgbW9ja2VkIGluIHRlc3RzLlxyXG5Db250ZW50RGVsZWdhdGUucHJvdG90eXBlLnNob3dQZGZQYWdlID0gYXN5bmMgZnVuY3Rpb24gKFxyXG4gIGRvY3VtZW50RWxlbWVudCwgaHRtbCwgcHJldmlvdXNQYWdlSHRtbCwgZG9jdW1lbnRfbnVtYmVyLCBhdHRhY2htZW50X251bWJlcixcclxuICBkb2NrZXRfbnVtYmVyKSB7XHJcbiAgLy8gRmluZCB0aGUgPGlmcmFtZT4gVVJMIGluIHRoZSBIVE1MIHN0cmluZy5cclxuICBsZXQgbWF0Y2ggPSBodG1sLm1hdGNoKC8oW15dKj8pPGlmcmFtZVtePl0qc3JjPVwiKC4qPylcIihbXl0qKS8pO1xyXG4gIGlmICghbWF0Y2gpIHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGdldEl0ZW1zRnJvbVN0b3JhZ2UoJ29wdGlvbnMnKTtcclxuXHJcbiAgLy8gU2hvdyB0aGUgcGFnZSB3aXRoIGEgYmxhbmsgPGlmcmFtZT4gd2hpbGUgd2FpdGluZyBmb3IgdGhlIGRvd25sb2FkLlxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBgJHttYXRjaFsxXX08cCBpZD1cInJlY2FwLXdhaXRpbmdcIj5XYWl0aW5nIGZvciBkb3dubG9hZC4uLjwvcD48aWZyYW1lIHNyYz1cImFib3V0OmJsYW5rXCIke21hdGNoWzNdfWA7XHJcblxyXG4gIC8vIE1ha2UgdGhlIEJhY2sgYnV0dG9uIHJlZGlzcGxheSB0aGUgcHJldmlvdXMgcGFnZS5cclxuICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnN0YXRlLmNvbnRlbnQpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9IGV2ZW50LnN0YXRlLmNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfTtcclxuICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGNvbnRlbnQ6IHByZXZpb3VzUGFnZUh0bWwgfSwgJycpO1xyXG5cclxuICAvLyBEb3dubG9hZCB0aGUgZmlsZSBmcm9tIHRoZSA8aWZyYW1lPiBVUkwuXHJcbiAgY29uc3QgYnJvd3NlclNwZWNpZmljRmV0Y2ggPSAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA8IDApID8gY29udGVudC5mZXRjaCA6IHdpbmRvdy5mZXRjaDtcclxuICBjb25zdCBibG9iID0gYXdhaXQgYnJvd3NlclNwZWNpZmljRmV0Y2gobWF0Y2hbMl0pLnRoZW4ocmVzID0+IHJlcy5ibG9iKCkpO1xyXG4gIGxldCBibG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICBjb25zdCBkYXRhVXJsID0gYXdhaXQgYmxvYlRvRGF0YVVSTChibG9iKTtcclxuICBhd2FpdCB1cGRhdGVUYWJTdG9yYWdlKHsgW3RoaXMudGFiSWRdOiB7IFsncGRmX2Jsb2InXTogZGF0YVVybCB9IH0pO1xyXG4gIGNvbnNvbGUuaW5mbyhcIlJFQ0FQOiBTdWNjZXNzZnVsbHkgZ290IFBERiBhcyBhcnJheWJ1ZmZlciB2aWEgYWpheCByZXF1ZXN0LlwiKTtcclxuICAvLyBHZXQgdGhlIFBBQ0VSIGNhc2UgSUQgYW5kLCBvbiBjb21wbGV0aW9uLCBkZWZpbmUgZGlzcGxheVBERigpXHJcbiAgLy8gdG8gZWl0aGVyIGRpc3BsYXkgdGhlIFBERiBpbiB0aGUgcHJvdmlkZWQgPGlmcmFtZT4sIG9yLCBpZlxyXG4gIC8vIGV4dGVybmFsX3BkZiBpcyBzZXQsIHNhdmUgaXQgdXNpbmcgRmlsZVNhdmVyLmpzJ3Mgc2F2ZUFzKCkuXHJcblxyXG4gIGNvbnN0IHBhY2VyX2Nhc2VfaWQgPSB0aGlzLnBhY2VyX2Nhc2VfaWRcclxuICAgID8gdGhpcy5wYWNlcl9jYXNlX2lkXHJcbiAgICA6IGF3YWl0IHRoaXMucmVjYXAuZ2V0UGFjZXJDYXNlSWRGcm9tUGFjZXJEb2NJZCh0aGlzLnBhY2VyX2RvY19pZCwgKCkgPT4geyB9KTtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVGaWxlTmFtZSA9IChwYWNlcl9jYXNlX2lkKSA9PiB7XHJcbiAgICBsZXQgZmlsZW5hbWUsIHBpZWNlcztcclxuICAgIGlmIChvcHRpb25zLmlhX3N0eWxlX2ZpbGVuYW1lcykge1xyXG4gICAgICBwaWVjZXMgPSBbXHJcbiAgICAgICAgJ2dvdicsXHJcbiAgICAgICAgJ3VzY291cnRzJyxcclxuICAgICAgICB0aGlzLmNvdXJ0LFxyXG4gICAgICAgIChwYWNlcl9jYXNlX2lkIHx8ICd1bmtub3duLWNhc2UtaWQnKSxcclxuICAgICAgICAoZG9jdW1lbnRfbnVtYmVyIHx8ICcwJyksXHJcbiAgICAgICAgKGF0dGFjaG1lbnRfbnVtYmVyIHx8ICcwJylcclxuICAgICAgXTtcclxuICAgICAgZmlsZW5hbWUgPSBgJHtwaWVjZXMuam9pbignLicpfS5wZGZgO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmxhd3llcl9zdHlsZV9maWxlbmFtZXMpIHtcclxuICAgICAgcGllY2VzID0gW1xyXG4gICAgICAgIFBBQ0VSLkNPVVJUX0FCQlJFVlNbdGhpcy5jb3VydF0sXHJcbiAgICAgICAgKGRvY2tldF9udW1iZXIgfHwgJzAnKSxcclxuICAgICAgICAoZG9jdW1lbnRfbnVtYmVyIHx8ICcwJyksXHJcbiAgICAgICAgKGF0dGFjaG1lbnRfbnVtYmVyIHx8ICcwJylcclxuICAgICAgXTtcclxuICAgICAgZmlsZW5hbWUgPSBgJHtwaWVjZXMuam9pbignXycpfS5wZGZgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbGVuYW1lO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldElubmVySHRtbCA9IChwYWNlcl9jYXNlX2lkKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IGdlbmVyYXRlRmlsZU5hbWUocGFjZXJfY2FzZV9pZCk7XHJcbiAgICBsZXQgZXh0ZXJuYWxfcGRmID0gb3B0aW9ucy5leHRlcm5hbF9wZGY7XHJcbiAgICBpZiAoKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPj0gMCkgJiZcclxuICAgICAgIW5hdmlnYXRvci5wbHVnaW5zLm5hbWVkSXRlbSgnQ2hyb21lIFBERiBWaWV3ZXInKSkge1xyXG4gICAgICAvLyBXZSBhcmUgaW4gR29vZ2xlIENocm9tZSwgYW5kIHRoZSBidWlsdC1pbiBQREYgVmlld2VyIGhhcyBiZWVuIGRpc2FibGVkLlxyXG4gICAgICAvLyBTbyB3ZSBhdXRvZGV0ZWN0IGFuZCBmb3JjZSBleHRlcm5hbF9wZGYgdHJ1ZSBmb3IgcHJvcGVyIGZpbGVuYW1lcy5cclxuICAgICAgZXh0ZXJuYWxfcGRmID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICghZXh0ZXJuYWxfcGRmKSB7XHJcbiAgICAgIGxldCBkb3dubG9hZExpbmsgPSBgPGRpdiBpZD1cInJlY2FwLWRvd25sb2FkXCIgY2xhc3M9XCJpbml0aWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtibG9iVXJsfVwiIGRvd25sb2FkPVwiJHtmaWxlbmFtZX1cIj5TYXZlIGFzICR7ZmlsZW5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgIGh0bWwgPSBgJHttYXRjaFsxXX0ke2Rvd25sb2FkTGlua308aWZyYW1lIG9ubG9hZD1cInNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjYXAtZG93bmxvYWQnKS5jbGFzc05hbWUgPSAnJztcclxuICAgICAgICAgICAgICB9LCA3NTAwKVwiIHNyYz1cIiR7YmxvYlVybH1cIiR7bWF0Y2hbM119YDtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsgY29udGVudDogaHRtbCB9LCAnJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTYXZpbmcgdG8gYW4gZXh0ZXJuYWwgUERGLlxyXG4gICAgICBjb25zdCB3YWl0aW5nR3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjYXAtd2FpdGluZycpO1xyXG4gICAgICBpZiAod2FpdGluZ0dyYXBoKSB7XHJcbiAgICAgICAgd2FpdGluZ0dyYXBoLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHdpbmRvdy5zYXZlQXMoYmxvYiwgZmlsZW5hbWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHNldElubmVySHRtbChwYWNlcl9jYXNlX2lkKTtcclxuXHJcbiAgLy8gc3RvcmUgdGhlIGJsb2IgaW4gY2hyb21lIHN0b3JhZ2UgZm9yIGJhY2tncm91bmQgd29ya2VyXHJcbiAgaWYgKG9wdGlvbnNbJ3JlY2FwX2VuYWJsZWQnXSAmJiAhdGhpcy5yZXN0cmljdGVkKSB7XHJcbiAgICAvLyBJZiB3ZSBoYXZlIHRoZSBwYWNlcl9jYXNlX2lkLCB1cGxvYWQgdGhlIGZpbGUgdG8gUkVDQVAuXHJcbiAgICAvLyBXZSBjYW4ndCBwYXNzIGFuIEFycmF5QnVmZmVyIGRpcmVjdGx5IHRvIHRoZSBiYWNrZ3JvdW5kXHJcbiAgICAvLyBwYWdlLCBzbyB3ZSBoYXZlIHRvIGNvbnZlcnQgdG8gYSByZWd1bGFyIGFycmF5LlxyXG4gICAgdGhpcy5yZWNhcC51cGxvYWREb2N1bWVudChcclxuICAgICAgdGhpcy5jb3VydCxcclxuICAgICAgcGFjZXJfY2FzZV9pZCxcclxuICAgICAgdGhpcy5wYWNlcl9kb2NfaWQsXHJcbiAgICAgIGRvY3VtZW50X251bWJlcixcclxuICAgICAgYXR0YWNobWVudF9udW1iZXIsXHJcbiAgICAgIChvaykgPT4geyAgLy8gY2FsbGJhY2tcclxuICAgICAgICBpZiAob2spIHtcclxuICAgICAgICAgIHRoaXMubm90aWZpZXIuc2hvd1VwbG9hZChcclxuICAgICAgICAgICAgJ1BERiB1cGxvYWRlZCB0byB0aGUgcHVibGljIFJFQ0FQIEFyY2hpdmUuJyxcclxuICAgICAgICAgICAgKCkgPT4geyB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5pbmZvKFwiUkVDQVA6IE5vdCB1cGxvYWRpbmcgUERGLiBSRUNBUCBpcyBkaXNhYmxlZC5cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gSWYgdGhpcyBwYWdlIG9mZmVycyBhIHNpbmdsZSBkb2N1bWVudCwgaW50ZXJjZXB0IG5hdmlnYXRpb24gdG8gdGhlIGRvY3VtZW50XHJcbi8vIHZpZXcgcGFnZS4gIFRoZSBcIlZpZXcgRG9jdW1lbnRcIiBidXR0b24gY2FsbHMgdGhlIGdvRExTKCkgZnVuY3Rpb24sIHdoaWNoXHJcbi8vIGNyZWF0ZXMgYSA8Zm9ybT4gZWxlbWVudCBhbmQgY2FsbHMgc3VibWl0KCkgb24gaXQsIHNvIHdlIGhvb2sgaW50byBzdWJtaXQoKS5cclxuQ29udGVudERlbGVnYXRlLnByb3RvdHlwZS5oYW5kbGVTaW5nbGVEb2N1bWVudFBhZ2VWaWV3ID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICghUEFDRVIuaXNTaW5nbGVEb2N1bWVudFBhZ2UodGhpcy51cmwsIGRvY3VtZW50KSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKFBBQ0VSLmlzQXBwZWxsYXRlQ291cnQodGhpcy5jb3VydCkpIHtcclxuICAgIGRlYnVnKDQsIFwiTm8gaW50ZXJwb3NpdGlvbiBmb3IgYXBwZWxsYXRlIGRvd25sb2FkcyB5ZXRcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBNb25rZXktcGF0Y2ggdGhlIDxmb3JtPiBwcm90b3R5cGUgc28gdGhhdCBpdHMgc3VibWl0KCkgbWV0aG9kIHNlbmRzIGFcclxuICAvLyBtZXNzYWdlIHRvIHRoaXMgY29udGVudCBzY3JpcHQgaW5zdGVhZCBvZiBzdWJtaXR0aW5nIHRoZSBmb3JtLiAgVG8gZG8gdGhpc1xyXG4gIC8vIGluIHRoZSBwYWdlIGNvbnRleHQgaW5zdGVhZCBvZiB0aGlzIHNjcmlwdCdzLCB3ZSBpbmplY3QgYSA8c2NyaXB0PiBlbGVtZW50LlxyXG4gIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICBzY3JpcHQuaW5uZXJUZXh0ID1cclxuICAgICdkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKS5fX3Byb3RvX18uc3VibWl0ID0gZnVuY3Rpb24gKCkgeycgK1xyXG4gICAgJyAgdGhpcy5pZCA9IFwiZm9ybVwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7JyArXHJcbiAgICAnICB3aW5kb3cucG9zdE1lc3NhZ2Uoe2lkOiB0aGlzLmlkfSwgXCIqXCIpOycgK1xyXG4gICAgJ307JztcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG4gIC8vIFdoZW4gd2UgcmVjZWl2ZSB0aGUgbWVzc2FnZSBmcm9tIHRoZSBhYm92ZSBzdWJtaXQgbWV0aG9kLCBzdWJtaXQgdGhlIGZvcm1cclxuICAvLyB2aWEgWEhSIHNvIHdlIGNhbiBnZXQgdGhlIGRvY3VtZW50IGJlZm9yZSB0aGUgYnJvd3NlciBkb2VzLlxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ21lc3NhZ2UnLCB0aGlzLm9uRG9jdW1lbnRWaWV3U3VibWl0LmJpbmQodGhpcyksIGZhbHNlKTtcclxufTtcclxuXHJcbi8vIFBvcCB1cCBhIGRpYWxvZyBvZmZlcmluZyB0aGUgbGluayB0byB0aGUgZnJlZSBjYWNoZWQgY29weSBvZiB0aGUgZG9jdW1lbnQsXHJcbi8vIG9yIGp1c3QgZ28gZGlyZWN0bHkgdG8gdGhlIGZyZWUgZG9jdW1lbnQgaWYgcG9wdXBzIGFyZSB0dXJuZWQgb2ZmLlxyXG5Db250ZW50RGVsZWdhdGUucHJvdG90eXBlLmhhbmRsZVJlY2FwTGlua0NsaWNrID0gZnVuY3Rpb24gKHdpbmRvd19vYmosIHVybCkge1xyXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnb3B0aW9ucycsIGZ1bmN0aW9uIChpdGVtcykge1xyXG4gICAgaWYgKCFpdGVtcy5vcHRpb25zLnJlY2FwX2xpbmtfcG9wdXBzKSB7XHJcbiAgICAgIHdpbmRvd19vYmoubG9jYXRpb24gPSB1cmw7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoJzxkaXYgaWQ9XCJyZWNhcC1zaGFkZVwiLz4nKS5hcHBlbmRUbygkKCdib2R5JykpO1xyXG4gICAgJCgnPGRpdiBjbGFzcz1cInJlY2FwLXBvcHVwXCIvPicpLmFwcGVuZChcclxuICAgICAgJCgnPGEvPicsIHtcclxuICAgICAgICAnY2xhc3MnOiAncmVjYXAtY2xvc2UtbGluaycsXHJcbiAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgIG9uY2xpY2s6ICd2YXIgZCA9IGRvY3VtZW50OyBkLmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5wYXJlbnROb2RlKTsgJyArXHJcbiAgICAgICAgICAnZC5ib2R5LnJlbW92ZUNoaWxkKGQuZ2V0RWxlbWVudEJ5SWQoXCJyZWNhcC1zaGFkZVwiKSk7IHJldHVybiBmYWxzZSdcclxuICAgICAgfSkuYXBwZW5kKFxyXG4gICAgICAgICdcXHUwMGQ3J1xyXG4gICAgICApXHJcbiAgICApLmFwcGVuZChcclxuICAgICAgJCgnPGEvPicsIHtcclxuICAgICAgICBocmVmOiB1cmwsXHJcbiAgICAgICAgb25jbGljazogJ3ZhciBkID0gZG9jdW1lbnQ7IGQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnBhcmVudE5vZGUpOyAnICtcclxuICAgICAgICAgICdkLmJvZHkucmVtb3ZlQ2hpbGQoZC5nZXRFbGVtZW50QnlJZChcInJlY2FwLXNoYWRlXCIpKSdcclxuICAgICAgfSkuYXBwZW5kKFxyXG4gICAgICAgICcgR2V0IHRoaXMgZG9jdW1lbnQgZm9yIGZyZWUgZnJvbSBSRUNBUC4nXHJcbiAgICAgIClcclxuICAgICkuYXBwZW5kKFxyXG4gICAgICAkKCc8YnI+PGJyPjxzbWFsbD5Ob3RlIHRoYXQgYXJjaGl2ZWQgZG9jdW1lbnRzIG1heSBiZSBvdXQgb2YgZGF0ZS4gJyArXHJcbiAgICAgICAgJ1JFQ0FQIGlzIG5vdCBhZmZpbGlhdGVkIHdpdGggdGhlIFUuUy4gQ291cnRzLiBUaGUgZG9jdW1lbnRzICcgK1xyXG4gICAgICAgICdpdCBtYWtlcyBhdmFpbGFibGUgYXJlIHZvbHVudGFyaWx5IHVwbG9hZGVkIGJ5IFBBQ0VSIHVzZXJzLiAnICtcclxuICAgICAgICAnUkVDQVAgY2Fubm90IGd1YXJhbnRlZSB0aGUgYXV0aGVudGljaXR5IG9mIGRvY3VtZW50cyBiZWNhdXNlIHRoZSAnICtcclxuICAgICAgICAnY291cnRzIHByb3ZpZGUgbm8gZWZmZWN0aXZlIGRvY3VtZW50IGF1dGhlbnRpY2F0aW9uIHN5c3RlbS48L3NtYWxsPicpXHJcbiAgICApLmFwcGVuZFRvKCQoJ2JvZHknKSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLy8gQ2hlY2sgZXZlcnkgbGluayBpbiB0aGUgZG9jdW1lbnQgdG8gc2VlIGlmIHRoZXJlIGlzIGEgZnJlZSBSRUNBUCBkb2N1bWVudFxyXG4vLyBhdmFpbGFibGUuIElmIHRoZXJlIGlzLCBwdXQgYSBsaW5rIHdpdGggYSBSRUNBUCBpY29uLlxyXG5Db250ZW50RGVsZWdhdGUucHJvdG90eXBlLmF0dGFjaFJlY2FwTGlua1RvRWxpZ2libGVEb2NzID0gZnVuY3Rpb24gKCkge1xyXG4gIGxldCBsaW5rQ291bnQgPSB0aGlzLnBhY2VyX2RvY19pZHMubGVuZ3RoO1xyXG4gIGNvbnNvbGUuaW5mbyhgUkVDQVA6IEF0dGFjaGluZyBsaW5rcyB0byBhbGwgZWxpZ2libGUgZG9jdW1lbnRzICgke2xpbmtDb3VudH0gZm91bmQpYCk7XHJcbiAgaWYgKGxpbmtDb3VudCA9PT0gMCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gQXNrIHRoZSBzZXJ2ZXIgd2hldGhlciBhbnkgb2YgdGhlc2UgZG9jdW1lbnRzIGFyZSBhdmFpbGFibGUgZnJvbSBSRUNBUC5cclxuICB0aGlzLnJlY2FwLmdldEF2YWlsYWJpbGl0eUZvckRvY3VtZW50cyh0aGlzLnBhY2VyX2RvY19pZHMsIHRoaXMuY291cnQsXHJcbiAgICAkLnByb3h5KGZ1bmN0aW9uIChhcGlfcmVzdWx0cykge1xyXG4gICAgICBjb25zb2xlLmluZm8oYFJFQ0FQOiBHb3QgcmVzdWx0cyBmcm9tIEFQSS4gUnVubmluZyBjYWxsYmFjayBvbiBBUEkgcmVzdWx0cyB0byBgICtcclxuICAgICAgICBgYXR0YWNoIGxpbmtzIGFuZCBpY29ucyB3aGVyZSBhcHByb3ByaWF0ZS5gKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHBhY2VyX2RvY19pZCA9ICQodGhpcy5saW5rc1tpXSkuZGF0YSgncGFjZXJfZG9jX2lkJyk7XHJcbiAgICAgICAgaWYgKCFwYWNlcl9kb2NfaWQpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXBpX3Jlc3VsdHMucmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgcmV0dXJuIG9iai5wYWNlcl9kb2NfaWQgPT09IHBhY2VyX2RvY19pZDtcclxuICAgICAgICB9KVswXTtcclxuICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBocmVmID0gYGh0dHBzOi8vd3d3LmNvdXJ0bGlzdGVuZXIuY29tLyR7cmVzdWx0LmZpbGVwYXRoX2xvY2FsfWA7XHJcbiAgICAgICAgbGV0IHJlY2FwX2xpbmsgPSAkKCc8YS8+Jywge1xyXG4gICAgICAgICAgJ2NsYXNzJzogJ3JlY2FwLWlubGluZScsXHJcbiAgICAgICAgICAndGl0bGUnOiAnQXZhaWxhYmxlIGZvciBmcmVlIGZyb20gdGhlIFJFQ0FQIEFyY2hpdmUuJyxcclxuICAgICAgICAgICdocmVmJzogaHJlZlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlY2FwX2xpbmsuY2xpY2soJC5wcm94eSh0aGlzLmhhbmRsZVJlY2FwTGlua0NsaWNrLCB0aGlzLCB3aW5kb3csIGhyZWYpKTtcclxuICAgICAgICByZWNhcF9saW5rLmFwcGVuZCgkKCc8aW1nLz4nKS5hdHRyKHtcclxuICAgICAgICAgIHNyYzogY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvaWNvbi0xNi5wbmcnKVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZWNhcF9saW5rLmluc2VydEFmdGVyKHRoaXMubGlua3NbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzKSk7XHJcbn07XHJcblxyXG4vLyBUT0RPOiBDb25maXJtIHRoYXQgemlwIGRvd25sb2FkaW5nIGlzIGNvbnNpc3RlbnQgYWNyb3NzIGp1cmlzZGljdGlvbnNcclxuQ29udGVudERlbGVnYXRlLnByb3RvdHlwZS5vbkRvd25sb2FkQWxsU3VibWl0ID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgLy8gaGVscGVyIGZ1bmN0aW9uIC0gZXh0cmFjdCB0aGUgemlwIGJ5IGNyZWF0aW5nIGh0bWwgYW5kIHF1ZXJ5aW5nIHRoZSBmcmFtZVxyXG4gIGNvbnN0IGV4dHJhY3RVcmwgPSAoaHRtbCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIpO1xyXG4gICAgcGFnZS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgY29uc3QgZnJhbWVzID0gcGFnZS5xdWVyeVNlbGVjdG9yQWxsKFwiaWZyYW1lXCIpO1xyXG4gICAgcmV0dXJuIGZyYW1lc1swXS5zcmM7XHJcbiAgfTtcclxuXHJcbiAgLy8gaGVscGVyIGZ1bmN0aW9uIC0gY29udmVydCBzdHJpbmcgdG8gaHRtbCBkb2N1bWVudFxyXG4gIGNvbnN0IHN0cmluZ1RvRG9jQm9keSA9IChzdHIpID0+IHtcclxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgIGNvbnN0IG5ld0RvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XHJcbiAgICByZXR1cm4gbmV3RG9jLmJvZHk7XHJcbiAgfTtcclxuXHJcbiAgLy8gaGVscGVyIGZ1bmN0aW9uIC0gcmV0dXJucyBmaWxlbmFtZSBiYXNlZCBvbiB1c2VyIHByZWZlcmVuY2VzXHJcbiAgY29uc3QgZ2VuZXJhdGVGaWxlTmFtZSA9IChvcHRpb25zLCBwYWNlckNhc2VJZCkgPT4ge1xyXG4gICAgaWYgKG9wdGlvbnMuaWFfc3R5bGVfZmlsZW5hbWVzKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgJ2dvdicsXHJcbiAgICAgICAgJ3VzY291cnRzJyxcclxuICAgICAgICB0aGlzLmNvdXJ0LFxyXG4gICAgICAgIChwYWNlckNhc2VJZCB8fCAndW5rbm93bi1jYXNlLWlkJylcclxuICAgICAgXS5qb2luKCcuJykuY29uY2F0KCcuemlwJyk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMubGF3eWVyX3N0eWxlX2ZpbGVuYW1lcykge1xyXG4gICAgICBjb25zdCBmaXJzdFRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RhYmxlJylbMF07XHJcbiAgICAgIGNvbnN0IGZpcnN0VGFibGVSb3dzID0gZmlyc3RUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0cicpO1xyXG4gICAgICAvLyA0dGggZnJvbSBib3R0b21cclxuICAgICAgY29uc3QgbWF0Y2hlZFJvdyA9IGZpcnN0VGFibGVSb3dzW2ZpcnN0VGFibGVSb3dzLmxlbmd0aCAtIDRdO1xyXG4gICAgICBjb25zdCBjZWxscyA9IG1hdGNoZWRSb3cucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcclxuICAgICAgY29uc3QgZG9jdW1lbnRfbnVtYmVyID0gY2VsbHNbMF0uaW5uZXJUZXh0Lm1hdGNoKC9cXGQrKD89XFwtKS8pWzBdO1xyXG4gICAgICBjb25zdCBkb2NrZXRfbnVtYmVyID0gY2VsbHNbMV0uaW5uZXJUZXh0O1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIFBBQ0VSLkNPVVJUX0FCQlJFVlNbdGhpcy5jb3VydF0sXHJcbiAgICAgICAgZG9ja2V0X251bWJlcixcclxuICAgICAgICBkb2N1bWVudF9udW1iZXIsXHJcbiAgICAgIF0uam9pbignXycpLmNvbmNhdCgnLnppcCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIE1ha2UgdGhlIEJhY2sgYnV0dG9uIHJlZGlzcGxheSB0aGUgcHJldmlvdXMgcGFnZS5cclxuICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnN0YXRlLmNvbnRlbnQpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9IGV2ZW50LnN0YXRlLmNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfTtcclxuICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGNvbnRlbnQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgfSwgJycpO1xyXG4gIC8vIHRlbGwgdGhlIHVzZXIgdG8gd2FpdFxyXG4gICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcIndhaXRcIik7XHJcblxyXG4gIC8vIGluIEZpcmVmb3gsIHVzZSBjb250ZW50LmZldGNoIGZvciBjb250ZW50LXNwZWNpZmljIGZldGNoIHJlcXVlc3RzXHJcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Nb3ppbGxhL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9Db250ZW50X3NjcmlwdHMjWEhSX2FuZF9GZXRjaFxyXG4gIGNvbnN0IGJyb3dzZXJTcGVjaWZpY0ZldGNoID0gKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPCAwKVxyXG4gICAgPyBjb250ZW50LmZldGNoXHJcbiAgICA6IHdpbmRvdy5mZXRjaDtcclxuXHJcbiAgLy8gZmV0Y2ggdGhlIGh0bWwgcGFnZSB3aGljaCBjb250YWlucyB0aGUgPGlmcmFtZT4gbGluayB0byB0aGUgemlwIGRvY3VtZW50LlxyXG4gIGNvbnN0IGh0bWxQYWdlID0gYXdhaXQgYnJvd3NlclNwZWNpZmljRmV0Y2goZXZlbnQuZGF0YS5pZCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSk7XHJcbiAgY29uc29sZS5sb2coXCJSRUNBUDogU3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCB6aXAgZmlsZSByZXF1ZXN0XCIpO1xyXG4gIGNvbnN0IHppcFVybCA9IGV4dHJhY3RVcmwoaHRtbFBhZ2UpO1xyXG4gIC8vZG93bmxvYWQgemlwIGZpbGUgYW5kIHNhdmUgaXQgdG8gY2hyb21lIHN0b3JhZ2VcclxuICBjb25zdCBibG9iID0gYXdhaXQgZmV0Y2goemlwVXJsKS50aGVuKHJlcyA9PiByZXMuYmxvYigpKTtcclxuICBjb25zdCBkYXRhVXJsID0gYXdhaXQgYmxvYlRvRGF0YVVSTChibG9iKTtcclxuICBjb25zb2xlLmluZm8oJ1JFQ0FQOiBEb3dubG9hZGVkIHppcCBmaWxlJyk7XHJcbiAgLy8gc2F2ZSBibG9iIGluIHN0b3JhZ2UgdW5kZXIgdGFiSWRcclxuICAvLyB3ZSBzdG9yZSBpdCBhcyBhbiBhcnJheSB0byBjaHVuayB0aGUgbWVzc2FnZVxyXG4gIGF3YWl0IHVwZGF0ZVRhYlN0b3JhZ2Uoe1xyXG4gICAgW3RoaXMudGFiSWRdOiB7IFsnemlwX2Jsb2InXTogZGF0YVVybCB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNyZWF0ZSB0aGUgYmxvYiBhbmQgaW5qZWN0IGl0IGludG8gdGhlIHBhZ2VcclxuICBjb25zdCBibG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICBjb25zdCBwYWNlckNhc2VJZCA9IChldmVudC5kYXRhLmlkKVxyXG4gICAgLm1hdGNoKC9jYXNlaWRcXD1cXGQqLylbMF1cclxuICAgIC5yZXBsYWNlKC9jYXNlaWRcXD0vLCAnJyk7XHJcblxyXG4gIC8vIGxvYWQgb3B0aW9uc1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBhd2FpdCBnZXRJdGVtc0Zyb21TdG9yYWdlKCdvcHRpb25zJyk7XHJcbiAgLy8gZ2VuZXJhdGUgdGhlIGZpbGVuYW1lXHJcbiAgY29uc3QgZmlsZW5hbWUgPSBnZW5lcmF0ZUZpbGVOYW1lKG9wdGlvbnMsIHBhY2VyQ2FzZUlkKTtcclxuXHJcbiAgaWYgKG9wdGlvbnNbJ3JlY2FwX2VuYWJsZWQnXSAmJiAhdGhpcy5yZXN0cmljdGVkKSB7XHJcbiAgICB0aGlzLnJlY2FwLnVwbG9hZFppcEZpbGUoXHJcbiAgICAgIHRoaXMuY291cnQsIC8vIHN0cmluZ1xyXG4gICAgICBwYWNlckNhc2VJZCwgLy8gc3RyaW5nXHJcbiAgICAgIChvaykgPT4geyAvLyBjYWxsYmFja1xyXG4gICAgICAgIGlmIChvaykge1xyXG4gICAgICAgICAgLy8gc2hvdyBub3RpZmllclxyXG4gICAgICAgICAgdGhpcy5ub3RpZmllci5zaG93VXBsb2FkKCdaaXAgdXBsb2FkZWQgdG8gdGhlIHB1YmxpYyBSRUNBUCBBcmNoaXZlJywgKCkgPT4geyB9KTtcclxuICAgICAgICAgIC8vIGNvbnZlcnQgaHRtbFBhZ2UgdG8gZG9jdW1lbnRcclxuICAgICAgICAgIGNvbnN0IGxpbmsgPVxyXG4gICAgICAgICAgICBgPGEgaWQ9XCJyZWNhcC1kb3dubG9hZFwiIGhyZWY9JHtibG9iVXJsfSBkb3dubG9hZD0ke2ZpbGVuYW1lfSB3aWR0aD1cIjBcIiBoZWlnaHQ9XCIwXCIvPmA7XHJcbiAgICAgICAgICBjb25zdCBodG1sQm9keSA9IHN0cmluZ1RvRG9jQm9keShodG1sUGFnZSk7XHJcbiAgICAgICAgICBjb25zdCBmcmFtZSA9IGh0bWxCb2R5LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xyXG4gICAgICAgICAgZnJhbWUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIGxpbmspO1xyXG4gICAgICAgICAgZnJhbWUuc3JjID0gXCJcIjtcclxuICAgICAgICAgIGZyYW1lLm9ubG9hZCA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNhcC1kb3dubG9hZCcpLmNsaWNrKCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5ID0gaHRtbEJvZHk7XHJcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7IGNvbnRlbnQ6IGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MIH0sICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gU2FtZSBhcyBoYW5kbGVTaW5nbGVEb2N1bWVudFBhZ2VWaWV3LCBidXQgZm9yIHppcCBmaWxlc1xyXG5Db250ZW50RGVsZWdhdGUucHJvdG90eXBlLmhhbmRsZVppcEZpbGVQYWdlVmlldyA9IGZ1bmN0aW9uICgpIHtcclxuICAvLyByZXR1cm4gaWYgbm90IHRoZSBkb3dubG9hZCBhbGwgcGFnZVxyXG4gIGlmICghUEFDRVIuaXNEb3dubG9hZEFsbERvY3VtZW50c1BhZ2UodGhpcy51cmwsIGRvY3VtZW50KSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gcmV0dXJuIGlmIG9uIHRoZSBhcHBlbGxhdGUgY291cnRzXHJcbiAgaWYgKFBBQ0VSLmlzQXBwZWxsYXRlQ291cnQodGhpcy5jb3VydCkpIHtcclxuICAgIGRlYnVnKDQsICdObyBpbnRlcnBvc2l0aW9uIGZvciBhcHBlbGxhdGUgZG93bmxvYWRzIHlldCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gZXh0cmFjdCB0aGUgdXJsIGZyb20gdGhlIG9uY2xpY2sgYXR0cmlidXRlIGZyb20gb25lIG9mIHRoZSB0d29cclxuICAvLyBcIkRvd25sb2FkIERvY3VtZW50c1wiIGJ1dHRvbnNcclxuICBjb25zdCBpbnB1dHMgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JyldO1xyXG4gIGNvbnN0IHRhcmdldElucHV0cyA9IGlucHV0cy5maWx0ZXIoXHJcbiAgICBpbnB1dCA9PiBpbnB1dC50eXBlID09PSAnYnV0dG9uJyAmJiBpbnB1dC52YWx1ZSA9PT0gJ0Rvd25sb2FkIERvY3VtZW50cydcclxuICApO1xyXG4gIGNvbnN0IHVybCA9IHRhcmdldElucHV0c1swXVxyXG4gICAgLmdldEF0dHJpYnV0ZSgnb25jbGljaycpXHJcbiAgICAucmVwbGFjZSgvcC4qXFwvLywgJycpIC8vIHJlbW92ZSBwYXJlbnQubG9jYXRpb249Jy9jZ2ktYmluL1xyXG4gICAgLnJlcGxhY2UoL1xcJyg/PSQpLywgJycpOyAvLyByZW1vdmUgZW5kcXVvdGVcclxuXHJcbiAgY29uc3QgaXNBcHBlbmRpeFBhZ2UgPSB1cmwubWF0Y2goL2NyZWF0ZVxcX2FwcGVuZGl4XFw9MS8pO1xyXG4gIGlmIChpc0FwcGVuZGl4UGFnZSkge1xyXG4gICAgZGVidWcoNCwgJ05vIGludGVycG9zaXRpb24gZm9yIGFwcGVuZGl4IHBhZ2UgZG93bmxvYWRzIHlldCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gaW1wZXJhdGl2ZWx5IG1hbmlwdWxhdGUgaHRlIGRvbSBlbGVtZW50cyB3aXRob3V0IGluamVjdGluZyBhIHNjcmlwdFxyXG4gIGNvbnN0IGZvcm1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKV07XHJcbiAgZm9ybXMubWFwKGZvcm0gPT4ge1xyXG4gICAgZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGlvbicpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ29uY2xpY2snKTtcclxuICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGZvcm0uaGlkZGVuID0gdHJ1ZTtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnRG93bmxvYWQgRG9jdW1lbnRzJztcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHdpbmRvdy5wb3N0TWVzc2FnZSh7IGlkOiB1cmwgfSkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZm9ybS5wYXJlbnROb2RlO1xyXG4gICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGl2LCBmb3JtKTtcclxuICB9KTtcclxuICAvLyBXaGVuIHdlIHJlY2VpdmUgdGhlIG1lc3NhZ2UgZnJvbSB0aGUgYWJvdmUgc3VibWl0IG1ldGhvZCwgc3VibWl0IHRoZSBmb3JtXHJcbiAgLy8gdmlhIGZldGNoIHNvIHdlIGNhbiBnZXQgdGhlIGRvY3VtZW50IGJlZm9yZSB0aGUgYnJvd3NlciBkb2VzLlxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ21lc3NhZ2UnLFxyXG4gICAgdGhpcy5vbkRvd25sb2FkQWxsU3VibWl0LmJpbmQodGhpcyksXHJcbiAgKTtcclxufTtcclxuXHJcbkNvbnRlbnREZWxlZ2F0ZS5wcm90b3R5cGUuaGFuZGxlQ2xhaW1zUGFnZVZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gcmV0dXJuIGlmIG5vdCBhIGNsYWltcyByZWdpc3RlciBwYWdlXHJcbiAgaWYgKCFQQUNFUi5pc0NsYWltc1JlZ2lzdGVyUGFnZSh0aGlzLnVybCwgZG9jdW1lbnQpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYWNlckNhc2VJZCA9IHRoaXMucGFjZXJfY2FzZV9pZFxyXG4gICAgPyB0aGlzLnBhY2VyX2Nhc2VfaWRcclxuICAgIDogUEFDRVIuZ2V0Q2FzZUlkRnJvbUNsYWltc1BhZ2UoZG9jdW1lbnQpO1xyXG5cclxuICAvLyByZW5kZXIgdGhlIHBhZ2UgYXMgYSBzdHJpbmcgYW5kIHVwbG9hZCBpdCB0byByZWNhcFxyXG4gIGNvbnN0IGNsYWltc1BhZ2VIdG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTDtcclxuICB0aGlzLnJlY2FwLnVwbG9hZENsYWltc1JlZ2lzdGVyKFxyXG4gICAgdGhpcy5jb3VydCxcclxuICAgIHBhY2VyQ2FzZUlkLFxyXG4gICAgY2xhaW1zUGFnZUh0bWwsXHJcbiAgICAob2spID0+IHsgLy8gY2FsbGJhY2sgLSBkaXNwYXRjaCB0aGUgbm90aWZpZXIgaWYgdXBsb2FkIGlzIG9rXHJcbiAgICAgIGlmIChvaykge1xyXG4gICAgICAgIHRoaXMubm90aWZpZXIuc2hvd1VwbG9hZCgnQ2xhaW1zIHBhZ2UgdXBsb2FkZWQgdG8gdGhlIHB1YmxpYyBSRUNBUCBBcmNoaXZlJywgKCkgPT4geyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiUGFnZSBub3QgdXBsb2FkZWQgdG8gdGhlIHB1YmxpYyBSRUNBUCBhcmNoaXZlLlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJjb250ZW50X2RlbGVnYXRlLmpzLm1hcCJ9
