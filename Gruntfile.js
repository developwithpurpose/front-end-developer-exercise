module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['./app/javascripts/**/*.js'],
      options: {
        esnext: true
      }
    },
    sass: {
      dist: {
        files: {
          'app/assets/stylesheets/style.css': 'app/assets/sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['./app/javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sassy: {
        files: ['./app/assets/sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};