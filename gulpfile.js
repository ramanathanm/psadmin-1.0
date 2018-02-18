"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            './src/**/*.css',
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/toastr/build/toastr.css'
        ],
        images: './images/**/*',
        dist: './dist',
        mainJs: './src/main.js'
    }
};


// Start a local web-server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('livereload', ['connect'], function () {
    gulp.src('src/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html-deploy', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js-deploy', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload())
});

gulp.task('css-deploy', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/styles'))
        .pipe(connect.reload())
});

gulp.task('images-deploy', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'));
});

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(eslint({configFile: 'eslint-config.json'}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html-deploy'])
    gulp.watch(config.paths.js, ['js-deploy', 'lint'])
    gulp.watch(config.paths.css, ['css-deploy'])
    gulp.watch(config.paths.images, ['images-deploy'])
});
gulp.task('default', ['html-deploy', 'js-deploy', 'css-deploy', 'images-deploy', 'lint', 'livereload', 'watch']);