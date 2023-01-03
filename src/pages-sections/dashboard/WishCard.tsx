import { Box, Card, Divider, useTheme,Grid } from "@mui/material";
import NextImage from "next/image";
import React from "react";
import { H6 } from "components/Typography";
import CardMedia from '@mui/material/CardMedia';
import dynamic from "next/dynamic";
import {  marketShareChartOptions,productShareChartOptions} from "./chartsOptions";
import { Spacer } from "ui";
import styled from 'styled-components';
// @refresh reset
const StyleAl = styled.div`

@media screen and (max-width: 768px) {
  display: flex-block;
}

`

const StyleUn = styled.div`
width:71%;
display:inline-block;
justify-content: space-between;
margin-top:3%;
@media screen and (max-width: 768px) {
  display: flex-block;
}

`
const StyleDeux = styled.div`

display: inline-block;
margin-left: 2%;
margin-top:3%;
justify-content: space-between;
width:22.5%;
@media screen and (max-width: 768px) {
  display: flex-block;
}

`
// const StyleTrois = styled.div`
// display: inline-block;
// justify-content: space-between;
// margin-left: 73%;
// margin-top:3%;
// width:22.5%;
// flex-wrap: wrap;
// @media screen and (min-width: 768px) {
//   display: flex-block;
// }
// `

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,});

const WishCard = () => {
  const theme = useTheme();
  const totalOrderseries = [
    { name: "Weekly", data: [7600, 8500, 10100, 9800, 8700, 1050, 9100] },];

  return (
    
      <StyleAl>
      <StyleUn >
        <CardMedia
          component="img"
          alt="welcome"
          sizes="cover"
          width= "100%"
          height="100%"
          image="/assets/images/banners/noel.jpg"
        />
     </StyleUn>
    
        <StyleDeux>
     
        <Card style={{height:"80%" ,
      
     
       }}>
          <H6 color="grey.600"> Répartition CA par catégorie</H6>
         <ReactApexChart
              height={180}
              series={[75]}
              type="radialBar"
              options={productShareChartOptions(theme)}
            />  
            </Card>
         <Spacer height={12}/> 
       
        <Card style={{height:"80%",
      
      
    }}>
          <H6 color="grey.600"> Poucentage de produits vendus</H6>
          <ReactApexChart
              height={180}
              type="radialBar"
              series={[44, 55, 67]}
              options={marketShareChartOptions(theme)}
              />
        </Card>
       

              </StyleDeux>
    
        </StyleAl>
     

  );
};

export default WishCard;