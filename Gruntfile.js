module.exports = function(grunt) {
    require("jit-grunt")(grunt);

    grunt.initConfig({
        browserify: {
			dev: {
				src: ["script/vendor/**/*.js", "script/app/init.js"],
				dest: "built/script.js",
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
				dest: "built/script.js",
				options: {
					transform: [require("grunt-react").browserify],
					browserifyOptions: {
						paths: ["./script/app"],
					}
				}
			},
			
			watch: {
				src: ["script/vendor/**/*.js", "script/app/init.js"],
				dest: "built/script.js",
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
                    "built/script.js": ["built/script.js"]
                }
            }
        },
        
        less: {
			dev: {
				files: {
					"built/style.css": ["style/**/*.css", "style/**/*.less", "!style/vendor/fonts.css"],
					"built/fonts.css": ["style/vendor/fonts.css"]
				}
			},
            prod: {
				files: {
					"built/style.css": ["style/**/*.css", "style/**/*.less", "!style/vendor/fonts.css"],
					"built/fonts.css": ["style/vendor/fonts.css"]
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
					src: "built/style.css",
					dest: "built/style.css"
				}, {
					src: "built/fonts.css",
					dest: "built/fonts.css"
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
    grunt.registerTask("prod", ["browserify:prod", "uglify:prod", "less:prod", "cssmin:prod" ]);
};