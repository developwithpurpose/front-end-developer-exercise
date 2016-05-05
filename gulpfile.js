// Main Gulp file. Define tasks here!


// ----------
// Gulp setup
// ----------

var gulp            = require('gulp'),
    srcPath         = "app/assets/",
    scriptsArray    = [
        // srcPath + '/javascripts/vendor/*.js',
        srcPath + '/javascripts/dev/*.js'
    ];

// Additional packages
var concat      = require('gulp-concat'),
    maps        = require('gulp-sourcemaps'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass'),
    uglify      = require('gulp-uglify');


// -----------
// Development
// -----------

gulp.task('default', ['styles', 'scripts', 'watch']);

gulp.task('watch',function(){
    gulp.watch(srcPath + '/stylesheets/scss/**/*.scss', ['styles']);
    gulp.watch(scriptsArray, ['scripts']);
});


/*
    Styles

    1. Initialize source maps (helpful for debugging minified files componsed of smaller fragment files)
    2. Compile our SASS into unminified, human-readable CSS
        - This file won't be used, but it's nice to have on-hand for debugging purposes
    3. Rename this file
    4. Write it to our stylesheets directory
    5. Let's compile our SASS again - but this time into minified CSS for production use
    6. Rename it accordingly
    7. Write our source map file
    8. Output our new minified CSS file to our stylesheets directory
*/

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


/*
    Scripts task

    1. Initialize source maps (helpful for debugging minified files componsed of smaller fragment files)
    2. Concatenate all javascript files into one.
    3. Rename concatenated file
    4. Write this javascript file to our distribution directory
        - Even though it won't be used, it's nice to have an unminified, human-readable file
    5. Uglify & compress all the things! 
    6/ Rename this uglified file
    7. Write this out to our distribution directory. This WILL be used.
    8. Finally, write our sourcemaps alongisde our main minified javascript file
*/

gulp.task('scripts', function() {
    gulp.src(scriptsArray)
    .pipe(maps.init())
    .pipe(concat('main.js'))
    .pipe(rename({
        basename: 'main',
        extname: '.js'
    }))
    .pipe(gulp.dest(srcPath + '/javascripts'))
    .pipe(uglify())
    .pipe(rename({
        basename: 'main',
        suffix: '.min',
        extname: '.js'
    }))
    .pipe(maps.write('./'))
    .pipe(gulp.dest(srcPath + '/javascripts'))
});
