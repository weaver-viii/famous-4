// COMPILES JADE VIEWS AND TEMPLATE PARTIALS INTO HTML

module.exports = {
  release: {
    options: {
      data: {
        debug: false
      }
    },
    files: {
      'app/index.html'              : 'app/index.jade',
      'app/template/test.html'      : 'app/template/test.jade',
      'app/template/lesson.html'    : 'app/template/lesson.jade',
    }
  }
}
