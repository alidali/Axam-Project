import { Checkbox, FormControlLabel } from "@mui/material";
import BazaarButton from "components/BazaarButton";
import BazaarTextField from "components/BazaarTextField";
import { FlexBox } from "components/flex-box";
import { H3, H5, Small } from "components/Typography";
import { useFormik } from "formik";
import React, { useCallback, useState, useContext } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
//import { Wrapper } from "./Login";
import { multiStepContext } from "StepContext";
import Link from "next/link";
import BazaarCard from "components/BazaarCard";
import { BlueButton, Divider, GreenButton, GreyCard, Spacer, Text } from "ui";



const RecapSignup = () => {
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

    });

  const Context = useContext(multiStepContext)

  return (
    <form onSubmit={Context.submitData}>
      <H3 textAlign="center" mb={1}>
        Résumé
      </H3>

      <GreyCard>
        <H5 textAlign="left" mb={1}>
          Données vendeur
        </H5>
        <Text fontSize="1rem">{"Email :"+String(Context.userData['Email'])}
        </Text>
        <Text fontSize="1rem">{"Nom :"+String(Context.userData['firstName'])}
        </Text>
        <Text fontSize="1rem">{"Prénom :"+String(Context.userData['lastName'])}
        </Text>
        <Text fontSize="1rem">{"Télèphone :"+String(Context.userData['mobile'])}
        </Text>
      </GreyCard>
      <Spacer height={10}/>
      <GreyCard>
        <H5 textAlign="left" mb={1}>
          Données Boutique
        </H5>
        <Text fontSize="1rem">{"Raison social :"+String(Context.userData['RaisonSocial'])}
        </Text>
        <Text fontSize="1rem">{"Matricule Fiscale :"+String(Context.userData['MatriculeFiscale'])}
        </Text>
        <Text fontSize="1rem">{"RNE :"+String(Context.userData['rne'])}
        </Text>
        <Text fontSize="1rem">{"Télèphone Fixe :"+String(Context.userData['TelephoneFixe'])}
        </Text>
        <Text fontSize="1rem">{"Addresse :"+String(Context.userData['addresse'])}
        </Text>
        <Text fontSize="1rem">{"Code postal :"+String(Context.userData['pincode'])}
        </Text>
      </GreyCard>
      <Spacer height={10}/>
      <GreyCard>
        <H5 textAlign="left" mb={1}>
          Coordonnées bancaires
        </H5>
        <Text fontSize="1rem">{"RIB :"+String(Context.userData['pan_number'])}
        </Text>
        <Text fontSize="1rem">{"Banque :"+String(Context.userData['bank_name'])}
        </Text>
        <Text fontSize="1rem">{"Agence :"+String(Context.userData['bank_code'])}
        </Text>
        <Text fontSize="1rem">{"CIN :"+String(Context.userData['cin_number'])}
        </Text>
        
      </GreyCard>
      <Spacer height={20}/>
      <BlueButton onClick={() => Context.setStep(3)} height="40px" width="150px">Back</BlueButton>
      <GreenButton onClick={Context.submitData} height="40px" width="150px">Submit</GreenButton>


    </form>

  );
};

const initialValues = {
  name: "",

};



export default RecapSignup;
