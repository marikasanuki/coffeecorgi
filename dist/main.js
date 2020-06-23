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
  canvasEle.width = 1000;
  canvasEle.height = 800;
  var ctx = canvasEle.getContext('2d');
  var biggoRight = new _scripts_biggo_right__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvasEle);
  var biggoLeft = new _scripts_biggo_left__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, canvasEle);
  var biggoButt = new _scripts_biggo_butt__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, canvasEle);
  var cuptest = new _scripts_cup__WEBPACK_IMPORTED_MODULE_5__["default"](ctx, canvasEle);
  cuptest.drawBase(ctx);
  setInterval(function () {
    biggoRight.move(); // ctx.clearBiggo(0,0,)
  }, 20);
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
    this.drawCup = this.drawCup.bind(this);
    this.drawBase = this.drawBase.bind(this);
  }

  _createClass(Cup, [{
    key: "drawBase",
    value: function drawBase(ctx) {
      ctx.save();
      ctx.translate(100, 40);
      this.drawCup();
      ctx.restore();
    }
  }, {
    key: "drawCup",
    value: function drawCup(ctx) {
      ctx.save();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(0, 0, 0, 1)";
      ctx.fillStyle = "rgb(58, 24, 24)"; // 	top inner black ring

      ctx.save();
      ctx.translate(0, 0);
      ctx.scale(2, 0.4);
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, 18, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.stroke();
      ctx.restore(); // 	top outer black ring	

      ctx.save();
      ctx.translate(0, 0);
      ctx.scale(2, 0.4);
      ctx.lineWidth = 1.5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JpZ2dvLWJ1dHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmlnZ28tbGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iaWdnby1yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jYWZlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2N1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJiaWdnb1JpZ2h0IiwiQmlnZ29SaWdodCIsImJpZ2dvTGVmdCIsIkJpZ2dvTGVmdCIsImJpZ2dvQnV0dCIsIkJpZ2dvQnV0dCIsImN1cHRlc3QiLCJDdXAiLCJkcmF3QmFzZSIsInNldEludGVydmFsIiwibW92ZSIsImNvbnNvbGUiLCJsb2ciLCJ4IiwieSIsImJpZ2dvQnV0dFBhdGgiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImJpZ2dvTGVmdFBhdGgiLCJwb3MiLCJiaWdnb1JpZ2h0UGF0aCIsIm1vdmVUbyIsIkNhZmUiLCJ1c2VyVGFyZ2V0TnVtIiwidmFsdWUiLCJkcmF3Q3VwIiwiYmluZCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyZXN0b3JlIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJzY2FsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJzdHJva2UiLCJhcmNUbyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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Q0FBaEI7QUFDQWxDLFNBQUcsQ0FBQ3NDLFNBQUo7QUFDQXRDLFNBQUcsQ0FBQ3VDLEdBQUosQ0FBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLEVBQWQsRUFBa0IsQ0FBbEIsRUFBcUIsSUFBSUMsSUFBSSxDQUFDQyxFQUE5QixFQUFrQyxLQUFsQztBQUNBekMsU0FBRyxDQUFDMkMsTUFBSjtBQUNBM0MsU0FBRyxDQUFDaUMsT0FBSixHQTlDUyxDQWdEVDs7QUFDQWpDLFNBQUcsQ0FBQ3NDLFNBQUo7QUFDQXRDLFNBQUcsQ0FBQ3lCLE1BQUosQ0FBVyxDQUFDLEVBQVosRUFBZ0IsQ0FBaEI7QUFDQXpCLFNBQUcsQ0FBQzRDLEtBQUosQ0FBVSxDQUFDLEVBQVgsRUFBZSxFQUFmLEVBQW1CLEVBQW5CLEVBQXVCLEdBQXZCLEVBQTRCLEVBQTVCO0FBQ0E1QyxTQUFHLENBQUNrQyxTQUFKLEdBQWdCLENBQWhCO0FBQ0FsQyxTQUFHLENBQUMyQyxNQUFKLEdBckRTLENBdURUOztBQUNBM0MsU0FBRyxDQUFDc0MsU0FBSjtBQUNBdEMsU0FBRyxDQUFDeUIsTUFBSixDQUFXLEVBQVgsRUFBZSxDQUFmO0FBQ0F6QixTQUFHLENBQUM0QyxLQUFKLENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUI7QUFDQTVDLFNBQUcsQ0FBQ2tDLFNBQUosR0FBZ0IsQ0FBaEI7QUFDQWxDLFNBQUcsQ0FBQzJDLE1BQUo7QUFDQTNDLFNBQUcsQ0FBQ2lDLE9BQUo7QUFDSDs7Ozs7O0FBUUo7QUFFY3hCLGtFQUFmLEU7Ozs7Ozs7Ozs7O0FDeEZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgQmlnZ29SaWdodCBmcm9tIFwiLi9zY3JpcHRzL2JpZ2dvLXJpZ2h0XCI7XG5pbXBvcnQgQmlnZ29MZWZ0IGZyb20gXCIuL3NjcmlwdHMvYmlnZ28tbGVmdFwiO1xuaW1wb3J0IEJpZ2dvQnV0dCBmcm9tIFwiLi9zY3JpcHRzL2JpZ2dvLWJ1dHRcIjtcbmltcG9ydCBDYWZlIGZyb20gXCIuL3NjcmlwdHMvY2FmZVwiO1xuaW1wb3J0IEN1cCBmcm9tIFwiLi9zY3JpcHRzL2N1cFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NjLWNhZmUnKTtcbiAgICBjYW52YXNFbGUud2lkdGggPSAxMDAwO1xuICAgIGNhbnZhc0VsZS5oZWlnaHQgPSA4MDA7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXNFbGUuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGxldCBiaWdnb1JpZ2h0ID0gbmV3IEJpZ2dvUmlnaHQoY3R4LCBjYW52YXNFbGUpO1xuICAgIGxldCBiaWdnb0xlZnQgPSBuZXcgQmlnZ29MZWZ0KGN0eCwgY2FudmFzRWxlKTtcbiAgICBsZXQgYmlnZ29CdXR0ID0gbmV3IEJpZ2dvQnV0dChjdHgsIGNhbnZhc0VsZSk7XG4gICAgbGV0IGN1cHRlc3QgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICBjdXB0ZXN0LmRyYXdCYXNlKGN0eCk7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGJpZ2dvUmlnaHQubW92ZSgpO1xuICAgICAgICAvLyBjdHguY2xlYXJCaWdnbygwLDAsKVxuICAgIH0sIDIwKTtcblxuXG5cblxuICAgIGNvbnNvbGUubG9nKFwiV2VicGFjayBpcyB3b3JraW5nIVwiKVxuXG59KTsiLCJjbGFzcyBCaWdnb0J1dHQge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNFbGUpIHtcblxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG5cbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGxldCBiaWdnb0J1dHRQYXRoID0gXCJzcmMvaW1hZ2VzL2NvcmdpLWJ1dHQucG5nXCI7XG4gICAgICAgIGxldCBiaWdnb0J1dHQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmlnZ29CdXR0LnNyYyA9IGJpZ2dvQnV0dFBhdGg7XG4gICAgICAgIGJpZ2dvQnV0dC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmlnZ29CdXR0LCB4LCB5KTtcbiAgICAgICAgfTtcblxuXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCaWdnb0J1dHQ7XG4iLCJjbGFzcyBCaWdnb0xlZnQge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNFbGUpIHtcblxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG5cbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGxldCBiaWdnb0xlZnRQYXRoID0gXCJzcmMvaW1hZ2VzL2NvcmdpLWxlZnQucG5nXCI7XG4gICAgICAgIGxldCBiaWdnb0xlZnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmlnZ29MZWZ0LnNyYyA9IGJpZ2dvTGVmdFBhdGg7XG4gICAgICAgIGJpZ2dvTGVmdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmlnZ29MZWZ0LCB4LCB5KTtcbiAgICAgICAgfTtcblxuXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCaWdnb0xlZnQ7XG4iLCJjbGFzcyBCaWdnb1JpZ2h0IHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzRWxlKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhc0VsZSA9IGNhbnZhc0VsZTtcblxuICAgICAgICB0aGlzLnBvcyA9IFswLDBdO1xuXG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBsZXQgYmlnZ29SaWdodFBhdGggPSBcInNyYy9pbWFnZXMvY29yZ2ktcmlnaHQucG5nXCI7XG4gICAgICAgIGxldCBiaWdnb1JpZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJpZ2dvUmlnaHQuc3JjID0gYmlnZ29SaWdodFBhdGg7XG4gICAgICAgIGJpZ2dvUmlnaHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShiaWdnb1JpZ2h0LCB4LCB5KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBtb3ZlKHgsIHkpe1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgfVxuXG4gICAgY2xlYXJjbGVhckJpZ2dvKCl7fVxuICAgIFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpZ2dvUmlnaHQ7XG4iLCJjbGFzcyBDYWZlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc0VsZSkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG4gICAgfVxuXG4gICAgZ2V0VXNlclRhcmdldE51bSgpIHtcbiAgICAgICAgY29uc3QgdXNlclRhcmdldE51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci10YXJnZXQtbnVtXCIpLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyVGFyZ2V0TnVtKTtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWZlOyIsImNsYXNzIEN1cCB7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc0VsZSl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhc0VsZSA9IGNhbnZhc0VsZTtcbiAgICAgICAgdGhpcy5kcmF3Q3VwID0gdGhpcy5kcmF3Q3VwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0Jhc2UgPSB0aGlzLmRyYXdCYXNlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd0Jhc2UoY3R4KSB7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoMTAwLCA0MCk7XG4gICAgICAgIHRoaXMuZHJhd0N1cCgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGRyYXdDdXAoY3R4KSB7XG5cbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDEuNTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDEpXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYig1OCwgMjQsIDI0KVwiO1xuXG5cbiAgICAgICAgLy8gXHR0b3AgaW5uZXIgYmxhY2sgcmluZ1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKDAsIDApO1xuICAgICAgICBjdHguc2NhbGUoMiwgMC40KTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDEuNTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDAsIDAsIDE4LCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgLy8gXHR0b3Agb3V0ZXIgYmxhY2sgcmluZ1x0XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIGN0eC5zY2FsZSgyLCAwLjQpO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMS41O1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMCwgMCwgMjUsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcblxuICAgICAgICAvL3JlZmxlY3Rpb24gcmluZ1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKDAsIDEwKTtcbiAgICAgICAgY3R4LnNjYWxlKDAuOCwgMC4xNSk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygwLCAwLCA1MCwgMCwgMSAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICAgIC8vYm90dG9tIGJsYWNrIHJpbmdcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgwLCA1OSk7XG4gICAgICAgIGN0eC5zY2FsZSgxLCAwLjIpO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDAsIDAsIDIwLCAwLCAxICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgLy8gXHRsZWZ0IGxpbmUgb2YgY3VwXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbygtNTAsIDApO1xuICAgICAgICBjdHguYXJjVG8oLTQ1LCA0NSwgNzAsIDExNSwgNjApO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIFx0cmlnaHQgbGluZSBvZiBjdXBcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKDUwLCAwKTtcbiAgICAgICAgY3R4LmFyY1RvKDQ1LCA0MywgMjgsIDU1LCA2OSk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG5cblxuXG5cblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXA7ICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=