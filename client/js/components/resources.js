if (window.MR === undefined) {window.MR = {};}
console.log ('Blog component');
(function() {

class Resources extends React.Component {
  render() {

    return (<div className="page">

    <header>
      <MR.Header/>
    </header>

      <div className="title">
        <h1>Resources</h1>
      </div>

      <div className="content">
        <ul>
        <li> USDA Dietary Guidelines for Kids</li>
        <li>Teaching Healthy Food Choices</li>
        <li>Hidden Sources of Caffeine</li>
        <li>How to Stop Bedwetting</li>
        <li>7 Ways to End Picky Eating</li>
        <li>Quirky Discipline Rules That Work</li>
        <li>Things You Shouldn't Say to Your Child</li>
        <li>Unique Birthday Cakes</li>
        <li>Dealing with Picky Eaters</li>
        <li>Family Health Guide</li>
      </ul>
      {/*Content taken from:http://www.parenting.com/child*/}
    </div>



      <MR.Footer/>
    </div>)
  }
}
  MR.Resources = Resources;
}());
