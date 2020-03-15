import Types from 'lib/'

export default Types.Component({
  id: 'DashboardOrderPage',
  name: 'Dashboard order page',
  description: 'Dashboard order page component',
  attributes: {
    title: Types.String({
      name: 'Card title'
    }),
    data: Types.Array({
      name: 'product details'
    })
  }
})
