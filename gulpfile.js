'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      clean = require("gulp-clean"),
      prefix = require("gulp-autoprefixer");

gulp.task('cssify', function(){
  return gulp.src('build/sass/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('app/assets/stylesheets/'));
});
gulp.task('sass', function() {
    return gulp.src('./build/**/*.scss')
               .pipe(sass({
                    outputStyle: 'compressed'
                }))
               .pipe(prefix())
               .pipe(gulp.dest('./app/assets/stylesheets/'));
});

gulp.task('clean', function(){
  return gulp.src('./app/assets/stylesheets/main.css')
  .pipe(clean());
});

gulp.task('default', ['clean', 'cssify']);
