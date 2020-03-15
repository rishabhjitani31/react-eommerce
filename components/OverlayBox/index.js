import React, { Component } from 'react'

import { StyledShopLook } from './styles'

class ShopLook extends Component {
  render () {
    const { imageSrc, title, width, height } = this.props
    return (
      <StyledShopLook width={width} height={height}>
        <img src={imageSrc} alt='shop-look' />
        <div className='overlay'>
          <h4>{title}</h4>
        </div>
      </StyledShopLook>
    )
  }
}

export default ShopLook
