(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["t-react-form-generator"] = factory();
	else
		root["t-react-form-generator"] = factory();
})(this, function() {
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	var _tReactInputField = __webpack_require__(34);

	var _tReactInputField2 = _interopRequireDefault(_tReactInputField);

	var _formValidator = __webpack_require__(20);

	var _formValidator2 = _interopRequireDefault(_formValidator);

	var _clamp = __webpack_require__(19);

	var _clamp2 = _interopRequireDefault(_clamp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function generate(fields, val, bText) {
	  return function (_React$Component) {
	    _inherits(_class, _React$Component);

	    _createClass(_class, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        (0, _clamp2.default)(this.refs.errMsg, { clamp: 2 });
	      }
	    }]);

	    function _class(props) {
	      _classCallCheck(this, _class);

	      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

	      _this.state = {
	        validator: val
	      };
	      return _this;
	    }

	    _createClass(_class, [{
	      key: 'onSubmit',
	      value: function onSubmit() {
	        this.state.validator.setEnabled(true);
	        if (this.state.validator.validate(true)) {
	          this.props.onSubmit(this.state.validator);
	        } else {
	          this.forceUpdate();
	        }
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this2 = this;

	        var inputFields = fields.map(function (field) {
	          var func = function func(e) {
	            _this2.state.validator[field.name].update(e.target.value);
	            _this2.state.validator.validate(false);
	            _this2.forceUpdate();
	          };
	          return _react2.default.createElement(_tReactInputField2.default, {
	            key: field.name,
	            autoFocus: field.autoFocus,
	            className: field.name,
	            onChange: func,
	            onEnter: _this2.onSubmit,
	            password: field.isPassword,
	            preText: field.preText,
	            placeholder: field.placeholder,
	            infoBubbleText: field.helpText,
	            showError: _this2.state.validator[field.name].shouldHighlight,
	            value: _this2.state.validator[field.name].value
	          });
	        });

	        var errMsg = this.state.validator.getErrorMessage();
	        if (this.props.extErrMsg) {
	          if (errMsg) {
	            errMsg = this.props.extErrMsg + ", " + errMsg;
	          } else {
	            errMsg = this.props.extErrMsg;
	          }
	        }

	        return _react2.default.createElement(
	          'div',
	          { className: 'form-wrapper' },
	          _react2.default.createElement(
	            'div',
	            { className: 'input-wrapper' },
	            inputFields,
	            _react2.default.createElement(
	              'div',
	              { className: 'err-msg', ref: 'errMsg' },
	              errMsg
	            )
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'action-button', onClick: this.onSubmit },
	            bText
	          )
	        );
	      }
	    }]);

	    return _class;
	  }(_react2.default.Component);
	}

	function FormGenerator(buttonText) {
	  var _val = new _formValidator2.default(false);
	  var _fields = [];
	  var _bText = buttonText;
	  this.setButtonText = function (text) {
	    _bText = text;
	  };

	  this.addField = function (name, defaultValue, placeholder, helpText, autoFocus, isPassword, preText) {
	    _fields.push({
	      name: name,
	      placeholder: placeholder,
	      autoFocus: autoFocus,
	      helpText: helpText,
	      isPassword: isPassword,
	      preText: preText
	    });
	    _val.addField(name, defaultValue);
	  };
	  this.addValidator = function () {
	    _val.addValidator.apply(_val, arguments);
	  };
	  this.generate = function () {
	    // var genClass = React.createClass({
	    //   componentDidMount: function(){
	    //     clamp(this.refs.errMsg, {clamp: 2});
	    //   },
	    //
	    //   getInitialState: function(){
	    //     return {
	    //       validator: _val,
	    //     };
	    //   },
	    //
	    //   onSubmit: function(){
	    //     this.state.validator.setEnabled(true);
	    //     if (this.state.validator.validate(true)) {
	    //       this.props.onSubmit(this.state.validator);
	    //     }
	    //     else{
	    //       this.forceUpdate();
	    //     }
	    //   },
	    //
	    //   render: function(){
	    //     var inputFields = _fields.map(function(field){
	    //       var func = function(e){
	    //         this.state.validator[field.name].update(e.target.value);
	    //         this.state.validator.validate(false);
	    //         this.forceUpdate();
	    //       }.bind(this);
	    //       return (
	    //         <InputField
	    //           key={field.name}
	    //           autoFocus={field.autoFocus}
	    //           className={field.name}
	    //           onChange={func}
	    //           onEnter={this.onSubmit}
	    //           password={field.isPassword}
	    //           preText={field.preText}
	    //           placeholder={field.placeholder}
	    //           infoBubbleText={field.helpText}
	    //           showError={this.state.validator[field.name].shouldHighlight}
	    //           value={this.state.validator[field.name].value}
	    //           />
	    //       );
	    //     }.bind(this));
	    //
	    //     var errMsg = this.state.validator.getErrorMessage();
	    //     if (this.props.extErrMsg) {
	    //       if (errMsg) {
	    //         errMsg = this.props.extErrMsg + ", " + errMsg;
	    //       }
	    //       else {
	    //         errMsg = this.props.extErrMsg;
	    //       }
	    //     }
	    //
	    //     return (
	    //       <div className="form-wrapper">
	    //         <div className="input-wrapper">
	    //           {inputFields}
	    //           <div className="err-msg" ref={"errMsg"}>{errMsg}</div>
	    //         </div>
	    //         <button className="action-button" onClick={this.onSubmit}>{_bText}</button>
	    //       </div>
	    //     );
	    //   },
	    // });

	    return generate(_fields, _val, _bText);
	  };
	}

	exports.default = FormGenerator;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

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
	function defaultClearTimeout () {
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
	} ())
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
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
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
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
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
	    while(len) {
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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(8);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
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
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(6);

	var ReactCurrentOwner = __webpack_require__(7);

	var warning = __webpack_require__(2);
	var canDefineProperty = __webpack_require__(14);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var REACT_ELEMENT_TYPE = __webpack_require__(16);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 6 */
/***/ function(module, exports) {

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
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
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
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
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


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(5);

	var ReactNoopUpdateQueue = __webpack_require__(12);

	var canDefineProperty = __webpack_require__(14);
	var emptyObject = __webpack_require__(9);
	var invariant = __webpack_require__(3);
	var warning = __webpack_require__(2);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(5);

	var ReactCurrentOwner = __webpack_require__(7);

	var invariant = __webpack_require__(3);
	var warning = __webpack_require__(2);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();

	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };

	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },


	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var warning = __webpack_require__(2);

	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

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

	module.exports = getIteratorFn;

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	module.exports = REACT_ELEMENT_TYPE;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(7);
	var ReactComponentTreeHook = __webpack_require__(11);
	var ReactElement = __webpack_require__(4);

	var checkReactTypeSpec = __webpack_require__(30);

	var canDefineProperty = __webpack_require__(14);
	var getIteratorFn = __webpack_require__(15);
	var warning = __webpack_require__(2);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      if (typeof type !== 'function' && typeof type !== 'string') {
	        var info = '';
	        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
	        }
	        info += getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
	      }
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	/*!
	* Clamp.js 0.5.1
	*
	* Copyright 2011-2013, Joseph Schmitt http://joe.sh
	* Released under the WTFPL license
	* http://sam.zoy.org/wtfpl/
	*/

	/**
	 * Clamps a text node.
	 * @param {HTMLElement} element. Element containing the text node to clamp.
	 * @param {Object} options. Options to pass to the clamper.
	 */
	function clamp(element, options) {
	    options = options || {};

	    var self = this,
	        win = window,
	        opt = {
	        clamp: options.clamp || 2,
	        useNativeClamp: typeof options.useNativeClamp != 'undefined' ? options.useNativeClamp : true,
	        splitOnChars: options.splitOnChars || ['.', '-', '–', '—', ' '], //Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).
	        animate: options.animate || false,
	        truncationChar: options.truncationChar || '…',
	        truncationHTML: options.truncationHTML
	    },
	        sty = element.style,
	        originalText = element.innerHTML,
	        supportsNativeClamp = typeof element.style.webkitLineClamp != 'undefined',
	        clampValue = opt.clamp,
	        isCSSValue = clampValue.indexOf && (clampValue.indexOf('px') > -1 || clampValue.indexOf('em') > -1),
	        truncationHTMLContainer;

	    if (opt.truncationHTML) {
	        truncationHTMLContainer = document.createElement('span');
	        truncationHTMLContainer.innerHTML = opt.truncationHTML;
	    }

	    // UTILITY FUNCTIONS __________________________________________________________

	    /**
	     * Return the current style for an element.
	     * @param {HTMLElement} elem The element to compute.
	     * @param {string} prop The style property.
	     * @returns {number}
	     */
	    function computeStyle(elem, prop) {
	        if (!win.getComputedStyle) {
	            win.getComputedStyle = function (el, pseudo) {
	                this.el = el;
	                this.getPropertyValue = function (prop) {
	                    var re = /(\-([a-z]){1})/g;
	                    if (prop == 'float') prop = 'styleFloat';
	                    if (re.test(prop)) {
	                        prop = prop.replace(re, function () {
	                            return arguments[2].toUpperCase();
	                        });
	                    }
	                    return el.currentStyle && el.currentStyle[prop] ? el.currentStyle[prop] : null;
	                };
	                return this;
	            };
	        }

	        return win.getComputedStyle(elem, null).getPropertyValue(prop);
	    }

	    /**
	     * Returns the maximum number of lines of text that should be rendered based
	     * on the current height of the element and the line-height of the text.
	     */
	    function getMaxLines(height) {
	        var availHeight = height || element.clientHeight,
	            lineHeight = getLineHeight(element);

	        return Math.max(Math.floor(availHeight / lineHeight), 0);
	    }

	    /**
	     * Returns the maximum height a given element should have based on the line-
	     * height of the text and the given clamp value.
	     */
	    function getMaxHeight(clmp) {
	        var lineHeight = getLineHeight(element);
	        return lineHeight * clmp;
	    }

	    /**
	     * Returns the line-height of an element as an integer.
	     */
	    function getLineHeight(elem) {
	        var lh = computeStyle(elem, 'line-height');
	        if (lh == 'normal') {
	            // Normal line heights vary from browser to browser. The spec recommends
	            // a value between 1.0 and 1.2 of the font size. Using 1.1 to split the diff.
	            lh = parseInt(computeStyle(elem, 'font-size')) * 1.2;
	        }
	        return parseInt(lh);
	    }

	    // MEAT AND POTATOES (MMMM, POTATOES...) ______________________________________
	    var splitOnChars = opt.splitOnChars.slice(0),
	        splitChar = splitOnChars[0],
	        chunks,
	        lastChunk;

	    /**
	     * Gets an element's last child. That may be another node or a node's contents.
	     */
	    function getLastChild(elem) {
	        //Current element has children, need to go deeper and get last child as a text node
	        if (elem.lastChild.children && elem.lastChild.children.length > 0) {
	            return getLastChild(Array.prototype.slice.call(elem.children).pop());
	        }
	        //This is the absolute last child, a text node, but something's wrong with it. Remove it and keep trying
	        else if (!elem.lastChild || !elem.lastChild.nodeValue || elem.lastChild.nodeValue == '' || elem.lastChild.nodeValue == opt.truncationChar) {
	                elem.lastChild.parentNode.removeChild(elem.lastChild);
	                return getLastChild(element);
	            }
	            //This is the last child we want, return it
	            else {
	                    return elem.lastChild;
	                }
	    }

	    /**
	     * Removes one character at a time from the text until its width or
	     * height is beneath the passed-in max param.
	     */
	    function truncate(target, maxHeight) {
	        if (!maxHeight) {
	            return;
	        }

	        /**
	         * Resets global variables.
	         */
	        function reset() {
	            splitOnChars = opt.splitOnChars.slice(0);
	            splitChar = splitOnChars[0];
	            chunks = null;
	            lastChunk = null;
	        }

	        var nodeValue = target.nodeValue.replace(opt.truncationChar, '');

	        //Grab the next chunks
	        if (!chunks) {
	            //If there are more characters to try, grab the next one
	            if (splitOnChars.length > 0) {
	                splitChar = splitOnChars.shift();
	            }
	            //No characters to chunk by. Go character-by-character
	            else {
	                    splitChar = '';
	                }

	            chunks = nodeValue.split(splitChar);
	        }

	        //If there are chunks left to remove, remove the last one and see if
	        // the nodeValue fits.
	        if (chunks.length > 1) {
	            // console.log('chunks', chunks);
	            lastChunk = chunks.pop();
	            // console.log('lastChunk', lastChunk);
	            applyEllipsis(target, chunks.join(splitChar));
	        }
	        //No more chunks can be removed using this character
	        else {
	                chunks = null;
	            }

	        //Insert the custom HTML before the truncation character
	        if (truncationHTMLContainer) {
	            target.nodeValue = target.nodeValue.replace(opt.truncationChar, '');
	            element.innerHTML = target.nodeValue + ' ' + truncationHTMLContainer.innerHTML + opt.truncationChar;
	        }

	        //Search produced valid chunks
	        if (chunks) {
	            //It fits
	            if (element.clientHeight <= maxHeight) {
	                //There's still more characters to try splitting on, not quite done yet
	                if (splitOnChars.length >= 0 && splitChar != '') {
	                    applyEllipsis(target, chunks.join(splitChar) + splitChar + lastChunk);
	                    chunks = null;
	                }
	                //Finished!
	                else {
	                        return element.innerHTML;
	                    }
	            }
	        }
	        //No valid chunks produced
	        else {
	                //No valid chunks even when splitting by letter, time to move
	                //on to the next node
	                if (splitChar == '') {
	                    applyEllipsis(target, '');
	                    target = getLastChild(element);

	                    reset();
	                }
	            }

	        //If you get here it means still too big, let's keep truncating
	        if (opt.animate) {
	            setTimeout(function () {
	                truncate(target, maxHeight);
	            }, opt.animate === true ? 10 : opt.animate);
	        } else {
	            return truncate(target, maxHeight);
	        }
	    }

	    function applyEllipsis(elem, str) {
	        elem.nodeValue = str + opt.truncationChar;
	    }

	    // CONSTRUCTOR ________________________________________________________________

	    if (clampValue == 'auto') {
	        clampValue = getMaxLines();
	    } else if (isCSSValue) {
	        clampValue = getMaxLines(parseInt(clampValue));
	    }

	    var clampedText;
	    if (supportsNativeClamp && opt.useNativeClamp) {
	        sty.overflow = 'hidden';
	        sty.textOverflow = 'ellipsis';
	        sty.webkitBoxOrient = 'vertical';
	        sty.display = '-webkit-box';
	        sty.webkitLineClamp = clampValue;

	        if (isCSSValue) {
	            sty.height = opt.clamp + 'px';
	        }
	    } else {
	        var height = getMaxHeight(clampValue);
	        if (height <= element.clientHeight) {
	            clampedText = truncate(getLastChild(element), height);
	        }
	    }

	    return {
	        'original': originalText,
	        'clamped': clampedText
	    };
	}

	module.exports = clamp;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	function Field(name, defaultVal) {
	  this.name = name;
	  this.value = defaultVal;
	  this.shouldHighlight = false;
	  this.update = function (newVal) {
	    this.shouldHighlight = false;
	    this.value = newVal;
	  };
	}

	function Validator(validatorFunc, errorMessage, fields) {
	  this.validatorFunc = validatorFunc;
	  this.errorMessage = errorMessage;
	  this.fields = fields;
	  this.validate = function (highlight) {
	    // Get field values
	    var fieldValues = this.fields.map(function (field) {
	      return field.value;
	    });
	    // Validate
	    this.isValid = this.validatorFunc.apply(null, fieldValues);
	    if (!this.isValid && highlight) {
	      for (var i = 0; i < this.fields.length; i++) {
	        this.fields[i].shouldHighlight = true;
	      }
	    }
	    return this.isValid;
	  };
	}

	function FormValidator(enabled) {
	  /**If not enabled, form is valid by default*/
	  var _enabled = enabled;
	  var _validators = [];
	  var _fields = [];

	  var _sortValidators = function _sortValidators() {
	    return _validators.sort(function (a, b) {
	      return a.fields.length - b.fields.length;
	    });
	  };

	  this.setEnabled = function (val) {
	    _enabled = val;
	  };

	  this.addField = function (name, defaultVal) {
	    this[name] = new Field(name, defaultVal);
	    _fields.push(this[name]);
	    return this[name];
	  };

	  this.addValidator = function () {
	    /**Arguments to fieldvalidator*/
	    var fields = Array.prototype.slice.call(arguments, 2).map(function (fieldName) {
	      return this[fieldName];
	    }.bind(this));
	    var validator = new Validator(arguments[0], arguments[1], fields);
	    _validators.push(validator);
	  };

	  this.validate = function (highlight) {
	    if (!_enabled) {
	      // If not enabled, nothing should be highlighted regardless
	      for (var i = 0; i < _fields.length; i++) {
	        _fields[i].shouldHighlight = false;
	      }
	      this.isValid = true;
	      return this.isValid;
	    }

	    // Highlight fields with errors by default
	    highlight = typeof highlight !== 'undefined' ? highlight : true;

	    // Sort validators according to number of fields validated
	    var sortedValidators = _sortValidators();
	    // Validate in order, any validator invalid = form invalid
	    this.isValid = true;
	    for (var i = 0; i < sortedValidators.length; i++) {
	      // Note: Order of args to the '&&' operator matters. validate() must be called for all validators.
	      this.isValid = sortedValidators[i].validate(highlight) && this.isValid;
	    }
	    return this.isValid;
	  };

	  this.getErrorMessage = function () {
	    if (!_enabled) {
	      return "";
	    }

	    var sortedVals = _sortValidators();
	    var errArray = [];
	    for (var i = 0; i < sortedVals.length; i++) {
	      var val = sortedVals[i];
	      if (!val.isValid) {
	        errArray.push(val.errorMessage);
	      }
	    }
	    return errArray.join(', ');
	  };
	}

	module.exports = FormValidator;
	module.exports.Validator = Validator;
	module.exports.Field = Field;

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(5);

	var invariant = __webpack_require__(3);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(6);

	var ReactChildren = __webpack_require__(24);
	var ReactComponent = __webpack_require__(10);
	var ReactPureComponent = __webpack_require__(28);
	var ReactClass = __webpack_require__(25);
	var ReactDOMFactories = __webpack_require__(26);
	var ReactElement = __webpack_require__(4);
	var ReactPropTypes = __webpack_require__(27);
	var ReactVersion = __webpack_require__(29);

	var onlyChild = __webpack_require__(31);
	var warning = __webpack_require__(2);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(17);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var PooledClass = __webpack_require__(22);
	var ReactElement = __webpack_require__(4);

	var emptyFunction = __webpack_require__(8);
	var traverseAllChildren = __webpack_require__(32);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(5),
	    _assign = __webpack_require__(6);

	var ReactComponent = __webpack_require__(10);
	var ReactElement = __webpack_require__(4);
	var ReactPropTypeLocationNames = __webpack_require__(13);
	var ReactNoopUpdateQueue = __webpack_require__(12);

	var emptyObject = __webpack_require__(9);
	var invariant = __webpack_require__(3);
	var warning = __webpack_require__(2);

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */


	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: 'DEFINE_MANY',

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: 'DEFINE_MANY',

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: 'DEFINE_MANY',

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: 'DEFINE_MANY_MERGED',

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: 'DEFINE_MANY_MERGED',

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: 'DEFINE_MANY_MERGED',

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: 'DEFINE_ONCE',

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: 'DEFINE_MANY',

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: 'DEFINE_MANY',

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: 'DEFINE_MANY',

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: 'DEFINE_ONCE',

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: 'DEFINE_MANY',

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: 'OVERRIDE_BASE'

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, 'childContext');
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, 'context');
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, 'prop');
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === 'OVERRIDE_BASE') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === 'DEFINE_MANY_MERGED') {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === 'DEFINE_MANY') {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(4);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(17);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(4);
	var ReactPropTypeLocationNames = __webpack_require__(13);
	var ReactPropTypesSecret = __webpack_require__(18);

	var emptyFunction = __webpack_require__(8);
	var getIteratorFn = __webpack_require__(15);
	var warning = __webpack_require__(2);

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
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
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
	 * PropTypes directly and inspect their output. However we don't use real
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
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (process.env.NODE_ENV !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        if (props[propName] === null) {
	          return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	        }
	        return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
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
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
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
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
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
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
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
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
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

	function isNode(propValue) {
	  switch (typeof propValue) {
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
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
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
	  var propType = typeof propValue;
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

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(6);

	var ReactComponent = __webpack_require__(10);
	var ReactNoopUpdateQueue = __webpack_require__(12);

	var emptyObject = __webpack_require__(9);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	module.exports = '15.4.2';

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(5);

	var ReactPropTypeLocationNames = __webpack_require__(13);
	var ReactPropTypesSecret = __webpack_require__(18);

	var invariant = __webpack_require__(3);
	var warning = __webpack_require__(2);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(11);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(11);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(5);

	var ReactElement = __webpack_require__(4);

	var invariant = __webpack_require__(3);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(5);

	var ReactCurrentOwner = __webpack_require__(7);
	var REACT_ELEMENT_TYPE = __webpack_require__(16);

	var getIteratorFn = __webpack_require__(15);
	var invariant = __webpack_require__(3);
	var KeyEscapeUtils = __webpack_require__(21);
	var warning = __webpack_require__(2);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(23);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.InputField=t():e.InputField=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.PasswordField=t.InputField=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(31),l=r(c),p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showInfoBubble:!1,showInfoBox:!1,value:""},n}return a(t,e),s(t,[{key:"getValue",value:function(){return this.state.value}},{key:"clear",value:function(){this.setState({value:""})}},{key:"onBlur",value:function(){this.setState({showInfoBubble:!1,showInfoBox:!1}),this.props.onBlur&&this.props.onBlur()}},{key:"onChange",value:function(e){this.setState({value:e.target.value}),this.props.onChange&&this.props.onChange(e.target.value)}},{key:"onFocus",value:function(){this.setState({showInfoBubble:!0}),this.props.onFocus&&this.props.onFocus()}},{key:"onKeyPress",value:function(e){"Enter"===e.key&&this.props.onEnter&&this.props.onEnter&&this.props.onEnter(e.target.value)}},{key:"onMouseOverInfoBubble",value:function(){this.setState({showInfoBox:!0})}},{key:"onMouseOutInfoBubble",value:function(){this.setState({showInfoBox:!1})}},{key:"render",value:function(){var e="text";this.props.password&&(e="password");var t=this.props.inputClassName;this.props.showError&&(t+=" err");var n=null;this.props.infoBubbleText&&this.state.showInfoBubble&&(n=l.default.createElement("div",null,l.default.createElement("div",{className:"info-bubble",onMouseOver:this.onMouseOverInfoBubble.bind(this),onMouseOut:this.onMouseOutInfoBubble.bind(this)}),this.state.showInfoBox?l.default.createElement("div",{className:"info-box"},this.props.infoBubbleText):null));var r="input-field-wrapper";this.props.wrapperClass&&(r+=" "+this.props.wrapperClass);var o=null;return this.props.preText&&(o=l.default.createElement("div",{className:"pre-text"},this.props.preText)),l.default.createElement("div",{className:r},l.default.createElement("input",{autoComplete:this.props.autoComplete||"off",className:t,onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onKeyPress:this.onKeyPress.bind(this),placeholder:this.props.placeholder,ref:"input",type:e,value:this.state.value}),n,o)}},{key:"setFocus",value:function(){this.refs.input.focus()}}]),t}(l.default.Component);p.propTypes={showError:l.default.PropTypes.bool,password:l.default.PropTypes.bool,className:l.default.PropTypes.string,onEnter:l.default.PropTypes.func,infoBubbleText:l.default.PropTypes.string,preText:l.default.PropTypes.string};var f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e="text";return this.props.password&&(e="password"),l.default.createElement(p,u({},this.props,{password:!0}))}}]),t}(l.default.Component);t.default=p,t.InputField=p,t.PasswordField=f},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){y&&d&&(y=!1,d.length?v=d.concat(v):h=-1,v.length&&u())}function u(){if(!y){var e=o(a);y=!0;for(var t=v.length;t;){for(d=v,v=[];++h<t;)d&&d[h].run();h=-1,t=v.length}d=null,y=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var l,p,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var d,v=[],y=!1,h=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new s(e,t)),1!==v.length||y||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){(function(t){"use strict";var r=n(8),o=r;"production"!==t.env.NODE_ENV&&!function(){var e=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};o=function(t,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!t){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];e.apply(void 0,[n].concat(o))}}}(),e.exports=o}).call(t,n(1))},function(e,t,n){(function(t){"use strict";function n(e,t,n,o,i,a,u,s){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,i,a,u,s],p=0;c=new Error(t.replace(/%s/g,function(){return l[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(1))},function(e,t,n){(function(t){"use strict";function r(e){if("production"!==t.env.NODE_ENV&&d.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return void 0!==e.ref}function o(e){if("production"!==t.env.NODE_ENV&&d.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return void 0!==e.key}function i(e,n){var r=function(){u||(u=!0,"production"!==t.env.NODE_ENV?p(!1,"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",n):void 0)};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function a(e,n){var r=function(){s||(s=!0,"production"!==t.env.NODE_ENV?p(!1,"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",n):void 0)};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}var u,s,c=n(6),l=n(7),p=n(2),f=n(14),d=Object.prototype.hasOwnProperty,v=n(16),y={key:!0,ref:!0,__self:!0,__source:!0},h=function(e,n,r,o,i,a,u){var s={$$typeof:v,type:e,key:n,ref:r,props:u,_owner:a};return"production"!==t.env.NODE_ENV&&(s._store={},f?(Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i})):(s._store.validated=!1,s._self=o,s._source=i),Object.freeze&&(Object.freeze(s.props),Object.freeze(s))),s};h.createElement=function(e,n,u){var s,c={},p=null,f=null,m=null,E=null;if(null!=n){r(n)&&(f=n.ref),o(n)&&(p=""+n.key),m=void 0===n.__self?null:n.__self,E=void 0===n.__source?null:n.__source;for(s in n)d.call(n,s)&&!y.hasOwnProperty(s)&&(c[s]=n[s])}var g=arguments.length-2;if(1===g)c.children=u;else if(g>1){for(var b=Array(g),N=0;N<g;N++)b[N]=arguments[N+2];"production"!==t.env.NODE_ENV&&Object.freeze&&Object.freeze(b),c.children=b}if(e&&e.defaultProps){var _=e.defaultProps;for(s in _)void 0===c[s]&&(c[s]=_[s])}if("production"!==t.env.NODE_ENV&&(p||f)&&("undefined"==typeof c.$$typeof||c.$$typeof!==v)){var O="function"==typeof e?e.displayName||e.name||"Unknown":e;p&&i(c,O),f&&a(c,O)}return h(e,p,f,m,E,l.current,c)},h.createFactory=function(e){var t=h.createElement.bind(null,e);return t.type=e,t},h.cloneAndReplaceKey=function(e,t){var n=h(e.type,t,e.ref,e._self,e._source,e._owner,e.props);return n},h.cloneElement=function(e,t,n){var i,a=c({},e.props),u=e.key,s=e.ref,p=e._self,f=e._source,v=e._owner;if(null!=t){r(t)&&(s=t.ref,v=l.current),o(t)&&(u=""+t.key);var m;e.type&&e.type.defaultProps&&(m=e.type.defaultProps);for(i in t)d.call(t,i)&&!y.hasOwnProperty(i)&&(void 0===t[i]&&void 0!==m?a[i]=m[i]:a[i]=t[i])}var E=arguments.length-2;if(1===E)a.children=n;else if(E>1){for(var g=Array(E),b=0;b<E;b++)g[b]=arguments[b+2];a.children=g}return h(e.type,u,s,p,f,v,a)},h.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===v},e.exports=h}).call(t,n(1))},function(e,t){"use strict";function n(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o=new Error(n);throw o.name="Invariant Violation",o.framesToPop=1,o}e.exports=n},function(e,t){/*
		object-assign
		(c) Sindre Sorhus
		@license MIT
		*/
	"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,u,s=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var l in r)i.call(r,l)&&(s[l]=r[l]);if(o){u=o(r);for(var p=0;p<u.length;p++)a.call(r,u[p])&&(s[u[p]]=r[u[p]])}}return s}},function(e,t){"use strict";var n={current:null};e.exports=n},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){(function(t){"use strict";var n={};"production"!==t.env.NODE_ENV&&Object.freeze(n),e.exports=n}).call(t,n(1))},function(e,t,n){(function(t){"use strict";function r(e,t,n){this.props=e,this.context=t,this.refs=u,this.updater=n||i}var o=n(5),i=n(12),a=n(14),u=n(9),s=n(3),c=n(2);if(r.prototype.isReactComponent={},r.prototype.setState=function(e,n){"object"!=typeof e&&"function"!=typeof e&&null!=e?"production"!==t.env.NODE_ENV?s(!1,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."):o("85"):void 0,this.updater.enqueueSetState(this,e),n&&this.updater.enqueueCallback(this,n,"setState")},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")},"production"!==t.env.NODE_ENV){var l={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},p=function(e,n){a&&Object.defineProperty(r.prototype,e,{get:function(){"production"!==t.env.NODE_ENV?c(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",n[0],n[1]):void 0}})};for(var f in l)l.hasOwnProperty(f)&&p(f,l[f])}e.exports=r}).call(t,n(1))},function(e,t,n){(function(t){"use strict";function r(e){var t=Function.prototype.toString,n=Object.prototype.hasOwnProperty,r=RegExp("^"+t.call(n).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");try{var o=t.call(e);return r.test(o)}catch(e){return!1}}function o(e){var t=c(e);if(t){var n=t.childIDs;l(e),n.forEach(o)}}function i(e,t,n){return"\n    in "+(e||"Unknown")+(t?" (at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+")":n?" (created by "+n+")":"")}function a(e){return null==e?"#empty":"string"==typeof e||"number"==typeof e?"#text":"string"==typeof e.type?e.type:e.type.displayName||e.type.name||"Unknown"}function u(e){var n,r=P.getDisplayName(e),o=P.getElement(e),a=P.getOwnerID(e);return a&&(n=P.getDisplayName(a)),"production"!==t.env.NODE_ENV?E(o,"ReactComponentTreeHook: Missing React element for debugID %s when building stack",e):void 0,i(r,o&&o._source,n)}var s,c,l,p,f,d,v,y=n(5),h=n(7),m=n(3),E=n(2),g="function"==typeof Array.from&&"function"==typeof Map&&r(Map)&&null!=Map.prototype&&"function"==typeof Map.prototype.keys&&r(Map.prototype.keys)&&"function"==typeof Set&&r(Set)&&null!=Set.prototype&&"function"==typeof Set.prototype.keys&&r(Set.prototype.keys);if(g){var b=new Map,N=new Set;s=function(e,t){b.set(e,t)},c=function(e){return b.get(e)},l=function(e){b.delete(e)},p=function(){return Array.from(b.keys())},f=function(e){N.add(e)},d=function(e){N.delete(e)},v=function(){return Array.from(N.keys())}}else{var _={},O={},D=function(e){return"."+e},w=function(e){return parseInt(e.substr(1),10)};s=function(e,t){var n=D(e);_[n]=t},c=function(e){var t=D(e);return _[t]},l=function(e){var t=D(e);delete _[t]},p=function(){return Object.keys(_).map(w)},f=function(e){var t=D(e);O[t]=!0},d=function(e){var t=D(e);delete O[t]},v=function(){return Object.keys(O).map(w)}}var x=[],P={onSetChildren:function(e,n){var r=c(e);r?void 0:"production"!==t.env.NODE_ENV?m(!1,"Item must have been set"):y("144"),r.childIDs=n;for(var o=0;o<n.length;o++){var i=n[o],a=c(i);a?void 0:"production"!==t.env.NODE_ENV?m(!1,"Expected hook events to fire for the child before its parent includes it in onSetChildren()."):y("140"),null==a.childIDs&&"object"==typeof a.element&&null!=a.element?"production"!==t.env.NODE_ENV?m(!1,"Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren()."):y("141"):void 0,a.isMounted?void 0:"production"!==t.env.NODE_ENV?m(!1,"Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren()."):y("71"),null==a.parentID&&(a.parentID=e),a.parentID!==e?"production"!==t.env.NODE_ENV?m(!1,"Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).",i,a.parentID,e):y("142",i,a.parentID,e):void 0}},onBeforeMountComponent:function(e,t,n){var r={element:t,parentID:n,text:null,childIDs:[],isMounted:!1,updateCount:0};s(e,r)},onBeforeUpdateComponent:function(e,t){var n=c(e);n&&n.isMounted&&(n.element=t)},onMountComponent:function(e){var n=c(e);n?void 0:"production"!==t.env.NODE_ENV?m(!1,"Item must have been set"):y("144"),n.isMounted=!0;var r=0===n.parentID;r&&f(e)},onUpdateComponent:function(e){var t=c(e);t&&t.isMounted&&t.updateCount++},onUnmountComponent:function(e){var t=c(e);if(t){t.isMounted=!1;var n=0===t.parentID;n&&d(e)}x.push(e)},purgeUnmountedComponents:function(){if(!P._preventPurging){for(var e=0;e<x.length;e++){var t=x[e];o(t)}x.length=0}},isMounted:function(e){var t=c(e);return!!t&&t.isMounted},getCurrentStackAddendum:function(e){var t="";if(e){var n=a(e),r=e._owner;t+=i(n,e._source,r&&r.getName())}var o=h.current,u=o&&o._debugID;return t+=P.getStackAddendumByID(u)},getStackAddendumByID:function(e){for(var t="";e;)t+=u(e),e=P.getParentID(e);return t},getChildIDs:function(e){var t=c(e);return t?t.childIDs:[]},getDisplayName:function(e){var t=P.getElement(e);return t?a(t):null},getElement:function(e){var t=c(e);return t?t.element:null},getOwnerID:function(e){var t=P.getElement(e);return t&&t._owner?t._owner._debugID:null},getParentID:function(e){var t=c(e);return t?t.parentID:null},getSource:function(e){var t=c(e),n=t?t.element:null,r=null!=n?n._source:null;return r},getText:function(e){var t=P.getElement(e);return"string"==typeof t?t:"number"==typeof t?""+t:null},getUpdateCount:function(e){var t=c(e);return t?t.updateCount:0},getRootIDs:v,getRegisteredIDs:p};e.exports=P}).call(t,n(1))},function(e,t,n){(function(t){"use strict";function r(e,n){if("production"!==t.env.NODE_ENV){var r=e.constructor;"production"!==t.env.NODE_ENV?o(!1,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.",n,n,r&&(r.displayName||r.name)||"ReactClass"):void 0}}var o=n(2),i={isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){r(e,"forceUpdate")},enqueueReplaceState:function(e,t){r(e,"replaceState")},enqueueSetState:function(e,t){r(e,"setState")}};e.exports=i}).call(t,n(1))},function(e,t,n){(function(t){"use strict";var n={};"production"!==t.env.NODE_ENV&&(n={prop:"prop",context:"context",childContext:"child context"}),e.exports=n}).call(t,n(1))},function(e,t,n){(function(t){"use strict";var n=!1;if("production"!==t.env.NODE_ENV)try{Object.defineProperty({},"x",{get:function(){}}),n=!0}catch(e){}e.exports=n}).call(t,n(1))},function(e,t){"use strict";function n(e){var t=e&&(r&&e[r]||e[o]);if("function"==typeof t)return t}var r="function"==typeof Symbol&&Symbol.iterator,o="@@iterator";e.exports=n},function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n},function(e,t,n){(function(t){"use strict";function r(){if(s.current){var e=s.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e){var t=r();if(!t){var n="string"==typeof e?e:e.displayName||e.name;n&&(t=" Check the top-level render call using <"+n+">.")}return t}function i(e,n){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=y.uniqueKey||(y.uniqueKey={}),i=o(n);if(!r[i]){r[i]=!0;var a="";e&&e._owner&&e._owner!==s.current&&(a=" It was passed a child from "+e._owner.getName()+"."),"production"!==t.env.NODE_ENV?v(!1,'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s',i,a,c.getCurrentStackAddendum(e)):void 0}}}function a(e,t){if("object"==typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];l.isValidElement(r)&&i(r,t)}else if(l.isValidElement(e))e._store&&(e._store.validated=!0);else if(e){var o=d(e);if(o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)l.isValidElement(a.value)&&i(a.value,t)}}function u(e){var n=e.type;if("function"==typeof n){var r=n.displayName||n.name;n.propTypes&&p(n.propTypes,e.props,"prop",r,e,null),"function"==typeof n.getDefaultProps&&("production"!==t.env.NODE_ENV?v(n.getDefaultProps.isReactClassApproved,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."):void 0)}}var s=n(7),c=n(11),l=n(4),p=n(28),f=n(14),d=n(15),v=n(2),y={},h={createElement:function(e,n,o){var i="string"==typeof e||"function"==typeof e;if(!i&&"function"!=typeof e&&"string"!=typeof e){var s="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(s+=" You likely forgot to export your component from the file it's defined in."),s+=r(),"production"!==t.env.NODE_ENV?v(!1,"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",null==e?e:typeof e,s):void 0}var c=l.createElement.apply(this,arguments);if(null==c)return c;if(i)for(var p=2;p<arguments.length;p++)a(arguments[p],e);return u(c),c},createFactory:function(e){var n=h.createElement.bind(null,e);return n.type=e,"production"!==t.env.NODE_ENV&&f&&Object.defineProperty(n,"type",{enumerable:!1,get:function(){return"production"!==t.env.NODE_ENV?v(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."):void 0,Object.defineProperty(this,"type",{value:e}),e}}),n},cloneElement:function(e,t,n){for(var r=l.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)a(arguments[o],r.type);return u(r),r}};e.exports=h}).call(t,n(1))},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(e,t){"use strict";function n(e){var t=/[=:]/g,n={"=":"=0",":":"=2"},r=(""+e).replace(t,function(e){return n[e]});return"$"+r}function r(e){var t=/(=0|=2)/g,n={"=0":"=","=2":":"},r="."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1);return(""+r).replace(t,function(e){return n[e]})}var o={escape:n,unescape:r};e.exports=o},function(e,t,n){(function(t){"use strict";var r=n(5),o=n(3),i=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},a=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},u=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},s=function(e,t,n,r){var o=this;if(o.instancePool.length){var i=o.instancePool.pop();return o.call(i,e,t,n,r),i}return new o(e,t,n,r)},c=function(e){var n=this;e instanceof n?void 0:"production"!==t.env.NODE_ENV?o(!1,"Trying to release an instance into a pool of a different type."):r("25"),e.destructor(),n.instancePool.length<n.poolSize&&n.instancePool.push(e)},l=10,p=i,f=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||p,n.poolSize||(n.poolSize=l),n.release=c,n},d={addPoolingTo:f,oneArgumentPooler:i,twoArgumentPooler:a,threeArgumentPooler:u,fourArgumentPooler:s};e.exports=d}).call(t,n(1))},function(e,t,n){(function(t){"use strict";var r=n(6),o=n(22),i=n(10),a=n(26),u=n(23),s=n(24),c=n(4),l=n(25),p=n(27),f=n(29),d=n(2),v=c.createElement,y=c.createFactory,h=c.cloneElement;if("production"!==t.env.NODE_ENV){var m=n(17);v=m.createElement,y=m.createFactory,h=m.cloneElement}var E=r;if("production"!==t.env.NODE_ENV){var g=!1;E=function(){return"production"!==t.env.NODE_ENV?d(g,"React.__spread is deprecated and should not be used. Use Object.assign directly or another helper function with similar semantics. You may be seeing this warning due to your compiler. See https://fb.me/react-spread-deprecation for more details."):void 0,g=!0,r.apply(null,arguments)}}var b={Children:{map:o.map,forEach:o.forEach,count:o.count,toArray:o.toArray,only:f},Component:i,PureComponent:a,createElement:v,cloneElement:h,isValidElement:c.isValidElement,PropTypes:l,createClass:u.createClass,createFactory:y,createMixin:function(e){return e},DOM:s,version:p,__spread:E};e.exports=b}).call(t,n(1))},function(e,t,n){"use strict";function r(e){return(""+e).replace(b,"$&/")}function o(e,t){this.func=e,this.context=t,this.count=0}function i(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function a(e,t,n){if(null==e)return e;var r=o.getPooled(t,n);m(e,i,r),o.release(r)}function u(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function s(e,t,n){var o=e.result,i=e.keyPrefix,a=e.func,u=e.context,s=a.call(u,t,e.count++);Array.isArray(s)?c(s,o,n,h.thatReturnsArgument):null!=s&&(y.isValidElement(s)&&(s=y.cloneAndReplaceKey(s,i+(!s.key||t&&t.key===s.key?"":r(s.key)+"/")+n)),o.push(s))}function c(e,t,n,o,i){var a="";null!=n&&(a=r(n)+"/");var c=u.getPooled(t,a,o,i);m(e,s,c),u.release(c)}function l(e,t,n){if(null==e)return e;var r=[];return c(e,r,null,t,n),r}function p(e,t,n){return null}function f(e,t){return m(e,p,null)}function d(e){var t=[];return c(e,t,null,h.thatReturnsArgument),t}var v=n(20),y=n(4),h=n(8),m=n(30),E=v.twoArgumentPooler,g=v.fourArgumentPooler,b=/\/+/g;o.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},v.addPoolingTo(o,E),u.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},v.addPoolingTo(u,g);var N={forEach:a,map:l,mapIntoWithKeyPrefixInternal:c,count:f,toArray:d};e.exports=N},function(e,t,n){(function(t){"use strict";function r(e){return e}function o(e,n,r){for(var o in n)n.hasOwnProperty(o)&&("production"!==t.env.NODE_ENV?N("function"==typeof n[o],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",e.displayName||"ReactClass",m[r],o):void 0)}function i(e,n){var r=D.hasOwnProperty(n)?D[n]:null;x.hasOwnProperty(n)&&("OVERRIDE_BASE"!==r?"production"!==t.env.NODE_ENV?b(!1,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",n):d("73",n):void 0),e&&("DEFINE_MANY"!==r&&"DEFINE_MANY_MERGED"!==r?"production"!==t.env.NODE_ENV?b(!1,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n):d("74",n):void 0)}function a(e,n){if(n){"function"==typeof n?"production"!==t.env.NODE_ENV?b(!1,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."):d("75"):void 0,h.isValidElement(n)?"production"!==t.env.NODE_ENV?b(!1,"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."):d("76"):void 0;var r=e.prototype,o=r.__reactAutoBindPairs;n.hasOwnProperty(_)&&w.mixins(e,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==_){var u=n[a],s=r.hasOwnProperty(a);if(i(s,a),w.hasOwnProperty(a))w[a](e,u);else{var p=D.hasOwnProperty(a),f="function"==typeof u,v=f&&!p&&!s&&n.autobind!==!1;if(v)o.push(a,u),r[a]=u;else if(s){var y=D[a];!p||"DEFINE_MANY_MERGED"!==y&&"DEFINE_MANY"!==y?"production"!==t.env.NODE_ENV?b(!1,"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,a):d("77",y,a):void 0,"DEFINE_MANY_MERGED"===y?r[a]=c(r[a],u):"DEFINE_MANY"===y&&(r[a]=l(r[a],u))}else r[a]=u,"production"!==t.env.NODE_ENV&&"function"==typeof u&&n.displayName&&(r[a].displayName=n.displayName+"_"+a)}}}else if("production"!==t.env.NODE_ENV){var m=typeof n,E="object"===m&&null!==n;"production"!==t.env.NODE_ENV?N(E,"%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",e.displayName||"ReactClass",null===n?null:m):void 0}}function u(e,n){if(n)for(var r in n){var o=n[r];if(n.hasOwnProperty(r)){var i=r in w;i?"production"!==t.env.NODE_ENV?b(!1,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',r):d("78",r):void 0;var a=r in e;a?"production"!==t.env.NODE_ENV?b(!1,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",r):d("79",r):void 0,e[r]=o}}}function s(e,n){e&&n&&"object"==typeof e&&"object"==typeof n?void 0:"production"!==t.env.NODE_ENV?b(!1,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."):d("80");for(var r in n)n.hasOwnProperty(r)&&(void 0!==e[r]?"production"!==t.env.NODE_ENV?b(!1,"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",r):d("81",r):void 0,e[r]=n[r]);return e}function c(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return s(o,n),s(o,r),o}}function l(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function p(e,n){var r=n.bind(e);if("production"!==t.env.NODE_ENV){r.__reactBoundContext=e,r.__reactBoundMethod=n,r.__reactBoundArguments=null;var o=e.constructor.displayName,i=r.bind;r.bind=function(a){for(var u=arguments.length,s=Array(u>1?u-1:0),c=1;c<u;c++)s[c-1]=arguments[c];if(a!==e&&null!==a)"production"!==t.env.NODE_ENV?N(!1,"bind(): React component methods may only be bound to the component instance. See %s",o):void 0;else if(!s.length)return"production"!==t.env.NODE_ENV?N(!1,"bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",o):void 0,r;var l=i.apply(r,arguments);return l.__reactBoundContext=e,l.__reactBoundMethod=n,l.__reactBoundArguments=s,l}}return r}function f(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=p(e,o)}}var d=n(5),v=n(6),y=n(10),h=n(4),m=n(13),E=n(12),g=n(9),b=n(3),N=n(2),_="mixins",O=[],D={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},w={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,n){"production"!==t.env.NODE_ENV&&o(e,n,"childContext"),e.childContextTypes=v({},e.childContextTypes,n)},contextTypes:function(e,n){"production"!==t.env.NODE_ENV&&o(e,n,"context"),e.contextTypes=v({},e.contextTypes,n)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=c(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,n){"production"!==t.env.NODE_ENV&&o(e,n,"prop"),e.propTypes=v({},e.propTypes,n)},statics:function(e,t){u(e,t)},autobind:function(){}},x={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e),t&&this.updater.enqueueCallback(this,t,"replaceState")},isMounted:function(){return this.updater.isMounted(this)}},P=function(){};v(P.prototype,y.prototype,x);var I={createClass:function(e){var n=r(function(e,r,o){"production"!==t.env.NODE_ENV&&("production"!==t.env.NODE_ENV?N(this instanceof n,"Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"):void 0),this.__reactAutoBindPairs.length&&f(this),this.props=e,this.context=r,this.refs=g,this.updater=o||E,this.state=null;var i=this.getInitialState?this.getInitialState():null;"production"!==t.env.NODE_ENV&&void 0===i&&this.getInitialState._isMockFunction&&(i=null),"object"!=typeof i||Array.isArray(i)?"production"!==t.env.NODE_ENV?b(!1,"%s.getInitialState(): must return an object or null",n.displayName||"ReactCompositeComponent"):d("82",n.displayName||"ReactCompositeComponent"):void 0,this.state=i});n.prototype=new P,n.prototype.constructor=n,n.prototype.__reactAutoBindPairs=[],O.forEach(a.bind(null,n)),a(n,e),n.getDefaultProps&&(n.defaultProps=n.getDefaultProps()),"production"!==t.env.NODE_ENV&&(n.getDefaultProps&&(n.getDefaultProps.isReactClassApproved={}),n.prototype.getInitialState&&(n.prototype.getInitialState.isReactClassApproved={})),n.prototype.render?void 0:"production"!==t.env.NODE_ENV?b(!1,"createClass(...): Class specification must implement a `render` method."):d("83"),"production"!==t.env.NODE_ENV&&("production"!==t.env.NODE_ENV?N(!n.prototype.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",e.displayName||"A component"):void 0,"production"!==t.env.NODE_ENV?N(!n.prototype.componentWillRecieveProps,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",e.displayName||"A component"):void 0);for(var o in D)n.prototype[o]||(n.prototype[o]=null);return n},injection:{injectMixin:function(e){O.push(e)}}};e.exports=I}).call(t,n(1))},function(e,t,n){(function(t){"use strict";var r=n(4),o=r.createFactory;if("production"!==t.env.NODE_ENV){var i=n(17);o=i.createFactory}var a={a:o("a"),abbr:o("abbr"),address:o("address"),area:o("area"),article:o("article"),aside:o("aside"),audio:o("audio"),b:o("b"),base:o("base"),bdi:o("bdi"),bdo:o("bdo"),big:o("big"),blockquote:o("blockquote"),body:o("body"),br:o("br"),button:o("button"),canvas:o("canvas"),caption:o("caption"),cite:o("cite"),code:o("code"),col:o("col"),colgroup:o("colgroup"),data:o("data"),datalist:o("datalist"),dd:o("dd"),del:o("del"),details:o("details"),dfn:o("dfn"),dialog:o("dialog"),div:o("div"),dl:o("dl"),dt:o("dt"),em:o("em"),embed:o("embed"),fieldset:o("fieldset"),figcaption:o("figcaption"),figure:o("figure"),footer:o("footer"),form:o("form"),h1:o("h1"),h2:o("h2"),h3:o("h3"),h4:o("h4"),h5:o("h5"),h6:o("h6"),head:o("head"),header:o("header"),hgroup:o("hgroup"),hr:o("hr"),html:o("html"),i:o("i"),iframe:o("iframe"),img:o("img"),input:o("input"),ins:o("ins"),kbd:o("kbd"),keygen:o("keygen"),label:o("label"),legend:o("legend"),li:o("li"),link:o("link"),main:o("main"),map:o("map"),mark:o("mark"),menu:o("menu"),menuitem:o("menuitem"),meta:o("meta"),meter:o("meter"),nav:o("nav"),noscript:o("noscript"),object:o("object"),ol:o("ol"),optgroup:o("optgroup"),option:o("option"),output:o("output"),p:o("p"),param:o("param"),picture:o("picture"),pre:o("pre"),progress:o("progress"),q:o("q"),rp:o("rp"),rt:o("rt"),ruby:o("ruby"),s:o("s"),samp:o("samp"),script:o("script"),section:o("section"),select:o("select"),small:o("small"),source:o("source"),span:o("span"),strong:o("strong"),style:o("style"),sub:o("sub"),summary:o("summary"),sup:o("sup"),table:o("table"),tbody:o("tbody"),td:o("td"),textarea:o("textarea"),tfoot:o("tfoot"),th:o("th"),thead:o("thead"),time:o("time"),title:o("title"),tr:o("tr"),track:o("track"),u:o("u"),ul:o("ul"),var:o("var"),video:o("video"),wbr:o("wbr"),circle:o("circle"),clipPath:o("clipPath"),defs:o("defs"),ellipse:o("ellipse"),g:o("g"),image:o("image"),line:o("line"),linearGradient:o("linearGradient"),mask:o("mask"),path:o("path"),pattern:o("pattern"),polygon:o("polygon"),polyline:o("polyline"),radialGradient:o("radialGradient"),rect:o("rect"),stop:o("stop"),svg:o("svg"),text:o("text"),tspan:o("tspan")};e.exports=a}).call(t,n(1))},function(e,t,n){(function(t){"use strict";function r(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function o(e){this.message=e,this.stack=""}function i(e){function n(n,i,a,u,s,c,l){if(u=u||P,c=c||a,"production"!==t.env.NODE_ENV&&l!==O&&"undefined"!=typeof console){var p=u+":"+a;r[p]||("production"!==t.env.NODE_ENV?x(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will not work in production with the next major version. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",c,u):void 0,r[p]=!0)}if(null==i[a]){var f=_[s];return n?new o(null===i[a]?"The "+f+" `"+c+"` is marked as required "+("in `"+u+"`, but its value is `null`."):"The "+f+" `"+c+"` is marked as required in "+("`"+u+"`, but its value is `undefined`.")):null}return e(i,a,u,s,c)}if("production"!==t.env.NODE_ENV)var r={};var i=n.bind(null,!1);return i.isRequired=n.bind(null,!0),i}function a(e){function t(t,n,r,i,a,u){var s=t[n],c=E(s);if(c!==e){var l=_[i],p=g(s);return new o("Invalid "+l+" `"+a+"` of type "+("`"+p+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return i(t)}function u(){return i(D.thatReturns(null))}function s(e){function t(t,n,r,i,a){if("function"!=typeof e)return new o("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){var s=_[i],c=E(u);return new o("Invalid "+s+" `"+a+"` of type "+("`"+c+"` supplied to `"+r+"`, expected an array."))}for(var l=0;l<u.length;l++){var p=e(u,l,r,i,a+"["+l+"]",O);if(p instanceof Error)return p}return null}return i(t)}function c(){function e(e,t,n,r,i){var a=e[t];if(!N.isValidElement(a)){var u=_[r],s=E(a);return new o("Invalid "+u+" `"+i+"` of type "+("`"+s+"` supplied to `"+n+"`, expected a single ReactElement."))}return null}return i(e)}function l(e){function t(t,n,r,i,a){if(!(t[n]instanceof e)){var u=_[i],s=e.name||P,c=b(t[n]);return new o("Invalid "+u+" `"+a+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("instance of `"+s+"`."))}return null}return i(t)}function p(e){function n(t,n,i,a,u){for(var s=t[n],c=0;c<e.length;c++)if(r(s,e[c]))return null;var l=_[a],p=JSON.stringify(e);return new o("Invalid "+l+" `"+u+"` of value `"+s+"` "+("supplied to `"+i+"`, expected one of "+p+"."))}return Array.isArray(e)?i(n):("production"!==t.env.NODE_ENV?x(!1,"Invalid argument supplied to oneOf, expected an instance of array."):void 0,D.thatReturnsNull)}function f(e){function t(t,n,r,i,a){if("function"!=typeof e)return new o("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=E(u);if("object"!==s){var c=_[i];return new o("Invalid "+c+" `"+a+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an object."))}for(var l in u)if(u.hasOwnProperty(l)){var p=e(u,l,r,i,a+"."+l,O);if(p instanceof Error)return p}return null}return i(t)}function d(e){function n(t,n,r,i,a){for(var u=0;u<e.length;u++){var s=e[u];if(null==s(t,n,r,i,a,O))return null}var c=_[i];return new o("Invalid "+c+" `"+a+"` supplied to "+("`"+r+"`."))}return Array.isArray(e)?i(n):("production"!==t.env.NODE_ENV?x(!1,"Invalid argument supplied to oneOfType, expected an instance of array."):void 0,D.thatReturnsNull)}function v(){function e(e,t,n,r,i){if(!h(e[t])){var a=_[r];return new o("Invalid "+a+" `"+i+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return i(e)}function y(e){function t(t,n,r,i,a){var u=t[n],s=E(u);if("object"!==s){var c=_[i];return new o("Invalid "+c+" `"+a+"` of type `"+s+"` "+("supplied to `"+r+"`, expected `object`."))}for(var l in e){var p=e[l];if(p){var f=p(u,l,r,i,a+"."+l,O);if(f)return f}}return null}return i(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||N.isValidElement(e))return!0;var t=w(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!h(n.value))return!1}else for(;!(n=r.next()).done;){var o=n.value;if(o&&!h(o[1]))return!1}return!0;default:return!1}}function m(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function E(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":m(t,e)?"symbol":t}function g(e){var t=E(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){return e.constructor&&e.constructor.name?e.constructor.name:P}var N=n(4),_=n(13),O=n(18),D=n(8),w=n(15),x=n(2),P="<<anonymous>>",I={array:a("array"),bool:a("boolean"),func:a("function"),number:a("number"),object:a("object"),string:a("string"),symbol:a("symbol"),any:u(),arrayOf:s,element:c(),instanceOf:l,node:v(),objectOf:f,oneOf:p,oneOfType:d,shape:y};o.prototype=Error.prototype,e.exports=I}).call(t,n(1))},function(e,t,n){"use strict";function r(e,t,n){this.props=e,this.context=t,this.refs=s,this.updater=n||u}function o(){}var i=n(6),a=n(10),u=n(12),s=n(9);o.prototype=a.prototype,r.prototype=new o,r.prototype.constructor=r,i(r.prototype,a.prototype),r.prototype.isPureReactComponent=!0,e.exports=r},function(e,t){"use strict";e.exports="15.4.2"},function(e,t,n){(function(t){"use strict";function r(e,r,p,f,d,v){for(var y in e)if(e.hasOwnProperty(y)){var h;try{"function"!=typeof e[y]?"production"!==t.env.NODE_ENV?s(!1,"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",f||"React class",a[p],y):i("84",f||"React class",a[p],y):void 0,h=e[y](r,y,f,p,null,u)}catch(e){h=e}if("production"!==t.env.NODE_ENV?c(!h||h instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",f||"React class",a[p],y,typeof h):void 0,h instanceof Error&&!(h.message in l)){l[h.message]=!0;var m="";"production"!==t.env.NODE_ENV&&(o||(o=n(11)),null!==v?m=o.getStackAddendumByID(v):null!==d&&(m=o.getCurrentStackAddendum(d))),"production"!==t.env.NODE_ENV?c(!1,"Failed %s type: %s%s",p,h.message,m):void 0}}}var o,i=n(5),a=n(13),u=n(18),s=n(3),c=n(2);"undefined"!=typeof t&&t.env&&"test"===t.env.NODE_ENV&&(o=n(11));var l={};e.exports=r}).call(t,n(1))},function(e,t,n){(function(t){"use strict";function r(e){return i.isValidElement(e)?void 0:"production"!==t.env.NODE_ENV?a(!1,"React.Children.only expected to receive a single React element child."):o("143"),e}var o=n(5),i=n(4),a=n(3);e.exports=r}).call(t,n(1))},function(e,t,n){(function(t){"use strict";function r(e,t){return e&&"object"==typeof e&&null!=e.key?p.escape(e.key):t.toString(36)}function o(e,n,i,h){var m=typeof e;if("undefined"!==m&&"boolean"!==m||(e=null),
	null===e||"string"===m||"number"===m||"object"===m&&e.$$typeof===s)return i(h,e,""===n?d+r(e,0):n),1;var E,g,b=0,N=""===n?d:n+v;if(Array.isArray(e))for(var _=0;_<e.length;_++)E=e[_],g=N+r(E,_),b+=o(E,g,i,h);else{var O=c(e);if(O){var D,w=O.call(e);if(O!==e.entries)for(var x=0;!(D=w.next()).done;)E=D.value,g=N+r(E,x++),b+=o(E,g,i,h);else{if("production"!==t.env.NODE_ENV){var P="";if(u.current){var I=u.current.getName();I&&(P=" Check the render method of `"+I+"`.")}"production"!==t.env.NODE_ENV?f(y,"Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead.%s",P):void 0,y=!0}for(;!(D=w.next()).done;){var k=D.value;k&&(E=k[1],g=N+p.escape(k[0])+v+r(E,0),b+=o(E,g,i,h))}}}else if("object"===m){var j="";if("production"!==t.env.NODE_ENV&&(j=" If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.",e._isReactElement&&(j=" It looks like you're using an element created by a different version of React. Make sure to use only one copy of React."),u.current)){var C=u.current.getName();C&&(j+=" Check the render method of `"+C+"`.")}var V=String(e);"production"!==t.env.NODE_ENV?l(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===V?"object with keys {"+Object.keys(e).join(", ")+"}":V,j):a("31","[object Object]"===V?"object with keys {"+Object.keys(e).join(", ")+"}":V,j)}}return b}function i(e,t,n){return null==e?0:o(e,"",t,n)}var a=n(5),u=n(7),s=n(16),c=n(15),l=n(3),p=n(19),f=n(2),d=".",v=":",y=!1;e.exports=i}).call(t,n(1))},function(e,t,n){"use strict";e.exports=n(21)}])});

/***/ }
/******/ ])
});
;