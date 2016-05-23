'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');

gulp.task('vendor-js', function() {
  return gulp.src('./vendor/**/*.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('whiteboard-host-js', function() {
  return gulp.src('./public/app/**/*.js')
    .pipe(concat('whiteboardHost.js'))
    .pipe(gulp.dest('./public/scripts'));
});

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

gulp.task('file:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./vendor/**/*.css', ['vendor-css']);
  gulp.watch('./public/app/**/*.js', ['whiteboard-host-js']);
});

gulp.task('default', ['sass',
                      'file:watch',
                      'vendor-css',
                      'vendor-js',
                      'whiteboard-host-js'
                     ], function() {});
