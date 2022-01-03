"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/SidebarDrawerContext.tsx":
/*!**********************************************!*\
  !*** ./src/context/SidebarDrawerContext.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SidebarDrawerProvider\": () => (/* binding */ SidebarDrawerProvider),\n/* harmony export */   \"useSidebarDrawer\": () => (/* binding */ useSidebarDrawer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst SidebarDrawerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n});\nfunction SidebarDrawerProvider({ children  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const discluse = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();\n    //every time the url change it will close de navigationbar\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        discluse.onClose();\n    }, [\n        router.asPath\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SidebarDrawerContext.Provider, {\n        value: discluse,\n        __source: {\n            fileName: \"C:\\\\Users\\\\gerso\\\\Desktop\\\\ignite_react\\\\dashgo\\\\src\\\\context\\\\SidebarDrawerContext.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n}\nconst useSidebarDrawer = ()=>(0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(SidebarDrawerContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TaWRlYmFyRHJhd2VyQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDOUI7QUFDZ0M7QUFTdkUsS0FBSyxDQUFDSyxvQkFBb0IsaUJBQUdILG9EQUFhLENBQUMsQ0FBQztBQUFBLENBQUM7QUFFdEMsU0FBU0kscUJBQXFCLENBQUMsQ0FBQ0MsQ0FBQUEsUUFBUSxFQUEyQixDQUFDLEVBQUMsQ0FBQztJQUV6RSxLQUFLLENBQUNDLE1BQU0sR0FBR1Asc0RBQVM7SUFHeEIsS0FBSyxDQUFFUSxRQUFRLEdBQUdULCtEQUFhO0lBRS9CLEVBQTBEO0lBQzFESSxnREFBUyxLQUFPLENBQUM7UUFDZEssUUFBUSxDQUFDQyxPQUFPO0lBQ25CLENBQUMsRUFBRSxDQUFDRjtRQUFBQSxNQUFNLENBQUNHLE1BQU07SUFBQSxDQUFDO0lBRWxCLE1BQU0sc0VBQ0ROLG9CQUFvQixDQUFDTyxRQUFRO1FBQUNDLEtBQUssRUFBRUosUUFBUTs7Ozs7OztrQkFDekNGLFFBQVE7O0FBR3JCLENBQUM7QUFFTSxLQUFLLENBQUNPLGdCQUFnQixPQUFTWCxpREFBVSxDQUFDRSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoZ28vLi9zcmMvY29udGV4dC9TaWRlYmFyRHJhd2VyQ29udGV4dC50c3g/MTZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEaXNjbG9zdXJlLCBVc2VEaXNjbG9zdXJlUmV0dXJuIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFNpZGViYXJEcmF3ZXJQcm92aWRlclByb3Bze1xyXG4gICAgY2hpbGRyZW46UmVhY3ROb2RlO1xyXG59XHJcblxyXG50eXBlIFNpZGViYXJEcmF3ZXJDb250ZXh0RGF0YSA9IFVzZURpc2Nsb3N1cmVSZXR1cm5cclxuXHJcbmNvbnN0IFNpZGViYXJEcmF3ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJEcmF3ZXJQcm92aWRlcih7Y2hpbGRyZW59OlNpZGViYXJEcmF3ZXJQcm92aWRlclByb3BzKXtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBcclxuICAgIGNvbnN0ICBkaXNjbHVzZSA9IHVzZURpc2Nsb3N1cmUoKVxyXG5cclxuICAgIC8vZXZlcnkgdGltZSB0aGUgdXJsIGNoYW5nZSBpdCB3aWxsIGNsb3NlIGRlIG5hdmlnYXRpb25iYXJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICBkaXNjbHVzZS5vbkNsb3NlKClcclxuICAgIH0sIFtyb3V0ZXIuYXNQYXRoXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFNpZGViYXJEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNjbHVzZX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1NpZGViYXJEcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU2lkZWJhckRyYXdlciA9ICgpID0+IHVzZUNvbnRleHQoU2lkZWJhckRyYXdlckNvbnRleHQpIl0sIm5hbWVzIjpbInVzZURpc2Nsb3N1cmUiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIlNpZGViYXJEcmF3ZXJDb250ZXh0IiwiU2lkZWJhckRyYXdlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJkaXNjbHVzZSIsIm9uQ2xvc2UiLCJhc1BhdGgiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU2lkZWJhckRyYXdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/SidebarDrawerContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _context_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/SidebarDrawerContext */ \"./src/context/SidebarDrawerContext.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme,\n        __source: {\n            fileName: \"C:\\\\Users\\\\gerso\\\\Desktop\\\\ignite_react\\\\dashgo\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__.SidebarDrawerProvider, {\n            __source: {\n                fileName: \"C:\\\\Users\\\\gerso\\\\Desktop\\\\ignite_react\\\\dashgo\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\gerso\\\\Desktop\\\\ignite_react\\\\dashgo\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDK0M7QUFDVjtBQUNrQztTQUM5REcsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxFQUFFLENBQUM7SUFFbEQsTUFBTSxzRUFDTEwsNERBQWM7UUFBQ0MsS0FBSyxFQUFJQSxnREFBSzs7Ozs7Ozt1RkFDM0JDLGdGQUFxQjs7Ozs7OzsyRkFDbkJFLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7QUFJOUIsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGdvLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBQcm9wc30gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7Q2hha3JhUHJvdmlkZXJ9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7dGhlbWV9IGZyb20gJy4uL3N0eWxlcy90aGVtZSdcclxuaW1wb3J0IHsgU2lkZWJhckRyYXdlclByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9TaWRlYmFyRHJhd2VyQ29udGV4dCdcclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgPENoYWtyYVByb3ZpZGVyIHRoZW1lID0ge3RoZW1lfT5cclxuICAgIDxTaWRlYmFyRHJhd2VyUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvU2lkZWJhckRyYXdlclByb3ZpZGVyPlxyXG4gIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJ0aGVtZSIsIlNpZGViYXJEcmF3ZXJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        gray: {\n            \"900\": \"#181B23\",\n            \"800\": \"#1F2029\",\n            \"700\": \"#353646\",\n            \"600\": \"#4B4D63\",\n            \"500\": \"#616480\",\n            \"400\": \"#797D9A\",\n            \"300\": \"#9699B0\",\n            \"200\": \"#B3B5C6\",\n            \"100\": \"#D1D2DC\",\n            \"50\": \"#EEEEF2\"\n        }\n    },\n    fonts: {\n        body: \"Roboto\",\n        heading: \"Roboto\"\n    },\n    styles: {\n        global: {\n            body: {\n                bg: 'gray.900',\n                color: 'gray.50'\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM4QztBQUV2QyxLQUFLLENBQUNDLEtBQUssR0FBR0QsNkRBQVcsQ0FBQyxDQUFDO0lBQzlCRSxNQUFNLEVBQUUsQ0FBQztRQUNMQyxJQUFJLEVBQUUsQ0FBQztZQUNILENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUksS0FBRSxDQUFTO1FBQ25CLENBQUM7SUFDTCxDQUFDO0lBQ0RDLEtBQUssRUFBRSxDQUFDO1FBQ0pDLElBQUksRUFBRSxDQUFRO1FBQ2RDLE9BQU8sRUFBRSxDQUFRO0lBQ3JCLENBQUM7SUFDREMsTUFBTSxFQUFFLENBQUM7UUFDTEMsTUFBTSxFQUFFLENBQUM7WUFDTEgsSUFBSSxFQUFFLENBQUM7Z0JBQ0hJLEVBQUUsRUFBRSxDQUFVO2dCQUNkQyxLQUFLLEVBQUUsQ0FBUztZQUNwQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGdvLy4vc3JjL3N0eWxlcy90aGVtZS50cz81MTYxIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgICBncmF5OiB7XHJcbiAgICAgICAgICAgIFwiOTAwXCI6IFwiIzE4MUIyM1wiLFxyXG4gICAgICAgICAgICBcIjgwMFwiOiBcIiMxRjIwMjlcIixcclxuICAgICAgICAgICAgXCI3MDBcIjogXCIjMzUzNjQ2XCIsXHJcbiAgICAgICAgICAgIFwiNjAwXCI6IFwiIzRCNEQ2M1wiLFxyXG4gICAgICAgICAgICBcIjUwMFwiOiBcIiM2MTY0ODBcIixcclxuICAgICAgICAgICAgXCI0MDBcIjogXCIjNzk3RDlBXCIsXHJcbiAgICAgICAgICAgIFwiMzAwXCI6IFwiIzk2OTlCMFwiLFxyXG4gICAgICAgICAgICBcIjIwMFwiOiBcIiNCM0I1QzZcIixcclxuICAgICAgICAgICAgXCIxMDBcIjogXCIjRDFEMkRDXCIsXHJcbiAgICAgICAgICAgIFwiNTBcIjogXCIjRUVFRUYyXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvbnRzOiB7XHJcbiAgICAgICAgYm9keTogXCJSb2JvdG9cIixcclxuICAgICAgICBoZWFkaW5nOiBcIlJvYm90b1wiLFxyXG4gICAgfSxcclxuICAgIHN0eWxlczoge1xyXG4gICAgICAgIGdsb2JhbDoge1xyXG4gICAgICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgICAgICBiZzogJ2dyYXkuOTAwJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheS41MCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwidGhlbWUiLCJjb2xvcnMiLCJncmF5IiwiZm9udHMiLCJib2R5IiwiaGVhZGluZyIsInN0eWxlcyIsImdsb2JhbCIsImJnIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();