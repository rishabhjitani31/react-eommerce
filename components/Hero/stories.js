import { storiesOf } from '@storybook/react'
import Hero from '.'

storiesOf('Hero New', module).add('Basic', () => (
  <Hero
    title='Be Your Own Bae'
    subTitle='30% off'
    informationText='Limited time only | Online exclusive'
    button1Text='Shop our V-Day Favs'
    button2Text='View Details'
  />
))
