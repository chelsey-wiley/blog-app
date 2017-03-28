if (window.MR === undefined) {window.MR = {};}
console.log ('Blog component');
(function() {

class Parents extends React.Component {
  render() {

    return (<div className="page">

    <header>
      <MR.Header/>
    </header>

      <div className="title">
        <h1>Parents</h1>
      </div>

      <div className="content">
        <p>Our teachers create their own themes and lesson plans, but also pull ideas from a curriculum called Kid Crafters. We are very pleased with it! They offer a curriculum for toddlers through preschoolers and three different "Cycles".  We chose to start with Cycle 3 because a lot of the themes correlate with the Virginia Standards of Learning for Kindergarten and we want all of our preschoolers to leave Kid's Cottage ready to be successful in Kindergarten.</p>

      <p>The preschool program contains:</p>

      <ul>
        <li>Circle time</li>
        <li>Arts & crafts</li>
        <li>Science</li>
        <li>Math</li>
        <li>Cooking</li>
        <li>Finger-plays & songs</li>
        <li>Large & small motor</li>
        <li>Dramatic play activities</li>
        <li>and much much more!</li>
      </ul>

      <p>We have purchased PALS (Phonological Awareness Literacy Screening)
      to administer to our 4 year olds to help bridge the gap between preschool and kindergarten.</p>

    </div>
      <MR.Footer/>
    </div>)
  }
}
  MR.Parents = Parents;
}());
