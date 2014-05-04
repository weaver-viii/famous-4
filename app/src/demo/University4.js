define(function(require, exports, module) {
  'use strict';

  var ImageSurface    = require('famous/surfaces/ImageSurface'),
      Modifier        = require('famous/core/Modifier'),
      StateModifier   = require('famous/modifiers/StateModifier'),
      Transform       = require('famous/core/Transform'),
      Transitionable  = require('famous/transitions/Transitionable'),
      SnapTransition  = require('famous/transitions/SnapTransition'),
      Timer           = require('famous/utilities/Timer'),
      GridLayout      = require('famous/views/GridLayout');

  Transitionable.registerMethod('snap', SnapTransition);

  function _animate() {
    this.setTransform(Transform.translate(200, 90, 50), {
      method: 'snap',
      dampingRatio: 0.5,
      period: 1000
    });
  }

  function _resetAnimation() {
    this.setTransform(Transform.translate(200, 0, 0), {
      method: 'snap',
      dampingRatio: 0.5,
      period: 1000
    });
  }

  function Lesson(context) {
    this.context = context;    

    var logo = new ImageSurface({
      content: 'content/images/famous_logo.png'
    }),

    logo2 = new ImageSurface({
      content: 'content/images/famous_logo.png'
    }),

    identity = new Modifier({
      transform: Transform.identity,
      opacity : 1,
      origin  : [0.5, 0.5],
      size    : [100, 100]
    }),

    mod2 = new StateModifier({ 
      transform: Transform.translate(200, 0, 0) 
    }),

    node = this.context.add(identity);
    node.add(logo);
    node.add(mod2).add(logo2);
    this.modifier = mod2;
    
    Timer.setTimeout(function(){
      _animate.call(this.modifier);
      _resetAnimation.call(this.modifier);      
    }.bind(this), 2000);
  }

  module.exports = Lesson;
});
