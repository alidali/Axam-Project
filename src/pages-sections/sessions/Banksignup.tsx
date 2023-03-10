import { MenuItem, TextField, Box } from '@mui/material'
import NextImage from "next/image";
import BazaarButton from 'components/BazaarButton'
import { useFormik } from 'formik'
import React, { useCallback, useState, useContext } from 'react'
import * as yup from 'yup'
import EyeToggleButton from './EyeToggleButton'
//import { Wrapper } from "./Login";
import { multiStepContext } from 'StepContext'
 import DropZone from "components/DropZone";
import { Spacer } from 'ui'
import styled from 'styled-components'
import { Clear } from "@mui/icons-material";
import { FlexBox } from 'components/flex-box'

const StyledClear = styled(Clear)`
top: 5,
right: 5,
fontSize: 14,
color: "red",
cursor: "pointer",
position: "absolute",
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
const UploadBox = styled(Box)`
      width: 170,
      height: "auto",
      overflow: "hidden",
      borderRadius: "8px",
      position: "relative",
      `


const StyledBank = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
const Styledbtn = styled.div`
display: inline-block;
padding: 4px 48px;
float:right

`
const BankSignup = () => {
  const handleFormSubmit = async (values: any) => {
    console.log(values)
  }
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: formSchema2
  })
  interface FileType extends File {
    preview: string;
  }
  
  const [newFiles, setNewFiles] = useState<FileType[]>([]);
  const deleteNewImage = (name: string) => {
    setNewFiles((state) => state.filter((item) => item.name !== name));
  };
  const Context = useContext(multiStepContext)
  return (
    <form onSubmit={() => Context.setStep(4)}>
      <StyledBank>
        <TextField
          fullWidth
          required
          name='titulaireDuCompte'
          type='string'
          size='medium'
          label='Titulaire du compte'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['titulaireDuCompte']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              titulaireDuCompte: e.target.value
            })
          }
          placeholder='titulaireDuCompte'
          error={!!touched.titulaireDuCompte && !!errors.titulaireDuCompte}
          helperText={touched.titulaireDuCompte && errors.titulaireDuCompte}
        />
      </StyledBank>

      <StyledBank>
        <TextField
          fullWidth
          required
          name='Rib'
          type='number'
          size='medium'
          label='RIB'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['Rib']}
          onChange={e =>
            Context.setUserData({ ...Context.userData, Rib: e.target.value })
          }
          placeholder='RIB'
          error={!!touched.Rib && !!errors.Rib}
          helperText={touched.Rib && errors.Rib}
        />
      </StyledBank>
      <StyledDropzone>
     
     <DropZone
 
       onChange={(files) => {
         const uploadFiles = files.map((file) =>
           Object.assign(file, { preview: URL.createObjectURL(file) })
         );
         setNewFiles(uploadFiles);
       }}
     />

     <FlexBox gap={1} mt={2}>
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
      <StyledBank>
        <TextField
          select
          fullWidth
          required
          color='info'
          size='medium'
          name='Banque'
          placeholder='Banque'
          label='Banque'
          defaultValue={
            Context.userData['Banque'] ? Context.userData['Banque'] : 'Banque'
          }
          onChange={e =>
            Context.setUserData({ ...Context.userData, Banque: e.target.value })
          }
        >
          <MenuItem value='Banque Internationale Arabe de Tunisie ??BIAT??'>
            {' '}
            Banque Internationale Arabe de Tunisie ?? BIAT ??
          </MenuItem>
          <MenuItem value='Banque de Tunisie ??BT??'>
            Banque de Tunisie ??BT??
          </MenuItem>
          <MenuItem value='Soci??t?? Tunisienne de Banque ??STB??'>
            Soci??t?? Tunisienne de Banque ??STB??
          </MenuItem>
          <MenuItem value='Banque Nationale Agricole ??BNA??'>
            Banque Nationale Agricole ??BNA??
          </MenuItem>
          <MenuItem value='Union Internationale de Banque ??UIB??'>
            Union Internationale de Banque ?? UIB ??
          </MenuItem>
          <MenuItem value='Union Bancaire de Commerce et d???Industrie ??UBCI??'>
            Union Bancaire de Commerce et d???Industrie ??UBCI??
          </MenuItem>
          <MenuItem value='Banque Franco Tunisienne ??BFT??'>
            Banque Franco Tunisienne ??BFT??
          </MenuItem>
          <MenuItem value='Banque Tuniso Koweitienne ??BTK??'>
            Banque Tuniso Koweitienne ??BTK??
          </MenuItem>
          <MenuItem value='Banque Zitouna'>Banque Zitouna</MenuItem>
          <MenuItem value='Banque Tuniso-Libyenne ??BTL??'>
            Banque Tuniso-Libyenne ??BTL??
          </MenuItem>
          <MenuItem value='Banque de Tunisie et des Emirats ??BTE??'>
            Banque de Tunisie et des Emirats ??BTE??
          </MenuItem>
          <MenuItem value='Banque Tunisienne de Solidarit?? ??BTS??'>
            Banque Tunisienne de Solidarit?? ??BTS??
          </MenuItem>
          <MenuItem value='Banque de l???Habitat ??BH??'>
            Banque de l???Habitat ??BH??
          </MenuItem>
          <MenuItem value='Banque de Financement des Petites et Moyennes entreprises ??BFPME??'>
            Banque de Financement des Petites et Moyennes entreprises ??BFPME??
          </MenuItem>
          <MenuItem value='Banque Attijari'>Banque Attijari </MenuItem>
          <MenuItem value='Banque Amen'>Banque Amen</MenuItem>
          <MenuItem value='Banque Al Wifak '>Banque Al Wifak </MenuItem>
          <MenuItem value='Banque Al Baraka  '>Banque Al Baraka </MenuItem>
          <MenuItem value='Banque Citi '>Banque Citi </MenuItem>
          <MenuItem value='Banque Arabe Tunisie ??ATB?? '>
            Banque Arabe Tunisie ??ATB??
          </MenuItem>
          <MenuItem value='Banque Saudi tunisie ??TSB??'>
            Banque Saudi tunisie ??TSB??
          </MenuItem>
          <MenuItem value='Banque Qatar Tunisie ??QNB??'>
            Banque Qatar Tunisie ??QNB??
          </MenuItem>
          <MenuItem value='Banque Arabe Corporation ??ABC??'>
            Banque Arabe Corporation ??ABC??
          </MenuItem>
        </TextField>
        <Spacer width={20} />

        <TextField
          fullWidth
          required
          name='Agence'
          size='medium'
          label='Agence'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['Agence']}
          onChange={e =>
            Context.setUserData({ ...Context.userData, Agence: e.target.value })
          }
          placeholder='Agence'
          error={!!touched.Agence && !!errors.Agence}
          helperText={touched.Agence && errors.Agence}
        />
      </StyledBank>
      <StyledBank>
        <TextField
          fullWidth
          required
          name='CodeBancaire'
          size='medium'
          label='Code bancaire '
          variant='outlined'
          type='number'
          onBlur={handleBlur}
          value={Context.userData['CodeBancaire']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              CodeBancaire: e.target.value
            })
          }
          placeholder='Code bancaire'
          error={!!touched.CodeBancaire && !!errors.CodeBancaire}
          helperText={touched.CodeBancaire && errors.CodeBancaire}
        />

        <Spacer width={20} />

        <TextField
          fullWidth
          name='iban'
          size='medium'
          label='Iban'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['iban']}
          onChange={e =>
            Context.setUserData({ ...Context.userData, iban: e.target.value })
          }
          placeholder='Iban'
          error={!!touched.iban && !!errors.iban}
          helperText={touched.iban && errors.iban}
        />
      </StyledBank>
      <StyledBank>
        <TextField
          fullWidth
          name='codeSwift'
          size='medium'
          label='Code swift'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['codeSwift']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              codeSwift: e.target.value
            })
          }
          placeholder='Code swift'
          error={!!touched.codeSwift && !!errors.codeSwift}
          helperText={touched.codeSwift && errors.codeSwift}
        />
      </StyledBank>
    
     
 <Styledbtn>
        <BazaarButton
          fullWidth
          style={{color:"white",backgroundColor:"#236C68",maxWidth:"120px"}}
           onClick={()=> Context.setStep(4)}
          type='submit'
          color='primary'
          variant='contained'
        >
          Suivant
        </BazaarButton>
      </Styledbtn>
      <Styledbtn>
        <BazaarButton
          fullWidth
          type='submit'
          color='secondary'
          variant='contained'
          onClick={() => Context.setStep(2)}
          style={{color:"white",backgroundColor:"#2B3445",maxWidth:"120px"}}
        >
          retour
        </BazaarButton>
      </Styledbtn>
     
    </form>
  )
}

const initialValues = {
  titulaireDuCompte: '',
  cin: '',
  rib: '',
  banque: '',
  agence: '',
  codeSwift: '',
  iban: '',
  codeBancaire: ''
}
const formSchema2 = yup.object().shape({
  titulaireDuCompte: yup.string().required('required'),
  banque: yup.string().required('required'),
  agence: yup
    .string()
    .required('invalid agence')
    .required('agence is required'),
  codeSwift: yup.string().required('required'),
  iban: yup.number().required('required'),
  codeBancaire: yup.number().required('required'),
  rib: yup.number().required('required'),
  Cin: yup.number().required('required')
})

export default BankSignup