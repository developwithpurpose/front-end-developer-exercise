var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    cached = require('gulp-cached'),
    changed = require('gulp-changed'),
    cssnano = require('cssnano'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    bs = require('browser-sync').create();

var reload = bs.reload;

var outPath = path.resolve(__dirname, 'app', 'assets');

// Style task
gulp.task('styles', function () {
  var plugins = [
    autoprefixer({
      browsers: ['last 3 versions', 'ie >= 9']
    }),
    cssnano({
      zindex: false
    })
  ];
  return gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', util.log))
    .pipe(postcss(plugins))
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(cached('sass'))
    .pipe(changed(outPath + '/stylesheets/*.css', {extension: '.css', hasChanged: changed.compareLastModifiedTime}))
    .pipe(gulp.dest(outPath + '/stylesheets/'))
    .pipe(notify({ message: 'Gulp style task is complete' }));
});

// Script task
gulp.task('scripts', function () {
  return gulp.src('src/javascripts/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(outPath + '/javascripts/'))
    .pipe(notify({ message: 'Gulp script task is complete' }));
});

// Dev Server from BrowserSync (Reloads and injects changes while working)
gulp.task('serve:files', ['styles', 'scripts'], function (gulpCallBack) {
  bs.init({
    browser: '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe', // This looks strange because it's the Linux subsystem on Windows 10
    server: {
      baseDir: './',
      directory: true
    },
    startPath: '/app',
    injectChanges: true,
    notify: false
  }, function callback() {
    gulp.watch(['app/*.html', outPath + '/javascripts/*.js'], bs.reload);
    gulp.watch(outPath + '/stylesheets/*.css', function () {
      gulp.src(outPath + '/stylesheets/*.css')
        .pipe(bs.stream());
    });
    gulpCallBack();
  });
});

// Watch task
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', ['styles']);
	gulp.watch('src/javascripts/*.js', ['scripts']);
});

// Default task
gulp.task('default', ['watch', 'serve:files']);
