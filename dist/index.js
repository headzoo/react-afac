(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-afac"] = factory(require("react"));
	else
		root["react-afac"] = factory(root["react"]);
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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Icon = function (_React$Component) {
	    _inherits(Icon, _React$Component);

	    function Icon() {
	        _classCallCheck(this, Icon);

	        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	    }

	    _createClass(Icon, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var name = _props.name;
	            var size = _props.size;
	            var rotate = _props.rotate;
	            var flip = _props.flip;
	            var pull = _props.pull;
	            var className = _props.className;
	            var href = _props.href;
	            var spin = _props.spin;
	            var pulse = _props.pulse;
	            var list = _props.list;
	            var inverse = _props.inverse;
	            var border = _props.border;
	            var fixedWidth = _props.fixedWidth;

	            var other = _objectWithoutProperties(_props, ['name', 'size', 'rotate', 'flip', 'pull', 'className', 'href', 'spin', 'pulse', 'list', 'inverse', 'border', 'fixedWidth']);

	            var classes = ['fa fa-' + name];
	            if (className) {
	                classes.push(className);
	            }
	            if (size) {
	                classes.push('fa-' + size);
	            }
	            if (rotate) {
	                classes.push('fa-rotate-' + rotate);
	            }
	            if (flip) {
	                classes.push('fa-flip-' + flip);
	            }
	            if (pull) {
	                classes.push('fa-pull-' + pull);
	            }
	            if (inverse) {
	                classes.push('fa-inverse');
	            }
	            if (spin) {
	                classes.push('fa-spin');
	            }
	            if (pulse) {
	                classes.push('fa-pulse');
	            }
	            if (list) {
	                classes.push('fa-li');
	            }
	            if (border) {
	                classes.push('fa-border');
	            }
	            if (fixedWidth) {
	                classes.push('fa-fw');
	            }

	            var icon = _react2.default.createElement(
	                'span',
	                _extends({ className: classes.join(' ') }, other),
	                this.props.children
	            );
	            if (href) {
	                return _react2.default.createElement(
	                    'a',
	                    { href: href },
	                    icon
	                );
	            } else {
	                return icon;
	            }
	        }
	    }]);

	    return Icon;
	}(_react2.default.Component);

	exports.default = Icon;


	Icon.propTypes = {
	    name: _react2.default.PropTypes.string.isRequired,
	    size: _react2.default.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
	    flip: _react2.default.PropTypes.oneOf(['horizontal', 'vertical']),
	    pull: _react2.default.PropTypes.oneOf(['left', 'right']),
	    rotate: _react2.default.PropTypes.oneOf([90, 180, 270, '90', '180', '270']),
	    className: _react2.default.PropTypes.string,
	    href: _react2.default.PropTypes.string,
	    spin: _react2.default.PropTypes.bool,
	    pulse: _react2.default.PropTypes.bool,
	    list: _react2.default.PropTypes.bool,
	    inverse: _react2.default.PropTypes.bool,
	    border: _react2.default.PropTypes.bool,
	    fixedWidth: _react2.default.PropTypes.bool
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;