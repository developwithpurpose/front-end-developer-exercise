module.exports = function (grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 9000,
                    livereload: true,
                    keepalive: true
                }
            }
        },

        concat: {
            options: {},
            
            javascript: {
                src: ['bower_components/jquery/dist/jquery.js', 'bower_components/underscore/underscore.js', 'bower_components/backbone/backbone.js', 'app/assets/javascripts/models/friend.js', 'app/assets/javascripts/collections/friends.js', 'app/assets/javascripts/views/app_view.js', 'app/assets/javascripts/views/friend_view.js'],
                dest: 'app/assets/javascripts/build.js'
            },
            
            stylesheets: {
                src: ['app/assets/stylesheets/reset.scss', 'app/assets/stylesheets/style.scss'],
                dest: 'app/assets/stylesheets/build.scss'
            }
        },

        sass: {
            dist: { 
                options: {
                    style: 'compressed'
                },
                files: {
                    'app/assets/stylesheets/build.css' : 'app/assets/stylesheets/build.scss'
                }
            }
        },
        
        uglify: {
            javascripts: {
                files: {
                    'app/assets/javascripts/build.min.js' : ['app/assets/javascripts/build.js']
                }
            }
        },

        watch: {
            files:['app/assets/javascripts/**/*.js','app/assets/stylesheets/*.scss'],
            tasks:['concat','sass', 'uglify'] 
        },
        
        jasmine: {
            developwithpurpose: {
                src: 'app/assets/javascripts/**/*.js',
                options: {
                    specs: 'spec/*spec.js'
                }
            }
        }
    }); 

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    
    grunt.registerTask('build',['concat', 'sass', 'uglify', 'watch']);
    grunt.registerTask('server',['connect']);
}