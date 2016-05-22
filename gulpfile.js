'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('vendor-css', function() {
  return gulp.src('./vendor/**/*.css')
    .pipe(concatCss('styles/vendor.css'))
    .pipe(gulp.dest('./public'));
});
gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./vendor/**/*.css', ['vendor-css']);
});

gulp.task('default', ['sass',
                      'sass:watch',
                      'vendor-css',
                     ], function() {});
