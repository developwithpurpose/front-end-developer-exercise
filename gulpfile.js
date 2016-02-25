/*eslint-env node:true*/
'use strict';
var gulp = require('gulp')
  , uglifyjs = require('gulp-uglify')
  , plumber = require('gulp-plumber')
  , connect = require('gulp-connect')
  , eslint = require('gulp-eslint')
  , sass = require('gulp-sass');

var paths = {
  html: './app',
  style: './app/assets/stylesheets',
  js: './app/assets/javascripts',
  dist: './app/assets',
};

// html
gulp.task('html', function () {
  return gulp.src(paths.html + '/*.html')
    .pipe(plumber())
    .pipe(connect.reload());
});

// styles
gulp.task('sass', function () {
  return gulp.src([paths.style + '/sass/vendor/**/*.scss', paths.style + '/sass/**/*.scss'])
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dist + '/'))
    .pipe(connect.reload());
});

// js
gulp.task('eslint', function () {
  return gulp.src([paths.js + '/**/*.js','!node_modules/**'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('js-uglify', function () {
  return gulp.src(paths.js + '/**/*.js')
    .pipe(uglifyjs())
    .pipe(gulp.dest(paths.dist))
    .pipe(connect.reload());
});

// base
gulp.task('watch', function () {
  gulp.watch([paths.html + '/*.html'], ['html']);
  gulp.watch([paths.style + '/sass/**/*.scss'], ['sass']);
  gulp.watch([paths.js + '/*.js'], ['eslint', 'js-uglify']);
});

gulp.task('server', function () {
  connect.server({
    root: ['app'],
    port: 8080,
    livereload: true,
  });
});

gulp.task('lint', ['eslint']);
gulp.task('default', ['server', 'lint', 'sass', 'watch']);
