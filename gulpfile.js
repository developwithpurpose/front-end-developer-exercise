var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

var input = './app/assets/stylesheets/**/*.scss';
var output = './app/assets/dist';
var js = './app/assets/javascripts/**/*.js';

gulp.task('sass', function () {
	return gulp.src(input)
  	.pipe(sourcemaps.init())
  	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  	.pipe(autoprefixer())
  	// .pipe(sourcemaps.write())
  	.pipe(gulp.dest(output))
  	.pipe(browserSync.stream());
});

// Watch files for change and set Browser Sync
gulp.task('browsersync', function() {
	// BrowserSync settings
	browserSync.init({
	   // proxy: "http://localhost:8080",
	   server: './app',
  });
});

gulp.task('javascript', function() {
    return gulp.src(js)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(output))
        .pipe(browserSync.stream());
});

gulp.watch(input, gulp.series(['sass']))
	.on('change', function(event){
		console.log('File' + event.path + ' was ' + event.type + ', running tasks...')
	});
gulp.watch(js, gulp.series(['javascript']))
	.on('change', function(event){
		console.log('File' + event.path + ' was ' + event.type + ', running tasks...')
	});

// Default task
gulp.task('serve', gulp.series(['sass', 'javascript', 'browsersync']));
