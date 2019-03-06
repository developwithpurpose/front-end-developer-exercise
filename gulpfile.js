// Packages need to be required here
let bourbon 		= require('bourbon'),
		browserSync = require('browser-sync'),
		cleanCSS 		= require('gulp-clean-css'),
		concat 			= require('gulp-concat'),
		gulp        = require('gulp'),
		gutil 			= require('gulp-util'),
		imagemin 		= require('gulp-imagemin'),
		jshint 			= require('gulp-jshint'),
		notify 			= require('gulp-notify');
		plumber 		= require('gulp-plumber'),
		prettify 		= require('gulp-jsbeautifier'),
		reload      = browserSync.reload,
		rename 			= require('gulp-rename'),
		sass        = require('gulp-sass'),
		sourcemaps 	= require('gulp-sourcemaps'),
		streamqueue = require('streamqueue'),
		uglify 			= require('gulp-uglify');

let plumberErrorHandler = { errorHandler: notify.onError({
    
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })
};

gulp.task('browser-sync', function() {
    //watch files
	let files = [
  './app/assets/stylesheets/babySteps.min.css',
  './app/assets/javascripts/babySteps.min.js',
	'./app/**/index.html'
	];

	//initialize browsersync
  browserSync.init(files, {
    port: 8080,
    notify: false,
    server: {
      baseDir: "./app",
    }
  });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('build:css', function () {
	return gulp.src('./_src/scss/*.scss')
	.pipe(plumber(plumberErrorHandler))
  .pipe(sourcemaps.init())
  .pipe(sass({
      includePaths: [].concat(bourbon.includePaths),
  }))
  .pipe(cleanCSS({
  	level: 2
  }))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest('./app/assets/stylesheets'))
  .pipe(reload({stream:true}));
});

gulp.task('copy:assets', function() {

	//Copy Javascript
	gulp.src([
    'node_modules/jquery/dist/jquery.js'
  ])
    .pipe(gulp.dest('./_src/js/vendor'));
});

// Build Scripts
gulp.task('build:scripts', function() {
  let jsfiles = [
  	'./_src/js/vendor/jquery.js',
  	'./_src/js/**/*.js',
  	'./_src/js/*.js'
  ];

  return streamqueue({ objectMode: true }, gulp.src(jsfiles))
    .pipe(concat('babySteps.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./app/assets/javascripts'))
    .on('error', gutil.log);
});

let servedep = [
  'build:css',
  'build:scripts',
  'browser-sync',
  'copy:assets'
];
gulp.task('serve', servedep, function() {

  // Watch app .scss files, changes are piped to browserSync
  gulp.watch('./_src/scss/**/*.scss', ['build:css']);

  // Watch app .js files
  gulp.watch('./_src/js/**/*.js', ['build:scripts']);
  //gulp.watch("./app/*.html").on('change', browserSync.reload);

});


// Default - Initial Build

let defaultTasks = [
	'build:css',
	'build:scripts',
	'copy:assets'
]

gulp.task('default', defaultTasks);