if (window.MR === undefined) {window.MR = {};}
(function() {

class NewsletterSignup extends React.Component {
  constructor(props) {
  super(props);
  this.state = {value: ''};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  {/onSubmit={this.handleSubmit}/}
  alert( 'Updates will be sent to ' + this.state.value);
  event.preventDefault();
}

  render() {

    return (<div className="sign-up-form">
    <form /*action="http://requestb.in/1jt17pk1" method="post"*/ onSubmit={this.handleSubmit}>
        <label>
            Kis's Cottage Updates<br/>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className="submit-button" type="submit" value="Sign me up" />
      </form>


    </div>)
  }
}
  MR.NewsletterSignup = NewsletterSignup;
}());
