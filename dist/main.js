/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_biggo_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/biggo-right */ \"./src/scripts/biggo-right.js\");\n/* harmony import */ var _scripts_biggo_left__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/biggo-left */ \"./src/scripts/biggo-left.js\");\n/* harmony import */ var _scripts_biggo_butt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/biggo-butt */ \"./src/scripts/biggo-butt.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvasEle = document.getElementById('cc-cafe');\n    canvasEle.width = 1000;\n    canvasEle.height = 800;\n\n    const ctx = canvasEle.getContext('2d');\n\n    let biggoRight = new _scripts_biggo_right__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvasEle);\n    let biggoLeft = new _scripts_biggo_left__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, canvasEle);\n    let biggoButt = new _scripts_biggo_butt__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx, canvasEle);\n\n    setInterval(() => {\n        biggoRight.move();\n        // ctx.clearBiggo(0,0,)\n    }, 20);\n\n\n\n    // debugger;\n    // ctx.fillStyle = \"purple\";\n    // ctx.fillRect(0, 0, 1000, 800);\n\n    // ctx.beginPath();\n    // ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);\n    // ctx.strokeStyle = \"green\";\n    // ctx.lineWidth = 5;\n    // ctx.stroke();\n    // ctx.fillStyle = \"blue\";\n    // ctx.fill();\n    console.log(\"Webpack is working!\")\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/biggo-butt.js":
/*!***********************************!*\
  !*** ./src/scripts/biggo-butt.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass BiggoButt {\n\n    constructor(ctx, canvasEle) {\n\n        this.ctx = ctx;\n        this.canvasEle = canvasEle;\n\n        let x = 0;\n        let y = 0;\n        let biggoButtPath = \"src/images/corgi-butt.png\";\n        let biggoButt = new Image();\n        biggoButt.src = biggoButtPath;\n        biggoButt.onload = function () {\n        ctx.drawImage(biggoButt, x, y);\n        };\n\n\n    }\n\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BiggoButt);\n\n\n//# sourceURL=webpack:///./src/scripts/biggo-butt.js?");

/***/ }),

/***/ "./src/scripts/biggo-left.js":
/*!***********************************!*\
  !*** ./src/scripts/biggo-left.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass BiggoLeft {\n\n    constructor(ctx, canvasEle) {\n\n        this.ctx = ctx;\n        this.canvasEle = canvasEle;\n\n        let x = 0;\n        let y = 0;\n        let biggoLeftPath = \"src/images/corgi-left.png\";\n        let biggoLeft = new Image();\n        biggoLeft.src = biggoLeftPath;\n        biggoLeft.onload = function () {\n        ctx.drawImage(biggoLeft, x, y);\n        };\n\n\n    }\n\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BiggoLeft);\n\n\n//# sourceURL=webpack:///./src/scripts/biggo-left.js?");

/***/ }),

/***/ "./src/scripts/biggo-right.js":
/*!************************************!*\
  !*** ./src/scripts/biggo-right.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass BiggoRight {\n\n    constructor(ctx, canvasEle) {\n        this.ctx = ctx;\n        this.canvasEle = canvasEle;\n\n        this.pos = [0,0];\n\n        let x = 0;\n        let y = 0;\n        let biggoRightPath = \"src/images/corgi-right.png\";\n        let biggoRight = new Image();\n        biggoRight.src = biggoRightPath;\n        biggoRight.onload = function () {\n            ctx.drawImage(biggoRight, x, y);\n        };\n    }\n\n    move(x, y){\n        this.ctx.moveTo(x, y);\n    }\n\n    clearclearBiggo(){}\n    \n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BiggoRight);\n\n\n//# sourceURL=webpack:///./src/scripts/biggo-right.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// .cc-cafe {\n//     position: absolute;\n//     top: 0;\n//     left: 0;\n//     width: 100%;\n//     height: 100%;\n// }\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ })

/******/ });