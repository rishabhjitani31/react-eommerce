import Types from 'lib/xpm'

export default Types.Component({
  id: 'Image',
  name: 'Image',
  description: 'Image',
  attributes: {
    src: Types.String({
      name: 'url of an image'
    }),
    alt: Types.String({
      name: 'alternate text if image url is broken.'
    }),
    width: Types.Number({
      name: 'width of an image'
    }),
    height: Types.Number({
      name: 'height of an image'
    })
  }
})
