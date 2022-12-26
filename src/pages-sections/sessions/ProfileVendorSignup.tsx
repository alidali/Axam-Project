import { Checkbox, FormControlLabel,MenuItem  } from '@mui/material'
import { Fragment } from 'react'
import BazaarButton from 'components/BazaarButton'

import { FlexBox } from 'components/flex-box'
import { H3, H6, Small } from 'components/Typography'
import { useFormik } from 'formik'
import { useCallback, useState, useContext } from 'react'
import * as yup from 'yup'
import EyeToggleButton from './EyeToggleButton'
// import { Wrapper } from "./Login";
import { multiStepContext } from 'StepContext'
import { GreenButton, Spacer } from 'ui'
import { Grid, IconButton, TextField } from '@mui/material'
import Phone from 'components/phone/Phone'

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

  return (
    <Fragment>
      {/* <Wrapper elevation={3} passwordVisibility={passwordVisibility} style={{marginLeft:"-60%"}}> */}
     
      
      <form onSubmit={() => Context.setStep(2)}>
    
       
        <Grid container spacing={5} alignItems='center' paddingLeft={30}>
          <Grid item md={6} xs={14}>
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
          </Grid>
          <Grid item md={6} xs={14} >
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
          </Grid>
          <Grid item xs={13}>
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
          </Grid>
          <Grid item md={6} xs={14}>
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
          </Grid>
          <Grid item md={6} xs={14}>
            <TextField
              required
              fullWidth
              size='medium'
              autoComplete='on'
              name='RePassword'
              variant='outlined'
              label='Confirmer mot de passe '
              placeholder='*********'
              onBlur={handleBlur}
              onChange={e =>
                Context.setUserData({
                  ...Context.userData,
                  RePassword: e.target.value
                })
              }
              value={Context.userData['RePassword']}
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
          </Grid>

          <Grid item md={6} xs={14}>
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
          </Grid>
          <Grid item md={6} xs={14}>


          <TextField
        select
        fullWidth
        required
        color="info"
        size="medium"
        name="type"
        placeholder="vous êtes une personne ou une entreprise"
        label="vous êtes une personne  ou une entreprise"
        defaultValue= {Context.userData['type'] ? Context.userData['type'] : "type" }
        onChange={(e)=>Context.setUserData({...Context.userData, "type" : e.target.value})}

      >
        <MenuItem value="Personne physique">Personne physique</MenuItem>
        <MenuItem value="Entreprise">Entreprise</MenuItem>
       
       

      </TextField>
          </Grid>



          <Grid item xs={10} height={80}>
            <FormControlLabel
              name='agreement'
              className='agreement'
              onChange={handleChange}
              control={
                <Checkbox
                  size='small'
                  color='secondary'
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
                    <H6 ml={1} borderBottom='1px solid' borderColor='grey.900'>
                      Terms & Condition
                    </H6>
                  </a>
                </FlexBox>
              }
            />
          </Grid>
          <Spacer height={10} />
          {/* <GreenButton onClick={() => Context.setStep(1)} height="50px" width="150px">Next</GreenButton> */}
          <Grid item xs={8} height={80}>
            <BazaarButton
              fullWidth
              type='submit'
              color='primary'
              variant='contained'
              sx={{
                mt: 3,
                height: 44,
                width: 140,
                sm: 6,
                xs: 12,
                flexDirection: 'center'
              }}
            >
              Next
            </BazaarButton>
          </Grid>
        </Grid>
      </form>

      {/* </Wrapper> */}
    </Fragment>
  )
}

const initialValues = {
  name: '',
  email: '',
  password: '',
  re_password: '',
  agreement: false
}

const formSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('invalid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
  
  re_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
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
