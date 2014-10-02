//INCLUDE GULP
var gulp = require('gulp');


// ADDITIONAL REQUIRED PLUGINS
var sass = require('gulp-sass'),
   cssmin = require('gulp-cssmin'),
   changed = require('gulp-changed'),
   concat = require('gulp-concat'),
   watch = require('gulp-watch'),
   plumber = require('gulp-plumber'),
   prefix = require('gulp-autoprefixer'),
   uglify = require('gulp-uglify'),
   browserSync = require('browser-sync'),
   jasmine = require('gulp-jasmine'),
   connect = require('gulp-connect');
   livereload = require('gulp-livereload');

//SET PATHS
var paths = {
   html    : "./app/*.html", //app html
   sass    : "./app/assets/stylesheets/sass/**/*.scss",//source css
   css     : "./app/assets/stylesheets/",//dest css
   jssrc   : "./app/assets/javascripts/src/*.js",//source js
   js      : "./app/assets/javascripts/", //des js
   jaz     : './spec/main.spec.js'
}

// UPDATE AND WATCH HTML
//-----------------------------------------------
gulp.task('html',function(){
  return gulp.src(paths.html)
  .pipe(changed('./'))
  .pipe(livereload());
});

// COMPILE SASS
//-----------------------------------------------
gulp.task('styles',function(){
   return gulp.src(paths.sass)
   .pipe(plumber())
   .pipe(sass())
   .pipe(prefix('last 2 versions'))
   .pipe(cssmin())
   .pipe(gulp.dest(paths.css))
   .pipe(livereload());
});

//Minify & CONCAT JS SCRIPTS & RUN JASMINE
//----------------------------------------------
gulp.task('scripts',function(){
   return gulp.src(paths.jssrc)
   .pipe(uglify())
   .pipe(concat('main.js'))
   .pipe(gulp.dest(paths.js));
});

gulp.task('jstester',function(){
  return gulp.src(paths.jaz)
  .pipe(jasmine());
});


//Watch the file changes
//----------------------------------------------
gulp.task('watch',function(){
   var server = livereload();
  // Gulp watches for changes in CSS/JS/HTML files
  gulp.watch(paths.sass, ['styles']);
  gulp.watch(paths.jssrc,['scripts']);
  gulp.watch(paths.html,['html']);
});

//CONNECT TO SERVER
//-----------------------------------------------
gulp.task('webserver',function(){
   connect.server({
      root: 'app',
      port: 9001,
      livereload : true
   });
});

//Call livereload & Server
//-----------------------------------------------
gulp.task('livereload',function(){
   gulp.src([paths.sass, paths.jssrc,paths.html])
   .pipe(watch())
   .pipe(connect.reload());
});


//DEFAULT TASKS THAT GULP MUST RUN AT START
gulp.task('default',['webserver','styles','scripts','jstester','livereload','watch']);

