if (window.MR === undefined) {window.MR = {};}
console.log ('post component');
(function() {



class SecondPostStory extends React.Component {

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

  <p> When someone is physically fit, she feels and looks better, and she stays healthier. The earlier a child starts getting in shape, the more she'll reduce her risk of numerous illnesses. Here are some of the benefits that physical activity offers your child:</p>

  <ol>
  <li> It strengthens the heart. The heart is a muscle. Like other muscles, its performance improves when it's regularly challenged by exercise. The heart responds to exercise by becoming stronger and more efficient. Strengthening the heart muscle can help ward off heart disease -- the leading cause of death in the United States, according to the U.S. Department of Health and Human Services -- even in early childhood.</li>

  <li>  It helps keep arteries and veins clear. Exercise reduces the amount of harmful cholesterol and fats in a person's blood. It increases the flexibility of the walls of blood vessels, and helps to lower blood pressure. This can reduce a person's risk for heart attack and stroke. </li>

  <li> It strengthens the lungs. Working hard increases lung capacity, and their efficiency in moving air in and out of the body. As a result, more oxygen is drawn into the body and more carbon dioxide and other waste gases are expelled. Regular exercise helps prevent the decline in oxygen intake that occurs naturally with age or as a result of inactivity.</li>

  <li> It reduces blood sugar levels. Exercise prevents sugar from accumulating in the blood by triggering muscles to take up more glucose from the bloodstream and use it for energy. This can reduce a person's risk of developing diabetes.</li>

  <li> It controls weight. When a person is sedentary, he tends to be taking in more calories than are needed. These unused calories accumulate as fat. A person who is physically active may have a deficit of calories, which takes fat away and lowers weight. Lowered weight is good for the heart and can be beneficial in people with diabetes.</li>

  <li> It strengthens bones. Just as muscles grow stronger when physically stressed, bones also respond by getting stronger. Exercise increases bone density, which helps prevent osteoporosis, a condition in which bones lose density, weaken, and become porous and fragile.</li>

  <li> It helps prevent cancer. People who exercise regularly have lower incidences of cancer. The cancers most affected include colon, prostate, uterine, and breast cancers.</li>

  <li> It regulates blood pressure. Exercise has been shown to reduce stress levels. As the levels of stress in a person's body subsides, his blood pressure and his risk for heart disease decline.</li>

  <li> It improves energy levels. Regular exercise often makes people feel more energetic, allows them to be more active, and reduces the likelihood that they'll tire during the day.</li>

  <li> It enhances emotional well-being. Most people report that they feel calm and have a sense of well-being after they exercise. Exercise, according to one theory, releases beta-endorphin, a natural substance in the body that is hundreds of times more potent than morphine. Another theory points to serotonin as the cause of the exercise high. Increased levels of serotonin in the central nervous system are associated with feelings of well-being, heightening of appetite, and lessening of mental depression. The weight loss that accompanies exercise can also cause people to feel better about themselves.</li>

    </ol>

    {/* Filler Story: http://www.parents.com/fun/sports/exercise/10-benefits-of-physical-activity */}
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


  MR.SecondPostStory = SecondPostStory;
}());
