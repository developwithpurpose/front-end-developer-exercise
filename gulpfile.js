'use strict';
const gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var sassLint = require('gulp-sass-lint');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

/*****************************************************/

gulp.task('sass', function () {
  return gulp.src('./app/assets/stylesheets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
	.pipe(cleanCSS())
    .pipe(gulp.dest('./app/assets/stylesheets'));
});

gulp.task('watch', function () {
  gulp.watch('./app/assets/stylesheets/scss/**/*.scss', ['sass']);
});
