import {
 
  TextField,Box
 
} from '@mui/material'
import { Clear } from "@mui/icons-material";
import DropZone from "components/DropZone";
import { FlexBox } from 'components/flex-box'

import NextImage from "next/image";
import BazaarButton from 'components/BazaarButton'
import { useFormik } from 'formik'
import React, { useCallback, useState, useContext } from 'react'
import * as yup from 'yup'
import { GreenButton, Spacer } from 'ui'
import { multiStepContext } from 'StepContext'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
//import DropZone from "components/DropZone";
import styled from 'styled-components'


const StyledClear = styled(Clear)`
top: 5,
right: 5,
fontSize: 14,
color: "red",
cursor: "pointer",
position: "absolute",
`
const UploadBox = styled(Box)`
width: 170,
height: "auto",
overflow: "hidden",
borderRadius: "8px",
position: "relative",
`

interface FileType extends File {
  preview: string;
}


const StyledRaison = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const StyledCodePostal = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
const StyledDropzone = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  widh
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const StyledPays = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
const StyledPhone = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const StyledMatricule = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const StyledRne = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const Styledbtn = styled.div`
  display: inline-block;
  padding: 8px 16px;
  margin-left: 30px;
`

const ShopSignup = () => {
  const handleFormSubmit = async (values: any) => {
    console.log(values)
  }

  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: formSchema
  })
  interface FileType extends File {
    preview: string;
  }
  
  const [newFiles, setNewFiles] = useState<FileType[]>([]);
  const deleteNewImage = (name: string) => {
    setNewFiles((state) => state.filter((item) => item.name !== name));
  };

  const Context = useContext(multiStepContext)
  console.log('step', Context.Step)

  return (
    <form onSubmit={() => Context.setStep(3)}>
      <StyledRaison>
        <TextField
          fullWidth
          required
          name='NomBoutique'
          size='medium'
          label='Nom Boutique'
          variant='outlined'
          onBlur={handleBlur}
          // InputProps={{
          //   endAdornment: (
          //     <ReportProblemIcon  fontSize="small" color='inherit' sx={{ mr: 1 }} />
          //   ),
          // }}
          value={Context.userData['NomBoutique']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              NomBoutique: e.target.value
            })
          }
          placeholder='Nom Boutique'
          error={!!touched.NomBoutique && !!errors.NomBoutique}
          helperText={touched.NomBoutique && errors.NomBoutique}
        />

        <Spacer width={20} />

        <TextField
          fullWidth
          required
          name='Raisonsocial'
          size='medium'
          label='Raison social'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['RaisonSocial']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              RaisonSocial: e.target.value
            })
          }
          placeholder='Raison social'
          error={!!touched.RaisonSocial && !!errors.RaisonSocial}
          helperText={touched.RaisonSocial && errors.RaisonSocial}
        />
      </StyledRaison>
      {/* <Grid item xs={10} height={80}>
       
       <H6 ml={1}  borderColor="grey.900" fontFamily={'open Sans'} fontSize ={12} color={'inherit'} >
         <ReportProblemIcon fontSize="small" color='inherit' sx={{ mr: 1 }} />
         Les consommateurs, vous reconnaitrons sur Axam à travers votre nom de Boutique.
         Il est strictement interdit d&apos;utiliser un nom de marque déposée sans l&apos;autorisation 
         de son propriétaire.
         </H6>
    
    </Grid> */}
      <StyledPays>
        <TextField
          fullWidth
          required
          name='pays'
          size='medium'
          label='Pays'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['pays']}
          onChange={e =>
            Context.setUserData({ ...Context.userData, pays: e.target.value })
          }
          placeholder='Pays'
          error={!!touched.pays && !!errors.pays}
          helperText={touched.pays && errors.pays}
        />
        <Spacer width={20} />
        <TextField
          fullWidth
          required
          name='gouvernorat'
          size='medium'
          label='Gouvernorat'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['gouvernorat']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              gouvernorat: e.target.value
            })
          }
          placeholder='Gouvernorat'
          error={!!touched.gouvernorat && !!errors.gouvernorat}
          helperText={touched.gouvernorat && errors.gouvernorat}
        />
        <Spacer width={20} />
        <TextField
          fullWidth
          required
          name='delegation'
          size='medium'
          label='Délégation '
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['delegation']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              delegation: e.target.value
            })
          }
          placeholder='Délégation '
          error={!!touched.delegation && !!errors.delegation}
          helperText={touched.delegation && errors.delegation}
        />

        <Spacer width={20} />
      </StyledPays>

      <StyledCodePostal>
        <TextField
          fullWidth
          required
          name='ville'
          size='medium'
          label='Ville'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['ville']}
          onChange={e =>
            Context.setUserData({ ...Context.userData, ville: e.target.value })
          }
          placeholder='ville'
          error={!!touched.ville && !!errors.ville}
          helperText={touched.ville && errors.ville}
        />
        <Spacer width={20} />

        <TextField
          fullWidth
          required
          name='Addresse'
          size='medium'
          label='Addresse'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['Addresse']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              Addresse: e.target.value
            })
          }
          placeholder='Addresse'
          error={!!touched.Addresse && !!errors.Addresse}
          helperText={touched.Addresse && errors.Addresse}
        />
      </StyledCodePostal>
      <StyledPhone>
        <TextField
          fullWidth
          required
          name='telephoneFixe'
          size='medium'
          label='Télèphone Fixe'
          type='number'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['TelephoneFixe']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              TelephoneFixe: e.target.value
            })
          }
          placeholder='Télèphone Fixe'
          error={!!touched.telephoneFixe && !!errors.telephoneFixe}
          helperText={touched.telephoneFixe && errors.telephoneFixe}
        />
        <Spacer width={20} />
        <TextField
          fullWidth
          required
          name='CodePostal'
          size='medium'
          label='Code Postal'
          type='number'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['CodePostal']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              CodePostal: e.target.value
            })
          }
          placeholder='Code Postal'
          error={!!touched.CodePostal && !!errors.CodePostal}
          helperText={touched.CodePostal && errors.CodePostal}
        />
      </StyledPhone>

      <StyledMatricule>
        <TextField
          fullWidth
          required
          name='MatriculeFiscale'
          size='medium'
          label='Matricule Fiscale'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['MatriculeFiscale']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              MatriculeFiscale: e.target.value
            })
          }
          placeholder='Matricule Fiscale'
          error={!!touched.matriculeFiscale && !!errors.matriculeFiscale}
          helperText={touched.matriculeFiscale && errors.matriculeFiscale}
        />
      </StyledMatricule>

      <StyledRne>
        <TextField
          fullWidth
          required
          name='Rne'
          size='medium'
          label='RNE'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['Rne']}
          onChange={e =>
            Context.setUserData({ ...Context.userData, Rne: e.target.value })
          }
          placeholder='RNE'
          error={!!touched.RNE && !!errors.RNE}
          helperText={touched.RNE && errors.RNE}
        />
      </StyledRne>

      <StyledDropzone>
     
     <DropZone
 
       onChange={(files) => {
         const uploadFiles = files.map((file) =>
           Object.assign(file, { preview: URL.createObjectURL(file) })
         );
         setNewFiles(uploadFiles);
       }}
     />

     <FlexBox gap={1} mt={1}>
       {newFiles.map((file, index) => (
         <UploadBox key={index}>
           <NextImage
             width={240}
             height={100}
             objectFit="cover"
             src={file.preview}
             layout="responsive"
           />
           <StyledClear onClick={() => deleteNewImage(file.name)} />
         </UploadBox>
       ))}
     </FlexBox>
  
     </StyledDropzone>

      <Styledbtn>
        <BazaarButton
          fullWidth
          type='submit'
          color='secondary'
          variant='contained'
          onClick={() => Context.setStep(1)}
        >
          Back
        </BazaarButton>
      </Styledbtn>
      <Styledbtn>
        <BazaarButton
          fullWidth
          onClick={() => Context.setStep(3)}
          color='primary'
          variant='contained'
        >
          Next
        </BazaarButton>
      </Styledbtn>
    </form>
  )
}

const initialValues = {
  raisonsocial: '',
  NomBoutique: '',
  pays: '',
  gouvernorat: '',
  delegation: '',
  ville: '',
  Addresse: '',
  telephoneFixe: '',
  codePostal: '',
  rne: '',
  matriculeFiscale: ''
}
const formSchema = yup.object().shape({
  NomBoutique: yup.string().required('required'),
  raisonsocial: yup.string().required('required'),
  pays: yup.string().required('required'),
  gouvernorat: yup.string().required('required'),
  delegation: yup.string().required('required'),
  ville: yup.string().required('required'),
  Addresse: yup.string().required('required'),
  TelephoneFixe: yup.number().required('required'),
  codePostal: yup.number().required('required'),
  rne: yup.string().required('required'),
  matriculeFiscale: yup.string().required('required')
})
export default ShopSignup