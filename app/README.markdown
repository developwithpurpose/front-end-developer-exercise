Created a basic HTML frame using bootstrap elements to divide elements into rows and columns.  

Two JS files.  Tabs.js uses JS to automatically load data for Baby Step tab #1 upon opening the document (as a default).  Using JS to navigate and fill main info based on user click.

Friendata.js uses the onclick function of js to load data for display from the baby-steps.JSON file provided.  First, the ajax call loads the objects into the empty array of "friendItems".  After the object data is loaded into the the array, the sort arranges the data in alphabetic order based on last name.  Based on the click function (babystep number), all data associated with the respective button is then filtered to display First Name, Last Name, and Baby step into a dynamically generated table the friend data.

Style.css uses basic CSS to style the page according to the instructions provided.