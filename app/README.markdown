Front-end Developer Exercise
============================

Overview
--------

An application to display information to a user on the Baby Steps.

HTML
----

The HTML is divided into three main components:

* Header - displays a hero image with page title
* Content Nav - navigation for the content
* Content - shows the content

CSS
---

SASS is used to compile all stylings into a single CSS file `./assets/stylesheets/main.css` I used ITCSS for the stlyesheet architecture `https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/`, and used BEM with namespaces for naming conventions `https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/`.

No JavaScript Version
---------------------

Users with JavaScript disabled will still be able to interact with the core functionality of the page. This was achieved by using the anchor tag #hash functionality to navigate users on click to the appropriate content area. This also has the added benefit of allowing the sharing/bookmarking of particular steps through the unique URL (e.g. `/#step1`, `/#step2`, etc.)

JavaScript Dependencies
-----------------------

* jQuery - used for animation and retrieval of friends' JSON data
* Lodash - used for templating of asynchronously loaded content
* Babel - compiles next generation JS

JavaScript
----------

`./assets/javascripts/content.js` - JavaScript class and functions that control the animation, navigation and interactions of the content.