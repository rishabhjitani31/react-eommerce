import Types from 'lib/xpm'

export default Types.Component({
  id: 'SignIn',
  name: 'Sign In',
  description: 'Sign In Page',
  attributes: {
    type: Types.String({
      name: 'type of input'
    }),
    placeholder: Types.String({
      name: 'placeholder of input'
    }),
    icon: Types.Component({
      name: 'icon component'
    }),
    error: Types.Boolean({
      name: 'error value'
    })
  }
})
