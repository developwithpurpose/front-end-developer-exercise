module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'app/assets/stylesheets/baby-steps.css': 'lib/baby-steps.scss'
                }
            }
        },
        browserify: {
            dist: {
                files: {
                    'app/assets/javascripts/baby-steps.js': ['lib/scripts/index.js']
                }
            },
            test: {
                src: ['test/**/*.spec.js'],
                dest: 'test/specs.js',
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        jade: {
            compile: {
                options: {
                    data: require('./lib/content.json')
                },
                files: {
                    'app/index.html': ['lib/baby-steps.jade'],
                }
            }
        },
        jshint: {
            all: ['gruntfile.js', 'lib/**/*.js']
        },
        jasmine: {
            test: {
                src: 'app/assets/javascripts/baby-steps.js',
                options: {
                    specs: 'test/specs.js'
                }
            }
        },
        clean: {
            test: ['test/specs.js']
        },
        watch: {
            markup: {
                files: ['lib/**/*.jade', 'lib/**/*.json'],
                tasks: ['jade']
            },
            styles: {
                files: 'lib/**/*.scss',
                tasks: ['sass']
            },
            scripts: {
                files: ['lib/**/*.js'],
                tasks: ['browserify:dist']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    
    grunt.registerTask('w', ['build', 'watch']);
    
    grunt.registerTask('static', ['jshint']);
    grunt.registerTask('test', ['browserify:test', 'jasmine', 'clean:test']);

    grunt.registerTask('build', ['static', 'sass', 'browserify', 'jade', 'clean:test']);
    grunt.registerTask('default', ['build']);

};