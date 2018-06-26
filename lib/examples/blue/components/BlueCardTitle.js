'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlueCardTitle = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _cssModules = require('../../../../dist/grid-12-column/css-modules.css');

var _cssModules2 = _interopRequireDefault(_cssModules);

var _BlueCardTitle = require('./BlueCardTitle.css');

var _BlueCardTitle2 = _interopRequireDefault(_BlueCardTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classNames = {
  root: (0, _classnames2.default)(_cssModules2.default.container),
  image: (0, _classnames2.default)(_cssModules2.default.gridXs12),
  title: (0, _classnames2.default)(_cssModules2.default.gridXs12),
  offers: (0, _classnames2.default)(_cssModules2.default.gridXs12),
  annualFees: (0, _classnames2.default)(_cssModules2.default.gridXs12),
  buttons: (0, _classnames2.default)(_cssModules2.default.gridXs12)
};

var BlueCardTitle = exports.BlueCardTitle = function BlueCardTitle() {
  return _react2.default.createElement(
    'div',
    { className: classNames.root },
    _react2.default.createElement(
      'div',
      { className: classNames.image },
      'image'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.title },
      'title'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.offers },
      'offers'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.annualFees },
      'annualFees'
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.buttons },
      'buttons'
    )
  );
};
//# sourceMappingURL=BlueCardTitle.js.map