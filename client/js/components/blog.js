if (window.MR === undefined) {window.MR = {};}
console.log ('Blog component');
(function() {

class Blog extends React.Component {
  render() {

    return (<div className="page">
    <header>
      <MR.Header/>
    </header>

      <div className="title">
        <h1>Blog</h1>
      </div>

      <MR.FirstPost/>


      <MR.Footer/>
    </div>)
  }
}
  MR.Blog = Blog;
}());
