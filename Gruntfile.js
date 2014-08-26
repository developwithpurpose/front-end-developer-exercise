/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */
module.exports = function( grunt ) {
  require( "matchdep" ).filterDev( "grunt-*" )
    .forEach( grunt.loadNpmTasks );

  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    replace: {
      build: {
        src: "app/index.html",
        dest: "build/index.html",
        replacements: [
          {
            from: "assets/javascripts",
            to: "javascripts"
          },
          {
            from: "assets/stylesheets/css",
            to: "stylesheets"
          }
        ]
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
    less: {
      dev: {
        files: {
          "app/assets/stylesheets/css/style.css": "app/assets/stylesheets/less/style.less"
        }
      },
      build: {
        options: {
          compress: true,
          modifyVars: {
            "pth-img": "~'../images/'"
          }
        },
        files: {
          "build/stylesheets/style.css": "app/assets/stylesheets/less/style.less"
        }
      }
    },
    autoprefixer: {
      options: {
        browser: [ "last 2 version", "ie 8", "e 9" ]
      },
      dev: {
        src: "app/assets/stylesheets/css/style.css"
      },
      build: {
        src: "build/stylesheets/style.css"
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: "app/assets/images",
          src: [ "**/*.{png,jpg,gif}" ],
          dest: "build/images"
        }]
      }
    },
    clean: {
      build: {
        src: [ "build" ]
      },
      validation: [ "validation-*.json" ]
    },
    watch: {
      test: {
        files: [ "<%= jshint.all %>" ],
        tasks: [ "uglify", "jasmine" ],
        options: {
          livereload: 9001
        }
      },
      less: {
        files: [ "app/assets/stylesheets/less/**/*.less" ],
        tasks: [ "less:dev" ]
      },
      prefix: {
        files: [ "app/assets/stylesheets/css/style.css" ],
        tasks: [ "autoprefixer:dev" ]
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
        src: [ "build/assets/stylesheets/**/*.css" ]
      }
    }
  });

  grunt.registerTask( "default", [ "connect" ] );
  grunt.registerTask( "lint", [ "jshint", "csslint" ] );
  grunt.registerTask( "dev", [ "watch:less", "watch:prefix" ] );
  grunt.registerTask( "build", [ "clean:build", "replace:build", "uglify", "less:build", "autoprefixer:build", "imagemin" ] );
};
