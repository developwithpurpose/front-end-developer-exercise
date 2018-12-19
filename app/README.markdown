Front-end Developer Exercise - By Bjorn Bennett
============================
Here is my submission for the Front-end Developer Exercise. The production files are located in the app folder, and the development files are located in the src folder. 

RUN THE 
============
Initialize the server with

```
npm start
```


GULP
============
To streamline my workflow, I used Gulp as my task manager to perform several tasks. I also minified the html/css/js files and exported those to the app folder, where the production files are located. The development files are located in the src folder. I used browser-sync module to watch for changes and serve the developement files, htmlmin module to minify my html code for production, sass and autoprefixer to cut down on css repetition, and uglify to minify the JS file.

SASS
============
I imported a reset stylesheet to reset all of the elements across browsers, to have the most consistent browser experience. Used in combination with the autoprefixer module to add vendor css, this saved time manually looking for any prefixes I might need. I utilized variables for repetitive values, and used nesting to be more DRY. This sped my workflow up dramatically, enabling me to complete the task in time.

HTML
============
All of my HTML structure elements remain visible if JS was disabled, so you would still be able to read all of the content on the page. The one thing missing if JS was disabled its that the JSON data would not show. However, everything else can be seen.

JS
============
I created most of the variables toward the start of the file, even if empty, so that I could access their properties once they were set.

I then import the JSON data and assign it to an empty local array.

After that, I created a function to check the heights of each baby step. Each baby step is inside an article with an assigned class for easy targetting. These articles are nestled inside a container that moves either up or down. These heights were used to shorten or expanded the height of a window that was set to overflow hidden.

Next is a function to deal with the babystep information. First it empties an array. It takes an argument which is a babystep integer from 1-7 which represents each baby step. A forloop loops through the array and checks each object if a babyStep matches the function argument. If there is a match, it is pushed to an array, waiting to be sorted. Next, this is a sort function to organize the entries by last name. There was one babystep that had two people with the same last name, so they needed to also have their first name sorted. Once the array was sorted, I output the first two people objects out to variables, because in any given sentence, there only ever shows a max of two names.

Then, there is a move article function, which takes two arguments: resizing the article "window", and moving the articles up or down once given a value. This is used inside the click function

Lastly is a click function that watches for clicks to the left menu. If there is a click on one of the items, it will change the look of that text / icons. It uses the function to check the baby steps, rechecks the heights, and then moves the article.

