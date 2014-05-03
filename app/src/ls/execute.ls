# Execute _____________________________________________________

init = (demo) ->
  style = new Style 'UI'

  i1 = new Surface {
    content:    'LEFT'
    properties: style.panel
  }

  i2 = new Surface {
    content:    'RIGHT'
    properties: style.panel
  }

  i1-size = new StateModifier {
    size: [true, true]
  }

  i1-origin = new StateModifier {
    origin: [0.1, 0.1]
  }

  i2-origin = new StateModifier {
    origin: [1, 0.1]
  }

  ui = demo.context.2d

  ui.add(i1-origin).add(i1-size).add(i1)


init demo

