/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */
module.exports = function( grunt ) {
  require( "matchdep" ).filterDev( "grunt-*" )
    .forEach( grunt.loadNpmTasks );


  grunt.loadNpmTasks("grunt-contrib-sass");


  grunt.initConfig({
      pkg: grunt.file.readJSON( "package.json" ),
      jshint: {
        all: [ "Gruntfile.js", "app/assets/javascripts/**/*.js", "!app/assets/javascripts/vendor/*.js", "spec/*.js" ],
        options: {
          jshintrc: ".jshintrc"
        }
      },
      uglify: {
        build: {
          files: [{
            expand: true,
            cwd: "app/assets/javascripts",
            src: "**/*.js",
            dest: "build/javascripts",
            reset: true
          }]
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
      watch: {
        test: {
          files: [ "<%= jshint.all %>", "app/assets/stylesheets/scss/*.scss" ],
          tasks: [ "uglify", "sass"/*, "jasmine"*/ ],
          options: {
            livereload: 9000
          }
        },
        lint: {
          files: [ "<%= jshint.all %>", "app/**/*.html" ],
          tasks: [ "jshint", "validation", "clean:validation" ]
        }
      },
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: "compressed"
          },
          files: {                         // Dictionary of files
            "app/assets/stylesheets/css/styles.css" : "app/assets/stylesheets/scss/styles.scss"                 // 'destination': 'source'
          }
        }
      },
      jasmine: {
        pivotal: {
          src: "build/javascripts/**/*.js",
          options: {
            specs: "spec/**/*.spec.js",
            vendor: [
              "vendor/**/*.js"
            ],
            template: "spec/index.tmpl"
          }
        }
      },
      connect: {
        server: {
          options: {
            port: 9001,
            livereload: true,
            keepalive: true
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
      }
  });

  grunt.registerTask( "default", ["connect", "sass"] );

  grunt.registerTask( "lint", ["jshint", "csslint"] );
};
