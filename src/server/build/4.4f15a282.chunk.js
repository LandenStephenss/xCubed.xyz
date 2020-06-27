(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/app/Pages/GuildSelector/Style.css":
/*!***********************************************!*\
  !*** ./src/app/Pages/GuildSelector/Style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/Pages/GuildSelector/Style.css?");

/***/ }),

/***/ "./src/app/Pages/GuildSelector/index.jsx":
/*!***********************************************!*\
  !*** ./src/app/Pages/GuildSelector/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _Style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style.css */ \"./src/app/Pages/GuildSelector/Style.css\");\n/* harmony import */ var _Style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Style_css__WEBPACK_IMPORTED_MODULE_2__);\nclass GuildSelector extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]{constructor(props){super();this.state={loggedIn:true,guilds:null,loaded:false};}async componentDidMount(){await fetch(\"/oauth/state\").then(res=>res.json()).then(res=>{this.state.guilds=res.user.guilds.filter(f=>f.owner);this.state.loaded=true;});console.log(this.state.guilds);console.log(\"Mount\");this.forceUpdate();}render(){if(!this.state.loggedIn){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"],{to:\"/\"});}else if(this.state.loaded){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"Guilds\"},this.state.guilds.map(guild=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"GuildCard\",key:guild.id,onClick:()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"],{to:\"/\"})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{className:\"GuildIcon\",src:guild.icon!==null?`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`:\"https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png\"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,guild.name))));}else{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{textAlign:\"center\",color:\"white\"}},\"Loading...\"));}}}/* harmony default export */ __webpack_exports__[\"default\"] = (GuildSelector);\n\n//# sourceURL=webpack:///./src/app/Pages/GuildSelector/index.jsx?");

/***/ })

}]);