if (window.MR === undefined) {window.MR = {};}
console.log ('Blog component');
(function() {

class Staff extends React.Component {
  render() {

    return (<div className="page">

    <header>
      <MR.Header/>
    </header>

      <div className="title">
        <h1>Staff</h1>
      </div>

      <div className="content">
        <p>At Kid's Cottage it is our main priority to have a loving, nurturing staff that is compassionate about a career teaching young children. All of our teachers have extensive background checks in addition to a working interview.  Although a majority of our staff come to us with experience and education in the preschool setting, we offer multiple training opportunities and additional classes through out the year.  We also have mandatory staff meetings and training sessions multiple times annually to ensure we have a well educated team.  Please meet our AMAZING STAFF below!</p>
      </div>
      <MR.Footer/>
    </div>)
  }
}
  MR.Staff = Staff;
}());
