var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat-util');
var uglify = require('gulp-uglify');

gulp.task('styles', function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/stylesheets/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('assets/sass/**/*.scss',['styles']);
});


gulp.task('minify', function() {
  return gulp.src('assets/stylesheets/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('assets/stylesheets'));
});

gulp.task('scripts', function() {
  gulp.src('assets/javascripts/app.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('assets/javascripts/'))
});