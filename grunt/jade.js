// COMPILES JADE VIEWS AND TEMPLATE PARTIALS INTO HTML

module.exports = {
  release: {
    options: {
      data: {
        debug: false
      }
    },
    files: {
      'dist/template/test.html': 'app/template/test.jade'
    }
  }
}
