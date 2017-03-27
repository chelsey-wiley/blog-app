if (window.MR === undefined) {window.MR = {};}
console.log ('post component');
(function() {



class SecondPost extends React.Component {

  constructor(props) {
  super(props);
  this.handleLoginClick = this.handleLoginClick.bind(this);
  this.handleLogoutClick = this.handleLogoutClick.bind(this);
  this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
  this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
  this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        {button}
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

function UserGreeting(props) {
  return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>;
}

function GuestGreeting(props) {
  return <p>...</p>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Read More
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Read Less
    </button>
  );
}


  MR.SecondPost = SecondPost;
}());
