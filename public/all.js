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
            { className: "blog-page" },
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
              ),
              React.createElement(
                "button",
                null,
                "Subscribe to our Newsletter "
              )
            ),
            React.createElement(MR.FirstPost, null),
            React.createElement(MR.SecondPost, null)
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
            "div",
            { className: "content" },
            React.createElement(
              "p",
              null,
              "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
            )
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
'use strict';

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
      key: 'clickReadMore',
      value: function clickReadMore(classname) {
        console.log('clicked it');
      }
    }, {
      key: 'render',
      value: function render() {

        return React.createElement(
          'div',
          { className: 'post' },
          React.createElement(
            'div',
            { className: 'post-body' },
            React.createElement(
              'h1',
              { className: 'post-title' },
              'Essential Building Blocks'
            ),
            React.createElement(
              'h4',
              { className: 'post-date' },
              '3.13.17'
            ),
            React.createElement('img', { className: 'post-image', src: 'kcStockImg1.jpg' }),
            React.createElement(
              'p',
              { className: 'post-summary' },
              'Many early childhood educators, myself included, believe that every classroom should have a full set of unit blocks, assorted props tied to children\u2019s current interests and experiences, open storage shelves, and plenty of space and time to build and rebuild invented and familiar structures. I canvassed NAEYC staff and Young Children consulting editors to ask, \u201CWhat do you think children learn through block play?\u201D Here are some responses:'
            ),
            React.createElement(
              'div',
              { className: 'post-story' },
              React.createElement(MR.FirstPostStory, null)
            )
          )
        );
      }
    }]);

    return FirstPost;
  }(React.Component);

  MR.FirstPost = FirstPost;
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
  var FirstPostStory = function (_React$Component) {
    _inherits(FirstPostStory, _React$Component);

    function FirstPostStory(props) {
      _classCallCheck(this, FirstPostStory);

      var _this = _possibleConstructorReturn(this, (FirstPostStory.__proto__ || Object.getPrototypeOf(FirstPostStory)).call(this, props));

      _this.handleReadMore = _this.handleReadMore.bind(_this);
      _this.handleReadLess = _this.handleReadLess.bind(_this);
      _this.state = { isExpanded: false };
      return _this;
    }

    _createClass(FirstPostStory, [{
      key: "handleReadMore",
      value: function handleReadMore() {
        this.setState({ isExpanded: true });
      }
    }, {
      key: "handleReadLess",
      value: function handleReadLess() {
        this.setState({ isExpanded: false });
      }
    }, {
      key: "render",
      value: function render() {
        var isExpanded = this.state.isExpanded;

        var div = null;
        if (isExpanded) {
          div = React.createElement(ReadLessButton, { onClick: this.handleReadLess });
        } else {
          div = React.createElement(ReadMoreButton, { onClick: this.handleReadMore });
        }

        return React.createElement(
          "div",
          null,
          div,
          React.createElement(Phrase, { isExpanded: isExpanded })
        );
      }
    }]);

    return FirstPostStory;
  }(React.Component);

  function Contract(props) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "ol",
        null,
        React.createElement(
          "li",
          null,
          "Problem solving. Sometimes it is intentional: \u201CI want to build X. How do I do that?\u201D Other times it is in-the-moment: \u201CTo go higher and add to one side, what can I use?\u201D\u2014Peter Pizzolongo "
        ),
        React.createElement(
          "li",
          null,
          " Imagination. Children can follow their own plan, or they can share a friend\u2019s vision and work together to create something they never dreamed of.\u2014Karen Cairone"
        ),
        React.createElement(
          "li",
          null,
          "Self-expression. Blocks offer many ways for young dual language learners to explore, express themselves, and demonstrate what they are learning across languages.\u2014Karen Nemeth "
        ),
        React.createElement(
          "li",
          null,
          "Mathematics. Important concepts and skills are practiced and strengthened through block play, including length, measurement, comparison, number, estimation, symmetry, balance.\u2014Kristen Kemple"
        ),
        React.createElement(
          "li",
          null,
          "Continuity and permanence. Block play engages spatial sense and motor abilities; it can be a solo or a group effort; block creations can stand for an indefinite period of time.\u2014Lawrence Balter "
        ),
        React.createElement(
          "li",
          null,
          "Creativity. Blocks and other loose parts can be moved freely by children, to be combined and recombined in countless ways.\u2014Angela Eckhoff "
        ),
        React.createElement(
          "li",
          null,
          "Science. Blocks offer opportunities to test hypotheses and build scientific reasoning.\u2014Gayle Mindes"
        ),
        React.createElement(
          "li",
          null,
          "Self-esteem. Children discover that they have ideas and that they can bring their ideas to life by creating, transforming, demolishing, and re-creating something unique.\u2014Holly Bohart"
        ),
        React.createElement(
          "li",
          null,
          " Social and emotional growth. Blocks help children learn to take turns and share materials, develop new friendships, become self-reliant, increase attention span, cooperate with others, and develop self-esteem.\u2014Kathleen Harris"
        ),
        React.createElement(
          "li",
          null,
          "Development in all areas. Block play requires fine and gross motor skills. Blocks enhance children\u2019s problem-solving abilities, mathematics skills, and language and literacy abilities. And constructing \u201Ccreations\u201D builds self-esteem and feelings of success. \u2014Linda Taylor The articles in the March 2015 cluster highlight the many benefits of block play, from infancy through the primary grades. The authors urge early childhood educators to introduce or reintroduce blocks because they are an ideal material for young children. Through examples and images, the authors demonstrate the teaching and learning possibilities that block play supports."
        ),
        React.createElement(
          "p",
          null,
          " \u2014Derry Koralek, Chief Publishing Officer and Editor in Chief"
        )
      )
    );
  }

  function Expand(props) {
    return React.createElement("p", null);
  }

  function Phrase(props) {
    var isExpanded = props.isExpanded;
    if (isExpanded) {
      return React.createElement(Contract, null);
    }
    return React.createElement(Expand, null);
  }

  function ReadMoreButton(props) {
    return React.createElement(
      "div",
      { className: "read-it", onClick: props.onClick },
      "Read More"
    );
  }

  function ReadLessButton(props) {
    return React.createElement(
      "div",
      { className: "read-it", onClick: props.onClick },
      "Read Less"
    );
  }

  MR.FirstPostStory = FirstPostStory;
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
              React.createElement("img", { className: "logo", src: "kidsfav.png" })
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
            "div",
            { className: "content" },
            React.createElement(
              "p",
              null,
              "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
            )
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
console.log('post component');
(function () {
  var PostStoryTemplate = function (_React$Component) {
    _inherits(PostStoryTemplate, _React$Component);

    function PostStoryTemplate(props) {
      _classCallCheck(this, PostStoryTemplate);

      var _this = _possibleConstructorReturn(this, (PostStoryTemplate.__proto__ || Object.getPrototypeOf(PostStoryTemplate)).call(this, props));

      _this.handleReadMore = _this.handleReadMore.bind(_this);
      _this.handleReadLess = _this.handleReadLess.bind(_this);
      _this.state = { isExpanded: false };
      return _this;
    }

    _createClass(PostStoryTemplate, [{
      key: "handleReadMore",
      value: function handleReadMore() {
        this.setState({ isExpanded: true });
      }
    }, {
      key: "handleReadLess",
      value: function handleReadLess() {
        this.setState({ isExpanded: false });
      }
    }, {
      key: "render",
      value: function render() {
        var isExpanded = this.state.isExpanded;

        var div = null;
        if (isExpanded) {
          div = React.createElement(ReadLessButton, { onClick: this.handleReadLess });
        } else {
          div = React.createElement(ReadMoreButton, { onClick: this.handleReadMore });
        }

        return React.createElement(
          "div",
          null,
          div,
          React.createElement(Phrase, { isExpanded: isExpanded })
        );
      }
    }]);

    return PostStoryTemplate;
  }(React.Component);

  function Contract(props) {
    return React.createElement("div", null);
  }

  function Expand(props) {
    return React.createElement("p", null);
  }

  function Phrase(props) {
    var isExpanded = props.isExpanded;
    if (isExpanded) {
      return React.createElement(Contract, null);
    }
    return React.createElement(Expand, null);
  }

  function ReadMoreButton(props) {
    return React.createElement(
      "div",
      { className: "read-it", onClick: props.onClick },
      "Read More"
    );
  }

  function ReadLessButton(props) {
    return React.createElement(
      "div",
      { className: "read-it", onClick: props.onClick },
      "Read Less"
    );
  }

  MR.PostStoryTemplate = PostStoryTemplate;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('post component');
(function () {
  var PostTemplate = function (_React$Component) {
    _inherits(PostTemplate, _React$Component);

    function PostTemplate() {
      _classCallCheck(this, PostTemplate);

      return _possibleConstructorReturn(this, (PostTemplate.__proto__ || Object.getPrototypeOf(PostTemplate)).apply(this, arguments));
    }

    _createClass(PostTemplate, [{
      key: 'clickReadMore',
      value: function clickReadMore(classname) {
        console.log('clicked it');
      }
    }, {
      key: 'render',
      value: function render() {

        return React.createElement(
          'div',
          { className: 'post' },
          React.createElement(
            'div',
            { className: 'post-body' },
            React.createElement(
              'h1',
              { className: 'post-title' },
              'First Post'
            ),
            React.createElement(
              'h4',
              { className: 'post-date' },
              '3.13.17'
            ),
            React.createElement('img', { className: 'post-image', src: 'kcStockImg1.jpg' }),
            React.createElement(
              'p',
              { className: 'post-summary' },
              'Post Summary Goes Here.'
            ),
            React.createElement(
              'div',
              { className: 'post-story' },
              React.createElement(MR.FirstPostStory, null)
            )
          )
        );
      }
    }]);

    return PostTemplate;
  }(React.Component);

  MR.PostTemplate = PostTemplate;
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
            "div",
            { className: "content" },
            React.createElement(
              "p",
              null,
              "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
            )
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
            "div",
            { className: "content" },
            React.createElement(
              "p",
              null,
              "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
            )
          ),
          React.createElement(MR.Footer, null)
        );
      }
    }]);

    return Resources;
  }(React.Component);

  MR.Resources = Resources;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('post component');
