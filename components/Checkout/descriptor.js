import Types from 'lib/xpm'

export default Types.Component({
  id: 'CheckOut',
  name: 'checkout',
  description: 'checkout',
  attributes: {
    cardItems: Types.Array({
      name: 'array of products'
    }),
    summaryTitle: Types.String({
      name: 'summary title'
    }),
    price: Types.String({
      name: 'price value'
    }),
    shippingData: Types.Array({
      name: 'shipping info'
    })
  }
})
