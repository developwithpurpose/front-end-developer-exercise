#HTML

I attempted to not overthink it too much and went with the way I would normally do my HTML. 

#CSS

.scss / sass files located in `/assets/stylesheets/scss/` are compiled into minified CSS @ `/assets/build/app.min.css` due to time I did not get as granular as I could with the varying include's of component based .scss files.

#JS

Went with vanilla vs jQuery. Most of the time the site already has jQuery and Underscore/lodash etc. so I would leverage those. Instead I decided to go the non ES6 route and do it in vanilla JS. 

#GRUNT
* UGLIFY: Used to combine, minify files (js,css)
* JSHINT: Because nobodies perfect and it's good to know that at build time.
* SASS: Chose `.scss` but could have been `.less` just the same.
* WATCH: Compile on save of js, html, css.
* BrowserSync: For that sweet autoreloading as files are updated.


###RUN `grunt default`
