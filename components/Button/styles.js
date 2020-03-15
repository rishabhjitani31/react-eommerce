import styled from 'styled-components'

export const StyledButton = styled.button`
  ${props => props.theme.typography.button};
  text-transform: initial;
  border-radius: 4px;
  background-color: ${props =>
    props.color === 'secondary'
      ? props.theme.palette.common.white
      : props.theme.palette[props.color].main};
  color: ${props =>
    props.color === 'secondary'
      ? props.theme.palette.primary.main
      : props.theme.palette.common.white};
  padding: 5px 12px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 2px solid
    ${props =>
    props.color === 'transparent'
      ? props.theme.palette.common.white
      : props.theme.palette.primary.main};
  &:hover {
    border-color: ${props =>
    props.color === 'transparent' && props.theme.palette.primary.main};
    background: ${props =>
    props.color === 'secondary'
      ? props.theme.palette.primary.main
      : props.theme.palette.common.white};
    color: ${props =>
    props.color === 'secondary'
      ? props.theme.palette.common.white
      : props.theme.palette.primary.main};
  }
`
