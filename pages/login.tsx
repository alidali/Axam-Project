

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { NextPage } from "next";
import Login from "pages-sections/sessions/Login";
import Paper from '@mui/material/Paper';
import { Box, Container, Grid, Card } from "@mui/material";

const myStyle={
  backgroundImage: 
"url('/assets/images/banners/background.png')",
  height:'100vh',
  
  fontSize:'10px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const theme = createTheme();

const LoginPage: NextPage = () => {
  return (
   <div style={myStyle}>

    <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    > 
        <Login/>
      </Box>    
    </ThemeProvider>  
    </div>
        );
};

export default LoginPage;