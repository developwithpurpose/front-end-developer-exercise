/*jshint -W015, -W116, -W013, -W011 */
/*globals require:false, module:false */
module.exports = function( grunt ) {
    require( "matchdep" ).filterDev( "grunt-*" )
        .forEach( grunt.loadNpmTasks );

    grunt.initConfig({
        pkg: grunt.file.readJSON( "package.json" ),
        jshint: {
            all: [ "Gruntfile.js", "app/assets/javascripts/**/*.js", "spec/*.js" ],
            main: ["app/assets/javascripts/main.js"],
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
                files: [ "<%= jshint.all %>", "app/**/*.html" ],
                tasks: [ "jshint", "validation", "clean:validation" ]
            },
            css: {
				files: "app/assets/sass/**/*.scss",
				tasks: ["compass", "autoprefixer", "cssmin"]
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
        
        compass: {
            dist: {
              options: {
                config: "config.rb"
              }
            }
        },
        
        autoprefixer: {
            no_dest: {
              src: "app/assets/stylesheets/style.css"
            }
        },
        
        cssmin: {
            combine: {
                files: {
                    "app/assets/stylesheets/style.min.css": ["app/assets/stylesheets/normalize.css", "app/assets/stylesheets/style.css"]
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
        }
    });

    grunt.registerTask( "default", ["connect"] );

};
