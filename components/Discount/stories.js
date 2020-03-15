import { storiesOf } from '@storybook/react'
import Discount from '.'

const stories = storiesOf('Discount', module)

stories.add('basic', () => <Discount percent={40} />)
