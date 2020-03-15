// NOTE: Descriptors cannot use "~/" require shortcut or require
// any outside files (except for other descriptors).
import Types from 'lib/xpm'

export default Types.Component({
  id: 'Banner',
  name: 'Banner',
  description: 'A banner for your page',
  attributes: {
    imageUrl: Types.String({
      name: 'Image URL',
      description: 'Link to image to show',
      required: true
    }),
    width: Types.Number({
      name: 'Width (px)'
    }),
    height: Types.Number({
      name: 'Height (px)'
    }),
    link: Types.String({
      name: 'Image Link'
    })
  }
})
