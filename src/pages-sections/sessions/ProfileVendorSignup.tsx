import { Checkbox, FormControlLabel } from "@mui/material";
import {  Fragment } from "react";
import BazaarButton from "components/BazaarButton";
import BazaarTextField from "components/BazaarTextField";
import { FlexBox } from "components/flex-box";
import { H3, H6, Small } from "components/Typography";
import { useFormik } from "formik";
import  { useCallback, useState, useContext } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
// import { Wrapper } from "./Login";
import { multiStepContext } from "StepContext";
import { GreenButton, Spacer } from "ui";
import { Button, Divider, Grid, IconButton, TextField  } from "@mui/material";
  import Phone from 'components/phone/Phone';
  import { PhoneInput } from "react-contact-number-input";
  import ContactMailIcon from '@mui/icons-material/ContactMail';
  import PersonIcon from '@mui/icons-material/Person';
const ProfileVendorSignup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };

  const { values, errors, touched, handleBlur, handleChange } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });
  
    const Context = useContext(multiStepContext)


  return (

    <Fragment>
    {/* <Wrapper elevation={3} passwordVisibility={passwordVisibility} style={{marginLeft:"-60%"}}> */}
      <form onSubmit={()=> Context.setStep(2)}>
    
        <H3 textAlign="center" mb={3} marginRight={0} marginTop={0} fontFamily={'open Sans'} fontSize ={20}>
        Données vendeur
        </H3>
        <Grid container spacing={4} alignItems= "center" >
        <Grid item xs={10} height={80} marginTop={5}>
        <TextField
          
          fullWidth
          required
          name="Email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['Email']}
          onChange={(e)=>Context.setUserData({...Context.userData, "Email" : e.target.value})}
          label="Email"
          placeholder="exmple@mail.com"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          InputProps={{
            endAdornment: (
              < ContactMailIcon  fontSize="small" color='inherit' sx={{ mr: 1 }} />
            ),
          }}
        />
        </Grid>
        <Grid item xs={10} height={80}>
        <TextField
        
          required
          fullWidth
          name="Nom"
          size="small"
          label="Nom"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['Nom']}
          onChange={(e)=>Context.setUserData({...Context.userData, "Nom" : e.target.value})}
          placeholder="Nom"
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
          InputProps={{
            endAdornment: (
              < PersonIcon  fontSize="small" color='inherit' sx={{ mr: 1 }} />
            ),
          }}
        />
        </Grid>
        <Grid item xs={10} height={80}>
         <TextField
         
          fullWidth
          required
          name="Prenom"
          size="small"
          label="Prénom"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['Prenom']}
          onChange={(e)=>Context.setUserData({...Context.userData, "Prenom" : e.target.value})}
          placeholder="Prénom"
          error={!!touched.Prénom && !!errors.Prénom}
          helperText={touched.Prénom && errors.Prénom}
        />
         </Grid>
    
         <Grid item xs={10} height={80} >
         <TextField
          fullWidth
          required
          name="Telephone" 
          size="small"
          type="number"
          label="Téléphone"
          variant="outlined"
          onBlur={handleBlur}
          onChange={(e)=>Context.setUserData({...Context.userData, "Telephone" : e.target.value})}
          placeholder="Téléphone"
          error={!!touched.Téléphone && !!errors.Téléphone}
          helperText={touched.Téléphone && errors.Téléphone}
        /> 
        </Grid>
       
     {/* <Grid item xs={8} >
           <Phone/>
           </Grid> */}
           <Spacer height={12}/>
           <Grid item xs={10} height={80}>
        <TextField
          required
          fullWidth
          size="small"
          name="Password"
          label="Mot de passe"
          variant="outlined"
          autoComplete="on"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={(e)=>Context.setUserData({...Context.userData, "Password" : e.target.value})}
          value={Context.userData['Password']}
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />
</Grid>
<Grid item xs={10} height={80}>
        <TextField
          required
          fullWidth
          size="small"
          autoComplete="on"
          name="RePassword"
          variant="outlined"
          label="Confirmer mot de passe "
          placeholder="*********"
          onBlur={handleBlur}
          onChange={(e)=>Context.setUserData({...Context.userData, "RePassword" : e.target.value})}
          value={Context.userData['RePassword']}
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.re_password && !!errors.re_password}
          helperText={touched.re_password && errors.re_password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />
        </Grid>
        
        <Grid item xs={10} height={80}>
        <FormControlLabel
          name="agreement"
          className="agreement"
          onChange={handleChange}
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={values.agreement || false}
            />
          }
          label={
            <FlexBox
              flexWrap="wrap"
              alignItems="center"
              justifyContent="flex-start"
              
            >
              By signing up, you agree to
              <a href="/" target="_blank" rel="noreferrer noopener">
                <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
                  Terms & Condition
                </H6>
              </a>
            </FlexBox>
          }
        />


         </Grid>
         <Spacer height={10}/>
        {/* <GreenButton onClick={() => Context.setStep(1)} height="50px" width="150px">Next</GreenButton> */}
        <Grid item xs={8} height={80}>
        <BazaarButton
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 3 ,height: 44, width: 140 ,sm:6 , xs:12 ,flexDirection:"center" }}
         
        >
          Next
        </BazaarButton>
        </Grid>
        </Grid>
      </form>
     
    {/* </Wrapper> */}
    </Fragment>
   
  );
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  re_password: "",
  agreement: false,
};

const formSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  re_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please re-type password"),
  agreement: yup
    .bool()
    .test(
      "agreement",
      "You have to agree with our Terms and Conditions!",
      (value) => value === true
    )

.required("You have to agree with our Terms and Conditions!"),

//</Fragment>
});


export default ProfileVendorSignup;