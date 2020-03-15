import { storiesOf } from '@storybook/react'
import Spinner from '.'

const stories = storiesOf('Spinner', module)

stories.add('basic', () => <Spinner />)

stories.add('fullScreen', () => <Spinner variant='fullScreen' />)

stories.add('block', () => <Spinner variant='block' />)

stories.add('fill', () => <Spinner variant='fill' />)
