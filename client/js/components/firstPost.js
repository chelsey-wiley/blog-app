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
          <p className="read-more blue" onClick={()=> {this.clickReadMore();}}>Read the full post...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
      </div>

      <div className="post-sidebar">
        <ul>
          <li>Most Viewed</li>
          <li> Most Commented</li>
          <li> Most Shared</li>
        </ul>
      </div>

    </div>
  }
}
  MR.FirstPost = FirstPost;
}());
