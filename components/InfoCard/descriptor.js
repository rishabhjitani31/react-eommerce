import Types from 'lib/xpm'

export default Types.Component({
  id: 'infoCard',
  name: 'InfoCard',
  description: 'Account Info Card',
  attributes: {
    addNew: Types.Boolean({
      name: 'Add New'
    }),
    addNewTitle: Types.String({
      name: 'add new title'
    }),
    title: Types.String({
      name: 'Title'
    }),
    description: Types.String({
      name: 'Description'
    })
  }
})
