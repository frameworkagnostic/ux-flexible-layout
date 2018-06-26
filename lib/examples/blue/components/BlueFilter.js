'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlueFilter = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _cssModules = require('../../../../dist/grid-12-column/css-modules.css');

var _cssModules2 = _interopRequireDefault(_cssModules);

var _BlueFilter = require('./BlueFilter.css');

var _BlueFilter2 = _interopRequireDefault(_BlueFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classNames = {
  root: (0, _classnames2.default)(_cssModules2.default.container),
  filter: (0, _classnames2.default)(_cssModules2.default.container, _BlueFilter2.default.filter),
  filterItems: (0, _classnames2.default)(_cssModules2.default.gridXs2, _BlueFilter2.default.filterItems)
};

var BlueFilter = exports.BlueFilter = function BlueFilter() {
  return _react2.default.createElement(
    'div',
    { className: classNames.filter },
    _react2.default.createElement(
      'div',
      { className: classNames.filterItems },
      'Item #1'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.filterItems },
      'Item #2'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.filterItems },
      'Item #3'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.filterItems },
      'Item #4'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.filterItems },
      'Item #5'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.filterItems },
      'Item #6'
    )
  );
};
//# sourceMappingURL=BlueFilter.js.map