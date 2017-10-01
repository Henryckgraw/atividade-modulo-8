var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');

gulp.task('min-css', function () {
    gulp.src('./source/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('min-html', function () {
    return gulp.src('./source/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watcher',function(){
 gulp.watch('./source/scss/style.scss',['min-css']);
 gulp.watch('./source/scss/my_theme.scss',['min-css']);
 gulp.watch('./source/index.html',['min-html']);
});

