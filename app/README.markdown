<h1>Developer Exercise</h1>

## Summary
My initial goal when thinking about the implementation of this project was to make nearly all functionality and content usable through strictly HTML/CSS, including animations, with minimal help from UI libraries such as Bootstrap or Foundation. I used `<input type="radio">` to group all the clickable Baby Steps tabs, as there should only be one Baby Step active and show at one time. Initially, I used the `display` attribute on the right column content for each Baby Step, but switched to using the `opacity` attribute as using `display` causes browsers to cancel all CSS transitions.

## Build
I included Gulp to accelerate the development process. Because the scope of this project was relatively small, I included minification in the live reload process, but on a larger project that would likely be housed under a `build` or `dist` task. The ability to run `npm run dev` and instantly watch any changes made instantly appear in the browser is a big boost to development thoroughput.

## Style
I included Sass with the thought that this could potentially turn into a larger project, and would likely want to include Sass or another CSS extension language in the future. It might have been a bit overkill for the size of this project, but it allowed me to create modular style sheets. I spun out a seperate `sass` folder within `stylesheets`, and within that folder used `base` to keep track of common variables (like colors) and mixins, `vendor` to house any external sheets used (I used normalize.sass), and then `components` to keep track of page-specific styles. At this point, all components for this page are at the root level of the `components` folder, but if more pages were added I would probably wrap the current root level components into their own page-specific folder.

For my Sass files, I followed the styling rules per element block of

1. any `@includes` or `@extends`
1. element attributes in alphabetical order
1. any nested elements

I also included `eslint` and an `.eslintrc` file to keep JavaScript style consistent through building the project, as well as adding a gulp task to lint all `*.js` files on any changes.
