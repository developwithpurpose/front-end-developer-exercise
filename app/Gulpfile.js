var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/stylesheets/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('assets/sass/**/*.scss',['styles']);
});