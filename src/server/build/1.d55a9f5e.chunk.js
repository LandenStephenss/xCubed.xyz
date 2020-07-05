(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: port, clientID, clientSecret, botToken, passwd, admins, MongoURL, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"port\\\":80,\\\"clientID\\\":\\\"626630111004852224\\\",\\\"clientSecret\\\":\\\"IhRWQLkssP-zZUwJIrJruojIALy7MdUc\\\",\\\"botToken\\\":\\\"NjI2NjMwMTExMDA0ODUyMjI0.Xq-Vyw.Jw543LToHREGXnD2N9yVSE8xFPU\\\",\\\"passwd\\\":\\\"catdicks\\\",\\\"admins\\\":[\\\"621154191192096778\\\"],\\\"MongoURL\\\":\\\"mongodb://Oly:123zserdxcft@157.230.232.81:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false\\\"}\");\n\n//# sourceURL=webpack:///./config.json?");

/***/ }),

/***/ "./src/app/Pages/Leaderboard/Components/Card.jsx":
/*!*******************************************************!*\
  !*** ./src/app/Pages/Leaderboard/Components/Card.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardStyle.css */ \"./src/app/Pages/Leaderboard/Components/CardStyle.css\");\n/* harmony import */ var _CardStyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardStyle_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../config.json */ \"./config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../config.json */ \"./config.json\", 1);\nclass LeaderboardCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(props){super();this.props=props;}render(){const user=this.props.user;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"LeaderboardCard\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{draggable:\"false\",style:{width:\"80px\",height:\"80px\",borderRadius:\"50%\",marginRight:\"10px\"},src:user.avatar||\"https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png\"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{style:{textAlign:\"center\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{color:\"orange\"}},\"User:\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,user.username||\"N/A\")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{style:{textAlign:\"center\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{color:\"orange\"}},\"Level:\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,user.levels.level)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{style:{textAlign:\"center\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{color:\"orange\"}},\"XP:\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,user.levels.xp)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{style:{textAlign:\"center\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{color:\"orange\"}},\"Rank:\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,this.props.rank+1)));}}/* harmony default export */ __webpack_exports__[\"default\"] = (LeaderboardCard);\n\n//# sourceURL=webpack:///./src/app/Pages/Leaderboard/Components/Card.jsx?");

/***/ }),

/***/ "./src/app/Pages/Leaderboard/Components/CardStyle.css":
/*!************************************************************!*\
  !*** ./src/app/Pages/Leaderboard/Components/CardStyle.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/Pages/Leaderboard/Components/CardStyle.css?");

/***/ }),

/***/ "./src/app/Pages/Leaderboard/index.jsx":
/*!*********************************************!*\
  !*** ./src/app/Pages/Leaderboard/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Leaderboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Card_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Card.jsx */ \"./src/app/Pages/Leaderboard/Components/Card.jsx\");\nclass Leaderboard extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]{constructor(props){super();this.state={items:[],error:null,isLoaded:false};}async componentDidMount(){await fetch(`https://xcubed.xyz/api/v1/users/topLevels`)// why the fuck is this not working\n.then(res=>res.json()).then(res=>{this.state.items=res.users;this.state.isLoaded=true;this.forceUpdate();});}render(){if(!this.state.isLoaded){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{style:{display:\"flex\",justifyContent:\"center\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{color:\"white\"}},\"Loading...\"));}else{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{style:{display:\"flex\",justifyContent:\"center\",position:\"relative\",top:\"20px\",flexWrap:\"wrap\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:{color:\"white\",fontSize:\"22px\",width:\"100%\",textAlign:\"center\"}},\"Top 100 Levels!\"),this.state.items.map(item=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Card_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{key:item.id,user:item,rank:this.state.items.indexOf(item)}))));}}}\n\n//# sourceURL=webpack:///./src/app/Pages/Leaderboard/index.jsx?");

/***/ })

}]);