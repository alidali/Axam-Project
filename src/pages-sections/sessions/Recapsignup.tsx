import BazaarButton from 'components/BazaarButton'
import { Edit } from "@mui/icons-material";
import { Grid } from '@mui/material'


import { useFormik } from 'formik'
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components'
import { CardHeader,Card ,CardContent} from '@mui/material';
import React, { useCallback, useState, useContext } from 'react'
import { multiStepContext } from 'StepContext'
import { GreyCard, Spacer, Text } from 'ui'

const Styledbtn1 = styled.div`
  display: inline-block;
  padding: 8px 16px;
  margin-left: 40%;
`
const Styledbtn2 = styled.div`
  display: inline-block;
  padding: 8px 16px;
  margin-left: 10%;
`

const StyledRecap = styled.div`
  justify-content: space-between;
  padding: 20px;
  margin: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const RecapSignup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility(visible => !visible)
  }, [])

  const handleFormSubmit = async (values: any) => {
    console.log(values)
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit
  })

  const Context = useContext(multiStepContext)
  console.log('step', Context.Step)

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

      "& .MuiCardHeader-root": {
        backgroundColor: "#236C68",
      
      },
     
    
    },
    header: {},
   
  })
  );

  const classes = useStyles();
  return (
    <form onSubmit={Context.submitData}>
      <Grid alignItems='center'>
      

        <StyledRecap>
          
        <Card className={classes.root}  style={{ border: "2px solid green" }}>
        <CardHeader  className={classes.header}  
       action={<Edit  onClick={() => Context.setStep(1)}/>}
     title ={" Données vendeur "}
     style={{color:"white",fontSize:"10"}}
    
        />

            <CardContent>
            <Text isBold>
              {'Type :' + String(Context.userData['Type'])}
              </Text>
            <Text isBold>
              {'Nom :' + String(Context.userData['Nom'])}
              </Text>
            <Text  isBold>
              {'Prénom :' + String(Context.userData['Prenom'])}
            </Text>
            <Text isBold>
              {'Email :' + String(Context.userData['Email'])}
            </Text>
            <Text isBold>
              {'Télèphone :' + String(Context.userData['Telephone'])}
            </Text>
            <Text isBold>
              {'CIN :' + String(Context.userData['Cin'])}
            </Text>
          
            </CardContent>
          </Card>

          <Card className={classes.root}  style={{ border: "2px solid green" }}>
        <CardHeader  className={classes.header}  
    action={<Edit onClick={() => Context.setStep(2)}/>}
     title={" Données boutique "}
     style={{color:"white"}}
        />
            <Text isBold>
              {'NomBoutique :' + String(Context.userData['NomBoutique'])}
            </Text>
            <Text isBold>
              {'Raison social :' + String(Context.userData['RaisonSocial'])}
            </Text>
            <Text isBold>
              {'Pays :' + String(Context.userData['pays'])}
            </Text>
            <Text isBold>
              {'gouvernorat :' + String(Context.userData['gouvernorat'])}
            </Text>
            <Text isBold>
              {'Délégation :' + String(Context.userData['delegation'])}
            </Text>
            <Text isBold>
              {'Ville:' + String(Context.userData['ville'])}
            </Text>
            <Text isBold>
              {'Addresse :' + String(Context.userData['Addresse'])}
            </Text>
            <Text isBold>
              {'Télèphone Fixe :' + String(Context.userData['TelephoneFixe'])}
            </Text>
            <Text isBold>
              {'Code postal :' + String(Context.userData['CodePostal'])}
            </Text>

            <Text isBold>
              {'Matricule Fiscale :' +
                String(Context.userData['MatriculeFiscale'])}
            </Text>
            <Text isBold>
              {'RNE :' + String(Context.userData['Rne'])}
            </Text>
          </Card>

          <Card className={classes.root}  style={{ border: "2px solid green" }}>
        <CardHeader  className={classes.header}  
       action={<Edit onClick={() => Context.setStep(3)}/>}
     title={" Données bancaire "}
     style={{color:"white"}}
        />
            <Text isBold>
              {'titulaireDuCompte :' +
                String(Context.userData['titulaireDuCompte'])}
            </Text>
            <Text isBold>
              {'RIB :' + String(Context.userData['Rib'])}
            </Text>
            <Text isBold>
              {'Banque :' + String(Context.userData['Banque'])}
            </Text>
            <Text isBold>
              {'Agence :' + String(Context.userData['Agence'])}
            </Text>

            <Text isBold>
              {'CodeBancaire :' + String(Context.userData['CodeBancaire'])}
            </Text>

            <Text isBold>
              {'iban :' + String(Context.userData['iban'])}
            </Text>
            <Text isBold>
              {'codeSwift:' + String(Context.userData['codeSwift'])}
            </Text>
          </Card>

          <Card className={classes.root}  style={{ border: "2px solid green" }}>
        <CardHeader  className={classes.header}  
       action={<Edit />}
     title={"Images"}
     style={{color:"white"}}
        />
           
          </Card>
        </StyledRecap>

        <Styledbtn1>
          <BazaarButton
            fullWidth
            onClick={() => Context.setStep(3)}
            color='secondary'
            variant='contained'
            style={{color:"white",backgroundColor:"#2B3445",maxWidth:"120px"}}
          >
            retour
          </BazaarButton>
        </Styledbtn1>

        <Styledbtn2>
          <BazaarButton
            fullWidth
            type='submit'
            color='primary'
            variant='contained'
            style={{color:"white",backgroundColor:"#236C68",maxWidth:"120px"}}
          >
            Suivant
          </BazaarButton>
        </Styledbtn2>
      </Grid>
    </form>
  )
}

const initialValues = {
  name: ''
}

export default RecapSignup