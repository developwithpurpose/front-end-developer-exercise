Front-end Developer Exercise - Justin Meeker
============================================

Plan, Plan, and Plan Again
--------------------------

Knowing that the time I had to work on development each evening was very limited, I set a goal of 7 business days and simply created a plan to tackle multiple small steps per day.

For me, every minute that can be spent on the front end to create a development plan is well worth it. Over the years I've learned that the more time you take to invest in the planning stages, the less time you waste figuring out your next step during development. So, I'm not ashamed to say that I spent the first two days of my alloted time simply familiarizing myself with the project scope and creating a plan to maximize my development time.


Directory Structure for Development
-----------------------------------

I added a directory entitled **build** at the top level. This directory contains my scss files, js development files, and any other components I anticipated working with along the way. Additionally, I moved any unused images back into the **resources** folder.


Wait a Second, Where's Grunt or Gulp?
------------------------------------

Grunt and Gulp are both great tools with each one offering something unique. But the more I work in Node.js, the more I've realized that npm can be utilized as my task runner. If you checkout the package.json file, you'll notice that I have setup a few scripts to monitor for file changes and handle most of my tasks with `npm run watch-dev` being my go-to for running everything alongside each other.

```sh
    "build-css": "node-sass --include-path scss build/scss/main.scss build/scss/main.css$
    "watch-css": "nodemon -e scss -x \"npm run build-css\"",
    "min-css": "uglifycss build/scss/*.css > app/assets/stylesheets/main.min.css",
    "lint": "jslint build/js/**.js -browser true",
    "min-js": "uglifyjs2 build/js/*.js > app/assets/javascripts/main.min.js",
    "build-js": "npm run lint && npm run min-js",
    "watch-js": "nodemon --watch build/js/*.js -e js -x \"npm run build-js\"",
    "watch-dev": "npm run watch-js & npm run watch-css & npm start"
```

HTML Structure
--------------

* I utilized the `<nav>` tag instead of `<aside>` for the sidebar menu because, technically, this is the primary navigation of the site and `<aside>` should be used for actual aside content.
* For the baby steps content structure, I created a hierarchy of `<section><article><h1>Step Title</h1></article></section>`. My reasoning for doing this instead of placing all of the step titles as `<h2>` elements was because I felt like each step could stand on its own. For screen readers and other devices that won't be using CSS, I _wanted_ those baby steps to show up as their own top-level heading.
* I considered adding a hidden `<h1>` with the title _Baby Steps to Financial Freedom_ and making all of the subsequent individual steps `<h2>` tags, but decided against this since it felt superfluous.
* I'm not defining a `<footer>` since there's technically not any content that would constitute an actual footer for the page.

The Rundown on My CSS 
---------------------

* My primary build file is located in `build/scss/main.scss`. I'm then utilizing an npm script to process the scss, combine, and minify any additional imported files. 
* I'm importing `build/scss/_normalize.scss` into my `main.scss` file in order to reset all values for all elements. I've found over the years that this helps me achieve more accurate cross-browser rendering with less overrides for specific browsers.
* I'm importing Google fonts for the typefaces specified in the mockup–-other than Helvetica which has been set to fall back to Arial for users without the native font.
* I tried to utilize as few as images as possible and instead render shadows, gradients, etc. using CSS.
* I originally attempted to only utilize the *icons_large.png* sprite file, but found that the downscaling in both Chrome and Safari caused significant drifts in the images creating a slight bounce effect on hovers.
* I rendered all text elements as actual text instead of utilizing images for both page load time, but also scalability and quality on retina devices. This also improves the experience for people using screen readers.

Deviations for IE9
------------------

I tried to keep the design and layout as consistent in IE9 with only a few minor deviations. 

* The highlight no longer animates for the navigation since I utilized the CSS3 `transition:` property to achieve this.
* The Google fonts used in the header render differently in IE9 causing a slight shift.

Animations
----------

To try and keep my code simple, I opted for utilizing `transition: all .5s ease;` on my navigation highlight element and simply changing the position utilizing JavaScript. Although this did not translate for IE9, I still made the choice to go this route since it's supported in IE10 and above.

