import { Box, Card, Divider, useTheme,Grid } from "@mui/material";

import NextImage from "next/image";
import React from "react";
import { H6 } from "components/Typography";
import CardMedia from '@mui/material/CardMedia';
import dynamic from "next/dynamic";
import {  marketShareChartOptions,productShareChartOptions,
   } from "./chartsOptions";
   import { Spacer } from "ui";


const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,});

const WishCard = () => {
  const theme = useTheme();
  const totalOrderseries = [
    { name: "Weekly", data: [7600, 8500, 10100, 9800, 8700, 1050, 9100] },];

  return (
    <Box>
      <Grid container spacing={2} >
      <Grid item  lg={9} xl={2} md={6} xs={12} >
        <CardMedia
          component="img"
          alt="welcome"
          sizes="cover"
          width= "100%"
          height="100%"
          image="/assets/images/banners/noel.jpg"
        />
     </Grid>
        <Grid item lg={3}  xl={2} md={6} xs={12} >
     
        <Card style={{height:"50%"  ,display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",}}>
          <H6 color="grey.600"> Répartition CA par catégorie</H6>
         <ReactApexChart
              height={180}
              series={[75]}
              type="radialBar"
              options={productShareChartOptions(theme)}
            />  
        </Card>
        <Spacer height={8}/>
        <Card style={{height:"48%"  ,display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",}}>
          <H6 color="grey.600"> Poucentage de produits vendus</H6>
          <ReactApexChart
              height={180}
              type="radialBar"
              series={[44, 55, 67]}
              options={marketShareChartOptions(theme)}
            />
        </Card>
        
        </Grid>

    
        </Grid>
        </Box>

  );
};

export default WishCard;