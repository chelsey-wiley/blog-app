if (window.MR === undefined) {window.MR = {};}
console.log ('post component');
(function() {



class PostStoryTemplate extends React.Component {

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
      div = <ReadLessButton onClick={this.handleReadLess} />;
    } else {
      div = <ReadMoreButton onClick={this.handleReadMore} />;
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
  return <div>
    {/* Filler Story: http://www.naeyc.org/yc/10_things_children_learn_block_play */}
</div>;
}

function Expand(props) {
  return <p></p>;
}

function Phrase (props) {
  const isExpanded = props.isExpanded;
  if (isExpanded) {
    return <Contract />;
  }
  return <Expand />;
}

function ReadMoreButton(props) {
  return (
    <div className= "read-it" onClick={props.onClick}>
      Read More
    </div>
  );
}

function ReadLessButton(props) {
  return (
    <div className="read-it" onClick={props.onClick}>
      Read Less
    </div>
  );
}


  MR.PostStoryTemplate = PostStoryTemplate;
}());
