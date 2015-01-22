module.exports = function(grunt) {
    require("jit-grunt")(grunt);

    grunt.initConfig({
        browserify: {
			dev: {
				src: "script/app/init.js",
				dest: "script/app.js",
				options: {
					transform: [require("grunt-react").browserify],
					browserifyOptions: {
						debug: true,
						paths: ["./script/app"],
					}
				}
			},
			
			prod: {
				src: "script/app/init.js",
				dest: "script/app.js",
				options: {
					transform: [require("grunt-react").browserify],
					browserifyOptions: {
						paths: ["./script/app"],
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
    
    grunt.registerTask("default", ["less", "concurrent"]);
    grunt.registerTask("prod", ["browserify:run", "uglify", "less"]);
};