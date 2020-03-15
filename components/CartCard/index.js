import React from 'react'

import {
  StyledCartCardContainer,
  CartImageSection,
  CartInfoSection,
  CartButtonSection
} from './styles'

import GroupIcon from '~/static/images/group-copy-4.png'

const CartCard = ({ item }) => {
  return (
    <StyledCartCardContainer>
      <CartImageSection>
        <div className='image-info'>
          <img src={GroupIcon} alt='' />
          <span className='overline'>{`last ${item.itemsLeft} left`}</span>
        </div>
      </CartImageSection>
      <CartInfoSection>
        <p className='info-header'>{item.name}</p>
        <div className='item-info'>
          <span className='info-overline'>{`Size: ${item.size}`}</span>
          <span className='info-overline'>{`${item.numberOfItems} Item`}</span>
        </div>
        <div className='price-info'>
          <span className='price-span'>{`$${item.price.original}`}</span>
          <span className='price-span'>{`$${item.price.discountedPrice} (${item.price.discountPercentage}% off)`}</span>
        </div>
        <span className='delivery-info'>{`Delivery in ${
          item.delivery.numberOfDays
        } days. ${item.delivery.day} | ${
          item.delivery.isFree ? 'Free' : `$${item.delivery.shippingCost}`
        }`}</span>
        <CartButtonSection>
          <a href=''>Move to wishlist</a>
          <a href=''>Remove</a>
        </CartButtonSection>
      </CartInfoSection>
    </StyledCartCardContainer>
  )
}

export default CartCard
