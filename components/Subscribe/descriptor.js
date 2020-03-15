import Types from 'lib/xpm'

export default Types.Component({
  id: 'Subscribe',
  name: 'Subscribe Email',
  description: 'Email Subscription Panel',
  attributes: {
    title: Types.String({
      name: 'show a title on the panel'
    }),
    showIcon: Types.Boolean({
      name: 'whether to show the icon or not'
    }),
    metaTitle: Types.String({
      name: 'show meta title on the panel'
    })
  }
})
