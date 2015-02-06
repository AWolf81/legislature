// Include Gulp
var gulp = require('gulp');

// All of your plugins
var autoprefixer = require('gulp-autoprefixer');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');
var minify = require('gulp-minify-css');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

// Compile CSS, Autoprefix and Minify
gulp.task('styles', function() {
  gulp.src('assets/css/style.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minify())
    .pipe(gulp.dest('assets/css'))
    .pipe(notify({ message: "Watson: I've organized your files for you." }));
});

// Lint, Concatenate and Minify JavaScript
gulp.task('scripts', function() {
  gulp.src('assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
    .pipe(notify({ message: "Watson: I've done your dirty laundry." }));
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('assets/js/*.js', ['scripts', 'style']);
    gulp.watch('assets/css/*.scss', ['styles']);
    .pipe(notify({ message: "Watson: I've got my eyes on your files." }))
});