/*globals define*/
define(function(require, exports, module, util) {
    'use strict';

    var Engine  = require('famous/core/Engine'),
        Demo    = require('./demo/Demo'),
        context = Engine.createContext(),
        demo    = new Demo(context);

    // LiveScript in app/src/livescript : TRIED AND FAILED
    // requirejs(['app_livescript']);
    return demo;
});
