import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: "'EFFRA_STD_LT', Roboto, Helvetica, sans-serif",
  },
  palette: {
    primary: {      
      main: '#5E389E',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    }
  }
})

