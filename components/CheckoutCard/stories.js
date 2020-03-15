import { storiesOf } from '@storybook/react'
import CheckoutAddMethod from './index'

const stories = storiesOf('CheckoutAdd', module)

stories.add('Basic Page', () => (
  <CheckoutAddMethod
    data={{
      title: 'Ship To',
      name: 'John Doe',
      addressLine1: ' 10400 NE',
      addressLine2: '4th St. Bellevue',
      pinCode: 'WA 98004',
      mobile: '+1 503 544 4278',
      addInfo: 'Change Address'
    }}
  />
))
