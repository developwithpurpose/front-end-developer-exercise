/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */
module.exports = function( grunt ) {
  require( "matchdep" ).filterDev( "grunt-*" )
    .forEach( grunt.loadNpmTasks );

  grunt.initConfig({
      pkg: grunt.file.readJSON( "package.json" ),
      jshint: {
        all: [ "Gruntfile.js", "app/assets/javascripts/**/*.js", "spec/*.js" ],
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
          files: [ "<%= jshint.all %>" ],
          tasks: [ "uglify", "jasmine" ],
          options: {
            livereload: 9000
          }
        },
        lint: {
          files: [ "<%= jshint.all %>", "<%= csslint.strict.src %>", "app/**/*.html" ],
          tasks: [ "jshint", "csslint", "validation", "clean:validation" ]
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

  grunt.registerTask( "default", ["connect"] );
  grunt.registerTask( "lint", ["jshint", "csslint"] );
};
