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
          React.createElement(
            "header",
            null,
            React.createElement(MR.Header, null)
          ),
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h1",
              null,
              "Blog"
            )
          ),
          React.createElement(
            "div",
            { className: "blog-posts" },
            React.createElement(MR.FirstPost, null)
          ),
          React.createElement(MR.Footer, null)
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

(function () {
  var Contact = function (_React$Component) {
    _inherits(Contact, _React$Component);

    function Contact() {
      _classCallCheck(this, Contact);

      return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(
            "header",
            null,
            React.createElement(MR.Header, null)
          ),
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h1",
              null,
              "Contact"
            )
          ),
          React.createElement(
            "p",
            null,
            "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
          ),
          React.createElement(MR.Footer, null)
        );
      }
    }]);

    return Contact;
  }(React.Component);

  MR.Contact = Contact;
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
  var EmptyPage = function (_React$Component) {
    _inherits(EmptyPage, _React$Component);

    function EmptyPage() {
      _classCallCheck(this, EmptyPage);

      return _possibleConstructorReturn(this, (EmptyPage.__proto__ || Object.getPrototypeOf(EmptyPage)).apply(this, arguments));
    }

    _createClass(EmptyPage, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(MR.Header, null),
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

    return EmptyPage;
  }(React.Component);

  MR.EmptyPage = EmptyPage;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('post component');
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
            "div",
            { className: "post-body" },
            React.createElement(
              "h1",
              { className: "post-title" },
              "First Post"
            ),
            React.createElement(
              "h4",
              { className: "post-date" },
              "3.13.17"
            ),
            React.createElement("img", { className: "post-image", src: "img-placeholder.jpg" }),
            React.createElement(
              "p",
              { className: "post-summary" },
              "Post Summary Goes Here. This is a story, and it's a good story. It's about something really really stupendious. Something you have probably never heard of before. Bit it starts like this, a long time ago."
            ),
            React.createElement(
              "div",
              { className: "post-story" },
              React.createElement(
                "p",
                { className: "read-more" },
                "Read the full post..."
              ),
              React.createElement(
                "p",
                null,
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
              )
            )
          ),
          React.createElement(
            "div",
            { className: "post-sidebar" },
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Most Viewed"
              ),
              React.createElement(
                "li",
                null,
                " Most Commented"
              ),
              React.createElement(
                "li",
                null,
                " Most Shared"
              )
            )
          )
        );
      }
    }]);

    return FirstPost;
  }(React.Component);

  MR.FirstPost = FirstPost;
})();
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
  var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
      _classCallCheck(this, Footer);

      return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
      key: 'render',
      value: function render() {

        return React.createElement(
          'div',
          { className: 'footer' },
          React.createElement(
            'p',
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/' },
              'Kid\'s Cottage'
            ),
            ' | \u200BCopyright \xA9 2017'
          )
        );
      }
    }]);

    return Footer;
  }(React.Component);

  MR.Footer = Footer;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}

