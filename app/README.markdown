Front-end Developer Exercise
============================
By Jerry Bailey


CSS Resources
---------
* SCSS
* Normalize
* Bourbon

JS Resources
---------
* jQuery
* Underscore
* TweenLite / TimelineLite


Notes
------------

* Loaded fonts from Google
* Used sprites for icons
* CSS and JS files have been minified
	* Used Atom packages for this
* Bourbon and Normalize were added via node
* Without javascript the page uses regular bookmarks and all the steps are in a list
	* The `noscript` class on the `body` adds a couple styles to the steps
* If javascript is enabled it clears the list of steps and stores them to be loaded individually
* Dynamic content is only loaded once on initial load of the page
	* Once loaded it adds the friends information to each stored section
	* `fetchFriends()` can be called on the app at anytime to get the latest friends data and update the sections
	* Friends are sorted by last name and first name
* Button animations are done in css
* Content animations are done with TweenLite and TimelineLite
