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

        <h3>Welcome to Kids Cottage</h3>

        <div className="home-img">
          <img src="kcStockImg4.jpg"/>
        </div>

        <div className="home-content">
          <p>We let “kids be kids” by providing age appropriate activities that enrich, engage, and inspire.</p>
          <p>Kids’ Cottage exists to provide safe, quality childcare for working parents/guardians of children ages six weeks through age 5.  Our main goal is to provide a comfortable and safe environment that focuses on the whole child, stimulating critical thinking skills, fine and gross motor skills, character education and instilling a lifelong love of learning.</p>
          <p>We've recently started an After School Program for school aged children. Contact us to learn more!</p>
        </div>

      <MR.Footer/>
    </div>;
  }
}
  MR.Home = Home;
}());
