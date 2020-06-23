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





document.addEventListener("DOMContentLoaded", function () {
  var canvasEle = document.getElementById('cc-cafe');
  canvasEle.width = 1000;
  canvasEle.height = 800;
  var ctx = canvasEle.getContext('2d');
  var biggoRight = new _scripts_biggo_right__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvasEle);
  var biggoLeft = new _scripts_biggo_left__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, canvasEle);
  var biggoButt = new _scripts_biggo_butt__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, canvasEle);
  setInterval(function () {
    biggoRight.move(); // ctx.clearBiggo(0,0,)
  }, 20); // debugger;
  // ctx.fillStyle = "purple";
  // ctx.fillRect(0, 0, 1000, 800);
  // ctx.beginPath();
  // ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
  // ctx.strokeStyle = "green";
  // ctx.lineWidth = 5;
  // ctx.stroke();
  // ctx.fillStyle = "blue";
  // ctx.fill();

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
  var y = 0;
  var biggoButtPath = "src/images/corgi-butt.png";
  var biggoButt = new Image();
  biggoButt.src = biggoButtPath;

  biggoButt.onload = function () {
    ctx.drawImage(biggoButt, x, y);
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
    ctx.drawImage(biggoLeft, x, y);
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
    this.canvasEle = canvasEle;
    this.pos = [0, 0];
    var x = 0;
    var y = 0;
    var biggoRightPath = "src/images/corgi-right.png";
    var biggoRight = new Image();
    biggoRight.src = biggoRightPath;

    biggoRight.onload = function () {
      ctx.drawImage(biggoRight, x, y);
    };
  }

  _createClass(BiggoRight, [{
    key: "move",
    value: function move(x, y) {
      this.ctx.moveTo(x, y);
    }
  }, {
    key: "clearclearBiggo",
    value: function clearclearBiggo() {}
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cafe = /*#__PURE__*/function () {
  function Cafe(ctx, canvasEle) {
    _classCallCheck(this, Cafe);

    this.ctx = ctx;
    this.canvasEle = canvasEle;
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

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JpZ2dvLWJ1dHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmlnZ28tbGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iaWdnby1yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jYWZlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsZSIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmlnZ29SaWdodCIsIkJpZ2dvUmlnaHQiLCJiaWdnb0xlZnQiLCJCaWdnb0xlZnQiLCJiaWdnb0J1dHQiLCJCaWdnb0J1dHQiLCJzZXRJbnRlcnZhbCIsIm1vdmUiLCJjb25zb2xlIiwibG9nIiwieCIsInkiLCJiaWdnb0J1dHRQYXRoIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJiaWdnb0xlZnRQYXRoIiwicG9zIiwiYmlnZ29SaWdodFBhdGgiLCJtb3ZlVG8iLCJDYWZlIiwidXNlclRhcmdldE51bSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVB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R0FBWDtBQUNBLFNBQUtKLFNBQUwsR0FBaUJBLFNBQWpCO0FBRUEsU0FBS3dCLEdBQUwsR0FBVyxDQUFDLENBQUQsRUFBRyxDQUFILENBQVg7QUFFQSxRQUFJUixDQUFDLEdBQUcsQ0FBUjtBQUNBLFFBQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsUUFBSVEsY0FBYyxHQUFHLDRCQUFyQjtBQUNBLFFBQUluQixVQUFVLEdBQUcsSUFBSWEsS0FBSixFQUFqQjtBQUNBYixjQUFVLENBQUNjLEdBQVgsR0FBaUJLLGNBQWpCOztBQUNBbkIsY0FBVSxDQUFDZSxNQUFYLEdBQW9CLFlBQVk7QUFDNUJqQixTQUFHLENBQUNrQixTQUFKLENBQWNoQixVQUFkLEVBQTBCVSxDQUExQixFQUE2QkMsQ0FBN0I7QUFDSCxLQUZEO0FBR0g7Ozs7eUJBRUlELEMsRUFBR0MsQyxFQUFFO0FBQ04sV0FBS2IsR0FBTCxDQUFTc0IsTUFBVCxDQUFnQlYsQ0FBaEIsRUFBbUJDLENBQW5CO0FBQ0g7OztzQ0FFZ0IsQ0FBRTs7Ozs7O0FBS1JWLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMzQk1vQixJO0FBQ0YsZ0JBQVl2QixHQUFaLEVBQWlCSixTQUFqQixFQUE0QjtBQUFBOztBQUN4QixTQUFLSSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLSixTQUFMLEdBQWlCQSxTQUFqQjtBQUNIOzs7O3VDQUVrQjtBQUNmLFVBQU00QixhQUFhLEdBQUc5QixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDNEIsS0FBakU7QUFDQWYsYUFBTyxDQUFDQyxHQUFSLENBQVlhLGFBQVo7QUFDQTtBQUNIOzs7Ozs7QUFHVUQsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNiQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IEJpZ2dvUmlnaHQgZnJvbSBcIi4vc2NyaXB0cy9iaWdnby1yaWdodFwiO1xuaW1wb3J0IEJpZ2dvTGVmdCBmcm9tIFwiLi9zY3JpcHRzL2JpZ2dvLWxlZnRcIjtcbmltcG9ydCBCaWdnb0J1dHQgZnJvbSBcIi4vc2NyaXB0cy9iaWdnby1idXR0XCI7XG5pbXBvcnQgQ2FmZSBmcm9tIFwiLi9zY3JpcHRzL2NhZmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhc0VsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYy1jYWZlJyk7XG4gICAgY2FudmFzRWxlLndpZHRoID0gMTAwMDtcbiAgICBjYW52YXNFbGUuaGVpZ2h0ID0gODAwO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgYmlnZ29SaWdodCA9IG5ldyBCaWdnb1JpZ2h0KGN0eCwgY2FudmFzRWxlKTtcbiAgICBsZXQgYmlnZ29MZWZ0ID0gbmV3IEJpZ2dvTGVmdChjdHgsIGNhbnZhc0VsZSk7XG4gICAgbGV0IGJpZ2dvQnV0dCA9IG5ldyBCaWdnb0J1dHQoY3R4LCBjYW52YXNFbGUpO1xuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBiaWdnb1JpZ2h0Lm1vdmUoKTtcbiAgICAgICAgLy8gY3R4LmNsZWFyQmlnZ28oMCwwLClcbiAgICB9LCAyMCk7XG5cblxuXG4gICAgLy8gZGVidWdnZXI7XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIDEwMDAsIDgwMCk7XG5cbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LmFyYygxMDAsIDEwMCwgMjAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgLy8gY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIGNvbnNvbGUubG9nKFwiV2VicGFjayBpcyB3b3JraW5nIVwiKVxuXG59KTsiLCJjbGFzcyBCaWdnb0J1dHQge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNFbGUpIHtcblxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG5cbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGxldCBiaWdnb0J1dHRQYXRoID0gXCJzcmMvaW1hZ2VzL2NvcmdpLWJ1dHQucG5nXCI7XG4gICAgICAgIGxldCBiaWdnb0J1dHQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmlnZ29CdXR0LnNyYyA9IGJpZ2dvQnV0dFBhdGg7XG4gICAgICAgIGJpZ2dvQnV0dC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmlnZ29CdXR0LCB4LCB5KTtcbiAgICAgICAgfTtcblxuXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCaWdnb0J1dHQ7XG4iLCJjbGFzcyBCaWdnb0xlZnQge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNFbGUpIHtcblxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG5cbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGxldCBiaWdnb0xlZnRQYXRoID0gXCJzcmMvaW1hZ2VzL2NvcmdpLWxlZnQucG5nXCI7XG4gICAgICAgIGxldCBiaWdnb0xlZnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmlnZ29MZWZ0LnNyYyA9IGJpZ2dvTGVmdFBhdGg7XG4gICAgICAgIGJpZ2dvTGVmdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmlnZ29MZWZ0LCB4LCB5KTtcbiAgICAgICAgfTtcblxuXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCaWdnb0xlZnQ7XG4iLCJjbGFzcyBCaWdnb1JpZ2h0IHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzRWxlKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhc0VsZSA9IGNhbnZhc0VsZTtcblxuICAgICAgICB0aGlzLnBvcyA9IFswLDBdO1xuXG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBsZXQgYmlnZ29SaWdodFBhdGggPSBcInNyYy9pbWFnZXMvY29yZ2ktcmlnaHQucG5nXCI7XG4gICAgICAgIGxldCBiaWdnb1JpZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJpZ2dvUmlnaHQuc3JjID0gYmlnZ29SaWdodFBhdGg7XG4gICAgICAgIGJpZ2dvUmlnaHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShiaWdnb1JpZ2h0LCB4LCB5KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBtb3ZlKHgsIHkpe1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgfVxuXG4gICAgY2xlYXJjbGVhckJpZ2dvKCl7fVxuICAgIFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpZ2dvUmlnaHQ7XG4iLCJjbGFzcyBDYWZlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc0VsZSkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG4gICAgfVxuXG4gICAgZ2V0VXNlclRhcmdldE51bSgpIHtcbiAgICAgICAgY29uc3QgdXNlclRhcmdldE51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci10YXJnZXQtbnVtXCIpLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyVGFyZ2V0TnVtKTtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWZlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=