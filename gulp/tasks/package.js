/**
 * package
 * Bundles JS as part of build task
 *
 */
var gulp,
    util,
    rename,
    uglify;

gulp = require('gulp');
util = require('gulp-util');
rename = require('gulp-rename');
uglify = require('gulp-uglify');

module.exports = function () {
    return gulp.src('src/type-safe.js')
        .pipe(gulp.dest('dist/'))
        .pipe(rename('type-safe.min.js'))
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(gulp.dest('dist/'))
        .on('error', util.log);
};
