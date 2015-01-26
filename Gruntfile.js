module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        uglify: {
            js: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '{*,*/*}.js',
                    dest: 'dest/js'
                }]
            }
        }
    });
    grunt.registerTask("default", ['uglify:js']);
}
