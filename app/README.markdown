Front-end Developer Exercise - Jennifer McGoldrick
==================================================

Objective
---------

Build a web page that will provide information about The 7 Baby Steps.

Requirements
------------
* Forked the repo to my [Github account](https://github.com/jsmit032/front-end-developer-exercise "github account").
* Followed the mockup requirements as closely as possible, with the required google fonts, and efficient CSS file, with headers of various id's and classes.
* Tested application in Firefox and Chrome, used BrowserStack to test in IE9, however could get my local files to load the AJAX calls.
* Completed the "Dynamic Content" when javascript is enabled. Figured I'd have to set up the server for dynamic content without javascript.
	* issue: When javascript disable, step 1 doesn't automatically load to the page (3/30).
* Did not use SPA frameworks, or any frameworks. Used JQuery and Normalize. Looked into using Modernizer.
* Began refactoring code to make it more readable/efficient. In app.js I started working on a getFriends Function that would utilize $.map to loop through friends.

Server
------

Would have loved to get into some of the back-end coding I understand, but focued on making my JQuery calls and a working webpage without javascript.

Dynamic Content
---------------
Created a showFriends function that selects friends based on the navigation tab clicked, has a count of how many are on that step, then formulates a messages based on that information.

D.R.Y code
----------
Went for keeping my code as D.R.Y. as possible, however I focused on working code first. The one example from my app.js file is when I add the is-current class to elements. I was thinking about creating a function that would add that class, that I had to call twice.