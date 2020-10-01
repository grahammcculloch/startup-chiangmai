import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fe5f55',
      light: '#fe7f77',
      dark: '#b1423b',
      contrastText: '#fff',
    },
    secondary: {
      main: '#36f468',
      light: '#5ef686',
      dark: '#25aa48',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
});

export default theme;
