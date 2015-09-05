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
        files: {
          "<%=builddir%>stylesheets/main.css": "<%=appdir%>stylesheets/**/*.styl"
        }
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
      lint: {
        files: [ "<%= jshint.all %>", "<%= csslint.strict.src %>", "app/**/*.html" ],
        tasks: [ "jshint", "csslint", "validation", "clean:validation" ]
      },
      styles: {
        files: ["<%= stylus.compile.files[Object.keys(stylus.compile.files)[0]] %>"],
        tasks: [ "stylus" ]
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
        src: [ "<%=appdir%>stylesheets/**/*.css", "<%= Object.keys(stylus.compile.files)[0] %>" ]
      }
    }
  });

  grunt.registerTask( "default", ["connect"] );
  grunt.registerTask( "lint", ["jshint", "csslint"] );
};
