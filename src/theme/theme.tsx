import { createTheme } from '@mui/material/styles';

// Definindo cores baseadas no banner
const theme = createTheme({
  palette: {
    primary: {
      main: '#a67c00', // Cor extraída do banner
    },
    secondary: {
      main: '#fdf3d4', // Cor extraída do banner
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1024, // Define o ponto de interrupção para 1024px
      xl: 1920,
    },
  },
});

export default theme;
