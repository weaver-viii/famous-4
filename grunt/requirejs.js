module.exports =  {
  compile: {
    options: {
      optimize: 'uglify2',
      uglify2: {
        mangler: {
          toplevel: true
        }
      },
      baseUrl: '<%= config.app %>/src',
      mainConfigFile: '<%= config.app %>/src/requireConfig.js',
      name: 'almond',
      include: ['main', 'demo/demo'],
      insertRequire: ['main', 'demo/demo'],
      out: '<%= config.dist %>/src/main.js',
      wrap: true
    }
  }
};
