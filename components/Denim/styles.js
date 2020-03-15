import styled from 'styled-components'

export const StyledSlider = styled.div`
  .img_slider {
    max-width: 240px;
    width: 100%;
    /* height: 500px; */
    padding: 20px;

    .box_industries {
      overflow: hidden;
      text-align: center;
      position: relative;

      .img-src {
        max-width: 100%;
        height: auto;
      }
      .content {
        background: ${props => props.theme.palette.common.white};
        bottom: -100px;
        color: ${props => props.theme.palette.common.white};
        left: 0%;
        text-align: left;
        position: absolute;
        transition: all 0.3s ease-in-out;
        width: 100%;
        padding: 8px;
        .size {
          ${props => props.theme.typography.overline};
          color: ${props => props.theme.palette.primary.dark};
          padding: 0px 0px 6px 0px;
        }
        .variants {
          ${props => props.theme.typography.overline};
          color: ${props => props.theme.palette.primary.dark};
          padding: 0px 0px 2px 0px;
        }
      }

      &:hover {
        .content {
          bottom: 0px;
        }
      }
    }

    .product_details {
      text-align: center;
      display: flex;
      flex-direction: column;

      .title_slider,
      .description_slider {
        ${props => props.theme.typography.body2};
        color: ${props => props.theme.palette.primary.dark};
      }

      .title_slider {
        padding: 8px 0px 0px 0px;
      }
      .price_slider {
        ${props => props.theme.typography.subtitle2};
        font-weight: 600;
        padding: 8px 0px 0px 0px;
      }
      .description_slider {
        ${props => props.theme.typography.caption};
        color: ${props => props.theme.palette.secondary.dark};
        font-weight: bold;
        padding: 8px 0px 0px 0px;
      }
    }
  }
`
export const StyledVariant = styled.div`
  .oval_direction {
    display: flex;
    flex-direction: flex-start;
  }
`

export const OvalCopy = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin: 5px 2px 0px 2px;
  display: inline-block;
  background-color: ${props => props.background};
`
