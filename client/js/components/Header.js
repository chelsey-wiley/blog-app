if (window.MR === undefined) {window.MR = {};}
console.log ('English component');
(function() {

class Header extends React.Component {
  render() {

    return <div className="div-head">
    <ul className="nav-link">
      <li><ReactRouter.Link to={'/Blog'}>Blog</ReactRouter.Link></li>
      <li><ReactRouter.Link to={'/Extra'}>Extra</ReactRouter.Link></li>
      <li><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></li>
    </ul>


    </div>;
  }
}
  MR.Header = Header;
}());
