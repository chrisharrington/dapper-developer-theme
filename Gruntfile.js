module.exports = function(grunt) {
    require("jit-grunt")(grunt);

    grunt.initConfig({
        browserify: {
			dev: {
				src: ["script/vendor/**/*.js", "script/app/init.js"],
				dest: "script.js",
				options: {
					transform: [require("grunt-react").browserify],
					browserifyOptions: {
						debug: true,
						paths: ["./script/app"],
					}
				}
			},
			
			prod: {
				src: ["script/vendor/**/*.js", "script/app/init.js"],
				dest: "script.js",
				options: {
					transform: [require("grunt-react").browserify],
					browserifyOptions: {
						paths: ["./script/app"],
					}
				}
			},
			
			watch: {
				src: ["script/vendor/**/*.js", "script/app/init.js"],
				dest: "script.js",
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
            prod: {
                files: {
                    "script.js": ["script.js"]
                }
            }
        },
        
        less: {
            all: {
				files: {
					"style.css": ["style/**/*.css", "style/**/*.less"]
				},
				options: {
					compress: true,
					yuicompress: true
				}
			}
        },
		
		cssmin: {
			prod: {
				files: [{
					src: "style.css",
					dest: "style.css"
				}],
				options: {
					keepSpecialComments: 0	
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
    grunt.registerTask("prod", ["browserify:prod", "uglify:prod", "less", "cssmin:prod" ]);
};