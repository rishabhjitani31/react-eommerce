import Types from 'lib/xpm'

export default Types.Component({
  id: 'Price',
  name: 'Price',
  description: 'Price',
  attributes: {
    amount: Types.String({
      name: 'amount of item'
    }),
    strike: Types.Boolean({
      name: 'strike out the price.'
    })
  }
})
