module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dev: {
        files: {
          'public/app.js': ['public/js/index.jsx']
        },
        options: {
          debug: true,
          transform: ['reactify'],
          aliasMappings: [
            {
              expand: true,
              cwd: 'public/js',
              src: ['**/*.js', '**/*.jsx'],
              dest: 'root'
            }
          ]
        }
      }
    },
    watch: {
      dev: {
        files: ['public/*.html', 'public/css/**/*.css', 'public/js/**/*.jsx', 'public/js/**/*.js' ],
        tasks: [ 'browserify:dev', 'notify:dev']
      }
    },

    connect: {
      dev: {
        options: {
          port: 9000,
          livereload: false,
          base: './public'
        }
      }
    },
    notify: {
      dev: {
        options: {
          message: 'Browserify completed'
        }
      }
    },
    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5,
        title: '<% pkg.name>'
      }
    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-notify');

  var target = grunt.option('target') || 'dev';

  grunt.registerTask('debug', ['deploy', 'connect', 'watch']);
  grunt.registerTask('deploy', ['browserify:dev']);
  grunt.registerTask('default', ['debug']);

  grunt.task.run('notify_hooks');
};
