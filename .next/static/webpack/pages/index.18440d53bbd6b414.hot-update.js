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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ethereum_election__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ethereum/election */ \"./ethereum/election.js\");\n/* harmony import */ var _styles_CardsWrap_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/CardsWrap.module.css */ \"./styles/CardsWrap.module.css\");\n/* harmony import */ var _styles_CardsWrap_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_CardsWrap_module_css__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CampaignIndex = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(CampaignIndex, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(CampaignIndex);\n    function CampaignIndex() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(CampaignIndex, [\n        {\n            key: \"renderElections\",\n            value: function renderElections() {\n                var _this = this;\n                var k = -1;\n                var timeNow = +new Date();\n                var electionStatus = \"\";\n                var electionLink = \"\";\n                var items = this.props.elections.map(function(address) {\n                    k++;\n                    var registrationEndDate = Number(_this.props.creationTimes[k]) + Number(_this.props.registrationPeriods[k]);\n                    if (_this.props.startVotes[k] && timeNow < _this.props.votingEndDates[k] * 1000) {\n                        electionStatus = \"Voting in process\";\n                        electionLink = \"/voting\";\n                    } else if (timeNow < registrationEndDate * 1000) {\n                        electionStatus = \"Candidate Registration Ongoing\";\n                        electionLink = \"/registration\";\n                    } else if (timeNow > registrationEndDate * 1000) {\n                        electionStatus = \"Waiting for manager to start voting\";\n                        electionLink = \"/registration\";\n                    } else if (_this.props.startVotes[k] && timeNow > _this.props.votingEndDates[k] * 1000) {\n                        electionStatus = \"Waiting for manager to declare result\";\n                    }\n                    return {\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                            route: \"/elections/\".concat(address).concat(electionLink),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"View Election\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, _this),\n                        fluid: false,\n                        meta: electionStatus\n                    };\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                            lineNumber: 79,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_styles_CardsWrap_module_css__WEBPACK_IMPORTED_MODULE_12___default().uicard),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                    route: \"/elections/new\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {\n                                            floated: \"right\",\n                                            content: \"Create Election\",\n                                            icon: \"add circle\",\n                                            color: \"teal\",\n                                            size: \"large\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, this),\n                                this.renderElections()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\index.js\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var elections, registrationPeriods, creationTimes, startVotes, votingEndDates, j, election, registrationPeriod, creationTime, startVote, votingStartTime, votingPeriod, votingEndDate;\n                    return C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedElections().call();\n                            case 2:\n                                elections = _ctx.sent;\n                                registrationPeriods = [];\n                                creationTimes = [];\n                                startVotes = [];\n                                votingEndDates = [];\n                                j = 0;\n                            case 8:\n                                if (!(j < elections.length)) {\n                                    _ctx.next = 33;\n                                    break;\n                                }\n                                election = (0,_ethereum_election__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(elections[j]);\n                                _ctx.next = 12;\n                                return election.methods.registrationPeriod().call();\n                            case 12:\n                                registrationPeriod = _ctx.sent;\n                                _ctx.next = 15;\n                                return election.methods.creationTime().call();\n                            case 15:\n                                creationTime = _ctx.sent;\n                                _ctx.next = 18;\n                                return election.methods.startVote().call();\n                            case 18:\n                                startVote = _ctx.sent;\n                                _ctx.next = 21;\n                                return election.methods.votingStartTime().call();\n                            case 21:\n                                votingStartTime = _ctx.sent;\n                                _ctx.next = 24;\n                                return election.methods.votingPeriod().call();\n                            case 24:\n                                votingPeriod = _ctx.sent;\n                                votingEndDate = Number(votingStartTime) + Number(votingPeriod);\n                                j++;\n                                registrationPeriods.push(registrationPeriod);\n                                creationTimes.push(creationTime);\n                                startVotes.push(startVote);\n                                votingEndDates.push(votingEndDate);\n                                _ctx.next = 8;\n                                break;\n                            case 33:\n                                return _ctx.abrupt(\"return\", {\n                                    elections: elections,\n                                    registrationPeriods: registrationPeriods,\n                                    creationTimes: creationTimes,\n                                    startVotes: startVotes,\n                                    votingEndDates: votingEndDates\n                                });\n                            case 34:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUNLLElBQUksRUFBRTs7Z0NBQWpFTCxlQUFlLFlBQWtEOzt1Q0FDNUNKLFFBQVEsQ0FBQ08sT0FBTyxDQUFDRixZQUFZLEVBQUUsQ0FBQ0ksSUFBSSxFQUFFOztnQ0FBM0RKLFlBQVksWUFBK0M7Z0NBRXpEQyxhQUFhLEdBQUc5QixNQUFNLENBQUM0QixlQUFlLENBQUMsR0FBQzVCLE1BQU0sQ0FBQzZCLFlBQVksQ0FBQyxDQUFDO2dDQUVuRU4sQ0FBQyxFQUFFLENBQUM7Z0NBQ0pyQixtQkFBbUIsQ0FBQ2lDLElBQUksQ0FBRVYsa0JBQWtCLENBQUUsQ0FBQztnQ0FDL0N4QixhQUFhLENBQUNrQyxJQUFJLENBQUVULFlBQVksQ0FBRSxDQUFDO2dDQUNuQ3ZCLFVBQVUsQ0FBQ2dDLElBQUksQ0FBRVIsU0FBUyxDQUFFLENBQUM7Z0NBQzdCdkIsY0FBYyxDQUFDK0IsSUFBSSxDQUFFTCxhQUFhLENBQUUsQ0FBQzs7Ozs2REFHbEM7b0NBQUVsQyxTQUFTLEVBQVRBLFNBQVM7b0NBQUVNLG1CQUFtQixFQUFuQkEsbUJBQW1CO29DQUFFRCxhQUFhLEVBQWJBLGFBQWE7b0NBQUVFLFVBQVUsRUFBVkEsVUFBVTtvQ0FBRUMsY0FBYyxFQUFkQSxjQUFjO2lDQUFFOzs7Ozs7aUJBQ3ZGO2FBQUE7Ozs7Q0E2REosQ0F4RjJCekIsNENBQVMsQ0F3RnBDO0FBRUQsK0RBQWVRLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuaW1wb3J0IEVsZWN0aW9uIGZyb20gXCIuLi9ldGhlcmV1bS9lbGVjdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DYXJkc1dyYXAubW9kdWxlLmNzcyc7XHJcblxyXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlY3Rpb25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkRWxlY3Rpb25zKCkuY2FsbCgpO1xyXG5cclxuICAgICAgICBjb25zdCByZWdpc3RyYXRpb25QZXJpb2RzPVtdO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0aW9uVGltZXM9W107XHJcbiAgICAgICAgY29uc3Qgc3RhcnRWb3Rlcz1bXTtcclxuICAgICAgICBjb25zdCB2b3RpbmdFbmREYXRlcz1bXTtcclxuICAgICAgICB2YXIgaj0wO1xyXG4gICAgICAgIHdoaWxlIChqPGVsZWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGVsZWN0aW9uID0gRWxlY3Rpb24oZWxlY3Rpb25zW2pdKTtcclxuICAgICAgICAgICAgdmFyIHJlZ2lzdHJhdGlvblBlcmlvZCA9IGF3YWl0IGVsZWN0aW9uLm1ldGhvZHMucmVnaXN0cmF0aW9uUGVyaW9kKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICB2YXIgY3JlYXRpb25UaW1lID0gYXdhaXQgZWxlY3Rpb24ubWV0aG9kcy5jcmVhdGlvblRpbWUoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIHZhciBzdGFydFZvdGUgPSBhd2FpdCBlbGVjdGlvbi5tZXRob2RzLnN0YXJ0Vm90ZSgpLmNhbGwoKTtcclxuICAgICAgICAgICAgdmFyIHZvdGluZ1N0YXJ0VGltZSA9IGF3YWl0IGVsZWN0aW9uLm1ldGhvZHMudm90aW5nU3RhcnRUaW1lKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICB2YXIgdm90aW5nUGVyaW9kID0gYXdhaXQgZWxlY3Rpb24ubWV0aG9kcy52b3RpbmdQZXJpb2QoKS5jYWxsKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2b3RpbmdFbmREYXRlID0gTnVtYmVyKHZvdGluZ1N0YXJ0VGltZSkrTnVtYmVyKHZvdGluZ1BlcmlvZCk7XHJcblxyXG4gICAgICAgICAgICBqKys7XHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblBlcmlvZHMucHVzaCgocmVnaXN0cmF0aW9uUGVyaW9kKSk7XHJcbiAgICAgICAgICAgIGNyZWF0aW9uVGltZXMucHVzaCgoY3JlYXRpb25UaW1lKSk7XHJcbiAgICAgICAgICAgIHN0YXJ0Vm90ZXMucHVzaCgoc3RhcnRWb3RlKSk7XHJcbiAgICAgICAgICAgIHZvdGluZ0VuZERhdGVzLnB1c2goKHZvdGluZ0VuZERhdGUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGVsZWN0aW9ucywgcmVnaXN0cmF0aW9uUGVyaW9kcywgY3JlYXRpb25UaW1lcywgc3RhcnRWb3Rlcywgdm90aW5nRW5kRGF0ZXMgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbGVjdGlvbnMoKSB7XHJcbiAgICAgICAgdmFyIGs9LTE7XHJcbiAgICAgICAgY29uc3QgdGltZU5vdyA9ICtuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBlbGVjdGlvblN0YXR1cz0nJztcclxuICAgICAgICB2YXIgZWxlY3Rpb25MaW5rPScnO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5lbGVjdGlvbnMubWFwKGFkZHJlc3MgPT4ge1xyXG4gICAgICAgICAgICBrKys7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkVuZERhdGUgPSBOdW1iZXIodGhpcy5wcm9wcy5jcmVhdGlvblRpbWVzW2tdKStOdW1iZXIodGhpcy5wcm9wcy5yZWdpc3RyYXRpb25QZXJpb2RzW2tdKTtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLnByb3BzLnN0YXJ0Vm90ZXNba10pICYmICh0aW1lTm93IDwgKHRoaXMucHJvcHMudm90aW5nRW5kRGF0ZXNba10qMTAwMCkpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVjdGlvblN0YXR1cyA9ICdWb3RpbmcgaW4gcHJvY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICBlbGVjdGlvbkxpbmsgPSAnL3ZvdGluZyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGltZU5vdyA8ICgocmVnaXN0cmF0aW9uRW5kRGF0ZSkqMTAwMCkpIHtcclxuICAgICAgICAgICAgICAgIGVsZWN0aW9uU3RhdHVzID0gJ0NhbmRpZGF0ZSBSZWdpc3RyYXRpb24gT25nb2luZyc7XHJcbiAgICAgICAgICAgICAgICBlbGVjdGlvbkxpbmsgPSAnL3JlZ2lzdHJhdGlvbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGltZU5vdyA+ICgocmVnaXN0cmF0aW9uRW5kRGF0ZSkqMTAwMCkpIHtcclxuICAgICAgICAgICAgICAgIGVsZWN0aW9uU3RhdHVzID0gJ1dhaXRpbmcgZm9yIG1hbmFnZXIgdG8gc3RhcnQgdm90aW5nJztcclxuICAgICAgICAgICAgICAgIGVsZWN0aW9uTGluayA9ICcvcmVnaXN0cmF0aW9uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgodGhpcy5wcm9wcy5zdGFydFZvdGVzW2tdKSAmJiAodGltZU5vdyA+ICh0aGlzLnByb3BzLnZvdGluZ0VuZERhdGVzW2tdKjEwMDApKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlY3Rpb25TdGF0dXMgPSAnV2FpdGluZyBmb3IgbWFuYWdlciB0byBkZWNsYXJlIHJlc3VsdCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9lbGVjdGlvbnMvJHthZGRyZXNzfSR7ZWxlY3Rpb25MaW5rfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5WaWV3IEVsZWN0aW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogZWxlY3Rpb25TdGF0dXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51aWNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9Jy9lbGVjdGlvbnMvbmV3Jz5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0NyZWF0ZSBFbGVjdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249J2FkZCBjaXJjbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJFbGVjdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkVsZWN0aW9uIiwic3R5bGVzIiwiQ2FtcGFpZ25JbmRleCIsInJlbmRlckVsZWN0aW9ucyIsImsiLCJ0aW1lTm93IiwiRGF0ZSIsImVsZWN0aW9uU3RhdHVzIiwiZWxlY3Rpb25MaW5rIiwiaXRlbXMiLCJwcm9wcyIsImVsZWN0aW9ucyIsIm1hcCIsImFkZHJlc3MiLCJyZWdpc3RyYXRpb25FbmREYXRlIiwiTnVtYmVyIiwiY3JlYXRpb25UaW1lcyIsInJlZ2lzdHJhdGlvblBlcmlvZHMiLCJzdGFydFZvdGVzIiwidm90aW5nRW5kRGF0ZXMiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsInJvdXRlIiwiYSIsImZsdWlkIiwibWV0YSIsIkdyb3VwIiwicmVuZGVyIiwiYnIiLCJkaXYiLCJjbGFzc05hbWUiLCJ1aWNhcmQiLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJjb2xvciIsInNpemUiLCJnZXRJbml0aWFsUHJvcHMiLCJqIiwiZWxlY3Rpb24iLCJyZWdpc3RyYXRpb25QZXJpb2QiLCJjcmVhdGlvblRpbWUiLCJzdGFydFZvdGUiLCJ2b3RpbmdTdGFydFRpbWUiLCJ2b3RpbmdQZXJpb2QiLCJ2b3RpbmdFbmREYXRlIiwibWV0aG9kcyIsImdldERlcGxveWVkRWxlY3Rpb25zIiwiY2FsbCIsImxlbmd0aCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});