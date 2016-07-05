Front-end Developer Exercise
============================

Copyright © 2014 Lampo Licensing, LLC. All rights reserved.

Objective
---------

Build a web page that will provide information about The 7 Baby Steps.


1.  This page uses a combination of HTML/CSS/Jquery to accomplish the desired request.
2.  All files and assets are located within the app folder.

HTML
---------
1. All of the HTML is compiled within the index.html file located within the root of the app folder.
2. All Javascript is loaded just before the </body> tag.
3. All CSS is loaded just before the </head> tag.
4. index.html is broken up into 3 main sections.  (header, navigation, main content)

CSS
---------
1.  All CSS is compiled within the styles.css file located at the path app/assets/stylesheets/styles.css.
2.  No preprocesser or build tools were used with the css due to the amount of CSS needed for this project.
3.  Eric Meyers CSS reset was used to clean up default styling within modern browsers.
4.  Custom fonts are loaded from Google's font library
5.  The icons are loaded from the CSS from one image sprite.  The CSS is then used to determine what section of the icon image sprite is loaded into view.
6.  The drop shadows are created by using images.  There is a bottom image that is located at the very bottom of the page and there is an image that contains both of the side drop shadows that is pulled in through the CSS and repeated down the y axis.

Javascript
---------
1. All javascript(jquery) is compiled within the scripts.js file located at the path app/assets/javascripts/scripts.js
2. The function getfriends(); grabs the data stored in the baby-steps.json file and pulls it into the page via the .getJson jquery function.  Once the data is retrieved the .each jquery function is used to loop through each row of data returned.
As the .each function loops through the json data, it determines how many rows are data are associated with each baby step and compiles a final count as well as adding each name associated with a row of json data to an array for that particular babystep.  This data is called once a navigation item is clicked.
3.  Once an navigation item is clicked, the getfriends() function is ran along with javascript that allows the appropriate baby step content to scroll into view on the page.  The data from the getfriends() function is then used to formulate the body copy that is used to tell who/how many friends from the json file are currently in the step that you have just clicked on and is shown after the content has finished moving into view.
