if (window.MR === undefined) {window.MR = {};}
console.log ('post component');
(function() {



class SecondPost extends React.Component {

  clickReadMore(classname){
      console.log('clicked it');
  };

  render() {

    return <div className="post">
      <div className="post-body">
        <h1 className="post-title">Kid's Fitness: Just do it!</h1>
        <h4 className="post-date">3.13.17</h4>
        <img className="post-image" src= "kcStockImg3.jpg"/>
        <p className="post-summary">When many people decide to "get fit," they assume it involves rigorous activity. But you don't have to spend hours in a gym to be physically active. People can get in shape by performing everyday activities in the home. Every time you and your child throw a softball, swim a lap, climb a flight of stairs, walk to the store, or carry packages, your health and fitness levels are improving.</p>

        <div className="post-story">
        <MR.SecondPostStory />
        </div>
      </div>

    </div>
  }
}
  MR.SecondPost = SecondPost;
}());
