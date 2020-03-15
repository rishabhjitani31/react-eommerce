import { storiesOf } from '@storybook/react'
import Subscribe from '.'

const stories = storiesOf('Subscribe', module)

stories.add('basic', () => (
  <Subscribe
    showIcon
    title='Email / Sign Up'
    metaTitle='Stay up to date on the best deals & latest trends!'
  />
))
