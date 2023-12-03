import { createTheme, useTheme } from '@mui/material/styles'

// A custom theme for this app

const customTheme = {
  palette: {
    primary: {
      main: '#F4CCC8',
      200: '#EBA59E',
      300: '#E27D73',
      400: '#DA584B'
    },
    secondary: {
      main: '#C8E1BC',
      200: '#AAD199',
      300: '#8DC275',
      400: '#70B252'
    },
    warning: {
      main: '#F9EED7',
      200: '#F2DAAB',
      300: '#EBC77F',
      400: '#E5B454'
    },
    common: {
      white: '#FFFFFF',
      black: '#000000'
    },
    grey: {
      200: '#94979A',
      300: '#393D41',
      400: '#2C2F33',
      500: '#222528'
    },
    background: {
      paper: '#222528',
      default: '#222528'
    }
  },

  typography: {
    fontFamily: 'sans-serif'
    /*    [defaultTheme.breakpoints.up('md')]:{
    
   } */
  }
}
const theme = createTheme(customTheme)
/* theme=responsiveFontSizes(theme,{
  breakpoints:{

  }
}) */

export default theme
