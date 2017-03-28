if (window.MR === undefined) {window.MR = {};}

(function() {

class Contact extends React.Component {
  render() {

    return (<div className="page">

    <header>
      <MR.Header/>
    </header>

      <div className="title">
        <h1>Contact</h1>
      </div>

      <div className="content">
        <p>We'd love to hear from you!</p>
        <img src="Slice 1.png"/>

      </div>



      <MR.Footer/>
    </div>)
  }
}
  MR.Contact = Contact;
}());
