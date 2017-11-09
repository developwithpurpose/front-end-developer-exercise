Document your submission here (optional, but recommended)

My skill set is not necessary focused on Front-end development.  That being said, I
usually use an application framework (BlazeJS or React) as well as a CSS framework
like Materializecss.  My skills with vanilla CSS and JS are a bit rusty, this took
me longer than it should have.  ( lately I've been doing alot with C )

NOTES:
--------------------------------------------------------------------------------
I designed the site to be functional without JS (as per the spec) but I didn't spend
time trying to integrate CSS animations, rather animations were done with JS. In my
experience, CSS animations are clunky and a real pain to get working across a wide range
of browsers. So, when you disable scripts and load the site, you will see that it is
useable, but will lack animations outside of Chrome and FF.

The mockup image shows the AJAX data being formatted as being Helvetica 13 reg,
but it looks like its bold, so I have it a weight:600.

For the header I didn't put the text on it manually, but probably should have.
The alt tag contains that text so it should still be scrapeable by a bot. I do now
see that the size difference is ~15k

For the icons, I chose to use the sprite sheets.  This way your moving less bandwidth
and have less requests against the server.  I probably could have just used the
large icons and resized them for use as small icons...
--------------------------------------------------------------------------------


JAVASCRIPT
--------------------------------------------------------------------------------
For the JS when the document gets loaded it highlights babystep 1. Then it makes
the AJAX request and if it receives a valid response, it updates the necessary DOMS
by adding the appropriate message logic

The only other function is a click jQuery function tied to the "navbar_a_link" class.
When that class is clicked it removes the class "selected" from all doms with class
"navbar_text" and "navbar_icon", then adds selected to the "navbar_text" and "navbar_icon"
that have the class bs_X (where X is the step contained in the e.target.attributes.step)
After it properly updates the nav items colors, it will slide the tab to the correct
nav item, then it will scroll the #content_babysteps_panel to the correct position
--------------------------------------------------------------------------------

HTML/CSS
--------------------------------------------------------------------------------
I'm not particularly amazing with CSS.  I made all of the class names easily readable
and understandable so no real explanation should be necessary.  The website layout
is in no way dynamic, it was designed to be mockup as closely as possible in a
reasonable amount of time.
--------------------------------------------------------------------------------

PRODUCTION
--------------------------------------------------------------------------------
One of the objectives of the README was to treat the deliverable as production.
For this reason I removed the unnecessary files from the app directory.  That is
also why I chose the sprites over the icons and the headers. (reduce calls to server
and bandwidth usage) The only thing left would be to minify the code.
--------------------------------------------------------------------------------