Instead of sliding the articles for the Baby Steps content, I chose a more subtle `$.fadeIn()` and `$.fadeOut()` animation. I initially created the sliding movement, but felt that having two prominent moving objects on the screen created a distraction for the user. This way, the content still has animation applied, but I don't have two competing animations happening on screen at the same time.

The JavaScript
--------------

When I first began working on this project, I started down the track of processing the JSON through Node.js so the dynamic content could be delivered at page load. However, after reevaluating the project description, I chose to load the dynamic content utilizing `$.getJson()` and deliver it each time they would click on a new navigation item. Although this creates a bit more overhead compared to simply loading the JSON data once and processing it, I feel that it created more of a truly dynamic experience. I wanted the user to be able to see a semi real-time update of where their friends were within the steps. Although we're not changing the JSON data, I wanted to build the framework that would allow for that.

My development files are located in `build/js/` for review.

* **Listen for a click.** On each click of the nav (so long as they're not clicking on the same step twice), I'm triggering three functions: `loadJson()`, `changeStep()`, and `changeNav()`. 
* **Load and sort the new JSON.** Within the `loadJson()` function, we're waiting for the load to complete, then sending the data to a `sortNames()` function that sorts the data alphabetically by last name. Later on, this could (and should) easily be turned into a function with an additional parameter allowing us to define how we want the array to be sorted.
* **Loop through the data.** Once the array is sorted, we're iterating through each array item checking to see if the Step Number matches with the navigation item they've clicked on.
* **Push to a new array.** If the item should be listed for the current Baby Step, then we're pushing it into a new array.
* **Append the friends data to the correct element.** After iterating through all of the data, we're then taking the new array to determine the total number of friends for that step, list them, and decide with grammatical structure to utilize.
* **Change the content.** The `changeStep()` function is fading out the current Baby Step content and fading in the new one.
* **Move the highlight.** The `changeNav()` function is simply changing the position of the highlight element based on which number they've clicked on combined with the pre-defined height for each navigation item. 

Why jQuery?
-----------

I tend to like doing things in the simplest way possible. Although I'm almost always certain there's a more clever way to accomplish what I write, I try to filter everything through the lens of handing it off to another person. And, not knowing who is going to have to pick up that code 6, 12, or 36 months from now, I want to make sure it's straight-forward for even a less-seasoned developer. 

Why? Because I've been on both sides of the equation and have experienced first-hand over the years what it's like to pick up someone else's code--regardless of how cleverly it was written--and try to debug or add to it. And while there are some incredible rock-star developers out there, there are a lot more who aren't (myself included!). In my experience, there is a large pool of individuals who can make sense of code that has utilized jQuery, but wouldn't recognize the underlying JavaScript functions they're calling. On a more selfish level, sacrificing the 86KB jQuery brings to the table more than makes up for itself with the fewer lines of code I have to write. It seems trivial, but when you're trying to fire out code on short deadlines, being able to write `$.getJson` instead of `$.ajax({  dataType: "json", url: ..., data: ..., success: ... });` makes a big difference.

So, you'll notice that I've utilized jQuery functions throughout my code for any places where it made sense and would help shorten my time developing. Some folks may argue that things like `$.each()` should always be written as a for/in loop simply because it would process faster, but I tend to look at the scale of what I'm writing and the over size of the project to determine the time writing code vs. the actual payoff. While I love optimization, I love keeping things simple even more.

No JavaScript? No Problem.
--------------------------

Although we wouldn't be able to load the dynamic content for the user, the rest of the site should be completely usable without JavaScript. There are only a few minor deviations. However, base functionality still remains.

* **No animations.** Since we're using JavaScript to assign new positions to the navigation highlight and fade in/out the content, folks with no JavaScript won't have quite the same experience. But, it will still be functional.
* **No `.active` class.** I'm using JavaScript to assign an `.active` class to each navigation item on click in order to help the user know which item they've clicked on. This class changes the link color, font weight, and icon color.
* **The `:hover` still works for each list item** Although we don't have fancy animations, the user still gets a bit of feedback when hovering over list items.
* **One article at a time.** By defining the height of the `<section>` which contains all of the Baby Steps, setting its overflow to hidden, and setting each `<article>` to have a bottom-margin of 50%, we're able to create a similar feel to the JavaScript version of the site. Each navigation item is simply an anchor link allowing us to use the browser's built-in functionality for scrolling the page and pushing the other content out of view.
