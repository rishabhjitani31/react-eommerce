import { storiesOf } from '@storybook/react'
import PromoCode from '.'

const stories = storiesOf('PromoCode', module)

stories.add('basic', () => {
  return (
    <div style={{ width: '320px', display: 'flex', justifyContent: 'center' }}>
      <PromoCode />
    </div>
  )
})
