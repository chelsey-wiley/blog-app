'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('English component');
(function () {
  var HeaderComponent = function (_React$Component) {
    _inherits(HeaderComponent, _React$Component);

    function HeaderComponent() {
      _classCallCheck(this, HeaderComponent);

      return _possibleConstructorReturn(this, (HeaderComponent.__proto__ || Object.getPrototypeOf(HeaderComponent)).apply(this, arguments));
    }

    _createClass(HeaderComponent, [{
      key: 'render',
      value: function render() {

        return React.createElement(
          'div',
          { className: 'div-head' },
          React.createElement(
            'nav',
            null,
            React.createElement(
              'div',
              null,
              React.createElement(
                ReactRouter.Link,
                { to: '/Blog' },
                'Blog'
              )
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                ReactRouter.Link,
                { to: '/Extra' },
                'Extra'
              )
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                'Home'
              )
            )
          )
        );
      }
    }]);

    return HeaderComponent;
  }(React.Component);

  MR.HeaderComponent = HeaderComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('home component');
(function () {
  var HomeComponent = function (_React$Component) {
    _inherits(HomeComponent, _React$Component);

    function HomeComponent() {
      _classCallCheck(this, HomeComponent);

      return _possibleConstructorReturn(this, (HomeComponent.__proto__ || Object.getPrototypeOf(HomeComponent)).apply(this, arguments));
    }

    _createClass(HomeComponent, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(
            "header",
            null,
            React.createElement(MR.HeaderComponent, null)
          ),
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "h1",
              { className: "home-header" },
              "Home"
            )
          )
        );
      }
    }]);

    return HomeComponent;
  }(React.Component);

  MR.HomeComponent = HomeComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('Blog component');
(function () {
  var Blog = function (_React$Component) {
    _inherits(Blog, _React$Component);

    function Blog() {
      _classCallCheck(this, Blog);

      return _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).apply(this, arguments));
    }

    _createClass(Blog, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(MR.HeaderComponent, null),
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "h1",
              null,
              "Blog"
            ),
            React.createElement(
              "p",
              null,
              "Blog stuff goes here"
            )
          ),
          React.createElement(MR.FirstPost, null)
        );
      }
    }]);

    return Blog;
  }(React.Component);

  MR.Blog = Blog;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('Blog component');
(function () {
  var Extra = function (_React$Component) {
    _inherits(Extra, _React$Component);

    function Extra() {
      _classCallCheck(this, Extra);

      return _possibleConstructorReturn(this, (Extra.__proto__ || Object.getPrototypeOf(Extra)).apply(this, arguments));
    }

    _createClass(Extra, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(MR.HeaderComponent, null),
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "h1",
              null,
              "Empty Component"
            ),
            React.createElement(
              "p",
              null,
              "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
            )
          )
        );
      }
    }]);

    return Extra;
  }(React.Component);

  MR.Extra = Extra;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('Blog component');
(function () {
  var FirstPost = function (_React$Component) {
    _inherits(FirstPost, _React$Component);

    function FirstPost() {
      _classCallCheck(this, FirstPost);

      return _possibleConstructorReturn(this, (FirstPost.__proto__ || Object.getPrototypeOf(FirstPost)).apply(this, arguments));
    }

    _createClass(FirstPost, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "post" },
          React.createElement(
            "h1",
            null,
            "First Post"
          ),
          React.createElement(
            "p",
            null,
            "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
          )
        );
      }
    }]);

    return FirstPost;
  }(React.Component);

  MR.FirstPost = FirstPost;
})();
'use strict';

if (window.MR === undefined) {
  window.MR = {};
}

(function () {
  console.log('routerjs');

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var router = React.createElement(
    Router,
    { history: ReactRouter.hashHistory },
    React.createElement(Route, { path: '/', component: MR.HomeComponent }),
    React.createElement(Route, { path: '/SignLanguageRecordingComponent', component: MR.SignLanguageRecordingComponent }),
    React.createElement(Route, { path: '/YoutubeComponent', component: MR.YoutubeComponent }),
    React.createElement(Route, { path: '/EnglishComponent', component: MR.EnglishComponent }),
    React.createElement(Route, { path: '/EnglishRecordingComponent', component: MR.EnglishRecordingComponent }),
    React.createElement(Route, { path: '/AboutComponent', component: MR.AboutComponent }),
    React.createElement(Route, { path: '/Blog', component: MR.Blog }),
    React.createElement(Route, { path: '/Extra', component: MR.Extra }),
    React.createElement(Route, { path: '/FirstPost', component: MR.FirstPost })
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
