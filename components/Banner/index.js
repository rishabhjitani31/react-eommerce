import React from 'react'
import { toPropTypes } from 'lib/xpm/to-prop-types'
import descriptor from './descriptor'
import { StyledBanner, StyledVideoBanner } from './styles'

const Banner = props => {
  const {
    autoplay,
    imageUrl,
    imageUrlMobile,
    width = '100%',
    height = 250,
    link,
    withVideo = false,
    videoSrc
  } = props

  const style = {}
  if (width) style.width = width
  if (height) style.height = height
  let banner
  if (withVideo) {
    const video =
      'https://www.youtube.com/embed/' +
      videoSrc +
      '?autoplay=' +
      autoplay +
      '&rel=' +
      0 +
      '&modestbranding=' +
      1
    banner = (
      <StyledVideoBanner>
        <div className='container' style={style}>
          <iframe
            className='player'
            type='text/html'
            width='100%'
            height='100vh'
            src={video}
            frameborder='0'
          />
        </div>
      </StyledVideoBanner>
    )
  } else {
    banner = (
      <StyledBanner>
        <picture>
          <source media='(max-width: 767px)' srcset={imageUrlMobile} />
          <img src={imageUrl} alt='banner' />
        </picture>
      </StyledBanner>
    )
  }
  if (link) {
    banner = <a href={link}>{banner}</a>
  }

  return banner
}

Banner.propTypes = toPropTypes(descriptor)

export default Banner
