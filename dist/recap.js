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
})({"a3pmo":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "cbd798d872052860";
module.bundle.HMR_BUNDLE_ID = "088e9e6dc27e8506";
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

},{}],"51YT2":[function(require,module,exports) {
// Abstraction of the RECAP server APIs.
// Public impure functions.  (See utils.js for details on defining services.)
function Recap() {
    const DEBUG = false, SERVER_ROOT = 'https://www.courtlistener.com/api/rest/v3/', UPLOAD_TYPES = {
        'DOCKET': 1,
        'ATTACHMENT_PAGE': 2,
        'PDF': 3,
        'DOCKET_HISTORY_REPORT': 4,
        'APPELLATE_DOCKET': 5,
        'APPELLATE_ATTACHMENT_PAGE': 6,
        'CLAIMS_REGISTER_PAGE': 9,
        'ZIP': 10
    };
    return {
        //Given a pacer_doc_id, return the pacer_case_id that it is associated with
        getPacerCaseIdFromPacerDocId: async function(pacer_doc_id, cb) {
            const tabId = cb.tab.id;
            const tabStore = await getItemsFromStorage(tabId);
            try {
                const docsToCases = tabStore.docsToCases;
                const pacerCaseId = docsToCases[pacer_doc_id];
                console.info([
                    'RECAP: Got case number',
                    pacerCaseId,
                    'for pacer_doc_id:',
                    pacer_doc_id
                ].join(' '));
                return cb(pacerCaseId);
            } catch (err) {
                console.log('No stored pacer_case_id found in chrome storage');
                return cb(null);
            }
        },
        // Asks RECAP whether it has a docket page for the specified case.  If it
        // is available, the callback will be called with a
        getAvailabilityForDocket: function(pacer_court, pacer_case_id, cb) {
            if (!pacer_case_id) {
                console.error("RECAP: Cannot get availability of docket without pacer_case_id.");
                return;
            }
            console.info(`RECAP: Getting availability of docket ${pacer_case_id} at ` + `${pacer_court}`);
            $.ajax({
                url: `${SERVER_ROOT}dockets/`,
                data: {
                    pacer_case_id: pacer_case_id,
                    // Ensure RECAP is a source so we don't get back IDB-only dockets.
                    source__in: '1,3,5,7,9,11,13,15',
                    court: PACER.convertToCourtListenerCourt(pacer_court),
                    fields: 'absolute_url,date_modified'
                },
                success: function(data, textStatus, xhr) {
                    console.info(`RECAP: Got successful response from server on docket ` + `query: ${textStatus}`);
                    cb(data || null);
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.error(`RECAP: Ajax error getting docket availability. Status: ` + `${textStatus}. Error: ${errorThrown}.`);
                }
            });
        },
        // Asks RECAP whether it has the specified documents.
        getAvailabilityForDocuments: function(pacer_doc_ids, pacer_court, cb) {
            // The server API takes just one "court" parameter for all the URLs, so we
            // pick the court based on the first URL and assume the rest are the same.
            console.info("RECAP: Made it info the getAvailabilityForDocuments function");
            let cl_court = PACER.convertToCourtListenerCourt(pacer_court);
            let pacer_doc_id_csv = pacer_doc_ids.join(",");
            if (cl_court && pacer_doc_id_csv) $.ajax({
                url: `${SERVER_ROOT}recap-query/`,
                data: {
                    pacer_doc_id__in: pacer_doc_id_csv,
                    docket_entry__docket__court: cl_court
                },
                success: function(data, textStatus, xhr) {
                    console.info(`RECAP: Got successful response when looking up document ` + `availability: ${textStatus}`);
                    cb(data || null);
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.error(`RECAP: Ajax error getting document availability. ` + `Status: ${textStatus}. Error: ${errorThrown}`);
                }
            });
            else cb({
            });
        },
        // Uploads an HTML docket or docket history report to the RECAP server
        uploadDocket: function(pacer_court, pacer_case_id, html, upload_type, cb) {
            let formData = new FormData();
            formData.append('court', PACER.convertToCourtListenerCourt(pacer_court));
            pacer_case_id && formData.append('pacer_case_id', pacer_case_id);
            formData.append('upload_type', UPLOAD_TYPES[upload_type]);
            formData.append('filepath_local', new Blob([
                html
            ], {
                type: 'text/plain'
            }));
            formData.append('debug', DEBUG);
            $.ajax({
                url: `${SERVER_ROOT}recap/`,
                method: 'POST',
                processData: false,
                contentType: false,
                data: formData,
                success: function(data, textStatus, xhr) {
                    console.info(`RECAP: Successfully uploaded docket or docket ` + `history report: '${textStatus}' with processing queue id of ` + `${data['id']}`);
                    cb(data || null);
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.error(`RECAP: Ajax error uploading docket. Status: ${textStatus}.` + `Error: ${errorThrown}`);
                }
            });
        },
        // Uploads a "Document Selection Menu" page to the RECAP server, calling
        // the callback with a boolean success flag.
        uploadAttachmentMenu: function(pacer_court, pacer_case_id, html, cb) {
            let formData = new FormData();
            formData.append('court', PACER.convertToCourtListenerCourt(pacer_court));
            // pacer_case_id is not currently used by backend, but send anyway if we
            // have it.
            pacer_case_id && formData.append('pacer_case_id', pacer_case_id);
            formData.append('upload_type', UPLOAD_TYPES['ATTACHMENT_PAGE']);
            formData.append('filepath_local', new Blob([
                html
            ], {
                type: 'text/html'
            }));
            formData.append('debug', DEBUG);
            $.ajax({
                url: `${SERVER_ROOT}recap/`,
                method: 'POST',
                processData: false,
                contentType: false,
                data: formData,
                success: function(data, textStatus, xhr) {
                    console.info(`RECAP: Successfully uploaded attachment page: '${textStatus}' ` + `with processing queue id of ${data['id']}`);
                    cb(data || null);
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.error(`RECAP: Ajax error uploading docket. Status: ${textStatus}.` + `Error: ${errorThrown}`);
                }
            });
        },
        // Asynchronously uploads a PDF document to the RECAP server, calling the callback with
        // a boolean success flag.
        uploadDocument: (pacer_court, pacer_case_id, pacer_doc_id, document_number, attachment_number, cb)=>{
            console.info([
                `RECAP: Attempting PDF upload to RECAP Archive with details:`,
                `pacer_court: ${pacer_court}`,
                `pacer_case_id: ${pacer_case_id}`,
                `pacer_doc_id: ${pacer_doc_id}`,
                `document_number: ${document_number},`,
                `attachment_number: ${attachment_number}.`
            ].join(' '));
            // extract the tabId from the enhanced callback
            // wait for chrome.storage.local to load the tabStorage
            getItemsFromStorage(cb.tab.id).then(async (tabStorage)=>{
                // create form data
                const blob = await fetch(tabStorage['pdf_blob']).then((res)=>res.blob()
                );
                let formData = new FormData();
                formData.append('court', PACER.convertToCourtListenerCourt(pacer_court));
                pacer_case_id && formData.append('pacer_case_id', pacer_case_id);
                pacer_doc_id && formData.append('pacer_doc_id', pacer_doc_id);
                document_number && formData.append('document_number', document_number);
                if (attachment_number && attachment_number !== '0') formData.append('attachment_number', attachment_number);
                formData.append('filepath_local', blob);
                formData.append('upload_type', UPLOAD_TYPES['PDF']);
                formData.append('debug', DEBUG);
                return formData;
            }).then((data)=>fetch(`${SERVER_ROOT}recap/`, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Authorization': `Token ${N87GC2}`
                    }
                })
            ).then((res)=>res.json()
            ).then((result)=>{
                console.info(`RECAP: Successfully uploaded PDF: 'Success' ` + `with processing queue id of ${result.id}`);
                cb(result || null);
                destroyTabStorage(cb.tab.id);
            }).catch((error)=>console.log(`RECAP: Error uploading PDF: ${error}`)
            );
        },
        // Upload a zip file to the RECAP server, calling the cb with ok flag
        uploadZipFile: (pacer_court, pacer_case_id, cb)=>{
            console.info([
                `RECAP: Attempting Zip upload to RECAP Archive with details:`,
                `pacer_court: ${pacer_court}`,
                `pacer_case_id: ${pacer_case_id}`, 
            ].join(' '));
            // extract the tabId from the enhanced callback
            // wait for chrome.storage.local to load the tabStorage
            getItemsFromStorage(cb.tab.id).then(async (tabStorage)=>{
                const docId = tabStorage.docId && tabStorage.docId !== 'undefined' ? tabStorage.docId : null;
                const blob = await fetch(tabStorage['zip_blob']).then((res)=>res.blob()
                );
                // create the formData
                const formData = new FormData();
                formData.append('court', PACER.convertToCourtListenerCourt(pacer_court));
                pacer_case_id && formData.append('pacer_case_id', pacer_case_id);
                docId && formData.append('pacer_doc_id', docId);
                formData.append('upload_type', UPLOAD_TYPES['ZIP']);
                formData.append('debug', DEBUG);
                formData.append('filepath_local', blob);
                return formData;
            }).then((data)=>fetch(`${SERVER_ROOT}recap/`, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Authorization': `Token ${N87GC2}`
                    }
                })
            ).then((res)=>res.json()
            ).then((result)=>{
                console.info(`RECAP: Successfully uploaded Zip: 'Success' ` + `with processing queue id of ${result.id}`);
                cb(result);
                destroyTabStorage(cb.tab.id);
            }).catch((error)=>{
                cb(null);
                console.log(`RECAP: Error uploading Zip: ${error}`);
            });
        },
        uploadClaimsRegister: async function(pacerCourt, pacerCaseId, claimsPageHtml, cb) {
            const html = new Blob([
                claimsPageHtml
            ], {
                type: 'text/html'
            });
            const formData = new FormData();
            formData.append('pacer_case_id', pacerCaseId);
            formData.append('court', PACER.convertToCourtListenerCourt(pacerCourt));
            formData.append('upload_type', UPLOAD_TYPES['CLAIMS_REGISTER_PAGE']);
            formData.append('filepath_local', html);
            const fetchOptions = {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Token ${N87GC2}`
                }
            };
            fetch(`${SERVER_ROOT}recap/`, fetchOptions).then((res)=>res.json()
            ).then((result)=>{
                console.log("RECAP: Claims Page uploaded successfully");
                cb(result || null);
            }).catch((error)=>console.log(`RECAP: The following error occurred: ${error}`)
            );
        }
    };
}

},{}]},["a3pmo","51YT2"], "51YT2", "parcelRequire9981")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdELEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVE7WUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFlLGdCQUFFLFdBQVc7WUFDNUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFPLFFBQUUsS0FBSyxDQUFDLDJCQUEyQixDQUFDLFVBQVU7WUFDckUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFhLGNBQUUsWUFBWSxDQUFDLENBQXNCO1lBQ2xFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBZ0IsaUJBQUUsSUFBSTtZQUN0QyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUM7Z0JBQ3BCLE1BQU0sRUFBRSxDQUFNO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLE9BQU8sRUFBRSxDQUFDO29CQUNSLENBQWUsaUJBQUcsTUFBTSxFQUFFLE1BQU07Z0JBQ2xDLENBQUM7WUFDSCxDQUFDO1lBRUQsS0FBSyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsWUFBWSxFQUN2QyxJQUFJLEVBQUMsR0FBRyxHQUFJLEdBQUcsQ0FBQyxJQUFJO2NBQ3BCLElBQUksRUFBQyxNQUFNLEdBQUksQ0FBQztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQTBDO2dCQUN0RCxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUk7WUFDbkIsQ0FBQyxFQUNBLEtBQUssRUFBQyxLQUFLLEdBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxxQ0FBcUMsRUFBRSxLQUFLOztRQUM3RSxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtYnJvd3Nlci1obXIvbGliL3J1bnRpbWUtMjQwMTNhZGQ2NDVkYTk4Zi5qcyIsInNyYy9yZWNhcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IG51bGw7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCJjYmQ3OThkODcyMDUyODYwXCI7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCIwODhlOWU2ZGMyN2U4NTA2XCI7XCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyogZ2xvYmFsIEhNUl9IT1NULCBITVJfUE9SVCwgSE1SX0VOVl9IQVNILCBITVJfU0VDVVJFICovXG5cbi8qOjpcbmltcG9ydCB0eXBlIHtcbiAgSE1SQXNzZXQsXG4gIEhNUk1lc3NhZ2UsXG59IGZyb20gJ0BwYXJjZWwvcmVwb3J0ZXItZGV2LXNlcnZlci9zcmMvSE1SU2VydmVyLmpzJztcbmludGVyZmFjZSBQYXJjZWxSZXF1aXJlIHtcbiAgKHN0cmluZyk6IG1peGVkO1xuICBjYWNoZToge3xbc3RyaW5nXTogUGFyY2VsTW9kdWxlfH07XG4gIGhvdERhdGE6IG1peGVkO1xuICBNb2R1bGU6IGFueTtcbiAgcGFyZW50OiA/UGFyY2VsUmVxdWlyZTtcbiAgaXNQYXJjZWxSZXF1aXJlOiB0cnVlO1xuICBtb2R1bGVzOiB7fFtzdHJpbmddOiBbRnVuY3Rpb24sIHt8W3N0cmluZ106IHN0cmluZ3x9XXx9O1xuICBITVJfQlVORExFX0lEOiBzdHJpbmc7XG4gIHJvb3Q6IFBhcmNlbFJlcXVpcmU7XG59XG5pbnRlcmZhY2UgUGFyY2VsTW9kdWxlIHtcbiAgaG90OiB7fFxuICAgIGRhdGE6IG1peGVkLFxuICAgIGFjY2VwdChjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICBkaXNwb3NlKGNiOiAobWl4ZWQpID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGFjY2VwdChkZXBzOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBkZWNsaW5lKCk6IHZvaWQsXG4gICAgX2FjY2VwdENhbGxiYWNrczogQXJyYXk8KEZ1bmN0aW9uKSA9PiB2b2lkPixcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogQXJyYXk8KG1peGVkKSA9PiB2b2lkPixcbiAgfH07XG59XG5kZWNsYXJlIHZhciBtb2R1bGU6IHtidW5kbGU6IFBhcmNlbFJlcXVpcmUsIC4uLn07XG5kZWNsYXJlIHZhciBITVJfSE9TVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1BPUlQ6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9FTlZfSEFTSDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1NFQ1VSRTogYm9vbGVhbjtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5cbmZ1bmN0aW9uIE1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIE9sZE1vZHVsZS5jYWxsKHRoaXMsIG1vZHVsZU5hbWUpO1xuICB0aGlzLmhvdCA9IHtcbiAgICBkYXRhOiBtb2R1bGUuYnVuZGxlLmhvdERhdGEsXG4gICAgX2FjY2VwdENhbGxiYWNrczogW10sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IFtdLFxuICAgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KGZuKSB7XG4gICAgICB0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaChmbiB8fCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiBkaXNwb3NlKGZuKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgfTtcbiAgbW9kdWxlLmJ1bmRsZS5ob3REYXRhID0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuYnVuZGxlLk1vZHVsZSA9IE1vZHVsZTtcbnZhciBjaGVja2VkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFjY2VwdGVkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFzc2V0c1RvQWNjZXB0XG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG47XG5cbmZ1bmN0aW9uIGdldEhvc3RuYW1lKCkge1xuICByZXR1cm4gSE1SX0hPU1QgfHwgKGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xufVxuXG5mdW5jdGlvbiBnZXRQb3J0KCkge1xuICByZXR1cm4gSE1SX1BPUlQgfHwgbG9jYXRpb24ucG9ydDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudDtcblxuaWYgKCghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICB2YXIgcG9ydCA9IGdldFBvcnQoKTtcbiAgdmFyIHByb3RvY29sID0gSE1SX1NFQ1VSRSB8fCBsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6JyAmJiAhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdChob3N0bmFtZSkgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciB3cyA9IG5ldyBXZWJTb2NrZXQocHJvdG9jb2wgKyAnOi8vJyArIGhvc3RuYW1lICsgKHBvcnQgPyAnOicgKyBwb3J0IDogJycpICsgJy8nKTsgLy8gJEZsb3dGaXhNZVxuXG4gIHdzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudFxuICAvKjoge2RhdGE6IHN0cmluZywgLi4ufSAqL1xuICApIHtcbiAgICBjaGVja2VkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFjY2VwdGVkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFzc2V0c1RvQWNjZXB0ID0gW107XG4gICAgdmFyIGRhdGFcbiAgICAvKjogSE1STWVzc2FnZSAqL1xuICAgID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXNzZXRzID0gZGF0YS5hc3NldHMuZmlsdGVyKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICByZXR1cm4gYXNzZXQuZW52SGFzaCA9PT0gSE1SX0VOVl9IQVNIO1xuICAgICAgfSk7IC8vIEhhbmRsZSBITVIgVXBkYXRlXG5cbiAgICAgIHZhciBoYW5kbGVkID0gYXNzZXRzLmV2ZXJ5KGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgICAgaG1yQXBwbHkobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzVG9BY2NlcHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaWQgPSBhc3NldHNUb0FjY2VwdFtpXVsxXTtcblxuICAgICAgICAgIGlmICghYWNjZXB0ZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgICBobXJBY2NlcHRSdW4oYXNzZXRzVG9BY2NlcHRbaV1bMF0sIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZGF0YS5kaWFnbm9zdGljcy5hbnNpKSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgYW5zaURpYWdub3N0aWMgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICB2YXIgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfwn5qoIFtwYXJjZWxdOiAnICsgYW5zaURpYWdub3N0aWMubWVzc2FnZSArICdcXG4nICsgc3RhY2sgKyAnXFxuXFxuJyArIGFuc2lEaWFnbm9zdGljLmhpbnRzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgfTtcblxuICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUud2FybignW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0Jyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcblxuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coJ1twYXJjZWxdIOKcqCBFcnJvciByZXNvbHZlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yT3ZlcmxheShkaWFnbm9zdGljcykge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcbiAgdmFyIGVycm9ySFRNTCA9ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogYmxhY2s7IG9wYWNpdHk6IDAuODU7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyBwb3NpdGlvbjogZml4ZWQ7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDMwcHg7IGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTsgei1pbmRleDogOTk5OTtcIj4nO1xuXG4gIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZGlhZ25vc3RpY3MpLFxuICAgICAgX3N0ZXAyO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBkaWFnbm9zdGljID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgdmFyIHN0YWNrID0gZGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBkaWFnbm9zdGljLmNvZGVmcmFtZSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgICBlcnJvckhUTUwgKz0gXCJcXG4gICAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXRvcDogMjBweDtcXFwiPlxcbiAgICAgICAgICBcXHVEODNEXFx1REVBOCBcIi5jb25jYXQoZGlhZ25vc3RpYy5tZXNzYWdlLCBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cHJlPlwiKS5jb25jYXQoc3RhY2ssIFwiPC9wcmU+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICBcIikuY29uY2F0KGRpYWdub3N0aWMuaGludHMubWFwKGZ1bmN0aW9uIChoaW50KSB7XG4gICAgICAgIHJldHVybiAnPGRpdj7wn5KhICcgKyBoaW50ICsgJzwvZGl2Pic7XG4gICAgICB9KS5qb2luKCcnKSwgXCJcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCIpLmNvbmNhdChkaWFnbm9zdGljLmRvY3VtZW50YXRpb24gPyBcIjxkaXY+XFx1RDgzRFxcdURDREQgPGEgc3R5bGU9XFxcImNvbG9yOiB2aW9sZXRcXFwiIGhyZWY9XFxcIlwiLmNvbmNhdChkaWFnbm9zdGljLmRvY3VtZW50YXRpb24sIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+TGVhcm4gbW9yZTwvYT48L2Rpdj5cIikgOiAnJywgXCJcXG4gICAgICA8L2Rpdj5cXG4gICAgXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yMi5mKCk7XG4gIH1cblxuICBlcnJvckhUTUwgKz0gJzwvZGl2Pic7XG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKVxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xue1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBrLCBkLCBkZXA7XG5cbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcblxuICAgICAgaWYgKGRlcCA9PT0gaWQgfHwgQXJyYXkuaXNBcnJheShkZXApICYmIGRlcFtkZXAubGVuZ3RoIC0gMV0gPT09IGlkKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChbYnVuZGxlLCBrXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICB2YXIgbmV3TGluayA9IGxpbmsuY2xvbmVOb2RlKCk7XG5cbiAgbmV3TGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcblxuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIC8vICRGbG93Rml4TWVcbiAgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7IC8vICRGbG93Rml4TWVcblxuICBsaW5rLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0xpbmssIGxpbmsubmV4dFNpYmxpbmcpO1xufVxuXG52YXIgY3NzVGltZW91dCA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjc3NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWZcbiAgICAgIC8qOiBzdHJpbmcgKi9cbiAgICAgID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLm9yaWdpbikgIT09IDAgJiYgIXNlcnZlZEZyb21ITVJTZXJ2ZXI7XG5cbiAgICAgIGlmICghYWJzb2x1dGUpIHtcbiAgICAgICAgdXBkYXRlTGluayhsaW5rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3NzVGltZW91dCA9IG51bGw7XG4gIH0sIDUwKTtcbn1cblxuZnVuY3Rpb24gaG1yQXBwbHkoYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBhc3NldFxuLyo6ICBITVJBc3NldCAqL1xuKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdjc3MnKSB7XG4gICAgcmVsb2FkQ1NTKCk7XG4gIH0gZWxzZSBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIHZhciBkZXBzID0gYXNzZXQuZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXTtcblxuICAgIGlmIChkZXBzKSB7XG4gICAgICB2YXIgZm4gPSBuZXcgRnVuY3Rpb24oJ3JlcXVpcmUnLCAnbW9kdWxlJywgJ2V4cG9ydHMnLCBhc3NldC5vdXRwdXQpO1xuICAgICAgbW9kdWxlc1thc3NldC5pZF0gPSBbZm4sIGRlcHNdO1xuICAgIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgICAgaG1yQXBwbHkoYnVuZGxlLnBhcmVudCwgYXNzZXQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayhidW5kbGUucGFyZW50LCBpZCwgZGVwc0J5QnVuZGxlKTtcbiAgfVxuXG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7IC8vIElmIG5vIHBhcmVudHMsIHRoZSBhc3NldCBpcyBuZXcuIFByZXZlbnQgcmVsb2FkaW5nIHRoZSBwYWdlLlxuXG4gIGlmICghcGFyZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRzLnNvbWUoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2sodlswXSwgdlsxXSwgbnVsbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRSdW4oYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuKSB7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUuaG90RGF0YSA9IHt9O1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCkge1xuICAgIGNhY2hlZC5ob3QuZGF0YSA9IGJ1bmRsZS5ob3REYXRhO1xuICB9XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZShpZCk7XG4gIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHZhciBhc3NldHNUb0Fsc29BY2NlcHQgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhc3NldHNUb0Fsc29BY2NlcHQgJiYgYXNzZXRzVG9BY2NlcHQubGVuZ3RoKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVbbWV0aG9kLXVuYmluZGluZ11cbiAgICAgICAgYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShhc3NldHNUb0FjY2VwdCwgYXNzZXRzVG9BbHNvQWNjZXB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjY2VwdGVkQXNzZXRzW2lkXSA9IHRydWU7XG59IiwiLy8gQWJzdHJhY3Rpb24gb2YgdGhlIFJFQ0FQIHNlcnZlciBBUElzLlxyXG4vLyBQdWJsaWMgaW1wdXJlIGZ1bmN0aW9ucy4gIChTZWUgdXRpbHMuanMgZm9yIGRldGFpbHMgb24gZGVmaW5pbmcgc2VydmljZXMuKVxyXG5mdW5jdGlvbiBSZWNhcCgpIHtcclxuICBjb25zdCBERUJVRyA9IGZhbHNlLCAvLyBXaGVuIHRydWUsIGRvbid0IHB1Ymxpc2ggd2hhdCdzIHNlbnQgdG8gdGhlIGFyY2hpdmUuXHJcbiAgICBTRVJWRVJfUk9PVCA9ICdodHRwczovL3d3dy5jb3VydGxpc3RlbmVyLmNvbS9hcGkvcmVzdC92My8nLFxyXG4gICAgVVBMT0FEX1RZUEVTID0ge1xyXG4gICAgICAnRE9DS0VUJzogMSxcclxuICAgICAgJ0FUVEFDSE1FTlRfUEFHRSc6IDIsXHJcbiAgICAgICdQREYnOiAzLFxyXG4gICAgICAnRE9DS0VUX0hJU1RPUllfUkVQT1JUJzogNCxcclxuICAgICAgJ0FQUEVMTEFURV9ET0NLRVQnOiA1LFxyXG4gICAgICAnQVBQRUxMQVRFX0FUVEFDSE1FTlRfUEFHRSc6IDYsXHJcbiAgICAgICdDTEFJTVNfUkVHSVNURVJfUEFHRSc6IDksXHJcbiAgICAgICdaSVAnOiAxMCxcclxuICAgIH07XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgICAvL0dpdmVuIGEgcGFjZXJfZG9jX2lkLCByZXR1cm4gdGhlIHBhY2VyX2Nhc2VfaWQgdGhhdCBpdCBpcyBhc3NvY2lhdGVkIHdpdGhcclxuICAgIGdldFBhY2VyQ2FzZUlkRnJvbVBhY2VyRG9jSWQ6IGFzeW5jIGZ1bmN0aW9uIChwYWNlcl9kb2NfaWQsIGNiKSB7XHJcbiAgICAgIGNvbnN0IHRhYklkID0gY2IudGFiLmlkO1xyXG4gICAgICBjb25zdCB0YWJTdG9yZSA9IGF3YWl0IGdldEl0ZW1zRnJvbVN0b3JhZ2UodGFiSWQpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRvY3NUb0Nhc2VzID0gdGFiU3RvcmUuZG9jc1RvQ2FzZXM7XHJcbiAgICAgICAgY29uc3QgcGFjZXJDYXNlSWQgPSBkb2NzVG9DYXNlc1twYWNlcl9kb2NfaWRdO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhbXHJcbiAgICAgICAgICAnUkVDQVA6IEdvdCBjYXNlIG51bWJlcicsIHBhY2VyQ2FzZUlkLFxyXG4gICAgICAgICAgJ2ZvciBwYWNlcl9kb2NfaWQ6JywgcGFjZXJfZG9jX2lkXS5qb2luKCcgJylcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBjYihwYWNlckNhc2VJZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBzdG9yZWQgcGFjZXJfY2FzZV9pZCBmb3VuZCBpbiBjaHJvbWUgc3RvcmFnZScpO1xyXG4gICAgICAgIHJldHVybiBjYihudWxsKTtcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQXNrcyBSRUNBUCB3aGV0aGVyIGl0IGhhcyBhIGRvY2tldCBwYWdlIGZvciB0aGUgc3BlY2lmaWVkIGNhc2UuICBJZiBpdFxyXG4gICAgLy8gaXMgYXZhaWxhYmxlLCB0aGUgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2l0aCBhXHJcbiAgICBnZXRBdmFpbGFiaWxpdHlGb3JEb2NrZXQ6IGZ1bmN0aW9uIChwYWNlcl9jb3VydCwgcGFjZXJfY2FzZV9pZCwgY2IpIHtcclxuICAgICAgaWYgKCFwYWNlcl9jYXNlX2lkKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiUkVDQVA6IENhbm5vdCBnZXQgYXZhaWxhYmlsaXR5IG9mIGRvY2tldCB3aXRob3V0IHBhY2VyX2Nhc2VfaWQuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmluZm8oYFJFQ0FQOiBHZXR0aW5nIGF2YWlsYWJpbGl0eSBvZiBkb2NrZXQgJHtwYWNlcl9jYXNlX2lkfSBhdCBgICtcclxuICAgICAgICBgJHtwYWNlcl9jb3VydH1gKTtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IGAke1NFUlZFUl9ST09UfWRvY2tldHMvYCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwYWNlcl9jYXNlX2lkOiBwYWNlcl9jYXNlX2lkLFxyXG4gICAgICAgICAgLy8gRW5zdXJlIFJFQ0FQIGlzIGEgc291cmNlIHNvIHdlIGRvbid0IGdldCBiYWNrIElEQi1vbmx5IGRvY2tldHMuXHJcbiAgICAgICAgICBzb3VyY2VfX2luOiAnMSwzLDUsNyw5LDExLDEzLDE1JyxcclxuICAgICAgICAgIGNvdXJ0OiBQQUNFUi5jb252ZXJ0VG9Db3VydExpc3RlbmVyQ291cnQocGFjZXJfY291cnQpLFxyXG4gICAgICAgICAgZmllbGRzOiAnYWJzb2x1dGVfdXJsLGRhdGVfbW9kaWZpZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgdGV4dFN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmluZm8oYFJFQ0FQOiBHb3Qgc3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHNlcnZlciBvbiBkb2NrZXQgYCArXHJcbiAgICAgICAgICAgIGBxdWVyeTogJHt0ZXh0U3RhdHVzfWApO1xyXG4gICAgICAgICAgY2IoZGF0YSB8fCBudWxsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgUkVDQVA6IEFqYXggZXJyb3IgZ2V0dGluZyBkb2NrZXQgYXZhaWxhYmlsaXR5LiBTdGF0dXM6IGAgK1xyXG4gICAgICAgICAgICBgJHt0ZXh0U3RhdHVzfS4gRXJyb3I6ICR7ZXJyb3JUaHJvd259LmApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEFza3MgUkVDQVAgd2hldGhlciBpdCBoYXMgdGhlIHNwZWNpZmllZCBkb2N1bWVudHMuXHJcbiAgICBnZXRBdmFpbGFiaWxpdHlGb3JEb2N1bWVudHM6IGZ1bmN0aW9uIChwYWNlcl9kb2NfaWRzLCBwYWNlcl9jb3VydCwgY2IpIHtcclxuICAgICAgLy8gVGhlIHNlcnZlciBBUEkgdGFrZXMganVzdCBvbmUgXCJjb3VydFwiIHBhcmFtZXRlciBmb3IgYWxsIHRoZSBVUkxzLCBzbyB3ZVxyXG4gICAgICAvLyBwaWNrIHRoZSBjb3VydCBiYXNlZCBvbiB0aGUgZmlyc3QgVVJMIGFuZCBhc3N1bWUgdGhlIHJlc3QgYXJlIHRoZSBzYW1lLlxyXG4gICAgICBjb25zb2xlLmluZm8oXCJSRUNBUDogTWFkZSBpdCBpbmZvIHRoZSBnZXRBdmFpbGFiaWxpdHlGb3JEb2N1bWVudHMgZnVuY3Rpb25cIik7XHJcblxyXG4gICAgICBsZXQgY2xfY291cnQgPSBQQUNFUi5jb252ZXJ0VG9Db3VydExpc3RlbmVyQ291cnQocGFjZXJfY291cnQpO1xyXG4gICAgICBsZXQgcGFjZXJfZG9jX2lkX2NzdiA9IHBhY2VyX2RvY19pZHMuam9pbihcIixcIik7XHJcbiAgICAgIGlmIChjbF9jb3VydCAmJiBwYWNlcl9kb2NfaWRfY3N2KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHVybDogYCR7U0VSVkVSX1JPT1R9cmVjYXAtcXVlcnkvYCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgcGFjZXJfZG9jX2lkX19pbjogcGFjZXJfZG9jX2lkX2NzdixcclxuICAgICAgICAgICAgZG9ja2V0X2VudHJ5X19kb2NrZXRfX2NvdXJ0OiBjbF9jb3VydFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKGBSRUNBUDogR290IHN1Y2Nlc3NmdWwgcmVzcG9uc2Ugd2hlbiBsb29raW5nIHVwIGRvY3VtZW50IGAgK1xyXG4gICAgICAgICAgICAgIGBhdmFpbGFiaWxpdHk6ICR7dGV4dFN0YXR1c31gKTtcclxuICAgICAgICAgICAgY2IoZGF0YSB8fCBudWxsKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgUkVDQVA6IEFqYXggZXJyb3IgZ2V0dGluZyBkb2N1bWVudCBhdmFpbGFiaWxpdHkuIGAgK1xyXG4gICAgICAgICAgICAgIGBTdGF0dXM6ICR7dGV4dFN0YXR1c30uIEVycm9yOiAke2Vycm9yVGhyb3dufWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNiKHt9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVcGxvYWRzIGFuIEhUTUwgZG9ja2V0IG9yIGRvY2tldCBoaXN0b3J5IHJlcG9ydCB0byB0aGUgUkVDQVAgc2VydmVyXHJcbiAgICB1cGxvYWREb2NrZXQ6IGZ1bmN0aW9uIChwYWNlcl9jb3VydCwgcGFjZXJfY2FzZV9pZCwgaHRtbCwgdXBsb2FkX3R5cGUsIGNiKSB7XHJcbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvdXJ0JywgUEFDRVIuY29udmVydFRvQ291cnRMaXN0ZW5lckNvdXJ0KHBhY2VyX2NvdXJ0KSk7XHJcbiAgICAgIHBhY2VyX2Nhc2VfaWQgJiYgZm9ybURhdGEuYXBwZW5kKCdwYWNlcl9jYXNlX2lkJywgcGFjZXJfY2FzZV9pZCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXBsb2FkX3R5cGUnLCBVUExPQURfVFlQRVNbdXBsb2FkX3R5cGVdKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlcGF0aF9sb2NhbCcsIG5ldyBCbG9iKFtodG1sXSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSkpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RlYnVnJywgREVCVUcpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogYCR7U0VSVkVSX1JPT1R9cmVjYXAvYCxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhgUkVDQVA6IFN1Y2Nlc3NmdWxseSB1cGxvYWRlZCBkb2NrZXQgb3IgZG9ja2V0IGAgK1xyXG4gICAgICAgICAgICBgaGlzdG9yeSByZXBvcnQ6ICcke3RleHRTdGF0dXN9JyB3aXRoIHByb2Nlc3NpbmcgcXVldWUgaWQgb2YgYCArXHJcbiAgICAgICAgICAgIGAke2RhdGFbJ2lkJ119YCk7XHJcbiAgICAgICAgICBjYihkYXRhIHx8IG51bGwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBSRUNBUDogQWpheCBlcnJvciB1cGxvYWRpbmcgZG9ja2V0LiBTdGF0dXM6ICR7dGV4dFN0YXR1c30uYCArXHJcbiAgICAgICAgICAgIGBFcnJvcjogJHtlcnJvclRocm93bn1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVcGxvYWRzIGEgXCJEb2N1bWVudCBTZWxlY3Rpb24gTWVudVwiIHBhZ2UgdG8gdGhlIFJFQ0FQIHNlcnZlciwgY2FsbGluZ1xyXG4gICAgLy8gdGhlIGNhbGxiYWNrIHdpdGggYSBib29sZWFuIHN1Y2Nlc3MgZmxhZy5cclxuICAgIHVwbG9hZEF0dGFjaG1lbnRNZW51OiBmdW5jdGlvbiAocGFjZXJfY291cnQsIHBhY2VyX2Nhc2VfaWQsIGh0bWwsIGNiKSB7XHJcbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvdXJ0JywgUEFDRVIuY29udmVydFRvQ291cnRMaXN0ZW5lckNvdXJ0KHBhY2VyX2NvdXJ0KSk7XHJcbiAgICAgIC8vIHBhY2VyX2Nhc2VfaWQgaXMgbm90IGN1cnJlbnRseSB1c2VkIGJ5IGJhY2tlbmQsIGJ1dCBzZW5kIGFueXdheSBpZiB3ZVxyXG4gICAgICAvLyBoYXZlIGl0LlxyXG4gICAgICBwYWNlcl9jYXNlX2lkICYmIGZvcm1EYXRhLmFwcGVuZCgncGFjZXJfY2FzZV9pZCcsIHBhY2VyX2Nhc2VfaWQpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VwbG9hZF90eXBlJywgVVBMT0FEX1RZUEVTWydBVFRBQ0hNRU5UX1BBR0UnXSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZXBhdGhfbG9jYWwnLCBuZXcgQmxvYihbaHRtbF0sIHsgdHlwZTogJ3RleHQvaHRtbCcgfSkpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RlYnVnJywgREVCVUcpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogYCR7U0VSVkVSX1JPT1R9cmVjYXAvYCxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhgUkVDQVA6IFN1Y2Nlc3NmdWxseSB1cGxvYWRlZCBhdHRhY2htZW50IHBhZ2U6ICcke3RleHRTdGF0dXN9JyBgICtcclxuICAgICAgICAgICAgYHdpdGggcHJvY2Vzc2luZyBxdWV1ZSBpZCBvZiAke2RhdGFbJ2lkJ119YCk7XHJcbiAgICAgICAgICBjYihkYXRhIHx8IG51bGwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBSRUNBUDogQWpheCBlcnJvciB1cGxvYWRpbmcgZG9ja2V0LiBTdGF0dXM6ICR7dGV4dFN0YXR1c30uYCArXHJcbiAgICAgICAgICAgIGBFcnJvcjogJHtlcnJvclRocm93bn1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBBc3luY2hyb25vdXNseSB1cGxvYWRzIGEgUERGIGRvY3VtZW50IHRvIHRoZSBSRUNBUCBzZXJ2ZXIsIGNhbGxpbmcgdGhlIGNhbGxiYWNrIHdpdGhcclxuICAgIC8vIGEgYm9vbGVhbiBzdWNjZXNzIGZsYWcuXHJcbiAgICB1cGxvYWREb2N1bWVudDogKFxyXG4gICAgICBwYWNlcl9jb3VydCxcclxuICAgICAgcGFjZXJfY2FzZV9pZCxcclxuICAgICAgcGFjZXJfZG9jX2lkLFxyXG4gICAgICBkb2N1bWVudF9udW1iZXIsXHJcbiAgICAgIGF0dGFjaG1lbnRfbnVtYmVyLFxyXG4gICAgICBjYlxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbyhbXHJcbiAgICAgICAgYFJFQ0FQOiBBdHRlbXB0aW5nIFBERiB1cGxvYWQgdG8gUkVDQVAgQXJjaGl2ZSB3aXRoIGRldGFpbHM6YCxcclxuICAgICAgICBgcGFjZXJfY291cnQ6ICR7cGFjZXJfY291cnR9YCxcclxuICAgICAgICBgcGFjZXJfY2FzZV9pZDogJHtwYWNlcl9jYXNlX2lkfWAsXHJcbiAgICAgICAgYHBhY2VyX2RvY19pZDogJHtwYWNlcl9kb2NfaWR9YCxcclxuICAgICAgICBgZG9jdW1lbnRfbnVtYmVyOiAke2RvY3VtZW50X251bWJlcn0sYCxcclxuICAgICAgICBgYXR0YWNobWVudF9udW1iZXI6ICR7YXR0YWNobWVudF9udW1iZXJ9LmBcclxuICAgICAgXS5qb2luKCcgJykpO1xyXG5cclxuICAgICAgLy8gZXh0cmFjdCB0aGUgdGFiSWQgZnJvbSB0aGUgZW5oYW5jZWQgY2FsbGJhY2tcclxuICAgICAgLy8gd2FpdCBmb3IgY2hyb21lLnN0b3JhZ2UubG9jYWwgdG8gbG9hZCB0aGUgdGFiU3RvcmFnZVxyXG4gICAgICBnZXRJdGVtc0Zyb21TdG9yYWdlKGNiLnRhYi5pZClcclxuICAgICAgICAudGhlbihhc3luYyAodGFiU3RvcmFnZSkgPT4ge1xyXG4gICAgICAgICAgLy8gY3JlYXRlIGZvcm0gZGF0YVxyXG4gICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGZldGNoKHRhYlN0b3JhZ2VbJ3BkZl9ibG9iJ10pLnRoZW4ocmVzID0+IHJlcy5ibG9iKCkpO1xyXG4gICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvdXJ0JywgUEFDRVIuY29udmVydFRvQ291cnRMaXN0ZW5lckNvdXJ0KHBhY2VyX2NvdXJ0KSk7XHJcbiAgICAgICAgICBwYWNlcl9jYXNlX2lkICYmIGZvcm1EYXRhLmFwcGVuZCgncGFjZXJfY2FzZV9pZCcsIHBhY2VyX2Nhc2VfaWQpO1xyXG4gICAgICAgICAgcGFjZXJfZG9jX2lkICYmIGZvcm1EYXRhLmFwcGVuZCgncGFjZXJfZG9jX2lkJywgcGFjZXJfZG9jX2lkKTtcclxuICAgICAgICAgIGRvY3VtZW50X251bWJlciAmJiBmb3JtRGF0YS5hcHBlbmQoJ2RvY3VtZW50X251bWJlcicsIGRvY3VtZW50X251bWJlcik7XHJcbiAgICAgICAgICBpZiAoYXR0YWNobWVudF9udW1iZXIgJiYgYXR0YWNobWVudF9udW1iZXIgIT09ICcwJykge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2F0dGFjaG1lbnRfbnVtYmVyJywgYXR0YWNobWVudF9udW1iZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlcGF0aF9sb2NhbCcsIGJsb2IpO1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1cGxvYWRfdHlwZScsIFVQTE9BRF9UWVBFU1snUERGJ10pO1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkZWJ1ZycsIERFQlVHKTtcclxuICAgICAgICAgIHJldHVybiBmb3JtRGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZmV0Y2goYCR7U0VSVkVSX1JPT1R9cmVjYXAvYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBib2R5OiBkYXRhLFxyXG4gICAgICAgICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBUb2tlbiAke044N0dDMn1gIH1cclxuICAgICAgICB9KSlcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5pbmZvKGBSRUNBUDogU3VjY2Vzc2Z1bGx5IHVwbG9hZGVkIFBERjogJ1N1Y2Nlc3MnIGAgK1xyXG4gICAgICAgICAgICBgd2l0aCBwcm9jZXNzaW5nIHF1ZXVlIGlkIG9mICR7cmVzdWx0LmlkfWApO1xyXG4gICAgICAgICAgY2IocmVzdWx0IHx8IG51bGwpO1xyXG4gICAgICAgICAgZGVzdHJveVRhYlN0b3JhZ2UoY2IudGFiLmlkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhgUkVDQVA6IEVycm9yIHVwbG9hZGluZyBQREY6ICR7ZXJyb3J9YCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVcGxvYWQgYSB6aXAgZmlsZSB0byB0aGUgUkVDQVAgc2VydmVyLCBjYWxsaW5nIHRoZSBjYiB3aXRoIG9rIGZsYWdcclxuICAgIHVwbG9hZFppcEZpbGU6IChcclxuICAgICAgcGFjZXJfY291cnQsXHJcbiAgICAgIHBhY2VyX2Nhc2VfaWQsXHJcbiAgICAgIGNiXHJcbiAgICApID0+IHtcclxuICAgICAgY29uc29sZS5pbmZvKFtcclxuICAgICAgICBgUkVDQVA6IEF0dGVtcHRpbmcgWmlwIHVwbG9hZCB0byBSRUNBUCBBcmNoaXZlIHdpdGggZGV0YWlsczpgLFxyXG4gICAgICAgIGBwYWNlcl9jb3VydDogJHtwYWNlcl9jb3VydH1gLFxyXG4gICAgICAgIGBwYWNlcl9jYXNlX2lkOiAke3BhY2VyX2Nhc2VfaWR9YCxcclxuICAgICAgXS5qb2luKCcgJykpO1xyXG5cclxuICAgICAgLy8gZXh0cmFjdCB0aGUgdGFiSWQgZnJvbSB0aGUgZW5oYW5jZWQgY2FsbGJhY2tcclxuICAgICAgLy8gd2FpdCBmb3IgY2hyb21lLnN0b3JhZ2UubG9jYWwgdG8gbG9hZCB0aGUgdGFiU3RvcmFnZVxyXG4gICAgICBnZXRJdGVtc0Zyb21TdG9yYWdlKGNiLnRhYi5pZClcclxuICAgICAgICAudGhlbihhc3luYyAodGFiU3RvcmFnZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZG9jSWQgPSAodGFiU3RvcmFnZS5kb2NJZCAmJiB0YWJTdG9yYWdlLmRvY0lkICE9PSAndW5kZWZpbmVkJykgPyB0YWJTdG9yYWdlLmRvY0lkIDogbnVsbDtcclxuICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBmZXRjaCh0YWJTdG9yYWdlWyd6aXBfYmxvYiddKS50aGVuKHJlcyA9PiByZXMuYmxvYigpKTtcclxuICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybURhdGFcclxuICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvdXJ0JywgUEFDRVIuY29udmVydFRvQ291cnRMaXN0ZW5lckNvdXJ0KHBhY2VyX2NvdXJ0KSk7XHJcbiAgICAgICAgICBwYWNlcl9jYXNlX2lkICYmIGZvcm1EYXRhLmFwcGVuZCgncGFjZXJfY2FzZV9pZCcsIHBhY2VyX2Nhc2VfaWQpO1xyXG4gICAgICAgICAgZG9jSWQgJiYgZm9ybURhdGEuYXBwZW5kKCdwYWNlcl9kb2NfaWQnLCBkb2NJZCk7XHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VwbG9hZF90eXBlJywgVVBMT0FEX1RZUEVTWydaSVAnXSk7XHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RlYnVnJywgREVCVUcpO1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlcGF0aF9sb2NhbCcsIGJsb2IpO1xyXG4gICAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBmZXRjaChgJHtTRVJWRVJfUk9PVH1yZWNhcC9gLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYFRva2VuICR7Tjg3R0MyfWAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmluZm8oYFJFQ0FQOiBTdWNjZXNzZnVsbHkgdXBsb2FkZWQgWmlwOiAnU3VjY2VzcycgYCArXHJcbiAgICAgICAgICAgIGB3aXRoIHByb2Nlc3NpbmcgcXVldWUgaWQgb2YgJHtyZXN1bHQuaWR9YCk7XHJcbiAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgZGVzdHJveVRhYlN0b3JhZ2UoY2IudGFiLmlkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjYihudWxsKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBSRUNBUDogRXJyb3IgdXBsb2FkaW5nIFppcDogJHtlcnJvcn1gKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBsb2FkQ2xhaW1zUmVnaXN0ZXI6IGFzeW5jIGZ1bmN0aW9uIChwYWNlckNvdXJ0LCBwYWNlckNhc2VJZCwgY2xhaW1zUGFnZUh0bWwsIGNiKSB7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSBuZXcgQmxvYihbY2xhaW1zUGFnZUh0bWxdLCB7IHR5cGU6ICd0ZXh0L2h0bWwnIH0pO1xyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3BhY2VyX2Nhc2VfaWQnLCBwYWNlckNhc2VJZCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY291cnQnLCBQQUNFUi5jb252ZXJ0VG9Db3VydExpc3RlbmVyQ291cnQocGFjZXJDb3VydCkpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VwbG9hZF90eXBlJywgVVBMT0FEX1RZUEVTWydDTEFJTVNfUkVHSVNURVJfUEFHRSddKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlcGF0aF9sb2NhbCcsIGh0bWwpO1xyXG4gICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgVG9rZW4gJHtOODdHQzJ9YFxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZldGNoKGAke1NFUlZFUl9ST09UfXJlY2FwL2AsIGZldGNoT3B0aW9ucylcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSRUNBUDogQ2xhaW1zIFBhZ2UgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgY2IocmVzdWx0IHx8IG51bGwpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGBSRUNBUDogVGhlIGZvbGxvd2luZyBlcnJvciBvY2N1cnJlZDogJHtlcnJvcn1gKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjYXAuanMubWFwIn0=
