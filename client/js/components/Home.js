if (window.MR === undefined) {window.MR = {};}
console.log ('home component');
(function() {

class Home extends React.Component {
  render() {

    return <div className="page">
      <header>
      <MR.Header/>
      </header>

      <div className="title">
      <h1>Home</h1>
      </div>
    </div>;
  }
}
  MR.Home = Home;
}());
