
import { H3, H6, Small } from 'components/Typography'
import Typography from '@mui/material/Typography'
import Logo2 from "components/Logo2";

import { NextPage } from 'next'
import Scrollbar from 'components/Scrollbar'
import ProfileVendorSignup from 'pages-sections/sessions/ProfileVendorSignup'
import { Box, Container, Grid, Card, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Stepper, StepLabel, Step } from '@material-ui/core'
import { useRouter } from 'next/router'
import { FC, useContext, useEffect, useState } from 'react'
import LazyImage from 'components/LazyImage'
import ShopSignup from 'pages-sections/sessions/Shopsignup'
import BankSignup from 'pages-sections/sessions/Banksignup'
import RecapSignup from 'pages-sections/sessions/Recapsignup'
import { multiStepContext } from 'StepContext'
import styled from 'styled-components'
import { color } from '@mui/system';



const StyledCard = styled.div`

  padding:20px 250px 100px 250px;  //top right bottom left
  margin: 1px;
   display: 'flex',
   justifyContent: 'center',
  alignItems: 'center'

  @media screen and (min-width: 768px) {
    display: flex;
    marginLeft:50px,
   marginRight:50px,

  }
`
const myStyle={
  backgroundImage: 
"url('/assets/images/banners/background.png')",
  
  fontSize:'1px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};



const SignUpPage: NextPage = ({ children }) => {
  const Context = useContext(multiStepContext)
  console.log('step', Context.currentStep)

  const steps = [
    'Données vendeur',
    'Données boutique',
    'Données bancaire',
    'Résumé',
  ];

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


  const useStyles = makeStyles(() => ({
    root: {
      "& .MuiStepIcon-root.MuiStepIcon-active": {color: "#E09351"},
      "& .MuiStepIcon-completed": { fill: "#236C68" }, 
      "& .Mui-disabled .MuiStepIcon-root": { fill: "crey" },
      "& .MuiStepConnector-line":{color: "#E09351"}
  
    
    }})
    )
    const c = useStyles();

    const myStyle={
      backgroundImage: 
    "url('/assets/images/banners/bk.png')",
      fontSize:'10px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };

  return (
    <div style={myStyle}>
    
      <Logo2 />
      <Typography component='h1' variant='h4' align='center' color='#E09351' fontWeight= '700'
 lineHeight= '30'>
        Inscrivez-vous
      </Typography>
      <Small
          mb={4.5}
          display="block"
          fontSize="18px"
          fontWeight="600"
          color="grey.800"
          textAlign="center"
        >
         c’est simple et rapide!
        </Small>
      <StyledCard>
      
        <Stepper  className={c.root} activeStep={Context.currentStep - 1}  alternativeLabel   >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel  >{label}</StepLabel>

            </Step>
          ))}
        </Stepper>

      {showStep(Context.currentStep)}
      </StyledCard>
    </div>
    


  )
}
export default SignUpPage