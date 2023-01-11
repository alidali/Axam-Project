
import { useRouter } from "next/router";
import Logo from "components/logo";
import { Card, CardProps ,Grid,Paper} from "@mui/material";
import { styled } from "@mui/material/styles";
import BazaarButton from "components/BazaarButton";
import BazaarTextField from "components/BazaarTextField";
import { H3, Small } from "components/Typography";
import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
import SocialButtons from "./SocialButtons";


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



const paperStyle={padding :20,height:'719',width:594, margin:"20px auto", backgroundColor:"#236C68" ,marginTop:"15%"}

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

    const router = useRouter();
  
  return (
    
    <Grid>
    <Paper elevation={10} style={paperStyle}>
    <div >
    <Logo/>
   
    </div>      
      <form onSubmit={handleSubmit} >
        <H3 textAlign="center" mb={1} color={"#FFFFFF"}  fontSize={"34px"} fontWeight={700} lineHeight={"30px"}>
         Se connecter
        </H3>
      
        <Small
          mb={4.5}
          display="block"
          fontSize="17px"
          fontWeight="400"
          color="white"
          textAlign="center"
        >
         C'est simple et rapide!
        </Small>
<label style={{color:'white',  marginLeft:"20%",fontSize:20}}>Email </label>

        <BazaarTextField

          fullWidth
          name="email"
          size="medium"
          variant="outlined"
          type="email"
          
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}  
          placeholder="exmple@mail.com"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
         
        />
<label style={{color:'white', marginLeft:"20%", fontSize:20,marginBottom:'10%' }}>Mot de passe </label>

        <BazaarTextField
        
         
          fullWidth
          size="medium"
          name="password"
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
          style={{color:"#236C68",backgroundColor:"white",width:344,marginTop:"4%", height: 44, fontSize:"16px",marginBottom:"30px",marginLeft:"20%"}}
        
        >
       Se connecter
      
        </BazaarButton>
     
      </form>

      <SocialButtons redirect="/signup" redirectText="Sign Up" /> 
      <BazaarButton
     
          fullWidth
      
          style={{color:"white",backgroundColor:"#2B3445", height: 44, fontSize:"16px",marginLeft:"20%",width:344,marginBottom:"10px"}}
          onClick={() => router.push("/")}
        >
     Créer un compte
      
        </BazaarButton>
      </Paper>
    </Grid>
    
  );
};

const initialValues = {
  email: "",
  password: "",
};

const formSchema = yup.object().shape({
 password: yup.string().required ("Mot de passe est obligatoire"),
  email: yup.string().email("Email est obligatoire").required("Email est obligatoire"),
});

export default Login;