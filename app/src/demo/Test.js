define(function(require, exports, module) {
  'use strict';

  var View = require('famous/core/View');

  function privateMethod() {
  }

  function Test(a) {
    this.a = a;
    privateMethod.call(this);
  }

  function init() {
    // object creates an inheritance chain
    Test.prototype = Object.create(View.prototype);
    Test.prototype.constructor = Test;
    Test.DEFAULT_OPTIONS = {};
  }

  init();

  module.exports = Test;
});
