import { Checkbox, FormControlLabel } from '@mui/material'
import BazaarButton from 'components/BazaarButton'
import BazaarTextField from 'components/BazaarTextField'
import { FlexBox } from 'components/flex-box'
import { MenuItem, TextField,Grid } from "@mui/material";
import { H3, H5, Small } from 'components/Typography'
import { useFormik } from 'formik'
import React, { useCallback, useState, useContext } from 'react'
import * as yup from 'yup'
import EyeToggleButton from './EyeToggleButton'
//import { Wrapper } from "./Login";
import { multiStepContext } from 'StepContext'
import Link from 'next/link'
import BazaarCard from 'components/BazaarCard'
import { BlueButton, Divider, GreenButton, GreyCard, Spacer, Text } from 'ui'

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
      <Grid  alignItems='center' >
      <H3 textAlign='center' mb={1}>
        Résumé
      </H3>

      <GreyCard>
        <H5 textAlign='left' mb={1}>
          Données vendeur
        </H5>

        <Text fontSize='1rem'>{'Nom :' + String(Context.userData['Nom'])}</Text>
        <Text fontSize='1rem'>{'Prénom :' + String(Context.userData['Prenom'])}
        </Text>
        <Text fontSize='1rem'>{'Email :' + String(Context.userData['Email'])} 
         </Text>
        <Text fontSize='1rem'>{'Télèphone :' + String(Context.userData['Telephone'])} 
        </Text>
        <Text fontSize='1rem'>{'type :' + String(Context.userData['type'])}  
         </Text>
      </GreyCard>
      <Spacer height={10} />
      <GreyCard>
        <H5 textAlign='left' mb={1}>
          Données Boutique
        </H5>
        <Text fontSize='1rem'>{'Raison social :' + String(Context.userData['RaisonSocial'])}
        </Text>
        <Text fontSize='1rem'>{'gouvernorat :' + String(Context.userData['gouvernorat'])}
        </Text>
        <Text fontSize='1rem'>{'Délégation :' + String(Context.userData['delegation'])}
        </Text>
        <Text fontSize='1rem'>{'Code postal :' + String(Context.userData['CodePostal'])}
        </Text>
        <Text fontSize='1rem'>
          {'Addresse :' + String(Context.userData['Addresse'])}
        </Text>
        <Text fontSize='1rem'>
          {'Matricule Fiscale :' + String(Context.userData['MatriculeFiscale'])}
        </Text>
        <Text fontSize='1rem'>{'RNE :' + String(Context.userData['Rne'])}</Text>
        <Text fontSize='1rem'>
          {'Télèphone Fixe :' + String(Context.userData['TelephoneFixe'])}
        </Text>
        <Text fontSize='1rem'>{'NomBoutique :' + String(Context.userData['NomBoutique'])}
        </Text>
      </GreyCard>
      <Spacer height={10} />
      <GreyCard>
        <H5 textAlign='left' mb={1}>
          Coordonnées bancaires
        </H5>
        <Text fontSize='1rem'>{'titulaireDuCompte :' + String(Context.userData['titulaireDuCompte'])}</Text>
        <Text fontSize='1rem'>{'RIB :' + String(Context.userData['Rib'])}</Text>
        <Text fontSize='1rem'>{'Banque :' + String(Context.userData['Banque'])}
        </Text>
        <Text fontSize='1rem'>{'Agence :' + String(Context.userData['Agence'])}
        </Text>

        <Text fontSize='1rem'>{'CodeBancaire :' +String(Context.userData['CodeBancaire'])}
        </Text>


        <Text fontSize='1rem'>{'iban :' + String(Context.userData['iban'])}
        </Text>
        <Text fontSize='1rem'>{'codeSwift:' + String(Context.userData['codeSwift'])}
        </Text>
        <Text fontSize='1rem'>{'CIN :' + String(Context.userData['Cin'])}</Text>
      </GreyCard>
      <Spacer height={20} />
      <BazaarButton
        fullWidth
        onClick={() => Context.setStep(3)}
        color='secondary'
        variant='contained'
        sx={{ mt: 3, mr: 30, height: 44, width: 100, sm: 6, xs: 12 }}
      >
        Back
      </BazaarButton>
      <BazaarButton
        fullWidth
        type='submit'
        color='primary'
        variant='contained'
        sx={{ mt: 3, ml: 1, height: 44, width: 100, sm: 6, xs: 12 }}
      >
        Submit
      </BazaarButton>
      </Grid>
    </form>
   
  )
}

const initialValues = {
  name: ''
}

export default RecapSignup
