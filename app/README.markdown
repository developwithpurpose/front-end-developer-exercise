Trevor Broaddus: Front-end Developer Exercise
============================

Objective
---------

Build a web page that will provide information about The 7 Baby Steps.

Overview of Implementation
--------------------------
Express was an awesome way to get this project up and running without having to write vanilla html. It was my first time using it and am a definite fan.

It offered an easy way to setup the dynamic portion of this project with the friends listing for each baby-step, and gave me the ability to template out the page using handlebars.

I kept the rest fairly basic, with vanilla CSS (not my strong suit) and jQuery to aid in the javascript-y pieces, such as the animated step toggler, ajax calls, and tracking which was the active step. Note that disabling javascript will disable the ability to change steps, the animation, as well as the friends feature. Im not sure if I will get to it, but you could have an endpoint that takes a baby-step number, say '/step/:stepNum', which returns a version of the site with the specified step set to 'active', which would mitigate the breakage of step changing when js is inactive.

Incorporating something like gulp would be awesome, since the css can be refactored like crazy to use sane color variables and logo-url variables with SCSS (and the gulp-scss plugin). You would then be able to minimize the 'main.js' file, and start incorporating testing/linting and such.

I think this app keeps a relatively small footprint, with the exception of all those images that are loaded.  This could be cleaned up by using inline svg (base64 encoded), increasing html size but saving on network transfers.

Caveats
-------

There is a slight delay when clicking two steps very quickly. This is due to a race condition I have (mostly) mitigated, minus the delay issue. Initially, two baby-steps would be the white background if clicked in close succession. When clicking two steps in very close succession, the jQuery 'animate' from the first click is still working, leaving me unable to change the background-color until it is finished. So, if we are currently animating, I wait for the animation length (600ms) until I go through with the second call. Debounce didnt work since when clicked at (relatively) the same time, both calls start/end waiting at the same time, leaving you with the same issue.

Its not responsive...at all. In fact opening your dev-console breaks the step-outline because I am setting a div height on the viewport height. 
