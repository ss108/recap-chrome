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
})({"6QEaO":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "cbd798d872052860";
module.bundle.HMR_BUNDLE_ID = "4a34b3bb55d1d10d";
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

},{}],"jjgmj":[function(require,module,exports) {
// -------------------------------------------------------------------------
// Browser-specific utilities for use in background pages and content scripts.
// In Chrome, content scripts can only communicate with background pages using
// message passing (see http://developer.chrome.com/extensions/messaging.html).
// Sometimes the content script needs to call into a background page in order
// to persist data from page to page or to use certain permissions, so for
// convenience we wrap the message-passing machinery using a pair of functions,
// exportInstance() and importInstance().  Here's how to use them:
//
// 1. Write a service by defining a no-argument constructor function.  The
//    name of the function identifies the service.  The function should return
//    an object whose methods all take a callback (cb) as the last argument and
//    call the callback with the return value (rv).  All arguments and return
//    values must be JSON-serializable.  The caller's tab is provided as cb.tab.
//
// 2. Include the service in both the background page and the content script
//    (i.e. in manifest.json, the service's JS file should appear in both the
//    background: {scripts: [...]} and content_scripts: {js: [...]} lists).
//
// 3. In the background page, call exportInstance on the constructor).  This
//    creates a instance that will serve requests from the content script.
//    Only one singleton instance can be exported.
//
// 4. In the content script, call importInstance on the same constructor to get
//    an object.  Then call methods on the object, always passing a callback
//    function or null as the last argument.
//
// Here's an example.
//
// Service definition:
//   function Counter() {
//     var count = 0;
//     return {inc: function (amount, cb) { cb(count += amount); }};
//   }
//
// In the background page:
//   exportInstance(Counter);
//
// In the content script:
//   var counter = importInstance(Counter);
//   counter.inc(6, function (rv) { alert('count is ' + rv); });
// Makes a singleton instance in a background page callable from a content
// script, using Chrome's message system.  See above for details.
function exportInstance(constructor) {
    let name = constructor.name; // function name identifies the service
    let instance = new constructor();
    chrome.runtime.onMessage.addListener(function(request, sender, cb) {
        if (request.name === name) {
            let pack = function() {
                cb(Array.prototype.slice.apply(arguments));
            };
            pack.tab = sender.tab;
            instance[request.verb].apply(instance, request.args.concat([
                pack
            ]));
            return true; // allow cb to be called after listener returns
        }
    });
}
// Gets an object that can be used in a content script to invoke methods on an
// instance exported from the background page.  See above for details.
function importInstance(constructor) {
    var name = constructor.name;
    var sender = {
    };
    for(var verb1 in new constructor())(function(verb) {
        sender[verb] = function() {
            var args = Array.prototype.slice.call(arguments, 0, -1);
            var cb = arguments[arguments.length - 1] || function() {
            };
            if (typeof cb !== 'function') throw 'Service invocation error: last argument is not a callback';
            var unpack = function(results) {
                cb.apply(null, results);
            };
            chrome.runtime.sendMessage({
                name: name,
                verb: verb,
                args: args
            }, unpack);
        };
    })(verb1);
    return sender;
}
function getHostname(url) {
    // Extract the hostname from a URL.
    return $('<a>').prop('href', url).prop('hostname');
}
// Makes an XHR to the given URL, calling a callback with the returned content
// type and response (interpreted according to responseType).  See XHR2 spec
// for details on responseType and response.  Uses GET if postData is null or
// POST otherwise.  postData can be any type accepted by XMLHttpRequest.send().
function httpRequest(url, postData, callback) {
    let type = null, result = null, xhr;
    // Firefox requires a special call to get an XMLHttpRequest() that
    // sends Referer headers, which is CMECF needs because of their
    // choice in how to fix the 2017 cross-site/same-origin security
    // vulnerability.
    try {
        // Firefox. See: https://discourse.mozilla.org/t/webextension-xmlhttprequest-issues-no-cookies-or-referrer-solved/11224/18
        xhr = XPCNativeWrapper(new window.wrappedJSObject.XMLHttpRequest());
    } catch (evt) {
        // Chrome.
        xhr = new XMLHttpRequest();
    }
    xhr.responseType = 'arraybuffer';
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                type = xhr.getResponseHeader('Content-Type');
                result = xhr.response;
            }
            callback && callback(type, result, xhr);
        }
    };
    if (postData) {
        xhr.open('POST', url);
        xhr.send(postData);
    } else {
        xhr.open('GET', url);
        xhr.send();
    }
}
// make token available to helper functions
const N87GC2 = "45c7946dd8400ad62662565cf79da3c081d9b0e5";
// helper functions for chrome local storage
const getItemsFromStorage = (key)=>new Promise((resolve, reject)=>{
        const stringKey = typeof key === 'number' ? key.toString() : key;
        chrome.storage.local.get(stringKey, (result)=>{
            resolve(result[stringKey]);
        });
    })
;
const saveItemToStorage = (dataObj)=>new Promise((resolve, reject)=>chrome.storage.local.set(dataObj, ()=>resolve(console.log(`RECAP: Item saved in storage at tabId: ${Object.keys(dataObj)[0]}`))
        )
    )
;
const destroyTabStorage = (key)=>{
    chrome.storage.local.get(null, (store)=>{
        if (store[key]) chrome.storage.local.remove(key.toString(), ()=>console.log(`Removed item from storage with key ${key}`)
        );
    });
};
// initialize the store with an empty object
const getTabIdForContentScript = ()=>new Promise((resolve)=>{
        chrome.runtime.sendMessage({
            message: 'requestTabId'
        }, (msg)=>resolve(msg)
        );
    })
