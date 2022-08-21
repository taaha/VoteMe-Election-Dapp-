"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ethereum_election__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ethereum/election */ \"./ethereum/election.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CampaignIndex = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(CampaignIndex, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(CampaignIndex);\n    function CampaignIndex() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(CampaignIndex, [\n        {\n            key: \"renderElections\",\n            value: function renderElections() {\n                var _this = this;\n                var k = -1;\n                var timeNow = +new Date();\n                var electionStatus = \"\";\n                var electionLink = \"\";\n                var items = this.props.elections.map(function(address) {\n                    k++;\n                    var registrationEndDate = Number(_this.props.creationTimes[k]) + Number(_this.props.registrationPeriods[k]);\n                    if (_this.props.startVotes[k]) {\n                        electionStatus = \"Voting in process\";\n                        electionLink = \"/voting\";\n                    } else if (timeNow < registrationEndDate * 1000) {\n                        electionStatus = \"Candidate Registration Ongoing\";\n                        electionLink = \"/registration\";\n                    } else if (timeNow > registrationEndDate * 1000) {\n                        electionStatus = \"Waiting for manager to start voting\";\n                        electionLink = \"/registration\";\n                    }\n                    return {\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                            route: \"/elections/\".concat(address).concat(electionLink),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"View Election\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, _this),\n                        fluid: true,\n                        meta: electionStatus\n                    };\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                    lineNumber: 63,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"20px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Statistic, {\n                                floated: \"left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Statistic.Value, {\n                                        children: this.props.elections.length\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Statistic.Label, {\n                                        children: \"Open Elections\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                route: \"/elections/new\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {\n                                        style: {\n                                            marginTop: \"20px\"\n                                        },\n                                        floated: \"right\",\n                                        content: \"Create Election\",\n                                        icon: \"add circle\",\n                                        color: \"teal\",\n                                        size: \"large\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this),\n                            this.renderElections()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var elections, registrationPeriods, creationTimes, startVotes, j, election, registrationPeriod, creationTime, startVote;\n                    return C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedElections().call();\n                            case 2:\n                                elections = _ctx.sent;\n                                registrationPeriods = [];\n                                creationTimes = [];\n                                startVotes = [];\n                                j = 0;\n                            case 7:\n                                if (!(j < elections.length)) {\n                                    _ctx.next = 24;\n                                    break;\n                                }\n                                election = (0,_ethereum_election__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(elections[j]);\n                                _ctx.next = 11;\n                                return election.methods.registrationPeriod().call();\n                            case 11:\n                                registrationPeriod = _ctx.sent;\n                                _ctx.next = 14;\n                                return election.methods.creationTime().call();\n                            case 14:\n                                creationTime = _ctx.sent;\n                                _ctx.next = 17;\n                                return election.methods.startVote().call();\n                            case 17:\n                                startVote = _ctx.sent;\n                                j++;\n                                registrationPeriods.push(registrationPeriod);\n                                creationTimes.push(creationTime);\n                                startVotes.push(startVote);\n                                _ctx.next = 7;\n                                break;\n                            case 24:\n                                return _ctx.abrupt(\"return\", {\n                                    elections: elections,\n                                    registrationPeriods: registrationPeriods,\n                                    creationTimes: creationTimes,\n                                    startVotes: startVotes\n                                });\n                            case 25:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDO2dDQUNuQ3hCLFVBQVUsQ0FBQzZCLElBQUksQ0FBRUosU0FBUyxDQUFFLENBQUM7Ozs7NkRBRzFCO29DQUFFaEMsU0FBUyxFQUFUQSxTQUFTO29DQUFFTSxtQkFBbUIsRUFBbkJBLG1CQUFtQjtvQ0FBRUQsYUFBYSxFQUFiQSxhQUFhO29DQUFFRSxVQUFVLEVBQVZBLFVBQVU7aUNBQUU7Ozs7OztpQkFDdkU7YUFBQTs7OztDQStESixDQW5GMkJ4Qiw0Q0FBUyxDQW1GcEM7QUFFRCwrREFBZVEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdGF0aXN0aWMsIENhcmQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcbmltcG9ydCBFbGVjdGlvbiBmcm9tIFwiLi4vZXRoZXJldW0vZWxlY3Rpb25cIjtcclxuXHJcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCBlbGVjdGlvbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRFbGVjdGlvbnMoKS5jYWxsKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvblBlcmlvZHM9W107XHJcbiAgICAgICAgY29uc3QgY3JlYXRpb25UaW1lcz1bXTtcclxuICAgICAgICBjb25zdCBzdGFydFZvdGVzPVtdO1xyXG4gICAgICAgIHZhciBqPTA7XHJcbiAgICAgICAgd2hpbGUgKGo8ZWxlY3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgZWxlY3Rpb24gPSBFbGVjdGlvbihlbGVjdGlvbnNbal0pO1xyXG4gICAgICAgICAgICB2YXIgcmVnaXN0cmF0aW9uUGVyaW9kID0gYXdhaXQgZWxlY3Rpb24ubWV0aG9kcy5yZWdpc3RyYXRpb25QZXJpb2QoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIHZhciBjcmVhdGlvblRpbWUgPSBhd2FpdCBlbGVjdGlvbi5tZXRob2RzLmNyZWF0aW9uVGltZSgpLmNhbGwoKTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0Vm90ZSA9IGF3YWl0IGVsZWN0aW9uLm1ldGhvZHMuc3RhcnRWb3RlKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBqKys7XHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblBlcmlvZHMucHVzaCgocmVnaXN0cmF0aW9uUGVyaW9kKSk7XHJcbiAgICAgICAgICAgIGNyZWF0aW9uVGltZXMucHVzaCgoY3JlYXRpb25UaW1lKSk7XHJcbiAgICAgICAgICAgIHN0YXJ0Vm90ZXMucHVzaCgoc3RhcnRWb3RlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBlbGVjdGlvbnMsIHJlZ2lzdHJhdGlvblBlcmlvZHMsIGNyZWF0aW9uVGltZXMsIHN0YXJ0Vm90ZXMgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbGVjdGlvbnMoKSB7XHJcbiAgICAgICAgdmFyIGs9LTE7XHJcbiAgICAgICAgY29uc3QgdGltZU5vdyA9ICtuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBlbGVjdGlvblN0YXR1cz0nJztcclxuICAgICAgICB2YXIgZWxlY3Rpb25MaW5rPScnO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5lbGVjdGlvbnMubWFwKGFkZHJlc3MgPT4ge1xyXG4gICAgICAgICAgICBrKys7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkVuZERhdGUgPSBOdW1iZXIodGhpcy5wcm9wcy5jcmVhdGlvblRpbWVzW2tdKStOdW1iZXIodGhpcy5wcm9wcy5yZWdpc3RyYXRpb25QZXJpb2RzW2tdKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RhcnRWb3Rlc1trXSkge1xyXG4gICAgICAgICAgICAgICAgZWxlY3Rpb25TdGF0dXMgPSAnVm90aW5nIGluIHByb2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgZWxlY3Rpb25MaW5rID0gJy92b3RpbmcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRpbWVOb3cgPCAoKHJlZ2lzdHJhdGlvbkVuZERhdGUpKjEwMDApKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVjdGlvblN0YXR1cyA9ICdDYW5kaWRhdGUgUmVnaXN0cmF0aW9uIE9uZ29pbmcnO1xyXG4gICAgICAgICAgICAgICAgZWxlY3Rpb25MaW5rID0gJy9yZWdpc3RyYXRpb24nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRpbWVOb3cgPiAoKHJlZ2lzdHJhdGlvbkVuZERhdGUpKjEwMDApKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVjdGlvblN0YXR1cyA9ICdXYWl0aW5nIGZvciBtYW5hZ2VyIHRvIHN0YXJ0IHZvdGluZyc7XHJcbiAgICAgICAgICAgICAgICBlbGVjdGlvbkxpbmsgPSAnL3JlZ2lzdHJhdGlvbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvZWxlY3Rpb25zLyR7YWRkcmVzc30ke2VsZWN0aW9uTGlua31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+VmlldyBFbGVjdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogZWxlY3Rpb25TdGF0dXNcclxuICAgICAgICAgICAgICAgIC8ve2lmICgodGltZU5vdyA8ICgodGhpcy5wcm9wcy5yZWdpc3RyYXRpb25FbmREYXRlKSoxMDAwKSkgJiYgbWV0YTogcmVnaXN0cmF0aW9uRW5kRGF0ZX1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgIDxTdGF0aXN0aWMgZmxvYXRlZD0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5WYWx1ZT57dGhpcy5wcm9wcy5lbGVjdGlvbnMubGVuZ3RofTwvU3RhdGlzdGljLlZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0aXN0aWMuTGFiZWw+T3BlbiBFbGVjdGlvbnM8L1N0YXRpc3RpYy5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvU3RhdGlzdGljPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9Jy9lbGVjdGlvbnMvbmV3Jz5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0NyZWF0ZSBFbGVjdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249J2FkZCBjaXJjbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJFbGVjdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlN0YXRpc3RpYyIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkVsZWN0aW9uIiwiQ2FtcGFpZ25JbmRleCIsInJlbmRlckVsZWN0aW9ucyIsImsiLCJ0aW1lTm93IiwiRGF0ZSIsImVsZWN0aW9uU3RhdHVzIiwiZWxlY3Rpb25MaW5rIiwiaXRlbXMiLCJwcm9wcyIsImVsZWN0aW9ucyIsIm1hcCIsImFkZHJlc3MiLCJyZWdpc3RyYXRpb25FbmREYXRlIiwiTnVtYmVyIiwiY3JlYXRpb25UaW1lcyIsInJlZ2lzdHJhdGlvblBlcmlvZHMiLCJzdGFydFZvdGVzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJyb3V0ZSIsImEiLCJmbHVpZCIsIm1ldGEiLCJHcm91cCIsInJlbmRlciIsImRpdiIsInN0eWxlIiwibWFyZ2luVG9wIiwiZmxvYXRlZCIsIlZhbHVlIiwibGVuZ3RoIiwiTGFiZWwiLCJjb250ZW50IiwiaWNvbiIsImNvbG9yIiwic2l6ZSIsImdldEluaXRpYWxQcm9wcyIsImoiLCJlbGVjdGlvbiIsInJlZ2lzdHJhdGlvblBlcmlvZCIsImNyZWF0aW9uVGltZSIsInN0YXJ0Vm90ZSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEVsZWN0aW9ucyIsImNhbGwiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});