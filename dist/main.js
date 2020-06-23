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
/******/ 	__webpack_require__.p = "/dist/";
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_cafe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/cafe */ "./src/scripts/cafe.js");


document.addEventListener("DOMContentLoaded", function () {
  var canvasEle = document.getElementById('cc-cafe');
  canvasEle.width = 1300;
  canvasEle.height = 700;
  var ctx = canvasEle.getContext('2d');
  var caf = new _scripts_cafe__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvasEle);
  console.log("Webpack is working!");
});

/***/ }),

/***/ "./src/scripts/biggo-butt.js":
/*!***********************************!*\
  !*** ./src/scripts/biggo-butt.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BiggoButt = function BiggoButt(ctx, canvasEle) {
  _classCallCheck(this, BiggoButt);

  this.ctx = ctx;
  this.canvasEle = canvasEle;
  var x = 0;
  var y = 250;
  var biggoButtPath = "src/images/corgi-butt.png";
  var biggoButt = new Image();
  biggoButt.src = biggoButtPath;

  biggoButt.onload = function () {
    ctx.drawImage(biggoButt, x, y, 300, 300 * biggoButt.height / biggoButt.width);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (BiggoButt);

/***/ }),

/***/ "./src/scripts/biggo-left.js":
/*!***********************************!*\
  !*** ./src/scripts/biggo-left.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BiggoLeft = function BiggoLeft(ctx, canvasEle) {
  _classCallCheck(this, BiggoLeft);

  this.ctx = ctx;
  this.canvasEle = canvasEle;
  var x = 0;
  var y = 0;
  var biggoLeftPath = "src/images/corgi-left.png";
  var biggoLeft = new Image();
  biggoLeft.src = biggoLeftPath;

  biggoLeft.onload = function () {
    ctx.drawImage(biggoLeft, x, y, 400, 400 * biggoLeft.height / biggoLeft.width);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (BiggoLeft);

/***/ }),

/***/ "./src/scripts/biggo-right.js":
/*!************************************!*\
  !*** ./src/scripts/biggo-right.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BiggoRight = /*#__PURE__*/function () {
  function BiggoRight(ctx, canvasEle) {
    _classCallCheck(this, BiggoRight);

    this.ctx = ctx;
    this.canvasEle = canvasEle; // this.pos = [0,0];

    var x = -500;
    var y = 150;
    var biggoRightPath = "src/images/corgi-right.png";
    var biggoRight = new Image();
    biggoRight.src = biggoRightPath;

    biggoRight.onload = function () {
      ctx.drawImage(biggoRight, x, y, 400, 400 * biggoRight.height / biggoRight.width);
    };
  }

  _createClass(BiggoRight, [{
    key: "move",
    value: function move(x, y) {
      this.ctx.moveTo(x, y);
    }
  }, {
    key: "clearBiggo",
    value: function clearBiggo() {}
  }]);

  return BiggoRight;
}();

/* harmony default export */ __webpack_exports__["default"] = (BiggoRight);

/***/ }),

/***/ "./src/scripts/cafe.js":
/*!*****************************!*\
  !*** ./src/scripts/cafe.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _biggo_right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./biggo-right */ "./src/scripts/biggo-right.js");
/* harmony import */ var _biggo_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./biggo-left */ "./src/scripts/biggo-left.js");
/* harmony import */ var _biggo_butt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./biggo-butt */ "./src/scripts/biggo-butt.js");
/* harmony import */ var _cup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cup */ "./src/scripts/cup.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Cafe = /*#__PURE__*/function () {
  function Cafe(ctx, canvasEle) {
    _classCallCheck(this, Cafe);

    this.ctx = ctx;
    this.canvasEle = canvasEle;
    this.getUserTargetNum = this.getUserTargetNum.bind(this);
    var biggoRight = new _biggo_right__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, canvasEle);
    var biggoLeft = new _biggo_left__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvasEle);
    var biggoButt = new _biggo_butt__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, canvasEle);
    var cuptest0 = new _cup__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, canvasEle);
    var cuptest1 = new _cup__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, canvasEle);
    var cuptest2 = new _cup__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, canvasEle);
    var cuptest3 = new _cup__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, canvasEle);
    var cuptest4 = new _cup__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, canvasEle); // const cuptest5 = new Cup(ctx, canvasEle);
    // const cuptest6 = new Cup(ctx, canvasEle);
    // const cuptest7 = new Cup(ctx, canvasEle);
    // const cuptest8 = new Cup(ctx, canvasEle);
    // const cuptest9 = new Cup(ctx, canvasEle);

    setInterval(function () {
      biggoRight.move(); // ctx.clearBiggo(0,0,)
    }, 20); // cuptest.drawBase(ctx);
  }

  _createClass(Cafe, [{
    key: "getUserTargetNum",
    value: function getUserTargetNum() {
      var userTargetNum = document.getElementById("user-target-num").value;
      console.log(userTargetNum);
      debugger;
    }
  }]);

  return Cafe;
}();

