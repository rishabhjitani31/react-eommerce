import { storiesOf } from '@storybook/react'
import InfoCard from '.'

const stories = storiesOf('InfoCard', module)

stories.add('Saved Address Card', () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <InfoCard addNew addNewTitle='Address' />
      <InfoCard
        title='Minerva Parks'
        description='10400 NE 4th St. Bellevue WA 98004 Phone number: +1 503 9364276'
      />
      <InfoCard
        title='Nelle Ferguson'
        description='0250 Wisoky Forest,Christopher Mews Phone number: +1 503 6755434'
      />
    </div>
  )
})

stories.add('Saved Payment Card', () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <InfoCard addNew addNewTitle='Card' />
      <InfoCard title='Minerva Parks' description='Rupay ending in 4028' />
      <InfoCard title='Nelle Ferguson' description='Axi Bank ending in 9474' />
      <InfoCard
        title='Jeffery Parks'
        description='Amazon Pay ICICI Bank Credit Card ending in 0039'
      />
    </div>
  )
})
