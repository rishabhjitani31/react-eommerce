import React from 'react'
import { StyledAccountCard } from './styles'

const AccountOptionCard = ({ icon, optionTitle, optionDescription }) => {
  return (
    <StyledAccountCard>
      <div className='icon-section'>{icon}</div>
      <div className='option-section'>
        <h4>{optionTitle}</h4>
        <p>{optionDescription}</p>
      </div>
    </StyledAccountCard>
  )
}

export default AccountOptionCard
