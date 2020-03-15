import styled from 'styled-components'

export const StyledOverlayContainer = styled.div`
  position: fixed; /* Sit on top of the page content */
  display: block; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.palette.secondary.dark};
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease;
`
