// NOTE: Descriptors cannot use "~/" require shortcut or require
// any outside files (except for other descriptors).
import Types from 'lib/xpm'

export default Types.Component({
  id: 'Button',
  name: 'Button',
  internal: true,
  attributes: {
    variant: Types.Enum({
      name: 'Variant',
      children: ['block', 'inline', 'circle'],
      default: 'inline'
    }),

    size: Types.Enum({
      name: 'Size',
      children: ['small', 'medium', 'large'],
      default: 'medium'
    }),

    color: Types.Enum({
      name: 'Color',
      children: ['primary', 'secondary', 'text'],
      default: 'text'
    }),

    width: Types.Size({
      name: 'Width'
    }),

    minWidth: Types.Size({
      name: 'Min Width'
    }),

    margin: Types.Size({
      name: 'Margin'
    }),

    href: Types.String({
      name: 'Button URL'
    }),

    html: Types.RichText({
      name: 'Button Text',
      default: '<p>Hello Button</p>'
    })
  }
})
