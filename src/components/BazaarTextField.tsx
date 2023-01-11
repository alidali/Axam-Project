import { Box, BoxProps, TextField, TextFieldProps } from "@mui/material";
import { white } from "theme/themeColors";
import { Small } from "./Typography";

export interface BazaarTextFieldProps {}


const BazaarTextField: React.FC<TextFieldProps & BoxProps> = ({
  label,
  InputProps,
  ...props
}: any) => {
  const boxProps: any = {};
  const textFieldProps: any = {};

  for (const key in props) {
    if (spacePropList.includes(key)) {
      boxProps[key] = props[key];
    } else textFieldProps[key] = props[key];
  }

  return (
    <Box {...boxProps}>
      {label && (
        <Small
       
          display="block"
          mb={1}
          color="#FFFFFF"
          textAlign="center"
          fontWeight="600"
        
          fontSize={20}
          
         
        >
          {label}
        </Small>
      )}
      <TextField 
      
        InputProps={{
          ...InputProps,
          
          style: {
           
            ...InputProps?.style,
          
            border: "1px solid white ",
            height: 44,
            width:344,
            marginLeft:"20%",
            color:"white"
         
          },
        }}
        {...textFieldProps}
      />
    </Box>
  );
};

const spacePropList = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingX",
  "paddingY",
];

export default BazaarTextField;
