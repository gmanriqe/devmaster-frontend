var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync");

/*****************
 ** separate tasks
 *****************/
//html
gulp.task('html', function(){
    gulp
        .watch('./*.html').on('change', browserSync.reload);
})

//sass
gulp.task("sass", function() {
  gulp
    .src("scss/style.scss")
    .pipe(sass({ includePaths: ["scss"] }))
    .pipe(gulp.dest("css"));
});

//browsersync
gulp.task("browser-sync", function() {
  browserSync.init(["css/*.css", "js/*.js"], {
    server: {
      baseDir: "./"
    }
  });
});

//joining taks
gulp.task("default", ["html","sass", "browser-sync"], function() {
  gulp.watch("scss/*.scss", ["sass"]);
//   gulp.watch('./*.html').on('change', browserSync.reload);
});
