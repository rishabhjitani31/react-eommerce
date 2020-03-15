import styled from 'styled-components'

export const StyledPrice = styled.div`
  ${props => props.theme.typography.subtitle1};
  ${props =>
    props.strike &&
    `
      color: ${props.theme.palette.secondary.dark};
      text-decoration: line-through;
    `}
`
