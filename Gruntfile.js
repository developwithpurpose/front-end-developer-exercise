'use strict';

module.exports = function(grunt)
{
	require('load-grunt-tasks')(grunt);

	var assetBase = 'app/assets';

	grunt.initConfig({

		express: {
			all: {
				options: {
					bases: ['app'],
					port: 8080,
					hostname: '0.0.0.0',
					livereload: true
				}
			}
		},

		open: {
			all: {
				path: 'http://localhost:8080'
			}
		},

		sass: {
			options: {
				style: 'compressed'
			},
			dist: {
				files: [{
					expand: true,
					cwd: assetBase + '/stylesheets/src',
					src: '*.{scss,sass}',
					dest: assetBase + '/stylesheets',
					ext: '.css'
				}]
			}
		},

		uglify: {
			options: {
				sourceMap: true
			},
			dist: {
				files: [{
					expand: true,
					cwd: assetBase + '/javascripts/src',
					src: '**/*.js',
					dest: assetBase + '/javascripts'
				}]
			}
		},

		watch: {
			styles: {
				files: [assetBase + '/stylesheets/src/**/*.{scss,sass}'],
				tasks: ['sass:dist']
			},
			scripts: {
				files: [assetBase + '/javascripts/src/**/*.js'],
				tasks: ['uglify:dist']
			},
			livereload: {
				options: {
					livereload: true
				},
				files: [
					assetBase + '/javascripts/src/*.js',
					assetBase + '/stylesheets/src/*.{scss,sass}',
				]
			}
		}

	});

	grunt.registerTask('server', ['express', 'open', 'watch']);
};