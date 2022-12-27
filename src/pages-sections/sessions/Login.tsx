import { ForkLeft } from "@mui/icons-material";
import { Card, CardProps,Grid,TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import BazaarButton from "components/BazaarButton";
import BazaarTextField from "components/BazaarTextField";
import { H3, Small } from "components/Typography";
import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
import {  Fragment } from "react";
const fbStyle = { background: "#3B5998", color: "white" };
const googleStyle = { background: "#4285F4", color: "white" };

type WrapperProps = { passwordVisibility?: boolean };

export const Wrapper = styled<React.FC<WrapperProps & CardProps>>(
  ({ children, passwordVisibility, ...rest }) => (
    <Card {...rest}>{children}</Card>
  )
)<CardProps>(({ theme, passwordVisibility }) => ({
  width: 600,
  height:700,
  padding: "0.1rem 3rem",
  [theme.breakpoints.down("sm")]: { width: "100%" },
  ".passwordEye": {
    color: passwordVisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },
  ".facebookButton": { marginBottom: 10, ...fbStyle, "&:hover": fbStyle },
  ".googleButton": { ...googleStyle, "&:hover": googleStyle },
  ".agreement": { marginTop: 12, marginBottom: 35 },
}));

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  return (
    <Fragment>
   
      <form onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={3} marginRight={20} marginTop={10} fontFamily={'open Sans'} fontSize ={30}>
         Se connecter
        </H3>
        <Small
        marginRight={20}
          mb={4.5}
          display="block"
          fontSize="14px"
          fontWeight="600"
          color="grey.800"
          textAlign="center"
          fontFamily="open Sans" 
          
        >
          Acceder à votre compte Axam
        </Small>
        <Grid container spacing={5} >
        <Grid item xs={10} >
        <TextField
         required
          fullWidth
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="Email"
          placeholder="exmple@mail.com"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />
         </Grid>
         <Grid item xs={10}>
        <TextField
         required
          fullWidth
          size="small"
          name="password"
          label="Mot de passe "
          autoComplete="on"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder="*********"
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
          <Grid item xs={12} >
        <BazaarButton
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 3, ml: 35 ,height: 44, width: 140 ,sm:6 , xs:12 ,flexDirection:"center" }}
         
        >
          Next
        </BazaarButton>
        </Grid>
        </Grid>
      </form>

      
   
    </Fragment>
  );
};

const initialValues = {
  email: "",
  password: "",
};

const formSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  email: yup.string().email("invalid email").required("Email is required"),
});

export default Login;