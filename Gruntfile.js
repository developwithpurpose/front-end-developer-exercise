/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */
module.exports = function( grunt ) {
  require( "matchdep" ).filterDev( "grunt-*" )
    .forEach( grunt.loadNpmTasks );

  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    appdir: "app/assets/",
    builddir: "build/",
    jshint: {
      all: [ "Gruntfile.js", "<%=appdir%>javascripts/**/*.js", "spec/*.js" ],
      options: {
        jshintrc: ".jshintrc"
      }
    },
    uglify: {
      build: {
        files: [{
          expand: true,
          cwd: "<%=appdir%>javascripts",
          src: "**/*.js",
          dest: "<%=builddir%>javascripts",
          reset: true
        }]
      }
    },
    stylus: {
      compile: {
        options: {
          "include css": true
        },
        files: {
          "<%=builddir%>stylesheets/main.css": [
            "<%=appdir%>stylesheets/style.styl"
          ]
        }
      }
    },
    validation: {
      options: {
        stoponerror: false,
        relaxerror: [
          "The Content-Type was “text/html”. Using the HTML parser.",
          "Using the schema for HTML with SVG 1.1, MathML 3.0, RDFa 1.1, and ITS 2.0 support."
        ],
      },
      files: {
        src: [ "app/**/*.html" ]
      }
    },
    clean: {
      validation: [ "validation-*.json", "w3cErrors" ]
    },
    watch: {
      test: {
        files: [ "<%= jshint.all %>" ],
        tasks: [ "uglify", "jasmine" ],
        options: {
          livereload: 9000
        }
      },
      styles: {
        files: ["<%=appdir%>**/*.css", "<%=appdir%>**/*.styl"],
        tasks: [ "stylus" ]
      },
      lint: {
        files: [ "<%= jshint.all %>", "<%= csslint.strict.src %>", "app/**/*.html" ],
        tasks: [ "jshint", "csslint", "validation", "clean:validation" ]
      }
    },
    jasmine: {
      pivotal: {
        src: "<%=builddir%>javascripts/**/*.js",
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
        src: [ "<%=builddir%>**/*.css", "<%=appdir%>**/*.css" ]
      }
    }
  });

  grunt.registerTask( "default", ["connect"] );
  grunt.registerTask( "lint", ["jshint", "csslint"] );
};
