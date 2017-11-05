/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component2 = _interopRequireDefault(__webpack_require__(1));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(LocationComponent, _Component);

  function LocationComponent(owner, level, x, y) {
    var _this;

    _classCallCheck(this, LocationComponent);

    _this = _possibleConstructorReturn(this, (LocationComponent.__proto__ || Object.getPrototypeOf(LocationComponent)).call(this, owner));
    _this.level = level;
    _this.x = x;
    _this.y = y;
    return _this;
  }

  return LocationComponent;
}(_Component2.default);

exports.default = LocationComponent;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component =
/*#__PURE__*/
function () {
  function Component(owner) {
    _classCallCheck(this, Component);

    this.owner = owner;
  }

  _createClass(Component, [{
    key: "update",
    value: function update() {}
  }]);

  return Component;
}();

exports.default = Component;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component2 = _interopRequireDefault(__webpack_require__(1));

var _LocationComponent = _interopRequireDefault(__webpack_require__(0));

var renderer = _interopRequireWildcard(__webpack_require__(5));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(RendererComponent, _Component);

  function RendererComponent(owner, char) {
    var _this;

    var fgColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';
    var bgColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'black';

    _classCallCheck(this, RendererComponent);

    _this = _possibleConstructorReturn(this, (RendererComponent.__proto__ || Object.getPrototypeOf(RendererComponent)).call(this, owner));
    Object.assign(_this, {
      char: char,
      fgColor: fgColor,
      bgColor: bgColor
    });
    return _this;
  }

  _createClass(RendererComponent, [{
    key: "update",
    value: function update() {
      var char = this.char,
          fgColor = this.fgColor,
          bgColor = this.bgColor;
      var location = this.owner.getComponent(_LocationComponent.default);
      if (!location) return;
      renderer.drawCell(location.x, location.y, char, fgColor, bgColor);
    }
  }]);

  return RendererComponent;
}(_Component2.default);

exports.default = RendererComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject =
/*#__PURE__*/
function () {
  function GameObject(components) {
    _classCallCheck(this, GameObject);

    this.components = [];
    GameObject.gameObjects.push(this);
  }

  _createClass(GameObject, [{
    key: "addComponent",
    value: function addComponent(component) {
      component.owner = this;
      this.components.push(component);
    }
  }, {
    key: "addComponents",
    value: function addComponents(components) {
      var _this = this;

      components.forEach(function (component) {
        return _this.addComponent(component);
      });
    }
  }, {
    key: "getComponent",
    value: function getComponent(componentConstructor) {
      return this.components.filter(function (component) {
        return component instanceof componentConstructor;
      })[0];
    }
  }, {
    key: "update",
    value: function update() {
      this.components.forEach(function (component) {
        if (!component.update) console.log(component);
        component.update();
      });
    }
  }]);

  return GameObject;
}();

exports.default = GameObject;
GameObject.gameObjects = [];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component2 = _interopRequireDefault(__webpack_require__(1));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColliderComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ColliderComponent, _Component);

  function ColliderComponent(owner, enabled) {
    var _this;

    _classCallCheck(this, ColliderComponent);

    _this = _possibleConstructorReturn(this, (ColliderComponent.__proto__ || Object.getPrototypeOf(ColliderComponent)).call(this, owner));
    _this.enabled = enabled;
    return _this;
  }

  return ColliderComponent;
}(_Component2.default);

exports.default = ColliderComponent;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.drawCell = drawCell;

var _constants = __webpack_require__(6);

var cells;

function init() {
  var gameContainer = document.getElementById('game');
  Object.assign(gameContainer.style, {
    width: _constants.GAME_WIDTH * _constants.CELL_WIDTH,
    height: _constants.GAME_HEIGHT * _constants.CELL_HEIGHT,
    backgroundColor: 'black',
    fontFamily: 'Courier',
    position: 'absolute',
    fontSize: "".concat(_constants.FONT_SIZE, "px"),
    textAlign: 'center'
  });
  cells = {};

  for (var x = 0; x < _constants.GAME_WIDTH; x++) {
    for (var y = 0; y < _constants.GAME_HEIGHT; y++) {
      var cell = cells["".concat(x, ",").concat(y)] = document.createElement('div');
      Object.assign(cell.style, {
        width: _constants.CELL_WIDTH,
        height: _constants.CELL_HEIGHT,
        backgroundColor: 'black',
        color: 'white',
        position: 'absolute',
        left: x * _constants.CELL_WIDTH,
        top: y * _constants.CELL_HEIGHT,
        padding: "".concat(_constants.CELL_PADDING, "px")
      });
      cell.innerHTML = '.';
      gameContainer.appendChild(cell);
    }
  }
}

