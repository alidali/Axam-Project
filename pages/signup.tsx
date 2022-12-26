import { FlexRowCenter } from "components/flex-box";
import SEO from "components/SEO";
import { H3, H6, Small } from 'components/Typography'
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons';
import Logo from "./logo";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { NextPage } from "next";
import Scrollbar from "components/Scrollbar";
import ProfileVendorSignup from "pages-sections/sessions/ProfileVendorSignup";
import { Box, Container, Grid, Card,Divider } from "@mui/material";
import { Stepper, StepLabel, Step } from '@material-ui/core'
import { useRouter } from "next/router";
import { FC, useContext, useEffect, useState } from "react";
import LazyImage from "components/LazyImage";
import ShopSignup from "pages-sections/sessions/Shopsignup";
import BankSignup from "pages-sections/sessions/Banksignup";
import RecapSignup from "pages-sections/sessions/Recapsignup";
import { multiStepContext } from "StepContext";


/**
 *  Used:
 *  1. cart page
 *  2. checkout page
 *  3. payment page
 */
const SignUpPage: NextPage = ({ children }) => {
  
  const Context= useContext(multiStepContext)
  console.log("step", Context.currentStep)

  
function showStep(step: number) {
  switch (step) {
    case 1:
      return <ProfileVendorSignup />
    case 2:
      return <ShopSignup />
    case 3:
      return <BankSignup />
    case 4:
      return <RecapSignup />
  }
}


const socialMediaHandlesLinks = {
  facebook: 'https://facebook.com/phanimurari',
  instagram: 'https://www.instagram.com/im_phani_murari/?hl=en',
 
  twitter: 'https://twitter.com/ImPhaniMurari'
}
return (

  
 



<Scrollbar> 
<div style={{  display: 'flex',justifyContent: 'left', alignItems: 'center'}}>
        <Logo/>
        </div>
<Typography component="h1" variant="h4" align="center">
Inscrivez-vous
          </Typography>
<Grid container  sx={{ height: '100vh' }}>

  <Grid item xs paddingLeft='10px'  width={{ xs:"100px",
      sm:"200px",
      md:"300px",
      lg:"400px",
      xl: "500px"}} >
  
  <Box
        sx={{

           my: 1,
           mx: 30,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
     
      > 
      <Card>
  <CssBaseline />

  <Stepper  activeStep={Context.currentStep-1}  >
  <Step>
    <StepLabel  >Données Vendeur</StepLabel>
  </Step>
  <Step>
    <StepLabel >Données Boutique</StepLabel>
  </Step>
  <Step>
    <StepLabel>Données Bancaire</StepLabel>
  </Step>
  <Step>
    <StepLabel>Résumé</StepLabel>
  </Step>
</Stepper>
 <Grid item lg={9} md={8} xs={12} >
 {showStep(Context.currentStep)}

  </Grid>
  <Grid  style={{display: "flex", alignItems:'center',flexDirection:'row' ,marginTop:"20%"}} width={{ xs:"25px",
      sm:"50px",
      md:"1500px",
      lg:"200px",
      xl: "250px"}}>
{/*         
        <SocialIcon url={socialMediaHandlesLinks.facebook} />
        <SocialIcon url={socialMediaHandlesLinks.instagram} />
        <SocialIcon url={socialMediaHandlesLinks.twitter} /> */}
        
     
  </Grid>
  </Card>
  </Box>
  </Grid>


  
  </Grid>
</Scrollbar>
);
};
export default SignUpPage;











 {/* <Grid container component="main" sx={{ height: '130vh' }}>
    <CssBaseline />

<Grid item xs={12} sm={8} md={5} component={Paper} elevation={2} square>

<Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      > 
      <CssBaseline />
  <Stepper style={{width:'20%', marginBottom:'20%'}} activeStep={Context.currentStep-1} orientation="vertical" >
  <Step>
    <StepLabel style={{height:"100px"}}></StepLabel>
  </Step>
  <Step>
    <StepLabel style={{height:"100px"}}></StepLabel>
  </Step>
  <Step>
    <StepLabel style={{height:"100px"}}></StepLabel>
  </Step>
  <Step>
    <StepLabel style={{height:"100px"}}></StepLabel>
  </Step>
</Stepper>
 <Grid item lg={8} md={8} xs={12} >
 {showStep(Context.currentStep)}


 <Grid  style={{display: "flex", alignItems: "center", justifyContent:'space-around',marginTop:"20%"}} width={{ xs:"100px",
      sm:"200px",
      md:"300px",
      lg:"400px",
      xl: "500px"}}>
        
        <SocialIcon url={socialMediaHandlesLinks.facebook} />
        <SocialIcon url={socialMediaHandlesLinks.instagram} />
        <SocialIcon url={socialMediaHandlesLinks.twitter} />
        
     
  </Grid>
 </Grid>

 </Box>

 
</Grid>

<Grid
      item
      xs={false}
      sm={4}
      md={7}
      width={{ xs:"100px",
      sm:"200px",
      md:"300px",
      lg:"400px",
      xl: "500px"}} 
      sx={{
        backgroundImage: 'url(./assets/images/banners/plante.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
        
      }}  
      
   
    />
</Grid> */}