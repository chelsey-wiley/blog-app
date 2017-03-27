if (window.MR === undefined) {window.MR = {};}
console.log ('post component');
(function() {



class FirstPostStory extends React.Component {

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

    <ol>
      <li>Problem solving. Sometimes it is intentional: “I want to build X. How do I do that?” Other times it is in-the-moment: “To go higher and add to one side, what can I use?”—Peter Pizzolongo </li>

      <li> Imagination. Children can follow their own plan, or they can share a friend’s vision and work together to create something they never dreamed of.—Karen Cairone</li>

      <li>Self-expression. Blocks offer many ways for young dual language learners to explore, express themselves, and demonstrate what they are learning across languages.—Karen Nemeth </li>

      <li>Mathematics. Important concepts and skills are practiced and strengthened through block play, including length, measurement, comparison, number, estimation, symmetry, balance.—Kristen Kemple</li>

      <li>Continuity and permanence. Block play engages spatial sense and motor abilities; it can be a solo or a group effort; block creations can stand for an indefinite period of time.—Lawrence Balter </li>

      <li>Creativity. Blocks and other loose parts can be moved freely by children, to be combined and recombined in countless ways.—Angela Eckhoff </li>

      <li>Science. Blocks offer opportunities to test hypotheses and build scientific reasoning.—Gayle Mindes</li>

      <li>Self-esteem. Children discover that they have ideas and that they can bring their ideas to life by creating, transforming, demolishing, and re-creating something unique.—Holly Bohart</li>

      <li> Social and emotional growth. Blocks help children learn to take turns and share materials, develop new friendships, become self-reliant, increase attention span, cooperate with others, and develop self-esteem.—Kathleen Harris</li>

      <li>Development in all areas. Block play requires fine and gross motor skills. Blocks enhance children’s problem-solving abilities, mathematics skills, and language and literacy abilities. And constructing “creations” builds self-esteem and feelings of success. —Linda Taylor
      The articles in the March 2015 cluster highlight the many benefits of block play, from infancy through the primary grades. The authors urge early childhood educators to introduce or reintroduce blocks because they are an ideal material for young children. Through examples and images, the authors demonstrate the teaching and learning possibilities that block play supports.</li>

      <p> —Derry Koralek, Chief Publishing Officer and Editor in Chief</p>
    </ol>
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


  MR.FirstPostStory = FirstPostStory;
}());
