'use strict';

module.exports = function(grunt)
{
	require('load-grunt-tasks')(grunt);

	var _assets = 'app/assets',
		_css 	= 'app/assets/stylesheets',
		_js 	= 'app/assets/javascripts',
		_bower 	= grunt.file.readJSON('.bowerrc')
	;

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

		uglify: {
			scripts: {
				files: { 'app/assets/javascripts/app.js': [
						_bower.directory + '/jquery/dist/jquery.js',
						_bower.directory + '/jquery.easing/js/jquery.easing.js',
						_bower.directory + '/jquery.scrollTo/jquery.scrollTo.js',
						_bower.directory + '/modernizr/modernizr.js',
						_js + '/src/elements.js',
						_js + '/src/nav.js',
						_js + '/src/social.js',
						_js + '/src/ready.js'
					]
				}
			}
		},

		sass: {
			options: {
				style: 'compressed'
			},
			dist: {
				files: [{
					expand: true,
					cwd: _css + '/src',
					src: '*.{scss,sass}',
					dest: _css,
					ext: '.css'
				}]
			}
		},

		watch: {
			styles: {
				files: [_css + '/src/**/*.{scss,sass}'],
				tasks: ['sass:dist']
			},
			scripts: {
				files: [_js + '/src/**/*.js'],
				tasks: ['uglify:scripts']
			},
			livereload: {
				options: {
					livereload: true
				},
				files: [
					_js + '/src/*.js',
					_css + '/src/*.{scss,sass}',
				]
			}
		}

	});

	grunt.registerTask('server', ['uglify:scripts', 'sass:dist', 'express', 'open', 'watch']);
};