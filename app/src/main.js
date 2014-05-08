/*globals define*/
define(function(require, exports, module, util) {
    'use strict';

    var Engine  = require('famous/core/Engine');
    var Demo    = require('./demo/Demo');

    var context = Engine.createContext();
    var demo    = new Demo(context);

    // LiveScript in app/src/livescript : TRIED AND FAILED
    // requirejs(['app_livescript']);
    return demo;
});
