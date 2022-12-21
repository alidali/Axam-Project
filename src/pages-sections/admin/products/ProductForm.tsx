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
import DropZone from 'components/DropZone'
import Tags from 'components/Tags'
import SelectCategory from './SelectCategory'

import Autocomplete from '@mui/material/Autocomplete'
import countryList from 'data/countryList'
// import ScrolllistCategory from './ScrolllistCategory'
import BazaarSwitch from 'components/BazaarSwitch'
import { Formik } from 'formik'
import React, { FC } from 'react'
import * as yup from 'yup'
import { Assign, ObjectShape } from 'yup/lib/object'
import Description from 'components/Description'

// ================================================================
type ProductFormProps = {
  initialValues: any
  handleFormSubmit: (values: any) => void
  validationSchema: yup.ObjectSchema<Assign<ObjectShape, any>>
}
// ================================================================

const ProductForm: FC<ProductFormProps> = props => {
  const { initialValues, validationSchema, handleFormSubmit } = props

  return (
    <Card sx={{ p: 6 }}>
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
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name='name'
                  label='Nom du produit'
                  color='info'
                  size='medium'
                  placeholder='Nom du produit'
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Tags />
              </Grid>

              {/* <Grid item xs={12}>
              <DropZone
            onChange={(files) => console.log(files)}
            title="Main Banner (1920 x 360) *"
            imageSize="We had to limit height to maintian consistancy. Some device both side of the banner might cropped for height limitation."
          />
              </Grid> */}

              <Grid item sm={6} xs={12}>
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
              <Grid item sm={6} xs={12}>
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

              <Grid item sm={6} xs={12}>
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
              <Grid item sm={6} xs={12}>
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

              <Grid item sm={6} xs={12}>
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
              <Grid item sm={6} xs={12}>
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
              <Grid item sm={6} xs={12}>
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
              <Grid item md={6} xs={12}>
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
              <Grid item md={3} xs={12}>
                <label>Possibilité de retour</label>
                <BazaarSwitch color='info' />
              </Grid>
              <Grid item md={3} xs={12}>
                <label> Possibilité d'annulation</label>
                <BazaarSwitch color='info' />
              </Grid>
              <Grid item md={3} xs={12}>
                <label>Paiement à la livraison</label>
                <BazaarSwitch color='info' />
              </Grid>
              <Grid item md={3} xs={12}>
                <label>Produit fragile</label>
                <BazaarSwitch color='info' />
              </Grid>

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
              <Grid item sm={12}>
                <H4> Liste des catégories</H4>

                <SelectCategory />
                {/* <ScrolllistCategory /> */}
              </Grid>
              <Grid item xs={10}>
                <H6
                  borderColor='grey.900'
                  fontFamily={'open Sans'}
                  fontSize={12}
                  color={'inherit'}
                >
                  Dans le cas où les catégories présentées ne correspondant pas
                  à notre catégorie de produits veuillez proposer une autre
                  catégorie
                </H6>
              </Grid>
              <Grid item xs={3.5}>
                <TextField
                  fullWidth
                  name='add_category'
                  label='Ajout categorie'
                  color='info'
                  size='medium'
                  variant='outlined'
                  placeholder='Ajout categorie'
                  value={values.add_categorie}
                  onBlur={handleBlur}
                  error={!!touched.add_category && !!errors.add_category}
                  helperText={touched.add_category && errors.add_category}
                  InputProps={{
                    startAdornment: (
                      <AddBoxIcon
                        fontSize='small'
                        color='inherit'
                        sx={{ mr: 1 }}
                      />
                    )
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant='contained' color='info' type='submit'>
                  Valider
                </Button>
              </Grid>

              <Grid item sm={6} xs={12}>
                <Button variant='contained' color='info' type='submit'>
                  Save product
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  )
}
export default ProductForm