function drawCell(x, y, char, fgColor, bgColor) {
  var cell = cells["".concat(x, ",").concat(y)];
  Object.assign(cell.style, {
    color: fgColor,
    backgroundColor: bgColor
  });
  cell.innerHTML = char;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FONT_SIZE = exports.CELL_PADDING = exports.CELL_HEIGHT = exports.CELL_WIDTH = exports.GAME_HEIGHT = exports.GAME_WIDTH = void 0;
var GAME_WIDTH = 80;
exports.GAME_WIDTH = GAME_WIDTH;
var GAME_HEIGHT = 24;
exports.GAME_HEIGHT = GAME_HEIGHT;
var CELL_WIDTH = 17;
exports.CELL_WIDTH = CELL_WIDTH;
var CELL_HEIGHT = 24;
exports.CELL_HEIGHT = CELL_HEIGHT;
var CELL_PADDING = 3;
exports.CELL_PADDING = CELL_PADDING;
var FONT_SIZE = 22;
exports.FONT_SIZE = FONT_SIZE;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomRange = randomRange;
exports.randomDirection = randomDirection;

function randomRange(range) {
  return Math.round(Math.random() * range);
}

function randomDirection() {
  var x = randomRange(2) - 1;
  var y = randomRange(2) - 1;
  return {
    x: x,
    y: y
  };
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component2 = _interopRequireDefault(__webpack_require__(1));

var _LocationComponent = _interopRequireDefault(__webpack_require__(0));

var _ColliderComponent = _interopRequireDefault(__webpack_require__(4));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocomotionComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(LocomotionComponent, _Component);

  function LocomotionComponent() {
    _classCallCheck(this, LocomotionComponent);

    return _possibleConstructorReturn(this, (LocomotionComponent.__proto__ || Object.getPrototypeOf(LocomotionComponent)).apply(this, arguments));
  }

  _createClass(LocomotionComponent, [{
    key: "move",
    value: function move(dx, dy) {
      var location = this.owner.getComponent(_LocationComponent.default);
      var collider = this.owner.getComponent(_ColliderComponent.default);
      var x = location.x + dx;
      var y = location.y + dy;
      var previousTile = location.level.getTile(location.x, location.y);
      var tile = location.level.getTile(x, y);
      var tileCollider = tile.getComponent(_ColliderComponent.default);

      if (collider && collider.enabled && tileCollider && tileCollider.enabled) {
        return false;
      }

      location.x = x;
      location.y = y;
      this.owner.update();
      previousTile.update();
      return true;
    }
  }]);

  return LocomotionComponent;
}(_Component2.default);

exports.default = LocomotionComponent;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GameObject2 = _interopRequireDefault(__webpack_require__(3));

var _LocationComponent = _interopRequireDefault(__webpack_require__(0));

var _LocomotionComponent = _interopRequireDefault(__webpack_require__(8));

var _RendererComponent = _interopRequireDefault(__webpack_require__(2));

var _ColliderComponent = _interopRequireDefault(__webpack_require__(4));

var _BodyComponent = _interopRequireDefault(__webpack_require__(10));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Actor =
/*#__PURE__*/
function (_GameObject) {
  _inherits(Actor, _GameObject);

  function Actor(level, x, y) {
    var _this;

    _classCallCheck(this, Actor);

    _this = _possibleConstructorReturn(this, (Actor.__proto__ || Object.getPrototypeOf(Actor)).call(this));

    _this.addComponents([new _LocationComponent.default(_this, level, x, y), new _LocomotionComponent.default(_this), new _RendererComponent.default(_this, '@', 'white'), new _ColliderComponent.default(_this, true), new _BodyComponent.default(_this, 10)]);

    return _this;
  }

  return Actor;
}(_GameObject2.default);

exports.default = Actor;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component2 = _interopRequireDefault(__webpack_require__(1));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BodyComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(BodyComponent, _Component);

  function BodyComponent(owner, hp) {
    var _this;

    _classCallCheck(this, BodyComponent);

    _this = _possibleConstructorReturn(this, (BodyComponent.__proto__ || Object.getPrototypeOf(BodyComponent)).call(this, owner));
    _this.hp = hp;
    return _this;
  }

  return BodyComponent;
}(_Component2.default);

