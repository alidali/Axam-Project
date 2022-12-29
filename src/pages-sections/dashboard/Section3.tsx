import { Box, Grid, useTheme, Card } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import Card2 from "./Card2";
import { H6 } from "components/Typography";
 import styled from 'styled-components'

import { totalOrderChartOptions, } from "./chartsOptions";

// export const GridStyled = styled.div`

// paddingTop=3;
// `



const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Section3 = () => {
  const theme = useTheme();
  const totalOrderseries = [
    { name: "Weekly", data: [7600, 8500, 10100, 9800, 8700, 1050, 9100] },
  ];

  return (
    <Box>
      <Grid container spacing={2}>


        <Grid item xl={2} lg={3} md={6} xs={12} >
          <Card2 title="Nombre des commandes lors du mois" percentage="10.25%" amount="39">

          </Card2>
        </Grid>

        <Grid item xl={2} lg={3} md={6} xs={12}>
          <Card2 title="Produit référencés" percentage="2.65%" amount="12,26">

          </Card2>
        </Grid>

        <Grid item xl={2} lg={3} md={6} xs={12}>
          <Card2 title="Chiffre d'affaire" percentage="2.65%" amount="24">

          </Card2>
        </Grid>
        <Grid item xl={2} lg={3} md={6} xs={12}>
          <Card>
            <H6 color="grey.600"> courbe CA par mois</H6>
            <ReactApexChart
              type="area"
              height={130}
              series={totalOrderseries}
              options={totalOrderChartOptions(theme)}
            />

          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section3;