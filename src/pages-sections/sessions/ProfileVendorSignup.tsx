import { Checkbox,  MenuItem,  Grid } from '@mui/material'

import { Box, Button, Divider } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { FlexBox } from 'components/flex-box'
import DropZone from "components/DropZone";
import { Clear } from "@mui/icons-material";
import NextImage from "next/image";
import { H3, H6, Small } from 'components/Typography'
import { useFormik } from 'formik'
import { useCallback, useState, useContext } from 'react'
import * as yup from 'yup'
import EyeToggleButton from './EyeToggleButton'
// import { Wrapper } from "./Login";
import { multiStepContext } from 'StepContext'
import { Spacer } from 'ui'
import { TextField } from '@mui/material'
import styled from 'styled-components'




const StyledName = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const StyledProfileInformations = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const StyledPasswords = styled.div`
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
margin-left: 85%;

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


const ProfileVendorSignup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)



  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility(visible => !visible)
  }, [])

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


  // @refresh reset
  return (
    <form onSubmit={() => Context.setStep(2)}>
      <div style={{marginLeft:"4.5%"}}>
      <RadioGroup
     aria-required
        row
        name="Type"
      >
        <FormControlLabel   style={{color:"black"}} value={'Entreprise'} control={<Radio required={true} style={{color:"#236C68"}}/>} label="Entreprise" />
        <FormControlLabel style={{color:"black"}} value={'Particulier'} control={<Radio required={true} style={{color:"#236C68"}}/>} label="Particulier" />  
      </RadioGroup>
      </div>
      <StyledName>
        <TextField
        
          required
          fullWidth
          name='Nom'
          size='medium'
          label='Nom'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['Nom']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              Nom: e.target.value
            })
          }
          placeholder='Nom'
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />
        <Spacer width={20} />
        <TextField
          fullWidth
          required
          name='Prenom'
          size='medium'
          label='Prénom'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['Prenom']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              Prenom: e.target.value
            })
          }
          placeholder='Prénom'
          error={!!touched.Prénom && !!errors.Prénom}
          helperText={touched.Prénom && errors.Prénom}
        />
      </StyledName>
      
      <StyledProfileInformations>
        <TextField
          fullWidth
          required
          name='Email'
          size='medium'
          type='email'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['Email']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              Email: e.target.value
            })
          }
          label='Email'
          placeholder='exmple@mail.com'
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />
        <Spacer width={20} />
        <TextField
          fullWidth
          required
          name='Telephone'
          size='medium'
          type='number'
          label='Téléphone'
          variant='outlined'
          onBlur={handleBlur}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              Telephone: e.target.value
            })
          }
          placeholder='Téléphone'
          error={!!touched.Téléphone && !!errors.Téléphone}
          helperText={touched.Téléphone && errors.Téléphone}
        />
      </StyledProfileInformations>

      <StyledPasswords>
        <TextField
          required
          fullWidth
          size='medium'
          name='Password'
          label='Mot de passe'
          variant='outlined'
          autoComplete='on'
          placeholder='*********'
          onBlur={handleBlur}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              Password: e.target.value
            })
          }
          value={Context.userData['Password']}
          type={passwordVisibility ? 'text' : 'password'}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            )
          }}
        />
        <Spacer width={20} />
        <TextField
          required
          fullWidth
          size='medium'
          autoComplete='on'
          name=' re_password'
          variant='outlined'
          label='Confirmer mot de passe '
          placeholder='*********'
          onBlur={handleBlur}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              re_password: e.target.value
            })
          }
          value={Context.userData['re_password']} // TODO
          type={passwordVisibility ? 'text' : 'password'}
          error={!!touched.re_password && !!errors.re_password}
          helperText={touched.re_password && errors.re_password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            )
          }}
        />
      </StyledPasswords>
      <StyledProfileInformations>
        <TextField
          fullWidth
          name='Cin'
          required
          size='medium'
          label='CIN'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['Cin']}
          onChange={e =>
            Context.setUserData({ ...Context.userData, Cin: e.target.value })
          }
          placeholder='CIN'
          error={!!touched.Cin && !!errors.Cin}
          helperText={touched.Cin && errors.Cin}
        />
      </StyledProfileInformations>
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
                width={540}
                height={200}
                objectFit="cover"
                src={file.preview}
                layout="responsive"
              />
              <StyledClear onClick={() => deleteNewImage(file.name)} />
            </UploadBox>
          ))}
        </FlexBox>

      </StyledDropzone> 
     


      <FormControlLabel
        name='agreement'
        className='agreement'
        onChange={handleChange}
        control={
          <Checkbox
            size='small'
            color='secondary'
            style={{ marginLeft: '50px' }}
            checked={values.agreement || false}
          />
        }
        label={ 
          <FlexBox
          style={{color:"black"}}
            flexWrap='wrap'
            alignItems='center'
            justifyContent='flex-start'
          >
            En vous inscrivant, vous acceptez les
            <a href='/' target='_blank' rel='noreferrer noopener'>
              <H6 borderBottom='1px solid' alignItems='center'>
                termes& Conditions
              </H6>
            </a>
          </FlexBox>
        }
      />
      <Spacer height={10} />
      <Styledbtn>
        <Button  variant='contained' type='submit' style={{color:"white",backgroundColor:"#236C68",maxWidth:"120px"}} >
          Suivant
        </Button>
      </Styledbtn>
    </form>
  )
}

const initialValues = {
  Type:'',
  Nom: '',
  Prenom: '',
  email: '',
  password: '',
  re_password: '',
  agreement: false
}

const formSchema = yup.object().shape({
  Radio: yup.string().required('Name is required'),
  Nom: yup.string().required('Name is required'),
  Prenom: yup.string().required('Prenom is required'),
  email: yup
    .string()
    .email('invalid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),

  re_password: yup
    .string()
    .oneOf([yup.ref(' re_password'), null], 'Passwords must match')
    .required('Please re-type password'),
  agreement: yup
    .bool()
    .test(
      'agreement',
      'You have to agree with our Terms and Conditions!',
      value => value === true
    )

    .required('You have to agree with our Terms and Conditions!')

  //</Fragment>
})

export default ProfileVendorSignup