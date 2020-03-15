import styled from 'styled-components'

export const StyledImage = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  object-fit: cover;
`
