import Types from 'lib/xpm'

export default Types.Component({
  id: 'Address',
  name: 'Address',
  description: 'Add Edit Address Page',
  attributes: {
    arrowUrl: Types.String({
      name: 'url of image'
    }),
    title: Types.String({
      name: 'title'
    }),
    firstName: Types.String({
      name: 'first name'
    }),
    lastname: Types.String({
      name: 'last name'
    }),
    addressLine1: Types.String({
      name: 'address line 1'
    }),
    addressLine2: Types.String({
      name: 'address line 2'
    }),
    country: Types.String({
      name: 'country'
    }),
    city: Types.String({
      name: 'city'
    }),
    state: Types.String({
      name: 'state'
    }),
    zipCode: Types.String({
      name: 'zip code'
    }),
    contact: Types.String({
      name: 'contact'
    })
  }
})
