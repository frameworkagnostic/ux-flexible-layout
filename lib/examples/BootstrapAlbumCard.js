'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootstrapAlbumCard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cssModules = require('../../dist/grid-12-column/css-modules.css');

var _cssModules2 = _interopRequireDefault(_cssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imageProps = {
  style: {
    backgroundColor: '#cdcdcd'
  }
};

var divProps = {
  style: {
    backgroundColor: 'lightblue',
    marginBottom: '10px'
  }
};

var BootstrapAlbumCard = exports.BootstrapAlbumCard = function BootstrapAlbumCard() {
  return _react2.default.createElement(
    'div',
    { className: _cssModules2.default.container },
    _react2.default.createElement(
      'div',
      { className: _cssModules2.default.gridXs12 },
      _react2.default.createElement(
        'center',
        { style: _extends({}, imageProps.style, { height: '225px' }) },
        'Image'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _cssModules2.default.gridXs12 },
      _react2.default.createElement(
        'center',
        { style: _extends({}, divProps.style, { height: '159px' }) },
        'Button'
      )
    )
  );
};
//# sourceMappingURL=BootstrapAlbumCard.js.map