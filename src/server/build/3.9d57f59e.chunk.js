(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = global.fetch.bind(global);\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./src/app/Pages/Staff/Style.css":
/*!***************************************!*\
  !*** ./src/app/Pages/Staff/Style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/Style.css?");

/***/ }),

/***/ "./src/app/Pages/Staff/index.jsx":
/*!***************************************!*\
  !*** ./src/app/Pages/Staff/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Staff; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style.css */ \"./src/app/Pages/Staff/Style.css\");\n/* harmony import */ var _Style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _users_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.json */ \"./src/app/Pages/Staff/users.json\");\nvar _users_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./users.json */ \"./src/app/Pages/Staff/users.json\", 1);\nconst Fetch=__webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");class Staff extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent{constructor(){super();this.state={contribs:null};}async componentDidMount(){var contribs=await Fetch(\"http://api.github.com/repos/LandenStephenss/xCubed/contributors\").then(r=>r.json());this.state.contribs=contribs;this.forceUpdate();}render(){if(this.state.contribs===null){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{fontSize:\"32px\",color:\"white\",textAlign:\"center\"}},\"Developers\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"Developers\"},Object.values(_users_json__WEBPACK_IMPORTED_MODULE_2__.Developers).map(user=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"DevCard\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{className:\"blurple\",style:{fontSize:\"22px\"}},user.name),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{className:\"img\",src:user.image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,user.about))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{fontSize:\"32px\",color:\"white\",textAlign:\"center\"}},\"Contributors\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"Contributors\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{color:\"white\",textAlign:\"center\"}},\"Loading...\")));}else{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{fontSize:\"32px\",color:\"white\",textAlign:\"center\"}},\"Developers\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"Developers\"},Object.values(_users_json__WEBPACK_IMPORTED_MODULE_2__.Developers).map(user=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"DevCard\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{className:\"blurple\",style:{fontSize:\"22px\"}},user.name),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{className:\"img\",src:user.image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,user.about))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{fontSize:\"32px\",color:\"white\",textAlign:\"center\"}},\"Contributors\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"Contributors\"},this.state.contribs.map(contributor=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"ContribCard\",onClick:()=>location.href=\"https://github.com/\"+contributor.login},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{className:\"blurple\"},contributor.login),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{className:\"img\",src:contributor.avatar_url})))));}}}\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/index.jsx?");

/***/ }),

/***/ "./src/app/Pages/Staff/users.json":
/*!****************************************!*\
  !*** ./src/app/Pages/Staff/users.json ***!
  \****************************************/
/*! exports provided: Developers, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"Developers\\\":[{\\\"name\\\":\\\"Olykir\\\",\\\"about\\\":\\\"i make bots\\\",\\\"image\\\":\\\"https://i.imgur.com/CNPIv9g.png\\\"},{\\\"name\\\":\\\"Flag\\\",\\\"about\\\":\\\"I punch trees and click circles\\\",\\\"image\\\":\\\"https://avatars0.githubusercontent.com/u/38012125?s=460&u=717b04e140d577439f7a2f287c6de46c9802fe7a&v=4\\\"}]}\");\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/users.json?");

/***/ })

}]);