'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.generateGrid = generateGrid;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function generateGrid(gridSizes, nextBreakpointUp, breakpoint) {
  var styles = {};

  gridSizes.forEach(function (size) {
    var key = 'grid-' + breakpoint + '-' + size;

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    }

    // Only keep 6 significant numbers.
    var width = Math.round(size / 12 * 10e6) / 10e4 + '%';

    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  });

  return styles;
}

var generateGridReducer = exports.generateGridReducer = function generateGridReducer(gridSizes, nextBreakpointUp) {
  return function (accumulator, breakpoint) {
    var styles = generateGrid(gridSizes, nextBreakpointUp, breakpoint);

    if (breakpoint === 'xs') {
      return _extends({}, accumulator, styles);
    } else {
      return _extends({}, accumulator, _defineProperty({}, nextBreakpointUp(breakpoint), styles));
    }
  };
};
//# sourceMappingURL=generateGridStyles.js.map