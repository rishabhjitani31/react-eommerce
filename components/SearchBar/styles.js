import styled from 'styled-components'

export const StyledSearchbarContainer = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
  padding: 0px 16px;
  width: 100%;
  max-width: 320px;

  .search-drawer {
    position: relative;

    .search-drawer-header {
      position: relative;
      max-width: 320px;
      display: flex;
      align-items: center;
      padding: 8px 0px 0px 0px;

      input {
        border: none;
        width: 100%;
        height: 36px;
        font-size: 1rem;
        padding: 0px;
        margin: 0px;
      }

      .search-drawer-close {
        flex: 0 0 30px;
      }

      .search-drawer-clear {
        color: ${props => props.theme.palette.secondary.dark};
        font-size: 0.85rem;
        text-transform: uppercase;
        flex: 0 0 52px;
        text-align: right;
      }
    }

    .search-list {
      .search-list-ui {
        display: flex;
        flex-direction: column;
        margin: 0px;
        padding: 0px;

        .search-list-item {
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0 14px 0;
          border-bottom: 1px solid
            ${props => props.theme.palette.secondary.main};

          .search-list-link {
            text-decoration: none;
            font-size: 1.14rem;
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            color: ${props => props.theme.palette.primary.dark};
            font-weight: 400;

            .search-list-history-icon {
              padding: 3px 8px 0px 0px;
            }
          }

          .search-list-import-icon {
          }
        }
      }
    }

    .image_grid {
      padding: 0px;
    }

    .search-slider-wrap {
      padding: 9px 0px 8px 0px;
      .search-cat-title {
        color: ${props => props.theme.palette.secondary.dark};
        font-style: italic;
        font-size: 0.71rem;
        padding: 0px 0px 9px 0px;
      }

      .search-slider-item-name {
        color: ${props => props.theme.palette.secondary.dark};
        text-transform: uppercase;
        font-size: 0.71rem;
        padding: 0px 0px 9px 0px;
      }
    }
  }
  @media (max-width: 624px) {
    max-width: initial;
    width: 100%;
  }
`
