import styled from 'styled-components'

export const StyledShipping = styled.div`
  padding: 16px;
  .horizontal-align {
    display: flex;
    .form-row-alignment {
      width: 100%;
      padding: 0px 3px 8px 2px;
    }
    @media ${props => props.theme.breakpoints.mobileLarge} {
      display: block;
    }
  }
  .horizontal-align-city {
    display: flex;
    .form-row-alignment {
      width: 100%;
      padding: 0px 2px 8px 2px;
    }
  }
  .form-row {
    padding: 0px 0px 8px 2px;
  }
  .form-button {
    text-align: center;
    padding: 12px 0px 0px 0px;
  }
  .button {
    width: 280px;
  }
  .shipping-address {
    ${props => props.theme.typography.subtitle2};
    height: 24px;
    padding: 0px 0px 44px 4px;
  }
  @media ${props => props.theme.breakpoints.mobileLarge} {
    overflow-x: hidden;
  }
`
