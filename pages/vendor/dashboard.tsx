import { Box, Grid } from "@mui/material";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { GetStaticProps } from "next";
import Analytics from "pages-sections/dashboard/Analytics";
import Card1 from "pages-sections/dashboard/Card1";
// import RecentPurchase from "pages-sections/dashboard/RecentPurchase";
import Section3 from "pages-sections/dashboard/Section3";

// import StockOutProducts from "pages-sections/dashboard/StockOutProducts";
import WishCard from "pages-sections/dashboard/WishCard";
import WishCard1 from "pages-sections/dashboard/WishCard1";
import { ReactElement } from "react";
import api from "utils/api/dashboard";
import styled from 'styled-components'
import { Spacer } from "ui";

const StyleAll = styled.div`

`
const StyleFirst =styled.div`
display: inline-flex;

`
const StyleSecond =styled.div`

display: inline-flex;
`
const StyleThrid =styled.div`
display: inline-flex;
`

// =============================================================================
VendorDashboard.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

type DashboardProps = {
  cardList: any[];
  recentPurchase: any[];
  stockOutProducts: any[];
};

// =============================================================================



export default function VendorDashboard(props: DashboardProps) {
  // const { cardList, recentPurchase, stockOutProducts } = props;

  return (
    <StyleAll>
  
    
     <Section3 />  
  
      {/* <Spacer height={12}/> */}
  
        <WishCard  />
     
       {/* <Spacer height={12}/> */}

         <WishCard1 />        
  
  

    </StyleAll>

  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const cardList = await api.getAllCard();
//   const recentPurchase = await api.recentPurchase();
//   const stockOutProducts = await api.stockOutProducts();

//   return { props: { cardList, recentPurchase, stockOutProducts } };
// };