exports.default = BodyComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tick = tick;

var _LocationComponent = _interopRequireDefault(__webpack_require__(0));

var input = _interopRequireWildcard(__webpack_require__(12));

var renderer = _interopRequireWildcard(__webpack_require__(5));

var _Level = _interopRequireDefault(__webpack_require__(13));

var _Player = _interopRequireDefault(__webpack_require__(16));

var _Monster = _interopRequireDefault(__webpack_require__(18));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentLevel;
var monsters = [];

function init() {
  console.log('Initializing game');
  input.init();
  renderer.init();
  currentLevel = new _Level.default(1);
  var location = currentLevel.getTileByType('floor').getComponent(_LocationComponent.default);
  var player = new _Player.default(currentLevel, location.x, location.y);
  player.update();

  for (var i = 0; i < 40; i++) {
    var monsterLocation = currentLevel.getTileByType('floor').getComponent(_LocationComponent.default);
    var monster = new _Monster.default('kobold', currentLevel, monsterLocation.x, monsterLocation.y);
    monster.update();
    monsters.push(monster);
  }
}

function tick() {
  console.log('Game tick');
  monsters.forEach(function (monster) {
    return monster.tick();
  });
}

init();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindKeyListener = bindKeyListener;
exports.unbindKeyListener = unbindKeyListener;
exports.init = init;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var keysByCode = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

for (var letter = 65; letter < 91; letter++) {
  keysByCode[letter] = String.fromCharCode(letter).toLowerCase();
}

var keysByName = Object.keys(keysByCode).reduce(function (acc, code) {
  return Object.assign(acc, _defineProperty({}, keysByCode[code], code));
}, {});
var listeners = {
  up: {},
  down: {}
};

function bindKeyListener(direction, key, listener) {
  var directionListeners = listeners[direction];
  var which = keysByName[key];

  if (directionListeners[which]) {
    directionListeners[which].push(listener);
  } else {
    directionListeners[which] = [listener];
  }
}

function unbindKeyListener(direction, key, listener) {
  var which = keysByName[key];
  var directionListeners = listeners[direction][which];
  directionListeners.splice(directionListeners.indexOf(listener), 1);
}

function callListeners(direction, event) {
  if (event) event.preventDefault();
  var directionListeners = listeners[direction][event.which];
  if (directionListeners) directionListeners.forEach(function (listener) {
    return listener();
  });
}

