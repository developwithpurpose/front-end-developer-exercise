var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine');

var modulesJs = './app/assets/javascripts/modules/**/*.js';
var componentJs = './app/assets/javascripts/components/**/*.js';
var babyStepsTabsTest = './app/assets/javascripts/components/baby-steps-tabs-test.js';
var vendorJs = './app/assets/javascripts/vendor/**/*.js';
var html5Shiv = './app/assets/javascripts/vendor/html5shiv.js';
var excludeHtml5Shiv = '!./app/assets/javascripts/vendor/html5shiv.js';
var jsDest = './app/assets/javascripts/';
var cssDest = './app/assets/stylesheets/';

gulp.task('compile-less', function() {
   return gulp.src('./app/assets/stylesheets/less/main.less')
        .pipe(less())
        .pipe(autoprefixer({browsers: ['> 1%'], cascade: false}))
        .pipe(cssnano())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest(cssDest));
});

gulp.task('lint', function () {
    return gulp.src([componentJs,'!node_modules/**']) 
        .pipe(eslint({
            extends: 'eslint:recommended',
            globals: {
                'jQuery':false,
                '$':true
            },
            envs: ['browser']
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('scripts', function() {  
    return gulp.src([vendorJs, excludeHtml5Shiv, modulesJs, componentJs])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest(jsDest));
});

gulp.task('html5Shiv', function() {  
    return gulp.src([html5Shiv])
        .pipe(uglify())
        .pipe(rename("html5shiv.min.js"))
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['compile-less', 'scripts', 'html5Shiv', 'lint']);