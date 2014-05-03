// Compiles SASS stylesheets into CSS

module.exports = {
  src: {
    files: {
      'app/src/app_livescript.js': [
        'app/src/ls/test.ls',
        'app/src/ls/main.ls',
        'app/src/ls/styles.ls',
        'app/src/ls/ui-layer.ls',
        'app/src/ls/execute.ls'
        ]
    }
  },
  options: {
    bare: true,
    flatten: true
  }
};
