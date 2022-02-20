/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Observe.js":
/*!************************!*\
  !*** ./src/Observe.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observe\": () => (/* binding */ Observe)\n/* harmony export */ });\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./src/Observer.js\");\n\n\nfunction Observe(obj) {\n  if (typeof obj !== 'object') return;\n\n  if (obj.__ob__) {\n    return;\n  } else {\n    new _Observer__WEBPACK_IMPORTED_MODULE_0__.Observer(obj);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Observe.js?");

/***/ }),

/***/ "./src/Observer.js":
/*!*************************!*\
  !*** ./src/Observer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observer\": () => (/* binding */ Observer)\n/* harmony export */ });\n// 递归\n// Object.defineProperty只会对对应的属性进行劫持\n// 如果属性值是对象，其嵌套的元素的不会触发响应式getter\n\nconst { defineReactive } = __webpack_require__(/*! ./defineReactive */ \"./src/defineReactive.js\");\n\n// Todo: 作用是将一个正常的object转换为每个层级属性都是响应式的(可被侦测的)\nclass Observer {\n  constructor(obj) {\n    Object.defineProperty(obj, '__ob__', {\n      value: this,\n      enumerable: false,\n      writable: true,\n      configurable: true,\n    });\n    this.walk(obj);\n  }\n\n  walk(obj) {\n    for (let key in obj) {\n      defineReactive(obj, key);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Observer.js?");

/***/ }),

/***/ "./src/defineReactive.js":
/*!*******************************!*\
  !*** ./src/defineReactive.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defineReactive\": () => (/* binding */ defineReactive)\n/* harmony export */ });\n/* harmony import */ var _Observe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observe */ \"./src/Observe.js\");\n\n\nvar obj = {};\n\nObject.defineProperty(obj, 'a', {\n  // getter\n  get() {\n    console.log('visit a');\n    return 10;\n  },\n\n  // setter\n  set(newValue) {\n    console.log(newValue);\n  },\n});\n\nconsole.log(obj.a);\n\nobj.a = 100;\n\nconsole.log(obj.a); // 依然是10\n\n// 因此我们应该将newValue赋予一个变量，在getter中每次返回这个变量\n// 使用闭包来实现\n\n/**\n *\n * @param {*} data\n * @param {*} key\n * @param {*} val\n */\nfunction defineReactive(data, key, val = data[key]) {\n  (0,_Observe__WEBPACK_IMPORTED_MODULE_0__.Observe)(val);\n\n  Object.defineProperty(data, key, {\n    get() {\n      console.log('visit key');\n      return val;\n    },\n\n    set(newValue) {\n      console.log('change key value');\n      if (newValue === val) return;\n      val = newValue;\n      // 监听新值\n      (0,_Observe__WEBPACK_IMPORTED_MODULE_0__.Observe)(newValue);\n    },\n  });\n}\n\nvar obj2 = {};\n\ndefineReactive(obj2, 'key', 'value');\n\nconsole.log(obj2.key);\n\nobj2.key = 'block';\n\nconsole.log(obj2.key);\n\n\n//# sourceURL=webpack:///./src/defineReactive.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Observe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observe */ \"./src/Observe.js\");\n// var obj = {};\n\n// Object.defineProperty(obj, 'a', {\n//   value: 10,\n\n//   // 是否可写\n//   writable: false,\n// });\n\n// console.log(obj);\n\n// console.log(obj.a);\n\n// obj.a = 11;\n\n// console.log(obj.a);\n\n// observe\n\n\nconst obj = {\n  a: {\n    b: {\n      c: {\n        d: 99,\n      },\n    },\n  },\n  e: 'sting',\n};\n\n(0,_Observe__WEBPACK_IMPORTED_MODULE_0__.Observe)(obj);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;