import { Box, Button, Grid, TextField } from '@mui/material'
import DropZone from 'components/DropZone'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Formik } from 'formik'
import React, { FC, useState } from 'react'
import * as yup from 'yup'
import styled from 'styled-components'

const Styledbtn = styled.div`
  display: inline-block;
  padding: 8px 16px;
  margin-left: 91%;
`

// form field validation
const validationSchema = yup.object().shape({
  nom_vendeur: yup.string().required('ce champ est obligatoire'),
  prenom_vendeur: yup.string().required('ce champ est obligatoire'),
  email: yup.string().required('ce champ est obligatoire'),
  mot_passe: yup.string().required('ce champ est obligatoire'),
  phone: yup.number().required('ce champ est obligatoire'),
  cin: yup.number().required('ce champ est obligatoire')
})

const SellerInfo: FC = () => {
  const initialValues = {
    nom_vendeur: '',
    prenom_vendeur: '',
    email: '',
    mot_passe: '',
    phone: '',
    cin: ''
  }
  const handleFormSubmit = async values => {
    console.log(values)
  }
  interface FileType extends File {
    preview: string
  }
const [newFiles, setNewFiles] = useState<FileType[]>([])
  const deleteNewImage = (name: string) => {
    setNewFiles(state => state.filter(item => item.name !== name))
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
              <RadioGroup aria-required row name='Type'>
                <FormControlLabel
                  style={{ color: 'black' }}
                  value={'Entreprise'}
                  control={
                    <Radio required={true} style={{ color: '#236C68' }} />
                  }
                  label='Entreprise'
                />
                <FormControlLabel
                  style={{ color: 'black' }}
                  value={'Particulier'}
                  control={
                    <Radio required={true} style={{ color: '#236C68' }} />
                  }
                  label='Particulier'
                />
              </RadioGroup>
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                  sx={{
                    "& .MuiInputBase-root": {
                        color: 'black'
                    }}}
                fullWidth
                color='info'
                size='medium'
                name='nom_vendeur'
                label='Nom du vendeur '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nom_vendeur}
                error={!!touched.nom_vendeur && !!errors.nom_vendeur}
                helperText={touched.nom_vendeur && errors.nom_vendeur}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                 sx={{
                  "& .MuiInputBase-root": {
                      color: 'black'
                  }}}
                fullWidth
                color='info'
                size='medium'
                onBlur={handleBlur}
                onChange={handleChange}
                name='prenom_vendeur'
                label='Prénom du vendeur'
                value={values.prenom_vendeur}
                error={!!touched.prenom_vendeur && !!errors.prenom_vendeur}
                helperText={touched.prenom_vendeur && errors.prenom_vendeur}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                      color: 'black'
                  }}}
                fullWidth
                color='info'
                size='medium'
                type='email'
                name='email'
                label='Email '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                      color: 'black'
                  }}}
                fullWidth
                color='info'
                size='medium'
                type='number'
                name='phone'
                label='Téléphone '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
              />
            </Grid>
            <Grid item  xs={12}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                      color: 'black'
                  }}}
                fullWidth
                color='info'
                size='medium'
                type='password'
                name='mot_passe'
                label='Mot de passe '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mot_passe}
                error={!!touched.mot_passe && !!errors.mot_passe}
                helperText={touched.mot_passe && errors.mot_passe}
              />
            </Grid>
         

            <Grid item xs={12}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                      color: 'black'
                  }}}
                fullWidth
                color='info'
                size='medium'
                type='number'
                name='cin'
                label='CIN '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cin}
                error={!!touched.cin && !!errors.cin}
                helperText={touched.cin && errors.cin}
              />
            </Grid>
            <div style={{ marginLeft: '2%', width: '100%', marginTop: '2%' }}>
              <DropZone
                onChange={files => {
                  const uploadFiles = files.map(file =>
                    Object.assign(file, { preview: URL.createObjectURL(file) })
                  )
                  setNewFiles(uploadFiles)
                }}
              />
            </div>
          </Grid>
          <Styledbtn>
            <Button
              type='submit'
              color='info'
              variant='contained'
              style={{
                color: 'white',
                backgroundColor: '#236C68',
                maxWidth: '120px'
              }}
            >
              Valider
            </Button>
          </Styledbtn>
        </form>
      )}
    </Formik>
  )
}

export default SellerInfo
