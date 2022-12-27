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
import { BlueButton, GreenButton, Spacer } from "ui";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const BankSignup = () => {
  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };
  const { values, errors, touched, handleBlur, handleChange } =
  useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: formSchema2,
  });
    

    const Context= useContext(multiStepContext)
  return (


 
    <form onSubmit={()=> Context.setStep(4)}>
    
      <Grid container spacing={5} alignItems='center' paddingLeft={30}>
      <Grid item xs={12}>
      <TextField
        fullWidth
        required
        name="titulaireDuCompte"
        type="string"
        size="medium"
        label="Titulaire du compte"
        variant="outlined"
        onBlur={handleBlur}
        value={Context.userData['titulaireDuCompte']}
        onChange={(e)=>Context.setUserData({...Context.userData, "titulaireDuCompte" : e.target.value})}
        placeholder="titulaireDuCompte"
        error={!!touched.titulaireDuCompte && !!errors.titulaireDuCompte}
        helperText={touched.titulaireDuCompte && errors.titulaireDuCompte}
      />
      </Grid>
          <Grid item xs={12} >
      <TextField
        fullWidth
        required
        name="Rib"
        type="number"
        size="medium"
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
      <Grid item xs={12} >
        <DropZone/>
        </Grid>
      <Grid item xs={12} sm={6}>
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
      <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        required
        name="Agence"
        size="medium"
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
      <Grid item xs={12} sm={6}>
        <TextField
         
          fullWidth
          required
          name="CodeBancaire"
          size="medium"
          label="Code bancaire "
          variant="outlined"
          type="number"
          onBlur={handleBlur}
          value={Context.userData['CodeBancaire']}
          onChange={(e)=>Context.setUserData({...Context.userData, "CodeBancaire" : e.target.value})}
          placeholder="Code bancaire"
          error={!!touched.CodeBancaire && !!errors.CodeBancaire }
          helperText={touched.CodeBancaire && errors.CodeBancaire }
        />
        </Grid>
      
       
      
        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="iban"
          size="medium"
          label="Iban"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['iban']}
          onChange={(e)=>Context.setUserData({...Context.userData, "iban" : e.target.value})}
          placeholder="Iban"
          error={!!touched.iban && !!errors.iban}
          helperText={touched.iban && errors.iban}
        />
        </Grid>
        <Grid item xs={12} >
        <TextField
          fullWidth
          
          name="codeSwift"
          size="medium"
          label="Code swift"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['codeSwift']}
          onChange={(e)=>Context.setUserData({...Context.userData, "codeSwift" : e.target.value})}
          placeholder="Code swift"
          error={!!touched.codeSwift && !!errors.codeSwift}
          helperText={touched.codeSwift && errors.codeSwift}
        />
        </Grid>
       <Grid item xs={12} >
      <TextField
        fullWidth
        name="Cin"
        type="string"
        required
        size="medium"
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
      <Grid item xs={12} >
        <DropZone/>
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
          // onClick={()=> Context.setStep(4)}
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 3, ml:-5 ,height: 44, width: 100 ,sm:6 , xs:12  }}
        >
          Next
        </BazaarButton>
        </Grid>
    
        </Grid>
    
       
    </form>


  );
};


const initialValues = {
  titulaireDuCompte:"",
  cin: "",
  rib: "",
  banque: "",
  agence: "",
  codeSwift:"",
  iban:"",
  codeBancaire:"",
};
const formSchema2 = yup.object().shape({
  titulaireDuCompte: yup.string().required("required"),
  banque: yup.string().required("required"),
  agence: yup.string().required("invalid agence").required("agence is required"),
  codeSwift: yup.string().required("required"),
  iban: yup.number().required("required"),
  codeBancaire: yup.number().required("required"),
  rib: yup.number().required("required"),
  Cin: yup.number().required("required"),
 
});



export default BankSignup;