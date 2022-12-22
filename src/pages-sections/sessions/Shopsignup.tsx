import { Checkbox, FormControlLabel } from "@mui/material";
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
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

import { Button, Divider, Grid, IconButton, TextField } from "@mui/material";
const ShopSignup = () => {
  
  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };

  const { values, errors, touched, handleBlur,handleChange } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema:formSchema,
    });

  const Context = useContext(multiStepContext)
  console.log("step",Context.Step)

  return (
    
      <form onSubmit={()=> Context.setStep(1)}>
        <H3 textAlign="center" mb={3}  marginRight={10} marginTop={0} fontFamily={'open Sans'} fontSize ={20}>
       Données Boutique/société
        </H3>
        
        <Grid container spacing={5} >
        <Grid item xs={10}>
        <TextField
          fullWidth
          required
          name="Raisonsocial"
          size="small"
          label="Raison social"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['RaisonSocial']}
          onChange={(e)=>Context.setUserData({...Context.userData, "RaisonSocial" : e.target.value})}
          placeholder="Raison social"
          error={!!touched.RaisonSocial && !!errors.RaisonSocial}
          helperText={touched.RaisonSocial && errors.RaisonSocial}
        />
        </Grid>
        <Grid item xs={10}>
        <TextField
          
          fullWidth
          required
          name="MatriculeFiscale"
          size="small"
          label="Matricule Fiscale"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['MatriculeFiscale']}
          onChange={(e)=>Context.setUserData({...Context.userData, "MatriculeFiscale" : e.target.value})}
          placeholder="Matricule Fiscale"
          error={!!touched.matriculeFiscale && !!errors.matriculeFiscale}
          helperText={touched.matriculeFiscale && errors.matriculeFiscale}
        />
        </Grid>
        <Grid item xs={10}>
        <TextField
          fullWidth
          required
          name="Rne"
          size="small"
          label="RNE"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['Rne']}
          onChange={(e)=>Context.setUserData({...Context.userData, "Rne" : e.target.value})}
          placeholder="RNE"
          error={!!touched.RNE && !!errors.RNE}
          helperText={touched.RNE && errors.RNE}
        />
        </Grid>
        <Grid item xs={10}>
         <TextField
         
          fullWidth
          required
          name="telephoneFixe"
          size="small"
          label="Télèphone Fixe"
          type="number"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['TelephoneFixe']}
          onChange={(e)=>Context.setUserData({...Context.userData, "TelephoneFixe" : e.target.value})}
          placeholder="Télèphone Fixe"
          error={!!touched.telephoneFixe && !!errors.telephoneFixe}
          helperText={touched.telephoneFixe && errors.telephoneFixe}
        />
        </Grid>
        <Grid item xs={10}>
        <TextField
         
          fullWidth
          required
          name="Addresse"
          size="small"
          label="Addresse"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['Addresse']}
          onChange={(e)=>Context.setUserData({...Context.userData, "Addresse" : e.target.value})}
          placeholder="Addresse"
          error={!!touched.Addresse && !!errors.Addresse}
          helperText={touched.Addresse && errors.Addresse}
        />
        </Grid>
        <Grid item xs={10}>
         <TextField
         
          fullWidth
          required
          name="codePostal"
          size="small"
          type="string"
          label="Code postal"
          variant="outlined"
          onBlur={handleBlur}
          value={Context.userData['CodePostal']}
          onChange={(e)=>Context.setUserData({...Context.userData, "CodePostal" : e.target.value})}
          placeholder="Code postal"
          error={!!touched.codePostal && !!errors.codePostal}
          helperText={touched.codePostal && errors.codePostal}
        />
        </Grid>
        <Grid item xs={10}>
        <TextField
          fullWidth
          required
          name="NomBoutique"
          size="small"
         
          label="Nom Boutique"
          variant="outlined"
          onBlur={handleBlur}
          InputProps={{
            endAdornment: (
              <ReportProblemIcon  fontSize="small" color='inherit' sx={{ mr: 1 }} />
            ),
          }}
          value={Context.userData['NomBoutique']}
          onChange={(e)=>Context.setUserData({...Context.userData, "NomBoutique" : e.target.value})}
          placeholder="Nom Boutique"
          error={!!touched.NomBoutique && !!errors.NomBoutique}
          helperText={touched.NomBoutique && errors.NomBoutique}
        />
        </Grid>
        
        <Grid item xs={10} height={80}>
        {/* <FormControlLabel
          name="agreement"
          className="agreement"
          onChange={handleChange}
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={values.agreement || false}
            />
          } */}
          {/* // label={ */}
          {/* //   <FlexBox
          //     flexWrap="wrap"
          //     alignItems="center"
          //     justifyContent="flex-start"
              
          //   > */}
           <H6 ml={1}  borderColor="grey.900" fontFamily={'open Sans'} fontSize ={12} color={'inherit'} >
             <ReportProblemIcon fontSize="small" color='inherit' sx={{ mr: 1 }} />
             Les consommateurs, vous reconnaitrons sur Axam à travers votre nom de Boutique.
             Il est strictement interdit d&apos;utiliser un nom de marque déposée sans l&apos;autorisation 
             de son propriétaire.
             </H6>
            {/* </FlexBox> */}
          {/* }
        /> */}
        </Grid>
        <Grid item xs={10}>
        <BazaarButton
          fullWidth
          type="submit"
          color="secondary"
          variant="contained"
          sx={{ mt: 3, ml: 1 ,height: 44, width: 100 ,sm:6 , xs:12  }}
          onClick={()=> Context.setStep(1)}
        >
          Back
        </BazaarButton>
        </Grid>
        <Grid item xs={2}>
        <BazaarButton
          fullWidth
          onClick={()=> Context.setStep(3)}
          color="primary"
          variant="contained"
          sx={{ mt: 3, ml:-20 ,height: 44, width: 100 ,sm:6 , xs:12  }}
        >
          Next
        </BazaarButton>
        </Grid>
        </Grid>
        
      </form>

   
  );
};

const initialValues = {
  raisonsocial: "",
  rne : "",
  matriculeFiscale: "",
  Addresse: "",
  codePostal: "",
  telephoneFixe: "",
};
const formSchema = yup.object().shape({
  raisonsocial: yup.string().required("required"),
  rne: yup.string().required("required"),
  matriculeFiscale: yup.string().required("required"),
  Addresse: yup.string().required("required"),
  codePostal: yup.number().required("required"),
  TelephoneFixe: yup.number().required("required"),
 
});
export default ShopSignup;