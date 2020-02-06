var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./app/')
    .pipe(webserver({
      port:1234,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});

// Not supported in gulp4
// gulp.task('default',['webserver']);

gulp.task('default', gulp.series('webserver'));
