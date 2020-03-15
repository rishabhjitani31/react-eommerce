import styled from 'styled-components'
import radioChecked from '~/static/images/checked.svg'

export const CheckoutAddMethodStyle = styled.div`
  padding: 24px 16px;
  background: ${props => props.theme.palette.common.white};

  .title {
    ${props => props.theme.typography.caption};
    color: ${props => props.theme.palette.secondary.dark};
    margin: 0px 0px 16px 0px;
    display: block;
    text-transform: uppercase;
  }
  .checkout-listing {
    display: flex;
    margin-bottom: 18px;
    position: relative;
    .radio-button {
      position: absolute;
      visibility: hidden;
    }
    .radio-btn-style {
      width: 20px;
      height: 20px;
      background: url(${radioChecked}) 0px 0px no-repeat;
    }
    .radio-content {
      margin-left: 16px;
      flex: 1;
      .main-title,
      .address {
        ${props => props.theme.typography.body2};
        color: ${props => props.theme.palette.primary.dark};
      }
      .main-title {
        font-weight: bold;
        margin: 0;
        margin-bottom: 8px;
      }
    }
  }
  .add-repetor {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }
    .method-name {
      ${props => props.theme.typography.body2};
      color: ${props => props.theme.palette.primary.dark};
      font-weight: bold;
      margin-left: 12px;
      padding-top: 2px;
    }
  }
`
