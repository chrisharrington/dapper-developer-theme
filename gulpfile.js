var gulp = require("gulp"),
	browserify = require("browserify"),
	watchify = require("watchify"),
	reactify = require("reactify"),
	source = require("vinyl-source-stream");
 
var bundler = watchify(browserify({
	cache: {},
	packageCache: {},
	fullPaths: true,
	paths: ["./node_modules", "./script/app"]
}).add("./script/app/init.js").transform("reactify"), watchify.args);

function bundle() {
	return bundler
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./script/build"));
}

gulp.task("browserify", bundle);
bundler.on("update", bundle);
bundler.on("time", function(time) {
	console.log("Done - " + time + "ms.");
});

gulp.task("default", ["browserify"]);