// Main Gulp file. Define tasks here!


// ----------
// Gulp setup
// ----------

var gulp            = require('gulp'),
    srcPath         = "app/assets/";

// Additional packages
var concat      = require('gulp-concat'),
    maps        = require('gulp-sourcemaps'),
    // notifier    = require('node-notifier'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass'),
    uglify      = require('gulp-uglify');


// -----------
// Development
// -----------

// Watch for changes for scss and js
// Run tasks if files change
gulp.task('watch',function(){
    gulp.watch(srcPath + '/stylesheets/scss/**/*.scss', ['styles']);
    gulp.watch(srcPath + '/javascripts/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);


// Styles
gulp.task('styles',function(){
    gulp.src(srcPath + '/stylesheets/scss/main.scss')
        // Human-readable CSS incoming!
        .pipe(maps.init())
        .pipe(sass({
            // options are: nested, compact, expanded, compressed
            outputStyle: 'expanded'
        }))
        .pipe(rename({
            basename: 'main',
            extname: '.css'
        }))
        .pipe(gulp.dest(srcPath + '/stylesheets/'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min',
            extname: '.css'
        }))
        .pipe(maps.write('./'))
        .pipe(gulp.dest(srcPath + '/stylesheets/'))
});

// Scripts
gulp.task('scripts', function() {
    gulp.src(srcPath + '/javascripts/main.js')
        .pipe(maps.init())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({
            basename: 'main',
            suffix: '.min',
            extname: '.js'
        }))
        .pipe(maps.write('./'))
        .pipe(gulp.dest(srcPath + '/javascripts'))
});
