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
        <div className="parent-signin">
          <form>
          <h1>Parent Sign-in</h1>
          Username:<br/>
            <input type="text" name="username"/><br/>
          Password:<br/>
            <input type="text" name="password"/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
        <div className="staff-signin">
          <form>
          <h1>Staff Sign-in</h1>
          Username:<br/>
            <input type="text" name="username"/><br/>
          Password:<br/>
            <input type="text" name="password"/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>

      </div>




      <MR.Footer/>
    </div>)
  }
}
  MR.Signin = Signin;
}());
