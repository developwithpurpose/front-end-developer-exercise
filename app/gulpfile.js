////// LAUNCH!
////
//



var gulp = require('gulp'),
  sass = require('gulp-sass'),
  include = require('gulp-include'),
  scsslint = require('gulp-scss-lint'),
  watch = require('gulp-watch'),
  gulpLoadPlugins = require("gulp-load-plugins"),
  tasks = gulpLoadPlugins({scope: ["devDependencies"]}),
  gutil = require('gulp-util'),
  cssGlobbing = require('gulp-css-globbing'),
  babel = require('gulp-babel'),
  eslint = require('gulp-eslint'),
  replace = require('gulp-replace'),
  del = require('del'),
  notify = tasks.notify;

gulp.task('dist-sass', function () {
    gulp.src('./assets/stylesheets/src/*.scss')
      .pipe(scsslint({
        'config': 'scss-lint.yml',
      }));
    gulp.src('./assets/stylesheets/src/application.scss')
      .pipe(tasks.sass())
      .on('error', function(message){
        console.log(message);
      })
      .pipe(tasks.autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('./assets/stylesheets/dist'))
      .pipe(tasks.rename({suffix: '.min'}))
      .pipe(tasks.cssmin())
    .pipe(gulp.dest('./assets/stylesheets/dist'));
});

gulp.task('dist-js', function () {

  gulp.src('./assets/javascripts/src/script.js')
      .pipe(tasks.concat('./assets/javascripts/dist/script.js'))
      .pipe(eslint())
      .pipe(include({
        includePaths: [
          __dirname + "/assets/vendor"
        ]
      }))
      .pipe(babel())
      .pipe(gulp.dest('./'))
      .pipe(tasks.rename({suffix: '.min'}))
      .pipe(tasks.uglify())
      .pipe(eslint.format())
      .pipe(gulp.dest('./'))
      .on('error', function(message){
        console.log(message);
      });
});

gulp.task('watch', function () {
  watch('assets/javascripts/src/*.js', function () {
    gulp.start('dist-js');
    gulp.start('version-update');
  });
  watch('assets/stylesheets/src/*.scss', function () {
    gulp.start('dist-sass');
  });
  watch('assets/vendor/**/*.js', function () {
    gulp.start('dist-js');
  });
});
