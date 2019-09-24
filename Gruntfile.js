/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        node: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      css: {
        files: 'app/assets/stylesheets/sass/**/*.scss',
        tasks: ['sass', 'postcss']
      },
      scripts: {
        files: ['app/assets/javascripts/*.js'],
        tasks: ['uglify']
      }
    },
    uglify : {
        options: {
            sourceMap: true,
            compress: {
                drop_console: false
            }
        },
        build: {
            files: {
                'app/assets/javascripts/min/scripts-min.js': [
                  "app/assets/javascripts/scripts.js"
                ],
            }
        }
    },
    sass: {
      options: {
        //compass: true
        style: 'compressed'
      },
      build: {
        files: {
          "app/assets/stylesheets/style.css": ["app/assets/stylesheets/sass/style.scss"]
        }
      }
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                  'app/assets/stylesheets/style.css',
                  'app/assets/javascripts/min/child-scripts-min.js',
                ]
            },
            options: {
                watchTask: true,
                proxy: "http:127.0.0.1:8080"
            }
        }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            grid: "autoplace",
            overrideBrowserslist: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'app/assets/stylesheets/style.css'
      }
    }
 });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-postcss');

  // Default task.
  grunt.registerTask('default', ['jshint','browserSync', 'watch']);
  grunt.registerTask('build', ['sass', 'uglify', 'postcss']);

};
