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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ethereum_election__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ethereum/election */ \"./ethereum/election.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CampaignIndex = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(CampaignIndex, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(CampaignIndex);\n    function CampaignIndex() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(CampaignIndex, [\n        {\n            key: \"renderElections\",\n            value: function renderElections() {\n                var _this = this;\n                var k = -1;\n                var timeNow = +new Date();\n                var electionStatus = \"\";\n                var electionLink = \"\";\n                var items = this.props.elections.map(function(address) {\n                    k++;\n                    var registrationEndDate = Number(_this.props.creationTimes[k]) + Number(_this.props.registrationPeriods[k]);\n                    if (_this.props.startVotes[k]) {\n                        electionStatus = \"Voting in process\";\n                        electionLink = \"/voting\";\n                    } else if (timeNow < registrationEndDate * 1000) {\n                        electionStatus = \"Candidate Registration Ongoing\";\n                        electionLink = \"/registration\";\n                    } else if (timeNow > registrationEndDate * 1000) {\n                        electionStatus = \"Waiting for manager to start voting\";\n                        electionLink = \"/registration\";\n                    }\n                    return {\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                            route: \"/elections/\".concat(address).concat(electionLink),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"View Election\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, _this),\n                        fluid: true,\n                        meta: electionStatus\n                    };\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                    lineNumber: 63,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                route: \"/elections/new\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {\n                                        style: {\n                                            marginTop: \"1%\"\n                                        },\n                                        floated: \"right\",\n                                        content: \"Create Election\",\n                                        icon: \"add circle\",\n                                        color: \"teal\",\n                                        size: \"large\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this),\n                            this.renderElections()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var elections, registrationPeriods, creationTimes, startVotes, j, election, registrationPeriod, creationTime, startVote;\n                    return C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedElections().call();\n                            case 2:\n                                elections = _ctx.sent;\n                                registrationPeriods = [];\n                                creationTimes = [];\n                                startVotes = [];\n                                j = 0;\n                            case 7:\n                                if (!(j < elections.length)) {\n                                    _ctx.next = 24;\n                                    break;\n                                }\n                                election = (0,_ethereum_election__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(elections[j]);\n                                _ctx.next = 11;\n                                return election.methods.registrationPeriod().call();\n                            case 11:\n                                registrationPeriod = _ctx.sent;\n                                _ctx.next = 14;\n                                return election.methods.creationTime().call();\n                            case 14:\n                                creationTime = _ctx.sent;\n                                _ctx.next = 17;\n                                return election.methods.startVote().call();\n                            case 17:\n                                startVote = _ctx.sent;\n                                j++;\n                                registrationPeriods.push(registrationPeriod);\n                                creationTimes.push(creationTime);\n                                startVotes.push(startVote);\n                                _ctx.next = 7;\n                                break;\n                            case 24:\n                                return _ctx.abrupt(\"return\", {\n                                    elections: elections,\n                                    registrationPeriods: registrationPeriods,\n                                    creationTimes: creationTimes,\n                                    startVotes: startVotes\n                                });\n                            case 25:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVELCtEQUFlUyxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0YXRpc3RpYywgQ2FyZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuaW1wb3J0IEVsZWN0aW9uIGZyb20gXCIuLi9ldGhlcmV1bS9lbGVjdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DYXJkc1dyYXAubW9kdWxlLmNzcyc7XHJcblxyXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlY3Rpb25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkRWxlY3Rpb25zKCkuY2FsbCgpO1xyXG5cclxuICAgICAgICBjb25zdCByZWdpc3RyYXRpb25QZXJpb2RzPVtdO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0aW9uVGltZXM9W107XHJcbiAgICAgICAgY29uc3Qgc3RhcnRWb3Rlcz1bXTtcclxuICAgICAgICB2YXIgaj0wO1xyXG4gICAgICAgIHdoaWxlIChqPGVsZWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGVsZWN0aW9uID0gRWxlY3Rpb24oZWxlY3Rpb25zW2pdKTtcclxuICAgICAgICAgICAgdmFyIHJlZ2lzdHJhdGlvblBlcmlvZCA9IGF3YWl0IGVsZWN0aW9uLm1ldGhvZHMucmVnaXN0cmF0aW9uUGVyaW9kKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICB2YXIgY3JlYXRpb25UaW1lID0gYXdhaXQgZWxlY3Rpb24ubWV0aG9kcy5jcmVhdGlvblRpbWUoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIHZhciBzdGFydFZvdGUgPSBhd2FpdCBlbGVjdGlvbi5tZXRob2RzLnN0YXJ0Vm90ZSgpLmNhbGwoKTtcclxuICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgICByZWdpc3RyYXRpb25QZXJpb2RzLnB1c2goKHJlZ2lzdHJhdGlvblBlcmlvZCkpO1xyXG4gICAgICAgICAgICBjcmVhdGlvblRpbWVzLnB1c2goKGNyZWF0aW9uVGltZSkpO1xyXG4gICAgICAgICAgICBzdGFydFZvdGVzLnB1c2goKHN0YXJ0Vm90ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZWxlY3Rpb25zLCByZWdpc3RyYXRpb25QZXJpb2RzLCBjcmVhdGlvblRpbWVzLCBzdGFydFZvdGVzIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRWxlY3Rpb25zKCkge1xyXG4gICAgICAgIHZhciBrPS0xO1xyXG4gICAgICAgIGNvbnN0IHRpbWVOb3cgPSArbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgZWxlY3Rpb25TdGF0dXM9Jyc7XHJcbiAgICAgICAgdmFyIGVsZWN0aW9uTGluaz0nJztcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuZWxlY3Rpb25zLm1hcChhZGRyZXNzID0+IHtcclxuICAgICAgICAgICAgaysrO1xyXG4gICAgICAgICAgICBjb25zdCByZWdpc3RyYXRpb25FbmREYXRlID0gTnVtYmVyKHRoaXMucHJvcHMuY3JlYXRpb25UaW1lc1trXSkrTnVtYmVyKHRoaXMucHJvcHMucmVnaXN0cmF0aW9uUGVyaW9kc1trXSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnN0YXJ0Vm90ZXNba10pIHtcclxuICAgICAgICAgICAgICAgIGVsZWN0aW9uU3RhdHVzID0gJ1ZvdGluZyBpbiBwcm9jZXNzJztcclxuICAgICAgICAgICAgICAgIGVsZWN0aW9uTGluayA9ICcvdm90aW5nJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aW1lTm93IDwgKChyZWdpc3RyYXRpb25FbmREYXRlKSoxMDAwKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlY3Rpb25TdGF0dXMgPSAnQ2FuZGlkYXRlIFJlZ2lzdHJhdGlvbiBPbmdvaW5nJztcclxuICAgICAgICAgICAgICAgIGVsZWN0aW9uTGluayA9ICcvcmVnaXN0cmF0aW9uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aW1lTm93ID4gKChyZWdpc3RyYXRpb25FbmREYXRlKSoxMDAwKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlY3Rpb25TdGF0dXMgPSAnV2FpdGluZyBmb3IgbWFuYWdlciB0byBzdGFydCB2b3RpbmcnO1xyXG4gICAgICAgICAgICAgICAgZWxlY3Rpb25MaW5rID0gJy9yZWdpc3RyYXRpb24nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2VsZWN0aW9ucy8ke2FkZHJlc3N9JHtlbGVjdGlvbkxpbmt9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlZpZXcgRWxlY3Rpb248L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1ldGE6IGVsZWN0aW9uU3RhdHVzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9Jy9lbGVjdGlvbnMvbmV3Jz5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMSUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdDcmVhdGUgRWxlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdhZGQgY2lyY2xlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRWxlY3Rpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTdGF0aXN0aWMiLCJDYXJkIiwiQnV0dG9uIiwiZmFjdG9yeSIsIkxheW91dCIsIkxpbmsiLCJFbGVjdGlvbiIsInN0eWxlcyIsIkNhbXBhaWduSW5kZXgiLCJyZW5kZXJFbGVjdGlvbnMiLCJrIiwidGltZU5vdyIsIkRhdGUiLCJlbGVjdGlvblN0YXR1cyIsImVsZWN0aW9uTGluayIsIml0ZW1zIiwicHJvcHMiLCJlbGVjdGlvbnMiLCJtYXAiLCJhZGRyZXNzIiwicmVnaXN0cmF0aW9uRW5kRGF0ZSIsIk51bWJlciIsImNyZWF0aW9uVGltZXMiLCJyZWdpc3RyYXRpb25QZXJpb2RzIiwic3RhcnRWb3RlcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwicm91dGUiLCJhIiwiZmx1aWQiLCJtZXRhIiwiR3JvdXAiLCJyZW5kZXIiLCJkaXYiLCJzdHlsZSIsIm1hcmdpblRvcCIsImZsb2F0ZWQiLCJjb250ZW50IiwiaWNvbiIsImNvbG9yIiwic2l6ZSIsImdldEluaXRpYWxQcm9wcyIsImoiLCJlbGVjdGlvbiIsInJlZ2lzdHJhdGlvblBlcmlvZCIsImNyZWF0aW9uVGltZSIsInN0YXJ0Vm90ZSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEVsZWN0aW9ucyIsImNhbGwiLCJsZW5ndGgiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});