define(function(require, exports, module) {
  'use strict';

  //var View = require('famous/core/View');
  var ImageSurface    = require('famous/surfaces/ImageSurface'),
      Modifier        = require('famous/core/Modifier'),
      StateModifier   = require('famous/modifiers/StateModifier'),
      Transform       = require('famous/core/Transform'),
      Transitionable  = require('famous/transitions/Transitionable');

  require('famous/inputs/FastClick');

  function _createLogo() {
    var state = new Transitionable(0),
    animateZ = new StateModifier(),
    logo = new ImageSurface({
      size:   [100, 100],
      content: 'content/images/famous_logo.png'
    }),
    pos = new Modifier({
      origin: [0.1, 0.5]
    }),
    rot = new StateModifier({
      transform: Transform.rotateZ(Math.PI)
    });
    logo.on('click', function() {
      animateZ.setTransform(Transform.rotateZ(state.get() + Math.PI),
        { duration : 200, curve : 'easeInOut' });
      state.set(state.get() + Math.PI, { duration: 200, curve: 'easeInOut' }, function() {});
    });
    this.context.add(pos).add(rot).add(animateZ).add(logo);
  }

  function University1(context) {
    this.context = context;
    _createLogo.call(this);
  }

  module.exports = University1;
});
