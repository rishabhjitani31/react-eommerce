import { storiesOf } from '@storybook/react'
import BuyNow from './index'

const stories = storiesOf('Buy Now', module)

stories.add('Basic', () => {
  return <BuyNow />
})
