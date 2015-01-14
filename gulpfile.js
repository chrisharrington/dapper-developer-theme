var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var reactify = require('reactify');
var rename = require("gulp-rename");

gulp.task('build', function () {

    // browserify -t reactify -r react -r ./src/App > ../webapp/static/bundle.js

    var browserified = transform(function(filename) {
        return browserify()

        // -t reactify
        .transform(reactify)

        // -r react
        // update below with the correct path to react/react.js node_module
        .require('./node_modules/react/react.js', { expose: 'react'})

        // -r ./src/App
        // filename = <full_path_to>/src/App.js
        .require(filename, {expose: 'src/App'})
        .bundle();
    });
    return gulp.src('./src/App.js')
    .pipe(browserified)
    .pipe(gulp.dest('../webapp/static/'));
});

gulp.task('default', ['build']);
