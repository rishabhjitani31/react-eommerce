import { storiesOf } from '@storybook/react'
import OverlayBox from './index'
import groupIcon from '~/static/images/group-copy.png'
import groupTwoIcon from '~/static/images/group-copy-2.png'

const stories = storiesOf('OverlayBox', module)

stories.add('basic', () => (
  <OverlayBox
    title='Shop this look'
    imageSrc={groupIcon}
    width={180}
    height={180}
  />
))

stories.add('with increased width', () => (
  <OverlayBox title='Girl' imageSrc={groupTwoIcon} width={320} height={320} />
))
