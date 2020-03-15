import { storiesOf } from '@storybook/react'

import groupIcon from '~/static/images/group-copy.png'
import CatalogCard from './index'

const stories = storiesOf('CatalogCard', module)

stories.add('basic', () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <CatalogCard
      image={groupIcon}
      title='fresh picks'
      description='Buy one, get one 50% off graphic tees'
      floatingCardColor='black'
      buttonLinks={[
        { name: 'Shop Girls', onClick: () => {} },
        { name: 'Shop Boys', onClick: () => {} },
        { name: 'Shop Plus', onClick: () => {} }
      ]}
    />
  </div>
))
