import Types from 'lib/xpm'

export default Types.Component({
  id: 'Denim',
  name: 'Denim',
  description: 'Denim Page',
  attributes: {
    flagUrl: Types.String({
      name: 'url of image'
    }),
    arrowUrl: Types.String({
      name: 'url of image'
    })
  }
})
