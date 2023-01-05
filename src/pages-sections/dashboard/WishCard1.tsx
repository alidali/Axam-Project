import { Box, Card, Grid, Divider } from "@mui/material";
import { H3, H5, Paragraph } from "components/Typography";
import NextImage from "next/image";
import React from "react";
import CardMedia from '@mui/material/CardMedia';
import { Spacer } from 'ui';
const WishCard1 = () => {
    return (
        <Box>



            <Grid item xs={12} >
                <CardMedia
                    component="img"
                    alt="welcome"
                     height="100%"
                    width="100%"
                    image="/assets/images/banners/image1.png"

                />
            </Grid>
            <Spacer height={32}/>
            <Grid container spacing={3}>
                <Grid item xl={3} lg={6} md={6} xs={12}>

                    <CardMedia
                        component="img"
                        alt="welcome"
                         height="100%"
                        width="41%"
                        image="/assets/images/banners/image2.png"

                    />
                </Grid>
                
                <Grid item xl={3} lg={6} md={6} xs={12}>
                    <CardMedia
                        component="img"
                        alt="welcome"
                         height="100%"
                        width="40%"
                        image="/assets/images/banners/image3.png"
                       
                    />
                </Grid>
            </Grid>

        </Box>
    );
};

export default WishCard1;