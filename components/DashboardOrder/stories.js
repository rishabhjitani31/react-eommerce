import { storiesOf } from '@storybook/react'
import DashboardOrder from './index'

const stories = storiesOf('Dashboard Order', module)

stories.add('View', () => (
  <DashboardOrder
    data={{
      shippingDate: 'November 19, 2019',
      price: '$150',
      orderNumber: 'Order No. ABX85273',
      shipping: 'Gray Utility Cargo Pocket Twill Joggers',
      buyerName: 'M, GRAY',
      quantity: 'Qty: 1',
      trackInfo: 'Order delivered',
      trackStatus: 'Download Invoice'
    }}
  />
))
