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
