if (window.MR === undefined) {window.MR = {};}
console.log ('Blog component');
(function() {

class Blog extends React.Component {

  render() {

    return (<div className="page">
    <header>
      <MR.Header/>
    </header>

    <div className="blog-page">
      <div className="title">
        <h1>Blog</h1>
      </div>

      <div className="post-sidebar">
        <ul>
          <li>Most Viewed</li>
          <li>Most Commented</li>
          <li>Most Shared</li>
        </ul>
        <MR.NewsletterSignup/>
      </div>


    <MR.FirstPost/>
    <MR.SecondPost/>
    </div>

    <div className="post-categories">
      <ul>
        <li>Most Viewed</li>
        <li>Most Commented</li>
        <li>Most Shared</li>
      </ul>
      <MR.NewsletterSignup/>
    </div>
      <MR.Footer/>
    </div>)
  }
}
  MR.Blog = Blog;
}());
