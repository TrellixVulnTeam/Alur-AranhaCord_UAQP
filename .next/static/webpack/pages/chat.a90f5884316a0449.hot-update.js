"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n/* harmony import */ var _components_MessageList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MessageList */ \"./components/MessageList.jsx\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_ButtonSendSticker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ButtonSendSticker */ \"./components/ButtonSendSticker.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPABASE_ANON_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5MTUxNiwiZXhwIjoxOTU4ODY3NTE2fQ.PKlDzLO36IZbbp0ge_INYvnOObfZhmQPh_lrpMHzG-E\";\nvar SUPABASE_URL = \"https://gcmncofetsevuetdlblu.supabase.co\";\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_9__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\nfunction atualizaChatTempoReal(adicionaMensagem) {\n    return supabaseClient.from('mensagens').on('INSERT', function(respostaAoVivo) {\n        adicionaMensagem(respostaAoVivo.new);\n    }).subscribe();\n}\nfunction ChatPage() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            de: usuario,\n            texto: novaMensagem\n        };\n        supabaseClient.from(\"mensagens\").insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            //  setChat([data[0], ...chat]);\n            console.log('criando mensagem: ', data);\n        });\n        setMensagem(\"\");\n    };\n    _s();\n    var rotas = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var usuario = rotas.query.username;\n    var ref = _slicedToArray((0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_3__.useState)(), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray((0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_3__.useState)([]), 2), chat = ref1[0], setChat = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        supabaseClient.from(\"mensagens\").select(\"*\").order('id', {\n            ascending: false\n        }).then(function(param) {\n            var data = param.data;\n            setChat(data);\n        });\n        atualizaChatTempoReal(function(novaMensagem) {\n            setChat(function(valorAtualDoChat) {\n                console.log(valorAtualDoChat);\n                return [\n                    novaMensagem, \n                ].concat(_toConsumableArray(valorAtualDoChat));\n            });\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[500],\n            backgroundImage: \"url(https://i.redd.it/d3h7ofnt73621.png)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                //backgroundColorappConfig.theme.colors.neutrals[700],:\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\pages\\\\chat.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        boxShadow: \"auto\",\n                        //backgroundColor: appConfig.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MessageList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            mensagens: chat\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\pages\\\\chat.js\",\n                            lineNumber: 114,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    onChange: function(e) {\n                                        setMensagem(e.target.value);\n                                    },\n                                    onKeyPress: function(e) {\n                                        if (e.key === \"Enter\") {\n                                            e.preventDefault();\n                                            handleNovaMensagem(mensagem1);\n                                        }\n                                    },\n                                    value: mensagem1,\n                                    type: \"textarea\",\n                                    styleSheet: {\n                                        width: \"100%\",\n                                        border: \"0\",\n                                        resize: \"none\",\n                                        borderRadius: \"5px\",\n                                        padding: \"6px 8px\",\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[999],\n                                        marginRight: \"12px\",\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\pages\\\\chat.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ButtonSendSticker__WEBPACK_IMPORTED_MODULE_8__.ButtonSendSticker, {\n                                    onStickerClick: function(sticker) {\n                                        // console.log('[USANDO O COMPONENTE] Salva esse sticker no banco', sticker);\n                                        handleNovaMensagem(':sticker:' + sticker);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\pages\\\\chat.js\",\n                                    lineNumber: 147,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\pages\\\\chat.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\pages\\\\chat.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\pages\\\\chat.js\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\thica\\\\Desktop\\\\Projeto\\\\AluraCord\\\\pages\\\\chat.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"5E23yYky/HEbf0Fk2d1OYRQIyJY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVBDLENBQUMsRUFBSyxDQUFDO3dDQUNoQnJDLFdBQVcsQ0FBQ3FDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO29DQUM1QixDQUFDO29DQUNEQyxVQUFVLEVBQUUsUUFBUSxDQUFQSCxDQUFDLEVBQUssQ0FBQzt3Q0FDbEIsRUFBRSxFQUFFQSxDQUFDLENBQUNJLEdBQUcsS0FBSyxDQUFPLFFBQUUsQ0FBQzs0Q0FDdEJKLENBQUMsQ0FBQ0ssY0FBYzs0Q0FDaEJyRCxrQkFBa0IsQ0FBQ0UsU0FBUTt3Q0FDN0IsQ0FBQztvQ0FDSCxDQUFDO29DQUNEZ0QsS0FBSyxFQUFFaEQsU0FBUTtvQ0FDZm9ELElBQUksRUFBQyxDQUFVO29DQUNmakMsVUFBVSxFQUFFLENBQUM7d0NBQ1hrQyxLQUFLLEVBQUUsQ0FBTTt3Q0FDYkMsTUFBTSxFQUFFLENBQUc7d0NBQ1hDLE1BQU0sRUFBRSxDQUFNO3dDQUNkbkIsWUFBWSxFQUFFLENBQUs7d0NBQ25CSSxPQUFPLEVBQUUsQ0FBUzt3Q0FDbEJqQixlQUFlLEVBQUUxQyxvRUFBcUM7d0NBQ3REMkUsV0FBVyxFQUFFLENBQU07d0NBQ25CekIsS0FBSyxFQUFFbEQsc0VBQXFDO29DQUM5QyxDQUFDOzs7Ozs7NEdBRUFLLDRFQUFpQjtvQ0FDbEJ1RSxjQUFjLEVBQUUsUUFBUSxDQUFQQyxPQUFPLEVBQUssQ0FBQzt3Q0FDNUIsRUFBNkU7d0NBQzdFNUQsa0JBQWtCLENBQUMsQ0FBVyxhQUFHNEQsT0FBTztvQ0FDMUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZixDQUFDO0dBcEl1QjdELFFBQVE7O1FBRWhCWixrREFBUzs7O0tBRkRZLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSBcIkBza3luZXh1aS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50XCI7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IE1lc3NhZ2VMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL01lc3NhZ2VMaXN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IFxyXG5pbXBvcnQgeyBCdXR0b25TZW5kU3RpY2tlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblNlbmRTdGlja2VyXCI7XHJcblxyXG5cclxuY29uc3QgU1VQQUJBU0VfQU5PTl9LRVkgPVxyXG4gIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnliMnhsSWpvaVlXNXZiaUlzSW1saGRDSTZNVFkwTXpJNU1UVXhOaXdpWlhod0lqb3hPVFU0T0RZM05URTJmUS5QS2xEekxPMzZJWmJicDBnZV9JTll2bk9PYmZaaG1RUGhfbHJwTUh6Ry1FXCI7XHJcbmNvbnN0IFNVUEFCQVNFX1VSTCA9IFwiaHR0cHM6Ly9nY21uY29mZXRzZXZ1ZXRkbGJsdS5zdXBhYmFzZS5jb1wiO1xyXG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChTVVBBQkFTRV9VUkwsIFNVUEFCQVNFX0FOT05fS0VZKTtcclxuXHJcbmZ1bmN0aW9uIGF0dWFsaXphQ2hhdFRlbXBvUmVhbChhZGljaW9uYU1lbnNhZ2VtKXtcclxuICByZXR1cm4gc3VwYWJhc2VDbGllbnRcclxuICAuZnJvbSAoJ21lbnNhZ2VucycpXHJcbiAgLm9uKCdJTlNFUlQnLCAocmVzcG9zdGFBb1Zpdm8pID0+IHtcclxuICAgIGFkaWNpb25hTWVuc2FnZW0ocmVzcG9zdGFBb1Zpdm8ubmV3KVxyXG4gIH0pXHJcbiAgLnN1YnNjcmliZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcclxuICBcclxuICBjb25zdCByb3RhcyA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHVzdWFyaW8gPSByb3Rhcy5xdWVyeS51c2VybmFtZTtcclxuICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3VwYWJhc2VDbGllbnRcclxuICAgICAgLmZyb20oXCJtZW5zYWdlbnNcIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLm9yZGVyKCdpZCcsIHthc2NlbmRpbmc6IGZhbHNlfSlcclxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgc2V0Q2hhdChkYXRhKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgIGF0dWFsaXphQ2hhdFRlbXBvUmVhbCgobm92YU1lbnNhZ2VtKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hhdCgodmFsb3JBdHVhbERvQ2hhdCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2codmFsb3JBdHVhbERvQ2hhdClcclxuICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG5vdmFNZW5zYWdlbSwgXHJcbiAgICAgICAgICAgIC4uLnZhbG9yQXR1YWxEb0NoYXQsXHJcbiAgICAgICAgICBdXHJcbiAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgICAgIFxyXG4gICAgfSwgW10pOyAgIFxyXG5cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTm92YU1lbnNhZ2VtKG5vdmFNZW5zYWdlbSkge1xyXG4gICAgY29uc3QgbWVuc2FnZW0gPSB7IFxyXG4gICAgICBkZTogdXN1YXJpbyxcclxuICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSwgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgc3VwYWJhc2VDbGllbnRcclxuICAgICAgLmZyb20oXCJtZW5zYWdlbnNcIilcclxuICAgICAgLmluc2VydChbbWVuc2FnZW1dKVxyXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHsgICAgICBcclxuICAgICAgLy8gIHNldENoYXQoW2RhdGFbMF0sIC4uLmNoYXRdKTtcclxuICAgICAgY29uc29sZS5sb2coJ2NyaWFuZG8gbWVuc2FnZW06ICcsICBkYXRhKVxyXG4gICAgICB9KTtcclxuICAgIHNldE1lbnNhZ2VtKFwiXCIpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vaS5yZWRkLml0L2QzaDdvZm50NzM2MjEucG5nKWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgIGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgIC8vYmFja2dyb3VuZENvbG9yYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLDpcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBtYXhXaWR0aDogXCI5NSVcIixcclxuICAgICAgICAgIG1heEhlaWdodDogXCI5NXZoXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjMycHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICAgICAgYm94U2hhZG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgezxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2NoYXR9IC8+fVxyXG5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZW5zYWdlbShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVOb3ZhTWVuc2FnZW0obWVuc2FnZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjZweCA4cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjk5OVwiXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uU2VuZFN0aWNrZXJcclxuICAgICAgICAgICAgICBvblN0aWNrZXJDbGljaz17KHN0aWNrZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbVVNBTkRPIE8gQ09NUE9ORU5URV0gU2FsdmEgZXNzZSBzdGlja2VyIG5vIGJhbmNvJywgc3RpY2tlcik7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVOb3ZhTWVuc2FnZW0oJzpzdGlja2VyOicgKyBzdGlja2VyKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJCdXR0b24iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBwQ29uZmlnIiwiSGVhZGVyIiwiTWVzc2FnZUxpc3QiLCJjcmVhdGVDbGllbnQiLCJ1c2VSb3V0ZXIiLCJCdXR0b25TZW5kU3RpY2tlciIsIlNVUEFCQVNFX0FOT05fS0VZIiwiU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VDbGllbnQiLCJhdHVhbGl6YUNoYXRUZW1wb1JlYWwiLCJhZGljaW9uYU1lbnNhZ2VtIiwiZnJvbSIsIm9uIiwicmVzcG9zdGFBb1Zpdm8iLCJuZXciLCJzdWJzY3JpYmUiLCJDaGF0UGFnZSIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiZGUiLCJ1c3VhcmlvIiwidGV4dG8iLCJpbnNlcnQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRNZW5zYWdlbSIsInJvdGFzIiwicXVlcnkiLCJ1c2VybmFtZSIsImNoYXQiLCJzZXRDaGF0Iiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJ2YWxvckF0dWFsRG9DaGF0Iiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJtZW5zYWdlbnMiLCJhcyIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbktleVByZXNzIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwid2lkdGgiLCJib3JkZXIiLCJyZXNpemUiLCJtYXJnaW5SaWdodCIsIm9uU3RpY2tlckNsaWNrIiwic3RpY2tlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});