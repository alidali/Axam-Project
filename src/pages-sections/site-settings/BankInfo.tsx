import { Box, Button, Grid, styled, TextField } from '@mui/material'
import { H4 } from 'components/Typography'
import DropZone from 'components/DropZone'
import { useState, useEffect } from 'react'
import { Formik } from 'formik'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import React, { FC } from 'react'
import * as yup from 'yup'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

const UploadBox = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  padding: '5px 10px',
  borderRadius: '4px',
  display: 'inline-block',
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`
}))

// form field validation
const validationSchema = yup.object().shape({
  nom_vendeur: yup.string().required('Le nom du vendeur est obligatoire'),
  prenom_vendeur: yup.string().required('Le prénom du vendeur est obligatoire'),
  email: yup.string().required("L'email du vendeur est obligatoire"),
  mot_passe: yup
    .string()
    .required(' Le mot de passe du vendeur est obligatoire'),
  phone: yup
    .number()
    .required('Le numéro de téléphone  du vendeur est obligatoire')
})

const BankInfo: FC = () => {
  const initialValues = {
    nom_vendeur: '',
    prenom_vendeur: '',
    email: '',
    mot_passe: '',
    phone: ''
  }

  const handleFormSubmit = async values => {
    console.log(values)
  }

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                color='info'
                size='medium'
                name='rib'
                type='number'
                label='Rib '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rib}
                error={!!touched.rib && !!errors.rib}
                helperText={touched.rib && errors.rib}
              />
            </Grid>

            <Grid item xs={12}>
              {/* <H4>Top Bar Left Content</H4> */}
            </Grid>
            <DropZone />
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                color='info'
                size='medium'
                name='bank_name'
                placeholder='Banque'
                label='Banque'
              >
                <MenuItem value='Banque Internationale Arabe de Tunisie «BIAT»'>
                  
                  Banque Internationale Arabe de Tunisie « BIAT »
                </MenuItem>
                <MenuItem value='Banque de Tunisie «BT»'>
                  Banque de Tunisie «BT»
                </MenuItem>
                <MenuItem value='Société Tunisienne de Banque «STB»'>
                  Société Tunisienne de Banque «STB»
                </MenuItem>
                <MenuItem value='Banque Nationale Agricole «BNA»'>
                  Banque Nationale Agricole «BNA»
                </MenuItem>
                <MenuItem value='Union Internationale de Banque «UIB»'>
                  Union Internationale de Banque « UIB »
                </MenuItem>
                <MenuItem value='Union Bancaire de Commerce et d’Industrie «UBCI»'>
                  Union Bancaire de Commerce et d’Industrie «UBCI»
                </MenuItem>
                <MenuItem value='Banque Franco Tunisienne «BFT»'>
                  Banque Franco Tunisienne «BFT»
                </MenuItem>
                <MenuItem value='Banque Tuniso Koweitienne «BTK»'>
                  Banque Tuniso Koweitienne «BTK»
                </MenuItem>
                <MenuItem value='Banque Zitouna'>Banque Zitouna</MenuItem>
                <MenuItem value='Banque Tuniso-Libyenne «BTL»'>
                  Banque Tuniso-Libyenne «BTL»
                </MenuItem>
                <MenuItem value='Banque de Tunisie et des Emirats «BTE»'>
                  Banque de Tunisie et des Emirats «BTE»
                </MenuItem>
                <MenuItem value='Banque Tunisienne de Solidarité «BTS»'>
                  Banque Tunisienne de Solidarité «BTS»
                </MenuItem>
                <MenuItem value='Banque de l’Habitat «BH»'>
                  Banque de l’Habitat «BH»
                </MenuItem>
                <MenuItem value='Banque de Financement des Petites et Moyennes entreprises «BFPME»'>
                  Banque de Financement des Petites et Moyennes entreprises
                  «BFPME»
                </MenuItem>
                <MenuItem value='Banque Attijari'>Banque Attijari </MenuItem>
                <MenuItem value='Banque Amen'>Banque Amen</MenuItem>
                <MenuItem value='Banque Al Wifak '>Banque Al Wifak </MenuItem>
                <MenuItem value='Banque Al Baraka  '>
                  Banque Al Baraka{' '}
                </MenuItem>
                <MenuItem value='Banque Citi '>Banque Citi </MenuItem>
                <MenuItem value='Banque Arabe Tunisie «ATB» '>
                  Banque Arabe Tunisie «ATB»
                </MenuItem>
                <MenuItem value='Banque Saudi tunisie «TSB»'>
                  Banque Saudi tunisie «TSB»
                </MenuItem>
                <MenuItem value='Banque Qatar Tunisie «QNB»'>
                  Banque Qatar Tunisie «QNB»
                </MenuItem>
                <MenuItem value='Banque Arabe Corporation «ABC»'>
                  Banque Arabe Corporation «ABC»
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                color='info'
                size='medium'
                onBlur={handleBlur}
                onChange={handleChange}
                name='agence'
                label='Agence'
                value={values.agence}
                error={
                  !!touched.agence &&
                  !!errors.agence
                }
                helperText={
                  touched.agence &&
                  errors.agence
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                color='info'
                size='medium'
                type='number'
                name='cin'
                label='CIN'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cin}
                error={!!touched.cin&& !!errors.cin}
                helperText={touched.cin && errors.cin}
              />
            </Grid>
            <Box sx={{ minWidth: 1090, marginLeft: 3, marginTop: 2 }}></Box>
          </Grid>

          <Button type='submit' color='info' variant='contained' sx={{ mt: 4 }}>
            Valider
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default BankInfo
