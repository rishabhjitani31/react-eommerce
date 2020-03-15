import { storiesOf } from '@storybook/react'
import ColorSelect from '.'

const stories = storiesOf('Color Select', module)

stories.add('basic', () => (
  <ColorSelect
    colors={[
      {
        name: 'red'
      },
      {
        name: 'blue'
      },
      {
        name: 'yellow'
      },
      {
        name: 'green'
      }
    ]}
  />
))
