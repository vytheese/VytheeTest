var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');;

var destPath = './wwwroot/lib/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**',
        'jquery/dist/jquery.*js',
        'bootstrap/dist/js/bootstrap.*js'
    ], {
            cwd: "node_modules/**"
        })
        .pipe(gulp.dest("./wwwroot/lib"));

    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('./wwwroot/lib/bootstrap'));
});


gulp.task('default', ['scriptsNStyles']);