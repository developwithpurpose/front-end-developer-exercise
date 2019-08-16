'use strict';
module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'assets/js/*.js',
        '!assets/build/app.min.js'
      ]
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false
        },
        files: {
          'app/assets/build/app.min.css': [
            'app/assets/stylesheets/scss/app.scss'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'app/assets/build/app.min.js': [
            'app/assets/js/getMyFriends.js',
            'app/assets/js/tabs.js'
          ]
        },
      }
    },
    watch: {
      sass: {
        files: [
          'app/assets/stylesheets/scss/*.scss'
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          'app/assets/js/*.js'
        ],
        tasks: ['jshint', 'uglify']
      },
      html: {
        files: [
          '**/*.html'
        ]
      }
    },
    clean: {
      contents: [
        'app/assets/build/*'
      ]
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'app/assets/build/*.css',
            'app/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './app'
        }
      }
    },
    cacheBust: {
      taskName: {
        options: {
          assets: ['app/assets/build/**']
        },
        src: ['index.html']
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-cache-bust');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'sass',
    'uglify',
    'cachebust'
  ]);
  grunt.registerTask('dev', [
    'browserSync', 'watch'
  ]);

};