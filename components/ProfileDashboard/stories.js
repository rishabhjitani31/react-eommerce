import { storiesOf } from '@storybook/react'
import ProfileDashboard from '.'

const stories = storiesOf('Profile Dashboard', module)

stories.add('Dashboard', () => {
  return <ProfileDashboard />
})
