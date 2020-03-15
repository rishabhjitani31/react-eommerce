import React from 'react'
import { storiesOf } from '@storybook/react'
import StateShowcase from './index'

storiesOf('_Helpers', module).add('StateShowcase', () => (
  <>
    <StateShowcase hint={'Custom title'}>
      <button>Hello button</button>
    </StateShowcase>
    <StateShowcase hint={'Narrow example'} narrow>
      <button>Hello button</button>
    </StateShowcase>
    <StateShowcase hint={'Dark example'} dark>
      <button>Hello button</button>
    </StateShowcase>
    <StateShowcase hint={'Dark/Narrow example'} dark narrow>
      <button>Hello button</button>
    </StateShowcase>
    <StateShowcase hint={'Dark/Narrow no grid'} dark narrow grid={false}>
      <button>Hello button</button>
    </StateShowcase>
    <StateShowcase hint={'No grid'} grid={false}>
      <button>Hello button</button>
    </StateShowcase>
  </>
))
