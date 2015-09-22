/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */
module.exports = function( grunt ) {
  require( "matchdep" ).filterDev( "grunt-*" )
    .forEach( grunt.loadNpmTasks );

  grunt.initConfig({
      pkg: grunt.file.readJSON( "package.json" ),
      jshint: {
        all: [ "Gruntfile.js", "<%= pkg.app %>/javascripts/**/*.js", "spec/*.js", "!<%= pkg.app %>/javascripts/vendor/*.js" ],
        options: {
          jshintrc: ".jshintrc"
        }
      },
      uglify: {
        build: {
          files: [{
            expand: true,
            cwd: "<%= pkg.app %>/javascripts",
            src: "**/*.js",
            dest: "<%= pkg.dist %>/js",
            reset: true
          }]
        }
      },
      validation: {
        options: {
          stoponerror: false
        },
        files: {
          src: [ "app/*.html" ]
        }
      },
      clean: {
        validation: [ "validation-*.json" ]
      },
      watch: {
        test: {
          files: [ "<%= jshint.all %>" ],
          tasks: [ "uglify", "jasmine", ],
          options: {
            livereload: 9000
          }
        },
        lint: {
          files: [ "<%= jshint.all %>", "<%= csslint.strict.src %>", "app/**/*.html" ],
          tasks: [ "jshint", "csslint", "validation", "clean:validation" ]
        },
        sass: {
          files: ["<%= pkg.app %>/stylesheets/sass/partials/*.scss"],
          tasks: ["sass","copy"]
        },
        copy: {
          files: ["<%= pkg.app %>/images/**", "<%= pkg.app %>*.html"],
          tasks: ["copy"]
        }
      },
      jasmine: {
        pivotal: {
          src: "<%= pkg.dist %>/js/**/*.js",
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
            hostname: "localhost",
            port: 9001,
            livereload: true,
            //keepalive: true,
            base: "<%= pkg.dist %>",
          }
        }
      },
    csslint: {
      options: {
        csslintrc: ".csslintrc"
      },
      strict: {
        src: [ "<%= pkg.app %>/stylesheets/**/*.css" ]
      }
    },

    sass: {
      options: {
          sourceMap: true
      },
      dist: {
          files: {
              "<%= pkg.dist %>/css/style.css": "<%= pkg.app %>/stylesheets/sass/style.scss"
          }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: "<%= pkg.app %>/images", src:["**/*"], dest: "<%= pkg.dist %>/images/"},
          {expand: true, cwd: "app/", src: ["index.html"], dest: "<%= pkg.dist %>/"},
          {expand: true, cwd: "<%= pkg.app %>/javascripts/", src: ["*.json"], dest: "<%= pkg.dist %>/js/"}
        ],
      },
    }
  });

  grunt.registerTask( "build", ["copy", "sass"] );
  grunt.registerTask( "lint", ["jshint", "csslint"] );
  grunt.registerTask( "default", ["connect", "lint" , "watch", "build"] );
};
