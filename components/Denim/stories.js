import { storiesOf } from '@storybook/react'
import Category from '~/static/images/image-category.jpg'
import Denim from '.'

const stories = storiesOf('Denim', module)

stories.add('Basic Page', () => (
  <Denim
    imgSrc={Category}
    title='Flex Light Wash Whiskered Skinny Jeans'
    price='$34.99'
    description='BUY 1 GET 1 50% OFF'
    size='size: 28, 30, 32, 36'
    variants={['#87152c', '#848715', '#d5dc41']}
  />
))
