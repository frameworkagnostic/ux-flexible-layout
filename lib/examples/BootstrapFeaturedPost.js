'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootstrapFeaturedPost = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _imageBase = require('./image-base64.json');

var _cssModules = require('../../dist/grid-12-column/css-modules.css');

var _cssModules2 = _interopRequireDefault(_cssModules);

var _examples = require('./examples.css');

var _examples2 = _interopRequireDefault(_examples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classNames = {
  root: (0, _classnames2.default)(_cssModules2.default.gridXs6, _cssModules2.default.container, _examples2.default.purple50),
  contentCont: (0, _classnames2.default)(_cssModules2.default.gridXs8, _cssModules2.default.box, _examples2.default.purple100, _examples2.default.root),
  imageCont: (0, _classnames2.default)(_cssModules2.default.gridXs4, _cssModules2.default.box, _examples2.default.purple200, _examples2.default.root, _cssModules2.default.flex),
  image: (0, _classnames2.default)(_cssModules2.default.alignSelfCenter)
};

var BootstrapFeaturedPost = exports.BootstrapFeaturedPost = function BootstrapFeaturedPost() {
  return _react2.default.createElement(
    'div',
    { className: classNames.root },
    _react2.default.createElement(
      'div',
      { className: classNames.contentCont },
      _react2.default.createElement(
        'span',
        null,
        'World'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Featured post'
      ),
      _react2.default.createElement(
        'h4',
        null,
        'Nov 12'
      ),
      _react2.default.createElement(
        'p',
        null,
        'This is a wider card with supporting text below as a natural lead-in to additional content.'
      ),
      _react2.default.createElement(
        'a',
        { href: '#' },
        'Continue reading'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classNames.imageCont },
      _react2.default.createElement('img', {
        className: classNames.image,
        src: _imageBase.imgSrc })
    )
  );
};
//# sourceMappingURL=BootstrapFeaturedPost.js.map