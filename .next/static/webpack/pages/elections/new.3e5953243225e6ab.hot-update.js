"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/elections/new",{

/***/ "./pages/elections/new.js":
/*!********************************!*\
  !*** ./pages/elections/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CampaignNew = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(CampaignNew, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(CampaignNew);\n    function CampaignNew() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, CampaignNew);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_this), \"state\", {\n            registrationPeriod: \"\",\n            votingPeriod: \"\",\n            errorMessage: \"\",\n            loading: false\n        });\n        var _this1 = (0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_this);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_this), \"onSubmit\", function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                var accounts;\n                return C_Users_taaha_Courses_ethereum_and_solidity_election_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            event.preventDefault();\n                            _this1.setState({\n                                loading: true,\n                                errorMessage: \"\"\n                            });\n                            _ctx.prev = 2;\n                            _ctx.next = 5;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                        case 5:\n                            accounts = _ctx.sent;\n                            _ctx.next = 8;\n                            return _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__[\"default\"].methods.deployElection(_this1.state.registrationPeriod, _this1.state.votingPeriod).send({\n                                from: accounts[0]\n                            });\n                        case 8:\n                            _routes__WEBPACK_IMPORTED_MODULE_6__.Router.pushRoute(\"/\");\n                            _ctx.next = 14;\n                            break;\n                        case 11:\n                            _ctx.prev = 11;\n                            _ctx.t0 = _ctx[\"catch\"](2);\n                            _this1.setState({\n                                errorMessage: _ctx.t0.message\n                            });\n                        case 14:\n                            _this1.setState({\n                                loading: false\n                            });\n                        case 15:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        2,\n                        11\n                    ]\n                ]);\n            }));\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(CampaignNew, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Create an Election\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\elections\\\\new.js\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Form, {\n                            onSubmit: this.onSubmit,\n                            error: !!this.state.errorMessage,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Form.Field, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            children: \"Registration Period\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\elections\\\\new.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Input, {\n                                            style: {\n                                                width: \"370px\"\n                                            },\n                                            label: \"seconds\",\n                                            labelPosition: \"right\",\n                                            value: this.state.registrationPeriod,\n                                            onChange: function(event) {\n                                                return _this.setState({\n                                                    registrationPeriod: event.target.value\n                                                });\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\elections\\\\new.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\elections\\\\new.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Form.Field, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            children: \"Voting Period\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\elections\\\\new.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Input, {\n                                            style: {\n                                                width: \"370px\"\n                                            },\n                                            label: \"seconds\",\n                                            labelPosition: \"right\",\n                                            value: this.state.votingPeriod,\n                                            onChange: function(event) {\n                                                return _this.setState({\n                                                    votingPeriod: event.target.value\n                                                });\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\elections\\\\new.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\elections\\\\new.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Message, {\n                                    error: true,\n                                    header: \"Oops\",\n                                    content: this.state.errorMessage\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\elections\\\\new.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {\n                                    loading: this.state.loading,\n                                    color: \"teal\",\n                                    children: \"Create!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\elections\\\\new.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\elections\\\\new.js\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\taaha\\\\Courses\\\\ethereum and solidity\\\\election\\\\pages\\\\elections\\\\new.js\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return CampaignNew;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignNew);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbGVjdGlvbnMvbmV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQUF3RDtBQUNxQjtBQUNoQztBQUNBO0FBQ047QUFDSztBQUU1QyxlQUFpQixpQkFpRWhCOzs7O2FBakVLYyxXQUFXOzs7O1FBQ2JDLGlGQUFBQSxDQUFBQSx5RkFBQUEsU0FBQUEsT0FBSyxFQUFHO1lBQ0pDLGtCQUFrQixFQUFFLEVBQUU7WUFDdEJDLFlBQVksRUFBRSxFQUFFO1lBQ2hCQyxZQUFZLEVBQUUsRUFBRTtZQUNoQkMsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQzs7UUFFRkMsaUZBQUFBLENBQUFBLHlGQUFBQSxTQUFBQSxVQUFRO3VCQUFHLHNRQUFPQyxLQUFLLEVBQUs7b0JBTWRDLFFBQVE7Ozs7NEJBTGxCRCxLQUFLLENBQUNFLGNBQWMsRUFBRSxDQUFDOzRCQUV2QixPQUFLQyxRQUFRLENBQUM7Z0NBQUVMLE9BQU8sRUFBRSxJQUFJO2dDQUFFRCxZQUFZLEVBQUUsRUFBRTs2QkFBRSxDQUFDLENBQUM7OzttQ0FHeEJQLHNFQUFvQixFQUFFOzs0QkFBdkNXLFFBQVEsWUFBK0I7O21DQUN2Q1osZ0ZBQ1MsQ0FBQyxPQUFLSyxLQUFLLENBQUNDLGtCQUFrQixFQUN6QyxPQUFLRCxLQUFLLENBQUNFLFlBQVksQ0FBQyxDQUMzQlksSUFBSSxDQUFDO2dDQUNGQyxJQUFJLEVBQUVSLFFBQVEsQ0FBQyxDQUFDLENBQUM7NkJBQ3BCLENBQUM7OzRCQUVGVCxxREFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7OzRCQUV0QixPQUFLVyxRQUFRLENBQUM7Z0NBQUVOLFlBQVksRUFBRWMsUUFBSUMsT0FBTzs2QkFBRSxDQUFDLENBQUM7OzRCQUdqRCxPQUFLVCxRQUFRLENBQUM7Z0NBQUVMLE9BQU8sRUFBRSxLQUFLOzZCQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7YUFDckM7NEJBcEJpQkUsS0FBSzs7O1lBb0JyQjs7Ozs7WUFFRmEsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7O2dCQUNMLHFCQUNJLDhEQUFDekIsMERBQU07O3NDQUNILDhEQUFDMEIsSUFBRTtzQ0FBQyxvQkFBa0I7Ozs7O2dDQUFLO3NDQUMzQiw4REFBQzlCLG9EQUFJOzRCQUFDZSxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFROzRCQUFFZ0IsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUNyQixLQUFLLENBQUNHLFlBQVk7OzhDQUMzRCw4REFBQ2IsMERBQVU7O3NEQUNQLDhEQUFDaUMsT0FBSztzREFBQyxxQkFBbUI7Ozs7O2dEQUFRO3NEQUNsQyw4REFBQy9CLHFEQUFLOzRDQUNGZ0MsS0FBSyxFQUFFO2dEQUFDQyxLQUFLLEVBQUUsT0FBTzs2Q0FBQzs0Q0FDdkJGLEtBQUssRUFBQyxTQUFTOzRDQUNmRyxhQUFhLEVBQUMsT0FBTzs0Q0FDckJDLEtBQUssRUFBRSxJQUFJLENBQUMzQixLQUFLLENBQUNDLGtCQUFrQjs0Q0FDcEMyQixRQUFRLEVBQUV0QixTQUFBQSxLQUFLO3VEQUNYLE1BQUtHLFFBQVEsQ0FBQztvREFBQ1Isa0JBQWtCLEVBQUVLLEtBQUssQ0FBQ3VCLE1BQU0sQ0FBQ0YsS0FBSztpREFBQyxDQUFDOzZDQUFBOzs7OztnREFDN0Q7Ozs7Ozt3Q0FDTzs4Q0FDYiw4REFBQ3JDLDBEQUFVOztzREFDUCw4REFBQ2lDLE9BQUs7c0RBQUMsZUFBYTs7Ozs7Z0RBQVE7c0RBQzVCLDhEQUFDL0IscURBQUs7NENBQ0ZnQyxLQUFLLEVBQUU7Z0RBQUNDLEtBQUssRUFBRSxPQUFPOzZDQUFDOzRDQUN2QkYsS0FBSyxFQUFDLFNBQVM7NENBQ2ZHLGFBQWEsRUFBQyxPQUFPOzRDQUNyQkMsS0FBSyxFQUFFLElBQUksQ0FBQzNCLEtBQUssQ0FBQ0UsWUFBWTs0Q0FDOUIwQixRQUFRLEVBQUV0QixTQUFBQSxLQUFLO3VEQUNYLE1BQUtHLFFBQVEsQ0FBQztvREFBQ1AsWUFBWSxFQUFFSSxLQUFLLENBQUN1QixNQUFNLENBQUNGLEtBQUs7aURBQUMsQ0FBQzs2Q0FBQTs7Ozs7Z0RBQ3ZEOzs7Ozs7d0NBQ087OENBQ2IsOERBQUNsQyx1REFBTztvQ0FBQzRCLEtBQUs7b0NBQUNTLE1BQU0sRUFBQyxNQUFNO29DQUFDQyxPQUFPLEVBQUUsSUFBSSxDQUFDL0IsS0FBSyxDQUFDRyxZQUFZOzs7Ozt3Q0FBSTs4Q0FDakUsOERBQUNaLHNEQUFNO29DQUFDYSxPQUFPLEVBQUUsSUFBSSxDQUFDSixLQUFLLENBQUNJLE9BQU87b0NBQUU0QixLQUFLLEVBQUMsTUFBTTs4Q0FBQyxTQUFPOzs7Ozt3Q0FBUzs7Ozs7O2dDQUMvRDs7Ozs7O3dCQUNGLENBQ1g7YUFDTDs7OztDQUNKLENBL0R5QjlDLDRDQUFTLENBK0RsQztBQUVELCtEQUFlYSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VsZWN0aW9ucy9uZXcuanM/MGFmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVGYWN0b3J5IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0ZXAsIEljb24sIEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIENhbXBhaWduTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvblBlcmlvZDogJycsXHJcbiAgICAgICAgdm90aW5nUGVyaW9kOiAnJyxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXHJcbiAgICAgICAgICAgIC5kZXBsb3lFbGVjdGlvbih0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvblBlcmlvZCwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZvdGluZ1BlcmlvZClcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMz5DcmVhdGUgYW4gRWxlY3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJlZ2lzdHJhdGlvbiBQZXJpb2Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMzcwcHhcIn19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3NlY29uZHMnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvblBlcmlvZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RyYXRpb25QZXJpb2Q6IGV2ZW50LnRhcmdldC52YWx1ZX0pfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Wb3RpbmcgUGVyaW9kPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIzNzBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdzZWNvbmRzJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52b3RpbmdQZXJpb2R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dm90aW5nUGVyaW9kOiBldmVudC50YXJnZXQudmFsdWV9KX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj0nT29wcycgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGNvbG9yPSd0ZWFsJz5DcmVhdGUhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk5ldyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZUZhY3RvcnkiLCJTdGVwIiwiSWNvbiIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwicmVnaXN0cmF0aW9uUGVyaW9kIiwidm90aW5nUGVyaW9kIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJhY2NvdW50cyIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJkZXBsb3lFbGVjdGlvbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwiZXJyIiwibWVzc2FnZSIsInJlbmRlciIsImgzIiwiZXJyb3IiLCJGaWVsZCIsImxhYmVsIiwic3R5bGUiLCJ3aWR0aCIsImxhYmVsUG9zaXRpb24iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiaGVhZGVyIiwiY29udGVudCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/elections/new.js\n"));

/***/ })

});