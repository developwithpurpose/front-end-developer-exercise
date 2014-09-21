/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */

module.exports = function( grunt ) {
  require("matchdep").filterDev("grunt-*")
    .forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    /* === JHint ===================================================================== */

    jshint: {
      all: ["Gruntfile.js", "app/dest/js/**/*.js", "spec/*.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    /* === Uglify ===================================================================== */

    // uglify: {
    //   build: {
    //     files: [{
    //       expand: true,
    //       cwd: "app/dest/js",
    //       src: "**/*.js",
    //       dest: "build/js",
    //       reset: true
    //     }]
    //   }
    // },

    /* === Validation ================================================ */

    validation: {
      options: {
        stoponerror: false
      },

      files: {
        src: [ "app/**/*.html" ]
      }
    },

    /* === Clean ====================================================================== */

    clean: {
      validation: [ "validation-*.json" ]
    },

    /* === Watch ====================================================================== */

    watch: {
      stylus: {
        files: "app/src/stylus/**/*.styl",
        tasks: "stylus"
      },

      jade: {
        files: "app/src/jade/**/*.jade",
        tasks: "jade"
      },

      livereload: {
        options: { 
          livereload: true 
        },
        files: ["app/dest/**/*"],
      },

      // test: {
      //   files: [ "<%= jshint.all %>" ],
      //   tasks: [ "uglify", "jasmine" ],
      //   options: {
      //     livereload: 9000
      //   }
      // },
      // lint: {
      //   files: [ "<%= jshint.all %>", "<%= csslint.strict.src %>", "app/**/*.html" ],
      //   tasks: [ "jshint", "csslint", "validation", "clean:validation" ]
      // },
    },

    /* === Stylus ==================================================================== */

    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: {
          "app/dest/css/main.css": ["app/src/stylus/main.styl"]
        }
      }
    },

    /* === Jade ====================================================================== */

    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          "app/dest/index.html": ["app/src/jade/index.jade"]
        }
      }
    },

    /* === Jasmine =================================================================== */

    jasmine: {
      pivotal: {
        src: "build/js/**/*.js",
        options: {
          specs: "spec/**/*.spec.js",
          vendor: [
            "vendor/**/*.js"
          ],
          template: "spec/index.tmpl"
        }
      }
    },

    /* === Connect =================================================================== */

    connect: {
      server: {
        options: {
          port: 9000,
          host: "localhost",
          livereload: false,
          keepalive: true,
          base: "app/dest"
        }
      }
    },

    /* === CSS Lint ================================================================= */

    csslint: {
      options: {
        csslintrc: ".csslintrc"
      },
      strict: {
        src: [ "app/dest/css/**/*.css" ]
      }
    },

    /* === Parallel ================================================================= */

    parallel: {
      default: {
        tasks: [
          { grunt: true, args: ['watch'] }, 
          { grunt: true, args: ['connect'] }, 
        ]
      }
    }
  });

  /* === Default task ============================================================== */

  grunt.registerTask("default", ["stylus", "jade", "parallel:default"]);

  /* === Lint task ================================================================= */

  grunt.registerTask("lint", ["jshint", "csslint"]);
};
