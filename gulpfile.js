'use strict';
const gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var sassLint = require('gulp-sass-lint');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

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

gulp.task('scripts', function() {
    return gulp.src('./app/assets/javascripts/src/**/*.js')
        .pipe(concat('./app/assets/javascripts/src/**/*.js'))
        .pipe(gulp.dest('./app/assets/javascripts'))
		.pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/assets/javascripts'));
});

gulp.task('watch', function () {
  gulp.watch('./app/assets/stylesheets/scss/**/*.scss', ['sass']);
  gulp.watch('./app/assets/javascripts/src/**/*.js', ['scripts']);
});
