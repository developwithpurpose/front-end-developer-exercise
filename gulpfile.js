var gulp = require('gulp');
var uglify = require('gulp-uglify');
var prefix = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');

/*
  Html
*/

gulp.task('html',function() {
  return gulp.src('dev/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app/'));
});

/*
  Styles
*/

gulp.task('styles',function() {
  gulp.src('dev/assets/stylesheets/*.css')
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false  
    }))
    .pipe(gulp.dest('app/assets/stylesheets/'));
});

/*
  Scripts
*/

gulp.task('scripts',function() {
  gulp.src('dev/assets/javascripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/assets/javascripts/'));
});

gulp.task('default', ['html','styles','scripts']);
