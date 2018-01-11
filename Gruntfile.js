'use strict';

module.exports = grunt => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'index.html',
          'slides/{,*/}*.{md,html}',
          'js/*.js',
          'css/*.css',
          'resources/**'
        ]
      },
      index: {
        files: [
          'templates/_index.html', 'templates/_section.html', 'slides/list.json'
        ],
        tasks: ['buildIndex']
      }
    },
    connect: {
      livereload: {
        options: {
          port: 9000,
          base: '.',
          open: true,
          livereload: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['js/*.js']
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            src: [
              'slides/**',
              'bower_components/**',
              'js/**',
              'css/*.css',
              'resources/**'
            ],
            dest: 'dist/'
          }, {
            expand: true,
            src: ['index.html'],
            dest: 'dist/',
            filter: 'isFile'
          }
        ]
      }
    },
    buildcontrol: {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built from %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: '<%= pkg.repository.url %>',
          branch: 'gh-pages'
        }
      }
    },
    semistandard: {
      app: {
        src: '{,lib/}*.js'
      }
    }
  });
  require('load-grunt-tasks')(grunt);
  grunt.registerTask('buildIndex',
    'Build index.html from templates/_index.html and slides/list.json.',
    () => {
      const indexTemplate = grunt.file.read('templates/_index.html');
      const sectionTemplate = grunt.file.read('templates/_section.html');
      const slides = grunt.file.readJSON('slides/list.json');
      const html = grunt.template.process(indexTemplate, {
        data: {
          slides: slides,
          section: function (slide) {
            return grunt.template.process(sectionTemplate, {
              data: {
                slide: slide
              }
            });
          }
        }
      });
      return grunt.file.write('index.html', html);
    });

  grunt.registerTask('test', '*Lint* javascript and coffee files.', [
    'semistandard'
  ]);

  grunt.registerTask('serve',
    'Run presentation locally and start watch process (living document).',
    ['buildIndex', 'connect:livereload', 'watch']);

  grunt.registerTask('dist',
    'Save presentation files to *dist* directory.',
    ['test', 'buildIndex', 'copy']);

  grunt.registerTask('deploy',
    'Deploy to Github Pages',
    ['dist', 'buildcontrol']);

  return grunt.registerTask('default', ['test', 'serve']);
};
