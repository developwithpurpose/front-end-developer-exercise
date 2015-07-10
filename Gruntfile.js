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
                stoponerror: false,
                relaxerror: [
                    "This interface to HTML5 document checking is deprecated."
                ]
            },
            files: {
                src: [ "app/**/*.html", "!app/assets/components/**/*.html" ]
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
                    livereload: true
                }
            },
            css: {
                files: [ "app/assets/stylesheets/*.scss" ],
                tasks: [ "sass", "autoprefixer" ],
                options: {
                    livereload: true
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
        },
        sass: {
            options: {
                sourceMap: true,
                includePaths: [ "app/assets/components/bourbon/app/assets/stylesheets/" ]
            },
            dist: {
                files: {
                    "app/assets/stylesheets/main.css": "app/assets/stylesheets/main.scss"
                }
            }
        },
        autoprefixer: {
            options: {
              browsers: ["last 4 versions"]
            },
            dist: {
                files: {
                    "app/assets/stylesheets/main.css": "app/assets/stylesheets/main.css"
                }
            }
        }
    });

    grunt.registerTask( "default", ["connect"] );
    grunt.registerTask( "lint", ["jshint", "csslint"] );
};
