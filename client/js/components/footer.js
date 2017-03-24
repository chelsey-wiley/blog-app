if (window.MR === undefined) {window.MR = {};}
console.log ('English component');
(function() {

class Footer extends React.Component {
  render() {

    return <div className="footer">

      <p><ReactRouter.Link to={'/'}>Kid's Cottage</ReactRouter.Link> | ​Copyright © 2017</p>


    </div>;
  }
}
  MR.Footer = Footer;
}());
