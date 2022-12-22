import { Checkbox, FormControlLabel } from "@mui/material";
import { MenuItem, TextField,Grid } from "@mui/material";
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
import { BlueButton, GreenButton, Spacer } from "ui";


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
      validationSchema:validationSchema

    });
    

    const Context= useContext(multiStepContext)
    console.log("step",Context.Step)
  return (


    // <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
    <form onSubmit={()=> Context.setStep(4)}>
      <H3  textAlign="center" mb={3}  marginRight={0} marginTop={0} fontFamily={'open Sans'} fontSize ={20} >
        Coordonnées bancaires
      </H3>
      <Grid container spacing={5}>
        <Grid item xs={10}>
      <TextField
     
        fullWidth
        required
        name="Rib"
        type="number"
        size="small"
        label="RIB"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['Rib']}
        onChange={(e)=>Context.setUserData({...Context.userData, "Rib" : e.target.value})}
        placeholder="RIB"
        error={!!touched.Rib && !!errors.Rib}
        helperText={touched.Rib && errors.Rib}
      />
      </Grid>
      <Grid item xs={10}>
          <Stack spacing={3} mb={3}>
            <DropZone  />
          </Stack>
      </Grid>
      <Grid item xs={10}>
      <TextField
        select
        fullWidth
        required
        color="info"
        size="medium"
        name="Banque"
        placeholder="Banque"
        label="Banque"
        defaultValue= {Context.userData['Banque'] ? Context.userData['Banque'] : "Banque" }
        onChange={(e)=>Context.setUserData({...Context.userData, "Banque" : e.target.value})}

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
       </Grid>
      <Grid item xs={10}>
      <TextField
        fullWidth
        required
        name="Agence"
        size="small"
        label="Agence"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['Agence']}
        onChange={(e)=>Context.setUserData({...Context.userData, "Agence" : e.target.value})}
        placeholder="Agence"
        error={!!touched.Agence && !!errors.Agence}
        helperText={touched.Agence && errors.Agence}
      />
      </Grid>

       <Grid item xs={10}>
      <TextField
        fullWidth
        name="Cin"
        type="string"
        required
        
        size="small"
        label="CIN"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['Cin']}
        onChange={(e)=>Context.setUserData({...Context.userData, "Cin" : e.target.value})}
        placeholder="CIN"
        error={!!touched.Cin && !!errors.Cin}
        helperText={touched.Cin && errors.Cin}
      />
      </Grid>
      <Grid item xs={10}>
         <Stack spacing={3} mb={3}>
            <DropZone />
         </Stack>
         </Grid>
         <Grid item xs={10}>
        <BazaarButton
          fullWidth
          type="submit"
          color="secondary"
          variant="contained"
          sx={{ mt: 3, ml: 1 ,height: 44, width: 100 ,sm:6 , xs:12  }}
          onClick={()=> Context.setStep(2)}
        >
          Back
        </BazaarButton>
        </Grid>
        <Grid item xs={2}>
        <BazaarButton
          fullWidth
          onClick={()=> Context.setStep(4)}
          color="primary"
          variant="contained"
          sx={{ mt: 3, ml:-20 ,height: 44, width: 100 ,sm:6 , xs:12  }}
        >
          Next
        </BazaarButton>
        </Grid>
      {/* <Grid item xs={8}>
      <BazaarButton
          fullWidth
          type="submit"
          color="secondary"
          variant="contained"
          onClick={()=> Context.setStep(2)}
          sx={{mt: 3, ml: 1 ,height: 44, width: 100 ,sm:6 , xs:12 }}
        >
          Back
        </BazaarButton>
        </Grid>
        <Grid item xs={8}>
        <BazaarButton
          fullWidth
          
          onClick={()=> Context.setStep(4)}
          color="primary"
          variant="contained"
      
          sx={{ mt: 3, ml:-20 ,height: 44, width: 100 ,sm:6 , xs:12  }}
        >
          Next
        </BazaarButton>
        </Grid> */}
        </Grid>
      {/* <BlueButton onClick={() => Context.setStep(2)}>Back</BlueButton>
      <GreenButton onClick={() => Context.setStep(4)}>Next</GreenButton> */}
       
    </form>
    //</Wrapper>

  );
};


const initialValues = {
  cin: "",
  rib: "",
  banque: "",
  agence: "",

};
const validationSchema = yup.object().shape({
  banque: yup.string().required("required"),
  agence: yup.string().required("required"),

  rib: yup.number().required("required"),
  cin: yup.number().required("required"),
 
});



export default BankSignup;
