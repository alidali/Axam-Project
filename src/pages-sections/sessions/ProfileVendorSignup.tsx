import { Checkbox, FormControlLabel } from "@mui/material";
import { Fragment } from "react";
import BazaarButton from "components/BazaarButton";
import BazaarTextField from "components/BazaarTextField";
import { FlexBox } from "components/flex-box";
import { H3, H6, Small } from "components/Typography";
import { useFormik } from "formik";
import React, { useCallback, useState, useContext } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
import { GreenButton, Spacer } from "ui";
import { multiStepContext } from "StepContext";
import Phone from 'components/phone/Phone';

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
      <form onSubmit={() => Context.setStep(2)}>
        <H3 textAlign="center" mb={1}>
          Données vendeur
        </H3>

        <BazaarTextField
          mb={1.5}
          fullWidth
          required
          name="Email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['Email']}
          onChange={(e) => Context.setUserData({ ...Context.userData, "Email": e.target.value })}
          label="Email"
          placeholder="exmple@mail.com"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />


        <BazaarTextField
          mb={1.5}
          fullWidth
          required
          name="firstName"
          size="small"
          label="First Name"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['firstName']}
          onChange={(e) => Context.setUserData({ ...Context.userData, "firstName": e.target.value })}
          placeholder="Nom"
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <BazaarTextField
          mb={1.5}
          fullWidth
          required
          name="lastName"
          size="small"
          label="Last Name"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['lastName']}
          onChange={(e) => Context.setUserData({ ...Context.userData, "lastName": e.target.value })}
          placeholder="Nom"
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />
        <BazaarTextField
          mb={1.5}
          fullWidth
          required
          name="mobile"
          size="small"
          type="number"
          label="Téléphone"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['mobile']}
          onChange={(e) => Context.setUserData({ ...Context.userData, "mobile": e.target.value })}
          placeholder="Téléphone"
          error={!!touched.Téléphone && !!errors.Téléphone}
          helperText={touched.Téléphone && errors.Téléphone}
        />


        <BazaarTextField
          mb={1.5}
          fullWidth
          required
          size="small"
          name="password"
          label="Mot de passe"
          variant="outlined"
          autoComplete="on"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={(e) => Context.setUserData({ ...Context.userData, "password": e.target.value })}
          value={Context.userData['password']}
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

        <BazaarTextField
          fullWidth
          required
          size="small"
          autoComplete="on"
          name="confirm_password"
          variant="outlined"
          label="Confirmer mot de passe "
          placeholder="*********"
          onBlur={handleBlur}
          onChange={(e) => Context.setUserData({ ...Context.userData, "confirm_password": e.target.value })}
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
                  Terms & Condtion
                </H6>
              </a>
            </FlexBox>
          }
        />


        <Spacer height={10} />
       
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
});


export default ProfileVendorSignup;