/* harmony default export */ __webpack_exports__["default"] = (Cafe);

/***/ }),

/***/ "./src/scripts/cup.js":
/*!****************************!*\
  !*** ./src/scripts/cup.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cup = /*#__PURE__*/function () {
  function Cup(ctx, canvasEle) {
    _classCallCheck(this, Cup);

    this.ctx = ctx;
    this.canvasEle = canvasEle;
    ctx.translate(130, 10);
    ctx.lineWidth = 1.5;
    ctx.fillStyle = "rgb(58, 24, 24)"; // 	top inner black ring

    ctx.save();
    ctx.translate(0, 0);
    ctx.scale(2, 0.4); // ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.arc(0, 0, 18, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.restore(); // 	top outer black ring	

    ctx.save();
    ctx.translate(0, 0);
    ctx.scale(2, 0.4); // ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.arc(0, 0, 25, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.restore(); //reflection ring

    ctx.save();
    ctx.translate(0, 10);
    ctx.scale(0.8, 0.15);
    ctx.beginPath();
    ctx.arc(0, 0, 50, 0, 1 * Math.PI, false);
    ctx.stroke();
    ctx.restore(); //bottom black ring

    ctx.save();
    ctx.translate(0, 59);
    ctx.scale(1, 0.2);
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, 20, 0, 1 * Math.PI, false);
    ctx.stroke();
    ctx.restore(); // 	left line of cup

    ctx.beginPath();
    ctx.moveTo(-50, 0);
    ctx.arcTo(-45, 45, 70, 115, 60);
    ctx.lineWidth = 2;
    ctx.stroke(); // 	right line of cup

    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.arcTo(45, 43, 28, 55, 69);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }

  _createClass(Cup, [{
    key: "createCupIndex",
    value: function createCupIndex() {}
  }]);

  return Cup;
}();

