var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var clean = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var img = require('gulp-imagemin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
//js合并，压缩，修改，添加后缀
gulp.task('js', function() {
        return gulp.src('./js/*.js')
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(rename({
                suffix: '.min' //添加后缀
            }))
            .pipe(gulp.dest('../dist/js/'))
    })
    //编译sass
gulp.task('sass', function() {
        return gulp.src('./sass/*.scss')
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(gulp.dest('./css/'))
    })
    //压缩图片
gulp.task('img', function() {
        return fulp.src('./img/*.{jpg,png,gif}')
            .pipe(img())
            .pipe(gulp.dest('../dist/img/'))
    })
    //压缩css
gulp.task('clean', function() {
        return gulp.src('./css/*.css')
            .pipe(clean())
            .pipe(gulp.dest('../dist/css/'))
    })
    //监听
gulp.task('watch', function() {
        return gulp.watch('./sass/*.scss', gulp.series('sass'))
    })
    //起服务
gulp.task('webserver', function() {
    return gulp.src('src')
        .pipe(webserver({
            prot: 8080,
            open: true,
            livereload: true,
            fallback: 'index.html'

        }))
})