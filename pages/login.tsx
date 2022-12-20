import CssBaseline from '@mui/material/CssBaseline';
import { SocialIcon } from 'react-social-icons';
import React, { SyntheticEvent, useState, useCallback } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NextPage } from "next";
import { Box, Container, Grid, Card, CardProps } from "@mui/material";
import { ForkLeft, Mode } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import BazaarButton from "components/BazaarButton";
import BazaarTextField from "components/BazaarTextField";
import { H3, Small } from "components/Typography";
import { useFormik } from "formik";
import * as yup from "yup";
import EyeToggleButton from 'pages-sections/sessions/EyeToggleButton';
import SocialButtons from 'pages-sections/sessions/SocialButtons';
import axios from 'axios';

const socialMediaHandlesLinks = {
  facebook: 'https://facebook.com/phanimurari',
  instagram: 'https://www.instagram.com/im_phani_murari/?hl=en',
  twitter: 'https://twitter.com/ImPhaniMurari'
}

const fbStyle = { background: "#3B5998", color: "white" };
const googleStyle = { background: "#4285F4", color: "white" };

type WrapperProps = { passwordVisibility?: boolean };

export const Wrapper = styled<React.FC<WrapperProps & CardProps>>(
  ({ children, passwordVisibility, ...rest }) => (
    <Card {...rest}>{children}</Card>
  )
)<CardProps>(({ theme, passwordVisibility }) => ({
  width: 500,
  padding: "0.1rem 3rem",
  [theme.breakpoints.down("sm")]: { width: "100%" },
  ".passwordEye": {
    color: passwordVisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },
  ".facebookButton": { marginBottom: 10, ...fbStyle, "&:hover": fbStyle },
  ".googleButton": { ...googleStyle, "&:hover": googleStyle },
  ".agreement": { marginTop: 12, marginBottom: 24 },
}));


const theme = createTheme();
const LoginPage: NextPage = () => {

  const [redirect, setRedirect] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);


  const handleSubmitForm = async (values: any) => {
    console.log("here", values);
    // try {
    //   const response = await fetch('http://5.135.194.236:8181/seller/app/v1/api/login', {
    //     method: "POST",
    //     headers: { "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ0MDkwMjYsImlzcyI6ImVzaG9wIiwiZXhwIjoxNjY0NDEwODI2fQ.R9yCge_10pnDkSjL9aospCdvnRBGYFI4dsOsVaW7fkE' },
    //     body: JSON.stringify({
    //       email: values.email,
    //       password: values.password,
    //     }),
    //   });

    //   const content = await response.json();
    //   console.log("🚀 ~ file: Login.tsx ~ line 24 ~ submit ~ content", content);
    //   if (content.success) {
    //     setRedirect(true);
    //   }
    // } catch (error) {
    //   console.log("error",error)
    // }

    const config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded", "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ0MDkwMjYsImlzcyI6ImVzaG9wIiwiZXhwIjoxNjY0NDEwODI2fQ.R9yCge_10pnDkSjL9aospCdvnRBGYFI4dsOsVaW7fkE` }
    };

    const bodyParameters = {
      email: values.email,
      password: values.password,
    };

    const res = await axios.post(
      "http://5.135.194.236:8181/seller/app/v1/api/login",
      bodyParameters,
      config
    )
    console.log(res.data);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleSubmitForm,
      validationSchema: formSchema,
    });


  return (

    <ThemeProvider theme={theme}>
      <div style={{
        width: "100%",
        height: "00",
        backgroundImage: `url(./assets/images/banners/1.jpg)`


      }}>
      </div>
      <CssBaseline />

      <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
          <Wrapper elevation={4} passwordVisibility={passwordVisibility}  >
            <form onSubmit={handleSubmit}>
              <H3 textAlign="center" mb={1}>
                Se connecter
              </H3>
              <Small
                mb={4.5}
                display="block"
                fontSize="12px"
                fontWeight="600"
                color="grey.800"
                textAlign="center"
              >
                Acceder à votre compte Axam
              </Small>

              <BazaarTextField
                mb={1.5}
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

              <BazaarTextField
                mb={2}
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

              <BazaarButton
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
                sx={{ mb: "1.65rem", height: 44 }}
              >
                Login
              </BazaarButton>
            </form>

            <SocialButtons redirect="/signup" redirectText="Sign Up" />
          </Wrapper>
          


          </Box>
      
      </ThemeProvider>

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

export default LoginPage;