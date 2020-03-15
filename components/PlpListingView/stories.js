import { storiesOf } from '@storybook/react'
import Category from '~/static/images/image-category.jpg'
import PlpListingView from '.'

const stories = storiesOf('PlpListingView', module)

const data = [
  {
    imgSrc: Category,
    title: 'Flex Light Wash Whiskered Skinny Jeans',
    price: '$34.99',
    description: 'BUY 1 GET 1 50% OFF',
    size: 'size: 28, 30, 32, 36',
    variants: ['#87152c', '#848715', '#d5dc41']
  },
  {
    imgSrc: Category,
    title: 'Flex Light Wash Whiskered Skinny Jeans',
    price: '$34.99',
    description: 'BUY 1 GET 1 50% OFF',
    size: 'size: 28, 30, 32, 36',
    variants: ['#87152c', '#848715', '#d5dc41']
  },
  {
    imgSrc: Category,
    title: 'Flex Light Wash Whiskered Skinny Jeans',
    price: '$34.99',
    description: 'BUY 1 GET 1 50% OFF',
    size: 'size: 28, 30, 32, 36',
    variants: ['#87152c', '#848715', '#d5dc41']
  },
  {
    imgSrc: Category,
    title: 'Flex Light Wash Whiskered Skinny Jeans',
    price: '$34.99',
    description: 'BUY 1 GET 1 50% OFF',
    size: 'size: 28, 30, 32, 36',
    variants: ['#87152c', '#848715', '#d5dc41']
  },
  {
    imgSrc: Category,
    title: 'Flex Light Wash Whiskered Skinny Jeans',
    price: '$34.99',
    description: 'BUY 1 GET 1 50% OFF',
    size: 'size: 28, 30, 32, 36',
    variants: ['#87152c', '#848715', '#d5dc41']
  },
  {
    imgSrc: Category,
    title: 'Flex Light Wash Whiskered Skinny Jeans',
    price: '$34.99',
    description: 'BUY 1 GET 1 50% OFF',
    size: 'size: 28, 30, 32, 36',
    variants: ['#87152c', '#848715', '#d5dc41']
  }
]

const list = [
  {
    name: 'Popularity',
    key: 1,
    active: true
  },
  {
    name: 'Price: low to high',
    key: 2,
    active: false
  },
  {
    name: 'Price: high to low',
    key: 3,
    active: false
  },
  {
    name: 'Newest first',
    key: 4,
    active: false
  }
]

stories.add('Basic Page', () => <PlpListingView data={data} list={list} />)
