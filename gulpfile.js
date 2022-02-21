var gulp 		= require('gulp');
//var minifyCSS 	= require("gulp-minify-css");
var minifyJS 	= require("gulp-uglify");
 
// // task
// gulp.task('compressCSS', function () {
//     gulp.src('./css/*.css') // path to your file
//     .pipe(minifyCss())
//     .pipe(gulp.dest('./minify-css'));
// });

gulp.task('compressJS', function () {
    gulp.src('node_modules/jsminify/**/*.js') // path to your file
    .pipe(minifyJS())
    .pipe(gulp.dest('node_modules/compressedfileofjs'));
});