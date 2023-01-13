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
  import { Spacer } from 'ui';
  
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
              <Grid container spacing={3} paddingTop={3} paddingLeft={20} paddingRight={25}>
              <Grid item xs={12}  >
              <label style={{fontSize:'18px',fontWeight:'bold',color:'black',lineHeight:"22.1px"}}> Brève description </label>
                <TextField
                 sx={{
                  "& .MuiInputBase-root": {
                      color: 'black'
                  }
              }}
                 required
                  rows={4}
                  multiline
                  fullWidth
                 
                  size='medium'
                  name='description'
                  // label='Brève description'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  // placeholder='Brève description'
                  value={values.description}
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                />
              </Grid>
             
              <Grid item xs={12}>
                <label style={{fontSize:'18px',color:'black', fontWeight:'bold',lineHeight:"22.1px"}}>Description détaillée </label>
                <Spacer height={10}/>
                <Description  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <Button variant='contained' style={{color:"white",backgroundColor:"#236C68"}} type='submit' sx={{  ml:30 ,height: 44, width: 210 ,sm:6 , xs:12, Radius:'5px'}}>
                  Suivant
                  </Button>
                </Grid>
                </Grid>
                
                </form>
          )}
                </Formik>
              //  </Card>
  )
}
                export default DescriptionPage