(function () {
  var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
      _classCallCheck(this, Header);

      return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "nav" },
          React.createElement(
            "ul",
            { className: "eyebrow" },
            React.createElement(
              "li",
              null,
              React.createElement(
                ReactRouter.Link,
                { to: '/Signin' },
                "Sign In"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                ReactRouter.Link,
                { to: '/Contact' },
                "Contact"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "nav-link" },
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: '/Blog' },
                  "Blog"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: '/Resources' },
                  "Resources"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: '/Parents' },
                  "Parents"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: '/Staff' },
                  "Staff"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: '/Programs' },
                  "Programs"
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/' },
              React.createElement("img", { className: "logo", src: "kids.png" })
            )
          )
        );
      }
    }]);

    return Header;
  }(React.Component);

  MR.Header = Header;
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
  var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
      _classCallCheck(this, Home);

      return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(
            "header",
            null,
            React.createElement(MR.Header, null)
          ),
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h1",
              null,
              "Home"
            )
          )
        );
      }
    }]);

    return Home;
  }(React.Component);

  MR.Home = Home;
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
  var Parents = function (_React$Component) {
    _inherits(Parents, _React$Component);

    function Parents() {
      _classCallCheck(this, Parents);

      return _possibleConstructorReturn(this, (Parents.__proto__ || Object.getPrototypeOf(Parents)).apply(this, arguments));
    }

    _createClass(Parents, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(
            "header",
            null,
            React.createElement(MR.Header, null)
          ),
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h1",
              null,
              "Parents"
            )
          ),
          React.createElement(
            "p",
            null,
            "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
          ),
          React.createElement(MR.Footer, null)
        );
      }
    }]);

    return Parents;
  }(React.Component);

  MR.Parents = Parents;
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
  var Programs = function (_React$Component) {
    _inherits(Programs, _React$Component);

    function Programs() {
      _classCallCheck(this, Programs);

      return _possibleConstructorReturn(this, (Programs.__proto__ || Object.getPrototypeOf(Programs)).apply(this, arguments));
    }

    _createClass(Programs, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(
            "header",
            null,
            React.createElement(MR.Header, null)
          ),
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h1",
              null,
              "Programs"
            )
          ),
          React.createElement(
            "p",
            null,
            "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
          ),
          React.createElement(MR.Footer, null)
        );
      }
    }]);

    return Programs;
  }(React.Component);

  MR.Programs = Programs;
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
  var Resources = function (_React$Component) {
    _inherits(Resources, _React$Component);

    function Resources() {
      _classCallCheck(this, Resources);

      return _possibleConstructorReturn(this, (Resources.__proto__ || Object.getPrototypeOf(Resources)).apply(this, arguments));
    }

    _createClass(Resources, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(
            "header",
            null,
            React.createElement(MR.Header, null)
          ),
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h1",
              null,
              "Resources"
            )
          ),
          React.createElement(
            "p",
            null,
            "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
          ),
          React.createElement(MR.Footer, null)
        );
      }
    }]);

    return Resources;
  }(React.Component);

  MR.Resources = Resources;
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
  var Signin = function (_React$Component) {
    _inherits(Signin, _React$Component);

    function Signin() {
      _classCallCheck(this, Signin);

      return _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).apply(this, arguments));
    }

    _createClass(Signin, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(
            "header",
            null,
            React.createElement(MR.Header, null)
          ),
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h1",
              null,
              "Sign In"
            )
          ),
          React.createElement(
            "p",
            null,
            "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
          ),
          React.createElement(MR.Footer, null)
        );
      }
    }]);

    return Signin;
  }(React.Component);

  MR.Signin = Signin;
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
  var Staff = function (_React$Component) {
    _inherits(Staff, _React$Component);

    function Staff() {
      _classCallCheck(this, Staff);

      return _possibleConstructorReturn(this, (Staff.__proto__ || Object.getPrototypeOf(Staff)).apply(this, arguments));
    }

    _createClass(Staff, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(
            "header",
            null,
            React.createElement(MR.Header, null)
          ),
          React.createElement(
            "div",
            { className: "title" },
            React.createElement(
              "h1",
              null,
              "Staff"
            )
          ),
          React.createElement(
            "p",
            null,
            "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
          ),
          React.createElement(MR.Footer, null)
        );
      }
    }]);

    return Staff;
  }(React.Component);

  MR.Staff = Staff;
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
    React.createElement(Route, { path: '/', component: MR.Home }),
    React.createElement(Route, { path: '/Blog', component: MR.Blog }),
    React.createElement(Route, { path: '/Resources', component: MR.Resources }),
    React.createElement(Route, { path: '/Parents', component: MR.Parents }),
    React.createElement(Route, { path: '/Programs', component: MR.Programs }),
    React.createElement(Route, { path: '/Staff', component: MR.Staff }),
    React.createElement(Route, { path: '/FirstPost', component: MR.FirstPost }),
    React.createElement(Route, { path: '/Signin', component: MR.Signin }),
    React.createElement(Route, { path: '/Contact', component: MR.Contact }),
    React.createElement(Route, { path: '/Footer', component: MR.Footer })
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
