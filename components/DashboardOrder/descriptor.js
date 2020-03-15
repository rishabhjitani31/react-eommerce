import Types from 'lib/xpm'

export default Types.Component({
  id: 'DashboardOrder',
  name: 'Dashboard order',
  description: 'Dashboard order component',
  attributes: {
    shippingDate: Types.String({
      name: 'shipping date'
    }),
    price: Types.Array({
      name: 'price'
    }),
    orderNumber: Types.String({
      name: 'order number'
    }),
    shipping: Types.Array({
      name: 'shipping'
    }),
    buyerName: Types.String({
      name: 'buyer name'
    }),
    quantity: Types.Array({
      name: 'quantity'
    }),
    trackInfo: Types.String({
      name: 'track info'
    }),
    data: Types.Array({
      name: 'data'
    })
  }
})
