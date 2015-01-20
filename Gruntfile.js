module.exports = function(grunt) {
    require("jit-grunt")(grunt);

    grunt.initConfig({
        browserify: {
			run: {
				src: ["script/vendor/**/*.js", "script/app/**/*.js", "script/app/**/*.jsx"],
				dest: "script/app.js",
				options: {
					transform: [require("grunt-react").browserify],
					browserifyOptions: {
						debug: true,
						paths: ["./node_modules", "./script/app"],
					}
				}
			},
			
			watch: {
				src: ["script/vendor/**/*.js", "script/app/**/*.js", "script/app/**/*.jsx"],
				dest: "script/app.js",
				options: {
					transform: [require("grunt-react").browserify],
					browserifyOptions: {
						debug: true,
						paths: ["./node_modules", "./script/app"],
					},
					watch: true,
					keepAlive: true
				}
			}
        },
        
        uglify: {
            target: {
                files: {
                    "script/app.js": ["script/app.js"]
                }
            }
        },
        
        less: {
            development: {
               files: {
                    "style.css": ["style/**/*.css", "style/**/*.less"]
                }
            }
        },
        
        watch: {
            styles: {
                files: ["style/**/*.less", "style/**/*.css"],
                tasks: ["less"],
                options: {
                    spawn: false
                }
            }
        },
		
		concurrent: {
			watch: {
				tasks: ["watch", "browserify:watch"],
				options: {
					logConcurrentOutput: true	
				}
			}
		}
    });
    
    grunt.registerTask("default", ["browserify:run", "less", "watch"]);
	grunt.registerTask("build", ["less", "concurrent:watch"]);
    grunt.registerTask("prod", ["browserify", "uglify", "less"]);
};