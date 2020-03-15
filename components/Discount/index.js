import React from 'react'
import { StyledDiscount } from './styles'

const Discount = ({ percent }) => {
  return <StyledDiscount>{`${percent}% off`}</StyledDiscount>
}

export default Discount
