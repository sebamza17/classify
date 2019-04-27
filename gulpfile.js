var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var less = require('gulp-less');
var watchLess = require('gulp-watch-less');
var replace = require('gulp-replace-task');
var cleanCSS = require('gulp-clean-css');
var autoprefix = require('gulp-autoprefixer');
var notify = require('gulp-notify');

//Browser sync
var browserSync = require('browser-sync').create();
gulp.task('browserSync', function () {
  browserSync.init({
    port: 3010,
    proxy: {
      target: 'local.classify.com', // original port
      ws: true // enables websockets
    },
    //Where to start the server
    startPath: "/"
  });
});

//Base web dir
var webDir = './';
//HTMLs Base dir
var htmlDir = './';
//JSs Base dir
var jsDir = './js';

//Folder where we store our LESS files
var lessDir = './less';

//LESS compilter configuration
var lessConfig = {
    paths: ['./less/components']
};

//Folder where compiled LESS will be (as .css file)
var targetCSSDir = './css';

//Compile LESS to CSS3 with vendor prefixes
gulp.task('css', function () {
    return gulp.src(lessDir + '/styles.less')
        .pipe(watchLess(lessDir + '/styles.less', {
            name: 'LESS', // For output nice-LESS (get it?)!
            less: lessConfig // Passed to LESS parser when generating list of @imports
        }))
        .pipe(plumber({
            errorHandler: function (err) {
                var errorMessage = ' \n ' + 'Filename: ' + err.fileName +
                    ' \n ' + 'Line: ' + err.lineNumber +
                    ' \n ' + 'Reason: ' + err.message;
                gutil.log(gutil.colors.red("Error :("), errorMessage);
                this.emit('end');
            }
        }))
        .pipe(watchLess(lessDir + '/styles.less', {
            name: 'LESS', // For output nice-LESS (get it?)!
            less: lessConfig // Passed to LESS parser when generating list of @imports
        }))
        .pipe(less(lessConfig))
        .pipe(autoprefix('last 5 version'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(targetCSSDir))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(notify('All done :D'));
});

//Keep an eye on LESS files for changes
gulp.task('watch', ['browserSync'], function () {
    gulp.watch(lessDir + '/styles.less', ['css']);
    gulp.watch(lessDir + '/*.less', ['css']);
    gulp.watch(lessDir + '/**/*.less', ['css']);
    gulp.watch(lessDir + '/**/**/*.less', ['css']);
    gulp.watch(webDir + '/*.html', browserSync.reload);
    gulp.watch(htmlDir + '/*.html', browserSync.reload);
    gulp.watch(htmlDir + '/**/*.html', browserSync.reload);
    gulp.watch(jsDir + '/*.js', browserSync.reload);
    gulp.watch(jsDir + '/**/*.js', browserSync.reload);
});

//Default task triggers css warch
gulp.task('default', ['css', 'watch']);