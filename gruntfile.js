'use strict';

var watchFiles = [
	'gruntfile.js',
	'src/*.js'
];

module.exports = function(grunt) {

	/*****************************************
	LOADLIST
	*****************************************/
	require('load-grunt-tasks')(grunt);

	/*****************************************
	PROJECT CONFIGURATION
	*****************************************/
	grunt.initConfig({

		// code quality with jshint
		jshint: {
            all: {
                src: watchFiles,
                options: {
                    jshintrc: true
                }
            }
        },

		// client-side unit test
		karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }

	});

	/*****************************************
	TASKS
	*****************************************/

	// validate code and client-side script unit test
	grunt.registerTask('test', [
		'jshint',
		'karma'
	]);
};
