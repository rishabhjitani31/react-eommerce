import styled from 'styled-components'

export const StyledPreviewItem = styled.div`
  .preview-container {
    display: flex;
    align-items: stretch;
    align-content: stretch;
    position: relative;
    @media ${props => props.theme.breakpoints.mobileLarge} {
      flex-direction: column-reverse;
      align-items: center;
    }
    .preview-left-grid {
      height: auto;
      max-height: 480px;
      margin-right: 4px;
      @media ${props => props.theme.breakpoints.mobileLarge} {
        max-height: initial;
        width: 100%;
      }
      .grid-container {
        height: 100%;
        ul {
          padding: 0;
          width: 100%;
          @media ${props => props.theme.breakpoints.mobileLarge} {
            display: flex;
          }
          li {
            list-style: none;
            border-radius: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #e0e0e0;
            border-bottom: none;
            cursor: pointer;
            img {
              height: 74px;
              width: 60px;
              object-fit: cover;
              &.is-selected {
                border: solid 2px ${props => props.theme.palette.primary.main};
              }
            }
          }
        }
      }
    }
    .preview-right-item {
      width: 100%;
      @media ${props => props.theme.breakpoints.mobileLarge} {
        max-width: initial;
      }
      div {
        width: 100%;
        height: auto;
        @media ${props => props.theme.breakpoints.mobileLarge} {
          width: 100%;
        }
        img {
          width: 400px;
          height: 492px;
          object-fit: cover;
          @media ${props => props.theme.breakpoints.mobileLarge} {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
      }
    }
  }
`
