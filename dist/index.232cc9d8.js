// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"QbuC7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "d195c1ac232cc9d8";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
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
            removeErrorOverlay();
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
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
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
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
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
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
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

},{}],"bJleg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainViewJs = require("./views/mainView.js");
var _mainViewJsDefault = parcelHelpers.interopDefault(_mainViewJs);
var _gameViewJs = require("./views/gameView.js");
var _gameViewJsDefault = parcelHelpers.interopDefault(_gameViewJs);
var _resultViewJs = require("./views/resultView.js");
var _resultViewJsDefault = parcelHelpers.interopDefault(_resultViewJs);
var _modelJs = require("./model.js");
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
// https://quizapi.io/docs/1.0/overview#request-parameters
// if (module.hot) {
// 	module.hot.accept();
// }
const controlActive = (e, categoryList, categoryParent)=>{
    const cat = e.target.closest('.main__item');
    // Guard class
    if (!cat) return;
    // Remove active calss from all category elements
    _mainViewJsDefault.default.removeActiveClass(categoryList);
    // Set active class
    cat.classList.add('active');
    // Set current category in game object
    _modelJs.gameState.category = cat.dataset.cat;
};
const controlStart = async (questionAmount)=>{
    try {
        _modelJs.gameState.questionAmount = questionAmount;
        // LOAD SPINNER
        _mainViewJsDefault.default.renderSpinner();
        const { ok: status  } = await _modelJs.getData();
        if (!status) throw new Error('Cannot load questions from server');
        // gameState.questionData = [testOBJ];
        _gameViewJsDefault.default.render(_modelJs.gameState);
        refreshGameHandler();
    } catch (err) {
        _mainViewJsDefault.default.removeSpinner();
        _mainViewJsDefault.default.renderError(err.message);
        await _helpersJs.wait(4000);
        _mainViewJsDefault.default.removeError();
    }
};
const controlBack = ()=>{
    _modelJs.resetGameState();
    _mainViewJsDefault.default.render();
    init();
};
const controlselectAnswers = function(clickedAnswer) {
    // Add / remove selected class on answer
    _gameViewJsDefault.default.toggleSelectedClass(clickedAnswer);
    // Add or remove answer from array
    if (_modelJs.gameState.selectedAnswers.includes(clickedAnswer)) {
        // Find index of proper answer
        const index = _modelJs.gameState.selectedAnswers.findIndex((el)=>el === clickedAnswer
        );
        // remove
        _modelJs.gameState.selectedAnswers.splice(index, 1);
    } else _modelJs.gameState.selectedAnswers.push(clickedAnswer);
};
const controlCheckButton = ()=>{
    controllAnswer(_modelJs.gameState.selectedAnswers, true);
};
const controllAnswer = async (clickedAnswer, multi = false)=>{
    const correctAnswers = [];
    const currentQuestion = _modelJs.gameState.questionData[_modelJs.gameState.currentQuestion - 1];
    // Push correct answers to the array
    Object.entries(currentQuestion.correct_answers).forEach((el, i)=>{
        if (el[1] === 'true') correctAnswers.push(el[0].slice(7, 8).toUpperCase());
    });
    if (multi) {
        correctAnswers.sort();
        clickedAnswer.sort();
    }
    if (correctAnswers.join('') === clickedAnswer.join('')) {
        // Add correct flag to the question object
        currentQuestion.correct = true;
        _modelJs.gameState.correctAnsCounter++;
    // Set the color of the element to green
    } else currentQuestion.correct = false;
    _gameViewJsDefault.default.setAnswersColor(correctAnswers);
    // Add player answer to questionData
    const playerAns = clickedAnswer.flatMap((el)=>{
        const output = `answer_${el.toLowerCase()}`;
        return output;
    });
    _modelJs.gameState.questionData[_modelJs.gameState.currentQuestion - 1].playerAnswer = playerAns;
    _modelJs.gameState.currentQuestion++;
    // Wait and reneder another question.
    if (_modelJs.gameState.currentQuestion <= _modelJs.gameState.questionAmount) {
        await _helpersJs.wait(_configJs.TIME_TO_NEXT_QUESTION);
        _gameViewJsDefault.default.render(_modelJs.gameState);
        refreshGameHandler();
    } else {
        _resultViewJsDefault.default.render(_modelJs.gameState);
        _resultViewJsDefault.default.addHanlderBack(controlBack);
    // RESULT VIEW
    }
};
const refreshGameHandler = ()=>{
    _gameViewJsDefault.default.addHandlerAnswer(controllAnswer, controlselectAnswers);
    _gameViewJsDefault.default.addHandlerButton(controlCheckButton);
    _gameViewJsDefault.default.addHanlderBack(controlBack);
    _modelJs.gameState.selectedAnswers = [];
};
const init = ()=>{
    _mainViewJsDefault.default.addHandlerActive(controlActive);
    _mainViewJsDefault.default.addHandlerStart(controlStart);
};
init();

},{"./views/mainView.js":"d5SRH","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./views/gameView.js":"cOp1n","./model.js":"7gFI5","./config.js":"kjqCk","./helpers.js":"e6FKD","./views/resultView.js":"ceKVf"}],"d5SRH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class MainView extends _viewDefault.default {
    _parentElement = document.querySelector('.main');
    _categoryList = document.querySelectorAll('.main__item');
    _categoryParent = document.querySelector('.main__cat-list');
    _errorMessage = 'Set amout of question between 1 and 25.';
    render() {
        this._parentElement.innerHTML = this._generateMarkup();
        this._categoryList = document.querySelectorAll('.main__item');
        this._parentElement = document.querySelector('.main');
        this._categoryParent = document.querySelector('.main__cat-list');
    }
    _generateMarkup() {
        const html = `<div class="main__category-box">\n    <h2 class="main__category-title">Chose category</h2>\n    <ul class="main__cat-list">\n      <li class="main__item active" data-cat="linux">\n        <div class="main__item-box">\n          <i class="icofont-brand-linux main__item-img"></i>\n          <p class="main__item-title">Linux</p>\n        </div>\n      </li>\n      <li class="main__item" data-cat="code">\n        <div class="main__item-box">\n          <i class="icofont-code-alt main__item-img"></i>\n          <p class="main__item-title">Programming</p>\n        </div>\n      </li>\n      <li class="main__item" data-cat="devops">\n        <div class="main__item-box">\n          <i class="icofont-options main__item-img"></i>\n          <p class="main__item-title">DevOps</p>\n        </div>\n      </li>\n      <li class="main__item" data-cat="sql">\n        <div class="main__item-box">\n          <i class="icofont-database main__item-img"></i>\n\n          <p class="main__item-title">SQL</p>\n        </div>\n      </li>\n      <li class="main__item" data-cat="docker">\n        <div class="main__item-box">\n          <i class="icofont-console main__item-img"></i>\n          <p class="main__item-title">Docker</p>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <form class="main__form">\n    <label for="quantity" class="main__form-label"\n      >Set amount of questions</label\n    >\n    <input\n      class="main__input"\n      type="number"\n      id="quantity"\n      name="quantity"\n      min="1"\n      max="25"\n    />\n    <button type="submit" class="main__btn-start btn">START</button>\n  </form>`;
        return html;
    }
    removeActiveClass(elements) {
        elements.forEach((el)=>{
            el.classList.remove('active');
        });
    }
    addHandlerActive(handler) {
        const that = this;
        this._categoryParent.addEventListener('click', function(e) {
            e.preventDefault();
            handler(e, that._categoryList, that._categoryParent);
        });
    }
    addHandlerStart(handler) {
        const form = document.querySelector('.main__form');
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            const input = e.target.querySelector('.main__input');
            if (!input.value) {
                this._renderError();
                return;
            }
            handler(input.value);
        });
    }
}
exports.default = new MainView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./view":"5ALGj"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5ALGj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    renderSpinner() {
        this._parentElement.insertAdjacentHTML('beforeend', '<div class="main__loader">Loading...</div>');
    }
    removeSpinner() {
        const spinner = this._parentElement.querySelector('.main__loader');
        spinner.remove();
    }
    renderError(msg = this._errorMessage) {
        const htmlError = `\n    <div class="main__error-box">\n    <h2 class="main__error-title">Error</h2>\n    <p class="main__error-desc">\n     ${msg}\n    </p>\n  </div>`;
        this._parentElement.insertAdjacentHTML('beforeend', htmlError);
    }
    removeError() {
        const errorElement = this._parentElement.querySelector('.main__error-box');
        errorElement.remove();
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cOp1n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class GameView extends _viewDefault.default {
    _parentElement = document.querySelector('.main');
    _colorsArray = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven'
    ];
    _data;
    _clickedAnswer;
    render(data) {
        this._data = data;
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', this._generateMarkup());
    }
    _shuffleArray(array) {
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    _generateMarkup() {
        // Randomize colors
        this._shuffleArray(this._colorsArray);
        const answers = Object.entries(this._data.questionData[this._data.currentQuestion - 1].answers);
        const baseHTML = `	<div class="main__game-box">\n    <button class="main__btn-back btn">\n      <i class="icofont-caret-left main__back-icon"></i>\n    </button>\n    <p class="main__category">${this._data.category === 'code' ? 'programming' : this._data.category}</p>\n    <p class="main__stats">${this._data.currentQuestion} of ${this._data.questionAmount}</p>\n    <div class="main__question-box">\n      <p class="main__question">\n      ${this._data.questionData[this._data.currentQuestion - 1].question.replace(/</g, '&lt;').replace(/>/g, '&gt;')}\n      </p>\n    </div>\n    ${this._data.questionData[this._data.currentQuestion - 1].multiple_correct_answers === 'true' ? `<div class="main__flag-box">\n    <div class="main__flag-multi">\n      <i class="icofont-layers main__flag-icon"></i>\n      <p class="main__flag-desc">Multiple answers</p>\n    </div>\n    <button class="btn main__btn-check">check</button>\n  </div>` : ''}\n    <div class="main__answers-box">\n   `;
        let answerHTML = ``;
        answers.forEach((el, i)=>{
            answerHTML += this._generateAnswerMarkup(el, i);
        });
        answerHTML += `</div> </div>`;
        return baseHTML + answerHTML;
    }
    _generateAnswerMarkup(answer, index) {
        const ansOption = answer[0].slice(-1).toUpperCase();
        if (!answer[1]) return '';
        return `\n      <div class="main__option main__option--${this._colorsArray[index]}" data-ans="${ansOption}">\n        <span class="main__answer-opt"> ${ansOption}.</span>\n        <span class="main__answer">${answer[1].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>\n      </div>`;
    }
    setAnswersColor(correctData) {
        const answers = document.querySelectorAll('.main__option');
        answers.forEach((el)=>el.classList.add('wrong')
        );
        correctData.forEach((el)=>{
            const correctEl = document.querySelector(`[data-ans="${el}"]`);
            correctEl.classList.remove('wrong');
            correctEl.classList.add('correct');
        });
    }
    toggleSelectedClass(correctData) {
        const correctEl = document.querySelector(`[data-ans="${correctData}"]`);
        correctEl.classList.toggle('selected');
    }
    addHandlerButton(handler) {
        if (this._data.questionData[this._data.currentQuestion - 1].multiple_correct_answers === 'true') {
            const btn = document.querySelector('.main__btn-check');
            btn.addEventListener('click', handler);
        }
    }
    addHanlderBack(handler) {
        const btnBack = document.querySelector('.main__btn-back ');
        btnBack.addEventListener('click', handler);
    }
    addHandlerAnswer(handlerSingle, handlerMulti) {
        const answerBox = document.querySelector('.main__answers-box');
        const that = this;
        answerBox.addEventListener('click', function(e) {
            const answer = e.target.closest('.main__option');
            that._clickedAnswer = answer;
            if (!answer) return;
            if (that._data.questionData[that._data.currentQuestion - 1].multiple_correct_answers === 'true') handlerMulti(answer.dataset.ans);
            else {
                handlerSingle([
                    answer.dataset.ans
                ]);
                // Way to delete event listener
                answerBox.replaceWith(answerBox.cloneNode(true));
            }
        });
    }
}
exports.default = new GameView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./view":"5ALGj"}],"7gFI5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameState", ()=>gameState
);
parcelHelpers.export(exports, "testOBJ", ()=>testOBJ
);
parcelHelpers.export(exports, "resetGameState", ()=>resetGameState
);
parcelHelpers.export(exports, "getData", ()=>getData
);
var _config = require("./config");
var _helpers = require("./helpers");
const gameState = {
    difficulty: 'easy',
    category: 'linux',
    questionAmount: 1,
    currentQuestion: 1,
    correctAnsCounter: 0,
    selectedAnswers: []
};
const testOBJ = {
    id: 1078,
    question: 'If you see a directory with the following permissions `drwxrwxrxt`, would you be able to remove it?',
    description: null,
    answers: {
        answer_a: 'Only the owner of the folder can remove this folder',
        answer_b: 'Yes, we can remove it from any user',
        answer_c: 'We can remove it with the root user',
        answer_d: 'We can remove it only using the root user',
        answer_e: "No, this folder can't be remove.",
        answer_f: null
    },
    multiple_correct_answers: 'true',
    correct_answers: {
        answer_a_correct: 'true',
        answer_b_correct: 'false',
        answer_c_correct: 'true',
        answer_d_correct: 'false',
        answer_e_correct: 'false',
        answer_f_correct: 'false'
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [
        {
            name: 'Linux'
        }, 
    ],
    category: 'Linux',
    difficulty: 'Easy'
};
const resetGameState = ()=>{
    gameState.currentQuestion = 1;
    gameState.questionAmount = 1;
    gameState.category = 'linux';
    gameState.difficulty = 'easy';
    gameState.correctAnsCounter = 0;
};
const getData = async function() {
    try {
        const res = await Promise.race([
            fetch(`${_config.URL}?apiKey=${_config.API_KEY}&difficulty=${gameState.difficulty}&category=${gameState.category}&limit=${gameState.questionAmount}`),
            _helpers.timeout(_config.TIMEOUT_MS), 
        ]);
        const data = await res.json();
        console.log(data);
        gameState.questionData = data;
        return res;
    } catch (err) {
        throw err;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./config":"kjqCk","./helpers":"e6FKD"}],"kjqCk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY
);
parcelHelpers.export(exports, "URL", ()=>URL1
);
parcelHelpers.export(exports, "TIME_TO_NEXT_QUESTION", ()=>TIME_TO_NEXT_QUESTION
);
parcelHelpers.export(exports, "TIMEOUT_MS", ()=>TIMEOUT_MS
);
const API_KEY = 'LNXxGa78iJDbyQcJFpzEGX1QnsKk4xnCXuNrQRUl';
const URL1 = 'https://quizapi.io/api/v1/questions';
const TIME_TO_NEXT_QUESTION = 3000;
const TIMEOUT_MS = 10000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"e6FKD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wait", ()=>wait
);
parcelHelpers.export(exports, "timeout", ()=>timeout
);
const wait = async function(ms) {
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
};
const timeout = async function(ms) {
    return new Promise((_, reject)=>{
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${ms / 1000} seconds`));
        }, ms);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ceKVf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ResultView extends _viewDefault.default {
    _parentElement = document.querySelector('.main');
    _data;
    render(data) {
        this._data = data;
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('beforeend', this._generateMarkup());
    }
    _generateMarkup() {
        let html = `\n    	<div class="main__result-box">\n          <button class="main__btn-back btn">\n            <i class="icofont-caret-left main__back-icon"></i>\n          </button>\n          <h2 class="main__result-title">${this._data.correctAnsCounter} CORRECT ANSWERS</h2>\n       `;
        for(let i = 0; i < this._data.questionAmount; i++)html += this._generateQuestion(i);
        html += '</div>';
        return html;
    }
    _generateQuestion(index) {
        const playerAnswer = this._data.questionData[index].playerAnswer;
        const correctAnswers = Object.entries(this._data.questionData[index].correct_answers);
        let baseHtml = `\n    <div class="main__question-box main__question-box--small">\n      <p class="main__question main__question--small">${this._data.questionData[index].question}</p>\n    </div>\n    <div class="main__answers-box main__answers-box--small">\n      \n      \n      `;
        let playerHtml = '<p class ="main__result-correct"> Your answer: </p>';
        let gameAnsHtml = '';
        playerAnswer.forEach((el)=>{
            const category = el.slice(-1).toUpperCase();
            const answerText = this._data.questionData[index].answers[el];
            const playerCorrect = this._data.questionData[index].correct;
            playerHtml += this._generateAnswerMarkup(answerText, category, playerCorrect);
        });
        baseHtml += playerHtml;
        baseHtml += '<p class ="main__result-correct"> Answer: </p>';
        correctAnswers.forEach((el)=>{
            if (el[1] === 'true') {
                const answerTag = el[0].slice(0, 8);
                const category = answerTag.slice(-1).toUpperCase();
                const answerText = this._data.questionData[index].answers[answerTag];
                gameAnsHtml += this._generateAnswerMarkup(answerText, category, true);
            }
        });
        baseHtml += `${gameAnsHtml}</div>`;
        return baseHtml;
    }
    _generateAnswerMarkup(answer, ansOption, playerCorrect, correctAns = false) {
        return `\n      <div class="main__option main__option--small ${playerCorrect || correctAns ? 'correct' : 'wrong'}" data-ans="${ansOption}">\n        <span class="main__answer-opt"> ${ansOption}.</span>\n        <span class="main__answer">${answer.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>\n      </div>`;
    }
    addHanlderBack(handler) {
        const btnBack = document.querySelector('.main__btn-back ');
        btnBack.addEventListener('click', handler);
    }
}
exports.default = new ResultView();

},{"./view":"5ALGj","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["QbuC7","bJleg"], "bJleg", "parcelRequiree238")

//# sourceMappingURL=index.232cc9d8.js.map
