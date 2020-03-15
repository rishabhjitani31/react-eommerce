import styled from 'styled-components'

export const CheckoutStyle = styled.div`
  display: flex;
  @media ${props => props.theme.breakpoints.mobileLarge} {
    flex-wrap: wrap;
  }
  .left-part {
    max-width: calc(100% - 336px);
    width: 100%;
    .checkout-method-block {
      margin-bottom: 8px;
    }
    @media ${props => props.theme.breakpoints.mobileLarge} {
      max-width: 100%;
      order: 1;
    }
    .mob-button-wrap {
      display: none;
      padding: 10px 16px;
      @media ${props => props.theme.breakpoints.mobileLarge} {
        display: block;
      }
    }
  }

  .summary-block {
    max-width: 320px;
    width: 100%;
    margin-left: 16px;
    background: ${props => props.theme.palette.common.white};
    @media ${props => props.theme.breakpoints.mobileLarge} {
      max-width: 100%;
      order: -1;
      margin: 0;
      margin-bottom: 8px;
    }
    .heading {
      padding: 16px;
      display: flex;
      justify-content: space-between;
      .title {
        ${props => props.theme.typography.body2};
        color: ${props => props.theme.palette.primary.dark};
        margin: 0;
      }
      .price {
        ${props => props.theme.typography.body2};
        color: ${props => props.theme.palette.primary.dark};
        margin: 0;
      }
    }
    .collapse-block {
      .promo-code-block {
        display: flex;
        padding: 10px 16px;
        justify-content: space-between;
        .input-new {
          max-width: calc(100% - 88px);
          width: 100%;
          .input-row {
            .input-block {
              padding: 5px 10px;
              height: 30px;
              color: ${props => props.theme.palette.secondary.dark};
              ::-webkit-input-placeholder {
                color: ${props => props.theme.palette.secondary.dark};
              }
              :-ms-input-placeholder {
                color: ${props => props.theme.palette.secondary.dark};
              }
              ::placeholder {
                color: ${props => props.theme.palette.secondary.dark};
              }
            }
          }
        }
        .button {
          max-width: 80px;
          text-transform: capitalize;
        }
      }
      .button-wrap {
        padding: 10px 16px;
        text-align: center;
        @media ${props => props.theme.breakpoints.mobileLarge} {
          display: none;
        }
      }
    }
  }
`
