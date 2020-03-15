import { storiesOf } from '@storybook/react'
import Cart from '.'

const stories = storiesOf('Cart', module)

stories.add('basic', () => {
  return <Cart />
})
