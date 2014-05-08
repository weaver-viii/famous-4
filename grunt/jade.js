// COMPILES JADE VIEWS AND TEMPLATE PARTIALS INTO HTML

module.exports = {
  release: {
    options: {
      data: {
        debug: false
      }
    },
    files: {
      '.tmp/index.html'               : 'app/index.jade',
      'app/index.html'               : 'app/index.jade',
      'app/template/test.html'       : 'app/template/test.jade',
      'app/template/lesson.html'     : 'app/template/lesson.jade',
      'dist/index.html'              : 'app/index.jade',
      'dist/template/test.html'      : 'app/template/test.jade',
      'dist/template/lesson.html'    : 'app/template/lesson.jade'
    }
  }
}
