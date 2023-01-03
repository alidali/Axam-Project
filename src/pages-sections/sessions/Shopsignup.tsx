import {

  TextField, Box

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

  const [newFilesTaxName, setNewFilesTaxName] = useState<FileType[]>([]);
  const [newFilesRne, setNewFilesRne] = useState<FileType[]>([]);
  const deleteNewImageTaxName = (name: string) => {
    setNewFilesTaxName((state) => state.filter((item) => item.name !== name));
  };
  const deleteNewImageRne = (name: string) => {
    setNewFilesRne((state) => state.filter((item) => item.name !== name));
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
          value={Context.userData['nameOfShop']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              nameOfShop: e.target.value
            })
          }
          placeholder='Nom Boutique'
          error={!!touched.nameOfShop && !!errors.nameOfShop}
          helperText={touched.nameOfShop && errors.nameOfShop}
        />

        <Spacer width={20} />

        <TextField
          fullWidth
          required
          name='raisonSocial'
          size='medium'
          label='Raison social'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['raisonSocial']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              raisonSocial: e.target.value
            })
          }
          placeholder='Raison social'
          error={!!touched.raisonSocial && !!errors.raisonSocial}
          helperText={touched.raisonSocial && errors.raisonSocial}
        />
      </StyledRaison>
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
          name='address'
          size='medium'
          label='address'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['address']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              address: e.target.value
            })
          }
          placeholder='Addresse'
          error={!!touched.address && !!errors.address}
          helperText={touched.address && errors.address}
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
          value={Context.userData['telephoneFixe']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              telephoneFixe: e.target.value
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
          name='codePostal'
          size='medium'
          label='Code Postal'
          type='number'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['codePostal']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              codePostal: e.target.value
            })
          }
          placeholder='Code Postal'
          error={!!touched.codePostal && !!errors.codePostal}
          helperText={touched.codePostal && errors.codePostal}
        />
      </StyledPhone>

      <StyledMatricule>
        <TextField
          fullWidth
          required
          name='matriculeFiscale'
          size='medium'
          label='Matricule Fiscale'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['matriculeFiscale']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              matriculeFiscale: e.target.value
            })
          }
          placeholder='Matricule Fiscale'
          error={!!touched.matriculeFiscale && !!errors.matriculeFiscale}
          helperText={touched.matriculeFiscale && errors.matriculeFiscale}
        />
      </StyledMatricule>
      <StyledDropzone>

        <DropZone

          onChange={(files) => {
            const uploadFiles = files.map((file) =>
              Object.assign(file, { preview: URL.createObjectURL(file) })
            );
            setNewFilesTaxName(uploadFiles);
          }}
        />

        <FlexBox gap={0} mt={1}>
          {newFilesTaxName.map((file, index) => (
            <UploadBox key={index}>
              <NextImage
                width={240}
                height={100}
                objectFit="cover"
                src={file.preview}
                layout="responsive"
              />
              <StyledClear onClick={() => deleteNewImageTaxName(file.name)} />
            </UploadBox>
          ))}
        </FlexBox>

      </StyledDropzone>


      <StyledRne>
        <TextField
          fullWidth
          required
          name='rne'
          size='medium'
          label='RNE'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['rne']}
          onChange={e =>
            Context.setUserData({ ...Context.userData, rne: e.target.value })
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
            setNewFilesRne(uploadFiles);
          }}
        />

        <FlexBox gap={1} mt={1}>
          {newFilesRne.map((file, index) => (
            <UploadBox key={index}>
              <NextImage
                width={240}
                height={100}
                objectFit="cover"
                src={file.preview}
                layout="responsive"
              />
              <StyledClear onClick={() => deleteNewImageRne(file.name)} />
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
  nameOfShop: '',
  raisonSocial: '',
  pays: '',
  gouvernorat: '',
  ville: '',
  address: '',
  telephoneFixe: '',
  codePostal: '',
  matriculeFiscale: '',
  tax_name_proof: '',
  rne: '',
  rne_proof: '',
}
const formSchema = yup.object().shape({
  nameOfShop: yup.string().required('required'),
  RaisonSocial: yup.string().required('required'),
  Pays: yup.string().required('required'),
  Gouvernorat: yup.string().required('required'),
  Ville: yup.string().required('required'),
  Addresse: yup.string().required('required'),
  TelephoneFixe: yup.number().required('required'),
  CodePostal: yup.number().required('required'),
  rne: yup.string().required('required'),
  MatriculeFiscale: yup.string().required('required')
})
export default ShopSignup