if (window.MR === undefined) {window.MR = {};}

(function() {
  console.log('routerjs');

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var router = <Router history={ReactRouter.hashHistory}>
      <Route path="/" component={MR.HomeComponent} />
      <Route path="/SignLanguageRecordingComponent" component={MR.SignLanguageRecordingComponent}/>
      <Route path="/YoutubeComponent" component={MR.YoutubeComponent}/>
      <Route path="/EnglishComponent" component={MR.EnglishComponent}/>
      <Route path="/EnglishRecordingComponent" component={MR.EnglishRecordingComponent}/>
      <Route path="/AboutComponent" component={MR.AboutComponent}/>
      <Route path="/Blog" component={MR.Blog}/>
      <Route path="/Extra" component={MR.Extra}/>
      <Route path="/FirstPost" component={MR.FirstPost}/>
    </Router>;

  ReactDOM.render(router, mountNode);
})();
