import React from 'react'

import { StyledPrice } from './styles'

const Price = ({ amount, strike = false }) => {
  return (
    <StyledPrice strike={strike} className='price'>{`$${amount}`}</StyledPrice>
  )
}

export default Price
