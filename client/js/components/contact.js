if (window.MR === undefined) {window.MR = {};}

(function() {

class Contact extends React.Component {
  render() {

    return (<div className="page">

      <MR.Header/>
      <div className="container">
        <h1>Contact</h1>
        <p>line 5 is the current component name. line 21 is the name space referencing the current component before and after the equals sign are the same. Must add the name spacing to the router js file in the client folder. </p>
      </div>



    </div>)
  }
}
  MR.Contact = Contact;
}());
