module.exports = function(grunt) {
    require("jit-grunt")(grunt);

    grunt.initConfig({
        bowercopy: {
            options: {
                srcPrefix: "bower_components"
            },
            scripts: {
                options: {
                    destPrefix: "script/vendor"
                },
                files: {
                    "require.js": "require/build/require.js",
                    "github-api.js": "github-api/github.js"
                }
            }
        },
        
        concat: {
            dist: {
                src: ["script/vendor/**/*.js", "script/app/**/*.js"],
                dest: "app.js"
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
                files: ["script/app/**/*.js"],
                tasks: ["concat"],
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

    grunt.registerTask("default", ["bowercopy", "concat", "less", "watch"]);
};