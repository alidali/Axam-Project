import { Checkbox, FormControlLabel, MenuItem } from '@mui/material'
import BazaarButton from 'components/BazaarButton'
import { FlexBox } from 'components/flex-box'
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
const StyledTerms = styled.div`
  padding: 8px 16px;
  margin-left: 30px;
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

  const Context = useContext(multiStepContext)
  // @refresh reset
  return (
    <form onSubmit={() => Context.setStep(2)}>
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
          />
        }
        label={
          <FlexBox
            flexWrap='wrap'
            alignItems='center'
            justifyContent='flex-start'
          >
            By signing up, you agree to
            <a href='/' target='_blank' rel='noreferrer noopener'>
              <H6 borderBottom='1px solid' borderColor='grey.900'>
                Terms & Condition
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
  Nom: '',
  Prenom: '',
  email: '',
  password: '',
  re_password: '',
  agreement: false
}

const formSchema = yup.object().shape({
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


})

export default ProfileVendorSignup