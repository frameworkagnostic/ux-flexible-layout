'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var generateGutter = exports.generateGutter = function generateGutter(breakpoint, gutters) {
  var styles = {};

  gutters.forEach(function (spacing, index) {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles['spacing-' + breakpoint + '-' + spacing] = {
      margin: -spacing / 2,
      width: 'calc(100% + ' + spacing + 'px)',
      '& > $item': {
        padding: spacing / 2
      }
    };
  });

  return styles;
};
//# sourceMappingURL=generateGutter.js.map