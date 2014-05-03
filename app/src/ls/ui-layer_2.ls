# UI Layer _____________________________________________________

inventory-item-options = (content, style) ->
  * size: [style.inventory.col-w, style.inventory.col-h]
    content:    content
    properties: style.inventory

create-interface = (ui, style) ->

  i1 = new Surface {
    content:    'LEFT'
    properties: style.panel
  }

  i2 = new Surface {
    content:    'RIGHT'
    properties: style.panel
  }

  size = new StateModifier {
    size: [true, true]
  }

  origin = new StateModifier {
    origin: [0, 0]
  }

  ui-panels = ui.add(origin).add(size)
  ui-panels.add(i1)
  ui.panels.add(i2)

  return ui
