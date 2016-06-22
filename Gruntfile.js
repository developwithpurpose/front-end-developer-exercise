module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		sass: {
      options: {
	      sourceMap: true
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{'app/assets/stylesheets/css/app.min.css': 'app/assets/stylesheets/scss/app.scss'}]
      }
    },
    concat: {
	    options: {
		    separator: ';\n',
		    stripBanners: true
	    },
	    dist: {
		    src: ['app/assets/javascripts/src/tabSlider.jquery.js', 'app/assets/javascripts/src/init.jquery.js'],
		    dest: 'app/assets/javascripts/dist/app.jquery.min.js'
	    }
    },
    uglify: {
      options: {
	      sourceMap: true
      },
      app: {
        files: [{'app/assets/javascripts/dist/app.jquery.min.js': 'app/assets/javascripts/dist/app.jquery.min.js'}]
      }
    },
    jshint: {
	    all: ['Gruntfile.js', 'app/assets/javascripts/src/*.js']
    },
    watch: {
      grunt: {
	      files: ['Gruntfile.js']
	    },
	    html: {
		    files: ['app/**/*.html']
	    },
      js: {
	      files: ['app/assets/javascripts/src/**/*.js'],
	      tasks: ['jshint', 'concat', 'uglify:app']
      },
      sass: {
        files: 'app/assets/stylesheets/scss/**/*.scss',
        tasks: ['sass']
      },
      options: {
	      livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', ['sass', 'concat', 'uglify', 'jshint']);
  grunt.registerTask('default', ['watch']);
};
