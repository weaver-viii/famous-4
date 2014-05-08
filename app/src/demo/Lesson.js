define(function(require, exports, module) {
  'use strict';

  var Surface         = require('famous/core/Surface'),
      Timer           = require('famous/utilities/Timer'),
<<<<<<< HEAD
      jade            = require('jade');
=======
      Jade            = require('jade');
>>>>>>> tmp

  function _setTimer() {
    Timer.setTimeout(function() {
      _setTimer.call(this);
    }.bind(this), 2000);
  }

  function Lesson(context) {

<<<<<<< HEAD
    var lessonContent = jade.renderFile('template/lesson.jade', {}),
        layoutExample = new Surface({
=======
    var lessonContent = 'HAML';
    //jade.renderFile('template/lesson.jade', {}),
    var layoutExample = new Surface({
>>>>>>> tmp
          size: [undefined, undefined],
          origin: [0,0],
          content: lessonContent
        });

    context.add(layoutExample);

    _setTimer.call(this);
  }

  module.exports = Lesson;
});
