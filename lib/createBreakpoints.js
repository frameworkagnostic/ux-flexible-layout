'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keys = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createBreakpoints = createBreakpoints;

var _index = require('./constants/index');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.

var keys = exports.keys = _index.BREAKPOINT_KEYS;

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints() {
  var breakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === undefined ? _index.BREAKPOINTS : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === undefined ? _index.UNIT : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === undefined ? _index.STEP : _breakpoints$step,
      other = _objectWithoutProperties(breakpoints, ['values', 'unit', 'step']);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return '@media (min-width:' + value + unit + ')';
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return '@media (max-width:' + (value - step) / 100 + unit + ')';
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return '@media (min-width:' + values[start] + unit + ') and ' + ('(max-width:' + (values[keys[endIndex]] - step) / 100 + unit + ')');
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return _extends({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}
//# sourceMappingURL=createBreakpoints.js.map