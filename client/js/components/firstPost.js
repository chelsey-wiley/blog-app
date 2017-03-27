if (window.MR === undefined) {window.MR = {};}
console.log ('post component');
(function() {



class FirstPost extends React.Component {

  clickReadMore(classname){
      console.log('clicked it');
  };

  render() {

    return <div className="post">
      <div className="post-body">
        <h1 className="post-title">First Post</h1>
        <h4 className="post-date">3.13.17</h4>
        <img className="post-image" src= "img-placeholder.jpg"/>
        <p className="post-summary">Post Summary Goes Here. This is a story, and it's a good story. It's about something really really stupendious. Something you have probably never heard of before. Bit it starts like this, a long time ago.</p>

        <div className="post-story">
        <MR.FirstPostStory />
        </div>
      </div>

    </div>
  }
}
  MR.FirstPost = FirstPost;
}());
