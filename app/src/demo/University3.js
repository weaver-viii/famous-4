define(function(require, exports, module) {
  'use strict';

  // missing from Events: Filtering and EventArbiter.setMode

  var ImageSurface    = require('famous/surfaces/ImageSurface'),
      Engine          = require('famous/core/Engine'),
      Modifier        = require('famous/core/Modifier'),
      Transform       = require('famous/core/Transform'),
      Transitionable  = require('famous/transitions/Transitionable'),
      SnapTransition  = require('famous/transitions/SnapTransition'),
      EventHandler    = require('famous/core/EventHandler');

  Transitionable.registerMethod('snap', SnapTransition);

  function _limiter(tg, limit, increment) {
    var newTarget = tg + increment;
    if (newTarget > limit) return newTarget - limit;
    if (newTarget < 0) return 0;
    return newTarget;
  }

  function _createLogo(emitter) {
    var target    = 0,
    limit         = 1,
    step          = 0.2,
    done          = true,
    logo = new ImageSurface({
      content: 'content/images/famous_logo.png'
    }),
    identity = new Modifier({
      transform: Transform.identity,
      opacity : 0.5,
      origin  : [0.35, 0.5],
      size    : [100, 100]
    });

    Engine.on('resize', function() {
      
      if (done === true) {
        this.eventOut.emit('movement', this.message);
        target = _limiter(target, limit, step);
        identity.setOrigin([ target / limit, target / limit ], {
          method:       'snap',
          dampingRatio: 0.8,
          period:       300
        }, function() {
          done = true;
        });
        done = false;
      }      

    }.bind(this));

    this.context.add(identity).add(logo);
    return identity;
  }

  function University3(context) {
    this.context = context;
    this.logoIdentity = _createLogo.call(this);
    this.eventIn  = new EventHandler();
    this.eventOut = new EventHandler();
    this.message = { identity: this.logoIdentity, msg: 1 };
    EventHandler.setInputHandler(this, this.eventIn);
    EventHandler.setOutputHandler(this, this.eventOut);
    this.eventIn.subscribe(this.eventOut);
    this.on('movement', function(data) {
      data.identity.setOpacity(data.msg, {
        method: 'snap',
        dampingRatio: 0.4,
        period: 300
      });
    });
  }

  module.exports = University3;
});
