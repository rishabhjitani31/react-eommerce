import { storiesOf } from '@storybook/react'
import Overlay from '.'

const stories = storiesOf('Overlay', module)

stories.add('Overlay Basic', () => {
  return <Overlay />
})
