// plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const del = require('del');
const connect = require('gulp-connect');
const open = require('gulp-open');
const inject = require('gulp-inject');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

sass.compiler = require('node-sass');

// optimize images 
gulp.task('imagemin', function () {
  return gulp.src('app/src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('temp/img'))
});

// compile sass
gulp.task('compile:sass', function () {
  return gulp.src('app/src/scss/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('temp/css'))
});

// autoprefix css
gulp.task('autoprefix:css', function () {
  return gulp.src('temp/css/style.css')
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('temp/css'))
})

// concatenate css
gulp.task('concatenate', function () {
  return gulp.src(['node_modules/normalize.css/normalize.css', 'temp/css/style.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('temp/css'));
});

// minify & sourcemaps css
gulp.task('minify:css', function () {
  return gulp.src('temp/css/style.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('temp/css'))
});

// transpile to ES5
gulp.task('babel', function () {
  return gulp.src('app/src/js/main.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('temp/js'))
});

// minify js
gulp.task('minify:js', function () {
  return gulp.src('temp/js/main.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('temp/js'))
});

// minify runner
gulp.task('minify', gulp.parallel('minify:css', 'minify:js'));

// remove temp folder
gulp.task('clean', function () {
  return del(['temp']);
});

// transfer files dev
gulp.task('dev:transfer-images', function () {
  return gulp.src('temp/img/**/*')
    .pipe(gulp.dest('app/build/dev/dist/img'))
});

gulp.task('dev:transfer-css', function () {
  return gulp.src('temp/css/style.css')
    .pipe(gulp.dest('app/build/dev/dist/css'))
});

gulp.task('dev:transfer-js', function () {
  return gulp.src('temp/js/main.js')
    .pipe(gulp.dest('app/build/dev/dist/js'))
});

gulp.task('dev:transfer', gulp.parallel(
  'dev:transfer-images',
  'dev:transfer-css',
  'dev:transfer-js'
));

// transfer files prod
gulp.task('prod:transfer-images', function () {
  return gulp.src('temp/img/**/*')
    .pipe(gulp.dest('app/build/prod/dist/img'))
});

gulp.task('prod:transfer-css', function () {
  return gulp.src('temp/css/**/*')
    .pipe(gulp.dest('app/build/prod/dist/css'))
});

gulp.task('prod:transfer-js', function () {
  return gulp.src('temp/js/**/*')
    .pipe(gulp.dest('app/build/prod/dist/js'))
});

gulp.task('prod:transfer', gulp.parallel(
  'prod:transfer-images',
  'prod:transfer-css',
  'prod:transfer-js'
));

// development server
gulp.task('connect-dev', async function () {
  connect.server({
    root: 'app/build/dev',
    port: 3000,
    livereload: true
  });
});

gulp.task('open-dev', async function () {
  return gulp.src('app/build/dev/*.html')
    .pipe(open({ uri: 'http://localhost:3000/' }))
});

// production server
gulp.task('connect-prod', async function () {
  connect.server({
    root: 'app/build/prod',
    port: 8080,
    livereload: true
  });
});

gulp.task('open-prod', async function () {
  return gulp.src('app/build/prod/*.html')
    .pipe(open({ uri: 'http://localhost:8080/' }))
});

gulp.task('watch', async function () {
  gulp.watch(['app/src/img/**/*', 'app/src/scss/*.scss', 'app/src/*.html', 'app/src/js/*.js'], gulp.series('dev'))
});

// build development
gulp.task('build:dev', function () {
  const target = gulp.src('app/src/index.html');
  const sources = gulp.src(['temp/img/**/*', 'temp/js/main.js', 'temp/css/style.css'], { read: false });

  return target.pipe(inject(sources))
    .pipe(gulp.dest('app/build/dev'))
    .pipe(connect.reload())
});

// build development runner
gulp.task('dev', gulp.series(
  'imagemin',
  'compile:sass',
  'autoprefix:css',
  'concatenate',
  'babel',
  'dev:transfer',
  'build:dev',
  'clean'
));

gulp.task('serve-dev', gulp.series('dev', 'connect-dev', 'open-dev', 'watch'));

gulp.task('serve-prod', gulp.series('dev', 'connect-prod', 'open-prod'));

// build production
gulp.task('build:prod', function () {
  const target = gulp.src('app/src/index.html');
  const sources = gulp.src(['temp/img/**/*', 'temp/js/**/*', 'temp/css/**/*'], { read: false });

  return target.pipe(inject(sources))
    .pipe(gulp.dest('app/build/prod'))
});

// build production runner
gulp.task('prod', gulp.series(
  'imagemin',
  'compile:sass',
  'autoprefix:css',
  'concatenate',
  'babel',
  'minify',
  'prod:transfer',
  'build:prod',
  'clean'
));