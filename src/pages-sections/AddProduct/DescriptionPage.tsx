import {
    Button,
    Box,
    Card,
    Grid,
    MenuItem,
    TextField,
    InputLabel
  } from '@mui/material'
  import { Formik } from 'formik'
  import React, { FC } from 'react'
  import * as yup from 'yup'
  import Description from 'components/Description'

  
  const validationSchema = yup.object().shape({
    nom_produit: yup.string().required("Le nom du vendeur est obligatoire"),
    guarantee: yup.string().required("Le prénom du vendeur est obligatoire"),
  });

  const DescriptionPage:FC = () => {
    const initialValues = {
    description:"",
  
  };
    
    const handleFormSubmit = async (values) => {
      console.log(values);
    };
    return (
      // <Card sx={{ p: 6 }}>
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
            setFieldValue,
            handleSubmit
          }) => (
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <Grid container spacing={3} paddingTop={3}>
              <Grid item xs={12}>
                <TextField
                  rows={2}
                  multiline
                  fullWidth
                  color='info'
                  size='medium'
                  name='description'
                  label='Brève description'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='Brève description'
                  value={values.description}
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                />
              </Grid>
              <Grid item xs={12}>
                <label>Description </label>
                <Description />
                </Grid>
                </Grid>
                
                </form>
          )}
                </Formik>
              //  </Card>
  )
}
                export default DescriptionPage