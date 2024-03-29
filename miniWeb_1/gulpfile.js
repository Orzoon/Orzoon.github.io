const gulp = require("gulp");
var browserSync = require('browser-sync').create();


const pug = require("gulp-pug");
const prefixer = require("gulp-autoprefixer");
const sass = require('gulp-sass')(require('sass'));
var sourcemaps = require("gulp-sourcemaps")

function htmlFile(){
    return gulp.src("./index.pug")
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('./'))
}

function cssStyles(){
    return gulp.src("sass/*.SCSS")
    .pipe(sourcemaps.init())
    .pipe(sass({}))
    .pipe(prefixer())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream())
}


function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })

    gulp.watch("./sass/**.SCSS", cssStyles)
    gulp.watch("./index.pug", htmlFile)
    gulp.watch("./index.html").on("change", browserSync.reload)
    gulp.watch("./js/index.js").on("change", browserSync.reload)

}
// function exports
exports.cssStyles = cssStyles;
exports.htmlFile = htmlFile;
exports.watch = watch;


