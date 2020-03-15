import styled, { keyframes } from 'styled-components'

const scaleFadeInAnimation = keyframes`
from {
  transform: 'scale(0.75)';
  opacity: 0;
},
to {
  transform: 'scale(1.0)';
  opacity: 1;
}
`

export const StyledCarouselContainer = styled.div`
  height: ${props => props.sliderHeight + (props.hasDots ? 20 : 0)}px;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
`

export const StyledImageContainer = styled.div`
  align-items: center;
  height: 100%;
  height: ${props => props.sliderHeight}px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  display: none;
  .image_grid {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  &.previous {
    display: flex;
    transition: -webkit-transform 0.3s ease-in-out, transform 0.3s ease-in-out;
    transform: translate3d(-100%, 0, 0);
  }
  &.active {
    display: flex;
    transition: -webkit-transform 0.3s ease-in-out, transform 0.3s ease-in-out;
    background-color: white;
    transform: translate3d(0, 0, 0);
    z-index: 1;
  }
  &.next {
    display: flex;
    transition: -webkit-transform 0.3s ease-in-out, transform 0.3s ease-in-out;
    transform: translate3d(100%, 0, 0);
  }
  > .fade_in {
    animation: ${scaleFadeInAnimation} 1s ease-out both;
  }
  max-height: ${props => props.sliderHeight}px;
`
export const StyledArrowsContainer = styled.div`
  position: absolute;
  width: 98%;
  top: 50%;
  margin-left: 1%;
  margin-top: -10px;
  color: ${props => props.theme.palette.common.white};
  z-index: 2;
  display: flex;
  justify-items: space-between;
  .left_arrow_wrapper {
    padding: 15px 15px 15px 20px;
    opacity: 0.7;
    background: ${props => props.theme.palette.common.white};
    cursor: pointer;
  }
  .right_arrow_wrapper {
    padding: 15px 20px 15px 15px;
    opacity: 0.7;
    background: ${props => props.theme.palette.common.white};
    cursor: pointer;
    position: absolute;
    right: 0;
  }
  > span span.left_arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(135deg);
    cursor: pointer;
  }
  > span span.right_arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(-45deg);
    cursor: pointer;
  }
`
