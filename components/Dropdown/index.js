import React from 'react'
import { StyledSelect } from './styles'

const Dropdown = ({ options }) => {
  return (
    <StyledSelect>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Dropdown
