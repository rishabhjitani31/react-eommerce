import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStoryStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700&display=swap');
  * {
    font-family: ${theme.fonts.fontFamily};
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    font-size: ${theme.typography.htmlFontSize};
  }
  img{
      max-width: 100%;
      height: auto;
  }
  `
export default GlobalStoryStyles
