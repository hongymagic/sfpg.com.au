'use strict';

module.exports = function (grunt) {

// Project configuration

	grunt.initConfig({
		pkg: '<json:package.json>',

		less: {
			development: {
				options: {
					paths: ['public/css/less']
				},
				files: {
					'public/css/styles.css': 'public/css/less/*.less',
				}
			},

			productions: {
				options: {
					paths: ['public/css/less']
				},
				files: {
					'public/css/styles.css': 'public/css/less/*.less',
				}
			}
		},

		coffee: {
			compile: {
				files: {
					'public/js/internal.js': ['public/js/coffee/*.coffee']
				}
			}
		},

		concat: {
			dist: {
				src: [
				],
				dest: 'public/js/app.js'
			}
		},

		watch: {
			files: [
				'public/css/less/*.less',
				['public/js/coffee/*.coffee']
			],
			tasks: 'less coffee concat'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-coffee');

// Default task to run

	grunt.registerTask('default', 'less coffee concat');

};