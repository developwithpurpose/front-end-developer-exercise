Front-end Developer Exercise
============================

by Aaron Moradi

npm Scripts
-----------
- prestart
	- runs "gulp"
		- compiles less, adds browser prefixes, minifies, renames, and pipes to destination
		- concatenates JS, uglifys, renames, and pipes to destination
		- minifies hml5shiv.js and pipes to destination
		- lints JS 
- start
	- starts server and listens on port 8080
- lint
	- lints JS

Styles
------
- these are composed in less
- modular, by component, element or variables

JS
--
- main Baby Step tab script is exposed and namespaced in the global DaveRamsey object (this was chosen over an anonymous function to better faciliate unit tests)
- jquery, a 2 feature modernizer build, and html5shiv are vendor scripts

Masthead
--------
- background image and HTML text were chosen over just an <img>
- for better site-wide design unity, accessibilty, and SEO

Baby Steps Tabs
---------------
- the component is coded as page anchors
	- this enables off page linking to specific steps
	- non JS functionality
	- and tabbing navigability
- icons are background images to utilize the spritesheets and limit http requests
- tab transitions are done with CSS3 transitions and animations. A jQuery fallback is also present for browsers that don't support CSS transitions and animations.
- friends in dynamic summary story were composed in blue in the mockup, but because they are not links, they are not blue. Link styles are present in the CSS though.

When JS is turned off
---------------------
- and page anchor (or hash) is not present, 1st tab does not look "active" but content is initialized correctly
- 1st tab animation is not exactly the same as the rest (but close)