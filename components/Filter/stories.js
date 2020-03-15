import { storiesOf } from '@storybook/react'
import Filter from '.'

const stories = storiesOf('Filter', module)

stories.add('View', () => (
  <Filter
    heading='Filters (2)'
    subHeading='Reset'
    filter1='Shop by category'
    filter2='Related'
    filter3='Color'
    filter4='Size'
    filter5='Price'
    filter6='Deals'
    startPrice='$25'
    endPrice='$125'
  />
))
