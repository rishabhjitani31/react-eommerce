import { storiesOf } from '@storybook/react'
import BreadCrumb from './index'

const stories = storiesOf('BreadCrumb', module)

export const list = [
  {
    name: 'Home',
    key: 1
  },
  {
    name: 'Guys',
    key: 2
  },
  {
    name: 'Bottoms',
    key: 3
  },
  {
    name: 'Guys Jeans',
    key: 4
  }
]

stories.add('View', () => <BreadCrumb>{list}</BreadCrumb>)
