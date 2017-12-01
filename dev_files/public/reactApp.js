define('src/reactApp.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _react = require('node_modules/react/index');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _area = require('share/area');
  
  var _area2 = _interopRequireDefault(_area);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var App = function (_React$Component) {
  	_inherits(App, _React$Component);
  
  	function App(props) {
  		_classCallCheck(this, App);
  
  		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  
  		_this.state = {
  			message: 'hello fis3 react',
  			count: 0
  		};
  		return _this;
  	}
  
  	_createClass(App, [{
  		key: 'componentDidMount',
  		value: function componentDidMount() {
  			var _this2 = this;
  
  			setInterval(function () {
  				_this2.setState({
  					count: _this2.state.count + 1
  				});
  			}, 1e3);
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			return _react2.default.createElement(
  				'div',
  				null,
  				this.state.message,
  				', ',
  				this.state.count,
  				_area2.default.map(function (a) {
  					return _react2.default.createElement(
  						'p',
  						{ key: a.name },
  						a.name
  					);
  				})
  			);
  		}
  	}]);
  
  	return App;
  }(_react2.default.Component);
  
  exports.default = App;

});
