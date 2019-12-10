import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"effra", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {      
      fontWeight: 900,
      fontSize: '64px',
      lineHeight: '64px',
    },
    h2: {      
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: '40px',
    },
    h3: {      
      fontWeight: 700,
      fontSize: '32px;',
      lineHeight: '40px',
    }
  },
  palette: {
    primary: {      
      main: '#5e389e',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    }
  }
})
console.log('theme', theme)

