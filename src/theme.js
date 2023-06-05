import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#ccd5ae',
    },
    secondary: {
      main: '#e9edc9',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;