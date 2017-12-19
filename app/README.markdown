## Decisions

#### Sprites instead of individual Icons
----------------

I decided to use the sprites instead of the individual icons for performance. It uses less html markup and a small amount of css markup which is worth it for the performance savings of only one net request.


#### Fonts
----------------

The webfonts are loaded from google using the typekit webfontloader package. This loads the files asynchronously to give a faster paint time and doesn't block the rendering.

I did make one adjustment for the header sections of each block of content. the line-height in the annotation was listed as 20px for the main header, but I changed that to 30px to reflect the mockup better. 20px was too close.

sans-serif is provided as a fallback, but if this were going to production i would package helvetica with the rest of the fonts for consistency.


#### Transitions
----------------

I did the transitions by simply animating the top property. This works in ie10 and up as well as older versions of chrome/firefox/safari. See below for ie9 support. Transitions (except for ie9) work without javascript enabled.


#### IE9
----------------

I tried my best to use standard css properties that have been around for awhile, and the only challenge was the transitions for the older browsers. This was accomplished by conditionally loading jquery and an ie9-specific script if the browser that's being used is IE9. jQuery is not loaded for any other browser.


#### Dynamic Content
----------------

At the beginning I made the decision not to add any transpilation of the newer syntax so i stuck with very basic functions.


The script has three main steps:
* Get the file with ajax
* Count the friends for each step
* Generate the messages and inject them into the dom in the correct place.


For each name I created a new link that opens a new tab to the persons name. I didn't know what should be put there so I just set it to that to show the name was accessible.


#### Additions
----------------

I added the gulp workflow to have a live reload when files change and perform file optimizations.

* Images are minified
* Stylus is compiled, autoprefixed, and then minified
* Javascript is minified
* Images are compressed
* HTML is minified

I have removed the images I didn't end up using. Upon running gulp and new 'dist' folder is created to be deployed. 'app' structure is unchanged for actual editing.

When running npm run start the server is launched and all files are processed. If html, scripts, or styles are changed, gulp recompiles and reloads the browser. Styles inject. localhost:3000 can be open in multiple browsers and they will sync.


### Browser Support
----------------


Tested in:
* ie - 9, 10, 11
* Safari - 10
* Firefox - latest
* Chrome - latest
* Edge - latest


### Final Notes

### Things I would have changed

The biggest thing that I would change is how many areas of this layout were required to be hardcoded. I try to do all of my layout values with fluid widths, but for some of this it wasn't possible. As a result, this layout is pretty ridgid and wouldn't work well for any smaller screen sizes. I would have started out working on a responsive layout.


The css-only tab transitions work well, but feels a little complicated when looking at the markup and styles. Using javascript would be a far more elegant solution. This, however, has the drawback of requiring js to be enabled so that would not work for this assignment.


I would have used svg sprites instead of png. The filesize is smaller and allows for finer control (ie. changing the color of the svg without needing an entire new set of sprites).


If this were a larger project, I would definitely be integrating a more thorough build system with an html template engine and some sort of test suite. I would probably also build a data file to help generate some of the more redundant code. 
