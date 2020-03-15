import { storiesOf } from '@storybook/react'
import Comment from '.'

const stories = storiesOf('Comment', module)

stories.add('Basic', () => (
  <Comment
    title={'Great fit & Quality'}
    description='I was raised in Alaska and this is a bit of heaven to me. If it is cold, if the snow is blowing and the wind chill is low. There is no better coat, that I have found for sale in the lower 48 states. I am 6’0 and 195 lbs. I w…'
    date='25 Jan 2019'
    commentator='Justin | '
  />
))
