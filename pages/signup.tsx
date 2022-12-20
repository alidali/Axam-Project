import { FlexRowCenter } from "components/flex-box";
import SEO from "components/SEO";
import { NextPage } from "next";
import ProfileVendorSignup from "pages-sections/sessions/ProfileVendorSignup";
import { Box, Container, Grid, Card } from "@mui/material";
import { Stepper, StepLabel, Step } from '@material-ui/core'
import { useRouter } from "next/router";
import { FC, useContext, useEffect, useState } from "react";
import LazyImage from "components/LazyImage";
import ShopSignup from "pages-sections/sessions/Shopsignup";
import BankSignup from "pages-sections/sessions/Banksignup";
import RecapSignup from "pages-sections/sessions/Recapsignup";
import { multiStepContext } from "StepContext";
import { SocialIcon } from 'react-social-icons';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';


/**
 *  Used:
 *  1. cart page
 *  2. checkout page
 *  3. payment page
 */
const SignUpPage: NextPage = ({ children }) => {

  const Context = useContext(multiStepContext)

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
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={4} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Stepper style={{ width: '20%' }} activeStep={Context.currentStep - 1} orientation="vertical" >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
          <Grid item lg={8} md={8} xs={12} >
            {showStep(Context.currentStep)}
            <Grid style={{ display: "flex", alignItems: "center", justifyContent: 'space-around', marginTop: "20%" }} width={{
              xs: "100px",
              sm: "200px",
              md: "300px",
              lg: "400px",
              xl: "500px"
            }}>
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
        width={{
          xs: "100px",
          sm: "200px",
          md: "300px",
          lg: "400px",
          xl: "500px"
        }}
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




  );
};
export default SignUpPage;