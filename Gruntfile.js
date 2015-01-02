module.exports = function(grunt) {
    require("jit-grunt")(grunt);

    grunt.initConfig({
        browserify: {
            options: {
                transform: [require("grunt-react").browserify],
                browserifyOptions: {
                    debug: true
                }
            },
            app: {
                src: ["script/vendor/**/*.js", "script/app/**/*.js", "script/app/**/*.jsx"],
                dest: "script/app.js"
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
                tasks: ["browserify"],
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
    
    grunt.registerTask("watch", ["browserify", "less", "watch"]);
    grunt.registerTask("prod", ["browserify", "uglify", "less"]);
};