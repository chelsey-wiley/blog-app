if (window.MR === undefined) {window.MR = {};}
console.log ('home component');
(function() {

class HomeComponent extends React.Component {
  render() {

    return <div className="page">
      <header>
      <MR.HeaderComponent/>
      </header>

      <div className="container">

      <h1 className="home-header">Home</h1>

      </div>
    </div>;
  }
}
  MR.HomeComponent = HomeComponent;
}());
