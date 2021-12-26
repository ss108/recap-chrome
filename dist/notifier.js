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
})({"28G8n":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "cbd798d872052860";
module.bundle.HMR_BUNDLE_ID = "d95d33bb5d773185";
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

},{}],"axFMj":[function(require,module,exports) {
// Public impure functions.  (See utils.js for details on defining services.)
function Notifier() {
    const showNotification = function(title, message, cb) {
        console.info("RECAP: Running showNotification function. Expect a notification.");
        const notificationOptions = {
            type: 'basic',
            title: title,
            message: message,
            iconUrl: chrome.extension.getURL('assets/images/icon-32.png'),
            priority: 0
        };
        const notificationID1 = 'recap_notification';
        chrome.notifications.create(notificationID1, notificationOptions, cb);
        // Make it go away when clicked.
        chrome.notifications.onClicked.addListener(function(notificationID) {
            chrome.notifications.clear(notificationID, function() {
            });
        });
    };
    return {
        // Shows a desktop notification for a few seconds (length depends on priority)
        show: function(title, message, cb) {
            showNotification(title, message, cb);
        },
        // Shows an upload message if upload notifications are enabled.
        showUpload: function(message, cb) {
            chrome.storage.local.get('options', function(items) {
                if (items.options.show_notifications) showNotification('RECAP upload', message, cb);
            });
        },
        // Shows a login status message if login status notifications are enabled.
        showStatus: function(active, message, cb) {
            chrome.storage.local.get('options', function(items) {
                if (items.options.show_notifications) showNotification(active ? 'RECAP is active' : 'RECAP is inactive', message, cb);
            });
        }
    };
}

},{}]},["28G8n","axFMj"], "axFMj", "parcelRequire9981")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQUM7UUFFaEIsQ0FBQztJQUVMLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBQztRQUNOLEVBQThFLEFBQTlFLDRFQUE4RTtRQUM5RSxJQUFJLEVBQUUsUUFBUSxDQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbkMsZ0JBQWdCLENBQ2QsS0FBSyxFQUNMLE9BQU8sRUFDUCxFQUFFO1FBRU4sQ0FBQztRQUNELEVBQStELEFBQS9ELDZEQUErRDtRQUMvRCxVQUFVLEVBQUUsUUFBUSxDQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBUyxVQUFFLFFBQVEsQ0FBRSxLQUFLLEVBQUUsQ0FBQztnQkFDcEQsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQ2xDLGdCQUFnQixDQUNkLENBQWMsZUFDZCxPQUFPLEVBQ1AsRUFBRTtZQUdSLENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBMEUsQUFBMUUsd0VBQTBFO1FBQzFFLFVBQVUsRUFBRSxRQUFRLENBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBUyxVQUFFLFFBQVEsQ0FBRSxLQUFLLEVBQUUsQ0FBQztnQkFDcEQsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQ2xDLGdCQUFnQixDQUNkLE1BQU0sR0FBRyxDQUFpQixtQkFBRyxDQUFtQixvQkFDaEQsT0FBTyxFQUNQLEVBQUU7WUFHUixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLTQxYjViZGU5ZTIxYTE5MzUuanMiLCJzcmMvbm90aWZpZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSBudWxsO3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiY2JkNzk4ZDg3MjA1Mjg2MFwiO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiZDk1ZDMzYmI1ZDc3MzE4NVwiO1widXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQ7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qIGdsb2JhbCBITVJfSE9TVCwgSE1SX1BPUlQsIEhNUl9FTlZfSEFTSCwgSE1SX1NFQ1VSRSAqL1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiBtaXhlZDtcbiAgTW9kdWxlOiBhbnk7XG4gIHBhcmVudDogP1BhcmNlbFJlcXVpcmU7XG4gIGlzUGFyY2VsUmVxdWlyZTogdHJ1ZTtcbiAgbW9kdWxlczoge3xbc3RyaW5nXTogW0Z1bmN0aW9uLCB7fFtzdHJpbmddOiBzdHJpbmd8fV18fTtcbiAgSE1SX0JVTkRMRV9JRDogc3RyaW5nO1xuICByb290OiBQYXJjZWxSZXF1aXJlO1xufVxuaW50ZXJmYWNlIFBhcmNlbE1vZHVsZSB7XG4gIGhvdDoge3xcbiAgICBkYXRhOiBtaXhlZCxcbiAgICBhY2NlcHQoY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgZGlzcG9zZShjYjogKG1peGVkKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBhY2NlcHQoZGVwczogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gZGVjbGluZSgpOiB2b2lkLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IEFycmF5PChGdW5jdGlvbikgPT4gdm9pZD4sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IEFycmF5PChtaXhlZCkgPT4gdm9pZD4sXG4gIHx9O1xufVxuZGVjbGFyZSB2YXIgbW9kdWxlOiB7YnVuZGxlOiBQYXJjZWxSZXF1aXJlLCAuLi59O1xuZGVjbGFyZSB2YXIgSE1SX0hPU1Q6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9QT1JUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfRU5WX0hBU0g6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9TRUNVUkU6IGJvb2xlYW47XG4qL1xudmFyIE9WRVJMQVlfSUQgPSAnX19wYXJjZWxfX2Vycm9yX19vdmVybGF5X18nO1xudmFyIE9sZE1vZHVsZSA9IG1vZHVsZS5idW5kbGUuTW9kdWxlO1xuXG5mdW5jdGlvbiBNb2R1bGUobW9kdWxlTmFtZSkge1xuICBPbGRNb2R1bGUuY2FsbCh0aGlzLCBtb2R1bGVOYW1lKTtcbiAgdGhpcy5ob3QgPSB7XG4gICAgZGF0YTogbW9kdWxlLmJ1bmRsZS5ob3REYXRhLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IFtdLFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBbXSxcbiAgICBhY2NlcHQ6IGZ1bmN0aW9uIGFjY2VwdChmbikge1xuICAgICAgdGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2goZm4gfHwgZnVuY3Rpb24gKCkge30pO1xuICAgIH0sXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gZGlzcG9zZShmbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gIH07XG4gIG1vZHVsZS5idW5kbGUuaG90RGF0YSA9IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmJ1bmRsZS5Nb2R1bGUgPSBNb2R1bGU7XG52YXIgY2hlY2tlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhY2NlcHRlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhc3NldHNUb0FjY2VwdFxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xuO1xuXG5mdW5jdGlvbiBnZXRIb3N0bmFtZSgpIHtcbiAgcmV0dXJuIEhNUl9IT1NUIHx8IChsb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwJykgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgcmV0dXJuIEhNUl9QT1JUIHx8IGxvY2F0aW9uLnBvcnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuXG52YXIgcGFyZW50ID0gbW9kdWxlLmJ1bmRsZS5wYXJlbnQ7XG5cbmlmICgoIXBhcmVudCB8fCAhcGFyZW50LmlzUGFyY2VsUmVxdWlyZSkgJiYgdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgdmFyIHBvcnQgPSBnZXRQb3J0KCk7XG4gIHZhciBwcm90b2NvbCA9IEhNUl9TRUNVUkUgfHwgbG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHBzOicgJiYgIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QoaG9zdG5hbWUpID8gJ3dzcycgOiAnd3MnO1xuICB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyk7IC8vICRGbG93Rml4TWVcblxuICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnRcbiAgLyo6IHtkYXRhOiBzdHJpbmcsIC4uLn0gKi9cbiAgKSB7XG4gICAgY2hlY2tlZEFzc2V0cyA9IHt9XG4gICAgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuICAgIDtcbiAgICBhY2NlcHRlZEFzc2V0cyA9IHt9XG4gICAgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuICAgIDtcbiAgICBhc3NldHNUb0FjY2VwdCA9IFtdO1xuICAgIHZhciBkYXRhXG4gICAgLyo6IEhNUk1lc3NhZ2UgKi9cbiAgICA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAndXBkYXRlJykge1xuICAgICAgLy8gUmVtb3ZlIGVycm9yIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFzc2V0cyA9IGRhdGEuYXNzZXRzLmZpbHRlcihmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LmVudkhhc2ggPT09IEhNUl9FTlZfSEFTSDtcbiAgICAgIH0pOyAvLyBIYW5kbGUgSE1SIFVwZGF0ZVxuXG4gICAgICB2YXIgaGFuZGxlZCA9IGFzc2V0cy5ldmVyeShmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LnR5cGUgPT09ICdjc3MnIHx8IGFzc2V0LnR5cGUgPT09ICdqcycgJiYgaG1yQWNjZXB0Q2hlY2sobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldC5pZCwgYXNzZXQuZGVwc0J5QnVuZGxlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICAgIGhtckFwcGx5KG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0c1RvQWNjZXB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGlkID0gYXNzZXRzVG9BY2NlcHRbaV1bMV07XG5cbiAgICAgICAgICBpZiAoIWFjY2VwdGVkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yQWNjZXB0UnVuKGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgLy8gTG9nIHBhcmNlbCBlcnJvcnMgdG8gY29uc29sZVxuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGRhdGEuZGlhZ25vc3RpY3MuYW5zaSksXG4gICAgICAgICAgX3N0ZXA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGFuc2lEaWFnbm9zdGljID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgdmFyIHN0YWNrID0gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lID8gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lIDogYW5zaURpYWdub3N0aWMuc3RhY2s7XG4gICAgICAgICAgY29uc29sZS5lcnJvcign8J+aqCBbcGFyY2VsXTogJyArIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgKyAnXFxuJyArIHN0YWNrICsgJ1xcblxcbicgKyBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gUmVuZGVyIHRoZSBmYW5jeSBodG1sIG92ZXJsYXlcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICAgIHZhciBvdmVybGF5ID0gY3JlYXRlRXJyb3JPdmVybGF5KGRhdGEuZGlhZ25vc3RpY3MuaHRtbCk7IC8vICRGbG93Rml4TWVcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3cy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4gIH07XG5cbiAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLndhcm4oJ1twYXJjZWxdIPCfmqggQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciB3YXMgbG9zdCcpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcnJvck92ZXJsYXkoKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCk7XG5cbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdbcGFyY2VsXSDinKggRXJyb3IgcmVzb2x2ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFcnJvck92ZXJsYXkoZGlhZ25vc3RpY3MpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5pZCA9IE9WRVJMQVlfSUQ7XG4gIHZhciBlcnJvckhUTUwgPSAnPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6IGJsYWNrOyBvcGFjaXR5OiAwLjg1OyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiB3aGl0ZTsgcG9zaXRpb246IGZpeGVkOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyB0b3A6IDBweDsgbGVmdDogMHB4OyBwYWRkaW5nOiAzMHB4OyBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7IHotaW5kZXg6IDk5OTk7XCI+JztcblxuICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGRpYWdub3N0aWNzKSxcbiAgICAgIF9zdGVwMjtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgZGlhZ25vc3RpYyA9IF9zdGVwMi52YWx1ZTtcbiAgICAgIHZhciBzdGFjayA9IGRpYWdub3N0aWMuY29kZWZyYW1lID8gZGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBkaWFnbm9zdGljLnN0YWNrO1xuICAgICAgZXJyb3JIVE1MICs9IFwiXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcImZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDIwcHg7XFxcIj5cXG4gICAgICAgICAgXFx1RDgzRFxcdURFQTggXCIuY29uY2F0KGRpYWdub3N0aWMubWVzc2FnZSwgXCJcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHByZT5cIikuY29uY2F0KHN0YWNrLCBcIjwvcHJlPlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgXCIpLmNvbmNhdChkaWFnbm9zdGljLmhpbnRzLm1hcChmdW5jdGlvbiAoaGludCkge1xuICAgICAgICByZXR1cm4gJzxkaXY+8J+SoSAnICsgaGludCArICc8L2Rpdj4nO1xuICAgICAgfSkuam9pbignJyksIFwiXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFwiKS5jb25jYXQoZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uID8gXCI8ZGl2PlxcdUQ4M0RcXHVEQ0REIDxhIHN0eWxlPVxcXCJjb2xvcjogdmlvbGV0XFxcIiBocmVmPVxcXCJcIi5jb25jYXQoZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uLCBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkxlYXJuIG1vcmU8L2E+PC9kaXY+XCIpIDogJycsIFwiXFxuICAgICAgPC9kaXY+XFxuICAgIFwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvcjIuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvcjIuZigpO1xuICB9XG5cbiAgZXJyb3JIVE1MICs9ICc8L2Rpdj4nO1xuICBvdmVybGF5LmlubmVySFRNTCA9IGVycm9ySFRNTDtcbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudHMoYnVuZGxlLCBpZClcbi8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi9cbntcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaywgZCwgZGVwO1xuXG4gIGZvciAoayBpbiBtb2R1bGVzKSB7XG4gICAgZm9yIChkIGluIG1vZHVsZXNba11bMV0pIHtcbiAgICAgIGRlcCA9IG1vZHVsZXNba11bMV1bZF07XG5cbiAgICAgIGlmIChkZXAgPT09IGlkIHx8IEFycmF5LmlzQXJyYXkoZGVwKSAmJiBkZXBbZGVwLmxlbmd0aCAtIDFdID09PSBpZCkge1xuICAgICAgICBwYXJlbnRzLnB1c2goW2J1bmRsZSwga10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KGdldFBhcmVudHMoYnVuZGxlLnBhcmVudCwgaWQpKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmspIHtcbiAgdmFyIG5ld0xpbmsgPSBsaW5rLmNsb25lTm9kZSgpO1xuXG4gIG5ld0xpbmsub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsaW5rLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICB9XG4gIH07XG5cbiAgbmV3TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAvLyAkRmxvd0ZpeE1lXG4gIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykuc3BsaXQoJz8nKVswXSArICc/JyArIERhdGUubm93KCkpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgbGluay5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdMaW5rLCBsaW5rLm5leHRTaWJsaW5nKTtcbn1cblxudmFyIGNzc1RpbWVvdXQgPSBudWxsO1xuXG5mdW5jdGlvbiByZWxvYWRDU1MoKSB7XG4gIGlmIChjc3NUaW1lb3V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3NzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV1cbiAgICAgIHZhciBocmVmXG4gICAgICAvKjogc3RyaW5nICovXG4gICAgICA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgICAgIHZhciBzZXJ2ZWRGcm9tSE1SU2VydmVyID0gaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnID8gbmV3IFJlZ0V4cCgnXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTonICsgZ2V0UG9ydCgpKS50ZXN0KGhyZWYpIDogaHJlZi5pbmRleE9mKGhvc3RuYW1lICsgJzonICsgZ2V0UG9ydCgpKTtcbiAgICAgIHZhciBhYnNvbHV0ZSA9IC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoaHJlZikgJiYgaHJlZi5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pICE9PSAwICYmICFzZXJ2ZWRGcm9tSE1SU2VydmVyO1xuXG4gICAgICBpZiAoIWFic29sdXRlKSB7XG4gICAgICAgIHVwZGF0ZUxpbmsobGlua3NbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5cbmZ1bmN0aW9uIGhtckFwcGx5KGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgYXNzZXRcbi8qOiAgSE1SQXNzZXQgKi9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChhc3NldC50eXBlID09PSAnY3NzJykge1xuICAgIHJlbG9hZENTUygpO1xuICB9IGVsc2UgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICB2YXIgZGVwcyA9IGFzc2V0LmRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF07XG5cbiAgICBpZiAoZGVwcykge1xuICAgICAgdmFyIGZuID0gbmV3IEZ1bmN0aW9uKCdyZXF1aXJlJywgJ21vZHVsZScsICdleHBvcnRzJywgYXNzZXQub3V0cHV0KTtcbiAgICAgIG1vZHVsZXNbYXNzZXQuaWRdID0gW2ZuLCBkZXBzXTtcbiAgICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIGhtckFwcGx5KGJ1bmRsZS5wYXJlbnQsIGFzc2V0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2soYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuLCBkZXBzQnlCdW5kbGVcbi8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGVwc0J5QnVuZGxlICYmICFkZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdKSB7XG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgcm9vdCBidW5kbGUgd2l0aG91dCBmaW5kaW5nIHdoZXJlIHRoZSBhc3NldCBzaG91bGQgZ28sXG4gICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGRvLiBNYXJrIGFzIFwiYWNjZXB0ZWRcIiBzbyB3ZSBkb24ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgaWYgKCFidW5kbGUucGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2soYnVuZGxlLnBhcmVudCwgaWQsIGRlcHNCeUJ1bmRsZSk7XG4gIH1cblxuICBpZiAoY2hlY2tlZEFzc2V0c1tpZF0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpOyAvLyBJZiBubyBwYXJlbnRzLCB0aGUgYXNzZXQgaXMgbmV3LiBQcmV2ZW50IHJlbG9hZGluZyB0aGUgcGFnZS5cblxuICBpZiAoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gcGFyZW50cy5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKHZbMF0sIHZbMV0sIG51bGwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0UnVuKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbikge1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlLmhvdERhdGEgPSB7fTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QpIHtcbiAgICBjYWNoZWQuaG90LmRhdGEgPSBidW5kbGUuaG90RGF0YTtcbiAgfVxuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIGNiKGJ1bmRsZS5ob3REYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUoaWQpO1xuICBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICB2YXIgYXNzZXRzVG9BbHNvQWNjZXB0ID0gY2IoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzZXRzVG9BbHNvQWNjZXB0ICYmIGFzc2V0c1RvQWNjZXB0Lmxlbmd0aCkge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lW21ldGhvZC11bmJpbmRpbmddXG4gICAgICAgIGFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoYXNzZXRzVG9BY2NlcHQsIGFzc2V0c1RvQWxzb0FjY2VwdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhY2NlcHRlZEFzc2V0c1tpZF0gPSB0cnVlO1xufSIsIi8vIFB1YmxpYyBpbXB1cmUgZnVuY3Rpb25zLiAgKFNlZSB1dGlscy5qcyBmb3IgZGV0YWlscyBvbiBkZWZpbmluZyBzZXJ2aWNlcy4pXHJcbmZ1bmN0aW9uIE5vdGlmaWVyKCkge1xyXG4gIGNvbnN0IHNob3dOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAodGl0bGUsIG1lc3NhZ2UsIGNiKSB7XHJcbiAgICBjb25zb2xlLmluZm8oXCJSRUNBUDogUnVubmluZyBzaG93Tm90aWZpY2F0aW9uIGZ1bmN0aW9uLiBFeHBlY3QgYSBub3RpZmljYXRpb24uXCIpO1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcclxuICAgICAgdHlwZTogJ2Jhc2ljJyxcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICBpY29uVXJsOiBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9pY29uLTMyLnBuZycpLFxyXG4gICAgICBwcmlvcml0eTogMFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbklEID0gJ3JlY2FwX25vdGlmaWNhdGlvbic7XHJcbiAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUoXHJcbiAgICAgIG5vdGlmaWNhdGlvbklELFxyXG4gICAgICBub3RpZmljYXRpb25PcHRpb25zLFxyXG4gICAgICBjYlxyXG4gICAgKTtcclxuICAgIC8vIE1ha2UgaXQgZ28gYXdheSB3aGVuIGNsaWNrZWQuXHJcbiAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoXHJcbiAgICAgIGZ1bmN0aW9uKG5vdGlmaWNhdGlvbklEKXtcclxuICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jbGVhcihcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbklELFxyXG4gICAgICAgICAgZnVuY3Rpb24oKXt9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiB7XHJcbiAgICAvLyBTaG93cyBhIGRlc2t0b3Agbm90aWZpY2F0aW9uIGZvciBhIGZldyBzZWNvbmRzIChsZW5ndGggZGVwZW5kcyBvbiBwcmlvcml0eSlcclxuICAgIHNob3c6IGZ1bmN0aW9uICh0aXRsZSwgbWVzc2FnZSwgY2IpIHtcclxuICAgICAgc2hvd05vdGlmaWNhdGlvbihcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgIGNiXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgLy8gU2hvd3MgYW4gdXBsb2FkIG1lc3NhZ2UgaWYgdXBsb2FkIG5vdGlmaWNhdGlvbnMgYXJlIGVuYWJsZWQuXHJcbiAgICBzaG93VXBsb2FkOiBmdW5jdGlvbiAobWVzc2FnZSwgY2IpIHtcclxuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdvcHRpb25zJywgZnVuY3Rpb24gKGl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1zLm9wdGlvbnMuc2hvd19ub3RpZmljYXRpb25zKSB7XHJcbiAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAnUkVDQVAgdXBsb2FkJyxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgY2JcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyBTaG93cyBhIGxvZ2luIHN0YXR1cyBtZXNzYWdlIGlmIGxvZ2luIHN0YXR1cyBub3RpZmljYXRpb25zIGFyZSBlbmFibGVkLlxyXG4gICAgc2hvd1N0YXR1czogZnVuY3Rpb24gKGFjdGl2ZSwgbWVzc2FnZSwgY2IpIHtcclxuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdvcHRpb25zJywgZnVuY3Rpb24gKGl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1zLm9wdGlvbnMuc2hvd19ub3RpZmljYXRpb25zKSB7XHJcbiAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICBhY3RpdmUgPyAnUkVDQVAgaXMgYWN0aXZlJyA6ICdSRUNBUCBpcyBpbmFjdGl2ZScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGNiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpZXIuanMubWFwIn0=
