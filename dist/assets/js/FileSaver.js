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
})({"bGt2V":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "cbd798d872052860";
module.bundle.HMR_BUNDLE_ID = "f0b95ef74d51168e";
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

},{}],"7Kkax":[function(require,module,exports) {
var global = arguments[3];
/*
* FileSaver.js
* A saveAs() FileSaver implementation.
*
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
* source  : http://purl.eligrey.com/github/FileSaver.js
*/ // The one and only way of getting global scope in all environments
// https://stackoverflow.com/q/3277182/1008999
var _global = typeof window === 'object' && window.window === window ? window : typeof self === 'object' && self.self === self ? self : typeof global === 'object' && global.global === global ? global : this;
function bom(blob, opts) {
    if (typeof opts === 'undefined') opts = {
        autoBom: false
    };
    else if (typeof opts !== 'object') {
        console.warn('Deprecated: Expected third argument to be a object');
        opts = {
            autoBom: !opts
        };
    }
    // prepend BOM for UTF-8 XML and text/* types (including HTML)
    // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
    if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) return new Blob([
        String.fromCharCode(65279),
        blob
    ], {
        type: blob.type
    });
    return blob;
}
function download(url, name, opts) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.onload = function() {
        saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
        console.error('could not download file');
    };
    xhr.send();
}
function corsEnabled(url) {
    var xhr = new XMLHttpRequest();
    // use sync to avoid popup blocker
    xhr.open('HEAD', url, false);
    try {
        xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
}
// `a.click()` doesn't work for all browsers (#465)
function click(node) {
    try {
        node.dispatchEvent(new MouseEvent('click'));
    } catch (e) {
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
        node.dispatchEvent(evt);
    }
}
// Detect WebView inside a native macOS app by ruling out all browsers
// We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
// https://www.whatismybrowser.com/guides/the-latest-user-agent/macos
var isMacOSWebView = _global.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);
var saveAs = _global.saveAs || // probably in some web worker
(typeof window !== 'object' || window !== _global ? function saveAs() {
} : 'download' in HTMLAnchorElement.prototype && !isMacOSWebView ? function saveAs(blob, name, opts) {
    var URL = _global.URL || _global.webkitURL;
    var a = document.createElement('a');
    name = name || blob.name || 'download';
    a.download = name;
    a.rel = 'noopener' // tabnabbing
    ;
    // TODO: detect chrome extensions & packaged apps
    // a.target = '_blank'
    if (typeof blob === 'string') {
        // Support regular links
        a.href = blob;
        if (a.origin !== location.origin) corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = '_blank');
        else click(a);
    } else {
        // Support blobs
        a.href = URL.createObjectURL(blob);
        setTimeout(function() {
            URL.revokeObjectURL(a.href);
        }, 40000) // 40s
        ;
        setTimeout(function() {
            click(a);
        }, 0);
    }
} : 'msSaveOrOpenBlob' in navigator ? function saveAs(blob, name, opts) {
    name = name || blob.name || 'download';
    if (typeof blob === 'string') {
        if (corsEnabled(blob)) download(blob, name, opts);
        else {
            var a = document.createElement('a');
            a.href = blob;
            a.target = '_blank';
            setTimeout(function() {
                click(a);
            });
        }
    } else navigator.msSaveOrOpenBlob(bom(blob, opts), name);
} : function saveAs(blob, name, opts, popup) {
    // Open a popup immediately do go around popup blocker
    // Mostly only available on user interaction and the fileReader is async so...
    popup = popup || open('', '_blank');
    if (popup) popup.document.title = popup.document.body.innerText = 'downloading...';
    if (typeof blob === 'string') return download(blob, name, opts);
    var force = blob.type === 'application/octet-stream';
    var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;
    var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== 'undefined') {
        // Safari doesn't allow downloading of blob URLs
        var reader = new FileReader();
        reader.onloadend = function() {
            var url = reader.result;
            url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;');
            if (popup) popup.location.href = url;
            else location = url;
            popup = null // reverse-tabnabbing #460
            ;
        };
        reader.readAsDataURL(blob);
    } else {
        var URL = _global.URL || _global.webkitURL;
        var url1 = URL.createObjectURL(blob);
        if (popup) popup.location = url1;
        else location.href = url1;
        popup = null // reverse-tabnabbing #460
        ;
        setTimeout(function() {
            URL.revokeObjectURL(url1);
        }, 40000) // 40s
        ;
    }
});
_global.saveAs = saveAs.saveAs = saveAs;
if (typeof module !== 'undefined') module.exports = saveAs;

},{}]},["bGt2V","7Kkax"], "7Kkax", "parcelRequire9981")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBSTtRQUNsQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBRzthQUMxQixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUc7UUFDeEIsS0FBSyxHQUFHLElBQUksQUFBQyxDQUEwQixBQUExQixFQUEwQixBQUExQix3QkFBMEI7O1FBQ3ZDLFVBQVUsQ0FBQyxRQUFRLEdBQUksQ0FBQztZQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBRztRQUFFLENBQUMsRUFBRSxLQUFHLENBQUUsQ0FBTSxBQUFOLEVBQU0sQUFBTixJQUFNOztJQUNsRSxDQUFDO0FBQ0gsQ0FBQztBQUdILE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNO0FBRXZDLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQVcsWUFDL0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLTNiMTA2YzAyZGNiYWE5OTguanMiLCJzcmMvYXNzZXRzL2pzL0ZpbGVTYXZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IG51bGw7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCJjYmQ3OThkODcyMDUyODYwXCI7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCJmMGI5NWVmNzRkNTExNjhlXCI7XCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyogZ2xvYmFsIEhNUl9IT1NULCBITVJfUE9SVCwgSE1SX0VOVl9IQVNILCBITVJfU0VDVVJFICovXG5cbi8qOjpcbmltcG9ydCB0eXBlIHtcbiAgSE1SQXNzZXQsXG4gIEhNUk1lc3NhZ2UsXG59IGZyb20gJ0BwYXJjZWwvcmVwb3J0ZXItZGV2LXNlcnZlci9zcmMvSE1SU2VydmVyLmpzJztcbmludGVyZmFjZSBQYXJjZWxSZXF1aXJlIHtcbiAgKHN0cmluZyk6IG1peGVkO1xuICBjYWNoZToge3xbc3RyaW5nXTogUGFyY2VsTW9kdWxlfH07XG4gIGhvdERhdGE6IG1peGVkO1xuICBNb2R1bGU6IGFueTtcbiAgcGFyZW50OiA/UGFyY2VsUmVxdWlyZTtcbiAgaXNQYXJjZWxSZXF1aXJlOiB0cnVlO1xuICBtb2R1bGVzOiB7fFtzdHJpbmddOiBbRnVuY3Rpb24sIHt8W3N0cmluZ106IHN0cmluZ3x9XXx9O1xuICBITVJfQlVORExFX0lEOiBzdHJpbmc7XG4gIHJvb3Q6IFBhcmNlbFJlcXVpcmU7XG59XG5pbnRlcmZhY2UgUGFyY2VsTW9kdWxlIHtcbiAgaG90OiB7fFxuICAgIGRhdGE6IG1peGVkLFxuICAgIGFjY2VwdChjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICBkaXNwb3NlKGNiOiAobWl4ZWQpID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGFjY2VwdChkZXBzOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBkZWNsaW5lKCk6IHZvaWQsXG4gICAgX2FjY2VwdENhbGxiYWNrczogQXJyYXk8KEZ1bmN0aW9uKSA9PiB2b2lkPixcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogQXJyYXk8KG1peGVkKSA9PiB2b2lkPixcbiAgfH07XG59XG5kZWNsYXJlIHZhciBtb2R1bGU6IHtidW5kbGU6IFBhcmNlbFJlcXVpcmUsIC4uLn07XG5kZWNsYXJlIHZhciBITVJfSE9TVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1BPUlQ6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9FTlZfSEFTSDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1NFQ1VSRTogYm9vbGVhbjtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5cbmZ1bmN0aW9uIE1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIE9sZE1vZHVsZS5jYWxsKHRoaXMsIG1vZHVsZU5hbWUpO1xuICB0aGlzLmhvdCA9IHtcbiAgICBkYXRhOiBtb2R1bGUuYnVuZGxlLmhvdERhdGEsXG4gICAgX2FjY2VwdENhbGxiYWNrczogW10sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IFtdLFxuICAgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KGZuKSB7XG4gICAgICB0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaChmbiB8fCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiBkaXNwb3NlKGZuKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgfTtcbiAgbW9kdWxlLmJ1bmRsZS5ob3REYXRhID0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuYnVuZGxlLk1vZHVsZSA9IE1vZHVsZTtcbnZhciBjaGVja2VkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFjY2VwdGVkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFzc2V0c1RvQWNjZXB0XG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG47XG5cbmZ1bmN0aW9uIGdldEhvc3RuYW1lKCkge1xuICByZXR1cm4gSE1SX0hPU1QgfHwgKGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xufVxuXG5mdW5jdGlvbiBnZXRQb3J0KCkge1xuICByZXR1cm4gSE1SX1BPUlQgfHwgbG9jYXRpb24ucG9ydDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudDtcblxuaWYgKCghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICB2YXIgcG9ydCA9IGdldFBvcnQoKTtcbiAgdmFyIHByb3RvY29sID0gSE1SX1NFQ1VSRSB8fCBsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6JyAmJiAhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdChob3N0bmFtZSkgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciB3cyA9IG5ldyBXZWJTb2NrZXQocHJvdG9jb2wgKyAnOi8vJyArIGhvc3RuYW1lICsgKHBvcnQgPyAnOicgKyBwb3J0IDogJycpICsgJy8nKTsgLy8gJEZsb3dGaXhNZVxuXG4gIHdzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudFxuICAvKjoge2RhdGE6IHN0cmluZywgLi4ufSAqL1xuICApIHtcbiAgICBjaGVja2VkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFjY2VwdGVkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFzc2V0c1RvQWNjZXB0ID0gW107XG4gICAgdmFyIGRhdGFcbiAgICAvKjogSE1STWVzc2FnZSAqL1xuICAgID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXNzZXRzID0gZGF0YS5hc3NldHMuZmlsdGVyKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICByZXR1cm4gYXNzZXQuZW52SGFzaCA9PT0gSE1SX0VOVl9IQVNIO1xuICAgICAgfSk7IC8vIEhhbmRsZSBITVIgVXBkYXRlXG5cbiAgICAgIHZhciBoYW5kbGVkID0gYXNzZXRzLmV2ZXJ5KGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgICAgaG1yQXBwbHkobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzVG9BY2NlcHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaWQgPSBhc3NldHNUb0FjY2VwdFtpXVsxXTtcblxuICAgICAgICAgIGlmICghYWNjZXB0ZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgICBobXJBY2NlcHRSdW4oYXNzZXRzVG9BY2NlcHRbaV1bMF0sIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZGF0YS5kaWFnbm9zdGljcy5hbnNpKSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgYW5zaURpYWdub3N0aWMgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICB2YXIgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfwn5qoIFtwYXJjZWxdOiAnICsgYW5zaURpYWdub3N0aWMubWVzc2FnZSArICdcXG4nICsgc3RhY2sgKyAnXFxuXFxuJyArIGFuc2lEaWFnbm9zdGljLmhpbnRzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgfTtcblxuICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUud2FybignW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0Jyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcblxuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coJ1twYXJjZWxdIOKcqCBFcnJvciByZXNvbHZlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yT3ZlcmxheShkaWFnbm9zdGljcykge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcbiAgdmFyIGVycm9ySFRNTCA9ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogYmxhY2s7IG9wYWNpdHk6IDAuODU7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyBwb3NpdGlvbjogZml4ZWQ7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDMwcHg7IGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTsgei1pbmRleDogOTk5OTtcIj4nO1xuXG4gIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZGlhZ25vc3RpY3MpLFxuICAgICAgX3N0ZXAyO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBkaWFnbm9zdGljID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgdmFyIHN0YWNrID0gZGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBkaWFnbm9zdGljLmNvZGVmcmFtZSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgICBlcnJvckhUTUwgKz0gXCJcXG4gICAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXRvcDogMjBweDtcXFwiPlxcbiAgICAgICAgICBcXHVEODNEXFx1REVBOCBcIi5jb25jYXQoZGlhZ25vc3RpYy5tZXNzYWdlLCBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cHJlPlwiKS5jb25jYXQoc3RhY2ssIFwiPC9wcmU+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICBcIikuY29uY2F0KGRpYWdub3N0aWMuaGludHMubWFwKGZ1bmN0aW9uIChoaW50KSB7XG4gICAgICAgIHJldHVybiAnPGRpdj7wn5KhICcgKyBoaW50ICsgJzwvZGl2Pic7XG4gICAgICB9KS5qb2luKCcnKSwgXCJcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCIpLmNvbmNhdChkaWFnbm9zdGljLmRvY3VtZW50YXRpb24gPyBcIjxkaXY+XFx1RDgzRFxcdURDREQgPGEgc3R5bGU9XFxcImNvbG9yOiB2aW9sZXRcXFwiIGhyZWY9XFxcIlwiLmNvbmNhdChkaWFnbm9zdGljLmRvY3VtZW50YXRpb24sIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+TGVhcm4gbW9yZTwvYT48L2Rpdj5cIikgOiAnJywgXCJcXG4gICAgICA8L2Rpdj5cXG4gICAgXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yMi5mKCk7XG4gIH1cblxuICBlcnJvckhUTUwgKz0gJzwvZGl2Pic7XG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKVxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xue1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBrLCBkLCBkZXA7XG5cbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcblxuICAgICAgaWYgKGRlcCA9PT0gaWQgfHwgQXJyYXkuaXNBcnJheShkZXApICYmIGRlcFtkZXAubGVuZ3RoIC0gMV0gPT09IGlkKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChbYnVuZGxlLCBrXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICB2YXIgbmV3TGluayA9IGxpbmsuY2xvbmVOb2RlKCk7XG5cbiAgbmV3TGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcblxuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIC8vICRGbG93Rml4TWVcbiAgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7IC8vICRGbG93Rml4TWVcblxuICBsaW5rLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0xpbmssIGxpbmsubmV4dFNpYmxpbmcpO1xufVxuXG52YXIgY3NzVGltZW91dCA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjc3NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWZcbiAgICAgIC8qOiBzdHJpbmcgKi9cbiAgICAgID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLm9yaWdpbikgIT09IDAgJiYgIXNlcnZlZEZyb21ITVJTZXJ2ZXI7XG5cbiAgICAgIGlmICghYWJzb2x1dGUpIHtcbiAgICAgICAgdXBkYXRlTGluayhsaW5rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3NzVGltZW91dCA9IG51bGw7XG4gIH0sIDUwKTtcbn1cblxuZnVuY3Rpb24gaG1yQXBwbHkoYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBhc3NldFxuLyo6ICBITVJBc3NldCAqL1xuKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdjc3MnKSB7XG4gICAgcmVsb2FkQ1NTKCk7XG4gIH0gZWxzZSBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIHZhciBkZXBzID0gYXNzZXQuZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXTtcblxuICAgIGlmIChkZXBzKSB7XG4gICAgICB2YXIgZm4gPSBuZXcgRnVuY3Rpb24oJ3JlcXVpcmUnLCAnbW9kdWxlJywgJ2V4cG9ydHMnLCBhc3NldC5vdXRwdXQpO1xuICAgICAgbW9kdWxlc1thc3NldC5pZF0gPSBbZm4sIGRlcHNdO1xuICAgIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgICAgaG1yQXBwbHkoYnVuZGxlLnBhcmVudCwgYXNzZXQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayhidW5kbGUucGFyZW50LCBpZCwgZGVwc0J5QnVuZGxlKTtcbiAgfVxuXG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7IC8vIElmIG5vIHBhcmVudHMsIHRoZSBhc3NldCBpcyBuZXcuIFByZXZlbnQgcmVsb2FkaW5nIHRoZSBwYWdlLlxuXG4gIGlmICghcGFyZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRzLnNvbWUoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2sodlswXSwgdlsxXSwgbnVsbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRSdW4oYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuKSB7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUuaG90RGF0YSA9IHt9O1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCkge1xuICAgIGNhY2hlZC5ob3QuZGF0YSA9IGJ1bmRsZS5ob3REYXRhO1xuICB9XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZShpZCk7XG4gIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHZhciBhc3NldHNUb0Fsc29BY2NlcHQgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhc3NldHNUb0Fsc29BY2NlcHQgJiYgYXNzZXRzVG9BY2NlcHQubGVuZ3RoKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVbbWV0aG9kLXVuYmluZGluZ11cbiAgICAgICAgYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShhc3NldHNUb0FjY2VwdCwgYXNzZXRzVG9BbHNvQWNjZXB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjY2VwdGVkQXNzZXRzW2lkXSA9IHRydWU7XG59IiwiLypcbiogRmlsZVNhdmVyLmpzXG4qIEEgc2F2ZUFzKCkgRmlsZVNhdmVyIGltcGxlbWVudGF0aW9uLlxuKlxuKiBCeSBFbGkgR3JleSwgaHR0cDovL2VsaWdyZXkuY29tXG4qXG4qIExpY2Vuc2UgOiBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9GaWxlU2F2ZXIuanMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCAoTUlUKVxuKiBzb3VyY2UgIDogaHR0cDovL3B1cmwuZWxpZ3JleS5jb20vZ2l0aHViL0ZpbGVTYXZlci5qc1xuKi9cblxuLy8gVGhlIG9uZSBhbmQgb25seSB3YXkgb2YgZ2V0dGluZyBnbG9iYWwgc2NvcGUgaW4gYWxsIGVudmlyb25tZW50c1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzMyNzcxODIvMTAwODk5OVxudmFyIF9nbG9iYWwgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cud2luZG93ID09PSB3aW5kb3dcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmXG4gID8gc2VsZiA6IHR5cGVvZiBnbG9iYWwgPT09ICdvYmplY3QnICYmIGdsb2JhbC5nbG9iYWwgPT09IGdsb2JhbFxuICA/IGdsb2JhbFxuICA6IHRoaXNcblxuZnVuY3Rpb24gYm9tIChibG9iLCBvcHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3VuZGVmaW5lZCcpIG9wdHMgPSB7IGF1dG9Cb206IGZhbHNlIH1cbiAgZWxzZSBpZiAodHlwZW9mIG9wdHMgIT09ICdvYmplY3QnKSB7XG4gICAgY29uc29sZS53YXJuKCdEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdCcpXG4gICAgb3B0cyA9IHsgYXV0b0JvbTogIW9wdHMgfVxuICB9XG5cbiAgLy8gcHJlcGVuZCBCT00gZm9yIFVURi04IFhNTCBhbmQgdGV4dC8qIHR5cGVzIChpbmNsdWRpbmcgSFRNTClcbiAgLy8gbm90ZTogeW91ciBicm93c2VyIHdpbGwgYXV0b21hdGljYWxseSBjb252ZXJ0IFVURi0xNiBVK0ZFRkYgdG8gRUYgQkIgQkZcbiAgaWYgKG9wdHMuYXV0b0JvbSAmJiAvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChibG9iLnR5cGUpKSB7XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkVGRiksIGJsb2JdLCB7IHR5cGU6IGJsb2IudHlwZSB9KVxuICB9XG4gIHJldHVybiBibG9iXG59XG5cbmZ1bmN0aW9uIGRvd25sb2FkICh1cmwsIG5hbWUsIG9wdHMpIHtcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIHhoci5vcGVuKCdHRVQnLCB1cmwpXG4gIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzYXZlQXMoeGhyLnJlc3BvbnNlLCBuYW1lLCBvcHRzKVxuICB9XG4gIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2NvdWxkIG5vdCBkb3dubG9hZCBmaWxlJylcbiAgfVxuICB4aHIuc2VuZCgpXG59XG5cbmZ1bmN0aW9uIGNvcnNFbmFibGVkICh1cmwpIHtcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIC8vIHVzZSBzeW5jIHRvIGF2b2lkIHBvcHVwIGJsb2NrZXJcbiAgeGhyLm9wZW4oJ0hFQUQnLCB1cmwsIGZhbHNlKVxuICB0cnkge1xuICAgIHhoci5zZW5kKClcbiAgfSBjYXRjaCAoZSkge31cbiAgcmV0dXJuIHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPD0gMjk5XG59XG5cbi8vIGBhLmNsaWNrKClgIGRvZXNuJ3Qgd29yayBmb3IgYWxsIGJyb3dzZXJzICgjNDY1KVxuZnVuY3Rpb24gY2xpY2sgKG5vZGUpIHtcbiAgdHJ5IHtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJykpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJylcbiAgICBldnQuaW5pdE1vdXNlRXZlbnQoJ2NsaWNrJywgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCA4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMjAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKVxuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChldnQpXG4gIH1cbn1cblxuLy8gRGV0ZWN0IFdlYlZpZXcgaW5zaWRlIGEgbmF0aXZlIG1hY09TIGFwcCBieSBydWxpbmcgb3V0IGFsbCBicm93c2Vyc1xuLy8gV2UganVzdCBuZWVkIHRvIGNoZWNrIGZvciAnU2FmYXJpJyBiZWNhdXNlIGFsbCBvdGhlciBicm93c2VycyAoYmVzaWRlcyBGaXJlZm94KSBpbmNsdWRlIHRoYXQgdG9vXG4vLyBodHRwczovL3d3dy53aGF0aXNteWJyb3dzZXIuY29tL2d1aWRlcy90aGUtbGF0ZXN0LXVzZXItYWdlbnQvbWFjb3NcbnZhciBpc01hY09TV2ViVmlldyA9IF9nbG9iYWwubmF2aWdhdG9yICYmIC9NYWNpbnRvc2gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0FwcGxlV2ViS2l0Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG5cbnZhciBzYXZlQXMgPSBfZ2xvYmFsLnNhdmVBcyB8fCAoXG4gIC8vIHByb2JhYmx5IGluIHNvbWUgd2ViIHdvcmtlclxuICAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgd2luZG93ICE9PSBfZ2xvYmFsKVxuICAgID8gZnVuY3Rpb24gc2F2ZUFzICgpIHsgLyogbm9vcCAqLyB9XG5cbiAgLy8gVXNlIGRvd25sb2FkIGF0dHJpYnV0ZSBmaXJzdCBpZiBwb3NzaWJsZSAoIzE5MyBMdW1pYSBtb2JpbGUpIHVubGVzcyB0aGlzIGlzIGEgbWFjT1MgV2ViVmlld1xuICA6ICgnZG93bmxvYWQnIGluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZSAmJiAhaXNNYWNPU1dlYlZpZXcpXG4gID8gZnVuY3Rpb24gc2F2ZUFzIChibG9iLCBuYW1lLCBvcHRzKSB7XG4gICAgdmFyIFVSTCA9IF9nbG9iYWwuVVJMIHx8IF9nbG9iYWwud2Via2l0VVJMXG4gICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBuYW1lID0gbmFtZSB8fCBibG9iLm5hbWUgfHwgJ2Rvd25sb2FkJ1xuXG4gICAgYS5kb3dubG9hZCA9IG5hbWVcbiAgICBhLnJlbCA9ICdub29wZW5lcicgLy8gdGFibmFiYmluZ1xuXG4gICAgLy8gVE9ETzogZGV0ZWN0IGNocm9tZSBleHRlbnNpb25zICYgcGFja2FnZWQgYXBwc1xuICAgIC8vIGEudGFyZ2V0ID0gJ19ibGFuaydcblxuICAgIGlmICh0eXBlb2YgYmxvYiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFN1cHBvcnQgcmVndWxhciBsaW5rc1xuICAgICAgYS5ocmVmID0gYmxvYlxuICAgICAgaWYgKGEub3JpZ2luICE9PSBsb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgICAgY29yc0VuYWJsZWQoYS5ocmVmKVxuICAgICAgICAgID8gZG93bmxvYWQoYmxvYiwgbmFtZSwgb3B0cylcbiAgICAgICAgICA6IGNsaWNrKGEsIGEudGFyZ2V0ID0gJ19ibGFuaycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGljayhhKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdXBwb3J0IGJsb2JzXG4gICAgICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgVVJMLnJldm9rZU9iamVjdFVSTChhLmhyZWYpIH0sIDRFNCkgLy8gNDBzXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgY2xpY2soYSkgfSwgMClcbiAgICB9XG4gIH1cblxuICAvLyBVc2UgbXNTYXZlT3JPcGVuQmxvYiBhcyBhIHNlY29uZCBhcHByb2FjaFxuICA6ICdtc1NhdmVPck9wZW5CbG9iJyBpbiBuYXZpZ2F0b3JcbiAgPyBmdW5jdGlvbiBzYXZlQXMgKGJsb2IsIG5hbWUsIG9wdHMpIHtcbiAgICBuYW1lID0gbmFtZSB8fCBibG9iLm5hbWUgfHwgJ2Rvd25sb2FkJ1xuXG4gICAgaWYgKHR5cGVvZiBibG9iID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGNvcnNFbmFibGVkKGJsb2IpKSB7XG4gICAgICAgIGRvd25sb2FkKGJsb2IsIG5hbWUsIG9wdHMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBhLmhyZWYgPSBibG9iXG4gICAgICAgIGEudGFyZ2V0ID0gJ19ibGFuaydcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGNsaWNrKGEpIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGJvbShibG9iLCBvcHRzKSwgbmFtZSlcbiAgICB9XG4gIH1cblxuICAvLyBGYWxsYmFjayB0byB1c2luZyBGaWxlUmVhZGVyIGFuZCBhIHBvcHVwXG4gIDogZnVuY3Rpb24gc2F2ZUFzIChibG9iLCBuYW1lLCBvcHRzLCBwb3B1cCkge1xuICAgIC8vIE9wZW4gYSBwb3B1cCBpbW1lZGlhdGVseSBkbyBnbyBhcm91bmQgcG9wdXAgYmxvY2tlclxuICAgIC8vIE1vc3RseSBvbmx5IGF2YWlsYWJsZSBvbiB1c2VyIGludGVyYWN0aW9uIGFuZCB0aGUgZmlsZVJlYWRlciBpcyBhc3luYyBzby4uLlxuICAgIHBvcHVwID0gcG9wdXAgfHwgb3BlbignJywgJ19ibGFuaycpXG4gICAgaWYgKHBvcHVwKSB7XG4gICAgICBwb3B1cC5kb2N1bWVudC50aXRsZSA9XG4gICAgICBwb3B1cC5kb2N1bWVudC5ib2R5LmlubmVyVGV4dCA9ICdkb3dubG9hZGluZy4uLidcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGJsb2IgPT09ICdzdHJpbmcnKSByZXR1cm4gZG93bmxvYWQoYmxvYiwgbmFtZSwgb3B0cylcblxuICAgIHZhciBmb3JjZSA9IGJsb2IudHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSdcbiAgICB2YXIgaXNTYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KF9nbG9iYWwuSFRNTEVsZW1lbnQpIHx8IF9nbG9iYWwuc2FmYXJpXG4gICAgdmFyIGlzQ2hyb21lSU9TID0gL0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG5cbiAgICBpZiAoKGlzQ2hyb21lSU9TIHx8IChmb3JjZSAmJiBpc1NhZmFyaSkgfHwgaXNNYWNPU1dlYlZpZXcpICYmIHR5cGVvZiBGaWxlUmVhZGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2FmYXJpIGRvZXNuJ3QgYWxsb3cgZG93bmxvYWRpbmcgb2YgYmxvYiBVUkxzXG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVybCA9IHJlYWRlci5yZXN1bHRcbiAgICAgICAgdXJsID0gaXNDaHJvbWVJT1MgPyB1cmwgOiB1cmwucmVwbGFjZSgvXmRhdGE6W147XSo7LywgJ2RhdGE6YXR0YWNobWVudC9maWxlOycpXG4gICAgICAgIGlmIChwb3B1cCkgcG9wdXAubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgICBlbHNlIGxvY2F0aW9uID0gdXJsXG4gICAgICAgIHBvcHVwID0gbnVsbCAvLyByZXZlcnNlLXRhYm5hYmJpbmcgIzQ2MFxuICAgICAgfVxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIFVSTCA9IF9nbG9iYWwuVVJMIHx8IF9nbG9iYWwud2Via2l0VVJMXG4gICAgICB2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICAgICAgaWYgKHBvcHVwKSBwb3B1cC5sb2NhdGlvbiA9IHVybFxuICAgICAgZWxzZSBsb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICBwb3B1cCA9IG51bGwgLy8gcmV2ZXJzZS10YWJuYWJiaW5nICM0NjBcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCkgfSwgNEU0KSAvLyA0MHNcbiAgICB9XG4gIH1cbilcblxuX2dsb2JhbC5zYXZlQXMgPSBzYXZlQXMuc2F2ZUFzID0gc2F2ZUFzXG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHNhdmVBcztcbn1cbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJGaWxlU2F2ZXIuanMubWFwIn0=
