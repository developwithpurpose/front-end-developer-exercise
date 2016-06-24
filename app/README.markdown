Theo Pizza's Front-end Developer Exercise
============================


Key Notes
------------

* App build is managed using [Gulp.js](http://gulpjs.com/).  Be sure you're running Node version 5.x.  The system is currently incompatible with 6.x.
* Markup is written in Haml for cleaner source.  
* No jQuery was used in the build of this page.  While using it would have taken a good 45 minutes off of development time.  Refraining from using it results in a much leaner page.
* Sass and Compass preprocessors are used for CSS.
* All UI elements are embedded within the stylesheet as Base64 URIs.
* While the page is fully accessible with JS disabled, the sliding bar does not follow the active step.
* The only big difference in appearance between Windows and Mac is Helvetica font stack support.
* _Updated 06/24/16_ Removed all Baby Step content from Haml markup and migrated into a Ruby controller to eliminate tagging redundancy.  Did this as a learning exploration as it was my first Ruby controller/helper ever written.


Intentional Deviations
----------------

* The paragraph copy in Baby Step 2 has been reduced by 0.5.  The reasoning behind this was to eliminate the word "debt" from being a widow.

Ruby Dependencies
----------------

Outside of the dependencies managed by npm, the project is has 3 gem depedencies.

* [Haml](https://rubygems.org/gems/haml/versions/4.0.7)```gem install haml```
* [Sass](https://rubygems.org/gems/sass)```gem install sass```
* [Compass](https://rubygems.org/gems/compass)```gem install compass```


Server
---------

The basic web server provided in the project has been replaced with [BrowserSync](https://www.browsersync.io/)

Running the project
------

Before installing project dependencies, you should install Gulp as a global.


```npm install -g gulp```
```npm install```
```npm start```


If you did not receive any compilation errors, Browsersync will output a message notifying you of what the internal and external URLs for the local build are.  Default port is 3030.

