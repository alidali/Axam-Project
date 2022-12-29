import BazaarButton from 'components/BazaarButton'
import { Grid } from '@mui/material'
import { H3, H5, Small } from 'components/Typography'
import { useFormik } from 'formik'
import styled from 'styled-components'
import React, { useCallback, useState, useContext } from 'react'
//import { Wrapper } from "./Login";
import { multiStepContext } from 'StepContext'

import { GreyCard, Spacer, Text } from 'ui'
const Styledbtn1 = styled.div`
  display: inline-block;

  padding: 8px 16px;
  margin-left: 40%;
`
const Styledbtn2 = styled.div`
  display: inline-block;

  padding: 8px 16px;
  margin-left: 10%;
`

const StyledRecap = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const RecapSignup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility(visible => !visible)
  }, [])

  const handleFormSubmit = async (values: any) => {
    console.log(values)
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit
  })

  const Context = useContext(multiStepContext)
  console.log('step', Context.Step)

  return (
    <form onSubmit={Context.submitData}>
      <Grid alignItems='center'>
        <H3 textAlign='center' mb={1}>
          Résumé
        </H3>

        <StyledRecap>
          <GreyCard>
            <H5 textAlign='left' mb={1}>
              Données vendeur
            </H5>

            <Text fontSize='1rem'>
              {'Nom :' + String(Context.userData['Nom'])}
            </Text>
            <Text fontSize='1rem'>
              {'Prénom :' + String(Context.userData['Prenom'])}
            </Text>
            <Text fontSize='1rem'>
              {'Email :' + String(Context.userData['Email'])}
            </Text>
            <Text fontSize='1rem'>
              {'Télèphone :' + String(Context.userData['Telephone'])}
            </Text>
            <Text fontSize='1rem'>
              {'CIN :' + String(Context.userData['Cin'])}
            </Text>
            <Text fontSize='1rem'>
              {'type :' + String(Context.userData['type'])}
            </Text>
          </GreyCard>
          <GreyCard>
            <H5 textAlign='left' mb={1}>
              Données boutique
            </H5>
            <Text fontSize='1rem'>
              {'NomBoutique :' + String(Context.userData['NomBoutique'])}
            </Text>
            <Text fontSize='1rem'>
              {'Raison social :' + String(Context.userData['RaisonSocial'])}
            </Text>
            <Text fontSize='1rem'>
              {'Pays :' + String(Context.userData['pays'])}
            </Text>
            <Text fontSize='1rem'>
              {'gouvernorat :' + String(Context.userData['gouvernorat'])}
            </Text>
            <Text fontSize='1rem'>
              {'Délégation :' + String(Context.userData['delegation'])}
            </Text>
            <Text fontSize='1rem'>
              {'Ville:' + String(Context.userData['ville'])}
            </Text>
            <Text fontSize='1rem'>
              {'Addresse :' + String(Context.userData['Addresse'])}
            </Text>
            <Text fontSize='1rem'>
              {'Télèphone Fixe :' + String(Context.userData['TelephoneFixe'])}
            </Text>
            <Text fontSize='1rem'>
              {'Code postal :' + String(Context.userData['CodePostal'])}
            </Text>

            <Text fontSize='1rem'>
              {'Matricule Fiscale :' +
                String(Context.userData['MatriculeFiscale'])}
            </Text>
            <Text fontSize='1rem'>
              {'RNE :' + String(Context.userData['Rne'])}
            </Text>
          </GreyCard>

          <GreyCard>
            <H5 textAlign='left' mb={1}>
              Coordonnées bancaires
            </H5>
            <Text fontSize='1rem'>
              {'titulaireDuCompte :' +
                String(Context.userData['titulaireDuCompte'])}
            </Text>
            <Text fontSize='1rem'>
              {'RIB :' + String(Context.userData['Rib'])}
            </Text>
            <Text fontSize='1rem'>
              {'Banque :' + String(Context.userData['Banque'])}
            </Text>
            <Text fontSize='1rem'>
              {'Agence :' + String(Context.userData['Agence'])}
            </Text>

            <Text fontSize='1rem'>
              {'CodeBancaire :' + String(Context.userData['CodeBancaire'])}
            </Text>

            <Text fontSize='1rem'>
              {'iban :' + String(Context.userData['iban'])}
            </Text>
            <Text fontSize='1rem'>
              {'codeSwift:' + String(Context.userData['codeSwift'])}
            </Text>
          </GreyCard>
        </StyledRecap>

        <Styledbtn1>
          <BazaarButton
            fullWidth
            onClick={() => Context.setStep(3)}
            color='secondary'
            variant='contained'
          >
            Back
          </BazaarButton>
        </Styledbtn1>

        <Styledbtn2>
          <BazaarButton
            fullWidth
            type='submit'
            color='primary'
            variant='contained'
          >
            Submit
          </BazaarButton>
        </Styledbtn2>
      </Grid>
    </form>
  )
}

const initialValues = {
  name: ''
}

export default RecapSignup
