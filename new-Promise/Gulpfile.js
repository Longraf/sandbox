'use strict';

let gulp         = require('gulp');
let sass         = require('gulp-sass'); // переводит SASS в CSS
let concat       = require("gulp-concat"); // Объединение файлов - конкатенация;
let cssnano      = require("gulp-cssnano"); // Минимизация CSS
let autoprefixer = require('gulp-autoprefixer'); // Проставлет вендорные префиксы в CSS для поддержки старых браузеров
let rename       = require("gulp-rename"); // Переименование файлов
let uglify       = require("gulp-uglify"); // Минимизация javascript
let uglifyjs     = require('uglify-js'); // can be a git checkout
let browserify   = require('browserify');
let source       = require('vinyl-source-stream');
let del          = require('del');

gulp.task('clean', function(cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['dist'], cb);
});

//Объединение, компиляция Sass в CSS, префиксов и дальнейшая минимизация кода
gulp.task('sass', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
});
// Объединение и сжатие JS c учётом зависимостей
gulp.task('scripts', function() {
    return browserify({
        entries: './src/js/main.js',
        debug: true,
    })
        .bundle()
        .on('error', function (error) {
            console.error(error.toString())
            this.emit('end')
        })
        .pipe(source("main.js"))
        .pipe(gulp.dest("./dist/js"));
});

// Копирование файлов HTML в папку dist
gulp.task("html", function() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

// Слежения за измененными файлами
gulp.task("watch", function() {
    gulp.watch("src/sass/*.scss", ["sass"]);
    gulp.watch("src/js/*.js", ["scripts"]);
    gulp.watch("src/*.html", ["html"]);
});