module.exports = function(grunt) {
    require("jit-grunt")(grunt);

    grunt.initConfig({
        browserify: {
            options:      {
                transform: [require("grunt-react").browserify]
            },
            app: {
                src: ["script/vendor/**/*.js", "script/app/**/*.js", "script/app/**/*.jsx"],
                dest: "script/app.js"
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
    
    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask("default", ["browserify", "less", "watch"]);
};