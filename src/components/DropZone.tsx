import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Button, Divider } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { H5, Small } from "./Typography";

// ========================================================
type DropZoneProps = {
  title?: string;
  imageSize?: string;
  onChange: (files: File[]) => void;
};
// ========================================================

const DropZone: FC<DropZoneProps> = ({


}) => {
 

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
   
    maxFiles: 10,
    multiple: true,
    accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg"] },
  });

  return (
    <Box
     
      display="flex"
      flexDirection="column"
      justifyContent="left"
      textAlign="left"
     
    
      sx={{ transition: "all 250ms ease-in-out", outline: "none" }}
      {...getRootProps()}
    >
     
      <Button 
       sx={{height: 44, textAlign:"left" }}
        type="button"
        variant="outlined"
      
      >

      Upload
      <CloudUploadIcon fontSize="small" color='inherit' sx={{ mr: 3}} />
      </Button>
     

     
    </Box>
  );
};

export default DropZone;