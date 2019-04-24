Goal that I had for this project was to use as much vanilla js as possible with no external libraries. Unfortunately, I was not happy using XMLHttpRequest objects for handling the ajax call and newer tech such as fetch or axios are not supported by older browsers. This left with using jQuery.

I also wanted to use es5 syntax since I would not be using es6 + babel to transpile the code. Normally I would write in es6 and use babel + webpack to handle bundling, minifying, code splitting and postcss to add vendor prefixes but given the time constraints and time to setup, I choose not to use these packages for this project.

Another goal I had was to reduce the number of DOM hits made by the scripts so I store the DOM elements to reuse throughout the rest of the script. There is refactoring that could improve the code such as using event bubbling to have a single event listener but it was not how I initially coded it.

For the header I went with the background image with text overlay because in the future, it would be easier to change text without having to redo the image and photoshop and export a compressed version again.

nav elements use the css sprites for the icons to reduce the number of GET requests the server has to make. I choose to do so because it would save 13 requests. I however did not opt to use sprites for the larger icons because it is a form of pre-optimization. Doing this too early can waste lots of time if you decide to switch icons or changes sizes. You can go back later to use css sprites if you want to optimize and reduce some overhead.

I used a box-shadow/drop shadow to replace using the nav shadow images as that is much cleaner and less overhead, without having to position background images where you can run into lots of problems.

Used flexbox for the layout even though it is only supported in IE10+. It would default back to block elements so they stack instead of side by side but it would still work functionally.

Semantically the nav elements should be buttons as they do not navigate to another page but keeping them anchor tags allows them to still work when js is disabled. 

As we are trying to simulate a production environment, I included a minified version of css and js files. I also use CDN's for loading fonts and jQuery.
