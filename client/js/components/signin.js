if (window.MR === undefined) {window.MR = {};}
console.log ('Blog component');
(function() {

class Signin extends React.Component {
  render() {

    return (<div className="page">

    <header>
      <MR.Header/>
    </header>

      <div className="title">
        <h1>Sign In</h1>
      </div>

      <div className="content">
        <p>line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. </p>
      </div>




      <MR.Footer/>
    </div>)
  }
}
  MR.Signin = Signin;
}());
