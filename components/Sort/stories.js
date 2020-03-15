import { storiesOf } from '@storybook/react'
import Sort from './index'

const list = [
  {
    name: 'Popularity',
    key: 1,
    active: false
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

const activeList = [
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

const stories = storiesOf('Sort', module)

stories.add('Simple View', () => <Sort data={list} />)
stories.add('Active View', () => <Sort data={activeList} />)