;
// object takes shape of { [tabId]: { ...data } }
const updateTabStorage = async (object)=>{
    const tabId = Object.keys(object)[0];
    const updatedVars = object[tabId];
    const store = await getItemsFromStorage(tabId);
    // keep store immutable
    saveItemToStorage({
        [tabId]: {
            ...store,
            ...updatedVars
        }
    });
};
// Default settings for any jquery $.ajax call.
$.ajaxSetup({
    // The dataType parameter is a security measure requested by Opera code
    // review. 'json' is the default, but if it is not explicitly set, and if the
    // CourtListener server was hacked, the API could be used to serve JSONP to
    // our users. If the server did that, all of our users would be at risk of
    // running custom JavaScript. We don't want that, so we set this explicitly.
    dataType: 'json',
    beforeSend: function(xhr, settings) {
        let hostname = getHostname(settings.url);
        if (hostname === "www.courtlistener.com") // If you are reading this code, we ask that you please refrain from
        // using this token. Unfortunately, there is no way to distribute
        // extensions that use hardcoded tokens except through begging and using
        // funny variable names. Do not abuse the RECAP service.
        xhr.setRequestHeader("Authorization", `Token ${N87GC2}`);
    }
});
const blobToDataURL = (blob)=>{
    return new Promise((resolve, reject)=>{
        let reader = new FileReader();
        reader.onerror = reject;
        reader.onload = (e)=>resolve(reader.result)
        ;
        reader.readAsDataURL(blob);
    });
};
// Debug logging function. First argument is a debug level, remainder are variable args
// for console.log(). If the global debug level matches the first arg, calls console.log().
// Example usage:
//    debug(5, "This message is only seen when the debug level is %d or higher.", 5);
// Debug levels:
//   1   General informational
//   3   Developer debugging
var DEBUGLEVEL = 1;
function debug(level, varargs) {
    if (DEBUGLEVEL >= level) {
        var args = Array.prototype.slice.call(arguments, 1);
        args[0] = `RECAP debug [${level}]: ` + args[0];
        return console.log.apply(this, args);
    }
}
// inject a "follow this case on RECAP" button
const recapAlertButton = (court, pacerCaseId, isActive)=>{
    const anchor = document.createElement('a');
    anchor.setAttribute('id', 'recap-alert-button');
    anchor.setAttribute('role', 'button');
    anchor.setAttribute('aria-disabled', isActive ? 'true' : false);
    if (!isActive) anchor.classList.add('disabled');
    const icon = isActive ? 'icon' : 'grey';
    const text = isActive ? 'Create an Alert for this Case on RECAP' : 'Alerts not yet Supported for this Docket';
    const url = new URL('https://www.courtlistener.com/alert/docket/new/');
    url.searchParams.append('pacer_case_id', pacerCaseId);
    url.searchParams.append('court_id', court);
    anchor.href = url.toString();
    const img = document.createElement('img');
    img.src = chrome.extension.getURL(`assets/images/${icon}-16.png`);
    anchor.innerHTML = `${img.outerHTML} ${text}`;
    return anchor;
};
const recapBanner = (result)=>{
    const div = document.createElement('div');
    div.setAttribute('class', 'recap-banner');
    const anchor = document.createElement('a');
    anchor.title = 'Docket is available for free in the RECAP Archive.';
    anchor.target = '_blank';
    anchor.href = `https://www.courtlistener.com${result.absolute_url}`;
    const img = document.createElement('img');
    img.src = chrome.extension.getURL('assets/images/icon-16.png');
    const time = document.createElement('time');
    time.setAttribute('data-livestamp', result.date_modified);
    time.setAttribute('title', result.date_modified);
    time.innerHTML = result.date_modified;
    const anchorHtml = `${img.outerHTML} View and Search this docket as of ${time.outerHTML} for free from RECAP`;
    const small = document.createElement('small');
    small.innerText = 'Note that archived dockets may be out of date';
    anchor.innerHTML = anchorHtml;
    div.appendChild(anchor);
    div.appendChild(document.createElement('br'));
    div.appendChild(small);
    return div;
};

},{}]},["6QEaO","jjgmj"], "jjgmj", "parcelRequire9981")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUFHLENBQUMsUUFBUSxHQUFHLENBQVc7QUFBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUk7QUFBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUs7QUFBQyxHQUFHLENBQUMsWUFBWSxHQUFHLENBQWtCO0FBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBa0I7QUFBQyxDQUFZO1NBRWhLLDBCQUEwQixDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsQ0FBQztJQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBVyxjQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRSxDQUFDO1FBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRywyQkFBMkIsQ0FBQyxDQUFDLE1BQU0sY0FBYyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFRLFNBQUUsQ0FBQztZQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFBLENBQUM7WUFBRSxNQUFNLENBQUMsQ0FBQztnQkFBQyxDQUFDLEVBQUUsQ0FBQztnQkFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFBQyxJQUFJLEVBQUUsSUFBSTtvQkFBQyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUFDLElBQUksRUFBRSxLQUFLO3dCQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFBSSxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDLEVBQUUsQ0FBQztZQUFDLENBQUM7UUFBRSxDQUFDO1FBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBdUk7SUFBRyxDQUFDO0lBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksRUFBRSxNQUFNLEdBQUcsS0FBSyxFQUFFLEdBQUc7SUFBRSxNQUFNLENBQUMsQ0FBQztRQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQUssQ0FBQztRQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJO1lBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLENBQUMsSUFBSTtRQUFFLENBQUM7UUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUFDLE1BQU0sR0FBRyxJQUFJO1lBQUUsR0FBRyxHQUFHLEdBQUc7UUFBRSxDQUFDO1FBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLEVBQUUsR0FBRyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTTtZQUFJLENBQUMsUUFBUyxDQUFDO2dCQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFBRSxDQUFDO1FBQUMsQ0FBQztJQUFDLENBQUM7QUFBRSxDQUFDO1NBRXQ5QiwyQkFBMkIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLE1BQU07SUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFRLFNBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxNQUFNO0lBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBUSxXQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSTtJQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBSyxRQUFJLENBQUMsS0FBSyxDQUFLLE1BQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBVyx5REFBK0MsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFBRyxDQUFDO1NBRXZaLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTTtJQUFFLEdBQUcsQ0FBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUFLLE1BQU0sQ0FBQyxJQUFJO0FBQUUsQ0FBQztBQUV2TCxFQUF5RCxBQUF6RCxxREFBeUQsQUFBekQsRUFBeUQsQ0FFekQsRUFnQ0UsQUFoQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NFLEFBaENGLEVBZ0NFLENBQ0YsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUE0QjtBQUM3QyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTtTQUUzQixNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVTtJQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDVixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQzNCLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUNwQixpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDckIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksUUFBUSxHQUFJLENBQUM7WUFBQSxDQUFDO1FBQ2pELENBQUM7UUFDRCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTO0FBQ25DLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNO0FBQzdCLEdBQUcsQ0FBQyxhQUFhLEVBRWYsY0FBYyxFQUVkLGNBQWM7U0FJUCxXQUFXLEdBQUcsQ0FBQztJQUN0QixNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQU0sV0FBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFXO0FBQy9GLENBQUM7U0FFUSxPQUFPLEdBQUcsQ0FBQztJQUNsQixNQUFNLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJO0FBQ2xDLENBQUMsQUFBQyxDQUF3QyxBQUF4QyxFQUF3QyxBQUF4QyxzQ0FBd0M7QUFHMUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07QUFFakMsRUFBRSxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsZUFBZSxLQUFLLE1BQU0sQ0FBQyxTQUFTLEtBQUssQ0FBVyxZQUFFLENBQUM7SUFDN0UsR0FBRyxDQUFDLFFBQVEsR0FBRyxXQUFXO0lBQzFCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTztJQUNsQixHQUFHLENBQUMsUUFBUSxHQUFHLFVBQVUsSUFBSSxRQUFRLENBQUMsUUFBUSxJQUFJLENBQVEsMENBQW1DLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBSyxPQUFHLENBQUk7SUFDMUgsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFLLE9BQUcsUUFBUSxJQUFJLElBQUksR0FBRyxDQUFHLEtBQUcsSUFBSSxHQUFHLENBQUUsS0FBSSxDQUFHLElBQUcsQ0FBYSxBQUFiLEVBQWEsQUFBYixXQUFhO0lBRW5HLEVBQUUsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFFLEtBQUssRUFFNUIsQ0FBQztRQUNELGFBQWEsR0FBRyxDQUFDO1FBQUEsQ0FBQztRQUdsQixjQUFjLEdBQUcsQ0FBQztRQUFBLENBQUM7UUFHbkIsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixHQUFHLENBQUMsSUFBSSxHQUVOLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUk7UUFFdkIsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBUSxTQUFFLENBQUM7WUFDM0IsRUFBdUMsQUFBdkMscUNBQXVDO1lBQ3ZDLEVBQUUsRUFBRSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQVcsWUFDakMsa0JBQWtCO1lBR3BCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFFLEtBQUssRUFBRSxDQUFDO2dCQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxZQUFZO1lBQ3ZDLENBQUMsRUFBRyxDQUFvQixBQUFwQixFQUFvQixBQUFwQixrQkFBb0I7WUFFeEIsR0FBRyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBRSxLQUFLLEVBQUUsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBSyxRQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBSSxPQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ3ZILENBQUM7WUFFRCxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQ1osT0FBTyxDQUFDLEtBQUs7Z0JBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUUsS0FBSyxFQUFFLENBQUM7b0JBQy9CLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLO2dCQUNwQyxDQUFDO2dCQUVELEdBQUcsQ0FBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUksQ0FBQztvQkFDL0MsR0FBRyxDQUFDLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBRTVCLEVBQUUsR0FBRyxjQUFjLENBQUMsRUFBRSxHQUNwQixZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtnQkFFekMsQ0FBQztZQUNILENBQUMsTUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU07UUFFMUIsQ0FBQztRQUVELEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQU8sUUFBRSxDQUFDO1lBQzFCLEVBQStCLEFBQS9CLDZCQUErQjtZQUMvQixHQUFHLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUM1RCxLQUFLO1lBRVQsR0FBRyxDQUFDLENBQUM7Z0JBQ0gsR0FBRyxDQUFFLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFHLENBQUM7b0JBQ25ELEdBQUcsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEtBQUs7b0JBQ2hDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxLQUFLO29CQUN0RixPQUFPLENBQUMsS0FBSyxDQUFDLENBQWMsbUJBQU0sY0FBYyxDQUFDLE9BQU8sR0FBRyxDQUFJLE1BQUcsS0FBSyxHQUFHLENBQU0sUUFBRyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFJO2dCQUNoSCxDQUFGO1lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDYixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDakIsQ0FBQyxRQUFTLENBQUM7Z0JBQ1QsU0FBUyxDQUFDLENBQUM7WUFDYixDQUFDO1lBRUQsRUFBRSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBVyxZQUFFLENBQUM7Z0JBQ3BDLEVBQWdDLEFBQWhDLDhCQUFnQztnQkFDaEMsa0JBQWtCO2dCQUNsQixHQUFHLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFHLENBQWEsQUFBYixFQUFhLEFBQWIsV0FBYTtnQkFFdEUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTztZQUNuQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxFQUFFLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPO0lBQ3pCLENBQUM7SUFFRCxFQUFFLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBSSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBa0Q7SUFDOUQsQ0FBRjtBQUNILENBQUM7U0FFUSxrQkFBa0IsR0FBRyxDQUFDO0lBQzdCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVO0lBRWhELEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNaLE9BQU8sQ0FBQyxNQUFNO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUEyQjtJQUN2QyxDQUFEO0FBQ0gsQ0FBQztTQUVRLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFLO0lBQzFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsVUFBVTtJQUN2QixHQUFHLENBQUMsU0FBUyxHQUFHLENBQXdOO0lBRXhPLEdBQUcsQ0FBQyxVQUFVLEdBQUcsMEJBQTBCLENBQUMsV0FBVyxHQUNuRCxNQUFNO0lBRVYsR0FBRyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUUsVUFBVSxDQUFDLENBQUMsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUcsQ0FBQztZQUN0RCxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLO1lBQzdCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLO1lBQzFFLFNBQVMsSUFBSSxDQUF1SCx1SEFBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFpQyxrQ0FBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQW1DLG9DQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ2pTLE1BQU0sQ0FBQyxDQUFTLGNBQUcsSUFBSSxHQUFHLENBQVE7WUFDcEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFFLElBQUcsQ0FBNEIsNkJBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsQ0FBc0Qsc0RBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBMkMsOENBQUksQ0FBRSxHQUFFLENBQXNCO1FBQ2hQLENBQUM7SUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHO0lBQ2xCLENBQUMsUUFBUyxDQUFDO1FBQ1QsVUFBVSxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRUQsU0FBUyxJQUFJLENBQVE7SUFDckIsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTO0lBQzdCLE1BQU0sQ0FBQyxPQUFPO0FBQ2hCLENBQUM7U0FFUSxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFDOUIsRUFBcUMsQUFBckMsaUNBQXFDLEFBQXJDLEVBQXFDLENBQ3JDLENBQUM7SUFDQyxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO0lBRTVCLEVBQUUsR0FBRyxPQUFPLEVBQ1YsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUdYLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFFYixHQUFHLENBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FDZixHQUFHLENBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFHLENBQUM7UUFDeEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFFckIsRUFBRSxFQUFFLEdBQUcsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUEsTUFBTTtZQUFFLENBQUM7UUFBQSxDQUFDO0lBRTVCLENBQUM7SUFHSCxFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO0lBR3ZELE1BQU0sQ0FBQyxPQUFPO0FBQ2hCLENBQUM7U0FFUSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUztJQUU1QixPQUFPLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBSSxDQUFDO1FBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFDMUIsRUFBYSxBQUFiLFdBQWE7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJO0lBRXBDLENBQUM7SUFFRCxPQUFPLENBQUMsWUFBWSxDQUFDLENBQU0sT0FDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFNLE9BQUUsS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDLElBQUksQ0FBRyxLQUFHLElBQUksQ0FBQyxHQUFHLElBQUssQ0FBYSxBQUFiLEVBQWEsQUFBYixXQUFhO0lBRTFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVztBQUN4RCxDQUFDO0FBRUQsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJO1NBRVosU0FBUyxHQUFHLENBQUM7SUFDcEIsRUFBRSxFQUFFLFVBQVUsRUFDWixNQUFNO0lBR1IsVUFBVSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEdBQUksQ0FBQztRQUNuQyxHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUF3QjtRQUU5RCxHQUFHLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFJLENBQUM7WUFDdEMsRUFBZ0MsQUFBaEMsOEJBQWdDO1lBQ2hDLEdBQUcsQ0FBQyxJQUFJLEdBRU4sS0FBSyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBTTtZQUM5QixHQUFHLENBQUMsUUFBUSxHQUFHLFdBQVc7WUFDMUIsR0FBRyxDQUFDLG1CQUFtQixHQUFHLFFBQVEsS0FBSyxDQUFXLGFBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFnRCxrREFBRyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFHLEtBQUcsT0FBTztZQUNoTCxHQUFHLENBQUMsUUFBUSxtQkFBbUIsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxNQUFNLENBQUMsS0FBSyxtQkFBbUI7WUFFL0csRUFBRSxHQUFHLFFBQVEsRUFDWCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEIsQ0FBQztRQUVELFVBQVUsR0FBRyxJQUFJO0lBQ25CLENBQUMsRUFBRSxFQUFFO0FBQ1AsQ0FBQztTQUVRLFFBQVEsQ0FBQyxNQUFNLEVBRXRCLEtBQUssRUFFTCxDQUFDO0lBQ0QsR0FBRyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztJQUU1QixFQUFFLEdBQUcsT0FBTyxFQUNWLE1BQU07SUFHUixFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFLLE1BQ3RCLFNBQVM7U0FDSixFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFJLEtBQUUsQ0FBQztRQUMvQixHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWE7UUFFbEQsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ1QsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQVMsVUFBRSxDQUFRLFNBQUUsQ0FBUyxVQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ2xFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7Z0JBQUEsRUFBRTtnQkFBRSxJQUFJO1lBQUEsQ0FBQztRQUNoQyxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQ3RCLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUs7SUFFakMsQ0FBQztBQUNILENBQUM7U0FFUSxjQUFjLENBQUMsTUFBTSxFQUU1QixFQUFFLEVBRUYsWUFBWSxFQUVaLENBQUM7SUFDRCxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO0lBRTVCLEVBQUUsR0FBRyxPQUFPLEVBQ1YsTUFBTTtJQUdSLEVBQUUsRUFBRSxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQztRQUN4RCxFQUEyRSxBQUEzRSx5RUFBMkU7UUFDM0UsRUFBeUUsQUFBekUsdUVBQXlFO1FBQ3pFLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUNoQixNQUFNLENBQUMsSUFBSTtRQUdiLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsWUFBWTtJQUN2RCxDQUFDO0lBRUQsRUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQ2xCLE1BQU0sQ0FBQyxJQUFJO0lBR2IsYUFBYSxDQUFDLEVBQUUsSUFBSSxJQUFJO0lBQ3hCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQzVCLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFBLE1BQU07UUFBRSxFQUFFO0lBQUEsQ0FBQztJQUVoQyxFQUFFLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQzVELE1BQU0sQ0FBQyxJQUFJO0lBR2IsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHLENBQStELEFBQS9ELEVBQStELEFBQS9ELDZEQUErRDtJQUVqSCxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFDakIsTUFBTSxDQUFDLElBQUk7SUFHYixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUM7UUFDaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtJQUN4QyxDQUFDO0FBQ0gsQ0FBQztTQUVRLFlBQVksQ0FBQyxNQUFNLEVBRTFCLEVBQUUsRUFFRixDQUFDO0lBQ0QsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDNUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQUEsQ0FBQztJQUVuQixFQUFFLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPO0lBR2xDLEVBQUUsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFDN0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTztJQUNuQixDQUFDO0lBR0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUN0QixNQUFNLENBQUMsRUFBRTtJQUNULE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFFeEIsRUFBRSxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUM1RCxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxFQUFFLENBQUM7UUFDakQsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxRQUFRLEdBQUksQ0FBQztZQUN2QyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDMUMsQ0FBQztRQUVELEVBQUUsRUFBRSxrQkFBa0IsSUFBSSxjQUFjLENBQUMsTUFBTSxFQUM3QyxFQUErQixBQUEvQiw2QkFBK0I7UUFDL0IsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGtCQUFrQjtJQUVoRSxDQUFDO0lBR0gsY0FBYyxDQUFDLEVBQUUsSUFBSSxJQUFJO0FBQzNCLENBQUM7OztBQ2xZRCxFQUE0RSxBQUE1RSwwRUFBNEU7QUFDNUUsRUFBOEUsQUFBOUUsNEVBQThFO0FBRzlFLEVBQThFLEFBQTlFLDRFQUE4RTtBQUM5RSxFQUErRSxBQUEvRSw2RUFBK0U7QUFDL0UsRUFBNkUsQUFBN0UsMkVBQTZFO0FBQzdFLEVBQTBFLEFBQTFFLHdFQUEwRTtBQUMxRSxFQUErRSxBQUEvRSw2RUFBK0U7QUFDL0UsRUFBa0UsQUFBbEUsZ0VBQWtFO0FBQ2xFLEVBQUU7QUFDRixFQUEwRSxBQUExRSx3RUFBMEU7QUFDMUUsRUFBOEUsQUFBOUUsNEVBQThFO0FBQzlFLEVBQStFLEFBQS9FLDZFQUErRTtBQUMvRSxFQUE2RSxBQUE3RSwyRUFBNkU7QUFDN0UsRUFBZ0YsQUFBaEYsOEVBQWdGO0FBQ2hGLEVBQUU7QUFDRixFQUE0RSxBQUE1RSwwRUFBNEU7QUFDNUUsRUFBNkUsQUFBN0UsMkVBQTZFO0FBQzdFLEVBQTJFLEFBQTNFLHlFQUEyRTtBQUMzRSxFQUFFO0FBQ0YsRUFBNEUsQUFBNUUsMEVBQTRFO0FBQzVFLEVBQTBFLEFBQTFFLHdFQUEwRTtBQUMxRSxFQUFrRCxBQUFsRCxnREFBa0Q7QUFDbEQsRUFBRTtBQUNGLEVBQStFLEFBQS9FLDZFQUErRTtBQUMvRSxFQUE0RSxBQUE1RSwwRUFBNEU7QUFDNUUsRUFBNEMsQUFBNUMsMENBQTRDO0FBQzVDLEVBQUU7QUFDRixFQUFxQixBQUFyQixtQkFBcUI7QUFDckIsRUFBRTtBQUNGLEVBQXNCLEFBQXRCLG9CQUFzQjtBQUN0QixFQUF5QixBQUF6Qix1QkFBeUI7QUFDekIsRUFBcUIsQUFBckIsbUJBQXFCO0FBQ3JCLEVBQW9FLEFBQXBFLGtFQUFvRTtBQUNwRSxFQUFNLEFBQU4sSUFBTTtBQUNOLEVBQUU7QUFDRixFQUEwQixBQUExQix3QkFBMEI7QUFDMUIsRUFBNkIsQUFBN0IsMkJBQTZCO0FBQzdCLEVBQUU7QUFDRixFQUF5QixBQUF6Qix1QkFBeUI7QUFDekIsRUFBMkMsQUFBM0MseUNBQTJDO0FBQzNDLEVBQWdFLEFBQWhFLDhEQUFnRTtBQUVoRSxFQUEwRSxBQUExRSx3RUFBMEU7QUFDMUUsRUFBaUUsQUFBakUsK0RBQWlFO1NBQ3hELGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxHQUFHLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUcsQ0FBdUMsQUFBdkMsRUFBdUMsQUFBdkMscUNBQXVDO0lBQ3JFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVc7SUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ25FLEVBQUUsRUFBRSxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFJLENBQUM7Z0JBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQUksQ0FBQztZQUN0RSxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHO1lBQ3JCLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFBQSxJQUFJO1lBQUEsQ0FBQztZQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFHLENBQStDLEFBQS9DLEVBQStDLEFBQS9DLDZDQUErQztRQUMvRCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxFQUE4RSxBQUE5RSw0RUFBOEU7QUFDOUUsRUFBc0UsQUFBdEUsb0VBQXNFO1NBQzdELGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxHQUFHLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJO0lBQzNCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUFBLENBQUM7SUFDZixHQUFHLENBQUUsR0FBRyxDQUFDLEtBQUksSUFBSSxHQUFHLENBQUMsV0FBVyxJQUM3QixRQUFRLENBQUUsSUFBSSxFQUFFLENBQUM7UUFDaEIsTUFBTSxDQUFDLElBQUksSUFBSSxRQUFRLEdBQUksQ0FBQztZQUMxQixHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEQsR0FBRyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssUUFBUSxHQUFJLENBQUM7WUFBQyxDQUFDO1lBQzNELEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxLQUFLLENBQVUsV0FDMUIsS0FBSyxDQUFDLENBQTJEO1lBRW5FLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU87WUFBRyxDQUFDO1lBQzVELE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUN4QixDQUFDO2dCQUFDLElBQUksRUFBRSxJQUFJO2dCQUFFLElBQUksRUFBRSxJQUFJO2dCQUFFLElBQUksRUFBRSxJQUFJO1lBQUMsQ0FBQyxFQUFFLE1BQU07UUFDbEQsQ0FBQztJQUNILENBQUMsRUFBRSxLQUFJO0lBRVQsTUFBTSxDQUFDLE1BQU07QUFDZixDQUFDO1NBRVEsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLEVBQW1DLEFBQW5DLGlDQUFtQztJQUNuQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUssTUFBRSxJQUFJLENBQUMsQ0FBTSxPQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBVTtBQUNuRCxDQUFDO0FBRUQsRUFBOEUsQUFBOUUsNEVBQThFO0FBQzlFLEVBQTRFLEFBQTVFLDBFQUE0RTtBQUM1RSxFQUE2RSxBQUE3RSwyRUFBNkU7QUFDN0UsRUFBK0UsQUFBL0UsNkVBQStFO1NBQ3RFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQzdDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUNiLE1BQU0sR0FBRyxJQUFJLEVBQ2IsR0FBRztJQUVMLEVBQWtFLEFBQWxFLGdFQUFrRTtJQUNsRSxFQUErRCxBQUEvRCw2REFBK0Q7SUFDL0QsRUFBZ0UsQUFBaEUsOERBQWdFO0lBQ2hFLEVBQWlCLEFBQWpCLGVBQWlCO0lBQ2pCLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsRUFBMEgsQUFBMUgsd0hBQTBIO1FBQzFILEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjO0lBQ2xFLENBQUMsQ0FDRCxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWCxFQUFVLEFBQVYsUUFBVTtRQUNWLEdBQUcsR0FBRyxHQUFHLENBQUMsY0FBYztJQUMxQixDQUFDO0lBRUQsR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFhO0lBQ2hDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLEdBQUksQ0FBQztRQUNwQyxFQUFFLEVBQUUsR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN6QixFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFjO2dCQUMzQyxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVE7WUFDdkIsQ0FBQztZQUNELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBQ0QsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFNLE9BQUUsR0FBRztRQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7SUFDbkIsQ0FBQyxNQUFNLENBQUM7UUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUssTUFBRSxHQUFHO1FBQ25CLEdBQUcsQ0FBQyxJQUFJO0lBQ1YsQ0FBQztBQUNILENBQUM7QUFFRCxFQUEyQyxBQUEzQyx5Q0FBMkM7QUFDM0MsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUEwQztBQUV6RCxFQUE0QyxBQUE1QywwQ0FBNEM7QUFFNUMsS0FBSyxDQUFDLG1CQUFtQixJQUFJLEdBQUcsR0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEdBQUssQ0FBQztRQUNyRSxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBUSxVQUFHLEdBQUcsQ0FBQyxRQUFRLEtBQUssR0FBRztRQUNoRSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFFLE1BQU0sR0FBSSxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUztRQUMxQixDQUFDO0lBQ0gsQ0FBQzs7QUFFRCxLQUFLLENBQUMsaUJBQWlCLElBQUksT0FBTyxHQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sR0FDakUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUN0QixPQUFPLE1BQ0QsT0FBTyxDQUNYLE9BQU8sQ0FBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7OztBQUtsRixLQUFLLENBQUMsaUJBQWlCLElBQUcsR0FBRyxHQUFJLENBQUM7SUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRSxLQUFLLEdBQUksQ0FBQztRQUN2QyxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FDWCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3pCLEdBQUcsQ0FBQyxRQUFRLFFBQ04sT0FBTyxDQUFDLEdBQUcsRUFBRSxtQ0FBbUMsRUFBRSxHQUFHOztJQUdqRSxDQUFDO0FBQ0gsQ0FBQztBQUNELEVBQTRDLEFBQTVDLDBDQUE0QztBQUM1QyxLQUFLLENBQUMsd0JBQXdCLE9BQVMsR0FBRyxDQUFDLE9BQU8sRUFBQyxPQUFPLEdBQUksQ0FBQztRQUM3RCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FDeEIsQ0FBQztZQUFDLE9BQU8sRUFBRSxDQUFjO1FBQUMsQ0FBQyxHQUMxQixHQUFHLEdBQUssT0FBTyxDQUFDLEdBQUc7O0lBRXhCLENBQUM7O0FBRUQsRUFBaUQsQUFBakQsK0NBQWlEO0FBQ2pELEtBQUssQ0FBQyxnQkFBZ0IsVUFBUyxNQUFNLEdBQUksQ0FBQztJQUN4QyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSztJQUNoQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLO0lBQzdDLEVBQXVCLEFBQXZCLHFCQUF1QjtJQUN2QixpQkFBaUIsQ0FBQyxDQUFDO1NBQUUsS0FBSyxHQUFHLENBQUM7ZUFBSSxLQUFLO2VBQUssV0FBVztRQUFDLENBQUM7SUFBQyxDQUFDO0FBQzdELENBQUM7QUFFRCxFQUErQyxBQUEvQyw2Q0FBK0M7QUFDL0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ1gsRUFBdUUsQUFBdkUscUVBQXVFO0lBQ3ZFLEVBQTZFLEFBQTdFLDJFQUE2RTtJQUM3RSxFQUEyRSxBQUEzRSx5RUFBMkU7SUFDM0UsRUFBMEUsQUFBMUUsd0VBQTBFO0lBQzFFLEVBQTRFLEFBQTVFLDBFQUE0RTtJQUM1RSxRQUFRLEVBQUUsQ0FBTTtJQUNoQixVQUFVLEVBQUUsUUFBUSxDQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUNwQyxHQUFHLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRztRQUN2QyxFQUFFLEVBQUUsUUFBUSxLQUFLLENBQXVCLHdCQUN0QyxFQUFvRSxBQUFwRSxrRUFBb0U7UUFDcEUsRUFBaUUsQUFBakUsK0RBQWlFO1FBQ2pFLEVBQXdFLEFBQXhFLHNFQUF3RTtRQUN4RSxFQUF3RCxBQUF4RCxzREFBd0Q7UUFDeEQsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQWUsaUJBQUcsTUFBTSxFQUFFLE1BQU07SUFFekQsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLENBQUMsYUFBYSxJQUFJLElBQUksR0FBSyxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEdBQUssQ0FBQztRQUN2QyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxVQUFVO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTTtRQUN2QixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU07O1FBQzVDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSTtJQUMzQixDQUFDO0FBQ0gsQ0FBQztBQUVELEVBQXVGLEFBQXZGLHFGQUF1RjtBQUN2RixFQUEyRixBQUEzRix5RkFBMkY7QUFDM0YsRUFBaUIsQUFBakIsZUFBaUI7QUFDakIsRUFBcUYsQUFBckYsbUZBQXFGO0FBQ3JGLEVBQWdCLEFBQWhCLGNBQWdCO0FBQ2hCLEVBQThCLEFBQTlCLDRCQUE4QjtBQUM5QixFQUE0QixBQUE1QiwwQkFBNEI7QUFDNUIsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDO1NBQ1QsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM5QixFQUFFLEVBQUUsVUFBVSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxDQUFDLEtBQUssYUFBYSxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJO0lBQ3JDLENBQUM7QUFDSCxDQUFDO0FBRUQsRUFBOEMsQUFBOUMsNENBQThDO0FBQzlDLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsR0FBSyxDQUFDO0lBRTFELEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFHO0lBQ3pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBSSxLQUFFLENBQW9CO0lBQzlDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBTSxPQUFFLENBQVE7SUFDcEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFlLGdCQUFFLFFBQVEsR0FBRyxDQUFNLFFBQUcsS0FBSztJQUM5RCxFQUFFLEdBQUcsUUFBUSxFQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQVU7SUFFaEQsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsQ0FBTSxRQUFHLENBQU07SUFDdkMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQ2pCLENBQXdDLDBDQUN4QyxDQUEwQztJQUU5QyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBaUQ7SUFDckUsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBZSxnQkFBRSxXQUFXO0lBQ3BELEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQVUsV0FBRSxLQUFLO0lBQ3pDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVE7SUFDMUIsS0FBSyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUs7SUFDeEMsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU87SUFDL0QsTUFBTSxDQUFDLFNBQVMsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJO0lBQzNDLE1BQU0sQ0FBQyxNQUFNO0FBQ2YsQ0FBQztBQUVELEtBQUssQ0FBQyxXQUFXLElBQUksTUFBTSxHQUFLLENBQUM7SUFDL0IsS0FBSyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUs7SUFDeEMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFPLFFBQUUsQ0FBYztJQUV4QyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBRztJQUN6QyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQW9EO0lBQ25FLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBUTtJQUN4QixNQUFNLENBQUMsSUFBSSxJQUFJLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxZQUFZO0lBQ2pFLEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFLO0lBQ3hDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBMkI7SUFDN0QsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQU07SUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFnQixpQkFBRSxNQUFNLENBQUMsYUFBYTtJQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQU8sUUFBRSxNQUFNLENBQUMsYUFBYTtJQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhO0lBQ3JDLEtBQUssQ0FBQyxVQUFVLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQjtJQUU1RyxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBTztJQUM1QyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQStDO0lBRWpFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVTtJQUU3QixHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07SUFDdEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUk7SUFDM0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLO0lBQ3JCLE1BQU0sQ0FBQyxHQUFHO0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1icm93c2VyLWhtci9saWIvcnVudGltZS1jNjM3MDViYTIwZTBhMjYxLmpzIiwic3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gbnVsbDt2YXIgSE1SX1NFQ1VSRSA9IGZhbHNlO3ZhciBITVJfRU5WX0hBU0ggPSBcImNiZDc5OGQ4NzIwNTI4NjBcIjttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQgPSBcIjRhMzRiM2JiNTVkMWQxMGRcIjtcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdC5yZXR1cm4gIT0gbnVsbCkgaXQucmV0dXJuKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKiBnbG9iYWwgSE1SX0hPU1QsIEhNUl9QT1JULCBITVJfRU5WX0hBU0gsIEhNUl9TRUNVUkUgKi9cblxuLyo6OlxuaW1wb3J0IHR5cGUge1xuICBITVJBc3NldCxcbiAgSE1STWVzc2FnZSxcbn0gZnJvbSAnQHBhcmNlbC9yZXBvcnRlci1kZXYtc2VydmVyL3NyYy9ITVJTZXJ2ZXIuanMnO1xuaW50ZXJmYWNlIFBhcmNlbFJlcXVpcmUge1xuICAoc3RyaW5nKTogbWl4ZWQ7XG4gIGNhY2hlOiB7fFtzdHJpbmddOiBQYXJjZWxNb2R1bGV8fTtcbiAgaG90RGF0YTogbWl4ZWQ7XG4gIE1vZHVsZTogYW55O1xuICBwYXJlbnQ6ID9QYXJjZWxSZXF1aXJlO1xuICBpc1BhcmNlbFJlcXVpcmU6IHRydWU7XG4gIG1vZHVsZXM6IHt8W3N0cmluZ106IFtGdW5jdGlvbiwge3xbc3RyaW5nXTogc3RyaW5nfH1dfH07XG4gIEhNUl9CVU5ETEVfSUQ6IHN0cmluZztcbiAgcm9vdDogUGFyY2VsUmVxdWlyZTtcbn1cbmludGVyZmFjZSBQYXJjZWxNb2R1bGUge1xuICBob3Q6IHt8XG4gICAgZGF0YTogbWl4ZWQsXG4gICAgYWNjZXB0KGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIGRpc3Bvc2UoY2I6IChtaXhlZCkgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gYWNjZXB0KGRlcHM6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcsIGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGRlY2xpbmUoKTogdm9pZCxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBBcnJheTwoRnVuY3Rpb24pID0+IHZvaWQ+LFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBBcnJheTwobWl4ZWQpID0+IHZvaWQ+LFxuICB8fTtcbn1cbmRlY2xhcmUgdmFyIG1vZHVsZToge2J1bmRsZTogUGFyY2VsUmVxdWlyZSwgLi4ufTtcbmRlY2xhcmUgdmFyIEhNUl9IT1NUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX0VOVl9IQVNIOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VDVVJFOiBib29sZWFuO1xuKi9cbnZhciBPVkVSTEFZX0lEID0gJ19fcGFyY2VsX19lcnJvcl9fb3ZlcmxheV9fJztcbnZhciBPbGRNb2R1bGUgPSBtb2R1bGUuYnVuZGxlLk1vZHVsZTtcblxuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbiBhY2NlcHQoZm4pIHtcbiAgICAgIHRoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKGZuIHx8IGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uIGRpc3Bvc2UoZm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaChmbik7XG4gICAgfVxuICB9O1xuICBtb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5idW5kbGUuTW9kdWxlID0gTW9kdWxlO1xudmFyIGNoZWNrZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYWNjZXB0ZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYXNzZXRzVG9BY2NlcHRcbi8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi9cbjtcblxuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiBITVJfSE9TVCB8fCAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG59XG5cbmZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gIHJldHVybiBITVJfUE9SVCB8fCBsb2NhdGlvbi5wb3J0O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cblxudmFyIHBhcmVudCA9IG1vZHVsZS5idW5kbGUucGFyZW50O1xuXG5pZiAoKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gIHZhciBwb3J0ID0gZ2V0UG9ydCgpO1xuICB2YXIgcHJvdG9jb2wgPSBITVJfU0VDVVJFIHx8IGxvY2F0aW9uLnByb3RvY29sID09ICdodHRwczonICYmICEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KGhvc3RuYW1lKSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHdzID0gbmV3IFdlYlNvY2tldChwcm90b2NvbCArICc6Ly8nICsgaG9zdG5hbWUgKyAocG9ydCA/ICc6JyArIHBvcnQgOiAnJykgKyAnLycpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50XG4gIC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovXG4gICkge1xuICAgIGNoZWNrZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYWNjZXB0ZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcbiAgICB2YXIgZGF0YVxuICAgIC8qOiBITVJNZXNzYWdlICovXG4gICAgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIFJlbW92ZSBlcnJvciBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhc3NldHMgPSBkYXRhLmFzc2V0cy5maWx0ZXIoZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiBhc3NldC5lbnZIYXNoID09PSBITVJfRU5WX0hBU0g7XG4gICAgICB9KTsgLy8gSGFuZGxlIEhNUiBVcGRhdGVcblxuICAgICAgdmFyIGhhbmRsZWQgPSBhc3NldHMuZXZlcnkoZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiBhc3NldC50eXBlID09PSAnY3NzJyB8fCBhc3NldC50eXBlID09PSAnanMnICYmIGhtckFjY2VwdENoZWNrKG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQuaWQsIGFzc2V0LmRlcHNCeUJ1bmRsZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgICAgICBobXJBcHBseShtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldHNUb0FjY2VwdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpZCA9IGFzc2V0c1RvQWNjZXB0W2ldWzFdO1xuXG4gICAgICAgICAgaWYgKCFhY2NlcHRlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICAgIGhtckFjY2VwdFJ1bihhc3NldHNUb0FjY2VwdFtpXVswXSwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihkYXRhLmRpYWdub3N0aWNzLmFuc2kpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBhbnNpRGlhZ25vc3RpYyA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciBzdGFjayA9IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA/IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA6IGFuc2lEaWFnbm9zdGljLnN0YWNrO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ/CfmqggW3BhcmNlbF06ICcgKyBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICsgJ1xcbicgKyBzdGFjayArICdcXG5cXG4nICsgYW5zaURpYWdub3N0aWMuaGludHMuam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgZmFuY3kgaHRtbCBvdmVybGF5XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGNyZWF0ZUVycm9yT3ZlcmxheShkYXRhLmRpYWdub3N0aWNzLmh0bWwpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICB9O1xuXG4gIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JPdmVybGF5KCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuXG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnW3BhcmNlbF0g4pyoIEVycm9yIHJlc29sdmVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICB2YXIgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG5cbiAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihkaWFnbm9zdGljcyksXG4gICAgICBfc3RlcDI7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgdmFyIGRpYWdub3N0aWMgPSBfc3RlcDIudmFsdWU7XG4gICAgICB2YXIgc3RhY2sgPSBkaWFnbm9zdGljLmNvZGVmcmFtZSA/IGRpYWdub3N0aWMuY29kZWZyYW1lIDogZGlhZ25vc3RpYy5zdGFjaztcbiAgICAgIGVycm9ySFRNTCArPSBcIlxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1xcXCI+XFxuICAgICAgICAgIFxcdUQ4M0RcXHVERUE4IFwiLmNvbmNhdChkaWFnbm9zdGljLm1lc3NhZ2UsIFwiXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxwcmU+XCIpLmNvbmNhdChzdGFjaywgXCI8L3ByZT5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgIFwiKS5jb25jYXQoZGlhZ25vc3RpYy5oaW50cy5tYXAoZnVuY3Rpb24gKGhpbnQpIHtcbiAgICAgICAgcmV0dXJuICc8ZGl2PvCfkqEgJyArIGhpbnQgKyAnPC9kaXY+JztcbiAgICAgIH0pLmpvaW4oJycpLCBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIikuY29uY2F0KGRpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiA/IFwiPGRpdj5cXHVEODNEXFx1RENERCA8YSBzdHlsZT1cXFwiY29sb3I6IHZpb2xldFxcXCIgaHJlZj1cXFwiXCIuY29uY2F0KGRpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5MZWFybiBtb3JlPC9hPjwvZGl2PlwiKSA6ICcnLCBcIlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IyLmYoKTtcbiAgfVxuXG4gIGVycm9ySFRNTCArPSAnPC9kaXY+JztcbiAgb3ZlcmxheS5pbm5lckhUTUwgPSBlcnJvckhUTUw7XG4gIHJldHVybiBvdmVybGF5O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGJ1bmRsZSwgaWQpXG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG57XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcblxuICBmb3IgKGsgaW4gbW9kdWxlcykge1xuICAgIGZvciAoZCBpbiBtb2R1bGVzW2tdWzFdKSB7XG4gICAgICBkZXAgPSBtb2R1bGVzW2tdWzFdW2RdO1xuXG4gICAgICBpZiAoZGVwID09PSBpZCB8fCBBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKFtidW5kbGUsIGtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rKSB7XG4gIHZhciBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcblxuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuXG4gIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgLy8gJEZsb3dGaXhNZVxuICBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNwbGl0KCc/JylbMF0gKyAnPycgKyBEYXRlLm5vdygpKTsgLy8gJEZsb3dGaXhNZVxuXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG5cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcblxuZnVuY3Rpb24gcmVsb2FkQ1NTKCkge1xuICBpZiAoY3NzVGltZW91dCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZlxuICAgICAgLyo6IHN0cmluZyAqL1xuICAgICAgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gICAgICB2YXIgc2VydmVkRnJvbUhNUlNlcnZlciA9IGhvc3RuYW1lID09PSAnbG9jYWxob3N0JyA/IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6JyArIGdldFBvcnQoKSkudGVzdChocmVmKSA6IGhyZWYuaW5kZXhPZihob3N0bmFtZSArICc6JyArIGdldFBvcnQoKSk7XG4gICAgICB2YXIgYWJzb2x1dGUgPSAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KGhyZWYpICYmIGhyZWYuaW5kZXhPZih3aW5kb3cubG9jYXRpb24ub3JpZ2luKSAhPT0gMCAmJiAhc2VydmVkRnJvbUhNUlNlcnZlcjtcblxuICAgICAgaWYgKCFhYnNvbHV0ZSkge1xuICAgICAgICB1cGRhdGVMaW5rKGxpbmtzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjc3NUaW1lb3V0ID0gbnVsbDtcbiAgfSwgNTApO1xufVxuXG5mdW5jdGlvbiBobXJBcHBseShidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGFzc2V0XG4vKjogIEhNUkFzc2V0ICovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgfSBlbHNlIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgdmFyIGRlcHMgPSBhc3NldC5kZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdO1xuXG4gICAgaWYgKGRlcHMpIHtcbiAgICAgIHZhciBmbiA9IG5ldyBGdW5jdGlvbigncmVxdWlyZScsICdtb2R1bGUnLCAnZXhwb3J0cycsIGFzc2V0Lm91dHB1dCk7XG4gICAgICBtb2R1bGVzW2Fzc2V0LmlkXSA9IFtmbiwgZGVwc107XG4gICAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgICBobXJBcHBseShidW5kbGUucGFyZW50LCBhc3NldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbiwgZGVwc0J5QnVuZGxlXG4vKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qL1xuKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRlcHNCeUJ1bmRsZSAmJiAhZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXSkge1xuICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIHJvb3QgYnVuZGxlIHdpdGhvdXQgZmluZGluZyB3aGVyZSB0aGUgYXNzZXQgc2hvdWxkIGdvLFxuICAgIC8vIHRoZXJlJ3Mgbm90aGluZyB0byBkby4gTWFyayBhcyBcImFjY2VwdGVkXCIgc28gd2UgZG9uJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICAgIGlmICghYnVuZGxlLnBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKGJ1bmRsZS5wYXJlbnQsIGlkLCBkZXBzQnlCdW5kbGUpO1xuICB9XG5cbiAgaWYgKGNoZWNrZWRBc3NldHNbaWRdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjaGVja2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBhc3NldHNUb0FjY2VwdC5wdXNoKFtidW5kbGUsIGlkXSk7XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTsgLy8gSWYgbm8gcGFyZW50cywgdGhlIGFzc2V0IGlzIG5ldy4gUHJldmVudCByZWxvYWRpbmcgdGhlIHBhZ2UuXG5cbiAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHMuc29tZShmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayh2WzBdLCB2WzFdLCBudWxsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdFJ1bihidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhID0ge307XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90KSB7XG4gICAgY2FjaGVkLmhvdC5kYXRhID0gYnVuZGxlLmhvdERhdGE7XG4gIH1cblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBjYihidW5kbGUuaG90RGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlKGlkKTtcbiAgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyIGFzc2V0c1RvQWxzb0FjY2VwdCA9IGNiKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc2V0c1RvQWxzb0FjY2VwdCAmJiBhc3NldHNUb0FjY2VwdC5sZW5ndGgpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVttZXRob2QtdW5iaW5kaW5nXVxuICAgICAgICBhc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGFzc2V0c1RvQWNjZXB0LCBhc3NldHNUb0Fsc29BY2NlcHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWNjZXB0ZWRBc3NldHNbaWRdID0gdHJ1ZTtcbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEJyb3dzZXItc3BlY2lmaWMgdXRpbGl0aWVzIGZvciB1c2UgaW4gYmFja2dyb3VuZCBwYWdlcyBhbmQgY29udGVudCBzY3JpcHRzLlxyXG5cclxuXHJcbi8vIEluIENocm9tZSwgY29udGVudCBzY3JpcHRzIGNhbiBvbmx5IGNvbW11bmljYXRlIHdpdGggYmFja2dyb3VuZCBwYWdlcyB1c2luZ1xyXG4vLyBtZXNzYWdlIHBhc3NpbmcgKHNlZSBodHRwOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZXh0ZW5zaW9ucy9tZXNzYWdpbmcuaHRtbCkuXHJcbi8vIFNvbWV0aW1lcyB0aGUgY29udGVudCBzY3JpcHQgbmVlZHMgdG8gY2FsbCBpbnRvIGEgYmFja2dyb3VuZCBwYWdlIGluIG9yZGVyXHJcbi8vIHRvIHBlcnNpc3QgZGF0YSBmcm9tIHBhZ2UgdG8gcGFnZSBvciB0byB1c2UgY2VydGFpbiBwZXJtaXNzaW9ucywgc28gZm9yXHJcbi8vIGNvbnZlbmllbmNlIHdlIHdyYXAgdGhlIG1lc3NhZ2UtcGFzc2luZyBtYWNoaW5lcnkgdXNpbmcgYSBwYWlyIG9mIGZ1bmN0aW9ucyxcclxuLy8gZXhwb3J0SW5zdGFuY2UoKSBhbmQgaW1wb3J0SW5zdGFuY2UoKS4gIEhlcmUncyBob3cgdG8gdXNlIHRoZW06XHJcbi8vXHJcbi8vIDEuIFdyaXRlIGEgc2VydmljZSBieSBkZWZpbmluZyBhIG5vLWFyZ3VtZW50IGNvbnN0cnVjdG9yIGZ1bmN0aW9uLiAgVGhlXHJcbi8vICAgIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlkZW50aWZpZXMgdGhlIHNlcnZpY2UuICBUaGUgZnVuY3Rpb24gc2hvdWxkIHJldHVyblxyXG4vLyAgICBhbiBvYmplY3Qgd2hvc2UgbWV0aG9kcyBhbGwgdGFrZSBhIGNhbGxiYWNrIChjYikgYXMgdGhlIGxhc3QgYXJndW1lbnQgYW5kXHJcbi8vICAgIGNhbGwgdGhlIGNhbGxiYWNrIHdpdGggdGhlIHJldHVybiB2YWx1ZSAocnYpLiAgQWxsIGFyZ3VtZW50cyBhbmQgcmV0dXJuXHJcbi8vICAgIHZhbHVlcyBtdXN0IGJlIEpTT04tc2VyaWFsaXphYmxlLiAgVGhlIGNhbGxlcidzIHRhYiBpcyBwcm92aWRlZCBhcyBjYi50YWIuXHJcbi8vXHJcbi8vIDIuIEluY2x1ZGUgdGhlIHNlcnZpY2UgaW4gYm90aCB0aGUgYmFja2dyb3VuZCBwYWdlIGFuZCB0aGUgY29udGVudCBzY3JpcHRcclxuLy8gICAgKGkuZS4gaW4gbWFuaWZlc3QuanNvbiwgdGhlIHNlcnZpY2UncyBKUyBmaWxlIHNob3VsZCBhcHBlYXIgaW4gYm90aCB0aGVcclxuLy8gICAgYmFja2dyb3VuZDoge3NjcmlwdHM6IFsuLi5dfSBhbmQgY29udGVudF9zY3JpcHRzOiB7anM6IFsuLi5dfSBsaXN0cykuXHJcbi8vXHJcbi8vIDMuIEluIHRoZSBiYWNrZ3JvdW5kIHBhZ2UsIGNhbGwgZXhwb3J0SW5zdGFuY2Ugb24gdGhlIGNvbnN0cnVjdG9yKS4gIFRoaXNcclxuLy8gICAgY3JlYXRlcyBhIGluc3RhbmNlIHRoYXQgd2lsbCBzZXJ2ZSByZXF1ZXN0cyBmcm9tIHRoZSBjb250ZW50IHNjcmlwdC5cclxuLy8gICAgT25seSBvbmUgc2luZ2xldG9uIGluc3RhbmNlIGNhbiBiZSBleHBvcnRlZC5cclxuLy9cclxuLy8gNC4gSW4gdGhlIGNvbnRlbnQgc2NyaXB0LCBjYWxsIGltcG9ydEluc3RhbmNlIG9uIHRoZSBzYW1lIGNvbnN0cnVjdG9yIHRvIGdldFxyXG4vLyAgICBhbiBvYmplY3QuICBUaGVuIGNhbGwgbWV0aG9kcyBvbiB0aGUgb2JqZWN0LCBhbHdheXMgcGFzc2luZyBhIGNhbGxiYWNrXHJcbi8vICAgIGZ1bmN0aW9uIG9yIG51bGwgYXMgdGhlIGxhc3QgYXJndW1lbnQuXHJcbi8vXHJcbi8vIEhlcmUncyBhbiBleGFtcGxlLlxyXG4vL1xyXG4vLyBTZXJ2aWNlIGRlZmluaXRpb246XHJcbi8vICAgZnVuY3Rpb24gQ291bnRlcigpIHtcclxuLy8gICAgIHZhciBjb3VudCA9IDA7XHJcbi8vICAgICByZXR1cm4ge2luYzogZnVuY3Rpb24gKGFtb3VudCwgY2IpIHsgY2IoY291bnQgKz0gYW1vdW50KTsgfX07XHJcbi8vICAgfVxyXG4vL1xyXG4vLyBJbiB0aGUgYmFja2dyb3VuZCBwYWdlOlxyXG4vLyAgIGV4cG9ydEluc3RhbmNlKENvdW50ZXIpO1xyXG4vL1xyXG4vLyBJbiB0aGUgY29udGVudCBzY3JpcHQ6XHJcbi8vICAgdmFyIGNvdW50ZXIgPSBpbXBvcnRJbnN0YW5jZShDb3VudGVyKTtcclxuLy8gICBjb3VudGVyLmluYyg2LCBmdW5jdGlvbiAocnYpIHsgYWxlcnQoJ2NvdW50IGlzICcgKyBydik7IH0pO1xyXG5cclxuLy8gTWFrZXMgYSBzaW5nbGV0b24gaW5zdGFuY2UgaW4gYSBiYWNrZ3JvdW5kIHBhZ2UgY2FsbGFibGUgZnJvbSBhIGNvbnRlbnRcclxuLy8gc2NyaXB0LCB1c2luZyBDaHJvbWUncyBtZXNzYWdlIHN5c3RlbS4gIFNlZSBhYm92ZSBmb3IgZGV0YWlscy5cclxuZnVuY3Rpb24gZXhwb3J0SW5zdGFuY2UoY29uc3RydWN0b3IpIHtcclxuICBsZXQgbmFtZSA9IGNvbnN0cnVjdG9yLm5hbWU7ICAvLyBmdW5jdGlvbiBuYW1lIGlkZW50aWZpZXMgdGhlIHNlcnZpY2VcclxuICBsZXQgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTtcclxuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHJlcXVlc3QsIHNlbmRlciwgY2IpIHtcclxuICAgIGlmIChyZXF1ZXN0Lm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgbGV0IHBhY2sgPSBmdW5jdGlvbiAoKSB7IGNiKEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhcmd1bWVudHMpKTsgfTtcclxuICAgICAgcGFjay50YWIgPSBzZW5kZXIudGFiO1xyXG4gICAgICBpbnN0YW5jZVtyZXF1ZXN0LnZlcmJdLmFwcGx5KGluc3RhbmNlLCByZXF1ZXN0LmFyZ3MuY29uY2F0KFtwYWNrXSkpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTsgIC8vIGFsbG93IGNiIHRvIGJlIGNhbGxlZCBhZnRlciBsaXN0ZW5lciByZXR1cm5zXHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIEdldHMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgaW4gYSBjb250ZW50IHNjcmlwdCB0byBpbnZva2UgbWV0aG9kcyBvbiBhblxyXG4vLyBpbnN0YW5jZSBleHBvcnRlZCBmcm9tIHRoZSBiYWNrZ3JvdW5kIHBhZ2UuICBTZWUgYWJvdmUgZm9yIGRldGFpbHMuXHJcbmZ1bmN0aW9uIGltcG9ydEluc3RhbmNlKGNvbnN0cnVjdG9yKSB7XHJcbiAgdmFyIG5hbWUgPSBjb25zdHJ1Y3Rvci5uYW1lO1xyXG4gIHZhciBzZW5kZXIgPSB7fTtcclxuICBmb3IgKHZhciB2ZXJiIGluIG5ldyBjb25zdHJ1Y3RvcigpKSB7XHJcbiAgICAoZnVuY3Rpb24gKHZlcmIpIHtcclxuICAgICAgc2VuZGVyW3ZlcmJdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCAtMSk7XHJcbiAgICAgICAgdmFyIGNiID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSB8fCBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgdGhyb3cgJ1NlcnZpY2UgaW52b2NhdGlvbiBlcnJvcjogbGFzdCBhcmd1bWVudCBpcyBub3QgYSBjYWxsYmFjayc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1bnBhY2sgPSBmdW5jdGlvbiAocmVzdWx0cykgeyBjYi5hcHBseShudWxsLCByZXN1bHRzKTsgfTtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShcclxuICAgICAgICAgIHsgbmFtZTogbmFtZSwgdmVyYjogdmVyYiwgYXJnczogYXJncyB9LCB1bnBhY2spO1xyXG4gICAgICB9O1xyXG4gICAgfSkodmVyYik7XHJcbiAgfVxyXG4gIHJldHVybiBzZW5kZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhvc3RuYW1lKHVybCkge1xyXG4gIC8vIEV4dHJhY3QgdGhlIGhvc3RuYW1lIGZyb20gYSBVUkwuXHJcbiAgcmV0dXJuICQoJzxhPicpLnByb3AoJ2hyZWYnLCB1cmwpLnByb3AoJ2hvc3RuYW1lJyk7XHJcbn1cclxuXHJcbi8vIE1ha2VzIGFuIFhIUiB0byB0aGUgZ2l2ZW4gVVJMLCBjYWxsaW5nIGEgY2FsbGJhY2sgd2l0aCB0aGUgcmV0dXJuZWQgY29udGVudFxyXG4vLyB0eXBlIGFuZCByZXNwb25zZSAoaW50ZXJwcmV0ZWQgYWNjb3JkaW5nIHRvIHJlc3BvbnNlVHlwZSkuICBTZWUgWEhSMiBzcGVjXHJcbi8vIGZvciBkZXRhaWxzIG9uIHJlc3BvbnNlVHlwZSBhbmQgcmVzcG9uc2UuICBVc2VzIEdFVCBpZiBwb3N0RGF0YSBpcyBudWxsIG9yXHJcbi8vIFBPU1Qgb3RoZXJ3aXNlLiAgcG9zdERhdGEgY2FuIGJlIGFueSB0eXBlIGFjY2VwdGVkIGJ5IFhNTEh0dHBSZXF1ZXN0LnNlbmQoKS5cclxuZnVuY3Rpb24gaHR0cFJlcXVlc3QodXJsLCBwb3N0RGF0YSwgY2FsbGJhY2spIHtcclxuICBsZXQgdHlwZSA9IG51bGwsXHJcbiAgICByZXN1bHQgPSBudWxsLFxyXG4gICAgeGhyO1xyXG5cclxuICAvLyBGaXJlZm94IHJlcXVpcmVzIGEgc3BlY2lhbCBjYWxsIHRvIGdldCBhbiBYTUxIdHRwUmVxdWVzdCgpIHRoYXRcclxuICAvLyBzZW5kcyBSZWZlcmVyIGhlYWRlcnMsIHdoaWNoIGlzIENNRUNGIG5lZWRzIGJlY2F1c2Ugb2YgdGhlaXJcclxuICAvLyBjaG9pY2UgaW4gaG93IHRvIGZpeCB0aGUgMjAxNyBjcm9zcy1zaXRlL3NhbWUtb3JpZ2luIHNlY3VyaXR5XHJcbiAgLy8gdnVsbmVyYWJpbGl0eS5cclxuICB0cnkge1xyXG4gICAgLy8gRmlyZWZveC4gU2VlOiBodHRwczovL2Rpc2NvdXJzZS5tb3ppbGxhLm9yZy90L3dlYmV4dGVuc2lvbi14bWxodHRwcmVxdWVzdC1pc3N1ZXMtbm8tY29va2llcy1vci1yZWZlcnJlci1zb2x2ZWQvMTEyMjQvMThcclxuICAgIHhociA9IFhQQ05hdGl2ZVdyYXBwZXIobmV3IHdpbmRvdy53cmFwcGVkSlNPYmplY3QuWE1MSHR0cFJlcXVlc3QoKSk7XHJcbiAgfVxyXG4gIGNhdGNoIChldnQpIHtcclxuICAgIC8vIENocm9tZS5cclxuICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIH1cclxuXHJcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XHJcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgdHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XHJcbiAgICAgICAgcmVzdWx0ID0geGhyLnJlc3BvbnNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHR5cGUsIHJlc3VsdCwgeGhyKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGlmIChwb3N0RGF0YSkge1xyXG4gICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwpO1xyXG4gICAgeGhyLnNlbmQocG9zdERhdGEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcclxuICAgIHhoci5zZW5kKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBtYWtlIHRva2VuIGF2YWlsYWJsZSB0byBoZWxwZXIgZnVuY3Rpb25zXHJcbmNvbnN0IE44N0dDMiA9IFwiNDVjNzk0NmRkODQwMGFkNjI2NjI1NjVjZjc5ZGEzYzA4MWQ5YjBlNVwiXHJcblxyXG4vLyBoZWxwZXIgZnVuY3Rpb25zIGZvciBjaHJvbWUgbG9jYWwgc3RvcmFnZVxyXG5cclxuY29uc3QgZ2V0SXRlbXNGcm9tU3RvcmFnZSA9IChrZXkpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICBjb25zdCBzdHJpbmdLZXkgPSB0eXBlb2Yga2V5ID09PSAnbnVtYmVyJyA/IGtleS50b1N0cmluZygpIDoga2V5O1xyXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChzdHJpbmdLZXksIHJlc3VsdCA9PiB7XHJcbiAgICByZXNvbHZlKHJlc3VsdFtzdHJpbmdLZXldKTtcclxuICB9KVxyXG59KVxyXG5cclxuY29uc3Qgc2F2ZUl0ZW1Ub1N0b3JhZ2UgPSAoZGF0YU9iaikgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cclxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoXHJcbiAgICBkYXRhT2JqLFxyXG4gICAgKCkgPT4gcmVzb2x2ZShcclxuICAgICAgY29uc29sZS5sb2coYFJFQ0FQOiBJdGVtIHNhdmVkIGluIHN0b3JhZ2UgYXQgdGFiSWQ6ICR7T2JqZWN0LmtleXMoZGF0YU9iailbMF19YClcclxuICAgIClcclxuICApXHJcbik7XHJcblxyXG5jb25zdCBkZXN0cm95VGFiU3RvcmFnZSA9IGtleSA9PiB7XHJcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIHN0b3JlID0+IHtcclxuICAgIGlmIChzdG9yZVtrZXldKSB7XHJcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShcclxuICAgICAgICBrZXkudG9TdHJpbmcoKSxcclxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhgUmVtb3ZlZCBpdGVtIGZyb20gc3RvcmFnZSB3aXRoIGtleSAke2tleX1gKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4vLyBpbml0aWFsaXplIHRoZSBzdG9yZSB3aXRoIGFuIGVtcHR5IG9iamVjdFxyXG5jb25zdCBnZXRUYWJJZEZvckNvbnRlbnRTY3JpcHQgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShcclxuICAgIHsgbWVzc2FnZTogJ3JlcXVlc3RUYWJJZCcgfSxcclxuICAgIChtc2cpID0+IHJlc29sdmUobXNnKVxyXG4gICk7XHJcbn0pO1xyXG5cclxuLy8gb2JqZWN0IHRha2VzIHNoYXBlIG9mIHsgW3RhYklkXTogeyAuLi5kYXRhIH0gfVxyXG5jb25zdCB1cGRhdGVUYWJTdG9yYWdlID0gYXN5bmMgb2JqZWN0ID0+IHtcclxuICBjb25zdCB0YWJJZCA9IE9iamVjdC5rZXlzKG9iamVjdClbMF07XHJcbiAgY29uc3QgdXBkYXRlZFZhcnMgPSBvYmplY3RbdGFiSWRdO1xyXG4gIGNvbnN0IHN0b3JlID0gYXdhaXQgZ2V0SXRlbXNGcm9tU3RvcmFnZSh0YWJJZCk7XHJcbiAgLy8ga2VlcCBzdG9yZSBpbW11dGFibGVcclxuICBzYXZlSXRlbVRvU3RvcmFnZSh7IFt0YWJJZF06IHsgLi4uc3RvcmUsIC4uLnVwZGF0ZWRWYXJzIH0gfSk7XHJcbn07XHJcblxyXG4vLyBEZWZhdWx0IHNldHRpbmdzIGZvciBhbnkganF1ZXJ5ICQuYWpheCBjYWxsLlxyXG4kLmFqYXhTZXR1cCh7XHJcbiAgLy8gVGhlIGRhdGFUeXBlIHBhcmFtZXRlciBpcyBhIHNlY3VyaXR5IG1lYXN1cmUgcmVxdWVzdGVkIGJ5IE9wZXJhIGNvZGVcclxuICAvLyByZXZpZXcuICdqc29uJyBpcyB0aGUgZGVmYXVsdCwgYnV0IGlmIGl0IGlzIG5vdCBleHBsaWNpdGx5IHNldCwgYW5kIGlmIHRoZVxyXG4gIC8vIENvdXJ0TGlzdGVuZXIgc2VydmVyIHdhcyBoYWNrZWQsIHRoZSBBUEkgY291bGQgYmUgdXNlZCB0byBzZXJ2ZSBKU09OUCB0b1xyXG4gIC8vIG91ciB1c2Vycy4gSWYgdGhlIHNlcnZlciBkaWQgdGhhdCwgYWxsIG9mIG91ciB1c2VycyB3b3VsZCBiZSBhdCByaXNrIG9mXHJcbiAgLy8gcnVubmluZyBjdXN0b20gSmF2YVNjcmlwdC4gV2UgZG9uJ3Qgd2FudCB0aGF0LCBzbyB3ZSBzZXQgdGhpcyBleHBsaWNpdGx5LlxyXG4gIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHhociwgc2V0dGluZ3MpIHtcclxuICAgIGxldCBob3N0bmFtZSA9IGdldEhvc3RuYW1lKHNldHRpbmdzLnVybCk7XHJcbiAgICBpZiAoaG9zdG5hbWUgPT09IFwid3d3LmNvdXJ0bGlzdGVuZXIuY29tXCIpIHtcclxuICAgICAgLy8gSWYgeW91IGFyZSByZWFkaW5nIHRoaXMgY29kZSwgd2UgYXNrIHRoYXQgeW91IHBsZWFzZSByZWZyYWluIGZyb21cclxuICAgICAgLy8gdXNpbmcgdGhpcyB0b2tlbi4gVW5mb3J0dW5hdGVseSwgdGhlcmUgaXMgbm8gd2F5IHRvIGRpc3RyaWJ1dGVcclxuICAgICAgLy8gZXh0ZW5zaW9ucyB0aGF0IHVzZSBoYXJkY29kZWQgdG9rZW5zIGV4Y2VwdCB0aHJvdWdoIGJlZ2dpbmcgYW5kIHVzaW5nXHJcbiAgICAgIC8vIGZ1bm55IHZhcmlhYmxlIG5hbWVzLiBEbyBub3QgYWJ1c2UgdGhlIFJFQ0FQIHNlcnZpY2UuXHJcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBgVG9rZW4gJHtOODdHQzJ9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGJsb2JUb0RhdGFVUkwgPSAoYmxvYikgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBEZWJ1ZyBsb2dnaW5nIGZ1bmN0aW9uLiBGaXJzdCBhcmd1bWVudCBpcyBhIGRlYnVnIGxldmVsLCByZW1haW5kZXIgYXJlIHZhcmlhYmxlIGFyZ3NcclxuLy8gZm9yIGNvbnNvbGUubG9nKCkuIElmIHRoZSBnbG9iYWwgZGVidWcgbGV2ZWwgbWF0Y2hlcyB0aGUgZmlyc3QgYXJnLCBjYWxscyBjb25zb2xlLmxvZygpLlxyXG4vLyBFeGFtcGxlIHVzYWdlOlxyXG4vLyAgICBkZWJ1Zyg1LCBcIlRoaXMgbWVzc2FnZSBpcyBvbmx5IHNlZW4gd2hlbiB0aGUgZGVidWcgbGV2ZWwgaXMgJWQgb3IgaGlnaGVyLlwiLCA1KTtcclxuLy8gRGVidWcgbGV2ZWxzOlxyXG4vLyAgIDEgICBHZW5lcmFsIGluZm9ybWF0aW9uYWxcclxuLy8gICAzICAgRGV2ZWxvcGVyIGRlYnVnZ2luZ1xyXG52YXIgREVCVUdMRVZFTCA9IDE7XHJcbmZ1bmN0aW9uIGRlYnVnKGxldmVsLCB2YXJhcmdzKSB7XHJcbiAgaWYgKERFQlVHTEVWRUwgPj0gbGV2ZWwpIHtcclxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuICAgIGFyZ3NbMF0gPSBgUkVDQVAgZGVidWcgWyR7bGV2ZWx9XTogYCArIGFyZ3NbMF07XHJcbiAgICByZXR1cm4gY29uc29sZS5sb2cuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBpbmplY3QgYSBcImZvbGxvdyB0aGlzIGNhc2Ugb24gUkVDQVBcIiBidXR0b25cclxuY29uc3QgcmVjYXBBbGVydEJ1dHRvbiA9IChjb3VydCwgcGFjZXJDYXNlSWQsIGlzQWN0aXZlKSA9PiB7XHJcblxyXG4gIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBhbmNob3Iuc2V0QXR0cmlidXRlKCdpZCcsICdyZWNhcC1hbGVydC1idXR0b24nKTtcclxuICBhbmNob3Iuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xyXG4gIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCBpc0FjdGl2ZSA/ICd0cnVlJyA6IGZhbHNlKTtcclxuICBpZiAoIWlzQWN0aXZlKSB7IGFuY2hvci5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpOyB9O1xyXG5cclxuICBjb25zdCBpY29uID0gaXNBY3RpdmUgPyAnaWNvbicgOiAnZ3JleSc7XHJcbiAgY29uc3QgdGV4dCA9IGlzQWN0aXZlXHJcbiAgICA/ICdDcmVhdGUgYW4gQWxlcnQgZm9yIHRoaXMgQ2FzZSBvbiBSRUNBUCdcclxuICAgIDogJ0FsZXJ0cyBub3QgeWV0IFN1cHBvcnRlZCBmb3IgdGhpcyBEb2NrZXQnO1xyXG5cclxuICBjb25zdCB1cmwgPSBuZXcgVVJMKCdodHRwczovL3d3dy5jb3VydGxpc3RlbmVyLmNvbS9hbGVydC9kb2NrZXQvbmV3LycpO1xyXG4gIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdwYWNlcl9jYXNlX2lkJywgcGFjZXJDYXNlSWQpO1xyXG4gIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdjb3VydF9pZCcsIGNvdXJ0KTtcclxuICBhbmNob3IuaHJlZiA9IHVybC50b1N0cmluZygpO1xyXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltZy5zcmMgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTChgYXNzZXRzL2ltYWdlcy8ke2ljb259LTE2LnBuZ2ApO1xyXG4gIGFuY2hvci5pbm5lckhUTUwgPSBgJHtpbWcub3V0ZXJIVE1MfSAke3RleHR9YDtcclxuICByZXR1cm4gYW5jaG9yO1xyXG59O1xyXG5cclxuY29uc3QgcmVjYXBCYW5uZXIgPSAocmVzdWx0KSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVjYXAtYmFubmVyJyk7XHJcblxyXG4gIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBhbmNob3IudGl0bGUgPSAnRG9ja2V0IGlzIGF2YWlsYWJsZSBmb3IgZnJlZSBpbiB0aGUgUkVDQVAgQXJjaGl2ZS4nO1xyXG4gIGFuY2hvci50YXJnZXQgPSAnX2JsYW5rJztcclxuICBhbmNob3IuaHJlZiA9IGBodHRwczovL3d3dy5jb3VydGxpc3RlbmVyLmNvbSR7cmVzdWx0LmFic29sdXRlX3VybH1gXHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1nLnNyYyA9IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2ljb24tMTYucG5nJyk7XHJcbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RpbWUnKTtcclxuICB0aW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1saXZlc3RhbXAnLCByZXN1bHQuZGF0ZV9tb2RpZmllZCk7XHJcbiAgdGltZS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgcmVzdWx0LmRhdGVfbW9kaWZpZWQpO1xyXG4gIHRpbWUuaW5uZXJIVE1MID0gcmVzdWx0LmRhdGVfbW9kaWZpZWQ7XHJcbiAgY29uc3QgYW5jaG9ySHRtbCA9IGAke2ltZy5vdXRlckhUTUx9IFZpZXcgYW5kIFNlYXJjaCB0aGlzIGRvY2tldCBhcyBvZiAke3RpbWUub3V0ZXJIVE1MfSBmb3IgZnJlZSBmcm9tIFJFQ0FQYDtcclxuXHJcbiAgY29uc3Qgc21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xyXG4gIHNtYWxsLmlubmVyVGV4dCA9ICdOb3RlIHRoYXQgYXJjaGl2ZWQgZG9ja2V0cyBtYXkgYmUgb3V0IG9mIGRhdGUnO1xyXG5cclxuICBhbmNob3IuaW5uZXJIVE1MID0gYW5jaG9ySHRtbDtcclxuXHJcbiAgZGl2LmFwcGVuZENoaWxkKGFuY2hvcik7XHJcbiAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChzbWFsbCk7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InV0aWxzLmpzLm1hcCJ9
