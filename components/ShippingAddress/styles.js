import styled from 'styled-components'

export const StyledShipping = styled.div`
  margin: 0px;
  padding: 16px;
  .form-row {
    padding: 0px 0px 8px 0px;
  }
  .form-button {
    text-align: center;
    padding: 12px 0px 0px 0px;
  }
  .shipping-address {
    ${props => props.theme.typography.subtitle2};
    width: 608px;
    height: 17px;
    padding: 0px 0px 44px 4px;
  }

  @media ${props => props.theme.breakpoints.mobileLarge} {
    overflow-x: hidden;
  }
`
