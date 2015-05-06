/******/ (function(modules) { // webpackBootstrap
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

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	/**
	 * Email Validation
	 * @param  {String} email
	 * @return {Boolean} True if email is valid
	 */
	exports.validation = validation;

	function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

	function validation(email) {
		// email does not contains spaces
		if (email.indexOf(' ') !== -1) return false;

		// email contains at symbol
		if (email.indexOf('@') === -1) return false;

		// email contains exactly one at symbol
		var pieces = email.split('@');
		if (pieces.length !== 2) return false;

		var _pieces = _slicedToArray(pieces, 2);

		var username = _pieces[0];
		var domain = _pieces[1];

		// email does not start with at symbol
		if (username.length <= 0) return false;

		// domain contains dot
		if (domain.indexOf('.') === -1) return false;

		// if email passed all above tests its valid
		return true;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.test = test;

	function test() {
		return !0;
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Escapes special characters in a string for use in an SQL statement
	 * @param  {String} str The string that is to be escaped.
	 * @return {String} Returns the escaped string
	 */
	exports.escape = escape;

	/**
	 * escape values from query
	 * @param {Array} strings
	 * @param {...Array} values
	 * @return {String}
	 */
	exports.query = query;

	function escape(str) {
		return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
			switch (char) {
				case "\u0000":
					return "\\0";
				case "\b":
					return "\\b";
				case "\t":
					return "\\t";
				case "\u001a":
					return "\\z";
				case "\n":
					return "\\n";
				case "\r":
					return "\\r";
				case "\"":
				case "'":
				case "\\":
				case "%":
					return "\\" + char;
			}
		});
	}

	function query(strings) {
		for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			values[_key - 1] = arguments[_key];
		}

		var _strings = strings.slice(0);
		for (var i in values) {
			_strings[i] += "\"" + escape(values[i]) + "\"";
		}
		return _strings.join("");
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _srcIndexEntryJs = __webpack_require__(2);

	var index = _interopRequireWildcard(_srcIndexEntryJs);

	describe('test the test', function () {
		it('should return true!', function () {
			expect(index.test()).toEqual(true);
		});
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _srcEmailEntryJs = __webpack_require__(1);

	var email = _interopRequireWildcard(_srcEmailEntryJs);

	describe('email validation', function () {
		it('should have validation function', function () {
			expect(email.validation).toBeDefined();
		});

		it('should return false if empty string is passed', function () {
			expect(email.validation('')).toBe(false);
		});

		it('should return true if valid email is passed', function () {
			expect(email.validation('cotne@itdc.ge')).toBe(true);
		});

		it('should not have spaces', function () {
			expect(email.validation('co tne@itdc.ge')).toBe(false);
		});

		it('should have dot after at symbole', function () {
			expect(email.validation('cotne@itdcge')).toBe(false);
		});

		it('should contain at symbole', function () {
			expect(email.validation('cotne.itdc.ge')).toBe(false);
		});

		it('should contain only one at symbole', function () {
			expect(email.validation('cotne@it.d@c.ge')).toBe(false);
		});

		it('should not start with at symbole', function () {
			expect(email.validation('@gmail.com')).toBe(false);
		});
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var _srcMysqlEntryJs = __webpack_require__(3);

	describe('mysql library', function () {
		it('should escape strings', function () {
			var id = '" or 1=1 or 1="';
			expect(_srcMysqlEntryJs.query(_taggedTemplateLiteral(['select * from table where id=', ''], ['select * from table where id=', '']), id)).toEqual('select * from table where id="\\" or 1=1 or 1=\\""');
		});
	});

/***/ }
/******/ ]);