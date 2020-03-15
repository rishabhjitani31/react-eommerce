import styled, { keyframes } from 'styled-components'

const spinAnimation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`

const fillStyle = `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledSpinner = styled.div`
  display: block;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  transform: translate3d(0, 0, 0);

  border: 3px solid ${props => props.theme.palette.secondary.light};
  border-top-color: transparent;
  animation: 0.9s infinite linear;
  animation-name: ${spinAnimation};
`

export const StyledSpinnerContainer = styled.div`
  &[data-variant='fill'] {
    ${fillStyle};
  }
  &[data-variant='fullScreen'] {
    ${fillStyle};
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1000;
    ${StyledSpinner} {
      width: 44px;
      height: 44px;
    }
  }
  &[data-variant='block'] {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: 80px;
  }
`
