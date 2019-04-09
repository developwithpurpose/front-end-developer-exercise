David Fioravanti Front End Submission Discussion
============================


Overview
---------
My main solution involves DOM manipulation of the content. In order to honor the 4 hour time limit, I was able
to write the solution more quickly using the document directly as opposed to using JQuery for these operations.
I wrote most of the logic in util.js, and the Baby Step data is returned in JSON format from a function in
data.js.

AJAX Call
---------
I used JQuery only for the AJAX GET request to return the friends JSON data. I make the call on page load and on
every selection of the Baby Steps table because even though the data is not going to change in this example, it
could theoretically change on the server.

No JavaScript Support
---------------------
Supporting browsers without JavaScript was an interesting challenge. For most browsers with JS, the main content is
rendered by DOM manipulation and the data is retrieved in JSON format from a JavaScript file. My solution is
to include a noscript tag in the metadata and redirect the user to a static HTML page on Baby Step 1 which 
functions without JavaScript and links to mirroring pages that represent the other 6 Baby Steps. The downside
of this approach is that this would not scale well as the combinations of page states increases. In addition,
this is difficult to maintain as the content is duplicated across multiple files. One solution to this would
be to generate these static files in a build script so that the core content is housed in one place. I am very
interested in learning more optimal ways of supporting non JavaScript browsers, but this is a working solution 
in order to comply with the spec.

Flexbox
-------
Since I am most fluent using Flexbox for styling webpages, I used Flexbox for most of the core styling except for
specific pixel requirements called out in the spec. This unfortunately is not supported by IE 9 as required by the spec.
My intention was to refactor this code to support older browser versions but I was not able to do this in time
with the 4 hour mark.

CSS Transition
--------------
My animation is pretty simple. I added a CSS fade transition to the background of the button when selected. This animation
is not expected to work in browsers that do not support JavaScript because the animation is triggered by DOM manipulation.

Improvements
------------
With more time, I would prioritize the following improvements to this submission:
1. Update styling to support older IE versions. This is priority 1 as it is in violation of the spec.
1. Create a more involved animation.
1. Write Jest Unit Tests to test the JavaScript utility Functions.
1. Use Sass/Less to replace CSS so I can nest classes and make the source code clearer. This would require a tranpilation step.
1. Convert vanilla JavaScript to ES6 syntax to clean up the source code. This would also require a transpilation step.
1. Convert JavaScript DOM manipulation to use JQuery.
1. Write a utility function to generate nojssupport html files during build.
1. Use sprites to improve performance of image icon rendering.
