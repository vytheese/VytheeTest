/// <binding BeforeBuild='copy-all' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

"use strict";
var gulp = require("gulp");
var root_path = {
    webroot: "./wwwroot/"
};
//library source  
root_path.nmSrc = "./node_modules/";
//library destination  
root_path.package_lib = root_path.webroot + "lib/";
root_path.package_css = root_path.webroot + "css/";

gulp.task("copy-jquery", function () {
    return gulp.src([
        root_path.nmSrc + '/jquery/dist/**/*.js',
        root_path.nmSrc + '/jquery-validation/dist/*.js'
]).pipe(gulp.dest(root_path.package_lib + '/jquery/'));
});



gulp.task("copy-systemjs", function () {
    return gulp.src(root_path.nmSrc + '/systemjs/dist/**/*.*', {
        base: root_path.nmSrc + '/systemjs/dist/'
    }).pipe(gulp.dest(root_path.package_lib + '/systemjs/'));
});

gulp.task("copy-angular", function () {
    return gulp.src(root_path.nmSrc + '/angular/**/*.js', {
        base: root_path.nmSrc + '/angular/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular/'));
});
gulp.task("copy-es6-shim", function () {
    return gulp.src(root_path.nmSrc + '/es6-shim/es6-sh*', {
        base: root_path.nmSrc + '/es6-shim/'
    }).pipe(gulp.dest(root_path.package_lib + '/es6-shim/'));
});
gulp.task("copy-rxjs", function () {
    return gulp.src(root_path.nmSrc + '/rxjs/bundles/*.*', {
        base: root_path.nmSrc + '/rxjs/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/rxjs/'));
});

gulp.task("copy-bootstrap_js", function () {
    return gulp.src(root_path.nmSrc + '/bootstrap/dist/**', {
        base: root_path.nmSrc + '/bootstrap/'
    }).pipe(gulp.dest(root_path.package_lib + '/bootstrap/'));
});

gulp.task("copy-all", ["copy-rxjs",'copy-jquery','copy-bootstrap_js','copy-angular', 'copy-systemjs', 'copy-es6-shim']);