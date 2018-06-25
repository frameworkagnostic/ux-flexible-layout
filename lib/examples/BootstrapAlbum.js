'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootstrapAlbum = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapAlbumCard = require('./BootstrapAlbumCard');

var _cssModules = require('../../dist/grid-12-column/css-modules.css');

var _cssModules2 = _interopRequireDefault(_cssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var divProps = {
  style: {
    backgroundColor: 'lightblue',
    margin: '5px 2px'
  }
};

var BootstrapAlbum = exports.BootstrapAlbum = function BootstrapAlbum() {
  return _react2.default.createElement(
    'div',
    { className: _cssModules2.default.container },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_cssModules2.default.gridXs12) },
      _react2.default.createElement(
        'center',
        { style: _extends({}, divProps.style, { height: '56px' }) },
        'Navigation'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_cssModules2.default.gridXs12) },
      _react2.default.createElement(
        'center',
        { style: _extends({}, divProps.style, { height: '370px' }) },
        'jumbotron'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_cssModules2.default.gridXs12, _cssModules2.default.gridSm4) },
      _react2.default.createElement(_BootstrapAlbumCard.BootstrapAlbumCard, null)
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_cssModules2.default.gridXs12, _cssModules2.default.gridSm4) },
      _react2.default.createElement(_BootstrapAlbumCard.BootstrapAlbumCard, null)
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_cssModules2.default.gridXs12, _cssModules2.default.gridSm4) },
      _react2.default.createElement(_BootstrapAlbumCard.BootstrapAlbumCard, null)
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_cssModules2.default.gridXs12) },
      _react2.default.createElement(
        'center',
        { style: _extends({}, divProps.style, { height: '152px' }) },
        'footer'
      )
    )
  );
};
//# sourceMappingURL=BootstrapAlbum.js.map