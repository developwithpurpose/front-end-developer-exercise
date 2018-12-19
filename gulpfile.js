var gulp = require('gulp'),
	sass = require('gulp-sass'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	pump = require('pump');
 
const sassSource = './src/assets/stylesheets/sass/*.sass',
	  sassDestSource = './app/assets/stylesheets/',
	  jsSource = './src/assets/javascripts/*.js',
	  jsDestSource = './app/assets/javascripts/';

gulp.task('html', () => {
	return gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: false }))
    .pipe(gulp.dest('./app'));
});

gulp.task('sass', function () {
	return gulp.src(sassSource)
    .pipe(sass({ outputStyle:'compressed' }).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
        cascade: false 
    }))
    .pipe(gulp.dest(sassDestSource))
	.pipe(browserSync.stream());
});

gulp.task('js', function(cb) {
	pump([
		gulp.src(jsSource),
		uglify(),
		gulp.dest(jsDestSource)
	],
	cb
	);
});

gulp.task('serve', function(){
	browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
	gulp.watch( sassSource, gulp.series(['sass','js','html']));
	gulp.watch(['./src/*.html','./src/assets/javascripts/*.js']).on('change', browserSync.reload);
});

gulp.task('default', gulp.series(['html', 'sass', 'js', 'serve']));