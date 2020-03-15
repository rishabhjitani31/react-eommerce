import { storiesOf } from '@storybook/react'
import CheckBox from './index'

const stories = storiesOf('CheckBox', module)

stories.add('View', () => <CheckBox label='Keep me signed in' />)
