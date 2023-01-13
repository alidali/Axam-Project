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
import DropzoneImage from 'components/DropzoneImage'
import styled from 'styled-components'
import { Spacer } from 'ui';




const validationSchema = yup.object().shape({
  nom_produit: yup.string().required("Le nom du vendeur est obligatoire"),
  guarantee: yup.string().required("Le prénom du vendeur est obligatoire"),
});

const Image:FC = () => {
  const initialValues = {
  description:"",

};
  
  const handleFormSubmit = async (values) => {
    console.log(values);
  };
  const StyledDropzone= styled.div`

 
  flex-direction: row;
 

  @media screen and (min-width: 768px) {
    display: flex;
  }`
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
           
            <label style={{fontSize:"18px",fontWeight:'bold',color:"black"}}> Image principal </label>


           
              <DropzoneImage
                onChange={(files) => console.log(files)}/>
             
              
            </Grid>
            <Grid item xs={12}>
            <label style={{fontSize:"18px",fontWeight:'bold',color:"black"}}> Images secondaires </label>
<StyledDropzone >
<DropzoneImage   onChange={(files) => console.log(files)}/>
<Spacer width={30}/>
<DropzoneImage   onChange={(files) => console.log(files)}/> 
<Spacer width={30}/>
<DropzoneImage   onChange={(files) => console.log(files)}/>
<Spacer width={30}/>
<DropzoneImage   onChange={(files) => console.log(files)}/>
<Spacer width={30}/>
<DropzoneImage   onChange={(files) => console.log(files)}/>
</StyledDropzone>
            
              </Grid>
              
               <Grid item xs={6} sm={6}>
               <label style={{fontSize:'18px',fontWeight:'bold',color:'black', marginLeft:'2%'}}>Lien youtube</label>
                <TextField
                
                 sx={{
                  "& .MuiInputBase-root": {
                      color: 'black'
                  }
              }}
                  fullWidth
                  name='addLink'
                  label='Ajouter lien youtube'
                  size='medium'
                  variant='outlined'
                  value={values.addLink}
                  onBlur={handleBlur}
                  error={!!touched.addLink && !!errors.addLink}
                  helperText={touched.addLink && errors.addLink}
                 
                />
              </Grid>
              <Grid item sm={6} xs={12} marginTop={2} >
                  <Button variant='contained' color='info' type='submit'  style={{color:"white",backgroundColor:"#236C68"}}  sx={{ mt:2, ml:30 ,height: 44, width: 210 , Radius:'5px'}}>
                 Soumettre et terminer
                  </Button>
                </Grid>
              </Grid>
              
              </form>
        )}
              </Formik>
            
)
}
              export default Image