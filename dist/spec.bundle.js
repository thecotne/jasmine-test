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

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.validation = validation;

	function validation(email) {
		if (email.indexOf(' ') === -1) {
			if (email.indexOf('@') > -1) {
				var pieces = email.split('@');
				if (pieces.length === 2) {
					if (pieces[0].length > 0) {
						if (pieces[1].indexOf('.') > -1) {
							return true;
						}
					}
				}
			}
		}

		return false;
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

	'use strict';

	__webpack_require__(4);
	__webpack_require__(5);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _import = __webpack_require__(2);

	var index = _interopRequireWildcard(_import);

	describe('test the test', function () {
		it('should return true!', function () {
			expect(index.test()).toEqual(true);
		});
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _import = __webpack_require__(1);

	var email = _interopRequireWildcard(_import);

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

/***/ }
/******/ ]);