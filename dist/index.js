(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["t-react-form-generator"] = factory(require("react"));
	else
		root["t-react-form-generator"] = factory(root["React"]);
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _tReactInputField = __webpack_require__(4);

	var _tReactInputField2 = _interopRequireDefault(_tReactInputField);

	var _formValidator = __webpack_require__(3);

	var _formValidator2 = _interopRequireDefault(_formValidator);

	var _clamp = __webpack_require__(2);

	var _clamp2 = _interopRequireDefault(_clamp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _generate(fields, val, bText, hideButton) {
	  return function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class(props) {
	      _classCallCheck(this, _class);

	      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

	      _this.state = {
	        validator: val
	      };
	      return _this;
	    }

	    _createClass(_class, [{
	      key: 'getValue',
	      value: function getValue(name) {
	        return this.state.validator[name].value;
	      }
	    }, {
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
	            _this2.state.validator[field.name].update(e);
	            _this2.state.validator.validate(false);
	            _this2.forceUpdate();
	          };
	          return _react2.default.createElement(_tReactInputField2.default, {
	            key: field.name,
	            autoFocus: field.autoFocus,
	            className: field.name,
	            onChange: func.bind(_this2),
	            onEnter: _this2.onSubmit.bind(_this2),
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

	        var btn = null;
	        if (!hideButton) {
	          btn = _react2.default.createElement(
	            'button',
	            { className: 'action-button', onClick: this.onSubmit.bind(this) },
	            bText
	          );
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
	              { className: 'err-msg', ref: function ref(e) {
	                  if (e) {
	                    (0, _clamp2.default)(e, { clamp: 2 });
	                  }
	                } },
	              errMsg
	            )
	          ),
	          btn
	        );
	      }
	    }]);

	    return _class;
	  }(_react2.default.Component);
	}

	var FormGenerator = function () {
	  function FormGenerator(buttonText) {
	    var hideButton = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    _classCallCheck(this, FormGenerator);

	    this.hideButton = hideButton;
	    this.bText = buttonText;
	    this.val = new _formValidator2.default(false);
	    this.fields = [];
	  }

	  _createClass(FormGenerator, [{
	    key: 'setButtonText',
	    value: function setButtonText(text) {
	      this.bText = text;
	    }
	  }, {
	    key: 'addField',
	    value: function addField(name, defaultValue, placeholder, helpText, autoFocus, isPassword, preText) {
	      this.fields.push({
	        name: name,
	        placeholder: placeholder,
	        autoFocus: autoFocus,
	        helpText: helpText,
	        isPassword: isPassword,
	        preText: preText
	      });
	      this.val.addField(name, defaultValue);
	    }
	  }, {
	    key: 'addValidator',
	    value: function addValidator() {
	      this.val.addValidator.apply(this.val, arguments);
	    }
	  }, {
	    key: 'generate',
	    value: function generate() {
	      return _generate(this.fields, this.val, this.bText, this.hideButton);
	    }
	  }]);

	  return FormGenerator;
	}();

	exports.default = FormGenerator;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1));
		else if(typeof define === 'function' && define.amd)
			define(["react"], factory);
		else if(typeof exports === 'object')
			exports["InputField"] = factory(require("react"));
		else
			root["InputField"] = factory(root["React"]);
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
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.PasswordField = exports.InputField = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var InputField = function (_React$Component) {
		  _inherits(InputField, _React$Component);

		  function InputField(props) {
		    _classCallCheck(this, InputField);

		    var _this = _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).call(this, props));

		    _this.state = {
		      showInfoBubble: false,
		      showInfoBox: false,
		      value: ''
		    };
		    return _this;
		  }

		  _createClass(InputField, [{
		    key: 'getValue',
		    value: function getValue() {
		      return this.state.value;
		    }
		  }, {
		    key: 'clear',
		    value: function clear() {
		      this.setState({ value: '' });
		    }
		  }, {
		    key: 'onBlur',
		    value: function onBlur() {
		      this.setState({ showInfoBubble: false, showInfoBox: false });
		      if (this.props.onBlur) {
		        this.props.onBlur();
		      }
		    }
		  }, {
		    key: 'onChange',
		    value: function onChange(e) {
		      this.setState({ value: e.target.value });
		      if (this.props.onChange) {
		        this.props.onChange(e.target.value);
		      }
		    }
		  }, {
		    key: 'onFocus',
		    value: function onFocus() {
		      this.setState({ showInfoBubble: true });
		      if (this.props.onFocus) {
		        this.props.onFocus();
		      }
		    }
		  }, {
		    key: 'onKeyPress',
		    value: function onKeyPress(e) {
		      if (e.key === 'Enter' && this.props.onEnter) {
		        if (this.props.onEnter) {
		          this.props.onEnter(e.target.value);
		        }
		      }
		    }
		  }, {
		    key: 'onMouseOverInfoBubble',
		    value: function onMouseOverInfoBubble() {
		      this.setState({ showInfoBox: true });
		    }
		  }, {
		    key: 'onMouseOutInfoBubble',
		    value: function onMouseOutInfoBubble() {
		      this.setState({ showInfoBox: false });
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var _this2 = this;

		      var type = 'text';
		      if (this.props.password) {
		        type = 'password';
		      }

		      var inputClassName = this.props.inputClassName;
		      if (this.props.showError) {
		        inputClassName += ' err';
		      }

		      var info = null;
		      if (this.props.infoBubbleText && this.state.showInfoBubble) {
		        info = _react2.default.createElement(
		          'div',
		          null,
		          _react2.default.createElement('div', { className: 'info-bubble',
		            onMouseOver: this.onMouseOverInfoBubble.bind(this),
		            onMouseOut: this.onMouseOutInfoBubble.bind(this) }),
		          this.state.showInfoBox ? _react2.default.createElement(
		            'div',
		            { className: 'info-box' },
		            this.props.infoBubbleText
		          ) : null
		        );
		      }

		      var wrapperClass = 'input-field-wrapper';
		      if (this.props.wrapperClass) {
		        wrapperClass += ' ' + this.props.wrapperClass;
		      }

		      var preText = null;
		      if (this.props.preText) {
		        preText = _react2.default.createElement(
		          'div',
		          { className: 'pre-text' },
		          this.props.preText
		        );
		      }

		      return _react2.default.createElement(
		        'div',
		        { className: wrapperClass },
		        _react2.default.createElement('input', {
		          autoComplete: this.props.autoComplete || 'off',
		          className: inputClassName,
		          onBlur: this.onBlur.bind(this),
		          onChange: this.onChange.bind(this),
		          onFocus: this.onFocus.bind(this),
		          onKeyPress: this.onKeyPress.bind(this),
		          placeholder: this.props.placeholder,
		          ref: function ref(input) {
		            return _this2.input = input;
		          },
		          type: type,
		          value: this.state.value
		        }),
		        info,
		        preText
		      );
		    }
		  }, {
		    key: 'setFocus',
		    value: function setFocus() {
		      this.input.focus();
		    }
		  }]);

		  return InputField;
		}(_react2.default.Component);

		InputField.propTypes = {
		  showError: _react2.default.PropTypes.bool,
		  password: _react2.default.PropTypes.bool,
		  className: _react2.default.PropTypes.string,
		  onEnter: _react2.default.PropTypes.func,
		  infoBubbleText: _react2.default.PropTypes.string,
		  preText: _react2.default.PropTypes.string
		};

		var PasswordField = function (_React$Component2) {
		  _inherits(PasswordField, _React$Component2);

		  function PasswordField() {
		    _classCallCheck(this, PasswordField);

		    return _possibleConstructorReturn(this, (PasswordField.__proto__ || Object.getPrototypeOf(PasswordField)).apply(this, arguments));
		  }

		  _createClass(PasswordField, [{
		    key: 'render',
		    value: function render() {
		      var type = 'text';
		      if (this.props.password) {
		        type = 'password';
		      }
		      return _react2.default.createElement(InputField, _extends({}, this.props, {
		        password: true
		      }));
		    }
		  }]);

		  return PasswordField;
		}(_react2.default.Component);

		exports.default = InputField;
		exports.InputField = InputField;
		exports.PasswordField = PasswordField;

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

	/***/ }
	/******/ ])
	});
	;

/***/ }
/******/ ])
});
;