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
})({"aSSh6":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "cbd798d872052860";
module.bundle.HMR_BUNDLE_ID = "badde228980a52c6";
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

},{}],"6Vi4X":[function(require,module,exports) {
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

},{}]},["aSSh6","6Vi4X"], "6Vi4X", "parcelRequire9981")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBVTtRQUNsQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBSyxNQUFFLENBQWM7UUFDckIsQ0FBSyxNQUFFLENBQVE7UUFDZixDQUFNLE9BQUUsQ0FBZTtRQUN2QixDQUFNLE9BQUUsQ0FBUztRQUNqQixDQUFNLE9BQUUsQ0FBZTtRQUN2QixDQUFNLE9BQUUsQ0FBUztRQUNqQixDQUFLLE1BQUUsQ0FBdUI7UUFDOUIsQ0FBSyxNQUFFLENBQWlCO1FBQ3hCLENBQUssTUFBRSxDQUFhO1FBQ3BCLENBQUssTUFBRSxDQUFPO1FBQ2QsQ0FBTSxPQUFFLENBQWlCO1FBQ3pCLENBQU0sT0FBRSxDQUFXO1FBQ25CLENBQU0sT0FBRSxDQUFpQjtRQUN6QixDQUFNLE9BQUUsQ0FBVztRQUNuQixDQUFNLE9BQUUsQ0FBZ0I7UUFDeEIsQ0FBTSxPQUFFLENBQVU7UUFDbEIsQ0FBTSxPQUFFLENBQWU7UUFDdkIsQ0FBTSxPQUFFLENBQVM7UUFDakIsQ0FBTSxPQUFFLENBQWlCO1FBQ3pCLENBQU0sT0FBRSxDQUFXO1FBQ25CLENBQU0sT0FBRSxDQUFpQjtRQUN6QixDQUFNLE9BQUUsQ0FBVztRQUNuQixDQUFLLE1BQUUsQ0FBYztRQUNyQixDQUFLLE1BQUUsQ0FBUTtJQUNqQixDQUFDO0lBRUQsRUFBZ0QsQUFBaEQsOENBQWdEO0lBQ2hELGdCQUFnQixFQUFFLENBQUM7UUFBQSxDQUFLO1FBQUUsQ0FBSztRQUFFLENBQUs7UUFBRSxDQUFLO1FBQUUsQ0FBSztRQUFFLENBQUs7UUFBRSxDQUFLO1FBQUUsQ0FBSztRQUFFLENBQUs7UUFBRSxDQUFNO1FBQUUsQ0FBTTtRQUFFLENBQU07UUFBRSxDQUFNO0lBQUEsQ0FBQztBQUNuSCxDQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLTRkOGY4ZmQ1MDcyNDFjNTAuanMiLCJzcmMvcGFjZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSBudWxsO3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiY2JkNzk4ZDg3MjA1Mjg2MFwiO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiYmFkZGUyMjg5ODBhNTJjNlwiO1widXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQ7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qIGdsb2JhbCBITVJfSE9TVCwgSE1SX1BPUlQsIEhNUl9FTlZfSEFTSCwgSE1SX1NFQ1VSRSAqL1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiBtaXhlZDtcbiAgTW9kdWxlOiBhbnk7XG4gIHBhcmVudDogP1BhcmNlbFJlcXVpcmU7XG4gIGlzUGFyY2VsUmVxdWlyZTogdHJ1ZTtcbiAgbW9kdWxlczoge3xbc3RyaW5nXTogW0Z1bmN0aW9uLCB7fFtzdHJpbmddOiBzdHJpbmd8fV18fTtcbiAgSE1SX0JVTkRMRV9JRDogc3RyaW5nO1xuICByb290OiBQYXJjZWxSZXF1aXJlO1xufVxuaW50ZXJmYWNlIFBhcmNlbE1vZHVsZSB7XG4gIGhvdDoge3xcbiAgICBkYXRhOiBtaXhlZCxcbiAgICBhY2NlcHQoY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgZGlzcG9zZShjYjogKG1peGVkKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBhY2NlcHQoZGVwczogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gZGVjbGluZSgpOiB2b2lkLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IEFycmF5PChGdW5jdGlvbikgPT4gdm9pZD4sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IEFycmF5PChtaXhlZCkgPT4gdm9pZD4sXG4gIHx9O1xufVxuZGVjbGFyZSB2YXIgbW9kdWxlOiB7YnVuZGxlOiBQYXJjZWxSZXF1aXJlLCAuLi59O1xuZGVjbGFyZSB2YXIgSE1SX0hPU1Q6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9QT1JUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfRU5WX0hBU0g6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9TRUNVUkU6IGJvb2xlYW47XG4qL1xudmFyIE9WRVJMQVlfSUQgPSAnX19wYXJjZWxfX2Vycm9yX19vdmVybGF5X18nO1xudmFyIE9sZE1vZHVsZSA9IG1vZHVsZS5idW5kbGUuTW9kdWxlO1xuXG5mdW5jdGlvbiBNb2R1bGUobW9kdWxlTmFtZSkge1xuICBPbGRNb2R1bGUuY2FsbCh0aGlzLCBtb2R1bGVOYW1lKTtcbiAgdGhpcy5ob3QgPSB7XG4gICAgZGF0YTogbW9kdWxlLmJ1bmRsZS5ob3REYXRhLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IFtdLFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBbXSxcbiAgICBhY2NlcHQ6IGZ1bmN0aW9uIGFjY2VwdChmbikge1xuICAgICAgdGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2goZm4gfHwgZnVuY3Rpb24gKCkge30pO1xuICAgIH0sXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gZGlzcG9zZShmbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gIH07XG4gIG1vZHVsZS5idW5kbGUuaG90RGF0YSA9IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmJ1bmRsZS5Nb2R1bGUgPSBNb2R1bGU7XG52YXIgY2hlY2tlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhY2NlcHRlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhc3NldHNUb0FjY2VwdFxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xuO1xuXG5mdW5jdGlvbiBnZXRIb3N0bmFtZSgpIHtcbiAgcmV0dXJuIEhNUl9IT1NUIHx8IChsb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwJykgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgcmV0dXJuIEhNUl9QT1JUIHx8IGxvY2F0aW9uLnBvcnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuXG52YXIgcGFyZW50ID0gbW9kdWxlLmJ1bmRsZS5wYXJlbnQ7XG5cbmlmICgoIXBhcmVudCB8fCAhcGFyZW50LmlzUGFyY2VsUmVxdWlyZSkgJiYgdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgdmFyIHBvcnQgPSBnZXRQb3J0KCk7XG4gIHZhciBwcm90b2NvbCA9IEhNUl9TRUNVUkUgfHwgbG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHBzOicgJiYgIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QoaG9zdG5hbWUpID8gJ3dzcycgOiAnd3MnO1xuICB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyk7IC8vICRGbG93Rml4TWVcblxuICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnRcbiAgLyo6IHtkYXRhOiBzdHJpbmcsIC4uLn0gKi9cbiAgKSB7XG4gICAgY2hlY2tlZEFzc2V0cyA9IHt9XG4gICAgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuICAgIDtcbiAgICBhY2NlcHRlZEFzc2V0cyA9IHt9XG4gICAgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuICAgIDtcbiAgICBhc3NldHNUb0FjY2VwdCA9IFtdO1xuICAgIHZhciBkYXRhXG4gICAgLyo6IEhNUk1lc3NhZ2UgKi9cbiAgICA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAndXBkYXRlJykge1xuICAgICAgLy8gUmVtb3ZlIGVycm9yIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFzc2V0cyA9IGRhdGEuYXNzZXRzLmZpbHRlcihmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LmVudkhhc2ggPT09IEhNUl9FTlZfSEFTSDtcbiAgICAgIH0pOyAvLyBIYW5kbGUgSE1SIFVwZGF0ZVxuXG4gICAgICB2YXIgaGFuZGxlZCA9IGFzc2V0cy5ldmVyeShmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LnR5cGUgPT09ICdjc3MnIHx8IGFzc2V0LnR5cGUgPT09ICdqcycgJiYgaG1yQWNjZXB0Q2hlY2sobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldC5pZCwgYXNzZXQuZGVwc0J5QnVuZGxlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICAgIGhtckFwcGx5KG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0c1RvQWNjZXB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGlkID0gYXNzZXRzVG9BY2NlcHRbaV1bMV07XG5cbiAgICAgICAgICBpZiAoIWFjY2VwdGVkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yQWNjZXB0UnVuKGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgLy8gTG9nIHBhcmNlbCBlcnJvcnMgdG8gY29uc29sZVxuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGRhdGEuZGlhZ25vc3RpY3MuYW5zaSksXG4gICAgICAgICAgX3N0ZXA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGFuc2lEaWFnbm9zdGljID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgdmFyIHN0YWNrID0gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lID8gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lIDogYW5zaURpYWdub3N0aWMuc3RhY2s7XG4gICAgICAgICAgY29uc29sZS5lcnJvcign8J+aqCBbcGFyY2VsXTogJyArIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgKyAnXFxuJyArIHN0YWNrICsgJ1xcblxcbicgKyBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gUmVuZGVyIHRoZSBmYW5jeSBodG1sIG92ZXJsYXlcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICAgIHZhciBvdmVybGF5ID0gY3JlYXRlRXJyb3JPdmVybGF5KGRhdGEuZGlhZ25vc3RpY3MuaHRtbCk7IC8vICRGbG93Rml4TWVcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3cy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4gIH07XG5cbiAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLndhcm4oJ1twYXJjZWxdIPCfmqggQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciB3YXMgbG9zdCcpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcnJvck92ZXJsYXkoKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCk7XG5cbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdbcGFyY2VsXSDinKggRXJyb3IgcmVzb2x2ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFcnJvck92ZXJsYXkoZGlhZ25vc3RpY3MpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5pZCA9IE9WRVJMQVlfSUQ7XG4gIHZhciBlcnJvckhUTUwgPSAnPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6IGJsYWNrOyBvcGFjaXR5OiAwLjg1OyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiB3aGl0ZTsgcG9zaXRpb246IGZpeGVkOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyB0b3A6IDBweDsgbGVmdDogMHB4OyBwYWRkaW5nOiAzMHB4OyBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7IHotaW5kZXg6IDk5OTk7XCI+JztcblxuICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGRpYWdub3N0aWNzKSxcbiAgICAgIF9zdGVwMjtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgZGlhZ25vc3RpYyA9IF9zdGVwMi52YWx1ZTtcbiAgICAgIHZhciBzdGFjayA9IGRpYWdub3N0aWMuY29kZWZyYW1lID8gZGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBkaWFnbm9zdGljLnN0YWNrO1xuICAgICAgZXJyb3JIVE1MICs9IFwiXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcImZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDIwcHg7XFxcIj5cXG4gICAgICAgICAgXFx1RDgzRFxcdURFQTggXCIuY29uY2F0KGRpYWdub3N0aWMubWVzc2FnZSwgXCJcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHByZT5cIikuY29uY2F0KHN0YWNrLCBcIjwvcHJlPlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgXCIpLmNvbmNhdChkaWFnbm9zdGljLmhpbnRzLm1hcChmdW5jdGlvbiAoaGludCkge1xuICAgICAgICByZXR1cm4gJzxkaXY+8J+SoSAnICsgaGludCArICc8L2Rpdj4nO1xuICAgICAgfSkuam9pbignJyksIFwiXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFwiKS5jb25jYXQoZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uID8gXCI8ZGl2PlxcdUQ4M0RcXHVEQ0REIDxhIHN0eWxlPVxcXCJjb2xvcjogdmlvbGV0XFxcIiBocmVmPVxcXCJcIi5jb25jYXQoZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uLCBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkxlYXJuIG1vcmU8L2E+PC9kaXY+XCIpIDogJycsIFwiXFxuICAgICAgPC9kaXY+XFxuICAgIFwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvcjIuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvcjIuZigpO1xuICB9XG5cbiAgZXJyb3JIVE1MICs9ICc8L2Rpdj4nO1xuICBvdmVybGF5LmlubmVySFRNTCA9IGVycm9ySFRNTDtcbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudHMoYnVuZGxlLCBpZClcbi8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi9cbntcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaywgZCwgZGVwO1xuXG4gIGZvciAoayBpbiBtb2R1bGVzKSB7XG4gICAgZm9yIChkIGluIG1vZHVsZXNba11bMV0pIHtcbiAgICAgIGRlcCA9IG1vZHVsZXNba11bMV1bZF07XG5cbiAgICAgIGlmIChkZXAgPT09IGlkIHx8IEFycmF5LmlzQXJyYXkoZGVwKSAmJiBkZXBbZGVwLmxlbmd0aCAtIDFdID09PSBpZCkge1xuICAgICAgICBwYXJlbnRzLnB1c2goW2J1bmRsZSwga10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KGdldFBhcmVudHMoYnVuZGxlLnBhcmVudCwgaWQpKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmspIHtcbiAgdmFyIG5ld0xpbmsgPSBsaW5rLmNsb25lTm9kZSgpO1xuXG4gIG5ld0xpbmsub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsaW5rLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICB9XG4gIH07XG5cbiAgbmV3TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAvLyAkRmxvd0ZpeE1lXG4gIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykuc3BsaXQoJz8nKVswXSArICc/JyArIERhdGUubm93KCkpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgbGluay5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdMaW5rLCBsaW5rLm5leHRTaWJsaW5nKTtcbn1cblxudmFyIGNzc1RpbWVvdXQgPSBudWxsO1xuXG5mdW5jdGlvbiByZWxvYWRDU1MoKSB7XG4gIGlmIChjc3NUaW1lb3V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3NzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV1cbiAgICAgIHZhciBocmVmXG4gICAgICAvKjogc3RyaW5nICovXG4gICAgICA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgICAgIHZhciBzZXJ2ZWRGcm9tSE1SU2VydmVyID0gaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnID8gbmV3IFJlZ0V4cCgnXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTonICsgZ2V0UG9ydCgpKS50ZXN0KGhyZWYpIDogaHJlZi5pbmRleE9mKGhvc3RuYW1lICsgJzonICsgZ2V0UG9ydCgpKTtcbiAgICAgIHZhciBhYnNvbHV0ZSA9IC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoaHJlZikgJiYgaHJlZi5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pICE9PSAwICYmICFzZXJ2ZWRGcm9tSE1SU2VydmVyO1xuXG4gICAgICBpZiAoIWFic29sdXRlKSB7XG4gICAgICAgIHVwZGF0ZUxpbmsobGlua3NbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5cbmZ1bmN0aW9uIGhtckFwcGx5KGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgYXNzZXRcbi8qOiAgSE1SQXNzZXQgKi9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChhc3NldC50eXBlID09PSAnY3NzJykge1xuICAgIHJlbG9hZENTUygpO1xuICB9IGVsc2UgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICB2YXIgZGVwcyA9IGFzc2V0LmRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF07XG5cbiAgICBpZiAoZGVwcykge1xuICAgICAgdmFyIGZuID0gbmV3IEZ1bmN0aW9uKCdyZXF1aXJlJywgJ21vZHVsZScsICdleHBvcnRzJywgYXNzZXQub3V0cHV0KTtcbiAgICAgIG1vZHVsZXNbYXNzZXQuaWRdID0gW2ZuLCBkZXBzXTtcbiAgICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIGhtckFwcGx5KGJ1bmRsZS5wYXJlbnQsIGFzc2V0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2soYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuLCBkZXBzQnlCdW5kbGVcbi8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGVwc0J5QnVuZGxlICYmICFkZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdKSB7XG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgcm9vdCBidW5kbGUgd2l0aG91dCBmaW5kaW5nIHdoZXJlIHRoZSBhc3NldCBzaG91bGQgZ28sXG4gICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGRvLiBNYXJrIGFzIFwiYWNjZXB0ZWRcIiBzbyB3ZSBkb24ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgaWYgKCFidW5kbGUucGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2soYnVuZGxlLnBhcmVudCwgaWQsIGRlcHNCeUJ1bmRsZSk7XG4gIH1cblxuICBpZiAoY2hlY2tlZEFzc2V0c1tpZF0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpOyAvLyBJZiBubyBwYXJlbnRzLCB0aGUgYXNzZXQgaXMgbmV3LiBQcmV2ZW50IHJlbG9hZGluZyB0aGUgcGFnZS5cblxuICBpZiAoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gcGFyZW50cy5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKHZbMF0sIHZbMV0sIG51bGwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0UnVuKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbikge1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlLmhvdERhdGEgPSB7fTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QpIHtcbiAgICBjYWNoZWQuaG90LmRhdGEgPSBidW5kbGUuaG90RGF0YTtcbiAgfVxuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIGNiKGJ1bmRsZS5ob3REYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUoaWQpO1xuICBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICB2YXIgYXNzZXRzVG9BbHNvQWNjZXB0ID0gY2IoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzZXRzVG9BbHNvQWNjZXB0ICYmIGFzc2V0c1RvQWNjZXB0Lmxlbmd0aCkge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lW21ldGhvZC11bmJpbmRpbmddXG4gICAgICAgIGFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoYXNzZXRzVG9BY2NlcHQsIGFzc2V0c1RvQWxzb0FjY2VwdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhY2NlcHRlZEFzc2V0c1tpZF0gPSB0cnVlO1xufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQWJzdHJhY3Rpb24gb2YgUEFDRVIgc2l0ZSBhbmQgc2VydmljZXMuICBUaGlzIGZpbGUgaXMgYnJvd3Nlci1pbmRlcGVuZGVudC5cclxuXHJcblxyXG4vLyBQQUNFUiB3ZWJzaXRlcyBhcmUgc3RydWN0dXJlZCBsaWtlIHRoaXM6XHJcbi8vXHJcbi8vIENhc2UgcXVlcnkgZm9ybVxyXG4vLyAgfFxyXG4vLyAgYC0tPiBNYWluIG1lbnUgZm9yIGEgcGFydGljdWxhciBjYXNlXHJcbi8vICAgICAgICB8XHJcbi8vICAgICAgICB8LS0+IERvY2tldCBxdWVyeSBmb3JtIC0tLS5cclxuLy8gICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4vLyAgICAgICAgYC0tPiBIaXN0b3J5IHF1ZXJ5IGZvcm0gLS18XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfC0tPiBQb3NzaWJsZSBpbnRlcnN0aXRpYWwgbGFyZ2UgZG9ja2V0IHBhZ2VcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLT4gRG9ja2V0LCBpLmUuIGxpc3Qgb2YgZG9jdW1lbnRzIG9yXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeSBSZXBvcnQgKCopXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfC0tPiBBdHRhY2htZW50IG1lbnUgcGFnZSBmb3IgYVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgIHBhcnRpY3VsYXIgZG9jdW1lbnQgKGFrYSBkb2MxXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgcGFnZS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLS0tLS0nLS0+IFNpbmdsZSBkb2N1bWVudCBwYWdlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICctLT4gUERGIHZpZXcgcGFnZSAoKilcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8LS0+IEFsbCBkb2N1bWVudHMgemlwIHBhZ2VcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tPiBaaXAgZmlsZSBkb3dubG9hZCBwYWdlICgqKVxyXG4vL1xyXG4vLyBQYWdlcyBtYXJrZWQgKCopIGNvc3QgbW9uZXkuICBUaGUgXCJTaW5nbGUgZG9jdW1lbnQgcGFnZVwiIGlzIGEgcGFnZSB0aGF0XHJcbi8vIHRlbGxzIHlvdSBob3cgbXVjaCBhIGRvY3VtZW50IHdpbGwgY29zdCBiZWZvcmUgeW91IGdldCB0byB2aWV3IHRoZSBQREYuXHJcblxyXG5sZXQgUEFDRVJfVE9fQ0xfSURTID0ge1xyXG4gICAgJ2F6Yic6ICdhcmInLCAgICAgICAgIC8vIEFyaXpvbmEgQmFua3J1cHRjeSBDb3VydFxyXG4gICAgJ2NvZmMnOiAndXNjZmMnLCAgICAgIC8vIENvdXJ0IG9mIEZlZGVyYWwgQ2xhaW1zXHJcbiAgICAnbmViJzogJ25lYnJhc2thYicsICAgLy8gTmVicmFza2EgQmFua3J1cHRjeVxyXG4gICAgJ255c2ItbWVnYSc6ICdueXNiJyAgIC8vIFJlbW92ZSB0aGUgbWVnYSB0aGluZ1xyXG59O1xyXG5cclxuLy8gUHVibGljIGNvbnN0YW50cyBhbmQgcHVyZSBmdW5jdGlvbnMuICBBcyB0aGVzZSBhcmUgcHVyZSwgdGhleSBjYW4gYmUgZnJlZWx5XHJcbi8vIGNhbGxlZCBmcm9tIGFueXdoZXJlOyBieSBjb252ZW50aW9uIHdlIHVzZSBhbiBBTExfQ0FQUyBuYW1lIHRvIGFsbHVkZSB0b1xyXG4vLyB0aGUgcHVyaXR5IChjb25zdC1uZXNzKSBvZiB0aGlzIG9iamVjdCdzIGNvbnRlbnRzLlxyXG5sZXQgUEFDRVIgPSB7XHJcbiAgLy8gUmV0dXJucyB0aGUgY291cnQgaWRlbnRpZmllciBmb3IgYSBnaXZlbiBVUkwsIG9yIG51bGwgaWYgbm90IGEgUEFDRVIgc2l0ZS5cclxuICBnZXRDb3VydEZyb21Vcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIGxldCBtYXRjaCA9ICh1cmwgfHwgJycpLnRvTG93ZXJDYXNlKCkubWF0Y2goXHJcbiAgICAgICAgL15cXHcrOlxcL1xcLyhlY2Z8cGFjZXIpXFwuKFxcdyspXFwudXNjb3VydHNcXC5nb3ZcXC8vKTtcclxuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzJdIDogbnVsbDtcclxuICB9LFxyXG5cclxuICBjb252ZXJ0VG9Db3VydExpc3RlbmVyQ291cnQ6IGZ1bmN0aW9uKHBhY2VyX2NvdXJ0X2lkKSB7XHJcbiAgICByZXR1cm4gUEFDRVJfVE9fQ0xfSURTW3BhY2VyX2NvdXJ0X2lkXSB8fCBwYWNlcl9jb3VydF9pZDtcclxuICB9LFxyXG5cclxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIFVSTCBsb29rcyBsaWtlIGEgbGluayB0byBhIFBBQ0VSIGRvY3VtZW50LlxyXG4gIC8vIEZvciBDTUVDRiBEaXN0cmljdDpcclxuICAvLyAgIGh0dHBzOi8vZWNmLmRjZC51c2NvdXJ0cy5nb3YvZG9jMS8wNDUwMzgzNzkyMFxyXG4gIC8vIEZvciBDTUVDRiBBcHBlbGxhdGU6XHJcbiAgLy8gICBodHRwczovL2VjZi5jYTIudXNjb3VydHMuZ292L2RvY3MxLzAwMjA1Njk1NzU4XHJcbiAgaXNEb2N1bWVudFVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIHVybC5tYXRjaCgvXFwvKD86ZG9jMXxkb2NzMSlcXC9cXGQrLykgfHxcclxuICAgICAgICB1cmwubWF0Y2goL1xcL2NnaS1iaW5cXC9zaG93X2RvYy8pIHx8XHJcbiAgICAgICAgdXJsLm1hdGNoKC9zZXJ2bGV0PVNob3dEb2MvKVxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChQQUNFUi5nZXRDb3VydEZyb21VcmwodXJsKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgZ2V0Q2FzZUlkRnJvbUNsYWltc1BhZ2U6IGZ1bmN0aW9uIChkb2N1bWVudCkge1xyXG4gICAgY29uc3QgbGlua3MgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXTtcclxuICAgIGNvbnN0IGRvY2tldExpbmsgPSBsaW5rcy5maW5kKGxpbmsgPT4gbGluay5ocmVmLm1hdGNoKC9Ea3RScHRcXC5wbC8pKTtcclxuICAgIGlmIChkb2NrZXRMaW5rKSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gZG9ja2V0TGluay5ocmVmLm1hdGNoKC9cXD9cXGQrLylcclxuICAgICAgcmV0dXJuIG1hdGNoWzBdLnNsaWNlKDEpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBVUkwgaXMgZm9yIGRvY2tldCBxdWVyeSBwYWdlLlxyXG4gIGlzRG9ja2V0UXVlcnlVcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIC8vIFRoZSBwYXJ0IGFmdGVyIHRoZSBcIj9cIiBpcyBhbGwgZGlnaXRzLlxyXG4gICAgcmV0dXJuICEhdXJsLm1hdGNoKC9cXC8oRGt0UnB0fEhpc3REb2NRcnkpXFwucGxcXD9cXGQrJC8pO1xyXG4gIH0sXHJcblxyXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gVVJMIGlzIGZvciBhIGRvY2tldCBkaXNwbGF5IHBhZ2UgKGkuZS4gdGhlIHBhZ2VcclxuICAvLyBhZnRlciBzdWJtaXR0aW5nIHRoZSBcIkRvY2tldCBTaGVldFwiIHF1ZXJ5IHBhZ2UpLlxyXG4gIGlzRG9ja2V0RGlzcGxheVVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgLy8gVGhlIHBhcnQgYWZ0ZXIgdGhlIFwiP1wiIGhhcyBoeXBoZW5zIGluIGl0LlxyXG4gICAgLy8gICBodHRwczovL2VjZi5kY2QudXNjb3VydHMuZ292L2NnaS1iaW4vRGt0UnB0LnBsPzU5MTAzMDA0MDQ3MzM5Mi1MXzFfMC0xXHJcbiAgICAvLyBBcHBlbGxhdGU6XHJcbiAgICAvLyAgIGh0dHBzOi8vZWNmLmNhMS51c2NvdXJ0cy5nb3Yvbi9iZWFtL3NlcnZsZXQvVHJhbnNwb3J0Um9vbT9zZXJ2bGV0PUNhc2VTdW1tYXJ5LmpzcCZjYXNlTnVtPTE2LTE1NjcmaW5jT3JpZ0RrdD1ZJmluY0RrdEVudHJpZXM9WVxyXG4gICAgaWYgKHVybC5tYXRjaCgvXFwvRGt0UnB0XFwucGxcXD9cXHcrLVtcXHctXSskLykpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcbiAgICAvLyBSZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggb24gQXBwZWxsYXRlIHBhZ2VzLCBhbmQgaWYgYVxyXG4gICAgLy8gc2VydmxldCBpcyBzcGVjaWZpZWQsIHRvIHJldHVybiBpdCBhcyBhIGNhcHR1cmVkIGdyb3VwLlxyXG4gICAgLy8gSWYgbm8gc2VydmxldCBpcyBzcGVjaWZpZWQsIGl0J3MgcmV0dXJuZWQgYXMgdW5kZWZpbmVkLCB3aGljaFxyXG4gICAgLy8gaXMgcHJvcGVybHkgaGFuZGxlZCBpbiB0aGUgc3dpdGNoIGJsb2NrLlxyXG4gICAgLy9cclxuICAgIC8vIFRoZSBSRSBpcyBhIGJpdCBjb21wbGljYXRlZCwgc28gbGV0J3MgYnJlYWsgaXQgZG93bjpcclxuICAgIC8vXHJcbiAgICAvLyAgIHNlcnZsZXRcXC9UcmFuc3BvcnRSb29tICMgMTogVGhlIHN0cmluZyBzZXJ2bGV0L1RyYW5zcG9ydFJvb21cclxuICAgIC8vICAgKD86XFw/c2VydmxldD0gICAgICAgICAgIyAyOiBBbiBPUFRJT05BTCwgVEVSTUlOQUwsIE5PTi1DQVBUVVJJTkdcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAjICAgIGdyb3VwIHRoYXQgY29udGFpbnMgP3NlcnZsZXQ9XHJcbiAgICAvLyAgICAgKFtePyZdKykgICAgICAgICAgICAgIyAzOiBBIENBUFRVUklORyBncm91cCBvZiA+MSBub24tPyBvciAmXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIyAgICBjaGFycywgYXMgdGhleSdkIGRlbGltaXQgYW5vdGhlclxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICMgICAgdXJsIHBhcmFtZXRlci5cclxuICAgIC8vICAgICAoPzpbXFwvJiM7XS4qKT8gICAgICAgIyA0OiBBbiBPUFRJT05BTCwgTk9OLUNBUFRVUklORyBncm91cCBvZiBhXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIyAgICAvLCAmLCAjLCBvciA7IGNoYXIsIGZvbGxvd2VkIGJ5XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIyAgICBhbnl0aGluZyBhdCBhbGwsIHdoaWNoIHdvdWxkIGJlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIyAgICBvbmUgb3IgbW9yZSB1cmwgcGFyYW1ldGVycy5cclxuICAgIC8vICAgKT8gICAgICAgICAgICAgICAgICAgICAjIENsb3Npbmcgb2YgKDIpIGFuZCBtYWtpbmcgaXQgb3B0aW9uYWxcclxuICAgIC8vICAgJCAgICAgICAgICAgICAgICAgICAgICAjIE1ha2luZyAoMikgdGVybWluYWxcclxuICAgIC8vXHJcbiAgICAvLyB4eHg6IFRoaXMgd291bGQgbWF0Y2ggb25cclxuICAgIC8vICAgaHR0cHM6Ly9lY2YuY2ExLnVzY291cnRzLmdvdi9uL2JlYW0vdW5kZXJzZXJ2bGV0L1xyXG4gICAgLy8geHh4OiBUaGlzIHByZXN1bWVzID9zZXJ2bGV0PSBpcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB3b3VsZCBmYWlsIG9uXHJcbiAgICAvLyAgIC9zZXJ2bGV0L1RyYW5zcG9ydFJvb20/Y2FzZUlkPTQ0MzgxJnNlcnZsZXQ9RG9ja2V0UmVwb3J0RmlsdGVyLmpzcFxyXG4gICAgLy8geHh4OiBUaGlzIHdpbGwgaWYgYSB0ZXJtaW5hbCBzbGFzaCBwcmVjZWRlcyB0aGUgcGFyYW1ldGVyIHNlY3Rpb246XHJcbiAgICAvLyAgIC9zZXJ2bGV0L1RyYW5zcG9ydFJvb20vPy4uLlxyXG4gICAgbGV0IHJlID0gL3NlcnZsZXRcXC9UcmFuc3BvcnRSb29tKD86XFw/c2VydmxldD0oW14/Jl0rKSg/OltcXC8mIztdLiopPyk/JC87XHJcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmUpO1xyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgIGxldCBzZXJ2bGV0ID0gbWF0Y2hbMV07XHJcbiAgICAgIGRlYnVnKDQsIGBJZGVudGlmaWVkIGFwcGVsbGF0ZSBzZXJ2bGV0ICR7c2VydmxldH0gYXQgJHt1cmx9YCk7XHJcblxyXG4gICAgICBzd2l0Y2goc2VydmxldCkge1xyXG4gICAgICAgIGNhc2UgJ0Nhc2VTdW1tYXJ5LmpzcCc6XHJcbiAgICAgICAgY2FzZSAnU2hvd1BhZ2UnOiAvLyB3aGF0IGlzIHRoaXM/XHJcbiAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGRlYnVnKDQsIGBBc3N1bWluZyBzZXJ2bGV0ICR7c2VydmxldH0gaXMgbm90IGEgZG9ja2V0LmApO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjYXNlICdDYXNlU2VhcmNoLmpzcCc6XHJcbiAgICAgICAgY2FzZSAnU2hvd0RvYyc6XHJcbiAgICAgICAgY2FzZSAnU2hvd0RvY011bHRpJzpcclxuICAgICAgICBjYXNlICdDYXNlU2VsZWN0aW9uVGFibGUnOlxyXG4gICAgICAgIGNhc2UgJ0NvdXJ0SW5mby5qc3AnOlxyXG4gICAgICAgIGNhc2UgJ0RvY2tldFJlcG9ydEZpbHRlci5qc3AnOlxyXG4gICAgICAgIGNhc2UgJ0ludmFsaWRVc2VyTG9naW4uanNwJzpcclxuICAgICAgICBjYXNlICdPcmRlckp1ZGdtZW50LmpzcCc6XHJcbiAgICAgICAgY2FzZSAnUEFDRVJDYWxlbmRhci5qc3AnOlxyXG4gICAgICAgIGNhc2UgJ1BhY2VySGVscC5qc3AnOlxyXG4gICAgICAgIGNhc2UgJ1BBQ0VST3Bpbmlvbi5qc3AnOlxyXG4gICAgICAgIGNhc2UgJ0xvZ2luJzpcclxuICAgICAgICBjYXNlICdrMmFmcmFtZS5qc3AnOiAvLyBhdHRvcm5leS9qYXZhP1xyXG4gICAgICAgIGNhc2UgJ2syYWpubHAuanNwJzpcclxuICAgICAgICBjYXNlICdSU1NHZW5lcmF0b3InOiAvLyBtYXliZSB3ZSBzaG91bGQgdXBsb2FkIHJzcz9cclxuICAgICAgICBjYXNlICdQYXltZW50SGlzdG9yeSc6XHJcbiAgICAgICAgY2FzZSAnQ2hhbmdlQ2xpZW50LmpzcCc6XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIFVSTCBpcyBmb3IgYSBkb2NrZXQgaGlzdG9yeSBkaXNwbGF5IHBhZ2UuXHJcbiAgaXNEb2NrZXRIaXN0b3J5RGlzcGxheVVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgcmV0dXJuICEhdXJsLm1hdGNoKC9cXC9IaXN0RG9jUXJ5XFwucGxcXD9cXHcrLVtcXHctXSskLyk7XHJcbiAgfSxcclxuXHJcbiAgLy8gUmV0dXJucyB0cnVlIGlmIHRoaXMgaXMgYSBcIkRvY3VtZW50IFNlbGVjdGlvbiBNZW51XCIgcGFnZSAoYSBsaXN0IG9mIHRoZVxyXG4gIC8vIGF0dGFjaG1lbnRzIGZvciBhIHBhcnRpY3VsYXIgZG9jdW1lbnQpLlxyXG4gIGlzQXR0YWNobWVudE1lbnVQYWdlOiBmdW5jdGlvbiAodXJsLCBkb2N1bWVudCkge1xyXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gICAgbGV0IHBhZ2VDaGVjayA9IFBBQ0VSLmlzRG9jdW1lbnRVcmwodXJsKSAmJlxyXG4gICAgICBpbnB1dHMubGVuZ3RoICYmXHJcbiAgICAgIGlucHV0c1tpbnB1dHMubGVuZ3RoIC0gMV0udmFsdWUgPT09ICdEb3dubG9hZCBBbGwnO1xyXG4gICAgcmV0dXJuICEhcGFnZUNoZWNrO1xyXG4gIH0sXHJcblxyXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGlzIGEgXCJEb3dubG9hZCBEb2N1bWVudHNcIiBwYWdlIChjb25maXJtYXRpb24gb2ZcclxuICAvLyBwcmljaW5nIGZvciBhbGwgZG9jdW1lbnRzIHRvIHJlY2VpdmUgYSB6aXAgZmlsZSB3aXRoIGFsbCBvZiB0aGVtKVxyXG4gIGlzRG93bmxvYWRBbGxEb2N1bWVudHNQYWdlOiBmdW5jdGlvbih1cmwsIGRvY3VtZW50KSB7XHJcbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKTtcclxuICAgIGxldCBwYWdlQ2hlY2sgPVxyXG4gICAgICAhIXVybC5tYXRjaCgvXFwvc2hvd19tdWx0aWRvY3NcXC5wbFxcPy8pICYmXHJcbiAgICAgIGlucHV0cy5sZW5ndGggJiZcclxuICAgICAgaW5wdXRzW2lucHV0cy5sZW5ndGgtMV0udmFsdWUgPT09IFwiRG93bmxvYWQgRG9jdW1lbnRzXCJcclxuICAgIHJldHVybiAhIXBhZ2VDaGVja1xyXG4gIH0sXHJcblxyXG4gIC8vIENsYWltcyBSZWdpc3RlciBQYWdlIGluY2x1ZGVzIGFuIGgyIHRhZyB3aXRoIHRoZSBjb3VydCBhbmQgd29yZHMgXCJDbGFpbXMgUmVnaXN0ZXJcIlxyXG4gIC8vIGV4YW1wbGVVcmw6IGh0dHBzOi8vZWNmLm55ZWIudXNjb3VydHMuZ292L2NnaS1iaW4vU2VhcmNoQ2xhaW1zLnBsPzYxMDU1MDE1MjU0NjUxNS1MXzFfMC0xXHJcbiAgLy8gZXhhbXBsZUhlYWRlcjogPGgyPkVhc3Rlcm4gRGlzdHJpY3Qgb2YgTmV3IFlvcms8YnI+Q2xhaW1zIFJlZ2lzdGVyIDwvaDI+XHJcblxyXG4gIGlzQ2xhaW1zUmVnaXN0ZXJQYWdlOiBmdW5jdGlvbiAodXJsLCBkb2N1bWVudCkge1xyXG4gICAgbGV0IGhlYWRsaW5lcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDInKV1cclxuICAgIGxldCBwYWdlQ2hlY2sgPVxyXG4gICAgICAhIXVybC5tYXRjaCgvXFwvU2VhcmNoQ2xhaW1zXFwucGxcXD8vKVxyXG4gICAgICAmJiBoZWFkbGluZXMubGVuZ3RoID4gMFxyXG4gICAgICAmJiBoZWFkbGluZXNbMF0uaW5uZXJUZXh0Lm1hdGNoKC9DbGFpbXMgUmVnaXN0ZXIvKVxyXG4gICAgcmV0dXJuIHBhZ2VDaGVja1xyXG4gIH0sXHJcblxyXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGlzIGEgcGFnZSBmb3IgZG93bmxvYWRpbmcgYSBzaW5nbGUgZG9jdW1lbnQuXHJcbiAgLy8gZGlzdHJpY3Q6XHJcbiAgLy8gICBodHRwczovL2VjZi5kY2QudXNjb3VydHMuZ292L2RvYzEvMDQ1MDM4Mzc5MjBcclxuICAvLyBhcHBlbGxhdGU6XHJcbiAgLy8gICBodHRwczovL2VjZi5jYTEudXNjb3VydHMuZ292L24vYmVhbS9zZXJ2bGV0L1RyYW5zcG9ydFJvb20/c2VydmxldD1TaG93RG9jJmRsc19pZD0wMDEwNzIxNTU2NSZjYXNlSWQ9NDExODImZGt0VHlwZT1ka3RQdWJsaWNcclxuICBpc1NpbmdsZURvY3VtZW50UGFnZTogZnVuY3Rpb24gKHVybCwgZG9jdW1lbnQpIHtcclxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuICAgIGxldCBsYXN0SW5wdXQgPSBpbnB1dHMubGVuZ3RoICYmIGlucHV0c1tpbnB1dHMubGVuZ3RoIC0gMV0udmFsdWU7XHJcbiAgICAvLyBJZiB0aGUgcmVjZWlwdCBkb2Vzbid0IHNheSBcIkltYWdlXCIgd2UgZG9uJ3QgeWV0IHN1cHBvcnQgaXQgb24gdGhlIHNlcnZlci5cclxuICAgIC8vIFNvIGZhciwgdGhpcyBvbmx5IGFwcGVhcnMgdG8gYXBwbHkgdG8gYmFua3J1cHRjeSBjbGFpbXMuIFRoaXMgQ1NTXHJcbiAgICAvLyBzZWxlY3RvciBpcyBkdXBsaWNhdGVkIGluIG9uRG9jdW1lbnRWaWV3U3VibWl0LlxyXG4gICAgbGV0IGhhc0ltYWdlUmVjZWlwdCA9ICEhJCgndGQ6Y29udGFpbnMoSW1hZ2UpJykubGVuZ3RoO1xyXG5cclxuXHJcbiAgICBsZXQgcGFnZUNoZWNrID0gKFBBQ0VSLmlzRG9jdW1lbnRVcmwodXJsKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICBoYXNJbWFnZVJlY2VpcHQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgKGxhc3RJbnB1dCA9PT0gJ1ZpZXcgRG9jdW1lbnQnKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAobGFzdElucHV0ID09PSAnQWNjZXB0IENoYXJnZXMgYW5kIFJldHJpZXZlJykpO1xyXG4gICAgZGVidWcoNCxgIGxhc3RJbnB1dCAke2xhc3RJbnB1dH1gKTtcclxuICAgIHJldHVybiAhIXBhZ2VDaGVjaztcclxuICB9LFxyXG5cclxuICAvLyBSZXR1cm5zIHRoZSBkb2N1bWVudCBJRCBmb3IgYSBkb2N1bWVudCB2aWV3IHBhZ2Ugb3Igc2luZ2xlLWRvY3VtZW50IHBhZ2UuXHJcbiAgZ2V0RG9jdW1lbnRJZEZyb21Vcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIGxldCBtYXRjaCA9ICh1cmwgfHwgJycpLm1hdGNoKC9cXC8oPzpkb2MxfGRvY3MxKVxcLyhcXGQrKS8pO1xyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgIC8vIFBBQ0VSIHNpdGVzIHVzZSB0aGUgZm91cnRoIGRpZ2l0IG9mIHRoZSBwYWNlcl9kb2NfaWQgdG8gZmxhZyB3aGV0aGVyXHJcbiAgICAgIC8vIHRoZSB1c2VyIGhhcyBiZWVuIHNob3duIGEgcmVjZWlwdCBwYWdlLiAgV2UgZG9uJ3QgY2FyZSBhYm91dCB0aGF0LCBzb1xyXG4gICAgICAvLyB3ZSBhbHdheXMgc2V0IHRoZSBmb3VydGggZGlnaXQgdG8gMCB3aGVuIGdldHRpbmcgYSBkb2MgSUQuXHJcbiAgICAgIHJldHVybiBgJHttYXRjaFsxXS5zbGljZSgwLCAzKX0wJHttYXRjaFsxXS5zbGljZSg0KX1gO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIEdldCB0aGUgZG9jdW1lbnQgSUQgZm9yIGEgZG9jdW1lbnQgdmlldyBwYWdlIHVzaW5nIHRoZSBcIlZpZXcgRG9jdW1lbnRcIlxyXG4gIC8vIGZvcm0uXHJcbiAgZ2V0RG9jdW1lbnRJZEZyb21Gb3JtOiBmdW5jdGlvbih1cmwsIGRvY3VtZW50KXtcclxuICAgIGlmIChQQUNFUi5pc0RvY3VtZW50VXJsKHVybCkpIHtcclxuICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gICAgICBsZXQgbGFzdF9pbnB1dCA9IGlucHV0c1tpbnB1dHMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmIChpbnB1dHMubGVuZ3RoICYmIGxhc3RfaW5wdXQudmFsdWUgPT09ICdWaWV3IERvY3VtZW50Jykge1xyXG4gICAgICAgIC8vIEdyYWIgdGhlIGRvY3VtZW50IElEIGZyb20gdGhlIGZvcm0ncyBvbnN1Ym1pdCBhdHRyaWJ1dGVcclxuICAgICAgICBsZXQgb25zdWJtaXQgPSBsYXN0X2lucHV0LmZvcm0uZ2V0QXR0cmlidXRlKCdvbnN1Ym1pdCcpO1xyXG4gICAgICAgIGxldCBnb0RMUyA9IFBBQ0VSLnBhcnNlR29ETFNGdW5jdGlvbihvbnN1Ym1pdCk7XHJcbiAgICAgICAgcmV0dXJuIGdvRExTICYmIFBBQ0VSLmdldERvY3VtZW50SWRGcm9tVXJsKGdvRExTLmh5cGVybGluayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyBHaXZlbiBhIFVSTCB0aGF0IHNhdGlzZmllcyBpc0RvY2tldFF1ZXJ5VXJsLCBnZXRzIGl0cyBjYXNlIG51bWJlci5cclxuICBnZXRDYXNlTnVtYmVyRnJvbVVybHM6IGZ1bmN0aW9uICh1cmxzKSB7XHJcbiAgICAvLyBJdGVyYXRlIG92ZXIgYW4gYXJyYXkgb2YgVVJMcyBhbmQgZ2V0IHRoZSBjYXNlIG51bWJlciBmcm9tIHRoZVxyXG4gICAgLy8gZmlyc3Qgb25lIHRoYXQgbWF0Y2hlcy4gQmVjYXVzZSB0aGUgY2FsbGluZyBmdW5jdGlvbiBtYXkgcGFzcyB1cyBVUkxzXHJcbiAgICAvLyBvdGhlciB0aGFuIHRoZSBwYWdlIFVSTCwgc3VjaCBhcyByZWZlcnJlcnMsIHdlIG5hcnJvdyB0b1xyXG4gICAgLy8gKnVzY291cnRzLmdvdi4gKFBhZ2UgVVJMcyBhcmUgc28gbGltaXRlZCBieSB0aGUgXCJpbmNsdWRlX2dsb2JzXCIgaW5cclxuICAgIC8vIG1hbmlmZXN0Lmpzb247IGJ1dCByZWZlcnJlcnMgYXJlIG5vdC4pXHJcbiAgICBmb3IgKGxldCB1cmwgb2YgdXJscykge1xyXG4gICAgICBsZXQgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSh1cmwpO1xyXG4gICAgICAvLyBKUyBpcyB0cmFzaC4gSXQgbGFja3MgYSB3YXkgb2YgZ2V0dGluZyB0aGUgVExELCBzbyB3ZSB1c2UgZW5kc1dpdGguXHJcbiAgICAgIGlmIChob3N0bmFtZS5lbmRzV2l0aCgndXNjb3VydHMuZ292JykpIHtcclxuICAgICAgICBsZXQgbWF0Y2g7XHJcbiAgICAgICAgZm9yIChsZXQgcmUgb2YgW1xyXG4gICAgICAgICAgLy8gQXBwZWxsYXRlIENNRUNGIHNlbmRzIHVzIHNvbWUgb2RkIFVSTHMsIGJlIGF3YXJlOlxyXG4gICAgICAgICAgLy8gaHR0cHM6Ly9lY2YubWFkLnVzY291cnRzLmdvdi9jZ2ktYmluL0RrdFJwdC5wbD9jYXNlTnVtYmVyPTE6MTctY3YtMTE4NDItUEJTJmNhc2VJZD0wXHJcbiAgICAgICAgICAvLyBodHRwczovL2VjZi5tYWQudXNjb3VydHMuZ292L2NnaS1iaW4vRGt0UnB0LnBsP2Nhc2VOdW1iZXI9MToxNy1jdi0xMTg0Mi1QQlMmY2FzZUlkPTE6MTctY3YtMTE4NDItUEJTXHJcbiAgICAgICAgICAvWz8mXWNhc2VpZD0oXFxkKykvaSwgLy8gbWF0Y2ggb24gY2FzZWlkIEdFVCBwYXJhbVxyXG4gICAgICAgICAgL1xcPyhcXGQrKSg/OiYuKik/JC8sICAvLyBtYXRjaCBvbiBEa3RScHQucGw/MTc4NTAyJmJsYWggdXJsc1xyXG4gICAgICAgIF0pe1xyXG4gICAgICAgICAgbWF0Y2ggPSB1cmwubWF0Y2gocmUpO1xyXG4gICAgICAgICAgaWYgKG1hdGNoKXtcclxuICAgICAgICAgICAgZGVidWcoMywgYEZvdW5kIGNhc2VpZCB2aWE6ICR7bWF0Y2hbMF19YCk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaFsxXSA9PT0gJzAnKXtcclxuICAgICAgICAgICAgICAvLyBBcHBlbGxhdGUgQ01FQ0YgY2FsbHMgRGlzdHJpY3QgQ01FQ0Ygd2l0aCBjYXNlSWQ9MCB3aGVuIGl0IGRvZXNuJ3RcclxuICAgICAgICAgICAgICAvLyBrbm93IHRoZSBjYXNlaWQuIElnbm9yZSB0aGF0IHNwZWNpYWwgY2FzZSBoZXJlLlxyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0Y2ggPSB1cmwubWF0Y2goL1s/Jl1jYXNlTnVtPShbLVxcZF0rKS8pO1xyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgLy8gQXBwZWxsYXRlLiBBY3R1YWxseSB0aGlzIGlzIGEgZG9ja2V0IG51bWJlci4gVWhvaD8geHh4XHJcbiAgICAgICAgICBkZWJ1ZygzLCBgRm91bmQgY2FzZU51bSB2aWE6ICR7bWF0Y2hbMF19YCk7XHJcbiAgICAgICAgICByZXR1cm4gbWF0Y2hbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdGNoID0gdXJsLm1hdGNoKC9bPyZdY2FzZUlkPShbLVxcZF0rKS8pO1xyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgZGVidWcoMywgYEZvdW5kIGNhc2VJZCB2aWE6ICR7bWF0Y2hbMF19YCk7XHJcbiAgICAgICAgICAvLyBBbHNvIHNlZW4gaW4gYXBwZWxsYXRlLiBOb3RlIHVwcGVyY2FzZSAnSScgYW5kIGh5cGhlbnMuIEFjdHVhbCBjYXNlSUQuIHh4eFxyXG4gICAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldENhc2VOdW1iZXJGcm9tSW5wdXRzOiBmdW5jdGlvbih1cmwsIGRvY3VtZW50KXtcclxuICAgIGlmIChQQUNFUi5pc0RvY3VtZW50VXJsKHVybCkpe1xyXG4gICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgICAgIGxldCBsYXN0X2lucHV0ID0gaW5wdXRzW2lucHV0cy5sZW5ndGggLTFdO1xyXG4gICAgICBpZiAoaW5wdXRzLmxlbmd0aCAmJiBsYXN0X2lucHV0LnZhbHVlID09PSBcIkRvd25sb2FkIEFsbFwiKSB7XHJcbiAgICAgICAgLy8gQXR0YWNobWVudCBwYWdlLlxyXG4gICAgICAgIGxldCBvbmNsaWNrID0gbGFzdF9pbnB1dC5nZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIpO1xyXG4gICAgICAgIGxldCBtYXRjaCA9IG9uY2xpY2subWF0Y2goL1s/Jl1jYXNlaWQ9KFxcZCspL2kpO1xyXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAhPT0gJzAnKXtcclxuICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXRzLmxlbmd0aCAmJiBsYXN0X2lucHV0LnZhbHVlID09PSBcIlZpZXcgRG9jdW1lbnRcIikge1xyXG4gICAgICAgIC8vIERvd25sb2FkIHJlY2VpcHQgcGFnZS5cclxuICAgICAgICBsZXQgb25zdWJtaXQgPSBsYXN0X2lucHV0LmZvcm0uZ2V0QXR0cmlidXRlKFwib25zdWJtaXRcIik7XHJcbiAgICAgICAgbGV0IGdvRExTID0gUEFDRVIucGFyc2VHb0RMU0Z1bmN0aW9uKG9uc3VibWl0KTtcclxuICAgICAgICByZXR1cm4gZ29ETFMgJiYgZ29ETFMuZGVfY2FzZWlkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gR2V0cyB0aGUgbGFzdCBwYXRoIGNvbXBvbmVudCBvZiBhIFVSTC5cclxuICBnZXRCYXNlTmFtZUZyb21Vcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHJldHVybiB1cmwucmVwbGFjZSgvXFw/LiovLCAnJykucmVwbGFjZSgvLipcXC8vLCAnJyk7XHJcbiAgfSxcclxuXHJcbiAgLy8gUGFyc2UgdGhlIGdvRExTIGZ1bmN0aW9uIHJldHVybmluZyBpdHMgcGFyYW1ldGVycyBhcyBhIGRpY3QuXHJcbiAgcGFyc2VHb0RMU0Z1bmN0aW9uOiBmdW5jdGlvbiAoZ29ETFNfc3RyaW5nKXtcclxuICAgIC8vIENNRUNGIHByb3ZpZGVzIGV4dHJhIGluZm9ybWF0aW9uIG9uIERvY3VtZW50IExpbmtzIChETFM/KSBpbiB0aGUgZ29ETFMoKVxyXG4gICAgLy8gZnVuY3Rpb24gb2YgYW4gb25jbGljayBoYW5kbGVyLCBlLmcuOlxyXG4gICAgLy9cclxuICAgIC8vICAgPGEgaHJlZj1cImh0dHBzOi8vZWNmLm1hZC51c2NvdXJ0cy5nb3YvZG9jMS8wOTUxODM2MDA0NlwiXHJcbiAgICAvLyAgICAgIG9uY2xpY2s9XCJnb0RMUygnL2RvYzEvMDk1MTgzNjAwNDYnLCcxNTM5OTInLCcyNjQnLCcnLCcnLCcxJywnJywnJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgIHJldHVybihmYWxzZSk7XCI+OTU8L2E+XHJcbiAgICAvL1xyXG4gICAgLy8gVGhpcyBpcyBzaW1pbGFybHkgdXNlZCBpbiB0aGUgb25zdWJtaXQgZnVuY3Rpb24gb2Ygc29tZSBmb3Jtcy5cclxuICAgIC8vXHJcbiAgICAvLyBUaGUgcGFyYW1ldGVycyBhcmUgZGVmaW5lZCBpbiB0aGUgdW5taW5pZmllZCBqc1xyXG4gICAgLy8gICBodHRwczovL2VjZi5mbG5kLnVzY291cnRzLmdvdi9saWIvZGxzX3VybC5qc1xyXG4gICAgLy8gYXM6XHJcbiAgICAvLyAgIGZ1bmN0aW9uIGdvRExTKGh5cGVybGluaywgZGVfY2FzZWlkLCBkZV9zZXFubywgZ290X3JlY2VpcHQsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgIHBkZl9oZWFkZXIsIHBkZl90b2dnbGVfcG9zc2libGUsIG1hZ2ljX251bSwgaGRyKVxyXG4gICAgLy9cclxuICAgIC8vIEJhbmtydXB0Y3kgY291cnRzIHByb3ZpZGUgdGVuIHBhcmFtZXRlcnMsIGluc3RlYWQgb2YgZWlnaHQuIFRoZXNlIGNhblxyXG4gICAgLy8gYmUgZm91bmQgaW4gdW5taW5pZmllZCBqczpcclxuICAgIC8vICAgaHR0cHM6Ly9lY2YucGFlYi51c2NvdXJ0cy5nb3YvbGliL2Rsc191cmwuanNcclxuICAgIC8vIGFzOlxyXG4gICAgLy8gICBmdW5jdGlvbiBnb0RMUyhoeXBlcmxpbmssIGRlX2Nhc2VpZCwgZGVfc2Vxbm8sIGdvdF9yZWNlaXB0LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICBwZGZfaGVhZGVyLCBwZGZfdG9nZ2xlX3Bvc3NpYmxlLCBtYWdpY19udW0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgIGNsYWltX2lkLCBjbGFpbV9udW0sIGNsYWltX2RvY19zZXEpXHJcbiAgICAvLyDOlDpcclxuICAgIC8vIC0gaGRyXHJcbiAgICAvLyArIGNsYWltX2lkLCBjbGFpbV9udW0sIGNsYWltX2RvY19zZXFcclxuICAgIGxldCBnb0Rsc0Rpc3RyaWN0ID0gL15nb0RMU1xcKCcoW14nXSopJywnKFteJ10qKScsJyhbXiddKiknLCcoW14nXSopJywnKFteJ10qKScsJyhbXiddKiknLCcoW14nXSopJywnKFteJ10qKSdcXCkvLmV4ZWMoZ29ETFNfc3RyaW5nKTtcclxuICAgIGxldCBnb0Rsc0JhbmtyPSAvXmdvRExTXFwoJyhbXiddKiknLCcoW14nXSopJywnKFteJ10qKScsJyhbXiddKiknLCcoW14nXSopJywnKFteJ10qKScsJyhbXiddKiknLCcoW14nXSopJywnKFteJ10qKScsJyhbXiddKiknXFwpLy5leGVjKGdvRExTX3N0cmluZyk7XHJcbiAgICBpZiAoIWdvRGxzRGlzdHJpY3QgJiYgIWdvRGxzQmFua3IpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBsZXQgciA9IHt9O1xyXG4gICAgaWYgKGdvRGxzRGlzdHJpY3Qpe1xyXG4gICAgICBbLCByLmh5cGVybGluaywgci5kZV9jYXNlaWQsIHIuZGVfc2Vxbm8sIHIuZ290X3JlY2VpcHQsIHIucGRmX2hlYWRlcixcclxuICAgICAgICByLnBkZl90b2dnbGVfcG9zc2libGUsIHIubWFnaWNfbnVtLCByLmhkcl0gPSBnb0Rsc0Rpc3RyaWN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgWywgci5oeXBlcmxpbmssIHIuZGVfY2FzZWlkLCByLmRlX3NlcW5vLCByLmdvdF9yZWNlaXB0LCByLnBkZl9oZWFkZXIsXHJcbiAgICAgICAgci5wZGZfdG9nZ2xlX3Bvc3NpYmxlLCByLm1hZ2ljX251bSwgci5jbGFpbV9pZCwgci5jbGFpbV9udW0sXHJcbiAgICAgICAgci5jbGFpbV9kb2Nfc2VxXSA9IGdvRGxzQmFua3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcjtcclxuICB9LFxyXG5cclxuICAvLyBHaXZlbiBkb2N1bWVudC5jb29raWUsIHJldHVybnMgdHJ1ZSBpZiB0aGUgdXNlciBpcyBsb2dnZWQgaW4gdG8gUEFDRVIuXHJcbiAgaGFzUGFjZXJDb29raWU6IGZ1bmN0aW9uIChjb29raWVTdHJpbmcpIHtcclxuICAgIGxldCBjb29raWVzID0ge307XHJcbiAgICBjb29raWVTdHJpbmcucmVwbGFjZSgvXFxzKihbXj07XSspPShbXjtdKikvZywgZnVuY3Rpb24gKG1hdGNoLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgICBjb29raWVzW25hbWUudHJpbSgpXSA9IHZhbHVlLnRyaW0oKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IHBhY2VyQ29va2llID0gY29va2llc1snUGFjZXJVc2VyJ10gfHwgY29va2llc1snUGFjZXJTZXNzaW9uJ107XHJcbiAgICByZXR1cm4gISEocGFjZXJDb29raWUgJiYgIXBhY2VyQ29va2llLm1hdGNoKC91bnZhbGlkYXRlZC8pKTtcclxuICB9LFxyXG5cclxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGNvdXJ0IGlkZW50aWZpZXIgaXMgZm9yIGFuIGFwcGVsbGF0ZSBjb3VydC5cclxuICBpc0FwcGVsbGF0ZUNvdXJ0OiBmdW5jdGlvbiAoY291cnQpIHtcclxuICAgIHJldHVybiBQQUNFUi5BUFBFTExBVEVfQ09VUlRTLmluY2x1ZGVzKGNvdXJ0KTtcclxuICB9LFxyXG5cclxuICAvLyBUaGVzZSBhcmUgYWxsIHRoZSBzdXBwb3J0ZWQgUEFDRVIgY291cnQgaWRlbnRpZmllcnMsIHRvZ2V0aGVyIHdpdGggdGhlaXJcclxuICAvLyBXZXN0LXN0eWxlIGNvdXJ0IG5hbWUgYWJicmV2aWF0aW9ucy5cclxuICBDT1VSVF9BQkJSRVZTOiB7XHJcbiAgICAvLyBBcHBlbGxhdGUgQ291cnRzXHJcbiAgICAnY2ExJzogJzFzdC1DaXIuJyxcclxuICAgICdjYTInOiAnMmQtQ2lyLicsXHJcbiAgICAnY2EzJzogJzNyZC1DaXIuJyxcclxuICAgICdjYTQnOiAnNHRoLUNpci4nLFxyXG4gICAgJ2NhNSc6ICc1dGgtQ2lyLicsXHJcbiAgICAnY2E2JzogJzZ0aC1DaXIuJyxcclxuICAgICdjYTcnOiAnN3RoLUNpci4nLFxyXG4gICAgJ2NhOCc6ICc4dGgtQ2lyLicsXHJcbiAgICAnY2E5JzogJzl0aC1DaXIuJyxcclxuICAgICdjYTEwJzogJzEwdGgtQ2lyLicsXHJcbiAgICAnY2ExMSc6ICcxMXRoLUNpci4nLFxyXG4gICAgJ2NhZGMnOiAnRC5DLi1DaXIuJyxcclxuICAgICdjYWZjJzogJ0ZlZC4tQ2lyLicsXHJcbiAgICAvLyBEaXN0cmljdCBDb3VydHNcclxuICAgICdha2InOiAnQmFua3IuRC5BbGFza2EnLFxyXG4gICAgJ2FrZCc6ICdELkFsYXNrYScsXHJcbiAgICAnYWxtYic6ICdCYW5rci5NLkQuQWxhLicsXHJcbiAgICAnYWxtZCc6ICdNLkQuQWxhLicsXHJcbiAgICAnYWxuYic6ICdCYW5rci5OLkQuQWxhLicsXHJcbiAgICAnYWxuZCc6ICdOLkQuQWxhLicsXHJcbiAgICAnYWxzYic6ICdCYW5rci5TLkQuQWxhLicsXHJcbiAgICAnYWxzZCc6ICdTLkQuQWxhLicsXHJcbiAgICAnYXJlYic6ICdCYW5rci5FLkQuQXJrLicsXHJcbiAgICAnYXJlZCc6ICdFLkQuQXJrLicsXHJcbiAgICAnYXJ3Yic6ICdCYW5rci5XLkQuQXJrLicsXHJcbiAgICAnYXJ3ZCc6ICdXLkQuQXJrLicsXHJcbiAgICAnYXpiJzogJ0JhbmtyLkQuQXJpei4nLFxyXG4gICAgJ2F6ZCc6ICdELkFyaXouJyxcclxuICAgICdjYWNiJzogJ0JhbmtyLkMuRC5DYWwuJyxcclxuICAgICdjYWNkJzogJ0MuRC5DYWwuJyxcclxuICAgICdjYWViJzogJ0JhbmtyLkUuRC5DYWwuJyxcclxuICAgICdjYWVkJzogJ0UuRC5DYWwuJyxcclxuICAgICdjYW5iJzogJ0JhbmtyLk4uRC5DYWwuJyxcclxuICAgICdjYW5kJzogJ04uRC5DYWwuJyxcclxuICAgICdjYXNiJzogJ0JhbmtyLlMuRC5DYWwuJyxcclxuICAgICdjYXNkJzogJ1MuRC5DYWwuJyxcclxuICAgICdjaXQnOiAnQ0lUJyxcclxuICAgICdjb2InOiAnQmFua3IuRC5Db2xvLicsXHJcbiAgICAnY29kJzogJ0QuQ29sby4nLFxyXG4gICAgJ2NvZmMnOiAnRmVkLkNsLicsXHJcbiAgICAnY3RiJzogJ0JhbmtyLkQuQ29ubi4nLFxyXG4gICAgJ2N0ZCc6ICdELkNvbm4uJyxcclxuICAgICdkY2InOiAnQmFua3IuRC5ELkMuJyxcclxuICAgICdkY2QnOiAnRC5ELkMuJyxcclxuICAgICdkZWInOiAnQmFua3IuRC5EZWwuJyxcclxuICAgICdkZWQnOiAnRC5EZWwuJyxcclxuICAgICdmbG1iJzogJ0JhbmtyLk0uRC5GbGEuJyxcclxuICAgICdmbG1kJzogJ00uRC5GbGEuJyxcclxuICAgICdmbG5iJzogJ0JhbmtyLk4uRC5GbGEuJyxcclxuICAgICdmbG5kJzogJ04uRC5GbGEuJyxcclxuICAgICdmbHNiJzogJ0JhbmtyLlMuRC5GbGEuJyxcclxuICAgICdmbHNkJzogJ1MuRC5GbGEuJyxcclxuICAgICdnYW1iJzogJ0JhbmtyLk0uRC5HYS4nLFxyXG4gICAgJ2dhbWQnOiAnTS5ELkdhLicsXHJcbiAgICAnZ2FuYic6ICdCYW5rci5OLkQuR2EuJyxcclxuICAgICdnYW5kJzogJ04uRC5HYS4nLFxyXG4gICAgJ2dhc2InOiAnQmFua3IuUy5ELkdhLicsXHJcbiAgICAnZ2FzZCc6ICdTLkQuR2EuJyxcclxuICAgICdndWInOiAnQmFua3IuRC5HdWFtJyxcclxuICAgICdndWQnOiAnRC5HdWFtJyxcclxuICAgICdoaWInOiAnQmFua3IuRC5IYXdhaWknLFxyXG4gICAgJ2hpZCc6ICdELkhhd2FpaScsXHJcbiAgICAnaWFuYic6ICdCYW5rci5OLkQuSW93YScsXHJcbiAgICAnaWFuZCc6ICdOLkQuSW93YScsXHJcbiAgICAnaWFzYic6ICdCYW5rci5TLkQuSW93YScsXHJcbiAgICAnaWFzZCc6ICdTLkQuSW93YScsXHJcbiAgICAnaWRiJzogJ0JhbmtyLkQuSWRhaG8nLFxyXG4gICAgJ2lkZCc6ICdELklkYWhvJyxcclxuICAgICdpbGNiJzogJ0JhbmtyLkMuRC5JbGwuJyxcclxuICAgICdpbGNkJzogJ0MuRC5JbGwuJyxcclxuICAgICdpbG5iJzogJ0JhbmtyLk4uRC5JbGwuJyxcclxuICAgICdpbG5kJzogJ04uRC5JbGwuJyxcclxuICAgICdpbHNiJzogJ0JhbmtyLlMuRC5JbGwuJyxcclxuICAgICdpbHNkJzogJ1MuRC5JbGwuJyxcclxuICAgICdpbm5iJzogJ0JhbmtyLk4uRC5JbmQuJyxcclxuICAgICdpbm5kJzogJ04uRC5JbmQuJyxcclxuICAgICdpbnNiJzogJ0JhbmtyLlMuRC5JbmQuJyxcclxuICAgICdpbnNkJzogJ1MuRC5JbmQuJyxcclxuICAgICdrc2InOiAnQmFua3IuRC5LYW4uJyxcclxuICAgICdrc2QnOiAnRC5LYW4uJyxcclxuICAgICdreWViJzogJ0JhbmtyLkUuRC5LeS4nLFxyXG4gICAgJ2t5ZWQnOiAnRS5ELkt5LicsXHJcbiAgICAna3l3Yic6ICdCYW5rci5XLkQuS3kuJyxcclxuICAgICdreXdkJzogJ1cuRC5LeS4nLFxyXG4gICAgJ2xhZWInOiAnQmFua3IuRS5ELkxhLicsXHJcbiAgICAnbGFlZCc6ICdFLkQuTGEuJyxcclxuICAgICdsYW1iJzogJ0JhbmtyLk0uRC5MYS4nLFxyXG4gICAgJ2xhbWQnOiAnTS5ELkxhLicsXHJcbiAgICAnbGF3Yic6ICdCYW5rci5XLkQuTGEuJyxcclxuICAgICdsYXdkJzogJ1cuRC5MYS4nLFxyXG4gICAgJ21hYic6ICdCYW5rci5ELk1hc3MuJyxcclxuICAgICdtYWQnOiAnRC5NYXNzLicsXHJcbiAgICAnbWRiJzogJ0JhbmtyLkQuTWQuJyxcclxuICAgICdtZGQnOiAnRC5NZC4nLFxyXG4gICAgJ21lYic6ICdCYW5rci5ELk1lLicsXHJcbiAgICAnbWVkJzogJ0QuTWUuJyxcclxuICAgICdtaWViJzogJ0JhbmtyLkUuRC5NaWNoLicsXHJcbiAgICAnbWllZCc6ICdFLkQuTWljaC4nLFxyXG4gICAgJ21pd2InOiAnQmFua3IuVy5ELk1pY2guJyxcclxuICAgICdtaXdkJzogJ1cuRC5NaWNoLicsXHJcbiAgICAnbW5iJzogJ0JhbmtyLkQuTWlubi4nLFxyXG4gICAgJ21uZCc6ICdELk1pbm4uJyxcclxuICAgICdtb2ViJzogJ0JhbmtyLkUuRC5Nby4nLFxyXG4gICAgJ21vZWQnOiAnRS5ELk1vLicsXHJcbiAgICAnbW93Yic6ICdCYW5rci5XLkQuTW8uJyxcclxuICAgICdtb3dkJzogJ1cuRC5Nby4nLFxyXG4gICAgJ21zbmInOiAnQmFua3IuTi5ELk1pc3MnLFxyXG4gICAgJ21zbmQnOiAnTi5ELk1pc3MnLFxyXG4gICAgJ21zc2InOiAnQmFua3IuUy5ELk1pc3MuJyxcclxuICAgICdtc3NkJzogJ1MuRC5NaXNzLicsXHJcbiAgICAnbXRiJzogJ0JhbmtyLkQuTW9udC4nLFxyXG4gICAgJ210ZCc6ICdELk1vbnQuJyxcclxuICAgICduY2ViJzogJ0JhbmtyLkUuRC5OLkMuJyxcclxuICAgICduY2VkJzogJ0UuRC5OLkMuJyxcclxuICAgICduY21iJzogJ0JhbmtyLk0uRC5OLkMuJyxcclxuICAgICduY21kJzogJ00uRC5OLkMuJyxcclxuICAgICduY3diJzogJ0JhbmtyLlcuRC5OLkMuJyxcclxuICAgICduY3dkJzogJ1cuRC5OLkMuJyxcclxuICAgICduZGInOiAnQmFua3IuRC5OLkQuJyxcclxuICAgICduZGQnOiAnRC5OLkQuJyxcclxuICAgICduZWInOiAnQmFua3IuRC5OZWIuJyxcclxuICAgICduZWQnOiAnRC5OZWIuJyxcclxuICAgICduaGInOiAnQmFua3IuRC5OLkguJyxcclxuICAgICduaGQnOiAnRC5OLkguJyxcclxuICAgICduamInOiAnQmFua3IuRC5OLkouJyxcclxuICAgICduamQnOiAnRC5OLkouJyxcclxuICAgICdubWInOiAnQmFua3IuRC5OLk0uJyxcclxuICAgICdubWQnOiAnRC5OLk0uJyxcclxuICAgICdubWlkJzogJ04uTWFyaWFuYUlzbGFuZHMnLFxyXG4gICAgJ252Yic6ICdCYW5rci5ELk5ldi4nLFxyXG4gICAgJ252ZCc6ICdELk5ldi4nLFxyXG4gICAgJ255ZWInOiAnQmFua3IuRS5ELk4uWS4nLFxyXG4gICAgJ255ZWQnOiAnRS5ELk4uWS4nLFxyXG4gICAgJ255bmInOiAnQmFua3IuTi5ELk4uWS4nLFxyXG4gICAgJ255bmQnOiAnTi5ELk4uWS4nLFxyXG4gICAgJ255c2InOiAnQmFua3IuUy5ELk4uWS4nLFxyXG4gICAgJ255c2ItbWVnYSc6ICdCYW5rci5TLkQuTi5ZLicsXHJcbiAgICAnbnlzZCc6ICdTLkQuTi5ZLicsXHJcbiAgICAnbnl3Yic6ICdCYW5rci5XLkQuTi5ZLicsXHJcbiAgICAnbnl3ZCc6ICdXLkQuTi5ZLicsXHJcbiAgICAnb2huYic6ICdCYW5rci5OLkQuT2hpbycsXHJcbiAgICAnb2huZCc6ICdOLkQuT2hpbycsXHJcbiAgICAnb2hzYic6ICdCYW5rci5TLkQuT2hpbycsXHJcbiAgICAnb2hzZCc6ICdTLkQuT2hpbycsXHJcbiAgICAnb2tlYic6ICdCYW5rci5FLkQuT2tsYS4nLFxyXG4gICAgJ29rZWQnOiAnRS5ELk9rbGEuJyxcclxuICAgICdva25iJzogJ0JhbmtyLk4uRC5Pa2xhLicsXHJcbiAgICAnb2tuZCc6ICdOLkQuT2tsYS4nLFxyXG4gICAgJ29rd2InOiAnQmFua3IuVy5ELk9rbGEuJyxcclxuICAgICdva3dkJzogJ1cuRC5Pa2xhLicsXHJcbiAgICAnb3JiJzogJ0JhbmtyLkQuT3IuJyxcclxuICAgICdvcmQnOiAnRC5Pci4nLFxyXG4gICAgJ3BhZWInOiAnQmFua3IuRS5ELlBhLicsXHJcbiAgICAncGFlZCc6ICdFLkQuUGEuJyxcclxuICAgICdwYW1iJzogJ0JhbmtyLk0uRC5QYS4nLFxyXG4gICAgJ3BhbWQnOiAnTS5ELlBhLicsXHJcbiAgICAncGF3Yic6ICdCYW5rci5XLkQuUGEuJyxcclxuICAgICdwYXdkJzogJ1cuRC5QYS4nLFxyXG4gICAgJ3ByYic6ICdCYW5rci5ELlAuUi4nLFxyXG4gICAgJ3ByZCc6ICdELlAuUi4nLFxyXG4gICAgJ3JpYic6ICdCYW5rci5ELlIuSS4nLFxyXG4gICAgJ3JpZCc6ICdELlIuSS4nLFxyXG4gICAgJ3NjYic6ICdCYW5rci5ELlMuQy4nLFxyXG4gICAgJ3NjZCc6ICdELlMuQy4nLFxyXG4gICAgJ3NkYic6ICdCYW5rci5ELlMuRC4nLFxyXG4gICAgJ3NkZCc6ICdELlMuRC4nLFxyXG4gICAgJ3RuZWInOiAnQmFua3IuRS5ELlRlbm4uJyxcclxuICAgICd0bmVkJzogJ0UuRC5UZW5uLicsXHJcbiAgICAndG5tYic6ICdCYW5rci5NLkQuVGVubi4nLFxyXG4gICAgJ3RubWQnOiAnTS5ELlRlbm4uJyxcclxuICAgICd0bndiJzogJ0JhbmtyLlcuRC5UZW5uLicsXHJcbiAgICAndG53ZCc6ICdXLkQuVGVubi4nLFxyXG4gICAgJ3R4ZWInOiAnQmFua3IuRS5ELlRleC4nLFxyXG4gICAgJ3R4ZWQnOiAnRS5ELlRleC4nLFxyXG4gICAgJ3R4bmInOiAnQmFua3IuTi5ELlRleC4nLFxyXG4gICAgJ3R4bmQnOiAnTi5ELlRleC4nLFxyXG4gICAgJ3R4c2InOiAnQmFua3IuUy5ELlRleC4nLFxyXG4gICAgJ3R4c2QnOiAnUy5ELlRleC4nLFxyXG4gICAgJ3R4d2InOiAnQmFua3IuVy5ELlRleC4nLFxyXG4gICAgJ3R4d2QnOiAnVy5ELlRleC4nLFxyXG4gICAgJ3V0Yic6ICdCYW5rci5ELlV0YWgnLFxyXG4gICAgJ3V0ZCc6ICdELlV0YWgnLFxyXG4gICAgJ3ZhZWInOiAnQmFua3IuRS5ELlZhLicsXHJcbiAgICAndmFlZCc6ICdFLkQuVmEuJyxcclxuICAgICd2YXdiJzogJ0JhbmtyLlcuRC5WYS4nLFxyXG4gICAgJ3Zhd2QnOiAnVy5ELlZhLicsXHJcbiAgICAndmliJzogJ0JhbmtyLkQuVmlyZ2luSXNsYW5kcycsXHJcbiAgICAndmlkJzogJ0QuVmlyZ2luSXNsYW5kcycsXHJcbiAgICAndnRiJzogJ0JhbmtyLkQuVnQuJyxcclxuICAgICd2dGQnOiAnRC5WdC4nLFxyXG4gICAgJ3dhZWInOiAnQmFua3IuRS5ELldhc2guJyxcclxuICAgICd3YWVkJzogJ0UuRC5XYXNoLicsXHJcbiAgICAnd2F3Yic6ICdCYW5rci5XLkQuV2FzaC4nLFxyXG4gICAgJ3dhd2QnOiAnVy5ELldhc2guJyxcclxuICAgICd3aWViJzogJ0JhbmtyLkUuRC5XaXMuJyxcclxuICAgICd3aWVkJzogJ0UuRC5XaXMuJyxcclxuICAgICd3aXdiJzogJ0JhbmtyLlcuRC5XaXMnLFxyXG4gICAgJ3dpd2QnOiAnVy5ELldpcycsXHJcbiAgICAnd3ZuYic6ICdCYW5rci5OLkQuVy5WYS4nLFxyXG4gICAgJ3d2bmQnOiAnTi5ELlcuVmEuJyxcclxuICAgICd3dnNiJzogJ0JhbmtyLlMuRC5XLlZhLicsXHJcbiAgICAnd3ZzZCc6ICdTLkQuVy5WYS4nLFxyXG4gICAgJ3d5Yic6ICdCYW5rci5ELld5by4nLFxyXG4gICAgJ3d5ZCc6ICdELld5by4nXHJcbiAgfSxcclxuXHJcbiAgLy8gUEFDRVIgY291cnQgaWRlbnRpZmllcnMgZm9yIGFwcGVsbGF0ZSBjb3VydHMuXHJcbiAgQVBQRUxMQVRFX0NPVVJUUzogWydjYTEnLCAnY2EyJywgJ2NhMycsICdjYTQnLCAnY2E1JywgJ2NhNicsICdjYTcnLCAnY2E4JywgJ2NhOScsICdjYTEwJywgJ2NhMTEnLCAnY2FkYycsICdjYWZjJ11cclxufTtcclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InBhY2VyLmpzLm1hcCJ9
