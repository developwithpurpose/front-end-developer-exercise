/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */
module.exports = function( grunt ) {
  require("matchdep").filterDev("grunt-*")
    .forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      options: {
        includePaths: [
          "bower_components/foundation/scss",
          "bower_components/compass/lib",
          "build/fonts"
        ]
      },
      build: {
        options: {
          outputStyle: "compressed"
        },
        files: {
          "build/stylesheets/app.css": "app/assets/stylesheets/app.scss"
        }
      }
    },

    webfont: {
      build: {
        src: "app/assets/icons/*.svg",
        dest: "build/fonts"
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
        src: ["app/**/*.html"]
      }
    },

    clean: {
      validation: ["validation-*.json"]
    },

    watch: {
      grunt: { files: ["Gruntfile.js"] },

      sass: {
        files: "app/assets/stylesheets/*.scss",
        tasks: ["scsslint", "sass"]
      },

      font: {
        files: "app/assets/icons/*.svg",
        tasks: ["webfont"]
      },

      js: {
        files: ["app/assets/javascripts/**/*.js", "spec/*.js" ],
        tasks: ["jshint", "uglify", "jasmine"],
      },

      html: {
        files: ["app/**/*.html"],
        tasks: ["validation", "clean:validation"]
      },

      livereload: {
        files: ["build/**/*"],
        options: {
          livereload: 9002
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
          livereload: 9002
        }
      }
    },

    jshint: {
      all: ["Gruntfile.js", "app/assets/javascripts/**/*.js", "spec/*.js" ],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    scsslint: {
      options: {
        config: ".scss-lint.yml"
      },
      allFiles: ["app/assets/stylesheets/*.scss"]
    }
  });

  grunt.registerTask("default", ["connect", "watch"]);
  grunt.registerTask("lint", ["jshint", "scsslint", "validation", "clean:validation"]);
};
