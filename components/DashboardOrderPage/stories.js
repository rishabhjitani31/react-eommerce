import { storiesOf } from '@storybook/react'
import DashboardOrder from './index'

const stories = storiesOf('Dashboard Order Page', module)

const productData = [
  {
    shippingDate: 'November 19, 2019',
    price: '$150',
    orderNumber: 'Order No. ABX85273',
    shipping: 'Gray Utility Cargo Pocket Twill Joggers',
    buyerName: 'M, GRAY',
    quantity: 'Qty: 1',
    trackInfo: 'Order delivered',
    trackStatus: 'Download Invoice'
  },
  {
    shippingDate: 'October 08, 2019',
    price: '$99.00',
    orderNumber: 'Order No. ABX85273 ',
    shipping: 'Flex Light Wash Whiskered Skinny Jeans',
    buyerName: 'M, Blue',
    quantity: 'Qty: 1',
    trackInfo: 'Order Shipped',
    trackStatus: 'Track order'
  }
]

stories.add('View', () => <DashboardOrder title='Orders' data={productData} />)
