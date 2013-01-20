'use strict';

module.exports = function (grunt) {

// Project configuration

	grunt.initConfig({
		pkg: '<json:package.json>',

// Configure LESS => CSS

		less: {
			development: {
				options: {
					paths: ['public/css/less']
				},
				files: {
					'public/css/styles.css': 'public/css/less/*.less'
				}
			},

			productions: {
				options: {
					paths: ['public/css/less']
				},
				files: {
					'public/css/styles.css': 'public/css/less/*.less'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', 'less');

};