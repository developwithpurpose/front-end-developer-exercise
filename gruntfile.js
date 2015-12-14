module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'app/assets/stylesheets/baby-steps.css': 'lib/baby-steps.scss'
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
        watch: {
            markup: {
                files: ['lib/**/*.jade', 'lib/**/*.json'],
                tasks: ['jade']
            },
            styles: {
                files: 'lib/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    
    grunt.registerTask('w', ['build', 'watch']);

    grunt.registerTask('build', ['sass', 'jade']);
    grunt.registerTask('default', ['build']);

};