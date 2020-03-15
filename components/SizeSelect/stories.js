import { storiesOf } from '@storybook/react'
import SizeSelect from '.'

const stories = storiesOf('Size Select', module)

stories.add('basic', () => (
  <SizeSelect
    sizes={[
      {
        name: 'S'
      },
      {
        name: 'M'
      },
      {
        name: 'L'
      },
      {
        name: 'XL'
      },
      {
        name: 'XXL',
        isDisabled: true
      }
    ]}
  />
))
