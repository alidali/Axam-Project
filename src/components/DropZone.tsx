// import { FC, useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// import { Box, Button, Divider } from "@mui/material";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { H5, Small } from "./Typography";

// // ========================================================
// type DropZoneProps = {
//   title?: string;
//   imageSize?: string;
//   onChange: (files: File[]) => void;
// };
// // ========================================================

// const DropZone: FC<DropZoneProps> = ({


// }) => {
 

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
   
//     maxFiles: 10,
//     multiple: true,
//     accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg"] },
//   });

//   return (
//     <Box
     
//       display="flex"
//       flexDirection="column"
//       justifyContent="left"
//       textAlign="left"
     
    
//       sx={{ transition: "all 250ms ease-in-out", outline: "none" }}
//       {...getRootProps()}
//     >
     
//       <Button 
//        sx={{height: 44, textAlign:"left" }}
//         type="button"
//         variant="outlined"
      
//       >

//       Upload
//       <CloudUploadIcon fontSize="small" color='inherit' sx={{ mr: 3}} />
//       </Button>
     

     
//     </Box>
//   );
// };

// export default DropZone;





import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import React, { useState, useEffect } from "react";
import Dropzone, { useDropzone, DropzoneProps } from "react-dropzone";
import styled, { css } from "styled-components";
import { Box, Button, Divider } from "@mui/material";
interface dropZoneProps  extends DropzoneProps{
  files?: File[];
  onDrop?: (acceptedFiles: File[]) => void;
  onChange: (files: File[]) => void;
   
}

const DropZone = (props: dropZoneProps) => {
  const [files, setFiles] = useState<File[]>([]);
 
  const onDrop = (acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map(
        file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })
    )
    );
  }
  const {
    getRootProps,
  
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg"] } , onDrop: onDrop });

  const photo = files.map((file: any) => (
    <div key={file.name}>

      <img alt={file.name} src={file.preview}  height="200px" width="180px" />
       
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
   <>
      
        
      <Box
     
     py={4}
     px={{ md: 10, xs: 4 }}
     display="flex"
     minHeight="200px"
     maxWidth="185px"
     alignItems="center"
     borderRadius="10px"
     border="1.5px dashed"
     flexDirection="column"
     borderColor="grey.300"
     justifyContent="center"
     textAlign="center"
     bgcolor={isDragActive ? "grey.200" : "grey.100"}
     sx={{ transition: "all 250ms ease-in-out", outline: "none" }}
         {...getRootProps()}
      >
    
    {photo ?  <p>tttt</p> :<PhotoCameraBackIcon fontSize="small" color='inherit' sx={{ mr: 3}} />
  }
     {photo}
      </Box>
  
      
      </>
  );
};

export default DropZone;
