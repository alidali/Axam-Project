import { Box, Button, Grid, TextField } from '@mui/material'
import DropZone from 'components/DropZone'
import { useState, useEffect } from 'react'
import { Formik } from 'formik'
import React, { FC } from 'react'
import * as yup from 'yup'
import styled from 'styled-components'

const Styledbtn = styled.div`
  display: inline-block;

  padding: 8px 16px;
  margin-left: 91%;
`
// form field validation
const validationSchema = yup.object().shape({
  nom_boutique: yup.string().required('ce champ est obligatoire'),
  raison_social: yup.string().required('ce champ est obligatoire'),
  pays: yup.string().required('ce champ est obligatoire'),
  gouvernorat: yup.string().required('ce champ est obligatoire'),
  delegation: yup.string().required('ce champ est obligatoire'),
  ville: yup.string().required('ce champ est obligatoire'),
  Addresse: yup.string().required('ce champ est obligatoire'),
  telephone_fixe: yup.number().required('ce champ est obligatoire'),
  codePostal: yup.number().required('ce champ est obligatoire'),
  rne: yup.string().required('ce champ est obligatoire'),
  matricule_fiscale: yup.string().required('ce champ est obligatoire')
})

const ShopInfo: FC = () => {
  const initialValues = {
    raison_social: '',
    nom_boutique: '',
    pays: '',
    gouvernorat: '',
    delegation: '',
    ville: '',
    Addresse: '',
    telephone_fixe: '',
    codePostal: '',
    rne: '',
    matriculeFiscale: ''
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
              {/* <H4>Top Bar Left Content</H4> */}
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
                name='nom_boutique'
                label='Nom de la boutique '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nom_boutique}
                error={!!touched.nom_boutique && !!errors.nom_boutique}
                helperText={touched.nom_boutique && errors.nom_boutique}
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
                name='raison_social'
                label='Raison Social '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.raison_social}
                error={!!touched.raison_social && !!errors.raison_social}
                helperText={touched.raison_social && errors.raison_social}
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
                name='pays'
                label='Pays'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pays}
                error={!!touched.pays && !!errors.pays}
                helperText={touched.pays && errors.pays}
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
                name='gouvernorat'
                label='Gouvernorat'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gouvernorat}
                error={!!touched.gouvernorat && !!errors.gouvernorat}
                helperText={touched.gouvernorat && errors.gouvernorat}
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
                name='delegation'
                label='Délégation '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.delegation}
                error={!!touched.delegation && !!errors.delegation}
                helperText={touched.delegation && errors.delegation}
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
                name='ville'
                label='Ville '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ville}
                error={!!touched.ville && !!errors.ville}
                helperText={touched.ville && errors.ville}
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
                name='Addresse'
                label='Addresse'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Addresse}
                error={!!touched.Addresse && !!errors.Addresse}
                helperText={touched.Addresse && errors.Addresse}
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
                type='number'
                size='medium'
                name='telephone_fixe'
                label='Télephone fixe'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.telephone_fixe}
                error={!!touched.telephone_fixe && !!errors.telephone_fixe}
                helperText={touched.telephone_fixe && errors.telephone_fixe}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                      color: 'black'
                  }}}
                fullWidth
                type='number'
                color='info'
                size='medium'
                onBlur={handleBlur}
                onChange={handleChange}
                name='codePostal'
                label=' Code postal'
                value={values.codePostal}
                error={!!touched.codePostal && !!errors.codePostal}
                helperText={touched.codePostal && errors.codePostal}
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
                onBlur={handleBlur}
                onChange={handleChange}
                name='matricule_fiscale'
                label='matricule Fiscale'
                value={values.matricule_fiscale}
                error={
                  !!touched.matricule_fiscale && !!errors.matricule_fiscale
                }
                helperText={
                  touched.matricule_fiscale && errors.matricule_fiscale
                }
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
            <Grid item xs={12}>
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
                name='rne'
                label='RNE'
                value={values.rne}
                error={!!touched.rne && !!errors.rne}
                helperText={touched.rne && errors.rne}
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

export default ShopInfo
