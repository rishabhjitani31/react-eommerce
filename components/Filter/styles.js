import styled from 'styled-components'

export const FilterStyle = styled.div`
  max-width: 240px;
  width: 100%;
  .img-src {
    max-width: 100%;
    height: auto;
  }

  .hidden {
    display: none;
  }

  .main-filters {
    width: 100%;
    padding: 16px;
    .filters-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${props => props.theme.palette.secondary.main};
      padding-bottom: 16px;

      h4 {
        ${props => props.theme.typography.subtitle2};
        text-transform: uppercase;
        margin: 0;
        font-size: 12px;
      }

      .filters-reset {
        color: ${props => props.theme.palette.secondary.dark};
        ${props => props.theme.typography.subtitle2};
        font-weight: 600;
        text-transform: uppercase;
        font-size: 12px;
      }
    }

    .filters-group {
      .filters-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px;
        cursor: pointer;
        border: none;
        .filters-heading-text {
          ${props => props.theme.typography.subtitle2};
          color: ${props => props.theme.palette.secondary.dark};
          font-size: 14px;
        }

        &.active {
          .filters-heading-text {
            color: ${props => props.theme.palette.primary.dark};
          }
        }
      }

      .filter-content {
        background: ${props => props.theme.palette.common.white};
        margin: 0px -16px;

        .filter-content-color {
          padding: 16px;
          display: flex;
          flex-wrap: wrap;

          .color-circle {
            height: 28px;
            width: 28px;
            border-radius: 100px;
            overflow: hidden;
            border: 2px solid ${props => props.theme.palette.common.white};
            margin: 0px 6px 6px 0px;

            .color-fill {
              display: block;
              border-radius: 100px;
              height: 100%;
              width: 100%;
              background: ${props => props.theme.palette.secondary.maroon};
            }
            &.active {
              border: 2px solid ${props => props.theme.palette.primary.main};

              .color-fill {
                border: 1px solid ${props => props.theme.palette.common.white};
              }
            }
          }
        }

        .filter-content-price {
          padding: 16px;

          .filter-price-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 0px 4px 0px;
            .start-price,
            .end-price {
              font-weight: 600;
              ${props => props.theme.typography.subtitle2};
              color: ${props => props.theme.palette.secondary.dark};
            }
          }

          .price-slider {
            position: relative;

            .price-slider-bg {
              position: relative;
              height: 2px;
              background: ${props => props.theme.palette.primary.main};
              width: 100%;

              .price-range {
                position: absolute;
                height: 2px;
                width: 130px;
                left: 40px;
                top: 0px;
                background: ${props => props.theme.palette.secondary.dark};
              }
            }

            .price-selector-row {
              position: relative;
              height: 24px;
              width: 100%;

              .price-selector {
                position: absolute;
                height: 24px;
                width: 24px;

                &.price-selector-left {
                  left: 35px;
                }
                &.price-selector-right {
                  right: 21px;
                }
              }
            }
          }
        }
      }
    }
  }
`
