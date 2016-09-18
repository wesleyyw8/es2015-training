module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      development: {
        src: ["./js/*.js"],
          dest: './dist/js/bundle.js',
          options: {
            browserifyOptions: { debug: true },
            transform: [["babelify", { "presets": ["es2015"] }]]
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/{,*/}*.js'],
        tasks: ['browserify']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['js/{,*/}*.js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['browserify','watch']);
};