;
/* harmony default export */ __webpack_exports__["default"] = (Cup);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JpZ2dvLWJ1dHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmlnZ28tbGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iaWdnby1yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jYWZlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbGUiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhZiIsIkNhZmUiLCJjb25zb2xlIiwibG9nIiwiQmlnZ29CdXR0IiwieCIsInkiLCJiaWdnb0J1dHRQYXRoIiwiYmlnZ29CdXR0IiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJCaWdnb0xlZnQiLCJiaWdnb0xlZnRQYXRoIiwiYmlnZ29MZWZ0IiwiQmlnZ29SaWdodCIsImJpZ2dvUmlnaHRQYXRoIiwiYmlnZ29SaWdodCIsIm1vdmVUbyIsImdldFVzZXJUYXJnZXROdW0iLCJiaW5kIiwiY3VwdGVzdDAiLCJDdXAiLCJjdXB0ZXN0MSIsImN1cHRlc3QyIiwiY3VwdGVzdDMiLCJjdXB0ZXN0NCIsInNldEludGVydmFsIiwibW92ZSIsInVzZXJUYXJnZXROdW0iLCJ2YWx1ZSIsInRyYW5zbGF0ZSIsImxpbmVXaWR0aCIsImZpbGxTdHlsZSIsInNhdmUiLCJzY2FsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJzdHJva2UiLCJyZXN0b3JlIiwiYXJjVG8iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztR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NkMsT0FBSjtBQUNIOzs7O3FDQUVnQixDQUVoQjs7Ozs7O0FBQ0o7QUFFY3BCLGtFQUFmLEU7Ozs7Ozs7Ozs7O0FDdkVBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgQ2FmZSBmcm9tIFwiLi9zY3JpcHRzL2NhZmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhc0VsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYy1jYWZlJyk7XG4gICAgY2FudmFzRWxlLndpZHRoID0gMTMwMDtcbiAgICBjYW52YXNFbGUuaGVpZ2h0ID0gNzAwO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZS5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3QgY2FmID0gbmV3IENhZmUoY3R4LCBjYW52YXNFbGUpO1xuXG4gICAgY29uc29sZS5sb2coXCJXZWJwYWNrIGlzIHdvcmtpbmchXCIpXG5cbn0pOyIsImNsYXNzIEJpZ2dvQnV0dCB7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc0VsZSkge1xuXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhc0VsZSA9IGNhbnZhc0VsZTtcblxuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gMjUwO1xuICAgICAgICBsZXQgYmlnZ29CdXR0UGF0aCA9IFwic3JjL2ltYWdlcy9jb3JnaS1idXR0LnBuZ1wiO1xuICAgICAgICBsZXQgYmlnZ29CdXR0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJpZ2dvQnV0dC5zcmMgPSBiaWdnb0J1dHRQYXRoO1xuICAgICAgICBiaWdnb0J1dHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGJpZ2dvQnV0dCwgeCwgeSwgMzAwLCAzMDAgKiBiaWdnb0J1dHQuaGVpZ2h0IC8gYmlnZ29CdXR0LndpZHRoKTtcbiAgICAgICAgfTtcblxuXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCaWdnb0J1dHQ7XG4iLCJjbGFzcyBCaWdnb0xlZnQge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNFbGUpIHtcblxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG5cbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGxldCBiaWdnb0xlZnRQYXRoID0gXCJzcmMvaW1hZ2VzL2NvcmdpLWxlZnQucG5nXCI7XG4gICAgICAgIGxldCBiaWdnb0xlZnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmlnZ29MZWZ0LnNyYyA9IGJpZ2dvTGVmdFBhdGg7XG4gICAgICAgIGJpZ2dvTGVmdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmlnZ29MZWZ0LCB4LCB5LCA0MDAsIDQwMCAqIGJpZ2dvTGVmdC5oZWlnaHQgLyBiaWdnb0xlZnQud2lkdGgpO1xuICAgICAgICB9O1xuXG5cbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpZ2dvTGVmdDtcbiIsImNsYXNzIEJpZ2dvUmlnaHQge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNFbGUpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlID0gY2FudmFzRWxlO1xuXG4gICAgICAgIC8vIHRoaXMucG9zID0gWzAsMF07XG5cbiAgICAgICAgbGV0IHggPSAtNTAwO1xuICAgICAgICBsZXQgeSA9IDE1MDtcbiAgICAgICAgbGV0IGJpZ2dvUmlnaHRQYXRoID0gXCJzcmMvaW1hZ2VzL2NvcmdpLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBsZXQgYmlnZ29SaWdodCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiaWdnb1JpZ2h0LnNyYyA9IGJpZ2dvUmlnaHRQYXRoO1xuICAgICAgICBiaWdnb1JpZ2h0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYmlnZ29SaWdodCwgeCwgeSwgNDAwLCA0MDAgKiBiaWdnb1JpZ2h0LmhlaWdodCAvIGJpZ2dvUmlnaHQud2lkdGgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG1vdmUoeCwgeSl7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICB9XG5cbiAgICBjbGVhckJpZ2dvKCl7fVxuICAgIFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpZ2dvUmlnaHQ7XG4iLCJpbXBvcnQgQmlnZ29SaWdodCBmcm9tIFwiLi9iaWdnby1yaWdodFwiO1xuaW1wb3J0IEJpZ2dvTGVmdCBmcm9tIFwiLi9iaWdnby1sZWZ0XCI7XG5pbXBvcnQgQmlnZ29CdXR0IGZyb20gXCIuL2JpZ2dvLWJ1dHRcIjtcbmltcG9ydCBDdXAgZnJvbSBcIi4vY3VwXCI7XG5cbmNsYXNzIENhZmUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzRWxlKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhc0VsZSA9IGNhbnZhc0VsZTtcbiAgICAgICAgdGhpcy5nZXRVc2VyVGFyZ2V0TnVtID0gdGhpcy5nZXRVc2VyVGFyZ2V0TnVtLmJpbmQodGhpcyk7XG5cbiAgICAgICAgY29uc3QgYmlnZ29SaWdodCA9IG5ldyBCaWdnb1JpZ2h0KGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgY29uc3QgYmlnZ29MZWZ0ID0gbmV3IEJpZ2dvTGVmdChjdHgsIGNhbnZhc0VsZSk7XG4gICAgICAgIGNvbnN0IGJpZ2dvQnV0dCA9IG5ldyBCaWdnb0J1dHQoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICBjb25zdCBjdXB0ZXN0MCA9IG5ldyBDdXAoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICBjb25zdCBjdXB0ZXN0MSA9IG5ldyBDdXAoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICBjb25zdCBjdXB0ZXN0MiA9IG5ldyBDdXAoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICBjb25zdCBjdXB0ZXN0MyA9IG5ldyBDdXAoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICBjb25zdCBjdXB0ZXN0NCA9IG5ldyBDdXAoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICAvLyBjb25zdCBjdXB0ZXN0NSA9IG5ldyBDdXAoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICAvLyBjb25zdCBjdXB0ZXN0NiA9IG5ldyBDdXAoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICAvLyBjb25zdCBjdXB0ZXN0NyA9IG5ldyBDdXAoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICAvLyBjb25zdCBjdXB0ZXN0OCA9IG5ldyBDdXAoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICAvLyBjb25zdCBjdXB0ZXN0OSA9IG5ldyBDdXAoY3R4LCBjYW52YXNFbGUpO1xuXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGJpZ2dvUmlnaHQubW92ZSgpO1xuICAgICAgICAgICAgLy8gY3R4LmNsZWFyQmlnZ28oMCwwLClcbiAgICAgICAgfSwgMjApO1xuXG4gICAgICAgIC8vIGN1cHRlc3QuZHJhd0Jhc2UoY3R4KTtcblxuICAgIH1cblxuICAgIGdldFVzZXJUYXJnZXROdW0oKSB7XG4gICAgICAgIGNvbnN0IHVzZXJUYXJnZXROdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItdGFyZ2V0LW51bVwiKS52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2codXNlclRhcmdldE51bSk7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FmZTsiLCJjbGFzcyBDdXAge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNFbGUpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG5cbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgxMzAsIDEwKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDEuNTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDU4LCAyNCwgMjQpXCI7XG5cbiAgICAgICAgLy8gXHR0b3AgaW5uZXIgYmxhY2sgcmluZ1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKDAsIDApO1xuICAgICAgICBjdHguc2NhbGUoMiwgMC40KTtcbiAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDEuNTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDAsIDAsIDE4LCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgLy8gXHR0b3Agb3V0ZXIgYmxhY2sgcmluZ1x0XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIGN0eC5zY2FsZSgyLCAwLjQpO1xuICAgICAgICAvLyBjdHgubGluZVdpZHRoID0gMS41O1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMCwgMCwgMjUsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcblxuICAgICAgICAvL3JlZmxlY3Rpb24gcmluZ1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKDAsIDEwKTtcbiAgICAgICAgY3R4LnNjYWxlKDAuOCwgMC4xNSk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygwLCAwLCA1MCwgMCwgMSAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICAgIC8vYm90dG9tIGJsYWNrIHJpbmdcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgwLCA1OSk7XG4gICAgICAgIGN0eC5zY2FsZSgxLCAwLjIpO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDAsIDAsIDIwLCAwLCAxICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgLy8gXHRsZWZ0IGxpbmUgb2YgY3VwXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbygtNTAsIDApO1xuICAgICAgICBjdHguYXJjVG8oLTQ1LCA0NSwgNzAsIDExNSwgNjApO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIFx0cmlnaHQgbGluZSBvZiBjdXBcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKDUwLCAwKTtcbiAgICAgICAgY3R4LmFyY1RvKDQ1LCA0MywgMjgsIDU1LCA2OSk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ3VwSW5kZXgoKSB7XG5cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXA7ICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=