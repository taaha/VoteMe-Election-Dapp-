"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/elections/voting",{

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nvar routes = __webpack_require__(/*! next-routes */ \"./node_modules/next-routes/dist/index.js\")();\nroutes.add(\"/elections/new\", \"/elections/new\").add(\"/elections/:address/registration\", \"/elections/show\").add(\"/elections/:address/voting\", \"/elections/voting\").add(\"/elections/:address/results\", \"/elections/voting\").add(\"/campaigns/:address/requests\", \"/campaigns/requests/index\").add(\"/campaigns/:address/requests/new\", \"/campaigns/requests/new\");\nmodule.exports = routes;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsNkRBQWEsQ0FBQyxFQUFFO0FBRXZDRCxNQUFNLENBQ0RFLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsQ0FBQyxDQUN0Q0EsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLGlCQUFpQixDQUFDLENBQzFEQSxHQUFHLENBQUMsNEJBQTRCLEVBQUUsbUJBQW1CLENBQUMsQ0FDdERBLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxtQkFBbUIsQ0FBQyxDQUN2REEsR0FBRyxDQUFDLDhCQUE4QixFQUFFLDJCQUEyQixDQUFDLENBQ2hFQSxHQUFHLENBQUMsa0NBQWtDLEVBQUUseUJBQXlCLENBQUMsQ0FBQztBQUV4RUMsTUFBTSxDQUFDQyxPQUFPLEdBQUdKLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yb3V0ZXMuanM/YjA0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKCk7XHJcblxyXG5yb3V0ZXNcclxuICAgIC5hZGQoJy9lbGVjdGlvbnMvbmV3JywnL2VsZWN0aW9ucy9uZXcnKSAgICBcclxuICAgIC5hZGQoJy9lbGVjdGlvbnMvOmFkZHJlc3MvcmVnaXN0cmF0aW9uJywgJy9lbGVjdGlvbnMvc2hvdycpXHJcbiAgICAuYWRkKCcvZWxlY3Rpb25zLzphZGRyZXNzL3ZvdGluZycsICcvZWxlY3Rpb25zL3ZvdGluZycpXHJcbiAgICAuYWRkKCcvZWxlY3Rpb25zLzphZGRyZXNzL3Jlc3VsdHMnLCAnL2VsZWN0aW9ucy92b3RpbmcnKVxyXG4gICAgLmFkZCgnL2NhbXBhaWducy86YWRkcmVzcy9yZXF1ZXN0cycsICcvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4JylcclxuICAgIC5hZGQoJy9jYW1wYWlnbnMvOmFkZHJlc3MvcmVxdWVzdHMvbmV3JywgJy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3Jyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlczsiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./routes.js\n"));

/***/ })

});