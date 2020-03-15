import styled from 'styled-components'

export const StyledModalContainer = styled.div`
  background-color: ${props => props.theme.palette.common.white};
  max-width: 800px;
  margin: 0 auto;
  height: auto;
  border: solid 1px #f0f0f0;
  padding: 24px;
  position: relative;
  z-index: 10;
`

export const StyledHeader = styled.div`
  ${props => props.theme.typography.subtitle1};
  padding-bottom: 16px;
`
