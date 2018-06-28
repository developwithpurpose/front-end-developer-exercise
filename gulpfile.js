'use strict';
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglifyjs'),
    gulpSequence = require('gulp-sequence'),
    browserSync = require('browser-sync'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    streamify = require('gulp-streamify'),
    source = require('vinyl-source-stream'),
    babel = require('gulp-babel'),
    gutil = require('gulp-util'),
    sassMain = ['dev/sass/main.scss'],
    sassSources = ['dev/sass/**/*.scss'],
    jsSources = ['dev/scripts/**/*.js'];

gulp.task('browser-sync', () => {
    browserSync.init({
        port: 8080,
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', () => {
    gulp.src(sassMain)
        .pipe(sass({
            outputStyle: 'compressed'
        })
            .on('error', gutil.log))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('es6_transform', () => {
    gulp.src(jsSources)
    browserify({
        entries: 'dev/scripts/main.js',
        debug: true
    })
        .transform(babelify)
        .on('error', gutil.log)
        .bundle()
        .on('error', gutil.log)
        .pipe(source('bundle.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('scripts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('es6-ugly', (done) => {
    gulpSequence('es6_transform', () => {
        done();
    });
})



gulp.task('watch', () => {
    gulp.watch(sassMain, ['sass']);
    gulp.watch(sassSources, ['sass']);
    gulp.watch(jsSources, ['es6_transform']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'es6_transform', 'watch', 'browser-sync']);