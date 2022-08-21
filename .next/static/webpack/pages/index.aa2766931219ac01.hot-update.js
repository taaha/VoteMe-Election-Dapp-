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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ethereum_election__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ethereum/election */ \"./ethereum/election.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CampaignIndex = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(CampaignIndex, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(CampaignIndex);\n    function CampaignIndex() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(CampaignIndex, [\n        {\n            key: \"renderElections\",\n            value: function renderElections() {\n                var _this = this;\n                var k = -1;\n                var timeNow = +new Date();\n                var electionStatus = \"\";\n                var electionLink = \"\";\n                var items = this.props.elections.map(function(address) {\n                    k++;\n                    var registrationEndDate = Number(_this.props.creationTimes[k]) + Number(_this.props.registrationPeriods[k]);\n                    if (_this.props.startVotes[k]) {\n                        electionStatus = \"Voting in process\";\n                        electionLink = \"/voting\";\n                    } else if (timeNow < registrationEndDate * 1000) {\n                        electionStatus = \"Candidate Registration Ongoing\";\n                        electionLink = \"/registration\";\n                    } else if (timeNow > registrationEndDate * 1000) {\n                        electionStatus = \"Waiting for manager to start voting\";\n                        electionLink = \"/registration\";\n                    }\n                    return {\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                            route: \"/elections/\".concat(address).concat(electionLink),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"View Election\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, _this),\n                        fluid: true,\n                        meta: electionStatus\n                    };\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                    lineNumber: 62,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"20px\"\n                        },\n                        className: styles.uicardpadding,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                route: \"/elections/new\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {\n                                        style: {\n                                            marginTop: \"1%\"\n                                        },\n                                        floated: \"right\",\n                                        content: \"Create Election\",\n                                        icon: \"add circle\",\n                                        color: \"teal\",\n                                        size: \"large\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this),\n                            this.renderElections()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var elections, registrationPeriods, creationTimes, startVotes, j, election, registrationPeriod, creationTime, startVote;\n                    return C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedElections().call();\n                            case 2:\n                                elections = _ctx.sent;\n                                registrationPeriods = [];\n                                creationTimes = [];\n                                startVotes = [];\n                                j = 0;\n                            case 7:\n                                if (!(j < elections.length)) {\n                                    _ctx.next = 24;\n                                    break;\n                                }\n                                election = (0,_ethereum_election__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(elections[j]);\n                                _ctx.next = 11;\n                                return election.methods.registrationPeriod().call();\n                            case 11:\n                                registrationPeriod = _ctx.sent;\n                                _ctx.next = 14;\n                                return election.methods.creationTime().call();\n                            case 14:\n                                creationTime = _ctx.sent;\n                                _ctx.next = 17;\n                                return election.methods.startVote().call();\n                            case 17:\n                                startVote = _ctx.sent;\n                                j++;\n                                registrationPeriods.push(registrationPeriod);\n                                creationTimes.push(creationTime);\n                                startVotes.push(startVote);\n                                _ctx.next = 7;\n                                break;\n                            case 24:\n                                return _ctx.abrupt(\"return\", {\n                                    elections: elections,\n                                    registrationPeriods: registrationPeriods,\n                                    creationTimes: creationTimes,\n                                    startVotes: startVotes\n                                });\n                            case 25:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVFLFVBQVUsRUFBVkEsVUFBVTtpQ0FBRTs7Ozs7O2lCQUN2RTthQUFBOzs7O0NBMERKLENBOUUyQnhCLDRDQUFTLENBOEVwQztBQUVELCtEQUFlUSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0YXRpc3RpYywgQ2FyZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuaW1wb3J0IEVsZWN0aW9uIGZyb20gXCIuLi9ldGhlcmV1bS9lbGVjdGlvblwiO1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZWN0aW9ucyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZEVsZWN0aW9ucygpLmNhbGwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uUGVyaW9kcz1bXTtcclxuICAgICAgICBjb25zdCBjcmVhdGlvblRpbWVzPVtdO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0Vm90ZXM9W107XHJcbiAgICAgICAgdmFyIGo9MDtcclxuICAgICAgICB3aGlsZSAoajxlbGVjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVjdGlvbiA9IEVsZWN0aW9uKGVsZWN0aW9uc1tqXSk7XHJcbiAgICAgICAgICAgIHZhciByZWdpc3RyYXRpb25QZXJpb2QgPSBhd2FpdCBlbGVjdGlvbi5tZXRob2RzLnJlZ2lzdHJhdGlvblBlcmlvZCgpLmNhbGwoKTtcclxuICAgICAgICAgICAgdmFyIGNyZWF0aW9uVGltZSA9IGF3YWl0IGVsZWN0aW9uLm1ldGhvZHMuY3JlYXRpb25UaW1lKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRWb3RlID0gYXdhaXQgZWxlY3Rpb24ubWV0aG9kcy5zdGFydFZvdGUoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uUGVyaW9kcy5wdXNoKChyZWdpc3RyYXRpb25QZXJpb2QpKTtcclxuICAgICAgICAgICAgY3JlYXRpb25UaW1lcy5wdXNoKChjcmVhdGlvblRpbWUpKTtcclxuICAgICAgICAgICAgc3RhcnRWb3Rlcy5wdXNoKChzdGFydFZvdGUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGVsZWN0aW9ucywgcmVnaXN0cmF0aW9uUGVyaW9kcywgY3JlYXRpb25UaW1lcywgc3RhcnRWb3RlcyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckVsZWN0aW9ucygpIHtcclxuICAgICAgICB2YXIgaz0tMTtcclxuICAgICAgICBjb25zdCB0aW1lTm93ID0gK25ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGVsZWN0aW9uU3RhdHVzPScnO1xyXG4gICAgICAgIHZhciBlbGVjdGlvbkxpbms9Jyc7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmVsZWN0aW9ucy5tYXAoYWRkcmVzcyA9PiB7XHJcbiAgICAgICAgICAgIGsrKztcclxuICAgICAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uRW5kRGF0ZSA9IE51bWJlcih0aGlzLnByb3BzLmNyZWF0aW9uVGltZXNba10pK051bWJlcih0aGlzLnByb3BzLnJlZ2lzdHJhdGlvblBlcmlvZHNba10pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGFydFZvdGVzW2tdKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVjdGlvblN0YXR1cyA9ICdWb3RpbmcgaW4gcHJvY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICBlbGVjdGlvbkxpbmsgPSAnL3ZvdGluZyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGltZU5vdyA8ICgocmVnaXN0cmF0aW9uRW5kRGF0ZSkqMTAwMCkpIHtcclxuICAgICAgICAgICAgICAgIGVsZWN0aW9uU3RhdHVzID0gJ0NhbmRpZGF0ZSBSZWdpc3RyYXRpb24gT25nb2luZyc7XHJcbiAgICAgICAgICAgICAgICBlbGVjdGlvbkxpbmsgPSAnL3JlZ2lzdHJhdGlvbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGltZU5vdyA+ICgocmVnaXN0cmF0aW9uRW5kRGF0ZSkqMTAwMCkpIHtcclxuICAgICAgICAgICAgICAgIGVsZWN0aW9uU3RhdHVzID0gJ1dhaXRpbmcgZm9yIG1hbmFnZXIgdG8gc3RhcnQgdm90aW5nJztcclxuICAgICAgICAgICAgICAgIGVsZWN0aW9uTGluayA9ICcvcmVnaXN0cmF0aW9uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9lbGVjdGlvbnMvJHthZGRyZXNzfSR7ZWxlY3Rpb25MaW5rfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5WaWV3IEVsZWN0aW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXRhOiBlbGVjdGlvblN0YXR1c1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyMHB4J319IGNsYXNzTmFtZT17c3R5bGVzLnVpY2FyZHBhZGRpbmd9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9Jy9lbGVjdGlvbnMvbmV3Jz5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMSUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdDcmVhdGUgRWxlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdhZGQgY2lyY2xlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRWxlY3Rpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTdGF0aXN0aWMiLCJDYXJkIiwiQnV0dG9uIiwiZmFjdG9yeSIsIkxheW91dCIsIkxpbmsiLCJFbGVjdGlvbiIsIkNhbXBhaWduSW5kZXgiLCJyZW5kZXJFbGVjdGlvbnMiLCJrIiwidGltZU5vdyIsIkRhdGUiLCJlbGVjdGlvblN0YXR1cyIsImVsZWN0aW9uTGluayIsIml0ZW1zIiwicHJvcHMiLCJlbGVjdGlvbnMiLCJtYXAiLCJhZGRyZXNzIiwicmVnaXN0cmF0aW9uRW5kRGF0ZSIsIk51bWJlciIsImNyZWF0aW9uVGltZXMiLCJyZWdpc3RyYXRpb25QZXJpb2RzIiwic3RhcnRWb3RlcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwicm91dGUiLCJhIiwiZmx1aWQiLCJtZXRhIiwiR3JvdXAiLCJyZW5kZXIiLCJkaXYiLCJzdHlsZSIsIm1hcmdpblRvcCIsImNsYXNzTmFtZSIsInN0eWxlcyIsInVpY2FyZHBhZGRpbmciLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJjb2xvciIsInNpemUiLCJnZXRJbml0aWFsUHJvcHMiLCJqIiwiZWxlY3Rpb24iLCJyZWdpc3RyYXRpb25QZXJpb2QiLCJjcmVhdGlvblRpbWUiLCJzdGFydFZvdGUiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRFbGVjdGlvbnMiLCJjYWxsIiwibGVuZ3RoIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});