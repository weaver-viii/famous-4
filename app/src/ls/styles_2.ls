# Default styles ______________________________________________

class Style
  (id) ->
    @id = id

  test: (a) -> @id + a

  # internal baseline styles START

  seed = {
    margin-default:    window.inner-width / 24
    vertical-division: window.inner-height / (8/10)
  }

  layout =
    * baseline:    seed.margin-default
      margin:      seed.margin-default
      padding:     seed.margin-default
      col-w:       seed.margin-default * 3
      col-h:       seed.vertical-division

  palette =
    * strawberry: '#FA5C4F'
      text-light: 'white'
      dark:       '#ddd'

  # exposed attributes START

  layout:
    * baseline: layout.baseline
      margin:   layout.margin
      padding:  layout.padding
      col-w:    layout.col-w
      col-h:    layout.col-h

  css:
    * baseline: '1rem'
      padding:  '1rem'
      margin:   '2rem'

  # UI panels

  panel:
    * margin:         String(layout.margin)+'px'
      padding:        String(layout.padding)+'px'
      border-radius:  String(layout.baseline)+'px'
      color:          palette.text-light
      background:     palette.strawberry
      col-w:          String(layout.col-w / 4)+'px'
      col-h:          String(layout.col-h / 2)+'px'