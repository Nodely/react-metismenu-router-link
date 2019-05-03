(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactMetismenuRouterLink"] = factory(require("react"));
	else
		root["ReactMetismenuRouterLink"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactRouterDom = __webpack_require__(12);

	var _classnames = __webpack_require__(33);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _history = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * src/RouterLink.jsx
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: H.Alper Tuna <halpertuna@gmail.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 08.09.2016
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var history = (0, _history.createBrowserHistory)();

	var RouterLink = function (_React$Component) {
	  _inherits(RouterLink, _React$Component);

	  function RouterLink() {
	    _classCallCheck(this, RouterLink);

	    return _possibleConstructorReturn(this, (RouterLink.__proto__ || Object.getPrototypeOf(RouterLink)).apply(this, arguments));
	  }

	  _createClass(RouterLink, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.to = this.props.to;
	      if (this.to[0] !== '/') this.to = '/' + this.to;

	      history.listen(this.onLocationChange.bind(this));
	      this.onLocationChange(this.context.router.route);
	    }
	  }, {
	    key: 'onLocationChange',
	    value: function onLocationChange(e) {
	      if ((e.pathname || '/') === this.to) {
	        this.props.activateMe();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          classNameActive = _props.classNameActive,
	          classNameHasActiveChild = _props.classNameHasActiveChild,
	          active = _props.active,
	          hasActiveChild = _props.hasActiveChild,
	          to = _props.to,
	          externalLink = _props.externalLink,
	          hasSubMenu = _props.hasSubMenu,
	          toggleSubMenu = _props.toggleSubMenu,
	          children = _props.children;


	      return hasSubMenu || externalLink ? _react2.default.createElement(
	        'a',
	        {
	          className: (0, _classnames2.default)(className, hasActiveChild && classNameHasActiveChild),
	          target: externalLink ? '_blank' : undefined,
	          href: to,
	          onClick: toggleSubMenu
	        },
	        children
	      ) : _react2.default.createElement(
	        _reactRouterDom.Link,
	        {
	          className: (0, _classnames2.default)(className, active && classNameActive),
	          to: to
	        },
	        children
	      );
	    }
	  }]);

	  return RouterLink;
	}(_react2.default.Component);

	RouterLink.propTypes = {
	  className: _propTypes2.default.string.isRequired,
	  classNameActive: _propTypes2.default.string.isRequired,
	  classNameHasActiveChild: _propTypes2.default.string.isRequired,
	  active: _propTypes2.default.bool.isRequired,
	  hasActiveChild: _propTypes2.default.bool.isRequired,
	  to: _propTypes2.default.string.isRequired,
	  externalLink: _propTypes2.default.bool,
	  hasSubMenu: _propTypes2.default.bool.isRequired,
	  toggleSubMenu: _propTypes2.default.func,
	  activateMe: _propTypes2.default.func.isRequired,
	  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array]).isRequired
	};

	RouterLink.contextTypes = {
	  router: _propTypes2.default.object.isRequired
	};

	exports.default = RouterLink;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = __webpack_require__(4);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(7)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(11)();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(5);
	} else {
	  module.exports = __webpack_require__(6);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/** @license React v16.8.6
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", { value: !0 });
	var b = "function" === typeof Symbol && Symbol.for,
	    c = b ? Symbol.for("react.element") : 60103,
	    d = b ? Symbol.for("react.portal") : 60106,
	    e = b ? Symbol.for("react.fragment") : 60107,
	    f = b ? Symbol.for("react.strict_mode") : 60108,
	    g = b ? Symbol.for("react.profiler") : 60114,
	    h = b ? Symbol.for("react.provider") : 60109,
	    k = b ? Symbol.for("react.context") : 60110,
	    l = b ? Symbol.for("react.async_mode") : 60111,
	    m = b ? Symbol.for("react.concurrent_mode") : 60111,
	    n = b ? Symbol.for("react.forward_ref") : 60112,
	    p = b ? Symbol.for("react.suspense") : 60113,
	    q = b ? Symbol.for("react.memo") : 60115,
	    r = b ? Symbol.for("react.lazy") : 60116;function t(a) {
	  if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a) {
	    var u = a.$$typeof;switch (u) {case c:
	        switch (a = a.type, a) {case l:case m:case e:case g:case f:case p:
	            return a;default:
	            switch (a = a && a.$$typeof, a) {case k:case n:case h:
	                return a;default:
	                return u;}}case r:case q:case d:
	        return u;}
	  }
	}function v(a) {
	  return t(a) === m;
	}exports.typeOf = t;exports.AsyncMode = l;exports.ConcurrentMode = m;exports.ContextConsumer = k;exports.ContextProvider = h;exports.Element = c;exports.ForwardRef = n;
	exports.Fragment = e;exports.Lazy = r;exports.Memo = q;exports.Portal = d;exports.Profiler = g;exports.StrictMode = f;exports.Suspense = p;exports.isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && (a.$$typeof === r || a.$$typeof === q || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n);
	};exports.isAsyncMode = function (a) {
	  return v(a) || t(a) === l;
	};exports.isConcurrentMode = v;exports.isContextConsumer = function (a) {
	  return t(a) === k;
	};
	exports.isContextProvider = function (a) {
	  return t(a) === h;
	};exports.isElement = function (a) {
	  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && a.$$typeof === c;
	};exports.isForwardRef = function (a) {
	  return t(a) === n;
	};exports.isFragment = function (a) {
	  return t(a) === e;
	};exports.isLazy = function (a) {
	  return t(a) === r;
	};exports.isMemo = function (a) {
	  return t(a) === q;
	};exports.isPortal = function (a) {
	  return t(a) === d;
	};exports.isProfiler = function (a) {
	  return t(a) === g;
	};exports.isStrictMode = function (a) {
	  return t(a) === f;
	};
	exports.isSuspense = function (a) {
	  return t(a) === p;
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.8.6
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	if (process.env.NODE_ENV !== "production") {
	  (function () {
	    'use strict';

	    Object.defineProperty(exports, '__esModule', { value: true });

	    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	    // nor polyfill, then a plain number is used for performance.
	    var hasSymbol = typeof Symbol === 'function' && Symbol.for;

	    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

	    function isValidElementType(type) {
	      return typeof type === 'string' || typeof type === 'function' ||
	      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	    }

	    /**
	     * Forked from fbjs/warning:
	     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	     *
	     * Only change is we use console.warn instead of console.error,
	     * and do nothing when 'console' is not supported.
	     * This really simplifies the code.
	     * ---
	     * Similar to invariant but only logs a warning if the condition is not met.
	     * This can be used to log issues in development environments in critical
	     * paths. Removing the logging code for production environments will keep the
	     * same logic and follow the same code paths.
	     */

	    var lowPriorityWarning = function lowPriorityWarning() {};

	    {
	      var printWarning = function printWarning(format) {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        var argIndex = 0;
	        var message = 'Warning: ' + format.replace(/%s/g, function () {
	          return args[argIndex++];
	        });
	        if (typeof console !== 'undefined') {
	          console.warn(message);
	        }
	        try {
	          // --- Welcome to debugging React ---
	          // This error was thrown as a convenience so that you can use this stack
	          // to find the callsite that caused this warning to fire.
	          throw new Error(message);
	        } catch (x) {}
	      };

	      lowPriorityWarning = function lowPriorityWarning(condition, format) {
	        if (format === undefined) {
	          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	        }
	        if (!condition) {
	          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	            args[_key2 - 2] = arguments[_key2];
	          }

	          printWarning.apply(undefined, [format].concat(args));
	        }
	      };
	    }

	    var lowPriorityWarning$1 = lowPriorityWarning;

	    function typeOf(object) {
	      if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            var type = object.type;

	            switch (type) {
	              case REACT_ASYNC_MODE_TYPE:
	              case REACT_CONCURRENT_MODE_TYPE:
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	                return type;
	              default:
	                var $$typeofType = type && type.$$typeof;

	                switch ($$typeofType) {
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_PROVIDER_TYPE:
	                    return $$typeofType;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_LAZY_TYPE:
	          case REACT_MEMO_TYPE:
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }

	      return undefined;
	    }

	    // AsyncMode is deprecated along with isAsyncMode
	    var AsyncMode = REACT_ASYNC_MODE_TYPE;
	    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	    var ContextConsumer = REACT_CONTEXT_TYPE;
	    var ContextProvider = REACT_PROVIDER_TYPE;
	    var Element = REACT_ELEMENT_TYPE;
	    var ForwardRef = REACT_FORWARD_REF_TYPE;
	    var Fragment = REACT_FRAGMENT_TYPE;
	    var Lazy = REACT_LAZY_TYPE;
	    var Memo = REACT_MEMO_TYPE;
	    var Portal = REACT_PORTAL_TYPE;
	    var Profiler = REACT_PROFILER_TYPE;
	    var StrictMode = REACT_STRICT_MODE_TYPE;
	    var Suspense = REACT_SUSPENSE_TYPE;

	    var hasWarnedAboutDeprecatedIsAsyncMode = false;

	    // AsyncMode should be deprecated
	    function isAsyncMode(object) {
	      {
	        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	          hasWarnedAboutDeprecatedIsAsyncMode = true;
	          lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	        }
	      }
	      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	    }
	    function isConcurrentMode(object) {
	      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	    }
	    function isContextConsumer(object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    }
	    function isContextProvider(object) {
	      return typeOf(object) === REACT_PROVIDER_TYPE;
	    }
	    function isElement(object) {
	      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	    }
	    function isForwardRef(object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    }
	    function isFragment(object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    }
	    function isLazy(object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    }
	    function isMemo(object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    }
	    function isPortal(object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    }
	    function isProfiler(object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    }
	    function isStrictMode(object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    }
	    function isSuspense(object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    }

	    exports.typeOf = typeOf;
	    exports.AsyncMode = AsyncMode;
	    exports.ConcurrentMode = ConcurrentMode;
	    exports.ContextConsumer = ContextConsumer;
	    exports.ContextProvider = ContextProvider;
	    exports.Element = Element;
	    exports.ForwardRef = ForwardRef;
	    exports.Fragment = Fragment;
	    exports.Lazy = Lazy;
	    exports.Memo = Memo;
	    exports.Portal = Portal;
	    exports.Profiler = Profiler;
	    exports.StrictMode = StrictMode;
	    exports.Suspense = Suspense;
	    exports.isValidElementType = isValidElementType;
	    exports.isAsyncMode = isAsyncMode;
	    exports.isConcurrentMode = isConcurrentMode;
	    exports.isContextConsumer = isContextConsumer;
	    exports.isContextProvider = isContextProvider;
	    exports.isElement = isElement;
	    exports.isForwardRef = isForwardRef;
	    exports.isFragment = isFragment;
	    exports.isLazy = isLazy;
	    exports.isMemo = isMemo;
	    exports.isPortal = isPortal;
	    exports.isProfiler = isProfiler;
	    exports.isStrictMode = isStrictMode;
	    exports.isSuspense = isSuspense;
	  })();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var ReactIs = __webpack_require__(4);
	var assign = __webpack_require__(8);

	var ReactPropTypesSecret = __webpack_require__(9);
	var checkPropTypes = __webpack_require__(10);

	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function printWarning() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function printWarning(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function (isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (!manualPropTypeCallCache[cacheKey] &&
	          // Avoid spamming the console because they are often not actionable except for lib authors
	          manualPropTypeWarningCount < 3) {
	            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var printWarning = function printWarning() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(9);
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function printWarning(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	module.exports = checkPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(9);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	module.exports = function () {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	if (process.env.NODE_ENV === "production") {
	  module.exports = __webpack_require__(13);
	} else {
	  module.exports = __webpack_require__(32);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _interopDefault(t) {
	  return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "default" in t ? t.default : t;
	}Object.defineProperty(exports, "__esModule", { value: !0 });var React = _interopDefault(__webpack_require__(1)),
	    reactRouter = __webpack_require__(14),
	    history = __webpack_require__(22);__webpack_require__(2), __webpack_require__(21);var invariant = _interopDefault(__webpack_require__(26));function _extends() {
	  return (_extends = Object.assign || function (t) {
	    for (var e = 1; e < arguments.length; e++) {
	      var r = arguments[e];for (var o in r) {
	        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
	      }
	    }return t;
	  }).apply(this, arguments);
	}function _inheritsLoose(t, e) {
	  t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
	}function _objectWithoutPropertiesLoose(t, e) {
	  if (null == t) return {};var r,
	      o,
	      n = {},
	      i = Object.keys(t);for (o = 0; o < i.length; o++) {
	    r = i[o], 0 <= e.indexOf(r) || (n[r] = t[r]);
	  }return n;
	}var BrowserRouter = function (n) {
	  function t() {
	    for (var t, e = arguments.length, r = new Array(e), o = 0; o < e; o++) {
	      r[o] = arguments[o];
	    }return (t = n.call.apply(n, [this].concat(r)) || this).history = history.createBrowserHistory(t.props), t;
	  }return _inheritsLoose(t, n), t.prototype.render = function () {
	    return React.createElement(reactRouter.Router, { history: this.history, children: this.props.children });
	  }, t;
	}(React.Component),
	    HashRouter = function (n) {
	  function t() {
	    for (var t, e = arguments.length, r = new Array(e), o = 0; o < e; o++) {
	      r[o] = arguments[o];
	    }return (t = n.call.apply(n, [this].concat(r)) || this).history = history.createHashHistory(t.props), t;
	  }return _inheritsLoose(t, n), t.prototype.render = function () {
	    return React.createElement(reactRouter.Router, { history: this.history, children: this.props.children });
	  }, t;
	}(React.Component);function isModifiedEvent(t) {
	  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
	}var Link = function (t) {
	  function e() {
	    return t.apply(this, arguments) || this;
	  }_inheritsLoose(e, t);var r = e.prototype;return r.handleClick = function (t, e) {
	    (this.props.onClick && this.props.onClick(t), t.defaultPrevented || 0 !== t.button || this.props.target && "_self" !== this.props.target || isModifiedEvent(t)) || (t.preventDefault(), (this.props.replace ? e.replace : e.push)(this.props.to));
	  }, r.render = function () {
	    var o = this,
	        t = this.props,
	        n = t.innerRef,
	        i = (t.replace, t.to),
	        a = _objectWithoutPropertiesLoose(t, ["innerRef", "replace", "to"]);return React.createElement(reactRouter.__RouterContext.Consumer, null, function (e) {
	      e || invariant(!1);var t = "string" == typeof i ? history.createLocation(i, null, null, e.location) : i,
	          r = t ? e.history.createHref(t) : "";return React.createElement("a", _extends({}, a, { onClick: function onClick(t) {
	          return o.handleClick(t, e.history);
	        }, href: r, ref: n }));
	    });
	  }, e;
	}(React.Component);function joinClassnames() {
	  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
	    e[r] = arguments[r];
	  }return e.filter(function (t) {
	    return t;
	  }).join(" ");
	}function NavLink(t) {
	  var e = t["aria-current"],
	      a = void 0 === e ? "page" : e,
	      r = t.activeClassName,
	      s = void 0 === r ? "active" : r,
	      c = t.activeStyle,
	      u = t.className,
	      o = t.exact,
	      l = t.isActive,
	      n = t.location,
	      i = t.strict,
	      p = t.style,
	      h = t.to,
	      f = _objectWithoutPropertiesLoose(t, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to"]),
	      y = "object" == (typeof h === "undefined" ? "undefined" : _typeof(h)) ? h.pathname : h,
	      v = y && y.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");return React.createElement(reactRouter.Route, { path: v, exact: o, strict: i, location: n, children: function children(t) {
	      var e = t.location,
	          r = t.match,
	          o = !!(l ? l(r, e) : r),
	          n = o ? joinClassnames(u, s) : u,
	          i = o ? _extends({}, p, c) : p;return React.createElement(Link, _extends({ "aria-current": o && a || null, className: n, style: i, to: h }, f));
	    } });
	}Object.keys(reactRouter).forEach(function (t) {
	  exports[t] = reactRouter[t];
	}), exports.BrowserRouter = BrowserRouter, exports.HashRouter = HashRouter, exports.Link = Link, exports.NavLink = NavLink;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	if (process.env.NODE_ENV === "production") {
	  module.exports = __webpack_require__(15);
	} else {
	  module.exports = __webpack_require__(31);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _interopDefault(t) {
	  return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "default" in t ? t.default : t;
	}Object.defineProperty(exports, "__esModule", { value: !0 });var createContext = _interopDefault(__webpack_require__(16)),
	    React = _interopDefault(__webpack_require__(1));__webpack_require__(2), __webpack_require__(21);var history = __webpack_require__(22),
	    invariant = _interopDefault(__webpack_require__(26)),
	    pathToRegexp = _interopDefault(__webpack_require__(28));__webpack_require__(4);var hoistStatics = _interopDefault(__webpack_require__(30));function _extends() {
	  return (_extends = Object.assign || function (t) {
	    for (var e = 1; e < arguments.length; e++) {
	      var n = arguments[e];for (var o in n) {
	        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
	      }
	    }return t;
	  }).apply(this, arguments);
	}function _inheritsLoose(t, e) {
	  t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
	}function _objectWithoutPropertiesLoose(t, e) {
	  if (null == t) return {};var n,
	      o,
	      r = {},
	      a = Object.keys(t);for (o = 0; o < a.length; o++) {
	    n = a[o], 0 <= e.indexOf(n) || (r[n] = t[n]);
	  }return r;
	}var createNamedContext = function createNamedContext(t) {
	  var e = createContext();return e.Provider.displayName = t + ".Provider", e.Consumer.displayName = t + ".Consumer", e;
	},
	    context = createNamedContext("Router"),
	    Router = function (n) {
	  function t(t) {
	    var e;return (e = n.call(this, t) || this).state = { location: t.history.location }, e._isMounted = !1, e._pendingLocation = null, t.staticContext || (e.unlisten = t.history.listen(function (t) {
	      e._isMounted ? e.setState({ location: t }) : e._pendingLocation = t;
	    })), e;
	  }_inheritsLoose(t, n), t.computeRootMatch = function (t) {
	    return { path: "/", url: "/", params: {}, isExact: "/" === t };
	  };var e = t.prototype;return e.componentDidMount = function () {
	    this._isMounted = !0, this._pendingLocation && this.setState({ location: this._pendingLocation });
	  }, e.componentWillUnmount = function () {
	    this.unlisten && this.unlisten();
	  }, e.render = function () {
	    return React.createElement(context.Provider, { children: this.props.children || null, value: { history: this.props.history, location: this.state.location, match: t.computeRootMatch(this.state.location.pathname), staticContext: this.props.staticContext } });
	  }, t;
	}(React.Component),
	    MemoryRouter = function (r) {
	  function t() {
	    for (var t, e = arguments.length, n = new Array(e), o = 0; o < e; o++) {
	      n[o] = arguments[o];
	    }return (t = r.call.apply(r, [this].concat(n)) || this).history = history.createMemoryHistory(t.props), t;
	  }return _inheritsLoose(t, r), t.prototype.render = function () {
	    return React.createElement(Router, { history: this.history, children: this.props.children });
	  }, t;
	}(React.Component),
	    Lifecycle = function (t) {
	  function e() {
	    return t.apply(this, arguments) || this;
	  }_inheritsLoose(e, t);var n = e.prototype;return n.componentDidMount = function () {
	    this.props.onMount && this.props.onMount.call(this, this);
	  }, n.componentDidUpdate = function (t) {
	    this.props.onUpdate && this.props.onUpdate.call(this, this, t);
	  }, n.componentWillUnmount = function () {
	    this.props.onUnmount && this.props.onUnmount.call(this, this);
	  }, n.render = function () {
	    return null;
	  }, e;
	}(React.Component);function Prompt(t) {
	  var o = t.message,
	      e = t.when,
	      r = void 0 === e || e;return React.createElement(context.Consumer, null, function (t) {
	    if (t || invariant(!1), !r || t.staticContext) return null;var n = t.history.block;return React.createElement(Lifecycle, { onMount: function onMount(t) {
	        t.release = n(o);
	      }, onUpdate: function onUpdate(t, e) {
	        e.message !== o && (t.release(), t.release = n(o));
	      }, onUnmount: function onUnmount(t) {
	        t.release();
	      }, message: o });
	  });
	}var cache = {},
	    cacheLimit = 1e4,
	    cacheCount = 0;function compilePath(t) {
	  if (cache[t]) return cache[t];var e = pathToRegexp.compile(t);return cacheCount < cacheLimit && (cache[t] = e, cacheCount++), e;
	}function generatePath(t, e) {
	  return void 0 === t && (t = "/"), void 0 === e && (e = {}), "/" === t ? t : compilePath(t)(e, { pretty: !0 });
	}function Redirect(t) {
	  var a = t.computedMatch,
	      i = t.to,
	      e = t.push,
	      c = void 0 !== e && e;return React.createElement(context.Consumer, null, function (t) {
	    t || invariant(!1);var e = t.history,
	        n = t.staticContext,
	        o = c ? e.push : e.replace,
	        r = history.createLocation(a ? "string" == typeof i ? generatePath(i, a.params) : _extends({}, i, { pathname: generatePath(i.pathname, a.params) }) : i);return n ? (o(r), null) : React.createElement(Lifecycle, { onMount: function onMount() {
	        o(r);
	      }, onUpdate: function onUpdate(t, e) {
	        history.locationsAreEqual(e.to, r) || o(r);
	      }, to: i });
	  });
	}var cache$1 = {},
	    cacheLimit$1 = 1e4,
	    cacheCount$1 = 0;function compilePath$1(t, e) {
	  var n = "" + e.end + e.strict + e.sensitive,
	      o = cache$1[n] || (cache$1[n] = {});if (o[t]) return o[t];var r = [],
	      a = { regexp: pathToRegexp(t, r, e), keys: r };return cacheCount$1 < cacheLimit$1 && (o[t] = a, cacheCount$1++), a;
	}function matchPath(u, t) {
	  void 0 === t && (t = {}), "string" == typeof t && (t = { path: t });var e = t,
	      n = e.path,
	      o = e.exact,
	      p = void 0 !== o && o,
	      r = e.strict,
	      h = void 0 !== r && r,
	      a = e.sensitive,
	      l = void 0 !== a && a;return [].concat(n).reduce(function (t, e) {
	    if (t) return t;var n = compilePath$1(e, { end: p, strict: h, sensitive: l }),
	        o = n.regexp,
	        r = n.keys,
	        a = o.exec(u);if (!a) return null;var i = a[0],
	        c = a.slice(1),
	        s = u === i;return p && !s ? null : { path: e, url: "/" === e && "" === i ? "/" : i, isExact: s, params: r.reduce(function (t, e, n) {
	        return t[e.name] = c[n], t;
	      }, {}) };
	  }, null);
	}function isEmptyChildren(t) {
	  return 0 === React.Children.count(t);
	}var Route = function (t) {
	  function e() {
	    return t.apply(this, arguments) || this;
	  }return _inheritsLoose(e, t), e.prototype.render = function () {
	    var c = this;return React.createElement(context.Consumer, null, function (t) {
	      t || invariant(!1);var e = c.props.location || t.location,
	          n = _extends({}, t, { location: e, match: c.props.computedMatch ? c.props.computedMatch : c.props.path ? matchPath(e.pathname, c.props) : t.match }),
	          o = c.props,
	          r = o.children,
	          a = o.component,
	          i = o.render;return Array.isArray(r) && 0 === r.length && (r = null), "function" == typeof r && void 0 === (r = r(n)) && (r = null), React.createElement(context.Provider, { value: n }, r && !isEmptyChildren(r) ? r : n.match ? a ? React.createElement(a, n) : i ? i(n) : null : null);
	    });
	  }, e;
	}(React.Component);function addLeadingSlash(t) {
	  return "/" === t.charAt(0) ? t : "/" + t;
	}function addBasename(t, e) {
	  return t ? _extends({}, e, { pathname: addLeadingSlash(t) + e.pathname }) : e;
	}function stripBasename(t, e) {
	  if (!t) return e;var n = addLeadingSlash(t);return 0 !== e.pathname.indexOf(n) ? e : _extends({}, e, { pathname: e.pathname.substr(n.length) });
	}function createURL(t) {
	  return "string" == typeof t ? t : history.createPath(t);
	}function staticHandler(t) {
	  return function () {
	    invariant(!1);
	  };
	}function noop() {}var StaticRouter = function (r) {
	  function t() {
	    for (var e, t = arguments.length, n = new Array(t), o = 0; o < t; o++) {
	      n[o] = arguments[o];
	    }return (e = r.call.apply(r, [this].concat(n)) || this).handlePush = function (t) {
	      return e.navigateTo(t, "PUSH");
	    }, e.handleReplace = function (t) {
	      return e.navigateTo(t, "REPLACE");
	    }, e.handleListen = function () {
	      return noop;
	    }, e.handleBlock = function () {
	      return noop;
	    }, e;
	  }_inheritsLoose(t, r);var e = t.prototype;return e.navigateTo = function (t, e) {
	    var n = this.props,
	        o = n.basename,
	        r = void 0 === o ? "" : o,
	        a = n.context;a.action = e, a.location = addBasename(r, history.createLocation(t)), a.url = createURL(a.location);
	  }, e.render = function () {
	    var t = this.props,
	        e = t.basename,
	        n = void 0 === e ? "" : e,
	        o = t.context,
	        r = void 0 === o ? {} : o,
	        a = t.location,
	        i = void 0 === a ? "/" : a,
	        c = _objectWithoutPropertiesLoose(t, ["basename", "context", "location"]),
	        s = { createHref: function createHref(t) {
	        return addLeadingSlash(n + createURL(t));
	      }, action: "POP", location: stripBasename(n, history.createLocation(i)), push: this.handlePush, replace: this.handleReplace, go: staticHandler("go"), goBack: staticHandler("goBack"), goForward: staticHandler("goForward"), listen: this.handleListen, block: this.handleBlock };return React.createElement(Router, _extends({}, c, { history: s, staticContext: r }));
	  }, t;
	}(React.Component),
	    Switch = function (t) {
	  function e() {
	    return t.apply(this, arguments) || this;
	  }return _inheritsLoose(e, t), e.prototype.render = function () {
	    var t = this;return React.createElement(context.Consumer, null, function (n) {
	      n || invariant(!1);var o,
	          r,
	          a = t.props.location || n.location;return React.Children.forEach(t.props.children, function (t) {
	        if (null == r && React.isValidElement(t)) {
	          var e = (o = t).props.path || t.props.from;r = e ? matchPath(a.pathname, _extends({}, t.props, { path: e })) : n.match;
	        }
	      }), r ? React.cloneElement(o, { location: a, computedMatch: r }) : null;
	    });
	  }, e;
	}(React.Component);function withRouter(o) {
	  var t = function t(_t) {
	    var e = _t.wrappedComponentRef,
	        n = _objectWithoutPropertiesLoose(_t, ["wrappedComponentRef"]);return React.createElement(Route, { children: function children(t) {
	        return React.createElement(o, _extends({}, n, t, { ref: e }));
	      } });
	  };return t.displayName = "withRouter(" + (o.displayName || o.name) + ")", t.WrappedComponent = o, hoistStatics(t, o);
	}exports.MemoryRouter = MemoryRouter, exports.Prompt = Prompt, exports.Redirect = Redirect, exports.Route = Route, exports.Router = Router, exports.StaticRouter = StaticRouter, exports.Switch = Switch, exports.generatePath = generatePath, exports.matchPath = matchPath, exports.withRouter = withRouter, exports.__RouterContext = context;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _implementation = __webpack_require__(17);

	var _implementation2 = _interopRequireDefault(_implementation);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _react2.default.createContext || _implementation2.default;
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _gud = __webpack_require__(18);

	var _gud2 = _interopRequireDefault(_gud);

	var _warning = __webpack_require__(19);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var MAX_SIGNED_31_BIT_INT = 1073741823;

	// Inlined Object.is polyfill.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	function objectIs(x, y) {
	  if (x === y) {
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function createEventEmitter(value) {
	  var handlers = [];
	  return {
	    on: function on(handler) {
	      handlers.push(handler);
	    },
	    off: function off(handler) {
	      handlers = handlers.filter(function (h) {
	        return h !== handler;
	      });
	    },
	    get: function get() {
	      return value;
	    },
	    set: function set(newValue, changedBits) {
	      value = newValue;
	      handlers.forEach(function (handler) {
	        return handler(value, changedBits);
	      });
	    }
	  };
	}

	function onlyChild(children) {
	  return Array.isArray(children) ? children[0] : children;
	}

	function createReactContext(defaultValue, calculateChangedBits) {
	  var _Provider$childContex, _Consumer$contextType;

	  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

	  var Provider = function (_Component) {
	    _inherits(Provider, _Component);

	    function Provider() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, Provider);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    Provider.prototype.getChildContext = function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
	    };

	    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (this.props.value !== nextProps.value) {
	        var oldValue = this.props.value;
	        var newValue = nextProps.value;
	        var changedBits = void 0;

	        if (objectIs(oldValue, newValue)) {
	          changedBits = 0; // No change
	        } else {
	          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
	          if (process.env.NODE_ENV !== 'production') {
	            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
	          }

	          changedBits |= 0;

	          if (changedBits !== 0) {
	            this.emitter.set(nextProps.value, changedBits);
	          }
	        }
	      }
	    };

	    Provider.prototype.render = function render() {
	      return this.props.children;
	    };

	    return Provider;
	  }(_react.Component);

	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

	  var Consumer = function (_Component2) {
	    _inherits(Consumer, _Component2);

	    function Consumer() {
	      var _temp2, _this2, _ret2;

	      _classCallCheck(this, Consumer);

	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
	        value: _this2.getValue()
	      }, _this2.onUpdate = function (newValue, changedBits) {
	        var observedBits = _this2.observedBits | 0;
	        if ((observedBits & changedBits) !== 0) {
	          _this2.setState({ value: _this2.getValue() });
	        }
	      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
	    }

	    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var observedBits = nextProps.observedBits;

	      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
	      : observedBits;
	    };

	    Consumer.prototype.componentDidMount = function componentDidMount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].on(this.onUpdate);
	      }
	      var observedBits = this.props.observedBits;

	      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
	      : observedBits;
	    };

	    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].off(this.onUpdate);
	      }
	    };

	    Consumer.prototype.getValue = function getValue() {
	      if (this.context[contextProp]) {
	        return this.context[contextProp].get();
	      } else {
	        return defaultValue;
	      }
	    };

	    Consumer.prototype.render = function render() {
	      return onlyChild(this.props.children)(this.state.value);
	    };

	    return Consumer;
	  }(_react.Component);

	  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);

	  return {
	    Provider: Provider,
	    Consumer: Consumer
	  };
	}

	exports.default = createReactContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var key = '__global_unique_id__';

	module.exports = function () {
	  return global[key] = (global[key] || 0) + 1;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(20);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var isProduction = process.env.NODE_ENV === 'production';
	function warning(condition, message) {
	  if (!isProduction) {
	    if (condition) {
	      return;
	    }

	    var text = "Warning: " + message;

	    if (typeof console !== 'undefined') {
	      console.warn(text);
	    }

	    try {
	      throw Error(text);
	    } catch (x) {}
	  }
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(23);
	} else {
	  module.exports = __webpack_require__(27);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _interopDefault(n) {
	  return n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "default" in n ? n.default : n;
	}Object.defineProperty(exports, "__esModule", { value: !0 });var resolvePathname = _interopDefault(__webpack_require__(24)),
	    valueEqual = _interopDefault(__webpack_require__(25));__webpack_require__(21);var invariant = _interopDefault(__webpack_require__(26));function _extends() {
	  return (_extends = Object.assign || function (n) {
	    for (var t = 1; t < arguments.length; t++) {
	      var e = arguments[t];for (var a in e) {
	        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
	      }
	    }return n;
	  }).apply(this, arguments);
	}function addLeadingSlash(n) {
	  return "/" === n.charAt(0) ? n : "/" + n;
	}function stripLeadingSlash(n) {
	  return "/" === n.charAt(0) ? n.substr(1) : n;
	}function hasBasename(n, t) {
	  return new RegExp("^" + t + "(\\/|\\?|#|$)", "i").test(n);
	}function stripBasename(n, t) {
	  return hasBasename(n, t) ? n.substr(t.length) : n;
	}function stripTrailingSlash(n) {
	  return "/" === n.charAt(n.length - 1) ? n.slice(0, -1) : n;
	}function parsePath(n) {
	  var t = n || "/",
	      e = "",
	      a = "",
	      o = t.indexOf("#");-1 !== o && (a = t.substr(o), t = t.substr(0, o));var r = t.indexOf("?");return -1 !== r && (e = t.substr(r), t = t.substr(0, r)), { pathname: t, search: "?" === e ? "" : e, hash: "#" === a ? "" : a };
	}function createPath(n) {
	  var t = n.pathname,
	      e = n.search,
	      a = n.hash,
	      o = t || "/";return e && "?" !== e && (o += "?" === e.charAt(0) ? e : "?" + e), a && "#" !== a && (o += "#" === a.charAt(0) ? a : "#" + a), o;
	}function createLocation(n, t, e, a) {
	  var o;"string" == typeof n ? (o = parsePath(n)).state = t : (void 0 === (o = _extends({}, n)).pathname && (o.pathname = ""), o.search ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search) : o.search = "", o.hash ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash) : o.hash = "", void 0 !== t && void 0 === o.state && (o.state = t));try {
	    o.pathname = decodeURI(o.pathname);
	  } catch (n) {
	    throw n instanceof URIError ? new URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n;
	  }return e && (o.key = e), a ? o.pathname ? "/" !== o.pathname.charAt(0) && (o.pathname = resolvePathname(o.pathname, a.pathname)) : o.pathname = a.pathname : o.pathname || (o.pathname = "/"), o;
	}function locationsAreEqual(n, t) {
	  return n.pathname === t.pathname && n.search === t.search && n.hash === t.hash && n.key === t.key && valueEqual(n.state, t.state);
	}function createTransitionManager() {
	  var r = null;var a = [];return { setPrompt: function setPrompt(n) {
	      return r = n, function () {
	        r === n && (r = null);
	      };
	    }, confirmTransitionTo: function confirmTransitionTo(n, t, e, a) {
	      if (null != r) {
	        var o = "function" == typeof r ? r(n, t) : r;"string" == typeof o ? "function" == typeof e ? e(o, a) : a(!0) : a(!1 !== o);
	      } else a(!0);
	    }, appendListener: function appendListener(n) {
	      var t = !0;function e() {
	        t && n.apply(void 0, arguments);
	      }return a.push(e), function () {
	        t = !1, a = a.filter(function (n) {
	          return n !== e;
	        });
	      };
	    }, notifyListeners: function notifyListeners() {
	      for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) {
	        t[e] = arguments[e];
	      }a.forEach(function (n) {
	        return n.apply(void 0, t);
	      });
	    } };
	}var canUseDOM = !("undefined" == typeof window || !window.document || !window.document.createElement);function getConfirmation(n, t) {
	  t(window.confirm(n));
	}function supportsHistory() {
	  var n = window.navigator.userAgent;return (-1 === n.indexOf("Android 2.") && -1 === n.indexOf("Android 4.0") || -1 === n.indexOf("Mobile Safari") || -1 !== n.indexOf("Chrome") || -1 !== n.indexOf("Windows Phone")) && window.history && "pushState" in window.history;
	}function supportsPopStateOnHashChange() {
	  return -1 === window.navigator.userAgent.indexOf("Trident");
	}function supportsGoWithoutReloadUsingHash() {
	  return -1 === window.navigator.userAgent.indexOf("Firefox");
	}function isExtraneousPopstateEvent(n) {
	  void 0 === n.state && navigator.userAgent.indexOf("CriOS");
	}var PopStateEvent = "popstate",
	    HashChangeEvent = "hashchange";function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (n) {
	    return {};
	  }
	}function createBrowserHistory(n) {
	  void 0 === n && (n = {}), canUseDOM || invariant(!1);var c = window.history,
	      s = supportsHistory(),
	      t = !supportsPopStateOnHashChange(),
	      e = n,
	      a = e.forceRefresh,
	      h = void 0 !== a && a,
	      o = e.getUserConfirmation,
	      u = void 0 === o ? getConfirmation : o,
	      r = e.keyLength,
	      i = void 0 === r ? 6 : r,
	      f = n.basename ? stripTrailingSlash(addLeadingSlash(n.basename)) : "";function l(n) {
	    var t = n || {},
	        e = t.key,
	        a = t.state,
	        o = window.location,
	        r = o.pathname + o.search + o.hash;return f && (r = stripBasename(r, f)), createLocation(r, a, e);
	  }function d() {
	    return Math.random().toString(36).substr(2, i);
	  }var v = createTransitionManager();function p(n) {
	    _extends(T, n), T.length = c.length, v.notifyListeners(T.location, T.action);
	  }function g(n) {
	    isExtraneousPopstateEvent(n) || w(l(n.state));
	  }function P() {
	    w(l(getHistoryState()));
	  }var m = !1;function w(t) {
	    if (m) m = !1, p();else {
	      v.confirmTransitionTo(t, "POP", u, function (n) {
	        n ? p({ action: "POP", location: t }) : function (n) {
	          var t = T.location,
	              e = H.indexOf(t.key);-1 === e && (e = 0);var a = H.indexOf(n.key);-1 === a && (a = 0);var o = e - a;o && (m = !0, L(o));
	        }(t);
	      });
	    }
	  }var y = l(getHistoryState()),
	      H = [y.key];function x(n) {
	    return f + createPath(n);
	  }function L(n) {
	    c.go(n);
	  }var O = 0;function E(n) {
	    1 === (O += n) && 1 === n ? (window.addEventListener(PopStateEvent, g), t && window.addEventListener(HashChangeEvent, P)) : 0 === O && (window.removeEventListener(PopStateEvent, g), t && window.removeEventListener(HashChangeEvent, P));
	  }var S = !1;var T = { length: c.length, action: "POP", location: y, createHref: x, push: function push(n, t) {
	      var i = createLocation(n, t, d(), T.location);v.confirmTransitionTo(i, "PUSH", u, function (n) {
	        if (n) {
	          var t = x(i),
	              e = i.key,
	              a = i.state;if (s) {
	            if (c.pushState({ key: e, state: a }, null, t), h) window.location.href = t;else {
	              var o = H.indexOf(T.location.key),
	                  r = H.slice(0, -1 === o ? 0 : o + 1);r.push(i.key), H = r, p({ action: "PUSH", location: i });
	            }
	          } else window.location.href = t;
	        }
	      });
	    }, replace: function replace(n, t) {
	      var r = "REPLACE",
	          i = createLocation(n, t, d(), T.location);v.confirmTransitionTo(i, r, u, function (n) {
	        if (n) {
	          var t = x(i),
	              e = i.key,
	              a = i.state;if (s) {
	            if (c.replaceState({ key: e, state: a }, null, t), h) window.location.replace(t);else {
	              var o = H.indexOf(T.location.key);-1 !== o && (H[o] = i.key), p({ action: r, location: i });
	            }
	          } else window.location.replace(t);
	        }
	      });
	    }, go: L, goBack: function goBack() {
	      L(-1);
	    }, goForward: function goForward() {
	      L(1);
	    }, block: function block(n) {
	      void 0 === n && (n = !1);var t = v.setPrompt(n);return S || (E(1), S = !0), function () {
	        return S && (S = !1, E(-1)), t();
	      };
	    }, listen: function listen(n) {
	      var t = v.appendListener(n);return E(1), function () {
	        E(-1), t();
	      };
	    } };return T;
	}var HashChangeEvent$1 = "hashchange",
	    HashPathCoders = { hashbang: { encodePath: function encodePath(n) {
	      return "!" === n.charAt(0) ? n : "!/" + stripLeadingSlash(n);
	    }, decodePath: function decodePath(n) {
	      return "!" === n.charAt(0) ? n.substr(1) : n;
	    } }, noslash: { encodePath: stripLeadingSlash, decodePath: addLeadingSlash }, slash: { encodePath: addLeadingSlash, decodePath: addLeadingSlash } };function getHashPath() {
	  var n = window.location.href,
	      t = n.indexOf("#");return -1 === t ? "" : n.substring(t + 1);
	}function pushHashPath(n) {
	  window.location.hash = n;
	}function replaceHashPath(n) {
	  var t = window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0, 0 <= t ? t : 0) + "#" + n);
	}function createHashHistory(n) {
	  void 0 === n && (n = {}), canUseDOM || invariant(!1);var t = window.history,
	      e = (supportsGoWithoutReloadUsingHash(), n),
	      a = e.getUserConfirmation,
	      i = void 0 === a ? getConfirmation : a,
	      o = e.hashType,
	      r = void 0 === o ? "slash" : o,
	      c = n.basename ? stripTrailingSlash(addLeadingSlash(n.basename)) : "",
	      s = HashPathCoders[r],
	      h = s.encodePath,
	      u = s.decodePath;function f() {
	    var n = u(getHashPath());return c && (n = stripBasename(n, c)), createLocation(n);
	  }var l = createTransitionManager();function d(n) {
	    _extends(E, n), E.length = t.length, l.notifyListeners(E.location, E.action);
	  }var v = !1,
	      p = null;function g() {
	    var n = getHashPath(),
	        t = h(n);if (n !== t) replaceHashPath(t);else {
	      var e = f(),
	          a = E.location;if (!v && locationsAreEqual(a, e)) return;if (p === createPath(e)) return;p = null, function (t) {
	        if (v) v = !1, d();else {
	          l.confirmTransitionTo(t, "POP", i, function (n) {
	            n ? d({ action: "POP", location: t }) : function (n) {
	              var t = E.location,
	                  e = y.lastIndexOf(createPath(t));-1 === e && (e = 0);var a = y.lastIndexOf(createPath(n));-1 === a && (a = 0);var o = e - a;o && (v = !0, H(o));
	            }(t);
	          });
	        }
	      }(e);
	    }
	  }var P = getHashPath(),
	      m = h(P);P !== m && replaceHashPath(m);var w = f(),
	      y = [createPath(w)];function H(n) {
	    t.go(n);
	  }var x = 0;function L(n) {
	    1 === (x += n) && 1 === n ? window.addEventListener(HashChangeEvent$1, g) : 0 === x && window.removeEventListener(HashChangeEvent$1, g);
	  }var O = !1;var E = { length: t.length, action: "POP", location: w, createHref: function createHref(n) {
	      return "#" + h(c + createPath(n));
	    }, push: function push(n, t) {
	      var r = createLocation(n, void 0, void 0, E.location);l.confirmTransitionTo(r, "PUSH", i, function (n) {
	        if (n) {
	          var t = createPath(r),
	              e = h(c + t);if (getHashPath() !== e) {
	            p = t, pushHashPath(e);var a = y.lastIndexOf(createPath(E.location)),
	                o = y.slice(0, -1 === a ? 0 : a + 1);o.push(t), y = o, d({ action: "PUSH", location: r });
	          } else d();
	        }
	      });
	    }, replace: function replace(n, t) {
	      var o = "REPLACE",
	          r = createLocation(n, void 0, void 0, E.location);l.confirmTransitionTo(r, o, i, function (n) {
	        if (n) {
	          var t = createPath(r),
	              e = h(c + t);getHashPath() !== e && (p = t, replaceHashPath(e));var a = y.indexOf(createPath(E.location));-1 !== a && (y[a] = t), d({ action: o, location: r });
	        }
	      });
	    }, go: H, goBack: function goBack() {
	      H(-1);
	    }, goForward: function goForward() {
	      H(1);
	    }, block: function block(n) {
	      void 0 === n && (n = !1);var t = l.setPrompt(n);return O || (L(1), O = !0), function () {
	        return O && (O = !1, L(-1)), t();
	      };
	    }, listen: function listen(n) {
	      var t = l.appendListener(n);return L(1), function () {
	        L(-1), t();
	      };
	    } };return E;
	}function clamp(n, t, e) {
	  return Math.min(Math.max(n, t), e);
	}function createMemoryHistory(n) {
	  void 0 === n && (n = {});var t = n,
	      o = t.getUserConfirmation,
	      e = t.initialEntries,
	      a = void 0 === e ? ["/"] : e,
	      r = t.initialIndex,
	      i = void 0 === r ? 0 : r,
	      c = t.keyLength,
	      s = void 0 === c ? 6 : c,
	      h = createTransitionManager();function u(n) {
	    _extends(g, n), g.length = g.entries.length, h.notifyListeners(g.location, g.action);
	  }function f() {
	    return Math.random().toString(36).substr(2, s);
	  }var l = clamp(i, 0, a.length - 1),
	      d = a.map(function (n) {
	    return createLocation(n, void 0, "string" == typeof n ? f() : n.key || f());
	  }),
	      v = createPath;function p(n) {
	    var t = clamp(g.index + n, 0, g.entries.length - 1),
	        e = g.entries[t];h.confirmTransitionTo(e, "POP", o, function (n) {
	      n ? u({ action: "POP", location: e, index: t }) : u();
	    });
	  }var g = { length: d.length, action: "POP", location: d[l], index: l, entries: d, createHref: v, push: function push(n, t) {
	      var a = createLocation(n, t, f(), g.location);h.confirmTransitionTo(a, "PUSH", o, function (n) {
	        if (n) {
	          var t = g.index + 1,
	              e = g.entries.slice(0);e.length > t ? e.splice(t, e.length - t, a) : e.push(a), u({ action: "PUSH", location: a, index: t, entries: e });
	        }
	      });
	    }, replace: function replace(n, t) {
	      var e = "REPLACE",
	          a = createLocation(n, t, f(), g.location);h.confirmTransitionTo(a, e, o, function (n) {
	        n && (g.entries[g.index] = a, u({ action: e, location: a }));
	      });
	    }, go: p, goBack: function goBack() {
	      p(-1);
	    }, goForward: function goForward() {
	      p(1);
	    }, canGo: function canGo(n) {
	      var t = g.index + n;return 0 <= t && t < g.entries.length;
	    }, block: function block(n) {
	      return void 0 === n && (n = !1), h.setPrompt(n);
	    }, listen: function listen(n) {
	      return h.appendListener(n);
	    } };return g;
	}exports.createBrowserHistory = createBrowserHistory, exports.createHashHistory = createHashHistory, exports.createMemoryHistory = createMemoryHistory, exports.createLocation = createLocation, exports.locationsAreEqual = locationsAreEqual, exports.parsePath = parsePath, exports.createPath = createPath;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	}

	// About 1.5x faster than the two-arg version of Array#splice()
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }

	  list.pop();
	}

	// This implementation is based heavily on node's url.parse
	function resolvePathname(to) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  var toParts = to && to.split('/') || [];
	  var fromParts = from && from.split('/') || [];

	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;

	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }

	  if (!fromParts.length) return '/';

	  var hasTrailingSlash = void 0;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }

	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];

	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }

	  if (!mustEndAbs) for (; up--; up) {
	    fromParts.unshift('..');
	  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

	  var result = fromParts.join('/');

	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

	  return result;
	}

	exports.default = resolvePathname;
	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	function valueEqual(a, b) {
	  if (a === b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return valueEqual(item, b[index]);
	    });
	  }

	  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (aType !== bType) return false;

	  if (aType === 'object') {
	    var aValue = a.valueOf();
	    var bValue = b.valueOf();

	    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);

	    if (aKeys.length !== bKeys.length) return false;

	    return aKeys.every(function (key) {
	      return valueEqual(a[key], b[key]);
	    });
	  }

	  return false;
	}

	exports.default = valueEqual;
	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var isProduction = process.env.NODE_ENV === 'production';
	var prefix = 'Invariant failed';
	function invariant(condition, message) {
	  if (condition) {
	    return;
	  }

	  if (isProduction) {
	    throw new Error(prefix);
	  } else {
	    throw new Error(prefix + ": " + (message || ''));
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, '__esModule', { value: true });

	function _interopDefault(ex) {
	  return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
	}

	var resolvePathname = _interopDefault(__webpack_require__(24));
	var valueEqual = _interopDefault(__webpack_require__(25));
	var warning = _interopDefault(__webpack_require__(21));
	var invariant = _interopDefault(__webpack_require__(26));

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	}
	function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	}
	function hasBasename(path, prefix) {
	  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
	}
	function stripBasename(path, prefix) {
	  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
	}
	function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	}
	function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';
	  var hashIndex = pathname.indexOf('#');

	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');

	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	}
	function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;
	  var path = pathname || '/';
	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
	  return path;
	}

	function createLocation(path, state, key, currentLocation) {
	  var location;

	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = parsePath(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);
	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }

	  if (key) location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }

	  return location;
	}
	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
	}

	function createTransitionManager() {
	  var prompt = null;

	  function setPrompt(nextPrompt) {
	    warning(prompt == null, 'A history supports only one prompt at a time');
	    prompt = nextPrompt;
	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  }

	  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  }

	  var listeners = [];

	  function appendListener(fn) {
	    var isActive = true;

	    function listener() {
	      if (isActive) fn.apply(void 0, arguments);
	    }

	    listeners.push(listener);
	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function notifyListeners() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    listeners.forEach(function (listener) {
	      return listener.apply(void 0, args);
	    });
	  }

	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	}

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	function getConfirmation(message, callback) {
	  callback(window.confirm(message)); // eslint-disable-line no-alert
	}
	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = window.navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
	  return window.history && 'pushState' in window.history;
	}
	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */

	function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	}
	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	}
	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */

	function isExtraneousPopstateEvent(event) {
	  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	}

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    return {};
	  }
	}
	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */

	function createBrowserHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  !canUseDOM ? invariant(false, 'Browser history needs a DOM') : void 0;
	  var globalHistory = window.history;
	  var canUseHistory = supportsHistory();
	  var needsHashChangeListener = !supportsPopStateOnHashChange();
	  var _props = props,
	      _props$forceRefresh = _props.forceRefresh,
	      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
	      _props$getUserConfirm = _props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
	      _props$keyLength = _props.keyLength,
	      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
	  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

	  function getDOMLocation(historyState) {
	    var _ref = historyState || {},
	        key = _ref.key,
	        state = _ref.state;

	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;
	    var path = pathname + search + hash;
	    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
	    if (basename) path = stripBasename(path, basename);
	    return createLocation(path, state, key);
	  }

	  function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  }

	  var transitionManager = createTransitionManager();

	  function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }

	  function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if (isExtraneousPopstateEvent(event)) return;
	    handlePop(getDOMLocation(event.state));
	  }

	  function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  }

	  var forceNextPop = false;

	  function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';
	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({
	            action: action,
	            location: location
	          });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  }

	  function revertPop(fromLocation) {
	    var toLocation = history.location; // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.

	    var toIndex = allKeys.indexOf(toLocation.key);
	    if (toIndex === -1) toIndex = 0;
	    var fromIndex = allKeys.indexOf(fromLocation.key);
	    if (fromIndex === -1) fromIndex = 0;
	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  }

	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key]; // Public interface

	  function createHref(location) {
	    return basename + createPath(location);
	  }

	  function push(path, state) {
	    warning(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	    var action = 'PUSH';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;

	      if (canUseHistory) {
	        globalHistory.pushState({
	          key: key,
	          state: state
	        }, null, href);

	        if (forceRefresh) {
	          window.location.href = href;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
	          nextKeys.push(location.key);
	          allKeys = nextKeys;
	          setState({
	            action: action,
	            location: location
	          });
	        }
	      } else {
	        warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
	        window.location.href = href;
	      }
	    });
	  }

	  function replace(path, state) {
	    warning(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	    var action = 'REPLACE';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;

	      if (canUseHistory) {
	        globalHistory.replaceState({
	          key: key,
	          state: state
	        }, null, href);

	        if (forceRefresh) {
	          window.location.replace(href);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
	          setState({
	            action: action,
	            location: location
	          });
	        }
	      } else {
	        warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
	        window.location.replace(href);
	      }
	    });
	  }

	  function go(n) {
	    globalHistory.go(n);
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  var listenerCount = 0;

	  function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1 && delta === 1) {
	      window.addEventListener(PopStateEvent, handlePopState);
	      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      window.removeEventListener(PopStateEvent, handlePopState);
	      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
	    }
	  }

	  var isBlocked = false;

	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  }

	  function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);
	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  }

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };
	  return history;
	}

	var HashChangeEvent$1 = 'hashchange';
	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substr(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: stripLeadingSlash,
	    decodePath: addLeadingSlash
	  },
	  slash: {
	    encodePath: addLeadingSlash,
	    decodePath: addLeadingSlash
	  }
	};

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	}

	function pushHashPath(path) {
	  window.location.hash = path;
	}

	function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');
	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	}

	function createHashHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  !canUseDOM ? invariant(false, 'Hash history needs a DOM') : void 0;
	  var globalHistory = window.history;
	  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
	  var _props = props,
	      _props$getUserConfirm = _props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
	      _props$hashType = _props.hashType,
	      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
	  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
	  var _HashPathCoders$hashT = HashPathCoders[hashType],
	      encodePath = _HashPathCoders$hashT.encodePath,
	      decodePath = _HashPathCoders$hashT.decodePath;

	  function getDOMLocation() {
	    var path = decodePath(getHashPath());
	    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
	    if (basename) path = stripBasename(path, basename);
	    return createLocation(path);
	  }

	  var transitionManager = createTransitionManager();

	  function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }

	  var forceNextPop = false;
	  var ignorePath = null;

	  function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = encodePath(path);

	    if (path !== encodedPath) {
	      // Ensure we always have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var location = getDOMLocation();
	      var prevLocation = history.location;
	      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

	      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

	      ignorePath = null;
	      handlePop(location);
	    }
	  }

	  function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';
	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({
	            action: action,
	            location: location
	          });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  }

	  function revertPop(fromLocation) {
	    var toLocation = history.location; // TODO: We could probably make this more reliable by
	    // keeping a list of paths we've seen in sessionStorage.
	    // Instead, we just default to 0 for paths we don't know.

	    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
	    if (toIndex === -1) toIndex = 0;
	    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
	    if (fromIndex === -1) fromIndex = 0;
	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  } // Ensure the hash is encoded properly before doing anything else.


	  var path = getHashPath();
	  var encodedPath = encodePath(path);
	  if (path !== encodedPath) replaceHashPath(encodedPath);
	  var initialLocation = getDOMLocation();
	  var allPaths = [createPath(initialLocation)]; // Public interface

	  function createHref(location) {
	    return '#' + encodePath(basename + createPath(location));
	  }

	  function push(path, state) {
	    warning(state === undefined, 'Hash history cannot push state; it is ignored');
	    var action = 'PUSH';
	    var location = createLocation(path, undefined, undefined, history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var path = createPath(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a PUSH, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        pushHashPath(encodedPath);
	        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
	        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
	        nextPaths.push(path);
	        allPaths = nextPaths;
	        setState({
	          action: action,
	          location: location
	        });
	      } else {
	        warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
	        setState();
	      }
	    });
	  }

	  function replace(path, state) {
	    warning(state === undefined, 'Hash history cannot replace state; it is ignored');
	    var action = 'REPLACE';
	    var location = createLocation(path, undefined, undefined, history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var path = createPath(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        replaceHashPath(encodedPath);
	      }

	      var prevIndex = allPaths.indexOf(createPath(history.location));
	      if (prevIndex !== -1) allPaths[prevIndex] = path;
	      setState({
	        action: action,
	        location: location
	      });
	    });
	  }

	  function go(n) {
	    warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
	    globalHistory.go(n);
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  var listenerCount = 0;

	  function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1 && delta === 1) {
	      window.addEventListener(HashChangeEvent$1, handleHashChange);
	    } else if (listenerCount === 0) {
	      window.removeEventListener(HashChangeEvent$1, handleHashChange);
	    }
	  }

	  var isBlocked = false;

	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  }

	  function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);
	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  }

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };
	  return history;
	}

	function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	}
	/**
	 * Creates a history object that stores locations in memory.
	 */

	function createMemoryHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  var _props = props,
	      getUserConfirmation = _props.getUserConfirmation,
	      _props$initialEntries = _props.initialEntries,
	      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
	      _props$initialIndex = _props.initialIndex,
	      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
	      _props$keyLength = _props.keyLength,
	      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
	  var transitionManager = createTransitionManager();

	  function setState(nextState) {
	    _extends(history, nextState);

	    history.length = history.entries.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }

	  function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  }

	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
	  }); // Public interface

	  var createHref = createPath;

	  function push(path, state) {
	    warning(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	    var action = 'PUSH';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;
	      var nextEntries = history.entries.slice(0);

	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }

	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  }

	  function replace(path, state) {
	    warning(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	    var action = 'REPLACE';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      history.entries[history.index] = location;
	      setState({
	        action: action,
	        location: location
	      });
	    });
	  }

	  function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
	    var action = 'POP';
	    var location = history.entries[nextIndex];
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  }

	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }

	    return transitionManager.setPrompt(prompt);
	  }

	  function listen(listener) {
	    return transitionManager.appendListener(listener);
	  }

	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };
	  return history;
	}

	exports.createBrowserHistory = createBrowserHistory;
	exports.createHashHistory = createHashHistory;
	exports.createMemoryHistory = createMemoryHistory;
	exports.createLocation = createLocation;
	exports.locationsAreEqual = locationsAreEqual;
	exports.parsePath = parsePath;
	exports.createPath = createPath;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isarray = __webpack_require__(29);

	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp;
	module.exports.parse = parse;
	module.exports.compile = compile;
	module.exports.tokensToFunction = tokensToFunction;
	module.exports.tokensToRegExp = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	// Match escaped characters that would otherwise appear in future matches.
	// This allows the user to escape special characters that won't transform.
	'(\\\\.)',
	// Match Express-style parameters and un-named parameters with a prefix
	// and optional suffixes. Matches appear as:
	//
	// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse(str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue;
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens;
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile(str, options) {
	  return tokensToFunction(parse(str, options));
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty(str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	  });
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk(str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	  });
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction(tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (_typeof(tokens[i]) === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue;
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue;
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined');
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue;
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty');
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue;
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	      }

	      path += token.prefix + segment;
	    }

	    return path;
	  };
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString(str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup(group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1');
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys(re, keys) {
	  re.keys = keys;
	  return re;
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags(options) {
	  return options.sensitive ? '' : 'i';
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp(path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys);
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp(path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys);
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp(path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options);
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp(tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */keys || options;
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys);
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp(path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */keys || options;
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */keys);
	  }

	  if (isarray(path)) {
	    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
	  }

	  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
	}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */

	var ReactIs = __webpack_require__(4);
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextType: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    getDerivedStateFromError: true,
	    getDerivedStateFromProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    callee: true,
	    arguments: true,
	    arity: true
	};

	var FORWARD_REF_STATICS = {
	    '$$typeof': true,
	    render: true,
	    defaultProps: true,
	    displayName: true,
	    propTypes: true
	};

	var MEMO_STATICS = {
	    '$$typeof': true,
	    compare: true,
	    defaultProps: true,
	    displayName: true,
	    propTypes: true,
	    type: true
	};

	var TYPE_STATICS = {};
	TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

	function getStatics(component) {
	    if (ReactIs.isMemo(component)) {
	        return MEMO_STATICS;
	    }
	    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;

	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') {
	        // don't hoist over string (html) components

	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }

	        var keys = getOwnPropertyNames(sourceComponent);

	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }

	        var targetStatics = getStatics(targetComponent);
	        var sourceStatics = getStatics(sourceComponent);

	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try {
	                    // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }

	        return targetComponent;
	    }

	    return targetComponent;
	}

	module.exports = hoistNonReactStatics;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, '__esModule', { value: true });

	function _interopDefault(ex) {
	  return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
	}

	var createContext = _interopDefault(__webpack_require__(16));
	var React = _interopDefault(__webpack_require__(1));
	var PropTypes = _interopDefault(__webpack_require__(2));
	var warning = _interopDefault(__webpack_require__(21));
	var history = __webpack_require__(22);
	var invariant = _interopDefault(__webpack_require__(26));
	var pathToRegexp = _interopDefault(__webpack_require__(28));
	var reactIs = __webpack_require__(4);
	var hoistStatics = _interopDefault(__webpack_require__(30));

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	// TODO: Replace with React.createContext once we can assume React 16+

	var createNamedContext = function createNamedContext(name) {
	  var context = createContext();
	  context.Provider.displayName = name + ".Provider";
	  context.Consumer.displayName = name + ".Consumer";
	  return context;
	};

	var context =
	/*#__PURE__*/
	createNamedContext('Router');

	/**
	 * The public API for putting history on context.
	 */

	var Router =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Router, _React$Component);

	  Router.computeRootMatch = function computeRootMatch(pathname) {
	    return {
	      path: "/",
	      url: "/",
	      params: {},
	      isExact: pathname === "/"
	    };
	  };

	  function Router(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.state = {
	      location: props.history.location
	    }; // This is a bit of a hack. We have to start listening for location
	    // changes here in the constructor in case there are any <Redirect>s
	    // on the initial render. If there are, they will replace/push when
	    // they mount and since cDM fires in children before parents, we may
	    // get a new location before the <Router> is mounted.

	    _this._isMounted = false;
	    _this._pendingLocation = null;

	    if (!props.staticContext) {
	      _this.unlisten = props.history.listen(function (location) {
	        if (_this._isMounted) {
	          _this.setState({
	            location: location
	          });
	        } else {
	          _this._pendingLocation = location;
	        }
	      });
	    }

	    return _this;
	  }

	  var _proto = Router.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this._isMounted = true;

	    if (this._pendingLocation) {
	      this.setState({
	        location: this._pendingLocation
	      });
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.unlisten) this.unlisten();
	  };

	  _proto.render = function render() {
	    return React.createElement(context.Provider, {
	      children: this.props.children || null,
	      value: {
	        history: this.props.history,
	        location: this.state.location,
	        match: Router.computeRootMatch(this.state.location.pathname),
	        staticContext: this.props.staticContext
	      }
	    });
	  };

	  return Router;
	}(React.Component);

	{
	  Router.propTypes = {
	    children: PropTypes.node,
	    history: PropTypes.object.isRequired,
	    staticContext: PropTypes.object
	  };

	  Router.prototype.componentDidUpdate = function (prevProps) {
	    warning(prevProps.history === this.props.history, "You cannot change <Router history>");
	  };
	}

	/**
	 * The public API for a <Router> that stores location in memory.
	 */

	var MemoryRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(MemoryRouter, _React$Component);

	  function MemoryRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.history = history.createMemoryHistory(_this.props);
	    return _this;
	  }

	  var _proto = MemoryRouter.prototype;

	  _proto.render = function render() {
	    return React.createElement(Router, {
	      history: this.history,
	      children: this.props.children
	    });
	  };

	  return MemoryRouter;
	}(React.Component);

	{
	  MemoryRouter.propTypes = {
	    initialEntries: PropTypes.array,
	    initialIndex: PropTypes.number,
	    getUserConfirmation: PropTypes.func,
	    keyLength: PropTypes.number,
	    children: PropTypes.node
	  };

	  MemoryRouter.prototype.componentDidMount = function () {
	    warning(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
	  };
	}

	var Lifecycle =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Lifecycle, _React$Component);

	  function Lifecycle() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Lifecycle.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    if (this.props.onMount) this.props.onMount.call(this, this);
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
	  };

	  _proto.render = function render() {
	    return null;
	  };

	  return Lifecycle;
	}(React.Component);

	/**
	 * The public API for prompting the user before navigating away from a screen.
	 */

	function Prompt(_ref) {
	  var message = _ref.message,
	      _ref$when = _ref.when,
	      when = _ref$when === void 0 ? true : _ref$when;
	  return React.createElement(context.Consumer, null, function (context$$1) {
	    !context$$1 ? invariant(false, "You should not use <Prompt> outside a <Router>") : void 0;
	    if (!when || context$$1.staticContext) return null;
	    var method = context$$1.history.block;
	    return React.createElement(Lifecycle, {
	      onMount: function onMount(self) {
	        self.release = method(message);
	      },
	      onUpdate: function onUpdate(self, prevProps) {
	        if (prevProps.message !== message) {
	          self.release();
	          self.release = method(message);
	        }
	      },
	      onUnmount: function onUnmount(self) {
	        self.release();
	      },
	      message: message
	    });
	  });
	}

	{
	  var messageType = PropTypes.oneOfType([PropTypes.func, PropTypes.string]);
	  Prompt.propTypes = {
	    when: PropTypes.bool,
	    message: messageType.isRequired
	  };
	}

	var cache = {};
	var cacheLimit = 10000;
	var cacheCount = 0;

	function compilePath(path) {
	  if (cache[path]) return cache[path];
	  var generator = pathToRegexp.compile(path);

	  if (cacheCount < cacheLimit) {
	    cache[path] = generator;
	    cacheCount++;
	  }

	  return generator;
	}
	/**
	 * Public API for generating a URL pathname from a path and parameters.
	 */

	function generatePath(path, params) {
	  if (path === void 0) {
	    path = "/";
	  }

	  if (params === void 0) {
	    params = {};
	  }

	  return path === "/" ? path : compilePath(path)(params, {
	    pretty: true
	  });
	}

	/**
	 * The public API for navigating programmatically with a component.
	 */

	function Redirect(_ref) {
	  var computedMatch = _ref.computedMatch,
	      to = _ref.to,
	      _ref$push = _ref.push,
	      push = _ref$push === void 0 ? false : _ref$push;
	  return React.createElement(context.Consumer, null, function (context$$1) {
	    !context$$1 ? invariant(false, "You should not use <Redirect> outside a <Router>") : void 0;
	    var history$$1 = context$$1.history,
	        staticContext = context$$1.staticContext;
	    var method = push ? history$$1.push : history$$1.replace;
	    var location = history.createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
	      pathname: generatePath(to.pathname, computedMatch.params)
	    }) : to); // When rendering in a static context,
	    // set the new location immediately.

	    if (staticContext) {
	      method(location);
	      return null;
	    }

	    return React.createElement(Lifecycle, {
	      onMount: function onMount() {
	        method(location);
	      },
	      onUpdate: function onUpdate(self, prevProps) {
	        if (!history.locationsAreEqual(prevProps.to, location)) {
	          method(location);
	        }
	      },
	      to: to
	    });
	  });
	}

	{
	  Redirect.propTypes = {
	    push: PropTypes.bool,
	    from: PropTypes.string,
	    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
	  };
	}

	var cache$1 = {};
	var cacheLimit$1 = 10000;
	var cacheCount$1 = 0;

	function compilePath$1(path, options) {
	  var cacheKey = "" + options.end + options.strict + options.sensitive;
	  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
	  if (pathCache[path]) return pathCache[path];
	  var keys = [];
	  var regexp = pathToRegexp(path, keys, options);
	  var result = {
	    regexp: regexp,
	    keys: keys
	  };

	  if (cacheCount$1 < cacheLimit$1) {
	    pathCache[path] = result;
	    cacheCount$1++;
	  }

	  return result;
	}
	/**
	 * Public API for matching a URL pathname to a path.
	 */

	function matchPath(pathname, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  if (typeof options === "string") options = {
	    path: options
	  };
	  var _options = options,
	      path = _options.path,
	      _options$exact = _options.exact,
	      exact = _options$exact === void 0 ? false : _options$exact,
	      _options$strict = _options.strict,
	      strict = _options$strict === void 0 ? false : _options$strict,
	      _options$sensitive = _options.sensitive,
	      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
	  var paths = [].concat(path);
	  return paths.reduce(function (matched, path) {
	    if (matched) return matched;

	    var _compilePath = compilePath$1(path, {
	      end: exact,
	      strict: strict,
	      sensitive: sensitive
	    }),
	        regexp = _compilePath.regexp,
	        keys = _compilePath.keys;

	    var match = regexp.exec(pathname);
	    if (!match) return null;
	    var url = match[0],
	        values = match.slice(1);
	    var isExact = pathname === url;
	    if (exact && !isExact) return null;
	    return {
	      path: path,
	      // the path used to match
	      url: path === "/" && url === "" ? "/" : url,
	      // the matched portion of the URL
	      isExact: isExact,
	      // whether or not we matched exactly
	      params: keys.reduce(function (memo, key, index) {
	        memo[key.name] = values[index];
	        return memo;
	      }, {})
	    };
	  }, null);
	}

	function isEmptyChildren(children) {
	  return React.Children.count(children) === 0;
	}
	/**
	 * The public API for matching a single path and rendering.
	 */

	var Route =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Route, _React$Component);

	  function Route() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Route.prototype;

	  _proto.render = function render() {
	    var _this = this;

	    return React.createElement(context.Consumer, null, function (context$$1) {
	      !context$$1 ? invariant(false, "You should not use <Route> outside a <Router>") : void 0;
	      var location = _this.props.location || context$$1.location;
	      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
	      : _this.props.path ? matchPath(location.pathname, _this.props) : context$$1.match;

	      var props = _extends({}, context$$1, {
	        location: location,
	        match: match
	      });

	      var _this$props = _this.props,
	          children = _this$props.children,
	          component = _this$props.component,
	          render = _this$props.render; // Preact uses an empty array as children by
	      // default, so use null if that's the case.

	      if (Array.isArray(children) && children.length === 0) {
	        children = null;
	      }

	      if (typeof children === "function") {
	        children = children(props);

	        if (children === undefined) {
	          {
	            var path = _this.props.path;
	            warning(false, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`");
	          }

	          children = null;
	        }
	      }

	      return React.createElement(context.Provider, {
	        value: props
	      }, children && !isEmptyChildren(children) ? children : props.match ? component ? React.createElement(component, props) : render ? render(props) : null : null);
	    });
	  };

	  return Route;
	}(React.Component);

	{
	  Route.propTypes = {
	    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
	    component: function component(props, propName) {
	      if (props[propName] && !reactIs.isValidElementType(props[propName])) {
	        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
	      }
	    },
	    exact: PropTypes.bool,
	    location: PropTypes.object,
	    path: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
	    render: PropTypes.func,
	    sensitive: PropTypes.bool,
	    strict: PropTypes.bool
	  };

	  Route.prototype.componentDidMount = function () {
	    warning(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored");
	    warning(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored");
	    warning(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");
	  };

	  Route.prototype.componentDidUpdate = function (prevProps) {
	    warning(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');
	    warning(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	  };
	}

	function addLeadingSlash(path) {
	  return path.charAt(0) === "/" ? path : "/" + path;
	}

	function addBasename(basename, location) {
	  if (!basename) return location;
	  return _extends({}, location, {
	    pathname: addLeadingSlash(basename) + location.pathname
	  });
	}

	function stripBasename(basename, location) {
	  if (!basename) return location;
	  var base = addLeadingSlash(basename);
	  if (location.pathname.indexOf(base) !== 0) return location;
	  return _extends({}, location, {
	    pathname: location.pathname.substr(base.length)
	  });
	}

	function createURL(location) {
	  return typeof location === "string" ? location : history.createPath(location);
	}

	function staticHandler(methodName) {
	  return function () {
	    invariant(false, "You cannot %s with <StaticRouter>", methodName);
	  };
	}

	function noop() {}
	/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */

	var StaticRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(StaticRouter, _React$Component);

	  function StaticRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

	    _this.handlePush = function (location) {
	      return _this.navigateTo(location, "PUSH");
	    };

	    _this.handleReplace = function (location) {
	      return _this.navigateTo(location, "REPLACE");
	    };

	    _this.handleListen = function () {
	      return noop;
	    };

	    _this.handleBlock = function () {
	      return noop;
	    };

	    return _this;
	  }

	  var _proto = StaticRouter.prototype;

	  _proto.navigateTo = function navigateTo(location, action) {
	    var _this$props = this.props,
	        _this$props$basename = _this$props.basename,
	        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
	        context = _this$props.context;
	    context.action = action;
	    context.location = addBasename(basename, history.createLocation(location));
	    context.url = createURL(context.location);
	  };

	  _proto.render = function render() {
	    var _this$props2 = this.props,
	        _this$props2$basename = _this$props2.basename,
	        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
	        _this$props2$context = _this$props2.context,
	        context = _this$props2$context === void 0 ? {} : _this$props2$context,
	        _this$props2$location = _this$props2.location,
	        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
	        rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

	    var history$$1 = {
	      createHref: function createHref(path) {
	        return addLeadingSlash(basename + createURL(path));
	      },
	      action: "POP",
	      location: stripBasename(basename, history.createLocation(location)),
	      push: this.handlePush,
	      replace: this.handleReplace,
	      go: staticHandler("go"),
	      goBack: staticHandler("goBack"),
	      goForward: staticHandler("goForward"),
	      listen: this.handleListen,
	      block: this.handleBlock
	    };
	    return React.createElement(Router, _extends({}, rest, {
	      history: history$$1,
	      staticContext: context
	    }));
	  };

	  return StaticRouter;
	}(React.Component);

	{
	  StaticRouter.propTypes = {
	    basename: PropTypes.string,
	    context: PropTypes.object,
	    location: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	  };

	  StaticRouter.prototype.componentDidMount = function () {
	    warning(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
	  };
	}

	/**
	 * The public API for rendering the first <Route> that matches.
	 */

	var Switch =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Switch, _React$Component);

	  function Switch() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Switch.prototype;

	  _proto.render = function render() {
	    var _this = this;

	    return React.createElement(context.Consumer, null, function (context$$1) {
	      !context$$1 ? invariant(false, "You should not use <Switch> outside a <Router>") : void 0;
	      var location = _this.props.location || context$$1.location;
	      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
	      // here because toArray adds keys to all child elements and we do not want
	      // to trigger an unmount/remount for two <Route>s that render the same
	      // component at different URLs.

	      React.Children.forEach(_this.props.children, function (child) {
	        if (match == null && React.isValidElement(child)) {
	          element = child;
	          var path = child.props.path || child.props.from;
	          match = path ? matchPath(location.pathname, _extends({}, child.props, {
	            path: path
	          })) : context$$1.match;
	        }
	      });
	      return match ? React.cloneElement(element, {
	        location: location,
	        computedMatch: match
	      }) : null;
	    });
	  };

	  return Switch;
	}(React.Component);

	{
	  Switch.propTypes = {
	    children: PropTypes.node,
	    location: PropTypes.object
	  };

	  Switch.prototype.componentDidUpdate = function (prevProps) {
	    warning(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');
	    warning(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	  };
	}

	/**
	 * A public higher-order component to access the imperative API
	 */

	function withRouter(Component) {
	  var C = function C(props) {
	    var wrappedComponentRef = props.wrappedComponentRef,
	        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

	    return React.createElement(Route, {
	      children: function children(routeComponentProps) {
	        return React.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
	          ref: wrappedComponentRef
	        }));
	      }
	    });
	  };

	  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
	  C.WrappedComponent = Component;

	  {
	    C.propTypes = {
	      wrappedComponentRef: PropTypes.func
	    };
	  }

	  return hoistStatics(C, Component);
	}

	{
	  if (typeof window !== "undefined") {
	    var global = window;
	    var key = "__react_router_build__";
	    var buildNames = {
	      cjs: "CommonJS",
	      esm: "ES modules",
	      umd: "UMD"
	    };

	    if (global[key] && global[key] !== "cjs") {
	      var initialBuildName = buildNames[global[key]];
	      var secondaryBuildName = buildNames["cjs"]; // TODO: Add link to article that explains in detail how to avoid
	      // loading 2 different builds.

	      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
	    }

	    global[key] = "cjs";
	  }
	}

	exports.MemoryRouter = MemoryRouter;
	exports.Prompt = Prompt;
	exports.Redirect = Redirect;
	exports.Route = Route;
	exports.Router = Router;
	exports.StaticRouter = StaticRouter;
	exports.Switch = Switch;
	exports.generatePath = generatePath;
	exports.matchPath = matchPath;
	exports.withRouter = withRouter;
	exports.__RouterContext = context;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, '__esModule', { value: true });

	function _interopDefault(ex) {
	  return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
	}

	var React = _interopDefault(__webpack_require__(1));
	var reactRouter = __webpack_require__(14);
	var history = __webpack_require__(22);
	var PropTypes = _interopDefault(__webpack_require__(2));
	var warning = _interopDefault(__webpack_require__(21));
	var invariant = _interopDefault(__webpack_require__(26));

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	/**
	 * The public API for a <Router> that uses HTML5 history.
	 */

	var BrowserRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(BrowserRouter, _React$Component);

	  function BrowserRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.history = history.createBrowserHistory(_this.props);
	    return _this;
	  }

	  var _proto = BrowserRouter.prototype;

	  _proto.render = function render() {
	    return React.createElement(reactRouter.Router, {
	      history: this.history,
	      children: this.props.children
	    });
	  };

	  return BrowserRouter;
	}(React.Component);

	{
	  BrowserRouter.propTypes = {
	    basename: PropTypes.string,
	    children: PropTypes.node,
	    forceRefresh: PropTypes.bool,
	    getUserConfirmation: PropTypes.func,
	    keyLength: PropTypes.number
	  };

	  BrowserRouter.prototype.componentDidMount = function () {
	    warning(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
	  };
	}

	/**
	 * The public API for a <Router> that uses window.location.hash.
	 */

	var HashRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(HashRouter, _React$Component);

	  function HashRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.history = history.createHashHistory(_this.props);
	    return _this;
	  }

	  var _proto = HashRouter.prototype;

	  _proto.render = function render() {
	    return React.createElement(reactRouter.Router, {
	      history: this.history,
	      children: this.props.children
	    });
	  };

	  return HashRouter;
	}(React.Component);

	{
	  HashRouter.propTypes = {
	    basename: PropTypes.string,
	    children: PropTypes.node,
	    getUserConfirmation: PropTypes.func,
	    hashType: PropTypes.oneOf(["hashbang", "noslash", "slash"])
	  };

	  HashRouter.prototype.componentDidMount = function () {
	    warning(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
	  };
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	/**
	 * The public API for rendering a history-aware <a>.
	 */

	var Link =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Link, _React$Component);

	  function Link() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Link.prototype;

	  _proto.handleClick = function handleClick(event, history$$1) {
	    if (this.props.onClick) this.props.onClick(event);

	    if (!event.defaultPrevented && // onClick prevented default
	    event.button === 0 && ( // ignore everything but left clicks
	    !this.props.target || this.props.target === "_self") && // let browser handle "target=_blank" etc.
	    !isModifiedEvent(event) // ignore clicks with modifier keys
	    ) {
	        event.preventDefault();
	        var method = this.props.replace ? history$$1.replace : history$$1.push;
	        method(this.props.to);
	      }
	  };

	  _proto.render = function render() {
	    var _this = this;

	    var _this$props = this.props,
	        innerRef = _this$props.innerRef,
	        replace = _this$props.replace,
	        to = _this$props.to,
	        rest = _objectWithoutPropertiesLoose(_this$props, ["innerRef", "replace", "to"]); // eslint-disable-line no-unused-vars


	    return React.createElement(reactRouter.__RouterContext.Consumer, null, function (context) {
	      !context ? invariant(false, "You should not use <Link> outside a <Router>") : void 0;
	      var location = typeof to === "string" ? history.createLocation(to, null, null, context.location) : to;
	      var href = location ? context.history.createHref(location) : "";
	      return React.createElement("a", _extends({}, rest, {
	        onClick: function onClick(event) {
	          return _this.handleClick(event, context.history);
	        },
	        href: href,
	        ref: innerRef
	      }));
	    });
	  };

	  return Link;
	}(React.Component);

	{
	  var toType = PropTypes.oneOfType([PropTypes.string, PropTypes.object]);
	  var innerRefType = PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.shape({
	    current: PropTypes.any
	  })]);
	  Link.propTypes = {
	    innerRef: innerRefType,
	    onClick: PropTypes.func,
	    replace: PropTypes.bool,
	    target: PropTypes.string,
	    to: toType.isRequired
	  };
	}

	function joinClassnames() {
	  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
	    classnames[_key] = arguments[_key];
	  }

	  return classnames.filter(function (i) {
	    return i;
	  }).join(" ");
	}
	/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */

	function NavLink(_ref) {
	  var _ref$ariaCurrent = _ref["aria-current"],
	      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
	      _ref$activeClassName = _ref.activeClassName,
	      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
	      activeStyle = _ref.activeStyle,
	      classNameProp = _ref.className,
	      exact = _ref.exact,
	      isActiveProp = _ref.isActive,
	      location = _ref.location,
	      strict = _ref.strict,
	      styleProp = _ref.style,
	      to = _ref.to,
	      rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to"]);

	  var path = (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === "object" ? to.pathname : to; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

	  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
	  return React.createElement(reactRouter.Route, {
	    path: escapedPath,
	    exact: exact,
	    strict: strict,
	    location: location,
	    children: function children(_ref2) {
	      var location = _ref2.location,
	          match = _ref2.match;
	      var isActive = !!(isActiveProp ? isActiveProp(match, location) : match);
	      var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
	      var style = isActive ? _extends({}, styleProp, activeStyle) : styleProp;
	      return React.createElement(Link, _extends({
	        "aria-current": isActive && ariaCurrent || null,
	        className: className,
	        style: style,
	        to: to
	      }, rest));
	    }
	  });
	}

	{
	  var ariaCurrentType = PropTypes.oneOf(["page", "step", "location", "date", "time", "true"]);
	  NavLink.propTypes = _extends({}, Link.propTypes, {
	    "aria-current": ariaCurrentType,
	    activeClassName: PropTypes.string,
	    activeStyle: PropTypes.object,
	    className: PropTypes.string,
	    exact: reactRouter.Route.propTypes.exact,
	    isActive: PropTypes.func,
	    location: PropTypes.object,
	    strict: reactRouter.Route.propTypes.strict,
	    style: PropTypes.object
	  });
	}

	Object.keys(reactRouter).forEach(function (key) {
	  exports[key] = reactRouter[key];
	});
	exports.BrowserRouter = BrowserRouter;
	exports.HashRouter = HashRouter;
	exports.Link = Link;
	exports.NavLink = NavLink;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(34)) === 'object' && __webpack_require__(34)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })
/******/ ])
});
;