if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

/*! smooth-scroll v9.1.3 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,r,o,a,c={},u="querySelector"in document&&"addEventListener"in e,i={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},l=function(){var e={},t=!1,n=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=l(!0,e[r],n[r]):e[r]=n[r])};r>n;n++){var a=arguments[n];o(a)}return e},s=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e,t){var n,r,o=t.charAt(0),a="classList"in document.documentElement;for("["===o&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(r=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document&&1===e.nodeType;e=e.parentNode){if("."===o)if(a){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===o&&e.id===t.substr(1))return e;if("["===o&&e.hasAttribute(n[0])){if(!r)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null};c.escapeCharacters=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,o=-1,a="",c=n.charCodeAt(0);++o<r;){if(t=n.charCodeAt(o),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===o&&t>=48&&57>=t||1===o&&t>=48&&57>=t&&45===c?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(o):"\\"+n.charAt(o)}return"#"+a};var d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var r=0;if(e.offsetParent)do r+=e.offsetTop,e=e.offsetParent;while(e);return r=r-t-n,r>=0?r:0},p=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},m=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},g=function(t,n){e.history.pushState&&(n||"true"===n)&&"file:"!==e.location.protocol&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},b=function(e){return null===e?0:s(e)+e.offsetTop};c.animateScroll=function(n,c,u){var s=m(c?c.getAttribute("data-options"):null),f=l(t||i,u||{},s),v="[object Number]"===Object.prototype.toString.call(n),y=v?null:"#"===n?e.document.documentElement:e.document.querySelector(n);if(v||y){var O=e.pageYOffset;r||(r=e.document.querySelector(f.selectorHeader)),o||(o=b(r));var S,I,H=v?n:h(y,o,parseInt(f.offset,10)),E=H-O,j=p(),C=0;v||g(n,f.updateURL);var L=function(t,r,o){var a=e.pageYOffset;(t==r||a==r||e.innerHeight+a>=j)&&(clearInterval(o),v||y.focus(),f.callback(n,c))},w=function(){C+=16,S=C/parseInt(f.speed,10),S=S>1?1:S,I=O+E*d(f.easing,S),e.scrollTo(0,Math.floor(I)),L(I,H,a)},A=function(){clearInterval(a),a=setInterval(w,16)};0===e.pageYOffset&&e.scrollTo(0,0),A()}};var v=function(e){if(0===e.button&&!e.metaKey&&!e.ctrlKey){var n=f(e.target,t.selector);if(n&&"a"===n.tagName.toLowerCase()){e.preventDefault();var r=c.escapeCharacters(n.hash);c.animateScroll(r,n,t)}}},y=function(e){n||(n=setTimeout(function(){n=null,o=b(r)},66))};return c.destroy=function(){t&&(e.document.removeEventListener("click",v,!1),e.removeEventListener("resize",y,!1),t=null,n=null,r=null,o=null,a=null)},c.init=function(n){u&&(c.destroy(),t=l(i,n||{}),r=e.document.querySelector(t.selectorHeader),o=b(r),e.document.addEventListener("click",v,!1),r&&e.addEventListener("resize",y,!1))},c});
/*!
 * clipboard.js v1.5.13
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Clipboard = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Module Dependencies
 */

try {
  var matches = require('matches-selector')
} catch (err) {
  var matches = require('component-matches-selector')
}

/**
 * Export `closest`
 */

module.exports = closest

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Element} scope (optional)
 */

function closest (el, selector, scope) {
  scope = scope || document.documentElement;

  // walk up the dom
  while (el && el !== scope) {
    if (matches(el, selector)) return el;
    el = el.parentNode;
  }

  // check scope for match
  return matches(el, selector) ? el : null;
}

},{"component-matches-selector":2,"matches-selector":2}],2:[function(require,module,exports){
/**
 * Module dependencies.
 */

try {
  var query = require('query');
} catch (err) {
  var query = require('component-query');
}

/**
 * Element prototype.
 */

var proto = Element.prototype;

/**
 * Vendor function.
 */

var vendor = proto.matches
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = query.all(selector, el.parentNode);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}

},{"component-query":3,"query":3}],3:[function(require,module,exports){
function one(selector, el) {
  return el.querySelector(selector);
}

exports = module.exports = function(selector, el){
  el = el || document;
  return one(selector, el);
};

exports.all = function(selector, el){
  el = el || document;
  return el.querySelectorAll(selector);
};

exports.engine = function(obj){
  if (!obj.one) throw new Error('.one callback required');
  if (!obj.all) throw new Error('.all callback required');
  one = obj.one;
  exports.all = obj.all;
  return exports;
};

},{}],4:[function(require,module,exports){
var closest = require('component-closest');

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector, true);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;

},{"component-closest":1}],5:[function(require,module,exports){
/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};

},{}],6:[function(require,module,exports){
var is = require('./is');
var delegate = require('delegate');

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;

},{"./is":5,"delegate":4}],7:[function(require,module,exports){
function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        element.focus();
        element.setSelectionRange(0, element.value.length);

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;

},{}],8:[function(require,module,exports){
function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;

},{}],9:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'select'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        ClipboardAction.prototype.resolveOptions = function resolveOptions() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            this.action = options.action;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        };

        ClipboardAction.prototype.initSelection = function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        };

        ClipboardAction.prototype.selectFake = function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.addEventListener('focus', window.scrollTo(0, yPosition));
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            document.body.appendChild(this.fakeElem);

            this.selectedText = (0, _select2.default)(this.fakeElem);
            this.copyText();
        };

        ClipboardAction.prototype.removeFake = function removeFake() {
            if (this.fakeHandler) {
                document.body.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                document.body.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        };

        ClipboardAction.prototype.selectTarget = function selectTarget() {
            this.selectedText = (0, _select2.default)(this.target);
            this.copyText();
        };

        ClipboardAction.prototype.copyText = function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        };

        ClipboardAction.prototype.handleResult = function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        };

        ClipboardAction.prototype.clearSelection = function clearSelection() {
            if (this.target) {
                this.target.blur();
            }

            window.getSelection().removeAllRanges();
        };

        ClipboardAction.prototype.destroy = function destroy() {
            this.removeFake();
        };

        _createClass(ClipboardAction, [{
            key: 'action',
            set: function set() {
                var action = arguments.length <= 0 || arguments[0] === undefined ? 'copy' : arguments[0];

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

},{"select":7}],10:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', './clipboard-action', 'tiny-emitter', 'good-listener'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, _Emitter.call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        Clipboard.prototype.resolveOptions = function resolveOptions() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
        };

        Clipboard.prototype.listenClick = function listenClick(trigger) {
            var _this2 = this;

            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        };

        Clipboard.prototype.onClick = function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new _clipboardAction2.default({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                trigger: trigger,
                emitter: this
            });
        };

        Clipboard.prototype.defaultAction = function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        };

        Clipboard.prototype.defaultTarget = function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        };

        Clipboard.prototype.defaultText = function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        };

        Clipboard.prototype.destroy = function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        };

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

},{"./clipboard-action":9,"good-listener":6,"tiny-emitter":8}]},{},[10])(10)
});
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var n in i)e.push(i[n]);for(var o=0,r=e.length;r>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,n={},o=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete n[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))})},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var n=e[i],o=n.newScroll>n.oldScroll,r=o?n.forward:n.backward;for(var s in this.waypoints[i]){var l=this.waypoints[i][s],a=n.oldScroll<l.triggerPoint,h=n.newScroll>=l.triggerPoint,p=a&&h,u=!a&&!h;(p||u)&&(l.queueTrigger(r),t[l.group.id]=l.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var n=0,o=t.length;o>n;n++)t[n].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),n={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var l in this.waypoints[r]){var a,h,p,u,c,f=this.waypoints[r][l],d=f.options.offset,y=f.triggerPoint,g=0,w=null==y;f.element!==f.element.window&&(g=f.adapter.offset()[s.offsetProp]),"function"==typeof d?d=d.apply(f):"string"==typeof d&&(d=parseFloat(d),f.options.offset.indexOf("%")>-1&&(d=Math.ceil(s.contextDimension*d/100))),a=s.contextScroll-s.contextOffset,f.triggerPoint=g+a-d,h=y<s.oldScroll,p=f.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!w&&u?(f.queueTrigger(s.backward),n[f.group.id]=f.group):!w&&c?(f.queueTrigger(s.forward),n[f.group.id]=f.group):w&&s.oldScroll>=f.triggerPoint&&(f.queueTrigger(s.forward),n[f.group.id]=f.group)}}return o.requestAnimationFrame(function(){for(var t in n)n[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in n)n[t].refresh()},e.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},o.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},o=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var n=this.triggerQueues[i],o="up"===i||"left"===i;n.sort(o?e:t);for(var r=0,s=n.length;s>r;r+=1){var l=n[r];(l.options.continuous||r===n.length-1)&&l.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints),n=i===this.waypoints.length-1;return n?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return n[t.axis][t.name]||new i(t)},o.Group=i}(),function(){"use strict";function t(t){return t===t.window}function e(e){return t(e)?e:e.defaultView}function i(t){this.element=t,this.handlers={}}var n=window.Waypoint;i.prototype.innerHeight=function(){var e=t(this.element);return e?this.element.innerHeight:this.element.clientHeight},i.prototype.innerWidth=function(){var e=t(this.element);return e?this.element.innerWidth:this.element.clientWidth},i.prototype.off=function(t,e){function i(t,e,i){for(var n=0,o=e.length-1;o>n;n++){var r=e[n];i&&i!==r||t.removeEventListener(r)}}var n=t.split("."),o=n[0],r=n[1],s=this.element;if(r&&this.handlers[r]&&o)i(s,this.handlers[r][o],e),this.handlers[r][o]=[];else if(o)for(var l in this.handlers)i(s,this.handlers[l][o]||[],e),this.handlers[l][o]=[];else if(r&&this.handlers[r]){for(var a in this.handlers[r])i(s,this.handlers[r][a],e);this.handlers[r]={}}},i.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,i=e(this.element.ownerDocument),n={top:0,left:0};return this.element.getBoundingClientRect&&(n=this.element.getBoundingClientRect()),{top:n.top+i.pageYOffset-t.clientTop,left:n.left+i.pageXOffset-t.clientLeft}},i.prototype.on=function(t,e){var i=t.split("."),n=i[0],o=i[1]||"__default",r=this.handlers[o]=this.handlers[o]||{},s=r[n]=r[n]||[];s.push(e),this.element.addEventListener(n,e)},i.prototype.outerHeight=function(e){var i,n=this.innerHeight();return e&&!t(this.element)&&(i=window.getComputedStyle(this.element),n+=parseInt(i.marginTop,10),n+=parseInt(i.marginBottom,10)),n},i.prototype.outerWidth=function(e){var i,n=this.innerWidth();return e&&!t(this.element)&&(i=window.getComputedStyle(this.element),n+=parseInt(i.marginLeft,10),n+=parseInt(i.marginRight,10)),n},i.prototype.scrollLeft=function(){var t=e(this.element);return t?t.pageXOffset:this.element.scrollLeft},i.prototype.scrollTop=function(){var t=e(this.element);return t?t.pageYOffset:this.element.scrollTop},i.extend=function(){function t(t,e){if("object"==typeof t&&"object"==typeof e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}for(var e=Array.prototype.slice.call(arguments),i=1,n=e.length;n>i;i++)t(e[0],e[i]);return e[0]},i.inArray=function(t,e,i){return null==e?-1:e.indexOf(t,i)},i.isEmptyObject=function(t){for(var e in t)return!1;return!0},n.adapters.push({name:"noframework",Adapter:i}),n.Adapter=i}();
/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) { 
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipeUI_Default = factory();
	}
})(this, function () {

	'use strict';



var PhotoSwipeUI_Default =
 function(pswp, framework) {

	var ui = this;
	var _overlayUIUpdated = false,
		_controlsVisible = true,
		_fullscrenAPI,
		_controls,
		_captionContainer,
		_fakeCaptionContainer,
		_indexIndicator,
		_shareButton,
		_shareModal,
		_shareModalHidden = true,
		_initalCloseOnScrollValue,
		_isIdle,
		_listen,

		_loadingIndicator,
		_loadingIndicatorHidden,
		_loadingIndicatorTimeout,

		_galleryHasOneSlide,

		_options,
		_defaultUIOptions = {
			barsSize: {top:44, bottom:'auto'},
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
			timeToIdle: 4000, 
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s
			
			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
				if(!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl:true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [
				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
													'?url={{url}}&media={{image_url}}&description={{text}}'},
				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			],
			getImageURLForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function( /* shareButtonData */ ) {
				return window.location.href;
			},
			getTextForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.title || '';
			},
				
			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		_blockControlsTap,
		_blockControlsTapTimeout;



	var _onControlsTap = function(e) {
			if(_blockControlsTap) {
				return true;
			}


			e = e || window.event;

			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}


			var target = e.target || e.srcElement,
				uiElement,
				clickedClass = target.getAttribute('class') || '',
				found;

			for(var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
					uiElement.onTap();
					found = true;

				}
			}

			if(found) {
				if(e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function() {
					_blockControlsTap = false;
				}, tapDelay);
			}

		},
		_fitControlsInViewport = function() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		_togglePswpClass = function(el, cName, add) {
			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
		},

		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function() {
			var hasOneSlide = (_options.getNumItemsFn() === 1);

			if(hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		_toggleShareModalClass = function() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		_toggleShareModal = function() {

			_shareModalHidden = !_shareModalHidden;
			
			
			if(!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function() {
					if(!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function() {
					if(_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}
			
			if(!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},

		_openWindowPopup = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if(!target.href) {
				return false;
			}

			if( target.hasAttribute('download') ) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
										'location=yes,width=550,height=420,top=100,left=' + 
										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

			if(!_shareModalHidden) {
				_toggleShareModal();
			}
			
			return false;
		},
		_updateShareURLs = function() {
			var shareButtonOut = '',
				shareButtonData,
				shareURL,
				image_url,
				page_url,
				share_text;

			for(var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
									.replace('{{image_url}}', encodeURIComponent(image_url) )
									.replace('{{raw_image_url}}', image_url )
									.replace('{{text}}', encodeURIComponent(share_text) );

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
									'class="pswp__share--' + shareButtonData.id + '"' +
									(shareButtonData.download ? 'download' : '') + '>' + 
									shareButtonData.label + '</a>';

				if(_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;

		},
		_hasCloseClass = function(target) {
			for(var  i = 0; i < _options.closeElClasses.length; i++) {
				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
					return true;
				}
			}
		},
		_idleInterval,
		_idleTimer,
		_idleIncrement = 0,
		_onIdleMouseMove = function() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if(_isIdle) {
				ui.setIdle(false);
			}
		},
		_onMouseLeaveWindow = function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function() {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		_setupFullscreenAPI = function() {
			if(_options.fullscreenEl && !framework.features.isOldAndroid) {
				if(!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if(_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		_setupLoadingIndicator = function() {
			// Setup loading indicator
			if(_options.preloaderEl) {
			
				_toggleLoadingIndicator(true);

				_listen('beforeChange', function() {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function() {

						if(pswp.currItem && pswp.currItem.loading) {

							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false); 
								// items-controller.js function allowProgressiveImg
							}
							
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}

					}, _options.loadingIndicatorDelay);
					
				});
				_listen('imageLoadComplete', function(index, item) {
					if(pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});

			}
		},
		_toggleLoadingIndicator = function(hide) {
			if( _loadingIndicatorHidden !== hide ) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		_applyNavBarGaps = function(item) {
			var gap = item.vGap;

			if( _fitControlsInViewport() ) {
				
				var bars = _options.barsSize; 
				if(_options.captionEl && bars.bottom === 'auto') {
					if(!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize,10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}
				
				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		_setupIdle = function() {
			// Hide controls when mouse is used
			if(_options.timeToIdle) {
				_listen('mouseUsed', function() {
					
					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function() {
						_idleIncrement++;
						if(_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		_setupHidingControlsDuringGestures = function() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function(now) {
				if(_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if(!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose' , function(now) {
				if(_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function() {
				pinchControlsHidden = false;
				if(pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});

		};



	var _uiElements = [
		{ 
			name: 'caption', 
			option: 'captionEl',
			onInit: function(el) {  
				_captionContainer = el; 
			} 
		},
		{ 
			name: 'share-modal', 
			option: 'shareEl',
			onInit: function(el) {  
				_shareModal = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--share', 
			option: 'shareEl',
			onInit: function(el) { 
				_shareButton = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--zoom', 
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		},
		{ 
			name: 'counter', 
			option: 'counterEl',
			onInit: function(el) {  
				_indexIndicator = el;
			} 
		},
		{ 
			name: 'button--close', 
			option: 'closeEl',
			onTap: pswp.close
		},
		{ 
			name: 'button--arrow--left', 
			option: 'arrowEl',
			onTap: pswp.prev
		},
		{ 
			name: 'button--arrow--right', 
			option: 'arrowEl',
			onTap: pswp.next
		},
		{ 
			name: 'button--fs', 
			option: 'fullscreenEl',
			onTap: function() {  
				if(_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			} 
		},
		{ 
			name: 'preloader', 
			option: 'preloaderEl',
			onInit: function(el) {  
				_loadingIndicator = el;
			} 
		}

	];

	var _setupUIElements = function() {
		var item,
			classAttr,
			uiElement;

		var loopThroughChildElements = function(sChildren) {
			if(!sChildren) {
				return;
			}

			var l = sChildren.length;
			for(var i = 0; i < l; i++) {
				item = sChildren[i];
				classAttr = item.className;

				for(var a = 0; a < _uiElements.length; a++) {
					uiElement = _uiElements[a];

					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

						if( _options[uiElement.option] ) { // if element is not disabled from options
							
							framework.removeClass(item, 'pswp__element--disabled');
							if(uiElement.onInit) {
								uiElement.onInit(item);
							}
							
							//item.style.display = 'block';
						} else {
							framework.addClass(item, 'pswp__element--disabled');
							//item.style.display = 'none';
						}
					}
				}
			}
		};
		loopThroughChildElements(_controls.children);

		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
		if(topBar) {
			loopThroughChildElements( topBar.children );
		}
	};


	

	ui.init = function() {

		// extend options
		framework.extend(pswp.options, _defaultUIOptions, true);

		// create local link for fast access
		_options = pswp.options;

		// find pswp__ui element
		_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

		// create local link
		_listen = pswp.listen;


		_setupHidingControlsDuringGestures();

		// update controls when slides change
		_listen('beforeChange', ui.update);

		// toggle zoom on double-tap
		_listen('doubleTap', function(point) {
			var initialZoomLevel = pswp.currItem.initialZoomLevel;
			if(pswp.getZoomLevel() !== initialZoomLevel) {
				pswp.zoomTo(initialZoomLevel, point, 333);
			} else {
				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
			}
		});

		// Allow text selection in caption
		_listen('preventDragEvent', function(e, isDown, preventObj) {
			var t = e.target || e.srcElement;
			if(
				t && 
				t.getAttribute('class') && e.type.indexOf('mouse') > -1 && 
				( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
			) {
				preventObj.prevent = false;
			}
		});

		// bind events for UI
		_listen('bindEvents', function() {
			framework.bind(_controls, 'pswpTap click', _onControlsTap);
			framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

			if(!pswp.likelyTouchDevice) {
				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
			}
		});

		// unbind events for UI
		_listen('unbindEvents', function() {
			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			if(_idleInterval) {
				clearInterval(_idleInterval);
			}
			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
			framework.unbind(document, 'mousemove', _onIdleMouseMove);
			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
			framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

			if(_fullscrenAPI) {
				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
				if(_fullscrenAPI.isFullscreen()) {
					_options.hideAnimationDuration = 0;
					_fullscrenAPI.exit();
				}
				_fullscrenAPI = null;
			}
		});


		// clean up things when gallery is destroyed
		_listen('destroy', function() {
			if(_options.captionEl) {
				if(_fakeCaptionContainer) {
					_controls.removeChild(_fakeCaptionContainer);
				}
				framework.removeClass(_captionContainer, 'pswp__caption--empty');
			}

			if(_shareModal) {
				_shareModal.children[0].onclick = null;
			}
			framework.removeClass(_controls, 'pswp__ui--over-close');
			framework.addClass( _controls, 'pswp__ui--hidden');
			ui.setIdle(false);
		});
		

		if(!_options.showAnimationDuration) {
			framework.removeClass( _controls, 'pswp__ui--hidden');
		}
		_listen('initialZoomIn', function() {
			if(_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
		});
		_listen('initialZoomOut', function() {
			framework.addClass( _controls, 'pswp__ui--hidden');
		});

		_listen('parseVerticalMargin', _applyNavBarGaps);
		
		_setupUIElements();

		if(_options.shareEl && _shareButton && _shareModal) {
			_shareModalHidden = true;
		}

		_countNumItems();

		_setupIdle();

		_setupFullscreenAPI();

		_setupLoadingIndicator();
	};

	ui.setIdle = function(isIdle) {
		_isIdle = isIdle;
		_togglePswpClass(_controls, 'ui--idle', isIdle);
	};

	ui.update = function() {
		// Don't update UI if it's hidden
		if(_controlsVisible && pswp.currItem) {
			
			ui.updateIndexIndicator();

			if(_options.captionEl) {
				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
			}

			_overlayUIUpdated = true;

		} else {
			_overlayUIUpdated = false;
		}

		if(!_shareModalHidden) {
			_toggleShareModal();
		}

		_countNumItems();
	};

	ui.updateFullscreen = function(e) {

		if(e) {
			// some browsers change window scroll position during the fullscreen
			// so PhotoSwipe updates it just in case
			setTimeout(function() {
				pswp.setScrollOffset( 0, framework.getScrollY() );
			}, 50);
		}
		
		// toogle pswp--fs class on root element
		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
	};

	ui.updateIndexIndicator = function() {
		if(_options.counterEl) {
			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
										_options.indexIndicatorSep + 
										_options.getNumItemsFn();
		}
	};
	
	ui.onGlobalTap = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if(_blockControlsTap) {
			return;
		}

		if(e.detail && e.detail.pointerType === 'mouse') {

			// close gallery if clicked outside of the image
			if(_hasCloseClass(target)) {
				pswp.close();
				return;
			}

			if(framework.hasClass(target, 'pswp__img')) {
				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
					if(_options.clickToCloseNonZoomable) {
						pswp.close();
					}
				} else {
					pswp.toggleDesktopZoom(e.detail.releasePoint);
				}
			}
			
		} else {

			// tap anywhere (except buttons) to toggle visibility of controls
			if(_options.tapToToggleControls) {
				if(_controlsVisible) {
					ui.hideControls();
				} else {
					ui.showControls();
				}
			}

			// tap to close gallery
			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
				pswp.close();
				return;
			}
			
		}
	};
	ui.onMouseOver = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		// add class when mouse is over an element that should close the gallery
		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
	};

	ui.hideControls = function() {
		framework.addClass(_controls,'pswp__ui--hidden');
		_controlsVisible = false;
	};

	ui.showControls = function() {
		_controlsVisible = true;
		if(!_overlayUIUpdated) {
			ui.update();
		}
		framework.removeClass(_controls,'pswp__ui--hidden');
	};

	ui.supportsFullscreen = function() {
		var d = document;
		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
	};

	ui.getFullscreenAPI = function() {
		var dE = document.documentElement,
			api,
			tF = 'fullscreenchange';

		if (dE.requestFullscreen) {
			api = {
				enterK: 'requestFullscreen',
				exitK: 'exitFullscreen',
				elementK: 'fullscreenElement',
				eventK: tF
			};

		} else if(dE.mozRequestFullScreen ) {
			api = {
				enterK: 'mozRequestFullScreen',
				exitK: 'mozCancelFullScreen',
				elementK: 'mozFullScreenElement',
				eventK: 'moz' + tF
			};

			

		} else if(dE.webkitRequestFullscreen) {
			api = {
				enterK: 'webkitRequestFullscreen',
				exitK: 'webkitExitFullscreen',
				elementK: 'webkitFullscreenElement',
				eventK: 'webkit' + tF
			};

		} else if(dE.msRequestFullscreen) {
			api = {
				enterK: 'msRequestFullscreen',
				exitK: 'msExitFullscreen',
				elementK: 'msFullscreenElement',
				eventK: 'MSFullscreenChange'
			};
		}

		if(api) {
			api.enter = function() { 
				// disable close-on-scroll in fullscreen
				_initalCloseOnScrollValue = _options.closeOnScroll; 
				_options.closeOnScroll = false; 

				if(this.enterK === 'webkitRequestFullscreen') {
					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
				} else {
					return pswp.template[this.enterK](); 
				}
			};
			api.exit = function() { 
				_options.closeOnScroll = _initalCloseOnScrollValue;

				return document[this.exitK](); 

			};
			api.isFullscreen = function() { return document[this.elementK]; };
		}

		return api;
	};



};
return PhotoSwipeUI_Default;


});

/*! PhotoSwipe - v4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipe=b()}(this,function(){"use strict";var a=function(a,b,c,d){var e={features:null,bind:function(a,b,c,d){var e=(d?"remove":"add")+"EventListener";b=b.split(" ");for(var f=0;f<b.length;f++)b[f]&&a[e](b[f],c,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,b){var c=document.createElement(b||"div");return a&&(c.className=a),c},getScrollY:function(){var a=window.pageYOffset;return void 0!==a?a:document.documentElement.scrollTop},unbind:function(a,b,c){e.bind(a,b,c,!0)},removeClass:function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,b){e.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return a.className&&new RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},getChildByClass:function(a,b){for(var c=a.firstChild;c;){if(e.hasClass(c,b))return c;c=c.nextSibling}},arraySearch:function(a,b,c){for(var d=a.length;d--;)if(a[d][c]===b)return d;return-1},extend:function(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&a.hasOwnProperty(d))continue;a[d]=b[d]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(e.features)return e.features;var a=e.createEl(),b=a.style,c="",d={};if(d.oldIE=document.all&&!document.addEventListener,d.touch="ontouchstart"in window,window.requestAnimationFrame&&(d.raf=window.requestAnimationFrame,d.caf=window.cancelAnimationFrame),d.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!d.pointerEvent){var f=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&8>g&&(d.isOldIOSPhone=!0))}var h=f.match(/Android\s([0-9\.]*)/),i=h?h[1]:0;i=parseFloat(i),i>=1&&(4.4>i&&(d.isOldAndroid=!0),d.androidVersion=i),d.isMobileOpera=/opera mini|opera mobi/i.test(f)}for(var j,k,l=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],n=0;4>n;n++){c=m[n];for(var o=0;3>o;o++)j=l[o],k=c+(c?j.charAt(0).toUpperCase()+j.slice(1):j),!d[j]&&k in b&&(d[j]=k);c&&!d.raf&&(c=c.toLowerCase(),d.raf=window[c+"RequestAnimationFrame"],d.raf&&(d.caf=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]))}if(!d.raf){var p=0;d.raf=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-p)),d=window.setTimeout(function(){a(b+c)},c);return p=b+c,d},d.caf=function(a){clearTimeout(a)}}return d.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,e.features=d,d}};e.detectFeatures(),e.features.oldIE&&(e.bind=function(a,b,c,d){b=b.split(" ");for(var e,f=(d?"detach":"attach")+"Event",g=function(){c.handleEvent.call(c)},h=0;h<b.length;h++)if(e=b[h])if("object"==typeof c&&c.handleEvent){if(d){if(!c["oldIE"+e])return!1}else c["oldIE"+e]=g;a[f]("on"+e,c["oldIE"+e])}else a[f]("on"+e,c)});var f=this,g=25,h=3,i={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return"A"===a.tagName},getDoubleTapZoom:function(a,b){return a?1:b.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};e.extend(i,d);var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la=function(){return{x:0,y:0}},ma=la(),na=la(),oa=la(),pa={},qa=0,ra={},sa=la(),ta=0,ua=!0,va=[],wa={},xa=!1,ya=function(a,b){e.extend(f,b.publicMethods),va.push(a)},za=function(a){var b=_b();return a>b-1?a-b:0>a?b+a:a},Aa={},Ba=function(a,b){return Aa[a]||(Aa[a]=[]),Aa[a].push(b)},Ca=function(a){var b=Aa[a];if(b){var c=Array.prototype.slice.call(arguments);c.shift();for(var d=0;d<b.length;d++)b[d].apply(f,c)}},Da=function(){return(new Date).getTime()},Ea=function(a){ia=a,f.bg.style.opacity=a*i.bgOpacity},Fa=function(a,b,c,d,e){(!xa||e&&e!==f.currItem)&&(d/=e?e.fitRatio:f.currItem.fitRatio),a[E]=u+b+"px, "+c+"px"+v+" scale("+d+")"},Ga=function(a){da&&(a&&(s>f.currItem.fitRatio?xa||(lc(f.currItem,!1,!0),xa=!0):xa&&(lc(f.currItem),xa=!1)),Fa(da,oa.x,oa.y,s))},Ha=function(a){a.container&&Fa(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel,a)},Ia=function(a,b){b[E]=u+a+"px, 0px"+v},Ja=function(a,b){if(!i.loop&&b){var c=m+(sa.x*qa-a)/sa.x,d=Math.round(a-sb.x);(0>c&&d>0||c>=_b()-1&&0>d)&&(a=sb.x+d*i.mainScrollEndFriction)}sb.x=a,Ia(a,n)},Ka=function(a,b){var c=tb[a]-ra[a];return na[a]+ma[a]+c-c*(b/t)},La=function(a,b){a.x=b.x,a.y=b.y,b.id&&(a.id=b.id)},Ma=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Na=null,Oa=function(){Na&&(e.unbind(document,"mousemove",Oa),e.addClass(a,"pswp--has_mouse"),i.mouseUsed=!0,Ca("mouseUsed")),Na=setTimeout(function(){Na=null},100)},Pa=function(){e.bind(document,"keydown",f),N.transform&&e.bind(f.scrollWrap,"click",f),i.mouseUsed||e.bind(document,"mousemove",Oa),e.bind(window,"resize scroll",f),Ca("bindEvents")},Qa=function(){e.unbind(window,"resize",f),e.unbind(window,"scroll",r.scroll),e.unbind(document,"keydown",f),e.unbind(document,"mousemove",Oa),N.transform&&e.unbind(f.scrollWrap,"click",f),U&&e.unbind(window,p,f),Ca("unbindEvents")},Ra=function(a,b){var c=hc(f.currItem,pa,a);return b&&(ca=c),c},Sa=function(a){return a||(a=f.currItem),a.initialZoomLevel},Ta=function(a){return a||(a=f.currItem),a.w>0?i.maxSpreadZoom:1},Ua=function(a,b,c,d){return d===f.currItem.initialZoomLevel?(c[a]=f.currItem.initialPosition[a],!0):(c[a]=Ka(a,d),c[a]>b.min[a]?(c[a]=b.min[a],!0):c[a]<b.max[a]?(c[a]=b.max[a],!0):!1)},Va=function(){if(E){var b=N.perspective&&!G;return u="translate"+(b?"3d(":"("),void(v=N.perspective?", 0px)":")")}E="left",e.addClass(a,"pswp--ie"),Ia=function(a,b){b.left=a+"px"},Ha=function(a){var b=a.fitRatio>1?1:a.fitRatio,c=a.container.style,d=b*a.w,e=b*a.h;c.width=d+"px",c.height=e+"px",c.left=a.initialPosition.x+"px",c.top=a.initialPosition.y+"px"},Ga=function(){if(da){var a=da,b=f.currItem,c=b.fitRatio>1?1:b.fitRatio,d=c*b.w,e=c*b.h;a.width=d+"px",a.height=e+"px",a.left=oa.x+"px",a.top=oa.y+"px"}}},Wa=function(a){var b="";i.escKey&&27===a.keyCode?b="close":i.arrowKeys&&(37===a.keyCode?b="prev":39===a.keyCode&&(b="next")),b&&(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||(a.preventDefault?a.preventDefault():a.returnValue=!1,f[b]()))},Xa=function(a){a&&(X||W||ea||S)&&(a.preventDefault(),a.stopPropagation())},Ya=function(){f.setScrollOffset(0,e.getScrollY())},Za={},$a=0,_a=function(a){Za[a]&&(Za[a].raf&&I(Za[a].raf),$a--,delete Za[a])},ab=function(a){Za[a]&&_a(a),Za[a]||($a++,Za[a]={})},bb=function(){for(var a in Za)Za.hasOwnProperty(a)&&_a(a)},cb=function(a,b,c,d,e,f,g){var h,i=Da();ab(a);var j=function(){if(Za[a]){if(h=Da()-i,h>=d)return _a(a),f(c),void(g&&g());f((c-b)*e(h/d)+b),Za[a].raf=H(j)}};j()},db={shout:Ca,listen:Ba,viewportSize:pa,options:i,isMainScrollAnimating:function(){return ea},getZoomLevel:function(){return s},getCurrentIndex:function(){return m},isDragging:function(){return U},isZooming:function(){return _},setScrollOffset:function(a,b){ra.x=a,M=ra.y=b,Ca("updateScrollOffset",ra)},applyZoomPan:function(a,b,c,d){oa.x=b,oa.y=c,s=a,Ga(d)},init:function(){if(!j&&!k){var c;f.framework=e,f.template=a,f.bg=e.getChildByClass(a,"pswp__bg"),J=a.className,j=!0,N=e.detectFeatures(),H=N.raf,I=N.caf,E=N.transform,L=N.oldIE,f.scrollWrap=e.getChildByClass(a,"pswp__scroll-wrap"),f.container=e.getChildByClass(f.scrollWrap,"pswp__container"),n=f.container.style,f.itemHolders=y=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],y[0].el.style.display=y[2].el.style.display="none",Va(),r={resize:f.updateSize,scroll:Ya,keydown:Wa,click:Xa};var d=N.isOldIOSPhone||N.isOldAndroid||N.isMobileOpera;for(N.animationName&&N.transform&&!d||(i.showAnimationDuration=i.hideAnimationDuration=0),c=0;c<va.length;c++)f["init"+va[c]]();if(b){var g=f.ui=new b(f,e);g.init()}Ca("firstUpdate"),m=m||i.index||0,(isNaN(m)||0>m||m>=_b())&&(m=0),f.currItem=$b(m),(N.isOldIOSPhone||N.isOldAndroid)&&(ua=!1),a.setAttribute("aria-hidden","false"),i.modal&&(ua?a.style.position="fixed":(a.style.position="absolute",a.style.top=e.getScrollY()+"px")),void 0===M&&(Ca("initialLayout"),M=K=e.getScrollY());var l="pswp--open ";for(i.mainClass&&(l+=i.mainClass+" "),i.showHideOpacity&&(l+="pswp--animate_opacity "),l+=G?"pswp--touch":"pswp--notouch",l+=N.animationName?" pswp--css_animation":"",l+=N.svg?" pswp--svg":"",e.addClass(a,l),f.updateSize(),o=-1,ta=null,c=0;h>c;c++)Ia((c+o)*sa.x,y[c].el.style);L||e.bind(f.scrollWrap,q,f),Ba("initialZoomInEnd",function(){f.setContent(y[0],m-1),f.setContent(y[2],m+1),y[0].el.style.display=y[2].el.style.display="block",i.focus&&a.focus(),Pa()}),f.setContent(y[1],m),f.updateCurrItem(),Ca("afterInit"),ua||(w=setInterval(function(){$a||U||_||s!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),e.addClass(a,"pswp--visible")}},close:function(){j&&(j=!1,k=!0,Ca("close"),Qa(),bc(f.currItem,null,!0,f.destroy))},destroy:function(){Ca("destroy"),Wb&&clearTimeout(Wb),a.setAttribute("aria-hidden","true"),a.className=J,w&&clearInterval(w),e.unbind(f.scrollWrap,q,f),e.unbind(window,"scroll",f),yb(),bb(),Aa=null},panTo:function(a,b,c){c||(a>ca.min.x?a=ca.min.x:a<ca.max.x&&(a=ca.max.x),b>ca.min.y?b=ca.min.y:b<ca.max.y&&(b=ca.max.y)),oa.x=a,oa.y=b,Ga()},handleEvent:function(a){a=a||window.event,r[a.type]&&r[a.type](a)},goTo:function(a){a=za(a);var b=a-m;ta=b,m=a,f.currItem=$b(m),qa-=b,Ja(sa.x*qa),bb(),ea=!1,f.updateCurrItem()},next:function(){f.goTo(m+1)},prev:function(){f.goTo(m-1)},updateCurrZoomItem:function(a){if(a&&Ca("beforeChange",0),y[1].el.children.length){var b=y[1].el.children[0];da=e.hasClass(b,"pswp__zoom-wrap")?b.style:null}else da=null;ca=f.currItem.bounds,t=s=f.currItem.initialZoomLevel,oa.x=ca.center.x,oa.y=ca.center.y,a&&Ca("afterChange")},invalidateCurrItems:function(){x=!0;for(var a=0;h>a;a++)y[a].item&&(y[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(0!==ta){var b,c=Math.abs(ta);if(!(a&&2>c)){f.currItem=$b(m),xa=!1,Ca("beforeChange",ta),c>=h&&(o+=ta+(ta>0?-h:h),c=h);for(var d=0;c>d;d++)ta>0?(b=y.shift(),y[h-1]=b,o++,Ia((o+2)*sa.x,b.el.style),f.setContent(b,m-c+d+1+1)):(b=y.pop(),y.unshift(b),o--,Ia(o*sa.x,b.el.style),f.setContent(b,m+c-d-1-1));if(da&&1===Math.abs(ta)){var e=$b(z);e.initialZoomLevel!==s&&(hc(e,pa),lc(e),Ha(e))}ta=0,f.updateCurrZoomItem(),z=m,Ca("afterChange")}}},updateSize:function(b){if(!ua&&i.modal){var c=e.getScrollY();if(M!==c&&(a.style.top=c+"px",M=c),!b&&wa.x===window.innerWidth&&wa.y===window.innerHeight)return;wa.x=window.innerWidth,wa.y=window.innerHeight,a.style.height=wa.y+"px"}if(pa.x=f.scrollWrap.clientWidth,pa.y=f.scrollWrap.clientHeight,Ya(),sa.x=pa.x+Math.round(pa.x*i.spacing),sa.y=pa.y,Ja(sa.x*qa),Ca("beforeResize"),void 0!==o){for(var d,g,j,k=0;h>k;k++)d=y[k],Ia((k+o)*sa.x,d.el.style),j=m+k-1,i.loop&&_b()>2&&(j=za(j)),g=$b(j),g&&(x||g.needsUpdate||!g.bounds)?(f.cleanSlide(g),f.setContent(d,j),1===k&&(f.currItem=g,f.updateCurrZoomItem(!0)),g.needsUpdate=!1):-1===d.index&&j>=0&&f.setContent(d,j),g&&g.container&&(hc(g,pa),lc(g),Ha(g));x=!1}t=s=f.currItem.initialZoomLevel,ca=f.currItem.bounds,ca&&(oa.x=ca.center.x,oa.y=ca.center.y,Ga(!0)),Ca("resize")},zoomTo:function(a,b,c,d,f){b&&(t=s,tb.x=Math.abs(b.x)-oa.x,tb.y=Math.abs(b.y)-oa.y,La(na,oa));var g=Ra(a,!1),h={};Ua("x",g,h,a),Ua("y",g,h,a);var i=s,j={x:oa.x,y:oa.y};Ma(h);var k=function(b){1===b?(s=a,oa.x=h.x,oa.y=h.y):(s=(a-i)*b+i,oa.x=(h.x-j.x)*b+j.x,oa.y=(h.y-j.y)*b+j.y),f&&f(b),Ga(1===b)};c?cb("customZoomTo",0,1,c,d||e.easing.sine.inOut,k):k(1)}},eb=30,fb=10,gb={},hb={},ib={},jb={},kb={},lb=[],mb={},nb=[],ob={},pb=0,qb=la(),rb=0,sb=la(),tb=la(),ub=la(),vb=function(a,b){return a.x===b.x&&a.y===b.y},wb=function(a,b){return Math.abs(a.x-b.x)<g&&Math.abs(a.y-b.y)<g},xb=function(a,b){return ob.x=Math.abs(a.x-b.x),ob.y=Math.abs(a.y-b.y),Math.sqrt(ob.x*ob.x+ob.y*ob.y)},yb=function(){Y&&(I(Y),Y=null)},zb=function(){U&&(Y=H(zb),Pb())},Ab=function(){return!("fit"===i.scaleMode&&s===f.currItem.initialZoomLevel)},Bb=function(a,b){return a&&a!==document?a.getAttribute("class")&&a.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:b(a)?a:Bb(a.parentNode,b):!1},Cb={},Db=function(a,b){return Cb.prevent=!Bb(a.target,i.isClickableElement),Ca("preventDragEvent",a,b,Cb),Cb.prevent},Eb=function(a,b){return b.x=a.pageX,b.y=a.pageY,b.id=a.identifier,b},Fb=function(a,b,c){c.x=.5*(a.x+b.x),c.y=.5*(a.y+b.y)},Gb=function(a,b,c){if(a-P>50){var d=nb.length>2?nb.shift():{};d.x=b,d.y=c,nb.push(d),P=a}},Hb=function(){var a=oa.y-f.currItem.initialPosition.y;return 1-Math.abs(a/(pa.y/2))},Ib={},Jb={},Kb=[],Lb=function(a){for(;Kb.length>0;)Kb.pop();return F?(ka=0,lb.forEach(function(a){0===ka?Kb[0]=a:1===ka&&(Kb[1]=a),ka++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(Kb[0]=Eb(a.touches[0],Ib),a.touches.length>1&&(Kb[1]=Eb(a.touches[1],Jb))):(Ib.x=a.pageX,Ib.y=a.pageY,Ib.id="",Kb[0]=Ib),Kb},Mb=function(a,b){var c,d,e,g,h=0,j=oa[a]+b[a],k=b[a]>0,l=sb.x+b.x,m=sb.x-mb.x;return c=j>ca.min[a]||j<ca.max[a]?i.panEndFriction:1,j=oa[a]+b[a]*c,!i.allowPanToNext&&s!==f.currItem.initialZoomLevel||(da?"h"!==fa||"x"!==a||W||(k?(j>ca.min[a]&&(c=i.panEndFriction,h=ca.min[a]-j,d=ca.min[a]-na[a]),(0>=d||0>m)&&_b()>1?(g=l,0>m&&l>mb.x&&(g=mb.x)):ca.min.x!==ca.max.x&&(e=j)):(j<ca.max[a]&&(c=i.panEndFriction,h=j-ca.max[a],d=na[a]-ca.max[a]),(0>=d||m>0)&&_b()>1?(g=l,m>0&&l<mb.x&&(g=mb.x)):ca.min.x!==ca.max.x&&(e=j))):g=l,"x"!==a)?void(ea||Z||s>f.currItem.fitRatio&&(oa[a]+=b[a]*c)):(void 0!==g&&(Ja(g,!0),Z=g===mb.x?!1:!0),ca.min.x!==ca.max.x&&(void 0!==e?oa.x=e:Z||(oa.x+=b.x*c)),void 0!==g)},Nb=function(a){if(!("mousedown"===a.type&&a.button>0)){if(Zb)return void a.preventDefault();if(!T||"mousedown"!==a.type){if(Db(a,!0)&&a.preventDefault(),Ca("pointerDown"),F){var b=e.arraySearch(lb,a.pointerId,"id");0>b&&(b=lb.length),lb[b]={x:a.pageX,y:a.pageY,id:a.pointerId}}var c=Lb(a),d=c.length;$=null,bb(),U&&1!==d||(U=ga=!0,e.bind(window,p,f),R=ja=ha=S=Z=X=V=W=!1,fa=null,Ca("firstTouchStart",c),La(na,oa),ma.x=ma.y=0,La(jb,c[0]),La(kb,jb),mb.x=sa.x*qa,nb=[{x:jb.x,y:jb.y}],P=O=Da(),Ra(s,!0),yb(),zb()),!_&&d>1&&!ea&&!Z&&(t=s,W=!1,_=V=!0,ma.y=ma.x=0,La(na,oa),La(gb,c[0]),La(hb,c[1]),Fb(gb,hb,ub),tb.x=Math.abs(ub.x)-oa.x,tb.y=Math.abs(ub.y)-oa.y,aa=ba=xb(gb,hb))}}},Ob=function(a){if(a.preventDefault(),F){var b=e.arraySearch(lb,a.pointerId,"id");if(b>-1){var c=lb[b];c.x=a.pageX,c.y=a.pageY}}if(U){var d=Lb(a);if(fa||X||_)$=d;else if(sb.x!==sa.x*qa)fa="h";else{var f=Math.abs(d[0].x-jb.x)-Math.abs(d[0].y-jb.y);Math.abs(f)>=fb&&(fa=f>0?"h":"v",$=d)}}},Pb=function(){if($){var a=$.length;if(0!==a)if(La(gb,$[0]),ib.x=gb.x-jb.x,ib.y=gb.y-jb.y,_&&a>1){if(jb.x=gb.x,jb.y=gb.y,!ib.x&&!ib.y&&vb($[1],hb))return;La(hb,$[1]),W||(W=!0,Ca("zoomGestureStarted"));var b=xb(gb,hb),c=Ub(b);c>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(ja=!0);var d=1,e=Sa(),g=Ta();if(e>c)if(i.pinchToClose&&!ja&&t<=f.currItem.initialZoomLevel){var h=e-c,j=1-h/(e/1.2);Ea(j),Ca("onPinchClose",j),ha=!0}else d=(e-c)/e,d>1&&(d=1),c=e-d*(e/3);else c>g&&(d=(c-g)/(6*e),d>1&&(d=1),c=g+d*e);0>d&&(d=0),aa=b,Fb(gb,hb,qb),ma.x+=qb.x-ub.x,ma.y+=qb.y-ub.y,La(ub,qb),oa.x=Ka("x",c),oa.y=Ka("y",c),R=c>s,s=c,Ga()}else{if(!fa)return;if(ga&&(ga=!1,Math.abs(ib.x)>=fb&&(ib.x-=$[0].x-kb.x),Math.abs(ib.y)>=fb&&(ib.y-=$[0].y-kb.y)),jb.x=gb.x,jb.y=gb.y,0===ib.x&&0===ib.y)return;if("v"===fa&&i.closeOnVerticalDrag&&!Ab()){ma.y+=ib.y,oa.y+=ib.y;var k=Hb();return S=!0,Ca("onVerticalDrag",k),Ea(k),void Ga()}Gb(Da(),gb.x,gb.y),X=!0,ca=f.currItem.bounds;var l=Mb("x",ib);l||(Mb("y",ib),Ma(oa),Ga())}}},Qb=function(a){if(N.isOldAndroid){if(T&&"mouseup"===a.type)return;a.type.indexOf("touch")>-1&&(clearTimeout(T),T=setTimeout(function(){T=0},600))}Ca("pointerUp"),Db(a,!1)&&a.preventDefault();var b;if(F){var c=e.arraySearch(lb,a.pointerId,"id");if(c>-1)if(b=lb.splice(c,1)[0],navigator.pointerEnabled)b.type=a.pointerType||"mouse";else{var d={4:"mouse",2:"touch",3:"pen"};b.type=d[a.pointerType],b.type||(b.type=a.pointerType||"mouse")}}var g,h=Lb(a),j=h.length;if("mouseup"===a.type&&(j=0),2===j)return $=null,!0;1===j&&La(kb,h[0]),0!==j||fa||ea||(b||("mouseup"===a.type?b={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(b={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),Ca("touchRelease",a,b));var k=-1;if(0===j&&(U=!1,e.unbind(window,p,f),yb(),_?k=0:-1!==rb&&(k=Da()-rb)),rb=1===j?Da():-1,g=-1!==k&&150>k?"zoom":"swipe",_&&2>j&&(_=!1,1===j&&(g="zoomPointerUp"),Ca("zoomGestureEnded")),$=null,X||W||ea||S)if(bb(),Q||(Q=Rb()),Q.calculateSwipeSpeed("x"),S){var l=Hb();if(l<i.verticalDragRange)f.close();else{var m=oa.y,n=ia;cb("verticalDrag",0,1,300,e.easing.cubic.out,function(a){oa.y=(f.currItem.initialPosition.y-m)*a+m,Ea((1-n)*a+n),Ga()}),Ca("onVerticalDrag",1)}}else{if((Z||ea)&&0===j){var o=Tb(g,Q);if(o)return;g="zoomPointerUp"}if(!ea)return"swipe"!==g?void Vb():void(!Z&&s>f.currItem.fitRatio&&Sb(Q))}},Rb=function(){var a,b,c={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(d){nb.length>1?(a=Da()-P+50,b=nb[nb.length-2][d]):(a=Da()-O,b=kb[d]),c.lastFlickOffset[d]=jb[d]-b,c.lastFlickDist[d]=Math.abs(c.lastFlickOffset[d]),c.lastFlickDist[d]>20?c.lastFlickSpeed[d]=c.lastFlickOffset[d]/a:c.lastFlickSpeed[d]=0,Math.abs(c.lastFlickSpeed[d])<.1&&(c.lastFlickSpeed[d]=0),c.slowDownRatio[d]=.95,c.slowDownRatioReverse[d]=1-c.slowDownRatio[d],c.speedDecelerationRatio[d]=1},calculateOverBoundsAnimOffset:function(a,b){c.backAnimStarted[a]||(oa[a]>ca.min[a]?c.backAnimDestination[a]=ca.min[a]:oa[a]<ca.max[a]&&(c.backAnimDestination[a]=ca.max[a]),void 0!==c.backAnimDestination[a]&&(c.slowDownRatio[a]=.7,c.slowDownRatioReverse[a]=1-c.slowDownRatio[a],c.speedDecelerationRatioAbs[a]<.05&&(c.lastFlickSpeed[a]=0,c.backAnimStarted[a]=!0,cb("bounceZoomPan"+a,oa[a],c.backAnimDestination[a],b||300,e.easing.sine.out,function(b){oa[a]=b,Ga()}))))},calculateAnimOffset:function(a){c.backAnimStarted[a]||(c.speedDecelerationRatio[a]=c.speedDecelerationRatio[a]*(c.slowDownRatio[a]+c.slowDownRatioReverse[a]-c.slowDownRatioReverse[a]*c.timeDiff/10),c.speedDecelerationRatioAbs[a]=Math.abs(c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]),c.distanceOffset[a]=c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]*c.timeDiff,oa[a]+=c.distanceOffset[a])},panAnimLoop:function(){return Za.zoomPan&&(Za.zoomPan.raf=H(c.panAnimLoop),c.now=Da(),c.timeDiff=c.now-c.lastNow,c.lastNow=c.now,c.calculateAnimOffset("x"),c.calculateAnimOffset("y"),Ga(),c.calculateOverBoundsAnimOffset("x"),c.calculateOverBoundsAnimOffset("y"),c.speedDecelerationRatioAbs.x<.05&&c.speedDecelerationRatioAbs.y<.05)?(oa.x=Math.round(oa.x),oa.y=Math.round(oa.y),Ga(),void _a("zoomPan")):void 0}};return c},Sb=function(a){return a.calculateSwipeSpeed("y"),ca=f.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05?(a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0):(ab("zoomPan"),a.lastNow=Da(),void a.panAnimLoop())},Tb=function(a,b){var c;ea||(pb=m);var d;if("swipe"===a){var g=jb.x-kb.x,h=b.lastFlickDist.x<10;g>eb&&(h||b.lastFlickOffset.x>20)?d=-1:-eb>g&&(h||b.lastFlickOffset.x<-20)&&(d=1)}var j;d&&(m+=d,0>m?(m=i.loop?_b()-1:0,j=!0):m>=_b()&&(m=i.loop?0:_b()-1,j=!0),(!j||i.loop)&&(ta+=d,qa-=d,c=!0));var k,l=sa.x*qa,n=Math.abs(l-sb.x);return c||l>sb.x==b.lastFlickSpeed.x>0?(k=Math.abs(b.lastFlickSpeed.x)>0?n/Math.abs(b.lastFlickSpeed.x):333,k=Math.min(k,400),k=Math.max(k,250)):k=333,pb===m&&(c=!1),ea=!0,Ca("mainScrollAnimStart"),cb("mainScroll",sb.x,l,k,e.easing.cubic.out,Ja,function(){bb(),ea=!1,pb=-1,(c||pb!==m)&&f.updateCurrItem(),Ca("mainScrollAnimComplete")}),c&&f.updateCurrItem(!0),c},Ub=function(a){return 1/ba*a*t},Vb=function(){var a=s,b=Sa(),c=Ta();b>s?a=b:s>c&&(a=c);var d,g=1,h=ia;return ha&&!R&&!ja&&b>s?(f.close(),!0):(ha&&(d=function(a){Ea((g-h)*a+h)}),f.zoomTo(a,0,200,e.easing.cubic.out,d),!0)};ya("Gestures",{publicMethods:{initGestures:function(){var a=function(a,b,c,d,e){A=a+b,B=a+c,C=a+d,D=e?a+e:""};F=N.pointerEvent,F&&N.touch&&(N.touch=!1),F?navigator.pointerEnabled?a("pointer","down","move","up","cancel"):a("MSPointer","Down","Move","Up","Cancel"):N.touch?(a("touch","start","move","end","cancel"),G=!0):a("mouse","down","move","up"),p=B+" "+C+" "+D,q=A,F&&!G&&(G=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),f.likelyTouchDevice=G,r[A]=Nb,r[B]=Ob,r[C]=Qb,D&&(r[D]=r[C]),N.touch&&(q+=" mousedown",p+=" mousemove mouseup",r.mousedown=r[A],r.mousemove=r[B],r.mouseup=r[C]),G||(i.allowPanToNext=!1)}}});var Wb,Xb,Yb,Zb,$b,_b,ac,bc=function(b,c,d,g){Wb&&clearTimeout(Wb),Zb=!0,Yb=!0;var h;b.initialLayout?(h=b.initialLayout,b.initialLayout=null):h=i.getThumbBoundsFn&&i.getThumbBoundsFn(m);var j=d?i.hideAnimationDuration:i.showAnimationDuration,k=function(){_a("initialZoom"),d?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(Ea(1),c&&(c.style.display="block"),e.addClass(a,"pswp--animated-in"),Ca("initialZoom"+(d?"OutEnd":"InEnd"))),g&&g(),Zb=!1};if(!j||!h||void 0===h.x)return Ca("initialZoom"+(d?"Out":"In")),s=b.initialZoomLevel,La(oa,b.initialPosition),Ga(),a.style.opacity=d?0:1,Ea(1),void(j?setTimeout(function(){k()},j):k());var n=function(){var c=l,g=!f.currItem.src||f.currItem.loadError||i.showHideOpacity;b.miniImg&&(b.miniImg.style.webkitBackfaceVisibility="hidden"),d||(s=h.w/b.w,oa.x=h.x,oa.y=h.y-K,f[g?"template":"bg"].style.opacity=.001,Ga()),ab("initialZoom"),d&&!c&&e.removeClass(a,"pswp--animated-in"),g&&(d?e[(c?"remove":"add")+"Class"](a,"pswp--animate_opacity"):setTimeout(function(){e.addClass(a,"pswp--animate_opacity")},30)),Wb=setTimeout(function(){if(Ca("initialZoom"+(d?"Out":"In")),d){var f=h.w/b.w,i={x:oa.x,y:oa.y},l=s,m=ia,n=function(b){1===b?(s=f,oa.x=h.x,oa.y=h.y-M):(s=(f-l)*b+l,oa.x=(h.x-i.x)*b+i.x,oa.y=(h.y-M-i.y)*b+i.y),Ga(),g?a.style.opacity=1-b:Ea(m-b*m)};c?cb("initialZoom",0,1,j,e.easing.cubic.out,n,k):(n(1),Wb=setTimeout(k,j+20))}else s=b.initialZoomLevel,La(oa,b.initialPosition),Ga(),Ea(1),g?a.style.opacity=1:Ea(1),Wb=setTimeout(k,j+20)},d?25:90)};n()},cc={},dc=[],ec={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Xb.length}},fc=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},gc=function(a,b,c){var d=a.bounds;d.center.x=Math.round((cc.x-b)/2),d.center.y=Math.round((cc.y-c)/2)+a.vGap.top,d.max.x=b>cc.x?Math.round(cc.x-b):d.center.x,d.max.y=c>cc.y?Math.round(cc.y-c)+a.vGap.top:d.center.y,d.min.x=b>cc.x?0:d.center.x,d.min.y=c>cc.y?a.vGap.top:d.center.y},hc=function(a,b,c){if(a.src&&!a.loadError){var d=!c;if(d&&(a.vGap||(a.vGap={top:0,bottom:0}),Ca("parseVerticalMargin",a)),cc.x=b.x,cc.y=b.y-a.vGap.top-a.vGap.bottom,d){var e=cc.x/a.w,f=cc.y/a.h;a.fitRatio=f>e?e:f;var g=i.scaleMode;"orig"===g?c=1:"fit"===g&&(c=a.fitRatio),c>1&&(c=1),a.initialZoomLevel=c,a.bounds||(a.bounds=fc())}if(!c)return;return gc(a,a.w*c,a.h*c),d&&c===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds}return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=fc(),a.initialPosition=a.bounds.center,a.bounds},ic=function(a,b,c,d,e,g){b.loadError||d&&(b.imageAppended=!0,lc(b,d,b===f.currItem&&xa),c.appendChild(d),g&&setTimeout(function(){b&&b.loaded&&b.placeholder&&(b.placeholder.style.display="none",b.placeholder=null)},500))},jc=function(a){a.loading=!0,a.loaded=!1;var b=a.img=e.createEl("pswp__img","img"),c=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,b.onload=b.onerror=null,b=null};return b.onload=c,b.onerror=function(){a.loadError=!0,c()},b.src=a.src,b},kc=function(a,b){return a.src&&a.loadError&&a.container?(b&&(a.container.innerHTML=""),a.container.innerHTML=i.errorMsg.replace("%url%",a.src),!0):void 0},lc=function(a,b,c){if(a.src){b||(b=a.container.lastChild);var d=c?a.w:Math.round(a.w*a.fitRatio),e=c?a.h:Math.round(a.h*a.fitRatio);a.placeholder&&!a.loaded&&(a.placeholder.style.width=d+"px",a.placeholder.style.height=e+"px"),b.style.width=d+"px",b.style.height=e+"px"}},mc=function(){if(dc.length){for(var a,b=0;b<dc.length;b++)a=dc[b],a.holder.index===a.index&&ic(a.index,a.item,a.baseDiv,a.img,!1,a.clearPlaceholder);dc=[]}};ya("Controller",{publicMethods:{lazyLoadItem:function(a){a=za(a);var b=$b(a);b&&(!b.loaded&&!b.loading||x)&&(Ca("gettingData",a,b),b.src&&jc(b))},initController:function(){e.extend(i,ec,!0),f.items=Xb=c,$b=f.getItemAt,_b=i.getNumItemsFn,ac=i.loop,_b()<3&&(i.loop=!1),Ba("beforeChange",function(a){var b,c=i.preload,d=null===a?!0:a>=0,e=Math.min(c[0],_b()),g=Math.min(c[1],_b());for(b=1;(d?g:e)>=b;b++)f.lazyLoadItem(m+b);for(b=1;(d?e:g)>=b;b++)f.lazyLoadItem(m-b)}),Ba("initialLayout",function(){f.currItem.initialLayout=i.getThumbBoundsFn&&i.getThumbBoundsFn(m)}),Ba("mainScrollAnimComplete",mc),Ba("initialZoomInEnd",mc),Ba("destroy",function(){for(var a,b=0;b<Xb.length;b++)a=Xb[b],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);dc=null})},getItemAt:function(a){return a>=0&&void 0!==Xb[a]?Xb[a]:!1},allowProgressiveImg:function(){return i.forceProgressiveLoading||!G||i.mouseUsed||screen.width>1200},setContent:function(a,b){i.loop&&(b=za(b));var c=f.getItemAt(a.index);c&&(c.container=null);var d,g=f.getItemAt(b);if(!g)return void(a.el.innerHTML="");Ca("gettingData",b,g),a.index=b,a.item=g;var h=g.container=e.createEl("pswp__zoom-wrap");if(!g.src&&g.html&&(g.html.tagName?h.appendChild(g.html):h.innerHTML=g.html),kc(g),hc(g,pa),!g.src||g.loadError||g.loaded)g.src&&!g.loadError&&(d=e.createEl("pswp__img","img"),d.style.opacity=1,d.src=g.src,lc(g,d),ic(b,g,h,d,!0));else{if(g.loadComplete=function(c){if(j){if(a&&a.index===b){if(kc(c,!0))return c.loadComplete=c.img=null,hc(c,pa),Ha(c),void(a.index===m&&f.updateCurrZoomItem());c.imageAppended?!Zb&&c.placeholder&&(c.placeholder.style.display="none",c.placeholder=null):N.transform&&(ea||Zb)?dc.push({item:c,baseDiv:h,img:c.img,index:b,holder:a,clearPlaceholder:!0}):ic(b,c,h,c.img,ea||Zb,!0)}c.loadComplete=null,c.img=null,Ca("imageLoadComplete",b,c)}},e.features.transform){var k="pswp__img pswp__img--placeholder";k+=g.msrc?"":" pswp__img--placeholder--blank";var l=e.createEl(k,g.msrc?"img":"");g.msrc&&(l.src=g.msrc),lc(g,l),h.appendChild(l),g.placeholder=l}g.loading||jc(g),f.allowProgressiveImg()&&(!Yb&&N.transform?dc.push({item:g,baseDiv:h,img:g.img,index:b,holder:a}):ic(b,g,h,g.img,!0,!0))}Yb||b!==m?Ha(g):(da=h.style,bc(g,d||g.img)),a.el.innerHTML="",a.el.appendChild(h)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var nc,oc={},pc=function(a,b,c){var d=document.createEvent("CustomEvent"),e={origEvent:a,target:a.target,releasePoint:b,pointerType:c||"touch"};d.initCustomEvent("pswpTap",!0,!0,e),a.target.dispatchEvent(d)};ya("Tap",{publicMethods:{initTap:function(){Ba("firstTouchStart",f.onTapStart),Ba("touchRelease",f.onTapRelease),Ba("destroy",function(){oc={},nc=null})},onTapStart:function(a){a.length>1&&(clearTimeout(nc),nc=null)},onTapRelease:function(a,b){if(b&&!X&&!V&&!$a){var c=b;if(nc&&(clearTimeout(nc),nc=null,wb(c,oc)))return void Ca("doubleTap",c);if("mouse"===b.type)return void pc(a,b,"mouse");var d=a.target.tagName.toUpperCase();if("BUTTON"===d||e.hasClass(a.target,"pswp__single-tap"))return void pc(a,b);La(oc,c),nc=setTimeout(function(){pc(a,b),nc=null},300)}}}});var qc;ya("DesktopZoom",{publicMethods:{initDesktopZoom:function(){L||(G?Ba("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(b){qc={};var c="wheel mousewheel DOMMouseScroll";Ba("bindEvents",function(){e.bind(a,c,f.handleMouseWheel)}),Ba("unbindEvents",function(){qc&&e.unbind(a,c,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var d,g=function(){f.mouseZoomedIn&&(e.removeClass(a,"pswp--zoomed-in"),f.mouseZoomedIn=!1),1>s?e.addClass(a,"pswp--zoom-allowed"):e.removeClass(a,"pswp--zoom-allowed"),h()},h=function(){d&&(e.removeClass(a,"pswp--dragging"),d=!1)};Ba("resize",g),Ba("afterChange",g),Ba("pointerDown",function(){f.mouseZoomedIn&&(d=!0,e.addClass(a,"pswp--dragging"))}),Ba("pointerUp",h),b||g()},handleMouseWheel:function(a){if(s<=f.currItem.fitRatio)return i.modal&&(!i.closeOnScroll||$a||U?a.preventDefault():E&&Math.abs(a.deltaY)>2&&(l=!0,f.close())),!0;if(a.stopPropagation(),qc.x=0,"deltaX"in a)1===a.deltaMode?(qc.x=18*a.deltaX,qc.y=18*a.deltaY):(qc.x=a.deltaX,qc.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(qc.x=-.16*a.wheelDeltaX),a.wheelDeltaY?qc.y=-.16*a.wheelDeltaY:qc.y=-.16*a.wheelDelta;else{if(!("detail"in a))return;qc.y=a.detail}Ra(s,!0);var b=oa.x-qc.x,c=oa.y-qc.y;(i.modal||b<=ca.min.x&&b>=ca.max.x&&c<=ca.min.y&&c>=ca.max.y)&&a.preventDefault(),f.panTo(b,c)},toggleDesktopZoom:function(b){b=b||{x:pa.x/2+ra.x,y:pa.y/2+ra.y};var c=i.getDoubleTapZoom(!0,f.currItem),d=s===c;f.mouseZoomedIn=!d,f.zoomTo(d?f.currItem.initialZoomLevel:c,b,333),e[(d?"remove":"add")+"Class"](a,"pswp--zoomed-in")}}});var rc,sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc={history:!0,galleryUID:1},Ec=function(){return Bc.hash.substring(1)},Fc=function(){rc&&clearTimeout(rc),tc&&clearTimeout(tc)},Gc=function(){var a=Ec(),b={};if(a.length<5)return b;var c,d=a.split("&");for(c=0;c<d.length;c++)if(d[c]){var e=d[c].split("=");e.length<2||(b[e[0]]=e[1])}if(i.galleryPIDs){var f=b.pid;for(b.pid=0,c=0;c<Xb.length;c++)if(Xb[c].pid===f){b.pid=c;break}}else b.pid=parseInt(b.pid,10)-1;return b.pid<0&&(b.pid=0),b},Hc=function(){if(tc&&clearTimeout(tc),$a||U)return void(tc=setTimeout(Hc,500));uc?clearTimeout(sc):uc=!0;var a=m+1,b=$b(m);b.hasOwnProperty("pid")&&(a=b.pid);var c=xc+"&gid="+i.galleryUID+"&pid="+a;yc||-1===Bc.hash.indexOf(c)&&(Ac=!0);var d=Bc.href.split("#")[0]+"#"+c;Cc?"#"+c!==window.location.hash&&history[yc?"replaceState":"pushState"]("",document.title,d):yc?Bc.replace(d):Bc.hash=c,yc=!0,sc=setTimeout(function(){uc=!1},60)};ya("History",{publicMethods:{initHistory:function(){if(e.extend(i,Dc,!0),i.history){Bc=window.location,Ac=!1,zc=!1,yc=!1,xc=Ec(),Cc="pushState"in history,xc.indexOf("gid=")>-1&&(xc=xc.split("&gid=")[0],xc=xc.split("?gid=")[0]),Ba("afterChange",f.updateURL),Ba("unbindEvents",function(){e.unbind(window,"hashchange",f.onHashChange)});var a=function(){wc=!0,zc||(Ac?history.back():xc?Bc.hash=xc:Cc?history.pushState("",document.title,Bc.pathname+Bc.search):Bc.hash=""),Fc()};Ba("unbindEvents",function(){l&&a()}),Ba("destroy",function(){wc||a()}),Ba("firstUpdate",function(){m=Gc().pid});var b=xc.indexOf("pid=");b>-1&&(xc=xc.substring(0,b),"&"===xc.slice(-1)&&(xc=xc.slice(0,-1))),setTimeout(function(){j&&e.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){return Ec()===xc?(zc=!0,void f.close()):void(uc||(vc=!0,f.goTo(Gc().pid),vc=!1))},updateURL:function(){Fc(),vc||(yc?rc=setTimeout(Hc,800):Hc())}}}),e.extend(f,db)};return a});
var g,aa=aa||{},ba=this;function ca(a,b){var c=a.split("."),d=ba;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}function da(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length}function ga(a){return"string"==typeof a}function ha(a){return"number"==typeof a}function ia(a){return"function"==p(a)}var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function na(a,b,c){na=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return na.apply(null,arguments)}var oa=Date.now||function(){return+new Date};
function pa(a,b){function c(){}c.prototype=b.prototype;a.pe=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Oc=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function qa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},sa=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};function ta(a){a=String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return sa("0",Math.max(0,2-b))+a}
function va(a,b){return a<b?-1:a>b?1:0};function wa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function xa(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}function ya(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function za(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var Aa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ba(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Aa.length;f++)c=Aa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Ca(a,b){this.na=[];this.Xa=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.na[d]=e,c=!1)}}var Da={};function Ea(a){if(-128<=a&&128>a){var b=Da[a];if(b)return b}b=new Ca([a|0],0>a?-1:0);-128<=a&&128>a&&(Da[a]=b);return b}function Fa(a){if(isNaN(a)||!isFinite(a))return Ga;if(0>a)return Fa(-a).X();for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=Ha;return new Ca(b,0)}var Ha=4294967296,Ga=Ea(0),Ia=Ea(1),Ja=Ea(16777216);g=Ca.prototype;
g.Lc=function(){return 0<this.na.length?this.na[0]:this.Xa};g.cb=function(){if(this.pa())return-this.X().cb();for(var a=0,b=1,c=0;c<this.na.length;c++)var d=La(this,c),a=a+(0<=d?d:Ha+d)*b,b=b*Ha;return a};
g.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(this.Ga())return"0";if(this.pa())return"-"+this.X().toString(a);for(var b=Fa(Math.pow(a,6)),c=this,d="";;){var e=Ma(c,b),f=(c.Ab(e.multiply(b)).Lc()>>>0).toString(a),c=e;if(c.Ga())return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function La(a,b){return 0>b?0:b<a.na.length?a.na[b]:a.Xa}g.Ga=function(){if(0!=this.Xa)return!1;for(var a=0;a<this.na.length;a++)if(0!=this.na[a])return!1;return!0};
g.pa=function(){return-1==this.Xa};g.Dd=function(){return 0==this.na.length&&-1==this.Xa||0<this.na.length&&0!=(this.na[0]&1)};g.Fa=function(a){if(this.Xa!=a.Xa)return!1;for(var b=Math.max(this.na.length,a.na.length),c=0;c<b;c++)if(La(this,c)!=La(a,c))return!1;return!0};g.Vc=function(a){return 0<this.compare(a)};g.Ad=function(a){return 0<=this.compare(a)};g.lc=function(a){return 0>this.compare(a)};g.Fd=function(a){return 0>=this.compare(a)};
g.compare=function(a){a=this.Ab(a);return a.pa()?-1:a.Ga()?0:1};g.X=function(){return this.Hd().add(Ia)};g.add=function(a){for(var b=Math.max(this.na.length,a.na.length),c=[],d=0,e=0;e<=b;e++){var f=d+(La(this,e)&65535)+(La(a,e)&65535),h=(f>>>16)+(La(this,e)>>>16)+(La(a,e)>>>16),d=h>>>16,f=f&65535,h=h&65535;c[e]=h<<16|f}return new Ca(c,c[c.length-1]&-2147483648?-1:0)};g.Ab=function(a){return this.add(a.X())};
g.multiply=function(a){if(this.Ga()||a.Ga())return Ga;if(this.pa())return a.pa()?this.X().multiply(a.X()):this.X().multiply(a).X();if(a.pa())return this.multiply(a.X()).X();if(this.lc(Ja)&&a.lc(Ja))return Fa(this.cb()*a.cb());for(var b=this.na.length+a.na.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.na.length;d++)for(var e=0;e<a.na.length;e++){var f=La(this,d)>>>16,h=La(this,d)&65535,k=La(a,e)>>>16,l=La(a,e)&65535;c[2*d+2*e]+=h*l;Na(c,2*d+2*e);c[2*d+2*e+1]+=f*l;Na(c,2*d+2*e+1);c[2*d+2*e+1]+=h*
k;Na(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;Na(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new Ca(c,0)};function Na(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535}
function Ma(a,b){if(b.Ga())throw Error("division by zero");if(a.Ga())return Ga;if(a.pa())return b.pa()?Ma(a.X(),b.X()):Ma(a.X(),b).X();if(b.pa())return Ma(a,b.X()).X();if(30<a.na.length){if(a.pa()||b.pa())throw Error("slowDivide_ only works with positive integers.");for(var c=Ia,d=b;d.Fd(a);)c=c.shiftLeft(1),d=d.shiftLeft(1);for(var e=c.Pb(1),f=d.Pb(1),h,d=d.Pb(2),c=c.Pb(2);!d.Ga();)h=f.add(d),h.Fd(a)&&(e=e.add(c),f=h),d=d.Pb(1),c=c.Pb(1);return e}c=Ga;for(d=a;d.Ad(b);){e=Math.max(1,Math.floor(d.cb()/
b.cb()));f=Math.ceil(Math.log(e)/Math.LN2);f=48>=f?1:Math.pow(2,f-48);h=Fa(e);for(var k=h.multiply(b);k.pa()||k.Vc(d);)e-=f,h=Fa(e),k=h.multiply(b);h.Ga()&&(h=Ia);c=c.add(h);d=d.Ab(k)}return c}g.Hd=function(){for(var a=this.na.length,b=[],c=0;c<a;c++)b[c]=~this.na[c];return new Ca(b,~this.Xa)};g.Pd=function(a){for(var b=Math.max(this.na.length,a.na.length),c=[],d=0;d<b;d++)c[d]=La(this,d)&La(a,d);return new Ca(c,this.Xa&a.Xa)};
g.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.na.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?La(this,e-b)<<a|La(this,e-b-1)>>>32-a:La(this,e-b);return new Ca(d,this.Xa)};g.Pb=function(a){var b=a>>5;a%=32;for(var c=this.na.length-b,d=[],e=0;e<c;e++)d[e]=0<a?La(this,e+b)>>>a|La(this,e+b+1)<<32-a:La(this,e+b);return new Ca(d,this.Xa)};function Pa(a,b){null!=a&&this.append.apply(this,arguments)}g=Pa.prototype;g.Rb="";g.set=function(a){this.Rb=""+a};g.append=function(a,b,c){this.Rb+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.Rb+=arguments[d];return this};g.clear=function(){this.Rb=""};g.toString=function(){return this.Rb};function Qa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Qa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}pa(Qa,Error);Qa.prototype.name="CustomError";function Ra(a,b){b.unshift(a);Qa.call(this,qa.apply(null,b));b.shift()}pa(Ra,Qa);Ra.prototype.name="AssertionError";function Ta(a,b){throw new Ra("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Wa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(ga(a))return ga(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Xa=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=ga(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Ya(a){var b;a:{b=Za;for(var c=a.length,d=ga(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:ga(a)?a.charAt(b):a[b]};function $a(a){$a[" "](a);return a}$a[" "]=da;function bb(a,b,c){return Object.prototype.hasOwnProperty.call(a,b)?a[b]:a[b]=c(b)};function cb(a,b){this.ua=a|0;this.Ba=b|0}var db={},eb={};function fb(a){return-128<=a&&128>a?bb(db,a,function(a){return new cb(a|0,0>a?-1:0)}):new cb(a|0,0>a?-1:0)}function gb(a){return isNaN(a)?ib():a<=-jb?kb():a+1>=jb?lb():0>a?gb(-a).X():new cb(a%mb|0,a/mb|0)}function nb(a,b){return new cb(a,b)}
function ob(a,b){if(0==a.length)throw Error("number format error: empty string");var c=b||10;if(2>c||36<c)throw Error("radix out of range: "+c);if("-"==a.charAt(0))return ob(a.substring(1),c).X();if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var d=gb(Math.pow(c,8)),e=ib(),f=0;f<a.length;f+=8){var h=Math.min(8,a.length-f),k=parseInt(a.substring(f,f+h),c);8>h?(h=gb(Math.pow(c,h)),e=e.multiply(h).add(gb(k))):(e=e.multiply(d),e=e.add(gb(k)))}return e}
var mb=4294967296,jb=mb*mb/2;function ib(){return bb(eb,pb,function(){return fb(0)})}function rb(){return bb(eb,sb,function(){return fb(1)})}function tb(){return bb(eb,ub,function(){return fb(-1)})}function lb(){return bb(eb,vb,function(){return nb(-1,2147483647)})}function kb(){return bb(eb,wb,function(){return nb(0,-2147483648)})}function yb(){return bb(eb,zb,function(){return fb(16777216)})}g=cb.prototype;g.Lc=function(){return this.ua};
g.cb=function(){return this.Ba*mb+(0<=this.ua?this.ua:mb+this.ua)};g.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(this.Ga())return"0";if(this.pa()){if(this.Fa(kb())){var b=gb(a),c=Ab(this,b),b=c.multiply(b).Ab(this);return c.toString(a)+b.Lc().toString(a)}return"-"+this.X().toString(a)}for(var c=gb(Math.pow(a,6)),b=this,d="";;){var e=Ab(b,c),f=(b.Ab(e.multiply(c)).Lc()>>>0).toString(a),b=e;if(b.Ga())return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};
g.Ga=function(){return 0==this.Ba&&0==this.ua};g.pa=function(){return 0>this.Ba};g.Dd=function(){return 1==(this.ua&1)};g.Fa=function(a){return this.Ba==a.Ba&&this.ua==a.ua};g.lc=function(a){return 0>this.compare(a)};g.Fd=function(a){return 0>=this.compare(a)};g.Vc=function(a){return 0<this.compare(a)};g.Ad=function(a){return 0<=this.compare(a)};g.compare=function(a){if(this.Fa(a))return 0;var b=this.pa(),c=a.pa();return b&&!c?-1:!b&&c?1:this.Ab(a).pa()?-1:1};
g.X=function(){return this.Fa(kb())?kb():this.Hd().add(rb())};g.add=function(a){var b=this.Ba>>>16,c=this.Ba&65535,d=this.ua>>>16,e=a.Ba>>>16,f=a.Ba&65535,h=a.ua>>>16;a=0+((this.ua&65535)+(a.ua&65535));h=0+(a>>>16)+(d+h);d=0+(h>>>16);d+=c+f;b=0+(d>>>16)+(b+e)&65535;return nb((h&65535)<<16|a&65535,b<<16|d&65535)};g.Ab=function(a){return this.add(a.X())};
g.multiply=function(a){if(this.Ga()||a.Ga())return ib();if(this.Fa(kb()))return a.Dd()?kb():ib();if(a.Fa(kb()))return this.Dd()?kb():ib();if(this.pa())return a.pa()?this.X().multiply(a.X()):this.X().multiply(a).X();if(a.pa())return this.multiply(a.X()).X();if(this.lc(yb())&&a.lc(yb()))return gb(this.cb()*a.cb());var b=this.Ba>>>16,c=this.Ba&65535,d=this.ua>>>16,e=this.ua&65535,f=a.Ba>>>16,h=a.Ba&65535,k=a.ua>>>16;a=a.ua&65535;var l,n,m,q;q=0+e*a;m=0+(q>>>16)+d*a;n=0+(m>>>16);m=(m&65535)+e*k;n+=m>>>
16;m&=65535;n+=c*a;l=0+(n>>>16);n=(n&65535)+d*k;l+=n>>>16;n=(n&65535)+e*h;l+=n>>>16;n&=65535;return nb(m<<16|q&65535,(l+(b*a+c*k+d*h+e*f)&65535)<<16|n)};
function Ab(a,b){if(b.Ga())throw Error("division by zero");if(a.Ga())return ib();if(a.Fa(kb())){if(b.Fa(rb())||b.Fa(tb()))return kb();if(b.Fa(kb()))return rb();var c=Ab(a.Pb(1),b).shiftLeft(1);if(c.Fa(ib()))return b.pa()?rb():tb();var d=a.Ab(b.multiply(c));return c.add(Ab(d,b))}if(b.Fa(kb()))return ib();if(a.pa())return b.pa()?Ab(a.X(),b.X()):Ab(a.X(),b).X();if(b.pa())return Ab(a,b.X()).X();for(var e=ib(),d=a;d.Ad(b);){for(var c=Math.max(1,Math.floor(d.cb()/b.cb())),f=Math.ceil(Math.log(c)/Math.LN2),
f=48>=f?1:Math.pow(2,f-48),h=gb(c),k=h.multiply(b);k.pa()||k.Vc(d);)c-=f,h=gb(c),k=h.multiply(b);h.Ga()&&(h=rb());e=e.add(h);d=d.Ab(k)}return e}g.Hd=function(){return nb(~this.ua,~this.Ba)};g.Pd=function(a){return nb(this.ua&a.ua,this.Ba&a.Ba)};g.shiftLeft=function(a){a&=63;if(0==a)return this;var b=this.ua;return 32>a?nb(b<<a,this.Ba<<a|b>>>32-a):nb(0,b<<a-32)};g.Pb=function(a){a&=63;if(0==a)return this;var b=this.Ba;return 32>a?nb(this.ua>>>a|b<<32-a,b>>a):nb(b>>a-32,0<=b?0:-1)};
function Bb(a,b){b&=63;if(0==b)return a;var c=a.Ba;return 32>b?nb(a.ua>>>b|c<<32-b,c>>>b):32==b?nb(c,0):nb(c>>>b-32,0)}var vb=1,wb=2,pb=3,sb=4,ub=5,zb=6;var Cb;if("undefined"===typeof Eb)var Eb=function(){throw Error("No *print-fn* fn set for evaluation environment");};if("undefined"===typeof Fb)var Fb=function(){throw Error("No *print-err-fn* fn set for evaluation environment");};var Gb=null;if("undefined"===typeof Hb)var Hb=null;function Ib(){return new r(null,5,[Jb,!0,Kb,!0,Lb,!1,Mb,!1,Nb,null],null)}function t(a){return null!=a&&!1!==a}function Ob(a){return a instanceof Array}function Pb(a){return null==a?!0:!1===a?!0:!1}
function u(a,b){return a[p(null==b?null:b)]?!0:a._?!0:!1}function v(a,b){var c=null==b?null:b.constructor,c=t(t(c)?c.$d:c)?c.Tc:p(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function Rb(a){var b=a.Tc;return t(b)?b:""+w(a)}var Sb="undefined"!==typeof Symbol&&"function"===p(Symbol)?Symbol.iterator:"@@iterator";function Tb(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}
function Ub(a){function b(a,b){a.push(b);return a}var c=[];return Vb?Vb(b,c,a):Wb.call(null,b,c,a)}function Yb(){}function Zb(){}var $b=function $b(b){if(null!=b&&null!=b.ya)return b.ya(b);var c=$b[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=$b._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("ICloneable.-clone",b);};function ac(){}
var bc=function bc(b){if(null!=b&&null!=b.ca)return b.ca(b);var c=bc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=bc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("ICounted.-count",b);},cc=function cc(b){if(null!=b&&null!=b.ka)return b.ka(b);var c=cc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=cc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IEmptyableCollection.-empty",b);};function dc(){}
var ec=function ec(b,c){if(null!=b&&null!=b.Y)return b.Y(b,c);var d=ec[p(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=ec._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw v("ICollection.-conj",b);};function fc(){}
var y=function y(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return y.a(arguments[0],arguments[1]);case 3:return y.j(arguments[0],arguments[1],arguments[2]);default:throw Error([w("Invalid arity: "),w(c.length)].join(""));}};
y.a=function(a,b){if(null!=a&&null!=a.K)return a.K(a,b);var c=y[p(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=y._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw v("IIndexed.-nth",a);};y.j=function(a,b,c){if(null!=a&&null!=a.Ja)return a.Ja(a,b,c);var d=y[p(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=y._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw v("IIndexed.-nth",a);};y.O=3;function gc(){}
var hc=function hc(b){if(null!=b&&null!=b.ta)return b.ta(b);var c=hc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=hc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("ISeq.-first",b);},ic=function ic(b){if(null!=b&&null!=b.za)return b.za(b);var c=ic[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=ic._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("ISeq.-rest",b);};function kc(){}function lc(){}
var mc=function mc(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return mc.a(arguments[0],arguments[1]);case 3:return mc.j(arguments[0],arguments[1],arguments[2]);default:throw Error([w("Invalid arity: "),w(c.length)].join(""));}};
mc.a=function(a,b){if(null!=a&&null!=a.J)return a.J(a,b);var c=mc[p(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=mc._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw v("ILookup.-lookup",a);};mc.j=function(a,b,c){if(null!=a&&null!=a.G)return a.G(a,b,c);var d=mc[p(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=mc._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw v("ILookup.-lookup",a);};mc.O=3;
var nc=function nc(b,c){if(null!=b&&null!=b.Qc)return b.Qc(b,c);var d=nc[p(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=nc._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw v("IAssociative.-contains-key?",b);},oc=function oc(b,c,d){if(null!=b&&null!=b.Ta)return b.Ta(b,c,d);var e=oc[p(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=oc._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw v("IAssociative.-assoc",b);};function pc(){}
var qc=function qc(b,c){if(null!=b&&null!=b.Fb)return b.Fb(b,c);var d=qc[p(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=qc._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw v("IMap.-dissoc",b);};function rc(){}
var sc=function sc(b){if(null!=b&&null!=b.tc)return b.tc(b);var c=sc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=sc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IMapEntry.-key",b);},tc=function tc(b){if(null!=b&&null!=b.uc)return b.uc(b);var c=tc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=tc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IMapEntry.-val",b);};function uc(){}
var vc=function vc(b){if(null!=b&&null!=b.Gb)return b.Gb(b);var c=vc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=vc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IStack.-peek",b);},wc=function wc(b){if(null!=b&&null!=b.Hb)return b.Hb(b);var c=wc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=wc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IStack.-pop",b);};function yc(){}
var zc=function zc(b,c,d){if(null!=b&&null!=b.Sb)return b.Sb(b,c,d);var e=zc[p(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=zc._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw v("IVector.-assoc-n",b);},Ac=function Ac(b){if(null!=b&&null!=b.td)return b.td(b);var c=Ac[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Ac._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IDeref.-deref",b);};function Bc(){}
var Cc=function Cc(b){if(null!=b&&null!=b.V)return b.V(b);var c=Cc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Cc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IMeta.-meta",b);},Dc=function Dc(b,c){if(null!=b&&null!=b.W)return b.W(b,c);var d=Dc[p(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Dc._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw v("IWithMeta.-with-meta",b);};function Ec(){}
var Fc=function Fc(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return Fc.a(arguments[0],arguments[1]);case 3:return Fc.j(arguments[0],arguments[1],arguments[2]);default:throw Error([w("Invalid arity: "),w(c.length)].join(""));}};
Fc.a=function(a,b){if(null!=a&&null!=a.ra)return a.ra(a,b);var c=Fc[p(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=Fc._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw v("IReduce.-reduce",a);};Fc.j=function(a,b,c){if(null!=a&&null!=a.sa)return a.sa(a,b,c);var d=Fc[p(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=Fc._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw v("IReduce.-reduce",a);};Fc.O=3;
var Gc=function Gc(b,c,d){if(null!=b&&null!=b.ec)return b.ec(b,c,d);var e=Gc[p(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=Gc._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw v("IKVReduce.-kv-reduce",b);},Hc=function Hc(b,c){if(null!=b&&null!=b.C)return b.C(b,c);var d=Hc[p(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Hc._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw v("IEquiv.-equiv",b);},Ic=function Ic(b){if(null!=b&&null!=b.N)return b.N(b);
var c=Ic[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Ic._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IHash.-hash",b);};function Jc(){}var Kc=function Kc(b){if(null!=b&&null!=b.Z)return b.Z(b);var c=Kc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Kc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("ISeqable.-seq",b);};function Lc(){}function Mc(){}function Nc(){}
var Oc=function Oc(b){if(null!=b&&null!=b.fc)return b.fc(b);var c=Oc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Oc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IReversible.-rseq",b);},Pc=function Pc(b,c){if(null!=b&&null!=b.Zd)return b.Zd(0,c);var d=Pc[p(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Pc._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw v("IWriter.-write",b);},Qc=function Qc(b,c,d){if(null!=b&&null!=b.Yd)return b.Yd(0,c,d);
var e=Qc[p(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=Qc._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw v("IWatchable.-notify-watches",b);},Rc=function Rc(b){if(null!=b&&null!=b.dc)return b.dc(b);var c=Rc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Rc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IEditableCollection.-as-transient",b);},Sc=function Sc(b,c){if(null!=b&&null!=b.wc)return b.wc(b,c);var d=Sc[p(null==b?null:b)];if(null!=
d)return d.a?d.a(b,c):d.call(null,b,c);d=Sc._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw v("ITransientCollection.-conj!",b);},Vc=function Vc(b){if(null!=b&&null!=b.xc)return b.xc(b);var c=Vc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Vc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("ITransientCollection.-persistent!",b);},Wc=function Wc(b,c,d){if(null!=b&&null!=b.vc)return b.vc(b,c,d);var e=Wc[p(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,
b,c,d);e=Wc._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw v("ITransientAssociative.-assoc!",b);},Xc=function Xc(b,c,d){if(null!=b&&null!=b.Xd)return b.Xd(0,c,d);var e=Xc[p(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=Xc._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw v("ITransientVector.-assoc-n!",b);},Yc=function Yc(b){if(null!=b&&null!=b.Vd)return b.Vd();var c=Yc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Yc._;if(null!=c)return c.g?
c.g(b):c.call(null,b);throw v("IChunk.-drop-first",b);},Zc=function Zc(b){if(null!=b&&null!=b.rd)return b.rd(b);var c=Zc[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Zc._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IChunkedSeq.-chunked-first",b);},$c=function $c(b){if(null!=b&&null!=b.sd)return b.sd(b);var c=$c[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=$c._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IChunkedSeq.-chunked-rest",b);},ad=function ad(b){if(null!=
b&&null!=b.qd)return b.qd(b);var c=ad[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=ad._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IChunkedNext.-chunked-next",b);},bd=function bd(b,c){if(null!=b&&null!=b.Je)return b.Je(b,c);var d=bd[p(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=bd._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw v("IReset.-reset!",b);},cd=function cd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=
1;else break;switch(c.length){case 2:return cd.a(arguments[0],arguments[1]);case 3:return cd.j(arguments[0],arguments[1],arguments[2]);case 4:return cd.M(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return cd.ha(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([w("Invalid arity: "),w(c.length)].join(""));}};
cd.a=function(a,b){if(null!=a&&null!=a.Le)return a.Le(a,b);var c=cd[p(null==a?null:a)];if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);c=cd._;if(null!=c)return c.a?c.a(a,b):c.call(null,a,b);throw v("ISwap.-swap!",a);};cd.j=function(a,b,c){if(null!=a&&null!=a.Me)return a.Me(a,b,c);var d=cd[p(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=cd._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw v("ISwap.-swap!",a);};
cd.M=function(a,b,c,d){if(null!=a&&null!=a.Ne)return a.Ne(a,b,c,d);var e=cd[p(null==a?null:a)];if(null!=e)return e.M?e.M(a,b,c,d):e.call(null,a,b,c,d);e=cd._;if(null!=e)return e.M?e.M(a,b,c,d):e.call(null,a,b,c,d);throw v("ISwap.-swap!",a);};cd.ha=function(a,b,c,d,e){if(null!=a&&null!=a.Oe)return a.Oe(a,b,c,d,e);var f=cd[p(null==a?null:a)];if(null!=f)return f.ha?f.ha(a,b,c,d,e):f.call(null,a,b,c,d,e);f=cd._;if(null!=f)return f.ha?f.ha(a,b,c,d,e):f.call(null,a,b,c,d,e);throw v("ISwap.-swap!",a);};
cd.O=5;var dd=function dd(b){if(null!=b&&null!=b.La)return b.La(b);var c=dd[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=dd._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IIterable.-iterator",b);};function ed(a){this.ef=a;this.o=1073741824;this.F=0}ed.prototype.Zd=function(a,b){return this.ef.append(b)};function fd(a){var b=new Pa;a.R(null,new ed(b),Ib());return""+w(b)}
var gd="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function hd(a){a=gd(a|0,-862048943);return gd(a<<15|a>>>-15,461845907)}function id(a,b){var c=(a|0)^(b|0);return gd(c<<13|c>>>-13,5)+-430675100|0}function jd(a,b){var c=(a|0)^b,c=gd(c^c>>>16,-2048144789),c=gd(c^c>>>13,-1028477387);return c^c>>>16}
function kd(a){var b;a:{b=1;for(var c=0;;)if(b<a.length){var d=b+2,c=id(c,hd(a.charCodeAt(b-1)|a.charCodeAt(b)<<16));b=d}else{b=c;break a}}b=1===(a.length&1)?b^hd(a.charCodeAt(a.length-1)):b;return jd(b,gd(2,a.length))}var ld={},md=0;function od(a){255<md&&(ld={},md=0);if(null==a)return 0;var b=ld[a];if("number"!==typeof b){a:if(null!=a)if(b=a.length,0<b)for(var c=0,d=0;;)if(c<b)var e=c+1,d=gd(31,d)+a.charCodeAt(c),c=e;else{b=d;break a}else b=0;else b=0;ld[a]=b;md+=1}return a=b}
function pd(a){if(null!=a&&(a.o&4194304||a.ud))return a.N(null);if("number"===typeof a){if(t(isFinite(a)))return Math.floor(a)%2147483647;switch(a){case Infinity:return 2146435072;case -Infinity:return-1048576;default:return 2146959360}}else return!0===a?a=1:!1===a?a=0:"string"===typeof a?(a=od(a),0!==a&&(a=hd(a),a=id(0,a),a=jd(a,4))):a=a instanceof Date?a.valueOf():null==a?0:Ic(a),a}function qd(a,b){return a^b+2654435769+(a<<6)+(a>>2)}
function rd(a,b,c,d,e){this.Hc=a;this.name=b;this.Ma=c;this.$b=d;this.Ia=e;this.o=2154168321;this.F=4096}g=rd.prototype;g.toString=function(){return this.Ma};g.equiv=function(a){return this.C(null,a)};g.C=function(a,b){return b instanceof rd?this.Ma===b.Ma:!1};
g.call=function(){function a(a,b,c){return z.j?z.j(b,this,c):z.call(null,b,this,c)}function b(a,b){return z.a?z.a(b,this):z.call(null,b,this)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,0,e);case 3:return a.call(this,0,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.j=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.g=function(a){return z.a?z.a(a,this):z.call(null,a,this)};
g.a=function(a,b){return z.j?z.j(a,this,b):z.call(null,a,this,b)};g.V=function(){return this.Ia};g.W=function(a,b){return new rd(this.Hc,this.name,this.Ma,this.$b,b)};g.N=function(){var a=this.$b;return null!=a?a:this.$b=a=qd(kd(this.name),od(this.Hc))};g.R=function(a,b){return Pc(b,this.Ma)};
var sd=function sd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return sd.g(arguments[0]);case 2:return sd.a(arguments[0],arguments[1]);default:throw Error([w("Invalid arity: "),w(c.length)].join(""));}};sd.g=function(a){if(a instanceof rd)return a;var b=a.indexOf("/");return 1>b?sd.a(null,a):sd.a(a.substring(0,b),a.substring(b+1,a.length))};sd.a=function(a,b){var c=null!=a?[w(a),w("/"),w(b)].join(""):b;return new rd(a,b,c,null,null)};
sd.O=2;function B(a){if(null==a)return null;if(null!=a&&(a.o&8388608||a.Ke))return a.Z(null);if(Ob(a)||"string"===typeof a)return 0===a.length?null:new C(a,0,null);if(u(Jc,a))return Kc(a);throw Error([w(a),w(" is not ISeqable")].join(""));}function E(a){if(null==a)return null;if(null!=a&&(a.o&64||a.ia))return a.ta(null);a=B(a);return null==a?null:hc(a)}function F(a){return null!=a?null!=a&&(a.o&64||a.ia)?a.za(null):(a=B(a))?ic(a):G:G}
function I(a){return null==a?null:null!=a&&(a.o&128||a.Sc)?a.Ea(null):B(F(a))}var td=function td(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return td.g(arguments[0]);case 2:return td.a(arguments[0],arguments[1]);default:return td.D(arguments[0],arguments[1],new C(c.slice(2),0,null))}};td.g=function(){return!0};td.a=function(a,b){return null==a?null==b:a===b||Hc(a,b)};
td.D=function(a,b,c){for(;;)if(td.a(a,b))if(I(c))a=b,b=E(c),c=I(c);else return td.a(b,E(c));else return!1};td.T=function(a){var b=E(a),c=I(a);a=E(c);c=I(c);return td.D(b,a,c)};td.O=2;function ud(a){this.P=a}ud.prototype.next=function(){if(null!=this.P){var a=E(this.P);this.P=I(this.P);return{value:a,done:!1}}return{value:null,done:!0}};function vd(a){return new ud(B(a))}function wd(a,b){var c=hd(a),c=id(0,c);return jd(c,b)}
function xd(a){var b=0,c=1;for(a=B(a);;)if(null!=a)b+=1,c=gd(31,c)+pd(E(a))|0,a=I(a);else return wd(c,b)}var yd=wd(1,0);function zd(a){var b=0,c=0;for(a=B(a);;)if(null!=a)b+=1,c=c+pd(E(a))|0,a=I(a);else return wd(c,b)}var Ad=wd(0,0);ac["null"]=!0;bc["null"]=function(){return 0};Date.prototype.C=function(a,b){return b instanceof Date&&this.valueOf()===b.valueOf()};Hc.number=function(a,b){return a===b};Yb["function"]=!0;Bc["function"]=!0;Cc["function"]=function(){return null};
Ic._=function(a){return a[ja]||(a[ja]=++ka)};function Bd(a){this.B=a;this.o=32768;this.F=0}Bd.prototype.td=function(){return this.B};function Cd(a){return a instanceof Bd}function J(a){return Ac(a)}function Dd(a,b){var c=bc(a);if(0===c)return b.H?b.H():b.call(null);for(var d=y.a(a,0),e=1;;)if(e<c){var f=y.a(a,e),d=b.a?b.a(d,f):b.call(null,d,f);if(Cd(d))return Ac(d);e+=1}else return d}
function Ed(a,b,c){var d=bc(a),e=c;for(c=0;;)if(c<d){var f=y.a(a,c),e=b.a?b.a(e,f):b.call(null,e,f);if(Cd(e))return Ac(e);c+=1}else return e}function Fd(a,b){var c=a.length;if(0===a.length)return b.H?b.H():b.call(null);for(var d=a[0],e=1;;)if(e<c){var f=a[e],d=b.a?b.a(d,f):b.call(null,d,f);if(Cd(d))return Ac(d);e+=1}else return d}function Gd(a,b,c){var d=a.length,e=c;for(c=0;;)if(c<d){var f=a[c],e=b.a?b.a(e,f):b.call(null,e,f);if(Cd(e))return Ac(e);c+=1}else return e}
function Hd(a,b,c,d){for(var e=a.length;;)if(d<e){var f=a[d];c=b.a?b.a(c,f):b.call(null,c,f);if(Cd(c))return Ac(c);d+=1}else return c}function Id(a){return null!=a?a.o&2||a.xe?!0:a.o?!1:u(ac,a):u(ac,a)}function Jd(a){return null!=a?a.o&16||a.Wd?!0:a.o?!1:u(fc,a):u(fc,a)}function L(a,b,c){var d=N.g?N.g(a):N.call(null,a);if(c>=d)return-1;!(0<c)&&0>c&&(c+=d,c=0>c?0:c);for(;;)if(c<d){if(td.a(Kd?Kd(a,c):Ld.call(null,a,c),b))return c;c+=1}else return-1}
function O(a,b,c){var d=N.g?N.g(a):N.call(null,a);if(0===d)return-1;0<c?(--d,c=d<c?d:c):c=0>c?d+c:c;for(;;)if(0<=c){if(td.a(Kd?Kd(a,c):Ld.call(null,a,c),b))return c;--c}else return-1}function Md(a,b){this.h=a;this.A=b}Md.prototype.wa=function(){return this.A<this.h.length};Md.prototype.next=function(){var a=this.h[this.A];this.A+=1;return a};function C(a,b,c){this.h=a;this.A=b;this.v=c;this.o=166592766;this.F=8192}g=C.prototype;g.toString=function(){return fd(this)};
g.equiv=function(a){return this.C(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N.g?N.g(this):N.call(null,this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.K=function(a,b){var c=b+this.A;return c<this.h.length?this.h[c]:null};g.Ja=function(a,b,c){a=b+this.A;return a<this.h.length?this.h[a]:c};g.La=function(){return new Md(this.h,this.A)};g.V=function(){return this.v};
g.ya=function(){return new C(this.h,this.A,this.v)};g.Ea=function(){return this.A+1<this.h.length?new C(this.h,this.A+1,null):null};g.ca=function(){var a=this.h.length-this.A;return 0>a?0:a};g.fc=function(){var a=bc(this);return 0<a?new Nd(this,a-1,null):null};g.N=function(){return xd(this)};g.C=function(a,b){return Od.a?Od.a(this,b):Od.call(null,this,b)};g.ka=function(){return G};g.ra=function(a,b){return Hd(this.h,b,this.h[this.A],this.A+1)};g.sa=function(a,b,c){return Hd(this.h,b,c,this.A)};
g.ta=function(){return this.h[this.A]};g.za=function(){return this.A+1<this.h.length?new C(this.h,this.A+1,null):G};g.Z=function(){return this.A<this.h.length?this:null};g.W=function(a,b){return new C(this.h,this.A,b)};g.Y=function(a,b){return P.a?P.a(b,this):P.call(null,b,this)};C.prototype[Sb]=function(){return vd(this)};function Pd(a,b){return b<a.length?new C(a,b,null):null}
function Q(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Pd(arguments[0],0);case 2:return Pd(arguments[0],arguments[1]);default:throw Error([w("Invalid arity: "),w(b.length)].join(""));}}function Nd(a,b,c){this.sc=a;this.A=b;this.v=c;this.o=32374990;this.F=8192}g=Nd.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N.g?N.g(this):N.call(null,this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.v};g.ya=function(){return new Nd(this.sc,this.A,this.v)};g.Ea=function(){return 0<this.A?new Nd(this.sc,this.A-1,null):null};g.ca=function(){return this.A+1};g.N=function(){return xd(this)};
g.C=function(a,b){return Od.a?Od.a(this,b):Od.call(null,this,b)};g.ka=function(){var a=G,b=this.v;return Qd.a?Qd.a(a,b):Qd.call(null,a,b)};g.ra=function(a,b){return Rd?Rd(b,this):Sd.call(null,b,this)};g.sa=function(a,b,c){return Ud?Ud(b,c,this):Sd.call(null,b,c,this)};g.ta=function(){return y.a(this.sc,this.A)};g.za=function(){return 0<this.A?new Nd(this.sc,this.A-1,null):G};g.Z=function(){return this};g.W=function(a,b){return new Nd(this.sc,this.A,b)};
g.Y=function(a,b){return P.a?P.a(b,this):P.call(null,b,this)};Nd.prototype[Sb]=function(){return vd(this)};Hc._=function(a,b){return a===b};var Vd=function Vd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return Vd.H();case 1:return Vd.g(arguments[0]);case 2:return Vd.a(arguments[0],arguments[1]);default:return Vd.D(arguments[0],arguments[1],new C(c.slice(2),0,null))}};Vd.H=function(){return Wd};Vd.g=function(a){return a};
Vd.a=function(a,b){return null!=a?ec(a,b):ec(G,b)};Vd.D=function(a,b,c){for(;;)if(t(c))a=Vd.a(a,b),b=E(c),c=I(c);else return Vd.a(a,b)};Vd.T=function(a){var b=E(a),c=I(a);a=E(c);c=I(c);return Vd.D(b,a,c)};Vd.O=2;function N(a){if(null!=a)if(null!=a&&(a.o&2||a.xe))a=a.ca(null);else if(Ob(a))a=a.length;else if("string"===typeof a)a=a.length;else if(null!=a&&(a.o&8388608||a.Ke))a:{a=B(a);for(var b=0;;){if(Id(a)){a=b+bc(a);break a}a=I(a);b+=1}}else a=bc(a);else a=0;return a}
function Xd(a,b,c){for(;;){if(null==a)return c;if(0===b)return B(a)?E(a):c;if(Jd(a))return y.j(a,b,c);if(B(a))a=I(a),--b;else return c}}function Ld(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return Kd(arguments[0],arguments[1]);case 3:return R(arguments[0],arguments[1],arguments[2]);default:throw Error([w("Invalid arity: "),w(b.length)].join(""));}}
function Kd(a,b){if("number"!==typeof b)throw Error("index argument to nth must be a number");if(null==a)return a;if(null!=a&&(a.o&16||a.Wd))return a.K(null,b);if(Ob(a))return b<a.length?a[b]:null;if("string"===typeof a)return b<a.length?a.charAt(b):null;if(null!=a&&(a.o&64||a.ia)){var c;a:{c=a;for(var d=b;;){if(null==c)throw Error("Index out of bounds");if(0===d){if(B(c)){c=E(c);break a}throw Error("Index out of bounds");}if(Jd(c)){c=y.a(c,d);break a}if(B(c))c=I(c),--d;else throw Error("Index out of bounds");
}}return c}if(u(fc,a))return y.a(a,b);throw Error([w("nth not supported on this type "),w(Rb(null==a?null:a.constructor))].join(""));}
function R(a,b,c){if("number"!==typeof b)throw Error("index argument to nth must be a number.");if(null==a)return c;if(null!=a&&(a.o&16||a.Wd))return a.Ja(null,b,c);if(Ob(a))return b<a.length?a[b]:c;if("string"===typeof a)return b<a.length?a.charAt(b):c;if(null!=a&&(a.o&64||a.ia))return Xd(a,b,c);if(u(fc,a))return y.a(a,b);throw Error([w("nth not supported on this type "),w(Rb(null==a?null:a.constructor))].join(""));}
var z=function z(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return z.a(arguments[0],arguments[1]);case 3:return z.j(arguments[0],arguments[1],arguments[2]);default:throw Error([w("Invalid arity: "),w(c.length)].join(""));}};z.a=function(a,b){return null==a?null:null!=a&&(a.o&256||a.De)?a.J(null,b):Ob(a)?b<a.length?a[b|0]:null:"string"===typeof a?b<a.length?a[b|0]:null:u(lc,a)?mc.a(a,b):null};
z.j=function(a,b,c){return null!=a?null!=a&&(a.o&256||a.De)?a.G(null,b,c):Ob(a)?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:u(lc,a)?mc.j(a,b,c):c:c};z.O=3;var Yd=function Yd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 3:return Yd.j(arguments[0],arguments[1],arguments[2]);default:return Yd.D(arguments[0],arguments[1],arguments[2],new C(c.slice(3),0,null))}};Yd.j=function(a,b,c){return null!=a?oc(a,b,c):Zd([b],[c])};
Yd.D=function(a,b,c,d){for(;;)if(a=Yd.j(a,b,c),t(d))b=E(d),c=E(I(d)),d=I(I(d));else return a};Yd.T=function(a){var b=E(a),c=I(a);a=E(c);var d=I(c),c=E(d),d=I(d);return Yd.D(b,a,c,d)};Yd.O=3;var $d=function $d(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return $d.g(arguments[0]);case 2:return $d.a(arguments[0],arguments[1]);default:return $d.D(arguments[0],arguments[1],new C(c.slice(2),0,null))}};$d.g=function(a){return a};
$d.a=function(a,b){return null==a?null:qc(a,b)};$d.D=function(a,b,c){for(;;){if(null==a)return null;a=$d.a(a,b);if(t(c))b=E(c),c=I(c);else return a}};$d.T=function(a){var b=E(a),c=I(a);a=E(c);c=I(c);return $d.D(b,a,c)};$d.O=2;function ae(a){var b=ia(a);return b?b:null!=a?a.we?!0:a.vd?!1:u(Yb,a):u(Yb,a)}function be(a,b){this.l=a;this.v=b;this.o=393217;this.F=0}g=be.prototype;g.V=function(){return this.v};g.W=function(a,b){return new be(this.l,b)};g.we=!0;
g.call=function(){function a(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,K,fa,ua,Va){a=this;return ce.Rc?ce.Rc(a.l,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,K,fa,ua,Va):ce.call(null,a.l,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,K,fa,ua,Va)}function b(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,K,fa,ua){a=this;return a.l.sb?a.l.sb(b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,K,fa,ua):a.l.call(null,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,K,fa,ua)}function c(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,K,fa){a=this;return a.l.rb?a.l.rb(b,c,d,e,f,h,k,l,n,m,
q,x,A,D,H,M,T,K,fa):a.l.call(null,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,K,fa)}function d(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,K){a=this;return a.l.qb?a.l.qb(b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,K):a.l.call(null,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,K)}function e(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T){a=this;return a.l.pb?a.l.pb(b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T):a.l.call(null,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T)}function f(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M){a=this;return a.l.ob?a.l.ob(b,c,d,e,f,h,k,l,n,m,q,x,A,D,
H,M):a.l.call(null,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M)}function h(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H){a=this;return a.l.nb?a.l.nb(b,c,d,e,f,h,k,l,n,m,q,x,A,D,H):a.l.call(null,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H)}function k(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D){a=this;return a.l.mb?a.l.mb(b,c,d,e,f,h,k,l,n,m,q,x,A,D):a.l.call(null,b,c,d,e,f,h,k,l,n,m,q,x,A,D)}function l(a,b,c,d,e,f,h,k,l,n,m,q,x,A){a=this;return a.l.lb?a.l.lb(b,c,d,e,f,h,k,l,n,m,q,x,A):a.l.call(null,b,c,d,e,f,h,k,l,n,m,q,x,A)}function n(a,b,c,d,e,f,
h,k,l,n,m,q,x){a=this;return a.l.kb?a.l.kb(b,c,d,e,f,h,k,l,n,m,q,x):a.l.call(null,b,c,d,e,f,h,k,l,n,m,q,x)}function m(a,b,c,d,e,f,h,k,l,n,m,q){a=this;return a.l.jb?a.l.jb(b,c,d,e,f,h,k,l,n,m,q):a.l.call(null,b,c,d,e,f,h,k,l,n,m,q)}function q(a,b,c,d,e,f,h,k,l,n,m){a=this;return a.l.ib?a.l.ib(b,c,d,e,f,h,k,l,n,m):a.l.call(null,b,c,d,e,f,h,k,l,n,m)}function x(a,b,c,d,e,f,h,k,l,n){a=this;return a.l.wb?a.l.wb(b,c,d,e,f,h,k,l,n):a.l.call(null,b,c,d,e,f,h,k,l,n)}function A(a,b,c,d,e,f,h,k,l){a=this;return a.l.vb?
a.l.vb(b,c,d,e,f,h,k,l):a.l.call(null,b,c,d,e,f,h,k,l)}function D(a,b,c,d,e,f,h,k){a=this;return a.l.ub?a.l.ub(b,c,d,e,f,h,k):a.l.call(null,b,c,d,e,f,h,k)}function H(a,b,c,d,e,f,h){a=this;return a.l.tb?a.l.tb(b,c,d,e,f,h):a.l.call(null,b,c,d,e,f,h)}function M(a,b,c,d,e,f){a=this;return a.l.ha?a.l.ha(b,c,d,e,f):a.l.call(null,b,c,d,e,f)}function T(a,b,c,d,e){a=this;return a.l.M?a.l.M(b,c,d,e):a.l.call(null,b,c,d,e)}function fa(a,b,c,d){a=this;return a.l.j?a.l.j(b,c,d):a.l.call(null,b,c,d)}function ua(a,
b,c){a=this;return a.l.a?a.l.a(b,c):a.l.call(null,b,c)}function Va(a,b){a=this;return a.l.g?a.l.g(b):a.l.call(null,b)}function Uc(a){a=this;return a.l.H?a.l.H():a.l.call(null)}var K=null,K=function(K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb,Xb,jc,xc,Tc,nd,Td,Ge,Of,Xh,nk,mn){switch(arguments.length){case 1:return Uc.call(this,K);case 2:return Va.call(this,K,Ka);case 3:return ua.call(this,K,Ka,Oa);case 4:return fa.call(this,K,Ka,Oa,Sa);case 5:return T.call(this,K,Ka,Oa,Sa,Ua);case 6:return M.call(this,K,Ka,Oa,
Sa,Ua,ab);case 7:return H.call(this,K,Ka,Oa,Sa,Ua,ab,hb);case 8:return D.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb);case 9:return A.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb);case 10:return x.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db);case 11:return q.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb);case 12:return m.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb,Xb);case 13:return n.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb,Xb,jc);case 14:return l.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb,Xb,jc,xc);case 15:return k.call(this,
K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb,Xb,jc,xc,Tc);case 16:return h.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb,Xb,jc,xc,Tc,nd);case 17:return f.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb,Xb,jc,xc,Tc,nd,Td);case 18:return e.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb,Xb,jc,xc,Tc,nd,Td,Ge);case 19:return d.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb,Xb,jc,xc,Tc,nd,Td,Ge,Of);case 20:return c.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb,Xb,jc,xc,Tc,nd,Td,Ge,Of,Xh);case 21:return b.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,
Db,Qb,Xb,jc,xc,Tc,nd,Td,Ge,Of,Xh,nk);case 22:return a.call(this,K,Ka,Oa,Sa,Ua,ab,hb,qb,xb,Db,Qb,Xb,jc,xc,Tc,nd,Td,Ge,Of,Xh,nk,mn)}throw Error("Invalid arity: "+arguments.length);};K.g=Uc;K.a=Va;K.j=ua;K.M=fa;K.ha=T;K.tb=M;K.ub=H;K.vb=D;K.wb=A;K.ib=x;K.jb=q;K.kb=m;K.lb=n;K.mb=l;K.nb=k;K.ob=h;K.pb=f;K.qb=e;K.rb=d;K.sb=c;K.Ce=b;K.Rc=a;return K}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.H=function(){return this.l.H?this.l.H():this.l.call(null)};
g.g=function(a){return this.l.g?this.l.g(a):this.l.call(null,a)};g.a=function(a,b){return this.l.a?this.l.a(a,b):this.l.call(null,a,b)};g.j=function(a,b,c){return this.l.j?this.l.j(a,b,c):this.l.call(null,a,b,c)};g.M=function(a,b,c,d){return this.l.M?this.l.M(a,b,c,d):this.l.call(null,a,b,c,d)};g.ha=function(a,b,c,d,e){return this.l.ha?this.l.ha(a,b,c,d,e):this.l.call(null,a,b,c,d,e)};g.tb=function(a,b,c,d,e,f){return this.l.tb?this.l.tb(a,b,c,d,e,f):this.l.call(null,a,b,c,d,e,f)};
g.ub=function(a,b,c,d,e,f,h){return this.l.ub?this.l.ub(a,b,c,d,e,f,h):this.l.call(null,a,b,c,d,e,f,h)};g.vb=function(a,b,c,d,e,f,h,k){return this.l.vb?this.l.vb(a,b,c,d,e,f,h,k):this.l.call(null,a,b,c,d,e,f,h,k)};g.wb=function(a,b,c,d,e,f,h,k,l){return this.l.wb?this.l.wb(a,b,c,d,e,f,h,k,l):this.l.call(null,a,b,c,d,e,f,h,k,l)};g.ib=function(a,b,c,d,e,f,h,k,l,n){return this.l.ib?this.l.ib(a,b,c,d,e,f,h,k,l,n):this.l.call(null,a,b,c,d,e,f,h,k,l,n)};
g.jb=function(a,b,c,d,e,f,h,k,l,n,m){return this.l.jb?this.l.jb(a,b,c,d,e,f,h,k,l,n,m):this.l.call(null,a,b,c,d,e,f,h,k,l,n,m)};g.kb=function(a,b,c,d,e,f,h,k,l,n,m,q){return this.l.kb?this.l.kb(a,b,c,d,e,f,h,k,l,n,m,q):this.l.call(null,a,b,c,d,e,f,h,k,l,n,m,q)};g.lb=function(a,b,c,d,e,f,h,k,l,n,m,q,x){return this.l.lb?this.l.lb(a,b,c,d,e,f,h,k,l,n,m,q,x):this.l.call(null,a,b,c,d,e,f,h,k,l,n,m,q,x)};
g.mb=function(a,b,c,d,e,f,h,k,l,n,m,q,x,A){return this.l.mb?this.l.mb(a,b,c,d,e,f,h,k,l,n,m,q,x,A):this.l.call(null,a,b,c,d,e,f,h,k,l,n,m,q,x,A)};g.nb=function(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D){return this.l.nb?this.l.nb(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D):this.l.call(null,a,b,c,d,e,f,h,k,l,n,m,q,x,A,D)};g.ob=function(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H){return this.l.ob?this.l.ob(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H):this.l.call(null,a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H)};
g.pb=function(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M){return this.l.pb?this.l.pb(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M):this.l.call(null,a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M)};g.qb=function(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T){return this.l.qb?this.l.qb(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T):this.l.call(null,a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T)};
g.rb=function(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa){return this.l.rb?this.l.rb(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa):this.l.call(null,a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa)};g.sb=function(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua){return this.l.sb?this.l.sb(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua):this.l.call(null,a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua)};
g.Ce=function(a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua,Va){return ce.Rc?ce.Rc(this.l,a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua,Va):ce.call(null,this.l,a,b,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua,Va)};function Qd(a,b){return ia(a)?new be(a,b):null==a?null:Dc(a,b)}function de(a){var b=null!=a;return(b?null!=a?a.o&131072||a.Ge||(a.o?0:u(Bc,a)):u(Bc,a):b)?Cc(a):null}function ee(a){return null==a||Pb(B(a))}function fe(a){return null==a?!1:null!=a?a.o&8||a.If?!0:a.o?!1:u(dc,a):u(dc,a)}
function ge(a){return null==a?!1:null!=a?a.o&4096||a.Of?!0:a.o?!1:u(uc,a):u(uc,a)}function he(a){return null!=a?a.o&16777216||a.Nf?!0:a.o?!1:u(Lc,a):u(Lc,a)}function ie(a){return null==a?!1:null!=a?a.o&1024||a.Ee?!0:a.o?!1:u(pc,a):u(pc,a)}function je(a){return null!=a?a.o&16384||a.Pf?!0:a.o?!1:u(yc,a):u(yc,a)}function ke(a){return null!=a?a.F&512||a.Hf?!0:!1:!1}function le(a){var b=[];wa(a,function(a,b){return function(a,c){return b.push(c)}}(a,b));return b}
function me(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,--e,b+=1}var ne={};function oe(a){return null==a?!1:null!=a?a.o&64||a.ia?!0:a.o?!1:u(gc,a):u(gc,a)}function pe(a){return null==a?!1:!1===a?!1:!0}function qe(a){var b=ae(a);return b?b:null!=a?a.o&1||a.Kf?!0:a.o?!1:u(Zb,a):u(Zb,a)}function re(a,b){return z.j(a,b,ne)===ne?!1:!0}
function Sd(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return Rd(arguments[0],arguments[1]);case 3:return Ud(arguments[0],arguments[1],arguments[2]);default:throw Error([w("Invalid arity: "),w(b.length)].join(""));}}function Rd(a,b){var c=B(b);if(c){var d=E(c),c=I(c);return Vb?Vb(a,d,c):Wb.call(null,a,d,c)}return a.H?a.H():a.call(null)}
function Ud(a,b,c){for(c=B(c);;)if(c){var d=E(c);b=a.a?a.a(b,d):a.call(null,b,d);if(Cd(b))return Ac(b);c=I(c)}else return b}function Wb(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return se(arguments[0],arguments[1]);case 3:return Vb(arguments[0],arguments[1],arguments[2]);default:throw Error([w("Invalid arity: "),w(b.length)].join(""));}}
function se(a,b){return null!=b&&(b.o&524288||b.Ie)?b.ra(null,a):Ob(b)?Fd(b,a):"string"===typeof b?Fd(b,a):u(Ec,b)?Fc.a(b,a):Rd(a,b)}function Vb(a,b,c){return null!=c&&(c.o&524288||c.Ie)?c.sa(null,a,b):Ob(c)?Gd(c,a,b):"string"===typeof c?Gd(c,a,b):u(Ec,c)?Fc.j(c,a,b):Ud(a,b,c)}function te(a,b){var c=["^ "];return null!=b?Gc(b,a,c):c}function ue(a){return a}function ve(a,b,c,d){a=a.g?a.g(b):a.call(null,b);c=Vb(a,c,d);return a.g?a.g(c):a.call(null,c)}
var we=function we(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return we.g(arguments[0]);case 2:return we.a(arguments[0],arguments[1]);default:return we.D(arguments[0],arguments[1],new C(c.slice(2),0,null))}};we.g=function(){return!0};we.a=function(a,b){return a<b};we.D=function(a,b,c){for(;;)if(a<b)if(I(c))a=b,b=E(c),c=I(c);else return b<E(c);else return!1};we.T=function(a){var b=E(a),c=I(a);a=E(c);c=I(c);return we.D(b,a,c)};we.O=2;
var xe=function xe(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return xe.g(arguments[0]);case 2:return xe.a(arguments[0],arguments[1]);default:return xe.D(arguments[0],arguments[1],new C(c.slice(2),0,null))}};xe.g=function(){return!0};xe.a=function(a,b){return a>b};xe.D=function(a,b,c){for(;;)if(a>b)if(I(c))a=b,b=E(c),c=I(c);else return b>E(c);else return!1};xe.T=function(a){var b=E(a),c=I(a);a=E(c);c=I(c);return xe.D(b,a,c)};xe.O=2;
function ye(a){a=(a-a%2)/2;return 0<=a?Math.floor(a):Math.ceil(a)}function ze(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}var w=function w(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return w.H();case 1:return w.g(arguments[0]);default:return w.D(arguments[0],new C(c.slice(1),0,null))}};w.H=function(){return""};w.g=function(a){return null==a?"":""+a};
w.D=function(a,b){for(var c=new Pa(""+w(a)),d=b;;)if(t(d))c=c.append(""+w(E(d))),d=I(d);else return c.toString()};w.T=function(a){var b=E(a);a=I(a);return w.D(b,a)};w.O=1;function Ae(a,b){return a.substring(b)}function Od(a,b){var c;if(he(b))if(Id(a)&&Id(b)&&N(a)!==N(b))c=!1;else a:{c=B(a);for(var d=B(b);;){if(null==c){c=null==d;break a}if(null!=d&&td.a(E(c),E(d)))c=I(c),d=I(d);else{c=!1;break a}}}else c=null;return pe(c)}
function Be(a){var b=0;for(a=B(a);;)if(a){var c=E(a),b=(b+(pd(Ce.g?Ce.g(c):Ce.call(null,c))^pd(De.g?De.g(c):De.call(null,c))))%4503599627370496;a=I(a)}else return b}function Ee(a,b,c,d,e){this.v=a;this.first=b;this.bb=c;this.count=d;this.w=e;this.o=65937646;this.F=8192}g=Ee.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,this.count)}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.v};g.ya=function(){return new Ee(this.v,this.first,this.bb,this.count,this.w)};g.Ea=function(){return 1===this.count?null:this.bb};g.ca=function(){return this.count};g.Gb=function(){return this.first};
g.Hb=function(){return ic(this)};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){return Od(this,b)};g.ka=function(){return Dc(G,this.v)};g.ra=function(a,b){return Rd(b,this)};g.sa=function(a,b,c){return Ud(b,c,this)};g.ta=function(){return this.first};g.za=function(){return 1===this.count?G:this.bb};g.Z=function(){return this};g.W=function(a,b){return new Ee(b,this.first,this.bb,this.count,this.w)};g.Y=function(a,b){return new Ee(this.v,b,this,this.count+1,null)};
Ee.prototype[Sb]=function(){return vd(this)};function Fe(a){this.v=a;this.o=65937614;this.F=8192}g=Fe.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.v};g.ya=function(){return new Fe(this.v)};g.Ea=function(){return null};g.ca=function(){return 0};g.Gb=function(){return null};g.Hb=function(){throw Error("Can't pop empty list");};g.N=function(){return yd};
g.C=function(a,b){return(null!=b?b.o&33554432||b.Lf||(b.o?0:u(Mc,b)):u(Mc,b))||he(b)?null==B(b):!1};g.ka=function(){return this};g.ra=function(a,b){return Rd(b,this)};g.sa=function(a,b,c){return Ud(b,c,this)};g.ta=function(){return null};g.za=function(){return G};g.Z=function(){return null};g.W=function(a,b){return new Fe(b)};g.Y=function(a,b){return new Ee(this.v,b,null,1,null)};var G=new Fe(null);Fe.prototype[Sb]=function(){return vd(this)};
function He(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;a:{c=0<b.length?new C(b.slice(0),0,null):null;if(c instanceof C&&0===c.A)b=c.h;else b:for(b=[];;)if(null!=c)b.push(c.ta(null)),c=c.Ea(null);else break b;for(var c=b.length,e=G;;)if(0<c)d=c-1,e=e.Y(null,b[c-1]),c=d;else break a}return e}function Ie(a,b,c,d){this.v=a;this.first=b;this.bb=c;this.w=d;this.o=65929452;this.F=8192}g=Ie.prototype;g.toString=function(){return fd(this)};
g.equiv=function(a){return this.C(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.v};g.ya=function(){return new Ie(this.v,this.first,this.bb,this.w)};g.Ea=function(){return null==this.bb?null:B(this.bb)};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};
g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(G,this.v)};g.ra=function(a,b){return Rd(b,this)};g.sa=function(a,b,c){return Ud(b,c,this)};g.ta=function(){return this.first};g.za=function(){return null==this.bb?G:this.bb};g.Z=function(){return this};g.W=function(a,b){return new Ie(b,this.first,this.bb,this.w)};g.Y=function(a,b){return new Ie(null,b,this,null)};Ie.prototype[Sb]=function(){return vd(this)};
function P(a,b){var c=null==b;return(c?c:null!=b&&(b.o&64||b.ia))?new Ie(null,a,b,null):new Ie(null,a,B(b),null)}function S(a,b,c,d){this.Hc=a;this.name=b;this.Na=c;this.$b=d;this.o=2153775105;this.F=4096}g=S.prototype;g.toString=function(){return[w(":"),w(this.Na)].join("")};g.equiv=function(a){return this.C(null,a)};g.C=function(a,b){return b instanceof S?this.Na===b.Na:!1};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return z.a(c,this);case 3:return z.j(c,this,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return z.a(c,this)};a.j=function(a,c,d){return z.j(c,this,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.g=function(a){return z.a(a,this)};g.a=function(a,b){return z.j(a,this,b)};
g.N=function(){var a=this.$b;return null!=a?a:this.$b=a=qd(kd(this.name),od(this.Hc))+2654435769|0};g.R=function(a,b){return Pc(b,[w(":"),w(this.Na)].join(""))};function Je(a,b){return a===b?!0:a instanceof S&&b instanceof S?a.Na===b.Na:!1}function Ke(a){if(null!=a&&(a.F&4096||a.He))return a.Hc;throw Error([w("Doesn't support namespace: "),w(a)].join(""));}
var Le=function Le(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return Le.g(arguments[0]);case 2:return Le.a(arguments[0],arguments[1]);default:throw Error([w("Invalid arity: "),w(c.length)].join(""));}};Le.g=function(a){if(a instanceof S)return a;if(a instanceof rd)return new S(Ke(a),Me.g?Me.g(a):Me.call(null,a),a.Ma,null);if("string"===typeof a){var b=a.split("/");return 2===b.length?new S(b[0],b[1],a,null):new S(null,b[0],a,null)}return null};
Le.a=function(a,b){return new S(a,b,[w(t(a)?[w(a),w("/")].join(""):null),w(b)].join(""),null)};Le.O=2;function Ne(a,b,c,d){this.v=a;this.hc=b;this.P=c;this.w=d;this.o=32374988;this.F=1}g=Ne.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};function Oe(a){null!=a.hc&&(a.P=a.hc.H?a.hc.H():a.hc.call(null),a.hc=null);return a.P}
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.v};g.Ea=function(){Kc(this);return null==this.P?null:I(this.P)};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(G,this.v)};
g.ra=function(a,b){return Rd(b,this)};g.sa=function(a,b,c){return Ud(b,c,this)};g.ta=function(){Kc(this);return null==this.P?null:E(this.P)};g.za=function(){Kc(this);return null!=this.P?F(this.P):G};g.Z=function(){Oe(this);if(null==this.P)return null;for(var a=this.P;;)if(a instanceof Ne)a=Oe(a);else return this.P=a,B(this.P)};g.W=function(a,b){return new Ne(b,this.hc,this.P,this.w)};g.Y=function(a,b){return P(b,this)};Ne.prototype[Sb]=function(){return vd(this)};
function Pe(a,b){this.od=a;this.end=b;this.o=2;this.F=0}Pe.prototype.add=function(a){this.od[this.end]=a;return this.end+=1};Pe.prototype.Da=function(){var a=new Qe(this.od,0,this.end);this.od=null;return a};Pe.prototype.ca=function(){return this.end};function Re(a){return new Pe(Array(a),0)}function Qe(a,b,c){this.h=a;this.off=b;this.end=c;this.o=524306;this.F=0}g=Qe.prototype;g.ca=function(){return this.end-this.off};g.K=function(a,b){return this.h[this.off+b]};
g.Ja=function(a,b,c){return 0<=b&&b<this.end-this.off?this.h[this.off+b]:c};g.Vd=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new Qe(this.h,this.off+1,this.end)};g.ra=function(a,b){return Hd(this.h,b,this.h[this.off],this.off+1)};g.sa=function(a,b,c){return Hd(this.h,b,c,this.off)};function Se(a,b,c,d){this.Da=a;this.fb=b;this.v=c;this.w=d;this.o=31850732;this.F=1536}g=Se.prototype;g.toString=function(){return fd(this)};
g.equiv=function(a){return this.C(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.v};g.Ea=function(){if(1<bc(this.Da))return new Se(Yc(this.Da),this.fb,this.v,null);var a=Kc(this.fb);return null==a?null:a};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};
g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(G,this.v)};g.ta=function(){return y.a(this.Da,0)};g.za=function(){return 1<bc(this.Da)?new Se(Yc(this.Da),this.fb,this.v,null):null==this.fb?G:this.fb};g.Z=function(){return this};g.rd=function(){return this.Da};g.sd=function(){return null==this.fb?G:this.fb};g.W=function(a,b){return new Se(this.Da,this.fb,b,this.w)};g.Y=function(a,b){return P(b,this)};g.qd=function(){return null==this.fb?null:this.fb};Se.prototype[Sb]=function(){return vd(this)};
function Te(a,b){return 0===bc(a)?b:new Se(a,b,null,null)}function Ue(a,b){a.add(b)}function Ve(a){for(var b=[];;)if(B(a))b.push(E(a)),a=I(a);else return b}function We(a,b){if(Id(b))return N(b);for(var c=0,d=B(b);;)if(null!=d&&c<a)c+=1,d=I(d);else return c}
var Xe=function Xe(b){return null==b?null:null==I(b)?B(E(b)):P(E(b),Xe(I(b)))},Ye=function Ye(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return Ye.H();case 1:return Ye.g(arguments[0]);case 2:return Ye.a(arguments[0],arguments[1]);default:return Ye.D(arguments[0],arguments[1],new C(c.slice(2),0,null))}};Ye.H=function(){return new Ne(null,function(){return null},null,null)};
Ye.g=function(a){return new Ne(null,function(){return a},null,null)};Ye.a=function(a,b){return new Ne(null,function(){var c=B(a);return c?ke(c)?Te(Zc(c),Ye.a($c(c),b)):P(E(c),Ye.a(F(c),b)):b},null,null)};Ye.D=function(a,b,c){return function e(a,b){return new Ne(null,function(){var c=B(a);return c?ke(c)?Te(Zc(c),e($c(c),b)):P(E(c),e(F(c),b)):t(b)?e(E(b),I(b)):null},null,null)}(Ye.a(a,b),c)};Ye.T=function(a){var b=E(a),c=I(a);a=E(c);c=I(c);return Ye.D(b,a,c)};Ye.O=2;
var Ze=function Ze(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return Ze.H();case 1:return Ze.g(arguments[0]);case 2:return Ze.a(arguments[0],arguments[1]);default:return Ze.D(arguments[0],arguments[1],new C(c.slice(2),0,null))}};Ze.H=function(){return Rc(Wd)};Ze.g=function(a){return a};Ze.a=function(a,b){return Sc(a,b)};Ze.D=function(a,b,c){for(;;)if(a=Sc(a,b),t(c))b=E(c),c=I(c);else return a};
Ze.T=function(a){var b=E(a),c=I(a);a=E(c);c=I(c);return Ze.D(b,a,c)};Ze.O=2;
function $e(a,b,c){var d=B(c);if(0===b)return a.H?a.H():a.call(null);c=hc(d);var e=ic(d);if(1===b)return a.g?a.g(c):a.g?a.g(c):a.call(null,c);var d=hc(e),f=ic(e);if(2===b)return a.a?a.a(c,d):a.a?a.a(c,d):a.call(null,c,d);var e=hc(f),h=ic(f);if(3===b)return a.j?a.j(c,d,e):a.j?a.j(c,d,e):a.call(null,c,d,e);var f=hc(h),k=ic(h);if(4===b)return a.M?a.M(c,d,e,f):a.M?a.M(c,d,e,f):a.call(null,c,d,e,f);var h=hc(k),l=ic(k);if(5===b)return a.ha?a.ha(c,d,e,f,h):a.ha?a.ha(c,d,e,f,h):a.call(null,c,d,e,f,h);var k=
hc(l),n=ic(l);if(6===b)return a.tb?a.tb(c,d,e,f,h,k):a.tb?a.tb(c,d,e,f,h,k):a.call(null,c,d,e,f,h,k);var l=hc(n),m=ic(n);if(7===b)return a.ub?a.ub(c,d,e,f,h,k,l):a.ub?a.ub(c,d,e,f,h,k,l):a.call(null,c,d,e,f,h,k,l);var n=hc(m),q=ic(m);if(8===b)return a.vb?a.vb(c,d,e,f,h,k,l,n):a.vb?a.vb(c,d,e,f,h,k,l,n):a.call(null,c,d,e,f,h,k,l,n);var m=hc(q),x=ic(q);if(9===b)return a.wb?a.wb(c,d,e,f,h,k,l,n,m):a.wb?a.wb(c,d,e,f,h,k,l,n,m):a.call(null,c,d,e,f,h,k,l,n,m);var q=hc(x),A=ic(x);if(10===b)return a.ib?a.ib(c,
d,e,f,h,k,l,n,m,q):a.ib?a.ib(c,d,e,f,h,k,l,n,m,q):a.call(null,c,d,e,f,h,k,l,n,m,q);var x=hc(A),D=ic(A);if(11===b)return a.jb?a.jb(c,d,e,f,h,k,l,n,m,q,x):a.jb?a.jb(c,d,e,f,h,k,l,n,m,q,x):a.call(null,c,d,e,f,h,k,l,n,m,q,x);var A=hc(D),H=ic(D);if(12===b)return a.kb?a.kb(c,d,e,f,h,k,l,n,m,q,x,A):a.kb?a.kb(c,d,e,f,h,k,l,n,m,q,x,A):a.call(null,c,d,e,f,h,k,l,n,m,q,x,A);var D=hc(H),M=ic(H);if(13===b)return a.lb?a.lb(c,d,e,f,h,k,l,n,m,q,x,A,D):a.lb?a.lb(c,d,e,f,h,k,l,n,m,q,x,A,D):a.call(null,c,d,e,f,h,k,l,
n,m,q,x,A,D);var H=hc(M),T=ic(M);if(14===b)return a.mb?a.mb(c,d,e,f,h,k,l,n,m,q,x,A,D,H):a.mb?a.mb(c,d,e,f,h,k,l,n,m,q,x,A,D,H):a.call(null,c,d,e,f,h,k,l,n,m,q,x,A,D,H);var M=hc(T),fa=ic(T);if(15===b)return a.nb?a.nb(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M):a.nb?a.nb(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M):a.call(null,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M);var T=hc(fa),ua=ic(fa);if(16===b)return a.ob?a.ob(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T):a.ob?a.ob(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T):a.call(null,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T);
var fa=hc(ua),Va=ic(ua);if(17===b)return a.pb?a.pb(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa):a.pb?a.pb(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa):a.call(null,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa);var ua=hc(Va),Uc=ic(Va);if(18===b)return a.qb?a.qb(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua):a.qb?a.qb(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua):a.call(null,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua);Va=hc(Uc);Uc=ic(Uc);if(19===b)return a.rb?a.rb(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua,Va):a.rb?a.rb(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,
fa,ua,Va):a.call(null,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua,Va);var K=hc(Uc);ic(Uc);if(20===b)return a.sb?a.sb(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua,Va,K):a.sb?a.sb(c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua,Va,K):a.call(null,c,d,e,f,h,k,l,n,m,q,x,A,D,H,M,T,fa,ua,Va,K);throw Error("Only up to 20 arguments supported on functions");}
function ce(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return af(arguments[0],arguments[1]);case 3:return bf(arguments[0],arguments[1],arguments[2]);case 4:b=arguments[0];c=P(arguments[1],P(arguments[2],arguments[3]));d=b.O;if(b.T)var e=We(d+1,c),b=e<=d?$e(b,e,c):b.T(c);else b=b.apply(b,Ve(c));return b;case 5:return cf(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:return df(arguments[0],arguments[1],arguments[2],
arguments[3],arguments[4],new C(b.slice(5),0,null))}}function af(a,b){var c=a.O;if(a.T){var d=We(c+1,b);return d<=c?$e(a,d,b):a.T(b)}return a.apply(a,Ve(b))}function bf(a,b,c){b=P(b,c);c=a.O;if(a.T){var d=We(c+1,b);return d<=c?$e(a,d,b):a.T(b)}return a.apply(a,Ve(b))}function cf(a,b,c,d,e){b=P(b,P(c,P(d,e)));c=a.O;return a.T?(d=We(c+1,b),d<=c?$e(a,d,b):a.T(b)):a.apply(a,Ve(b))}
function df(a,b,c,d,e,f){b=P(b,P(c,P(d,P(e,Xe(f)))));c=a.O;return a.T?(d=We(c+1,b),d<=c?$e(a,d,b):a.T(b)):a.apply(a,Ve(b))}function ef(a){return B(a)?a:null}
var ff=function ff(){"undefined"===typeof Cb&&(Cb=function(b,c){this.Ze=b;this.We=c;this.o=393216;this.F=0},Cb.prototype.W=function(b,c){return new Cb(this.Ze,c)},Cb.prototype.V=function(){return this.We},Cb.prototype.wa=function(){return!1},Cb.prototype.next=function(){return Error("No such element")},Cb.prototype.remove=function(){return Error("Unsupported operation")},Cb.Qf=function(){return new U(null,2,5,V,[Qd(gf,new r(null,1,[hf,He(jf,He(Wd))],null)),kf],null)},Cb.$d=!0,Cb.Tc="cljs.core/t_cljs$core10611",
Cb.Pe=function(b){return Pc(b,"cljs.core/t_cljs$core10611")});return new Cb(ff,lf)};function mf(a,b){for(;;){if(null==B(b))return!0;var c;c=E(b);c=a.g?a.g(c):a.call(null,c);if(t(c)){c=a;var d=I(b);a=c;b=d}else return!1}}function nf(a,b){for(;;)if(B(b)){var c;c=E(b);c=a.g?a.g(c):a.call(null,c);if(t(c))return c;c=a;var d=I(b);a=c;b=d}else return null}
function of(a){if("number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a,10))return 0===(a&1);throw Error([w("Argument must be an integer: "),w(a)].join(""));}
function pf(a){var b=qf;return function(){function c(c,d,e){return b.M?b.M(a,c,d,e):b.call(null,a,c,d,e)}function d(c,d){return b.j?b.j(a,c,d):b.call(null,a,c,d)}function e(c){return b.a?b.a(a,c):b.call(null,a,c)}function f(){return b.g?b.g(a):b.call(null,a)}var h=null,k=function(){function c(a,b,e,f){var h=null;if(3<arguments.length){for(var h=0,k=Array(arguments.length-3);h<k.length;)k[h]=arguments[h+3],++h;h=new C(k,0)}return d.call(this,a,b,e,h)}function d(c,e,f,h){return df(b,a,c,e,f,Q([h],0))}
c.O=3;c.T=function(a){var b=E(a);a=I(a);var c=E(a);a=I(a);var e=E(a);a=F(a);return d(b,c,e,a)};c.D=d;return c}(),h=function(a,b,h,q){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,a);case 2:return d.call(this,a,b);case 3:return c.call(this,a,b,h);default:var x=null;if(3<arguments.length){for(var x=0,A=Array(arguments.length-3);x<A.length;)A[x]=arguments[x+3],++x;x=new C(A,0)}return k.D(a,b,h,x)}throw Error("Invalid arity: "+arguments.length);};h.O=3;h.T=k.T;h.H=f;h.g=
e;h.a=d;h.j=c;h.D=k.D;return h}()}
function rf(a,b){var c=sf;return function(){function d(d,e,f){return c.ha?c.ha(a,b,d,e,f):c.call(null,a,b,d,e,f)}function e(d,e){return c.M?c.M(a,b,d,e):c.call(null,a,b,d,e)}function f(d){return c.j?c.j(a,b,d):c.call(null,a,b,d)}function h(){return c.a?c.a(a,b):c.call(null,a,b)}var k=null,l=function(){function d(a,b,c,f){var h=null;if(3<arguments.length){for(var h=0,k=Array(arguments.length-3);h<k.length;)k[h]=arguments[h+3],++h;h=new C(k,0)}return e.call(this,a,b,c,h)}function e(d,f,h,k){return df(c,
a,b,d,f,Q([h,k],0))}d.O=3;d.T=function(a){var b=E(a);a=I(a);var c=E(a);a=I(a);var d=E(a);a=F(a);return e(b,c,d,a)};d.D=e;return d}(),k=function(a,b,c,k){switch(arguments.length){case 0:return h.call(this);case 1:return f.call(this,a);case 2:return e.call(this,a,b);case 3:return d.call(this,a,b,c);default:var A=null;if(3<arguments.length){for(var A=0,D=Array(arguments.length-3);A<D.length;)D[A]=arguments[A+3],++A;A=new C(D,0)}return l.D(a,b,c,A)}throw Error("Invalid arity: "+arguments.length);};k.O=
3;k.T=l.T;k.H=h;k.g=f;k.a=e;k.j=d;k.D=l.D;return k}()}function tf(a,b){return function d(b,f){return new Ne(null,function(){var h=B(f);if(h){if(ke(h)){for(var k=Zc(h),l=N(k),n=Re(l),m=0;;)if(m<l)Ue(n,function(){var d=b+m,f=y.a(k,m);return a.a?a.a(d,f):a.call(null,d,f)}()),m+=1;else break;return Te(n.Da(),d(b+l,$c(h)))}return P(function(){var d=E(h);return a.a?a.a(b,d):a.call(null,b,d)}(),d(b+1,F(h)))}return null},null,null)}(0,b)}
function uf(a,b,c,d){this.state=a;this.v=b;this.hf=c;this.re=d;this.F=16386;this.o=6455296}g=uf.prototype;g.equiv=function(a){return this.C(null,a)};g.C=function(a,b){return this===b};g.td=function(){return this.state};g.V=function(){return this.v};
g.Yd=function(a,b,c){a=B(this.re);for(var d=null,e=0,f=0;;)if(f<e){var h=d.K(null,f),k=R(h,0,null),h=R(h,1,null);h.M?h.M(k,this,b,c):h.call(null,k,this,b,c);f+=1}else if(a=B(a))ke(a)?(d=Zc(a),a=$c(a),k=d,e=N(d),d=k):(d=E(a),k=R(d,0,null),h=R(d,1,null),h.M?h.M(k,this,b,c):h.call(null,k,this,b,c),a=I(a),d=null,e=0),f=0;else return null};g.N=function(){return this[ja]||(this[ja]=++ka)};
function vf(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return wf(arguments[0]);default:return c=arguments[0],b=new C(b.slice(1),0,null),d=null!=b&&(b.o&64||b.ia)?af(xf,b):b,b=z.a(d,Lb),d=z.a(d,yf),new uf(c,b,d,null)}}function wf(a){return new uf(a,null,null,null)}
function zf(a,b){if(a instanceof uf){var c=a.hf;if(null!=c&&!t(c.g?c.g(b):c.call(null,b)))throw Error("Validator rejected reference state");c=a.state;a.state=b;null!=a.re&&Qc(a,c,b);return b}return bd(a,b)}
var Af=function Af(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return Af.a(arguments[0],arguments[1]);case 3:return Af.j(arguments[0],arguments[1],arguments[2]);case 4:return Af.M(arguments[0],arguments[1],arguments[2],arguments[3]);default:return Af.D(arguments[0],arguments[1],arguments[2],arguments[3],new C(c.slice(4),0,null))}};
Af.a=function(a,b){var c;a instanceof uf?(c=a.state,c=b.g?b.g(c):b.call(null,c),c=zf(a,c)):c=cd.a(a,b);return c};Af.j=function(a,b,c){if(a instanceof uf){var d=a.state;b=b.a?b.a(d,c):b.call(null,d,c);a=zf(a,b)}else a=cd.j(a,b,c);return a};Af.M=function(a,b,c,d){if(a instanceof uf){var e=a.state;b=b.j?b.j(e,c,d):b.call(null,e,c,d);a=zf(a,b)}else a=cd.M(a,b,c,d);return a};Af.D=function(a,b,c,d,e){return a instanceof uf?zf(a,cf(b,a.state,c,d,e)):cd.ha(a,b,c,d,e)};
Af.T=function(a){var b=E(a),c=I(a);a=E(c);var d=I(c),c=E(d),e=I(d),d=E(e),e=I(e);return Af.D(b,a,c,d,e)};Af.O=4;
var Bf=function Bf(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return Bf.g(arguments[0]);case 2:return Bf.a(arguments[0],arguments[1]);case 3:return Bf.j(arguments[0],arguments[1],arguments[2]);case 4:return Bf.M(arguments[0],arguments[1],arguments[2],arguments[3]);default:return Bf.D(arguments[0],arguments[1],arguments[2],arguments[3],new C(c.slice(4),0,null))}};
Bf.g=function(a){return function(b){return function(){function c(c,d){var e=a.g?a.g(d):a.call(null,d);return b.a?b.a(c,e):b.call(null,c,e)}function d(a){return b.g?b.g(a):b.call(null,a)}function e(){return b.H?b.H():b.call(null)}var f=null,h=function(){function c(a,b,e){var f=null;if(2<arguments.length){for(var f=0,h=Array(arguments.length-2);f<h.length;)h[f]=arguments[f+2],++f;f=new C(h,0)}return d.call(this,a,b,f)}function d(c,e,f){e=bf(a,e,f);return b.a?b.a(c,e):b.call(null,c,e)}c.O=2;c.T=function(a){var b=
E(a);a=I(a);var c=E(a);a=F(a);return d(b,c,a)};c.D=d;return c}(),f=function(a,b,f){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b);default:var m=null;if(2<arguments.length){for(var m=0,q=Array(arguments.length-2);m<q.length;)q[m]=arguments[m+2],++m;m=new C(q,0)}return h.D(a,b,m)}throw Error("Invalid arity: "+arguments.length);};f.O=2;f.T=h.T;f.H=e;f.g=d;f.a=c;f.D=h.D;return f}()}};
Bf.a=function(a,b){return new Ne(null,function(){var c=B(b);if(c){if(ke(c)){for(var d=Zc(c),e=N(d),f=Re(e),h=0;;)if(h<e)Ue(f,function(){var b=y.a(d,h);return a.g?a.g(b):a.call(null,b)}()),h+=1;else break;return Te(f.Da(),Bf.a(a,$c(c)))}return P(function(){var b=E(c);return a.g?a.g(b):a.call(null,b)}(),Bf.a(a,F(c)))}return null},null,null)};
Bf.j=function(a,b,c){return new Ne(null,function(){var d=B(b),e=B(c);if(d&&e){var f=P,h;h=E(d);var k=E(e);h=a.a?a.a(h,k):a.call(null,h,k);d=f(h,Bf.j(a,F(d),F(e)))}else d=null;return d},null,null)};Bf.M=function(a,b,c,d){return new Ne(null,function(){var e=B(b),f=B(c),h=B(d);if(e&&f&&h){var k=P,l;l=E(e);var n=E(f),m=E(h);l=a.j?a.j(l,n,m):a.call(null,l,n,m);e=k(l,Bf.M(a,F(e),F(f),F(h)))}else e=null;return e},null,null)};
Bf.D=function(a,b,c,d,e){var f=function k(a){return new Ne(null,function(){var b=Bf.a(B,a);return mf(ue,b)?P(Bf.a(E,b),k(Bf.a(F,b))):null},null,null)};return Bf.a(function(){return function(b){return af(a,b)}}(f),f(Vd.D(e,d,Q([c,b],0))))};Bf.T=function(a){var b=E(a),c=I(a);a=E(c);var d=I(c),c=E(d),e=I(d),d=E(e),e=I(e);return Bf.D(b,a,c,d,e)};Bf.O=4;
function Cf(a,b){if("number"!==typeof a)throw Error("Assert failed: (number? n)");return new Ne(null,function(){if(0<a){var c=B(b);return c?P(E(c),Cf(a-1,F(c))):null}return null},null,null)}function Df(a,b){if("number"!==typeof a)throw Error("Assert failed: (number? n)");return new Ne(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=B(b);if(0<a&&e){var f=a-1,e=F(e);a=f;b=e}else return e}}),null,null)}function Ef(a){return Bf.j(function(a){return a},a,Df(1,a))}
var Ff=function Ff(b,c){return P(c,new Ne(null,function(){return Ff(b,b.g?b.g(c):b.call(null,c))},null,null))};function Gf(a,b){return af(Ye,bf(Bf,a,b))}function Hf(a,b){return new Ne(null,function(){var c=B(b);if(c){if(ke(c)){for(var d=Zc(c),e=N(d),f=Re(e),h=0;;)if(h<e){var k;k=y.a(d,h);k=a.g?a.g(k):a.call(null,k);t(k)&&(k=y.a(d,h),f.add(k));h+=1}else break;return Te(f.Da(),Hf(a,$c(c)))}d=E(c);c=F(c);return t(a.g?a.g(d):a.call(null,d))?P(d,Hf(a,c)):Hf(a,c)}return null},null,null)}
var If=function If(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return If.a(arguments[0],arguments[1]);case 3:return If.j(arguments[0],arguments[1],arguments[2]);default:throw Error([w("Invalid arity: "),w(c.length)].join(""));}};If.a=function(a,b){return null!=a?null!=a&&(a.F&4||a.ye)?Qd(Vc(Vb(Sc,Rc(a),b)),de(a)):Vb(ec,a,b):Vb(Vd,G,b)};If.j=function(a,b,c){return null!=a&&(a.F&4||a.ye)?Qd(Vc(ve(b,Ze,Rc(a),c)),de(a)):ve(b,Vd,a,c)};
If.O=3;function Jf(a,b,c){return new Ne(null,function(){var d=B(c);if(d){var e=Cf(a,d);return a===N(e)?P(e,Jf(a,b,Df(b,d))):null}return null},null,null)}var Kf=function Kf(b,c,d){var e=B(c);c=E(e);return(e=I(e))?Yd.j(b,c,Kf(z.a(b,c),e,d)):Yd.j(b,c,d)};function Lf(a,b,c){return Yd.j(a,b,function(){var d=z.a(a,b);return c.g?c.g(d):c.call(null,d)}())}function Mf(a,b){this.fa=a;this.h=b}
function Nf(a){return new Mf(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function Pf(a){return new Mf(a.fa,Tb(a.h))}function Qf(a){a=a.s;return 32>a?0:a-1>>>5<<5}function Rf(a,b,c){for(;;){if(0===b)return c;var d=Nf(a);d.h[0]=c;c=d;b-=5}}var Sf=function Sf(b,c,d,e){var f=Pf(d),h=b.s-1>>>c&31;5===c?f.h[h]=e:(d=d.h[h],b=null!=d?Sf(b,c-5,d,e):Rf(null,c-5,e),f.h[h]=b);return f};
function Tf(a,b){throw Error([w("No item "),w(a),w(" in vector of length "),w(b)].join(""));}function Uf(a,b){if(b>=Qf(a))return a.xa;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.h[b>>>d&31],d=e;else return c.h}function Vf(a,b){return 0<=b&&b<a.s?Uf(a,b):Tf(b,a.s)}
var Wf=function Wf(b,c,d,e,f){var h=Pf(d);if(0===c)h.h[e&31]=f;else{var k=e>>>c&31;b=Wf(b,c-5,d.h[k],e,f);h.h[k]=b}return h},Xf=function Xf(b,c,d){var e=b.s-2>>>c&31;if(5<c){b=Xf(b,c-5,d.h[e]);if(null==b&&0===e)return null;d=Pf(d);d.h[e]=b;return d}if(0===e)return null;d=Pf(d);d.h[e]=null;return d};function Yf(a,b,c,d,e,f){this.A=a;this.Oc=b;this.h=c;this.Oa=d;this.start=e;this.end=f}Yf.prototype.wa=function(){return this.A<this.end};
Yf.prototype.next=function(){32===this.A-this.Oc&&(this.h=Uf(this.Oa,this.A),this.Oc+=32);var a=this.h[this.A&31];this.A+=1;return a};function U(a,b,c,d,e,f){this.v=a;this.s=b;this.shift=c;this.root=d;this.xa=e;this.w=f;this.o=167668511;this.F=8196}g=U.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){return"number"===typeof b?y.j(this,b,c):c};
g.ec=function(a,b,c){a=0;for(var d=c;;)if(a<this.s){var e=Uf(this,a);c=e.length;a:for(var f=0;;)if(f<c){var h=f+a,k=e[f],d=b.j?b.j(d,h,k):b.call(null,d,h,k);if(Cd(d)){e=d;break a}f+=1}else{e=d;break a}if(Cd(e))return J.g?J.g(e):J.call(null,e);a+=c;d=e}else return d};g.K=function(a,b){return Vf(this,b)[b&31]};g.Ja=function(a,b,c){return 0<=b&&b<this.s?Uf(this,b)[b&31]:c};
g.Sb=function(a,b,c){if(0<=b&&b<this.s)return Qf(this)<=b?(a=Tb(this.xa),a[b&31]=c,new U(this.v,this.s,this.shift,this.root,a,null)):new U(this.v,this.s,this.shift,Wf(this,this.shift,this.root,b,c),this.xa,null);if(b===this.s)return ec(this,c);throw Error([w("Index "),w(b),w(" out of bounds  [0,"),w(this.s),w("]")].join(""));};g.La=function(){var a=this.s;return new Yf(0,0,0<N(this)?Uf(this,0):null,this,0,a)};g.V=function(){return this.v};
g.ya=function(){return new U(this.v,this.s,this.shift,this.root,this.xa,this.w)};g.ca=function(){return this.s};g.tc=function(){return y.a(this,0)};g.uc=function(){return y.a(this,1)};g.Gb=function(){return 0<this.s?y.a(this,this.s-1):null};
g.Hb=function(){if(0===this.s)throw Error("Can't pop empty vector");if(1===this.s)return Dc(Wd,this.v);if(1<this.s-Qf(this))return new U(this.v,this.s-1,this.shift,this.root,this.xa.slice(0,-1),null);var a=Uf(this,this.s-2),b=Xf(this,this.shift,this.root),b=null==b?V:b,c=this.s-1;return 5<this.shift&&null==b.h[1]?new U(this.v,c,this.shift-5,b.h[0],a,null):new U(this.v,c,this.shift,b,a,null)};g.fc=function(){return 0<this.s?new Nd(this,this.s-1,null):null};
g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){if(b instanceof U)if(this.s===N(b))for(var c=dd(this),d=dd(b);;)if(t(c.wa())){var e=c.next(),f=d.next();if(!td.a(e,f))return!1}else return!0;else return!1;else return Od(this,b)};g.dc=function(){return new Zf(this.s,this.shift,$f.g?$f.g(this.root):$f.call(null,this.root),ag.g?ag.g(this.xa):ag.call(null,this.xa))};g.ka=function(){return Qd(Wd,this.v)};g.ra=function(a,b){return Dd(this,b)};
g.sa=function(a,b,c){a=0;for(var d=c;;)if(a<this.s){var e=Uf(this,a);c=e.length;a:for(var f=0;;)if(f<c){var h=e[f],d=b.a?b.a(d,h):b.call(null,d,h);if(Cd(d)){e=d;break a}f+=1}else{e=d;break a}if(Cd(e))return J.g?J.g(e):J.call(null,e);a+=c;d=e}else return d};g.Ta=function(a,b,c){if("number"===typeof b)return zc(this,b,c);throw Error("Vector's key for assoc must be a number.");};
g.Z=function(){if(0===this.s)return null;if(32>=this.s)return new C(this.xa,0,null);var a;a:{a=this.root;for(var b=this.shift;;)if(0<b)b-=5,a=a.h[0];else{a=a.h;break a}}return bg?bg(this,a,0,0):cg.call(null,this,a,0,0)};g.W=function(a,b){return new U(b,this.s,this.shift,this.root,this.xa,this.w)};
g.Y=function(a,b){if(32>this.s-Qf(this)){for(var c=this.xa.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.xa[e],e+=1;else break;d[c]=b;return new U(this.v,this.s+1,this.shift,this.root,d,null)}c=(d=this.s>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=Nf(null),d.h[0]=this.root,e=Rf(null,this.shift,new Mf(null,this.xa)),d.h[1]=e):d=Sf(this,this.shift,this.root,new Mf(null,this.xa));return new U(this.v,this.s+1,c,d,[b],null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.K(null,c);case 3:return this.Ja(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.K(null,c)};a.j=function(a,c,d){return this.Ja(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.g=function(a){return this.K(null,a)};g.a=function(a,b){return this.Ja(null,a,b)};
var V=new Mf(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),Wd=new U(null,0,5,V,[],yd);function dg(a,b){var c=a.length,d=b?a:Tb(a);if(32>c)return new U(null,c,5,V,d,null);for(var e=32,f=(new U(null,32,5,V,d.slice(0,32),null)).dc(null);;)if(e<c)var h=e+1,f=Ze.a(f,d[e]),e=h;else return Vc(f)}U.prototype[Sb]=function(){return vd(this)};
function eg(a){return Ob(a)?dg(a,!0):Vc(Vb(Sc,Rc(Wd),a))}var fg=function fg(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return fg.D(0<c.length?new C(c.slice(0),0,null):null)};fg.D=function(a){return a instanceof C&&0===a.A?dg(a.h,!0):eg(a)};fg.O=0;fg.T=function(a){return fg.D(B(a))};function gg(a,b,c,d,e,f){this.Pa=a;this.node=b;this.A=c;this.off=d;this.v=e;this.w=f;this.o=32375020;this.F=1536}g=gg.prototype;g.toString=function(){return fd(this)};
g.equiv=function(a){return this.C(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.v};g.Ea=function(){if(this.off+1<this.node.length){var a;a=this.Pa;var b=this.node,c=this.A,d=this.off+1;a=bg?bg(a,b,c,d):cg.call(null,a,b,c,d);return null==a?null:a}return ad(this)};
g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(Wd,this.v)};g.ra=function(a,b){var c;c=this.Pa;var d=this.A+this.off,e=N(this.Pa);c=hg?hg(c,d,e):ig.call(null,c,d,e);return Dd(c,b)};g.sa=function(a,b,c){a=this.Pa;var d=this.A+this.off,e=N(this.Pa);a=hg?hg(a,d,e):ig.call(null,a,d,e);return Ed(a,b,c)};g.ta=function(){return this.node[this.off]};
g.za=function(){if(this.off+1<this.node.length){var a;a=this.Pa;var b=this.node,c=this.A,d=this.off+1;a=bg?bg(a,b,c,d):cg.call(null,a,b,c,d);return null==a?G:a}return $c(this)};g.Z=function(){return this};g.rd=function(){var a=this.node;return new Qe(a,this.off,a.length)};g.sd=function(){var a=this.A+this.node.length;if(a<bc(this.Pa)){var b=this.Pa,c=Uf(this.Pa,a);return bg?bg(b,c,a,0):cg.call(null,b,c,a,0)}return G};
g.W=function(a,b){return jg?jg(this.Pa,this.node,this.A,this.off,b):cg.call(null,this.Pa,this.node,this.A,this.off,b)};g.Y=function(a,b){return P(b,this)};g.qd=function(){var a=this.A+this.node.length;if(a<bc(this.Pa)){var b=this.Pa,c=Uf(this.Pa,a);return bg?bg(b,c,a,0):cg.call(null,b,c,a,0)}return null};gg.prototype[Sb]=function(){return vd(this)};
function cg(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 3:return b=arguments[0],c=arguments[1],d=arguments[2],new gg(b,Vf(b,c),c,d,null,null);case 4:return bg(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return jg(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([w("Invalid arity: "),w(b.length)].join(""));}}function bg(a,b,c,d){return new gg(a,b,c,d,null,null)}
function jg(a,b,c,d,e){return new gg(a,b,c,d,e,null)}function kg(a,b,c,d,e){this.v=a;this.Oa=b;this.start=c;this.end=d;this.w=e;this.o=167666463;this.F=8192}g=kg.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){return"number"===typeof b?y.j(this,b,c):c};
g.ec=function(a,b,c){a=this.start;for(var d=0;;)if(a<this.end){var e=d,f=y.a(this.Oa,a);c=b.j?b.j(c,e,f):b.call(null,c,e,f);if(Cd(c))return J.g?J.g(c):J.call(null,c);d+=1;a+=1}else return c};g.K=function(a,b){return 0>b||this.end<=this.start+b?Tf(b,this.end-this.start):y.a(this.Oa,this.start+b)};g.Ja=function(a,b,c){return 0>b||this.end<=this.start+b?c:y.j(this.Oa,this.start+b,c)};
g.Sb=function(a,b,c){var d=this.start+b;a=this.v;c=Yd.j(this.Oa,d,c);b=this.start;var e=this.end,d=d+1,d=e>d?e:d;return lg.ha?lg.ha(a,c,b,d,null):lg.call(null,a,c,b,d,null)};g.V=function(){return this.v};g.ya=function(){return new kg(this.v,this.Oa,this.start,this.end,this.w)};g.ca=function(){return this.end-this.start};g.Gb=function(){return y.a(this.Oa,this.end-1)};
g.Hb=function(){if(this.start===this.end)throw Error("Can't pop empty vector");var a=this.v,b=this.Oa,c=this.start,d=this.end-1;return lg.ha?lg.ha(a,b,c,d,null):lg.call(null,a,b,c,d,null)};g.fc=function(){return this.start!==this.end?new Nd(this,this.end-this.start-1,null):null};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(Wd,this.v)};g.ra=function(a,b){return Dd(this,b)};g.sa=function(a,b,c){return Ed(this,b,c)};
g.Ta=function(a,b,c){if("number"===typeof b)return zc(this,b,c);throw Error("Subvec's key for assoc must be a number.");};g.Z=function(){var a=this;return function(b){return function d(e){return e===a.end?null:P(y.a(a.Oa,e),new Ne(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};g.W=function(a,b){return lg.ha?lg.ha(b,this.Oa,this.start,this.end,this.w):lg.call(null,b,this.Oa,this.start,this.end,this.w)};
g.Y=function(a,b){var c=this.v,d=zc(this.Oa,this.end,b),e=this.start,f=this.end+1;return lg.ha?lg.ha(c,d,e,f,null):lg.call(null,c,d,e,f,null)};g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.K(null,c);case 3:return this.Ja(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.K(null,c)};a.j=function(a,c,d){return this.Ja(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};
g.g=function(a){return this.K(null,a)};g.a=function(a,b){return this.Ja(null,a,b)};kg.prototype[Sb]=function(){return vd(this)};function lg(a,b,c,d,e){for(;;)if(b instanceof kg)c=b.start+c,d=b.start+d,b=b.Oa;else{var f=N(b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new kg(a,b,c,d,e)}}
function ig(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return b=arguments[0],hg(b,arguments[1],N(b));case 3:return hg(arguments[0],arguments[1],arguments[2]);default:throw Error([w("Invalid arity: "),w(b.length)].join(""));}}function hg(a,b,c){return lg(null,a,b,c,null)}function mg(a,b){return a===b.fa?b:new Mf(a,Tb(b.h))}function $f(a){return new Mf({},Tb(a.h))}
function ag(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];me(a,0,b,0,a.length);return b}var ng=function ng(b,c,d,e){d=mg(b.root.fa,d);var f=b.s-1>>>c&31;if(5===c)b=e;else{var h=d.h[f];b=null!=h?ng(b,c-5,h,e):Rf(b.root.fa,c-5,e)}d.h[f]=b;return d};function Zf(a,b,c,d){this.s=a;this.shift=b;this.root=c;this.xa=d;this.F=88;this.o=275}g=Zf.prototype;
g.wc=function(a,b){if(this.root.fa){if(32>this.s-Qf(this))this.xa[this.s&31]=b;else{var c=new Mf(this.root.fa,this.xa),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.xa=d;if(this.s>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=Rf(this.root.fa,this.shift,c);this.root=new Mf(this.root.fa,d);this.shift=e}else this.root=ng(this,this.shift,this.root,c)}this.s+=1;return this}throw Error("conj! after persistent!");};g.xc=function(){if(this.root.fa){this.root.fa=null;var a=this.s-Qf(this),b=Array(a);me(this.xa,0,b,0,a);return new U(null,this.s,this.shift,this.root,b,null)}throw Error("persistent! called twice");};
g.vc=function(a,b,c){if("number"===typeof b)return Xc(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
g.Xd=function(a,b,c){var d=this;if(d.root.fa){if(0<=b&&b<d.s)return Qf(this)<=b?d.xa[b&31]=c:(a=function(){return function f(a,k){var l=mg(d.root.fa,k);if(0===a)l.h[b&31]=c;else{var n=b>>>a&31,m=f(a-5,l.h[n]);l.h[n]=m}return l}}(this).call(null,d.shift,d.root),d.root=a),this;if(b===d.s)return Sc(this,c);throw Error([w("Index "),w(b),w(" out of bounds for TransientVector of length"),w(d.s)].join(""));}throw Error("assoc! after persistent!");};
g.ca=function(){if(this.root.fa)return this.s;throw Error("count after persistent!");};g.K=function(a,b){if(this.root.fa)return Vf(this,b)[b&31];throw Error("nth after persistent!");};g.Ja=function(a,b,c){return 0<=b&&b<this.s?y.a(this,b):c};g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){return"number"===typeof b?y.j(this,b,c):c};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.G(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.j=function(a,c,d){return this.G(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.g=function(a){return this.J(null,a)};g.a=function(a,b){return this.G(null,a,b)};function og(a,b){this.ic=a;this.Kc=b}
og.prototype.wa=function(){var a=null!=this.ic&&B(this.ic);return a?a:(a=null!=this.Kc)?this.Kc.wa():a};og.prototype.next=function(){if(null!=this.ic){var a=E(this.ic);this.ic=I(this.ic);return a}if(null!=this.Kc&&this.Kc.wa())return this.Kc.next();throw Error("No such element");};og.prototype.remove=function(){return Error("Unsupported operation")};function pg(a,b,c,d){this.v=a;this.Ka=b;this.Wa=c;this.w=d;this.o=31850572;this.F=0}g=pg.prototype;g.toString=function(){return fd(this)};
g.equiv=function(a){return this.C(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.v};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(G,this.v)};g.ta=function(){return E(this.Ka)};
g.za=function(){var a=I(this.Ka);return a?new pg(this.v,a,this.Wa,null):null==this.Wa?cc(this):new pg(this.v,this.Wa,null,null)};g.Z=function(){return this};g.W=function(a,b){return new pg(b,this.Ka,this.Wa,this.w)};g.Y=function(a,b){return P(b,this)};pg.prototype[Sb]=function(){return vd(this)};function qg(a,b,c,d,e){this.v=a;this.count=b;this.Ka=c;this.Wa=d;this.w=e;this.o=31858766;this.F=8192}g=qg.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,this.count.g?this.count.g(this):this.count.call(null,this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.La=function(){return new og(this.Ka,dd(this.Wa))};g.V=function(){return this.v};g.ya=function(){return new qg(this.v,this.count,this.Ka,this.Wa,this.w)};g.ca=function(){return this.count};
g.Gb=function(){return E(this.Ka)};g.Hb=function(){if(t(this.Ka)){var a=I(this.Ka);return a?new qg(this.v,this.count-1,a,this.Wa,null):new qg(this.v,this.count-1,B(this.Wa),Wd,null)}return this};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(rg,this.v)};g.ta=function(){return E(this.Ka)};g.za=function(){return F(B(this))};g.Z=function(){var a=B(this.Wa),b=this.Ka;return t(t(b)?b:a)?new pg(null,this.Ka,B(a),null):null};
g.W=function(a,b){return new qg(b,this.count,this.Ka,this.Wa,this.w)};g.Y=function(a,b){var c;t(this.Ka)?(c=this.Wa,c=new qg(this.v,this.count+1,this.Ka,Vd.a(t(c)?c:Wd,b),null)):c=new qg(this.v,this.count+1,Vd.a(this.Ka,b),Wd,null);return c};var rg=new qg(null,0,null,Wd,yd);qg.prototype[Sb]=function(){return vd(this)};function sg(){this.o=2097152;this.F=0}sg.prototype.equiv=function(a){return this.C(null,a)};sg.prototype.C=function(){return!1};var tg=new sg;
function ug(a,b){return pe(ie(b)?N(a)===N(b)?mf(function(a){return td.a(z.j(b,E(a),tg),E(I(a)))},a):null:null)}function vg(a,b,c,d,e){this.A=a;this.df=b;this.Sd=c;this.Te=d;this.be=e}vg.prototype.wa=function(){var a=this.A<this.Sd;return a?a:this.be.wa()};vg.prototype.next=function(){if(this.A<this.Sd){var a=Kd(this.Te,this.A);this.A+=1;return new U(null,2,5,V,[a,mc.a(this.df,a)],null)}return this.be.next()};vg.prototype.remove=function(){return Error("Unsupported operation")};
function wg(a){this.P=a}wg.prototype.next=function(){if(null!=this.P){var a=E(this.P),b=R(a,0,null),a=R(a,1,null);this.P=I(this.P);return{value:[b,a],done:!1}}return{value:null,done:!0}};function xg(a){this.P=a}xg.prototype.next=function(){if(null!=this.P){var a=E(this.P);this.P=I(this.P);return{value:[a,a],done:!1}}return{value:null,done:!0}};
function yg(a,b){var c;if(b instanceof S)a:{c=a.length;for(var d=b.Na,e=0;;){if(c<=e){c=-1;break a}if(a[e]instanceof S&&d===a[e].Na){c=e;break a}e+=2}}else if(ga(b)||"number"===typeof b)a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(b===a[d]){c=d;break a}d+=2}else if(b instanceof rd)a:for(c=a.length,d=b.Ma,e=0;;){if(c<=e){c=-1;break a}if(a[e]instanceof rd&&d===a[e].Ma){c=e;break a}e+=2}else if(null==b)a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(null==a[d]){c=d;break a}d+=2}else a:for(c=a.length,
d=0;;){if(c<=d){c=-1;break a}if(td.a(b,a[d])){c=d;break a}d+=2}return c}function zg(a,b,c){this.h=a;this.A=b;this.Ia=c;this.o=32374990;this.F=0}g=zg.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.Ia};g.Ea=function(){return this.A<this.h.length-2?new zg(this.h,this.A+2,this.Ia):null};g.ca=function(){return(this.h.length-this.A)/2};g.N=function(){return xd(this)};
g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(G,this.Ia)};g.ra=function(a,b){return Rd(b,this)};g.sa=function(a,b,c){return Ud(b,c,this)};g.ta=function(){return new U(null,2,5,V,[this.h[this.A],this.h[this.A+1]],null)};g.za=function(){return this.A<this.h.length-2?new zg(this.h,this.A+2,this.Ia):G};g.Z=function(){return this};g.W=function(a,b){return new zg(this.h,this.A,b)};g.Y=function(a,b){return P(b,this)};zg.prototype[Sb]=function(){return vd(this)};
function Ag(a,b,c){this.h=a;this.A=b;this.s=c}Ag.prototype.wa=function(){return this.A<this.s};Ag.prototype.next=function(){var a=new U(null,2,5,V,[this.h[this.A],this.h[this.A+1]],null);this.A+=2;return a};function r(a,b,c,d){this.v=a;this.s=b;this.h=c;this.w=d;this.o=16647951;this.F=8196}g=r.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};g.keys=function(){return vd(Bg.g?Bg.g(this):Bg.call(null,this))};g.entries=function(){return new wg(B(B(this)))};
g.values=function(){return vd(Cg.g?Cg.g(this):Cg.call(null,this))};g.has=function(a){return re(this,a)};g.get=function(a,b){return this.G(null,a,b)};g.forEach=function(a){for(var b=B(this),c=null,d=0,e=0;;)if(e<d){var f=c.K(null,e),h=R(f,0,null),f=R(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=B(b))ke(b)?(c=Zc(b),b=$c(b),h=c,d=N(c),c=h):(c=E(b),h=R(c,0,null),f=R(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=I(b),c=null,d=0),e=0;else return null};g.J=function(a,b){return mc.j(this,b,null)};
g.G=function(a,b,c){a=yg(this.h,b);return-1===a?c:this.h[a+1]};g.ec=function(a,b,c){a=this.h.length;for(var d=0;;)if(d<a){var e=this.h[d],f=this.h[d+1];c=b.j?b.j(c,e,f):b.call(null,c,e,f);if(Cd(c))return J.g?J.g(c):J.call(null,c);d+=2}else return c};g.La=function(){return new Ag(this.h,0,2*this.s)};g.V=function(){return this.v};g.ya=function(){return new r(this.v,this.s,this.h,this.w)};g.ca=function(){return this.s};g.N=function(){var a=this.w;return null!=a?a:this.w=a=zd(this)};
g.C=function(a,b){if(null!=b&&(b.o&1024||b.Ee)){var c=this.h.length;if(this.s===b.ca(null))for(var d=0;;)if(d<c){var e=b.G(null,this.h[d],ne);if(e!==ne)if(td.a(this.h[d+1],e))d+=2;else return!1;else return!1}else return!0;else return!1}else return ug(this,b)};g.dc=function(){return new Dg({},this.h.length,Tb(this.h))};g.ka=function(){return Dc(lf,this.v)};g.ra=function(a,b){return Rd(b,this)};g.sa=function(a,b,c){return Ud(b,c,this)};
g.Fb=function(a,b){if(0<=yg(this.h,b)){var c=this.h.length,d=c-2;if(0===d)return cc(this);for(var d=Array(d),e=0,f=0;;){if(e>=c)return new r(this.v,this.s-1,d,null);td.a(b,this.h[e])||(d[f]=this.h[e],d[f+1]=this.h[e+1],f+=2);e+=2}}else return this};
g.Ta=function(a,b,c){a=yg(this.h,b);if(-1===a){if(this.s<Eg){a=this.h;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new r(this.v,this.s+1,e,null)}return Dc(oc(If.a(Fg,this),b,c),this.v)}if(c===this.h[a+1])return this;b=Tb(this.h);b[a+1]=c;return new r(this.v,this.s,b,null)};g.Qc=function(a,b){return-1!==yg(this.h,b)};g.Z=function(){var a=this.h;return 0<=a.length-2?new zg(a,0,null):null};g.W=function(a,b){return new r(b,this.s,this.h,this.w)};
g.Y=function(a,b){if(je(b))return oc(this,y.a(b,0),y.a(b,1));for(var c=this,d=B(b);;){if(null==d)return c;var e=E(d);if(je(e))c=oc(c,y.a(e,0),y.a(e,1)),d=I(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.G(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.j=function(a,c,d){return this.G(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.g=function(a){return this.J(null,a)};g.a=function(a,b){return this.G(null,a,b)};var lf=new r(null,0,[],Ad),Eg=8;
function Gg(a,b,c){a=b?a:Tb(a);if(!c){c=[];for(b=0;;)if(b<a.length){var d=a[b],e=a[b+1];-1===yg(c,d)&&(c.push(d),c.push(e));b+=2}else break;a=c}return new r(null,a.length/2,a,null)}r.prototype[Sb]=function(){return vd(this)};function Dg(a,b,c){this.gc=a;this.Yb=b;this.h=c;this.o=258;this.F=56}g=Dg.prototype;g.ca=function(){if(t(this.gc))return ye(this.Yb);throw Error("count after persistent!");};g.J=function(a,b){return mc.j(this,b,null)};
g.G=function(a,b,c){if(t(this.gc))return a=yg(this.h,b),-1===a?c:this.h[a+1];throw Error("lookup after persistent!");};g.wc=function(a,b){if(t(this.gc)){if(null!=b?b.o&2048||b.Fe||(b.o?0:u(rc,b)):u(rc,b))return Wc(this,Ce.g?Ce.g(b):Ce.call(null,b),De.g?De.g(b):De.call(null,b));for(var c=B(b),d=this;;){var e=E(c);if(t(e))c=I(c),d=Wc(d,Ce.g?Ce.g(e):Ce.call(null,e),De.g?De.g(e):De.call(null,e));else return d}}else throw Error("conj! after persistent!");};
g.xc=function(){if(t(this.gc))return this.gc=!1,new r(null,ye(this.Yb),this.h,null);throw Error("persistent! called twice");};g.vc=function(a,b,c){if(t(this.gc)){a=yg(this.h,b);if(-1===a){if(this.Yb+2<=2*Eg)return this.Yb+=2,this.h.push(b),this.h.push(c),this;a=Hg.a?Hg.a(this.Yb,this.h):Hg.call(null,this.Yb,this.h);return Wc(a,b,c)}c!==this.h[a+1]&&(this.h[a+1]=c);return this}throw Error("assoc! after persistent!");};
function Hg(a,b){for(var c=Rc(Fg),d=0;;)if(d<a)c=Wc(c,b[d],b[d+1]),d+=2;else return c}function Ig(){this.B=!1}function Jg(a,b){return a===b?!0:Je(a,b)?!0:td.a(a,b)}function Kg(a,b,c){a=Tb(a);a[b]=c;return a}function Lg(a,b){var c=Array(a.length-2);me(a,0,c,0,2*b);me(a,2*(b+1),c,2*b,c.length-2*b);return c}function Mg(a,b,c,d){a=a.Tb(b);a.h[c]=d;return a}
function Ng(a,b,c){for(var d=a.length,e=0,f=c;;)if(e<d){c=a[e];if(null!=c){var h=a[e+1];c=b.j?b.j(f,c,h):b.call(null,f,c,h)}else c=a[e+1],c=null!=c?c.Xb(b,f):f;if(Cd(c))return J.g?J.g(c):J.call(null,c);e+=2;f=c}else return f}function Og(a,b,c,d){this.h=a;this.A=b;this.Gc=c;this.ab=d}Og.prototype.advance=function(){for(var a=this.h.length;;)if(this.A<a){var b=this.h[this.A],c=this.h[this.A+1];null!=b?b=this.Gc=new U(null,2,5,V,[b,c],null):null!=c?(b=dd(c),b=b.wa()?this.ab=b:!1):b=!1;this.A+=2;if(b)return!0}else return!1};
Og.prototype.wa=function(){var a=null!=this.Gc;return a?a:(a=null!=this.ab)?a:this.advance()};Og.prototype.next=function(){if(null!=this.Gc){var a=this.Gc;this.Gc=null;return a}if(null!=this.ab)return a=this.ab.next(),this.ab.wa()||(this.ab=null),a;if(this.advance())return this.next();throw Error("No such element");};Og.prototype.remove=function(){return Error("Unsupported operation")};function Pg(a,b,c){this.fa=a;this.ma=b;this.h=c}g=Pg.prototype;
g.Tb=function(a){if(a===this.fa)return this;var b=ze(this.ma),c=Array(0>b?4:2*(b+1));me(this.h,0,c,0,2*b);return new Pg(a,this.ma,c)};g.Cc=function(){return Qg?Qg(this.h):Rg.call(null,this.h)};g.Xb=function(a,b){return Ng(this.h,a,b)};g.Lb=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.ma&e))return d;var f=ze(this.ma&e-1),e=this.h[2*f],f=this.h[2*f+1];return null==e?f.Lb(a+5,b,c,d):Jg(c,e)?f:d};
g.$a=function(a,b,c,d,e,f){var h=1<<(c>>>b&31),k=ze(this.ma&h-1);if(0===(this.ma&h)){var l=ze(this.ma);if(2*l<this.h.length){a=this.Tb(a);b=a.h;f.B=!0;a:for(c=2*(l-k),f=2*k+(c-1),l=2*(k+1)+(c-1);;){if(0===c)break a;b[l]=b[f];--l;--c;--f}b[2*k]=d;b[2*k+1]=e;a.ma|=h;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=Sg.$a(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0!==
(this.ma>>>d&1)&&(k[d]=null!=this.h[e]?Sg.$a(a,b+5,pd(this.h[e]),this.h[e],this.h[e+1],f):this.h[e+1],e+=2),d+=1;else break;return new Tg(a,l+1,k)}b=Array(2*(l+4));me(this.h,0,b,0,2*k);b[2*k]=d;b[2*k+1]=e;me(this.h,2*k,b,2*(k+1),2*(l-k));f.B=!0;a=this.Tb(a);a.h=b;a.ma|=h;return a}l=this.h[2*k];h=this.h[2*k+1];if(null==l)return l=h.$a(a,b+5,c,d,e,f),l===h?this:Mg(this,a,2*k+1,l);if(Jg(d,l))return e===h?this:Mg(this,a,2*k+1,e);f.B=!0;f=b+5;d=Ug?Ug(a,f,l,h,c,d,e):Vg.call(null,a,f,l,h,c,d,e);e=2*k;k=
2*k+1;a=this.Tb(a);a.h[e]=null;a.h[k]=d;return a};
g.Za=function(a,b,c,d,e){var f=1<<(b>>>a&31),h=ze(this.ma&f-1);if(0===(this.ma&f)){var k=ze(this.ma);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=Sg.Za(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.ma>>>c&1)&&(h[c]=null!=this.h[d]?Sg.Za(a+5,pd(this.h[d]),this.h[d],this.h[d+1],e):this.h[d+1],d+=2),c+=1;else break;return new Tg(null,k+1,h)}a=Array(2*(k+1));me(this.h,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;me(this.h,2*h,a,2*(h+1),2*(k-h));e.B=!0;return new Pg(null,this.ma|f,a)}var l=this.h[2*h],f=this.h[2*h+1];if(null==l)return k=f.Za(a+5,b,c,d,e),k===f?this:new Pg(null,this.ma,Kg(this.h,2*h+1,k));if(Jg(c,l))return d===f?this:new Pg(null,this.ma,Kg(this.h,2*h+1,d));e.B=!0;e=this.ma;k=this.h;a+=5;a=Wg?Wg(a,l,f,b,c,d):Vg.call(null,a,l,f,b,c,d);c=2*h;h=2*h+1;d=Tb(k);d[c]=null;d[h]=a;return new Pg(null,e,d)};
g.Dc=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.ma&d))return this;var e=ze(this.ma&d-1),f=this.h[2*e],h=this.h[2*e+1];return null==f?(a=h.Dc(a+5,b,c),a===h?this:null!=a?new Pg(null,this.ma,Kg(this.h,2*e+1,a)):this.ma===d?null:new Pg(null,this.ma^d,Lg(this.h,e))):Jg(c,f)?new Pg(null,this.ma^d,Lg(this.h,e)):this};g.La=function(){return new Og(this.h,0,null,null)};var Sg=new Pg(null,0,[]);function Xg(a,b,c){this.h=a;this.A=b;this.ab=c}
Xg.prototype.wa=function(){for(var a=this.h.length;;){if(null!=this.ab&&this.ab.wa())return!0;if(this.A<a){var b=this.h[this.A];this.A+=1;null!=b&&(this.ab=dd(b))}else return!1}};Xg.prototype.next=function(){if(this.wa())return this.ab.next();throw Error("No such element");};Xg.prototype.remove=function(){return Error("Unsupported operation")};function Tg(a,b,c){this.fa=a;this.s=b;this.h=c}g=Tg.prototype;g.Tb=function(a){return a===this.fa?this:new Tg(a,this.s,Tb(this.h))};
g.Cc=function(){return Yg?Yg(this.h):Zg.call(null,this.h)};g.Xb=function(a,b){for(var c=this.h.length,d=0,e=b;;)if(d<c){var f=this.h[d];if(null!=f&&(e=f.Xb(a,e),Cd(e)))return J.g?J.g(e):J.call(null,e);d+=1}else return e};g.Lb=function(a,b,c,d){var e=this.h[b>>>a&31];return null!=e?e.Lb(a+5,b,c,d):d};g.$a=function(a,b,c,d,e,f){var h=c>>>b&31,k=this.h[h];if(null==k)return a=Mg(this,a,h,Sg.$a(a,b+5,c,d,e,f)),a.s+=1,a;b=k.$a(a,b+5,c,d,e,f);return b===k?this:Mg(this,a,h,b)};
g.Za=function(a,b,c,d,e){var f=b>>>a&31,h=this.h[f];if(null==h)return new Tg(null,this.s+1,Kg(this.h,f,Sg.Za(a+5,b,c,d,e)));a=h.Za(a+5,b,c,d,e);return a===h?this:new Tg(null,this.s,Kg(this.h,f,a))};
g.Dc=function(a,b,c){var d=b>>>a&31,e=this.h[d];if(null!=e){a=e.Dc(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.s)a:{e=this.h;a=e.length;b=Array(2*(this.s-1));c=0;for(var f=1,h=0;;)if(c<a)c!==d&&null!=e[c]&&(b[f]=e[c],f+=2,h|=1<<c),c+=1;else{d=new Pg(null,h,b);break a}}else d=new Tg(null,this.s-1,Kg(this.h,d,a));else d=new Tg(null,this.s,Kg(this.h,d,a));return d}return this};g.La=function(){return new Xg(this.h,0,null)};
function $g(a,b,c){b*=2;for(var d=0;;)if(d<b){if(Jg(c,a[d]))return d;d+=2}else return-1}function ah(a,b,c,d){this.fa=a;this.xb=b;this.s=c;this.h=d}g=ah.prototype;g.Tb=function(a){if(a===this.fa)return this;var b=Array(2*(this.s+1));me(this.h,0,b,0,2*this.s);return new ah(a,this.xb,this.s,b)};g.Cc=function(){return Qg?Qg(this.h):Rg.call(null,this.h)};g.Xb=function(a,b){return Ng(this.h,a,b)};g.Lb=function(a,b,c,d){a=$g(this.h,this.s,c);return 0>a?d:Jg(c,this.h[a])?this.h[a+1]:d};
g.$a=function(a,b,c,d,e,f){if(c===this.xb){b=$g(this.h,this.s,d);if(-1===b){if(this.h.length>2*this.s)return b=2*this.s,c=2*this.s+1,a=this.Tb(a),a.h[b]=d,a.h[c]=e,f.B=!0,a.s+=1,a;c=this.h.length;b=Array(c+2);me(this.h,0,b,0,c);b[c]=d;b[c+1]=e;f.B=!0;d=this.s+1;a===this.fa?(this.h=b,this.s=d,a=this):a=new ah(this.fa,this.xb,d,b);return a}return this.h[b+1]===e?this:Mg(this,a,b+1,e)}return(new Pg(a,1<<(this.xb>>>b&31),[null,this,null,null])).$a(a,b,c,d,e,f)};
g.Za=function(a,b,c,d,e){return b===this.xb?(a=$g(this.h,this.s,c),-1===a?(a=2*this.s,b=Array(a+2),me(this.h,0,b,0,a),b[a]=c,b[a+1]=d,e.B=!0,new ah(null,this.xb,this.s+1,b)):td.a(this.h[a],d)?this:new ah(null,this.xb,this.s,Kg(this.h,a+1,d))):(new Pg(null,1<<(this.xb>>>a&31),[null,this])).Za(a,b,c,d,e)};g.Dc=function(a,b,c){a=$g(this.h,this.s,c);return-1===a?this:1===this.s?null:new ah(null,this.xb,this.s-1,Lg(this.h,ye(a)))};g.La=function(){return new Og(this.h,0,null,null)};
function Vg(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 6:return Wg(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);case 7:return Ug(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);default:throw Error([w("Invalid arity: "),w(b.length)].join(""));}}
function Wg(a,b,c,d,e,f){var h=pd(b);if(h===d)return new ah(null,h,2,[b,c,e,f]);var k=new Ig;return Sg.Za(a,h,b,c,k).Za(a,d,e,f,k)}function Ug(a,b,c,d,e,f,h){var k=pd(c);if(k===e)return new ah(null,k,2,[c,d,f,h]);var l=new Ig;return Sg.$a(a,b,k,c,d,l).$a(a,b,e,f,h,l)}function bh(a,b,c,d,e){this.v=a;this.Mb=b;this.A=c;this.P=d;this.w=e;this.o=32374860;this.F=0}g=bh.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.v};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(G,this.v)};g.ra=function(a,b){return Rd(b,this)};
g.sa=function(a,b,c){return Ud(b,c,this)};g.ta=function(){return null==this.P?new U(null,2,5,V,[this.Mb[this.A],this.Mb[this.A+1]],null):E(this.P)};g.za=function(){var a=this,b=null==a.P?function(){var b=a.Mb,d=a.A+2;return ch?ch(b,d,null):Rg.call(null,b,d,null)}():function(){var b=a.Mb,d=a.A,e=I(a.P);return ch?ch(b,d,e):Rg.call(null,b,d,e)}();return null!=b?b:G};g.Z=function(){return this};g.W=function(a,b){return new bh(b,this.Mb,this.A,this.P,this.w)};g.Y=function(a,b){return P(b,this)};
bh.prototype[Sb]=function(){return vd(this)};function Rg(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Qg(arguments[0]);case 3:return ch(arguments[0],arguments[1],arguments[2]);default:throw Error([w("Invalid arity: "),w(b.length)].join(""));}}function Qg(a){return ch(a,0,null)}
function ch(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new bh(null,a,b,null,null);var d=a[b+1];if(t(d)&&(d=d.Cc(),t(d)))return new bh(null,a,b+2,d,null);b+=2}else return null;else return new bh(null,a,b,c,null)}function dh(a,b,c,d,e){this.v=a;this.Mb=b;this.A=c;this.P=d;this.w=e;this.o=32374860;this.F=0}g=dh.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.v};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(G,this.v)};g.ra=function(a,b){return Rd(b,this)};
g.sa=function(a,b,c){return Ud(b,c,this)};g.ta=function(){return E(this.P)};g.za=function(){var a;a=this.Mb;var b=this.A,c=I(this.P);a=eh?eh(null,a,b,c):Zg.call(null,null,a,b,c);return null!=a?a:G};g.Z=function(){return this};g.W=function(a,b){return new dh(b,this.Mb,this.A,this.P,this.w)};g.Y=function(a,b){return P(b,this)};dh.prototype[Sb]=function(){return vd(this)};
function Zg(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Yg(arguments[0]);case 4:return eh(arguments[0],arguments[1],arguments[2],arguments[3]);default:throw Error([w("Invalid arity: "),w(b.length)].join(""));}}function Yg(a){return eh(null,a,0,null)}function eh(a,b,c,d){if(null==d)for(d=b.length;;)if(c<d){var e=b[c];if(t(e)&&(e=e.Cc(),t(e)))return new dh(a,b,c+1,e,null);c+=1}else return null;else return new dh(a,b,c,d,null)}
function fh(a,b,c){this.Ca=a;this.ne=b;this.Kd=c}fh.prototype.wa=function(){return this.Kd&&this.ne.wa()};fh.prototype.next=function(){if(this.Kd)return this.ne.next();this.Kd=!0;return this.Ca};fh.prototype.remove=function(){return Error("Unsupported operation")};function gh(a,b,c,d,e,f){this.v=a;this.s=b;this.root=c;this.Aa=d;this.Ca=e;this.w=f;this.o=16123663;this.F=8196}g=gh.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};
g.keys=function(){return vd(Bg.g?Bg.g(this):Bg.call(null,this))};g.entries=function(){return new wg(B(B(this)))};g.values=function(){return vd(Cg.g?Cg.g(this):Cg.call(null,this))};g.has=function(a){return re(this,a)};g.get=function(a,b){return this.G(null,a,b)};
g.forEach=function(a){for(var b=B(this),c=null,d=0,e=0;;)if(e<d){var f=c.K(null,e),h=R(f,0,null),f=R(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=B(b))ke(b)?(c=Zc(b),b=$c(b),h=c,d=N(c),c=h):(c=E(b),h=R(c,0,null),f=R(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=I(b),c=null,d=0),e=0;else return null};g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){return null==b?this.Aa?this.Ca:c:null==this.root?c:this.root.Lb(0,pd(b),b,c)};
g.ec=function(a,b,c){a=this.Aa?b.j?b.j(c,null,this.Ca):b.call(null,c,null,this.Ca):c;return Cd(a)?J.g?J.g(a):J.call(null,a):null!=this.root?this.root.Xb(b,a):a};g.La=function(){var a=this.root?dd(this.root):ff;return this.Aa?new fh(this.Ca,a,!1):a};g.V=function(){return this.v};g.ya=function(){return new gh(this.v,this.s,this.root,this.Aa,this.Ca,this.w)};g.ca=function(){return this.s};g.N=function(){var a=this.w;return null!=a?a:this.w=a=zd(this)};g.C=function(a,b){return ug(this,b)};
g.dc=function(){return new hh({},this.root,this.s,this.Aa,this.Ca)};g.ka=function(){return Dc(Fg,this.v)};g.Fb=function(a,b){if(null==b)return this.Aa?new gh(this.v,this.s-1,this.root,!1,null,null):this;if(null==this.root)return this;var c=this.root.Dc(0,pd(b),b);return c===this.root?this:new gh(this.v,this.s-1,c,this.Aa,this.Ca,null)};
g.Ta=function(a,b,c){if(null==b)return this.Aa&&c===this.Ca?this:new gh(this.v,this.Aa?this.s:this.s+1,this.root,!0,c,null);a=new Ig;b=(null==this.root?Sg:this.root).Za(0,pd(b),b,c,a);return b===this.root?this:new gh(this.v,a.B?this.s+1:this.s,b,this.Aa,this.Ca,null)};g.Qc=function(a,b){return null==b?this.Aa:null==this.root?!1:this.root.Lb(0,pd(b),b,ne)!==ne};g.Z=function(){if(0<this.s){var a=null!=this.root?this.root.Cc():null;return this.Aa?P(new U(null,2,5,V,[null,this.Ca],null),a):a}return null};
g.W=function(a,b){return new gh(b,this.s,this.root,this.Aa,this.Ca,this.w)};g.Y=function(a,b){if(je(b))return oc(this,y.a(b,0),y.a(b,1));for(var c=this,d=B(b);;){if(null==d)return c;var e=E(d);if(je(e))c=oc(c,y.a(e,0),y.a(e,1)),d=I(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.G(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.j=function(a,c,d){return this.G(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.g=function(a){return this.J(null,a)};g.a=function(a,b){return this.G(null,a,b)};var Fg=new gh(null,0,null,!1,null,Ad);
function Zd(a,b){for(var c=a.length,d=0,e=Rc(Fg);;)if(d<c)var f=d+1,e=e.vc(null,a[d],b[d]),d=f;else return Vc(e)}gh.prototype[Sb]=function(){return vd(this)};function hh(a,b,c,d,e){this.fa=a;this.root=b;this.count=c;this.Aa=d;this.Ca=e;this.o=258;this.F=56}
function ih(a,b,c){if(a.fa){if(null==b)a.Ca!==c&&(a.Ca=c),a.Aa||(a.count+=1,a.Aa=!0);else{var d=new Ig;b=(null==a.root?Sg:a.root).$a(a.fa,0,pd(b),b,c,d);b!==a.root&&(a.root=b);d.B&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}g=hh.prototype;g.ca=function(){if(this.fa)return this.count;throw Error("count after persistent!");};g.J=function(a,b){return null==b?this.Aa?this.Ca:null:null==this.root?null:this.root.Lb(0,pd(b),b)};
g.G=function(a,b,c){return null==b?this.Aa?this.Ca:c:null==this.root?c:this.root.Lb(0,pd(b),b,c)};g.wc=function(a,b){var c;a:if(this.fa)if(null!=b?b.o&2048||b.Fe||(b.o?0:u(rc,b)):u(rc,b))c=ih(this,Ce.g?Ce.g(b):Ce.call(null,b),De.g?De.g(b):De.call(null,b));else{c=B(b);for(var d=this;;){var e=E(c);if(t(e))c=I(c),d=ih(d,Ce.g?Ce.g(e):Ce.call(null,e),De.g?De.g(e):De.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");return c};
g.xc=function(){var a;if(this.fa)this.fa=null,a=new gh(null,this.count,this.root,this.Aa,this.Ca,null);else throw Error("persistent! called twice");return a};g.vc=function(a,b,c){return ih(this,b,c)};function jh(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=Vd.a(d,a),a=b;else return d}function kh(a,b,c,d,e){this.v=a;this.stack=b;this.Nc=c;this.s=d;this.w=e;this.o=32374862;this.F=0}g=kh.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.v};g.ca=function(){return 0>this.s?N(I(this))+1:this.s};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(G,this.v)};
g.ra=function(a,b){return Rd(b,this)};g.sa=function(a,b,c){return Ud(b,c,this)};g.ta=function(){var a=this.stack;return null==a?null:vc(a)};g.za=function(){var a=E(this.stack),a=jh(this.Nc?a.right:a.left,I(this.stack),this.Nc);return null!=a?new kh(null,a,this.Nc,this.s-1,null):G};g.Z=function(){return this};g.W=function(a,b){return new kh(b,this.stack,this.Nc,this.s,this.w)};g.Y=function(a,b){return P(b,this)};kh.prototype[Sb]=function(){return vd(this)};
function lh(a,b,c){return new kh(null,jh(a,null,b),b,c,null)}function mh(a,b,c,d){return c instanceof W?c.left instanceof W?new W(c.key,c.B,c.left.hb(),new nh(a,b,c.right,d,null),null):c.right instanceof W?new W(c.right.key,c.right.B,new nh(c.key,c.B,c.left,c.right.left,null),new nh(a,b,c.right.right,d,null),null):new nh(a,b,c,d,null):new nh(a,b,c,d,null)}
function oh(a,b,c,d){return d instanceof W?d.right instanceof W?new W(d.key,d.B,new nh(a,b,c,d.left,null),d.right.hb(),null):d.left instanceof W?new W(d.left.key,d.left.B,new nh(a,b,c,d.left.left,null),new nh(d.key,d.B,d.left.right,d.right,null),null):new nh(a,b,c,d,null):new nh(a,b,c,d,null)}
function ph(a,b,c,d){if(c instanceof W)return new W(a,b,c.hb(),d,null);if(d instanceof nh)return oh(a,b,c,d.Ic());if(d instanceof W&&d.left instanceof nh)return new W(d.left.key,d.left.B,new nh(a,b,c,d.left.left,null),oh(d.key,d.B,d.left.right,d.right.Ic()),null);throw Error("red-black tree invariant violation");}
var qh=function qh(b,c,d){d=null!=b.left?qh(b.left,c,d):d;if(Cd(d))return J.g?J.g(d):J.call(null,d);var e=b.key,f=b.B;d=c.j?c.j(d,e,f):c.call(null,d,e,f);if(Cd(d))return J.g?J.g(d):J.call(null,d);b=null!=b.right?qh(b.right,c,d):d;return Cd(b)?J.g?J.g(b):J.call(null,b):b};function nh(a,b,c,d,e){this.key=a;this.B=b;this.left=c;this.right=d;this.w=e;this.o=32402207;this.F=0}g=nh.prototype;
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();g.Od=function(a){return a.Rd(this)};g.Ic=function(){return new W(this.key,this.B,this.left,this.right,null)};g.hb=function(){return this};g.Nd=function(a){return a.Qd(this)};g.replace=function(a,b,c,d){return new nh(a,b,c,d,null)};
g.Qd=function(a){return new nh(a.key,a.B,this,a.right,null)};g.Rd=function(a){return new nh(a.key,a.B,a.left,this,null)};g.Xb=function(a,b){return qh(this,a,b)};g.J=function(a,b){return y.j(this,b,null)};g.G=function(a,b,c){return y.j(this,b,c)};g.K=function(a,b){return 0===b?this.key:1===b?this.B:null};g.Ja=function(a,b,c){return 0===b?this.key:1===b?this.B:c};g.Sb=function(a,b,c){return(new U(null,2,5,V,[this.key,this.B],null)).Sb(null,b,c)};g.V=function(){return null};g.ca=function(){return 2};
g.tc=function(){return this.key};g.uc=function(){return this.B};g.Gb=function(){return this.B};g.Hb=function(){return new U(null,1,5,V,[this.key],null)};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){return Od(this,b)};g.ka=function(){return Wd};g.ra=function(a,b){return Dd(this,b)};g.sa=function(a,b,c){return Ed(this,b,c)};g.Ta=function(a,b,c){return Yd.j(new U(null,2,5,V,[this.key,this.B],null),b,c)};g.Z=function(){var a=this.key;return ec(ec(G,this.B),a)};
g.W=function(a,b){return Qd(new U(null,2,5,V,[this.key,this.B],null),b)};g.Y=function(a,b){return new U(null,3,5,V,[this.key,this.B,b],null)};g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.G(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.j=function(a,c,d){return this.G(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};
g.g=function(a){return this.J(null,a)};g.a=function(a,b){return this.G(null,a,b)};nh.prototype[Sb]=function(){return vd(this)};function W(a,b,c,d,e){this.key=a;this.B=b;this.left=c;this.right=d;this.w=e;this.o=32402207;this.F=0}g=W.prototype;
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();g.Od=function(a){return new W(this.key,this.B,this.left,a,null)};g.Ic=function(){throw Error("red-black tree invariant violation");};g.hb=function(){return new nh(this.key,this.B,this.left,this.right,null)};
g.Nd=function(a){return new W(this.key,this.B,a,this.right,null)};g.replace=function(a,b,c,d){return new W(a,b,c,d,null)};g.Qd=function(a){return this.left instanceof W?new W(this.key,this.B,this.left.hb(),new nh(a.key,a.B,this.right,a.right,null),null):this.right instanceof W?new W(this.right.key,this.right.B,new nh(this.key,this.B,this.left,this.right.left,null),new nh(a.key,a.B,this.right.right,a.right,null),null):new nh(a.key,a.B,this,a.right,null)};
g.Rd=function(a){return this.right instanceof W?new W(this.key,this.B,new nh(a.key,a.B,a.left,this.left,null),this.right.hb(),null):this.left instanceof W?new W(this.left.key,this.left.B,new nh(a.key,a.B,a.left,this.left.left,null),new nh(this.key,this.B,this.left.right,this.right,null),null):new nh(a.key,a.B,a.left,this,null)};g.Xb=function(a,b){return qh(this,a,b)};g.J=function(a,b){return y.j(this,b,null)};g.G=function(a,b,c){return y.j(this,b,c)};
g.K=function(a,b){return 0===b?this.key:1===b?this.B:null};g.Ja=function(a,b,c){return 0===b?this.key:1===b?this.B:c};g.Sb=function(a,b,c){return(new U(null,2,5,V,[this.key,this.B],null)).Sb(null,b,c)};g.V=function(){return null};g.ca=function(){return 2};g.tc=function(){return this.key};g.uc=function(){return this.B};g.Gb=function(){return this.B};g.Hb=function(){return new U(null,1,5,V,[this.key],null)};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};
g.C=function(a,b){return Od(this,b)};g.ka=function(){return Wd};g.ra=function(a,b){return Dd(this,b)};g.sa=function(a,b,c){return Ed(this,b,c)};g.Ta=function(a,b,c){return Yd.j(new U(null,2,5,V,[this.key,this.B],null),b,c)};g.Z=function(){var a=this.key;return ec(ec(G,this.B),a)};g.W=function(a,b){return Qd(new U(null,2,5,V,[this.key,this.B],null),b)};g.Y=function(a,b){return new U(null,3,5,V,[this.key,this.B,b],null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.G(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.j=function(a,c,d){return this.G(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.g=function(a){return this.J(null,a)};g.a=function(a,b){return this.G(null,a,b)};W.prototype[Sb]=function(){return vd(this)};
var rh=function rh(b,c,d,e,f){if(null==c)return new W(d,e,null,null,null);var h;h=c.key;h=b.a?b.a(d,h):b.call(null,d,h);if(0===h)return f[0]=c,null;if(0>h)return b=rh(b,c.left,d,e,f),null!=b?c.Nd(b):null;b=rh(b,c.right,d,e,f);return null!=b?c.Od(b):null},sh=function sh(b,c){if(null==b)return c;if(null==c)return b;if(b instanceof W){if(c instanceof W){var d=sh(b.right,c.left);return d instanceof W?new W(d.key,d.B,new W(b.key,b.B,b.left,d.left,null),new W(c.key,c.B,d.right,c.right,null),null):new W(b.key,
b.B,b.left,new W(c.key,c.B,d,c.right,null),null)}return new W(b.key,b.B,b.left,sh(b.right,c),null)}if(c instanceof W)return new W(c.key,c.B,sh(b,c.left),c.right,null);d=sh(b.right,c.left);return d instanceof W?new W(d.key,d.B,new nh(b.key,b.B,b.left,d.left,null),new nh(c.key,c.B,d.right,c.right,null),null):ph(b.key,b.B,b.left,new nh(c.key,c.B,d,c.right,null))},th=function th(b,c,d,e){if(null!=c){var f;f=c.key;f=b.a?b.a(d,f):b.call(null,d,f);if(0===f)return e[0]=c,sh(c.left,c.right);if(0>f)return b=
th(b,c.left,d,e),null!=b||null!=e[0]?c.left instanceof nh?ph(c.key,c.B,b,c.right):new W(c.key,c.B,b,c.right,null):null;b=th(b,c.right,d,e);if(null!=b||null!=e[0])if(c.right instanceof nh)if(e=c.key,d=c.B,c=c.left,b instanceof W)c=new W(e,d,c,b.hb(),null);else if(c instanceof nh)c=mh(e,d,c.Ic(),b);else if(c instanceof W&&c.right instanceof nh)c=new W(c.right.key,c.right.B,mh(c.key,c.B,c.left.Ic(),c.right.left),new nh(e,d,c.right.right,b,null),null);else throw Error("red-black tree invariant violation");
else c=new W(c.key,c.B,c.left,b,null);else c=null;return c}return null},uh=function uh(b,c,d,e){var f=c.key,h=b.a?b.a(d,f):b.call(null,d,f);return 0===h?c.replace(f,e,c.left,c.right):0>h?c.replace(f,c.B,uh(b,c.left,d,e),c.right):c.replace(f,c.B,c.left,uh(b,c.right,d,e))};function vh(a,b,c,d,e){this.Qa=a;this.gb=b;this.s=c;this.v=d;this.w=e;this.o=418776847;this.F=8192}g=vh.prototype;
g.forEach=function(a){for(var b=B(this),c=null,d=0,e=0;;)if(e<d){var f=c.K(null,e),h=R(f,0,null),f=R(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=B(b))ke(b)?(c=Zc(b),b=$c(b),h=c,d=N(c),c=h):(c=E(b),h=R(c,0,null),f=R(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=I(b),c=null,d=0),e=0;else return null};g.get=function(a,b){return this.G(null,a,b)};g.entries=function(){return new wg(B(B(this)))};g.toString=function(){return fd(this)};g.keys=function(){return vd(Bg.g?Bg.g(this):Bg.call(null,this))};
g.values=function(){return vd(Cg.g?Cg.g(this):Cg.call(null,this))};g.equiv=function(a){return this.C(null,a)};function wh(a,b){for(var c=a.gb;;)if(null!=c){var d;d=c.key;d=a.Qa.a?a.Qa.a(b,d):a.Qa.call(null,b,d);if(0===d)return c;c=0>d?c.left:c.right}else return null}g.has=function(a){return re(this,a)};g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){a=wh(this,b);return null!=a?a.B:c};g.ec=function(a,b,c){return null!=this.gb?qh(this.gb,b,c):c};g.V=function(){return this.v};
g.ya=function(){return new vh(this.Qa,this.gb,this.s,this.v,this.w)};g.ca=function(){return this.s};g.fc=function(){return 0<this.s?lh(this.gb,!1,this.s):null};g.N=function(){var a=this.w;return null!=a?a:this.w=a=zd(this)};g.C=function(a,b){return ug(this,b)};g.ka=function(){return new vh(this.Qa,null,0,this.v,0)};g.Fb=function(a,b){var c=[null],d=th(this.Qa,this.gb,b,c);return null==d?null==Kd(c,0)?this:new vh(this.Qa,null,0,this.v,null):new vh(this.Qa,d.hb(),this.s-1,this.v,null)};
g.Ta=function(a,b,c){a=[null];var d=rh(this.Qa,this.gb,b,c,a);return null==d?(a=Kd(a,0),td.a(c,a.B)?this:new vh(this.Qa,uh(this.Qa,this.gb,b,c),this.s,this.v,null)):new vh(this.Qa,d.hb(),this.s+1,this.v,null)};g.Qc=function(a,b){return null!=wh(this,b)};g.Z=function(){return 0<this.s?lh(this.gb,!0,this.s):null};g.W=function(a,b){return new vh(this.Qa,this.gb,this.s,b,this.w)};
g.Y=function(a,b){if(je(b))return oc(this,y.a(b,0),y.a(b,1));for(var c=this,d=B(b);;){if(null==d)return c;var e=E(d);if(je(e))c=oc(c,y.a(e,0),y.a(e,1)),d=I(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.G(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.j=function(a,c,d){return this.G(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.g=function(a){return this.J(null,a)};g.a=function(a,b){return this.G(null,a,b)};vh.prototype[Sb]=function(){return vd(this)};
var xf=function xf(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return xf.D(0<c.length?new C(c.slice(0),0,null):null)};xf.D=function(a){for(var b=B(a),c=Rc(Fg);;)if(b){a=I(I(b));var d=E(b),b=E(I(b)),c=Wc(c,d,b),b=a}else return Vc(c)};xf.O=0;xf.T=function(a){return xf.D(B(a))};var xh=function xh(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return xh.D(0<c.length?new C(c.slice(0),0,null):null)};
xh.D=function(a){a=a instanceof C&&0===a.A?a.h:Ub(a);return Gg(a,!0,!1)};xh.O=0;xh.T=function(a){return xh.D(B(a))};function yh(a,b){this.S=a;this.Ia=b;this.o=32374988;this.F=0}g=yh.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.Ia};g.Ea=function(){var a=(null!=this.S?this.S.o&128||this.S.Sc||(this.S.o?0:u(kc,this.S)):u(kc,this.S))?this.S.Ea(null):I(this.S);return null==a?null:new yh(a,this.Ia)};g.N=function(){return xd(this)};
g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(G,this.Ia)};g.ra=function(a,b){return Rd(b,this)};g.sa=function(a,b,c){return Ud(b,c,this)};g.ta=function(){return this.S.ta(null).tc(null)};g.za=function(){var a=(null!=this.S?this.S.o&128||this.S.Sc||(this.S.o?0:u(kc,this.S)):u(kc,this.S))?this.S.Ea(null):I(this.S);return null!=a?new yh(a,this.Ia):G};g.Z=function(){return this};g.W=function(a,b){return new yh(this.S,b)};g.Y=function(a,b){return P(b,this)};yh.prototype[Sb]=function(){return vd(this)};
function Bg(a){return(a=B(a))?new yh(a,null):null}function Ce(a){return sc(a)}function zh(a,b){this.S=a;this.Ia=b;this.o=32374988;this.F=0}g=zh.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.V=function(){return this.Ia};g.Ea=function(){var a=(null!=this.S?this.S.o&128||this.S.Sc||(this.S.o?0:u(kc,this.S)):u(kc,this.S))?this.S.Ea(null):I(this.S);return null==a?null:new zh(a,this.Ia)};g.N=function(){return xd(this)};
g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(G,this.Ia)};g.ra=function(a,b){return Rd(b,this)};g.sa=function(a,b,c){return Ud(b,c,this)};g.ta=function(){return this.S.ta(null).uc(null)};g.za=function(){var a=(null!=this.S?this.S.o&128||this.S.Sc||(this.S.o?0:u(kc,this.S)):u(kc,this.S))?this.S.Ea(null):I(this.S);return null!=a?new zh(a,this.Ia):G};g.Z=function(){return this};g.W=function(a,b){return new zh(this.S,b)};g.Y=function(a,b){return P(b,this)};zh.prototype[Sb]=function(){return vd(this)};
function Cg(a){return(a=B(a))?new zh(a,null):null}function De(a){return tc(a)}function Ah(a){return t(nf(ue,a))?se(function(a,c){return Vd.a(t(a)?a:lf,c)},a):null}function Bh(a){this.Ed=a}Bh.prototype.wa=function(){return this.Ed.wa()};Bh.prototype.next=function(){if(this.Ed.wa())return this.Ed.next().xa[0];throw Error("No such element");};Bh.prototype.remove=function(){return Error("Unsupported operation")};function Ch(a,b,c){this.v=a;this.Kb=b;this.w=c;this.o=15077647;this.F=8196}g=Ch.prototype;
g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};g.keys=function(){return vd(B(this))};g.entries=function(){return new xg(B(B(this)))};g.values=function(){return vd(B(this))};g.has=function(a){return re(this,a)};
g.forEach=function(a){for(var b=B(this),c=null,d=0,e=0;;)if(e<d){var f=c.K(null,e),h=R(f,0,null),f=R(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=B(b))ke(b)?(c=Zc(b),b=$c(b),h=c,d=N(c),c=h):(c=E(b),h=R(c,0,null),f=R(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=I(b),c=null,d=0),e=0;else return null};g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){return nc(this.Kb,b)?b:c};g.La=function(){return new Bh(dd(this.Kb))};g.V=function(){return this.v};
g.ya=function(){return new Ch(this.v,this.Kb,this.w)};g.ca=function(){return bc(this.Kb)};g.N=function(){var a=this.w;return null!=a?a:this.w=a=zd(this)};g.C=function(a,b){return ge(b)&&N(this)===N(b)&&mf(function(a){return function(b){return re(a,b)}}(this),b)};g.dc=function(){return new Dh(Rc(this.Kb))};g.ka=function(){return Qd(Eh,this.v)};g.Z=function(){return Bg(this.Kb)};g.W=function(a,b){return new Ch(b,this.Kb,this.w)};g.Y=function(a,b){return new Ch(this.v,Yd.j(this.Kb,b,null),null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.G(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.j=function(a,c,d){return this.G(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.g=function(a){return this.J(null,a)};g.a=function(a,b){return this.G(null,a,b)};var Eh=new Ch(null,lf,Ad);Ch.prototype[Sb]=function(){return vd(this)};
function Dh(a){this.Bb=a;this.F=136;this.o=259}g=Dh.prototype;g.wc=function(a,b){this.Bb=Wc(this.Bb,b,null);return this};g.xc=function(){return new Ch(null,Vc(this.Bb),null)};g.ca=function(){return N(this.Bb)};g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){return mc.j(this.Bb,b,ne)===ne?c:b};
g.call=function(){function a(a,b,c){return mc.j(this.Bb,b,ne)===ne?c:b}function b(a,b){return mc.j(this.Bb,b,ne)===ne?null:b}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,0,e);case 3:return a.call(this,0,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.j=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.g=function(a){return mc.j(this.Bb,a,ne)===ne?null:a};g.a=function(a,b){return mc.j(this.Bb,a,ne)===ne?b:a};
function Fh(a,b,c){this.v=a;this.Cb=b;this.w=c;this.o=417730831;this.F=8192}g=Fh.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};g.keys=function(){return vd(B(this))};g.entries=function(){return new xg(B(B(this)))};g.values=function(){return vd(B(this))};g.has=function(a){return re(this,a)};
g.forEach=function(a){for(var b=B(this),c=null,d=0,e=0;;)if(e<d){var f=c.K(null,e),h=R(f,0,null),f=R(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=B(b))ke(b)?(c=Zc(b),b=$c(b),h=c,d=N(c),c=h):(c=E(b),h=R(c,0,null),f=R(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=I(b),c=null,d=0),e=0;else return null};g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){a=wh(this.Cb,b);return null!=a?a.key:c};g.V=function(){return this.v};g.ya=function(){return new Fh(this.v,this.Cb,this.w)};g.ca=function(){return N(this.Cb)};
g.fc=function(){return 0<N(this.Cb)?Bf.a(Ce,Oc(this.Cb)):null};g.N=function(){var a=this.w;return null!=a?a:this.w=a=zd(this)};g.C=function(a,b){return ge(b)&&N(this)===N(b)&&mf(function(a){return function(b){return re(a,b)}}(this),b)};g.ka=function(){return new Fh(this.v,cc(this.Cb),0)};g.Z=function(){return Bg(this.Cb)};g.W=function(a,b){return new Fh(b,this.Cb,this.w)};g.Y=function(a,b){return new Fh(this.v,Yd.j(this.Cb,b,null),null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.G(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.J(null,c)};a.j=function(a,c,d){return this.G(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(Tb(b)))};g.g=function(a){return this.J(null,a)};g.a=function(a,b){return this.G(null,a,b)};Fh.prototype[Sb]=function(){return vd(this)};
function Me(a){if(null!=a&&(a.F&4096||a.He))return a.name;if("string"===typeof a)return a;throw Error([w("Doesn't support name: "),w(a)].join(""));}function Gh(a,b){return new Ne(null,function(){var c=B(b);if(c){var d;d=E(c);d=a.g?a.g(d):a.call(null,d);c=t(d)?P(E(c),Gh(a,F(c))):null}else c=null;return c},null,null)}function Hh(a,b,c){this.A=a;this.end=b;this.step=c}Hh.prototype.wa=function(){return 0<this.step?this.A<this.end:this.A>this.end};
Hh.prototype.next=function(){var a=this.A;this.A+=this.step;return a};function Ih(a,b,c,d,e){this.v=a;this.start=b;this.end=c;this.step=d;this.w=e;this.o=32375006;this.F=8192}g=Ih.prototype;g.toString=function(){return fd(this)};g.equiv=function(a){return this.C(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return L(this,a,0);case 2:return L(this,a,c)}throw Error("Invalid arity: "+arguments.length);};a.g=function(a){return L(this,a,0)};a.a=function(a,c){return L(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return O(this,a,N(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return O(this,b,d)}throw Error("Invalid arity: "+arguments.length);};b.g=a;b.a=function(a,b){return O(this,a,b)};return b}();g.K=function(a,b){if(b<bc(this))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};
g.Ja=function(a,b,c){return b<bc(this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};g.La=function(){return new Hh(this.start,this.end,this.step)};g.V=function(){return this.v};g.ya=function(){return new Ih(this.v,this.start,this.end,this.step,this.w)};g.Ea=function(){return 0<this.step?this.start+this.step<this.end?new Ih(this.v,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new Ih(this.v,this.start+this.step,this.end,this.step,null):null};
g.ca=function(){return Pb(Kc(this))?0:Math.ceil((this.end-this.start)/this.step)};g.N=function(){var a=this.w;return null!=a?a:this.w=a=xd(this)};g.C=function(a,b){return Od(this,b)};g.ka=function(){return Qd(G,this.v)};g.ra=function(a,b){return Dd(this,b)};g.sa=function(a,b,c){for(a=this.start;;)if(0<this.step?a<this.end:a>this.end){c=b.a?b.a(c,a):b.call(null,c,a);if(Cd(c))return J.g?J.g(c):J.call(null,c);a+=this.step}else return c};g.ta=function(){return null==Kc(this)?null:this.start};
g.za=function(){return null!=Kc(this)?new Ih(this.v,this.start+this.step,this.end,this.step,null):G};g.Z=function(){return 0<this.step?this.start<this.end?this:null:0>this.step?this.start>this.end?this:null:this.start===this.end?null:this};g.W=function(a,b){return new Ih(b,this.start,this.end,this.step,this.w)};g.Y=function(a,b){return P(b,this)};Ih.prototype[Sb]=function(){return vd(this)};
function Jh(){return function(){function a(a,b,c){return new U(null,2,5,V,[E.j?E.j(a,b,c):E.call(null,a),F.j?F.j(a,b,c):F.call(null,a)],null)}function b(a,b){return new U(null,2,5,V,[E.a?E.a(a,b):E.call(null,a),F.a?F.a(a,b):F.call(null,a)],null)}function c(a){return new U(null,2,5,V,[E.g?E.g(a):E.call(null,a),F.g?F.g(a):F.call(null,a)],null)}function d(){return new U(null,2,5,V,[E.H?E.H():E.call(null),F.H?F.H():F.call(null)],null)}var e=null,f=function(){function a(c,d,e,f){var h=null;if(3<arguments.length){for(var h=
0,A=Array(arguments.length-3);h<A.length;)A[h]=arguments[h+3],++h;h=new C(A,0)}return b.call(this,c,d,e,h)}function b(a,c,d,e){return new U(null,2,5,V,[cf(E,a,c,d,e),cf(F,a,c,d,e)],null)}a.O=3;a.T=function(a){var c=E(a);a=I(a);var d=E(a);a=I(a);var e=E(a);a=F(a);return b(c,d,e,a)};a.D=b;return a}(),e=function(e,k,l,n){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,e);case 2:return b.call(this,e,k);case 3:return a.call(this,e,k,l);default:var m=null;if(3<arguments.length){for(var m=
0,q=Array(arguments.length-3);m<q.length;)q[m]=arguments[m+3],++m;m=new C(q,0)}return f.D(e,k,l,m)}throw Error("Invalid arity: "+arguments.length);};e.O=3;e.T=f.T;e.H=d;e.g=c;e.a=b;e.j=a;e.D=f.D;return e}()}function Kh(a){a:for(var b=a;;)if(B(b))b=I(b);else break a;return a}function Lh(a,b){if("string"===typeof b){var c=a.exec(b);return null==c?null:1===N(c)?E(c):eg(c)}throw new TypeError("re-find must match against a string.");}
var Mh=function Mh(b,c){var d=Lh(b,c),e=c.search(b),f=fe(d)?E(d):d,h=Ae(c,e+N(f));return t(d)?new Ne(null,function(c,d,e,f){return function(){return P(c,B(f)?Mh(b,f):null)}}(d,e,f,h),null,null):null};
function Nh(a,b,c,d,e,f,h){var k=Gb;Gb=null==Gb?null:Gb-1;try{if(null!=Gb&&0>Gb)return Pc(a,"#");Pc(a,c);if(0===Nb.g(f))B(h)&&Pc(a,function(){var a=Oh.g(f);return t(a)?a:"..."}());else{if(B(h)){var l=E(h);b.j?b.j(l,a,f):b.call(null,l,a,f)}for(var n=I(h),m=Nb.g(f)-1;;)if(!n||null!=m&&0===m){B(n)&&0===m&&(Pc(a,d),Pc(a,function(){var a=Oh.g(f);return t(a)?a:"..."}()));break}else{Pc(a,d);var q=E(n);c=a;h=f;b.j?b.j(q,c,h):b.call(null,q,c,h);var x=I(n);c=m-1;n=x;m=c}}return Pc(a,e)}finally{Gb=k}}
function Ph(a,b){for(var c=B(b),d=null,e=0,f=0;;)if(f<e){var h=d.K(null,f);Pc(a,h);f+=1}else if(c=B(c))d=c,ke(d)?(c=Zc(d),e=$c(d),d=c,h=N(c),c=e,e=h):(h=E(d),Pc(a,h),c=I(d),d=null,e=0),f=0;else return null}var Qh={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};function Rh(a){return[w('"'),w(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return Qh[a]})),w('"')].join("")}
function Sh(a,b){var c=pe(z.a(a,Lb));return c?(c=null!=b?b.o&131072||b.Ge?!0:!1:!1)?null!=de(b):c:c}
function Th(a,b,c){if(null==a)return Pc(b,"nil");if(Sh(c,a)){Pc(b,"^");var d=de(a);X.j?X.j(d,b,c):X.call(null,d,b,c);Pc(b," ")}if(a.$d)return a.Pe(b);if(null!=a&&(a.o&2147483648||a.ea))return a.R(null,b,c);if(!0===a||!1===a||"number"===typeof a)return Pc(b,""+w(a));if(null!=a&&a.constructor===Object)return Pc(b,"#js "),d=Bf.a(function(b){return new U(null,2,5,V,[Le.g(b),a[b]],null)},le(a)),Uh.M?Uh.M(d,X,b,c):Uh.call(null,d,X,b,c);if(Ob(a))return Nh(b,X,"#js ["," ","]",c,a);if(ga(a))return t(Kb.g(c))?
Pc(b,Rh(a)):Pc(b,a);if(ia(a)){var e=a.name;c=t(function(){var a=null==e;return a?a:/^[\s\xa0]*$/.test(e)}())?"Function":e;return Ph(b,Q(["#object[",c,' "',""+w(a),'"]'],0))}if(a instanceof Date)return c=function(a,b){for(var c=""+w(a);;)if(N(c)<b)c=[w("0"),w(c)].join("");else return c},Ph(b,Q(['#inst "',""+w(a.getUTCFullYear()),"-",c(a.getUTCMonth()+1,2),"-",c(a.getUTCDate(),2),"T",c(a.getUTCHours(),2),":",c(a.getUTCMinutes(),2),":",c(a.getUTCSeconds(),2),".",c(a.getUTCMilliseconds(),3),"-",'00:00"'],
0));if(a instanceof RegExp)return Ph(b,Q(['#"',a.source,'"'],0));if(t(a.constructor.Tc))return Ph(b,Q(["#object[",a.constructor.Tc.replace(RegExp("/","g"),"."),"]"],0));e=a.constructor.name;c=t(function(){var a=null==e;return a?a:/^[\s\xa0]*$/.test(e)}())?"Object":e;return Ph(b,Q(["#object[",c," ",""+w(a),"]"],0))}function X(a,b,c){var d=Vh.g(c);return t(d)?(c=Yd.j(c,Wh,Th),d.j?d.j(a,b,c):d.call(null,a,b,c)):Th(a,b,c)}
function Yh(a,b){var c;if(ee(a))c="";else{c=w;var d=new Pa;a:{var e=new ed(d);X(E(a),e,b);for(var f=B(I(a)),h=null,k=0,l=0;;)if(l<k){var n=h.K(null,l);Pc(e," ");X(n,e,b);l+=1}else if(f=B(f))h=f,ke(h)?(f=Zc(h),k=$c(h),h=f,n=N(f),f=k,k=n):(n=E(h),Pc(e," "),X(n,e,b),f=I(h),h=null,k=0),l=0;else break a}c=""+c(d)}return c}function Zh(a){var b=Yd.j(Ib(),Kb,!1);a=Yh(a,b);Eb.g?Eb.g(a):Eb.call(null);t(!0)?(a=Ib(),Eb.g?Eb.g("\n"):Eb.call(null),a=(z.a(a,Jb),null)):a=null;return a}
function Uh(a,b,c,d){return Nh(c,function(a,c,d){var k=sc(a);b.j?b.j(k,c,d):b.call(null,k,c,d);Pc(c," ");a=tc(a);return b.j?b.j(a,c,d):b.call(null,a,c,d)},"{",", ","}",d,B(a))}C.prototype.ea=!0;C.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};Ne.prototype.ea=!0;Ne.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};kh.prototype.ea=!0;kh.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};bh.prototype.ea=!0;
bh.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};nh.prototype.ea=!0;nh.prototype.R=function(a,b,c){return Nh(b,X,"["," ","]",c,this)};zg.prototype.ea=!0;zg.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};Fh.prototype.ea=!0;Fh.prototype.R=function(a,b,c){return Nh(b,X,"#{"," ","}",c,this)};gg.prototype.ea=!0;gg.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};Ie.prototype.ea=!0;Ie.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};
Nd.prototype.ea=!0;Nd.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};gh.prototype.ea=!0;gh.prototype.R=function(a,b,c){return Uh(this,X,b,c)};dh.prototype.ea=!0;dh.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};kg.prototype.ea=!0;kg.prototype.R=function(a,b,c){return Nh(b,X,"["," ","]",c,this)};vh.prototype.ea=!0;vh.prototype.R=function(a,b,c){return Uh(this,X,b,c)};Ch.prototype.ea=!0;Ch.prototype.R=function(a,b,c){return Nh(b,X,"#{"," ","}",c,this)};
Se.prototype.ea=!0;Se.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};uf.prototype.ea=!0;uf.prototype.R=function(a,b,c){Pc(b,"#object [cljs.core.Atom ");X(new r(null,1,[$h,this.state],null),b,c);return Pc(b,"]")};zh.prototype.ea=!0;zh.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};W.prototype.ea=!0;W.prototype.R=function(a,b,c){return Nh(b,X,"["," ","]",c,this)};U.prototype.ea=!0;U.prototype.R=function(a,b,c){return Nh(b,X,"["," ","]",c,this)};pg.prototype.ea=!0;
pg.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};Fe.prototype.ea=!0;Fe.prototype.R=function(a,b){return Pc(b,"()")};qg.prototype.ea=!0;qg.prototype.R=function(a,b,c){return Nh(b,X,"#queue ["," ","]",c,B(this))};r.prototype.ea=!0;r.prototype.R=function(a,b,c){return Uh(this,X,b,c)};Ih.prototype.ea=!0;Ih.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};yh.prototype.ea=!0;yh.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};Ee.prototype.ea=!0;
Ee.prototype.R=function(a,b,c){return Nh(b,X,"("," ",")",c,this)};function ai(){}var bi=function bi(b){if(null!=b&&null!=b.Be)return b.Be(b);var c=bi[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=bi._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("IEncodeJS.-clj-\x3ejs",b);};function ci(a){return(null!=a?a.Ae||(a.vd?0:u(ai,a)):u(ai,a))?bi(a):"string"===typeof a||"number"===typeof a||a instanceof S||a instanceof rd?di.g?di.g(a):di.call(null,a):Yh(Q([a],0),Ib())}
var di=function di(b){if(null==b)return null;if(null!=b?b.Ae||(b.vd?0:u(ai,b)):u(ai,b))return bi(b);if(b instanceof S)return Me(b);if(b instanceof rd)return""+w(b);if(ie(b)){var c={};b=B(b);for(var d=null,e=0,f=0;;)if(f<e){var h=d.K(null,f),k=R(h,0,null),h=R(h,1,null);c[ci(k)]=di(h);f+=1}else if(b=B(b))ke(b)?(e=Zc(b),b=$c(b),d=e,e=N(e)):(e=E(b),d=R(e,0,null),e=R(e,1,null),c[ci(d)]=di(e),b=I(b),d=null,e=0),f=0;else break;return c}if(fe(b)){c=[];b=B(Bf.a(di,b));d=null;for(f=e=0;;)if(f<e)k=d.K(null,
f),c.push(k),f+=1;else if(b=B(b))d=b,ke(d)?(b=Zc(d),f=$c(d),d=b,e=N(b),b=f):(b=E(d),c.push(b),b=I(d),d=null,e=0),f=0;else break;return c}return b};function ei(){}var fi=function fi(b,c){if(null!=b&&null!=b.ze)return b.ze(b,c);var d=fi[p(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=fi._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw v("IEncodeClojure.-js-\x3eclj",b);};
function gi(a,b){var c=null!=b&&(b.o&64||b.ia)?af(xf,b):b,d=z.a(c,hi);return function(a,c,d,k){return function n(m){return(null!=m?m.Jf||(m.vd?0:u(ei,m)):u(ei,m))?fi(m,af(xh,b)):oe(m)?Kh(Bf.a(n,m)):fe(m)?If.a(null==m?null:cc(m),Bf.a(n,m)):Ob(m)?eg(Bf.a(n,m)):(null==m?null:m.constructor)===Object?If.a(lf,function(){return function(a,b,c,d){return function M(e){return new Ne(null,function(a,b,c,d){return function(){for(;;){var a=B(e);if(a){if(ke(a)){var b=Zc(a),c=N(b),f=Re(c);a:for(var h=0;;)if(h<c){var k=
y.a(b,h),k=new U(null,2,5,V,[d.g?d.g(k):d.call(null,k),n(m[k])],null);f.add(k);h+=1}else{b=!0;break a}return b?Te(f.Da(),M($c(a))):Te(f.Da(),null)}f=E(a);return P(new U(null,2,5,V,[d.g?d.g(f):d.call(null,f),n(m[f])],null),M(F(a)))}return null}}}(a,b,c,d),null,null)}}(a,c,d,k)(le(m))}()):m}}(b,c,d,t(d)?Le:w)(a)}function ii(a,b){this.Db=a;this.w=b;this.o=2153775104;this.F=2048}g=ii.prototype;g.toString=function(){return this.Db};g.equiv=function(a){return this.C(null,a)};
g.C=function(a,b){return b instanceof ii&&this.Db===b.Db};g.R=function(a,b){return Pc(b,[w('#uuid "'),w(this.Db),w('"')].join(""))};g.N=function(){null==this.w&&(this.w=pd(this.Db));return this.w};function ji(a,b,c){var d=Error(a);this.message=a;this.data=b;this.Ud=c;this.name=d.name;this.description=d.description;this.$e=d.$e;this.fileName=d.fileName;this.lineNumber=d.lineNumber;this.columnNumber=d.columnNumber;this.stack=d.stack;return this}ji.prototype.__proto__=Error.prototype;
ji.prototype.ea=!0;ji.prototype.R=function(a,b,c){Pc(b,"#error {:message ");X(this.message,b,c);t(this.data)&&(Pc(b,", :data "),X(this.data,b,c));t(this.Ud)&&(Pc(b,", :cause "),X(this.Ud,b,c));return Pc(b,"}")};ji.prototype.toString=function(){return fd(this)};var ki=new S(null,"response","response",-1068424192),li=new S(null,"role","role",-736691072),mi=new S(null,"button.pswp__button.pswp__button--fs","button.pswp__button.pswp__button--fs",-479010560),ni=new S(null,"description","description",-1428560544),kf=new rd(null,"meta10612","meta10612",-1013514688,null),oi=new S(null,"#drinks","#drinks",-561858976),pi=new S(null,"new-value","new-value",1087038368),qi=new S(null,"finally","finally",1589088705),ri=new S(null,"update-handler","update-handler",1389859106),
si=new S(null,"format","format",-1306924766),ti=new S(null,"div.pswp__ui.pswp__ui--hidden","div.pswp__ui.pswp__ui--hidden",1077730658),ui=new S(null,"update-attribute","update-attribute",102770530),vi=new S(null,".clp",".clp",232853955),wi=new S(null,"attribute-handlers","attribute-handlers",855454691),xi=new S(null,"namespaces","namespaces",-1444157469),yi=new S(null,"fn","fn",-1175266204),zi=new S(null,"div.pswp__share-modal.pswp__share-modal--hidden.pswp__single-tap","div.pswp__share-modal.pswp__share-modal--hidden.pswp__single-tap",
782637412),Ai=new S(null,"api","api",-899839580),Bi=new S(null,"original-text","original-text",744448452),Lb=new S(null,"meta","meta",1499536964),Ci=new S(null,"div.pswp__top-bar","div.pswp__top-bar",-914890044),Di=new S(null,"ul","ul",-1349521403),Ei=new S(null,"keywords?","keywords?",764949733),Mb=new S(null,"dup","dup",556298533),Fi=new S(null,"read","read",1140058661),Gi=new S(null,"aria-hidden","aria-hidden",399337029),Hi=new S(null,"element","element",1974019749),Ii=new S(null,"div.pswp__caption__center",
"div.pswp__caption__center",487765957),Ji=new S(null,"index","index",-1531685915),Ki=new S(null,"bottom","bottom",-1550509018),Li=new S(null,"tabindex","tabindex",338877510),Mi=new S(null,"div.pswp__preloader__cut","div.pswp__preloader__cut",1843580006),Ni=new S(null,"disabled","disabled",-1529784218),Oi=new S(null,"not-initialized","not-initialized",-1937378906),Pi=new S(null,"failure","failure",720415879),Qi=new S(null,"offset","offset",296498311),Ri=new S(null,"top","top",-1856271961),Si=new S(null,
"div.event","div.event",-839277689),yf=new S(null,"validator","validator",-1966190681),Ti=new S(null,"method","method",55703592),Ui=new S(null,"raw","raw",1604651272),Vi=new S(null,".image",".image",-297690808),Wi=new S(null,"div.day","div.day",-884629784),Xi=new S(null,"ns","ns",441598760),Yi=new S(null,"div.pswp__preloader","div.pswp__preloader",408520552),Zi=new S(null,"name","name",1843675177),$i=new S(null,"div.pswp__share-tooltip","div.pswp__share-tooltip",-1834925015),aj=new S(null,"w","w",
354169001),bj=new S(null,"#beer","#beer",-1141524311),cj=new S(null,"margin-left","margin-left",2015598377),dj=new S(null,"response-format","response-format",1664465322),ej=new S(null,"status-text","status-text",-1834235478),fj=new S(null,"width","width",-384071477),gj=new S(null,"aborted","aborted",1775972619),hj=new S(null,"processing-request","processing-request",-264947221),ij=new S(null,"params","params",710516235),jj=new S(null,"create-element-fn","create-element-fn",827380427),kj=new S(null,
"old-value","old-value",862546795),$h=new S(null,"val","val",128701612),lj=new S(null,"type","type",1174270348),mj=new S(null,"request-received","request-received",2110590540),nj=new S(null,"params-to-str","params-to-str",-934869108),oj=new S(null,"src","src",-1651076051),pj=new S(null,"#calendar-container","#calendar-container",552736141),Wh=new S(null,"fallback-impl","fallback-impl",-1501286995),qj=new S(null,"div.pswp__caption","div.pswp__caption",-531230195),rj=new S(null,"handlers","handlers",
79528781),Jb=new S(null,"flush-on-newline","flush-on-newline",-151457939),sj=new S(null,"div.pswp__container","div.pswp__container",-126857170),tj=new S(null,"button.pswp__button.pswp__button--share","button.pswp__button.pswp__button--share",2058146350),uj=new S(null,"parse-error","parse-error",255902478),vj=new S(null,"button.pswp__button.pswp__button--arrow--right","button.pswp__button.pswp__button--arrow--right",-1908670289),wj=new S(null,"title","title",636505583),xj=new S(null,"#food","#food",
1281315311),yj=new S(null,"prefix","prefix",-265908465),zj=new S(null,"headers","headers",-835030129),Aj=new S(null,"error-handler","error-handler",-484945776),Bj=new S(null,"#drinks-link","#drinks-link",-178581136),Cj=new S(null,"write","write",-1857649168),Kb=new S(null,"readably","readably",1129599760),Oh=new S(null,"more-marker","more-marker",-14717935),Dj=new S(null,"div.pswp","div.pswp",-845355823),Ej=new S(null,"keyup","keyup",-794526927),Fj=new S(null,"click","click",1912301393),Gj=new S(null,
"div.pswp__item","div.pswp__item",-939569134),Hj=new S(null,"div.pswp__preloader__donut","div.pswp__preloader__donut",1396225650),Ij=new S(null,"div.pswp__scroll-wrap","div.pswp__scroll-wrap",1877488723),Jj=new S(null,"button.pswp__button.pswp__button--close","button.pswp__button.pswp__button--close",-979514797),Kj=new S(null,"status","status",-1997798413),Lj=new S(null,"h","h",1109658740),Mj=new S(null,"response-ready","response-ready",245208276),Nb=new S(null,"print-length","print-length",1931866356),
Nj=new S(null,"writer","writer",-277568236),Oj=new S(null,"#food-link","#food-link",-1778223660),Pj=new S(null,"id","id",-1388402092),Qj=new S(null,"class","class",-2030961996),Rj=new S(null,"prop","prop",-515168332),Sj=new S(null,"image-size","image-size",1574819796),Tj=new S(null,"reader","reader",169660853),Uj=new S(null,"parse","parse",-1162164619),Vj=new S(null,"#beer-link","#beer-link",373772950),Wj=new S(null,"content-type","content-type",-508222634),Xj=new S(null,"right","right",-452581833),
Yj=new S(null,"error","error",-978969032),Zj=new S(null,"exception","exception",-335277064),ak=new S(null,"button.pswp__button.pswp__button--arrow--left","button.pswp__button.pswp__button--arrow--left",983762009),bk=new S(null,"uri","uri",-774711847),ck=new S(null,"tag","tag",-1290361223),dk=new S(null,"interceptors","interceptors",-1546782951),ek=new S(null,"target","target",253001721),fk=new S(null,"json","json",1279968570),jf=new rd(null,"quote","quote",1377916282,null),gk=new S(null,"timeout",
"timeout",-318625318),hk=new S(null,"remove-handler","remove-handler",389960218),ik=new S(null,"remove-attribute","remove-attribute",552745626),hf=new S(null,"arglists","arglists",1661989754),gf=new rd(null,"nil-iter","nil-iter",1101030523,null),jk=new S(null,"#pswp","#pswp",407034171),kk=new S(null,"body","body",-2049205669),lk=new S(null,"button.pswp__button.pswp__button--zoom","button.pswp__button.pswp__button--zoom",-38289765),mk=new S(null,"connection-established","connection-established",-1403749733),
Vh=new S(null,"alt-impl","alt-impl",670969595),ok=new S(null,"a.overlay","a.overlay",-206867621),pk=new S(null,"#month-name","#month-name",1244138876),qk=new S(null,"handler","handler",-195596612),hi=new S(null,"keywordize-keys","keywordize-keys",1310784252),rk=new S(null,"div.pswp__counter","div.pswp__counter",-781104003),sk=new S(null,"with-credentials","with-credentials",-1163127235),tk=new S(null,"href","href",-793805698),uk=new S(null,".g-container",".g-container",-1129466498),vk=new S(null,
"failed","failed",-1397425762),wk=new S(null,"div.pswp__preloader__icn","div.pswp__preloader__icn",-844032322),xk=new S(null,"div.pswp__bg","div.pswp__bg",1669805982),yk=new S(null,"height","height",1025178622),zk=new S(null,"left","left",-399115937),Ak=new S(null,"attr","attr",-604132353);function Bk(a){return Array.prototype.slice.call(a)}function Ck(a){return a instanceof S?[w(function(){var b=Ke(a);return null==b?null:[w(b),w("/")].join("")}()),w(Me(a))].join(""):a}function Dk(a,b){for(var c=0;;)if(c=a.indexOf(b,c),0<=c){var d;if(d=0===c||" "===a.charAt(c-1)){d=a.length;var e=c+b.length;d=e<=d?e===d||" "===a.charAt(e):null}if(d)return c;c+=b.length}else return null};function Ek(a,b){for(var c=new Pa,d=B(b);;)if(null!=d)c.append(""+w(E(d))),d=I(d),null!=d&&c.append(a);else return c.toString()}function Fk(a){var b=/x/;a="/(?:)/"===""+w(b)?Vd.a(eg(P("",Bf.a(w,B(a)))),""):eg((""+w(a)).split(b));if(1<N(a))a:for(;;)if(""===(null==a?null:vc(a)))a=null==a?null:wc(a);else break a;return a};var Gk=function Gk(b){return fe(b)?Ek(" ",Bf.a(Gk,b)):"string"===typeof b||b instanceof S?Me(b):null};function Hk(a,b){return t(b)?a.getAttribute(Ck(b)):null}function Ik(a){a=a.getBoundingClientRect();return new r(null,6,[Ri,a.top,Ki,a.bottom,zk,a.left,Xj,a.right,fj,a.width,yk,a.height],null)}function Jk(a){return a.parentNode}function Kk(a,b){return function(a){return function(b){return 0<=a.indexOf(b)}}(Bk(a.querySelectorAll(Gk(b))))}
function Lk(a,b,c){return E(Hf(Kk(a,c),Gh(function(b){return b!==a},Gh(ue,Ff(Jk,b)))))}function Mk(a,b){if(!of(N(b)))throw Error("Assert failed: (even? (count kvs))");for(var c=a.style,d=B(Jf(2,2,b)),e=null,f=0,h=0;;)if(h<f){var k=e.K(null,h),l=R(k,0,null),k=R(k,1,null);c.setProperty(Ck(l),k);h+=1}else if(d=B(d))ke(d)?(f=Zc(d),d=$c(d),e=f,f=N(f)):(f=E(d),e=R(f,0,null),f=R(f,1,null),c.setProperty(Ck(e),f),d=I(d),e=null,f=0),h=0;else break}
function Nk(a,b){var c=Ck(b),d=a.classList;if(t(d))d.toggle(c);else{var d=Ck(c),e=a.classList;t(e)?d=e.contains(d):(e=a.className,t(e)?(d=Dk(e,d),d=t(d)?0<=d:null):d=null);if(d)if(c=Ck(c),d=a.classList,t(d))d.remove(c);else{d=a.className;a:for(e=d;;){var f=e.length,h=Dk(e,c);if(t(h))var k=h+c.length,e=""+w(k<f?[w(e.substring(0,h)),w(e.substr(k+1))].join(""):e.substring(0,h-1));else{c=e;break a}}d!==c&&(a.className=c)}else if(d=ra(Ck(c)).split(/\s+/),B(d))if(c=a.classList,t(c))for(d=B(d),e=null,h=
f=0;;)if(h<f)k=e.K(null,h),c.add(k),h+=1;else if(d=B(d))e=d,ke(e)?(d=Zc(e),h=$c(e),e=d,f=N(d),d=h):(d=E(e),c.add(d),d=I(e),e=null,f=0),h=0;else break;else for(c=B(d),d=null,f=e=0;;)if(f<e)h=d.K(null,f),k=a.className,t(Dk(k,h))||(h=""===k?h:[w(k),w(" "),w(h)].join(""),a.className=h),f+=1;else if(c=B(c))ke(c)?(e=Zc(c),c=$c(c),d=e,e=N(e)):(d=E(c),e=a.className,t(Dk(e,d))||(d=""===e?d:[w(e),w(" "),w(d)].join(""),a.className=d),c=I(c),d=null,e=0),f=0;else break}return a}
var Ok=If.a(lf,Bf.a(function(a){var b=R(a,0,null),c=R(a,1,null);return new U(null,2,5,V,[b,Gg([c,function(a,b,c){return function(h){return function(){return function(a){var b=a.relatedTarget,c;c=a.ff;c=t(c)?c:a.currentTarget;b=t(b)?t(c.contains)?c.contains(b):t(c.compareDocumentPosition)?0!=(c.compareDocumentPosition(b)&16):null:b;return t(b)?null:h.g?h.g(a):h.call(null,a)}}(a,b,c)}}(a,b,c)],!0,!1)],null)},new r(null,2,[new S(null,"mouseenter","mouseenter",-1792413560),new S(null,"mouseover","mouseover",
-484272303),new S(null,"mouseleave","mouseleave",531566580),new S(null,"mouseout","mouseout",2049446890)],null)));function sf(a,b,c){return function(d){var e=Lk(a,d.target,b);return t(t(e)?Pb(Hk(e,Ni)):e)?(d.ff=e,c.g?c.g(d):c.call(null,d)):null}}function Pk(a,b,c){var d=a.Se;a.Se=bf(b,t(d)?d:lf,c)}
function Qk(a,b){if(!of(N(b)))throw Error("Assert failed: (even? (count type-fs))");var c;c=he(a)?Jh().call(null,a):new U(null,2,5,V,[a,null],null);var d=R(c,0,null);c=R(c,1,null);for(var e=B(Jf(2,2,b)),f=null,h=0,k=0;;)if(k<h){for(var l=f.K(null,k),n=R(l,0,null),l=R(l,1,null),n=B(z.j(Ok,n,Gg([n,ue],!0,!1))),m=null,q=0,x=0;;)if(x<q){var A=m.K(null,x),D=R(A,0,null),A=R(A,1,null),A=(t(c)?rf(d,c):ue).call(null,A.g?A.g(l):A.call(null,l));Pk(d,Kf,Q([new U(null,3,5,V,[c,D,l],null),A],0));t(d.addEventListener)?
d.addEventListener(Me(D),A):d.attachEvent(Me(D),A);x+=1}else if(n=B(n))ke(n)?(q=Zc(n),n=$c(n),m=q,q=N(q)):(q=E(n),m=R(q,0,null),q=R(q,1,null),q=(t(c)?rf(d,c):ue).call(null,q.g?q.g(l):q.call(null,l)),Pk(d,Kf,Q([new U(null,3,5,V,[c,m,l],null),q],0)),t(d.addEventListener)?d.addEventListener(Me(m),q):d.attachEvent(Me(m),q),n=I(n),m=null,q=0),x=0;else break;k+=1}else if(e=B(e)){if(ke(e))h=Zc(e),e=$c(e),f=h,h=N(h);else{f=E(e);h=R(f,0,null);f=R(f,1,null);h=B(z.j(Ok,h,Gg([h,ue],!0,!1)));k=null;for(n=l=0;;)if(n<
l)q=k.K(null,n),m=R(q,0,null),q=R(q,1,null),q=(t(c)?rf(d,c):ue).call(null,q.g?q.g(f):q.call(null,f)),Pk(d,Kf,Q([new U(null,3,5,V,[c,m,f],null),q],0)),t(d.addEventListener)?d.addEventListener(Me(m),q):d.attachEvent(Me(m),q),n+=1;else if(h=B(h))ke(h)?(l=Zc(h),h=$c(h),k=l,l=N(l)):(l=E(h),k=R(l,0,null),l=R(l,1,null),l=(t(c)?rf(d,c):ue).call(null,l.g?l.g(f):l.call(null,f)),Pk(d,Kf,Q([new U(null,3,5,V,[c,k,f],null),l],0)),t(d.addEventListener)?d.addEventListener(Me(k),l):d.attachEvent(Me(k),l),h=I(h),k=
null,l=0),n=0;else break;e=I(e);f=null;h=0}k=0}else break;return a};function Rk(){for(var a=Q([Oj,xj,Vj,bj,Bj,oi],0),a=Jf(2,2,a),b=function(){return function(a){return Ef(If.a(new U(null,1,5,V,[null],null),a))}}(a).call(null,Bf.a(E,a)),c=Bf.j(P,b,a),d=B(c),e=null,f=0,h=0;;)if(h<f){var k=e.K(null,h),l=R(k,0,null),n=R(k,1,null),m=R(k,2,null),q=document.querySelector(Gk(n)),x=document.querySelector(Gk(m)),A=t(l)?document.querySelector(Gk(l)):null;new Waypoint(di(new r(null,3,[Hi,x,qk,function(a,b,c,d,e,f,h){return function(){Nk(e,"is-active");return t(h)?Nk(h,"is-active"):
null}}(d,e,f,h,q,x,A,k,l,n,m,a,b,c),Qi,"50%"],null)));h+=1}else if(q=B(d)){k=q;if(ke(k))d=Zc(k),h=$c(k),e=d,f=N(d),d=h;else{var x=E(k),l=R(x,0,null),n=R(x,1,null),m=R(x,2,null),A=document.querySelector(Gk(n)),D=document.querySelector(Gk(m)),H=t(l)?document.querySelector(Gk(l)):null;new Waypoint(di(new r(null,3,[Hi,D,qk,function(a,b,c,d,e,f,h){return function(){Nk(e,"is-active");return t(h)?Nk(h,"is-active"):null}}(d,e,f,h,A,D,H,x,l,n,m,k,q,a,b,c),Qi,"50%"],null)));d=I(k);e=null;f=0}h=0}else return null}
function Sk(){var a=document.querySelector(Gk(vi));new Clipboard(a);Qk(a,Q([Fj,function(){return function(){return alert("WhatsApp ID copied to clipboard.")}}(a)],0))};var Tk;a:{var Uk=ba.navigator;if(Uk){var Vk=Uk.userAgent;if(Vk){Tk=Vk;break a}}Tk=""}function Wk(a){return-1!=Tk.indexOf(a)};function Xk(){0!=Yk&&(this[ja]||(this[ja]=++ka));this.xd=this.xd;this.af=this.af}var Yk=0;Xk.prototype.xd=!1;var Zk=Wk("Opera"),$k=Wk("Trident")||Wk("MSIE"),al=Wk("Edge"),bl=Wk("Gecko")&&!(-1!=Tk.toLowerCase().indexOf("webkit")&&!Wk("Edge"))&&!(Wk("Trident")||Wk("MSIE"))&&!Wk("Edge"),cl=-1!=Tk.toLowerCase().indexOf("webkit")&&!Wk("Edge");cl&&Wk("Mobile");Wk("Macintosh");Wk("Windows");Wk("Linux")||Wk("CrOS");var dl=ba.navigator||null;dl&&(dl.appVersion||"").indexOf("X11");Wk("Android");!Wk("iPhone")||Wk("iPod")||Wk("iPad");Wk("iPad");Wk("iPod");
function el(){var a=ba.document;return a?a.documentMode:void 0}var fl;a:{var gl="",hl=function(){var a=Tk;if(bl)return/rv\:([^\);]+)(\)|;)/.exec(a);if(al)return/Edge\/([\d\.]+)/.exec(a);if($k)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(cl)return/WebKit\/(\S+)/.exec(a);if(Zk)return/(?:Version)[ \/]?(\S+)/.exec(a)}();hl&&(gl=hl?hl[1]:"");if($k){var il=el();if(null!=il&&il>parseFloat(gl)){fl=String(il);break a}}fl=gl}var jl={};
function kl(a){var b;if(!(b=jl[a])){b=0;for(var c=ra(String(fl)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",k=d[f]||"",l=RegExp("(\\d*)(\\D*)","g"),n=RegExp("(\\d*)(\\D*)","g");do{var m=l.exec(h)||["","",""],q=n.exec(k)||["","",""];if(0==m[0].length&&0==q[0].length)break;b=va(0==m[1].length?0:parseInt(m[1],10),0==q[1].length?0:parseInt(q[1],10))||va(0==m[2].length,0==q[2].length)||va(m[2],q[2])}while(0==b)}b=jl[a]=0<=b}return b}
var ll=ba.document,ml=ll&&$k?el()||("CSS1Compat"==ll.compatMode?parseInt(fl,10):5):void 0;var nl;(nl=!$k)||(nl=9<=Number(ml));var ol=nl,pl=$k&&!kl("9");!cl||kl("528");bl&&kl("1.9b")||$k&&kl("8")||Zk&&kl("9.5")||cl&&kl("528");bl&&!kl("8")||$k&&kl("9");function ql(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Zb=!1;this.me=!0}ql.prototype.stopPropagation=function(){this.Zb=!0};ql.prototype.preventDefault=function(){this.defaultPrevented=!0;this.me=!1};function rl(a,b){ql.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.yc=this.state=null;a&&this.init(a,b)}pa(rl,ql);
rl.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(bl){var f;a:{try{$a(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=cl||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=cl||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.yc=a;a.defaultPrevented&&
this.preventDefault()};rl.prototype.stopPropagation=function(){rl.pe.stopPropagation.call(this);this.yc.stopPropagation?this.yc.stopPropagation():this.yc.cancelBubble=!0};rl.prototype.preventDefault=function(){rl.pe.preventDefault.call(this);var a=this.yc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,pl)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var sl="closure_listenable_"+(1E6*Math.random()|0),tl=0;function ul(a,b,c,d,e){this.listener=a;this.$c=null;this.src=b;this.type=c;this.rc=!!d;this.Jb=e;this.key=++tl;this.mc=this.Pc=!1}function vl(a){a.mc=!0;a.listener=null;a.$c=null;a.src=null;a.Jb=null};function wl(a){this.src=a;this.Ra={};this.cd=0}wl.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.Ra[f];a||(a=this.Ra[f]=[],this.cd++);var h=xl(a,b,d,e);-1<h?(b=a[h],c||(b.Pc=!1)):(b=new ul(b,this.src,f,!!d,e),b.Pc=c,a.push(b));return b};wl.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.Ra))return!1;var e=this.Ra[a];b=xl(e,b,c,d);return-1<b?(vl(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.Ra[a],this.cd--),!0):!1};
function yl(a,b){var c=b.type;if(c in a.Ra){var d=a.Ra[c],e=Wa(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(vl(b),0==a.Ra[c].length&&(delete a.Ra[c],a.cd--))}}wl.prototype.zd=function(a,b,c,d){a=this.Ra[a.toString()];var e=-1;a&&(e=xl(a,b,c,d));return-1<e?a[e]:null};wl.prototype.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return xa(this.Ra,function(a){for(var h=0;h<a.length;++h)if(!(c&&a[h].type!=d||e&&a[h].rc!=b))return!0;return!1})};
function xl(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.mc&&f.listener==b&&f.rc==!!c&&f.Jb==d)return e}return-1};var zl="closure_lm_"+(1E6*Math.random()|0),Al={},Bl=0;
function Cl(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)Cl(a,b[f],c,d,e);else if(c=Dl(c),a&&a[sl])a.listen(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=El(a);h||(a[zl]=h=new wl(a));c=h.add(b,c,!1,d,e);if(!c.$c){d=Fl();c.$c=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Gl(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Bl++}}}
function Fl(){var a=Hl,b=ol?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Il(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)Il(a,b[f],c,d,e);else c=Dl(c),a&&a[sl]?a.Ub.remove(String(b),c,d,e):a&&(a=El(a))&&(b=a.zd(b,c,!!d,e))&&Jl(b)}
function Jl(a){if(!ha(a)&&a&&!a.mc){var b=a.src;if(b&&b[sl])yl(b.Ub,a);else{var c=a.type,d=a.$c;b.removeEventListener?b.removeEventListener(c,d,a.rc):b.detachEvent&&b.detachEvent(Gl(c),d);Bl--;(c=El(b))?(yl(c,a),0==c.cd&&(c.src=null,b[zl]=null)):vl(a)}}}function Gl(a){return a in Al?Al[a]:Al[a]="on"+a}function Kl(a,b,c,d){var e=!0;if(a=El(a))if(b=a.Ra[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.rc==c&&!f.mc&&(f=Ll(f,d),e=e&&!1!==f)}return e}
function Ll(a,b){var c=a.listener,d=a.Jb||a.src;a.Pc&&Jl(a);return c.call(d,b)}
function Hl(a,b){if(a.mc)return!0;if(!ol){var c;if(!(c=b))a:{c=["window","event"];for(var d=ba,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new rl(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;!c.Zb&&0<=h;h--){c.currentTarget=e[h];var k=Kl(e[h],f,!0,c),d=d&&k}for(h=0;!c.Zb&&
h<e.length;h++)c.currentTarget=e[h],k=Kl(e[h],f,!1,c),d=d&&k}return d}return Ll(a,new rl(b,this))}function El(a){a=a[zl];return a instanceof wl?a:null}var Ml="__closure_events_fn_"+(1E9*Math.random()>>>0);function Dl(a){if(ia(a))return a;a[Ml]||(a[Ml]=function(b){return a.handleEvent(b)});return a[Ml]};function Nl(){Xk.call(this);this.Ub=new wl(this);this.ue=this;this.le=null}pa(Nl,Xk);Nl.prototype[sl]=!0;g=Nl.prototype;g.addEventListener=function(a,b,c,d){Cl(this,a,b,c,d)};g.removeEventListener=function(a,b,c,d){Il(this,a,b,c,d)};
g.dispatchEvent=function(a){var b,c=this.le;if(c)for(b=[];c;c=c.le)b.push(c);var c=this.ue,d=a.type||a;if(ga(a))a=new ql(a,c);else if(a instanceof ql)a.target=a.target||c;else{var e=a;a=new ql(d,c);Ba(a,e)}var e=!0,f;if(b)for(var h=b.length-1;!a.Zb&&0<=h;h--)f=a.currentTarget=b[h],e=Ol(f,d,!0,a)&&e;a.Zb||(f=a.currentTarget=c,e=Ol(f,d,!0,a)&&e,a.Zb||(e=Ol(f,d,!1,a)&&e));if(b)for(h=0;!a.Zb&&h<b.length;h++)f=a.currentTarget=b[h],e=Ol(f,d,!1,a)&&e;return e};
g.listen=function(a,b,c,d){return this.Ub.add(String(a),b,!1,c,d)};function Ol(a,b,c,d){b=a.Ub.Ra[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.mc&&h.rc==c){var k=h.listener,l=h.Jb||h.src;h.Pc&&yl(a.Ub,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.me}g.zd=function(a,b,c,d){return this.Ub.zd(String(a),b,c,d)};g.hasListener=function(a,b){return this.Ub.hasListener(void 0!==a?String(a):void 0,b)};function Pl(a,b,c){if(ia(a))c&&(a=na(a,c));else if(a&&"function"==typeof a.handleEvent)a=na(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:ba.setTimeout(a,b||0)};function Ql(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Rl(){this.ad=void 0}
function Sl(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==p(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Sl(a,a.ad?a.ad.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Tl(d,c),c.push(":"),Sl(a,a.ad?a.ad.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Tl(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Ul={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Vl=/\uffff/.test("￿")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Tl(a,b){b.push('"',a.replace(Vl,function(a){var b=Ul[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ul[a]=b);return b}),'"')};function Wl(a){if(a.jc&&"function"==typeof a.jc)return a.jc();if(ga(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ya(a)}
function Xl(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ea(a)||ga(a))Xa(a,b,void 0);else{var c;if(a.eb&&"function"==typeof a.eb)c=a.eb();else if(a.jc&&"function"==typeof a.jc)c=void 0;else if(ea(a)||ga(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=za(a);for(var d=Wl(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function Yl(a,b){this.zb={};this.Ha=[];this.Ib=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}g=Yl.prototype;g.jc=function(){Zl(this);for(var a=[],b=0;b<this.Ha.length;b++)a.push(this.zb[this.Ha[b]]);return a};g.eb=function(){Zl(this);return this.Ha.concat()};
g.Fa=function(a,b){if(this===a)return!0;if(this.Ib!=a.Ib)return!1;var c=b||$l;Zl(this);for(var d,e=0;d=this.Ha[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};function $l(a,b){return a===b}g.clear=function(){this.zb={};this.Ib=this.Ha.length=0};g.remove=function(a){return Object.prototype.hasOwnProperty.call(this.zb,a)?(delete this.zb[a],this.Ib--,this.Ha.length>2*this.Ib&&Zl(this),!0):!1};
function Zl(a){if(a.Ib!=a.Ha.length){for(var b=0,c=0;b<a.Ha.length;){var d=a.Ha[b];Object.prototype.hasOwnProperty.call(a.zb,d)&&(a.Ha[c++]=d);b++}a.Ha.length=c}if(a.Ib!=a.Ha.length){for(var e={},c=b=0;b<a.Ha.length;)d=a.Ha[b],Object.prototype.hasOwnProperty.call(e,d)||(a.Ha[c++]=d,e[d]=1),b++;a.Ha.length=c}}g.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.zb,a)?this.zb[a]:b};
g.set=function(a,b){Object.prototype.hasOwnProperty.call(this.zb,a)||(this.Ib++,this.Ha.push(a));this.zb[a]=b};g.addAll=function(a){var b;a instanceof Yl?(b=a.eb(),a=a.jc()):(b=za(a),a=ya(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};g.forEach=function(a,b){for(var c=this.eb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.clone=function(){return new Yl(this)};function am(a,b,c,d,e){this.reset(a,b,c,d,e)}am.prototype.ae=null;var bm=0;am.prototype.reset=function(a,b,c,d,e){"number"==typeof e||bm++;d||oa();this.Fc=a;this.Ye=b;delete this.ae};am.prototype.oe=function(a){this.Fc=a};function cm(a){this.he=a;this.ee=this.pd=this.Fc=this.Yc=null}function dm(a,b){this.name=a;this.value=b}dm.prototype.toString=function(){return this.name};var em=new dm("SEVERE",1E3),fm=new dm("INFO",800),gm=new dm("CONFIG",700),hm=new dm("FINE",500);g=cm.prototype;g.getName=function(){return this.he};g.getParent=function(){return this.Yc};g.oe=function(a){this.Fc=a};function im(a){if(a.Fc)return a.Fc;if(a.Yc)return im(a.Yc);Ta("Root logger has no level set.");return null}
g.log=function(a,b,c){if(a.value>=im(this).value)for(ia(b)&&(b=b()),a=new am(a,String(b),this.he),c&&(a.ae=c),c="log:"+a.Ye,ba.console&&(ba.console.timeStamp?ba.console.timeStamp(c):ba.console.markTimeline&&ba.console.markTimeline(c)),ba.msWriteProfilerMark&&ba.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.ee)for(var e=0,f=void 0;f=b.ee[e];e++)f(d);c=c.getParent()}};g.info=function(a,b){this.log(fm,a,b)};var jm={},km=null;
function lm(a){km||(km=new cm(""),jm[""]=km,km.oe(gm));var b;if(!(b=jm[a])){b=new cm(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=lm(a.substr(0,c));c.pd||(c.pd={});c.pd[d]=b;b.Yc=c;jm[a]=b}return b};function mm(a,b){a&&a.log(hm,b,void 0)};function nm(){}nm.prototype.Td=null;function om(a){var b;(b=a.Td)||(b={},pm(a)&&(b[0]=!0,b[1]=!0),b=a.Td=b);return b};var qm;function rm(){}pa(rm,nm);function sm(a){return(a=pm(a))?new ActiveXObject(a):new XMLHttpRequest}function pm(a){if(!a.fe&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.fe=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.fe}qm=new rm;var tm=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function um(a){Nl.call(this);this.headers=new Yl;this.gd=a||null;this.bc=!1;this.fd=this.L=null;this.ge=this.Xc="";this.kc=0;this.Ec="";this.Bc=this.Cd=this.Wc=this.yd=!1;this.nc=0;this.bd=null;this.Jc=vm;this.ed=this.cf=this.Ld=!1}pa(um,Nl);var vm="",wm=um.prototype,xm=lm("goog.net.XhrIo");wm.Sa=xm;var ym=/^https?$/i,zm=["POST","PUT"];function Am(a,b){a.Jc=b}g=um.prototype;
g.send=function(a,b,c,d){if(this.L)throw Error("[goog.net.XhrIo] Object is active with another request\x3d"+this.Xc+"; newUri\x3d"+a);b=b?b.toUpperCase():"GET";this.Xc=a;this.Ec="";this.kc=0;this.ge=b;this.yd=!1;this.bc=!0;this.L=this.gd?sm(this.gd):sm(qm);this.fd=this.gd?om(this.gd):om(qm);this.L.onreadystatechange=na(this.ke,this);this.cf&&"onprogress"in this.L&&(this.L.onprogress=na(function(a){this.je(a,!0)},this),this.L.upload&&(this.L.upload.onprogress=na(this.je,this)));try{mm(this.Sa,Bm(this,
"Opening Xhr")),this.Cd=!0,this.L.open(b,String(a),!0),this.Cd=!1}catch(f){mm(this.Sa,Bm(this,"Error opening Xhr: "+f.message));Cm(this,f);return}a=c||"";var e=this.headers.clone();d&&Xl(d,function(a,b){e.set(b,a)});d=Ya(e.eb());c=ba.FormData&&a instanceof ba.FormData;!(0<=Wa(zm,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset\x3dutf-8");e.forEach(function(a,b){this.L.setRequestHeader(b,a)},this);this.Jc&&(this.L.responseType=this.Jc);"withCredentials"in this.L&&this.L.withCredentials!==
this.Ld&&(this.L.withCredentials=this.Ld);try{Dm(this),0<this.nc&&(this.ed=Em(this.L),mm(this.Sa,Bm(this,"Will abort after "+this.nc+"ms if incomplete, xhr2 "+this.ed)),this.ed?(this.L.timeout=this.nc,this.L.ontimeout=na(this.qe,this)):this.bd=Pl(this.qe,this.nc,this)),mm(this.Sa,Bm(this,"Sending request")),this.Wc=!0,this.L.send(a),this.Wc=!1}catch(f){mm(this.Sa,Bm(this,"Send error: "+f.message)),Cm(this,f)}};function Em(a){return $k&&kl(9)&&ha(a.timeout)&&void 0!==a.ontimeout}
function Za(a){return"content-type"==a.toLowerCase()}g.qe=function(){"undefined"!=typeof aa&&this.L&&(this.Ec="Timed out after "+this.nc+"ms, aborting",this.kc=8,mm(this.Sa,Bm(this,this.Ec)),this.dispatchEvent("timeout"),this.abort(8))};function Cm(a,b){a.bc=!1;a.L&&(a.Bc=!0,a.L.abort(),a.Bc=!1);a.Ec=b;a.kc=5;Fm(a);Gm(a)}function Fm(a){a.yd||(a.yd=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
g.abort=function(a){this.L&&this.bc&&(mm(this.Sa,Bm(this,"Aborting")),this.bc=!1,this.Bc=!0,this.L.abort(),this.Bc=!1,this.kc=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Gm(this))};g.ke=function(){this.xd||(this.Cd||this.Wc||this.Bc?Hm(this):this.bf())};g.bf=function(){Hm(this)};
function Hm(a){if(a.bc&&"undefined"!=typeof aa)if(a.fd[1]&&4==Im(a)&&2==Jm(a))mm(a.Sa,Bm(a,"Local request error detected and ignored"));else if(a.Wc&&4==Im(a))Pl(a.ke,0,a);else if(a.dispatchEvent("readystatechange"),4==Im(a)){mm(a.Sa,Bm(a,"Request complete"));a.bc=!1;try{var b=Jm(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Xc).match(tm)[1]||null;if(!f&&ba.self&&ba.self.location)var h=ba.self.location.protocol,
f=h.substr(0,h.length-1);e=!ym.test(f?f.toLowerCase():"")}d=e}d?(a.dispatchEvent("complete"),a.dispatchEvent("success")):(a.kc=6,a.Ec=Km(a)+" ["+Jm(a)+"]",Fm(a))}finally{Gm(a)}}}g.je=function(a,b){this.dispatchEvent(Lm(a,"progress"));this.dispatchEvent(Lm(a,b?"downloadprogress":"uploadprogress"))};function Lm(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}}
function Gm(a){if(a.L){Dm(a);var b=a.L,c=a.fd[0]?da:null;a.L=null;a.fd=null;a.dispatchEvent("ready");try{b.onreadystatechange=c}catch(d){(a=a.Sa)&&a.log(em,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}function Dm(a){a.L&&a.ed&&(a.L.ontimeout=null);ha(a.bd)&&(ba.clearTimeout(a.bd),a.bd=null)}function Im(a){return a.L?a.L.readyState:0}function Jm(a){try{return 2<Im(a)?a.L.status:-1}catch(b){return-1}}
function Km(a){try{return 2<Im(a)?a.L.statusText:""}catch(b){return mm(a.Sa,"Can not get status: "+b.message),""}}
function Mm(a){try{if(!a.L)return null;if("response"in a.L)return a.L.response;switch(a.Jc){case vm:case "text":return a.L.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in a.L)return a.L.mozResponseArrayBuffer}var b=a.Sa;b&&b.log(em,"Response type "+a.Jc+" is not supported on this browser",void 0);return null}catch(c){return mm(a.Sa,"Can not get response: "+c.message),null}}g.getResponseHeader=function(a){return this.L&&4==Im(this)?this.L.getResponseHeader(a):void 0};
g.getAllResponseHeaders=function(){return this.L&&4==Im(this)?this.L.getAllResponseHeaders():""};function Bm(a,b){return b+" ["+a.ge+" "+a.Xc+" "+Jm(a)+"]"};var Nm=function Nm(b,c,d){if(null!=b&&null!=b.hd)return b.hd(b,c,d);var e=Nm[p(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=Nm._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw v("AjaxImpl.-js-ajax-request",b);},Om=function Om(b){if(null!=b&&null!=b.ld)return b.ld(b);var c=Om[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Om._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("AjaxResponse.-status",b);},Pm=function Pm(b){if(null!=b&&null!=b.md)return b.md(b);
var c=Pm[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Pm._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("AjaxResponse.-status-text",b);},Qm=function Qm(b){if(null!=b&&null!=b.jd)return b.jd(b);var c=Qm[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Qm._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("AjaxResponse.-body",b);},Rm=function Rm(b,c){if(null!=b&&null!=b.kd)return b.kd(b,c);var d=Rm[p(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,
b,c);d=Rm._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw v("AjaxResponse.-get-response-header",b);},Sm=function Sm(b){if(null!=b&&null!=b.nd)return b.nd(b);var c=Sm[p(null==b?null:b)];if(null!=c)return c.g?c.g(b):c.call(null,b);c=Sm._;if(null!=c)return c.g?c.g(b):c.call(null,b);throw v("AjaxResponse.-was-aborted",b);},Tm=function Tm(b,c){if(null!=b&&null!=b.pc)return b.pc(b,c);var d=Tm[p(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Tm._;if(null!=d)return d.a?d.a(b,c):
d.call(null,b,c);throw v("Interceptor.-process-request",b);},Um=function Um(b,c){if(null!=b&&null!=b.qc)return b.qc(b,c);var d=Um[p(null==b?null:b)];if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);d=Um._;if(null!=d)return d.a?d.a(b,c):d.call(null,b,c);throw v("Interceptor.-process-response",b);};g=XMLHttpRequest.prototype;
g.hd=function(a,b,c){var d=null!=b&&(b.o&64||b.ia)?af(xf,b):b,e=z.a(d,bk),f=z.a(d,Ti);a=z.a(d,kk);var h=z.a(d,zj),k=z.j(d,gk,0),l=z.j(d,sk,!1),n=z.a(d,dj);this.withCredentials=l;this.onreadystatechange=function(a){return function(b){return td.a(Mj,(new r(null,5,[0,Oi,1,mk,2,mj,3,hj,4,Mj],null)).call(null,b.target.readyState))?c.g?c.g(a):c.call(null,a):null}}(this,b,d,e,f,a,h,k,l,n);this.open(f,e,!0);this.timeout=k;b=lj.g(n);t(b)&&(this.responseType=Me(b));b=B(h);h=null;for(e=d=0;;)if(e<d)k=h.K(null,
e),f=R(k,0,null),k=R(k,1,null),this.setRequestHeader(f,k),e+=1;else if(b=B(b))ke(b)?(d=Zc(b),b=$c(b),h=d,d=N(d)):(d=E(b),h=R(d,0,null),d=R(d,1,null),this.setRequestHeader(h,d),b=I(b),h=null,d=0),e=0;else break;this.send(t(a)?a:"");return this};g.jd=function(){return this.response};g.ld=function(){return this.status};g.md=function(){return this.statusText};g.kd=function(a,b){return this.getResponseHeader(b)};g.nd=function(){return td.a(0,this.readyState)};var Vm="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){return za(a)},Wm="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===p(a)};function Xm(){return Math.round(15*Math.random()).toString(16)};var Ym=1;function Zm(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(Wm(a)){if(Wm(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!Zm(a[c],b[c]))return!1;return!0}return!1}if(a.Ua)return a.Ua(b);if(null!=b&&"object"===typeof b){if(b.Ua)return b.Ua(a);var c=0,d=Vm(b).length,e;for(e in a)if(a.hasOwnProperty(e)&&(c++,!b.hasOwnProperty(e)||!Zm(a[e],b[e])))return!1;return c===d}}return!1}function $m(a,b){return a^b+2654435769+(a<<6)+(a>>2)}var an={},bn=0;
function cn(a){var b=0;if(null!=a.forEach)a.forEach(function(a,c){b=(b+(dn(c)^dn(a)))%4503599627370496});else for(var c=Vm(a),d=0;d<c.length;d++)var e=c[d],f=a[e],b=(b+(dn(e)^dn(f)))%4503599627370496;return b}function en(a){var b=0;if(Wm(a))for(var c=0;c<a.length;c++)b=$m(b,dn(a[c]));else a.forEach&&a.forEach(function(a){b=$m(b,dn(a))});return b}
function dn(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":var b=an[a];if(null==b){for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;bn++;256<=bn&&(an={},bn=1);an[a]=b}a=b;return a;case "function":return b=a.transit$hashCode$,b||(b=Ym,"undefined"!=typeof Object.defineProperty?Object.defineProperty(a,"transit$hashCode$",{value:b,enumerable:!1}):a.transit$hashCode$=b,Ym++),b;default:return a instanceof Date?a.valueOf():Wm(a)?
en(a):a.Ya?a.Ya():cn(a)}};var fn="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function gn(a,b){this.tag=a;this.U=b;this.ga=-1}gn.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.U+"]"};gn.prototype.equiv=function(a){return Zm(this,a)};gn.prototype.equiv=gn.prototype.equiv;gn.prototype.Ua=function(a){return a instanceof gn?this.tag===a.tag&&Zm(this.U,a.U):!1};gn.prototype.Ya=function(){-1===this.ga&&(this.ga=$m(dn(this.tag),dn(this.U)));return this.ga};function hn(a,b){return new gn(a,b)}
var jn=ob("9007199254740991"),kn=ob("-9007199254740991");cb.prototype.equiv=function(a){return Zm(this,a)};cb.prototype.equiv=cb.prototype.equiv;cb.prototype.Ua=function(a){return a instanceof cb&&this.Fa(a)};cb.prototype.Ya=function(){return this.Lc()};function ln(a){this.qa=a;this.ga=-1}ln.prototype.toString=function(){return":"+this.qa};ln.prototype.namespace=function(){var a=this.qa.indexOf("/");return-1!=a?this.qa.substring(0,a):null};
ln.prototype.name=function(){var a=this.qa.indexOf("/");return-1!=a?this.qa.substring(a+1,this.qa.length):this.qa};ln.prototype.equiv=function(a){return Zm(this,a)};ln.prototype.equiv=ln.prototype.equiv;ln.prototype.Ua=function(a){return a instanceof ln&&this.qa==a.qa};ln.prototype.Ya=function(){-1===this.ga&&(this.ga=dn(this.qa));return this.ga};function nn(a){this.qa=a;this.ga=-1}nn.prototype.namespace=function(){var a=this.qa.indexOf("/");return-1!=a?this.qa.substring(0,a):null};
nn.prototype.name=function(){var a=this.qa.indexOf("/");return-1!=a?this.qa.substring(a+1,this.qa.length):this.qa};nn.prototype.toString=function(){return this.qa};nn.prototype.equiv=function(a){return Zm(this,a)};nn.prototype.equiv=nn.prototype.equiv;nn.prototype.Ua=function(a){return a instanceof nn&&this.qa==a.qa};nn.prototype.Ya=function(){-1===this.ga&&(this.ga=dn(this.qa));return this.ga};
function on(a,b,c){var d="";c=c||b+1;for(var e=8*(7-b),f=fb(255).shiftLeft(e);b<c;b++,e-=8,f=Bb(f,8)){var h=Bb(a.Pd(f),e).toString(16);1==h.length&&(h="0"+h);d+=h}return d}function pn(a,b){this.Bd=a;this.Gd=b;this.ga=-1}pn.prototype.toString=function(){var a,b=this.Bd,c=this.Gd;a=""+(on(b,0,4)+"-");a+=on(b,4,6)+"-";a+=on(b,6,8)+"-";a+=on(c,0,2)+"-";return a+=on(c,2,8)};pn.prototype.equiv=function(a){return Zm(this,a)};pn.prototype.equiv=pn.prototype.equiv;
pn.prototype.Ua=function(a){return a instanceof pn&&this.Bd.Fa(a.Bd)&&this.Gd.Fa(a.Gd)};pn.prototype.Ya=function(){-1===this.ga&&(this.ga=dn(this.toString()));return this.ga};Date.prototype.Ua=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.Ya=function(){return this.valueOf()};function qn(a,b){this.entries=a;this.type=b||0;this.la=0}
qn.prototype.next=function(){if(this.la<this.entries.length){var a=null,a=0===this.type?this.entries[this.la]:1===this.type?this.entries[this.la+1]:[this.entries[this.la],this.entries[this.la+1]],a={value:a,done:!1};this.la+=2;return a}return{value:null,done:!0}};qn.prototype.next=qn.prototype.next;qn.prototype[fn]=function(){return this};function rn(a,b){this.map=a;this.type=b||0;this.keys=this.map.eb();this.la=0;this.Qb=null;this.Eb=0}
rn.prototype.next=function(){if(this.la<this.map.size){null!=this.Qb&&this.Eb<this.Qb.length||(this.Qb=this.map.map[this.keys[this.la]],this.Eb=0);var a=null,a=0===this.type?this.Qb[this.Eb]:1===this.type?this.Qb[this.Eb+1]:[this.Qb[this.Eb],this.Qb[this.Eb+1]],a={value:a,done:!1};this.la++;this.Eb+=2;return a}return{value:null,done:!0}};rn.prototype.next=rn.prototype.next;rn.prototype[fn]=function(){return this};
function sn(a,b){if(a instanceof Y&&(b instanceof Z||b instanceof Y)){if(a.size!==b.size)return!1;for(var c in a.map)for(var d=a.map[c],e=0;e<d.length;e+=2)if(!Zm(d[e+1],b.get(d[e])))return!1;return!0}if(a instanceof Z&&(b instanceof Z||b instanceof Y)){if(a.size!==b.size)return!1;c=a.da;for(e=0;e<c.length;e+=2)if(!Zm(c[e+1],b.get(c[e])))return!1;return!0}if(null!=b&&"object"===typeof b&&(e=Vm(b),c=e.length,a.size===c)){for(d=0;d<c;d++){var f=e[d];if(!a.has(f)||!Zm(b[f],a.get(f)))return!1}return!0}return!1}
function tn(a){return null==a?"null":"array"==p(a)?"["+a.toString()+"]":ga(a)?'"'+a+'"':a.toString()}function un(a){var b=0,c="TransitMap {";a.forEach(function(d,e){c+=tn(e)+" \x3d\x3e "+tn(d);b<a.size-1&&(c+=", ");b++});return c+"}"}function vn(a){var b=0,c="TransitSet {";a.forEach(function(d){c+=tn(d);b<a.size-1&&(c+=", ");b++});return c+"}"}function Z(a){this.da=a;this.ba=null;this.ga=-1;this.size=a.length/2;this.Md=0}Z.prototype.toString=function(){return un(this)};Z.prototype.inspect=function(){return this.toString()};
function wn(a){if(a.ba)throw Error("Invalid operation, already converted");if(8>a.size)return!1;a.Md++;return 32<a.Md?(a.ba=xn(a.da,!1,!0),a.da=[],!0):!1}Z.prototype.clear=function(){this.ga=-1;this.ba?this.ba.clear():this.da=[];this.size=0};Z.prototype.clear=Z.prototype.clear;Z.prototype.keys=function(){return this.ba?this.ba.keys():new qn(this.da,0)};Z.prototype.keys=Z.prototype.keys;
Z.prototype.Wb=function(){if(this.ba)return this.ba.Wb();for(var a=[],b=0,c=0;c<this.da.length;b++,c+=2)a[b]=this.da[c];return a};Z.prototype.keySet=Z.prototype.Wb;Z.prototype.entries=function(){return this.ba?this.ba.entries():new qn(this.da,2)};Z.prototype.entries=Z.prototype.entries;Z.prototype.values=function(){return this.ba?this.ba.values():new qn(this.da,1)};Z.prototype.values=Z.prototype.values;
Z.prototype.forEach=function(a){if(this.ba)this.ba.forEach(a);else for(var b=0;b<this.da.length;b+=2)a(this.da[b+1],this.da[b])};Z.prototype.forEach=Z.prototype.forEach;Z.prototype.get=function(a,b){if(this.ba)return this.ba.get(a);if(wn(this))return this.get(a);for(var c=0;c<this.da.length;c+=2)if(Zm(this.da[c],a))return this.da[c+1];return b};Z.prototype.get=Z.prototype.get;
Z.prototype.has=function(a){if(this.ba)return this.ba.has(a);if(wn(this))return this.has(a);for(var b=0;b<this.da.length;b+=2)if(Zm(this.da[b],a))return!0;return!1};Z.prototype.has=Z.prototype.has;Z.prototype.set=function(a,b){this.ga=-1;if(this.ba)this.ba.set(a,b),this.size=this.ba.size;else{for(var c=0;c<this.da.length;c+=2)if(Zm(this.da[c],a)){this.da[c+1]=b;return}this.da.push(a);this.da.push(b);this.size++;32<this.size&&(this.ba=xn(this.da,!1,!0),this.da=null)}};Z.prototype.set=Z.prototype.set;
Z.prototype["delete"]=function(a){this.ga=-1;if(this.ba)return a=this.ba["delete"](a),this.size=this.ba.size,a;for(var b=0;b<this.da.length;b+=2)if(Zm(this.da[b],a))return a=this.da[b+1],this.da.splice(b,2),this.size--,a};Z.prototype.clone=function(){var a=xn();this.forEach(function(b,c){a.set(c,b)});return a};Z.prototype.clone=Z.prototype.clone;Z.prototype[fn]=function(){return this.entries()};Z.prototype.Ya=function(){if(this.ba)return this.ba.Ya();-1===this.ga&&(this.ga=cn(this));return this.ga};
Z.prototype.Ua=function(a){return this.ba?sn(this.ba,a):sn(this,a)};function Y(a,b,c){this.map=b||{};this.ac=a||[];this.size=c||0;this.ga=-1}Y.prototype.toString=function(){return un(this)};Y.prototype.inspect=function(){return this.toString()};Y.prototype.clear=function(){this.ga=-1;this.map={};this.ac=[];this.size=0};Y.prototype.clear=Y.prototype.clear;Y.prototype.eb=function(){return null!=this.ac?this.ac:Vm(this.map)};
Y.prototype["delete"]=function(a){this.ga=-1;this.ac=null;for(var b=dn(a),c=this.map[b],d=0;d<c.length;d+=2)if(Zm(a,c[d]))return a=c[d+1],c.splice(d,2),0===c.length&&delete this.map[b],this.size--,a};Y.prototype.entries=function(){return new rn(this,2)};Y.prototype.entries=Y.prototype.entries;Y.prototype.forEach=function(a){for(var b=this.eb(),c=0;c<b.length;c++)for(var d=this.map[b[c]],e=0;e<d.length;e+=2)a(d[e+1],d[e],this)};Y.prototype.forEach=Y.prototype.forEach;
Y.prototype.get=function(a,b){var c=dn(a),c=this.map[c];if(null!=c)for(var d=0;d<c.length;d+=2){if(Zm(a,c[d]))return c[d+1]}else return b};Y.prototype.get=Y.prototype.get;Y.prototype.has=function(a){var b=dn(a),b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2)if(Zm(a,b[c]))return!0;return!1};Y.prototype.has=Y.prototype.has;Y.prototype.keys=function(){return new rn(this,0)};Y.prototype.keys=Y.prototype.keys;
Y.prototype.Wb=function(){for(var a=this.eb(),b=[],c=0;c<a.length;c++)for(var d=this.map[a[c]],e=0;e<d.length;e+=2)b.push(d[e]);return b};Y.prototype.keySet=Y.prototype.Wb;Y.prototype.set=function(a,b){this.ga=-1;var c=dn(a),d=this.map[c];if(null==d)this.ac&&this.ac.push(c),this.map[c]=[a,b],this.size++;else{for(var c=!0,e=0;e<d.length;e+=2)if(Zm(b,d[e])){c=!1;d[e]=b;break}c&&(d.push(a),d.push(b),this.size++)}};Y.prototype.set=Y.prototype.set;Y.prototype.values=function(){return new rn(this,1)};
Y.prototype.values=Y.prototype.values;Y.prototype.clone=function(){var a=xn();this.forEach(function(b,c){a.set(c,b)});return a};Y.prototype.clone=Y.prototype.clone;Y.prototype[fn]=function(){return this.entries()};Y.prototype.Ya=function(){-1===this.ga&&(this.ga=cn(this));return this.ga};Y.prototype.Ua=function(a){return sn(this,a)};
function xn(a,b,c){a=a||[];b=!1===b?b:!0;if((!0!==c||!c)&&64>=a.length){if(b){var d=a;a=[];for(b=0;b<d.length;b+=2){var e=!1;for(c=0;c<a.length;c+=2)if(Zm(a[c],d[b])){a[c+1]=d[b+1];e=!0;break}e||(a.push(d[b]),a.push(d[b+1]))}}return new Z(a)}var d={},e=[],f=0;for(b=0;b<a.length;b+=2){c=dn(a[b]);var h=d[c];if(null==h)e.push(c),d[c]=[a[b],a[b+1]],f++;else{var k=!0;for(c=0;c<h.length;c+=2)if(Zm(h[c],a[b])){h[c+1]=a[b+1];k=!1;break}k&&(h.push(a[b]),h.push(a[b+1]),f++)}}return new Y(e,d,f)}
function yn(a){this.map=a;this.size=a.size}yn.prototype.toString=function(){return vn(this)};yn.prototype.inspect=function(){return this.toString()};yn.prototype.add=function(a){this.map.set(a,a);this.size=this.map.size};yn.prototype.add=yn.prototype.add;yn.prototype.clear=function(){this.map=new Y;this.size=0};yn.prototype.clear=yn.prototype.clear;yn.prototype["delete"]=function(a){a=this.map["delete"](a);this.size=this.map.size;return a};yn.prototype.entries=function(){return this.map.entries()};
yn.prototype.entries=yn.prototype.entries;yn.prototype.forEach=function(a){var b=this;this.map.forEach(function(c,d){a(d,b)})};yn.prototype.forEach=yn.prototype.forEach;yn.prototype.has=function(a){return this.map.has(a)};yn.prototype.has=yn.prototype.has;yn.prototype.keys=function(){return this.map.keys()};yn.prototype.keys=yn.prototype.keys;yn.prototype.Wb=function(){return this.map.Wb()};yn.prototype.keySet=yn.prototype.Wb;yn.prototype.values=function(){return this.map.values()};
yn.prototype.values=yn.prototype.values;yn.prototype.clone=function(){var a=zn();this.forEach(function(b){a.add(b)});return a};yn.prototype.clone=yn.prototype.clone;yn.prototype[fn]=function(){return this.values()};yn.prototype.Ua=function(a){if(a instanceof yn){if(this.size===a.size)return Zm(this.map,a.map)}else return!1};yn.prototype.Ya=function(){return dn(this.map)};
function zn(a){a=a||[];for(var b={},c=[],d=0,e=0;e<a.length;e++){var f=dn(a[e]),h=b[f];if(null==h)c.push(f),b[f]=[a[e],a[e]],d++;else{for(var f=!0,k=0;k<h.length;k+=2)if(Zm(h[k],a[e])){f=!1;break}f&&(h.push(a[e]),h.push(a[e]),d++)}}return new yn(new Y(c,b,d))};function An(a,b){if(3<a.length){if(b)return!0;var c=a.charAt(1);return"~"===a.charAt(0)?":"===c||"$"===c||"#"===c:!1}return!1}function Bn(a){var b=Math.floor(a/44);a=String.fromCharCode(a%44+48);return 0===b?"^"+a:"^"+String.fromCharCode(b+48)+a}function Cn(){this.ve=this.zc=this.la=0;this.cache={}}
Cn.prototype.write=function(a,b){if(An(a,b)){4096===this.ve?(this.clear(),this.zc=0,this.cache={}):1936===this.la&&this.clear();var c=this.cache[a];return null==c?(this.cache[a]=[Bn(this.la),this.zc],this.la++,a):c[1]!=this.zc?(c[1]=this.zc,c[0]=Bn(this.la),this.la++,a):c[0]}return a};Cn.prototype.clear=function(){this.la=0;this.zc++};function Dn(){this.la=0;this.cache=[]}Dn.prototype.write=function(a){1936==this.la&&(this.la=0);this.cache[this.la]=a;this.la++;return a};
Dn.prototype.read=function(a){return this.cache[2===a.length?a.charCodeAt(1)-48:44*(a.charCodeAt(1)-48)+(a.charCodeAt(2)-48)]};Dn.prototype.clear=function(){this.la=0};function En(a){this.Ma=a}
function Fn(a){this.options=a||{};this.va={};for(var b in this.defaults.va)this.va[b]=this.defaults.va[b];for(b in this.options.handlers){a:{switch(b){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":a=!0;break a}a=!1}if(a)throw Error('Cannot override handler for ground type "'+b+'"');this.va[b]=this.options.handlers[b]}this.Zc=null!=this.options.preferStrings?this.options.preferStrings:this.defaults.Zc;this.Jd=null!=this.options.preferBuffers?this.options.preferBuffers:
this.defaults.Jd;this.wd=this.options.defaultHandler||this.defaults.wd;this.Va=this.options.mapBuilder;this.cc=this.options.arrayBuilder}
Fn.prototype.defaults={va:{_:function(){return null},"?":function(a){return"t"===a},b:function(a,b){var c;if(b&&!1===b.Jd||"undefined"==typeof Buffer)if("undefined"!=typeof Uint8Array){if("undefined"!=typeof atob)c=atob(a);else{c=String(a).replace(/=+$/,"");if(1==c.length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var d=0,e,f,h=0,k="";f=c.charAt(h++);~f&&(e=d%4?64*e+f:f,d++%4)?k+=String.fromCharCode(255&e>>(-2*d&6)):0)f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".indexOf(f);
c=k}d=c.length;e=new Uint8Array(d);for(f=0;f<d;f++)e[f]=c.charCodeAt(f);c=e}else c=hn("b",a);else c=new Buffer(a,"base64");return c},i:function(a){"number"===typeof a||a instanceof cb||(a=ob(a,10),a=a.Vc(jn)||a.lc(kn)?a:a.cb());return a},n:function(a){return hn("n",a)},d:function(a){return parseFloat(a)},f:function(a){return hn("f",a)},c:function(a){return a},":":function(a){return new ln(a)},$:function(a){return new nn(a)},r:function(a){return hn("r",a)},z:function(a){a:switch(a){case "-INF":a=-Infinity;
break a;case "INF":a=Infinity;break a;case "NaN":a=NaN;break a;default:throw Error("Invalid special double value "+a);}return a},"'":function(a){return a},m:function(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)},t:function(a){return new Date(a)},u:function(a){a=a.replace(/-/g,"");for(var b=null,c=null,d=c=0,e=24,f=0,f=c=0,e=24;8>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;f=8;for(e=24;16>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;b=nb(d,c);c=0;f=16;for(e=24;24>f;f+=
2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;for(e=f=24;32>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;c=nb(d,c);return new pn(b,c)},set:function(a){return zn(a)},list:function(a){return hn("list",a)},link:function(a){return hn("link",a)},cmap:function(a){return xn(a,!1)}},wd:function(a,b){return hn(a,b)},Zc:!0,Jd:!0};
Fn.prototype.decode=function(a,b,c,d){if(null==a)return null;switch(typeof a){case "string":return An(a,c)?(a=Gn(this,a),b&&b.write(a,c),b=a):b="^"===a.charAt(0)&&" "!==a.charAt(1)?b.read(a,c):Gn(this,a),b;case "object":if(Wm(a))if("^ "===a[0])if(this.Va)if(17>a.length&&this.Va.Vb){d=[];for(c=1;c<a.length;c+=2)d.push(this.decode(a[c],b,!0,!1)),d.push(this.decode(a[c+1],b,!1,!1));b=this.Va.Vb(d,a)}else{d=this.Va.init(a);for(c=1;c<a.length;c+=2)d=this.Va.add(d,this.decode(a[c],b,!0,!1),this.decode(a[c+
1],b,!1,!1),a);b=this.Va.Uc(d,a)}else{d=[];for(c=1;c<a.length;c+=2)d.push(this.decode(a[c],b,!0,!1)),d.push(this.decode(a[c+1],b,!1,!1));b=xn(d,!1)}else b=Hn(this,a,b,c,d);else{c=Vm(a);var e=c[0];if((d=1==c.length?this.decode(e,b,!1,!1):null)&&d instanceof En)a=a[e],c=this.va[d.Ma],b=null!=c?c(this.decode(a,b,!1,!0),this):hn(d.Ma,this.decode(a,b,!1,!1));else if(this.Va)if(16>c.length&&this.Va.Vb){var f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.decode(e,b,!0,!1)),f.push(this.decode(a[e],b,!1,!1));
b=this.Va.Vb(f,a)}else{f=this.Va.init(a);for(d=0;d<c.length;d++)e=c[d],f=this.Va.add(f,this.decode(e,b,!0,!1),this.decode(a[e],b,!1,!1),a);b=this.Va.Uc(f,a)}else{f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.decode(e,b,!0,!1)),f.push(this.decode(a[e],b,!1,!1));b=xn(f,!1)}}return b}return a};Fn.prototype.decode=Fn.prototype.decode;
function Hn(a,b,c,d,e){if(e){var f=[];for(e=0;e<b.length;e++)f.push(a.decode(b[e],c,d,!1));return f}f=c&&c.la;if(2===b.length&&"string"===typeof b[0]&&(e=a.decode(b[0],c,!1,!1))&&e instanceof En)return b=b[1],f=a.va[e.Ma],null!=f?f=f(a.decode(b,c,d,!0),a):hn(e.Ma,a.decode(b,c,d,!1));c&&f!=c.la&&(c.la=f);if(a.cc){if(32>=b.length&&a.cc.Vb){f=[];for(e=0;e<b.length;e++)f.push(a.decode(b[e],c,d,!1));return a.cc.Vb(f,b)}f=a.cc.init(b);for(e=0;e<b.length;e++)f=a.cc.add(f,a.decode(b[e],c,d,!1),b);return a.cc.Uc(f,
b)}f=[];for(e=0;e<b.length;e++)f.push(a.decode(b[e],c,d,!1));return f}function Gn(a,b){if("~"===b.charAt(0)){var c=b.charAt(1);if("~"===c||"^"===c||"`"===c)return b.substring(1);if("#"===c)return new En(b.substring(2));var d=a.va[c];return null==d?a.wd(c,b.substring(2)):d(b.substring(2),a)}return b};function In(a){this.Re=new Fn(a)}function Jn(a,b){this.gf=a;this.options=b||{};this.cache=this.options.cache?this.options.cache:new Dn}Jn.prototype.read=function(a){var b=this.cache;a=this.gf.Re.decode(JSON.parse(a),b);this.cache.clear();return a};Jn.prototype.read=Jn.prototype.read;var Kn=0,Ln=(8|3&Math.round(14*Math.random())).toString(16),Mn="transit$guid$"+(Xm()+Xm()+Xm()+Xm()+Xm()+Xm()+Xm()+Xm()+"-"+Xm()+Xm()+Xm()+Xm()+"-4"+Xm()+Xm()+Xm()+"-"+Ln+Xm()+Xm()+Xm()+"-"+Xm()+Xm()+Xm()+Xm()+Xm()+Xm()+Xm()+Xm()+Xm()+Xm()+Xm()+Xm());
function Nn(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a[Mn];null==b&&("undefined"!=typeof Object.defineProperty?(b=++Kn,Object.defineProperty(a,Mn,{value:b,enumerable:!1})):a[Mn]=b=++Kn);return b}function On(a,b){for(var c=a.toString(),d=c.length;d<b;d++)c="0"+c;return c}function Pn(){}Pn.prototype.tag=function(){return"_"};Pn.prototype.U=function(){return null};
Pn.prototype.oa=function(){return"null"};function Qn(){}Qn.prototype.tag=function(){return"s"};Qn.prototype.U=function(a){return a};Qn.prototype.oa=function(a){return a};function Rn(){}Rn.prototype.tag=function(){return"i"};Rn.prototype.U=function(a){return a};Rn.prototype.oa=function(a){return a.toString()};function Sn(){}Sn.prototype.tag=function(){return"i"};Sn.prototype.U=function(a){return a.toString()};Sn.prototype.oa=function(a){return a.toString()};function Tn(){}Tn.prototype.tag=function(){return"?"};
Tn.prototype.U=function(a){return a};Tn.prototype.oa=function(a){return a.toString()};function Un(){}Un.prototype.tag=function(){return"array"};Un.prototype.U=function(a){return a};Un.prototype.oa=function(){return null};function Vn(){}Vn.prototype.tag=function(){return"map"};Vn.prototype.U=function(a){return a};Vn.prototype.oa=function(){return null};function Wn(){}Wn.prototype.tag=function(){return"t"};
Wn.prototype.U=function(a){return a.getUTCFullYear()+"-"+On(a.getUTCMonth()+1,2)+"-"+On(a.getUTCDate(),2)+"T"+On(a.getUTCHours(),2)+":"+On(a.getUTCMinutes(),2)+":"+On(a.getUTCSeconds(),2)+"."+On(a.getUTCMilliseconds(),3)+"Z"};Wn.prototype.oa=function(a,b){return b.U(a)};function Xn(){}Xn.prototype.tag=function(){return"m"};Xn.prototype.U=function(a){return a.valueOf()};Xn.prototype.oa=function(a){return a.valueOf().toString()};function Yn(){}Yn.prototype.tag=function(){return"u"};Yn.prototype.U=function(a){return a.toString()};
Yn.prototype.oa=function(a){return a.toString()};function Zn(){}Zn.prototype.tag=function(){return":"};Zn.prototype.U=function(a){return a.qa};Zn.prototype.oa=function(a,b){return b.U(a)};function $n(){}$n.prototype.tag=function(){return"$"};$n.prototype.U=function(a){return a.qa};$n.prototype.oa=function(a,b){return b.U(a)};function ao(){}ao.prototype.tag=function(a){return a.tag};ao.prototype.U=function(a){return a.U};ao.prototype.oa=function(){return null};function bo(){}bo.prototype.tag=function(){return"set"};
bo.prototype.U=function(a){var b=[];a.forEach(function(a){b.push(a)});return hn("array",b)};bo.prototype.oa=function(){return null};function co(){}co.prototype.tag=function(){return"map"};co.prototype.U=function(a){return a};co.prototype.oa=function(){return null};function eo(){}eo.prototype.tag=function(){return"map"};eo.prototype.U=function(a){return a};eo.prototype.oa=function(){return null};function fo(){}fo.prototype.tag=function(){return"b"};fo.prototype.U=function(a){return a.toString("base64")};
fo.prototype.oa=function(){return null};function go(){}go.prototype.tag=function(){return"b"};
go.prototype.U=function(a){for(var b=0,c=a.length,d="",e=null;b<c;)e=a.subarray(b,Math.min(b+32768,c)),d+=String.fromCharCode.apply(null,e),b+=32768;var f;if("undefined"!=typeof btoa)f=btoa(d);else{a=String(d);c=0;d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d";for(e="";a.charAt(c|0)||(d="\x3d",c%1);e+=d.charAt(63&f>>8-c%1*8)){b=a.charCodeAt(c+=.75);if(255<b)throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");f=f<<8|b}f=
e}return f};go.prototype.oa=function(){return null};
function ho(){this.va={};this.set(null,new Pn);this.set(String,new Qn);this.set(Number,new Rn);this.set(cb,new Sn);this.set(Boolean,new Tn);this.set(Array,new Un);this.set(Object,new Vn);this.set(Date,new Xn);this.set(pn,new Yn);this.set(ln,new Zn);this.set(nn,new $n);this.set(gn,new ao);this.set(yn,new bo);this.set(Z,new co);this.set(Y,new eo);"undefined"!=typeof Buffer&&this.set(Buffer,new fo);"undefined"!=typeof Uint8Array&&this.set(Uint8Array,new go)}
ho.prototype.get=function(a){var b=null,b="string"===typeof a?this.va[a]:this.va[Nn(a)];return null!=b?b:this.va["default"]};ho.prototype.get=ho.prototype.get;ho.prototype.set=function(a,b){var c;if(c="string"===typeof a)a:{switch(a){case "null":case "string":case "boolean":case "number":case "array":case "map":c=!1;break a}c=!0}c?this.va[a]=b:this.va[Nn(a)]=b};function io(a){this.Nb=a||{};this.Zc=null!=this.Nb.preferStrings?this.Nb.preferStrings:!0;this.ie=this.Nb.objectBuilder||null;this.va=new ho;if(a=this.Nb.handlers){if(Wm(a)||!a.forEach)throw Error('transit writer "handlers" option must be a map');var b=this;a.forEach(function(a,d){if(void 0!==d)b.va.set(d,a);else throw Error("Cannot create handler for JavaScript undefined");})}this.Ac=this.Nb.handlerForForeign;this.dd=this.Nb.unpack||function(a){return a instanceof Z&&null===a.ba?a.da:!1};this.Mc=
this.Nb&&this.Nb.verbose||!1}io.prototype.Jb=function(a){var b=this.va.get(null==a?null:a.constructor);return null!=b?b:(a=a&&a.transitTag)?this.va.get(a):null};function jo(a,b,c,d,e){a=a+b+c;return e?e.write(a,d):a}function ko(a,b,c){var d=[];if(Wm(b))for(var e=0;e<b.length;e++)d.push(lo(a,b[e],!1,c));else b.forEach(function(b){d.push(lo(a,b,!1,c))});return d}function mo(a,b){if("string"!==typeof b){var c=a.Jb(b);return c&&1===c.tag(b).length}return!0}
function no(a,b){var c=a.dd(b),d=!0;if(c){for(var e=0;e<c.length&&(d=mo(a,c[e]),d);e+=2);return d}if(b.keys&&(c=b.keys(),e=null,c.next)){for(e=c.next();!e.done;){d=mo(a,e.value);if(!d)break;e=c.next()}return d}if(b.forEach)return b.forEach(function(b,c){d=d&&mo(a,c)}),d;throw Error("Cannot walk keys of object type "+(null==b?null:b.constructor).name);}
function oo(a){if(a.constructor.transit$isObject)return!0;var b=a.constructor.toString(),b=b.substr(9),b=b.substr(0,b.indexOf("("));isObject="Object"==b;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a.constructor,"transit$isObject",{value:isObject,enumerable:!1}):a.constructor.transit$isObject=isObject;return isObject}
function po(a,b,c){var d=null,e=null,f=null,d=null,h=0;if(b.constructor===Object||null!=b.forEach||a.Ac&&oo(b)){if(a.Mc){if(null!=b.forEach)if(no(a,b)){var k={};b.forEach(function(b,d){k[lo(a,d,!0,!1)]=lo(a,b,!1,c)})}else{d=a.dd(b);e=[];f=jo("~#","cmap","",!0,c);if(d)for(;h<d.length;h+=2)e.push(lo(a,d[h],!1,!1)),e.push(lo(a,d[h+1],!1,c));else b.forEach(function(b,d){e.push(lo(a,d,!1,!1));e.push(lo(a,b,!1,c))});k={};k[f]=e}else for(d=Vm(b),k={};h<d.length;h++)k[lo(a,d[h],!0,!1)]=lo(a,b[d[h]],!1,c);
return k}if(null!=b.forEach){if(no(a,b)){d=a.dd(b);k=["^ "];if(d)for(;h<d.length;h+=2)k.push(lo(a,d[h],!0,c)),k.push(lo(a,d[h+1],!1,c));else b.forEach(function(b,d){k.push(lo(a,d,!0,c));k.push(lo(a,b,!1,c))});return k}d=a.dd(b);e=[];f=jo("~#","cmap","",!0,c);if(d)for(;h<d.length;h+=2)e.push(lo(a,d[h],!1,c)),e.push(lo(a,d[h+1],!1,c));else b.forEach(function(b,d){e.push(lo(a,d,!1,c));e.push(lo(a,b,!1,c))});return[f,e]}k=["^ "];for(d=Vm(b);h<d.length;h++)k.push(lo(a,d[h],!0,c)),k.push(lo(a,b[d[h]],!1,
c));return k}if(null!=a.ie)return a.ie(b,function(b){return lo(a,b,!0,c)},function(b){return lo(a,b,!1,c)});h=(null==b?null:b.constructor).name;d=Error("Cannot write "+h);d.data={Id:b,type:h};throw d;}
function lo(a,b,c,d){var e=a.Jb(b)||(a.Ac?a.Ac(b,a.va):null),f=e?e.tag(b):null,h=e?e.U(b):null;if(null!=e&&null!=f)switch(f){case "_":return c?jo("~","_","",c,d):null;case "s":return 0<h.length?(a=h.charAt(0),a="~"===a||"^"===a||"`"===a?"~"+h:h):a=h,jo("","",a,c,d);case "?":return c?jo("~","?",h.toString()[0],c,d):h;case "i":return Infinity===h?jo("~","z","INF",c,d):-Infinity===h?jo("~","z","-INF",c,d):isNaN(h)?jo("~","z","NaN",c,d):c||"string"===typeof h||h instanceof cb?jo("~","i",h.toString(),
c,d):h;case "d":return c?jo(h.qf,"d",h,c,d):h;case "b":return jo("~","b",h,c,d);case "'":return a.Mc?(b={},c=jo("~#","'","",!0,d),b[c]=lo(a,h,!1,d),d=b):d=[jo("~#","'","",!0,d),lo(a,h,!1,d)],d;case "array":return ko(a,h,d);case "map":return po(a,h,d);default:a:{if(1===f.length){if("string"===typeof h){d=jo("~",f,h,c,d);break a}if(c||a.Zc){(a=a.Mc&&new Wn)?(f=a.tag(b),h=a.oa(b,a)):h=e.oa(b,e);if(null!==h){d=jo("~",f,h,c,d);break a}d=Error('Tag "'+f+'" cannot be encoded as string');d.data={tag:f,U:h,
Id:b};throw d;}}b=f;c=h;a.Mc?(h={},h[jo("~#",b,"",!0,d)]=lo(a,c,!1,d),d=h):d=[jo("~#",b,"",!0,d),lo(a,c,!1,d)]}return d}else throw d=(null==b?null:b.constructor).name,a=Error("Cannot write "+d),a.data={Id:b,type:d},a;}function qo(a,b){var c=a.Jb(b)||(a.Ac?a.Ac(b,a.va):null);if(null!=c)return 1===c.tag(b).length?hn("'",b):b;var c=(null==b?null:b.constructor).name,d=Error("Cannot write "+c);d.data={Id:b,type:c};throw d;}
function ro(a,b){this.oc=a;this.options=b||{};this.cache=!1===this.options.cache?null:this.options.cache?this.options.cache:new Cn}ro.prototype.Ve=function(){return this.oc};ro.prototype.marshaller=ro.prototype.Ve;ro.prototype.write=function(a,b){var c=null,d=b||{},c=d.asMapKey||!1,e=this.oc.Mc?!1:this.cache;!1===d.marshalTop?c=lo(this.oc,a,c,e):(d=this.oc,c=JSON.stringify(lo(d,qo(d,a),c,e)));null!=this.cache&&this.cache.clear();return c};ro.prototype.write=ro.prototype.write;
ro.prototype.register=function(a,b){this.oc.va.set(a,b)};ro.prototype.register=ro.prototype.register;function so(a,b){if("json"===a||"json-verbose"===a||null==a){var c=new In(b);return new Jn(c,b)}throw Error("Cannot create reader of type "+a);}function to(a,b){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(null==b&&(b={}),b.verbose=!0);var c=new io(b);return new ro(c,b)}c=Error('Type must be "json"');c.data={type:a};throw c;};ii.prototype.C=function(a,b){return b instanceof ii?this.Db===b.Db:b instanceof pn?this.Db===b.toString():!1};cb.prototype.C=function(a,b){return this.equiv(b)};pn.prototype.C=function(a,b){return b instanceof ii?Hc(b,this):this.equiv(b)};gn.prototype.C=function(a,b){return this.equiv(b)};cb.prototype.ud=!0;cb.prototype.N=function(){return dn.g?dn.g(this):dn.call(null,this)};pn.prototype.ud=!0;pn.prototype.N=function(){return pd(this.toString())};gn.prototype.ud=!0;
gn.prototype.N=function(){return dn.g?dn.g(this):dn.call(null,this)};pn.prototype.ea=!0;pn.prototype.R=function(a,b){return Pc(b,[w('#uuid "'),w(this.toString()),w('"')].join(""))};function uo(a,b){for(var c=B(le(b)),d=null,e=0,f=0;;)if(f<e){var h=d.K(null,f);a[h]=b[h];f+=1}else if(c=B(c))d=c,ke(d)?(c=Zc(d),f=$c(d),d=c,e=N(c),c=f):(c=E(d),a[c]=b[c],c=I(d),d=null,e=0),f=0;else break;return a}function vo(){}vo.prototype.init=function(){return Rc(lf)};vo.prototype.add=function(a,b,c){return Wc(a,b,c)};
vo.prototype.Uc=function(a){return Vc(a)};vo.prototype.Vb=function(a){return Gg.j?Gg.j(a,!0,!0):Gg.call(null,a,!0,!0)};function wo(){}wo.prototype.init=function(){return Rc(Wd)};wo.prototype.add=function(a,b){return Ze.a(a,b)};wo.prototype.Uc=function(a){return Vc(a)};wo.prototype.Vb=function(a){return dg.a?dg.a(a,!0):dg.call(null,a,!0)};
function xo(a){var b=Me(fk);a=uo({handlers:di(Ah(Q([new r(null,5,["$",function(){return function(a){return sd.g(a)}}(b),":",function(){return function(a){return Le.g(a)}}(b),"set",function(){return function(a){return If.a(Eh,a)}}(b),"list",function(){return function(a){return If.a(G,a.reverse())}}(b),"cmap",function(){return function(a){for(var b=0,e=Rc(lf);;)if(b<a.length)var f=b+2,e=Wc(e,a[b],a[b+1]),b=f;else return Vc(e)}}(b)],null),rj.g(a)],0))),mapBuilder:new vo,arrayBuilder:new wo,prefersStrings:!1},
di($d.a(a,rj)));return so.a?so.a(b,a):so.call(null,b,a)}function yo(){}yo.prototype.tag=function(){return":"};yo.prototype.U=function(a){return a.Na};yo.prototype.oa=function(a){return a.Na};function zo(){}zo.prototype.tag=function(){return"$"};zo.prototype.U=function(a){return a.Ma};zo.prototype.oa=function(a){return a.Ma};function Ao(){}Ao.prototype.tag=function(){return"list"};
Ao.prototype.U=function(a){var b=[];a=B(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.K(null,e);b.push(f);e+=1}else if(a=B(a))c=a,ke(c)?(a=Zc(c),e=$c(c),c=a,d=N(a),a=e):(a=E(c),b.push(a),a=I(c),c=null,d=0),e=0;else break;return hn.a?hn.a("array",b):hn.call(null,"array",b)};Ao.prototype.oa=function(){return null};function Bo(){}Bo.prototype.tag=function(){return"map"};Bo.prototype.U=function(a){return a};Bo.prototype.oa=function(){return null};function Co(){}Co.prototype.tag=function(){return"set"};
Co.prototype.U=function(a){var b=[];a=B(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.K(null,e);b.push(f);e+=1}else if(a=B(a))c=a,ke(c)?(a=Zc(c),e=$c(c),c=a,d=N(a),a=e):(a=E(c),b.push(a),a=I(c),c=null,d=0),e=0;else break;return hn.a?hn.a("array",b):hn.call(null,"array",b)};Co.prototype.oa=function(){return null};function Do(){}Do.prototype.tag=function(){return"array"};
Do.prototype.U=function(a){var b=[];a=B(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.K(null,e);b.push(f);e+=1}else if(a=B(a))c=a,ke(c)?(a=Zc(c),e=$c(c),c=a,d=N(a),a=e):(a=E(c),b.push(a),a=I(c),c=null,d=0),e=0;else break;return b};Do.prototype.oa=function(){return null};function Eo(){}Eo.prototype.tag=function(){return"u"};Eo.prototype.U=function(a){return a.Db};Eo.prototype.oa=function(a){return this.U(a)};
function Fo(a,b){var c=new yo,d=new zo,e=new Ao,f=new Bo,h=new Co,k=new Do,l=new Eo,n=Ah(Q([Zd([gh,Ie,r,bh,qg,C,S,Fe,Ne,kg,pg,dh,zh,zg,U,Ee,Nd,Ch,vh,yh,gg,Fh,Se,rd,ii,Ih,kh],[f,e,f,e,e,e,c,e,e,k,e,e,e,e,k,e,e,h,f,e,e,h,e,d,l,e,e]),rj.g(b)],0)),m=Me(a),q=uo({objectBuilder:function(a,b,c,d,e,f,h,k,l){return function(n,m,q){return te(function(){return function(a,b,c){a.push(m.g?m.g(b):m.call(null,b),q.g?q.g(c):q.call(null,c));return a}}(a,b,c,d,e,f,h,k,l),n)}}(m,c,d,e,f,h,k,l,n),handlers:function(){var a=
$b(n);a.forEach=function(){return function(a){for(var b=B(this),c=null,d=0,e=0;;)if(e<d){var f=c.K(null,e),h=R(f,0,null),f=R(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=B(b))ke(b)?(c=Zc(b),b=$c(b),h=c,d=N(c),c=h):(c=E(b),h=R(c,0,null),f=R(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=I(b),c=null,d=0),e=0;else return null}}(a,m,c,d,e,f,h,k,l,n);return a}(),unpack:function(){return function(a){return a instanceof r?a.h:!1}}(m,c,d,e,f,h,k,l,n)},di($d.a(b,rj)));return to.a?to.a(m,q):to.call(null,
m,q)};g=um.prototype;g.hd=function(a,b,c){a=null!=b&&(b.o&64||b.ia)?af(xf,b):b;var d=z.a(a,bk),e=z.a(a,Ti),f=z.a(a,kk),h=z.a(a,zj),k=z.j(a,gk,0),l=z.j(a,sk,!1),n=z.a(a,dj),m=lj.g(n);t(m)&&Am(this,Me(m));Cl(this,"complete",function(){return function(a){a=a.target;return c.g?c.g(a):c.call(null,a)}}(this,"complete",this,this,b,a,d,e,f,h,k,l,n));this.nc=Math.max(0,k);this.Ld=l;this.send(d,e,f,di(h));return this};g.jd=function(){return Mm(this)};g.ld=function(){return Jm(this)};g.md=function(){return Km(this)};
g.kd=function(a,b){return this.getResponseHeader(b)};g.nd=function(){return td.a(this.kc,7)};function Go(a,b){return Tm(b,a)}function Ho(a){a:{a=[a];var b=a.length;if(b<=Eg)for(var c=0,d=Rc(lf);;)if(c<b)var e=c+1,d=Wc(d,a[c],null),c=e;else{a=new Ch(null,Vc(d),null);break a}else for(c=0,d=Rc(Eh);;)if(c<b)e=c+1,d=Sc(d,a[c]),c=e;else{a=Vc(d);break a}}return nf(a,new U(null,6,5,V,[200,201,202,204,205,206],null))}
var qf=function qf(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return qf.D(arguments[0],arguments[1],arguments[2],3<c.length?new C(c.slice(3),0,null):null)};qf.D=function(a,b,c,d){return new U(null,2,5,V,[!1,Vb(Vd,new r(null,3,[Kj,a,ej,b,Pi,c],null),Bf.a(eg,Jf(2,2,d)))],null)};qf.O=3;qf.T=function(a){var b=E(a),c=I(a);a=E(c);var d=I(c),c=E(d),d=I(d);return qf.D(b,a,c,d)};function Io(a){return Ek(", ","string"===typeof a?new U(null,1,5,V,[a],null):a)}
function Jo(a,b,c,d,e,f){this.read=a;this.description=b;this.yb=c;this.ja=d;this.I=e;this.w=f;this.o=2229667594;this.F=8192}g=Jo.prototype;g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){switch(b instanceof S?b.Na:null){case "read":return this.read;case "description":return this.description;case "content-type":return this.yb;default:return z.j(this.I,b,c)}};
g.pc=function(a,b){var c=null!=a&&(a.o&64||a.ia)?af(xf,a):a,d=z.a(c,Wj),e=null!=this&&(this.o&64||this.ia)?af(xf,this):this,f=z.a(e,Wj);return Lf(b,zj,function(a,b,c){return function(a){return Ah(Q([new r(null,1,["Accept",Io(c)],null),t(a)?a:lf],0))}}(this,e,f,a,c,d))};
g.qc=function(a,b){var c=null!=a&&(a.o&64||a.ia)?af(xf,a):a;z.a(c,Fi);var c=null!=this&&(this.o&64||this.ia)?af(xf,this):this,d=z.a(c,Fi);try{var e=Om(b),f=pf(e);switch(e){case 0:return f.a?f.a("Request failed.",vk):f.call(null,"Request failed.",vk);case -1:return t(Sm(b))?f.a?f.a("Request aborted by client.",gj):f.call(null,"Request aborted by client.",gj):f.a?f.a("Request timed out.",gk):f.call(null,"Request timed out.",gk);case 204:return new U(null,2,5,V,[!0,null],null);case 205:return new U(null,
2,5,V,[!0,null],null);default:try{var h=d.g?d.g(b):d.call(null,b);if(t(Ho(e)))return new U(null,2,5,V,[!0,h],null);var k=Pm(b);return f.M?f.M(k,Yj,ki,h):f.call(null,k,Yj,ki,h)}catch(D){if(D instanceof Object){var h=D,f=V,l,n=null!=c&&(c.o&64||c.ia)?af(xf,c):c,m=z.a(n,ni),q=new r(null,3,[Kj,e,Pi,Yj,ki,null],null),x=[w(h.message),w("  Format should have been "),w(m)].join(""),A=Yd.D(q,ej,x,Q([Pi,Uj,Bi,Qm(b)],0));l=t(Ho(e))?A:Yd.D(q,ej,Pm(b),Q([uj,A],0));return new U(null,2,5,f,[!1,l],null)}throw D;
}}}catch(D){if(D instanceof Object)return h=D,qf.D(0,h.message,Zj,Q([Zj,h],0));throw D;}};g.R=function(a,b,c){return Nh(b,function(){return function(a){return Nh(b,X,""," ","",c,a)}}(this),"#ajax.core.ResponseFormat{",", ","}",c,Ye.a(new U(null,3,5,V,[new U(null,2,5,V,[Fi,this.read],null),new U(null,2,5,V,[ni,this.description],null),new U(null,2,5,V,[Wj,this.yb],null)],null),this.I))};g.La=function(){return new vg(0,this,3,new U(null,3,5,V,[Fi,ni,Wj],null),dd(this.I))};g.V=function(){return this.ja};
g.ya=function(){return new Jo(this.read,this.description,this.yb,this.ja,this.I,this.w)};g.ca=function(){return 3+N(this.I)};g.N=function(){var a=this.w;return null!=a?a:this.w=a=Be(this)};g.C=function(a,b){var c;c=t(b)?(c=this.constructor===b.constructor)?ug(this,b):c:b;return t(c)?!0:!1};g.Fb=function(a,b){return re(new Ch(null,new r(null,3,[ni,null,Fi,null,Wj,null],null),null),b)?$d.a(Qd(If.a(lf,this),this.ja),b):new Jo(this.read,this.description,this.yb,this.ja,ef($d.a(this.I,b)),null)};
g.Ta=function(a,b,c){return t(Je.a?Je.a(Fi,b):Je.call(null,Fi,b))?new Jo(c,this.description,this.yb,this.ja,this.I,null):t(Je.a?Je.a(ni,b):Je.call(null,ni,b))?new Jo(this.read,c,this.yb,this.ja,this.I,null):t(Je.a?Je.a(Wj,b):Je.call(null,Wj,b))?new Jo(this.read,this.description,c,this.ja,this.I,null):new Jo(this.read,this.description,this.yb,this.ja,Yd.j(this.I,b,c),null)};
g.Z=function(){return B(Ye.a(new U(null,3,5,V,[new U(null,2,5,V,[Fi,this.read],null),new U(null,2,5,V,[ni,this.description],null),new U(null,2,5,V,[Wj,this.yb],null)],null),this.I))};g.W=function(a,b){return new Jo(this.read,this.description,this.yb,b,this.I,this.w)};g.Y=function(a,b){return je(b)?oc(this,y.a(b,0),y.a(b,1)):Vb(ec,this,b)};function Ko(a){return new Jo(Fi.g(a),ni.g(a),Wj.g(a),null,$d.D(a,Fi,Q([ni,Wj],0)),null)}
function Lo(a){return function(b,c){var d=new U(null,2,5,V,[b,c],null);return Mo?Mo(a,d):No.call(null,a,d)}}function No(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return Mo(arguments[0],arguments[1]);case 1:return Oo(arguments[0]);default:throw Error([w("Invalid arity: "),w(b.length)].join(""));}}
function Mo(a,b){var c=R(b,0,null),d=R(b,1,null),c=c instanceof S?Me(c):c,c=t(a)?[w(a),w("["),w(c),w("]")].join(""):c;return"string"===typeof d?new U(null,1,5,V,[new U(null,2,5,V,[c,d],null)],null):ie(d)?Gf(Oo(c),Q([B(d)],0)):he(d)?af(Ye,tf(Lo(c),B(d))):new U(null,1,5,V,[new U(null,2,5,V,[c,d],null)],null)}
function Oo(a){return function(b){var c=R(b,0,null);b=R(b,1,null);c=c instanceof S?Me(c):c;c=t(a)?[w(a),w("["),w(c),w("]")].join(""):c;return"string"===typeof b?new U(null,1,5,V,[new U(null,2,5,V,[c,b],null)],null):ie(b)?Gf(Oo(c),Q([B(b)],0)):he(b)?af(Ye,tf(Lo(c),B(b))):new U(null,1,5,V,[new U(null,2,5,V,[c,b],null)],null)}}function Po(a){return Ek("\x26",Bf.a(function(a){var c=R(a,0,null);a=R(a,1,null);return[w(c),w("\x3d"),w(a)].join("")},Gf(Oo(null),Q([B(a)],0))))}
function Qo(a,b){return function(c){return t(a)?[w(c),w(t(Lh(/\?/,c))?"\x26":"?"),w(b.g?b.g(a):b.call(null,a))].join(""):c}}function Ro(a,b,c,d){this.Ob=a;this.ja=b;this.I=c;this.w=d;this.o=2229667594;this.F=8192}g=Ro.prototype;g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){switch(b instanceof S?b.Na:null){case "params-to-str":return this.Ob;default:return z.j(this.I,b,c)}};
g.pc=function(a,b){var c=null!=b&&(b.o&64||b.ia)?af(xf,b):b,d=z.a(c,Ti);return td.a(d,"GET")?new Bd(Lf(c,bk,Qo(ij.g(c),this.Ob))):c};g.qc=function(a,b){return b};g.R=function(a,b,c){return Nh(b,function(){return function(a){return Nh(b,X,""," ","",c,a)}}(this),"#ajax.core.ProcessGet{",", ","}",c,Ye.a(new U(null,1,5,V,[new U(null,2,5,V,[nj,this.Ob],null)],null),this.I))};g.La=function(){return new vg(0,this,1,new U(null,1,5,V,[nj],null),dd(this.I))};g.V=function(){return this.ja};
g.ya=function(){return new Ro(this.Ob,this.ja,this.I,this.w)};g.ca=function(){return 1+N(this.I)};g.N=function(){var a=this.w;return null!=a?a:this.w=a=Be(this)};g.C=function(a,b){var c;c=t(b)?(c=this.constructor===b.constructor)?ug(this,b):c:b;return t(c)?!0:!1};g.Fb=function(a,b){return re(new Ch(null,new r(null,1,[nj,null],null),null),b)?$d.a(Qd(If.a(lf,this),this.ja),b):new Ro(this.Ob,this.ja,ef($d.a(this.I,b)),null)};
g.Ta=function(a,b,c){return t(Je.a?Je.a(nj,b):Je.call(null,nj,b))?new Ro(c,this.ja,this.I,null):new Ro(this.Ob,this.ja,Yd.j(this.I,b,c),null)};g.Z=function(){return B(Ye.a(new U(null,1,5,V,[new U(null,2,5,V,[nj,this.Ob],null)],null),this.I))};g.W=function(a,b){return new Ro(this.Ob,b,this.I,this.w)};g.Y=function(a,b){return je(b)?oc(this,y.a(b,0),y.a(b,1)):Vb(ec,this,b)};function So(a){throw Error(""+w(a));}function To(a,b,c){this.ja=a;this.I=b;this.w=c;this.o=2229667594;this.F=8192}g=To.prototype;
g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){switch(b){default:return z.j(this.I,b,c)}};g.pc=function(a,b){var c=null!=b&&(b.o&64||b.ia)?af(xf,b):b,d=z.a(c,kk);z.a(c,ij);return null==d?c:new Bd(c)};g.qc=function(a,b){return b};g.R=function(a,b,c){return Nh(b,function(){return function(a){return Nh(b,X,""," ","",c,a)}}(this),"#ajax.core.DirectSubmission{",", ","}",c,Ye.a(Wd,this.I))};g.La=function(){return new vg(0,this,0,Wd,dd(this.I))};g.V=function(){return this.ja};
g.ya=function(){return new To(this.ja,this.I,this.w)};g.ca=function(){return 0+N(this.I)};g.N=function(){var a=this.w;return null!=a?a:this.w=a=Be(this)};g.C=function(a,b){var c;c=t(b)?(c=this.constructor===b.constructor)?ug(this,b):c:b;return t(c)?!0:!1};g.Fb=function(a,b){return re(Eh,b)?$d.a(Qd(If.a(lf,this),this.ja),b):new To(this.ja,ef($d.a(this.I,b)),null)};g.Ta=function(a,b,c){return new To(this.ja,Yd.j(this.I,b,c),null)};g.Z=function(){return B(Ye.a(Wd,this.I))};
g.W=function(a,b){return new To(b,this.I,this.w)};g.Y=function(a,b){return je(b)?oc(this,y.a(b,0),y.a(b,1)):Vb(ec,this,b)};function Uo(a,b,c){this.ja=a;this.I=b;this.w=c;this.o=2229667594;this.F=8192}g=Uo.prototype;g.J=function(a,b){return mc.j(this,b,null)};g.G=function(a,b,c){switch(b){default:return z.j(this.I,b,c)}};
g.pc=function(a,b){var c=null!=b&&(b.o&64||b.ia)?af(xf,b):b;z.a(c,bk);z.a(c,Ti);var d=z.a(c,si),e=z.a(c,ij),f=z.a(c,zj),h;h=ie(d)?d:qe(d)?new r(null,2,[Cj,d,Wj,"text/plain"],null):lf;h=null!=h&&(h.o&64||h.ia)?af(xf,h):h;var k=z.a(h,Cj);h=z.a(h,Wj);d=null!=k?k.g?k.g(e):k.call(null,e):So(new U(null,2,5,V,["unrecognized request format: ",d],null));f=t(f)?f:lf;return Yd.D(c,kk,d,Q([zj,t(h)?Yd.j(f,"Content-Type",Io(h)):f],0))};g.qc=function(a,b){return b};
g.R=function(a,b,c){return Nh(b,function(){return function(a){return Nh(b,X,""," ","",c,a)}}(this),"#ajax.core.ApplyRequestFormat{",", ","}",c,Ye.a(Wd,this.I))};g.La=function(){return new vg(0,this,0,Wd,dd(this.I))};g.V=function(){return this.ja};g.ya=function(){return new Uo(this.ja,this.I,this.w)};g.ca=function(){return 0+N(this.I)};g.N=function(){var a=this.w;return null!=a?a:this.w=a=Be(this)};g.C=function(a,b){var c;c=t(b)?(c=this.constructor===b.constructor)?ug(this,b):c:b;return t(c)?!0:!1};
g.Fb=function(a,b){return re(Eh,b)?$d.a(Qd(If.a(lf,this),this.ja),b):new Uo(this.ja,ef($d.a(this.I,b)),null)};g.Ta=function(a,b,c){return new Uo(this.ja,Yd.j(this.I,b,c),null)};g.Z=function(){return B(Ye.a(Wd,this.I))};g.W=function(a,b){return new Uo(b,this.I,this.w)};g.Y=function(a,b){return je(b)?oc(this,y.a(b,0),y.a(b,1)):Vb(ec,this,b)};function Vo(a){a=null!=a&&(a.o&64||a.ia)?af(xf,a):a;a=z.a(a,lj);return t(a)?a:fk}
function Wo(a,b){return function(a){return function(b){return a.write(b)}}(function(){var c=Nj.g(b);return t(c)?c:Fo(a,b)}())}function Xo(a){var b=Vo(a),c=td.a(b,fk)?"json":"msgpack";return new r(null,2,[Cj,Wo(b,a),Wj,[w("application/transit+"),w(c)].join("")],null)}function Yo(a){return function(b){return function(c){c=Qm(c);c=b.read(c);return t(Ui.g(a))?c:gi(c,Q([hi,!1],0))}}(function(){var b=Tj.g(a);return t(b)?b:xo(a)}())}
var Zo=function Zo(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return Zo.H();case 1:return Zo.g(arguments[0]);case 2:return Zo.a(arguments[0],arguments[1]);default:throw Error([w("Invalid arity: "),w(c.length)].join(""));}};Zo.H=function(){return Zo.g(lf)};Zo.g=function(a){return Zo.a(Vo(a),a)};Zo.a=function(a,b){return Ko(new r(null,3,[Fi,Yo(b),ni,"Transit",Wj,new U(null,1,5,V,["application/transit+json"],null)],null))};Zo.O=2;
function $o(){return new r(null,2,[Cj,Po,Wj,"application/x-www-form-urlencoded; charset\x3dutf-8"],null)}var ap=function ap(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return ap.H();case 1:return ap.g(arguments[0]);default:throw Error([w("Invalid arity: "),w(c.length)].join(""));}};ap.H=function(){return Ko(new r(null,3,[Fi,Qm,ni,"raw text",Wj,new U(null,1,5,V,["*/*"],null)],null))};ap.g=function(){return ap.H()};ap.O=1;
function bp(a){var b=new Rl;a=di(a);var c=[];Sl(b,a,c);return c.join("")}function cp(a,b,c){return function(d){d=Qm(d);d=t(t(a)?td.a(0,d.indexOf(a)):a)?d.substring(a.length):d;d=Ql(d);return t(b)?d:gi(d,Q([hi,c],0))}}var dp=function dp(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return dp.H();case 1:return dp.g(arguments[0]);default:throw Error([w("Invalid arity: "),w(c.length)].join(""));}};dp.H=function(){return dp.g(lf)};
dp.g=function(a){var b=null!=a&&(a.o&64||a.ia)?af(xf,a):a;a=z.a(b,yj);var c=z.a(b,Ei),b=z.a(b,Ui);return Ko(new r(null,3,[Fi,cp(a,b,c),ni,[w("JSON"),w(t(a)?[w(" prefix '"),w(a),w("'")].join(""):null),w(t(c)?" keywordize":null)].join(""),Wj,new U(null,1,5,V,["application/json"],null)],null))};dp.O=1;
var ep=new U(null,6,5,V,[new U(null,2,5,V,["application/transit+json",Zo],null),new U(null,2,5,V,["application/transit+transit",Zo],null),new U(null,2,5,V,["application/json",dp],null),new U(null,2,5,V,["text/plain",ap],null),new U(null,2,5,V,["text/html",ap],null),new U(null,2,5,V,["*/*",ap],null)],null);function fp(a,b){return null==b||ie(b)?b:je(b)?fp(a,E(I(b))):b.g?b.g(a):b.call(null,a)}
function gp(a,b){var c=je(b)?E(b):Wj.g(fp(a,b));return null==c?new U(null,1,5,V,["*/*"],null):"string"===typeof c?new U(null,1,5,V,[c],null):c}function hp(a){return function(b){b=je(b)?E(b):Wj.g(fp(a,b));return null==b?new U(null,1,5,V,["*/*"],null):"string"===typeof b?new U(null,1,5,V,[b],null):b}}function ip(a){return function(b){return td.a(b,"*/*")||0<=a.indexOf(b)}}function jp(a,b){return function(c){c=gp(b,c);return nf(ip(a),c)}}
function kp(a){return function(b){var c;c=null!=a&&(a.o&64||a.ia)?af(xf,a):a;var d=z.a(c,dj),e=Rm(b,"Content-Type");c=fp(c,E(Hf(jp(t(e)?e:"",c),d)));return Fi.g(c).call(null,b)}}function lp(a){var b;b=null!=a&&(a.o&64||a.ia)?af(xf,a):a;var c=z.a(b,dj);b=je(c)?Gf(hp(b),Q([c],0)):gp(b,c);return Ko(new r(null,3,[Fi,kp(a),si,[w("(from "),w(b),w(")")].join(""),Wj,b],null))}
function mp(a){a=null!=a&&(a.o&64||a.ia)?af(xf,a):a;var b=z.a(a,dj);return b instanceof Jo?b:je(b)?lp(a):ie(b)?Ko(b):qe(b)?Ko(new r(null,3,[Fi,b,ni,"custom",Wj,"*/*"],null)):So(new U(null,2,5,V,["unrecognized response format: ",b],null))}function np(a){return a instanceof S?Me(a).toUpperCase():a}function op(a,b){return function(c){c=Vb(function(a,b){return Um(b,a)},c,b);return a.g?a.g(c):a.call(null,c)}}
var pp=new U(null,3,5,V,[new Ro(Po,null,null,null),new To(null,null,null),new Uo(null,null,null)],null),qp,rp=Wd;qp=wf?wf(rp):vf.call(null,rp);function sp(a){var b=mp(a);return Lf(Lf(a,Ti,np),dk,function(a){return function(b){return Ye.D(new U(null,1,5,V,[a],null),t(b)?b:J.g?J.g(qp):J.call(null,qp),Q([pp],0))}}(b))}
function tp(a,b){if(ie(a))return a;if(ae(a))return new r(null,1,[Cj,a],null);if(null==a)return Xo(b);switch(a instanceof S?a.Na:null){case "transit":return Xo(b);case "json":return new r(null,2,[Cj,bp,Wj,"application/json"],null);case "text":return new r(null,2,[Cj,ue,Wj,"text/plain; charset\x3dutf-8"],null);case "raw":return $o();case "url":return $o();default:return null}}
var up=function up(b,c){if(je(b))return new U(null,2,5,V,[E(b),up(E(I(b)),c)],null);if(ie(b))return b;if(ae(b))return new r(null,2,[Fi,b,ni,"custom"],null);if(null==b)return lp(new r(null,1,[dj,ep],null));switch(b instanceof S?b.Na:null){case "transit":return Zo.g(c);case "json":return dp.g(c);case "text":return ap.H?ap.H():ap.call(null);case "raw":return ap.H();case "detect":return lp(new r(null,1,[dj,ep],null));default:return null}};
function vp(a,b){return je(a)?af(fg,Bf.a(function(a){return up(a,b)},a)):up(a,b)}function wp(a){return Zh(Q(["CLJS-AJAX response:",a],0))}var xp=wf?wf(wp):vf.call(null,wp);function yp(a){return"undefined"!==typeof console?console.error(a):"undefined"!==typeof window?window.alert(""+w(a)):Zh(Q(["CLJS-AJAX ERROR:",a],0))}var zp=wf?wf(yp):vf.call(null,yp);
function Ap(a){var b=null!=a&&(a.o&64||a.ia)?af(xf,a):a,c=z.a(b,qk),d=z.a(b,Aj),e=z.a(b,qi),f=t(c)?c:J.g?J.g(xp):J.call(null,xp),h=t(d)?d:J.g?J.g(zp):J.call(null,zp);return function(a,b,c,d,e,f,h){return function(c){var d=R(c,0,null);c=R(c,1,null);(t(d)?a:b).call(null,c);return ae(h)?h.H?h.H():h.call(null):null}}(f,h,a,b,c,d,e)}
function Bp(a){var b=E(a);a=b instanceof S?af(xf,a):b;a=Yd.D(a,bk,"assets/events.txt",Q([Ti,"GET"],0));a=null!=a&&(a.o&64||a.ia)?af(xf,a):a;var c=z.a(a,Ti),d=z.a(a,si),b=z.a(a,dj);z.a(a,ij);c=null==z.a(a,kk)&&!td.a(c,"GET");d=t(t(d)?d:c)?tp(d,a):null;a=Yd.D(a,qk,Ap(a),Q([si,d,dj,vp(b,a)],0));a=sp(a);a=null!=a&&(a.o&64||a.ia)?af(xf,a):a;b=z.a(a,dk);a=Vb(Go,a,b);b=(null!=b?b.o&134217728||b.Mf||(b.o?0:u(Nc,b)):u(Nc,b))?Oc(b):Vb(Vd,G,b);d=null!=a&&(a.o&64||a.ia)?af(xf,a):a;d=z.a(d,qk);b=t(d)?op(d,b):
So("No ajax handler provided.");d=Ai.g(a);d=t(d)?d:new um;return Nm(d,a,b)};var Cp=function Cp(b,c,d,e){if(null!=b&&null!=b.Ue)return b.Ue(b,c,d,e);var f=Cp[p(null==b?null:b)];if(null!=f)return f.M?f.M(b,c,d,e):f.call(null,b,c,d,e);f=Cp._;if(null!=f)return f.M?f.M(b,c,d,e):f.call(null,b,c,d,e);throw v("Interceptor.-intercept",b);},Dp=function Dp(b,c,d,e){var f=E(c);return Cp(f,d,e,function(){return function(){var f=F(c);return B(f)?Dp(b,f,d,e):b.H?b.H():b.call(null)}}(f))};var Ep=new r(null,2,["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"],null);function Fp(a,b){if(t(a)){var c=z.a(xi.g(b),a);return t(c)?c:z.a(Ep,a)}return null}function Gp(a){return"string"===typeof a||"number"===typeof a||!0===a||!1===a}var Hp=new function(){},Ip=function Ip(b,c){for(;;)if(B(c)){var d;d=E(c);var e=void 0,e=Gp(d),e=t(e)?e:je(d);d=t(e)?Ze.a(b,d):Ip(b,d);e=F(c);b=d;c=e}else return b};function Jp(a){return t(0===a.indexOf("on-"))?a.substring(3):null};function Kp(a,b,c,d){d=b instanceof S?Fp(Ke(b),d):null;return t(d)?a.setAttributeNS(d,Me(b),c):a.setAttribute(Me(b),c)}function Lp(a,b,c){c=b instanceof S?Fp(Ke(b),c):null;return t(c)?a.removeAttributeNS(c,Me(b)):a.removeAttribute(Me(b))}
var Mp=new r(null,2,[Rj,new r(null,1,[yi,function(a,b,c,d){return a[Me(b).replace("-","_")]=d}],null),Ak,new r(null,1,[yi,function(a,b,c,d,e){return t(d)?Kp(a,b,d,e):Lp(a,b,e)}],null)],null),Np=new U(null,6,5,V,[new r(null,2,[ek,new r(null,2,[Xi,"svg",Ak,"class"],null),lj,Ak],null),new r(null,2,[ek,new r(null,2,[ck,"input",Ak,new Ch(null,new r(null,2,["value",null,"checked",null],null),null)],null),lj,Rj],null),new r(null,2,[ek,new r(null,2,[ck,"input",Ak,"autofocus"],null),yi,function(a,b,c,d){return t(d)?
(a.focus(),a.setAttribute(b,d)):null}],null),new r(null,2,[ek,new r(null,2,[ck,"option",Ak,new Ch(null,new r(null,1,["selected",null],null),null)],null),lj,Rj],null),new r(null,2,[ek,new r(null,2,[ck,"select",Ak,new Ch(null,new r(null,2,["value",null,"selectIndex",null],null),null)],null),lj,Rj],null),new r(null,2,[ek,new r(null,2,[ck,"textarea",Ak,new Ch(null,new r(null,1,["value",null],null),null)],null),lj,Rj],null)],null);function Op(a,b){return t(a)?ge(a)?re(a,b):td.a(b,a):!0}
function Pp(a,b,c,d){a=Ye.a(wi.g(a),Np);a=nf(function(){return function(a){var f;f=ek.g(a);var h=Me(d),k=Op(Xi.g(f),b);t(k)?(k=Op(ck.g(f),c),f=t(k)?Op(Ak.g(f),h):k):f=k;return t(f)?a:null}}(a),a);return re(a,lj)?lj.g(a).call(null,Mp):a}function Qp(a,b,c,d,e){c=Gp(c);t(t(c)?c:Gp(d))?a=t(d)?Kp(a,b,d,e):Lp(a,b,e):(d=a[Me(b).replace("-","_")]=d,a=a[b]=d);return a};function Rp(a,b,c,d,e,f){var h=null!=f&&(f.o&64||f.ia)?af(xf,f):f,k=z.a(h,dk);if(null!==e){var l=Jp(Me(d));t(l)?ie(null)&&ie(e)&&Zi.g(null)===Zi.g(e)||(f=function(b){return function(){var c=[w("hipo_listener_"),w(b)].join(""),d=a[c];t(d)&&a.removeEventListener(b,d);d=yi.g(e);d=t(d)?d:e;return t(d)?(a.addEventListener(b,d),a[c]=d):null}}(l,l,f,h,h,k),Pb(k)||ee(k)?f():Dp(f,k,t(e)?ri:hk,Ah(Q([new r(null,3,[ek,a,Zi,d,kj,null],null),t(e)?new r(null,1,[pi,e],null):null],0)))):(f=function(f,h,k,l){return function(){var f=
Pp(l,b,c,d),f=yi.g(f),f=t(f)?f:Qp;return f.ha?f.ha(a,d,null,e,l):f.call(null,a,d,null,e,l)}}(l,f,h,h,k),Pb(k)||ee(k)?f():Dp(f,k,t(e)?ui:ik,Ah(Q([new r(null,3,[ek,a,Zi,d,kj,null],null),t(e)?new r(null,1,[pi,e],null):null],0))))}}
function Sp(a,b,c){if(!je(b))throw Error("Assert failed: (vector? v)");if(null!=b&&!je(b))throw Error("Assert failed: (or (nil? v) (vector? v))");var d;a:{if(null!=b&&!je(b))throw Error("Assert failed: (or (nil? v) (vector? v))");if(ee(b))d=!0;else{d=N(b)-1;for(var e=0;;){var f=Kd(b,e),h=Gp(f),f=t(h)?h:je(f);if(t(f)){if(td.a(d,e)){d=!0;break a}e+=1}else{d=!1;break a}}}}if(t(d))d=b;else a:for(d=Rc(Wd),e=b;;){f=R(e,0,Hp);if(Hp===f){d=Vc(d);break a}d=oe(f)?Ip(d,f):null!=f?Ze.a(d,f):d;e=hg(e,1,N(e))}if(null!=
b&&!je(b))throw Error("Assert failed: (or (nil? v) (vector? v))");for(b=d;!ee(b);)d=Kd(b,0),t(d)&&a.appendChild(Tp.a?Tp.a(d,c):Tp.call(null,d,c)),b=F(b)}
function Tp(a,b){var c;c=Gp(a);c=t(c)?c:je(a);if(!t(c))throw Error("Assert failed: (or (hic/literal? o) (vector? o))");if(t(Gp(a)))c=document.createTextNode(a);else{if(!je(a))throw Error("Assert failed: (vector? h)");var d=Ke(Kd(a,0)),e;c=Me(Kd(a,0));e=c.indexOf("#");0<e?e=c.substring(0,e):(e=c.indexOf("."),e=0<e?c.substring(0,e):c);var f;if(t(a)){c=Me(Kd(a,0));f=c.indexOf("#");if(0<f){var h=c.indexOf(".");f=0<h?c.substring(f+1,h):c.substring(f+1)}else f=null;b:if(h=c.indexOf("."),0<h)for(c=c.substring(h+
1);;)if(0<c.indexOf("."))c=c.replace("."," ");else{h=c;break b}else h=null;c=R(a,1,null);if(ie(c)){if(t(t(f)?re(c,Pj):f))throw new ji("Cannot define id multiple times",lf,null);if(t(t(f)?f:h)){f=t(f)?new r(null,1,[Pj,f],null):null;if(t(h))var k=Qj.g(c),h=t(k)?t(h)?[w(h),w(" "),w(k)].join(""):""+w(k):h,h=new r(null,1,[Qj,h],null);else h=null;c=Ah(Q([c,f,h],0))}f=c}else f=t(t(f)?f:h)?new r(null,2,[Pj,f,Qj,h],null):null}else f=null;c=ie(R(a,1,null))?2:1;c=N(a)>c?hg(a,c,N(a)):null;d=Fp(d,b);h=jj.g(b);
if(t(h))d=h.M?h.M(d,e,f,b):h.call(null,d,e,f,b);else{h=f;f=t(d)?document.createElementNS(d,e):document.createElement(e);for(var h=B(h),k=null,l=0,n=0;;)if(n<l){var m=k.K(null,n),q=R(m,0,null),m=R(m,1,null);t(m)&&Rp(f,d,e,q,m,b);n+=1}else if(h=B(h))ke(h)?(l=Zc(h),h=$c(h),k=l,l=N(l)):(l=E(h),k=R(l,0,null),l=R(l,1,null),t(l)&&Rp(f,d,e,k,l,b),h=I(h),k=null,l=0),n=0;else break;d=f}t(c)&&Sp(d,c,b);c=d}return c}
function Up(a){if(oe(a)){var b=document.createDocumentFragment();Sp(b,eg(a),null);return b}return null!=a?Tp(a,null):null};var Vp;
Vp={pf:["BC","AD"],nf:["Before Christ","Anno Domini"],sf:"JFMAMJJASOND".split(""),zf:"JFMAMJJASOND".split(""),rf:"January February March April May June July August September October November December".split(" "),yf:"January February March April May June July August September October November December".split(" "),vf:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Bf:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ff:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Df:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
xf:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Cf:"Sun Mon Tue Wed Thu Fri Sat".split(" "),tf:"SMTWTFS".split(""),Af:"SMTWTFS".split(""),wf:["Q1","Q2","Q3","Q4"],uf:["1st quarter","2nd quarter","3rd quarter","4th quarter"],kf:["AM","PM"],lf:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],Ef:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],mf:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],se:6,Gf:[5,6],te:5};function Wp(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31}function Xp(a,b,c){ha(a)?(this.aa=Yp(a,b||0,c||1),Zp(this,c||1)):(b=typeof a,"object"==b&&null!=a||"function"==b?(this.aa=Yp(a.getFullYear(),a.getMonth(),a.getDate()),Zp(this,a.getDate())):(this.aa=new Date(oa()),a=this.aa.getDate(),this.aa.setHours(0),this.aa.setMinutes(0),this.aa.setSeconds(0),this.aa.setMilliseconds(0),Zp(this,a)))}
function Yp(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}g=Xp.prototype;g.ce=Vp.se;g.de=Vp.te;g.clone=function(){var a=new Xp(this.aa);a.ce=this.ce;a.de=this.de;return a};g.getFullYear=function(){return this.aa.getFullYear()};g.getYear=function(){return this.getFullYear()};g.getMonth=function(){return this.aa.getMonth()};g.getDate=function(){return this.aa.getDate()};g.getTime=function(){return this.aa.getTime()};g.getDay=function(){return this.aa.getDay()};
g.getUTCFullYear=function(){return this.aa.getUTCFullYear()};g.getUTCMonth=function(){return this.aa.getUTCMonth()};g.getUTCDate=function(){return this.aa.getUTCDate()};g.getUTCDay=function(){return this.aa.getDay()};g.getUTCHours=function(){return this.aa.getUTCHours()};g.getUTCMinutes=function(){return this.aa.getUTCMinutes()};g.getTimezoneOffset=function(){return this.aa.getTimezoneOffset()};g.set=function(a){this.aa=new Date(a.getFullYear(),a.getMonth(),a.getDate())};g.setFullYear=function(a){this.aa.setFullYear(a)};
g.setYear=function(a){this.setFullYear(a)};g.setMonth=function(a){this.aa.setMonth(a)};g.setDate=function(a){this.aa.setDate(a)};g.setTime=function(a){this.aa.setTime(a)};g.setUTCFullYear=function(a){this.aa.setUTCFullYear(a)};g.setUTCMonth=function(a){this.aa.setUTCMonth(a)};g.setUTCDate=function(a){this.aa.setUTCDate(a)};
g.add=function(a){if(a.jf||a.Xe){var b=this.getMonth()+a.Xe+12*a.jf,c=this.getYear()+Math.floor(b/12),b=b%12;0>b&&(b+=12);var d=Math.min(Wp(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.Qe&&(a=new Date((new Date(this.getYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.Qe),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),Zp(this,a.getDate()))};
g.Fa=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};g.toString=function(){return[this.getFullYear(),ta(this.getMonth()+1),ta(this.getDate())].join("")+""};function Zp(a,b){a.getDate()!=b&&a.aa.setUTCHours(a.aa.getUTCHours()+(a.getDate()<b?1:-1))}g.valueOf=function(){return this.aa.valueOf()};var $p=new Xp,aq=new U(null,12,5,V,"Gennaio Febbraio Marzo Aprile Maggio Giugno Luglio Agosto Settembre Ottobre Novembre Dicembre".split(" "),null);function bq(a,b){return new U(null,4,5,V,[a,b,Wp(a,b),Kd(aq,b)],null)}
function cq(a,b){var c=R(b,0,null),d=R(b,1,null),e=R(b,2,null),f=R(b,3,null),h=new U(null,2,5,V,[Di,function(){return function(b,c,d,e,f,h){return function H(k){return new Ne(null,function(b,c,d){return function(){for(;;){var c=B(k);if(c){if(ke(c)){var e=Zc(c),f=N(e),h=Re(f);a:for(var l=0;;)if(l<f){var m=y.a(e,l),n=[w(m),w("-"),w(b),w("-"),w(d)].join(""),m=new U(null,3,5,V,[Le.g([w("li#"),w(n)].join("")),new U(null,2,5,V,[Wi,m],null),new U(null,2,5,V,[Si,new U(null,3,5,V,[ok,new r(null,1,[tk,[w("events.html#"),
w(n)].join("")],null),a.g?a.g(n):a.call(null,n)],null)],null)],null);h.add(m);l+=1}else{e=!0;break a}return e?Te(h.Da(),H($c(c))):Te(h.Da(),null)}h=E(c);e=[w(h),w("-"),w(b),w("-"),w(d)].join("");return P(new U(null,3,5,V,[Le.g([w("li#"),w(e)].join("")),new U(null,2,5,V,[Wi,h],null),new U(null,2,5,V,[Si,new U(null,3,5,V,[ok,new r(null,1,[tk,[w("events.html#"),w(e)].join("")],null),a.g?a.g(e):a.call(null,e)],null)],null)],null),H(F(c)))}return null}}}(b,c,d,e,f,h),null,null)}}(d+1,b,c,d,e,f)(new Ih(null,
1,e+1,1,null))}()],null),k=Up(h);k.hipo_hiccup=h;return k}var dq,eq=bq($p.getFullYear(),$p.getMonth());dq=wf?wf(eq):vf.call(null,eq);function fq(a){var b=R(a,0,null),c=R(a,1,null);R(a,2,null);R(a,3,null);return 0===c?bq(b-1,11):bq(b,c-1)}function gq(a){var b=R(a,0,null),c=R(a,1,null);R(a,2,null);R(a,3,null);return td.a(11,c)?bq(b+1,0):bq(b,c+1)}
function hq(){var a=document.querySelector(Gk(pj)),b=document.querySelector(Gk(pk));return Bp(Q([new r(null,1,[qk,function(a,b){return function(e){e=af(xf,Gf(F,Q([Mh(/(^[\d-]*)\s+(.*)\n/,e)],0)));var f=function(a,b,c){return function(d){var e=R(d,0,null);R(d,1,null);R(d,2,null);var f=R(d,3,null);d=cq(a,d);b.innerHTML="";b.appendChild(d);e=[w(f),w(" "),w(e)].join("");void 0!==c.textContent?c.textContent=e:c.innerText=e;return c}}(e,a,b);f(J.g?J.g(dq):J.call(null,dq));Qk(document.getElementById("prev-month"),
Q([Fj,function(a,b){return function(a){a.preventDefault();return b(Af.a(dq,fq))}}(e,f,a,b)],0));return Qk(document.getElementById("next-month"),Q([Fj,function(a,b){return function(a){a.preventDefault();return b(Af.a(dq,gq))}}(e,f,a,b)],0))}}(a,b)],null)],0))};var iq=wf?wf(!1):vf.call(null,!1);function jq(a,b){return function(c){c.stopPropagation();Nk(a,"disabled");Nk(b,"is-active");return Af.a(iq,Pb)}}
function kq(){var a=document.getElementById("sidenav"),b=document.getElementById("hambtn"),c=jq(a,b),d=function(a,b,c){return function(a){return t(J.g?J.g(iq):J.call(null,iq))?c.g?c.g(a):c.call(null,a):null}}(a,b,c);Qk(b,Q([Fj,c],0));Qk(document.body,Q([Fj,d],0));return Qk(document.body,Q([Ej,function(a,b,c,d){return function(a){return td.a(a.keyCode,27)?d(a):null}}(a,b,c,d)],0))};var lq,mq=Wd;lq=wf?wf(mq):vf.call(null,mq);function nq(a){var b=Bk(document.getElementsByClassName("pswp"))[0],c=di(J.g?J.g(lq):J.call(null,lq));return(new PhotoSwipe(b,PhotoSwipeUI_Default,c,{index:a})).init()}
function oq(){return function b(c){return new Ne(null,function(){for(;;){var d=B(c);if(d){var e=d;if(ke(e)){var f=Zc(e),h=N(f),k=Re(h);return function(){for(var b=0;;)if(b<h){var c=y.a(f,b),l=function(){var b=Hk(c,Ji);return parseInt(b)}(),m=Hk(c,tk),n=Fk(Hk(c,Sj)),q=R(n,0,null),x=R(n,1,null);Qk(c,Q([Fj,function(b,c){return function(b){b.preventDefault();return nq(c)}}(b,l,m,n,q,x,c,f,h,k,e,d)],0));Ue(k,new r(null,3,[oj,m,aj,parseInt(q),Lj,parseInt(x)],null));b+=1}else return!0}()?Te(k.Da(),b($c(e))):
Te(k.Da(),null)}var l=E(e),n=function(){var b=Hk(l,Ji);return parseInt(b)}(),m=Hk(l,tk),q=Fk(Hk(l,Sj)),x=R(q,0,null),A=R(q,1,null);Qk(l,Q([Fj,function(b){return function(c){c.preventDefault();return nq(b)}}(n,m,q,x,A,l,e,d)],0));return P(new r(null,3,[oj,m,aj,parseInt(x),Lj,parseInt(A)],null),b(F(e)))}return null}},null,null)}(Bk(document.querySelectorAll(Gk(new U(null,2,5,V,[uk,Vi],null)))))}
function pq(a,b,c,d,e){return function(f){f.preventDefault();var h=Ik(a),k=Ik(b);f=window.getComputedStyle(a)[Ck(cj)];f=B(f)?parseInt(f):null;h=(e.g?e.g(k):e.call(null,k))-(e.g?e.g(h):e.call(null,h));k=h-f;k=t(c.a?c.a(d,k):c.call(null,d,k))?k:d;if(t(c.a?c.a(h,f):c.call(null,h,f))){f=Q([cj,f+k],0);if(!of(N(f)))throw Error("Assert failed: (even? (count kvs))");f=B(Jf(2,2,f));for(var h=null,l=k=0;;)if(l<k){var n=h.K(null,l),m=R(n,0,null),n=R(n,1,null);Mk(a,Q([m,[w(n),w("px")].join("")],0));l+=1}else if(f=
B(f))ke(f)?(k=Zc(f),f=$c(f),h=k,k=N(k)):(k=E(f),h=R(k,0,null),k=R(k,1,null),Mk(a,Q([h,[w(k),w("px")].join("")],0)),f=I(f),h=null,k=0),l=0;else break;f=a}else f=null;return f}};ca("magic.index.init",function(){kq();var a=document.querySelector(Gk(jk)),b=new U(null,4,5,V,[Dj,new r(null,3,[Li,-1,li,"dialog",Gi,!0],null),new U(null,1,5,V,[xk],null),new U(null,3,5,V,[Ij,new U(null,4,5,V,[sj,new U(null,1,5,V,[Gj],null),new U(null,1,5,V,[Gj],null),new U(null,1,5,V,[Gj],null)],null),new U(null,6,5,V,[ti,new U(null,7,5,V,[Ci,new U(null,1,5,V,[rk],null),new U(null,2,5,V,[Jj,new r(null,1,[wj,"Close (Esc)"],null)],null),new U(null,2,5,V,[tj,new r(null,1,[wj,"Share"],null)],null),new U(null,
2,5,V,[mi,new r(null,1,[wj,"Toggle fullscreen"],null)],null),new U(null,2,5,V,[lk,new r(null,1,[wj,"Zoom in/out"],null)],null),new U(null,2,5,V,[Yi,new U(null,2,5,V,[wk,new U(null,2,5,V,[Mi,new U(null,1,5,V,[Hj],null)],null)],null)],null)],null),new U(null,2,5,V,[zi,new U(null,1,5,V,[$i],null)],null),new U(null,2,5,V,[ak,new r(null,1,[wj,"Previous (arrow left)"],null)],null),new U(null,2,5,V,[vj,new r(null,1,[wj,"Next (arrow right)"],null)],null),new U(null,2,5,V,[qj,new U(null,1,5,V,[Ii],null)],
null)],null)],null)],null),c=Up(b);c.hipo_hiccup=b;a.appendChild(c);Af.j(lq,If,oq());a=Bk(document.getElementsByClassName("gnext"))[0];b=Bk(document.getElementsByClassName("g-slider"))[0];c=Bk(document.getElementsByClassName("g-container"))[0];Qk(Bk(document.getElementsByClassName("gprev"))[0],Q([Fj,pq(b,c,xe,300,zk)],0));Qk(a,Q([Fj,pq(b,c,we,-300,fj)],0));smoothScroll.init();Sk();return hq()});ca("magic.menu.init",function(){kq();smoothScroll.init();return Rk()});ca("magic.events.init",function(){return kq()});