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
        <h1 className="post-title">Essential Building Blocks</h1>
        <h4 className="post-date">3.13.17</h4>
        <img className="post-image" src= "kcStockImg1.jpg"/>
        <p className="post-summary">Many early childhood educators, myself included, believe that every classroom should have a full set of unit blocks, assorted props tied to children’s current interests and experiences, open storage shelves, and plenty of space and time to build and rebuild invented and familiar structures. I canvassed NAEYC staff and Young Children consulting editors to ask, “What do you think children learn through block play?” Here are some responses:</p>

        <div className="post-story">
        <MR.FirstPostStory />
        </div>
      </div>

    </div>
  }
}
  MR.FirstPost = FirstPost;
}());
