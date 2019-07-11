Front-end Developer Exercise - Paul Jeter
============================

## HTML

- **HTML5** - I used HTML5 elements for a semantic and accessible page layout

## JavaScript

- **ES7** - I chose to use vanilla JavaScript vs jQuery or any other libraries.
- **Dynamic Content** - I used the fetch method with polyfills for older browsers

## CSS

- **Scss** - I used Scss to create modular CSS and to re-use the color variables.
- **BEM** - I used [BEM](http://getbem.com/) for class naming and structure.
- **Layout** - I used a combination of CSS Grid and Flexbox.
- **Icons**: instead of individual images or sprites, SVG's or font icons should be used. In the absence of these assets, I have used the sprite technique. This adds more CSS than would be necessary with with SVGs or Font Icons
- **Shadows**: I used an inset box-shadow instead of the shadow images provided. This is a more modern and scalable approach.

## Build

- **Webpack** - I used a simple webpack starter project for transpiling the Scss into CSS and the ES7 into ES5 Javascript
- **dist** - run `npm run dist` to build to the dist directory and start the server
