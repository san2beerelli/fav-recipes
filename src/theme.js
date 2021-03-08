import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f0c3d',
    },
    secondary: {
      main: '#ffd773',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f7f7f7',
    },
  },
});

export default theme;