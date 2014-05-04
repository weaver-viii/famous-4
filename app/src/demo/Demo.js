/* Famo.us Demo at Gadget Jam */
define(function(require, exports, module) {
  'use strict';

  var Engine        = require('famous/core/Engine'),
      University1   = require('./University1'),
      University2   = require('./University2'),
      University3   = require('./University3'),
      University4   = require('./University4');

  function _init() {
  }

  function _globalEvents() {
    Engine.on('click', function() {
    }.bind(this));
  }

  function Demo(context) {
    this.context = context;

    _globalEvents.call(this);

    var animation   = new University1(context);
    var physics     = new University2(context);
    var events      = new University3(context);
    var layout      = new University4(context);

    context.add(this);
    context.setPerspective(1000);

    _init();
  }

  module.exports = Demo;
});
