import { Box, Grid, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import Card2 from "./Card2";
import {
  marketShareChartOptions,
  productShareChartOptions,
  totalOrderChartOptions,
  weeklyChartOptions,
} from "./chartsOptions";
import { Spacer } from 'ui';

// apext chart instance
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Section3 = () => {
  const theme = useTheme();

  // weekly chart series
  const series = [
    { name: "Weekly", data: [7600, 8500, 10100, 9800, 8700, 1050, 9100] },
  ];
  const totalOrderseries = [
    { name: "Weekly", data: [7600, 8500, 10100, 9800, 8700, 1050, 9100] },
  ];

  return (
    <Box >
      <Grid container spacing={3}>
        <Grid item xl={3} lg={7} md={3} xs={6} >
          <Card2 title="Evolution du CA" percentage="25.25%" amount="$10,240">
            <ReactApexChart
              type="bar"
              height={100}
              series={series}
              options={weeklyChartOptions(theme)}
            />
          </Card2>
        </Grid>
        <Grid item xl={3} lg={5} md={6} xs={6}>
          <Card2 title="Nombre de visiteurs " percentage="2.65%" amount="$12,260">
           
          </Card2>
        </Grid>
        
        </Grid>
       <Spacer height={22}/>
      <Grid container spacing={3}>
      <Grid item xl={3} lg={7} md={3} xs={6}>
          <Card2 title="Taux des produits actifs" percentage="10.25%" amount="39.56%">
            <ReactApexChart
              height={150}
              series={[65]}
              type="radialBar"
              options={productShareChartOptions(theme)}
            />
          </Card2>
        </Grid>
        
        <Grid item xl={3} lg={5} md={6} xs={6}>
          <Card2 title="Produit référencés" percentage="2.65%" amount="$12,260">
        
          </Card2>
        </Grid>
        </Grid>
      
       
        <Spacer height={24}/>
        <Grid item xl={3} lg={12} md={6} xs={6}>
          <Card2 title="Répartition du CA par catégorie" percentage="2.65%" amount="$12,260">
            <ReactApexChart
              height={130}
              type="radialBar"
              series={[44, 55, 67]}
              options={marketShareChartOptions(theme)}
            />
          </Card2>
        </Grid>
    
      
    </Box>
  );
};

export default Section3;
