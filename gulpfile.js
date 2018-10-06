var gulp = require('gulp');
    sass = require('gulp-sass');
    pug = require('gulp-pug');
    autoprefixer = require('gulp-autoprefixer');

gulp.task ('pug', function () {
    return gulp.src('src/index.pug')
                .pipe(pug({pretty: false}))
                .pipe(gulp.dest('dist'))
})
gulp.task('sass', function () {
    return gulp.src('src/styles/*.SCSS')
                .pipe(sass({outputStyle: 'nested'}))
                .pipe(autoprefixer({
                    browsers: ['last 5 versions']
                }))
                .pipe(gulp.dest('dist/styles'))
})

gulp.task('watch', function () {
    gulp.watch('src/styles/*.SCSS', ['sass']);
    gulp.watch('src/index.pug', ['pug']);
})

