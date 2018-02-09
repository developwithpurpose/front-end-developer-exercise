# Project Outline

Tools Installed:
* SASS
* Babel

Reasoning:
* After reading through the instructions I installed SASS to leverage variables and keep the style more organized.
* I installed Babel to transpile the JavaScript I planned on writing for the Dynamic Content.

Installation Replication:

## SASS

1. Install: `gem install sass`
2. Create: `style.scss` and `style.css`
3. Run: `sass --watch app/assets/stylesheets/style.scss:app/assets/stylesheets/style.css`

## Babel

1. Create: `src/script.js` and `javascripts/script.js
2. Install: `npm install babel-cli babel-preset-env babel-preset-es2015 --save-dev`
3. Run: `$ babel app/src/script.js --out-file=app/assets/javascripts/script.js --presets=env,es2015 --watch`

The goal was to install both of these tool to save me time, but in hindsight SASS may have saved me a bit of time but Babel ended up costing me time since I ran out of time on the Dynamic Content section.

## Time Breakdown

Using toggl to time track, here is the breakdown of how I spent me time:
* Clone and Setup Project: 15 minutes
* Installing Sass and Babel: 17 minutes
* Base markup: 35 minutes
* Setting up Google Fonts and Sass Base Styles: 32 minutes
* Complete Style: 1 hour 41 minutes
* Javascript/JQuery: 55 minutes

## Approach

My main goal was to create semantic markup, replicate the style of the provided mockup as closely as I could, and get the content blocks working with the navigation. Once that was complete, circle back and work on transitions and the Dynamic Content section and test IE support.

## Deviations

* Small icon to the right of the Baby Steps in the Nav. I didn't complete the transition to the blue icon when the link is active. I also just realized there is a sprite version of the small icons that could have been handy.
* Wasn't able to complete the Content "smooth scroll" transitions. Started to work on a Javascript solution but didn't have time.
* The nav does have the active state style but no transition. I've never used JQuery before, but due to time constraints I just used a quick JQuery snippet to add and remove the `.nav--active` class.
* I Ran out of time on the Dynamic Content. After doing a few minutes of research, I realized I've never actually used a vanilla JS AJAX request. I started to look for a solution with JQuery given that I was already using it but didn't have time to learn it. With just a few minutes left I just did a `fetch()` (which I'm aware isn't the same as an AJAX request), but just wanted to get something on the screen if I could. Ultimately I just ran out of time, hence why there is just the `baby-steps.json` object being console logged.

## Conclusion

I've learned that, while frameworks are great, I've relied a bit too heavily on them to do things like AJAX requests. I will definitely be adding learning how to properly do an AJAX request to my development curriculum. I also learned that not every project needs build tools. While SASS didn't take long to install and it made me feel that the style sheet is more organized, I could have done with out it. Also, while it would have been fun to write some es6 and transpile it using Babel, I should have just keep it simple and written JavaScript or JQuery that is supported in older browsers to begin with.

### Thanks!

Thanks for giving me this opportunity to do this challenge test my strengths and weaknesses.
