var gulp=require('gulp');
var concat=require('gulp-concat');
var uerfiles=["./api/*/*.js"];
var iife=require("gulp-iife");
var rename=require('gulp-rename');
var uglify=require('gulp-uglify');
var vendorfiles=
['bower_components/angular/angular.js',
'bower_components/bootstrap/dist/js/bootstrap.js'];
gulp.task("vendor",function(){
    return gulp.src(vendorfiles)
    .pipe(concat("all.js"))
    .pipe(gulp.dest("./dist/"));
});
gulp.task("bundle",function(){
    return gulp.src(uerfiles)
    .pipe(concat("users.js"))
    .pipe(rename('uglify.js'))
    .pipe(uglify())
    .pipe(iife())
    .pipe(gulp.dest("./dist/"));
});