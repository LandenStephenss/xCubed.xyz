(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/app/Pages/GuildSelector/index.jsx":
/*!***********************************************!*\
  !*** ./src/app/Pages/GuildSelector/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nclass GuildSelector extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]{constructor(props){super();this.state={loggedIn:true,guilds:null,loaded:false};}async componentDidMount(){await fetch(\"/oauth/state\").then(res=>res.json()).then(res=>{this.state.guilds=res.user.guilds.filter(f=>f.owner);});console.log(this.state.guilds);console.log(\"Mount\");this.forceUpdate();}render(){if(!this.state.loggedIn)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\",null,\"test\"));}}/* harmony default export */ __webpack_exports__[\"default\"] = (GuildSelector);\n\n//# sourceURL=webpack:///./src/app/Pages/GuildSelector/index.jsx?");

/***/ })

}]);