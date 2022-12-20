import { Box, Grid, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import Card2 from "./Card2";


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
    <Box>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={6} xs={12}>
  
        </Grid>

        <Grid item xl={3} lg={3} md={6} xs={12}>
        
        </Grid>

        <Grid item xl={3} lg={3} md={6} xs={12}>
       
        </Grid>

        <Grid item xl={3} lg={3} md={6} xs={12}>
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section3;