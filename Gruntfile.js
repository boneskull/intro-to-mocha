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
          'js/**',
          'css/**',
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
          useAvailablePort: true,
          base: '.',
          open: true,
          livereload: true,
          port: 9111
        }
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
          section: slide => grunt.template.process(sectionTemplate, {
            data: {
              slide: slide
            }
          })
        }
      });
      return grunt.file.write('index.html', html);
    });

  grunt.registerTask('serve',
    'Run presentation locally and start watch process (living document).', [
      'buildIndex', 'connect', 'watch'
    ]);

  return grunt.registerTask('default', ['serve']);
};
