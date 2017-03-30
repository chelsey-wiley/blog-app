if (window.MR === undefined) {window.MR = {};}

(function() {

class Header extends React.Component {

  hamburger(x){
    console.log('clicked it')
  }
  render() {

    return <div className="nav">

    <ul className="eyebrow">
      <li><ReactRouter.Link to={'/Signin'}>Sign In</ReactRouter.Link></li>
        <li><ReactRouter.Link to={'/Contact'}>Contact</ReactRouter.Link></li>
    </ul>



    <div className="nav-link">
      <ul>
        <li><ReactRouter.Link to={'/Blog'}>Blog</ReactRouter.Link></li>
        <li><ReactRouter.Link to={'/Resources'}>Resources</ReactRouter.Link></li>
        <li><ReactRouter.Link to={'/Parents'}>Parents</ReactRouter.Link></li>
        <li><ReactRouter.Link to={'/Staff'}>Staff</ReactRouter.Link></li>
        <li><ReactRouter.Link to={'/Programs'}>Programs</ReactRouter.Link></li>
      </ul>
      <ReactRouter.Link to={'/'}><img className="logo" src="kidsfav.png"/></ReactRouter.Link>
    </div>




    </div>;
  }
}
  MR.Header = Header;
}());
