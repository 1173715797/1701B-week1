var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var clean = require('gulp-clean-css');
var ugfily = require('gulp-ugfily');
var img = require('gulp-imagemin');
var rename = require('gulp-rename');
gulp.task('js', function() {
    return gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(ugfily())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('../dist/js/'))
})
gulp.task('img', function() {
    return fulp.src('./img/*.{jpg,png,gif}')
        .pipe(img())
        .pipe(gulp.dest('../dist/img/'))
})
gulp.task('clean', function() {
    return gulp.src('./css/*.css')
        .pipe(clean())
        .pipe(gulp.dest('../dist/css/'))
})