import Types from 'lib/xpm'

export default Types.Component({
  id: 'Sort',
  name: 'Sort',
  description: 'Sort Compoennt',
  attributes: {
    list: Types.Array({
      name: 'data of sorted itmes'
    })
  }
})
