if (window.MR === undefined) {window.MR = {};}
console.log ('English component');
(function() {

class Header extends React.Component {
  render() {

    return <div className="nav">

    <ul className="eyebrow">
      <li><ReactRouter.Link to={'/Signin'}>Sign In</ReactRouter.Link></li>
        <li><ReactRouter.Link to={'/Contact'}>Contact</ReactRouter.Link></li>
    </ul>



    <div className="nav-link">
      <ul>
        <li><ReactRouter.Link to={'/Blog'}>Blog</ReactRouter.Link></li>
        <li><ReactRouter.Link to={'/Extra'}>Extra</ReactRouter.Link></li>
        <li><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></li>
      </ul>
      <ReactRouter.Link to={'/'}><img className="logo" src="kids.png"/></ReactRouter.Link>
    </div>




    </div>;
  }
}
  MR.Header = Header;
}());
