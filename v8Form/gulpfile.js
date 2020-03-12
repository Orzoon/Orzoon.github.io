const gulp = require("gulp");

const sass = require("gulp-sass");
const autoPrefixer = require("gulp-autoprefixer")



function sassFileCheck(){
    return gulp.src('./scss/index.SCSS')
                .pipe(sass({}))
                .pipe(autoPrefixer({
                    grid: 'autoplace'
                }))
                .pipe(gulp.dest('./'))
}

function gulpWatch(){
    gulp.watch('./scss/*.SCSS', sassFileCheck)

}


exports.gulpWatch = gulpWatch;
exports.sassFileCheck = sassFileCheck;

