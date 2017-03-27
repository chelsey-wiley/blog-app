if (window.MR === undefined) {window.MR = {};}
console.log ('post component');
(function() {



class PostTemplate extends React.Component {

  clickReadMore(classname){
      console.log('clicked it');
  };

  render() {

    return <div className="post">
      <div className="post-body">
        <h1 className="post-title">First Post</h1>
        <h4 className="post-date">3.13.17</h4>
        <img className="post-image" src= "kcStockImg1.jpg"/>
        <p className="post-summary">Post Summary Goes Here.</p>

        <div className="post-story">
        <MR.FirstPostStory />
        </div>
      </div>

    </div>
  }
}
  MR.PostTemplate = PostTemplate;
}());
