/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */
module.exports = function( grunt ) {
  var rewrite = require( "connect-modrewrite" );
  require( "matchdep" ).filterDev( "grunt-*" )
    .forEach( grunt.loadNpmTasks );

  grunt.initConfig({
      pkg: grunt.file.readJSON( "package.json" ),

      env: {
        build: {
          NODE_ENV: "production"
        }
      },

      jshint: {
        all: [ "Gruntfile.js", "app/assets/javascripts/**/*.js", "spec/*.js" ],
        options: {
          jshintrc: ".jshintrc",
          additionalSuffixes: [".js"]
        }
      },


      validation: {
        options: {
          stoponerror: false
        },
        files: {
          src: [ "app/**/*.html" ]
        }
      },

      clean: {
        validation: [ "validation-*.json" ]
      },

      browserify: {
        dev: {
          options: {
            debug: true,
            transform: ["babelify"]
          },

          files: {
            "dist/js/build.js": "app/assets/javascripts/**/*.js"
          }
        },

        build: {
          options: {
            debug: false,
            transform: ["babelify"]
          },

          files: {
            "dist/js/build.js": "app/assets/javascripts/**/*.js"
          }
        },

        specs: {
    			src: ["spec/**/*.spec.js"],
    			dest: "spec/specs.js",
    			options: {
    				browserifyOptions: {
    					debug: true,
    					paths: ["./node_modules", "./dist/js"],
    				}
    			}
    		}
      },

      watch: {
        lint: {
          files: [ "<%= jshint.all %>", "<%= csslint.strict.src %>", "app/**/*.html" ],
          tasks: [ "jshint", "csslint", "validation", "clean:validation" ]
        },

        browserify: {
          files: ["app/assets/javascripts/**/*.js"],
          tasks: ["browserify:dev"]
        },

        sass: {
          files: ["app/assets/stylesheets/scss/**/*.scss"],
          tasks: ["sass"]
        },

        copy: {
          files: ["app/assets/images/**"],
          tasks: ["copy"]
        }
      },

      jasmine: {
        pivotal: {
          tasks: [ "browserify:specs"],
          src: ["app/assets/javascripts/**/*.js"],
          options: {
            specs: "specs/**/*.spec.js",
            template: "spec/index.tmpl"
          }
        }
      },

      connect: {
        server: {
          options: {
            port: 9001,
            livereload: false,
            keepalive: true,
            base: "dist/",
            middleware: function ( connect, options, middlewares ) {
              var rules = [
                  "!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif$ /index.html"
              ];
              middlewares.unshift( rewrite( rules ) );
              return middlewares;
            }
          }
        }
      },

    csslint: {
      options: {
        csslintrc: ".csslintrc"
      },
      strict: {
        src: [ "app/assets/stylesheets/**/*.css" ]
      }
    },

    sass: {
      options: {
          sourceMap: true
      },
      dist: {
          files: {
              "dist/css/build.css": "app/assets/stylesheets/scss/**/*.scss"
          }
      }
    },

    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, cwd: "app/assets/images", src:["**/*"], dest: "dist/images/"},
          {expand: true, cwd: "app/", src: ["index.html"], dest: "dist/"}
        ],
      },
    }
  });


  grunt.registerTask("build", ["env:build", "browserify:build", "copy"]);
  grunt.registerTask( "default", ["connect"] );
  grunt.registerTask( "lint", ["jshint", "csslint"] );
};
