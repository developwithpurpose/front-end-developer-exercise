Front-end Developer Exercise Solution Notes
===========================================

I have created this solution according to the requirements & success criteria in the [project instructions](https://github.com/developwithpurpose/front-end-developer-exercise/blob/master/README.markdown).

Below are a few things of note related to the solution:

Libraries & Modules
-------------------
* **jQuery:** I used [jQuery](https://www.npmjs.com/package/jquery) to easily add click events to the nav, and for loading dynamic content via Ajax. 

* **Lodash:** I used [Lodash](https://www.npmjs.com/package/lodash) to easily filter & sort the ajax results

* **Bootstrap:** I used [Bootstrap](https://www.npmjs.com/package/bootstrap-sass) to easily define many of the styles for the solution according to the annotated mockup, as well as for the carousel component.  The bootstrap style definations van be found in the [variables file](../resources/assets/sass/_variables.scss).

* **Elixir:** I used an NPM module called [basic-elixir](https://www.npmjs.com/package/basic-elixir), which is an NPM module that I created to bring [Laravel Elixir](https://www.npmjs.com/package/laravel-elixir) into a basic web application.  This is what I used to compile my SASS and to webpack my Javascript. The compliation settings are still defnied in *gulpfile.js*, as they would be when using native gulp, but *elixir-basic* can do in a few lines of code what would take much more with native gulp. 

  The uncomplied versions of my code & config files can be found as follows:
  * ***[resources/assets/js](../resources/assets/js):*** This is where all of my uncompiled javascript can be found
  * ***[resources/assets/sass](../resources/assets/sass):*** This is where all of my uncomplied sass can be found
  * ***[gulpfile.js](../gulpfile.js):*** These are the *elixir-basic* commands to compile my sass and webpack my scripts
  * ***[elixir.json](../elixir.json):*** This is the configuration file for *elixir-basic* where things like input/output folders are defined
  

Fonts
-----

I used [Google Fonts](https://fonts.google.com/selection?selection.family=Open+Sans:700|Source+Sans+Pro:300,400,600&query=helvetica) and imported the *Open Sans* and *Sans Source Pro* fonts.  

Icons
-----

I chose to go with the spritesheets for the icons rather than the individual icons because they are more efficient.   Individual icons require one request per icon, whereas a sprite sheet requires one request per entire spritesheet.

The spritesheet for the large icons is actually off by a few pixels. Each large icon is 65px hight. Since there are 7 icons for the default state, and 7 more for the active state, the total height of the spritesheet should be 910px (14 * 65px). The actual height of the spritesheet is 907px.  I adjusted for this using CSS.

Dynamic Content:
----------------
The dynamic content is loaded each time a nav item is clicked.  Since the first baby step is active by default when the page is first loaded, its dynamic content loaded automatically on page load.


Accessability:
--------------

If Javascript is disabled, the site is still accessable.  All of the steps will be displayed at once, and the nav will link to the various baby step sections.  I added 70px spacing below each section for ease of reading, the same amount of spacing that the annotated mockup indicates should be used on the right of each baby step section.

The dynamic content will not be loaded, as it requires Ajax.

