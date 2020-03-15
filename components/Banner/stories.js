import { storiesOf } from '@storybook/react'
import landingBanner from '~/static/images/landing-banner.png'
import landingBannerMobile from '~/static/images/landing-banner-mobile.png'
import Banner from './'

storiesOf('Banner', module).add('Basic', () => (
  <Banner imageUrl={landingBanner} imageUrlMobile={landingBannerMobile} />
))
// storiesOf('Banner', module).add('WithVideo', () => (
//   <Banner width={938} videoSrc='mYFaghHyMKc' withVideo autoplay={'1'} />
// ))
