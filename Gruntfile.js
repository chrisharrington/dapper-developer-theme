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
            scripts: {
                files: ["script/app/**/*.js", "script/app/**/*.jsx"],
                tasks: ["browserify:run"],
                options: {
                    spawn: false
                }
            },
            
            styles: {
                files: ["style/**/*.less", "style/**/*.css"],
                tasks: ["less"],
                options: {
                    spawn: false
                }
            }
        }
    });
    
    grunt.registerTask("default", ["browserify", "less", "watch"]);
    grunt.registerTask("prod", ["browserify", "uglify", "less"]);
};