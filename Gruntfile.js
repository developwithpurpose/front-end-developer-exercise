/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */
module.exports = function( grunt ) {
  require( 'matchdep' ).filterDev( 'grunt-*' )
    .forEach( grunt.loadNpmTasks );

  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    babel: {
      options: {
        sourceMap: true,
        loose: 'all'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'app/assets/javascripts',
          src: ['**/*.js'],
          dest: 'temp/babel/js',
          ext:'.js'
        }]
      },
      spec: {
        files: [{
          expand: true,
          src: ['spec/**/*.spec.js', 'app/assets/javascripts/**/*.js'],
          dest: 'temp/babel/spec'
        }]
      }
    },
    browserify: {
      options: {
        sourceMap: true
      },
      dist: {
        src: ['temp/babel/js/**/*.js'],
        dest: 'dist/js/app.js'
      },
      spec: {
        src: ['temp/babel/spec/**/*.js'],
        dest: 'dist/js/tests.js',
      }
    },
    clean: {
      validation: [ 'validation-*.json' ],
      build: [ 'dist', 'temp' ]
    },
    connect: {
      server: {
        options: {
          port: 9001,
          livereload: false,
          keepalive: true
        }
      }
    },
    copy: {
      files: {
        expand: true,
        dest: 'dist',
        cwd: 'public/',
        src: '**'
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        src: [ 'app/assets/stylesheets/**/*.css' ]
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/css/main.min.css': ['dist/css/main.css']
        }
      }
    },
    jasmine: {
      pivotal: {
        options: {
          specs: 'dist/js/tests.js',
          vendor: [
            'vendor/**/*.js'
          ],
          template: 'spec/index.tmpl'
        }
      }
    },
    jshint: {
      all: [ 'Gruntfile.js', 'app/assets/javascripts/**/*.js', 'spec/*.js' ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    sass: {
      options: {
        sourceMap: false,
      },
      dist: {
        files: {
          'dist/css/main.css': 'app/assets/stylesheets/main.scss'
        }
      }
    },
    'string-replace': {
      dev: {
        src: 'dist/**/*.html',
        dest: 'dist/',
        options: {
          replacements: [
            {
              pattern: 'app.min.js',
              replacement: 'app.js'
            },
            {
              pattern: 'main.min.css',
              replacement: 'main.css'
            }
          ]
        }
      }
    },
    uglify: {
      options: {
        preserveComments: false,
        compress : false,
        mangle : false,
        beautify : {
            beautify: false,
            ascii_only: true,
            quote_keys: true
        }
      },
      build: {
        files: {
          'dist/js/app.min.js': ['dist/js/app.js']
        }
      }
    },
    validation: {
      options: {
        stoponerror: false
      },
      files: {
        src: [ 'public/**/*.html' ]
      }
    },
    watch: {
      test: {
        files: [ '<%= jshint.all %>' ],
        tasks: [ 'uglify', 'jasmine' ],
        options: {
          livereload: 9000
        }
      },
      lint: {
        files: [ '<%= jshint.all %>', '<%= csslint.strict.src %>', 'app/**/*.html' ],
        tasks: [ 'jshint', 'csslint', 'validation', 'clean:validation' ]
      },
      sass: {
        files: [ 'app/assets/stylesheets/**/*.scss' ],
        tasks: [ 'sass' ]
      }
    }
  });

  grunt.registerTask( 'default', ['connect'] );
  grunt.registerTask( 'lint', ['jshint', 'csslint'] );
  grunt.registerTask( 'build', ['clean', 'babel', 'browserify',  'uglify', 'sass', 'copy', 'cssmin']);
  grunt.registerTask( 'builddev', ['clean', 'babel', 'browserify',  'uglify', 'sass', 'copy', 'string-replace:dev']);
};
