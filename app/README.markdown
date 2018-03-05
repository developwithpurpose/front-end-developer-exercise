Front-end Developer Exercise
===================

Implementation of The 7 Baby Steps by Stephen Kirkpatrick.

----------


## Table of contents


[TOC]


Implementation Notes
-------------


CSS placed in external files with link tags in document head.

Third-party Javascript loaded from CDNJS.  Script tags placed at end of document body to improve page load performance.

Bootstrap was integrated into this exercise, primarily for the Baby Step navigation.  Per the request, this site is not responsive. Non-responsive alternatives to Bootstrap .container, .row, and .col-\*-* class were implemented.  The responsive grid was disabled where core Bootstrap classes were used, such as the Baby Step navigation.

For the dynamic content portion of the exercise, a JavaScript port of Linq was used to simplify searching and filtering the JSON data.

The Animate.css library was used for the navigation animation.

Colorzilla was used to generate the gradient CSS.

All text files edited with Vim.  Tabs are expanded to spaces.  HTML files indented 2 spaces.  All other files indented 4 spaces.  A Vim modeline directive has been placed at the end of each file.


Browser Deviation Notes
-------------
No behavior or UI differences observed between any of the following browsers:
* Chrome (64)
* Firefox (58.0.2)
* Edge 
* Internet Explorer 11

Only desktop browsers were tested, as this is a non-responsive page.



----------
