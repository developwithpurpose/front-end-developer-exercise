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
            compile: {
                files: {
                    'app/assets/javascripts/baby-steps.js': ['lib/scripts/client.js']
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
                tasks: ['browserify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('w', ['build', 'watch']);
    
    grunt.registerTask('static', ['jshint']);

    grunt.registerTask('build', ['static', 'sass', 'browserify', 'jade']);
    grunt.registerTask('default', ['build']);

};