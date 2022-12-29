import { FlexRowCenter } from "components/flex-box";
import SEO from "components/SEO";
import { SocialIcon } from 'react-social-icons';
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

<Grid container  sx={{ height: '150vh' }}>
  <Grid item xs paddingLeft='120px'>
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
  <Stepper  activeStep={Context.currentStep-1} orientation="vertical"  >
  <Step>
    <StepLabel  style={{height:"100px"}}></StepLabel>
  </Step>
  <Step>
    <StepLabel  style={{height:"100px"}}></StepLabel>
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

  </Grid>
  <Grid  style={{display: "flex", alignItems:'flex-end', flexDirection:'column-reverse',justifyContent: 'space-between' ,marginTop:"20%"}} width={{ xs:"25px",
      sm:"50px",
      md:"1500px",
      lg:"200px",
      xl: "250px"}}>
        
        <SocialIcon url={socialMediaHandlesLinks.facebook} />
        <SocialIcon url={socialMediaHandlesLinks.instagram} />
        <SocialIcon url={socialMediaHandlesLinks.twitter} />
        
     
  </Grid>
  </Box>
  </Grid>
  <Divider orientation="vertical" flexItem sx={{ mb: 1 }}>
 
  </Divider>
  <Grid item xs={false} sm={8} md={5.5} 
   width={{ xs:"150px",
   sm:"200px",
   md:"250px",
   lg:"250px",
   xl: "300px"}} 
  
  sx={{
        backgroundImage: 'url(./assets/images/banners/plante.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',}}  
      />
  
  </Grid>
</Scrollbar>
);
};
export default SignUpPage;
