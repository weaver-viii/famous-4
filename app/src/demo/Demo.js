/* Famo.us Demo at Gadget Jam */
define(function(require, exports, module) {
  'use strict';

  var Engine        = require('famous/core/Engine'),
      Lesson = require('./Lesson');

  function _init() {
  }

  function _globalEvents() {
    Engine.on('click', function() {
    }.bind(this));
  }

  function Demo(context) {
    this.context = context;

    _globalEvents.call(this);

    var lesson = new Lesson(context);

    context.add(this);
    context.setPerspective(1000);

    _init();

    return layoutDesignExample;
  }

  module.exports = Demo;
});
