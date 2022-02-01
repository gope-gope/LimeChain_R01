(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/BackgroundImage.js":
/*!***************************************!*\
  !*** ./components/BackgroundImage.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\\u041C\u043E\u0438 \u0444\u0430\u0439\u043B\u043E\u0432\u0435\\DevCourses\\LimeChain_R01\\components\\BackgroundImage.js";




const BackgroundImage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
    src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    centered: "true",
    style: {
      marginTop: '20px',
      marginBot: '20px'
    },
    rounded: "true",
    fluid: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundImage);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BackgroundImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BackgroundImage */ "./components/BackgroundImage.js");

var _jsxFileName = "C:\\\u041C\u043E\u0438 \u0444\u0430\u0439\u043B\u043E\u0432\u0435\\DevCourses\\LimeChain_R01\\components\\Layout.js";






const Layout = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        async: true,
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        async: true,
        src: "//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_BackgroundImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BackgroundImage */ "./components/BackgroundImage.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\\u041C\u043E\u0438 \u0444\u0430\u0439\u043B\u043E\u0432\u0435\\DevCourses\\LimeChain_R01\\pages\\index.js";






class IndexPage extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {
        basic: true,
        textAlign: "center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
          onClick: () => _routes__WEBPACK_IMPORTED_MODULE_5__.Router.pushRoute('/library'),
          size: "huge",
          style: {
            textAlign: "center"
          },
          color: "blue",
          children: "Enter the library"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this);
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const routes = module.exports = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/library', '/library/index');
module.exports = routes;
/*
.add('name of the link displayed in browser', 'page file which loads')
*/

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW1lY2hhaW4vLi9jb21wb25lbnRzL0JhY2tncm91bmRJbWFnZS5qcyIsIndlYnBhY2s6Ly9saW1lY2hhaW4vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9saW1lY2hhaW4vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9saW1lY2hhaW4vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vbGltZWNoYWluL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9saW1lY2hhaW4vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9saW1lY2hhaW4vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2xpbWVjaGFpbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2xpbWVjaGFpbi9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiQmFja2dyb3VuZEltYWdlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90IiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIkluZGV4UGFnZSIsIkNvbXBvbmVudCIsInJlbmRlciIsIlJvdXRlciIsInRleHRBbGlnbiIsInJvdXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsZUFBZSxHQUFHLE1BQU07QUFDNUIsc0JBQ0UsOERBQUMsb0RBQUQ7QUFBTyxPQUFHLEVBQUcscUpBQWI7QUFDRSxZQUFRLEVBQUcsTUFEYjtBQUVFLFNBQUssRUFBSTtBQUFFQyxlQUFTLEVBQUUsTUFBYjtBQUFxQkMsZUFBUyxFQUFFO0FBQWhDLEtBRlg7QUFHRSxXQUFPLEVBQUcsTUFIWjtBQUlFLFNBQUs7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQVREOztBQVVBLCtEQUFlRixlQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1HLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBRXRCLHNCQUVFLDhEQUFDLHdEQUFEO0FBQUEsNEJBRUUsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUNFLGFBQUssTUFEUDtBQUVFLFdBQUcsRUFBQyxZQUZOO0FBR0UsWUFBSSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FO0FBQ0UsYUFBSyxNQURQO0FBRUUsV0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFjR0EsS0FBSyxDQUFDQyxRQWRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBc0JILENBeEJEOztBQTBCQSwrREFBZUYsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNRyxTQUFOLFNBQXdCQyw0Q0FBeEIsQ0FBa0M7QUFFaENDLFFBQU0sR0FBRTtBQUNOLHdCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNkJBQ0UsOERBQUMsc0RBQUQ7QUFBUyxhQUFLLE1BQWQ7QUFBZSxpQkFBUyxFQUFFLFFBQTFCO0FBQUEsK0JBRUUsOERBQUMscURBQUQ7QUFDRSxpQkFBTyxFQUFFLE1BQU1DLHFEQUFBLENBQWlCLFVBQWpCLENBRGpCO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxlQUFLLEVBQUU7QUFBQ0MscUJBQVMsRUFBRTtBQUFaLFdBSFQ7QUFJRSxlQUFLLEVBQUMsTUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFnQkQ7O0FBbkIrQjs7QUFxQmpDO0FBRUQsK0RBQWVKLFNBQWYsRTs7Ozs7Ozs7OztBQzlCQSxNQUFNSyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQLEVBQWhDOztBQUVBSCxNQUFNLENBQ0xJLEdBREQsQ0FDSyxVQURMLEVBQ2lCLGdCQURqQjtBQUdBSCxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLE1BQWpCO0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSW1hZ2UsIFNlZ21lbnQsIFZpc2liaWxpdHkgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5cclxuY29uc3QgQmFja2dyb3VuZEltYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2Ugc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA3ODQyMjE3MzQzLTU4M2JiNzI3MGI2Nj9peGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1YeDhiR2xpY21GeWVYeGxibnd3Zkh3d2ZIdyUzRCZpeGxpYj1yYi0xLjIuMSZ3PTEwMDAmcT04MCdcclxuICAgICAgY2VudGVyZWQgPSAndHJ1ZSdcclxuICAgICAgc3R5bGUgPSB7eyBtYXJnaW5Ub3A6ICcyMHB4JywgbWFyZ2luQm90OiAnMjBweCcgfX1cclxuICAgICAgcm91bmRlZCA9ICd0cnVlJ1xyXG4gICAgICBmbHVpZFxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRJbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IEJhY2tncm91bmRJbWFnZSBmcm9tICcuL0JhY2tncm91bmRJbWFnZSc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBhc3luY1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAJHtwcm9wcy52ZXJzaW9ucy5zdWl9L2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgICBhc3luY1xyXG4gICAgICAgICAgICBzcmM9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQCR7cHJvcHMudmVyc2lvbnMuc3VpfS9kaXN0L3NlbWFudGljLm1pbi5qc1wiXHJcbiAgICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcblxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBCYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrZ3JvdW5kSW1hZ2UnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5cclxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTZWdtZW50IGJhc2ljIHRleHRBbGlnbj17XCJjZW50ZXJcIn0+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaFJvdXRlKCcvbGlicmFyeScpfVxyXG4gICAgICAgICAgICBzaXplPSdodWdlJ1xyXG4gICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19XHJcbiAgICAgICAgICAgIGNvbG9yPSdibHVlJz5cclxuICAgICAgICAgICAgRW50ZXIgdGhlIGxpYnJhcnlcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuXHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiIsImNvbnN0IHJvdXRlcyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnbmV4dC1yb3V0ZXMnKSgpO1xyXG5cclxucm91dGVzXHJcbi5hZGQoJy9saWJyYXJ5JywgJy9saWJyYXJ5L2luZGV4JylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xyXG5cclxuLypcclxuLmFkZCgnbmFtZSBvZiB0aGUgbGluayBkaXNwbGF5ZWQgaW4gYnJvd3NlcicsICdwYWdlIGZpbGUgd2hpY2ggbG9hZHMnKVxyXG4qL1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==