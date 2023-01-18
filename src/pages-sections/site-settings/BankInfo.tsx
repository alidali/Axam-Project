import { Box, Button, Grid, TextField } from '@mui/material'
import DropZone from 'components/DropZone'
import { useState, useEffect } from 'react'
import { Formik } from 'formik'
import MenuItem from '@mui/material/MenuItem'
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
  titulaireDuCompte: yup.string().required('ce champ est obligatoire'),
  banque: yup.string().required('ce champ est obligatoire'),
  agence: yup
    .string()
    .required('ce champ est obligatoire')
    .required('ce champ est obligatoire'),
  code_swift: yup.string().required('ce champ est obligatoire'),
  iban: yup.number().required('ce champ est obligatoire'),
  code_bancaire: yup.number().required('ce champ est obligatoire'),
  rib: yup.number().required('ce champ est obligatoire')
})

const BankInfo: FC = () => {
  const initialValues = {
    titulaireDuCompte: '',
    cin: '',
    rib: '',
    banque: '',
    agence: '',
    code_swift: '',
    iban: '',
    code_bancaire: ''
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
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                      color: 'black'
                  }}}
                fullWidth
                color='info'
                size='medium'
                name='titulaireDuCompte'
                label='Titulaire du compte '
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.titulaireDuCompte}
                error={
                  !!touched.titulaireDuCompte && !!errors.titulaireDuCompte
                }
                helperText={
                  touched.titulaireDuCompte && errors.titulaireDuCompte
                }
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
                name='rib'
                label='Rib'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rib}
                error={!!touched.rib && !!errors.rib}
                helperText={touched.rib && errors.rib}
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
            <Grid item md={6} xs={12}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                      color: 'black'
                  }}}
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
                name='agence'
                label='Agence'
                value={values.agence}
                error={!!touched.agence && !!errors.agence}
                helperText={touched.agence && errors.agence}
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
                name='code_bancaire'
                label='Code bancaire'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.code_bancaire}
                error={!!touched.code_bancaire && !!errors.code_bancaire}
                helperText={touched.code_bancaire && errors.code_bancaire}
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
                name='iban'
                label='Iban'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.iban}
                error={!!touched.iban && !!errors.iban}
                helperText={touched.iban && errors.iban}
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
                name='code_swift'
                label='Code swift'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.code_swift}
                error={!!touched.code_swift && !!errors.code_swift}
                helperText={touched.code_swift && errors.code_swift}
              />
            </Grid>
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
export default BankInfo
