import React from 'react'
import { StyledImage } from './styles'

const Image = ({ src, alt = 'altText', width = 180, height = 240 }) => {
  return <StyledImage src={src} alt={alt} width={width} height={height} />
}

export default Image
