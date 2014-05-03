// Compiles SASS stylesheets into CSS

module.exports = {
  dist: {
    options: {
      lineNumbers: true,
      style: 'expanded',
      banner: '/* compiled SASS */'
    },
    files: {
      'app/styles/app.css': ['app/styles/**/*.sass']
    }
  }
};
