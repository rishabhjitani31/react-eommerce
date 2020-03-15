import fonts from './fonts'
import breakpoints from './breakpoints'

export default {
  fonts: {
    ...fonts
  },
  breakpoints: {
    ...breakpoints
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      light: 'rgba(0, 0, 0, 0.7)',
      main: '#303030',
      dark: 'rgba(0, 0, 0, 0.87)',
      contrastText: '#fff'
    },
    secondary: {
      light: '#d8d8d8',
      main: '#f5f5f5',
      dark: 'rgba(0, 0, 0, 0.4)',
      contrastText: '#fff',
      maroon: '#87152c'
    },
    transparent: {
      main: 'transparent'
    },
    error: {
      main: '#ff695b',
      contrastText: '#fff'
    },
    border: {
      main: '#f1f1f1',
      secondary: '#e9e9e9'
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Open Sans", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 'bold',
      fontSize: '3rem',
      letterSpacing: '-0.0105em'
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '2.25rem',
      lineHeight: 1,
      letterSpacing: '-0.00833em'
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      lineHeight: 1.04,
      letterSpacing: '0em'
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      lineHeight: 1.17,
      letterSpacing: '0.00735em'
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em'
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em'
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em'
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em'
    },
    button: {
      fontWeight: 'bold',
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase'
    },
    caption: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em'
    },
    overline: {
      fontSize: '0.625rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase'
    }
  }
}
