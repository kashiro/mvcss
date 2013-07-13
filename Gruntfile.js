module.exports = function(grunt) {

  "use strict";

  // Project configuration.
  grunt.initConfig({

    // compass
    'compass': {
      dev: {
        options: {
          config: 'config.rb'
        }
      }
    },

    // styleguide
    'styleguide':{
      styledocco: {
        options: {
          framework: {
            name:'styledocco'
          },
          name: 'Style Guide',
          template: {
            include: ['plugin.css', 'app.js', '../css/application.css']
          }
        },
        files: {
          'docs': './modules/**/*.sass'
        }
      }
    }

  });

  // load Tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-styleguide');

  grunt.registerTask('default', ['compass', 'styleguide']);
};
