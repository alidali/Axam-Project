import { FlexRowCenter } from 'components/flex-box'
import { H3, H6, Small } from 'components/Typography'
import Typography from '@mui/material/Typography'
import Logo from './logo'
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import { NextPage } from 'next'
import Scrollbar from 'components/Scrollbar'
import ProfileVendorSignup from 'pages-sections/sessions/ProfileVendorSignup'
import { Box, Container, Grid, Card, Divider } from '@mui/material'
import { Stepper, StepLabel, Step } from '@material-ui/core'
import { useRouter } from 'next/router'
import { FC, useContext, useEffect, useState } from 'react'
import LazyImage from 'components/LazyImage'
import ShopSignup from 'pages-sections/sessions/Shopsignup'
import BankSignup from 'pages-sections/sessions/Banksignup'
import RecapSignup from 'pages-sections/sessions/Recapsignup'
import { multiStepContext } from 'StepContext'
import styled from 'styled-components'

// const StyledStepLabel = styled(StepLabel)`
//   @media screen and (min-width: 768px) {
//     orientation: vertical;
//   }
// `
const StyledStepper = styled(Stepper)``

const StyledCard = styled.div`
  padding: 15px 60px 100px 60px;
  margin: 1px;
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center'

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

/**
 *  Used:
 *  1. cart page
 *  2. checkout page
 *  3. payment page
 */
const SignUpPage: NextPage = ({ children }) => {
  const Context = useContext(multiStepContext)
  console.log('step', Context.currentStep)

  const steps = [
    'Données vendeur',
    'Données boutique',
    'Données bancaire',
    'Résumé'
  ]

  function showStep (step: number) {
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

  return (
    <div>
      <Logo />
      <StyledCard>
        <Typography component='h1' variant='h4' align='center'>
          Inscrivez-vous
        </Typography>
        <Stepper activeStep={Context.currentStep - 1} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {showStep(Context.currentStep)}
      </StyledCard>
    </div>
  )
}
export default SignUpPage
