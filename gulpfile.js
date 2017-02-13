var gulp = require('gulp');

gulp.task('default', function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));

    gulp.src('./src/view/*/*.html')
        .pipe(gulp.dest('./dist/view'));

    console.log('over');
});
