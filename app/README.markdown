Front-end Developer Exercise
=========================================

PAGE OVERVIEW
-----------------------

I actually ran out of time with this, which I'm pretty bummed about. I think I actually worked on it 4.5 hours....lost track of the time :( I would have loved to have finished this, but it still feels unfinished, in my opinion.


STRUCTURE
-----------------------

Built using the html5 doctype, leveraging css3 (animations, transitions) where I could. Not too much to say here I think, pretty straight-forward.

Imported two fonts used for the project: Open Sans and Source Sans Pro from Google fonts cdn.

Integrated SASS to speed up my workflow a bit: a few variables, a mixin, nothing major. It's also compressed and minified.



JS
-----------------------

Implemented the jQuery library.

File starts with setting the overflow element height and overflow to hidden to hide the scrollbars. If JS is not allowed within the browser, these elements will not be set and content will still be accesible. Then I set some variables that can won't unchange throughout content-processing, and then the left menu white box height & width to match the others.

Next block deals with the triggers that move the content. I setup the AJAX Get request, and set a bunch of variables to act as counters to increase with each instance of babystep. I think I could have probably created this to be a nicer, more understandble system, seems a little chunky. Then to insert content into the target, I empty it first, and then run if statements to check the li that was clicked, and print the correct content to the target. Because I ran out of time, I would have loved to made this section more dynamic, to actually pull in the names, and not just hardcode them in.

And lastly, the final section block moves the white box in the left menu, and calculates and animates the scrolling content in the main container.



