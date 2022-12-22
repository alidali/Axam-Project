import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, styled, Tab } from "@mui/material";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";

import ShopInfo from "pages-sections/site-settings/ShopInfo";
import SellerInfo from "pages-sections/site-settings/SellerInfo";

import BankInfo from "pages-sections/site-settings/BankInfo";
import React, { ReactElement, useState } from "react";
import BannerSlider from "pages-sections/site-settings/BannerSlider";
import ShippingVatForm from "pages-sections/site-settings/ShippingVatForm";
import SocialLinksForm from "pages-sections/site-settings/SocialLinksForm";

const StyledTabPanel = styled(TabPanel)(() => ({
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
}));

const StyledTabList = styled(TabList)(({ theme }) => ({
  "& .MuiTab-root.Mui-selected": { color: theme.palette.info.main },
  "& .MuiTabs-indicator": { background: theme.palette.info.main },
}));

// =============================================================================
SiteSettings.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

export default function SiteSettings() {
  const [selectTab, setSelectTab] = useState("vendor");

  return (
    <Box py={4}>
      <Card sx={{ px: 3, py: 2 }}>
        <TabContext value={selectTab}>
          <Box sx={{ borderBottom: 1, borderColor: "grey.300" }}>
            <StyledTabList
              onChange={(_, value) => setSelectTab(value)}
              variant="scrollable"
            >
              <Tab label="Données vendeur" value="vendor" disableRipple />
              <Tab label="Données boutique" value="shop" disableRipple />
              <Tab label="Données bancaire" value="bank" disableRipple />
             
              
              {/* <Tab label="Social Links" value="social-links" disableRipple />
              <Tab label="Banner Slider" value="banner-slider" disableRipple />
              <Tab label="Shipping & Vat" value="shipping-vat" disableRipple /> */}
            </StyledTabList>
          </Box>

          <StyledTabPanel value="vendor">
            <SellerInfo/>
          </StyledTabPanel>

          <StyledTabPanel value="bank">
            <BankInfo/>
          </StyledTabPanel>

          <StyledTabPanel value="shop">
            <ShopInfo />
          </StyledTabPanel>

          {/* <StyledTabPanel value="social-links">
            <SocialLinksForm />
          </StyledTabPanel>

          <StyledTabPanel value="banner-slider">
            <BannerSlider />
          </StyledTabPanel>

          <StyledTabPanel value="shipping-vat">
            <ShippingVatForm />
          </StyledTabPanel> */}
        </TabContext>
      </Card>
    </Box>
  );
}
