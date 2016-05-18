var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify');

var componentJs = './app/assets/javascripts/components/**/*.js';
var vendorJs = './app/assets/javascripts/vendor/**/*.js';
var jsDest = './app/assets/javascripts/';
var cssDest = './app/assets/stylesheets/';

gulp.task('compile-less', function() {
   return gulp.src('./app/assets/stylesheets/less/main.less')
        .pipe(less())
        .pipe(gulp.dest(cssDest))
        .pipe(cssnano())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest(cssDest));
});

gulp.task('scripts', function() {  
    return gulp.src([vendorJs, componentJs])
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['compile-less', 'scripts']);