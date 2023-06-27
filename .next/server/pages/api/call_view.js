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
exports.id = "pages/api/call_view";
exports.ids = ["pages/api/call_view"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/call_view.js":
/*!********************************!*\
  !*** ./pages/api/call_view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prisma/client */ \"(api)/./prisma/client.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            // Lógica para llamar a la vista\n            const result = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].vista_product.findMany();\n            res.status(200).json({\n                result\n            });\n        } catch (error) {\n            res.status(500).json({\n                error: \"Error al llamar a la vista\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9todo no permitido\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FsbF92aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRTFCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxJQUFJRCxJQUFJRSxXQUFXLE9BQU87UUFDdEIsSUFBSTtZQUNGLGdDQUFnQztZQUNoQyxNQUFNQyxTQUFTLE1BQU1MLDZFQUE2Qk87WUFXbERKLElBQUlLLE9BQU8sS0FBS0MsS0FBSztnQkFBRUo7WUFBTztRQUNoQyxFQUFFLE9BQU9LLE9BQU87WUFDZFAsSUFBSUssT0FBTyxLQUFLQyxLQUFLO2dCQUFFQyxPQUFPO1lBQTZCO1FBQzdEO0lBQ0YsT0FBTztRQUNMUCxJQUFJSyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUFzQjtJQUN0RDtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uZXhpb25kYi8uL3BhZ2VzL2FwaS9jYWxsX3ZpZXcuanM/ODQ2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9wcmlzbWEvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyBMw7NnaWNhIHBhcmEgbGxhbWFyIGEgbGEgdmlzdGFcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS52aXN0YV9wcm9kdWN0LmZpbmRNYW55KFxyXG4gICAgICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBtb2RlbF95ZWFyOiAnMjAyMCcsXHJcbiAgICAgICAgICAgIC8vICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgIG9yZGVyQnk6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBwcm9kdWN0X25hbWU6ICdhc2MnLFxyXG4gICAgICAgICAgICAvLyAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdCB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIGFsIGxsYW1hciBhIGxhIHZpc3RhJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ03DqXRvZG8gbm8gcGVybWl0aWRvJyB9KTtcclxuICAgICAgfVxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJyZXN1bHQiLCJ2aXN0YV9wcm9kdWN0IiwiZmluZE1hbnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/call_view.js\n");

/***/ }),

/***/ "(api)/./prisma/client.js":
/*!**************************!*\
  !*** ./prisma/client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsT0FBT0YsUUFBUTtRQUNsQkUsT0FBT0YsU0FBUyxJQUFJRCx3REFBWUE7SUFDbEM7SUFDQUMsU0FBU0UsT0FBT0Y7QUFDbEI7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbmV4aW9uZGIvLi9wcmlzbWEvY2xpZW50LmpzP2IxNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxubGV0IHByaXNtYTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICB9XHJcbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./prisma/client.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/call_view.js"));
module.exports = __webpack_exports__;

})();