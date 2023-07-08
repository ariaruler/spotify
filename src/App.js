import { ThemeProvider, createTheme } from '@mui/material/styles';
import SidebarMenu from './components/sidebar menu';


const theme = createTheme({
  typography: {
    body1: {
      fontWeight: 900,
      color: '#a7a7a7',
      ":hover":{
        color:"#fff"
      },
    },
  },
  palette: {
    mode: 'dark',
    background : {
      paper : '#000'
    },
    primary:{
      main:'#121212'
    }
  },
});


export default  function App() {
  return (
    <ThemeProvider theme={theme} variant="poster">
      <SidebarMenu  variant="poster"/>
    </ThemeProvider>
  );
}

