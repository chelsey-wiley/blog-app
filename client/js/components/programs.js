if (window.MR === undefined) {window.MR = {};}
console.log ('Blog component');
(function() {

class Programs extends React.Component {
  render() {

    return (<div className="page">

    <header>
      <MR.Header/>
    </header>

      <div className="title">
        <h1>Programs</h1>
      </div>

      <p>line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. </p>




      <MR.Footer/>
    </div>)
  }
}
  MR.Programs = Programs;
}());
