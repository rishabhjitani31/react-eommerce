import styled from 'styled-components'

export const StyledShopLook = styled.div`
  text-align: center;
  float: left;
  max-width: ${props => props.width}px;
  width: 100%;
  max-height: ${props => props.height}px;
  height: auto;
  position: relative;
  margin: 0.5%;
  .overlay {
    display: flex:
    justify-content: center;
    align-items: center;
  }
  img,
  .overlay {
    transition: 0.3s all;
    border-radius: 3px;
  }
  > img {
    width: 100%;
    height: auto;
    margin-bottom: -4px;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    max-width: ${props => props.width}px;
    width: 100%;
    height: ${props => props.height}px;
    color: ${props => props.theme.palette.common.white};
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    h4 {
      ${props => props.theme.typography.h4};
    }
  }
  &:hover {
    .overlay {
      opacity: 1;
    }
    img {
      -webkit-filter: blur(2px);
      filter: blur(2px);
    }
  }
`
