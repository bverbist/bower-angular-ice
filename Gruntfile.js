'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: 'conf/.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'angular-ice.js'
                ]
            }
        },

        release: {
            options: {
                file: 'bower.json',
                npm: false,
                npmtag: false,
                github: {
                    repo: 'bverbist/bower-angular-ice',
                    usernameVar: 'GITHUB_USERNAME', //ENVIRONMENT VARIABLE that contains Github username
                    passwordVar: 'GITHUB_PASSWORD' //ENVIRONMENT VARIABLE that contains Github password
                }
            }
        }

    });

    grunt.registerTask('default', [
        'jshint'
    ]);

    grunt.registerTask('test', [
        'default'
    ]);

    grunt.registerTask('release', function(majorMinorPatch) {
        grunt.task.run([
            'jshint',
            'release:' + majorMinorPatch
        ]);
    });
};