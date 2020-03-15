import styled from 'styled-components'

export const StyledProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .description-container {
    padding: 24px 94px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media ${props => props.theme.breakpoints.mobileLarge} {
      padding: initial;
      flex-direction: column;
    }
    .description {
      padding-left: 24px;
      display: flex;
      flex-direction: column;
      flex: 0 0 25%;
      @media ${props => props.theme.breakpoints.mobileLarge} {
        padding: 8px;
      }
      .product-title {
        ${props => props.theme.typography.h3};
        color: ${props => props.theme.palette.primary.dark};
        margin: 0;
        padding-bottom: 16px;
      }
      .price-info {
        display: flex;
        align-items: center;
        .price {
          margin-right: 8px;
        }
      }
      .quantity {
        display: flex;
        flex-direction: column;
        padding-bottom: 24px;
        .dropdown-title {
          padding-bottom: 8px;
        }
      }
      .delivery {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 26px;
        .delivery-code-column {
          ${props => props.theme.typography.body2};
          span {
            font-weight: bold;
            padding-left: 4px;
          }
        }
        .delivery-change-btn {
          background: none;
          box-shadow: none;
          border: none;
          outline: none;
          color: rgba(0, 0, 0, 0.87);
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
        }
      }
      .add-button {
        width: 100%;
        padding-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .button {
          width: 144px;
          &:first-child {
            margin-right: 16px;
          }
          @media ${props => props.theme.breakpoints.mobileLarge} {
            margin: 0px;
          }
        }
      }
      .buynow-btn {
        width: 100%;
        .button {
          width: 100%;
        }
      }
    }
  }
  .accordion-container {
    width: 100%;
    max-width: 868px;
    margin: 0 auto;
  }
`
