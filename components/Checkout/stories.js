import { storiesOf } from '@storybook/react'
import Checkout from './index'

const stories = storiesOf('Checkout', module)
const cardItems = [
  {
    name: 'Pink Floral Lace Off Shoulder Minimal design',
    size: 'M',
    numberOfItems: 1,
    itemsLeft: 1,
    price: {
      original: 'XXX.00',
      discountedPrice: 'XXX.00',
      discountPercentage: 60
    },
    delivery: {
      numberOfDays: 5,
      isFree: true,
      day: 'Fri'
    }
  },
  {
    name: 'Pink Floral Lace Off Shoulder Minimal design',
    size: 'M',
    numberOfItems: 1,
    itemsLeft: 1,
    price: {
      original: 'XXX.00',
      discountedPrice: 'XXX.00',
      discountPercentage: 60
    },
    delivery: {
      numberOfDays: 5,
      isFree: true,
      day: 'Fri'
    }
  }
]

const shippingData = [
  {
    title: 'Ship to',
    name: 'John Doe',
    addressLine1: ' 10400 NE',
    addressLine2: '4th St. Bellevue',
    pinCode: 'WA 98004',
    mobile: '+1 503 544 4278',
    addInfo: 'Change Address'
  },
  {
    title: 'Ship to',
    name: 'John Doe',
    addressLine1: ' 10400 NE',
    addressLine2: '4th St. Bellevue',
    pinCode: 'WA 98004',
    mobile: '+1 503 544 4278',
    addInfo: 'Change Address'
  }
]

stories.add('Basic Page', () => (
  <Checkout
    cardItems={cardItems}
    summaryTitle='Order summary'
    price='$XXX.00'
    shippingData={shippingData}
  />
))
