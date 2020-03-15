import styled from 'styled-components'

export const DashboardMethodStyle = styled.div`
  background: ${props => props.theme.palette.common.white};
  margin-bottom: 40px;
  .order-card-container {
    max-width: 764px;
    .order-date {
      ${props => props.theme.typography.caption};
      padding: 9px 16px 9px 8px;
      background-color: ${props => props.theme.palette.secondary.main};
      color: ${props => props.theme.palette.secondary.dark};
      display: flex;
      justify-content: space-between;
      align-items: center;
      .date {
        ${props => props.theme.typography.subtitle2};
      }
      .price {
        ${props => props.theme.typography.subtitle2};
        color: ${props => props.theme.palette.primary.dark};
      }
    }
    .product-imgpart {
      display: flex;
      padding: 8px 16px;
      @media ${props => props.theme.breakpoints.mobileSmall} {
        flex-wrap: wrap;
        position: relative;
      }
      .product-figure {
        max-width: 79px;
        margin: 0;
        margin-right: 8px;
        .product-image {
          max-width: 100%;
          display: block;
        }
      }
      .product-details {
        flex: 0 0 172px;
        .order-number {
          ${props => props.theme.typography.overline};
          color: ${props => props.theme.palette.secondary.dark};
          margin-bottom: 2px;
        }
        .order-product {
          ${props => props.theme.typography.caption};
          color: ${props => props.theme.palette.primary.dark};
          margin: 0;
          margin-bottom: 10px;
        }
        .gray-quantity-invoice {
          display: flex;
          margin-bottom: 10px;
          .gray {
            ${props => props.theme.typography.overline};
            color: ${props => props.theme.palette.secondary.dark};
            margin-right: 16px;
          }
          .qty {
            ${props => props.theme.typography.overline};
            color: ${props => props.theme.palette.primary.dark};
          }
        }
        .arrow-view-product {
          display: flex;
          @media ${props => props.theme.breakpoints.mobileSmall} {
            position: absolute;
            top: 45px;
            right: 6px;
          }
          .view-product {
            ${props => props.theme.typography.caption};
            color: ${props => props.theme.palette.primary.dark};
            text-decoration: none;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
            @media ${props => props.theme.breakpoints.mobileSmall} {
              font-size: 0;
            }
            .arrow {
              margin-left: 10px;
            }
            &:hover {
              color: ${props => props.theme.palette.secondary.dark};
            }
          }
        }
      }
      .product-status {
        margin: 0 auto;
        margin-right: 0;
        justify-self: flex-end;
        padding-top: 18px;
        @media ${props => props.theme.breakpoints.mobileSmall} {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .order-status {
          ${props => props.theme.typography.caption};
          color: ${props => props.theme.palette.secondary.dark};
          text-align: right;
          display: block;
          margin-bottom: 8px;
          @media ${props => props.theme.breakpoints.mobileSmall} {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`
