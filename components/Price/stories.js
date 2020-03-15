import { storiesOf } from '@storybook/react'
import Price from '.'

const stories = storiesOf('Price', module)

stories.add('Basic Price', () => <Price amount='17.99' />)

stories.add('Striked Price', () => <Price amount='29.99' strike />)
