import styled from 'styled-components'

export const StyledCartContainer = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  .item-container {
    width: 100%;
  }
  .total-container {
    border: 1px solid ${props => props.theme.palette.secondary.main};
    background: ${props => props.theme.palette.common.white};
    width: 100%;
    padding: 16px;
    z-index: 10;
    .total-info {
      display: flex;
      justify-content: space-between;
      p {
        ${props => props.theme.typography.body2};
        color: ${props => props.theme.palette.primary.dark};
        font-weight: bold;
        text-align: center;
      }
    }
    .checkout-container {
      display: flex;
      justify-content: center;
      align-items: center;
      .checkout-btn {
        background-color: ${props => props.theme.palette.primary.main};
        color: ${props => props.theme.palette.common.white};
        width: 164px;
        height: 30px;
        border-radius: 4px;
      }
    }
  }
`
