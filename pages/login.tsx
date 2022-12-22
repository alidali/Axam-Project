import CssBaseline from '@mui/material/CssBaseline';
// import { SocialIcon } from 'react-social-icons';
 import {SocialIcon} from 'react-social-icons';
import { NextPage } from "next";
import Login from "pages-sections/sessions/Login";
import Paper from '@mui/material/Paper';
import Logo from "./logo";
import { Box, Container, Grid, Card ,Divider} from "@mui/material";
import Scrollbar from "components/Scrollbar";
import SocialButtons from "pages-sections/sessions/SocialButtons";
const socialMediaHandlesLinks = {
  facebook: 'https://facebook.com/phanimurari',
  instagram: 'https://www.instagram.com/im_phani_murari/?hl=en',
 
  twitter: 'https://twitter.com/ImPhaniMurari'
}

const LoginPage: NextPage = () => {
  return (
    

    <Scrollbar> 

<Grid container  sx={{ height: '110vh' }}>
  <Grid item xs paddingLeft='200px'>
        <div style={{  display: 'flex',justifyContent: 'left', alignItems: 'center'}}>
        <Logo/>
        </div>
        <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
         
        }}
      > 
         <Login />
         <SocialButtons redirect="/signup" redirectText="Sign Up" />
         </Box>
         <Grid  style={{display: "flex", alignItems:'flex-start', flexDirection:'row',justifyContent: 'space-between' ,marginTop:"10%",marginLeft:"20%"}} width={{ xs:"50px",
      sm:"100px",
      md:"200px",
      lg:"300px",
      xl: "400px"}}>
        
        <SocialIcon url={socialMediaHandlesLinks.facebook} />
        <SocialIcon url={socialMediaHandlesLinks.instagram} />
        <SocialIcon url={socialMediaHandlesLinks.twitter} />
        
  </Grid>
      </Grid>
      <Divider orientation="vertical" flexItem sx={{ mb: 1 }}>
      
      </Divider>
      <Grid item xs={12} sm={8} md={5} maxHeight={'120%'}
  
  sx={{
        backgroundImage: 'url(./assets/images/banners/plante.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
        
      }}  
      />
    </Grid>
    </Scrollbar>
        );
};

export default LoginPage;
