"use strict";

var gulp = require('gulp');



/* CSS */
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

/* Mixed */
var concat = require('gulp-concat');
var del = require('del');
var RevAll = require('gulp-rev-all');
var rename = require('gulp-rename');
var multistream = require('gulp-multistream');
var gutil = require('gulp-util'); // gulp-util - https://www.npmjs.com/package/gulp-util
//var argv  = require('minimist')(process.argv); // Minimist - https://www.npmjs.com/package/minimist
var rsync = require('gulp-rsync'); // gulp-rsync - https://www.npmjs.com/package/gulp-rsync
var prompt = require('gulp-prompt'); // gulp-prompt - https://www.npmjs.com/package/gulp-prompt
var gulpif = require('gulp-if'); // gulp-if - https://www.npmjs.com/package/gulp-if
//var webserver = require('gulp-webserver');

var babel = require('gulp-babel');

var minify = require('gulp-minify');

var tmp = './temp/';
var appDev = './assets/';
var appProd = './application/';


/*gulp.task('webserver', function() {
  gulp.src('./tss_vue.html')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});*/


gulp.task('less', function () {
  gulp.src(appDev + 'less/*.less')
    .pipe(less({
        sourceMap: {
            sourceMapRootpath: appDev + 'less/' // Optional absolute or relative path to your LESS files 
        }
    }))
    .pipe(gulp.dest(appDev + 'css'));
});

gulp.task('watch-less', function () {
    gulp.watch(appDev + 'less/*.less');
});



gulp.task('cleanCss', function() {
  return del([appDev + 'css/*.css']);
});


gulp.task('build-css', ['cleanCss'], function () {
   //var revAll = new RevAll();
    return gulp.src(appDev + 'less/*.less')
        .pipe(less())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('main.min.css'))
        .pipe(sourcemaps.init())
        //.pipe(revAll.revision())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(appDev + 'css'))
         //.pipe(rev.manifest())
         //.pipe(gulp.dest('css')) // write manifest to build dir 
        .pipe(gulp.dest(appDev + 'css/'));
});


gulp.task('babel', function () {
    return gulp.src(appDev+'js/main.js')
        .pipe(sourcemaps.init()) 
        .pipe(babel({
            presets: ['es2015'],
            
        }))
        .pipe(concat('mainEs2015.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/js'));
});


/* Default task */
gulp.task('default', ['build-css'], function () {
    return gutil.log('Gulp is running!')
});