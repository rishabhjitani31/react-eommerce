import Types from 'lib/xpm'

export default Types.Component({
  id: 'SignIn',
  name: 'Sign In',
  description: 'Sign In Page',
  attributes: {
    imageSrc: Types.String({
      name: 'url of an image'
    }),
    title: Types.String({
      name: 'overlay title'
    }),
    width: Types.Number({
      name: 'width of an image'
    }),
    height: Types.Number({
      name: 'height of an image'
    })
  }
})
