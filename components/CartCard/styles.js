import styled from 'styled-components'

export const StyledCartCardContainer = styled.div`
  width: 100%;
  height: 184px;
  display: flex;
  justify-content: center;
  padding: 16px;
  background: ${props => props.theme.palette.common.white};
  border-bottom: ${props => props.theme.palette.secondary.main};
  position: relative;
  :after {
    background: ${props => props.theme.palette.secondary.main};
    content: '';
    height: 1px;
    position: absolute;
    width: 200px;
    bottom: 0;
  }
`

export const CartImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .image-info {
    max-width: 64px;
    img {
      object-fit: cover;
      height: 85.3px;
    }
    .overline {
      ${props => props.theme.typography.overline};
      color: ${props => props.theme.palette.primary.dark};
      font-style: italic;
      line-height: initial;
      text-transform: initial;
    }
  }
`

export const CartInfoSection = styled.div`
  flex: 2;
  .info-header {
    ${props => props.theme.typography.body2};
    color: ${props => props.theme.palette.primary.dark};
    font-weight: normal;
    margin: 3px 0;
  }
  .item-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info-overline {
      margin: 0;
      ${props => props.theme.typography.overline};
      color: ${props => props.theme.palette.secondary.dark};
      font-style: italic;
      line-height: initial;
      text-transform: initial;
    }
    .info-overline:last-child {
      background-color: ${props => props.theme.palette.common.white};
      border-radius: 4px;
      border: solid 1px #f0f0f0;
      padding: 5px;
    }
  }
  .price-info {
    display: flex;
    padding-top: 3px;
    .price-span {
      ${props => props.theme.typography.body2};
      color: ${props => props.theme.palette.primary.dark};
      font-weight: bold;
      padding: 0 4px 0 0;
    }
    .price-span:last-child {
      ${props => props.theme.typography.overline};
      line-height: initial;
      font-weight: initial;
      color: ${props => props.theme.palette.secondary.dark};
      font-style: italic;
    }
  }
  .delivery-info {
    ${props => props.theme.typography.overline};
    line-height: initial;
    font-weight: initial;
    color: ${props => props.theme.palette.secondary.dark};
    font-style: italic;
    text-transform: initial;
  }
`

export const CartButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  a {
    ${props => props.theme.typography.body2};
    color: ${props => props.theme.palette.secondary.dark};
    text-decoration: none;
    cursor: pointer;
    text-transform: capitalize;
    text-align: left;
  }
`
