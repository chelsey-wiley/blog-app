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
      <p>Welcome to Kid's Cottage</p>
      <p>We let “kids be kids” by providing age appropriate activities that enrich, engage, and inspire.</p>
      </div>
    </div>;
  }
}
  MR.Home = Home;
}());