function init() {
  document.addEventListener('keydown', callListeners.bind(null, 'down'));
  document.addEventListener('keyup', callListeners.bind(null, 'up'));
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GameObject2 = _interopRequireDefault(__webpack_require__(3));

var _constants = __webpack_require__(6);

var _Math = __webpack_require__(7);

var _map = __webpack_require__(14);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Level =
/*#__PURE__*/
function (_GameObject) {
  _inherits(Level, _GameObject);

  function Level(level) {
    var _this;

    _classCallCheck(this, Level);

    _this = _possibleConstructorReturn(this, (Level.__proto__ || Object.getPrototypeOf(Level)).call(this));
    _this.level = level;
    _this.width = _constants.GAME_WIDTH;
    _this.height = _constants.GAME_HEIGHT;
    _this.tiles = {};

    _this.generate();

    return _this;
  }

  _createClass(Level, [{
    key: "generate",
    value: function generate() {
      (0, _map.fillRandom)(this);
      (0, _map.createPermawall)(this);
    }
  }, {
    key: "getTile",
    value: function getTile(x, y) {
      return this.tiles["".concat(x, ",").concat(y)];
    }
  }, {
    key: "getTileByType",
    value: function getTileByType(type) {
      var x;
      var y;
      var tile;

      while (!tile || tile.type !== type) {
        x = (0, _Math.randomRange)(this.width);
        y = (0, _Math.randomRange)(this.height);
        tile = this.getTile(x, y);
      }

      return tile;
    }
  }]);

  return Level;
}(_GameObject2.default);

exports.default = Level;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fillRandom = fillRandom;
exports.createPermawall = createPermawall;

var _Tile = _interopRequireDefault(__webpack_require__(15));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fillRandom(level) {
  for (var x = 0; x < level.width; x++) {
    for (var y = 0; y < level.height; y++) {
      var tile = level.tiles["".concat(x, ",").concat(y)] = new _Tile.default(level, x, y, Math.random() > 0.8 ? 'wall' : 'floor');
      tile.update();
    }
  }
}

function createPermawall(level) {
  for (var x = 0; x < level.width; x++) {
    level.getTile(x, 0).type = 'wall';
    level.getTile(x, level.height - 1).type = 'wall';
  }

  for (var y = 0; y < level.height; y++) {
    level.getTile(0, y).type = 'wall';
    level.getTile(level.width - 1, y).type = 'wall';
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GameObject2 = _interopRequireDefault(__webpack_require__(3));

var _LocationComponent = _interopRequireDefault(__webpack_require__(0));

var _RendererComponent = _interopRequireDefault(__webpack_require__(2));

var _ColliderComponent = _interopRequireDefault(__webpack_require__(4));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tileTypes = {
  'floor': {
    char: '.',
    fgColor: 'white',
    bgColor: 'black',
    walkable: true
  },
  'wall': {
    char: '#',
    fgColor: 'white',
    bgColor: 'black',
    walkable: false
  }
};

var Tile =
/*#__PURE__*/
function (_GameObject) {
  _inherits(Tile, _GameObject);

  function Tile(level, x, y, type) {
    var _this;

    _classCallCheck(this, Tile);

    _this = _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).call(this));

    _this.addComponents([new _LocationComponent.default(_this, level, x, y), new _RendererComponent.default(_this), new _ColliderComponent.default(_this)]);

    _this.type = type;
    return _this;
  }

  _createClass(Tile, [{
    key: "type",
    set: function set(_type) {
      this._type = _type;
      var _tileTypes$_type = tileTypes[_type],
          char = _tileTypes$_type.char,
          fgColor = _tileTypes$_type.fgColor,
          bgColor = _tileTypes$_type.bgColor,
          walkable = _tileTypes$_type.walkable;
      Object.assign(this.getComponent(_RendererComponent.default), {
        char: char,
        fgColor: fgColor,
        bgColor: bgColor
      });
      Object.assign(this.getComponent(_ColliderComponent.default), {
        enabled: !walkable
      });
      this.update();
    },
    get: function get() {
      return this._type;
    }
  }]);

  return Tile;
}(_GameObject2.default);

exports.default = Tile;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RendererComponent = _interopRequireDefault(__webpack_require__(2));

var _PlayerInputComponent = _interopRequireDefault(__webpack_require__(17));

var _Actor2 = _interopRequireDefault(__webpack_require__(9));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_typeof(undefined);

var Player =
/*#__PURE__*/
function (_Actor) {
  _inherits(Player, _Actor);

  function Player() {
    var _ref;

    var _this;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = Player.__proto__ || Object.getPrototypeOf(Player)).call.apply(_ref, [this].concat(args)));

    _this.addComponent(new _PlayerInputComponent.default(_this));

    _this.getComponent(_RendererComponent.default).fgColor = 'red';
    return _this;
  }

  return Player;
}(_Actor2.default);

exports.default = Player;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component2 = _interopRequireDefault(__webpack_require__(1));

var _LocationComponent = _interopRequireDefault(__webpack_require__(0));

var _LocomotionComponent = _interopRequireDefault(__webpack_require__(8));

var _input = __webpack_require__(12);

