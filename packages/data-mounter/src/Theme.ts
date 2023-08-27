// import { createTheme } from '@material-ui/core';
import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    secondary: {
      main: '#ea5b2d',
      dark: '#b12800',
      light: '#ff8c5a',
    },
    /* primary: {
      main: '#0f4e8a',
      dark: '#00275c',
      light: '#4e79ba',
    }, */
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      // darker: blue[900],
    },
  },
});
