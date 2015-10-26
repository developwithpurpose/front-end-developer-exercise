module.exports = function (grunt) {


	grunt.initConfig({
		less: {
			development: {
				files: {
					'app/style.css': 'app/less/bootstrap.less'
				}
			}
		},
		watch: {
			styles: {
				files: ['app/less/**/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['app/*.html'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask( 'default', ['less', 'watch']);
};