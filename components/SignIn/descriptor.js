import Types from 'lib/xpm'

export default Types.Component({
  id: 'SignIn',
  name: 'Sign In',
  description: 'Sign In Page',
  attributes: {
    signInText: Types.String({
      name: 'sign in text'
    }),
    forgotPasswordText: Types.String({
      name: 'forgot password text'
    }),
    createAccountText: Types.String({
      name: 'create account text'
    })
  }
})
