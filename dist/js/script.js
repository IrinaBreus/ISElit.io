/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropdown */ \"./src/js/modules/dropdown.js\");\n/* harmony import */ var _modules_feedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/feedback */ \"./src/js/modules/feedback.js\");\n/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hamburger */ \"./src/js/modules/hamburger.js\");\n/* harmony import */ var _modules_sliderComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sliderComments */ \"./src/js/modules/sliderComments.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n'use stricti';\r\n\r\n(0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_sliderComments__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.reviews__comments', '.reviews__dots');\r\n(0,_modules_sliderComments__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.works__comments', '.works__dots');\r\n(0,_modules_feedback__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/dropdown.js":
/*!************************************!*\
  !*** ./src/js/modules/dropdown.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst dropdown = () => {\r\n    const dropdown = document.querySelector('.dropdown'),\r\n          content = document.querySelector('.dropdown-content');\r\n\r\n    let timerId;\r\n\r\n    dropdown.addEventListener('mouseover', () => {\r\n        if (content.style.display = 'none') {\r\n            content.style.display = 'block';\r\n        }\r\n    });\r\n\r\n    dropdown.addEventListener('mouseout', () => {\r\n        timerId = setTimeout(() => {\r\n            content.style.display = 'none';\r\n        }, 500);\r\n    });\r\n\r\n    content.addEventListener('mouseover', () => {\r\n        content.style.display = 'block';\r\n        clearTimeout(timerId);\r\n    });\r\n\r\n    content.addEventListener('mouseout', () => {\r\n        content.style.display = 'none';\r\n    });\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropdown);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/dropdown.js?");

/***/ }),

/***/ "./src/js/modules/feedback.js":
/*!************************************!*\
  !*** ./src/js/modules/feedback.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst feedback = () => {\r\n    const trigger = document.querySelector('.feedback__btn'),\r\n          form = document.querySelector('.feedback__form'),\r\n          btnClose = document.querySelector('.feedback__close'),\r\n          btnSubmit  = form.querySelector('button');\r\n\r\n    trigger.addEventListener('click', () => {\r\n        form.style.display = 'block';\r\n    })\r\n    btnSubmit.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        form.style.display = 'none';\r\n        trigger.style.display = 'none';\r\n        trigger.previousElementSibling.style.display = 'block';\r\n        trigger.previousElementSibling.previousElementSibling.style.display = 'none';\r\n\r\n        setTimeout(() => {\r\n            document.querySelector('.feedback').style.display = 'none';\r\n        }, 3000);\r\n    });\r\n\r\n    btnClose.addEventListener('click', () => {\r\n        form.style.display = 'none';\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (feedback);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/feedback.js?");

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst hamburger = () => {\r\n    const trigger = document.querySelector('.hamburger-btn'),\r\n          content = document.querySelector('.hamburger');\r\n\r\n    trigger.addEventListener('click', () => {\r\n        trigger.classList.toggle('hamburger-btn__active');\r\n        content.classList.toggle('hamburger__active');\r\n\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (hamburger);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/hamburger.js?");

/***/ }),

/***/ "./src/js/modules/sliderComments.js":
/*!******************************************!*\
  !*** ./src/js/modules/sliderComments.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst sliderComments = (fieldS, dotsS) => {\r\n    const field = document.querySelector(fieldS),\r\n          box = field.querySelectorAll('.comment'),\r\n          dotsContainer = document.querySelector(dotsS);\r\n\r\n    let width,\r\n        x1 = 0,\r\n        offset = 0,\r\n        dotIndex = 0;\r\n        \r\n    createDots();\r\n    dotActive(0);\r\n        \r\n    box.forEach(elem => {\r\n        width = parseInt(window.getComputedStyle(elem).width) - (parseInt(window.getComputedStyle(elem).marginRight) * 2);\r\n    })\r\n    \r\n    field.style.width = 100 * width + '%';\r\n    field.style.display = 'flex';\r\n\r\n    field.addEventListener('mousedown', (e) => {\r\n        e.preventDefault();\r\n        x1 = e.clientX;\r\n    });\r\n\r\n    field.addEventListener('mouseup', (e) => {\r\n        e.preventDefault();\r\n        let x2 = e.clientX;\r\n        let diff = x2 - x1;\r\n        if (diff > 0) {\r\n            movieRight();\r\n        }\r\n        if (diff < 0) {\r\n            movieLeft();\r\n        }\r\n    });\r\n    \r\n    const dots = dotsContainer.querySelectorAll('.dot');\r\n    dots.forEach((dot, i) => {\r\n        dot.addEventListener('click', () => {\r\n            dotActive(i);\r\n            offset = width * i;\r\n            field.style.transform = `translateX(-${offset}px)`;\r\n        })\r\n    });\r\n\r\n   function movieRight() {\r\n        if (offset == 0) {\r\n            return;\r\n        } else {\r\n            offset -= width;\r\n        }\r\n        if (dotIndex < 0) {\r\n            return;\r\n        } else {\r\n            dotIndex--;\r\n        }\r\n        field.style.transform = `translateX(-${offset}px)`;\r\n        dotActive(dotIndex);\r\n    }\r\n\r\n    function movieLeft() {\r\n        if (dotIndex >= box.length - 1 ) {\r\n            return;\r\n        } else {\r\n            dotIndex += 1;\r\n        }\r\n\r\n        if (offset <= width * box.length - 2) {\r\n            offset += width;\r\n        } \r\n\r\n        \r\n        field.style.transform = `translateX(-${offset}px)`;\r\n        dotActive(dotIndex);\r\n    }\r\n\r\n\r\n    function createDots() {\r\n        for (let dot of box) {\r\n            dot = document.createElement('div');\r\n            dot.classList.add('dot');\r\n            dotsContainer.append(dot);\r\n        }\r\n    }\r\n    function dotActive(i) {\r\n        let dots = dotsContainer.querySelectorAll('.dot');\r\n        dots.forEach(dot => {\r\n            dot.classList.remove('dot-active');\r\n        });\r\n        dots[i].classList.add('dot-active');\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sliderComments);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/sliderComments.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;