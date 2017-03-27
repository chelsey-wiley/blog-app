if (window.MR === undefined) {window.MR = {};}
console.log ('post component');
(function() {



class SecondPost extends React.Component {

  constructor(props) {
  super(props);
  this.handleReadMore = this.handleReadMore.bind(this);
  this.handleReadLess = this.handleReadLess.bind(this);
  this.state = {isExpanded: false};
  }

handleReadMore() {
  this.setState({isExpanded: true});
  }

  handleReadLess() {
  this.setState({isExpanded: false});
  }

  render() {
    const isExpanded = this.state.isExpanded;

    let div = null;
    if (isExpanded) {
      div = <LogoutButton onClick={this.handleReadLess} />;
    } else {
      div = <LoginButton onClick={this.handleReadMore} />;
    }

    return (
      <div>
        {div}
        <Phrase isExpanded={isExpanded} />
      </div>
    );
  }
}

function Contract(props) {
  return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>;
}

function Expand(props) {
  return <p>...</p>;
}

function Phrase (props) {
  const isExpanded = props.isExpanded;
  if (isExpanded) {
    return <Contract />;
  }
  return <Expand />;
}

function LoginButton(props) {
  return (
    <div className= "read-it" onClick={props.onClick}>
      Read More
    </div>
  );
}

function LogoutButton(props) {
  return (
    <div className="read-it" onClick={props.onClick}>
      Read Less
    </div>
  );
}


  MR.SecondPost = SecondPost;
}());
