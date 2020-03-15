import Types from 'lib/xpm'

export default Types.Component({
  id: 'CheckOutCard',
  name: 'checkoutCard',
  description: 'checkoutCard',
  attributes: {
    title: Types.String({
      name: 'Card title'
    }),
    name: Types.String({
      name: 'receivers name'
    }),
    addressLine1: Types.String({
      name: 'receivers address 1'
    }),
    addressLine2: Types.String({
      name: 'receivers address 2'
    }),
    pinCode: Types.String({
      name: 'receivers pin code'
    }),
    mobile: Types.String({
      name: 'receivers mobile number'
    }),
    addInfo: Types.String({
      name: 'additional info'
    })
  }
})
