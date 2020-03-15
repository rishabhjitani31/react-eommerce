import { storiesOf } from '@storybook/react'

import groupIcon from '~/static/images/group-copy-4.png'
import BannerCatalogCard from './index'

const stories = storiesOf('BannerCatalogCard', module)

stories.add('basic', () => (
  <BannerCatalogCard
    image={groupIcon}
    title='Barbie x Rue21'
    description='get dolled up with our newest girl power collection'
    floatingCardColor='white'
    startingPrice='STYLE FROM $12.99'
    buttonLinks={[
      { name: 'Shop Girls', onClick: () => {} },
      { name: 'Shop Plus', onClick: () => {} }
    ]}
    reverse
  />
))
