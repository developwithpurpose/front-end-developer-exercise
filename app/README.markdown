Results - Front-end Developer Exercise
======================================

Submitted March, 2016

Instructions
---------

Pull this repository, then execute the following:

```sh
npm install
gulp build
```

You can then run `npm start` as per usual, or use the livereload-enabled `gulp dev` task (which will rerun the build again).

Approach
------------

My goal for this was to implement a simple yet maintainable structure, although I will admit to adding complication to certain tasks just to demonstrate a broader sense of thinking and provide additional context.

I started by setting up a gulpfile to 

1. serve as the local host
2. compile the artifacts
3. build the deliverable (a single static dist.tar.gz file, which can be dropped anywhere and executed)

_In the interest of time, I skipped the steps to (a) lint the JS, CSS and HTML for errors, and (b) provide enhanced minification._

Next, I built out the index.html as the base template, which has the Steps content compiled into it at build time. I authored the HTML to be relatively accessible, accounting for search engine crawling, disabled javascript, and some level of readablity even when CSS is disabled. Few highlights:

* Img tags are included to explicitly load images related to the content (but NOT the navigation - note the use of sprites)

* Speaking of sprites: I haven't done anything with sprites in 7 years at least! All of my projects lately have been implemented via SVG / SVG packages for iconography etc., using these approaches (https://github.com/blog/2112-delivering-octicons-with-svg) and (https://medium.com/@webprolific/why-and-how-i-m-using-svg-over-fonts-for-icons-7241dab890f0#.cfgj1m5b0)

* Key content tags employ the use of correct heading tags such as `<h2>` or `<p>` for accessibility.

For the CSS, I included no external libraries or reset sheets, and only provided styles for the elements for this task. Resets are great -- but only if you are actually going to use them! Couple things of note:
* While lately I have been using flexbox for layout, I had to take a step back to support IE9 and used the micro clearfix method instead.

* I used a number of `:before` & `:after` classes to decorate the page with the required background images & colors, while keeping the base HTML free of unnecessary elements.

Other considerations of note:

* app.js's only dependency is jQuery, and I was debating as to whether to even include that, however given the IE9 requirement & time constraints I decided to go ahead with it. 

* The JS I kept as minimal as possible, but tried to clearly define the functions and thought process so there is some additional decoration with the goal of being clear.

* Normally I will abstract markup and text (strings) from the JS, but included some bits in this case in the interest of time. Ideally text should be abstracted so that it is easy to manage and easily available to provide translations, and HTML is abstracted into templates that are compiled.


Result
------------
The end result is that every line of code in this project has a specific purpose; there's nothing unused or unexecuted. No resets. No wasted libs. All hand-coded. Total time was about 6 hours spread out over a 3 days.