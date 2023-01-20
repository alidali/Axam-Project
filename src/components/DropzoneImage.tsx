 import { FC, useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// import { Box, Button, Divider } from "@mui/material";
// import { H5, Small } from "./Typography";
// import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';

// // ========================================================
// type DropZoneProps = {
//   title?: string;
//   imageSize?: string;
//   onChange: (files: File[]) => void;
// };
// // ========================================================

// const DropZone: FC<DropZoneProps> = ({
//   onChange,

 
// }) => {
//   const onDrop = useCallback(
//     (acceptedFiles: File[]) => onChange(acceptedFiles),
//     [onChange]
//   );

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     maxFiles: 10,
//     multiple: true,
//     accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg"] },
//   });

//   return (
//     <Box
//       py={4}
//       px={{ md: 10, xs: 4 }}
//       display="flex"
//       minHeight="200px"
//       maxWidth="127px"
//       alignItems="center"
//       borderRadius="10px"
//       border="1.5px dashed"
//       flexDirection="column"
//       borderColor="grey.300"
//       justifyContent="center"
//       textAlign="center"
//       bgcolor={isDragActive ? "grey.200" : "grey.100"}
//       sx={{ transition: "all 250ms ease-in-out", outline: "none" }}
//       {...getRootProps()}
//     >
//       <input {...getInputProps()} />
    
// <PhotoCameraBackIcon/>
//       <Divider
//         sx={{ "::before, ::after": { borderColor: "grey.300", width: 20 } }}
//       >
    
//       </Divider>

    

//       <Small color="grey.600"></Small>
//     </Box>
//   );
// };

// export default DropZone;