if (window.MR === undefined) {window.MR = {};}
console.log ('Blog component');
(function() {

class Programs extends React.Component {
  render() {

    return (<div className="page">

    <header>
      <MR.Header/>
    </header>

      <div className="title">
        <h1>Programs</h1>
      </div>

      <div className="content">
        <p>Kid's Cottage will serve a maximum of 45 children ages 6 weeks through Pre-K. The children will be split up into four classrooms according to age/developmental appropriateness.</p>

        <ol>
          <p>Each classroom will:</p>
          <li>Have an experienced program leader</li>
          <li>Be fully equipped with approved and inspected toys/furniture appropriate for each age group</li>
          <li>Have an approved curriculum.</li>
          </ol>
      </div>



      <MR.Footer/>
    </div>)
  }
}
  MR.Programs = Programs;
}());
