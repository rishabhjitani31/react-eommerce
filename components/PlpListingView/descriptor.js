import Types from 'lib/xpm'

export default Types.Component({
  id: 'PlpListingView',
  name: 'PlpListingView',
  description: 'PlpListingView Page',
  attributes: {
    data: Types.Array({
      name: 'data inside denim list'
    }),
    list: Types.Array({
      name: 'data of sorted itmes'
    })
  }
})
