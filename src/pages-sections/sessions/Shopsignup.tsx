import { Checkbox, FormControlLabel, Step } from "@mui/material";
import BazaarButton from "components/BazaarButton";
import BazaarTextField from "components/BazaarTextField";
import { FlexBox } from "components/flex-box";
import { H3, H6, Small } from "components/Typography";
import { useFormik } from "formik";
import React, { useCallback, useState, useContext } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
import { multiStepContext } from "StepContext";
import DropZone from "components/DropZone";
import { Stack } from "@mui/material";
import { BlueButton, GreenButton, Divider } from "ui";


const ShopSignup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };

  const { values, errors, touched, handleBlur } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema:formSchema,
    });

  const Context = useContext(multiStepContext)
  

  return (
    <form onSubmit={() => Context.setStep(3)}>
      <H3 textAlign="center" mb={1}>
        Données Boutique/société
      </H3>
      <BazaarTextField
        mb={1.5}
        fullWidth
        required
        name="Raisonsocial"
        size="small"
        label="Raison social"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['RaisonSocial']}
        onChange={(e) => Context.setUserData({ ...Context.userData, "RaisonSocial": e.target.value })}
        placeholder="Raison social"
        error={!!touched.RaisonSocial && !!errors.RaisonSocial}
        helperText={touched.RaisonSocial && errors.RaisonSocial}
      />
      <BazaarTextField
        mb={1.5}
        fullWidth
        required
        name="MatriculeFiscale"
        size="small"
        label="Matricule Fiscale"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['MatriculeFiscale']}
        onChange={(e) => Context.setUserData({ ...Context.userData, "MatriculeFiscale": e.target.value })}
        placeholder="Matricule Fiscale"
        error={!!touched.matriculeFiscale && !!errors.matriculeFiscale}
        helperText={touched.matriculeFiscale && errors.matriculeFiscale}
      />

      <Stack spacing={3} mb={3}>
        {/* <DropZone
          onChange={(files) => console.log(files)}
        /> */}

      </Stack>
      <BazaarTextField
        mb={1.5}
        fullWidth
        required
        name="rne"
        size="small"
        label="RNE"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['rne']}
        onChange={(e) => Context.setUserData({ ...Context.userData, "rne": e.target.value })}
        placeholder="RNE"
        error={!!touched.RNE && !!errors.RNE}
        helperText={touched.RNE && errors.RNE}
      />
      <BazaarTextField
        mb={1.5}
        fullWidth
        required
        name="TelephoneFixe"
        size="small"
        label="Télèphone Fixe"
        type="number"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['TelephoneFixe']}
        onChange={(e) => Context.setUserData({ ...Context.userData, "TelephoneFixe": e.target.value })}
        placeholder="Télèphone Fixe"
        error={!!touched.telephoneFixe && !!errors.telephoneFixe}
        helperText={touched.telephoneFixe && errors.telephoneFixe}
      />
      <BazaarTextField
        mb={1.5}
        fullWidth
        required
        name="addresse"
        size="small"
        label="Addresse"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['addresse']}
        onChange={(e) => Context.setUserData({ ...Context.userData, "addresse": e.target.value })}
        placeholder="Addresse"
        error={!!touched.Addresse && !!errors.Addresse}
        helperText={touched.Addresse && errors.Addresse}
      />
      <BazaarTextField
        mb={1.5}
        fullWidth
        required
        name="pincode"
        size="small"
        type="string"
        label="Code postal"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['pincode']}
        onChange={(e) => Context.setUserData({ ...Context.userData, "pincode": e.target.value })}
        placeholder="Code postal"
        error={!!touched.codePostal && !!errors.codePostal}
        helperText={touched.codePostal && errors.codePostal}
      />
      <BlueButton onClick={() => Context.setStep(1)} height="40px" width="150px" >Back</BlueButton>
      <GreenButton onClick={() => Context.setStep(3)} height="40px" width="150px">Next</GreenButton>
    </form>

  );
};

const initialValues = {
  name: "",

};

const formSchema = yup.object().shape({
  codePostal :yup.string()
  .length(4,'no')

})



export default ShopSignup;