var _index = __webpack_require__(11);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerInputComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PlayerInputComponent, _Component);

  function PlayerInputComponent() {
    var _ref;

    var _this;

    _classCallCheck(this, PlayerInputComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = PlayerInputComponent.__proto__ || Object.getPrototypeOf(PlayerInputComponent)).call.apply(_ref, [this].concat(args)));

    var locomotor = _this.owner.getComponent(_LocationComponent.default);

    (0, _input.bindKeyListener)('down', 'left', _this.move.bind(_this, -1, 0));
    (0, _input.bindKeyListener)('down', 'up', _this.move.bind(_this, 0, -1));
    (0, _input.bindKeyListener)('down', 'right', _this.move.bind(_this, 1, 0));
    (0, _input.bindKeyListener)('down', 'down', _this.move.bind(_this, 0, 1));
    return _this;
  }

  _createClass(PlayerInputComponent, [{
    key: "move",
    value: function move(x, y) {
      var locomotor = this.owner.getComponent(_LocomotionComponent.default);
      var moved = locomotor.move(x, y);
      if (moved) (0, _index.tick)();
    }
  }]);

  return PlayerInputComponent;
}(_Component2.default);

exports.default = PlayerInputComponent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Actor2 = _interopRequireDefault(__webpack_require__(9));

var _RendererComponent = _interopRequireDefault(__webpack_require__(2));

var _BodyComponent = _interopRequireDefault(__webpack_require__(10));

var _monsterIntelligenceComponents = _interopRequireWildcard(__webpack_require__(19));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var monsterData = {
  kobold: {
    char: 'k',
    fgColor: 'green',
    ai: 'random',
    hp: 10
  }
};

var Monster =
/*#__PURE__*/
function (_Actor) {
  _inherits(Monster, _Actor);

  function Monster(type) {
    var _ref;

    var _this;

    _classCallCheck(this, Monster);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = Monster.__proto__ || Object.getPrototypeOf(Monster)).call.apply(_ref, [this].concat(args)));
    _this.type = type;
    var _monsterData$type = monsterData[type],
        char = _monsterData$type.char,
        fgColor = _monsterData$type.fgColor,
        ai = _monsterData$type.ai,
        hp = _monsterData$type.hp;
    Object.assign(_this.getComponent(_RendererComponent.default), {
      char: char,
      fgColor: fgColor
    });
    Object.assign(_this.getComponent(_BodyComponent.default), {
      hp: hp
    });

    _this.addComponent(new _monsterIntelligenceComponents.monsterIntelligenceComponents[ai]());

    return _this;
  }

  _createClass(Monster, [{
    key: "tick",
    value: function tick() {
      this.getComponent(_monsterIntelligenceComponents.default).tick();
    }
  }]);

  return Monster;
}(_Actor2.default);

exports.default = Monster;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monsterIntelligenceComponents = exports.default = void 0;

var _Component2 = _interopRequireDefault(__webpack_require__(1));

var _LocomotionComponent = _interopRequireDefault(__webpack_require__(8));

var _Math = __webpack_require__(7);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonsterIntelligenceComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(MonsterIntelligenceComponent, _Component);

  function MonsterIntelligenceComponent() {
    _classCallCheck(this, MonsterIntelligenceComponent);

    return _possibleConstructorReturn(this, (MonsterIntelligenceComponent.__proto__ || Object.getPrototypeOf(MonsterIntelligenceComponent)).apply(this, arguments));
  }

  _createClass(MonsterIntelligenceComponent, [{
    key: "tick",
    value: function tick() {}
  }]);

  return MonsterIntelligenceComponent;
}(_Component2.default);

exports.default = MonsterIntelligenceComponent;

var RandomMonsterIntelligence =
/*#__PURE__*/
function (_MonsterIntelligenceC) {
  _inherits(RandomMonsterIntelligence, _MonsterIntelligenceC);

  function RandomMonsterIntelligence() {
    _classCallCheck(this, RandomMonsterIntelligence);

    return _possibleConstructorReturn(this, (RandomMonsterIntelligence.__proto__ || Object.getPrototypeOf(RandomMonsterIntelligence)).apply(this, arguments));
  }

  _createClass(RandomMonsterIntelligence, [{
    key: "tick",
    value: function tick() {
      var _randomDirection = (0, _Math.randomDirection)(),
          x = _randomDirection.x,
          y = _randomDirection.y;

      this.owner.getComponent(_LocomotionComponent.default).move(x, y);
    }
  }]);

  return RandomMonsterIntelligence;
}(MonsterIntelligenceComponent);

var monsterIntelligenceComponents = {
  random: RandomMonsterIntelligence
};
exports.monsterIntelligenceComponents = monsterIntelligenceComponents;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map