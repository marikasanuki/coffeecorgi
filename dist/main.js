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
/* harmony import */ var _scripts_biggo_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/biggo-right */ "./src/scripts/biggo-right.js");
/* harmony import */ var _scripts_biggo_left__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/biggo-left */ "./src/scripts/biggo-left.js");
/* harmony import */ var _scripts_biggo_butt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/biggo-butt */ "./src/scripts/biggo-butt.js");
/* harmony import */ var _scripts_cafe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/cafe */ "./src/scripts/cafe.js");
/* harmony import */ var _scripts_cup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/cup */ "./src/scripts/cup.js");






document.addEventListener("DOMContentLoaded", function () {
  var canvasEle = document.getElementById('cc-cafe');
  canvasEle.width = 1300;
  canvasEle.height = 800;
  var ctx = canvasEle.getContext('2d');
  var caf = new _scripts_cafe__WEBPACK_IMPORTED_MODULE_4__["default"](ctx, canvasEle);
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
  var y = 300;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JpZ2dvLWJ1dHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmlnZ28tbGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iaWdnby1yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jYWZlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjYWYiLCJDYWZlIiwiY29uc29sZSIsImxvZyIsIkJpZ2dvQnV0dCIsIngiLCJ5IiwiYmlnZ29CdXR0UGF0aCIsImJpZ2dvQnV0dCIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIiwiQmlnZ29MZWZ0IiwiYmlnZ29MZWZ0UGF0aCIsImJpZ2dvTGVmdCIsIkJpZ2dvUmlnaHQiLCJiaWdnb1JpZ2h0UGF0aCIsImJpZ2dvUmlnaHQiLCJtb3ZlVG8iLCJnZXRVc2VyVGFyZ2V0TnVtIiwiYmluZCIsImN1cHRlc3QwIiwiQ3VwIiwiY3VwdGVzdDEiLCJjdXB0ZXN0MiIsImN1cHRlc3QzIiwiY3VwdGVzdDQiLCJzZXRJbnRlcnZhbCIsIm1vdmUiLCJ1c2VyVGFyZ2V0TnVtIiwidmFsdWUiLCJ0cmFuc2xhdGUiLCJsaW5lV2lkdGgiLCJmaWxsU3R5bGUiLCJzYXZlIiwic2NhbGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwic3Ryb2tlIiwicmVzdG9yZSIsImFyY1RvIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtR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QyxPQUFHLENBQUM0QyxNQUFKO0FBQ0E1QyxPQUFHLENBQUM2QyxPQUFKO0FBQ0g7Ozs7cUNBRWdCLENBRWhCOzs7Ozs7QUFDSjtBQUVjcEIsa0VBQWYsRTs7Ozs7Ozs7Ozs7QUN2RUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBCaWdnb1JpZ2h0IGZyb20gXCIuL3NjcmlwdHMvYmlnZ28tcmlnaHRcIjtcbmltcG9ydCBCaWdnb0xlZnQgZnJvbSBcIi4vc2NyaXB0cy9iaWdnby1sZWZ0XCI7XG5pbXBvcnQgQmlnZ29CdXR0IGZyb20gXCIuL3NjcmlwdHMvYmlnZ28tYnV0dFwiO1xuaW1wb3J0IENhZmUgZnJvbSBcIi4vc2NyaXB0cy9jYWZlXCI7XG5pbXBvcnQgQ3VwIGZyb20gXCIuL3NjcmlwdHMvY3VwXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2MtY2FmZScpO1xuICAgIGNhbnZhc0VsZS53aWR0aCA9IDEzMDA7XG4gICAgY2FudmFzRWxlLmhlaWdodCA9IDgwMDtcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbGUuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IGNhZiA9IG5ldyBDYWZlKGN0eCwgY2FudmFzRWxlKTtcblxuICAgIGNvbnNvbGUubG9nKFwiV2VicGFjayBpcyB3b3JraW5nIVwiKVxuXG59KTsiLCJjbGFzcyBCaWdnb0J1dHQge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNFbGUpIHtcblxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG5cbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IDMwMDtcbiAgICAgICAgbGV0IGJpZ2dvQnV0dFBhdGggPSBcInNyYy9pbWFnZXMvY29yZ2ktYnV0dC5wbmdcIjtcbiAgICAgICAgbGV0IGJpZ2dvQnV0dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiaWdnb0J1dHQuc3JjID0gYmlnZ29CdXR0UGF0aDtcbiAgICAgICAgYmlnZ29CdXR0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShiaWdnb0J1dHQsIHgsIHksIDMwMCwgMzAwICogYmlnZ29CdXR0LmhlaWdodCAvIGJpZ2dvQnV0dC53aWR0aCk7XG4gICAgICAgIH07XG5cblxuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmlnZ29CdXR0O1xuIiwiY2xhc3MgQmlnZ29MZWZ0IHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzRWxlKSB7XG5cbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlID0gY2FudmFzRWxlO1xuXG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBsZXQgYmlnZ29MZWZ0UGF0aCA9IFwic3JjL2ltYWdlcy9jb3JnaS1sZWZ0LnBuZ1wiO1xuICAgICAgICBsZXQgYmlnZ29MZWZ0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJpZ2dvTGVmdC5zcmMgPSBiaWdnb0xlZnRQYXRoO1xuICAgICAgICBiaWdnb0xlZnQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGJpZ2dvTGVmdCwgeCwgeSwgNDAwLCA0MDAgKiBiaWdnb0xlZnQuaGVpZ2h0IC8gYmlnZ29MZWZ0LndpZHRoKTtcbiAgICAgICAgfTtcblxuXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCaWdnb0xlZnQ7XG4iLCJjbGFzcyBCaWdnb1JpZ2h0IHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzRWxlKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhc0VsZSA9IGNhbnZhc0VsZTtcblxuICAgICAgICAvLyB0aGlzLnBvcyA9IFswLDBdO1xuXG4gICAgICAgIGxldCB4ID0gLTUwMDtcbiAgICAgICAgbGV0IHkgPSAxNTA7XG4gICAgICAgIGxldCBiaWdnb1JpZ2h0UGF0aCA9IFwic3JjL2ltYWdlcy9jb3JnaS1yaWdodC5wbmdcIjtcbiAgICAgICAgbGV0IGJpZ2dvUmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmlnZ29SaWdodC5zcmMgPSBiaWdnb1JpZ2h0UGF0aDtcbiAgICAgICAgYmlnZ29SaWdodC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGJpZ2dvUmlnaHQsIHgsIHksIDQwMCwgNDAwICogYmlnZ29SaWdodC5oZWlnaHQgLyBiaWdnb1JpZ2h0LndpZHRoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBtb3ZlKHgsIHkpe1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgfVxuXG4gICAgY2xlYXJCaWdnbygpe31cbiAgICBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBCaWdnb1JpZ2h0O1xuIiwiaW1wb3J0IEJpZ2dvUmlnaHQgZnJvbSBcIi4vYmlnZ28tcmlnaHRcIjtcbmltcG9ydCBCaWdnb0xlZnQgZnJvbSBcIi4vYmlnZ28tbGVmdFwiO1xuaW1wb3J0IEJpZ2dvQnV0dCBmcm9tIFwiLi9iaWdnby1idXR0XCI7XG5pbXBvcnQgQ3VwIGZyb20gXCIuL2N1cFwiO1xuXG5jbGFzcyBDYWZlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc0VsZSkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG4gICAgICAgIHRoaXMuZ2V0VXNlclRhcmdldE51bSA9IHRoaXMuZ2V0VXNlclRhcmdldE51bS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IGJpZ2dvUmlnaHQgPSBuZXcgQmlnZ29SaWdodChjdHgsIGNhbnZhc0VsZSk7XG4gICAgICAgIGNvbnN0IGJpZ2dvTGVmdCA9IG5ldyBCaWdnb0xlZnQoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICBjb25zdCBiaWdnb0J1dHQgPSBuZXcgQmlnZ29CdXR0KGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgY29uc3QgY3VwdGVzdDAgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgY29uc3QgY3VwdGVzdDEgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgY29uc3QgY3VwdGVzdDIgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgY29uc3QgY3VwdGVzdDMgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgY29uc3QgY3VwdGVzdDQgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgLy8gY29uc3QgY3VwdGVzdDUgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgLy8gY29uc3QgY3VwdGVzdDYgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgLy8gY29uc3QgY3VwdGVzdDcgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgLy8gY29uc3QgY3VwdGVzdDggPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgLy8gY29uc3QgY3VwdGVzdDkgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcblxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBiaWdnb1JpZ2h0Lm1vdmUoKTtcbiAgICAgICAgICAgIC8vIGN0eC5jbGVhckJpZ2dvKDAsMCwpXG4gICAgICAgIH0sIDIwKTtcblxuICAgICAgICAvLyBjdXB0ZXN0LmRyYXdCYXNlKGN0eCk7XG5cbiAgICB9XG5cbiAgICBnZXRVc2VyVGFyZ2V0TnVtKCkge1xuICAgICAgICBjb25zdCB1c2VyVGFyZ2V0TnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLXRhcmdldC1udW1cIikudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJUYXJnZXROdW0pO1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhZmU7IiwiY2xhc3MgQ3VwIHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzRWxlKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlID0gY2FudmFzRWxlO1xuXG4gICAgICAgIGN0eC50cmFuc2xhdGUoMTMwLCAxMCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxLjU7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYig1OCwgMjQsIDI0KVwiO1xuXG4gICAgICAgIC8vIFx0dG9wIGlubmVyIGJsYWNrIHJpbmdcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgY3R4LnNjYWxlKDIsIDAuNCk7XG4gICAgICAgIC8vIGN0eC5saW5lV2lkdGggPSAxLjU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygwLCAwLCAxOCwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICAgIC8vIFx0dG9wIG91dGVyIGJsYWNrIHJpbmdcdFxuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKDAsIDApO1xuICAgICAgICBjdHguc2NhbGUoMiwgMC40KTtcbiAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDEuNTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDAsIDAsIDI1LCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgLy9yZWZsZWN0aW9uIHJpbmdcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgwLCAxMCk7XG4gICAgICAgIGN0eC5zY2FsZSgwLjgsIDAuMTUpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMCwgMCwgNTAsIDAsIDEgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcblxuICAgICAgICAvL2JvdHRvbSBibGFjayByaW5nXG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoMCwgNTkpO1xuICAgICAgICBjdHguc2NhbGUoMSwgMC4yKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygwLCAwLCAyMCwgMCwgMSAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICAgIC8vIFx0bGVmdCBsaW5lIG9mIGN1cFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oLTUwLCAwKTtcbiAgICAgICAgY3R4LmFyY1RvKC00NSwgNDUsIDcwLCAxMTUsIDYwKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAvLyBcdHJpZ2h0IGxpbmUgb2YgY3VwXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyg1MCwgMCk7XG4gICAgICAgIGN0eC5hcmNUbyg0NSwgNDMsIDI4LCA1NSwgNjkpO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUN1cEluZGV4KCkge1xuXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VwOyAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9