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
/* harmony import */ var _scripts_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/bean */ "./src/scripts/bean.js");



document.addEventListener("DOMContentLoaded", function () {
  var canvasEle = document.getElementById('cc-cafe');
  canvasEle.width = 1300;
  canvasEle.height = 700;
  var ctx = canvasEle.getContext('2d');
  var caf = new _scripts_cafe__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvasEle);
  console.log("Webpack is working!");
});

/***/ }),

/***/ "./src/scripts/bean.js":
/*!*****************************!*\
  !*** ./src/scripts/bean.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bean = /*#__PURE__*/function () {
  function Bean() {
    _classCallCheck(this, Bean);

    this.randomizedNums = this.randomizedNums.bind(this);
  }

  _createClass(Bean, [{
    key: "randomizedNums",
    value: function randomizedNums(num) {
      var beanArray = [];

      while (beanArray.length < num) {
        var randNum = Math.floor(Math.random() * 99);

        if (!beanArray.includes(randNum)) {
          beanArray.push(randNum);
        }
      }

      return beanArray.sort(function (a, b) {
        return a - b;
      });
    }
  }]);

  return Bean;
}();

/* harmony default export */ __webpack_exports__["default"] = (Bean);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmlnZ28tYnV0dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iaWdnby1sZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JpZ2dvLXJpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhZmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbGUiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhZiIsIkNhZmUiLCJjb25zb2xlIiwibG9nIiwiQmVhbiIsInJhbmRvbWl6ZWROdW1zIiwiYmluZCIsIm51bSIsImJlYW5BcnJheSIsImxlbmd0aCIsInJhbmROdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbmNsdWRlcyIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJCaWdnb0J1dHQiLCJ4IiwieSIsImJpZ2dvQnV0dFBhdGgiLCJiaWdnb0J1dHQiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsIkJpZ2dvTGVmdCIsImJpZ2dvTGVmdFBhdGgiLCJiaWdnb0xlZnQiLCJCaWdnb1JpZ2h0IiwiYmlnZ29SaWdodFBhdGgiLCJiaWdnb1JpZ2h0IiwibW92ZVRvIiwiZ2V0VXNlclRhcmdldE51bSIsImN1cHRlc3QwIiwiQ3VwIiwiY3VwdGVzdDEiLCJjdXB0ZXN0MiIsImN1cHRlc3QzIiwiY3VwdGVzdDQiLCJzZXRJbnRlcnZhbCIsIm1vdmUiLCJ1c2VyVGFyZ2V0TnVtIiwidmFsdWUiLCJ0cmFuc2xhdGUiLCJsaW5lV2lkdGgiLCJmaWxsU3R5bGUiLCJzYXZlIiwic2NhbGUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGwiLCJzdHJva2UiLCJyZXN0b3JlIiwiYXJjVG8iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELE1BQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBQ0FELFdBQVMsQ0FBQ0UsS0FBVixHQUFrQixJQUFsQjtBQUNBRixXQUFTLENBQUNHLE1BQVYsR0FBbUIsR0FBbkI7QUFDQSxNQUFNQyxHQUFHLEdBQUdKLFNBQVMsQ0FBQ0ssVUFBVixDQUFxQixJQUFyQixDQUFaO0FBRUEsTUFBTUMsR0FB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QUFiO0FBQ0FwRCxPQUFHLENBQUNpRCxTQUFKLEdBQWdCLENBQWhCO0FBQ0FqRCxPQUFHLENBQUNxRCxTQUFKO0FBQ0FyRCxPQUFHLENBQUNzRCxHQUFKLENBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxFQUFkLEVBQWtCLENBQWxCLEVBQXFCLElBQUl6QyxJQUFJLENBQUMwQyxFQUE5QixFQUFrQyxLQUFsQztBQUNBdkQsT0FBRyxDQUFDeUQsTUFBSjtBQUNBekQsT0FBRyxDQUFDMEQsT0FBSixHQTlDdUIsQ0FnRHZCOztBQUNBMUQsT0FBRyxDQUFDcUQsU0FBSjtBQUNBckQsT0FBRyxDQUFDb0MsTUFBSixDQUFXLENBQUMsRUFBWixFQUFnQixDQUFoQjtBQUNBcEMsT0FBRyxDQUFDMkQsS0FBSixDQUFVLENBQUMsRUFBWCxFQUFlLEVBQWYsRUFBbUIsRUFBbkIsRUFBdUIsR0FBdkIsRUFBNEIsRUFBNUI7QUFDQTNELE9BQUcsQ0FBQ2lELFNBQUosR0FBZ0IsQ0FBaEI7QUFDQWpELE9BQUcsQ0FBQ3lELE1BQUosR0FyRHVCLENBdUR2Qjs7QUFDQXpELE9BQUcsQ0FBQ3FELFNBQUo7QUFDQXJELE9BQUcsQ0FBQ29DLE1BQUosQ0FBVyxFQUFYLEVBQWUsQ0FBZjtBQUNBcEMsT0FBRyxDQUFDMkQsS0FBSixDQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCO0FBQ0EzRCxPQUFHLENBQUNpRCxTQUFKLEdBQWdCLENBQWhCO0FBQ0FqRCxPQUFHLENBQUN5RCxNQUFKO0FBQ0F6RCxPQUFHLENBQUMwRCxPQUFKO0FBQ0g7Ozs7cUNBRWdCLENBRWhCOzs7Ozs7QUFDSjtBQUVjbkIsa0VBQWYsRTs7Ozs7Ozs7Ozs7QUN2RUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBDYWZlIGZyb20gXCIuL3NjcmlwdHMvY2FmZVwiO1xuaW1wb3J0IEJlYW4gZnJvbSBcIi4vc2NyaXB0cy9iZWFuXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhc0VsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYy1jYWZlJyk7XG4gICAgY2FudmFzRWxlLndpZHRoID0gMTMwMDtcbiAgICBjYW52YXNFbGUuaGVpZ2h0ID0gNzAwO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZS5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuICAgIGNvbnN0IGNhZiA9IG5ldyBDYWZlKGN0eCwgY2FudmFzRWxlKTtcblxuXG4gICAgY29uc29sZS5sb2coXCJXZWJwYWNrIGlzIHdvcmtpbmchXCIpXG5cbn0pOyIsImNsYXNzIEJlYW4ge1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yYW5kb21pemVkTnVtcyA9IHRoaXMucmFuZG9taXplZE51bXMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICByYW5kb21pemVkTnVtcyhudW0pIHtcbiAgICAgICAgY29uc3QgYmVhbkFycmF5ID0gW107XG5cbiAgICAgICAgd2hpbGUgKGJlYW5BcnJheS5sZW5ndGggPCBudW0pIHtcbiAgICAgICAgICAgIGxldCByYW5kTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTkpXG5cbiAgICAgICAgICAgIGlmICghYmVhbkFycmF5LmluY2x1ZGVzKHJhbmROdW0pKSB7XG4gICAgICAgICAgICAgICAgYmVhbkFycmF5LnB1c2gocmFuZE51bSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJlYW5BcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhIC0gYiB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmVhbjsiLCJjbGFzcyBCaWdnb0J1dHQge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXNFbGUpIHtcblxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG5cbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IDI1MDtcbiAgICAgICAgbGV0IGJpZ2dvQnV0dFBhdGggPSBcInNyYy9pbWFnZXMvY29yZ2ktYnV0dC5wbmdcIjtcbiAgICAgICAgbGV0IGJpZ2dvQnV0dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiaWdnb0J1dHQuc3JjID0gYmlnZ29CdXR0UGF0aDtcbiAgICAgICAgYmlnZ29CdXR0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShiaWdnb0J1dHQsIHgsIHksIDMwMCwgMzAwICogYmlnZ29CdXR0LmhlaWdodCAvIGJpZ2dvQnV0dC53aWR0aCk7XG4gICAgICAgIH07XG5cblxuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmlnZ29CdXR0O1xuIiwiY2xhc3MgQmlnZ29MZWZ0IHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzRWxlKSB7XG5cbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlID0gY2FudmFzRWxlO1xuXG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBsZXQgYmlnZ29MZWZ0UGF0aCA9IFwic3JjL2ltYWdlcy9jb3JnaS1sZWZ0LnBuZ1wiO1xuICAgICAgICBsZXQgYmlnZ29MZWZ0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJpZ2dvTGVmdC5zcmMgPSBiaWdnb0xlZnRQYXRoO1xuICAgICAgICBiaWdnb0xlZnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGJpZ2dvTGVmdCwgeCwgeSwgNDAwLCA0MDAgKiBiaWdnb0xlZnQuaGVpZ2h0IC8gYmlnZ29MZWZ0LndpZHRoKTtcbiAgICAgICAgfTtcblxuXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCaWdnb0xlZnQ7XG4iLCJjbGFzcyBCaWdnb1JpZ2h0IHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzRWxlKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhc0VsZSA9IGNhbnZhc0VsZTtcblxuICAgICAgICAvLyB0aGlzLnBvcyA9IFswLDBdO1xuXG4gICAgICAgIGxldCB4ID0gLTUwMDtcbiAgICAgICAgbGV0IHkgPSAxNTA7XG4gICAgICAgIGxldCBiaWdnb1JpZ2h0UGF0aCA9IFwic3JjL2ltYWdlcy9jb3JnaS1yaWdodC5wbmdcIjtcbiAgICAgICAgbGV0IGJpZ2dvUmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmlnZ29SaWdodC5zcmMgPSBiaWdnb1JpZ2h0UGF0aDtcbiAgICAgICAgYmlnZ29SaWdodC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGJpZ2dvUmlnaHQsIHgsIHksIDQwMCwgNDAwICogYmlnZ29SaWdodC5oZWlnaHQgLyBiaWdnb1JpZ2h0LndpZHRoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBtb3ZlKHgsIHkpe1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgfVxuXG4gICAgY2xlYXJCaWdnbygpe31cbiAgICBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBCaWdnb1JpZ2h0O1xuIiwiaW1wb3J0IEJpZ2dvUmlnaHQgZnJvbSBcIi4vYmlnZ28tcmlnaHRcIjtcbmltcG9ydCBCaWdnb0xlZnQgZnJvbSBcIi4vYmlnZ28tbGVmdFwiO1xuaW1wb3J0IEJpZ2dvQnV0dCBmcm9tIFwiLi9iaWdnby1idXR0XCI7XG5pbXBvcnQgQ3VwIGZyb20gXCIuL2N1cFwiO1xuXG5jbGFzcyBDYWZlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhc0VsZSkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGUgPSBjYW52YXNFbGU7XG4gICAgICAgIHRoaXMuZ2V0VXNlclRhcmdldE51bSA9IHRoaXMuZ2V0VXNlclRhcmdldE51bS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IGJpZ2dvUmlnaHQgPSBuZXcgQmlnZ29SaWdodChjdHgsIGNhbnZhc0VsZSk7XG4gICAgICAgIGNvbnN0IGJpZ2dvTGVmdCA9IG5ldyBCaWdnb0xlZnQoY3R4LCBjYW52YXNFbGUpO1xuICAgICAgICBjb25zdCBiaWdnb0J1dHQgPSBuZXcgQmlnZ29CdXR0KGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgY29uc3QgY3VwdGVzdDAgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgY29uc3QgY3VwdGVzdDEgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgY29uc3QgY3VwdGVzdDIgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgY29uc3QgY3VwdGVzdDMgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgY29uc3QgY3VwdGVzdDQgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgLy8gY29uc3QgY3VwdGVzdDUgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgLy8gY29uc3QgY3VwdGVzdDYgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgLy8gY29uc3QgY3VwdGVzdDcgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgLy8gY29uc3QgY3VwdGVzdDggPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcbiAgICAgICAgLy8gY29uc3QgY3VwdGVzdDkgPSBuZXcgQ3VwKGN0eCwgY2FudmFzRWxlKTtcblxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBiaWdnb1JpZ2h0Lm1vdmUoKTtcbiAgICAgICAgICAgIC8vIGN0eC5jbGVhckJpZ2dvKDAsMCwpXG4gICAgICAgIH0sIDIwKTtcblxuICAgICAgICAvLyBjdXB0ZXN0LmRyYXdCYXNlKGN0eCk7XG5cbiAgICB9XG5cbiAgICBnZXRVc2VyVGFyZ2V0TnVtKCkge1xuICAgICAgICBjb25zdCB1c2VyVGFyZ2V0TnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLXRhcmdldC1udW1cIikudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJUYXJnZXROdW0pO1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhZmU7IiwiY2xhc3MgQ3VwIHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzRWxlKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlID0gY2FudmFzRWxlO1xuXG4gICAgICAgIGN0eC50cmFuc2xhdGUoMTMwLCAxMCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxLjU7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYig1OCwgMjQsIDI0KVwiO1xuXG4gICAgICAgIC8vIFx0dG9wIGlubmVyIGJsYWNrIHJpbmdcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgY3R4LnNjYWxlKDIsIDAuNCk7XG4gICAgICAgIC8vIGN0eC5saW5lV2lkdGggPSAxLjU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygwLCAwLCAxOCwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICAgIC8vIFx0dG9wIG91dGVyIGJsYWNrIHJpbmdcdFxuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKDAsIDApO1xuICAgICAgICBjdHguc2NhbGUoMiwgMC40KTtcbiAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDEuNTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDAsIDAsIDI1LCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgLy9yZWZsZWN0aW9uIHJpbmdcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgwLCAxMCk7XG4gICAgICAgIGN0eC5zY2FsZSgwLjgsIDAuMTUpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoMCwgMCwgNTAsIDAsIDEgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcblxuICAgICAgICAvL2JvdHRvbSBibGFjayByaW5nXG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoMCwgNTkpO1xuICAgICAgICBjdHguc2NhbGUoMSwgMC4yKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygwLCAwLCAyMCwgMCwgMSAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICAgIC8vIFx0bGVmdCBsaW5lIG9mIGN1cFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oLTUwLCAwKTtcbiAgICAgICAgY3R4LmFyY1RvKC00NSwgNDUsIDcwLCAxMTUsIDYwKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAvLyBcdHJpZ2h0IGxpbmUgb2YgY3VwXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyg1MCwgMCk7XG4gICAgICAgIGN0eC5hcmNUbyg0NSwgNDMsIDI4LCA1NSwgNjkpO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUN1cEluZGV4KCkge1xuXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VwOyAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9