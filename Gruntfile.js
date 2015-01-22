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
            prod: {
                files: {
                    "script/app.js": ["script/app.js"]
                }
            },
			options: {
				mangle: true,
				compress: true,
				preserveComments: false
			}
        },
        
        less: {
            all: {
				files: {
					"style.min.css": ["style/**/*.css", "style/**/*.less"]
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
					dest: "style.min.css"
				}],
				options: {
					keepSpecialComments: 0	
				}
			}
		},
		
        watch: {
            styles: {
                files: ["style/**/*.less", "style/**/*.css"],
                tasks: ["less:dev"],
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
    
    grunt.registerTask("default", ["less:dev", "concurrent"]);
    grunt.registerTask("prod", ["browserify:prod", "uglify:prod", "less", "cssmin:prod" ]);
};