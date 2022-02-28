/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "./src/pages/api/contact.ts":
/*!**********************************!*\
  !*** ./src/pages/api/contact.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fauna */ \"./src/services/fauna.ts\");\n\n // eslint-disable-next-line import/no-anonymous-default-export\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const {\n    name,\n    email\n  } = req.body;\n\n  try {\n    await _services_fauna__WEBPACK_IMPORTED_MODULE_1__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(req.body.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n      data: {\n        name,\n        email\n      }\n    }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(req.body.email))));\n    res.status(200).end();\n  } catch {\n    res.status(400).end();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGRhLy4vc3JjL3BhZ2VzL2FwaS9jb250YWN0LnRzPzYzMTIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibmFtZSIsImVtYWlsIiwiYm9keSIsImZhdW5hIiwicSIsImRhdGEiLCJzdGF0dXMiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtDQUlBOztBQUNBLDZCQUFlLDBDQUFnQkEsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3ZDLFFBQU07QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQWtCSCxHQUFHLENBQUNJLElBQTVCOztBQUVBLE1BQUk7QUFDRixVQUFNQyx3REFBQSxDQUNKQyw2Q0FBQSxDQUNFQSw4Q0FBQSxDQUNFQSxpREFBQSxDQUNFQSxnREFBQSxDQUFRQSxnREFBQSxDQUFRLGVBQVIsQ0FBUixFQUFrQ0EsbURBQUEsQ0FBV04sR0FBRyxDQUFDSSxJQUFKLENBQVNELEtBQXBCLENBQWxDLENBREYsQ0FERixDQURGLEVBTUVHLGlEQUFBLENBQVNBLHFEQUFBLENBQWEsT0FBYixDQUFULEVBQWdDO0FBQUVDLFVBQUksRUFBRTtBQUFFTCxZQUFGO0FBQVFDO0FBQVI7QUFBUixLQUFoQyxDQU5GLEVBT0VHLGlEQUFBLENBQVNBLGdEQUFBLENBQVEsZUFBUixDQUFULEVBQW1DQSxtREFBQSxDQUFXTixHQUFHLENBQUNJLElBQUosQ0FBU0QsS0FBcEIsQ0FBbkMsQ0FQRixDQURJLENBQU47QUFZQUYsT0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDRCxHQWRELENBY0UsTUFBTTtBQUNOUixPQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQjtBQUNEO0FBQ0YiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSBcImZhdW5hZGJcIjtcblxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZmF1bmFcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSByZXEuYm9keTtcblxuICB0cnkge1xuICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgcS5JZihcbiAgICAgICAgcS5Ob3QoXG4gICAgICAgICAgcS5FeGlzdHMoXG4gICAgICAgICAgICBxLk1hdGNoKHEuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLCBxLkNhc2Vmb2xkKHJlcS5ib2R5LmVtYWlsKSlcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHEuQ3JlYXRlKHEuQ29sbGVjdGlvbihcInVzZXJzXCIpLCB7IGRhdGE6IHsgbmFtZSwgZW1haWwgfSB9KSxcbiAgICAgICAgcS5VcGRhdGUocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksIHEuQ2FzZWZvbGQocmVxLmJvZHkuZW1haWwpKVxuICAgICAgKVxuICAgICk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG4gIH0gY2F0Y2gge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5lbmQoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/contact.ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": function() { return /* binding */ fauna; }\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGRhLy4vc3JjL3NlcnZpY2VzL2ZhdW5hLnRzPzhmNGQiXSwibmFtZXMiOlsiZmF1bmEiLCJDbGllbnQiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFEQl9LRVkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUEsS0FBSyxHQUFHLElBQUlDLDJDQUFKLENBQVc7QUFDOUJDLFFBQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBRFUsQ0FBWCxDQUFkIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL2ZhdW5hLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcImZhdW5hZGJcIjtcblxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9LRVksXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("faunadb");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/contact.ts"));
module.exports = __webpack_exports__;

})();