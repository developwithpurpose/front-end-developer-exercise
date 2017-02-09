Front-end Developer Exercise
============================
Patrick Hill


Objective
---------

Build a web page that will provide information about The 7 Baby Steps while following key criteria and staying under a time allotment.


Tools
------------

* SCSS
* Bootstrap Grid and Core CSS
* jQuery
* Modernizr
* Autoprefixer
* SCSS & ES Linter (with RECESS ordering guidelines)
* Gulp


Approach
------------

Site and data scope in combination with limited time did not warrant unnecessary complexity. I focused on displaying the data in the simplest and most flexible way possible and then enhancing with JS. I'm using JS to manage active class states of the primary nav and content wrapper. When javascript is unavailable, the content looks nearly identical with the notable exception being the menu active state. While the site is not fully responsive, it has been built in such a way to very easily make it so.


Images
------------

Instead of loading 25 separate resources for all the icons, shadows and hero image, I chose to use the two sprite sheets and hero bringing my image resource count to 6. I prefer this as it prevents the image-load flash on menu active state. I also decided to use css for the primary menu gradient instead of an image. I did, however, elect to use the 3 shadow gradient images for the primary container since it offered the greatest flexibility.


IE9
------------

Looks very similar. I drop the nav gradient and active item transitions. I lose Flexbox and am setting my step wrapper to a static size to accomodate. I had to change my icon position to pixel values instead of percentage. From a quick glance this will not be noticeable but would've been had the content had greater size inconsistency. I did have to add a conditional ie9 css file to account for a no-js version.


In Additon
------------

* Added OG Tags and Twitter-Card for Sharing
* Added Favion
* Linted SCSS and JS
* Verified in Chrome, Safari, Firefox and IE9-11


If I had More Time I Would Have
------------

* Found a more dynamic way of setting the step wrapper height to mimic Flexbox
* Added Critical CSS
* Loaded JS asynchronously
* Used Handlebars or Vue.js to render my data in the primary template allowing me to possibly improve my code semantics
* Fixed Window Location to be pertinent and direct to correct step
* Refactored JS and reconsidered logic flow
* Added IE9 CSS to gulp build process
