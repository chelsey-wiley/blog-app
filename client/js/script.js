if (window.MR === undefined) {window.MR = {};}

(function() {
var mountNode = document.querySelector('#react-root');
console.log('scriptJS');
class AppComponent extends React.Component {
  render() {
    return <div className="container">

    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
}());
