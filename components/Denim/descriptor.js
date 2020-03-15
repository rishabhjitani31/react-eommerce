import Types from 'lib/xpm'

export default Types.Component({
  id: 'Denim',
  name: 'Denim',
  description: 'Denim Page',
  attributes: {
    imageSrc: Types.String({
      name: 'url of image'
    }),
    title: Types.String({
      name: 'denim title'
    }),
    price: Types.String({
      name: 'denim subtitle'
    }),
    description: Types.String({
      name: 'denim description'
    }),
    variants: Types.Array({
      name: 'denim variants'
    }),
    size: Types.String({
      name: 'denim size'
    })
  }
})
