import CssBaseline from '@mui/material/CssBaseline';
import Logo from "./logo";
import { SocialIcon } from 'react-social-icons';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { NextPage } from "next";
import Login from "pages-sections/sessions/Login";
import Paper from '@mui/material/Paper';
import { Box, Container, Grid, Card } from "@mui/material";


const socialMediaHandlesLinks = {
  facebook: 'https://facebook.com/phanimurari',
  instagram: 'https://www.instagram.com/im_phani_murari/?hl=en',
 
  twitter: 'https://twitter.com/ImPhaniMurari'
}
const theme = createTheme();

const LoginPage: NextPage = () => {
  return (
   

  
    <ThemeProvider theme={theme}>
    
  
    
    <CssBaseline />
    
    <div style={{  display: 'flex',justifyContent: 'left', alignItems: 'center'}}>
        <Logo/>
        </div>
   

    <Box
      sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      
    
   
        <Login/>
      
      </Box>
      
    </ThemeProvider>
  
    


  
        );
};

export default LoginPage;