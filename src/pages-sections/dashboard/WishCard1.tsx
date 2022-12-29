import { Box, Card ,Grid, Divider } from "@mui/material";
import { H3, H5, Paragraph } from "components/Typography";
import NextImage from "next/image";
import React from "react";
import CardMedia from '@mui/material/CardMedia';
const WishCard1 = () => {
  return (
    <Box>
      <Grid container spacing={2}>
      <Grid item  lg={4} xl={2} md={6} xs={12} >
        <CardMedia
        component="img"
         alt="welcome"
       
        image="/assets/images/banners/friday.png"
        
      />
        </Grid>

    
  <Grid item  lg={4} xl={2} md={6} xs={12} >
  <CardMedia
        component="img"
         alt="welcome"
        //  height="20%"
        // width="40%"
        image="/assets/images/banners/friday.png"
        
      />
      </Grid>
     
       <Grid item  lg={4} xl={2} md={6} xs={12} >
       <CardMedia
        component="img"
         alt="welcome"
        //  height="20%"
        // width="40%"
        image="/assets/images/banners/friday.png"
        
      />
      </Grid>
 
</Grid>

</Box> 
  );
};

export default WishCard1;