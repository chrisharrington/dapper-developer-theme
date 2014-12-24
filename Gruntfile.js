module.exports = function(grunt) {
    require("jit-grunt")(grunt);

    grunt.initConfig({
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
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask("default", ["less", "watch"]);
};