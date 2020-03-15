// NOTE: Descriptors cannot use "~/" require shortcut or require
// any outside files (except for other descriptors).
import Types from 'lib/xpm'

export default Types.Component({
  id: 'Slider',
  name: 'Slider',
  description: 'A slider for you to customize',
  attributes: {
    hasArrows: Types.Boolean({
      name: 'Show Arrows',
      description: 'Whether to show navigation arrows.',
      default: true
    }),

    pageSize: Types.Number({
      name: 'Number of items before paginating'
    }),

    sliderHeight: Types.Number({
      name: 'Custom Slider Height',
      default: 300
    }),

    children: Types.Array({
      name: 'Children',
      children: Types.Component()
    })
  }
})
