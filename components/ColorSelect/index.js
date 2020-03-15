import React, { useState } from 'react'
import { StyledColorSelect, ColorList } from './styles'

const ColorSelect = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].name)
  return (
    <StyledColorSelect className='color-select'>
      <span>{`Color: ${selectedColor}`}</span>
      <ul>
        {colors.map(color => (
          <ColorList
            key={color.name}
            color={color.name}
            className={`${selectedColor === color.name ? 'is-selected' : ''}`}
            onClick={() => setSelectedColor(color.name)}
          />
        ))}
      </ul>
    </StyledColorSelect>
  )
}

export default ColorSelect
