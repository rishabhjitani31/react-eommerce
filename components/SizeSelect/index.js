import React, { useState } from 'react'
import { StyledSizeSelect } from './styles'

const SizeSelect = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState('')
  return (
    <StyledSizeSelect className='size-select'>
      <span>Size: select one</span>
      <ul>
        {sizes.map(size => {
          return (
            <li
              key={size.name}
              onClick={() => setSelectedSize(size.name)}
              className={`${
                size.isDisabled
                  ? 'is-disabled'
                  : selectedSize === size.name
                    ? 'is-selected'
                    : ''
              }`}
            >
              {size.name}
            </li>
          )
        })}
      </ul>
    </StyledSizeSelect>
  )
}

export default SizeSelect
