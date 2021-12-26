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
})({"bzi2g":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "cbd798d872052860";
module.bundle.HMR_BUNDLE_ID = "c9a31c0b57623ed1";
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

},{}],"lHGn6":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.moment = factory();
})(this, function() {
    'use strict';
    var hookCallback;
    function hooks() {
        return hookCallback.apply(null, arguments);
    }
    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }
    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }
    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }
    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(obj).length === 0;
        else {
            var k;
            for(k in obj){
                if (hasOwnProp(obj, k)) return false;
            }
            return true;
        }
    }
    function isUndefined(input) {
        return input === void 0;
    }
    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }
    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }
    function map(arr, fn) {
        var res = [], i;
        for(i = 0; i < arr.length; ++i)res.push(fn(arr[i], i));
        return res;
    }
    function extend(a, b) {
        for(var i in b)if (hasOwnProp(b, i)) a[i] = b[i];
        if (hasOwnProp(b, 'toString')) a.toString = b.toString;
        if (hasOwnProp(b, 'valueOf')) a.valueOf = b.valueOf;
        return a;
    }
    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }
    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }
    function getParsingFlags(m) {
        if (m._pf == null) m._pf = defaultParsingFlags();
        return m._pf;
    }
    var some;
    if (Array.prototype.some) some = Array.prototype.some;
    else some = function(fun) {
        var t = Object(this), len = t.length >>> 0, i;
        for(i = 0; i < len; i++){
            if (i in t && fun.call(this, t[i], i, t)) return true;
        }
        return false;
    };
    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
                return i != null;
            }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            if (Object.isFrozen == null || !Object.isFrozen(m)) m._isValid = isNowValid;
            else return isNowValid;
        }
        return m._isValid;
    }
    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) extend(getParsingFlags(m), flags);
        else getParsingFlags(m).userInvalidated = true;
        return m;
    }
    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [], updateInProgress = false;
    function copyConfig(to, from) {
        var i, prop, val;
        if (!isUndefined(from._isAMomentObject)) to._isAMomentObject = from._isAMomentObject;
        if (!isUndefined(from._i)) to._i = from._i;
        if (!isUndefined(from._f)) to._f = from._f;
        if (!isUndefined(from._l)) to._l = from._l;
        if (!isUndefined(from._strict)) to._strict = from._strict;
        if (!isUndefined(from._tzm)) to._tzm = from._tzm;
        if (!isUndefined(from._isUTC)) to._isUTC = from._isUTC;
        if (!isUndefined(from._offset)) to._offset = from._offset;
        if (!isUndefined(from._pf)) to._pf = getParsingFlags(from);
        if (!isUndefined(from._locale)) to._locale = from._locale;
        if (momentProperties.length > 0) for(i = 0; i < momentProperties.length; i++){
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) to[prop] = val;
        }
        return to;
    }
    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) this._d = new Date(NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }
    function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) console.warn('Deprecation warning: ' + msg);
    }
    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
            if (hooks.deprecationHandler != null) hooks.deprecationHandler(null, msg);
            if (firstTime) {
                var args = [], arg, i, key;
                for(i = 0; i < arguments.length; i++){
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for(key in arguments[0])if (hasOwnProp(arguments[0], key)) arg += key + ': ' + arguments[0][key] + ', ';
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else arg = arguments[i];
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }
    var deprecations = {
    };
    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) hooks.deprecationHandler(name, msg);
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
        return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }
    function set(config) {
        var prop, i;
        for(i in config)if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) this[i] = prop;
            else this['_' + i] = prop;
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }
    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({
        }, parentConfig), prop;
        for(prop in childConfig)if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {
                };
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) res[prop] = childConfig[prop];
            else delete res[prop];
        }
        for(prop in parentConfig)if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) // make sure changes to properties don't modify parent config
        res[prop] = extend({
        }, res[prop]);
        return res;
    }
    function Locale(config) {
        if (config != null) this.set(config);
    }
    var keys;
    if (Object.keys) keys = Object.keys;
    else keys = function(obj) {
        var i, res = [];
        for(i in obj)if (hasOwnProp(obj, i)) res.push(i);
        return res;
    };
    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };
    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {
    }, formatTokenFunctions = {
    };
    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') func = function() {
            return this[callback]();
        };
        if (token) formatTokenFunctions[token] = func;
        if (padded) formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
        if (ordinal) formatTokenFunctions[ordinal] = function() {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) return input.replace(/^\[|\]$/g, '');
        return input.replace(/\\/g, '');
    }
    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i1, length;
        for(i1 = 0, length = array.length; i1 < length; i1++)if (formatTokenFunctions[array[i1]]) array[i1] = formatTokenFunctions[array[i1]];
        else array[i1] = removeFormattingTokens(array[i1]);
        return function(mom) {
            var output = '', i;
            for(i = 0; i < length; i++)output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            return output;
        };
    }
    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) return m.localeData().invalidDate();
        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
    }
    function expandFormat(format, locale) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while(i >= 0 && localFormattingTokens.test(format)){
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }
    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    function longDateFormat(key) {
        var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) return format;
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') return tok.slice(1);
            return tok;
        }).join('');
        return this._longDateFormat[key];
    }
    var defaultInvalidDate = 'Invalid date';
    function invalidDate() {
        return this._invalidDate;
    }
    var defaultOrdinal = '%d', defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal1(number) {
        return this._ordinal.replace('%d', number);
    }
    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }
    var aliases = {
    };
    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {
        }, normalizedProp, prop;
        for(prop in inputObject)if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) normalizedInput[normalizedProp] = inputObject[prop];
        }
        return normalizedInput;
    }
    var priorities = {
    };
    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }
    function getPrioritizedUnits(unitsObj) {
        var units = [], u;
        for(u in unitsObj)if (hasOwnProp(unitsObj, u)) units.push({
            unit: u,
            priority: priorities[u]
        });
        units.sort(function(a, b) {
            return a.priority - b.priority;
        });
        return units;
    }
    function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    function absFloor(number) {
        if (number < 0) // -0 -> 0
        return Math.ceil(number) || 0;
        else return Math.floor(number);
    }
    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) value = absFloor(coercedNumber);
        return value;
    }
    function makeGetSet(unit, keepTime) {
        return function(value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else return get(this, unit);
        };
    }
    function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }
    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
    // MOMENTS
    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) return this[units]();
        return this;
    }
    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i;
            for(i = 0; i < prioritized.length; i++)this[prioritized[i].unit](units[prioritized[i].unit]);
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) return this[units](value);
        }
        return this;
    }
    var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
    regexes = {
    };
    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
        };
    }
    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) return new RegExp(unescapeFormat(token));
        return regexes[token](config._strict, config._locale);
    }
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }
    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    var tokens1 = {
    };
    function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === 'string') token = [
            token
        ];
        if (isNumber(callback)) func = function(input, array) {
            array[callback] = toInt(input);
        };
        for(i = 0; i < token.length; i++)tokens1[token[i]] = func;
    }
    function addWeekParseToken(token2, callback) {
        addParseToken(token2, function(input, array, config, token) {
            config._w = config._w || {
            };
            callback(input, config._w, config, token);
        });
    }
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens1, token)) tokens1[token](input, config._a, config, token);
    }
    var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
    function mod(n, x) {
        return (n % x + x) % x;
    }
    var indexOf;
    if (Array.prototype.indexOf) indexOf = Array.prototype.indexOf;
    else indexOf = function(o) {
        // I know
        var i;
        for(i = 0; i < this.length; ++i){
            if (this[i] === o) return i;
        }
        return -1;
    };
    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) return NaN;
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    // FORMATTING
    addFormatToken('M', [
        'MM',
        2
    ], 'Mo', function() {
        return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function(format) {
        return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function(format) {
        return this.localeData().months(this, format);
    });
    // ALIASES
    addUnitAlias('month', 'M');
    // PRIORITY
    addUnitPriority('month', 8);
    // PARSING
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function(isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function(isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });
    addParseToken([
        'M',
        'MM'
    ], function(input, array) {
        array[MONTH] = toInt(input) - 1;
    });
    addParseToken([
        'MMM',
        'MMMM'
    ], function(input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) array[MONTH] = month;
        else getParsingFlags(config).invalidMonth = input;
    });
    // LOCALES
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
    function localeMonths(m, format) {
        if (!m) return isArray(this._months) ? this._months : this._months['standalone'];
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }
    function localeMonthsShort(m, format) {
        if (!m) return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }
    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for(i = 0; i < 12; ++i){
                mom = createUTC([
                    2000,
                    i
                ]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) return handleStrictParse.call(this, monthName, format, strict);
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) return i;
            else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) return i;
            else if (!strict && this._monthsParse[i].test(monthName)) return i;
        }
    }
    // MOMENTS
    function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) // No op
        return mom;
        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) value = toInt(value);
            else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) return mom;
            }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }
    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else return get(this, 'Month');
    }
    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) computeMonthsParse.call(this);
            if (isStrict) return this._monthsShortStrictRegex;
            else return this._monthsShortRegex;
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) this._monthsShortRegex = defaultMonthsShortRegex;
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) computeMonthsParse.call(this);
            if (isStrict) return this._monthsStrictRegex;
            else return this._monthsRegex;
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) this._monthsRegex = defaultMonthsRegex;
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
    }
    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for(i = 0; i < 12; i++){
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for(i = 0; i < 24; i++)mixedPieces[i] = regexEscape(mixedPieces[i]);
        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    addFormatToken('Y', 0, 0, function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });
    addFormatToken(0, [
        'YY',
        2
    ], 0, function() {
        return this.year() % 100;
    });
    addFormatToken(0, [
        'YYYY',
        4
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYY',
        5
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYYY',
        6,
        true
    ], 0, 'year');
    // ALIASES
    addUnitAlias('year', 'y');
    // PRIORITIES
    addUnitPriority('year', 1);
    // PARSING
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken([
        'YYYYY',
        'YYYYYY'
    ], YEAR);
    addParseToken('YYYY', function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function(input, array) {
        array[YEAR] = parseInt(input, 10);
    });
    // HELPERS
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    // HOOKS
    hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };
    // MOMENTS
    var getSetYear = makeGetSet('FullYear', true);
    function getIsLeapYear() {
        return isLeapYear(this.year());
    }
    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) date.setFullYear(y);
        } else date = new Date(y, m, d, h, M, s, ms);
        return date;
    }
    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) date.setUTCFullYear(y);
        } else date = new Date(Date.UTC.apply(null, arguments));
        return date;
    }
    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }
        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }
    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }
        return {
            week: resWeek,
            year: resYear
        };
    }
    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    // FORMATTING
    addFormatToken('w', [
        'ww',
        2
    ], 'wo', 'week');
    addFormatToken('W', [
        'WW',
        2
    ], 'Wo', 'isoWeek');
    // ALIASES
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    // PRIORITIES
    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);
    // PARSING
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken([
        'w',
        'ww',
        'W',
        'WW'
    ], function(input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });
    // HELPERS
    // LOCALES
    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
        dow: 0,
        doy: 6
    };
    function localeFirstDayOfWeek() {
        return this._week.dow;
    }
    function localeFirstDayOfYear() {
        return this._week.doy;
    }
    // MOMENTS
    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    // FORMATTING
    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function(format) {
        return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function(format) {
        return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function(format) {
        return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');
    // ALIASES
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);
    // PARSING
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function(isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function(isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function(isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken([
        'dd',
        'ddd',
        'dddd'
    ], function(input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) week.d = weekday;
        else getParsingFlags(config).invalidWeekday = input;
    });
    addWeekParseToken([
        'd',
        'e',
        'E'
    ], function(input, week, config, token) {
        week[token] = toInt(input);
    });
    // HELPERS
    function parseWeekday(input, locale) {
        if (typeof input !== 'string') return input;
        if (!isNaN(input)) return parseInt(input, 10);
        input = locale.weekdaysParse(input);
        if (typeof input === 'number') return input;
        return null;
    }
    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') return locale.weekdaysParse(input) % 7 || 7;
        return isNaN(input) ? null : input;
    }
    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'), defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'), defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
    }
    function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }
    function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for(i = 0; i < 7; ++i){
                mom = createUTC([
                    2000,
                    1
                ]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }
    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) return handleStrictParse$1.call(this, weekdayName, format, strict);
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) return i;
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) return i;
        }
    }
    // MOMENTS
    function getSetDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else return day;
    }
    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }
    function getSetISODayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else return this.day() || 7;
    }
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysStrictRegex;
            else return this._weekdaysRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) this._weekdaysRegex = defaultWeekdaysRegex;
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysShortStrictRegex;
            else return this._weekdaysShortRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysMinStrictRegex;
            else return this._weekdaysMinRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }
    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    function hFormat() {
        return this.hours() % 12 || 12;
    }
    function kFormat() {
        return this.hours() || 24;
    }
    addFormatToken('H', [
        'HH',
        2
    ], 0, 'hour');
    addFormatToken('h', [
        'hh',
        2
    ], 0, hFormat);
    addFormatToken('k', [
        'kk',
        2
    ], 0, kFormat);
    addFormatToken('hmm', 0, 0, function() {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function() {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function() {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function() {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem1(token, lowercase) {
        addFormatToken(token, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }
    meridiem1('a', true);
    meridiem1('A', false);
    // ALIASES
    addUnitAlias('hour', 'h');
    // PRIORITY
    addUnitPriority('hour', 13);
    // PARSING
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken([
        'H',
        'HH'
    ], HOUR);
    addParseToken([
        'k',
        'kk'
    ], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken([
        'a',
        'A'
    ], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken([
        'h',
        'hh'
    ], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });
    // LOCALES
    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = makeGetSet('Hours', true);
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) return isLower ? 'pm' : 'PM';
        else return isLower ? 'am' : 'AM';
    }
    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
    };
    // internal storage for locale config files
    var locales = {
    }, localeFamilies = {
    }, globalLocale;
    function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for(i = 0; i < minl; i += 1){
            if (arr1[i] !== arr2[i]) return i;
        }
        return minl;
    }
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }
    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while(i < names.length){
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while(j > 0){
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) return locale;
                if (next && next.length >= j && commonPrefix(split, next) >= j - 1) break;
                j--;
            }
            i++;
        }
        return globalLocale;
    }
    function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (locales[name] === undefined && typeof module !== 'undefined' && module && module.exports) try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = undefined;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
        }
        return locales[name];
    }
    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) data = getLocale(key);
            else data = defineLocale(key, values);
            if (data) // moment.duration._locale = moment._locale = data;
            globalLocale = data;
            else if (typeof console !== 'undefined' && console.warn) //warn user if arguments are passed but the locale could not be set
            console.warn('Locale ' + key + ' not found. Did you forget to load it?');
        }
        return globalLocale._abbr;
    }
    function defineLocale(name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride', "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) parentConfig = locales[config.parentLocale]._config;
                else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) parentConfig = locale._config;
                    else {
                        if (!localeFamilies[config.parentLocale]) localeFamilies[config.parentLocale] = [];
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
            });
            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);
            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }
    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(mergeConfigs(locales[name]._config, config));
            else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) parentConfig = tmpLocale._config;
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }
            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) getSetGlobalLocale(name);
            } else if (locales[name] != null) delete locales[name];
        }
        return locales[name];
    }
    // returns locale data
    function getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) key = key._locale._abbr;
        if (!key) return globalLocale;
        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) return locale;
            key = [
                key
            ];
        }
        return chooseLocale(key);
    }
    function listLocales() {
        return keys(locales);
    }
    function checkOverflow(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) overflow = DATE;
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) overflow = WEEK;
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) overflow = WEEKDAY;
            getParsingFlags(m).overflow = overflow;
        }
        return m;
    }
    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
        [
            'YYYYYY-MM-DD',
            /[+-]\d{6}-\d\d-\d\d/
        ],
        [
            'YYYY-MM-DD',
            /\d{4}-\d\d-\d\d/
        ],
        [
            'GGGG-[W]WW-E',
            /\d{4}-W\d\d-\d/
        ],
        [
            'GGGG-[W]WW',
            /\d{4}-W\d\d/,
            false
        ],
        [
            'YYYY-DDD',
            /\d{4}-\d{3}/
        ],
        [
            'YYYY-MM',
            /\d{4}-\d\d/,
            false
        ],
        [
            'YYYYYYMMDD',
            /[+-]\d{10}/
        ],
        [
            'YYYYMMDD',
            /\d{8}/
        ],
        [
            'GGGG[W]WWE',
            /\d{4}W\d{3}/
        ],
        [
            'GGGG[W]WW',
            /\d{4}W\d{2}/,
            false
        ],
        [
            'YYYYDDD',
            /\d{7}/
        ],
        [
            'YYYYMM',
            /\d{6}/,
            false
        ],
        [
            'YYYY',
            /\d{4}/,
            false
        ], 
    ], // iso time formats and regexes
    isoTimes = [
        [
            'HH:mm:ss.SSSS',
            /\d\d:\d\d:\d\d\.\d+/
        ],
        [
            'HH:mm:ss,SSSS',
            /\d\d:\d\d:\d\d,\d+/
        ],
        [
            'HH:mm:ss',
            /\d\d:\d\d:\d\d/
        ],
        [
            'HH:mm',
            /\d\d:\d\d/
        ],
        [
            'HHmmss.SSSS',
            /\d\d\d\d\d\d\.\d+/
        ],
        [
            'HHmmss,SSSS',
            /\d\d\d\d\d\d,\d+/
        ],
        [
            'HHmmss',
            /\d\d\d\d\d\d/
        ],
        [
            'HHmm',
            /\d\d\d\d/
        ],
        [
            'HH',
            /\d\d/
        ], 
    ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    // date from iso format
    function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
        if (match) {
            getParsingFlags(config).iso = true;
            for(i = 0, l = isoDates.length; i < l; i++)if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for(i = 0, l = isoTimes.length; i < l; i++)if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) tzFormat = 'Z';
                else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else config._isValid = false;
    }
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10), 
        ];
        if (secondStr) result.push(parseInt(secondStr, 10));
        return result;
    }
    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) return 2000 + year;
        else if (year <= 999) return 1900 + year;
        return year;
    }
    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) return obsOffsets[obsOffset];
        else if (militaryOffset) // the only allowed military tz is Z
        return 0;
        else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }
    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) return;
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
        } else config._isValid = false;
    }
    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }
        configFromISO(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        configFromRFC2822(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        if (config._strict) config._isValid = false;
        else // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }
    hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    });
    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) return a;
        if (b != null) return b;
        return c;
    }
    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate(), 
        ];
        return [
            nowValue.getFullYear(),
            nowValue.getMonth(),
            nowValue.getDate()
        ];
    }
    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) return;
        currentDate = currentDateArray(config);
        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) dayOfYearFromWeekInfo(config);
        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) getParsingFlags(config)._overflowDayOfYear = true;
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for(i = 0; i < 3 && config._a[i] == null; ++i)config._a[i] = input[i] = currentDate[i];
        // Zero out whatever was not defaulted, including time
        for(; i < 7; i++)config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        if (config._nextDay) config._a[HOUR] = 24;
        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) getParsingFlags(config).weekdayMismatch = true;
    }
    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) weekdayOverflow = true;
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            // Default to current week.
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) weekdayOverflow = true;
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) weekdayOverflow = true;
            } else // default to beginning of week
            weekday = dow;
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) getParsingFlags(config)._overflowWeeks = true;
        else if (weekdayOverflow != null) getParsingFlags(config)._overflowWeekday = true;
        else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }
    // constant that refers to the ISO standard
    hooks.ISO_8601 = function() {
    };
    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function() {
    };
    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0, era;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for(i = 0; i < tokens.length; i++){
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) getParsingFlags(config).unusedInput.push(skipped);
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) getParsingFlags(config).empty = false;
                else getParsingFlags(config).unusedTokens.push(token);
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) getParsingFlags(config).unusedTokens.push(token);
        }
        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) getParsingFlags(config).unusedInput.push(string);
        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) getParsingFlags(config).bigHour = undefined;
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        configFromArray(config);
        checkOverflow(config);
    }
    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;
        if (meridiem == null) // nothing to do
        return hour;
        if (locale.meridiemHour != null) return locale.meridiemHour(hour, meridiem);
        else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) hour += 12;
            if (!isPm && hour === 12) hour = 0;
            return hour;
        } else // this is not supposed to happen
        return hour;
    }
    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false;
        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }
        for(i = 0; i < config._f.length; i++){
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({
            }, config);
            if (config._useUTC != null) tempConfig._useUTC = config._useUTC;
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) validFormatFound = true;
            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
                if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) bestFormatIsValid = true;
                }
            } else if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
        if (config._d) return;
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map([
            i.year,
            i.month,
            dayOrDate,
            i.hour,
            i.minute,
            i.second,
            i.millisecond
        ], function(obj) {
            return obj && parseInt(obj, 10);
        });
        configFromArray(config);
    }
    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }
        return res;
    }
    function prepareConfig(config) {
        var input = config._i, format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format === undefined && input === '') return createInvalid({
            nullInput: true
        });
        if (typeof input === 'string') config._i = input = config._locale.preparse(input);
        if (isMoment(input)) return new Moment(checkOverflow(input));
        else if (isDate(input)) config._d = input;
        else if (isArray(format)) configFromStringAndArray(config);
        else if (format) configFromStringAndFormat(config);
        else configFromInput(config);
        if (!isValid(config)) config._d = null;
        return config;
    }
    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) config._d = new Date(hooks.now());
        else if (isDate(input)) config._d = new Date(input.valueOf());
        else if (typeof input === 'string') configFromString(config);
        else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) configFromObject(config);
        else if (isNumber(input)) // from milliseconds
        config._d = new Date(input);
        else hooks.createFromInputFallback(config);
    }
    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {
        };
        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }
        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) input = undefined;
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
    }
    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }
    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other < this ? this : other;
        else return createInvalid();
    }), prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other > this ? this : other;
        else return createInvalid();
    });
    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) moments = moments[0];
        if (!moments.length) return createLocal();
        res = moments[0];
        for(i = 1; i < moments.length; ++i)if (!moments[i].isValid() || moments[i][fn](res)) res = moments[i];
        return res;
    }
    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
    }
    function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
    }
    var now1 = function() {
        return Date.now ? Date.now() : +new Date();
    };
    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond', 
    ];
    function isDurationValid(m) {
        var key, unitHasDecimal = false, i;
        for(key in m){
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) return false;
        }
        for(i = 0; i < ordering.length; ++i)if (m[ordering[i]]) {
            if (unitHasDecimal) return false; // only allow non-integers for smallest unit
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) unitHasDecimal = true;
        }
        return true;
    }
    function isValid$1() {
        return this._isValid;
    }
    function createInvalid$1() {
        return createDuration(NaN);
    }
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || normalizedInput.isoWeek || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds + seconds * 1000 + minutes * 60000 + hours * 3600000; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;
        this._data = {
        };
        this._locale = getLocale();
        this._bubble();
    }
    function isDuration(obj) {
        return obj instanceof Duration;
    }
    function absRound(number) {
        if (number < 0) return Math.round(-1 * number) * -1;
        else return Math.round(number);
    }
    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for(i = 0; i < len; i++)if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) diffs++;
        return diffs + lengthDiff;
    }
    // FORMATTING
    function offset1(token, separator) {
        addFormatToken(token, 0, 0, function() {
            var offset = this.utcOffset(), sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
    }
    offset1('Z', ':');
    offset1('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken([
        'Z',
        'ZZ'
    ], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher), chunk, parts, minutes;
        if (matches === null) return null;
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || [
            '-',
            0,
            0
        ];
        minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }
    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else return createLocal(input).local();
    }
    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }
    // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function() {
    };
    // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0, localAdjust;
        if (!this.isValid()) return input != null ? this : NaN;
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) return this;
            } else if (Math.abs(input) < 16 && !keepMinutes) input = input * 60;
            if (!this._isUTC && keepLocalTime) localAdjust = getDateOffset(this);
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) this.add(localAdjust, 'm');
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else return this._isUTC ? offset : getDateOffset(this);
    }
    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') input = -input;
            this.utcOffset(input, keepLocalTime);
            return this;
        } else return -this.utcOffset();
    }
    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) this.subtract(getDateOffset(this), 'm');
        }
        return this;
    }
    function setOffsetToParsedOffset() {
        if (this._tzm != null) this.utcOffset(this._tzm, false, true);
        else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) this.utcOffset(tZone);
            else this.utcOffset(0, true);
        }
        return this;
    }
    function hasAlignedHourOffset(input) {
        if (!this.isValid()) return false;
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) return this._isDSTShifted;
        var c = {
        }, other;
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else this._isDSTShifted = false;
        return this._isDSTShifted;
    }
    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
        var duration = input, // matching against regexp is expensive, do it on demand
        match = null, sign, ret, diffRes;
        if (isDuration(input)) duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
        };
        else if (isNumber(input) || !isNaN(+input)) {
            duration = {
            };
            if (key) duration[key] = +input;
            else duration.milliseconds = +input;
        } else if (match = aspNetRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign
            };
        } else if (match = isoRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        } else if (duration == null) // checks for null or undefined
        duration = {
        };
        else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {
            };
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, '_locale')) ret._locale = input._locale;
        if (isDuration(input) && hasOwnProp(input, '_isValid')) ret._isValid = input._isValid;
        return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }
    function positiveMomentsDifference(base, other) {
        var res = {
        };
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) --res.months;
        res.milliseconds = +other - +base.clone().add(res.months, 'M');
        return res;
    }
    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) return {
            milliseconds: 0,
            months: 0
        };
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) res = positiveMomentsDifference(base, other);
        else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }
    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function(val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val;
                val = period;
                period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds, days = absRound(duration._days), months = absRound(duration._months);
        if (!mom.isValid()) // No op
        return;
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months) setMonth(mom, get(mom, 'Month') + months * isAdding);
        if (days) set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        if (milliseconds) mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        if (updateOffset) hooks.updateOffset(mom, days || months);
    }
    var add = createAdder(1, 'add'), subtract = createAdder(-1, 'subtract');
    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }
    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
    }
    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            'years',
            'year',
            'y',
            'months',
            'month',
            'M',
            'days',
            'day',
            'd',
            'dates',
            'date',
            'D',
            'hours',
            'hour',
            'h',
            'minutes',
            'minute',
            'm',
            'seconds',
            'second',
            's',
            'milliseconds',
            'millisecond',
            'ms', 
        ], i, property;
        for(i = 0; i < properties.length; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) dataTypeTest = input.filter(function(item) {
            return !isNumber(item) && isString(input);
        }).length === 0;
        return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse', 
        ], i, property;
        for(i = 0; i < properties.length; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }
    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(), sod = cloneWithOffset(now, this).startOf('day'), format = hooks.calendarFormat(this, sod) || 'sameElse', output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }
    function clone() {
        return new Moment(this);
    }
    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() > localInput.valueOf();
        else return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() < localInput.valueOf();
        else return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from), localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) return false;
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() === localInput.valueOf();
        else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }
    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff1(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) return NaN;
        that = cloneWithOffset(input, this);
        if (!that.isValid()) return NaN;
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 60000;
        units = normalizeUnits(units);
        switch(units){
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1000;
                break; // 1000
            case 'minute':
                output = (this - that) / 60000;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 3600000;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 86400000;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 604800000;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }
        return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b) {
        if (a.date() < b.date()) // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'), anchor2, adjust;
        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }
        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }
    function toISOString(keepOffset) {
        if (!this.isValid()) return null;
        var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) return this.toDate().toISOString();
            else return new Date(this.valueOf() + this.utcOffset() * 60000).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */ function inspect() {
        if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
        var func = 'moment', zone = '', prefix, year, datetime, suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
    }
    function format1(inputString) {
        if (!inputString) inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }
    function from1(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            to: this,
            from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }
    function to1(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            from: this,
            to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }
    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale1(key) {
        var newLocaleData;
        if (key === undefined) return this._locale._abbr;
        else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) this._locale = newLocaleData;
            return this;
        }
    }
    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
        if (key === undefined) return this.localeData();
        else return this.locale(key);
    });
    function localeData() {
        return this._locale;
    }
    var MS_PER_SECOND = 1000, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = 3506328 * MS_PER_HOUR;
    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        else return new Date(y, m, d).valueOf();
    }
    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        else return Date.UTC(y, m, d);
    }
    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }
    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }
    function toDate() {
        return new Date(this.valueOf());
    }
    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(), 
        ];
    }
    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }
    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
        return isValid(this);
    }
    function parsingFlags() {
        return extend({
        }, getParsingFlags(this));
    }
    function invalidAt() {
        return getParsingFlags(this).overflow;
    }
    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');
    addFormatToken('y', [
        'y',
        1
    ], 'yo', 'eraYear');
    addFormatToken('y', [
        'yy',
        2
    ], 0, 'eraYear');
    addFormatToken('y', [
        'yyy',
        3
    ], 0, 'eraYear');
    addFormatToken('y', [
        'yyyy',
        4
    ], 0, 'eraYear');
    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);
    addParseToken([
        'N',
        'NN',
        'NNN',
        'NNNN',
        'NNNNN'
    ], function(input, array, config, token) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) getParsingFlags(config).era = era;
        else getParsingFlags(config).invalidEra = input;
    });
    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);
    addParseToken([
        'y',
        'yy',
        'yyy',
        'yyyy'
    ], YEAR);
    addParseToken([
        'yo'
    ], function(input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) match = input.match(config._locale._eraYearOrdinalRegex);
        if (config._locale.eraYearOrdinalParse) array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        else array[YEAR] = parseInt(input, 10);
    });
    function localeEras(m, format) {
        var i, l, date, eras = this._eras || getLocale('en')._eras;
        for(i = 0, l = eras.length; i < l; ++i){
            switch(typeof eras[i].since){
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }
            switch(typeof eras[i].until){
                case 'undefined':
                    eras[i].until = Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }
    function localeErasParse(eraName, format, strict) {
        var i, l, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for(i = 0, l = eras.length; i < l; ++i){
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) switch(format){
                case 'N':
                case 'NN':
                case 'NNN':
                    if (abbr === eraName) return eras[i];
                    break;
                case 'NNNN':
                    if (name === eraName) return eras[i];
                    break;
                case 'NNNNN':
                    if (narrow === eraName) return eras[i];
                    break;
            }
            else if ([
                name,
                abbr,
                narrow
            ].indexOf(eraName) >= 0) return eras[i];
        }
    }
    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? 1 : -1;
        if (year === undefined) return hooks(era.since).year();
        else return hooks(era.since).year() + (year - era.offset) * dir;
    }
    function getEraName() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].name;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].name;
        }
        return '';
    }
    function getEraNarrow() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].narrow;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].narrow;
        }
        return '';
    }
    function getEraAbbr() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].abbr;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].abbr;
        }
        return '';
    }
    function getEraYear() {
        var i, l, dir, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
        }
        return this.year();
    }
    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) computeErasParse.call(this);
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) computeErasParse.call(this);
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) computeErasParse.call(this);
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
        for(i = 0, l = eras.length; i < l; ++i){
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }
        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    addFormatToken(0, [
        'gg',
        2
    ], 0, function() {
        return this.weekYear() % 100;
    });
    addFormatToken(0, [
        'GG',
        2
    ], 0, function() {
        return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [
            token,
            token.length
        ], 0, getter);
    }
    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
    // ALIASES
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    // PRIORITY
    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);
    // PARSING
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken([
        'gggg',
        'ggggg',
        'GGGG',
        'GGGGG'
    ], function(input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken([
        'gg',
        'GG'
    ], function(input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });
    // MOMENTS
    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) return weekOfYear(this, dow, doy).year;
        else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) week = weeksTarget;
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }
    // FORMATTING
    addFormatToken('Q', 0, 'Qo', 'quarter');
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PRIORITY
    addUnitPriority('quarter', 7);
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });
    // MOMENTS
    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    // FORMATTING
    addFormatToken('D', [
        'DD',
        2
    ], 'Do', 'date');
    // ALIASES
    addUnitAlias('date', 'D');
    // PRIORITY
    addUnitPriority('date', 9);
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function(isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
    });
    addParseToken([
        'D',
        'DD'
    ], DATE);
    addParseToken('Do', function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });
    // MOMENTS
    var getSetDayOfMonth = makeGetSet('Date', true);
    // FORMATTING
    addFormatToken('DDD', [
        'DDDD',
        3
    ], 'DDDo', 'dayOfYear');
    // ALIASES
    addUnitAlias('dayOfYear', 'DDD');
    // PRIORITY
    addUnitPriority('dayOfYear', 4);
    // PARSING
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken([
        'DDD',
        'DDDD'
    ], function(input, array, config) {
        config._dayOfYear = toInt(input);
    });
    // HELPERS
    // MOMENTS
    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 86400000) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }
    // FORMATTING
    addFormatToken('m', [
        'mm',
        2
    ], 0, 'minute');
    // ALIASES
    addUnitAlias('minute', 'm');
    // PRIORITY
    addUnitPriority('minute', 14);
    // PARSING
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken([
        'm',
        'mm'
    ], MINUTE);
    // MOMENTS
    var getSetMinute = makeGetSet('Minutes', false);
    // FORMATTING
    addFormatToken('s', [
        'ss',
        2
    ], 0, 'second');
    // ALIASES
    addUnitAlias('second', 's');
    // PRIORITY
    addUnitPriority('second', 15);
    // PARSING
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken([
        's',
        'ss'
    ], SECOND);
    // MOMENTS
    var getSetSecond = makeGetSet('Seconds', false);
    // FORMATTING
    addFormatToken('S', 0, 0, function() {
        return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, [
        'SS',
        2
    ], 0, function() {
        return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, [
        'SSS',
        3
    ], 0, 'millisecond');
    addFormatToken(0, [
        'SSSS',
        4
    ], 0, function() {
        return this.millisecond() * 10;
    });
    addFormatToken(0, [
        'SSSSS',
        5
    ], 0, function() {
        return this.millisecond() * 100;
    });
    addFormatToken(0, [
        'SSSSSS',
        6
    ], 0, function() {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, [
        'SSSSSSS',
        7
    ], 0, function() {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, [
        'SSSSSSSS',
        8
    ], 0, function() {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, [
        'SSSSSSSSS',
        9
    ], 0, function() {
        return this.millisecond() * 1000000;
    });
    // ALIASES
    addUnitAlias('millisecond', 'ms');
    // PRIORITY
    addUnitPriority('millisecond', 16);
    // PARSING
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token1, getSetMillisecond;
    for(token1 = 'SSSS'; token1.length <= 9; token1 += 'S')addRegexToken(token1, matchUnsigned);
    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }
    for(token1 = 'S'; token1.length <= 9; token1 += 'S')addParseToken(token1, parseMs);
    getSetMillisecond = makeGetSet('Milliseconds', false);
    // FORMATTING
    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');
    // MOMENTS
    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }
    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff1;
    proto.endOf = endOf;
    proto.format = format1;
    proto.from = from1;
    proto.fromNow = fromNow;
    proto.to = to1;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale1;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) proto[Symbol.for('nodejs.util.inspect.custom')] = function() {
        return 'Moment<' + this.format() + '>';
    };
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
    function createUnix(input) {
        return createLocal(input * 1000);
    }
    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
        return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal1;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format, index, field, setter) {
        var locale = getLocale(), utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }
    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }
        format = format || '';
        if (index != null) return get$1(format, index, field, 'month');
        var i, out = [];
        for(i = 0; i < 12; i++)out[i] = get$1(format, i, field, 'month');
        return out;
    }
    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || '';
        }
        var locale = getLocale(), shift = localeSorted ? locale._week.dow : 0, i, out = [];
        if (index != null) return get$1(format, (index + shift) % 7, field, 'day');
        for(i = 0; i < 7; i++)out[i] = get$1(format, (i + shift) % 7, field, 'day');
        return out;
    }
    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }
    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }
    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }
    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }
    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }
    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD'
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC'
            }, 
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
        }
    });
    // Side effect imports
    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
    var mathAbs = Math.abs;
    function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
    }
    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
    }
    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }
    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
        if (number < 0) return Math.floor(number);
        else return Math.ceil(number);
    }
    function bubble() {
        var milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data, seconds, minutes, hours, years, monthsFromDays;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 86400000;
            days = 0;
            months = 0;
        }
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
    }
    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }
    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }
    function as(units) {
        if (!this.isValid()) return NaN;
        var days, months, milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 86400000;
            months = this._months + daysToMonths(days);
            switch(units){
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch(units){
                case 'week':
                    return days / 7 + milliseconds / 604800000;
                case 'day':
                    return days + milliseconds / 86400000;
                case 'hour':
                    return days * 24 + milliseconds / 3600000;
                case 'minute':
                    return days * 1440 + milliseconds / 60000;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 86400000) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }
    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) return NaN;
        return this._milliseconds + this._days * 86400000 + this._months % 12 * 2592000000 + toInt(this._months / 12) * 31536000000;
    }
    function makeAs(alias) {
        return function() {
            return this.as(alias);
        };
    }
    var asMilliseconds = makeAs('ms'), asSeconds = makeAs('s'), asMinutes = makeAs('m'), asHours = makeAs('h'), asDays = makeAs('d'), asWeeks = makeAs('w'), asMonths = makeAs('M'), asQuarters = makeAs('Q'), asYears = makeAs('y');
    function clone$1() {
        return createDuration(this);
    }
    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }
    function makeGetter(name) {
        return function() {
            return this.isValid() ? this._data[name] : NaN;
        };
    }
    var milliseconds1 = makeGetter('milliseconds'), seconds1 = makeGetter('seconds'), minutes1 = makeGetter('minutes'), hours1 = makeGetter('hours'), days1 = makeGetter('days'), months1 = makeGetter('months'), years1 = makeGetter('years');
    function weeks1() {
        return absFloor(this.days() / 7);
    }
    var round = Math.round, thresholds1 = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(), seconds = round(duration.as('s')), minutes = round(duration.as('m')), hours = round(duration.as('h')), days = round(duration.as('d')), months = round(duration.as('M')), weeks = round(duration.as('w')), years = round(duration.as('y')), a = seconds <= thresholds.ss && [
            's',
            seconds
        ] || seconds < thresholds.s && [
            'ss',
            seconds
        ] || minutes <= 1 && [
            'm'
        ] || minutes < thresholds.m && [
            'mm',
            minutes
        ] || hours <= 1 && [
            'h'
        ] || hours < thresholds.h && [
            'hh',
            hours
        ] || days <= 1 && [
            'd'
        ] || days < thresholds.d && [
            'dd',
            days
        ];
        if (thresholds.w != null) a = a || weeks <= 1 && [
            'w'
        ] || weeks < thresholds.w && [
            'ww',
            weeks
        ];
        a = a || months <= 1 && [
            'M'
        ] || months < thresholds.M && [
            'MM',
            months
        ] || years <= 1 && [
            'y'
        ] || [
            'yy',
            years
        ];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }
    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) return round;
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }
    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds1[threshold] === undefined) return false;
        if (limit === undefined) return thresholds1[threshold];
        thresholds1[threshold] = limit;
        if (threshold === 's') thresholds1.ss = limit - 1;
        return true;
    }
    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var withSuffix = false, th = thresholds1, locale, output;
        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') withSuffix = argWithSuffix;
        if (typeof argThresholds === 'object') {
            th = Object.assign({
            }, thresholds1, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) th.ss = argThresholds.s - 1;
        }
        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);
        if (withSuffix) output = locale.pastFuture(+this, output);
        return locale.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign1(x) {
        return (x > 0) - (x < 0) || +x;
    }
    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) return this.localeData().invalidDate();
        var seconds = abs$1(this._milliseconds) / 1000, days = abs$1(this._days), months = abs$1(this._months), minutes, hours, years, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        totalSign = total < 0 ? '-' : '';
        ymSign = sign1(this._months) !== sign1(total) ? '-' : '';
        daysSign = sign1(this._days) !== sign1(total) ? '-' : '';
        hmsSign = sign1(this._milliseconds) !== sign1(total) ? '-' : '';
        return totalSign + 'P' + (years ? ymSign + years + 'Y' : '') + (months ? ymSign + months + 'M' : '') + (days ? daysSign + days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hmsSign + hours + 'H' : '') + (minutes ? hmsSign + minutes + 'M' : '') + (seconds ? hmsSign + s + 'S' : '');
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds1;
    proto$2.seconds = seconds1;
    proto$2.minutes = minutes1;
    proto$2.hours = hours1;
    proto$2.days = days1;
    proto$2.weeks = weeks1;
    proto$2.months = months1;
    proto$2.years = years1;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale1;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;
    // FORMATTING
    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function(input, array, config) {
        config._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = '2.29.1';
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now1;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        DATE: 'YYYY-MM-DD',
        TIME: 'HH:mm',
        TIME_SECONDS: 'HH:mm:ss',
        TIME_MS: 'HH:mm:ss.SSS',
        WEEK: 'GGGG-[W]WW',
        MONTH: 'YYYY-MM'
    };
    return hooks;
});

},{}]},["bzi2g","lHGn6"], "lHGn6", "parcelRequire9981")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQztRQUMxQixLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHO1FBQ3ZDLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRztRQUN0QyxlQUFlLENBQUMsTUFBTSxFQUFFLE9BQU8sR0FBRyxJQUFJO0lBQzFDLENBQUM7SUFDRCxhQUFhLENBQUMsQ0FBTyxRQUFFLFFBQVEsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQ3BELEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3ZCLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDM0IsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSTtRQUN4QyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFDLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUN2QyxlQUFlLENBQUMsTUFBTSxFQUFFLE9BQU8sR0FBRyxJQUFJO0lBQzFDLENBQUM7SUFDRCxhQUFhLENBQUMsQ0FBSyxNQUFFLFFBQVEsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQ2xELEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUc7UUFDdkMsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHO0lBQzFDLENBQUM7SUFDRCxhQUFhLENBQUMsQ0FBTyxRQUFFLFFB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Y0FBYyxHQUFHLGlCQUFpQjtJQUN4QyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUs7SUFFdkIsRUFBMkQsQUFBM0QseURBQTJEO0lBQzNELEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQztRQUNmLGNBQWMsRUFBRSxDQUFrQjtRQUNsQyxzQkFBc0IsRUFBRSxDQUFxQjtRQUM3QyxpQkFBaUIsRUFBRSxDQUF5QjtRQUM1QyxJQUFJLEVBQUUsQ0FBWTtRQUNsQixJQUFJLEVBQUUsQ0FBTztRQUNiLFlBQVksRUFBRSxDQUFVO1FBQ3hCLE9BQU8sRUFBRSxDQUFjO1FBQ3ZCLElBQUksRUFBRSxDQUFZO1FBQ2xCLEtBQUssRUFBRSxDQUFTO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSztBQUVoQixDQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLWQ1ZTFmZDA5YjkyOTBjOWMuanMiLCJzcmMvYXNzZXRzL2pzL21vbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IG51bGw7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCJjYmQ3OThkODcyMDUyODYwXCI7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCJjOWEzMWMwYjU3NjIzZWQxXCI7XCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyogZ2xvYmFsIEhNUl9IT1NULCBITVJfUE9SVCwgSE1SX0VOVl9IQVNILCBITVJfU0VDVVJFICovXG5cbi8qOjpcbmltcG9ydCB0eXBlIHtcbiAgSE1SQXNzZXQsXG4gIEhNUk1lc3NhZ2UsXG59IGZyb20gJ0BwYXJjZWwvcmVwb3J0ZXItZGV2LXNlcnZlci9zcmMvSE1SU2VydmVyLmpzJztcbmludGVyZmFjZSBQYXJjZWxSZXF1aXJlIHtcbiAgKHN0cmluZyk6IG1peGVkO1xuICBjYWNoZToge3xbc3RyaW5nXTogUGFyY2VsTW9kdWxlfH07XG4gIGhvdERhdGE6IG1peGVkO1xuICBNb2R1bGU6IGFueTtcbiAgcGFyZW50OiA/UGFyY2VsUmVxdWlyZTtcbiAgaXNQYXJjZWxSZXF1aXJlOiB0cnVlO1xuICBtb2R1bGVzOiB7fFtzdHJpbmddOiBbRnVuY3Rpb24sIHt8W3N0cmluZ106IHN0cmluZ3x9XXx9O1xuICBITVJfQlVORExFX0lEOiBzdHJpbmc7XG4gIHJvb3Q6IFBhcmNlbFJlcXVpcmU7XG59XG5pbnRlcmZhY2UgUGFyY2VsTW9kdWxlIHtcbiAgaG90OiB7fFxuICAgIGRhdGE6IG1peGVkLFxuICAgIGFjY2VwdChjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICBkaXNwb3NlKGNiOiAobWl4ZWQpID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGFjY2VwdChkZXBzOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBkZWNsaW5lKCk6IHZvaWQsXG4gICAgX2FjY2VwdENhbGxiYWNrczogQXJyYXk8KEZ1bmN0aW9uKSA9PiB2b2lkPixcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogQXJyYXk8KG1peGVkKSA9PiB2b2lkPixcbiAgfH07XG59XG5kZWNsYXJlIHZhciBtb2R1bGU6IHtidW5kbGU6IFBhcmNlbFJlcXVpcmUsIC4uLn07XG5kZWNsYXJlIHZhciBITVJfSE9TVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1BPUlQ6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9FTlZfSEFTSDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1NFQ1VSRTogYm9vbGVhbjtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5cbmZ1bmN0aW9uIE1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIE9sZE1vZHVsZS5jYWxsKHRoaXMsIG1vZHVsZU5hbWUpO1xuICB0aGlzLmhvdCA9IHtcbiAgICBkYXRhOiBtb2R1bGUuYnVuZGxlLmhvdERhdGEsXG4gICAgX2FjY2VwdENhbGxiYWNrczogW10sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IFtdLFxuICAgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KGZuKSB7XG4gICAgICB0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaChmbiB8fCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiBkaXNwb3NlKGZuKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgfTtcbiAgbW9kdWxlLmJ1bmRsZS5ob3REYXRhID0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuYnVuZGxlLk1vZHVsZSA9IE1vZHVsZTtcbnZhciBjaGVja2VkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFjY2VwdGVkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFzc2V0c1RvQWNjZXB0XG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG47XG5cbmZ1bmN0aW9uIGdldEhvc3RuYW1lKCkge1xuICByZXR1cm4gSE1SX0hPU1QgfHwgKGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xufVxuXG5mdW5jdGlvbiBnZXRQb3J0KCkge1xuICByZXR1cm4gSE1SX1BPUlQgfHwgbG9jYXRpb24ucG9ydDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudDtcblxuaWYgKCghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICB2YXIgcG9ydCA9IGdldFBvcnQoKTtcbiAgdmFyIHByb3RvY29sID0gSE1SX1NFQ1VSRSB8fCBsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6JyAmJiAhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdChob3N0bmFtZSkgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciB3cyA9IG5ldyBXZWJTb2NrZXQocHJvdG9jb2wgKyAnOi8vJyArIGhvc3RuYW1lICsgKHBvcnQgPyAnOicgKyBwb3J0IDogJycpICsgJy8nKTsgLy8gJEZsb3dGaXhNZVxuXG4gIHdzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudFxuICAvKjoge2RhdGE6IHN0cmluZywgLi4ufSAqL1xuICApIHtcbiAgICBjaGVja2VkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFjY2VwdGVkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFzc2V0c1RvQWNjZXB0ID0gW107XG4gICAgdmFyIGRhdGFcbiAgICAvKjogSE1STWVzc2FnZSAqL1xuICAgID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXNzZXRzID0gZGF0YS5hc3NldHMuZmlsdGVyKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICByZXR1cm4gYXNzZXQuZW52SGFzaCA9PT0gSE1SX0VOVl9IQVNIO1xuICAgICAgfSk7IC8vIEhhbmRsZSBITVIgVXBkYXRlXG5cbiAgICAgIHZhciBoYW5kbGVkID0gYXNzZXRzLmV2ZXJ5KGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgICAgaG1yQXBwbHkobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzVG9BY2NlcHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaWQgPSBhc3NldHNUb0FjY2VwdFtpXVsxXTtcblxuICAgICAgICAgIGlmICghYWNjZXB0ZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgICBobXJBY2NlcHRSdW4oYXNzZXRzVG9BY2NlcHRbaV1bMF0sIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZGF0YS5kaWFnbm9zdGljcy5hbnNpKSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgYW5zaURpYWdub3N0aWMgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICB2YXIgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfwn5qoIFtwYXJjZWxdOiAnICsgYW5zaURpYWdub3N0aWMubWVzc2FnZSArICdcXG4nICsgc3RhY2sgKyAnXFxuXFxuJyArIGFuc2lEaWFnbm9zdGljLmhpbnRzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgfTtcblxuICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUud2FybignW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0Jyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcblxuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coJ1twYXJjZWxdIOKcqCBFcnJvciByZXNvbHZlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yT3ZlcmxheShkaWFnbm9zdGljcykge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcbiAgdmFyIGVycm9ySFRNTCA9ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogYmxhY2s7IG9wYWNpdHk6IDAuODU7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyBwb3NpdGlvbjogZml4ZWQ7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDMwcHg7IGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTsgei1pbmRleDogOTk5OTtcIj4nO1xuXG4gIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZGlhZ25vc3RpY3MpLFxuICAgICAgX3N0ZXAyO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBkaWFnbm9zdGljID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgdmFyIHN0YWNrID0gZGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBkaWFnbm9zdGljLmNvZGVmcmFtZSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgICBlcnJvckhUTUwgKz0gXCJcXG4gICAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXRvcDogMjBweDtcXFwiPlxcbiAgICAgICAgICBcXHVEODNEXFx1REVBOCBcIi5jb25jYXQoZGlhZ25vc3RpYy5tZXNzYWdlLCBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cHJlPlwiKS5jb25jYXQoc3RhY2ssIFwiPC9wcmU+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICBcIikuY29uY2F0KGRpYWdub3N0aWMuaGludHMubWFwKGZ1bmN0aW9uIChoaW50KSB7XG4gICAgICAgIHJldHVybiAnPGRpdj7wn5KhICcgKyBoaW50ICsgJzwvZGl2Pic7XG4gICAgICB9KS5qb2luKCcnKSwgXCJcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCIpLmNvbmNhdChkaWFnbm9zdGljLmRvY3VtZW50YXRpb24gPyBcIjxkaXY+XFx1RDgzRFxcdURDREQgPGEgc3R5bGU9XFxcImNvbG9yOiB2aW9sZXRcXFwiIGhyZWY9XFxcIlwiLmNvbmNhdChkaWFnbm9zdGljLmRvY3VtZW50YXRpb24sIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+TGVhcm4gbW9yZTwvYT48L2Rpdj5cIikgOiAnJywgXCJcXG4gICAgICA8L2Rpdj5cXG4gICAgXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yMi5mKCk7XG4gIH1cblxuICBlcnJvckhUTUwgKz0gJzwvZGl2Pic7XG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKVxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xue1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBrLCBkLCBkZXA7XG5cbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcblxuICAgICAgaWYgKGRlcCA9PT0gaWQgfHwgQXJyYXkuaXNBcnJheShkZXApICYmIGRlcFtkZXAubGVuZ3RoIC0gMV0gPT09IGlkKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChbYnVuZGxlLCBrXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICB2YXIgbmV3TGluayA9IGxpbmsuY2xvbmVOb2RlKCk7XG5cbiAgbmV3TGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcblxuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIC8vICRGbG93Rml4TWVcbiAgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7IC8vICRGbG93Rml4TWVcblxuICBsaW5rLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0xpbmssIGxpbmsubmV4dFNpYmxpbmcpO1xufVxuXG52YXIgY3NzVGltZW91dCA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjc3NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWZcbiAgICAgIC8qOiBzdHJpbmcgKi9cbiAgICAgID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLm9yaWdpbikgIT09IDAgJiYgIXNlcnZlZEZyb21ITVJTZXJ2ZXI7XG5cbiAgICAgIGlmICghYWJzb2x1dGUpIHtcbiAgICAgICAgdXBkYXRlTGluayhsaW5rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3NzVGltZW91dCA9IG51bGw7XG4gIH0sIDUwKTtcbn1cblxuZnVuY3Rpb24gaG1yQXBwbHkoYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBhc3NldFxuLyo6ICBITVJBc3NldCAqL1xuKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdjc3MnKSB7XG4gICAgcmVsb2FkQ1NTKCk7XG4gIH0gZWxzZSBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIHZhciBkZXBzID0gYXNzZXQuZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXTtcblxuICAgIGlmIChkZXBzKSB7XG4gICAgICB2YXIgZm4gPSBuZXcgRnVuY3Rpb24oJ3JlcXVpcmUnLCAnbW9kdWxlJywgJ2V4cG9ydHMnLCBhc3NldC5vdXRwdXQpO1xuICAgICAgbW9kdWxlc1thc3NldC5pZF0gPSBbZm4sIGRlcHNdO1xuICAgIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgICAgaG1yQXBwbHkoYnVuZGxlLnBhcmVudCwgYXNzZXQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayhidW5kbGUucGFyZW50LCBpZCwgZGVwc0J5QnVuZGxlKTtcbiAgfVxuXG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7IC8vIElmIG5vIHBhcmVudHMsIHRoZSBhc3NldCBpcyBuZXcuIFByZXZlbnQgcmVsb2FkaW5nIHRoZSBwYWdlLlxuXG4gIGlmICghcGFyZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRzLnNvbWUoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2sodlswXSwgdlsxXSwgbnVsbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRSdW4oYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuKSB7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUuaG90RGF0YSA9IHt9O1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCkge1xuICAgIGNhY2hlZC5ob3QuZGF0YSA9IGJ1bmRsZS5ob3REYXRhO1xuICB9XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZShpZCk7XG4gIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHZhciBhc3NldHNUb0Fsc29BY2NlcHQgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhc3NldHNUb0Fsc29BY2NlcHQgJiYgYXNzZXRzVG9BY2NlcHQubGVuZ3RoKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVbbWV0aG9kLXVuYmluZGluZ11cbiAgICAgICAgYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShhc3NldHNUb0FjY2VwdCwgYXNzZXRzVG9BbHNvQWNjZXB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjY2VwdGVkQXNzZXRzW2lkXSA9IHRydWU7XG59IiwiLy8hIG1vbWVudC5qc1xuLy8hIHZlcnNpb24gOiAyLjI5LjFcbi8vISBhdXRob3JzIDogVGltIFdvb2QsIElza3JlbiBDaGVybmV2LCBNb21lbnQuanMgY29udHJpYnV0b3JzXG4vLyEgbGljZW5zZSA6IE1JVFxuLy8hIG1vbWVudGpzLmNvbVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICBnbG9iYWwubW9tZW50ID0gZmFjdG9yeSgpXG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBob29rQ2FsbGJhY2s7XG5cbiAgICBmdW5jdGlvbiBob29rcygpIHtcbiAgICAgICAgcmV0dXJuIGhvb2tDYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgZG9uZSB0byByZWdpc3RlciB0aGUgbWV0aG9kIGNhbGxlZCB3aXRoIG1vbWVudCgpXG4gICAgLy8gd2l0aG91dCBjcmVhdGluZyBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG4gICAgZnVuY3Rpb24gc2V0SG9va0NhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgICAgIGhvb2tDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQXJyYXkoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGlucHV0IGluc3RhbmNlb2YgQXJyYXkgfHxcbiAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc09iamVjdChpbnB1dCkge1xuICAgICAgICAvLyBJRTggd2lsbCB0cmVhdCB1bmRlZmluZWQgYW5kIG51bGwgYXMgb2JqZWN0IGlmIGl0IHdhc24ndCBmb3JcbiAgICAgICAgLy8gaW5wdXQgIT0gbnVsbFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaW5wdXQgIT0gbnVsbCAmJlxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNPd25Qcm9wKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLCBiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc09iamVjdEVtcHR5KG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBrO1xuICAgICAgICAgICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKG9iaiwgaykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNVbmRlZmluZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09PSB2b2lkIDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNOdW1iZXIoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE51bWJlcl0nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEYXRlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpbnB1dCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IERhdGVdJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcChhcnIsIGZuKSB7XG4gICAgICAgIHZhciByZXMgPSBbXSxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGZuKGFycltpXSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0ZW5kKGEsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBiKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChiLCBpKSkge1xuICAgICAgICAgICAgICAgIGFbaV0gPSBiW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc093blByb3AoYiwgJ3RvU3RyaW5nJykpIHtcbiAgICAgICAgICAgIGEudG9TdHJpbmcgPSBiLnRvU3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc093blByb3AoYiwgJ3ZhbHVlT2YnKSkge1xuICAgICAgICAgICAgYS52YWx1ZU9mID0gYi52YWx1ZU9mO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCB0cnVlKS51dGMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0UGFyc2luZ0ZsYWdzKCkge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGRlZXAgY2xvbmUgdGhpcyBvYmplY3QuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbXB0eTogZmFsc2UsXG4gICAgICAgICAgICB1bnVzZWRUb2tlbnM6IFtdLFxuICAgICAgICAgICAgdW51c2VkSW5wdXQ6IFtdLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IC0yLFxuICAgICAgICAgICAgY2hhcnNMZWZ0T3ZlcjogMCxcbiAgICAgICAgICAgIG51bGxJbnB1dDogZmFsc2UsXG4gICAgICAgICAgICBpbnZhbGlkRXJhOiBudWxsLFxuICAgICAgICAgICAgaW52YWxpZE1vbnRoOiBudWxsLFxuICAgICAgICAgICAgaW52YWxpZEZvcm1hdDogZmFsc2UsXG4gICAgICAgICAgICB1c2VySW52YWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNvOiBmYWxzZSxcbiAgICAgICAgICAgIHBhcnNlZERhdGVQYXJ0czogW10sXG4gICAgICAgICAgICBlcmE6IG51bGwsXG4gICAgICAgICAgICBtZXJpZGllbTogbnVsbCxcbiAgICAgICAgICAgIHJmYzI4MjI6IGZhbHNlLFxuICAgICAgICAgICAgd2Vla2RheU1pc21hdGNoOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJzaW5nRmxhZ3MobSkge1xuICAgICAgICBpZiAobS5fcGYgPT0gbnVsbCkge1xuICAgICAgICAgICAgbS5fcGYgPSBkZWZhdWx0UGFyc2luZ0ZsYWdzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG0uX3BmO1xuICAgIH1cblxuICAgIHZhciBzb21lO1xuICAgIGlmIChBcnJheS5wcm90b3R5cGUuc29tZSkge1xuICAgICAgICBzb21lID0gQXJyYXkucHJvdG90eXBlLnNvbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc29tZSA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICAgICAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpLFxuICAgICAgICAgICAgICAgIGxlbiA9IHQubGVuZ3RoID4+PiAwLFxuICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpIGluIHQgJiYgZnVuLmNhbGwodGhpcywgdFtpXSwgaSwgdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNWYWxpZChtKSB7XG4gICAgICAgIGlmIChtLl9pc1ZhbGlkID09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBmbGFncyA9IGdldFBhcnNpbmdGbGFncyhtKSxcbiAgICAgICAgICAgICAgICBwYXJzZWRQYXJ0cyA9IHNvbWUuY2FsbChmbGFncy5wYXJzZWREYXRlUGFydHMsIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpICE9IG51bGw7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaXNOb3dWYWxpZCA9XG4gICAgICAgICAgICAgICAgICAgICFpc05hTihtLl9kLmdldFRpbWUoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3Mub3ZlcmZsb3cgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICFmbGFncy5lbXB0eSAmJlxuICAgICAgICAgICAgICAgICAgICAhZmxhZ3MuaW52YWxpZEVyYSAmJlxuICAgICAgICAgICAgICAgICAgICAhZmxhZ3MuaW52YWxpZE1vbnRoICYmXG4gICAgICAgICAgICAgICAgICAgICFmbGFncy5pbnZhbGlkV2Vla2RheSAmJlxuICAgICAgICAgICAgICAgICAgICAhZmxhZ3Mud2Vla2RheU1pc21hdGNoICYmXG4gICAgICAgICAgICAgICAgICAgICFmbGFncy5udWxsSW5wdXQgJiZcbiAgICAgICAgICAgICAgICAgICAgIWZsYWdzLmludmFsaWRGb3JtYXQgJiZcbiAgICAgICAgICAgICAgICAgICAgIWZsYWdzLnVzZXJJbnZhbGlkYXRlZCAmJlxuICAgICAgICAgICAgICAgICAgICAoIWZsYWdzLm1lcmlkaWVtIHx8IChmbGFncy5tZXJpZGllbSAmJiBwYXJzZWRQYXJ0cykpO1xuXG4gICAgICAgICAgICBpZiAobS5fc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgaXNOb3dWYWxpZCA9XG4gICAgICAgICAgICAgICAgICAgIGlzTm93VmFsaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuY2hhcnNMZWZ0T3ZlciA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBmbGFncy51bnVzZWRUb2tlbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmJpZ0hvdXIgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5pc0Zyb3plbiA9PSBudWxsIHx8ICFPYmplY3QuaXNGcm96ZW4obSkpIHtcbiAgICAgICAgICAgICAgICBtLl9pc1ZhbGlkID0gaXNOb3dWYWxpZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTm93VmFsaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG0uX2lzVmFsaWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW52YWxpZChmbGFncykge1xuICAgICAgICB2YXIgbSA9IGNyZWF0ZVVUQyhOYU4pO1xuICAgICAgICBpZiAoZmxhZ3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgZXh0ZW5kKGdldFBhcnNpbmdGbGFncyhtKSwgZmxhZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLnVzZXJJbnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG5cbiAgICAvLyBQbHVnaW5zIHRoYXQgYWRkIHByb3BlcnRpZXMgc2hvdWxkIGFsc28gYWRkIHRoZSBrZXkgaGVyZSAobnVsbCB2YWx1ZSksXG4gICAgLy8gc28gd2UgY2FuIHByb3Blcmx5IGNsb25lIG91cnNlbHZlcy5cbiAgICB2YXIgbW9tZW50UHJvcGVydGllcyA9IChob29rcy5tb21lbnRQcm9wZXJ0aWVzID0gW10pLFxuICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBjb3B5Q29uZmlnKHRvLCBmcm9tKSB7XG4gICAgICAgIHZhciBpLCBwcm9wLCB2YWw7XG5cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pc0FNb21lbnRPYmplY3QpKSB7XG4gICAgICAgICAgICB0by5faXNBTW9tZW50T2JqZWN0ID0gZnJvbS5faXNBTW9tZW50T2JqZWN0O1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faSkpIHtcbiAgICAgICAgICAgIHRvLl9pID0gZnJvbS5faTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2YpKSB7XG4gICAgICAgICAgICB0by5fZiA9IGZyb20uX2Y7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9sKSkge1xuICAgICAgICAgICAgdG8uX2wgPSBmcm9tLl9sO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fc3RyaWN0KSkge1xuICAgICAgICAgICAgdG8uX3N0cmljdCA9IGZyb20uX3N0cmljdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3R6bSkpIHtcbiAgICAgICAgICAgIHRvLl90em0gPSBmcm9tLl90em07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pc1VUQykpIHtcbiAgICAgICAgICAgIHRvLl9pc1VUQyA9IGZyb20uX2lzVVRDO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fb2Zmc2V0KSkge1xuICAgICAgICAgICAgdG8uX29mZnNldCA9IGZyb20uX29mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3BmKSkge1xuICAgICAgICAgICAgdG8uX3BmID0gZ2V0UGFyc2luZ0ZsYWdzKGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbG9jYWxlKSkge1xuICAgICAgICAgICAgdG8uX2xvY2FsZSA9IGZyb20uX2xvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb21lbnRQcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtb21lbnRQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJvcCA9IG1vbWVudFByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICAgICAgdmFsID0gZnJvbVtwcm9wXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bcHJvcF0gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvO1xuICAgIH1cblxuICAgIC8vIE1vbWVudCBwcm90b3R5cGUgb2JqZWN0XG4gICAgZnVuY3Rpb24gTW9tZW50KGNvbmZpZykge1xuICAgICAgICBjb3B5Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShjb25maWcuX2QgIT0gbnVsbCA/IGNvbmZpZy5fZC5nZXRUaW1lKCkgOiBOYU4pO1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICB0aGlzLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmV2ZW50IGluZmluaXRlIGxvb3AgaW4gY2FzZSB1cGRhdGVPZmZzZXQgY3JlYXRlcyBuZXcgbW9tZW50XG4gICAgICAgIC8vIG9iamVjdHMuXG4gICAgICAgIGlmICh1cGRhdGVJblByb2dyZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc01vbWVudChvYmopIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG9iaiBpbnN0YW5jZW9mIE1vbWVudCB8fCAob2JqICE9IG51bGwgJiYgb2JqLl9pc0FNb21lbnRPYmplY3QgIT0gbnVsbClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXJuKG1zZykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBob29rcy5zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZ3MgPT09IGZhbHNlICYmXG4gICAgICAgICAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIGNvbnNvbGUud2FyblxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRGVwcmVjYXRpb24gd2FybmluZzogJyArIG1zZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXByZWNhdGUobXNnLCBmbikge1xuICAgICAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gZXh0ZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihudWxsLCBtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0VGltZSkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGFyZyxcbiAgICAgICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICAgICAga2V5O1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnICs9ICdcXG5bJyArIGkgKyAnXSAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gYXJndW1lbnRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc093blByb3AoYXJndW1lbnRzWzBdLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZyArPSBrZXkgKyAnOiAnICsgYXJndW1lbnRzWzBdW2tleV0gKyAnLCAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZSgwLCAtMik7IC8vIFJlbW92ZSB0cmFpbGluZyBjb21tYSBhbmQgc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goYXJnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2FybihcbiAgICAgICAgICAgICAgICAgICAgbXNnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXG5Bcmd1bWVudHM6ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykuam9pbignJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKCkuc3RhY2tcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIGZuKTtcbiAgICB9XG5cbiAgICB2YXIgZGVwcmVjYXRpb25zID0ge307XG5cbiAgICBmdW5jdGlvbiBkZXByZWNhdGVTaW1wbGUobmFtZSwgbXNnKSB7XG4gICAgICAgIGlmIChob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG5hbWUsIG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZXByZWNhdGlvbnNbbmFtZV0pIHtcbiAgICAgICAgICAgIHdhcm4obXNnKTtcbiAgICAgICAgICAgIGRlcHJlY2F0aW9uc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBob29rcy5zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZ3MgPSBmYWxzZTtcbiAgICBob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHR5cGVvZiBGdW5jdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgaW5wdXQgaW5zdGFuY2VvZiBGdW5jdGlvbikgfHxcbiAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXQoY29uZmlnKSB7XG4gICAgICAgIHZhciBwcm9wLCBpO1xuICAgICAgICBmb3IgKGkgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChjb25maWcsIGkpKSB7XG4gICAgICAgICAgICAgICAgcHJvcCA9IGNvbmZpZ1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gcHJvcDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzWydfJyArIGldID0gcHJvcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICAvLyBMZW5pZW50IG9yZGluYWwgcGFyc2luZyBhY2NlcHRzIGp1c3QgYSBudW1iZXIgaW4gYWRkaXRpb24gdG9cbiAgICAgICAgLy8gbnVtYmVyICsgKHBvc3NpYmx5KSBzdHVmZiBjb21pbmcgZnJvbSBfZGF5T2ZNb250aE9yZGluYWxQYXJzZS5cbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIFwib3JkaW5hbFBhcnNlXCIgZmFsbGJhY2sgaW4gbmV4dCBtYWpvciByZWxlYXNlLlxuICAgICAgICB0aGlzLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlTGVuaWVudCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAodGhpcy5fZGF5T2ZNb250aE9yZGluYWxQYXJzZS5zb3VyY2UgfHwgdGhpcy5fb3JkaW5hbFBhcnNlLnNvdXJjZSkgK1xuICAgICAgICAgICAgICAgICd8JyArXG4gICAgICAgICAgICAgICAgL1xcZHsxLDJ9Ly5zb3VyY2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjaGlsZENvbmZpZykge1xuICAgICAgICB2YXIgcmVzID0gZXh0ZW5kKHt9LCBwYXJlbnRDb25maWcpLFxuICAgICAgICAgICAgcHJvcDtcbiAgICAgICAgZm9yIChwcm9wIGluIGNoaWxkQ29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChjaGlsZENvbmZpZywgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmplY3QocGFyZW50Q29uZmlnW3Byb3BdKSAmJiBpc09iamVjdChjaGlsZENvbmZpZ1twcm9wXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzW3Byb3BdID0ge307XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZChyZXNbcHJvcF0sIHBhcmVudENvbmZpZ1twcm9wXSk7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZChyZXNbcHJvcF0sIGNoaWxkQ29uZmlnW3Byb3BdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZmlnW3Byb3BdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzW3Byb3BdID0gY2hpbGRDb25maWdbcHJvcF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc1twcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChwcm9wIGluIHBhcmVudENvbmZpZykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGhhc093blByb3AocGFyZW50Q29uZmlnLCBwcm9wKSAmJlxuICAgICAgICAgICAgICAgICFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSAmJlxuICAgICAgICAgICAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twcm9wXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBjaGFuZ2VzIHRvIHByb3BlcnRpZXMgZG9uJ3QgbW9kaWZ5IHBhcmVudCBjb25maWdcbiAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSBleHRlbmQoe30sIHJlc1twcm9wXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBMb2NhbGUoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKSB7XG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cztcbiAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgICAgcmVzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3Aob2JqLCBpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0Q2FsZW5kYXIgPSB7XG4gICAgICAgIHNhbWVEYXk6ICdbVG9kYXkgYXRdIExUJyxcbiAgICAgICAgbmV4dERheTogJ1tUb21vcnJvdyBhdF0gTFQnLFxuICAgICAgICBuZXh0V2VlazogJ2RkZGQgW2F0XSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXG4gICAgICAgIGxhc3RXZWVrOiAnW0xhc3RdIGRkZGQgW2F0XSBMVCcsXG4gICAgICAgIHNhbWVFbHNlOiAnTCcsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNhbGVuZGFyKGtleSwgbW9tLCBub3cpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuX2NhbGVuZGFyW2tleV0gfHwgdGhpcy5fY2FsZW5kYXJbJ3NhbWVFbHNlJ107XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG91dHB1dCkgPyBvdXRwdXQuY2FsbChtb20sIG5vdykgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gemVyb0ZpbGwobnVtYmVyLCB0YXJnZXRMZW5ndGgsIGZvcmNlU2lnbikge1xuICAgICAgICB2YXIgYWJzTnVtYmVyID0gJycgKyBNYXRoLmFicyhudW1iZXIpLFxuICAgICAgICAgICAgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoLFxuICAgICAgICAgICAgc2lnbiA9IG51bWJlciA+PSAwO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nKSArXG4gICAgICAgICAgICBNYXRoLnBvdygxMCwgTWF0aC5tYXgoMCwgemVyb3NUb0ZpbGwpKS50b1N0cmluZygpLnN1YnN0cigxKSArXG4gICAgICAgICAgICBhYnNOdW1iZXJcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhbSGhdbW0oc3MpP3xNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRbz98TnsxLDV9fFlZWVlZWXxZWVlZWXxZWVlZfFlZfHl7Miw0fXx5bz98Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98a2s/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2csXG4gICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhMVFN8TFR8TEw/TD9MP3xsezEsNH0pL2csXG4gICAgICAgIGZvcm1hdEZ1bmN0aW9ucyA9IHt9LFxuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9ucyA9IHt9O1xuXG4gICAgLy8gdG9rZW46ICAgICdNJ1xuICAgIC8vIHBhZGRlZDogICBbJ01NJywgMl1cbiAgICAvLyBvcmRpbmFsOiAgJ01vJ1xuICAgIC8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxuICAgIGZ1bmN0aW9uIGFkZEZvcm1hdFRva2VuKHRva2VuLCBwYWRkZWQsIG9yZGluYWwsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBmdW5jID0gY2FsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBmdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2NhbGxiYWNrXSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGZ1bmM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhZGRlZCkge1xuICAgICAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gemVyb0ZpbGwoZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBwYWRkZWRbMV0sIHBhZGRlZFsyXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcmRpbmFsKSB7XG4gICAgICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChcbiAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICAgICAgICAgICAgICB0b2tlblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhpbnB1dCkge1xuICAgICAgICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgICAgIHZhciBhcnJheSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBsZW5ndGg7XG5cbiAgICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV0pIHtcbiAgICAgICAgICAgICAgICBhcnJheVtpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobW9tKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gJycsXG4gICAgICAgICAgICAgICAgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSBpc0Z1bmN0aW9uKGFycmF5W2ldKVxuICAgICAgICAgICAgICAgICAgICA/IGFycmF5W2ldLmNhbGwobW9tLCBmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIDogYXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGZvcm1hdCBkYXRlIHVzaW5nIG5hdGl2ZSBkYXRlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGZvcm1hdE1vbWVudChtLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFtLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG0ubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXQgPSBleHBhbmRGb3JtYXQoZm9ybWF0LCBtLmxvY2FsZURhdGEoKSk7XG4gICAgICAgIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdID1cbiAgICAgICAgICAgIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xuXG4gICAgICAgIHJldHVybiBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XShtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHBhbmRGb3JtYXQoZm9ybWF0LCBsb2NhbGUpIHtcbiAgICAgICAgdmFyIGkgPSA1O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2VucyhpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS5sb25nRGF0ZUZvcm1hdChpbnB1dCkgfHwgaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShcbiAgICAgICAgICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMsXG4gICAgICAgICAgICAgICAgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICBpIC09IDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQgPSB7XG4gICAgICAgIExUUzogJ2g6bW06c3MgQScsXG4gICAgICAgIExUOiAnaDptbSBBJyxcbiAgICAgICAgTDogJ01NL0REL1lZWVknLFxuICAgICAgICBMTDogJ01NTU0gRCwgWVlZWScsXG4gICAgICAgIExMTDogJ01NTU0gRCwgWVlZWSBoOm1tIEEnLFxuICAgICAgICBMTExMOiAnZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQScsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxvbmdEYXRlRm9ybWF0KGtleSkge1xuICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSxcbiAgICAgICAgICAgIGZvcm1hdFVwcGVyID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5LnRvVXBwZXJDYXNlKCldO1xuXG4gICAgICAgIGlmIChmb3JtYXQgfHwgIWZvcm1hdFVwcGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSA9IGZvcm1hdFVwcGVyXG4gICAgICAgICAgICAubWF0Y2goZm9ybWF0dGluZ1Rva2VucylcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHRvaykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdG9rID09PSAnTU1NTScgfHxcbiAgICAgICAgICAgICAgICAgICAgdG9rID09PSAnTU0nIHx8XG4gICAgICAgICAgICAgICAgICAgIHRvayA9PT0gJ0REJyB8fFxuICAgICAgICAgICAgICAgICAgICB0b2sgPT09ICdkZGRkJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9rLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdEludmFsaWREYXRlID0gJ0ludmFsaWQgZGF0ZSc7XG5cbiAgICBmdW5jdGlvbiBpbnZhbGlkRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludmFsaWREYXRlO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0T3JkaW5hbCA9ICclZCcsXG4gICAgICAgIGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlID0gL1xcZHsxLDJ9LztcblxuICAgIGZ1bmN0aW9uIG9yZGluYWwobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcmRpbmFsLnJlcGxhY2UoJyVkJywgbnVtYmVyKTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdFJlbGF0aXZlVGltZSA9IHtcbiAgICAgICAgZnV0dXJlOiAnaW4gJXMnLFxuICAgICAgICBwYXN0OiAnJXMgYWdvJyxcbiAgICAgICAgczogJ2EgZmV3IHNlY29uZHMnLFxuICAgICAgICBzczogJyVkIHNlY29uZHMnLFxuICAgICAgICBtOiAnYSBtaW51dGUnLFxuICAgICAgICBtbTogJyVkIG1pbnV0ZXMnLFxuICAgICAgICBoOiAnYW4gaG91cicsXG4gICAgICAgIGhoOiAnJWQgaG91cnMnLFxuICAgICAgICBkOiAnYSBkYXknLFxuICAgICAgICBkZDogJyVkIGRheXMnLFxuICAgICAgICB3OiAnYSB3ZWVrJyxcbiAgICAgICAgd3c6ICclZCB3ZWVrcycsXG4gICAgICAgIE06ICdhIG1vbnRoJyxcbiAgICAgICAgTU06ICclZCBtb250aHMnLFxuICAgICAgICB5OiAnYSB5ZWFyJyxcbiAgICAgICAgeXk6ICclZCB5ZWFycycsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbGF0aXZlVGltZShudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuX3JlbGF0aXZlVGltZVtzdHJpbmddO1xuICAgICAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpXG4gICAgICAgICAgICA/IG91dHB1dChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpXG4gICAgICAgICAgICA6IG91dHB1dC5yZXBsYWNlKC8lZC9pLCBudW1iZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhc3RGdXR1cmUoZGlmZiwgb3V0cHV0KSB7XG4gICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbZGlmZiA+IDAgPyAnZnV0dXJlJyA6ICdwYXN0J107XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKGZvcm1hdCkgPyBmb3JtYXQob3V0cHV0KSA6IGZvcm1hdC5yZXBsYWNlKC8lcy9pLCBvdXRwdXQpO1xuICAgIH1cblxuICAgIHZhciBhbGlhc2VzID0ge307XG5cbiAgICBmdW5jdGlvbiBhZGRVbml0QWxpYXModW5pdCwgc2hvcnRoYW5kKSB7XG4gICAgICAgIHZhciBsb3dlckNhc2UgPSB1bml0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGFsaWFzZXNbbG93ZXJDYXNlXSA9IGFsaWFzZXNbbG93ZXJDYXNlICsgJ3MnXSA9IGFsaWFzZXNbc2hvcnRoYW5kXSA9IHVuaXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplVW5pdHModW5pdHMpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB1bml0cyA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gYWxpYXNlc1t1bml0c10gfHwgYWxpYXNlc1t1bml0cy50b0xvd2VyQ2FzZSgpXVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXRPYmplY3QpIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJbnB1dCA9IHt9LFxuICAgICAgICAgICAgbm9ybWFsaXplZFByb3AsXG4gICAgICAgICAgICBwcm9wO1xuXG4gICAgICAgIGZvciAocHJvcCBpbiBpbnB1dE9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZFByb3AgPSBub3JtYWxpemVVbml0cyhwcm9wKTtcbiAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplZFByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZElucHV0W25vcm1hbGl6ZWRQcm9wXSA9IGlucHV0T2JqZWN0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3JtYWxpemVkSW5wdXQ7XG4gICAgfVxuXG4gICAgdmFyIHByaW9yaXRpZXMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGFkZFVuaXRQcmlvcml0eSh1bml0LCBwcmlvcml0eSkge1xuICAgICAgICBwcmlvcml0aWVzW3VuaXRdID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0c09iaikge1xuICAgICAgICB2YXIgdW5pdHMgPSBbXSxcbiAgICAgICAgICAgIHU7XG4gICAgICAgIGZvciAodSBpbiB1bml0c09iaikge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AodW5pdHNPYmosIHUpKSB7XG4gICAgICAgICAgICAgICAgdW5pdHMucHVzaCh7IHVuaXQ6IHUsIHByaW9yaXR5OiBwcmlvcml0aWVzW3VdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVuaXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1bml0cztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0xlYXBZZWFyKHllYXIpIHtcbiAgICAgICAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFic0Zsb29yKG51bWJlcikge1xuICAgICAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAgICAgLy8gLTAgLT4gMFxuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW1iZXIpIHx8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9JbnQoYXJndW1lbnRGb3JDb2VyY2lvbikge1xuICAgICAgICB2YXIgY29lcmNlZE51bWJlciA9ICthcmd1bWVudEZvckNvZXJjaW9uLFxuICAgICAgICAgICAgdmFsdWUgPSAwO1xuXG4gICAgICAgIGlmIChjb2VyY2VkTnVtYmVyICE9PSAwICYmIGlzRmluaXRlKGNvZXJjZWROdW1iZXIpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGFic0Zsb29yKGNvZXJjZWROdW1iZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VHZXRTZXQodW5pdCwga2VlcFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzZXQkMSh0aGlzLCB1bml0LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIGtlZXBUaW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldCh0aGlzLCB1bml0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXQobW9tLCB1bml0KSB7XG4gICAgICAgIHJldHVybiBtb20uaXNWYWxpZCgpXG4gICAgICAgICAgICA/IG1vbS5fZFsnZ2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSgpXG4gICAgICAgICAgICA6IE5hTjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXQkMShtb20sIHVuaXQsIHZhbHVlKSB7XG4gICAgICAgIGlmIChtb20uaXNWYWxpZCgpICYmICFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB1bml0ID09PSAnRnVsbFllYXInICYmXG4gICAgICAgICAgICAgICAgaXNMZWFwWWVhcihtb20ueWVhcigpKSAmJlxuICAgICAgICAgICAgICAgIG1vbS5tb250aCgpID09PSAxICYmXG4gICAgICAgICAgICAgICAgbW9tLmRhdGUoKSA9PT0gMjlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdG9JbnQodmFsdWUpO1xuICAgICAgICAgICAgICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XShcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1vbS5tb250aCgpLFxuICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCh2YWx1ZSwgbW9tLm1vbnRoKCkpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9tLl9kWydzZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArIHVuaXRdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIHN0cmluZ0dldCh1bml0cykge1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpc1t1bml0c10pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bml0c10oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdHJpbmdTZXQodW5pdHMsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdW5pdHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKHVuaXRzKTtcbiAgICAgICAgICAgIHZhciBwcmlvcml0aXplZCA9IGdldFByaW9yaXRpemVkVW5pdHModW5pdHMpLFxuICAgICAgICAgICAgICAgIGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJpb3JpdGl6ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzW3ByaW9yaXRpemVkW2ldLnVuaXRdKHVuaXRzW3ByaW9yaXRpemVkW2ldLnVuaXRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpc1t1bml0c10pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2gxID0gL1xcZC8sIC8vICAgICAgIDAgLSA5XG4gICAgICAgIG1hdGNoMiA9IC9cXGRcXGQvLCAvLyAgICAgIDAwIC0gOTlcbiAgICAgICAgbWF0Y2gzID0gL1xcZHszfS8sIC8vICAgICAwMDAgLSA5OTlcbiAgICAgICAgbWF0Y2g0ID0gL1xcZHs0fS8sIC8vICAgIDAwMDAgLSA5OTk5XG4gICAgICAgIG1hdGNoNiA9IC9bKy1dP1xcZHs2fS8sIC8vIC05OTk5OTkgLSA5OTk5OTlcbiAgICAgICAgbWF0Y2gxdG8yID0gL1xcZFxcZD8vLCAvLyAgICAgICAwIC0gOTlcbiAgICAgICAgbWF0Y2gzdG80ID0gL1xcZFxcZFxcZFxcZD8vLCAvLyAgICAgOTk5IC0gOTk5OVxuICAgICAgICBtYXRjaDV0bzYgPSAvXFxkXFxkXFxkXFxkXFxkXFxkPy8sIC8vICAgOTk5OTkgLSA5OTk5OTlcbiAgICAgICAgbWF0Y2gxdG8zID0gL1xcZHsxLDN9LywgLy8gICAgICAgMCAtIDk5OVxuICAgICAgICBtYXRjaDF0bzQgPSAvXFxkezEsNH0vLCAvLyAgICAgICAwIC0gOTk5OVxuICAgICAgICBtYXRjaDF0bzYgPSAvWystXT9cXGR7MSw2fS8sIC8vIC05OTk5OTkgLSA5OTk5OTlcbiAgICAgICAgbWF0Y2hVbnNpZ25lZCA9IC9cXGQrLywgLy8gICAgICAgMCAtIGluZlxuICAgICAgICBtYXRjaFNpZ25lZCA9IC9bKy1dP1xcZCsvLCAvLyAgICAtaW5mIC0gaW5mXG4gICAgICAgIG1hdGNoT2Zmc2V0ID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpLCAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbiAgICAgICAgbWF0Y2hTaG9ydE9mZnNldCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/L2dpLCAvLyArMDAgLTAwICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuICAgICAgICBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy8sIC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXG4gICAgICAgIC8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuICAgICAgICAvLyBpbmNsdWRlcyBzY290dGlzaCBnYWVsaWMgdHdvIHdvcmQgYW5kIGh5cGhlbmF0ZWQgbW9udGhzXG4gICAgICAgIG1hdGNoV29yZCA9IC9bMC05XXswLDI1Nn1bJ2EtelxcdTAwQTAtXFx1MDVGRlxcdTA3MDAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkYwN1xcdUZGMTAtXFx1RkZFRl17MSwyNTZ9fFtcXHUwNjAwLVxcdTA2RkZcXC9dezEsMjU2fShcXHMqP1tcXHUwNjAwLVxcdTA2RkZdezEsMjU2fSl7MSwyfS9pLFxuICAgICAgICByZWdleGVzO1xuXG4gICAgcmVnZXhlcyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gYWRkUmVnZXhUb2tlbih0b2tlbiwgcmVnZXgsIHN0cmljdFJlZ2V4KSB7XG4gICAgICAgIHJlZ2V4ZXNbdG9rZW5dID0gaXNGdW5jdGlvbihyZWdleClcbiAgICAgICAgICAgID8gcmVnZXhcbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaXNTdHJpY3QgJiYgc3RyaWN0UmVnZXggPyBzdHJpY3RSZWdleCA6IHJlZ2V4O1xuICAgICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcChyZWdleGVzLCB0b2tlbikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVuZXNjYXBlRm9ybWF0KHRva2VuKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVnZXhlc1t0b2tlbl0oY29uZmlnLl9zdHJpY3QsIGNvbmZpZy5fbG9jYWxlKTtcbiAgICB9XG5cbiAgICAvLyBDb2RlIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTYxNDkzL2lzLXRoZXJlLWEtcmVnZXhwLWVzY2FwZS1mdW5jdGlvbi1pbi1qYXZhc2NyaXB0XG4gICAgZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQocykge1xuICAgICAgICByZXR1cm4gcmVnZXhFc2NhcGUoXG4gICAgICAgICAgICBzXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ1xcXFwnLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChcXFspfFxcXFwoXFxdKXxcXFsoW15cXF1cXFtdKilcXF18XFxcXCguKS9nLCBmdW5jdGlvbiAoXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWQsXG4gICAgICAgICAgICAgICAgICAgIHAxLFxuICAgICAgICAgICAgICAgICAgICBwMixcbiAgICAgICAgICAgICAgICAgICAgcDMsXG4gICAgICAgICAgICAgICAgICAgIHA0XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwMSB8fCBwMiB8fCBwMyB8fCBwNDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHMpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG4gICAgfVxuXG4gICAgdmFyIHRva2VucyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gYWRkUGFyc2VUb2tlbih0b2tlbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBmdW5jID0gY2FsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0b2tlbiA9IFt0b2tlbl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTnVtYmVyKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICBhcnJheVtjYWxsYmFja10gPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG9rZW5zW3Rva2VuW2ldXSA9IGZ1bmM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRXZWVrUGFyc2VUb2tlbih0b2tlbiwgY2FsbGJhY2spIHtcbiAgICAgICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgICAgICAgICAgY29uZmlnLl93ID0gY29uZmlnLl93IHx8IHt9O1xuICAgICAgICAgICAgY2FsbGJhY2soaW5wdXQsIGNvbmZpZy5fdywgY29uZmlnLCB0b2tlbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBpbnB1dCwgY29uZmlnKSB7XG4gICAgICAgIGlmIChpbnB1dCAhPSBudWxsICYmIGhhc093blByb3AodG9rZW5zLCB0b2tlbikpIHtcbiAgICAgICAgICAgIHRva2Vuc1t0b2tlbl0oaW5wdXQsIGNvbmZpZy5fYSwgY29uZmlnLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgWUVBUiA9IDAsXG4gICAgICAgIE1PTlRIID0gMSxcbiAgICAgICAgREFURSA9IDIsXG4gICAgICAgIEhPVVIgPSAzLFxuICAgICAgICBNSU5VVEUgPSA0LFxuICAgICAgICBTRUNPTkQgPSA1LFxuICAgICAgICBNSUxMSVNFQ09ORCA9IDYsXG4gICAgICAgIFdFRUsgPSA3LFxuICAgICAgICBXRUVLREFZID0gODtcblxuICAgIGZ1bmN0aW9uIG1vZChuLCB4KSB7XG4gICAgICAgIHJldHVybiAoKG4gJSB4KSArIHgpICUgeDtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXhPZjtcblxuICAgIGlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgICAgICBpbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXhPZiA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAvLyBJIGtub3dcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1tpXSA9PT0gbykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGF5c0luTW9udGgoeWVhciwgbW9udGgpIHtcbiAgICAgICAgaWYgKGlzTmFOKHllYXIpIHx8IGlzTmFOKG1vbnRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW9kTW9udGggPSBtb2QobW9udGgsIDEyKTtcbiAgICAgICAgeWVhciArPSAobW9udGggLSBtb2RNb250aCkgLyAxMjtcbiAgICAgICAgcmV0dXJuIG1vZE1vbnRoID09PSAxXG4gICAgICAgICAgICA/IGlzTGVhcFllYXIoeWVhcilcbiAgICAgICAgICAgICAgICA/IDI5XG4gICAgICAgICAgICAgICAgOiAyOFxuICAgICAgICAgICAgOiAzMSAtICgobW9kTW9udGggJSA3KSAlIDIpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdNJywgWydNTScsIDJdLCAnTW8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRoKCkgKyAxO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ01NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRoc1Nob3J0KHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignTU1NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRocyh0aGlzLCBmb3JtYXQpO1xuICAgIH0pO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdtb250aCcsICdNJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdtb250aCcsIDgpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignTScsIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignTU0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignTU1NJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbiAgICB9KTtcbiAgICBhZGRSZWdleFRva2VuKCdNTU1NJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5tb250aHNSZWdleChpc1N0cmljdCk7XG4gICAgfSk7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnTScsICdNTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W01PTlRIXSA9IHRvSW50KGlucHV0KSAtIDE7XG4gICAgfSk7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnTU1NJywgJ01NTU0nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB2YXIgbW9udGggPSBjb25maWcuX2xvY2FsZS5tb250aHNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAgICAgLy8gaWYgd2UgZGlkbid0IGZpbmQgYSBtb250aCBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWQuXG4gICAgICAgIGlmIChtb250aCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhcnJheVtNT05USF0gPSBtb250aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRNb250aCA9IGlucHV0O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBMT0NBTEVTXG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZU1vbnRocyA9ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQgPSAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NPy8sXG4gICAgICAgIGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkLFxuICAgICAgICBkZWZhdWx0TW9udGhzUmVnZXggPSBtYXRjaFdvcmQ7XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVNb250aHMobSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzKVxuICAgICAgICAgICAgICAgID8gdGhpcy5fbW9udGhzXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9tb250aHNbJ3N0YW5kYWxvbmUnXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpXG4gICAgICAgICAgICA/IHRoaXMuX21vbnRoc1ttLm1vbnRoKCldXG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1tcbiAgICAgICAgICAgICAgICAgICh0aGlzLl9tb250aHMuaXNGb3JtYXQgfHwgTU9OVEhTX0lOX0ZPUk1BVCkudGVzdChmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgICAgPyAnZm9ybWF0J1xuICAgICAgICAgICAgICAgICAgICAgIDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgICAgIF1bbS5tb250aCgpXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVNb250aHNTaG9ydChtLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHNTaG9ydClcbiAgICAgICAgICAgICAgICA/IHRoaXMuX21vbnRoc1Nob3J0XG4gICAgICAgICAgICAgICAgOiB0aGlzLl9tb250aHNTaG9ydFsnc3RhbmRhbG9uZSddO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRoc1Nob3J0KVxuICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFttLm1vbnRoKCldXG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0W1xuICAgICAgICAgICAgICAgICAgTU9OVEhTX0lOX0ZPUk1BVC50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgICAgICBdW20ubW9udGgoKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RyaWN0UGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGlpLFxuICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IHVzZWRcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzU2hvcnQoXG4gICAgICAgICAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICApLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlTW9udGhzUGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgICAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVN0cmljdFBhcnNlLmNhbGwodGhpcywgbW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBhZGQgc29ydGluZ1xuICAgICAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyXG4gICAgICAgIC8vIHNlZSBzb3J0aW5nIGluIGNvbXB1dGVNb250aHNQYXJzZVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsXG4gICAgICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJyxcbiAgICAgICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICF0aGlzLl9tb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykgKyAnfF4nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICAgICAgZm9ybWF0ID09PSAnTU1NTScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICAgICAgZm9ybWF0ID09PSAnTU1NJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIHNldE1vbnRoKG1vbSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGRheU9mTW9udGg7XG5cbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAvLyBObyBvcFxuICAgICAgICAgICAgcmV0dXJuIG1vbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtb20ubG9jYWxlRGF0YSgpLm1vbnRoc1BhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBbm90aGVyIHNpbGVudCBmYWlsdXJlP1xuICAgICAgICAgICAgICAgIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF5T2ZNb250aCA9IE1hdGgubWluKG1vbS5kYXRlKCksIGRheXNJbk1vbnRoKG1vbS55ZWFyKCksIHZhbHVlKSk7XG4gICAgICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyAnTW9udGgnXSh2YWx1ZSwgZGF5T2ZNb250aCk7XG4gICAgICAgIHJldHVybiBtb207XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0TW9udGgodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHNldE1vbnRoKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdldCh0aGlzLCAnTW9udGgnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERheXNJbk1vbnRoKCkge1xuICAgICAgICByZXR1cm4gZGF5c0luTW9udGgodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9udGhzU2hvcnRSZWdleChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcbiAgICAgICAgICAgICAgICA/IHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXhcbiAgICAgICAgICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb250aHNSZWdleChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBkZWZhdWx0TW9udGhzUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcbiAgICAgICAgICAgICAgICA/IHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4XG4gICAgICAgICAgICAgICAgOiB0aGlzLl9tb250aHNSZWdleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVNb250aHNQYXJzZSgpIHtcbiAgICAgICAgZnVuY3Rpb24gY21wTGVuUmV2KGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNob3J0UGllY2VzID0gW10sXG4gICAgICAgICAgICBsb25nUGllY2VzID0gW10sXG4gICAgICAgICAgICBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIG1vbTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICBzaG9ydFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykpO1xuICAgICAgICAgICAgbG9uZ1BpZWNlcy5wdXNoKHRoaXMubW9udGhzKG1vbSwgJycpKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHMobW9tLCAnJykpO1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICAgICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgICAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XG4gICAgICAgICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSB0aGlzLl9tb250aHNSZWdleDtcbiAgICAgICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgJ14oJyArIGxvbmdQaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAgICAgJ2knXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgJ14oJyArIHNob3J0UGllY2VzLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgICAgICdpJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdZJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeSA9IHRoaXMueWVhcigpO1xuICAgICAgICByZXR1cm4geSA8PSA5OTk5ID8gemVyb0ZpbGwoeSwgNCkgOiAnKycgKyB5O1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydZWScsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnllYXIoKSAlIDEwMDtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWScsIDRdLCAwLCAneWVhcicpO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVknLCA1XSwgMCwgJ3llYXInKTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVlZWScsIDYsIHRydWVdLCAwLCAneWVhcicpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCd5ZWFyJywgJ3knKTtcblxuICAgIC8vIFBSSU9SSVRJRVNcblxuICAgIGFkZFVuaXRQcmlvcml0eSgneWVhcicsIDEpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignWScsIG1hdGNoU2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCdZWScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdZWVlZJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1lZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1lZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydZWVlZWScsICdZWVlZWVknXSwgWUVBUik7XG4gICAgYWRkUGFyc2VUb2tlbignWVlZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbWUVBUl0gPVxuICAgICAgICAgICAgaW5wdXQubGVuZ3RoID09PSAyID8gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpIDogdG9JbnQoaW5wdXQpO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ1lZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICBhcnJheVtZRUFSXSA9IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICBhcnJheVtZRUFSXSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG4gICAgfSk7XG5cbiAgICAvLyBIRUxQRVJTXG5cbiAgICBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgICAgICAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG4gICAgfVxuXG4gICAgLy8gSE9PS1NcblxuICAgIGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0b0ludChpbnB1dCkgKyAodG9JbnQoaW5wdXQpID4gNjggPyAxOTAwIDogMjAwMCk7XG4gICAgfTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIHZhciBnZXRTZXRZZWFyID0gbWFrZUdldFNldCgnRnVsbFllYXInLCB0cnVlKTtcblxuICAgIGZ1bmN0aW9uIGdldElzTGVhcFllYXIoKSB7XG4gICAgICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcigpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKSB7XG4gICAgICAgIC8vIGNhbid0IGp1c3QgYXBwbHkoKSB0byBjcmVhdGUgYSBkYXRlOlxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMTgxMzQ4XG4gICAgICAgIHZhciBkYXRlO1xuICAgICAgICAvLyB0aGUgZGF0ZSBjb25zdHJ1Y3RvciByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHkgKyA0MDAsIG0sIGQsIGgsIE0sIHMsIG1zKTtcbiAgICAgICAgICAgIGlmIChpc0Zpbml0ZShkYXRlLmdldEZ1bGxZZWFyKCkpKSB7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5LCBtLCBkLCBoLCBNLCBzLCBtcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVVVENEYXRlKHkpIHtcbiAgICAgICAgdmFyIGRhdGUsIGFyZ3M7XG4gICAgICAgIC8vIHRoZSBEYXRlLlVUQyBmdW5jdGlvbiByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgICAgICBhcmdzWzBdID0geSArIDQwMDtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmdzKSk7XG4gICAgICAgICAgICBpZiAoaXNGaW5pdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpKSkge1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICAvLyBzdGFydC1vZi1maXJzdC13ZWVrIC0gc3RhcnQtb2YteWVhclxuICAgIGZ1bmN0aW9uIGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSkge1xuICAgICAgICB2YXIgLy8gZmlyc3Qtd2VlayBkYXkgLS0gd2hpY2ggamFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgKDQgZm9yIGlzbywgMSBmb3Igb3RoZXIpXG4gICAgICAgICAgICBmd2QgPSA3ICsgZG93IC0gZG95LFxuICAgICAgICAgICAgLy8gZmlyc3Qtd2VlayBkYXkgbG9jYWwgd2Vla2RheSAtLSB3aGljaCBsb2NhbCB3ZWVrZGF5IGlzIGZ3ZFxuICAgICAgICAgICAgZndkbHcgPSAoNyArIGNyZWF0ZVVUQ0RhdGUoeWVhciwgMCwgZndkKS5nZXRVVENEYXkoKSAtIGRvdykgJSA3O1xuXG4gICAgICAgIHJldHVybiAtZndkbHcgKyBmd2QgLSAxO1xuICAgIH1cblxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUjQ2FsY3VsYXRpbmdfYV9kYXRlX2dpdmVuX3RoZV95ZWFyLjJDX3dlZWtfbnVtYmVyX2FuZF93ZWVrZGF5XG4gICAgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKHllYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgICAgIHZhciBsb2NhbFdlZWtkYXkgPSAoNyArIHdlZWtkYXkgLSBkb3cpICUgNyxcbiAgICAgICAgICAgIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpLFxuICAgICAgICAgICAgZGF5T2ZZZWFyID0gMSArIDcgKiAod2VlayAtIDEpICsgbG9jYWxXZWVrZGF5ICsgd2Vla09mZnNldCxcbiAgICAgICAgICAgIHJlc1llYXIsXG4gICAgICAgICAgICByZXNEYXlPZlllYXI7XG5cbiAgICAgICAgaWYgKGRheU9mWWVhciA8PSAwKSB7XG4gICAgICAgICAgICByZXNZZWFyID0geWVhciAtIDE7XG4gICAgICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlzSW5ZZWFyKHJlc1llYXIpICsgZGF5T2ZZZWFyO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mWWVhciA+IGRheXNJblllYXIoeWVhcikpIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSB5ZWFyICsgMTtcbiAgICAgICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhciAtIGRheXNJblllYXIoeWVhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNZZWFyID0geWVhcjtcbiAgICAgICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB5ZWFyOiByZXNZZWFyLFxuICAgICAgICAgICAgZGF5T2ZZZWFyOiByZXNEYXlPZlllYXIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Vla09mWWVhcihtb20sIGRvdywgZG95KSB7XG4gICAgICAgIHZhciB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KG1vbS55ZWFyKCksIGRvdywgZG95KSxcbiAgICAgICAgICAgIHdlZWsgPSBNYXRoLmZsb29yKChtb20uZGF5T2ZZZWFyKCkgLSB3ZWVrT2Zmc2V0IC0gMSkgLyA3KSArIDEsXG4gICAgICAgICAgICByZXNXZWVrLFxuICAgICAgICAgICAgcmVzWWVhcjtcblxuICAgICAgICBpZiAod2VlayA8IDEpIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpIC0gMTtcbiAgICAgICAgICAgIHJlc1dlZWsgPSB3ZWVrICsgd2Vla3NJblllYXIocmVzWWVhciwgZG93LCBkb3kpO1xuICAgICAgICB9IGVsc2UgaWYgKHdlZWsgPiB3ZWVrc0luWWVhcihtb20ueWVhcigpLCBkb3csIGRveSkpIHtcbiAgICAgICAgICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpO1xuICAgICAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCkgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCk7XG4gICAgICAgICAgICByZXNXZWVrID0gd2VlaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3ZWVrOiByZXNXZWVrLFxuICAgICAgICAgICAgeWVhcjogcmVzWWVhcixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3ZWVrc0luWWVhcih5ZWFyLCBkb3csIGRveSkge1xuICAgICAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgICAgICB3ZWVrT2Zmc2V0TmV4dCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyICsgMSwgZG93LCBkb3kpO1xuICAgICAgICByZXR1cm4gKGRheXNJblllYXIoeWVhcikgLSB3ZWVrT2Zmc2V0ICsgd2Vla09mZnNldE5leHQpIC8gNztcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbigndycsIFsnd3cnLCAyXSwgJ3dvJywgJ3dlZWsnKTtcbiAgICBhZGRGb3JtYXRUb2tlbignVycsIFsnV1cnLCAyXSwgJ1dvJywgJ2lzb1dlZWsnKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnd2VlaycsICd3Jyk7XG4gICAgYWRkVW5pdEFsaWFzKCdpc29XZWVrJywgJ1cnKTtcblxuICAgIC8vIFBSSU9SSVRJRVNcblxuICAgIGFkZFVuaXRQcmlvcml0eSgnd2VlaycsIDUpO1xuICAgIGFkZFVuaXRQcmlvcml0eSgnaXNvV2VlaycsIDUpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbigndycsIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignd3cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignVycsIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignV1cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbiAgICBhZGRXZWVrUGFyc2VUb2tlbihbJ3cnLCAnd3cnLCAnVycsICdXVyddLCBmdW5jdGlvbiAoXG4gICAgICAgIGlucHV0LFxuICAgICAgICB3ZWVrLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHRva2VuXG4gICAgKSB7XG4gICAgICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDEpXSA9IHRvSW50KGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIC8vIExPQ0FMRVNcblxuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWsobW9tKSB7XG4gICAgICAgIHJldHVybiB3ZWVrT2ZZZWFyKG1vbSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95KS53ZWVrO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlV2VlayA9IHtcbiAgICAgICAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95OiA2LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA2dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZXZWVrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3c7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlRmlyc3REYXlPZlllYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcbiAgICB9XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRTZXRXZWVrKGlucHV0KSB7XG4gICAgICAgIHZhciB3ZWVrID0gdGhpcy5sb2NhbGVEYXRhKCkud2Vlayh0aGlzKTtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldElTT1dlZWsoaW5wdXQpIHtcbiAgICAgICAgdmFyIHdlZWsgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLndlZWs7XG4gICAgICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignZCcsIDAsICdkbycsICdkYXknKTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzTWluKHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignZGRkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNTaG9ydCh0aGlzLCBmb3JtYXQpO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2RkZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5cyh0aGlzLCBmb3JtYXQpO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2UnLCAwLCAwLCAnd2Vla2RheScpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdFJywgMCwgMCwgJ2lzb1dlZWtkYXknKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnZGF5JywgJ2QnKTtcbiAgICBhZGRVbml0QWxpYXMoJ3dlZWtkYXknLCAnZScpO1xuICAgIGFkZFVuaXRBbGlhcygnaXNvV2Vla2RheScsICdFJyk7XG5cbiAgICAvLyBQUklPUklUWVxuICAgIGFkZFVuaXRQcmlvcml0eSgnZGF5JywgMTEpO1xuICAgIGFkZFVuaXRQcmlvcml0eSgnd2Vla2RheScsIDExKTtcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtkYXknLCAxMSk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdkJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdlJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdFJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdkZCcsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNNaW5SZWdleChpc1N0cmljdCk7XG4gICAgfSk7XG4gICAgYWRkUmVnZXhUb2tlbignZGRkJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xuICAgIH0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2RkZGQnLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUmVnZXgoaXNTdHJpY3QpO1xuICAgIH0pO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oWydkZCcsICdkZGQnLCAnZGRkZCddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgdmFyIHdlZWtkYXkgPSBjb25maWcuX2xvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgICAgICAvLyBpZiB3ZSBkaWRuJ3QgZ2V0IGEgd2Vla2RheSBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWRcbiAgICAgICAgaWYgKHdlZWtkYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgd2Vlay5kID0gd2Vla2RheTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRXZWVrZGF5ID0gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGFkZFdlZWtQYXJzZVRva2VuKFsnZCcsICdlJywgJ0UnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHdlZWtbdG9rZW5dID0gdG9JbnQoaW5wdXQpO1xuICAgIH0pO1xuXG4gICAgLy8gSEVMUEVSU1xuXG4gICAgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGlucHV0LCBsb2NhbGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0ID0gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpO1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VJc29XZWVrZGF5KGlucHV0LCBsb2NhbGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCkgJSA3IHx8IDc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzTmFOKGlucHV0KSA/IG51bGwgOiBpbnB1dDtcbiAgICB9XG5cbiAgICAvLyBMT0NBTEVTXG4gICAgZnVuY3Rpb24gc2hpZnRXZWVrZGF5cyh3cywgbikge1xuICAgICAgICByZXR1cm4gd3Muc2xpY2UobiwgNykuY29uY2F0KHdzLnNsaWNlKDAsIG4pKTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzID0gJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCA9ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXG4gICAgICAgIGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbiA9ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICAgICAgZGVmYXVsdFdlZWtkYXlzUmVnZXggPSBtYXRjaFdvcmQsXG4gICAgICAgIGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXggPSBtYXRjaFdvcmQsXG4gICAgICAgIGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4ID0gbWF0Y2hXb3JkO1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXMobSwgZm9ybWF0KSB7XG4gICAgICAgIHZhciB3ZWVrZGF5cyA9IGlzQXJyYXkodGhpcy5fd2Vla2RheXMpXG4gICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzXG4gICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzW1xuICAgICAgICAgICAgICAgICAgbSAmJiBtICE9PSB0cnVlICYmIHRoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2Zvcm1hdCdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgICAgICBdO1xuICAgICAgICByZXR1cm4gbSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBzaGlmdFdlZWtkYXlzKHdlZWtkYXlzLCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgICAgIDogbVxuICAgICAgICAgICAgPyB3ZWVrZGF5c1ttLmRheSgpXVxuICAgICAgICAgICAgOiB3ZWVrZGF5cztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1Nob3J0KG0pIHtcbiAgICAgICAgcmV0dXJuIG0gPT09IHRydWVcbiAgICAgICAgICAgID8gc2hpZnRXZWVrZGF5cyh0aGlzLl93ZWVrZGF5c1Nob3J0LCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgICAgIDogbVxuICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1Nob3J0W20uZGF5KCldXG4gICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzU2hvcnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNNaW4obSkge1xuICAgICAgICByZXR1cm4gbSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBzaGlmdFdlZWtkYXlzKHRoaXMuX3dlZWtkYXlzTWluLCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgICAgIDogbVxuICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c01pblttLmRheSgpXVxuICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c01pbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdHJpY3RQYXJzZSQxKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGlpLFxuICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgbGxjID0gd2Vla2RheU5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7ICsraSkge1xuICAgICAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c01pbihcbiAgICAgICAgICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzU2hvcnQoXG4gICAgICAgICAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICApLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzUGFyc2Uod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgICAgIHZhciBpLCBtb20sIHJlZ2V4O1xuXG4gICAgICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZSQxLmNhbGwodGhpcywgd2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG5cbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgICAgICAgICAnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAgICAgJ14nICsgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJykucmVwbGFjZSgnLicsICdcXFxcLj8nKSArICckJyxcbiAgICAgICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgJ14nICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5cyhtb20sICcnKSArXG4gICAgICAgICAgICAgICAgICAgICd8XicgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykgK1xuICAgICAgICAgICAgICAgICAgICAnfF4nICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5c01pbihtb20sICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzdHJpY3QgJiZcbiAgICAgICAgICAgICAgICBmb3JtYXQgPT09ICdkZGRkJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICAgICAgZm9ybWF0ID09PSAnZGRkJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgICAgIGZvcm1hdCA9PT0gJ2RkJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldERheU9mV2VlayhpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRheSA9IHRoaXMuX2lzVVRDID8gdGhpcy5fZC5nZXRVVENEYXkoKSA6IHRoaXMuX2QuZ2V0RGF5KCk7XG4gICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgdGhpcy5sb2NhbGVEYXRhKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGlucHV0IC0gZGF5LCAnZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRheTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldExvY2FsZURheU9mV2VlayhpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdlZWtkYXkgPSAodGhpcy5kYXkoKSArIDcgLSB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3cpICUgNztcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrZGF5IDogdGhpcy5hZGQoaW5wdXQgLSB3ZWVrZGF5LCAnZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldElTT0RheU9mV2VlayhpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiZWhhdmVzIHRoZSBzYW1lIGFzIG1vbWVudCNkYXkgZXhjZXB0XG4gICAgICAgIC8vIGFzIGEgZ2V0dGVyLCByZXR1cm5zIDcgaW5zdGVhZCBvZiAwICgxLTcgcmFuZ2UgaW5zdGVhZCBvZiAwLTYpXG4gICAgICAgIC8vIGFzIGEgc2V0dGVyLCBzdW5kYXkgc2hvdWxkIGJlbG9uZyB0byB0aGUgcHJldmlvdXMgd2Vlay5cblxuICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHdlZWtkYXkgPSBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIHRoaXMubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRheSh0aGlzLmRheSgpICUgNyA/IHdlZWtkYXkgOiB3ZWVrZGF5IC0gNyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXkoKSB8fCA3O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Vla2RheXNSZWdleChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1JlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcbiAgICAgICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXhcbiAgICAgICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1Nob3J0UmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXhcbiAgICAgICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzTWluUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSBkZWZhdWx0V2Vla2RheXNNaW5SZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4XG4gICAgICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZVdlZWtkYXlzUGFyc2UoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtaW5QaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIHNob3J0UGllY2VzID0gW10sXG4gICAgICAgICAgICBsb25nUGllY2VzID0gW10sXG4gICAgICAgICAgICBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgIG1pbnAsXG4gICAgICAgICAgICBzaG9ydHAsXG4gICAgICAgICAgICBsb25ncDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgICAgICBtaW5wID0gcmVnZXhFc2NhcGUodGhpcy53ZWVrZGF5c01pbihtb20sICcnKSk7XG4gICAgICAgICAgICBzaG9ydHAgPSByZWdleEVzY2FwZSh0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykpO1xuICAgICAgICAgICAgbG9uZ3AgPSByZWdleEVzY2FwZSh0aGlzLndlZWtkYXlzKG1vbSwgJycpKTtcbiAgICAgICAgICAgIG1pblBpZWNlcy5wdXNoKG1pbnApO1xuICAgICAgICAgICAgc2hvcnRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgICAgICAgbG9uZ1BpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIHdlZWtkYXkgKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcbiAgICAgICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgICAgICBtaW5QaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgICAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgICAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG5cbiAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG5cbiAgICAgICAgdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICAgICAnaSdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICAgICAnaSdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAnXignICsgbWluUGllY2VzLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgICAgICdpJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGZ1bmN0aW9uIGhGb3JtYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvdXJzKCkgJSAxMiB8fCAxMjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrRm9ybWF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3VycygpIHx8IDI0O1xuICAgIH1cblxuICAgIGFkZEZvcm1hdFRva2VuKCdIJywgWydISCcsIDJdLCAwLCAnaG91cicpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdoJywgWydoaCcsIDJdLCAwLCBoRm9ybWF0KTtcbiAgICBhZGRGb3JtYXRUb2tlbignaycsIFsna2snLCAyXSwgMCwga0Zvcm1hdCk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignaG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJycgKyBoRm9ybWF0LmFwcGx5KHRoaXMpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2htbXNzJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgJycgK1xuICAgICAgICAgICAgaEZvcm1hdC5hcHBseSh0aGlzKSArXG4gICAgICAgICAgICB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMikgK1xuICAgICAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpXG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignSG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJycgKyB0aGlzLmhvdXJzKCkgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignSG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAnJyArXG4gICAgICAgICAgICB0aGlzLmhvdXJzKCkgK1xuICAgICAgICAgICAgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcbiAgICAgICAgICAgIHplcm9GaWxsKHRoaXMuc2Vjb25kcygpLCAyKVxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbWVyaWRpZW0odG9rZW4sIGxvd2VyY2FzZSkge1xuICAgICAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1lcmlkaWVtKFxuICAgICAgICAgICAgICAgIHRoaXMuaG91cnMoKSxcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnV0ZXMoKSxcbiAgICAgICAgICAgICAgICBsb3dlcmNhc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1lcmlkaWVtKCdhJywgdHJ1ZSk7XG4gICAgbWVyaWRpZW0oJ0EnLCBmYWxzZSk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ2hvdXInLCAnaCcpO1xuXG4gICAgLy8gUFJJT1JJVFlcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2hvdXInLCAxMyk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBmdW5jdGlvbiBtYXRjaE1lcmlkaWVtKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5fbWVyaWRpZW1QYXJzZTtcbiAgICB9XG5cbiAgICBhZGRSZWdleFRva2VuKCdhJywgbWF0Y2hNZXJpZGllbSk7XG4gICAgYWRkUmVnZXhUb2tlbignQScsIG1hdGNoTWVyaWRpZW0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0gnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2gnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2snLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0hIJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2hoJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2trJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG4gICAgYWRkUmVnZXhUb2tlbignaG1tJywgbWF0Y2gzdG80KTtcbiAgICBhZGRSZWdleFRva2VuKCdobW1zcycsIG1hdGNoNXRvNik7XG4gICAgYWRkUmVnZXhUb2tlbignSG1tJywgbWF0Y2gzdG80KTtcbiAgICBhZGRSZWdleFRva2VuKCdIbW1zcycsIG1hdGNoNXRvNik7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnSCcsICdISCddLCBIT1VSKTtcbiAgICBhZGRQYXJzZVRva2VuKFsnaycsICdrayddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIGtJbnB1dCA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgYXJyYXlbSE9VUl0gPSBrSW5wdXQgPT09IDI0ID8gMCA6IGtJbnB1dDtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKFsnYScsICdBJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2lzUG0gPSBjb25maWcuX2xvY2FsZS5pc1BNKGlucHV0KTtcbiAgICAgICAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oWydoJywgJ2hoJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbignaG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIHZhciBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgICAgICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbignaG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIHBvczEgPSBpbnB1dC5sZW5ndGggLSA0LFxuICAgICAgICAgICAgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICAgICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgICAgIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdIbW0nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgICAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ0htbXNzJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIHZhciBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNCxcbiAgICAgICAgICAgIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICAgICAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbiAgICB9KTtcblxuICAgIC8vIExPQ0FMRVNcblxuICAgIGZ1bmN0aW9uIGxvY2FsZUlzUE0oaW5wdXQpIHtcbiAgICAgICAgLy8gSUU4IFF1aXJrcyBNb2RlICYgSUU3IFN0YW5kYXJkcyBNb2RlIGRvIG5vdCBhbGxvdyBhY2Nlc3Npbmcgc3RyaW5ncyBsaWtlIGFycmF5c1xuICAgICAgICAvLyBVc2luZyBjaGFyQXQgc2hvdWxkIGJlIG1vcmUgY29tcGF0aWJsZS5cbiAgICAgICAgcmV0dXJuIChpbnB1dCArICcnKS50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3AnO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZSA9IC9bYXBdXFwuP20/XFwuPy9pLFxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBob3VyIHNob3VsZCBrZWVwIHRoZSB0aW1lLCBiZWNhdXNlIHRoZSB1c2VyIGV4cGxpY2l0bHlcbiAgICAgICAgLy8gc3BlY2lmaWVkIHdoaWNoIGhvdXIgdGhleSB3YW50LiBTbyB0cnlpbmcgdG8gbWFpbnRhaW4gdGhlIHNhbWUgaG91ciAoaW5cbiAgICAgICAgLy8gYSBuZXcgdGltZXpvbmUpIG1ha2VzIHNlbnNlLiBBZGRpbmcvc3VidHJhY3RpbmcgaG91cnMgZG9lcyBub3QgZm9sbG93XG4gICAgICAgIC8vIHRoaXMgcnVsZS5cbiAgICAgICAgZ2V0U2V0SG91ciA9IG1ha2VHZXRTZXQoJ0hvdXJzJywgdHJ1ZSk7XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVNZXJpZGllbShob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91cnMgPiAxMSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAncG0nIDogJ1BNJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc0xvd2VyID8gJ2FtJyA6ICdBTSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYmFzZUNvbmZpZyA9IHtcbiAgICAgICAgY2FsZW5kYXI6IGRlZmF1bHRDYWxlbmRhcixcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IGRlZmF1bHRMb25nRGF0ZUZvcm1hdCxcbiAgICAgICAgaW52YWxpZERhdGU6IGRlZmF1bHRJbnZhbGlkRGF0ZSxcbiAgICAgICAgb3JkaW5hbDogZGVmYXVsdE9yZGluYWwsXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlLFxuICAgICAgICByZWxhdGl2ZVRpbWU6IGRlZmF1bHRSZWxhdGl2ZVRpbWUsXG5cbiAgICAgICAgbW9udGhzOiBkZWZhdWx0TG9jYWxlTW9udGhzLFxuICAgICAgICBtb250aHNTaG9ydDogZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LFxuXG4gICAgICAgIHdlZWs6IGRlZmF1bHRMb2NhbGVXZWVrLFxuXG4gICAgICAgIHdlZWtkYXlzOiBkZWZhdWx0TG9jYWxlV2Vla2RheXMsXG4gICAgICAgIHdlZWtkYXlzTWluOiBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LFxuXG4gICAgICAgIG1lcmlkaWVtUGFyc2U6IGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlLFxuICAgIH07XG5cbiAgICAvLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsb2NhbGUgY29uZmlnIGZpbGVzXG4gICAgdmFyIGxvY2FsZXMgPSB7fSxcbiAgICAgICAgbG9jYWxlRmFtaWxpZXMgPSB7fSxcbiAgICAgICAgZ2xvYmFsTG9jYWxlO1xuXG4gICAgZnVuY3Rpb24gY29tbW9uUHJlZml4KGFycjEsIGFycjIpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBtaW5sID0gTWF0aC5taW4oYXJyMS5sZW5ndGgsIGFycjIubGVuZ3RoKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1pbmw7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGFycjFbaV0gIT09IGFycjJbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWlubDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGUoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcbiAgICB9XG5cbiAgICAvLyBwaWNrIHRoZSBsb2NhbGUgZnJvbSB0aGUgYXJyYXlcbiAgICAvLyB0cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxuICAgIC8vIHN1YnN0cmluZyBmcm9tIG1vc3Qgc3BlY2lmaWMgdG8gbGVhc3QsIGJ1dCBtb3ZlIHRvIHRoZSBuZXh0IGFycmF5IGl0ZW0gaWYgaXQncyBhIG1vcmUgc3BlY2lmaWMgdmFyaWFudCB0aGFuIHRoZSBjdXJyZW50IHJvb3RcbiAgICBmdW5jdGlvbiBjaG9vc2VMb2NhbGUobmFtZXMpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIG5leHQsXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICBzcGxpdDtcblxuICAgICAgICB3aGlsZSAoaSA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBqID0gc3BsaXQubGVuZ3RoO1xuICAgICAgICAgICAgbmV4dCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpICsgMV0pO1xuICAgICAgICAgICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShzcGxpdC5zbGljZSgwLCBqKS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBuZXh0ICYmXG4gICAgICAgICAgICAgICAgICAgIG5leHQubGVuZ3RoID49IGogJiZcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uUHJlZml4KHNwbGl0LCBuZXh0KSA+PSBqIC0gMVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAvL3RoZSBuZXh0IGFycmF5IGl0ZW0gaXMgYmV0dGVyIHRoYW4gYSBzaGFsbG93ZXIgc3Vic3RyaW5nIG9mIHRoaXMgb25lXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkTG9jYWxlKG5hbWUpIHtcbiAgICAgICAgdmFyIG9sZExvY2FsZSA9IG51bGwsXG4gICAgICAgICAgICBhbGlhc2VkUmVxdWlyZTtcbiAgICAgICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgbW9kdWxlICYmXG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0c1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xuICAgICAgICAgICAgICAgIGFsaWFzZWRSZXF1aXJlID0gcmVxdWlyZTtcbiAgICAgICAgICAgICAgICBhbGlhc2VkUmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xuICAgICAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShvbGRMb2NhbGUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIG1hcmsgYXMgbm90IGZvdW5kIHRvIGF2b2lkIHJlcGVhdGluZyBleHBlbnNpdmUgZmlsZSByZXF1aXJlIGNhbGwgY2F1c2luZyBoaWdoIENQVVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdHJ5aW5nIHRvIGZpbmQgZW4tVVMsIGVuX1VTLCBlbi11cyBmb3IgZXZlcnkgZm9ybWF0IGNhbGxcbiAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbnVsbDsgLy8gbnVsbCBtZWFucyBub3QgZm91bmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbiAgICAvLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuICAgIC8vIGxvY2FsZSBrZXkuXG4gICAgZnVuY3Rpb24gZ2V0U2V0R2xvYmFsTG9jYWxlKGtleSwgdmFsdWVzKSB7XG4gICAgICAgIHZhciBkYXRhO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZmluZWQodmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRlZmluZUxvY2FsZShrZXksIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gbW9tZW50LmR1cmF0aW9uLl9sb2NhbGUgPSBtb21lbnQuX2xvY2FsZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgZ2xvYmFsTG9jYWxlID0gZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy93YXJuIHVzZXIgaWYgYXJndW1lbnRzIGFyZSBwYXNzZWQgYnV0IHRoZSBsb2NhbGUgY291bGQgbm90IGJlIHNldFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAnTG9jYWxlICcgKyBrZXkgKyAnIG5vdCBmb3VuZC4gRGlkIHlvdSBmb3JnZXQgdG8gbG9hZCBpdD8nXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZS5fYWJicjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZpbmVMb2NhbGUobmFtZSwgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUsXG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgICAgICAgICAgIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUoXG4gICAgICAgICAgICAgICAgICAgICdkZWZpbmVMb2NhbGVPdmVycmlkZScsXG4gICAgICAgICAgICAgICAgICAgICd1c2UgbW9tZW50LnVwZGF0ZUxvY2FsZShsb2NhbGVOYW1lLCBjb25maWcpIHRvIGNoYW5nZSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbiBleGlzdGluZyBsb2NhbGUuIG1vbWVudC5kZWZpbmVMb2NhbGUobG9jYWxlTmFtZSwgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnY29uZmlnKSBzaG91bGQgb25seSBiZSB1c2VkIGZvciBjcmVhdGluZyBhIG5ldyBsb2NhbGUgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZGVmaW5lLWxvY2FsZS8gZm9yIG1vcmUgaW5mby4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW25hbWVdLl9jb25maWc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXS5fY29uZmlnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoY29uZmlnLnBhcmVudExvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlLl9jb25maWc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9IG5ldyBMb2NhbGUobWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSk7XG5cbiAgICAgICAgICAgIGlmIChsb2NhbGVGYW1pbGllc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lTG9jYWxlKHgubmFtZSwgeC5jb25maWcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGxvY2FsZSBBRlRFUiBhbGwgY2hpbGQgbG9jYWxlcyBoYXZlIGJlZW5cbiAgICAgICAgICAgIC8vIGNyZWF0ZWQsIHNvIHdlIHdvbid0IGVuZCB1cCB3aXRoIHRoZSBjaGlsZCBsb2NhbGUgc2V0LlxuICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lLCBjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlLFxuICAgICAgICAgICAgICAgIHRtcExvY2FsZSxcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuXG4gICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsICYmIGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2hpbGQgbG9jYWxlIGluLXBsYWNlIHRvIGF2b2lkIG1lbW9yeS1sZWFrc1xuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0uc2V0KG1lcmdlQ29uZmlncyhsb2NhbGVzW25hbWVdLl9jb25maWcsIGNvbmZpZykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNRVJHRVxuICAgICAgICAgICAgICAgIHRtcExvY2FsZSA9IGxvYWRMb2NhbGUobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRtcExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IHRtcExvY2FsZS5fY29uZmlnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgICAgIGlmICh0bXBMb2NhbGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGVMb2NhbGUgaXMgY2FsbGVkIGZvciBjcmVhdGluZyBhIG5ldyBsb2NhbGVcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGFiYnIgc28gaXQgd2lsbCBoYXZlIGEgbmFtZSAoZ2V0dGVycyByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZWZpbmVkIG90aGVyd2lzZSkuXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9jYWxlID0gbmV3IExvY2FsZShjb25maWcpO1xuICAgICAgICAgICAgICAgIGxvY2FsZS5wYXJlbnRMb2NhbGUgPSBsb2NhbGVzW25hbWVdO1xuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBnZXRTZXRHbG9iYWxMb2NhbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgbG9jYWxlIGRhdGFcbiAgICBmdW5jdGlvbiBnZXRMb2NhbGUoa2V5KSB7XG4gICAgICAgIHZhciBsb2NhbGU7XG5cbiAgICAgICAgaWYgKGtleSAmJiBrZXkuX2xvY2FsZSAmJiBrZXkuX2xvY2FsZS5fYWJicikge1xuICAgICAgICAgICAga2V5ID0ga2V5Ll9sb2NhbGUuX2FiYnI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgICAvL3Nob3J0LWNpcmN1aXQgZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKGtleSk7XG4gICAgICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNob29zZUxvY2FsZShrZXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RMb2NhbGVzKCkge1xuICAgICAgICByZXR1cm4ga2V5cyhsb2NhbGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja092ZXJmbG93KG0pIHtcbiAgICAgICAgdmFyIG92ZXJmbG93LFxuICAgICAgICAgICAgYSA9IG0uX2E7XG5cbiAgICAgICAgaWYgKGEgJiYgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID09PSAtMikge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPVxuICAgICAgICAgICAgICAgIGFbTU9OVEhdIDwgMCB8fCBhW01PTlRIXSA+IDExXG4gICAgICAgICAgICAgICAgICAgID8gTU9OVEhcbiAgICAgICAgICAgICAgICAgICAgOiBhW0RBVEVdIDwgMSB8fCBhW0RBVEVdID4gZGF5c0luTW9udGgoYVtZRUFSXSwgYVtNT05USF0pXG4gICAgICAgICAgICAgICAgICAgID8gREFURVxuICAgICAgICAgICAgICAgICAgICA6IGFbSE9VUl0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgYVtIT1VSXSA+IDI0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgKGFbSE9VUl0gPT09IDI0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhW01JTlVURV0gIT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbU0VDT05EXSAhPT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtNSUxMSVNFQ09ORF0gIT09IDApKVxuICAgICAgICAgICAgICAgICAgICA/IEhPVVJcbiAgICAgICAgICAgICAgICAgICAgOiBhW01JTlVURV0gPCAwIHx8IGFbTUlOVVRFXSA+IDU5XG4gICAgICAgICAgICAgICAgICAgID8gTUlOVVRFXG4gICAgICAgICAgICAgICAgICAgIDogYVtTRUNPTkRdIDwgMCB8fCBhW1NFQ09ORF0gPiA1OVxuICAgICAgICAgICAgICAgICAgICA/IFNFQ09ORFxuICAgICAgICAgICAgICAgICAgICA6IGFbTUlMTElTRUNPTkRdIDwgMCB8fCBhW01JTExJU0VDT05EXSA+IDk5OVxuICAgICAgICAgICAgICAgICAgICA/IE1JTExJU0VDT05EXG4gICAgICAgICAgICAgICAgICAgIDogLTE7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93RGF5T2ZZZWFyICYmXG4gICAgICAgICAgICAgICAgKG92ZXJmbG93IDwgWUVBUiB8fCBvdmVyZmxvdyA+IERBVEUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdyA9IERBVEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd1dlZWtzICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93ID0gV0VFSztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla2RheSAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdyA9IFdFRUtEQVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS5vdmVyZmxvdyA9IG92ZXJmbG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gICAgLy8gaXNvIDg2MDEgcmVnZXhcbiAgICAvLyAwMDAwLTAwLTAwIDAwMDAtVzAwIG9yIDAwMDAtVzAwLTAgKyBUICsgMDAgb3IgMDA6MDAgb3IgMDA6MDA6MDAgb3IgMDA6MDA6MDAuMDAwICsgKzAwOjAwIG9yICswMDAwIG9yICswMClcbiAgICB2YXIgZXh0ZW5kZWRJc29SZWdleCA9IC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSktKD86XFxkXFxkLVxcZFxcZHxXXFxkXFxkLVxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OjpcXGRcXGQoPzo6XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvLFxuICAgICAgICBiYXNpY0lzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KSg/OlxcZFxcZFxcZFxcZHxXXFxkXFxkXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZHwpKSg/OihUfCApKFxcZFxcZCg/OlxcZFxcZCg/OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbKy1dXFxkXFxkKD86Oj9cXGRcXGQpP3xcXHMqWik/KT8kLyxcbiAgICAgICAgdHpSZWdleCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/LyxcbiAgICAgICAgaXNvRGF0ZXMgPSBbXG4gICAgICAgICAgICBbJ1lZWVlZWS1NTS1ERCcsIC9bKy1dXFxkezZ9LVxcZFxcZC1cXGRcXGQvXSxcbiAgICAgICAgICAgIFsnWVlZWS1NTS1ERCcsIC9cXGR7NH0tXFxkXFxkLVxcZFxcZC9dLFxuICAgICAgICAgICAgWydHR0dHLVtXXVdXLUUnLCAvXFxkezR9LVdcXGRcXGQtXFxkL10sXG4gICAgICAgICAgICBbJ0dHR0ctW1ddV1cnLCAvXFxkezR9LVdcXGRcXGQvLCBmYWxzZV0sXG4gICAgICAgICAgICBbJ1lZWVktREREJywgL1xcZHs0fS1cXGR7M30vXSxcbiAgICAgICAgICAgIFsnWVlZWS1NTScsIC9cXGR7NH0tXFxkXFxkLywgZmFsc2VdLFxuICAgICAgICAgICAgWydZWVlZWVlNTUREJywgL1srLV1cXGR7MTB9L10sXG4gICAgICAgICAgICBbJ1lZWVlNTUREJywgL1xcZHs4fS9dLFxuICAgICAgICAgICAgWydHR0dHW1ddV1dFJywgL1xcZHs0fVdcXGR7M30vXSxcbiAgICAgICAgICAgIFsnR0dHR1tXXVdXJywgL1xcZHs0fVdcXGR7Mn0vLCBmYWxzZV0sXG4gICAgICAgICAgICBbJ1lZWVlEREQnLCAvXFxkezd9L10sXG4gICAgICAgICAgICBbJ1lZWVlNTScsIC9cXGR7Nn0vLCBmYWxzZV0sXG4gICAgICAgICAgICBbJ1lZWVknLCAvXFxkezR9LywgZmFsc2VdLFxuICAgICAgICBdLFxuICAgICAgICAvLyBpc28gdGltZSBmb3JtYXRzIGFuZCByZWdleGVzXG4gICAgICAgIGlzb1RpbWVzID0gW1xuICAgICAgICAgICAgWydISDptbTpzcy5TU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkXFwuXFxkKy9dLFxuICAgICAgICAgICAgWydISDptbTpzcyxTU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkLFxcZCsvXSxcbiAgICAgICAgICAgIFsnSEg6bW06c3MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQvXSxcbiAgICAgICAgICAgIFsnSEg6bW0nLCAvXFxkXFxkOlxcZFxcZC9dLFxuICAgICAgICAgICAgWydISG1tc3MuU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGRcXC5cXGQrL10sXG4gICAgICAgICAgICBbJ0hIbW1zcyxTU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZCxcXGQrL10sXG4gICAgICAgICAgICBbJ0hIbW1zcycsIC9cXGRcXGRcXGRcXGRcXGRcXGQvXSxcbiAgICAgICAgICAgIFsnSEhtbScsIC9cXGRcXGRcXGRcXGQvXSxcbiAgICAgICAgICAgIFsnSEgnLCAvXFxkXFxkL10sXG4gICAgICAgIF0sXG4gICAgICAgIGFzcE5ldEpzb25SZWdleCA9IC9eXFwvP0RhdGVcXCgoLT9cXGQrKS9pLFxuICAgICAgICAvLyBSRkMgMjgyMiByZWdleDogRm9yIGRldGFpbHMgc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyODIyI3NlY3Rpb24tMy4zXG4gICAgICAgIHJmYzI4MjIgPSAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLD9cXHMpPyhcXGR7MSwyfSlcXHMoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpXFxzKFxcZHsyLDR9KVxccyhcXGRcXGQpOihcXGRcXGQpKD86OihcXGRcXGQpKT9cXHMoPzooVVR8R01UfFtFQ01QXVtTRF1UKXwoW1p6XSl8KFsrLV1cXGR7NH0pKSQvLFxuICAgICAgICBvYnNPZmZzZXRzID0ge1xuICAgICAgICAgICAgVVQ6IDAsXG4gICAgICAgICAgICBHTVQ6IDAsXG4gICAgICAgICAgICBFRFQ6IC00ICogNjAsXG4gICAgICAgICAgICBFU1Q6IC01ICogNjAsXG4gICAgICAgICAgICBDRFQ6IC01ICogNjAsXG4gICAgICAgICAgICBDU1Q6IC02ICogNjAsXG4gICAgICAgICAgICBNRFQ6IC02ICogNjAsXG4gICAgICAgICAgICBNU1Q6IC03ICogNjAsXG4gICAgICAgICAgICBQRFQ6IC03ICogNjAsXG4gICAgICAgICAgICBQU1Q6IC04ICogNjAsXG4gICAgICAgIH07XG5cbiAgICAvLyBkYXRlIGZyb20gaXNvIGZvcm1hdFxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21JU08oY29uZmlnKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbmZpZy5faSxcbiAgICAgICAgICAgIG1hdGNoID0gZXh0ZW5kZWRJc29SZWdleC5leGVjKHN0cmluZykgfHwgYmFzaWNJc29SZWdleC5leGVjKHN0cmluZyksXG4gICAgICAgICAgICBhbGxvd1RpbWUsXG4gICAgICAgICAgICBkYXRlRm9ybWF0LFxuICAgICAgICAgICAgdGltZUZvcm1hdCxcbiAgICAgICAgICAgIHR6Rm9ybWF0O1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaXNvID0gdHJ1ZTtcblxuICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb0RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpc29EYXRlc1tpXVsxXS5leGVjKG1hdGNoWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0ID0gaXNvRGF0ZXNbaV1bMF07XG4gICAgICAgICAgICAgICAgICAgIGFsbG93VGltZSA9IGlzb0RhdGVzW2ldWzJdICE9PSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFszXSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBpc29UaW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzb1RpbWVzW2ldWzFdLmV4ZWMobWF0Y2hbM10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaFsyXSBzaG91bGQgYmUgJ1QnIG9yIHNwYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRm9ybWF0ID0gKG1hdGNoWzJdIHx8ICcgJykgKyBpc29UaW1lc1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aW1lRm9ybWF0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFsbG93VGltZSAmJiB0aW1lRm9ybWF0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbNF0pIHtcbiAgICAgICAgICAgICAgICBpZiAodHpSZWdleC5leGVjKG1hdGNoWzRdKSkge1xuICAgICAgICAgICAgICAgICAgICB0ekZvcm1hdCA9ICdaJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5fZiA9IGRhdGVGb3JtYXQgKyAodGltZUZvcm1hdCB8fCAnJykgKyAodHpGb3JtYXQgfHwgJycpO1xuICAgICAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKFxuICAgICAgICB5ZWFyU3RyLFxuICAgICAgICBtb250aFN0cixcbiAgICAgICAgZGF5U3RyLFxuICAgICAgICBob3VyU3RyLFxuICAgICAgICBtaW51dGVTdHIsXG4gICAgICAgIHNlY29uZFN0clxuICAgICkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW1xuICAgICAgICAgICAgdW50cnVuY2F0ZVllYXIoeWVhclN0ciksXG4gICAgICAgICAgICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0ciksXG4gICAgICAgICAgICBwYXJzZUludChkYXlTdHIsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KGhvdXJTdHIsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1pbnV0ZVN0ciwgMTApLFxuICAgICAgICBdO1xuXG4gICAgICAgIGlmIChzZWNvbmRTdHIpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KHNlY29uZFN0ciwgMTApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW50cnVuY2F0ZVllYXIoeWVhclN0cikge1xuICAgICAgICB2YXIgeWVhciA9IHBhcnNlSW50KHllYXJTdHIsIDEwKTtcbiAgICAgICAgaWYgKHllYXIgPD0gNDkpIHtcbiAgICAgICAgICAgIHJldHVybiAyMDAwICsgeWVhcjtcbiAgICAgICAgfSBlbHNlIGlmICh5ZWFyIDw9IDk5OSkge1xuICAgICAgICAgICAgcmV0dXJuIDE5MDAgKyB5ZWFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5ZWFyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHMpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgICAgICAgcmV0dXJuIHNcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXChbXildKlxcKXxbXFxuXFx0XS9nLCAnICcpXG4gICAgICAgICAgICAucmVwbGFjZSgvKFxcc1xccyspL2csICcgJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFxzXFxzKi8sICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcc1xccyokLywgJycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrV2Vla2RheSh3ZWVrZGF5U3RyLCBwYXJzZWRJbnB1dCwgY29uZmlnKSB7XG4gICAgICAgIGlmICh3ZWVrZGF5U3RyKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBSZXBsYWNlIHRoZSB2YW5pbGxhIEpTIERhdGUgb2JqZWN0IHdpdGggYW4gaW5kZXBlbmRlbnQgZGF5LW9mLXdlZWsgY2hlY2suXG4gICAgICAgICAgICB2YXIgd2Vla2RheVByb3ZpZGVkID0gZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKSxcbiAgICAgICAgICAgICAgICB3ZWVrZGF5QWN0dWFsID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZElucHV0WzBdLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRJbnB1dFsxXSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkSW5wdXRbMl1cbiAgICAgICAgICAgICAgICApLmdldERheSgpO1xuICAgICAgICAgICAgaWYgKHdlZWtkYXlQcm92aWRlZCAhPT0gd2Vla2RheUFjdHVhbCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLndlZWtkYXlNaXNtYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZU9mZnNldChvYnNPZmZzZXQsIG1pbGl0YXJ5T2Zmc2V0LCBudW1PZmZzZXQpIHtcbiAgICAgICAgaWYgKG9ic09mZnNldCkge1xuICAgICAgICAgICAgcmV0dXJuIG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcbiAgICAgICAgfSBlbHNlIGlmIChtaWxpdGFyeU9mZnNldCkge1xuICAgICAgICAgICAgLy8gdGhlIG9ubHkgYWxsb3dlZCBtaWxpdGFyeSB0eiBpcyBaXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBobSA9IHBhcnNlSW50KG51bU9mZnNldCwgMTApLFxuICAgICAgICAgICAgICAgIG0gPSBobSAlIDEwMCxcbiAgICAgICAgICAgICAgICBoID0gKGhtIC0gbSkgLyAxMDA7XG4gICAgICAgICAgICByZXR1cm4gaCAqIDYwICsgbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRhdGUgYW5kIHRpbWUgZnJvbSByZWYgMjgyMiBmb3JtYXRcbiAgICBmdW5jdGlvbiBjb25maWdGcm9tUkZDMjgyMihjb25maWcpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcmZjMjgyMi5leGVjKHByZXByb2Nlc3NSRkMyODIyKGNvbmZpZy5faSkpLFxuICAgICAgICAgICAgcGFyc2VkQXJyYXk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgcGFyc2VkQXJyYXkgPSBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKFxuICAgICAgICAgICAgICAgIG1hdGNoWzRdLFxuICAgICAgICAgICAgICAgIG1hdGNoWzNdLFxuICAgICAgICAgICAgICAgIG1hdGNoWzJdLFxuICAgICAgICAgICAgICAgIG1hdGNoWzVdLFxuICAgICAgICAgICAgICAgIG1hdGNoWzZdLFxuICAgICAgICAgICAgICAgIG1hdGNoWzddXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFjaGVja1dlZWtkYXkobWF0Y2hbMV0sIHBhcnNlZEFycmF5LCBjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25maWcuX2EgPSBwYXJzZWRBcnJheTtcbiAgICAgICAgICAgIGNvbmZpZy5fdHptID0gY2FsY3VsYXRlT2Zmc2V0KG1hdGNoWzhdLCBtYXRjaFs5XSwgbWF0Y2hbMTBdKTtcblxuICAgICAgICAgICAgY29uZmlnLl9kID0gY3JlYXRlVVRDRGF0ZS5hcHBseShudWxsLCBjb25maWcuX2EpO1xuICAgICAgICAgICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcblxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykucmZjMjgyMiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRhdGUgZnJvbSAxKSBBU1AuTkVULCAyKSBJU08sIDMpIFJGQyAyODIyIGZvcm1hdHMsIG9yIDQpIG9wdGlvbmFsIGZhbGxiYWNrIGlmIHBhcnNpbmcgaXNuJ3Qgc3RyaWN0XG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZyhjb25maWcpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBhc3BOZXRKc29uUmVnZXguZXhlYyhjb25maWcuX2kpO1xuICAgICAgICBpZiAobWF0Y2hlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoK21hdGNoZWRbMV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICAgICAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gICAgICAgIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fc3RyaWN0KSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZpbmFsIGF0dGVtcHQsIHVzZSBJbnB1dCBGYWxsYmFja1xuICAgICAgICAgICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrID0gZGVwcmVjYXRlKFxuICAgICAgICAndmFsdWUgcHJvdmlkZWQgaXMgbm90IGluIGEgcmVjb2duaXplZCBSRkMyODIyIG9yIElTTyBmb3JtYXQuIG1vbWVudCBjb25zdHJ1Y3Rpb24gZmFsbHMgYmFjayB0byBqcyBEYXRlKCksICcgK1xuICAgICAgICAgICAgJ3doaWNoIGlzIG5vdCByZWxpYWJsZSBhY3Jvc3MgYWxsIGJyb3dzZXJzIGFuZCB2ZXJzaW9ucy4gTm9uIFJGQzI4MjIvSVNPIGRhdGUgZm9ybWF0cyBhcmUgJyArXG4gICAgICAgICAgICAnZGlzY291cmFnZWQuIFBsZWFzZSByZWZlciB0byBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2pzLWRhdGUvIGZvciBtb3JlIGluZm8uJyxcbiAgICAgICAgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoY29uZmlnLl9pICsgKGNvbmZpZy5fdXNlVVRDID8gJyBVVEMnIDogJycpKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBQaWNrIHRoZSBmaXJzdCBkZWZpbmVkIG9mIHR3byBvciB0aHJlZSBhcmd1bWVudHMuXG4gICAgZnVuY3Rpb24gZGVmYXVsdHMoYSwgYiwgYykge1xuICAgICAgICBpZiAoYSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYiAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZykge1xuICAgICAgICAvLyBob29rcyBpcyBhY3R1YWxseSB0aGUgZXhwb3J0ZWQgbW9tZW50IG9iamVjdFxuICAgICAgICB2YXIgbm93VmFsdWUgPSBuZXcgRGF0ZShob29rcy5ub3coKSk7XG4gICAgICAgIGlmIChjb25maWcuX3VzZVVUQykge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBub3dWYWx1ZS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgIG5vd1ZhbHVlLmdldFVUQ01vbnRoKCksXG4gICAgICAgICAgICAgICAgbm93VmFsdWUuZ2V0VVRDRGF0ZSgpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW25vd1ZhbHVlLmdldEZ1bGxZZWFyKCksIG5vd1ZhbHVlLmdldE1vbnRoKCksIG5vd1ZhbHVlLmdldERhdGUoKV07XG4gICAgfVxuXG4gICAgLy8gY29udmVydCBhbiBhcnJheSB0byBhIGRhdGUuXG4gICAgLy8gdGhlIGFycmF5IHNob3VsZCBtaXJyb3IgdGhlIHBhcmFtZXRlcnMgYmVsb3dcbiAgICAvLyBub3RlOiBhbGwgdmFsdWVzIHBhc3QgdGhlIHllYXIgYXJlIG9wdGlvbmFsIGFuZCB3aWxsIGRlZmF1bHQgdG8gdGhlIGxvd2VzdCBwb3NzaWJsZSB2YWx1ZS5cbiAgICAvLyBbeWVhciwgbW9udGgsIGRheSAsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF1cbiAgICBmdW5jdGlvbiBjb25maWdGcm9tQXJyYXkoY29uZmlnKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgIGlucHV0ID0gW10sXG4gICAgICAgICAgICBjdXJyZW50RGF0ZSxcbiAgICAgICAgICAgIGV4cGVjdGVkV2Vla2RheSxcbiAgICAgICAgICAgIHllYXJUb1VzZTtcblxuICAgICAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKTtcblxuICAgICAgICAvL2NvbXB1dGUgZGF5IG9mIHRoZSB5ZWFyIGZyb20gd2Vla3MgYW5kIHdlZWtkYXlzXG4gICAgICAgIGlmIChjb25maWcuX3cgJiYgY29uZmlnLl9hW0RBVEVdID09IG51bGwgJiYgY29uZmlnLl9hW01PTlRIXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgdGhlIGRheSBvZiB0aGUgeWVhciBpcyBzZXQsIGZpZ3VyZSBvdXQgd2hhdCBpdCBpc1xuICAgICAgICBpZiAoY29uZmlnLl9kYXlPZlllYXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgeWVhclRvVXNlID0gZGVmYXVsdHMoY29uZmlnLl9hW1lFQVJdLCBjdXJyZW50RGF0ZVtZRUFSXSk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjb25maWcuX2RheU9mWWVhciA+IGRheXNJblllYXIoeWVhclRvVXNlKSB8fFxuICAgICAgICAgICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dEYXlPZlllYXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRlID0gY3JlYXRlVVRDRGF0ZSh5ZWFyVG9Vc2UsIDAsIGNvbmZpZy5fZGF5T2ZZZWFyKTtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtNT05USF0gPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgICAgICAgICBjb25maWcuX2FbREFURV0gPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmF1bHQgdG8gY3VycmVudCBkYXRlLlxuICAgICAgICAvLyAqIGlmIG5vIHllYXIsIG1vbnRoLCBkYXkgb2YgbW9udGggYXJlIGdpdmVuLCBkZWZhdWx0IHRvIHRvZGF5XG4gICAgICAgIC8vICogaWYgZGF5IG9mIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG1vbnRoIGFuZCB5ZWFyXG4gICAgICAgIC8vICogaWYgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgb25seSB5ZWFyXG4gICAgICAgIC8vICogaWYgeWVhciBpcyBnaXZlbiwgZG9uJ3QgZGVmYXVsdCBhbnl0aGluZ1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMyAmJiBjb25maWcuX2FbaV0gPT0gbnVsbDsgKytpKSB7XG4gICAgICAgICAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9IGN1cnJlbnREYXRlW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gWmVybyBvdXQgd2hhdGV2ZXIgd2FzIG5vdCBkZWZhdWx0ZWQsIGluY2x1ZGluZyB0aW1lXG4gICAgICAgIGZvciAoOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9XG4gICAgICAgICAgICAgICAgY29uZmlnLl9hW2ldID09IG51bGwgPyAoaSA9PT0gMiA/IDEgOiAwKSA6IGNvbmZpZy5fYVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciAyNDowMDowMC4wMDBcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID09PSAyNCAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW01JTlVURV0gPT09IDAgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtTRUNPTkRdID09PSAwICYmXG4gICAgICAgICAgICBjb25maWcuX2FbTUlMTElTRUNPTkRdID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uZmlnLl9uZXh0RGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcuX2QgPSAoY29uZmlnLl91c2VVVEMgPyBjcmVhdGVVVENEYXRlIDogY3JlYXRlRGF0ZSkuYXBwbHkoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgaW5wdXRcbiAgICAgICAgKTtcbiAgICAgICAgZXhwZWN0ZWRXZWVrZGF5ID0gY29uZmlnLl91c2VVVENcbiAgICAgICAgICAgID8gY29uZmlnLl9kLmdldFVUQ0RheSgpXG4gICAgICAgICAgICA6IGNvbmZpZy5fZC5nZXREYXkoKTtcblxuICAgICAgICAvLyBBcHBseSB0aW1lem9uZSBvZmZzZXQgZnJvbSBpbnB1dC4gVGhlIGFjdHVhbCB1dGNPZmZzZXQgY2FuIGJlIGNoYW5nZWRcbiAgICAgICAgLy8gd2l0aCBwYXJzZVpvbmUuXG4gICAgICAgIGlmIChjb25maWcuX3R6bSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fbmV4dERheSkge1xuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMjQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBmb3IgbWlzbWF0Y2hpbmcgZGF5IG9mIHdlZWtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlnLl93ICYmXG4gICAgICAgICAgICB0eXBlb2YgY29uZmlnLl93LmQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICBjb25maWcuX3cuZCAhPT0gZXhwZWN0ZWRXZWVrZGF5XG4gICAgICAgICkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpIHtcbiAgICAgICAgdmFyIHcsIHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSwgdGVtcCwgd2Vla2RheU92ZXJmbG93LCBjdXJXZWVrO1xuXG4gICAgICAgIHcgPSBjb25maWcuX3c7XG4gICAgICAgIGlmICh3LkdHICE9IG51bGwgfHwgdy5XICE9IG51bGwgfHwgdy5FICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRvdyA9IDE7XG4gICAgICAgICAgICBkb3kgPSA0O1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIHRha2UgdGhlIGN1cnJlbnQgaXNvV2Vla1llYXIsIGJ1dCB0aGF0IGRlcGVuZHMgb25cbiAgICAgICAgICAgIC8vIGhvdyB3ZSBpbnRlcnByZXQgbm93IChsb2NhbCwgdXRjLCBmaXhlZCBvZmZzZXQpLiBTbyBjcmVhdGVcbiAgICAgICAgICAgIC8vIGEgbm93IHZlcnNpb24gb2YgY3VycmVudCBjb25maWcgKHRha2UgbG9jYWwvdXRjL29mZnNldCBmbGFncywgYW5kXG4gICAgICAgICAgICAvLyBjcmVhdGUgbm93KS5cbiAgICAgICAgICAgIHdlZWtZZWFyID0gZGVmYXVsdHMoXG4gICAgICAgICAgICAgICAgdy5HRyxcbiAgICAgICAgICAgICAgICBjb25maWcuX2FbWUVBUl0sXG4gICAgICAgICAgICAgICAgd2Vla09mWWVhcihjcmVhdGVMb2NhbCgpLCAxLCA0KS55ZWFyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcuVywgMSk7XG4gICAgICAgICAgICB3ZWVrZGF5ID0gZGVmYXVsdHMody5FLCAxKTtcbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgMSB8fCB3ZWVrZGF5ID4gNykge1xuICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb3cgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3c7XG4gICAgICAgICAgICBkb3kgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3k7XG5cbiAgICAgICAgICAgIGN1cldlZWsgPSB3ZWVrT2ZZZWFyKGNyZWF0ZUxvY2FsKCksIGRvdywgZG95KTtcblxuICAgICAgICAgICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LmdnLCBjb25maWcuX2FbWUVBUl0sIGN1cldlZWsueWVhcik7XG5cbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gY3VycmVudCB3ZWVrLlxuICAgICAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcudywgY3VyV2Vlay53ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHcuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gd2Vla2RheSAtLSBsb3cgZGF5IG51bWJlcnMgYXJlIGNvbnNpZGVyZWQgbmV4dCB3ZWVrXG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IHcuZDtcbiAgICAgICAgICAgICAgICBpZiAod2Vla2RheSA8IDAgfHwgd2Vla2RheSA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHcuZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gbG9jYWwgd2Vla2RheSAtLSBjb3VudGluZyBzdGFydHMgZnJvbSBiZWdpbm5pbmcgb2Ygd2Vla1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSB3LmUgKyBkb3c7XG4gICAgICAgICAgICAgICAgaWYgKHcuZSA8IDAgfHwgdy5lID4gNikge1xuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB0byBiZWdpbm5pbmcgb2Ygd2Vla1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSBkb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdlZWsgPCAxIHx8IHdlZWsgPiB3ZWVrc0luWWVhcih3ZWVrWWVhciwgZG93LCBkb3kpKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAod2Vla2RheU92ZXJmbG93ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtkYXkgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcCA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICAgICAgICAgICAgY29uZmlnLl9hW1lFQVJdID0gdGVtcC55ZWFyO1xuICAgICAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPSB0ZW1wLmRheU9mWWVhcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBJU08gc3RhbmRhcmRcbiAgICBob29rcy5JU09fODYwMSA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIFJGQyAyODIyIGZvcm1cbiAgICBob29rcy5SRkNfMjgyMiA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZ1xuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKSB7XG4gICAgICAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhbm90aGVyIHBhcnQgb2YgdGhlIGNyZWF0aW9uIGZsb3cgdG8gcHJldmVudCBjaXJjdWxhciBkZXBzXG4gICAgICAgIGlmIChjb25maWcuX2YgPT09IGhvb2tzLklTT184NjAxKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5fZiA9PT0gaG9va3MuUkZDXzI4MjIpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLl9hID0gW107XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gdHJ1ZTtcblxuICAgICAgICAvLyBUaGlzIGFycmF5IGlzIHVzZWQgdG8gbWFrZSBhIERhdGUsIGVpdGhlciB3aXRoIGBuZXcgRGF0ZWAgb3IgYERhdGUuVVRDYFxuICAgICAgICB2YXIgc3RyaW5nID0gJycgKyBjb25maWcuX2ksXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcGFyc2VkSW5wdXQsXG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgIHNraXBwZWQsXG4gICAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCA9IDAsXG4gICAgICAgICAgICBlcmE7XG5cbiAgICAgICAgdG9rZW5zID1cbiAgICAgICAgICAgIGV4cGFuZEZvcm1hdChjb25maWcuX2YsIGNvbmZpZy5fbG9jYWxlKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSB8fCBbXTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIHBhcnNlZElucHV0ID0gKHN0cmluZy5tYXRjaChnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykpIHx8XG4gICAgICAgICAgICAgICAgW10pWzBdO1xuICAgICAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgc2tpcHBlZCA9IHN0cmluZy5zdWJzdHIoMCwgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpKTtcbiAgICAgICAgICAgICAgICBpZiAoc2tpcHBlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZShcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpICsgcGFyc2VkSW5wdXQubGVuZ3RoXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoICs9IHBhcnNlZElucHV0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRvbid0IHBhcnNlIGlmIGl0J3Mgbm90IGEga25vd24gdG9rZW5cbiAgICAgICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0pIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBwYXJzZWRJbnB1dCwgY29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLl9zdHJpY3QgJiYgIXBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHJlbWFpbmluZyB1bnBhcnNlZCBpbnB1dCBsZW5ndGggdG8gdGhlIHN0cmluZ1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5jaGFyc0xlZnRPdmVyID1cbiAgICAgICAgICAgIHN0cmluZ0xlbmd0aCAtIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGg7XG4gICAgICAgIGlmIChzdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChzdHJpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xlYXIgXzEyaCBmbGFnIGlmIGhvdXIgaXMgPD0gMTJcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdIDw9IDEyICYmXG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID09PSB0cnVlICYmXG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0gPiAwXG4gICAgICAgICkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnBhcnNlZERhdGVQYXJ0cyA9IGNvbmZpZy5fYS5zbGljZSgwKTtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykubWVyaWRpZW0gPSBjb25maWcuX21lcmlkaWVtO1xuICAgICAgICAvLyBoYW5kbGUgbWVyaWRpZW1cbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gbWVyaWRpZW1GaXhXcmFwKFxuICAgICAgICAgICAgY29uZmlnLl9sb2NhbGUsXG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0sXG4gICAgICAgICAgICBjb25maWcuX21lcmlkaWVtXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaGFuZGxlIGVyYVxuICAgICAgICBlcmEgPSBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lcmE7XG4gICAgICAgIGlmIChlcmEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtZRUFSXSA9IGNvbmZpZy5fbG9jYWxlLmVyYXNDb252ZXJ0WWVhcihlcmEsIGNvbmZpZy5fYVtZRUFSXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICAgICAgY2hlY2tPdmVyZmxvdyhjb25maWcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lcmlkaWVtRml4V3JhcChsb2NhbGUsIGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgICAgIHZhciBpc1BtO1xuXG4gICAgICAgIGlmIChtZXJpZGllbSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlLm1lcmlkaWVtSG91ciAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlLm1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSk7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxlLmlzUE0gIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2tcbiAgICAgICAgICAgIGlzUG0gPSBsb2NhbGUuaXNQTShtZXJpZGllbSk7XG4gICAgICAgICAgICBpZiAoaXNQbSAmJiBob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBob3VyICs9IDEyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1BtICYmIGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IHN1cHBvc2VkIHRvIGhhcHBlblxuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBhcnJheSBvZiBmb3JtYXQgc3RyaW5nc1xuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpIHtcbiAgICAgICAgdmFyIHRlbXBDb25maWcsXG4gICAgICAgICAgICBiZXN0TW9tZW50LFxuICAgICAgICAgICAgc2NvcmVUb0JlYXQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgY3VycmVudFNjb3JlLFxuICAgICAgICAgICAgdmFsaWRGb3JtYXRGb3VuZCxcbiAgICAgICAgICAgIGJlc3RGb3JtYXRJc1ZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fZi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb25maWcuX2YubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgICAgICB2YWxpZEZvcm1hdEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB0ZW1wQ29uZmlnID0gY29weUNvbmZpZyh7fSwgY29uZmlnKTtcbiAgICAgICAgICAgIGlmIChjb25maWcuX3VzZVVUQyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGVtcENvbmZpZy5fdXNlVVRDID0gY29uZmlnLl91c2VVVEM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZW1wQ29uZmlnLl9mID0gY29uZmlnLl9mW2ldO1xuICAgICAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcblxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGVtcENvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB2YWxpZEZvcm1hdEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYW55IGlucHV0IHRoYXQgd2FzIG5vdCBwYXJzZWQgYWRkIGEgcGVuYWx0eSBmb3IgdGhhdCBmb3JtYXRcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuY2hhcnNMZWZ0T3ZlcjtcblxuICAgICAgICAgICAgLy9vciB0b2tlbnNcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykudW51c2VkVG9rZW5zLmxlbmd0aCAqIDEwO1xuXG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuc2NvcmUgPSBjdXJyZW50U2NvcmU7XG5cbiAgICAgICAgICAgIGlmICghYmVzdEZvcm1hdElzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlVG9CZWF0ID09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNjb3JlIDwgc2NvcmVUb0JlYXQgfHxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRGb3JtYXRGb3VuZFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcbiAgICAgICAgICAgICAgICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZEZvcm1hdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0Rm9ybWF0SXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcbiAgICAgICAgICAgICAgICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXh0ZW5kKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWdGcm9tT2JqZWN0KGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGNvbmZpZy5faSksXG4gICAgICAgICAgICBkYXlPckRhdGUgPSBpLmRheSA9PT0gdW5kZWZpbmVkID8gaS5kYXRlIDogaS5kYXk7XG4gICAgICAgIGNvbmZpZy5fYSA9IG1hcChcbiAgICAgICAgICAgIFtpLnllYXIsIGkubW9udGgsIGRheU9yRGF0ZSwgaS5ob3VyLCBpLm1pbnV0ZSwgaS5zZWNvbmQsIGkubWlsbGlzZWNvbmRdLFxuICAgICAgICAgICAgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmogJiYgcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRnJvbUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgdmFyIHJlcyA9IG5ldyBNb21lbnQoY2hlY2tPdmVyZmxvdyhwcmVwYXJlQ29uZmlnKGNvbmZpZykpKTtcbiAgICAgICAgaWYgKHJlcy5fbmV4dERheSkge1xuICAgICAgICAgICAgLy8gQWRkaW5nIGlzIHNtYXJ0IGVub3VnaCBhcm91bmQgRFNUXG4gICAgICAgICAgICByZXMuYWRkKDEsICdkJyk7XG4gICAgICAgICAgICByZXMuX25leHREYXkgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXBhcmVDb25maWcoY29uZmlnKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faSxcbiAgICAgICAgICAgIGZvcm1hdCA9IGNvbmZpZy5fZjtcblxuICAgICAgICBjb25maWcuX2xvY2FsZSA9IGNvbmZpZy5fbG9jYWxlIHx8IGdldExvY2FsZShjb25maWcuX2wpO1xuXG4gICAgICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCAoZm9ybWF0ID09PSB1bmRlZmluZWQgJiYgaW5wdXQgPT09ICcnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoeyBudWxsSW5wdXQ6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uZmlnLl9pID0gaW5wdXQgPSBjb25maWcuX2xvY2FsZS5wcmVwYXJzZShpbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNNb21lbnQoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vbWVudChjaGVja092ZXJmbG93KGlucHV0KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gaW5wdXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShmb3JtYXQpKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKGNvbmZpZykpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gY29uZmlnLl9pO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShob29rcy5ub3coKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQudmFsdWVPZigpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nKGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYSA9IG1hcChpbnB1dC5zbGljZSgwKSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChvYmosIDEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tT2JqZWN0KGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgICAgICAvLyBmcm9tIG1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIGlzVVRDKSB7XG4gICAgICAgIHZhciBjID0ge307XG5cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdHJ1ZSB8fCBmb3JtYXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzdHJpY3QgPSBmb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9jYWxlID09PSB0cnVlIHx8IGxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN0cmljdCA9IGxvY2FsZTtcbiAgICAgICAgICAgIGxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChpc09iamVjdChpbnB1dCkgJiYgaXNPYmplY3RFbXB0eShpbnB1dCkpIHx8XG4gICAgICAgICAgICAoaXNBcnJheShpbnB1dCkgJiYgaW5wdXQubGVuZ3RoID09PSAwKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlucHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQyM1xuICAgICAgICBjLl9pc0FNb21lbnRPYmplY3QgPSB0cnVlO1xuICAgICAgICBjLl91c2VVVEMgPSBjLl9pc1VUQyA9IGlzVVRDO1xuICAgICAgICBjLl9sID0gbG9jYWxlO1xuICAgICAgICBjLl9pID0gaW5wdXQ7XG4gICAgICAgIGMuX2YgPSBmb3JtYXQ7XG4gICAgICAgIGMuX3N0cmljdCA9IHN0cmljdDtcblxuICAgICAgICByZXR1cm4gY3JlYXRlRnJvbUNvbmZpZyhjKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMb2NhbChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHZhciBwcm90b3R5cGVNaW4gPSBkZXByZWNhdGUoXG4gICAgICAgICAgICAnbW9tZW50KCkubWluIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQubWF4IGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvbWluLW1heC8nLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIgPCB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICBwcm90b3R5cGVNYXggPSBkZXByZWNhdGUoXG4gICAgICAgICAgICAnbW9tZW50KCkubWF4IGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQubWluIGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvbWluLW1heC8nLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIgPiB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgLy8gUGljayBhIG1vbWVudCBtIGZyb20gbW9tZW50cyBzbyB0aGF0IG1bZm5dKG90aGVyKSBpcyB0cnVlIGZvciBhbGxcbiAgICAvLyBvdGhlci4gVGhpcyByZWxpZXMgb24gdGhlIGZ1bmN0aW9uIGZuIHRvIGJlIHRyYW5zaXRpdmUuXG4gICAgLy9cbiAgICAvLyBtb21lbnRzIHNob3VsZCBlaXRoZXIgYmUgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMgb3IgYW4gYXJyYXksIHdob3NlXG4gICAgLy8gZmlyc3QgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cy5cbiAgICBmdW5jdGlvbiBwaWNrQnkoZm4sIG1vbWVudHMpIHtcbiAgICAgICAgdmFyIHJlcywgaTtcbiAgICAgICAgaWYgKG1vbWVudHMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkobW9tZW50c1swXSkpIHtcbiAgICAgICAgICAgIG1vbWVudHMgPSBtb21lbnRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbW9tZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVMb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcyA9IG1vbWVudHNbMF07XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBtb21lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoIW1vbWVudHNbaV0uaXNWYWxpZCgpIHx8IG1vbWVudHNbaV1bZm5dKHJlcykpIHtcbiAgICAgICAgICAgICAgICByZXMgPSBtb21lbnRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogVXNlIFtdLnNvcnQgaW5zdGVhZD9cbiAgICBmdW5jdGlvbiBtaW4oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgICAgIHJldHVybiBwaWNrQnkoJ2lzQmVmb3JlJywgYXJncyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF4KCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgICAgICByZXR1cm4gcGlja0J5KCdpc0FmdGVyJywgYXJncyk7XG4gICAgfVxuXG4gICAgdmFyIG5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93ID8gRGF0ZS5ub3coKSA6ICtuZXcgRGF0ZSgpO1xuICAgIH07XG5cbiAgICB2YXIgb3JkZXJpbmcgPSBbXG4gICAgICAgICd5ZWFyJyxcbiAgICAgICAgJ3F1YXJ0ZXInLFxuICAgICAgICAnbW9udGgnLFxuICAgICAgICAnd2VlaycsXG4gICAgICAgICdkYXknLFxuICAgICAgICAnaG91cicsXG4gICAgICAgICdtaW51dGUnLFxuICAgICAgICAnc2Vjb25kJyxcbiAgICAgICAgJ21pbGxpc2Vjb25kJyxcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gaXNEdXJhdGlvblZhbGlkKG0pIHtcbiAgICAgICAgdmFyIGtleSxcbiAgICAgICAgICAgIHVuaXRIYXNEZWNpbWFsID0gZmFsc2UsXG4gICAgICAgICAgICBpO1xuICAgICAgICBmb3IgKGtleSBpbiBtKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaGFzT3duUHJvcChtLCBrZXkpICYmXG4gICAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZi5jYWxsKG9yZGVyaW5nLCBrZXkpICE9PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAobVtrZXldID09IG51bGwgfHwgIWlzTmFOKG1ba2V5XSkpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG9yZGVyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAobVtvcmRlcmluZ1tpXV0pIHtcbiAgICAgICAgICAgICAgICBpZiAodW5pdEhhc0RlY2ltYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBvbmx5IGFsbG93IG5vbi1pbnRlZ2VycyBmb3Igc21hbGxlc3QgdW5pdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VGbG9hdChtW29yZGVyaW5nW2ldXSkgIT09IHRvSW50KG1bb3JkZXJpbmdbaV1dKSkge1xuICAgICAgICAgICAgICAgICAgICB1bml0SGFzRGVjaW1hbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNWYWxpZCQxKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkJDEoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbihOYU4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIER1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhkdXJhdGlvbiksXG4gICAgICAgICAgICB5ZWFycyA9IG5vcm1hbGl6ZWRJbnB1dC55ZWFyIHx8IDAsXG4gICAgICAgICAgICBxdWFydGVycyA9IG5vcm1hbGl6ZWRJbnB1dC5xdWFydGVyIHx8IDAsXG4gICAgICAgICAgICBtb250aHMgPSBub3JtYWxpemVkSW5wdXQubW9udGggfHwgMCxcbiAgICAgICAgICAgIHdlZWtzID0gbm9ybWFsaXplZElucHV0LndlZWsgfHwgbm9ybWFsaXplZElucHV0Lmlzb1dlZWsgfHwgMCxcbiAgICAgICAgICAgIGRheXMgPSBub3JtYWxpemVkSW5wdXQuZGF5IHx8IDAsXG4gICAgICAgICAgICBob3VycyA9IG5vcm1hbGl6ZWRJbnB1dC5ob3VyIHx8IDAsXG4gICAgICAgICAgICBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZSB8fCAwLFxuICAgICAgICAgICAgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmQgfHwgMCxcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5taWxsaXNlY29uZCB8fCAwO1xuXG4gICAgICAgIHRoaXMuX2lzVmFsaWQgPSBpc0R1cmF0aW9uVmFsaWQobm9ybWFsaXplZElucHV0KTtcblxuICAgICAgICAvLyByZXByZXNlbnRhdGlvbiBmb3IgZGF0ZUFkZFJlbW92ZVxuICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgPVxuICAgICAgICAgICAgK21pbGxpc2Vjb25kcyArXG4gICAgICAgICAgICBzZWNvbmRzICogMWUzICsgLy8gMTAwMFxuICAgICAgICAgICAgbWludXRlcyAqIDZlNCArIC8vIDEwMDAgKiA2MFxuICAgICAgICAgICAgaG91cnMgKiAxMDAwICogNjAgKiA2MDsgLy91c2luZyAxMDAwICogNjAgKiA2MCBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XG4gICAgICAgIC8vIEJlY2F1c2Ugb2YgZGF0ZUFkZFJlbW92ZSB0cmVhdHMgMjQgaG91cnMgYXMgZGlmZmVyZW50IGZyb20gYVxuICAgICAgICAvLyBkYXkgd2hlbiB3b3JraW5nIGFyb3VuZCBEU1QsIHdlIG5lZWQgdG8gc3RvcmUgdGhlbSBzZXBhcmF0ZWx5XG4gICAgICAgIHRoaXMuX2RheXMgPSArZGF5cyArIHdlZWtzICogNztcbiAgICAgICAgLy8gSXQgaXMgaW1wb3NzaWJsZSB0byB0cmFuc2xhdGUgbW9udGhzIGludG8gZGF5cyB3aXRob3V0IGtub3dpbmdcbiAgICAgICAgLy8gd2hpY2ggbW9udGhzIHlvdSBhcmUgYXJlIHRhbGtpbmcgYWJvdXQsIHNvIHdlIGhhdmUgdG8gc3RvcmVcbiAgICAgICAgLy8gaXQgc2VwYXJhdGVseS5cbiAgICAgICAgdGhpcy5fbW9udGhzID0gK21vbnRocyArIHF1YXJ0ZXJzICogMyArIHllYXJzICogMTI7XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuXG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZSgpO1xuXG4gICAgICAgIHRoaXMuX2J1YmJsZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRHVyYXRpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEdXJhdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhYnNSb3VuZChudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKC0xICogbnVtYmVyKSAqIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBhcmUgdHdvIGFycmF5cywgcmV0dXJuIHRoZSBudW1iZXIgb2YgZGlmZmVyZW5jZXNcbiAgICBmdW5jdGlvbiBjb21wYXJlQXJyYXlzKGFycmF5MSwgYXJyYXkyLCBkb250Q29udmVydCkge1xuICAgICAgICB2YXIgbGVuID0gTWF0aC5taW4oYXJyYXkxLmxlbmd0aCwgYXJyYXkyLmxlbmd0aCksXG4gICAgICAgICAgICBsZW5ndGhEaWZmID0gTWF0aC5hYnMoYXJyYXkxLmxlbmd0aCAtIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICAgICAgZGlmZnMgPSAwLFxuICAgICAgICAgICAgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGRvbnRDb252ZXJ0ICYmIGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB8fFxuICAgICAgICAgICAgICAgICghZG9udENvbnZlcnQgJiYgdG9JbnQoYXJyYXkxW2ldKSAhPT0gdG9JbnQoYXJyYXkyW2ldKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGRpZmZzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBmdW5jdGlvbiBvZmZzZXQodG9rZW4sIHNlcGFyYXRvcikge1xuICAgICAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMudXRjT2Zmc2V0KCksXG4gICAgICAgICAgICAgICAgc2lnbiA9ICcrJztcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gLW9mZnNldDtcbiAgICAgICAgICAgICAgICBzaWduID0gJy0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBzaWduICtcbiAgICAgICAgICAgICAgICB6ZXJvRmlsbCh+fihvZmZzZXQgLyA2MCksIDIpICtcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3IgK1xuICAgICAgICAgICAgICAgIHplcm9GaWxsKH5+b2Zmc2V0ICUgNjAsIDIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvZmZzZXQoJ1onLCAnOicpO1xuICAgIG9mZnNldCgnWlonLCAnJyk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdaJywgbWF0Y2hTaG9ydE9mZnNldCk7XG4gICAgYWRkUmVnZXhUb2tlbignWlonLCBtYXRjaFNob3J0T2Zmc2V0KTtcbiAgICBhZGRQYXJzZVRva2VuKFsnWicsICdaWiddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgY29uZmlnLl91c2VVVEMgPSB0cnVlO1xuICAgICAgICBjb25maWcuX3R6bSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuICAgIH0pO1xuXG4gICAgLy8gSEVMUEVSU1xuXG4gICAgLy8gdGltZXpvbmUgY2h1bmtlclxuICAgIC8vICcrMTA6MDAnID4gWycxMCcsICAnMDAnXVxuICAgIC8vICctMTUzMCcgID4gWyctMTUnLCAnMzAnXVxuICAgIHZhciBjaHVua09mZnNldCA9IC8oW1xcK1xcLV18XFxkXFxkKS9naTtcblxuICAgIGZ1bmN0aW9uIG9mZnNldEZyb21TdHJpbmcobWF0Y2hlciwgc3RyaW5nKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gKHN0cmluZyB8fCAnJykubWF0Y2gobWF0Y2hlciksXG4gICAgICAgICAgICBjaHVuayxcbiAgICAgICAgICAgIHBhcnRzLFxuICAgICAgICAgICAgbWludXRlcztcblxuICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjaHVuayA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXSB8fCBbXTtcbiAgICAgICAgcGFydHMgPSAoY2h1bmsgKyAnJykubWF0Y2goY2h1bmtPZmZzZXQpIHx8IFsnLScsIDAsIDBdO1xuICAgICAgICBtaW51dGVzID0gKyhwYXJ0c1sxXSAqIDYwKSArIHRvSW50KHBhcnRzWzJdKTtcblxuICAgICAgICByZXR1cm4gbWludXRlcyA9PT0gMCA/IDAgOiBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBhIG1vbWVudCBmcm9tIGlucHV0LCB0aGF0IGlzIGxvY2FsL3V0Yy96b25lIGVxdWl2YWxlbnQgdG8gbW9kZWwuXG4gICAgZnVuY3Rpb24gY2xvbmVXaXRoT2Zmc2V0KGlucHV0LCBtb2RlbCkge1xuICAgICAgICB2YXIgcmVzLCBkaWZmO1xuICAgICAgICBpZiAobW9kZWwuX2lzVVRDKSB7XG4gICAgICAgICAgICByZXMgPSBtb2RlbC5jbG9uZSgpO1xuICAgICAgICAgICAgZGlmZiA9XG4gICAgICAgICAgICAgICAgKGlzTW9tZW50KGlucHV0KSB8fCBpc0RhdGUoaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgID8gaW5wdXQudmFsdWVPZigpXG4gICAgICAgICAgICAgICAgICAgIDogY3JlYXRlTG9jYWwoaW5wdXQpLnZhbHVlT2YoKSkgLSByZXMudmFsdWVPZigpO1xuICAgICAgICAgICAgLy8gVXNlIGxvdy1sZXZlbCBhcGksIGJlY2F1c2UgdGhpcyBmbiBpcyBsb3ctbGV2ZWwgYXBpLlxuICAgICAgICAgICAgcmVzLl9kLnNldFRpbWUocmVzLl9kLnZhbHVlT2YoKSArIGRpZmYpO1xuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHJlcywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVMb2NhbChpbnB1dCkubG9jYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERhdGVPZmZzZXQobSkge1xuICAgICAgICAvLyBPbiBGaXJlZm94LjI0IERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyBhIGZsb2F0aW5nIHBvaW50LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9wdWxsLzE4NzFcbiAgICAgICAgcmV0dXJuIC1NYXRoLnJvdW5kKG0uX2QuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG4gICAgfVxuXG4gICAgLy8gSE9PS1NcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cbiAgICAvLyBJdCBpcyBpbnRlbmRlZCB0byBrZWVwIHRoZSBvZmZzZXQgaW4gc3luYyB3aXRoIHRoZSB0aW1lem9uZS5cbiAgICBob29rcy51cGRhdGVPZmZzZXQgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIC8vIGtlZXBMb2NhbFRpbWUgPSB0cnVlIG1lYW5zIG9ubHkgY2hhbmdlIHRoZSB0aW1lem9uZSwgd2l0aG91dFxuICAgIC8vIGFmZmVjdGluZyB0aGUgbG9jYWwgaG91ci4gU28gNTozMToyNiArMDMwMCAtLVt1dGNPZmZzZXQoMiwgdHJ1ZSldLS0+XG4gICAgLy8gNTozMToyNiArMDIwMCBJdCBpcyBwb3NzaWJsZSB0aGF0IDU6MzE6MjYgZG9lc24ndCBleGlzdCB3aXRoIG9mZnNldFxuICAgIC8vICswMjAwLCBzbyB3ZSBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cbiAgICAvL1xuICAgIC8vIEtlZXBpbmcgdGhlIHRpbWUgYWN0dWFsbHkgYWRkcy9zdWJ0cmFjdHMgKG9uZSBob3VyKVxuICAgIC8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxuICAgIC8vIGEgc2Vjb25kIHRpbWUuIEluIGNhc2UgaXQgd2FudHMgdXMgdG8gY2hhbmdlIHRoZSBvZmZzZXQgYWdhaW5cbiAgICAvLyBfY2hhbmdlSW5Qcm9ncmVzcyA9PSB0cnVlIGNhc2UsIHRoZW4gd2UgaGF2ZSB0byBhZGp1c3QsIGJlY2F1c2VcbiAgICAvLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxuICAgIGZ1bmN0aW9uIGdldFNldE9mZnNldChpbnB1dCwga2VlcExvY2FsVGltZSwga2VlcE1pbnV0ZXMpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuX29mZnNldCB8fCAwLFxuICAgICAgICAgICAgbG9jYWxBZGp1c3Q7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGlucHV0KSA8IDE2ICYmICFrZWVwTWludXRlcykge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gaW5wdXQgKiA2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5faXNVVEMgJiYga2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgICAgIGxvY2FsQWRqdXN0ID0gZ2V0RGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX29mZnNldCA9IGlucHV0O1xuICAgICAgICAgICAgdGhpcy5faXNVVEMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGxvY2FsQWRqdXN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChsb2NhbEFkanVzdCwgJ20nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvZmZzZXQgIT09IGlucHV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFrZWVwTG9jYWxUaW1lIHx8IHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkU3VidHJhY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRHVyYXRpb24oaW5wdXQgLSBvZmZzZXQsICdtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gb2Zmc2V0IDogZ2V0RGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldFpvbmUoaW5wdXQsIGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSAtaW5wdXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMudXRjT2Zmc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPZmZzZXRUb1VUQyhrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPZmZzZXRUb0xvY2FsKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVVRDKSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICAgICAgICAgIHRoaXMuX2lzVVRDID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMpLCAnbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0KCkge1xuICAgICAgICBpZiAodGhpcy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KHRoaXMuX3R6bSwgZmFsc2UsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIHRab25lID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaE9mZnNldCwgdGhpcy5faSk7XG4gICAgICAgICAgICBpZiAodFpvbmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KHRab25lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoMCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzQWxpZ25lZEhvdXJPZmZzZXQoaW5wdXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0ID0gaW5wdXQgPyBjcmVhdGVMb2NhbChpbnB1dCkudXRjT2Zmc2V0KCkgOiAwO1xuXG4gICAgICAgIHJldHVybiAodGhpcy51dGNPZmZzZXQoKSAtIGlucHV0KSAlIDYwID09PSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCgwKS51dGNPZmZzZXQoKSB8fFxuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCg1KS51dGNPZmZzZXQoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lU2hpZnRlZCgpIHtcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9pc0RTVFNoaWZ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGMgPSB7fSxcbiAgICAgICAgICAgIG90aGVyO1xuXG4gICAgICAgIGNvcHlDb25maWcoYywgdGhpcyk7XG4gICAgICAgIGMgPSBwcmVwYXJlQ29uZmlnKGMpO1xuXG4gICAgICAgIGlmIChjLl9hKSB7XG4gICAgICAgICAgICBvdGhlciA9IGMuX2lzVVRDID8gY3JlYXRlVVRDKGMuX2EpIDogY3JlYXRlTG9jYWwoYy5fYSk7XG4gICAgICAgICAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPVxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCgpICYmIGNvbXBhcmVBcnJheXMoYy5fYSwgb3RoZXIudG9BcnJheSgpKSA+IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNMb2NhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gIXRoaXMuX2lzVVRDIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNVdGNPZmZzZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNVdGMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDICYmIHRoaXMuX29mZnNldCA9PT0gMCA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxuICAgIHZhciBhc3BOZXRSZWdleCA9IC9eKC18XFwrKT8oPzooXFxkKilbLiBdKT8oXFxkKyk6KFxcZCspKD86OihcXGQrKShcXC5cXGQqKT8pPyQvLFxuICAgICAgICAvLyBmcm9tIGh0dHA6Ly9kb2NzLmNsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9naXQvY2xvc3VyZV9nb29nX2RhdGVfZGF0ZS5qcy5zb3VyY2UuaHRtbFxuICAgICAgICAvLyBzb21ld2hhdCBtb3JlIGluIGxpbmUgd2l0aCA0LjQuMy4yIDIwMDQgc3BlYywgYnV0IGFsbG93cyBkZWNpbWFsIGFueXdoZXJlXG4gICAgICAgIC8vIGFuZCBmdXJ0aGVyIG1vZGlmaWVkIHRvIGFsbG93IGZvciBzdHJpbmdzIGNvbnRhaW5pbmcgYm90aCB3ZWVrIGFuZCBkYXlcbiAgICAgICAgaXNvUmVnZXggPSAvXigtfFxcKyk/UCg/OihbLStdP1swLTksLl0qKVkpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVcpPyg/OihbLStdP1swLTksLl0qKUQpPyg/OlQoPzooWy0rXT9bMC05LC5dKilIKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilTKT8pPyQvO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRHVyYXRpb24oaW5wdXQsIGtleSkge1xuICAgICAgICB2YXIgZHVyYXRpb24gPSBpbnB1dCxcbiAgICAgICAgICAgIC8vIG1hdGNoaW5nIGFnYWluc3QgcmVnZXhwIGlzIGV4cGVuc2l2ZSwgZG8gaXQgb24gZGVtYW5kXG4gICAgICAgICAgICBtYXRjaCA9IG51bGwsXG4gICAgICAgICAgICBzaWduLFxuICAgICAgICAgICAgcmV0LFxuICAgICAgICAgICAgZGlmZlJlcztcblxuICAgICAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIG1zOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgICAgIGQ6IGlucHV0Ll9kYXlzLFxuICAgICAgICAgICAgICAgIE06IGlucHV0Ll9tb250aHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSB8fCAhaXNOYU4oK2lucHV0KSkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbltrZXldID0gK2lucHV0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbi5taWxsaXNlY29uZHMgPSAraW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKG1hdGNoID0gYXNwTmV0UmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgICAgICBzaWduID0gbWF0Y2hbMV0gPT09ICctJyA/IC0xIDogMTtcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgZDogdG9JbnQobWF0Y2hbREFURV0pICogc2lnbixcbiAgICAgICAgICAgICAgICBoOiB0b0ludChtYXRjaFtIT1VSXSkgKiBzaWduLFxuICAgICAgICAgICAgICAgIG06IHRvSW50KG1hdGNoW01JTlVURV0pICogc2lnbixcbiAgICAgICAgICAgICAgICBzOiB0b0ludChtYXRjaFtTRUNPTkRdKSAqIHNpZ24sXG4gICAgICAgICAgICAgICAgbXM6IHRvSW50KGFic1JvdW5kKG1hdGNoW01JTExJU0VDT05EXSAqIDEwMDApKSAqIHNpZ24sIC8vIHRoZSBtaWxsaXNlY29uZCBkZWNpbWFsIHBvaW50IGlzIGluY2x1ZGVkIGluIHRoZSBtYXRjaFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICgobWF0Y2ggPSBpc29SZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgICAgIHNpZ24gPSBtYXRjaFsxXSA9PT0gJy0nID8gLTEgOiAxO1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeTogcGFyc2VJc28obWF0Y2hbMl0sIHNpZ24pLFxuICAgICAgICAgICAgICAgIE06IHBhcnNlSXNvKG1hdGNoWzNdLCBzaWduKSxcbiAgICAgICAgICAgICAgICB3OiBwYXJzZUlzbyhtYXRjaFs0XSwgc2lnbiksXG4gICAgICAgICAgICAgICAgZDogcGFyc2VJc28obWF0Y2hbNV0sIHNpZ24pLFxuICAgICAgICAgICAgICAgIGg6IHBhcnNlSXNvKG1hdGNoWzZdLCBzaWduKSxcbiAgICAgICAgICAgICAgICBtOiBwYXJzZUlzbyhtYXRjaFs3XSwgc2lnbiksXG4gICAgICAgICAgICAgICAgczogcGFyc2VJc28obWF0Y2hbOF0sIHNpZ24pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGR1cmF0aW9uID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgKCdmcm9tJyBpbiBkdXJhdGlvbiB8fCAndG8nIGluIGR1cmF0aW9uKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShcbiAgICAgICAgICAgICAgICBjcmVhdGVMb2NhbChkdXJhdGlvbi5mcm9tKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVMb2NhbChkdXJhdGlvbi50bylcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgICAgICBkdXJhdGlvbi5tcyA9IGRpZmZSZXMubWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgZHVyYXRpb24uTSA9IGRpZmZSZXMubW9udGhzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gbmV3IER1cmF0aW9uKGR1cmF0aW9uKTtcblxuICAgICAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkgJiYgaGFzT3duUHJvcChpbnB1dCwgJ19sb2NhbGUnKSkge1xuICAgICAgICAgICAgcmV0Ll9sb2NhbGUgPSBpbnB1dC5fbG9jYWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfaXNWYWxpZCcpKSB7XG4gICAgICAgICAgICByZXQuX2lzVmFsaWQgPSBpbnB1dC5faXNWYWxpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgY3JlYXRlRHVyYXRpb24uZm4gPSBEdXJhdGlvbi5wcm90b3R5cGU7XG4gICAgY3JlYXRlRHVyYXRpb24uaW52YWxpZCA9IGNyZWF0ZUludmFsaWQkMTtcblxuICAgIGZ1bmN0aW9uIHBhcnNlSXNvKGlucCwgc2lnbikge1xuICAgICAgICAvLyBXZSdkIG5vcm1hbGx5IHVzZSB+fmlucCBmb3IgdGhpcywgYnV0IHVuZm9ydHVuYXRlbHkgaXQgYWxzb1xuICAgICAgICAvLyBjb252ZXJ0cyBmbG9hdHMgdG8gaW50cy5cbiAgICAgICAgLy8gaW5wIG1heSBiZSB1bmRlZmluZWQsIHNvIGNhcmVmdWwgY2FsbGluZyByZXBsYWNlIG9uIGl0LlxuICAgICAgICB2YXIgcmVzID0gaW5wICYmIHBhcnNlRmxvYXQoaW5wLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgICAgICAgLy8gYXBwbHkgc2lnbiB3aGlsZSB3ZSdyZSBhdCBpdFxuICAgICAgICByZXR1cm4gKGlzTmFOKHJlcykgPyAwIDogcmVzKSAqIHNpZ247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcikge1xuICAgICAgICB2YXIgcmVzID0ge307XG5cbiAgICAgICAgcmVzLm1vbnRocyA9XG4gICAgICAgICAgICBvdGhlci5tb250aCgpIC0gYmFzZS5tb250aCgpICsgKG90aGVyLnllYXIoKSAtIGJhc2UueWVhcigpKSAqIDEyO1xuICAgICAgICBpZiAoYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpLmlzQWZ0ZXIob3RoZXIpKSB7XG4gICAgICAgICAgICAtLXJlcy5tb250aHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXMubWlsbGlzZWNvbmRzID0gK290aGVyIC0gK2Jhc2UuY2xvbmUoKS5hZGQocmVzLm1vbnRocywgJ00nKTtcblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIGlmICghKGJhc2UuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwIH07XG4gICAgICAgIH1cblxuICAgICAgICBvdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSk7XG4gICAgICAgIGlmIChiYXNlLmlzQmVmb3JlKG90aGVyKSkge1xuICAgICAgICAgICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKG90aGVyLCBiYXNlKTtcbiAgICAgICAgICAgIHJlcy5taWxsaXNlY29uZHMgPSAtcmVzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogcmVtb3ZlICduYW1lJyBhcmcgYWZ0ZXIgZGVwcmVjYXRpb24gaXMgcmVtb3ZlZFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkZGVyKGRpcmVjdGlvbiwgbmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCwgcGVyaW9kKSB7XG4gICAgICAgICAgICB2YXIgZHVyLCB0bXA7XG4gICAgICAgICAgICAvL2ludmVydCB0aGUgYXJndW1lbnRzLCBidXQgY29tcGxhaW4gYWJvdXQgaXRcbiAgICAgICAgICAgIGlmIChwZXJpb2QgIT09IG51bGwgJiYgIWlzTmFOKCtwZXJpb2QpKSB7XG4gICAgICAgICAgICAgICAgZGVwcmVjYXRlU2ltcGxlKFxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAnbW9tZW50KCkuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcocGVyaW9kLCBudW1iZXIpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgbW9tZW50KCkuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcobnVtYmVyLCBwZXJpb2QpLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9hZGQtaW52ZXJ0ZWQtcGFyYW0vIGZvciBtb3JlIGluZm8uJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdG1wID0gdmFsO1xuICAgICAgICAgICAgICAgIHZhbCA9IHBlcmlvZDtcbiAgICAgICAgICAgICAgICBwZXJpb2QgPSB0bXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGR1ciA9IGNyZWF0ZUR1cmF0aW9uKHZhbCwgcGVyaW9kKTtcbiAgICAgICAgICAgIGFkZFN1YnRyYWN0KHRoaXMsIGR1ciwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFN1YnRyYWN0KG1vbSwgZHVyYXRpb24sIGlzQWRkaW5nLCB1cGRhdGVPZmZzZXQpIHtcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHMsXG4gICAgICAgICAgICBkYXlzID0gYWJzUm91bmQoZHVyYXRpb24uX2RheXMpLFxuICAgICAgICAgICAgbW9udGhzID0gYWJzUm91bmQoZHVyYXRpb24uX21vbnRocyk7XG5cbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAvLyBObyBvcFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xuXG4gICAgICAgIGlmIChtb250aHMpIHtcbiAgICAgICAgICAgIHNldE1vbnRoKG1vbSwgZ2V0KG1vbSwgJ01vbnRoJykgKyBtb250aHMgKiBpc0FkZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRheXMpIHtcbiAgICAgICAgICAgIHNldCQxKG1vbSwgJ0RhdGUnLCBnZXQobW9tLCAnRGF0ZScpICsgZGF5cyAqIGlzQWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWlsbGlzZWNvbmRzKSB7XG4gICAgICAgICAgICBtb20uX2Quc2V0VGltZShtb20uX2QudmFsdWVPZigpICsgbWlsbGlzZWNvbmRzICogaXNBZGRpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1cGRhdGVPZmZzZXQpIHtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldChtb20sIGRheXMgfHwgbW9udGhzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhZGQgPSBjcmVhdGVBZGRlcigxLCAnYWRkJyksXG4gICAgICAgIHN1YnRyYWN0ID0gY3JlYXRlQWRkZXIoLTEsICdzdWJ0cmFjdCcpO1xuXG4gICAgZnVuY3Rpb24gaXNTdHJpbmcoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgfHwgaW5wdXQgaW5zdGFuY2VvZiBTdHJpbmc7XG4gICAgfVxuXG4gICAgLy8gdHlwZSBNb21lbnRJbnB1dCA9IE1vbWVudCB8IERhdGUgfCBzdHJpbmcgfCBudW1iZXIgfCAobnVtYmVyIHwgc3RyaW5nKVtdIHwgTW9tZW50SW5wdXRPYmplY3QgfCB2b2lkOyAvLyBudWxsIHwgdW5kZWZpbmVkXG4gICAgZnVuY3Rpb24gaXNNb21lbnRJbnB1dChpbnB1dCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaXNNb21lbnQoaW5wdXQpIHx8XG4gICAgICAgICAgICBpc0RhdGUoaW5wdXQpIHx8XG4gICAgICAgICAgICBpc1N0cmluZyhpbnB1dCkgfHxcbiAgICAgICAgICAgIGlzTnVtYmVyKGlucHV0KSB8fFxuICAgICAgICAgICAgaXNOdW1iZXJPclN0cmluZ0FycmF5KGlucHV0KSB8fFxuICAgICAgICAgICAgaXNNb21lbnRJbnB1dE9iamVjdChpbnB1dCkgfHxcbiAgICAgICAgICAgIGlucHV0ID09PSBudWxsIHx8XG4gICAgICAgICAgICBpbnB1dCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNNb21lbnRJbnB1dE9iamVjdChpbnB1dCkge1xuICAgICAgICB2YXIgb2JqZWN0VGVzdCA9IGlzT2JqZWN0KGlucHV0KSAmJiAhaXNPYmplY3RFbXB0eShpbnB1dCksXG4gICAgICAgICAgICBwcm9wZXJ0eVRlc3QgPSBmYWxzZSxcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgICAgICAgJ3llYXJzJyxcbiAgICAgICAgICAgICAgICAneWVhcicsXG4gICAgICAgICAgICAgICAgJ3knLFxuICAgICAgICAgICAgICAgICdtb250aHMnLFxuICAgICAgICAgICAgICAgICdtb250aCcsXG4gICAgICAgICAgICAgICAgJ00nLFxuICAgICAgICAgICAgICAgICdkYXlzJyxcbiAgICAgICAgICAgICAgICAnZGF5JyxcbiAgICAgICAgICAgICAgICAnZCcsXG4gICAgICAgICAgICAgICAgJ2RhdGVzJyxcbiAgICAgICAgICAgICAgICAnZGF0ZScsXG4gICAgICAgICAgICAgICAgJ0QnLFxuICAgICAgICAgICAgICAgICdob3VycycsXG4gICAgICAgICAgICAgICAgJ2hvdXInLFxuICAgICAgICAgICAgICAgICdoJyxcbiAgICAgICAgICAgICAgICAnbWludXRlcycsXG4gICAgICAgICAgICAgICAgJ21pbnV0ZScsXG4gICAgICAgICAgICAgICAgJ20nLFxuICAgICAgICAgICAgICAgICdzZWNvbmRzJyxcbiAgICAgICAgICAgICAgICAnc2Vjb25kJyxcbiAgICAgICAgICAgICAgICAncycsXG4gICAgICAgICAgICAgICAgJ21pbGxpc2Vjb25kcycsXG4gICAgICAgICAgICAgICAgJ21pbGxpc2Vjb25kJyxcbiAgICAgICAgICAgICAgICAnbXMnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBwcm9wZXJ0eTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgcHJvcGVydHlUZXN0ID0gcHJvcGVydHlUZXN0IHx8IGhhc093blByb3AoaW5wdXQsIHByb3BlcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmplY3RUZXN0ICYmIHByb3BlcnR5VGVzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc051bWJlck9yU3RyaW5nQXJyYXkoaW5wdXQpIHtcbiAgICAgICAgdmFyIGFycmF5VGVzdCA9IGlzQXJyYXkoaW5wdXQpLFxuICAgICAgICAgICAgZGF0YVR5cGVUZXN0ID0gZmFsc2U7XG4gICAgICAgIGlmIChhcnJheVRlc3QpIHtcbiAgICAgICAgICAgIGRhdGFUeXBlVGVzdCA9XG4gICAgICAgICAgICAgICAgaW5wdXQuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNOdW1iZXIoaXRlbSkgJiYgaXNTdHJpbmcoaW5wdXQpO1xuICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXlUZXN0ICYmIGRhdGFUeXBlVGVzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0NhbGVuZGFyU3BlYyhpbnB1dCkge1xuICAgICAgICB2YXIgb2JqZWN0VGVzdCA9IGlzT2JqZWN0KGlucHV0KSAmJiAhaXNPYmplY3RFbXB0eShpbnB1dCksXG4gICAgICAgICAgICBwcm9wZXJ0eVRlc3QgPSBmYWxzZSxcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgICAgICAgJ3NhbWVEYXknLFxuICAgICAgICAgICAgICAgICduZXh0RGF5JyxcbiAgICAgICAgICAgICAgICAnbGFzdERheScsXG4gICAgICAgICAgICAgICAgJ25leHRXZWVrJyxcbiAgICAgICAgICAgICAgICAnbGFzdFdlZWsnLFxuICAgICAgICAgICAgICAgICdzYW1lRWxzZScsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHByb3BlcnR5O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICBwcm9wZXJ0eVRlc3QgPSBwcm9wZXJ0eVRlc3QgfHwgaGFzT3duUHJvcChpbnB1dCwgcHJvcGVydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdFRlc3QgJiYgcHJvcGVydHlUZXN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENhbGVuZGFyRm9ybWF0KG15TW9tZW50LCBub3cpIHtcbiAgICAgICAgdmFyIGRpZmYgPSBteU1vbWVudC5kaWZmKG5vdywgJ2RheXMnLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGRpZmYgPCAtNlxuICAgICAgICAgICAgPyAnc2FtZUVsc2UnXG4gICAgICAgICAgICA6IGRpZmYgPCAtMVxuICAgICAgICAgICAgPyAnbGFzdFdlZWsnXG4gICAgICAgICAgICA6IGRpZmYgPCAwXG4gICAgICAgICAgICA/ICdsYXN0RGF5J1xuICAgICAgICAgICAgOiBkaWZmIDwgMVxuICAgICAgICAgICAgPyAnc2FtZURheSdcbiAgICAgICAgICAgIDogZGlmZiA8IDJcbiAgICAgICAgICAgID8gJ25leHREYXknXG4gICAgICAgICAgICA6IGRpZmYgPCA3XG4gICAgICAgICAgICA/ICduZXh0V2VlaydcbiAgICAgICAgICAgIDogJ3NhbWVFbHNlJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxlbmRhciQxKHRpbWUsIGZvcm1hdHMpIHtcbiAgICAgICAgLy8gU3VwcG9ydCBmb3Igc2luZ2xlIHBhcmFtZXRlciwgZm9ybWF0cyBvbmx5IG92ZXJsb2FkIHRvIHRoZSBjYWxlbmRhciBmdW5jdGlvblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgICAgICAgICB0aW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGZvcm1hdHMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTW9tZW50SW5wdXQoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICAgICAgICAgIHRpbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgZm9ybWF0cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDYWxlbmRhclNwZWMoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICAgICAgICAgIGZvcm1hdHMgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgdGltZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBXZSB3YW50IHRvIGNvbXBhcmUgdGhlIHN0YXJ0IG9mIHRvZGF5LCB2cyB0aGlzLlxuICAgICAgICAvLyBHZXR0aW5nIHN0YXJ0LW9mLXRvZGF5IGRlcGVuZHMgb24gd2hldGhlciB3ZSdyZSBsb2NhbC91dGMvb2Zmc2V0IG9yIG5vdC5cbiAgICAgICAgdmFyIG5vdyA9IHRpbWUgfHwgY3JlYXRlTG9jYWwoKSxcbiAgICAgICAgICAgIHNvZCA9IGNsb25lV2l0aE9mZnNldChub3csIHRoaXMpLnN0YXJ0T2YoJ2RheScpLFxuICAgICAgICAgICAgZm9ybWF0ID0gaG9va3MuY2FsZW5kYXJGb3JtYXQodGhpcywgc29kKSB8fCAnc2FtZUVsc2UnLFxuICAgICAgICAgICAgb3V0cHV0ID1cbiAgICAgICAgICAgICAgICBmb3JtYXRzICYmXG4gICAgICAgICAgICAgICAgKGlzRnVuY3Rpb24oZm9ybWF0c1tmb3JtYXRdKVxuICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdHNbZm9ybWF0XS5jYWxsKHRoaXMsIG5vdylcbiAgICAgICAgICAgICAgICAgICAgOiBmb3JtYXRzW2Zvcm1hdF0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdChcbiAgICAgICAgICAgIG91dHB1dCB8fCB0aGlzLmxvY2FsZURhdGEoKS5jYWxlbmRhcihmb3JtYXQsIHRoaXMsIGNyZWF0ZUxvY2FsKG5vdykpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTW9tZW50KHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQWZ0ZXIoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpIHx8ICdtaWxsaXNlY29uZCc7XG4gICAgICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID4gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxJbnB1dC52YWx1ZU9mKCkgPCB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNCZWZvcmUoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpIHx8ICdtaWxsaXNlY29uZCc7XG4gICAgICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmVuZE9mKHVuaXRzKS52YWx1ZU9mKCkgPCBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQmV0d2Vlbihmcm9tLCB0bywgdW5pdHMsIGluY2x1c2l2aXR5KSB7XG4gICAgICAgIHZhciBsb2NhbEZyb20gPSBpc01vbWVudChmcm9tKSA/IGZyb20gOiBjcmVhdGVMb2NhbChmcm9tKSxcbiAgICAgICAgICAgIGxvY2FsVG8gPSBpc01vbWVudCh0bykgPyB0byA6IGNyZWF0ZUxvY2FsKHRvKTtcbiAgICAgICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxGcm9tLmlzVmFsaWQoKSAmJiBsb2NhbFRvLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpbmNsdXNpdml0eSA9IGluY2x1c2l2aXR5IHx8ICcoKSc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoaW5jbHVzaXZpdHlbMF0gPT09ICcoJ1xuICAgICAgICAgICAgICAgID8gdGhpcy5pc0FmdGVyKGxvY2FsRnJvbSwgdW5pdHMpXG4gICAgICAgICAgICAgICAgOiAhdGhpcy5pc0JlZm9yZShsb2NhbEZyb20sIHVuaXRzKSkgJiZcbiAgICAgICAgICAgIChpbmNsdXNpdml0eVsxXSA9PT0gJyknXG4gICAgICAgICAgICAgICAgPyB0aGlzLmlzQmVmb3JlKGxvY2FsVG8sIHVuaXRzKVxuICAgICAgICAgICAgICAgIDogIXRoaXMuaXNBZnRlcihsb2NhbFRvLCB1bml0cykpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTYW1lKGlucHV0LCB1bml0cykge1xuICAgICAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpLFxuICAgICAgICAgICAgaW5wdXRNcztcbiAgICAgICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cykgfHwgJ21pbGxpc2Vjb25kJztcbiAgICAgICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPT09IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5wdXRNcyA9IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpIDw9IGlucHV0TXMgJiZcbiAgICAgICAgICAgICAgICBpbnB1dE1zIDw9IHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTYW1lT3JBZnRlcihpbnB1dCwgdW5pdHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTYW1lKGlucHV0LCB1bml0cykgfHwgdGhpcy5pc0FmdGVyKGlucHV0LCB1bml0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTYW1lT3JCZWZvcmUoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNCZWZvcmUoaW5wdXQsIHVuaXRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaWZmKGlucHV0LCB1bml0cywgYXNGbG9hdCkge1xuICAgICAgICB2YXIgdGhhdCwgem9uZURlbHRhLCBvdXRwdXQ7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQgPSBjbG9uZVdpdGhPZmZzZXQoaW5wdXQsIHRoaXMpO1xuXG4gICAgICAgIGlmICghdGhhdC5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cblxuICAgICAgICB6b25lRGVsdGEgPSAodGhhdC51dGNPZmZzZXQoKSAtIHRoaXMudXRjT2Zmc2V0KCkpICogNmU0O1xuXG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuXG4gICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KSAvIDEyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KSAvIDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyAxZTM7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDBcbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDZlNDtcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gMTAwMCAqIDYwXG4gICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gMzZlNTtcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gMTAwMCAqIDYwICogNjBcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0IC0gem9uZURlbHRhKSAvIDg2NGU1O1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0LCBuZWdhdGUgZHN0XG4gICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQgLSB6b25lRGVsdGEpIC8gNjA0OGU1O1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0ICogNywgbmVnYXRlIGRzdFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSB0aGlzIC0gdGhhdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc0Zsb2F0ID8gb3V0cHV0IDogYWJzRmxvb3Iob3V0cHV0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb250aERpZmYoYSwgYikge1xuICAgICAgICBpZiAoYS5kYXRlKCkgPCBiLmRhdGUoKSkge1xuICAgICAgICAgICAgLy8gZW5kLW9mLW1vbnRoIGNhbGN1bGF0aW9ucyB3b3JrIGNvcnJlY3Qgd2hlbiB0aGUgc3RhcnQgbW9udGggaGFzIG1vcmVcbiAgICAgICAgICAgIC8vIGRheXMgdGhhbiB0aGUgZW5kIG1vbnRoLlxuICAgICAgICAgICAgcmV0dXJuIC1tb250aERpZmYoYiwgYSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGlmZmVyZW5jZSBpbiBtb250aHNcbiAgICAgICAgdmFyIHdob2xlTW9udGhEaWZmID0gKGIueWVhcigpIC0gYS55ZWFyKCkpICogMTIgKyAoYi5tb250aCgpIC0gYS5tb250aCgpKSxcbiAgICAgICAgICAgIC8vIGIgaXMgaW4gKGFuY2hvciAtIDEgbW9udGgsIGFuY2hvciArIDEgbW9udGgpXG4gICAgICAgICAgICBhbmNob3IgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmLCAnbW9udGhzJyksXG4gICAgICAgICAgICBhbmNob3IyLFxuICAgICAgICAgICAgYWRqdXN0O1xuXG4gICAgICAgIGlmIChiIC0gYW5jaG9yIDwgMCkge1xuICAgICAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgLSAxLCAnbW9udGhzJyk7XG4gICAgICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvciAtIGFuY2hvcjIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgKyAxLCAnbW9udGhzJyk7XG4gICAgICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvcjIgLSBhbmNob3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jaGVjayBmb3IgbmVnYXRpdmUgemVybywgcmV0dXJuIHplcm8gaWYgbmVnYXRpdmUgemVyb1xuICAgICAgICByZXR1cm4gLSh3aG9sZU1vbnRoRGlmZiArIGFkanVzdCkgfHwgMDtcbiAgICB9XG5cbiAgICBob29rcy5kZWZhdWx0Rm9ybWF0ID0gJ1lZWVktTU0tRERUSEg6bW06c3NaJztcbiAgICBob29rcy5kZWZhdWx0Rm9ybWF0VXRjID0gJ1lZWVktTU0tRERUSEg6bW06c3NbWl0nO1xuXG4gICAgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkubG9jYWxlKCdlbicpLmZvcm1hdCgnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzIFtHTVRdWlonKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0lTT1N0cmluZyhrZWVwT2Zmc2V0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1dGMgPSBrZWVwT2Zmc2V0ICE9PSB0cnVlLFxuICAgICAgICAgICAgbSA9IHV0YyA/IHRoaXMuY2xvbmUoKS51dGMoKSA6IHRoaXM7XG4gICAgICAgIGlmIChtLnllYXIoKSA8IDAgfHwgbS55ZWFyKCkgPiA5OTk5KSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KFxuICAgICAgICAgICAgICAgIG0sXG4gICAgICAgICAgICAgICAgdXRjXG4gICAgICAgICAgICAgICAgICAgID8gJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXSdcbiAgICAgICAgICAgICAgICAgICAgOiAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTWidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcpKSB7XG4gICAgICAgICAgICAvLyBuYXRpdmUgaW1wbGVtZW50YXRpb24gaXMgfjUweCBmYXN0ZXIsIHVzZSBpdCB3aGVuIHdlIGNhblxuICAgICAgICAgICAgaWYgKHV0Yykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSArIHRoaXMudXRjT2Zmc2V0KCkgKiA2MCAqIDEwMDApXG4gICAgICAgICAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdaJywgZm9ybWF0TW9tZW50KG0sICdaJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQoXG4gICAgICAgICAgICBtLFxuICAgICAgICAgICAgdXRjID8gJ1lZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nIDogJ1lZWVktTU0tRERbVF1ISDptbTpzcy5TU1NaJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhIGh1bWFuIHJlYWRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGEgbW9tZW50IHRoYXQgY2FuXG4gICAgICogYWxzbyBiZSBldmFsdWF0ZWQgdG8gZ2V0IGEgbmV3IG1vbWVudCB3aGljaCBpcyB0aGUgc2FtZVxuICAgICAqXG4gICAgICogQGxpbmsgaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0L2RvY3MvYXBpL3V0aWwuaHRtbCN1dGlsX2N1c3RvbV9pbnNwZWN0X2Z1bmN0aW9uX29uX29iamVjdHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbnNwZWN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ21vbWVudC5pbnZhbGlkKC8qICcgKyB0aGlzLl9pICsgJyAqLyknO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmdW5jID0gJ21vbWVudCcsXG4gICAgICAgICAgICB6b25lID0gJycsXG4gICAgICAgICAgICBwcmVmaXgsXG4gICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgZGF0ZXRpbWUsXG4gICAgICAgICAgICBzdWZmaXg7XG4gICAgICAgIGlmICghdGhpcy5pc0xvY2FsKCkpIHtcbiAgICAgICAgICAgIGZ1bmMgPSB0aGlzLnV0Y09mZnNldCgpID09PSAwID8gJ21vbWVudC51dGMnIDogJ21vbWVudC5wYXJzZVpvbmUnO1xuICAgICAgICAgICAgem9uZSA9ICdaJztcbiAgICAgICAgfVxuICAgICAgICBwcmVmaXggPSAnWycgKyBmdW5jICsgJyhcIl0nO1xuICAgICAgICB5ZWFyID0gMCA8PSB0aGlzLnllYXIoKSAmJiB0aGlzLnllYXIoKSA8PSA5OTk5ID8gJ1lZWVknIDogJ1lZWVlZWSc7XG4gICAgICAgIGRhdGV0aW1lID0gJy1NTS1ERFtUXUhIOm1tOnNzLlNTUyc7XG4gICAgICAgIHN1ZmZpeCA9IHpvbmUgKyAnW1wiKV0nO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdChwcmVmaXggKyB5ZWFyICsgZGF0ZXRpbWUgKyBzdWZmaXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdChpbnB1dFN0cmluZykge1xuICAgICAgICBpZiAoIWlucHV0U3RyaW5nKSB7XG4gICAgICAgICAgICBpbnB1dFN0cmluZyA9IHRoaXMuaXNVdGMoKVxuICAgICAgICAgICAgICAgID8gaG9va3MuZGVmYXVsdEZvcm1hdFV0Y1xuICAgICAgICAgICAgICAgIDogaG9va3MuZGVmYXVsdEZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3V0cHV0ID0gZm9ybWF0TW9tZW50KHRoaXMsIGlucHV0U3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLnBvc3Rmb3JtYXQob3V0cHV0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmcm9tKHRpbWUsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8IGNyZWF0ZUxvY2FsKHRpbWUpLmlzVmFsaWQoKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oeyB0bzogdGhpcywgZnJvbTogdGltZSB9KVxuICAgICAgICAgICAgICAgIC5sb2NhbGUodGhpcy5sb2NhbGUoKSlcbiAgICAgICAgICAgICAgICAuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmcm9tTm93KHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbShjcmVhdGVMb2NhbCgpLCB3aXRob3V0U3VmZml4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0byh0aW1lLCB3aXRob3V0U3VmZml4KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICAgICAoKGlzTW9tZW50KHRpbWUpICYmIHRpbWUuaXNWYWxpZCgpKSB8fCBjcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHsgZnJvbTogdGhpcywgdG86IHRpbWUgfSlcbiAgICAgICAgICAgICAgICAubG9jYWxlKHRoaXMubG9jYWxlKCkpXG4gICAgICAgICAgICAgICAgLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9Ob3cod2l0aG91dFN1ZmZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy50byhjcmVhdGVMb2NhbCgpLCB3aXRob3V0U3VmZml4KTtcbiAgICB9XG5cbiAgICAvLyBJZiBwYXNzZWQgYSBsb2NhbGUga2V5LCBpdCB3aWxsIHNldCB0aGUgbG9jYWxlIGZvciB0aGlzXG4gICAgLy8gaW5zdGFuY2UuICBPdGhlcndpc2UsIGl0IHdpbGwgcmV0dXJuIHRoZSBsb2NhbGUgY29uZmlndXJhdGlvblxuICAgIC8vIHZhcmlhYmxlcyBmb3IgdGhpcyBpbnN0YW5jZS5cbiAgICBmdW5jdGlvbiBsb2NhbGUoa2V5KSB7XG4gICAgICAgIHZhciBuZXdMb2NhbGVEYXRhO1xuXG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0xvY2FsZURhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgICAgIGlmIChuZXdMb2NhbGVEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2NhbGUgPSBuZXdMb2NhbGVEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGFuZyA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ21vbWVudCgpLmxhbmcoKSBpcyBkZXByZWNhdGVkLiBJbnN0ZWFkLCB1c2UgbW9tZW50KCkubG9jYWxlRGF0YSgpIHRvIGdldCB0aGUgbGFuZ3VhZ2UgY29uZmlndXJhdGlvbi4gVXNlIG1vbWVudCgpLmxvY2FsZSgpIHRvIGNoYW5nZSBsYW5ndWFnZXMuJyxcbiAgICAgICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICAgIH1cblxuICAgIHZhciBNU19QRVJfU0VDT05EID0gMTAwMCxcbiAgICAgICAgTVNfUEVSX01JTlVURSA9IDYwICogTVNfUEVSX1NFQ09ORCxcbiAgICAgICAgTVNfUEVSX0hPVVIgPSA2MCAqIE1TX1BFUl9NSU5VVEUsXG4gICAgICAgIE1TX1BFUl80MDBfWUVBUlMgPSAoMzY1ICogNDAwICsgOTcpICogMjQgKiBNU19QRVJfSE9VUjtcblxuICAgIC8vIGFjdHVhbCBtb2R1bG8gLSBoYW5kbGVzIG5lZ2F0aXZlIG51bWJlcnMgKGZvciBkYXRlcyBiZWZvcmUgMTk3MCk6XG4gICAgZnVuY3Rpb24gbW9kJDEoZGl2aWRlbmQsIGRpdmlzb3IpIHtcbiAgICAgICAgcmV0dXJuICgoZGl2aWRlbmQgJSBkaXZpc29yKSArIGRpdmlzb3IpICUgZGl2aXNvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbFN0YXJ0T2ZEYXRlKHksIG0sIGQpIHtcbiAgICAgICAgLy8gdGhlIGRhdGUgY29uc3RydWN0b3IgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICAgICAgLy8gcHJlc2VydmUgbGVhcCB5ZWFycyB1c2luZyBhIGZ1bGwgNDAwIHllYXIgY3ljbGUsIHRoZW4gcmVzZXRcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ICsgNDAwLCBtLCBkKSAtIE1TX1BFUl80MDBfWUVBUlM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoeSwgbSwgZCkudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXRjU3RhcnRPZkRhdGUoeSwgbSwgZCkge1xuICAgICAgICAvLyBEYXRlLlVUQyByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICAgICAgcmV0dXJuIERhdGUuVVRDKHkgKyA0MDAsIG0sIGQpIC0gTVNfUEVSXzQwMF9ZRUFSUztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRlLlVUQyh5LCBtLCBkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0T2YodW5pdHMpIHtcbiAgICAgICAgdmFyIHRpbWUsIHN0YXJ0T2ZEYXRlO1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgaWYgKHVuaXRzID09PSB1bmRlZmluZWQgfHwgdW5pdHMgPT09ICdtaWxsaXNlY29uZCcgfHwgIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0T2ZEYXRlID0gdGhpcy5faXNVVEMgPyB1dGNTdGFydE9mRGF0ZSA6IGxvY2FsU3RhcnRPZkRhdGU7XG5cbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCAwLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSAtICh0aGlzLm1vbnRoKCkgJSAzKSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGUoKSAtIHRoaXMud2Vla2RheSgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lzb1dlZWsnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSAodGhpcy5pc29XZWVrZGF5KCkgLSAxKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCksIHRoaXMuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICB0aW1lIC09IG1vZCQxKFxuICAgICAgICAgICAgICAgICAgICB0aW1lICsgKHRoaXMuX2lzVVRDID8gMCA6IHRoaXMudXRjT2Zmc2V0KCkgKiBNU19QRVJfTUlOVVRFKSxcbiAgICAgICAgICAgICAgICAgICAgTVNfUEVSX0hPVVJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSAtPSBtb2QkMSh0aW1lLCBNU19QRVJfTUlOVVRFKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIHRpbWUgLT0gbW9kJDEodGltZSwgTVNfUEVSX1NFQ09ORCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kLnNldFRpbWUodGltZSk7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kT2YodW5pdHMpIHtcbiAgICAgICAgdmFyIHRpbWUsIHN0YXJ0T2ZEYXRlO1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgaWYgKHVuaXRzID09PSB1bmRlZmluZWQgfHwgdW5pdHMgPT09ICdtaWxsaXNlY29uZCcgfHwgIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0T2ZEYXRlID0gdGhpcy5faXNVVEMgPyB1dGNTdGFydE9mRGF0ZSA6IGxvY2FsU3RhcnRPZkRhdGU7XG5cbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpICsgMSwgMCwgMSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICAgICAgdGltZSA9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCkgLSAodGhpcy5tb250aCgpICUgMykgKyAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSArIDEsIDEpIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgIHRpbWUgPVxuICAgICAgICAgICAgICAgICAgICBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSB0aGlzLndlZWtkYXkoKSArIDdcbiAgICAgICAgICAgICAgICAgICAgKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgICAgICAgICB0aW1lID1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgpIC0gKHRoaXMuaXNvV2Vla2RheSgpIC0gMSkgKyA3XG4gICAgICAgICAgICAgICAgICAgICkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpLCB0aGlzLmRhdGUoKSArIDEpIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICB0aW1lICs9XG4gICAgICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSIC1cbiAgICAgICAgICAgICAgICAgICAgbW9kJDEoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lICsgKHRoaXMuX2lzVVRDID8gMCA6IHRoaXMudXRjT2Zmc2V0KCkgKiBNU19QRVJfTUlOVVRFKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSXG4gICAgICAgICAgICAgICAgICAgICkgLVxuICAgICAgICAgICAgICAgICAgICAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSArPSBNU19QRVJfTUlOVVRFIC0gbW9kJDEodGltZSwgTVNfUEVSX01JTlVURSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSArPSBNU19QRVJfU0VDT05EIC0gbW9kJDEodGltZSwgTVNfUEVSX1NFQ09ORCkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZC5zZXRUaW1lKHRpbWUpO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kLnZhbHVlT2YoKSAtICh0aGlzLl9vZmZzZXQgfHwgMCkgKiA2MDAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bml4KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKSAvIDEwMDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0FycmF5KCkge1xuICAgICAgICB2YXIgbSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBtLnllYXIoKSxcbiAgICAgICAgICAgIG0ubW9udGgoKSxcbiAgICAgICAgICAgIG0uZGF0ZSgpLFxuICAgICAgICAgICAgbS5ob3VyKCksXG4gICAgICAgICAgICBtLm1pbnV0ZSgpLFxuICAgICAgICAgICAgbS5zZWNvbmQoKSxcbiAgICAgICAgICAgIG0ubWlsbGlzZWNvbmQoKSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b09iamVjdCgpIHtcbiAgICAgICAgdmFyIG0gPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeWVhcnM6IG0ueWVhcigpLFxuICAgICAgICAgICAgbW9udGhzOiBtLm1vbnRoKCksXG4gICAgICAgICAgICBkYXRlOiBtLmRhdGUoKSxcbiAgICAgICAgICAgIGhvdXJzOiBtLmhvdXJzKCksXG4gICAgICAgICAgICBtaW51dGVzOiBtLm1pbnV0ZXMoKSxcbiAgICAgICAgICAgIHNlY29uZHM6IG0uc2Vjb25kcygpLFxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzOiBtLm1pbGxpc2Vjb25kcygpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgICAgLy8gbmV3IERhdGUoTmFOKS50b0pTT04oKSA9PT0gbnVsbFxuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLnRvSVNPU3RyaW5nKCkgOiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVmFsaWQkMigpIHtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2luZ0ZsYWdzKCkge1xuICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCBnZXRQYXJzaW5nRmxhZ3ModGhpcykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludmFsaWRBdCgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcnNpbmdGbGFncyh0aGlzKS5vdmVyZmxvdztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGlvbkRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnB1dDogdGhpcy5faSxcbiAgICAgICAgICAgIGZvcm1hdDogdGhpcy5fZixcbiAgICAgICAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlLFxuICAgICAgICAgICAgaXNVVEM6IHRoaXMuX2lzVVRDLFxuICAgICAgICAgICAgc3RyaWN0OiB0aGlzLl9zdHJpY3QsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ04nLCAwLCAwLCAnZXJhQWJicicpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdOTicsIDAsIDAsICdlcmFBYmJyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ05OTicsIDAsIDAsICdlcmFBYmJyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ05OTk4nLCAwLCAwLCAnZXJhTmFtZScpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdOTk5OTicsIDAsIDAsICdlcmFOYXJyb3cnKTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCd5JywgWyd5JywgMV0sICd5bycsICdlcmFZZWFyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ3knLCBbJ3l5JywgMl0sIDAsICdlcmFZZWFyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ3knLCBbJ3l5eScsIDNdLCAwLCAnZXJhWWVhcicpO1xuICAgIGFkZEZvcm1hdFRva2VuKCd5JywgWyd5eXl5JywgNF0sIDAsICdlcmFZZWFyJyk7XG5cbiAgICBhZGRSZWdleFRva2VuKCdOJywgbWF0Y2hFcmFBYmJyKTtcbiAgICBhZGRSZWdleFRva2VuKCdOTicsIG1hdGNoRXJhQWJicik7XG4gICAgYWRkUmVnZXhUb2tlbignTk5OJywgbWF0Y2hFcmFBYmJyKTtcbiAgICBhZGRSZWdleFRva2VuKCdOTk5OJywgbWF0Y2hFcmFOYW1lKTtcbiAgICBhZGRSZWdleFRva2VuKCdOTk5OTicsIG1hdGNoRXJhTmFycm93KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydOJywgJ05OJywgJ05OTicsICdOTk5OJywgJ05OTk5OJ10sIGZ1bmN0aW9uIChcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGFycmF5LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHRva2VuXG4gICAgKSB7XG4gICAgICAgIHZhciBlcmEgPSBjb25maWcuX2xvY2FsZS5lcmFzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgICAgIGlmIChlcmEpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVyYSA9IGVyYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRFcmEgPSBpbnB1dDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWRkUmVnZXhUb2tlbigneScsIG1hdGNoVW5zaWduZWQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ3l5JywgbWF0Y2hVbnNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbigneXl5JywgbWF0Y2hVbnNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbigneXl5eScsIG1hdGNoVW5zaWduZWQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ3lvJywgbWF0Y2hFcmFZZWFyT3JkaW5hbCk7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsneScsICd5eScsICd5eXknLCAneXl5eSddLCBZRUFSKTtcbiAgICBhZGRQYXJzZVRva2VuKFsneW8nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB2YXIgbWF0Y2g7XG4gICAgICAgIGlmIChjb25maWcuX2xvY2FsZS5fZXJhWWVhck9yZGluYWxSZWdleCkge1xuICAgICAgICAgICAgbWF0Y2ggPSBpbnB1dC5tYXRjaChjb25maWcuX2xvY2FsZS5fZXJhWWVhck9yZGluYWxSZWdleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLl9sb2NhbGUuZXJhWWVhck9yZGluYWxQYXJzZSkge1xuICAgICAgICAgICAgYXJyYXlbWUVBUl0gPSBjb25maWcuX2xvY2FsZS5lcmFZZWFyT3JkaW5hbFBhcnNlKGlucHV0LCBtYXRjaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheVtZRUFSXSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGxvY2FsZUVyYXMobSwgZm9ybWF0KSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5fZXJhcyB8fCBnZXRMb2NhbGUoJ2VuJykuX2VyYXM7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgZXJhc1tpXS5zaW5jZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IGhvb2tzKGVyYXNbaV0uc2luY2UpLnN0YXJ0T2YoJ2RheScpO1xuICAgICAgICAgICAgICAgICAgICBlcmFzW2ldLnNpbmNlID0gZGF0ZS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgICAgICAgICAgZXJhc1tpXS51bnRpbCA9ICtJbmZpbml0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICAgICAgICAgICAgICBkYXRlID0gaG9va3MoZXJhc1tpXS51bnRpbCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgICAgICBlcmFzW2ldLnVudGlsID0gZGF0ZS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcmFzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2FsZUVyYXNQYXJzZShlcmFOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5lcmFzKCksXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYWJicixcbiAgICAgICAgICAgIG5hcnJvdztcbiAgICAgICAgZXJhTmFtZSA9IGVyYU5hbWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIG5hbWUgPSBlcmFzW2ldLm5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGFiYnIgPSBlcmFzW2ldLmFiYnIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIG5hcnJvdyA9IGVyYXNbaV0ubmFycm93LnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTk4nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdOTk4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFiYnIgPT09IGVyYU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ05OTk4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IGVyYU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ05OTk5OJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYXJyb3cgPT09IGVyYU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoW25hbWUsIGFiYnIsIG5hcnJvd10uaW5kZXhPZihlcmFOYW1lKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVFcmFzQ29udmVydFllYXIoZXJhLCB5ZWFyKSB7XG4gICAgICAgIHZhciBkaXIgPSBlcmEuc2luY2UgPD0gZXJhLnVudGlsID8gKzEgOiAtMTtcbiAgICAgICAgaWYgKHllYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvb2tzKGVyYS5zaW5jZSkueWVhcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGhvb2tzKGVyYS5zaW5jZSkueWVhcigpICsgKHllYXIgLSBlcmEub2Zmc2V0KSAqIGRpcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVyYU5hbWUoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICAgICAgdmFsID0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcblxuICAgICAgICAgICAgaWYgKGVyYXNbaV0uc2luY2UgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0ubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXJhTmFycm93KCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG5cbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hcnJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hcnJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFcmFBYmJyKCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG5cbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLmFiYnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5hYmJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVyYVllYXIoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIGRpcixcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgZGlyID0gZXJhc1tpXS5zaW5jZSA8PSBlcmFzW2ldLnVudGlsID8gKzEgOiAtMTtcblxuICAgICAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICAgICAgdmFsID0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkgfHxcbiAgICAgICAgICAgICAgICAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAodGhpcy55ZWFyKCkgLSBob29rcyhlcmFzW2ldLnNpbmNlKS55ZWFyKCkpICogZGlyICtcbiAgICAgICAgICAgICAgICAgICAgZXJhc1tpXS5vZmZzZXRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMueWVhcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVyYXNOYW1lUmVnZXgoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfZXJhc05hbWVSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlRXJhc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzU3RyaWN0ID8gdGhpcy5fZXJhc05hbWVSZWdleCA6IHRoaXMuX2VyYXNSZWdleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcmFzQWJiclJlZ2V4KGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX2VyYXNBYmJyUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZUVyYXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1N0cmljdCA/IHRoaXMuX2VyYXNBYmJyUmVnZXggOiB0aGlzLl9lcmFzUmVnZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJhc05hcnJvd1JlZ2V4KGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX2VyYXNOYXJyb3dSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlRXJhc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzU3RyaWN0ID8gdGhpcy5fZXJhc05hcnJvd1JlZ2V4IDogdGhpcy5fZXJhc1JlZ2V4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoRXJhQWJicihpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZXJhc0FiYnJSZWdleChpc1N0cmljdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF0Y2hFcmFOYW1lKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5lcmFzTmFtZVJlZ2V4KGlzU3RyaWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaEVyYU5hcnJvdyhpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZXJhc05hcnJvd1JlZ2V4KGlzU3RyaWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaEVyYVllYXJPcmRpbmFsKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5fZXJhWWVhck9yZGluYWxSZWdleCB8fCBtYXRjaFVuc2lnbmVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVFcmFzUGFyc2UoKSB7XG4gICAgICAgIHZhciBhYmJyUGllY2VzID0gW10sXG4gICAgICAgICAgICBuYW1lUGllY2VzID0gW10sXG4gICAgICAgICAgICBuYXJyb3dQaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmVyYXMoKTtcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIG5hbWVQaWVjZXMucHVzaChyZWdleEVzY2FwZShlcmFzW2ldLm5hbWUpKTtcbiAgICAgICAgICAgIGFiYnJQaWVjZXMucHVzaChyZWdleEVzY2FwZShlcmFzW2ldLmFiYnIpKTtcbiAgICAgICAgICAgIG5hcnJvd1BpZWNlcy5wdXNoKHJlZ2V4RXNjYXBlKGVyYXNbaV0ubmFycm93KSk7XG5cbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2gocmVnZXhFc2NhcGUoZXJhc1tpXS5uYW1lKSk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHJlZ2V4RXNjYXBlKGVyYXNbaV0uYWJicikpO1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChyZWdleEVzY2FwZShlcmFzW2ldLm5hcnJvdykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZXJhc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgICAgICB0aGlzLl9lcmFzTmFtZVJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbmFtZVBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgICAgIHRoaXMuX2VyYXNBYmJyUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBhYmJyUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICAgICAgdGhpcy5fZXJhc05hcnJvd1JlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICdeKCcgKyBuYXJyb3dQaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAgICAgJ2knXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydnZycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndlZWtZZWFyKCkgJSAxMDA7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ0dHJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMDtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4odG9rZW4sIGdldHRlcikge1xuICAgICAgICBhZGRGb3JtYXRUb2tlbigwLCBbdG9rZW4sIHRva2VuLmxlbmd0aF0sIDAsIGdldHRlcik7XG4gICAgfVxuXG4gICAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZycsICd3ZWVrWWVhcicpO1xuICAgIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2dnJywgJ3dlZWtZZWFyJyk7XG4gICAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHRycsICdpc29XZWVrWWVhcicpO1xuICAgIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0dHJywgJ2lzb1dlZWtZZWFyJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ3dlZWtZZWFyJywgJ2dnJyk7XG4gICAgYWRkVW5pdEFsaWFzKCdpc29XZWVrWWVhcicsICdHRycpO1xuXG4gICAgLy8gUFJJT1JJVFlcblxuICAgIGFkZFVuaXRQcmlvcml0eSgnd2Vla1llYXInLCAxKTtcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtZZWFyJywgMSk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdHJywgbWF0Y2hTaWduZWQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2cnLCBtYXRjaFNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbignR0cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignZ2cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignR0dHRycsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbiAgICBhZGRSZWdleFRva2VuKCdnZ2dnJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0dHR0dHJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2dnZ2dnJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oWydnZ2dnJywgJ2dnZ2dnJywgJ0dHR0cnLCAnR0dHR0cnXSwgZnVuY3Rpb24gKFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgd2VlayxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICB0b2tlblxuICAgICkge1xuICAgICAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAyKV0gPSB0b0ludChpbnB1dCk7XG4gICAgfSk7XG5cbiAgICBhZGRXZWVrUGFyc2VUb2tlbihbJ2dnJywgJ0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB3ZWVrW3Rva2VuXSA9IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldFdlZWtZZWFyKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgdGhpcy53ZWVrKCksXG4gICAgICAgICAgICB0aGlzLndlZWtkYXkoKSxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdyxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRveVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldElTT1dlZWtZZWFyKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgdGhpcy5pc29XZWVrKCksXG4gICAgICAgICAgICB0aGlzLmlzb1dlZWtkYXkoKSxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICA0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SVNPV2Vla3NJblllYXIoKSB7XG4gICAgICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgMSwgNCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SVNPV2Vla3NJbklTT1dlZWtZZWFyKCkge1xuICAgICAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy5pc29XZWVrWWVhcigpLCAxLCA0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRXZWVrc0luWWVhcigpIHtcbiAgICAgICAgdmFyIHdlZWtJbmZvID0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWs7XG4gICAgICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgd2Vla0luZm8uZG93LCB3ZWVrSW5mby5kb3kpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFdlZWtzSW5XZWVrWWVhcigpIHtcbiAgICAgICAgdmFyIHdlZWtJbmZvID0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWs7XG4gICAgICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLndlZWtZZWFyKCksIHdlZWtJbmZvLmRvdywgd2Vla0luZm8uZG95KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXRXZWVrWWVhckhlbHBlcihpbnB1dCwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICAgICAgdmFyIHdlZWtzVGFyZ2V0O1xuICAgICAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtPZlllYXIodGhpcywgZG93LCBkb3kpLnllYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZWVrc1RhcmdldCA9IHdlZWtzSW5ZZWFyKGlucHV0LCBkb3csIGRveSk7XG4gICAgICAgICAgICBpZiAod2VlayA+IHdlZWtzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgd2VlayA9IHdlZWtzVGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNldFdlZWtBbGwuY2FsbCh0aGlzLCBpbnB1dCwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0V2Vla0FsbCh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICAgICAgdmFyIGRheU9mWWVhckRhdGEgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSxcbiAgICAgICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKGRheU9mWWVhckRhdGEueWVhciwgMCwgZGF5T2ZZZWFyRGF0YS5kYXlPZlllYXIpO1xuXG4gICAgICAgIHRoaXMueWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgICAgICB0aGlzLm1vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSk7XG4gICAgICAgIHRoaXMuZGF0ZShkYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdRJywgMCwgJ1FvJywgJ3F1YXJ0ZXInKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygncXVhcnRlcicsICdRJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdxdWFydGVyJywgNyk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdRJywgbWF0Y2gxKTtcbiAgICBhZGRQYXJzZVRva2VuKCdRJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICBhcnJheVtNT05USF0gPSAodG9JbnQoaW5wdXQpIC0gMSkgKiAzO1xuICAgIH0pO1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgZnVuY3Rpb24gZ2V0U2V0UXVhcnRlcihpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbFxuICAgICAgICAgICAgPyBNYXRoLmNlaWwoKHRoaXMubW9udGgoKSArIDEpIC8gMylcbiAgICAgICAgICAgIDogdGhpcy5tb250aCgoaW5wdXQgLSAxKSAqIDMgKyAodGhpcy5tb250aCgpICUgMykpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdEJywgWydERCcsIDJdLCAnRG8nLCAnZGF0ZScpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdkYXRlJywgJ0QnKTtcblxuICAgIC8vIFBSSU9SSVRZXG4gICAgYWRkVW5pdFByaW9yaXR5KCdkYXRlJywgOSk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdEJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdERCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdEbycsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBcIm9yZGluYWxQYXJzZVwiIGZhbGxiYWNrIGluIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICAgICAgcmV0dXJuIGlzU3RyaWN0XG4gICAgICAgICAgICA/IGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZSB8fCBsb2NhbGUuX29yZGluYWxQYXJzZVxuICAgICAgICAgICAgOiBsb2NhbGUuX2RheU9mTW9udGhPcmRpbmFsUGFyc2VMZW5pZW50O1xuICAgIH0pO1xuXG4gICAgYWRkUGFyc2VUb2tlbihbJ0QnLCAnREQnXSwgREFURSk7XG4gICAgYWRkUGFyc2VUb2tlbignRG8nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W0RBVEVdID0gdG9JbnQoaW5wdXQubWF0Y2gobWF0Y2gxdG8yKVswXSk7XG4gICAgfSk7XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICB2YXIgZ2V0U2V0RGF5T2ZNb250aCA9IG1ha2VHZXRTZXQoJ0RhdGUnLCB0cnVlKTtcblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdEREQnLCBbJ0REREQnLCAzXSwgJ0RERG8nLCAnZGF5T2ZZZWFyJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ2RheU9mWWVhcicsICdEREQnKTtcblxuICAgIC8vIFBSSU9SSVRZXG4gICAgYWRkVW5pdFByaW9yaXR5KCdkYXlPZlllYXInLCA0KTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ0RERCcsIG1hdGNoMXRvMyk7XG4gICAgYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XG4gICAgYWRkUGFyc2VUb2tlbihbJ0RERCcsICdEREREJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldERheU9mWWVhcihpbnB1dCkge1xuICAgICAgICB2YXIgZGF5T2ZZZWFyID1cbiAgICAgICAgICAgIE1hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgKHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKSAtIHRoaXMuY2xvbmUoKS5zdGFydE9mKCd5ZWFyJykpIC8gODY0ZTVcbiAgICAgICAgICAgICkgKyAxO1xuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IGRheU9mWWVhciA6IHRoaXMuYWRkKGlucHV0IC0gZGF5T2ZZZWFyLCAnZCcpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDJdLCAwLCAnbWludXRlJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ21pbnV0ZScsICdtJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdtaW51dGUnLCAxNCk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdtJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdtbScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRQYXJzZVRva2VuKFsnbScsICdtbSddLCBNSU5VVEUpO1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgdmFyIGdldFNldE1pbnV0ZSA9IG1ha2VHZXRTZXQoJ01pbnV0ZXMnLCBmYWxzZSk7XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbigncycsIFsnc3MnLCAyXSwgMCwgJ3NlY29uZCcpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdzZWNvbmQnLCAncycpO1xuXG4gICAgLy8gUFJJT1JJVFlcblxuICAgIGFkZFVuaXRQcmlvcml0eSgnc2Vjb25kJywgMTUpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbigncycsIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignc3MnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUGFyc2VUb2tlbihbJ3MnLCAnc3MnXSwgU0VDT05EKTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIHZhciBnZXRTZXRTZWNvbmQgPSBtYWtlR2V0U2V0KCdTZWNvbmRzJywgZmFsc2UpO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ1MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB+fih0aGlzLm1pbGxpc2Vjb25kKCkgLyAxMDApO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTUycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB+fih0aGlzLm1pbGxpc2Vjb25kKCkgLyAxMCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTUycsIDNdLCAwLCAnbWlsbGlzZWNvbmQnKTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1MnLCA0XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTUycsIDVdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1MnLCA2XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDtcbiAgICB9KTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1MnLCA3XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTUycsIDhdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTU1MnLCA5XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDAwMDtcbiAgICB9KTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnbWlsbGlzZWNvbmQnLCAnbXMnKTtcblxuICAgIC8vIFBSSU9SSVRZXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ21pbGxpc2Vjb25kJywgMTYpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignUycsIG1hdGNoMXRvMywgbWF0Y2gxKTtcbiAgICBhZGRSZWdleFRva2VuKCdTUycsIG1hdGNoMXRvMywgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdTU1MnLCBtYXRjaDF0bzMsIG1hdGNoMyk7XG5cbiAgICB2YXIgdG9rZW4sIGdldFNldE1pbGxpc2Vjb25kO1xuICAgIGZvciAodG9rZW4gPSAnU1NTUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICAgICAgYWRkUmVnZXhUb2tlbih0b2tlbiwgbWF0Y2hVbnNpZ25lZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNcyhpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbTUlMTElTRUNPTkRdID0gdG9JbnQoKCcwLicgKyBpbnB1dCkgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBmb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgICAgIGFkZFBhcnNlVG9rZW4odG9rZW4sIHBhcnNlTXMpO1xuICAgIH1cblxuICAgIGdldFNldE1pbGxpc2Vjb25kID0gbWFrZUdldFNldCgnTWlsbGlzZWNvbmRzJywgZmFsc2UpO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ3onLCAwLCAwLCAnem9uZUFiYnInKTtcbiAgICBhZGRGb3JtYXRUb2tlbignenonLCAwLCAwLCAnem9uZU5hbWUnKTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFpvbmVBYmJyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnVVRDJyA6ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFpvbmVOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvID0gTW9tZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLmFkZCA9IGFkZDtcbiAgICBwcm90by5jYWxlbmRhciA9IGNhbGVuZGFyJDE7XG4gICAgcHJvdG8uY2xvbmUgPSBjbG9uZTtcbiAgICBwcm90by5kaWZmID0gZGlmZjtcbiAgICBwcm90by5lbmRPZiA9IGVuZE9mO1xuICAgIHByb3RvLmZvcm1hdCA9IGZvcm1hdDtcbiAgICBwcm90by5mcm9tID0gZnJvbTtcbiAgICBwcm90by5mcm9tTm93ID0gZnJvbU5vdztcbiAgICBwcm90by50byA9IHRvO1xuICAgIHByb3RvLnRvTm93ID0gdG9Ob3c7XG4gICAgcHJvdG8uZ2V0ID0gc3RyaW5nR2V0O1xuICAgIHByb3RvLmludmFsaWRBdCA9IGludmFsaWRBdDtcbiAgICBwcm90by5pc0FmdGVyID0gaXNBZnRlcjtcbiAgICBwcm90by5pc0JlZm9yZSA9IGlzQmVmb3JlO1xuICAgIHByb3RvLmlzQmV0d2VlbiA9IGlzQmV0d2VlbjtcbiAgICBwcm90by5pc1NhbWUgPSBpc1NhbWU7XG4gICAgcHJvdG8uaXNTYW1lT3JBZnRlciA9IGlzU2FtZU9yQWZ0ZXI7XG4gICAgcHJvdG8uaXNTYW1lT3JCZWZvcmUgPSBpc1NhbWVPckJlZm9yZTtcbiAgICBwcm90by5pc1ZhbGlkID0gaXNWYWxpZCQyO1xuICAgIHByb3RvLmxhbmcgPSBsYW5nO1xuICAgIHByb3RvLmxvY2FsZSA9IGxvY2FsZTtcbiAgICBwcm90by5sb2NhbGVEYXRhID0gbG9jYWxlRGF0YTtcbiAgICBwcm90by5tYXggPSBwcm90b3R5cGVNYXg7XG4gICAgcHJvdG8ubWluID0gcHJvdG90eXBlTWluO1xuICAgIHByb3RvLnBhcnNpbmdGbGFncyA9IHBhcnNpbmdGbGFncztcbiAgICBwcm90by5zZXQgPSBzdHJpbmdTZXQ7XG4gICAgcHJvdG8uc3RhcnRPZiA9IHN0YXJ0T2Y7XG4gICAgcHJvdG8uc3VidHJhY3QgPSBzdWJ0cmFjdDtcbiAgICBwcm90by50b0FycmF5ID0gdG9BcnJheTtcbiAgICBwcm90by50b09iamVjdCA9IHRvT2JqZWN0O1xuICAgIHByb3RvLnRvRGF0ZSA9IHRvRGF0ZTtcbiAgICBwcm90by50b0lTT1N0cmluZyA9IHRvSVNPU3RyaW5nO1xuICAgIHByb3RvLmluc3BlY3QgPSBpbnNwZWN0O1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuZm9yICE9IG51bGwpIHtcbiAgICAgICAgcHJvdG9bU3ltYm9sLmZvcignbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ01vbWVudDwnICsgdGhpcy5mb3JtYXQoKSArICc+JztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdG8udG9KU09OID0gdG9KU09OO1xuICAgIHByb3RvLnRvU3RyaW5nID0gdG9TdHJpbmc7XG4gICAgcHJvdG8udW5peCA9IHVuaXg7XG4gICAgcHJvdG8udmFsdWVPZiA9IHZhbHVlT2Y7XG4gICAgcHJvdG8uY3JlYXRpb25EYXRhID0gY3JlYXRpb25EYXRhO1xuICAgIHByb3RvLmVyYU5hbWUgPSBnZXRFcmFOYW1lO1xuICAgIHByb3RvLmVyYU5hcnJvdyA9IGdldEVyYU5hcnJvdztcbiAgICBwcm90by5lcmFBYmJyID0gZ2V0RXJhQWJicjtcbiAgICBwcm90by5lcmFZZWFyID0gZ2V0RXJhWWVhcjtcbiAgICBwcm90by55ZWFyID0gZ2V0U2V0WWVhcjtcbiAgICBwcm90by5pc0xlYXBZZWFyID0gZ2V0SXNMZWFwWWVhcjtcbiAgICBwcm90by53ZWVrWWVhciA9IGdldFNldFdlZWtZZWFyO1xuICAgIHByb3RvLmlzb1dlZWtZZWFyID0gZ2V0U2V0SVNPV2Vla1llYXI7XG4gICAgcHJvdG8ucXVhcnRlciA9IHByb3RvLnF1YXJ0ZXJzID0gZ2V0U2V0UXVhcnRlcjtcbiAgICBwcm90by5tb250aCA9IGdldFNldE1vbnRoO1xuICAgIHByb3RvLmRheXNJbk1vbnRoID0gZ2V0RGF5c0luTW9udGg7XG4gICAgcHJvdG8ud2VlayA9IHByb3RvLndlZWtzID0gZ2V0U2V0V2VlaztcbiAgICBwcm90by5pc29XZWVrID0gcHJvdG8uaXNvV2Vla3MgPSBnZXRTZXRJU09XZWVrO1xuICAgIHByb3RvLndlZWtzSW5ZZWFyID0gZ2V0V2Vla3NJblllYXI7XG4gICAgcHJvdG8ud2Vla3NJbldlZWtZZWFyID0gZ2V0V2Vla3NJbldlZWtZZWFyO1xuICAgIHByb3RvLmlzb1dlZWtzSW5ZZWFyID0gZ2V0SVNPV2Vla3NJblllYXI7XG4gICAgcHJvdG8uaXNvV2Vla3NJbklTT1dlZWtZZWFyID0gZ2V0SVNPV2Vla3NJbklTT1dlZWtZZWFyO1xuICAgIHByb3RvLmRhdGUgPSBnZXRTZXREYXlPZk1vbnRoO1xuICAgIHByb3RvLmRheSA9IHByb3RvLmRheXMgPSBnZXRTZXREYXlPZldlZWs7XG4gICAgcHJvdG8ud2Vla2RheSA9IGdldFNldExvY2FsZURheU9mV2VlaztcbiAgICBwcm90by5pc29XZWVrZGF5ID0gZ2V0U2V0SVNPRGF5T2ZXZWVrO1xuICAgIHByb3RvLmRheU9mWWVhciA9IGdldFNldERheU9mWWVhcjtcbiAgICBwcm90by5ob3VyID0gcHJvdG8uaG91cnMgPSBnZXRTZXRIb3VyO1xuICAgIHByb3RvLm1pbnV0ZSA9IHByb3RvLm1pbnV0ZXMgPSBnZXRTZXRNaW51dGU7XG4gICAgcHJvdG8uc2Vjb25kID0gcHJvdG8uc2Vjb25kcyA9IGdldFNldFNlY29uZDtcbiAgICBwcm90by5taWxsaXNlY29uZCA9IHByb3RvLm1pbGxpc2Vjb25kcyA9IGdldFNldE1pbGxpc2Vjb25kO1xuICAgIHByb3RvLnV0Y09mZnNldCA9IGdldFNldE9mZnNldDtcbiAgICBwcm90by51dGMgPSBzZXRPZmZzZXRUb1VUQztcbiAgICBwcm90by5sb2NhbCA9IHNldE9mZnNldFRvTG9jYWw7XG4gICAgcHJvdG8ucGFyc2Vab25lID0gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQ7XG4gICAgcHJvdG8uaGFzQWxpZ25lZEhvdXJPZmZzZXQgPSBoYXNBbGlnbmVkSG91ck9mZnNldDtcbiAgICBwcm90by5pc0RTVCA9IGlzRGF5bGlnaHRTYXZpbmdUaW1lO1xuICAgIHByb3RvLmlzTG9jYWwgPSBpc0xvY2FsO1xuICAgIHByb3RvLmlzVXRjT2Zmc2V0ID0gaXNVdGNPZmZzZXQ7XG4gICAgcHJvdG8uaXNVdGMgPSBpc1V0YztcbiAgICBwcm90by5pc1VUQyA9IGlzVXRjO1xuICAgIHByb3RvLnpvbmVBYmJyID0gZ2V0Wm9uZUFiYnI7XG4gICAgcHJvdG8uem9uZU5hbWUgPSBnZXRab25lTmFtZTtcbiAgICBwcm90by5kYXRlcyA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ2RhdGVzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBkYXRlIGluc3RlYWQuJyxcbiAgICAgICAgZ2V0U2V0RGF5T2ZNb250aFxuICAgICk7XG4gICAgcHJvdG8ubW9udGhzID0gZGVwcmVjYXRlKFxuICAgICAgICAnbW9udGhzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb250aCBpbnN0ZWFkJyxcbiAgICAgICAgZ2V0U2V0TW9udGhcbiAgICApO1xuICAgIHByb3RvLnllYXJzID0gZGVwcmVjYXRlKFxuICAgICAgICAneWVhcnMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIHllYXIgaW5zdGVhZCcsXG4gICAgICAgIGdldFNldFllYXJcbiAgICApO1xuICAgIHByb3RvLnpvbmUgPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQoKS56b25lIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQoKS51dGNPZmZzZXQgaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy96b25lLycsXG4gICAgICAgIGdldFNldFpvbmVcbiAgICApO1xuICAgIHByb3RvLmlzRFNUU2hpZnRlZCA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ2lzRFNUU2hpZnRlZCBpcyBkZXByZWNhdGVkLiBTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9kc3Qtc2hpZnRlZC8gZm9yIG1vcmUgaW5mb3JtYXRpb24nLFxuICAgICAgICBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWRcbiAgICApO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVW5peChpbnB1dCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJblpvbmUoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpLnBhcnNlWm9uZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZVBhcnNlUG9zdEZvcm1hdChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG5cbiAgICB2YXIgcHJvdG8kMSA9IExvY2FsZS5wcm90b3R5cGU7XG5cbiAgICBwcm90byQxLmNhbGVuZGFyID0gY2FsZW5kYXI7XG4gICAgcHJvdG8kMS5sb25nRGF0ZUZvcm1hdCA9IGxvbmdEYXRlRm9ybWF0O1xuICAgIHByb3RvJDEuaW52YWxpZERhdGUgPSBpbnZhbGlkRGF0ZTtcbiAgICBwcm90byQxLm9yZGluYWwgPSBvcmRpbmFsO1xuICAgIHByb3RvJDEucHJlcGFyc2UgPSBwcmVQYXJzZVBvc3RGb3JtYXQ7XG4gICAgcHJvdG8kMS5wb3N0Zm9ybWF0ID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xuICAgIHByb3RvJDEucmVsYXRpdmVUaW1lID0gcmVsYXRpdmVUaW1lO1xuICAgIHByb3RvJDEucGFzdEZ1dHVyZSA9IHBhc3RGdXR1cmU7XG4gICAgcHJvdG8kMS5zZXQgPSBzZXQ7XG4gICAgcHJvdG8kMS5lcmFzID0gbG9jYWxlRXJhcztcbiAgICBwcm90byQxLmVyYXNQYXJzZSA9IGxvY2FsZUVyYXNQYXJzZTtcbiAgICBwcm90byQxLmVyYXNDb252ZXJ0WWVhciA9IGxvY2FsZUVyYXNDb252ZXJ0WWVhcjtcbiAgICBwcm90byQxLmVyYXNBYmJyUmVnZXggPSBlcmFzQWJiclJlZ2V4O1xuICAgIHByb3RvJDEuZXJhc05hbWVSZWdleCA9IGVyYXNOYW1lUmVnZXg7XG4gICAgcHJvdG8kMS5lcmFzTmFycm93UmVnZXggPSBlcmFzTmFycm93UmVnZXg7XG5cbiAgICBwcm90byQxLm1vbnRocyA9IGxvY2FsZU1vbnRocztcbiAgICBwcm90byQxLm1vbnRoc1Nob3J0ID0gbG9jYWxlTW9udGhzU2hvcnQ7XG4gICAgcHJvdG8kMS5tb250aHNQYXJzZSA9IGxvY2FsZU1vbnRoc1BhcnNlO1xuICAgIHByb3RvJDEubW9udGhzUmVnZXggPSBtb250aHNSZWdleDtcbiAgICBwcm90byQxLm1vbnRoc1Nob3J0UmVnZXggPSBtb250aHNTaG9ydFJlZ2V4O1xuICAgIHByb3RvJDEud2VlayA9IGxvY2FsZVdlZWs7XG4gICAgcHJvdG8kMS5maXJzdERheU9mWWVhciA9IGxvY2FsZUZpcnN0RGF5T2ZZZWFyO1xuICAgIHByb3RvJDEuZmlyc3REYXlPZldlZWsgPSBsb2NhbGVGaXJzdERheU9mV2VlaztcblxuICAgIHByb3RvJDEud2Vla2RheXMgPSBsb2NhbGVXZWVrZGF5cztcbiAgICBwcm90byQxLndlZWtkYXlzTWluID0gbG9jYWxlV2Vla2RheXNNaW47XG4gICAgcHJvdG8kMS53ZWVrZGF5c1Nob3J0ID0gbG9jYWxlV2Vla2RheXNTaG9ydDtcbiAgICBwcm90byQxLndlZWtkYXlzUGFyc2UgPSBsb2NhbGVXZWVrZGF5c1BhcnNlO1xuXG4gICAgcHJvdG8kMS53ZWVrZGF5c1JlZ2V4ID0gd2Vla2RheXNSZWdleDtcbiAgICBwcm90byQxLndlZWtkYXlzU2hvcnRSZWdleCA9IHdlZWtkYXlzU2hvcnRSZWdleDtcbiAgICBwcm90byQxLndlZWtkYXlzTWluUmVnZXggPSB3ZWVrZGF5c01pblJlZ2V4O1xuXG4gICAgcHJvdG8kMS5pc1BNID0gbG9jYWxlSXNQTTtcbiAgICBwcm90byQxLm1lcmlkaWVtID0gbG9jYWxlTWVyaWRpZW07XG5cbiAgICBmdW5jdGlvbiBnZXQkMShmb3JtYXQsIGluZGV4LCBmaWVsZCwgc2V0dGVyKSB7XG4gICAgICAgIHZhciBsb2NhbGUgPSBnZXRMb2NhbGUoKSxcbiAgICAgICAgICAgIHV0YyA9IGNyZWF0ZVVUQygpLnNldChzZXR0ZXIsIGluZGV4KTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZVtmaWVsZF0odXRjLCBmb3JtYXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcblxuICAgICAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldCQxKGZvcm1hdCwgaW5kZXgsIGZpZWxkLCAnbW9udGgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgb3V0ID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBvdXRbaV0gPSBnZXQkMShmb3JtYXQsIGksIGZpZWxkLCAnbW9udGgnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIC8vICgpXG4gICAgLy8gKDUpXG4gICAgLy8gKGZtdCwgNSlcbiAgICAvLyAoZm10KVxuICAgIC8vICh0cnVlKVxuICAgIC8vICh0cnVlLCA1KVxuICAgIC8vICh0cnVlLCBmbXQsIDUpXG4gICAgLy8gKHRydWUsIGZtdClcbiAgICBmdW5jdGlvbiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgZmllbGQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsb2NhbGVTb3J0ZWQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGxvY2FsZVNvcnRlZDtcbiAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICAgICAgbG9jYWxlU29ydGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCksXG4gICAgICAgICAgICBzaGlmdCA9IGxvY2FsZVNvcnRlZCA/IGxvY2FsZS5fd2Vlay5kb3cgOiAwLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIG91dCA9IFtdO1xuXG4gICAgICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0JDEoZm9ybWF0LCAoaW5kZXggKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgb3V0W2ldID0gZ2V0JDEoZm9ybWF0LCAoaSArIHNoaWZ0KSAlIDcsIGZpZWxkLCAnZGF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0TW9udGhzKGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsICdtb250aHMnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0TW9udGhzU2hvcnQoZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRoc1Nob3J0Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdFdlZWtkYXlzKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5cycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RXZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c1Nob3J0Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdFdlZWtkYXlzTWluKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c01pbicpO1xuICAgIH1cblxuICAgIGdldFNldEdsb2JhbExvY2FsZSgnZW4nLCB7XG4gICAgICAgIGVyYXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaW5jZTogJzAwMDEtMDEtMDEnLFxuICAgICAgICAgICAgICAgIHVudGlsOiArSW5maW5pdHksXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdBbm5vIERvbWluaScsXG4gICAgICAgICAgICAgICAgbmFycm93OiAnQUQnLFxuICAgICAgICAgICAgICAgIGFiYnI6ICdBRCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNpbmNlOiAnMDAwMC0xMi0zMScsXG4gICAgICAgICAgICAgICAgdW50aWw6IC1JbmZpbml0eSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0JlZm9yZSBDaHJpc3QnLFxuICAgICAgICAgICAgICAgIG5hcnJvdzogJ0JDJyxcbiAgICAgICAgICAgICAgICBhYmJyOiAnQkMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICAgICAgb3V0cHV0ID1cbiAgICAgICAgICAgICAgICAgICAgdG9JbnQoKG51bWJlciAlIDEwMCkgLyAxMCkgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYiA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnbmQnXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGIgPT09IDNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAndGgnO1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIFNpZGUgZWZmZWN0IGltcG9ydHNcblxuICAgIGhvb2tzLmxhbmcgPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQubGFuZyBpcyBkZXByZWNhdGVkLiBVc2UgbW9tZW50LmxvY2FsZSBpbnN0ZWFkLicsXG4gICAgICAgIGdldFNldEdsb2JhbExvY2FsZVxuICAgICk7XG4gICAgaG9va3MubGFuZ0RhdGEgPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQubGFuZ0RhdGEgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGVEYXRhIGluc3RlYWQuJyxcbiAgICAgICAgZ2V0TG9jYWxlXG4gICAgKTtcblxuICAgIHZhciBtYXRoQWJzID0gTWF0aC5hYnM7XG5cbiAgICBmdW5jdGlvbiBhYnMoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblxuICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgPSBtYXRoQWJzKHRoaXMuX21pbGxpc2Vjb25kcyk7XG4gICAgICAgIHRoaXMuX2RheXMgPSBtYXRoQWJzKHRoaXMuX2RheXMpO1xuICAgICAgICB0aGlzLl9tb250aHMgPSBtYXRoQWJzKHRoaXMuX21vbnRocyk7XG5cbiAgICAgICAgZGF0YS5taWxsaXNlY29uZHMgPSBtYXRoQWJzKGRhdGEubWlsbGlzZWNvbmRzKTtcbiAgICAgICAgZGF0YS5zZWNvbmRzID0gbWF0aEFicyhkYXRhLnNlY29uZHMpO1xuICAgICAgICBkYXRhLm1pbnV0ZXMgPSBtYXRoQWJzKGRhdGEubWludXRlcyk7XG4gICAgICAgIGRhdGEuaG91cnMgPSBtYXRoQWJzKGRhdGEuaG91cnMpO1xuICAgICAgICBkYXRhLm1vbnRocyA9IG1hdGhBYnMoZGF0YS5tb250aHMpO1xuICAgICAgICBkYXRhLnllYXJzID0gbWF0aEFicyhkYXRhLnllYXJzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTdWJ0cmFjdCQxKGR1cmF0aW9uLCBpbnB1dCwgdmFsdWUsIGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgb3RoZXIgPSBjcmVhdGVEdXJhdGlvbihpbnB1dCwgdmFsdWUpO1xuXG4gICAgICAgIGR1cmF0aW9uLl9taWxsaXNlY29uZHMgKz0gZGlyZWN0aW9uICogb3RoZXIuX21pbGxpc2Vjb25kcztcbiAgICAgICAgZHVyYXRpb24uX2RheXMgKz0gZGlyZWN0aW9uICogb3RoZXIuX2RheXM7XG4gICAgICAgIGR1cmF0aW9uLl9tb250aHMgKz0gZGlyZWN0aW9uICogb3RoZXIuX21vbnRocztcblxuICAgICAgICByZXR1cm4gZHVyYXRpb24uX2J1YmJsZSgpO1xuICAgIH1cblxuICAgIC8vIHN1cHBvcnRzIG9ubHkgMi4wLXN0eWxlIGFkZCgxLCAncycpIG9yIGFkZChkdXJhdGlvbilcbiAgICBmdW5jdGlvbiBhZGQkMShpbnB1dCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGFkZFN1YnRyYWN0JDEodGhpcywgaW5wdXQsIHZhbHVlLCAxKTtcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBzdWJ0cmFjdCgxLCAncycpIG9yIHN1YnRyYWN0KGR1cmF0aW9uKVxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0JDEoaW5wdXQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhZGRTdWJ0cmFjdCQxKHRoaXMsIGlucHV0LCB2YWx1ZSwgLTEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFic0NlaWwobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnViYmxlKCkge1xuICAgICAgICB2YXIgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgZGF5cyA9IHRoaXMuX2RheXMsXG4gICAgICAgICAgICBtb250aHMgPSB0aGlzLl9tb250aHMsXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fZGF0YSxcbiAgICAgICAgICAgIHNlY29uZHMsXG4gICAgICAgICAgICBtaW51dGVzLFxuICAgICAgICAgICAgaG91cnMsXG4gICAgICAgICAgICB5ZWFycyxcbiAgICAgICAgICAgIG1vbnRoc0Zyb21EYXlzO1xuXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBtaXggb2YgcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHZhbHVlcywgYnViYmxlIGRvd24gZmlyc3RcbiAgICAgICAgLy8gY2hlY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yMTY2XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgKG1pbGxpc2Vjb25kcyA+PSAwICYmIGRheXMgPj0gMCAmJiBtb250aHMgPj0gMCkgfHxcbiAgICAgICAgICAgICAgICAobWlsbGlzZWNvbmRzIDw9IDAgJiYgZGF5cyA8PSAwICYmIG1vbnRocyA8PSAwKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyArPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHMpICsgZGF5cykgKiA4NjRlNTtcbiAgICAgICAgICAgIGRheXMgPSAwO1xuICAgICAgICAgICAgbW9udGhzID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBidWJibGVzIHVwIHZhbHVlcywgc2VlIHRoZSB0ZXN0cyBmb3JcbiAgICAgICAgLy8gZXhhbXBsZXMgb2Ygd2hhdCB0aGF0IG1lYW5zLlxuICAgICAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyAlIDEwMDA7XG5cbiAgICAgICAgc2Vjb25kcyA9IGFic0Zsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgICAgICBkYXRhLnNlY29uZHMgPSBzZWNvbmRzICUgNjA7XG5cbiAgICAgICAgbWludXRlcyA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICAgIGRhdGEubWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcblxuICAgICAgICBob3VycyA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgICAgIGRhdGEuaG91cnMgPSBob3VycyAlIDI0O1xuXG4gICAgICAgIGRheXMgKz0gYWJzRmxvb3IoaG91cnMgLyAyNCk7XG5cbiAgICAgICAgLy8gY29udmVydCBkYXlzIHRvIG1vbnRoc1xuICAgICAgICBtb250aHNGcm9tRGF5cyA9IGFic0Zsb29yKGRheXNUb01vbnRocyhkYXlzKSk7XG4gICAgICAgIG1vbnRocyArPSBtb250aHNGcm9tRGF5cztcbiAgICAgICAgZGF5cyAtPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHNGcm9tRGF5cykpO1xuXG4gICAgICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICAgICAgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gICAgICAgIG1vbnRocyAlPSAxMjtcblxuICAgICAgICBkYXRhLmRheXMgPSBkYXlzO1xuICAgICAgICBkYXRhLm1vbnRocyA9IG1vbnRocztcbiAgICAgICAgZGF0YS55ZWFycyA9IHllYXJzO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRheXNUb01vbnRocyhkYXlzKSB7XG4gICAgICAgIC8vIDQwMCB5ZWFycyBoYXZlIDE0NjA5NyBkYXlzICh0YWtpbmcgaW50byBhY2NvdW50IGxlYXAgeWVhciBydWxlcylcbiAgICAgICAgLy8gNDAwIHllYXJzIGhhdmUgMTIgbW9udGhzID09PSA0ODAwXG4gICAgICAgIHJldHVybiAoZGF5cyAqIDQ4MDApIC8gMTQ2MDk3O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbnRoc1RvRGF5cyhtb250aHMpIHtcbiAgICAgICAgLy8gdGhlIHJldmVyc2Ugb2YgZGF5c1RvTW9udGhzXG4gICAgICAgIHJldHVybiAobW9udGhzICogMTQ2MDk3KSAvIDQ4MDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXModW5pdHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF5cyxcbiAgICAgICAgICAgIG1vbnRocyxcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcblxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgICAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICdxdWFydGVyJyB8fCB1bml0cyA9PT0gJ3llYXInKSB7XG4gICAgICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzICsgZGF5c1RvTW9udGhzKGRheXMpO1xuICAgICAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRocztcbiAgICAgICAgICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRocyAvIDM7XG4gICAgICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aHMgLyAxMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBtaWxsaXNlY29uZHMgc2VwYXJhdGVseSBiZWNhdXNlIG9mIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIChpc3N1ZSAjMTg2NylcbiAgICAgICAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgTWF0aC5yb3VuZChtb250aHNUb0RheXModGhpcy5fbW9udGhzKSk7XG4gICAgICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXlzIC8gNyArIG1pbGxpc2Vjb25kcyAvIDYwNDhlNTtcbiAgICAgICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyAqIDI0ICsgbWlsbGlzZWNvbmRzIC8gMzZlNTtcbiAgICAgICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyAqIDE0NDAgKyBtaWxsaXNlY29uZHMgLyA2ZTQ7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKiA4NjQwMCArIG1pbGxpc2Vjb25kcyAvIDEwMDA7XG4gICAgICAgICAgICAgICAgLy8gTWF0aC5mbG9vciBwcmV2ZW50cyBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyBoZXJlXG4gICAgICAgICAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXlzICogODY0ZTUpICsgbWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biB1bml0ICcgKyB1bml0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiBVc2UgdGhpcy5hcygnbXMnKT9cbiAgICBmdW5jdGlvbiB2YWx1ZU9mJDEoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyArXG4gICAgICAgICAgICB0aGlzLl9kYXlzICogODY0ZTUgK1xuICAgICAgICAgICAgKHRoaXMuX21vbnRocyAlIDEyKSAqIDI1OTJlNiArXG4gICAgICAgICAgICB0b0ludCh0aGlzLl9tb250aHMgLyAxMikgKiAzMTUzNmU2XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUFzKGFsaWFzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcyhhbGlhcyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGFzTWlsbGlzZWNvbmRzID0gbWFrZUFzKCdtcycpLFxuICAgICAgICBhc1NlY29uZHMgPSBtYWtlQXMoJ3MnKSxcbiAgICAgICAgYXNNaW51dGVzID0gbWFrZUFzKCdtJyksXG4gICAgICAgIGFzSG91cnMgPSBtYWtlQXMoJ2gnKSxcbiAgICAgICAgYXNEYXlzID0gbWFrZUFzKCdkJyksXG4gICAgICAgIGFzV2Vla3MgPSBtYWtlQXMoJ3cnKSxcbiAgICAgICAgYXNNb250aHMgPSBtYWtlQXMoJ00nKSxcbiAgICAgICAgYXNRdWFydGVycyA9IG1ha2VBcygnUScpLFxuICAgICAgICBhc1llYXJzID0gbWFrZUFzKCd5Jyk7XG5cbiAgICBmdW5jdGlvbiBjbG9uZSQxKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24odGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0JDIodW5pdHMpIHtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXNbdW5pdHMgKyAncyddKCkgOiBOYU47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUdldHRlcihuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9kYXRhW25hbWVdIDogTmFOO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBtaWxsaXNlY29uZHMgPSBtYWtlR2V0dGVyKCdtaWxsaXNlY29uZHMnKSxcbiAgICAgICAgc2Vjb25kcyA9IG1ha2VHZXR0ZXIoJ3NlY29uZHMnKSxcbiAgICAgICAgbWludXRlcyA9IG1ha2VHZXR0ZXIoJ21pbnV0ZXMnKSxcbiAgICAgICAgaG91cnMgPSBtYWtlR2V0dGVyKCdob3VycycpLFxuICAgICAgICBkYXlzID0gbWFrZUdldHRlcignZGF5cycpLFxuICAgICAgICBtb250aHMgPSBtYWtlR2V0dGVyKCdtb250aHMnKSxcbiAgICAgICAgeWVhcnMgPSBtYWtlR2V0dGVyKCd5ZWFycycpO1xuXG4gICAgZnVuY3Rpb24gd2Vla3MoKSB7XG4gICAgICAgIHJldHVybiBhYnNGbG9vcih0aGlzLmRheXMoKSAvIDcpO1xuICAgIH1cblxuICAgIHZhciByb3VuZCA9IE1hdGgucm91bmQsXG4gICAgICAgIHRocmVzaG9sZHMgPSB7XG4gICAgICAgICAgICBzczogNDQsIC8vIGEgZmV3IHNlY29uZHMgdG8gc2Vjb25kc1xuICAgICAgICAgICAgczogNDUsIC8vIHNlY29uZHMgdG8gbWludXRlXG4gICAgICAgICAgICBtOiA0NSwgLy8gbWludXRlcyB0byBob3VyXG4gICAgICAgICAgICBoOiAyMiwgLy8gaG91cnMgdG8gZGF5XG4gICAgICAgICAgICBkOiAyNiwgLy8gZGF5cyB0byBtb250aC93ZWVrXG4gICAgICAgICAgICB3OiBudWxsLCAvLyB3ZWVrcyB0byBtb250aFxuICAgICAgICAgICAgTTogMTEsIC8vIG1vbnRocyB0byB5ZWFyXG4gICAgICAgIH07XG5cbiAgICAvLyBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vbWVudC5mbi5mcm9tLCBtb21lbnQuZm4uZnJvbU5vdywgYW5kIG1vbWVudC5kdXJhdGlvbi5mbi5odW1hbml6ZVxuICAgIGZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cmluZywgbnVtYmVyLCB3aXRob3V0U3VmZml4LCBpc0Z1dHVyZSwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUucmVsYXRpdmVUaW1lKG51bWJlciB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbGF0aXZlVGltZSQxKHBvc05lZ0R1cmF0aW9uLCB3aXRob3V0U3VmZml4LCB0aHJlc2hvbGRzLCBsb2NhbGUpIHtcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb24ocG9zTmVnRHVyYXRpb24pLmFicygpLFxuICAgICAgICAgICAgc2Vjb25kcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdzJykpLFxuICAgICAgICAgICAgbWludXRlcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdtJykpLFxuICAgICAgICAgICAgaG91cnMgPSByb3VuZChkdXJhdGlvbi5hcygnaCcpKSxcbiAgICAgICAgICAgIGRheXMgPSByb3VuZChkdXJhdGlvbi5hcygnZCcpKSxcbiAgICAgICAgICAgIG1vbnRocyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdNJykpLFxuICAgICAgICAgICAgd2Vla3MgPSByb3VuZChkdXJhdGlvbi5hcygndycpKSxcbiAgICAgICAgICAgIHllYXJzID0gcm91bmQoZHVyYXRpb24uYXMoJ3knKSksXG4gICAgICAgICAgICBhID1cbiAgICAgICAgICAgICAgICAoc2Vjb25kcyA8PSB0aHJlc2hvbGRzLnNzICYmIFsncycsIHNlY29uZHNdKSB8fFxuICAgICAgICAgICAgICAgIChzZWNvbmRzIDwgdGhyZXNob2xkcy5zICYmIFsnc3MnLCBzZWNvbmRzXSkgfHxcbiAgICAgICAgICAgICAgICAobWludXRlcyA8PSAxICYmIFsnbSddKSB8fFxuICAgICAgICAgICAgICAgIChtaW51dGVzIDwgdGhyZXNob2xkcy5tICYmIFsnbW0nLCBtaW51dGVzXSkgfHxcbiAgICAgICAgICAgICAgICAoaG91cnMgPD0gMSAmJiBbJ2gnXSkgfHxcbiAgICAgICAgICAgICAgICAoaG91cnMgPCB0aHJlc2hvbGRzLmggJiYgWydoaCcsIGhvdXJzXSkgfHxcbiAgICAgICAgICAgICAgICAoZGF5cyA8PSAxICYmIFsnZCddKSB8fFxuICAgICAgICAgICAgICAgIChkYXlzIDwgdGhyZXNob2xkcy5kICYmIFsnZGQnLCBkYXlzXSk7XG5cbiAgICAgICAgaWYgKHRocmVzaG9sZHMudyAhPSBudWxsKSB7XG4gICAgICAgICAgICBhID1cbiAgICAgICAgICAgICAgICBhIHx8XG4gICAgICAgICAgICAgICAgKHdlZWtzIDw9IDEgJiYgWyd3J10pIHx8XG4gICAgICAgICAgICAgICAgKHdlZWtzIDwgdGhyZXNob2xkcy53ICYmIFsnd3cnLCB3ZWVrc10pO1xuICAgICAgICB9XG4gICAgICAgIGEgPSBhIHx8XG4gICAgICAgICAgICAobW9udGhzIDw9IDEgJiYgWydNJ10pIHx8XG4gICAgICAgICAgICAobW9udGhzIDwgdGhyZXNob2xkcy5NICYmIFsnTU0nLCBtb250aHNdKSB8fFxuICAgICAgICAgICAgKHllYXJzIDw9IDEgJiYgWyd5J10pIHx8IFsneXknLCB5ZWFyc107XG5cbiAgICAgICAgYVsyXSA9IHdpdGhvdXRTdWZmaXg7XG4gICAgICAgIGFbM10gPSArcG9zTmVnRHVyYXRpb24gPiAwO1xuICAgICAgICBhWzRdID0gbG9jYWxlO1xuICAgICAgICByZXR1cm4gc3Vic3RpdHV0ZVRpbWVBZ28uYXBwbHkobnVsbCwgYSk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCB0aGUgcm91bmRpbmcgZnVuY3Rpb24gZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuICAgIGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nKHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHJvdW5kaW5nRnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvdW5kO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygcm91bmRpbmdGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcm91bmQgPSByb3VuZGluZ0Z1bmN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgYSB0aHJlc2hvbGQgZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuICAgIGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQsIGxpbWl0KSB7XG4gICAgICAgIGlmICh0aHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhyZXNob2xkc1t0aHJlc2hvbGRdO1xuICAgICAgICB9XG4gICAgICAgIHRocmVzaG9sZHNbdGhyZXNob2xkXSA9IGxpbWl0O1xuICAgICAgICBpZiAodGhyZXNob2xkID09PSAncycpIHtcbiAgICAgICAgICAgIHRocmVzaG9sZHMuc3MgPSBsaW1pdCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaHVtYW5pemUoYXJnV2l0aFN1ZmZpeCwgYXJnVGhyZXNob2xkcykge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3aXRoU3VmZml4ID0gZmFsc2UsXG4gICAgICAgICAgICB0aCA9IHRocmVzaG9sZHMsXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdXaXRoU3VmZml4ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgYXJnVGhyZXNob2xkcyA9IGFyZ1dpdGhTdWZmaXg7XG4gICAgICAgICAgICBhcmdXaXRoU3VmZml4ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdXaXRoU3VmZml4ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHdpdGhTdWZmaXggPSBhcmdXaXRoU3VmZml4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYXJnVGhyZXNob2xkcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoID0gT2JqZWN0LmFzc2lnbih7fSwgdGhyZXNob2xkcywgYXJnVGhyZXNob2xkcyk7XG4gICAgICAgICAgICBpZiAoYXJnVGhyZXNob2xkcy5zICE9IG51bGwgJiYgYXJnVGhyZXNob2xkcy5zcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGguc3MgPSBhcmdUaHJlc2hvbGRzLnMgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxlID0gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgICAgIG91dHB1dCA9IHJlbGF0aXZlVGltZSQxKHRoaXMsICF3aXRoU3VmZml4LCB0aCwgbG9jYWxlKTtcblxuICAgICAgICBpZiAod2l0aFN1ZmZpeCkge1xuICAgICAgICAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbiAgICB9XG5cbiAgICB2YXIgYWJzJDEgPSBNYXRoLmFicztcblxuICAgIGZ1bmN0aW9uIHNpZ24oeCkge1xuICAgICAgICByZXR1cm4gKHggPiAwKSAtICh4IDwgMCkgfHwgK3g7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9JU09TdHJpbmckMSgpIHtcbiAgICAgICAgLy8gZm9yIElTTyBzdHJpbmdzIHdlIGRvIG5vdCB1c2UgdGhlIG5vcm1hbCBidWJibGluZyBydWxlczpcbiAgICAgICAgLy8gICogbWlsbGlzZWNvbmRzIGJ1YmJsZSB1cCB1bnRpbCB0aGV5IGJlY29tZSBob3Vyc1xuICAgICAgICAvLyAgKiBkYXlzIGRvIG5vdCBidWJibGUgYXQgYWxsXG4gICAgICAgIC8vICAqIG1vbnRocyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgeWVhcnNcbiAgICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHRoZXJlIGlzIG5vIGNvbnRleHQtZnJlZSBjb252ZXJzaW9uIGJldHdlZW4gaG91cnMgYW5kIGRheXNcbiAgICAgICAgLy8gKHRoaW5rIG9mIGNsb2NrIGNoYW5nZXMpXG4gICAgICAgIC8vIGFuZCBhbHNvIG5vdCBiZXR3ZWVuIGRheXMgYW5kIG1vbnRocyAoMjgtMzEgZGF5cyBwZXIgbW9udGgpXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlY29uZHMgPSBhYnMkMSh0aGlzLl9taWxsaXNlY29uZHMpIC8gMTAwMCxcbiAgICAgICAgICAgIGRheXMgPSBhYnMkMSh0aGlzLl9kYXlzKSxcbiAgICAgICAgICAgIG1vbnRocyA9IGFicyQxKHRoaXMuX21vbnRocyksXG4gICAgICAgICAgICBtaW51dGVzLFxuICAgICAgICAgICAgaG91cnMsXG4gICAgICAgICAgICB5ZWFycyxcbiAgICAgICAgICAgIHMsXG4gICAgICAgICAgICB0b3RhbCA9IHRoaXMuYXNTZWNvbmRzKCksXG4gICAgICAgICAgICB0b3RhbFNpZ24sXG4gICAgICAgICAgICB5bVNpZ24sXG4gICAgICAgICAgICBkYXlzU2lnbixcbiAgICAgICAgICAgIGhtc1NpZ247XG5cbiAgICAgICAgaWYgKCF0b3RhbCkge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBhcyBDIydzIChOb2RhKSBhbmQgcHl0aG9uIChpc29kYXRlKS4uLlxuICAgICAgICAgICAgLy8gYnV0IG5vdCBvdGhlciBKUyAoZ29vZy5kYXRlKVxuICAgICAgICAgICAgcmV0dXJuICdQMEQnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMzYwMCBzZWNvbmRzIC0+IDYwIG1pbnV0ZXMgLT4gMSBob3VyXG4gICAgICAgIG1pbnV0ZXMgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICAgICAgICBob3VycyA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgICAgIHNlY29uZHMgJT0gNjA7XG4gICAgICAgIG1pbnV0ZXMgJT0gNjA7XG5cbiAgICAgICAgLy8gMTIgbW9udGhzIC0+IDEgeWVhclxuICAgICAgICB5ZWFycyA9IGFic0Zsb29yKG1vbnRocyAvIDEyKTtcbiAgICAgICAgbW9udGhzICU9IDEyO1xuXG4gICAgICAgIC8vIGluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9kb3JkaWxsZS9tb21lbnQtaXNvZHVyYXRpb24vYmxvYi9tYXN0ZXIvbW9tZW50Lmlzb2R1cmF0aW9uLmpzXG4gICAgICAgIHMgPSBzZWNvbmRzID8gc2Vjb25kcy50b0ZpeGVkKDMpLnJlcGxhY2UoL1xcLj8wKyQvLCAnJykgOiAnJztcblxuICAgICAgICB0b3RhbFNpZ24gPSB0b3RhbCA8IDAgPyAnLScgOiAnJztcbiAgICAgICAgeW1TaWduID0gc2lnbih0aGlzLl9tb250aHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuICAgICAgICBkYXlzU2lnbiA9IHNpZ24odGhpcy5fZGF5cykgIT09IHNpZ24odG90YWwpID8gJy0nIDogJyc7XG4gICAgICAgIGhtc1NpZ24gPSBzaWduKHRoaXMuX21pbGxpc2Vjb25kcykgIT09IHNpZ24odG90YWwpID8gJy0nIDogJyc7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRvdGFsU2lnbiArXG4gICAgICAgICAgICAnUCcgK1xuICAgICAgICAgICAgKHllYXJzID8geW1TaWduICsgeWVhcnMgKyAnWScgOiAnJykgK1xuICAgICAgICAgICAgKG1vbnRocyA/IHltU2lnbiArIG1vbnRocyArICdNJyA6ICcnKSArXG4gICAgICAgICAgICAoZGF5cyA/IGRheXNTaWduICsgZGF5cyArICdEJyA6ICcnKSArXG4gICAgICAgICAgICAoaG91cnMgfHwgbWludXRlcyB8fCBzZWNvbmRzID8gJ1QnIDogJycpICtcbiAgICAgICAgICAgIChob3VycyA/IGhtc1NpZ24gKyBob3VycyArICdIJyA6ICcnKSArXG4gICAgICAgICAgICAobWludXRlcyA/IGhtc1NpZ24gKyBtaW51dGVzICsgJ00nIDogJycpICtcbiAgICAgICAgICAgIChzZWNvbmRzID8gaG1zU2lnbiArIHMgKyAnUycgOiAnJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgcHJvdG8kMiA9IER1cmF0aW9uLnByb3RvdHlwZTtcblxuICAgIHByb3RvJDIuaXNWYWxpZCA9IGlzVmFsaWQkMTtcbiAgICBwcm90byQyLmFicyA9IGFicztcbiAgICBwcm90byQyLmFkZCA9IGFkZCQxO1xuICAgIHByb3RvJDIuc3VidHJhY3QgPSBzdWJ0cmFjdCQxO1xuICAgIHByb3RvJDIuYXMgPSBhcztcbiAgICBwcm90byQyLmFzTWlsbGlzZWNvbmRzID0gYXNNaWxsaXNlY29uZHM7XG4gICAgcHJvdG8kMi5hc1NlY29uZHMgPSBhc1NlY29uZHM7XG4gICAgcHJvdG8kMi5hc01pbnV0ZXMgPSBhc01pbnV0ZXM7XG4gICAgcHJvdG8kMi5hc0hvdXJzID0gYXNIb3VycztcbiAgICBwcm90byQyLmFzRGF5cyA9IGFzRGF5cztcbiAgICBwcm90byQyLmFzV2Vla3MgPSBhc1dlZWtzO1xuICAgIHByb3RvJDIuYXNNb250aHMgPSBhc01vbnRocztcbiAgICBwcm90byQyLmFzUXVhcnRlcnMgPSBhc1F1YXJ0ZXJzO1xuICAgIHByb3RvJDIuYXNZZWFycyA9IGFzWWVhcnM7XG4gICAgcHJvdG8kMi52YWx1ZU9mID0gdmFsdWVPZiQxO1xuICAgIHByb3RvJDIuX2J1YmJsZSA9IGJ1YmJsZTtcbiAgICBwcm90byQyLmNsb25lID0gY2xvbmUkMTtcbiAgICBwcm90byQyLmdldCA9IGdldCQyO1xuICAgIHByb3RvJDIubWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmRzO1xuICAgIHByb3RvJDIuc2Vjb25kcyA9IHNlY29uZHM7XG4gICAgcHJvdG8kMi5taW51dGVzID0gbWludXRlcztcbiAgICBwcm90byQyLmhvdXJzID0gaG91cnM7XG4gICAgcHJvdG8kMi5kYXlzID0gZGF5cztcbiAgICBwcm90byQyLndlZWtzID0gd2Vla3M7XG4gICAgcHJvdG8kMi5tb250aHMgPSBtb250aHM7XG4gICAgcHJvdG8kMi55ZWFycyA9IHllYXJzO1xuICAgIHByb3RvJDIuaHVtYW5pemUgPSBodW1hbml6ZTtcbiAgICBwcm90byQyLnRvSVNPU3RyaW5nID0gdG9JU09TdHJpbmckMTtcbiAgICBwcm90byQyLnRvU3RyaW5nID0gdG9JU09TdHJpbmckMTtcbiAgICBwcm90byQyLnRvSlNPTiA9IHRvSVNPU3RyaW5nJDE7XG4gICAgcHJvdG8kMi5sb2NhbGUgPSBsb2NhbGU7XG4gICAgcHJvdG8kMi5sb2NhbGVEYXRhID0gbG9jYWxlRGF0YTtcblxuICAgIHByb3RvJDIudG9Jc29TdHJpbmcgPSBkZXByZWNhdGUoXG4gICAgICAgICd0b0lzb1N0cmluZygpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgdG9JU09TdHJpbmcoKSBpbnN0ZWFkIChub3RpY2UgdGhlIGNhcGl0YWxzKScsXG4gICAgICAgIHRvSVNPU3RyaW5nJDFcbiAgICApO1xuICAgIHByb3RvJDIubGFuZyA9IGxhbmc7XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignWCcsIDAsIDAsICd1bml4Jyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ3gnLCAwLCAwLCAndmFsdWVPZicpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbigneCcsIG1hdGNoU2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCdYJywgbWF0Y2hUaW1lc3RhbXApO1xuICAgIGFkZFBhcnNlVG9rZW4oJ1gnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUocGFyc2VGbG9hdChpbnB1dCkgKiAxMDAwKTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCd4JywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHRvSW50KGlucHV0KSk7XG4gICAgfSk7XG5cbiAgICAvLyEgbW9tZW50LmpzXG5cbiAgICBob29rcy52ZXJzaW9uID0gJzIuMjkuMSc7XG5cbiAgICBzZXRIb29rQ2FsbGJhY2soY3JlYXRlTG9jYWwpO1xuXG4gICAgaG9va3MuZm4gPSBwcm90bztcbiAgICBob29rcy5taW4gPSBtaW47XG4gICAgaG9va3MubWF4ID0gbWF4O1xuICAgIGhvb2tzLm5vdyA9IG5vdztcbiAgICBob29rcy51dGMgPSBjcmVhdGVVVEM7XG4gICAgaG9va3MudW5peCA9IGNyZWF0ZVVuaXg7XG4gICAgaG9va3MubW9udGhzID0gbGlzdE1vbnRocztcbiAgICBob29rcy5pc0RhdGUgPSBpc0RhdGU7XG4gICAgaG9va3MubG9jYWxlID0gZ2V0U2V0R2xvYmFsTG9jYWxlO1xuICAgIGhvb2tzLmludmFsaWQgPSBjcmVhdGVJbnZhbGlkO1xuICAgIGhvb2tzLmR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb247XG4gICAgaG9va3MuaXNNb21lbnQgPSBpc01vbWVudDtcbiAgICBob29rcy53ZWVrZGF5cyA9IGxpc3RXZWVrZGF5cztcbiAgICBob29rcy5wYXJzZVpvbmUgPSBjcmVhdGVJblpvbmU7XG4gICAgaG9va3MubG9jYWxlRGF0YSA9IGdldExvY2FsZTtcbiAgICBob29rcy5pc0R1cmF0aW9uID0gaXNEdXJhdGlvbjtcbiAgICBob29rcy5tb250aHNTaG9ydCA9IGxpc3RNb250aHNTaG9ydDtcbiAgICBob29rcy53ZWVrZGF5c01pbiA9IGxpc3RXZWVrZGF5c01pbjtcbiAgICBob29rcy5kZWZpbmVMb2NhbGUgPSBkZWZpbmVMb2NhbGU7XG4gICAgaG9va3MudXBkYXRlTG9jYWxlID0gdXBkYXRlTG9jYWxlO1xuICAgIGhvb2tzLmxvY2FsZXMgPSBsaXN0TG9jYWxlcztcbiAgICBob29rcy53ZWVrZGF5c1Nob3J0ID0gbGlzdFdlZWtkYXlzU2hvcnQ7XG4gICAgaG9va3Mubm9ybWFsaXplVW5pdHMgPSBub3JtYWxpemVVbml0cztcbiAgICBob29rcy5yZWxhdGl2ZVRpbWVSb3VuZGluZyA9IGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nO1xuICAgIGhvb2tzLnJlbGF0aXZlVGltZVRocmVzaG9sZCA9IGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZDtcbiAgICBob29rcy5jYWxlbmRhckZvcm1hdCA9IGdldENhbGVuZGFyRm9ybWF0O1xuICAgIGhvb2tzLnByb3RvdHlwZSA9IHByb3RvO1xuXG4gICAgLy8gY3VycmVudGx5IEhUTUw1IGlucHV0IHR5cGUgb25seSBzdXBwb3J0cyAyNC1ob3VyIGZvcm1hdHNcbiAgICBob29rcy5IVE1MNV9GTVQgPSB7XG4gICAgICAgIERBVEVUSU1FX0xPQ0FMOiAnWVlZWS1NTS1ERFRISDptbScsIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiAvPlxuICAgICAgICBEQVRFVElNRV9MT0NBTF9TRUNPTkRTOiAnWVlZWS1NTS1ERFRISDptbTpzcycsIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBzdGVwPVwiMVwiIC8+XG4gICAgICAgIERBVEVUSU1FX0xPQ0FMX01TOiAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1MnLCAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgc3RlcD1cIjAuMDAxXCIgLz5cbiAgICAgICAgREFURTogJ1lZWVktTU0tREQnLCAvLyA8aW5wdXQgdHlwZT1cImRhdGVcIiAvPlxuICAgICAgICBUSU1FOiAnSEg6bW0nLCAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiAvPlxuICAgICAgICBUSU1FX1NFQ09ORFM6ICdISDptbTpzcycsIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIHN0ZXA9XCIxXCIgLz5cbiAgICAgICAgVElNRV9NUzogJ0hIOm1tOnNzLlNTUycsIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIHN0ZXA9XCIwLjAwMVwiIC8+XG4gICAgICAgIFdFRUs6ICdHR0dHLVtXXVdXJywgLy8gPGlucHV0IHR5cGU9XCJ3ZWVrXCIgLz5cbiAgICAgICAgTU9OVEg6ICdZWVlZLU1NJywgLy8gPGlucHV0IHR5cGU9XCJtb250aFwiIC8+XG4gICAgfTtcblxuICAgIHJldHVybiBob29rcztcblxufSkpKTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJtb21lbnQuanMubWFwIn0=
