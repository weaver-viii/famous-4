define(function(require, exports, module) {
  'use strict';

  var ImageSurface    = require('famous/surfaces/ImageSurface'),
      Modifier        = require('famous/core/Modifier'),
      StateModifier   = require('famous/modifiers/StateModifier'),
      Transform       = require('famous/core/Transform'),
      Transitionable  = require('famous/transitions/Transitionable'),
      SnapTransition  = require('famous/transitions/SnapTransition');

  Transitionable.registerMethod('snap', SnapTransition);

  function _setRotationTarget(tg, increment) {
    var newTarget = tg + increment;
    if (newTarget > Math.PI * 2) return newTarget - (Math.PI * 2);
    if (newTarget < 0) return 0;
    return newTarget;
  }

  function _createLogo() {
    var target  = 0,
    limit = (Math.PI * 2),
    logo = new ImageSurface({
      size:   [100, 100],
      content: 'content/images/famous_logo.png',
      properties: {
        background: 'none'
      }
    }),
    pos = new Modifier({
      origin: [0.2, 0.5]
    }),
    rotationZ = new StateModifier({
      transform: Transform.rotateZ(0)
    }),
    identity = new Modifier({
      transform: Transform.identity,
      opacity : 1,
      origin  : [0.2, 0.5],
      size    : [100, 100]
    });

    logo.on('click', function() {
      
      target = _setRotationTarget(target, Math.PI/4);
      
      rotationZ.setTransform(Transform.rotateZ(target), {
        method:       'snap',
        dampingRatio: 0.2,
        period:       250
      });

      identity.setOrigin([ target / limit, target / limit ], {
        method:       'snap',
        dampingRatio: 0.2,
        period:       500
      });

    });

    this.context.add(pos).add(rotationZ).add(identity).add(logo);
  }

  function University2(context) {
    this.context = context;
    _createLogo.call(this);
  }

  module.exports = University2;
});
