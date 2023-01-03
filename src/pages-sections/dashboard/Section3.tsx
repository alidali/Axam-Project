import { Box, Grid, useTheme, Card } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import Card2 from "./Card2";
import { H6 } from "components/Typography";
import styled from 'styled-components';
import { Spacer } from 'ui'
import { totalOrderChartOptions, } from "./chartsOptions";
//  @refresh reset

const StyleTout = styled.div`

@media screen and (max-width: 768px) {
  display: flex-block;
}

`
const StyleOne = styled.div`

display: inline-block;
justify-content: space-between;
margin-right:14px;
@media screen and (max-width: 768px) {
  display: flex-block;
}

`
const StyleSecond = styled.div`
display: inline-block;
justify-content: space-between;
margin-right:15px;
@media screen and (max-width: 768px) {
  display: flex-block;
}
`
const StyleThird = styled.div`
display: inline-block;
justify-content: space-between;
margin-right:15px;
@media screen and (max-width: 768px) {
  display: flex-block;
}
`
const StyleFour = styled.div`
display: inline-block;
justify-content: space-between;
@media screen and (max-width: 768px) {
  display: flex-block;
}
`



const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Section3 = () => {
  const theme = useTheme();
  const totalOrderseries = [
    { name: "Weekly", data: [7600, 8500, 10100, 9800, 8700, 1050, 9100] },
  ];

  return (
    <StyleTout >

      <StyleOne >
        <Card2 title="Nombre des commandes lors du mois" percentage="10.25%" amount="39">
        </Card2>
      </StyleOne>
      <StyleSecond>
        <Card2 title="Produit référencés" percentage="2.65%" amount="12,26">
        </Card2>
      </StyleSecond>
      <StyleThird >
        <Card2 title="Chiffre d'affaire" percentage="2.65%" amount="24">
        </Card2>
      </StyleThird>
      <StyleFour>
        <Card2 title="Chiffre d'affaire" percentage="2.65%" amount="24">
        </Card2>
      </StyleFour>
    </StyleTout>
  );
};

export default Section3;
