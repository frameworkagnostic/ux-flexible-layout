'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateStyles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _flexboxInlineStyles = require('./flexboxInlineStyles');

var _generateGutter = require('./generateGutter');

var _generateGridStyles = require('./generateGridStyles');

var _createBreakpoints2 = require('./createBreakpoints');

var _constants = require('./constants');

var generateStyles = exports.generateStyles = function generateStyles() {
  var grids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.GRID12_SIZES;
  var gutters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.GRID12_GUTTERS;

  var _createBreakpoints = (0, _createBreakpoints2.createBreakpoints)(),
      up = _createBreakpoints.up;

  return _extends({}, _flexboxInlineStyles.flexboxInlineStyles, gutters ? (0, _generateGutter.generateGutter)('xs', gutters) : {}, _createBreakpoints2.keys.reduce((0, _generateGridStyles.generateGridReducer)(grids, up), {}));
};
//# sourceMappingURL=generateStyles.js.map