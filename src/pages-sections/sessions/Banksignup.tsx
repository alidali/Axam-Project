import { Checkbox, FormControlLabel } from "@mui/material";
import { MenuItem, TextField } from "@mui/material";
import BazaarButton from "components/BazaarButton";
import BazaarTextField from "components/BazaarTextField";
import { FlexBox } from "components/flex-box";
import { H3, H6, Small } from "components/Typography";
import { useFormik } from "formik";
import React, { useCallback, useState, useContext } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
//import { Wrapper } from "./Login";
import { multiStepContext } from "StepContext";
import DropZone from "components/DropZone";
import { Stack } from "@mui/material";
import { BlueButton, GreenButton } from "ui";
import { Box, Container, Grid, Card } from "@mui/material";


const BankSignup = () => {
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

    });

    const Context= useContext(multiStepContext)
  return (


    // <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
    <form onSubmit={()=> Context.setStep(4)}>
      <H3 textAlign="center" mb={1}>
        Coordonnées bancaires
      </H3>
      <BazaarTextField
        mb={1.5}
        fullWidth
        required
        name="pan_number"
        type="number"
        size="small"
        label="RIB"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['pan_number']}
        onChange={(e)=>Context.setUserData({...Context.userData, "pan_number" : e.target.value})}
        placeholder="RIB"
        error={!!touched.Rib && !!errors.Rib}
        helperText={touched.Rib && errors.Rib}
      />
      <Stack spacing={3} mb={3}>
        <DropZone
          // onChange={(files) => console.log(files)}
        />

      </Stack>
      <TextField
        select
        fullWidth
        required
        color="info"
        size="medium"
        name="bank_name"
        placeholder="Banque"
        label="Banque"
        defaultValue= {Context.userData['bank_name'] ? Context.userData['bank_name'] : "Banque" }
        onChange={(e)=>Context.setUserData({...Context.userData, "bank_name" : e.target.value})}

      >
        <MenuItem value="Banque Internationale Arabe de Tunisie «BIAT»">	Banque Internationale Arabe de Tunisie «  BIAT »</MenuItem>
        <MenuItem value="Banque de Tunisie «BT»">Banque de Tunisie «BT»</MenuItem>
        <MenuItem value="Société Tunisienne de Banque «STB»">Société Tunisienne de Banque «STB»</MenuItem>
        <MenuItem value="Banque Nationale Agricole «BNA»">Banque Nationale Agricole «BNA»</MenuItem>
        <MenuItem value="Union Internationale de Banque «UIB»">Union Internationale de Banque « UIB »</MenuItem>
        <MenuItem value="Union Bancaire de Commerce et d’Industrie «UBCI»">Union Bancaire de Commerce et d’Industrie «UBCI»</MenuItem>
        <MenuItem value="Banque Franco Tunisienne «BFT»">Banque Franco Tunisienne «BFT»</MenuItem>
        <MenuItem value="Banque Tuniso Koweitienne «BTK»">Banque Tuniso Koweitienne «BTK»</MenuItem>
        <MenuItem value="Banque Zitouna">Banque Zitouna</MenuItem>
        <MenuItem value="Banque Tuniso-Libyenne «BTL»">Banque Tuniso-Libyenne «BTL»</MenuItem>
        <MenuItem value="Banque de Tunisie et des Emirats «BTE»">Banque de Tunisie et des Emirats «BTE»</MenuItem>
        <MenuItem value="Banque Tunisienne de Solidarité «BTS»">Banque Tunisienne de Solidarité «BTS»</MenuItem>
        <MenuItem value="Banque de l’Habitat «BH»">Banque de l’Habitat «BH»</MenuItem>
        <MenuItem value="Banque de Financement des Petites et Moyennes entreprises «BFPME»">Banque de Financement des Petites et Moyennes entreprises «BFPME»</MenuItem>
        <MenuItem value="Banque Attijari">Banque Attijari </MenuItem>
        <MenuItem value="Banque Amen">Banque Amen</MenuItem>
        <MenuItem value="Banque Al Wifak ">Banque Al Wifak </MenuItem>
        <MenuItem value="Banque Al Baraka  ">Banque Al Baraka </MenuItem>
        <MenuItem value="Banque Citi ">Banque Citi </MenuItem>
        <MenuItem value="Banque Arabe Tunisie «ATB» ">Banque Arabe Tunisie «ATB»</MenuItem>
        <MenuItem value="Banque Saudi tunisie «TSB»">Banque Saudi tunisie «TSB»</MenuItem>
        <MenuItem value="Banque Qatar Tunisie «QNB»">Banque Qatar Tunisie «QNB»</MenuItem>
        <MenuItem value="Banque Arabe Corporation «ABC»">Banque Arabe Corporation «ABC»</MenuItem>

      </TextField>
      <BazaarTextField
        mb={1.5}
        fullWidth
        required
        name="bank_code"
        size="small"
        label="Agence"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['bank_code']}
        onChange={(e)=>Context.setUserData({...Context.userData, "bank_code" : e.target.value})}
        placeholder="Agence"
        error={!!touched.Agence && !!errors.Agence}
        helperText={touched.Agence && errors.Agence}
      />
      <BazaarTextField
        mb={1.5}
        fullWidth
        required
        name="cin_number"
        type="number"
        size="small"
        label="CIN"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['cin_number']}
        onChange={(e)=>Context.setUserData({...Context.userData, "cin_number" : e.target.value})}
        placeholder="CIN"
        error={!!touched.Cin && !!errors.Cin}
        helperText={touched.Cin && errors.Cin}
      />
      <Stack spacing={3} mb={3}>
        <DropZone
          // onChange={(files) => console.log(files)}
        />

      </Stack>
      <BlueButton onClick={() => Context.setStep(2)} height="40px" width="150px">Back</BlueButton>
      <GreenButton onClick={() => Context.setStep(4)} height="40px" width="150px">Next</GreenButton>
    </form>

  );
};

const initialValues = {
  name: "",

};



export default BankSignup;
