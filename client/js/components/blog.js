if (window.MR === undefined) {window.MR = {};}
console.log ('Blog component');
(function() {

class Blog extends React.Component {
  render() {

    return (<div className="page">

      <MR.HeaderComponent/>

      <div className="container">
        <h1>Blog</h1>
        <p>Blog stuff goes here</p>
      </div>

      <MR.FirstPost/>



    </div>)
  }
}
  MR.Blog = Blog;
}());
