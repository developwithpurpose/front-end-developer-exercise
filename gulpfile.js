var gulp = require('gulp');
var connect = require('gulp-connect');
var seq = require('run-sequence');
var del = require('del');
var cssmin = require('gulp-minify-css');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var template = require('gulp-template');

gulp.task('clean', function (cb) {
	return del('dist/**', cb);
});

gulp.task('less', function () {
	return gulp.src([ './app/assets/stylesheets/app.less' ])
		.pipe(less())
		.pipe(concat('app.css'))
		.pipe(cssmin())
		.pipe(connect.reload())
		.pipe(gulp.dest('./dist/compiled/assets/stylesheets'));
});

var data = require('./app/assets/data/steps.json');

gulp.task('html', function () {
	return gulp.src('./app/index.html')
		.pipe(template(data))
		.pipe(connect.reload())
		.pipe(gulp.dest('./dist/compiled'));
});

gulp.task('js', function () {
	return gulp.src('./app/assets/javascripts/*.js')
		.pipe(uglify())
		.pipe(connect.reload())
		.pipe(gulp.dest('./dist/compiled/assets/javascripts'));
});

gulp.task('images', function () {
	return gulp.src([ './app/assets/images/**/*.*' ])
		.pipe(connect.reload())
		.pipe(gulp.dest('./dist/compiled/assets/images'));
});

gulp.task('fonts', function () {
	return gulp.src([ './app/assets/fonts/**/*.*' ])
		.pipe(connect.reload())
		.pipe(gulp.dest('./dist/compiled/assets/fonts'));
});

gulp.task('data', function () {
	return gulp.src([ './app/assets/data/**/*.*' ])
		.pipe(connect.reload())
		.pipe(gulp.dest('./dist/compiled/assets/data'));
});

gulp.task('tar', function () {
	return gulp.src('./dist/compiled/**/*.*')
		.pipe(tar('dist.tar'))
		.pipe(gzip())
		.pipe(gulp.dest('dist'));
});

gulp.task('build', function (cb) {
	return seq('clean', ['less', 'html', 'js', 'images', 'fonts', 'data'], 'tar', cb);
});

gulp.task('default', function (cb) {
	return seq('build');
});



///////////////////////////////////////////

gulp.task('server', function () {
	connect.server({
		livereload: true,
		root: './dist/compiled',
		port: 8080
	});
});

gulp.task('watch', function () {
	gulp.watch(['app/*.html'], ['html']);
	gulp.watch(['app/assets/javascripts/**/*.js'], ['js']);
	gulp.watch(['app/assets/stylesheets/**/*.less'], ['less']);
	gulp.watch(['app/assets/images/*.*'], ['images']);
	gulp.watch(['app/assets/fonts/*.*'], ['fonts']);
	gulp.watch(['app/assets/data/*.*'], ['data']);
});

gulp.task('dev', function (cb) {
	return seq('build', ['server','watch'], cb);
});