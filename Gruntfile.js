/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */
module.exports = function( grunt ) {
  require("matchdep").filterDev("grunt-*")
    .forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    locations: {
      html: "app/**/*.html",
      javascripts: "app/assets/javascripts/**/*.js",
      specs: "spec/**/*.js",
      stylesheets: "app/assets/stylesheets/*.scss",
      icons: "app/assets/icons/*.svg"
    },

    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      gruntfile: [
        "Gruntfile.js"
      ],
      main: [
        "<%= locations.javascripts %>"
      ],
      specs: [
        "<%= locations.specs %>"
      ]
    },

    scsslint: {
      options: {
        config: ".scss-lint.yml"
      },
      main: [
        "<%= locations.stylesheets %>"
      ]
    },

    validation: {
      options: {
        stoponerror: false
      },
      files: {
        src: ["<%= locations.html %>"]
      }
    },

    clean: {
      validation: ["validation-*.json"]
    },

    browserify: {
      main: {
        src: "<%= locations.javascripts %>",
        dest: "build/javascripts/main.js"
      },
      specs: {
        src: "<%= locations.specs %>",
        dest: "build/javascripts/specs.js"
      }
    },

    sass: {
      options: {
        includePaths: [
          "bower_components/foundation/scss",
          "bower_components/compass/lib",
          "build/fonts"
        ]
      },
      main: {
        files: {
          "build/stylesheets/app.css": "app/assets/stylesheets/app.scss"
        }
      }
    },

    webfont: {
      main: {
        options: {
          autoHint: false
        },
        src: "<%= locations.icons %>",
        dest: "build/fonts"
      }
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ["Gruntfile.js"],
        tasks: ["jshint:gruntfile"]
      },

      sass: {
        files: "<%= locations.stylesheets %>",
        tasks: ["scsslint", "sass"]
      },

      font: {
        files: "<%= locations.icons %>",
        tasks: ["webfont"]
      },

      js: {
        files: ["<%= locations.javascripts %>"],
        tasks: ["jshint:main", "browserify:main"]
      },

      specs: {
        files: ["<%= locations.javascripts", "<%= locations.specs %>"],
        tasks: ["jshint:specs", "browserify:specs"]
      },

      html: {
        files: ["<%= locations.html %>"],
        tasks: ["validation", "clean:validation"]
      },

      livereload: {
        files: ["build/**/*"],
        options: {
          livereload: 9002
        }
      }
    },

    testem: {
      main: {
        src: [
          "build/javascripts/specs.js"
        ],
        options: {
          framework: "mocha",
          launch_in_ci: ["PhantomJS"]
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          livereload: 9002
        }
      }
    }
  });

  grunt.registerTask("lint", ["jshint", "scsslint", "validation", "clean:validation"]);
  grunt.registerTask("build", ["lint", "browserify:main", "sass:main", "webfont:main"]);
  grunt.registerTask("testrunner", ["testem:run:main"]);
  grunt.registerTask("default", ["build", "connect", "watch"]);
};
