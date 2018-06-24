'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRID12_GUTTERS = exports.GRID12_SIZES = exports.STEP = exports.UNIT = exports.BREAKPOINTS = exports.BREAKPOINT_KEYS = undefined;

var _breakpoint = require('./breakpoint');

Object.defineProperty(exports, 'BREAKPOINT_KEYS', {
  enumerable: true,
  get: function get() {
    return _breakpoint.BREAKPOINT_KEYS;
  }
});
Object.defineProperty(exports, 'BREAKPOINTS', {
  enumerable: true,
  get: function get() {
    return _breakpoint.BREAKPOINTS;
  }
});

var _grid12Column = require('./grid12Column');

var grid12Column = _interopRequireWildcard(_grid12Column);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var UNIT = exports.UNIT = 'px';
var STEP = exports.STEP = 5;

var GRID12_SIZES = exports.GRID12_SIZES = [].concat(_toConsumableArray(grid12Column.GRID_SIZES_DEFAULT), _toConsumableArray(grid12Column.GRID_SIZES));

var GRID12_GUTTERS = exports.GRID12_GUTTERS = grid12Column.GRID_GUTTERS;
//# sourceMappingURL=index.js.map