'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlueNavigation = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _cssModules = require('../../../../dist/grid-12-column/css-modules.css');

var _cssModules2 = _interopRequireDefault(_cssModules);

var _BlueNavigation = require('./BlueNavigation.css');

var _BlueNavigation2 = _interopRequireDefault(_BlueNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classNames = {
  root: (0, _classnames2.default)(_cssModules2.default.container),
  navigation: (0, _classnames2.default)(_cssModules2.default.container),
  navigationItemsLeft: (0, _classnames2.default)(_cssModules2.default.gridXs2),
  navigationItemsRight: (0, _classnames2.default)(_cssModules2.default.gridXs6, _BlueNavigation2.default.navigationItemsRight)
};

var BlueNavigation = exports.BlueNavigation = function BlueNavigation() {
  return _react2.default.createElement(
    'div',
    { className: classNames.navigation },
    _react2.default.createElement(
      'div',
      { className: classNames.navigationItemsLeft },
      'Item #1'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.navigationItemsLeft },
      'Item #2'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.navigationItemsLeft },
      'Item #3'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.navigationItemsRight },
      'Item #4'
    )
  );
};
//# sourceMappingURL=BlueNavigation.js.map