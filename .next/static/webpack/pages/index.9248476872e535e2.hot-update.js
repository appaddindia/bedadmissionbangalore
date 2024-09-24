/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layout/FooterComponent.js":
/*!***************************************!*\
  !*** ./src/layout/FooterComponent.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_VideoPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/VideoPopup */ \"./src/components/VideoPopup.js\");\n/* harmony import */ var _context_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/video */ \"./src/context/video.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ \"./src/layout/Footer.js\");\n/* harmony import */ var _Footer2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer2 */ \"./src/layout/Footer2.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ \"./src/layout/Header.js\");\n/* harmony import */ var _FooterComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FooterComponent */ \"./src/layout/FooterComponent.js\");\n/* harmony import */ var _FooterComponent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FooterComponent__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children, footer, headerBtn } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.aTagClick)();\n        window.addEventListener(\"scroll\", _utils_utils__WEBPACK_IMPORTED_MODULE_4__.stickNav);\n    });\n    const videoContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_video__WEBPACK_IMPORTED_MODULE_3__.VideoContext);\n    const { video } = videoContext;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        id: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                headerBtn: headerBtn\n            }, void 0, false, {\n                fileName: \"D:\\\\Officework\\\\bedadmissionbangalore\\\\bedadmissionbangalore\\\\src\\\\layout\\\\Layout.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            children,\n            footer === 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Officework\\\\bedadmissionbangalore\\\\bedadmissionbangalore\\\\src\\\\layout\\\\Layout.js\",\n                lineNumber: 21,\n                columnNumber: 23\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Officework\\\\bedadmissionbangalore\\\\bedadmissionbangalore\\\\src\\\\layout\\\\Layout.js\",\n                lineNumber: 21,\n                columnNumber: 37\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_FooterComponent__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {\n                fileName: \"D:\\\\Officework\\\\bedadmissionbangalore\\\\bedadmissionbangalore\\\\src\\\\layout\\\\Layout.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Officework\\\\bedadmissionbangalore\\\\bedadmissionbangalore\\\\src\\\\layout\\\\Layout.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layout, \"5a3OrQHbzGo4CzysKeDQ/izlac4=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSTtBQUNGO0FBQ0s7QUFDdkI7QUFDRTtBQUNGO0FBQ2tCO0FBRWhELE1BQU1VLFNBQVM7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFOztJQUM3Q1osZ0RBQVNBLENBQUM7UUFDUkcsdURBQVNBO1FBQ1RVLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVWLGtEQUFRQTtJQUM1QztJQUNBLE1BQU1XLGVBQWVoQixpREFBVUEsQ0FBQ0csd0RBQVlBO0lBQzVDLE1BQU0sRUFBRWMsS0FBSyxFQUFFLEdBQUdEO0lBQ2xCLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO1FBQU9DLElBQUc7OzBCQUN2Qiw4REFBQ1osK0NBQU1BO2dCQUFDSyxXQUFXQTs7Ozs7O1lBQ2xCRjtZQUNBQyxXQUFXLGtCQUFJLDhEQUFDTCxnREFBT0E7Ozs7MENBQU0sOERBQUNELCtDQUFNQTs7Ozs7MEJBQ3JDLDhEQUFDRyx5REFBZUE7Ozs7Ozs7Ozs7O0FBR3RCO0dBZk1DO0tBQUFBO0FBaUJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvTGF5b3V0LmpzP2Y2ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBWaWRlb1BvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZGVvUG9wdXBcIjtcclxuaW1wb3J0IHsgVmlkZW9Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvdmlkZW9cIjtcclxuaW1wb3J0IHsgYVRhZ0NsaWNrLCBzdGlja05hdiB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgRm9vdGVyMiBmcm9tIFwiLi9Gb290ZXIyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXJDb21wb25lbnQgZnJvbSBcIi4vRm9vdGVyQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgZm9vdGVyLCBoZWFkZXJCdG4gfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhVGFnQ2xpY2soKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHN0aWNrTmF2KTtcclxuICB9KTtcclxuICBjb25zdCB2aWRlb0NvbnRleHQgPSB1c2VDb250ZXh0KFZpZGVvQ29udGV4dCk7XHJcbiAgY29uc3QgeyB2aWRlbyB9ID0gdmlkZW9Db250ZXh0O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIiBpZD1cInBhZ2VcIj5cclxuICAgICAgPEhlYWRlciBoZWFkZXJCdG49e2hlYWRlckJ0bn0gLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7Zm9vdGVyID09PSAyID8gPEZvb3RlcjIgLz4gOiA8Rm9vdGVyIC8+fVxyXG4gICAgICA8Rm9vdGVyQ29tcG9uZW50Lz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiVmlkZW9Qb3B1cCIsIlZpZGVvQ29udGV4dCIsImFUYWdDbGljayIsInN0aWNrTmF2IiwiRm9vdGVyIiwiRm9vdGVyMiIsIkhlYWRlciIsIkZvb3RlckNvbXBvbmVudCIsIkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwiaGVhZGVyQnRuIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInZpZGVvQ29udGV4dCIsInZpZGVvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/Layout.js\n"));

/***/ })

});