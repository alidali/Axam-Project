import { Checkbox, FormControlLabel, MenuItem, Box, Grid } from '@mui/material'
import BazaarButton from 'components/BazaarButton'
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

const StyledSelectStatus = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
const Styledbtn = styled.div`
  padding: 8px 16px;
  margin-left: 30px;
`
const StyledDropzone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
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
  display: flex;
  flex-direction: row;
  width: 100px,
  height: 100px,
  overflow: "hidden",
  borderRadius: "8px",
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
      <StyledName>
        <TextField
          required
          fullWidth
          name='firstName'
          size='medium'
          label='Nom'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['firstName']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              firstName: e.target.value
            })
          }
          placeholder='Nom'
          error={!!touched.firstName && !!errors.firstName}
          helperText={touched.firstName && errors.firstName}
        />
        <Spacer width={20} />
        <TextField
          fullWidth
          required
          name='lastName'
          size='medium'
          label='Prénom'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['lastName']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              lastName: e.target.value
            })
          }
          placeholder='Prénom'
          error={!!touched.lastName && !!errors.lastName}
          helperText={touched.lastName && errors.lastName}
        />
      </StyledName>

      <StyledProfileInformations>
        <TextField
          fullWidth
          required
          name='email'
          size='medium'
          type='Email'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['email']}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              email: e.target.value
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
          name='mobile'
          size='medium'
          type='number'
          label='Téléphone'
          variant='outlined'
          onBlur={handleBlur}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              mobile: e.target.value
            })
          }
          placeholder='Téléphone'
          value={Context.userData['mobile']}
          error={!!touched.mobile && !!errors.mobile}
          helperText={touched.mobile && errors.mobile}
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
              password: e.target.value
            })
          }
          value={Context.userData['password']}
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
          name=' confirm_password'
          variant='outlined'
          label='Confirmer mot de passe'
          placeholder='*********'
          onBlur={handleBlur}
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              confirm_password: e.target.value
            })
          }
          value={Context.userData['confirm_password']} // TODO 
          type={passwordVisibility ? 'text' : 'password'}
          error={!!touched.confirm_password && !!errors.confirm_password}
          helperText={touched.confirm_password && errors.confirm_password}
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
          name='cin_number'
          required
          size='medium'
          label='CIN'
          variant='outlined'
          onBlur={handleBlur}
          value={Context.userData['cin_number']}
          onChange={e =>
            Context.setUserData({ ...Context.userData, cin_number: e.target.value })
          }
          placeholder='CIN'
          error={!!touched.cin_number && !!errors.cin_number}
          helperText={touched.cin_number && errors.cin_number}
        />
      </StyledProfileInformations>
      <StyledDropzone>

        <DropZone
          onChange={(files) => {
            const uploadFiles = files.map((file) =>
              Object.assign(file, { preview: URL.createObjectURL(file) })
            );
            setNewFiles(uploadFiles);
            Context.setUserData({ ...Context.userData, cin_number_proof: uploadFiles })
          }}
        />
        {/* <FlexBox gap={1} mt={2}> */}
        {newFiles.map((file, index) => (
          <UploadBox key={index}>
            <NextImage
              width={250}
              height={170}
              src={file.preview}
            // layout="responsive"
            />
            <StyledClear onClick={() => deleteNewImage(file.name)} />
          </UploadBox>
        ))}
        {/* </FlexBox> */}


      </StyledDropzone>
      <StyledSelectStatus>
        <TextField
          select
          fullWidth
          required
          color='info'
          size='medium'
          name='type'
          placeholder='vous êtes une personne ou une entreprise'
          label='vous êtes une personne  ou une entreprise'
          defaultValue={
            Context.userData['type'] ? Context.userData['type'] : 'type'
          }
          onChange={e =>
            Context.setUserData({
              ...Context.userData,
              type: e.target.value
            })
          }
        >
          <MenuItem value='Personne physique'>Personne physique</MenuItem>
          <MenuItem value='Entreprise'>Entreprise</MenuItem>
        </TextField>
      </StyledSelectStatus>


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
            required
          />
        }
        label={
          <FlexBox
            flexWrap='wrap'
            alignItems='center'
            justifyContent='flex-start'
          >
            En vous inscrivant, vous acceptez les
            <a href='/' target='_blank' rel='noreferrer noopener'>
              <H6 borderBottom='1px solid' borderColor='grey.900'>
                termes& Conditions
              </H6>
            </a>
          </FlexBox>
        }
      />
      <Spacer height={10} />
      <Styledbtn>
        <BazaarButton color='primary' variant='contained' type='submit'>
          Next
        </BazaarButton>
      </Styledbtn>
    </form>
  )
}

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  cin_number: '',
  cin_number_proof: '',
  password: '',
  re_password: '',
  agreement: false
}

const formSchema = yup.object().shape({
  Nom: yup.string().required('Name is required'),
  Prenom: yup.string().required('Prenom is required'),
  Email: yup.string().email('invalid email').required('Email is required'),
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