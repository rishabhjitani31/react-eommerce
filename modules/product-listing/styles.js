import styled from 'styled-components'

export const StyledPLP = styled.div`
  padding: 0;
  .horizontal-view {
    display: flex;
    .filter {
      display: block;
      flex: 0 0 240px;
      max-width: 240px;
      border-right: 1px solid ${props => props.theme.palette.border.secondary};
      @media ${props => props.theme.breakpoints.mobileLarge} {
        display: none;
      }
    }
    .main-contant-rightside {
      flex: 1 1 auto;
      background: ${props => props.theme.palette.common.white};
    }
    .button {
      text-align: center;
    }
  }
`
