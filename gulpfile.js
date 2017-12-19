var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('serve', ['styles'], function() {
  browserSync.init({
    server: "./dist"
  });
  gulp.watch("app/assets/stylesheets/*.styl", ['styles']);
  gulp.watch("app/*.html", ['html']).on('change', browserSync.reload);
  gulp.watch("app/assets/javascripts/*.js", ['scripts']).on('change', browserSync.reload);
});

gulp.task('styles', function() {
	var plugins = [
    autoprefixer({browsers: ['last 2 versions', 'ie >= 9']}),
    cssnano()
  ];
  return gulp.src("app/assets/stylesheets/app.styl")
    .pipe(stylus())
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./dist/assets/stylesheets"))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp.src("app/assets/javascripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/assets/javascripts"))
});

gulp.task('html', function() {
  return gulp.src('./app/index.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./dist'))
});

gulp.task('images', function() {
  return gulp.src('./app/assets/images/**/*.+(png|jpg)')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/assets/images'))
});

gulp.task('data', function() {
  return gulp.src('./app/baby-steps.json')
  .pipe(gulp.dest('./dist'))
});

gulp.task('clean', function() {
  return del('./dist')
});

gulp.task('build', function() {
  runSequence(
    'clean',
    ['data', 'images', 'scripts', 'styles'],
    'html',
    'serve'
  )
});

gulp.task('default', ['build'])