(function () {
  var SecondPost = function (_React$Component) {
    _inherits(SecondPost, _React$Component);

    function SecondPost() {
      _classCallCheck(this, SecondPost);

      return _possibleConstructorReturn(this, (SecondPost.__proto__ || Object.getPrototypeOf(SecondPost)).apply(this, arguments));
    }

    _createClass(SecondPost, [{
      key: 'clickReadMore',
      value: function clickReadMore(classname) {
        console.log('clicked it');
      }
    }, {
      key: 'render',
      value: function render() {

        return React.createElement(
          'div',
          { className: 'post' },
          React.createElement(
            'div',
            { className: 'post-body' },
            React.createElement(
              'h1',
              { className: 'post-title' },
              'Kid\'s Fitness: Just do it!'
            ),
            React.createElement(
              'h4',
              { className: 'post-date' },
              '3.13.17'
            ),
            React.createElement('img', { className: 'post-image', src: 'kcStockImg3.jpg' }),
            React.createElement(
              'p',
              { className: 'post-summary' },
              'When many people decide to "get fit," they assume it involves rigorous activity. But you don\'t have to spend hours in a gym to be physically active. People can get in shape by performing everyday activities in the home. Every time you and your child throw a softball, swim a lap, climb a flight of stairs, walk to the store, or carry packages, your health and fitness levels are improving.'
            ),
            React.createElement(
              'div',
              { className: 'post-story' },
              React.createElement(MR.SecondPostStory, null)
            )
          )
        );
      }
    }]);

    return SecondPost;
  }(React.Component);

  MR.SecondPost = SecondPost;
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
  var SecondPostStory = function (_React$Component) {
    _inherits(SecondPostStory, _React$Component);

    function SecondPostStory(props) {
      _classCallCheck(this, SecondPostStory);

      var _this = _possibleConstructorReturn(this, (SecondPostStory.__proto__ || Object.getPrototypeOf(SecondPostStory)).call(this, props));

      _this.handleReadMore = _this.handleReadMore.bind(_this);
      _this.handleReadLess = _this.handleReadLess.bind(_this);
      _this.state = { isExpanded: false };
      return _this;
    }

    _createClass(SecondPostStory, [{
      key: "handleReadMore",
      value: function handleReadMore() {
        this.setState({ isExpanded: true });
      }
    }, {
      key: "handleReadLess",
      value: function handleReadLess() {
        this.setState({ isExpanded: false });
      }
    }, {
      key: "render",
      value: function render() {
        var isExpanded = this.state.isExpanded;

        var div = null;
        if (isExpanded) {
          div = React.createElement(ReadLessButton, { onClick: this.handleReadLess });
        } else {
          div = React.createElement(ReadMoreButton, { onClick: this.handleReadMore });
        }

        return React.createElement(
          "div",
          null,
          div,
          React.createElement(Phrase, { isExpanded: isExpanded })
        );
      }
    }]);

    return SecondPostStory;
  }(React.Component);

  function Contract(props) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        " When someone is physically fit, she feels and looks better, and she stays healthier. The earlier a child starts getting in shape, the more she'll reduce her risk of numerous illnesses. Here are some of the benefits that physical activity offers your child:"
      ),
      React.createElement(
        "ol",
        null,
        React.createElement(
          "li",
          null,
          " It strengthens the heart. The heart is a muscle. Like other muscles, its performance improves when it's regularly challenged by exercise. The heart responds to exercise by becoming stronger and more efficient. Strengthening the heart muscle can help ward off heart disease -- the leading cause of death in the United States, according to the U.S. Department of Health and Human Services -- even in early childhood."
        ),
        React.createElement(
          "li",
          null,
          "  It helps keep arteries and veins clear. Exercise reduces the amount of harmful cholesterol and fats in a person's blood. It increases the flexibility of the walls of blood vessels, and helps to lower blood pressure. This can reduce a person's risk for heart attack and stroke. "
        ),
        React.createElement(
          "li",
          null,
          " It strengthens the lungs. Working hard increases lung capacity, and their efficiency in moving air in and out of the body. As a result, more oxygen is drawn into the body and more carbon dioxide and other waste gases are expelled. Regular exercise helps prevent the decline in oxygen intake that occurs naturally with age or as a result of inactivity."
        ),
        React.createElement(
          "li",
          null,
          " It reduces blood sugar levels. Exercise prevents sugar from accumulating in the blood by triggering muscles to take up more glucose from the bloodstream and use it for energy. This can reduce a person's risk of developing diabetes."
        ),
        React.createElement(
          "li",
          null,
          " It controls weight. When a person is sedentary, he tends to be taking in more calories than are needed. These unused calories accumulate as fat. A person who is physically active may have a deficit of calories, which takes fat away and lowers weight. Lowered weight is good for the heart and can be beneficial in people with diabetes."
        ),
        React.createElement(
          "li",
          null,
          " It strengthens bones. Just as muscles grow stronger when physically stressed, bones also respond by getting stronger. Exercise increases bone density, which helps prevent osteoporosis, a condition in which bones lose density, weaken, and become porous and fragile."
        ),
        React.createElement(
          "li",
          null,
          " It helps prevent cancer. People who exercise regularly have lower incidences of cancer. The cancers most affected include colon, prostate, uterine, and breast cancers."
        ),
        React.createElement(
          "li",
          null,
          " It regulates blood pressure. Exercise has been shown to reduce stress levels. As the levels of stress in a person's body subsides, his blood pressure and his risk for heart disease decline."
        ),
        React.createElement(
          "li",
          null,
          " It improves energy levels. Regular exercise often makes people feel more energetic, allows them to be more active, and reduces the likelihood that they'll tire during the day."
        ),
        React.createElement(
          "li",
          null,
          " It enhances emotional well-being. Most people report that they feel calm and have a sense of well-being after they exercise. Exercise, according to one theory, releases beta-endorphin, a natural substance in the body that is hundreds of times more potent than morphine. Another theory points to serotonin as the cause of the exercise high. Increased levels of serotonin in the central nervous system are associated with feelings of well-being, heightening of appetite, and lessening of mental depression. The weight loss that accompanies exercise can also cause people to feel better about themselves."
        )
      )
    );
  }

  function Expand(props) {
    return React.createElement("p", null);
  }

  function Phrase(props) {
    var isExpanded = props.isExpanded;
    if (isExpanded) {
      return React.createElement(Contract, null);
    }
    return React.createElement(Expand, null);
  }

  function ReadMoreButton(props) {
    return React.createElement(
      "div",
      { className: "read-it", onClick: props.onClick },
      "Read More"
    );
  }

  function ReadLessButton(props) {
    return React.createElement(
      "div",
      { className: "read-it", onClick: props.onClick },
      "Read Less"
    );
  }

  MR.SecondPostStory = SecondPostStory;
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
            "div",
            { className: "content" },
            React.createElement(
              "p",
              null,
              "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
            )
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
            "div",
            { className: "content" },
            React.createElement(
              "p",
              null,
              "line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. "
            )
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
    React.createElement(Route, { path: '/FirstPostStory', component: MR.FirstPostStory }),
    React.createElement(Route, { path: '/ScondPost', component: MR.SecondPost }),
    React.createElement(Route, { path: '/SecondPostStory', component: MR.SecondPostStory }),
    React.createElement(Route, { path: '/Signin', component: MR.Signin }),
    React.createElement(Route, { path: '/Contact', component: MR.Contact }),
    React.createElement(Route, { path: '/Footer', component: MR.Footer })
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
