if (window.MR === undefined) {window.MR = {};}
console.log ('English component');
(function() {

class HeaderComponent extends React.Component {
  render() {

    return <div className="div-head">

      <nav>

        <div><ReactRouter.Link to={'/Blog'}>Blog</ReactRouter.Link></div>
        <div><ReactRouter.Link to={'/Extra'}>Extra</ReactRouter.Link></div>
        <div><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></div>
      </nav>

    </div>;
  }
}
  MR.HeaderComponent = HeaderComponent;
}());
