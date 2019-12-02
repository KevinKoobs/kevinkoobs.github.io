module.exports = function(grunt) {
	const sass = require('node-sass');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Tasks
		sass: {
			// Begin Sass Plugin
			style: {
				files: [
					{
						expand: true,
						cwd: "resources/assets/scss",
						src: ["**/*.scss"],
						dest: "css",
						ext: '.min.css'
					},
				],
				options: {
					cleancss: true,
					includePaths: ['node_modules'],
					outputStyle: 'compressed',
					//sourceComments: 'map',
					sourceMap: true,
					implementation: sass
				}
			}
		},
		watch: {
			options: {
				livereload: 1337
			},

			sass: {
				files: [
					'resources/assets/scss/**/*.{scss,sass}',
				],
				tasks: ['sass']
			},
		}

	});
	// Load Grunt plugins
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register Grunt tasks
	grunt.registerTask('default', [
		'sass',
		'watch'
	])
}
