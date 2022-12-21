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

const GeneralForm: FC = () => {
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
              {/* <H4>Top Bar Left Content</H4> */}
            </Grid>
            <DropZone />
            <Grid item xs={12}>
              <TextField
                fullWidth
                color='info'
                size='medium'
                name='rib'
                type="number"
                label='Rib '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rib}
                error={!!touched.rib && !!errors.rib}
                helperText={touched.rib && errors.rib}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                rows={4}
                multiline
                fullWidth
                color='info'
                size='medium'
                onBlur={handleBlur}
                onChange={handleChange}
                name='boutique_description'
                label='Description de boutique'
                value={values.boutique_description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                color='info'
                size='medium'
                onBlur={handleBlur}
                onChange={handleChange}
                name='responsable_commercial'
                label='responsable commercial'
                value={values.responsable_commercial}
                error={
                  !!touched.responsable_commercial &&
                  !!errors.responsable_commercial
                }
                helperText={
                  touched.responsable_commercial &&
                  errors.responsable_commercial
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                color='info'
                size='medium'
                type='number'
                name='phone'
                label='Téléphone du responsable  '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
              />
            </Grid>
            <Box sx={{ minWidth: 1090, marginLeft: 3, marginTop: 2 }}>
          
            </Box>
          </Grid>

          <Button type='submit' color='info' variant='contained' sx={{ mt: 4 }}>
            Valider
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default GeneralForm
