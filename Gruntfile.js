/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */
module.exports = function( grunt ) {
  require( "matchdep" ).filterDev( "grunt-*" )
    .forEach( grunt.loadNpmTasks );

  grunt.initConfig({
      pkg: grunt.file.readJSON( "package.json" ),
      autoprefixer: {
        browsers: ["last 2 versions', 'ie 8', 'ie 9"],
        src: "app/assets/stylesheets/css/main.css"
      },
      cssmin: {
        target: {
          files: {
            "app/assets/stylesheets/css/main.css" : "app/assets/stylesheets/css/main.css"
          }        
        }
      },
      imagemin: {
        static: {
          options: {
            optimizationLevel: 3,
          },
          files: [{
            expand: true,
            cwd: "app",
            src: ["**/*.{png,jpg,gif}", "**/**/*.{png,jpg,gif}"],
            dest: "build/images"
          }]
        }
      },
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
        },
        livereload: {
           options: {
            livereload: true
           },
           files: [
            "app/assets/stylesheets/css/main.css",
            "app/assets/javascripts/main.js",
            "app/index.html"
            ]
          }, 
         sass: {
          files: ["app/assets/stylesheets/sass/main.scss"],
          tasks: ["sass:dev", "autoprefixer"]
         }    
      },
      jasmine: {
        pivotal: {
          src: "build/javascripts/**/*.js",
          options: {
            specs: "spec/**/*.spec.js",
            vendor: [
              "bower_components/jquery/dist/jquery.js",
              "bower_components/jasmine-jquery/lib/jasmine-jquery.js"            
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
    },
    sass: {
      prod: {
        options: {
          outputStyle: "compressed"
        }, 
        files: {
          "app/assets/stylesheets/css/main.css" : "app/assets/stylesheets/sass/main.scss"
        }
      }, 
      dev: {
        options: {
          sourceMap: true,
          sourceMapEmbed: true
        },
        files: {
          "app/assets/stylesheets/css/main.css" : "app/assets/stylesheets/sass/main.scss"
        }
      }    
    } 
});

  grunt.registerTask( "default", ["connect"] );
  grunt.registerTask( "lint", ["jshint", "csslint"] );
  grunt.registerTask( "build", [
    "clean",
    "sass:prod",
    "autoprefixer",
    "uglify",
    "cssmin",
    "imagemin"
  ]);
  grunt.registerTask( "build-dev", [
    "clean",
    "sass:dev",
    "autoprefixer"
  ]);
  grunt.registerTask( "serve", [
    "build-dev",
    "connect",
    "watch"    
  ]);
};
