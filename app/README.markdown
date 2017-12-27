# Front End Developer Exercise
----
## _Ronnie Petty_


#### Overview
Using Gulp as a task runner for this exercise. Ordinarily, I would use Webpack, and modern JavaScript, but felt it wasn't necessary for this project type.

For scripting I am writing this in ES5 and not in ES2015+, which most often times I would, as I am not bundling this application. Transpiling ES2015+ would also require polyfilling for IE9 which would extend the duration of this exercise.

For styling I am using the Sass preprocessor and some pieces of PostCSS, Autoprefixer and CSS Nano, to output the production ready CSS.

Everything will be production ready in the app output including minified CSS and JavaScript. The SCSS files and the Unminified development JavaScript can be found in the src folder.

#### Details
HTML has ARIA details included.

My preference is for clean and maintainable code. The JavaScript and Sass structure is structured for this purpose. I used a regular XMLHttpRequest and made the JSON being pulled into the footer as dynamic as possible. For the scroll animation I just nested one div and used overflow and the GSAP animation library to do that as cleanly as possible. It's lightweight and will work in IE9. The same goes for Lodash on some helpers that I've constructed to pull in the JSON data.

For that JSON data I'm mapping the Baby Steps and counting those to ensure that it will always show how many friends other than the two showing. As for the friends themselves, I'm grouping by Baby Step and slicing out those groups out on their own. This way the two names showing might not always be the same but they will belong to the correct Baby Step.

The XMLHttpRequest itself is waiting for the ready state and is looking for a 200 status. This way if there's any connection failure things are handled.
