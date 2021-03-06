if (window.MR === undefined) {window.MR = {};}

(function() {
  console.log('routerjs');

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var router = <Router history={ReactRouter.hashHistory}>
    <Route path="/header" component={MR.Header}/>


      <Route path="/" component={MR.Home} />
      <Route path="/Blog" component={MR.Blog}/>
      <Route path="/NewsletterSignup" component = {MR.NewsletterSignup}/>
      <Route path="/Resources" component={MR.Resources}/>
      <Route path="/Parents" component={MR.Parents}/>
      <Route path="/Programs" component={MR.Programs}/>
      <Route path="/Staff" component={MR.Staff}/>

      <Route path="/FirstPost" component={MR.FirstPost}/>
        <Route path="/FirstPostStory" component={MR.FirstPostStory}/>
      <Route path="/ScondPost" component={MR.SecondPost}/>
        <Route path="/SecondPostStory" component={MR.SecondPostStory}/>


      <Route path="/Signin" component={MR.Signin}/>
      <Route path="/Contact" component={MR.Contact}/>



      <Route path="/Footer" component={MR.Footer}/>

    </Router>;

  ReactDOM.render(router, mountNode);
})();
