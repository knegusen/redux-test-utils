/******/
(function (modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/
    if (installedModules[moduleId])
    /******/      return installedModules[moduleId].exports;
    /******/
    /******/ 		// Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/      exports: {},
      /******/      id: moduleId,
      /******/      loaded: false
      /******/
    };
    /******/
    /******/ 		// Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/
    module.loaded = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/
    return module.exports;
    /******/
  }

  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ 	// __webpack_public_path__
  /******/
  __webpack_require__.p = "";
  /******/
  /******/ 	// Load entry module and return exports
  /******/
  return __webpack_require__(0);
  /******/
})
/************************************************************************/
/******/([
  /* 0 */
  /***/ function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__(1);


    /***/
  },
  /* 1 */
  /***/ function (module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _StoreMock = __webpack_require__(2);

    Object.defineProperty(exports, 'createMockStore', {
      enumerable: true,
      get: function get() {
        return _StoreMock.createMockStore;
      }
    });

    /***/
  },
  /* 2 */
  /***/ function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createMockStore = exports.emptyStore = undefined;

    var _DispatchMock = __webpack_require__(3);

    var emptyStore = exports.emptyStore = function emptyStore() {
      return {
        getState: function getState() {
          return {};
        },
        subscribe: function subscribe() {
        }
      };
    };

    var createMockStore = exports.createMockStore = function createMockStore() {
      var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var dispatchMock = (0, _DispatchMock.createMock)();

      return {
        getState: function getState() {
          return state;
        },
        subscribe: function subscribe() {
        },

        dispatch: dispatchMock.dispatch,
        getActions: dispatchMock.getActions,
        getAction: dispatchMock.getAction,
        isActionDispatched: dispatchMock.isActionDispatched,
        isActionTypeDispatched: dispatchMock.isActionTypeDispatched
      };
    };

    /***/
  },
  /* 3 */
  /***/ function (module, exports) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

    var createMock = exports.createMock = function createMock() {
      var actions = [];
      return {
        dispatch: function dispatch(action) {
          actions.push(action);
        },
        getActions: function getActions() {
          return actions;
        },
        getAction: function getAction(type) {
          for (var i = 0; i < actions.length; i++) {
            if (actions[i].type === type) {
              return actions[i];
            }
          }
          return undefined;
        },
        isActionTypeDispatched: function isActionTypeDispatched(type) {
          for (var i = 0; i < actions.length; i++) {
            if (actions[i].type === type) {
              return true;
            }
          }
          return false;
        },
        isActionDispatched: function isActionDispatched(action) {
          var _loop = function _loop(i) {
            if (actions[i].type === action.type) {
              var equalActions = true;
              Object.keys(action).forEach(function (key) {
                if (actions[i][key] !== action[key]) {
                  equalActions = false;
                }
              });
              if (equalActions) {
                return {
                  v: true
                };
              }
            }
          };

          for (var i = 0; i < actions.length; i++) {
            var _ret = _loop(i);

            if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
          }
          return false;
        }
      };
    };

    /***/
  }
  /******/]);
//# sourceMappingURL=index.js.map