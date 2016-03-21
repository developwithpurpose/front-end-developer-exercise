'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      clean = require('gulp-clean'),
      browserSync = require('browser-sync').create(),
      prefix = require('gulp-autoprefixer'),
      babel = require("gulp-babel"),
      watch = require('gulp-watch');

gulp.task('cssify', function(){
  return gulp.src('build/sass/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(prefix())
  .pipe(gulp.dest('app/assets/stylesheets/'))
  .pipe(browserSync.stream());
});

gulp.task('babelify', function(){
  return gulp.src('build/javascripts/main.js')
  .pipe(babel({
      presets : ['es2015']
  }))
  .pipe(gulp.dest('app/assets/javascripts/'));
});

gulp.task('browser-sync', function(){
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
});

gulp.task('watch', function(){
  gulp.watch('build/sass/*.scss', ['clean','cssify','browser-sync']);
  gulp.watch('build/javascripts/*.js', ['babelify','browser-sync']);
});

gulp.task('clean', function(){
  return gulp.src('./app/assets/stylesheets/main.css')
  .pipe(clean());
});

gulp.task('default', ['clean', 'cssify', 'browser-sync', 'watch']);
