import Types from 'lib/xpm'

export default Types.Component({
  id: 'AccountOptionCard',
  name: 'AccountOptionCard',
  description: 'Account Option Card',
  attributes: {
    icon: Types.Element({
      name: 'icon'
    }),
    optionTitle: Types.String({
      name: 'Title'
    }),
    optionDescription: Types.String({
      name: 'Description'
    })
  }
})
