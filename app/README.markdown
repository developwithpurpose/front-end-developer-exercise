Local Server
------------
If not already, be sure you've got [Node.js](https://nodejs.org/en/download/) installed. 

Create a new file named `.bowerrc` in the root of the repo; see `.bowerrc.dist` as a starting point. 

As required, `npm start` is the command to spin up the environment. This command will do a few things:
- ensure all required *bower* packages are installed
- ensure all required *node* packages are installed
- pre-process front-end assets
- spin up a local server
- watch for changes in source files; re-processing and live reloading when changes occur

run `bower install && npm install && grunt server`. Refer to the `server` task in [Gruntfile.js](Gruntfile.js) to see what it entails. 

JavaScript Libraries &amp; Modules
----------------------------------
The page uses [jQuery](https://jquery.com/), [jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing/), [jQuery ScrollTo](https://github.com/flesler/jquery.scrollTo), and [Modernizr](https://github.com/Modernizr/Modernizr). These libraries are installed via the `bower install` command that is run as a result of `npm start`.

The core of the page uses hand-written JS modules, which extend a base object that is a child of the `window` object.

Navigation &amp; Animation
--------------------------
The native jQuery.animate() function was attempted for the content scroll, but the animation was too jittery. jQuery.scrollTo() is in use instead.

JavaScript Disabled
-------------------
The content of all the Baby Steps are presentable when JS is disabled. The sidebar navigation is hidden, and the friends/social feature is unavailable. A small set of styles are applied to `html.no-js` children that affect the layout. 


Asides, Caveats &amp; other Whatnots
====================================

*Deletions*   
Files deletions from the original repo were for the purpose of providing clarity on what assets are actually being used. Images for the content headings, for instance, were not used because the design was achieved with styles.