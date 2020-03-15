import React from 'react'
import { StyledComment } from './styles'

const Comment = ({ title, commentator, date, description }) => {
  return (
    <StyledComment>
      <h6 className='comment-title'>{title}</h6>
      <span className='commentor-name'>{commentator}</span>
      <span className='comment-date'>{date}</span>
      <p className='comment-description'>{description}</p>
    </StyledComment>
  )
}

export default Comment
