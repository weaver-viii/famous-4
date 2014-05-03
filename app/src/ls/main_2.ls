Engine        = require 'famous/core/Engine'
ImageSurface  = require 'famous/surfaces/ImageSurface'
StateModifier = require 'famous/modifiers/StateModifier'
Surface       = require 'famous/core/Surface'
Transform     = require 'famous/core/Transform'
Easing        = require 'famous/transitions/Easing'
View          = require 'famous/core/View'
Scrollview    = require 'famous/views/Scrollview'

out = -> console.log it

class Demo
  (name) ->
    @name = name
    @context = {
      2d: Engine.createContext()
      3d: Engine.createContext()
    }

demo = new Demo 'Famous demo'
