import {
    Button,
    Box,
    Card,
    Grid,
    MenuItem,
    TextField,
    InputLabel
  } from '@mui/material'
  import { H3, H6, H4, Small } from 'components/Typography'
  import AddBoxIcon from '@mui/icons-material/AddBox'
  import Tags from 'components/Tags'
  import Autocomplete from '@mui/material/Autocomplete'
  import countryList from 'data/countryList'
  import BazaarSwitch from 'components/BazaarSwitch'
  import { Formik } from 'formik'
  import React, { FC } from 'react'
  import * as yup from 'yup'
  import { Spacer } from 'ui';
  import { Assign, ObjectShape } from 'yup/lib/object'
  import makeStyles from "@material-ui/core/styles/makeStyles";
  

  const validationSchema = yup.object().shape({
    nom_produit: yup.string().required("Le nom du vendeur est obligatoire"),
    guarantee: yup.string().required("Le prénom du vendeur est obligatoire"),
  });
 
  const Informations:FC = () => {
    const initialValues = {
    nom_produit:"",
    guarantee:"",
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
              <Grid container spacing={3} paddingTop={3} paddingLeft={20}  paddingRight={20}>
                <Grid item sm={5} xs={6}>
                  <TextField
                    fullWidth
                    name='nom_produit'
                    label='Nom du produit'
                    color='info'
                    size='medium'
                    placeholder='Nom du produit'
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={!!touched.nom_produit && !!errors.nom_produit}
                    helperText={touched.nom_produit && errors.nom_produit}
                  />
                </Grid>
                <Grid item sm={5} xs={6} >
                   <Tags />
                </Grid> 
  
              
  
                <Grid item sm={5} xs={12}>
                  <TextField
                    fullWidth
                    name='guarantee'
                    color='info'
               
                    size='medium'
                    label=' période de garantie'
                    type='number'
                    placeholder=' période de garantie'
                    onBlur={handleBlur}
                    value={values.guarantee}
                    onChange={handleChange}
                    error={!!touched.guarantee && !!errors.guarantee}
                    helperText={touched.guarantee && errors.guarantee}
                  />
                </Grid>
                <Grid item sm={5} xs={12}>
                  <TextField
                    fullWidth
                    name='quantity'
                    label=' Quantité minimum de commande'
                    color='info'
                    type='number'
                    size='medium'
                    placeholder=' Quantité minimum de commande'
                    onBlur={handleBlur}
                    value={values.quantity}
                    onChange={handleChange}
                    error={!!touched.quantity && !!errors.quantity}
                    helperText={touched.quantity && errors.quantity}
                  />
                </Grid>
  
                <Grid item sm={5} xs={12}>
                  <TextField
                    fullWidth
                    name='price'
                    color='info'
                    size='medium'
                    label='Prix'
                    type='number'
                    placeholder=' Prix'
                    onBlur={handleBlur}
                    value={values.price}
                    onChange={handleChange}
                    error={!!touched.price && !!errors.price}
                    helperText={touched.price && errors.price}
                  />
                </Grid>
                <Grid item sm={5} xs={12}>
                  <TextField
                    fullWidth
                    name='special_price'
                    color='info'
                    size='medium'
                    label='prix spécial'
                    type='number'
                    placeholder=' prix spécial'
                    onBlur={handleBlur}
                    value={values.special_price}
                    onChange={handleChange}
                    error={!!touched.special_price && !!errors.special_price}
                    helperText={touched.special_price && errors.special_price}
                  />
                </Grid>
  
                <Grid item sm={5} xs={6}>
                  <TextField
                    fullWidth
                    name='stock'
                    color='info'
                    size='medium'
                    label=' Quantité totale'
                    type='number'
                    placeholder=' Quantité totale'
                    onBlur={handleBlur}
                    value={values.stock}
                    onChange={handleChange}
                    error={!!touched.stock && !!errors.stock}
                    helperText={touched.stock && errors.stock}
                  />
                </Grid>
                <Grid item sm={5} xs={6}>
                  <TextField
                    fullWidth
                    name='weight'
                    label=' Poids du produit'
                    color='info'
                    type='number'
                    size='medium'
                    placeholder=' Poids du produit'
                    onBlur={handleBlur}
                    value={values.weight}
                    onChange={handleChange}
                    error={!!touched.weight && !!errors.weight}
                    helperText={touched.weight && errors.weight}
                  />
                </Grid>
                <Grid item sm={5} xs={6}>
                  <TextField
                    fullWidth
                    name='garantie'
                    color='info'
                    size='medium'
                    onBlur={handleBlur}
                    value={values.garantie}
                    label='Période de garantie'
                    onChange={handleChange}
                    placeholder='Période de garantie'
                    error={!!touched.garantie && !!errors.garantie}
                    helperText={touched.garantie && errors.garantie}
                  />
                </Grid>
                <Grid item md={5} xs={6}>
                  <Autocomplete
                    fullWidth
                    disablePortal
                    options={countryList}
                    value={values.country}
                    getOptionLabel={option => option.label}
                    onChange={(_, value) => setFieldValue('country', value)}
                    renderInput={params => (
                      <TextField
                        color='info'
                        label='Made in'
                        variant='outlined'
                        placeholder='Made in'
                        error={!!touched.country && !!errors.country}
                        helperText={touched.country && errors.country}
                        {...params}
                        size='medium'
                      />
                    )}
                  />
                </Grid>
                <Grid item md={5} xs={12}>
                  <label style={{fontWeight:'bold'}}>Possibilité de retour</label>
                  <BazaarSwitch color='default'  sx={{marginLeft:'38%'}}/>
                </Grid>
                <Grid item md={5} xs={12}>
                  <label style={{fontWeight:'bold'}}> Possibilité d&apos;annulation</label>
                  <BazaarSwitch color='default' sx={{marginLeft:'33%'}} />
                </Grid>
                <Grid item md={5} xs={12}>
               
                  <label style={{fontWeight:'bold'}}>Paiement à la livraison</label>
                  
                  <BazaarSwitch color='default' sx={{marginLeft:'33%'}} />
                
                </Grid>
                <Grid item md={5} xs={12}  >
                  <label style={{fontWeight:'bold'}}>Produit fragile</label>
                  <BazaarSwitch color='default' sx={{marginLeft:'52%'}}/>
                </Grid>          
  
                <Grid item sm={6} xs={12}>
                  <Button variant='contained' color='info' type='submit'  style={{color:"white",backgroundColor:"#236C68"}}  sx={{  ml:30 ,height: 44, width: 210 ,sm:6 , xs:12, Radius:'5px'}}>
                 Enregister
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      // </Card>
    )
  }
  export default Informations
  