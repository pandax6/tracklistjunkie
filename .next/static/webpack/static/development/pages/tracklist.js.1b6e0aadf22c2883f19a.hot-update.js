webpackHotUpdate("static\\development\\pages\\tracklist.js",{

/***/ "./pages/tracklist.js":
/*!****************************!*\
  !*** ./pages/tracklist.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tracklist; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Tracklist =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tracklist, _React$Component);

  _createClass(Tracklist, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, query, params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query, params = _ref.params;

                if (!req) {
                  _context.next = 9;
                  break;
                }

                _context.prev = 2;
                return _context.abrupt("return", {
                  query: req.query,
                  params: req.params
                });

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", {
                  query: req.query,
                  params: req.params
                });

              case 9:
                return _context.abrupt("return", {
                  query: query,
                  params: params
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 6]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function Tracklist(props) {
    var _this;

    _classCallCheck(this, Tracklist);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tracklist).call(this, props));
    _this.state = {
      tracklistjunkie: {},
      key: ""
    };
    return _this;
  }

  _createClass(Tracklist, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var ref = firebase.firestore().collection("tracklistjunkie").doc(this.props.params.id);
      ref.get().then(function (doc) {
        if (doc.exists) {
          _this2.setState({
            tracklistjunkie: doc.data(),
            key: doc.id,
            isLoading: false
          });
        } else {
          console.log("no data");
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "panel panel-default"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "panel-heading"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        href: "/"
      }, "Board List")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "panel-title"
      }, this.state.tracklistjunkie.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "panel-body"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "url:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null, this.state.tracklistjunkie.url), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "Author:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null, this.state.tracklistjunkie.timestamp)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        href: "/edit/".concat(this.state.key),
        className: "btn btn-success"
      }, "Edit"), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.delete.bind(this, this.state.key),
        className: "btn btn-danger"
      }, "Delete"))))));
    }
  }]);

  return Tracklist;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/tracklist")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=tracklist.js.1b6e0aadf22c2883f19a.hot-update.js.map