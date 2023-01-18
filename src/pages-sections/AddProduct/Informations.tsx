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
import styled from 'styled-components'
import { Spacer } from 'ui';
import { Assign, ObjectShape } from 'yup/lib/object'
import makeStyles from "@material-ui/core/styles/makeStyles";

const validationSchema = yup.object().shape({
  nomProduit: yup.string().required("Ce champ est obligatoire"),
  guarantee: yup.string().required("Ce champ est obligatoire"),
  // country: yup.string().required("Ce champ est obligatoire"),
  quantity: yup.string().required("Ce champ est obligatoire"),
  price: yup.string().required("Ce champ est obligatoire"),
  specialPrice: yup.string().required("Ce champ est obligatoire"),
  stock: yup.string().required("Ce champ est obligatoire"),

});

export interface InformationsProps {
  onClick: () => void 
}

export function Informations({onClick}:InformationsProps) {
  const initialValues = {
    nomProduit: "",
    guarantee: "",
   country: null ,
    quantity: "",
    price: "",
    specialPrice: "",
    stock: "",
    weight: "0",
  };

  const handleFormSubmit = async (values) => {
    console.log(values);
  };
  const StyledButtonSwitch1 = styled.div`
  justify-content: space-between;
  margin: 30px 0px 0px 45px;
  
  @media screen and (min-width: 768px) {
    display: flex;
  }

  `
  const StyledButtonSwitch2 = styled.div`
  justify-content: space-between;
  margin: 10px 0px 0px 45px;
  
  @media screen and (min-width: 768px) {
    display: flex;
  }

  `
  


  return (

    // <Card sx={{ p: 6 }}>
    <Formik
      onSubmit={onClick}
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
          <Grid container spacing={3} paddingTop={3} paddingLeft={20} paddingRight={20}>
            <Grid item sm={5} xs={6}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    color: 'black'
                  }
                }}
                fullWidth
                required
                name='nomProduit'
                label='Nom du produit'
                size='medium'
                placeholder='Nom du produit'
                value={values.nomProduit}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.nomProduit && !!errors.nomProduit}
                helperText={touched.nomProduit && errors.nomProduit}
              />
            </Grid>
           
               <Grid item md={5} xs={6}  display="flex">
                <Autocomplete
                  sx={{
                    "& .MuiInputBase-root": {
                      color: 'black'
                    }
                  }}
                  fullWidth
                  disablePortal
                  options={countryList}
                  value={values.country}
                  getOptionLabel={option => option.label}
                  onChange={(_, value) => setFieldValue('country', value)}
                  renderInput={params => (
                    <TextField
                      sx={{
                        "& .MuiInputBase-root": {
                          color: 'black'
                        }
                      }}
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
          
            <Grid item sm={5} xs={12}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    color: 'black'
                  }
                }}
                fullWidth
                name='guarantee'

                required
                size='medium'
                label=' période de garantie (ans)'
                type='number'
                placeholder=' période de garantie (ans)'
                onBlur={handleBlur}
                value={values.guarantee}
                onChange={handleChange}
                error={!!touched.guarantee && !!errors.guarantee}
                helperText={touched.guarantee && errors.guarantee}
              />
            </Grid>
            <Grid item sm={5} xs={12}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    color: 'black'
                  }
                }}
                fullWidth
                required
                name='quantity'
                label=' Quantité minimum de commande '

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
                sx={{
                  "& .MuiInputBase-root": {
                    color: 'black'
                  }
                }}
                fullWidth
                name='price'

                required
                size='medium'
                label='Prix (dinar)'
                type='number'
                placeholder=' Prix (dinar)'
                onBlur={handleBlur}
                value={values.price}
                onChange={handleChange}
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
              />
            </Grid>
            <Grid item sm={5} xs={12}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    color: 'black'
                  }
                }}
                fullWidth
                required
                name='specialPrice'

                size='medium'
                label='prix spécial (dinar)'
                type='number'
                placeholder=' prix spécial (dinar)'
                onBlur={handleBlur}
                value={values.specialPrice}
                onChange={handleChange}
                error={!!touched.specialPrice && !!errors.specialPrice}
                helperText={touched.specialPrice && errors.specialPrice}
              />
            </Grid>

            <Grid item sm={5} xs={6}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    color: 'black'
                  }
                }}
                required
                fullWidth
                name='stock'

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
                sx={{
                  "& .MuiInputBase-root": {
                    color: 'black'
                  }
                }}
                fullWidth
                required
                name='weight'
                label=' Poids du produit (en kg)'

                type='number'
                size='medium'
                placeholder=' Poids du produit (en kg)'
                onBlur={handleBlur}
                value={values.weight}
                onChange={handleChange}
                error={!!touched.weight && !!errors.weight}
                helperText={touched.weight && errors.weight}
              />
            </Grid>
             
              <Grid item sm={10} xs={6} >
              <Tags />
            </Grid>
           
              <Grid container spacing={3}  paddingTop={2}>
             <StyledButtonSwitch1 >
         
              <label style={{ fontWeight: 'bold' }}>Possibilité de retour</label>
              <BazaarSwitch color='default'/>
   <Spacer width={78.9}/>
          
              <label style={{ fontWeight: 'bold' }}> Possibilité d&apos;annulation</label>
              
               <BazaarSwitch color='default' />
            </StyledButtonSwitch1>

            <StyledButtonSwitch2>
              <label style={{ fontWeight: 'bold' }}>Paiement à la livraison</label>
              <BazaarSwitch color='default' />
              <Spacer width={60}/>
              <label style={{ fontWeight: 'bold' }}>Produit fragile</label>
              <BazaarSwitch color='default'  />
            </StyledButtonSwitch2> 
            </Grid>
           
           <Grid item sm={6} xs={12}>
              <Button variant='contained' type='submit' style={{ color: "white", backgroundColor: "#236C68" }} sx={{ml: '60%',  height: 44, width: 210, sm: 6, xs: 12, Radius: '5px' }}>
              Suivant
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
