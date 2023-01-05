import { Box, Grid } from "@mui/material";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { GetStaticProps } from "next";
import Analytics from "pages-sections/dashboard/Analytics";
import Card1 from "pages-sections/dashboard/Card1";
import Card2 from "pages-sections/dashboard/Card2";
import Section3 from "pages-sections/dashboard/Section3";
import WishCard from "pages-sections/dashboard/WishCard";
import WishCard1 from "pages-sections/dashboard/WishCard1";
import { ReactElement } from "react";
import api from "utils/api/dashboard";
import { Spacer } from 'ui';
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
  const { cardList, recentPurchase, stockOutProducts } = props;

  return (
    <Box py={4}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <WishCard />
        </Grid>

        <Grid container item md={6} xs={12} spacing={3}>
          {cardList.map((item) => (
            <Grid item md={6} sm={6} xs={12} key={item.id}>
              <Card1
                title={item.title}
                color={item.color}
                amount1={item.amount1}
                amount2={item.amount2}
                percentage={item.percentage}
                status={item.status === "down" ? "down" : "up"}
              />
            </Grid>
          ))}
        </Grid>
      
        <Grid item xs={12}>
          <WishCard1 />
        </Grid>
       
        <Grid container spacing={3} paddingTop={3} marginLeft={0}>
          <Grid item xl={3} lg={6} md={6} xs={6}>
            <Section3 />
          </Grid>

          <Grid item xl={3} lg={6} md={6} xs={6}>
            <Analytics />
          </Grid>
        </Grid>

      </Grid>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const cardList = await api.getAllCard();
  const recentPurchase = await api.recentPurchase();
  const stockOutProducts = await api.stockOutProducts();

  return { props: { cardList, recentPurchase, stockOutProducts } };
};
