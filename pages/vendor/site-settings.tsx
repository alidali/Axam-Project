import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, styled, Tab } from "@mui/material";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import ShopInfo from "pages-sections/site-settings/ShopInfo";
import SellerInfo from "pages-sections/site-settings/SellerInfo";
import BankInfo from "pages-sections/site-settings/BankInfo";
import React, { ReactElement, useState } from "react";

const StyledTabPanel = styled(TabPanel)(() => ({
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
}));

const StyledTabList = styled(TabList)(({ theme }) => ({
  "& .MuiTab-root.Mui-selected": { color: "#00706A"},
  "& .MuiTabs-indicator": { background: "#00706A" },
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
          <label style={{fontSize:'24px',color:'#2B3445', fontWeight:'bold'}}> Editer le profil</label>
            <StyledTabList
              onChange={(_, value) => setSelectTab(value)}
              variant="scrollable"
            >
              <Tab label="Données vendeur" style={{fontWeight: 'bold'}}  value="vendor" disableRipple />
              <Tab label="Données boutique" style={{fontWeight: 'bold'}}  value="shop" disableRipple />
              <Tab label="Données bancaire" style={{fontWeight: 'bold'}}  value="bank" disableRipple />
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
        </TabContext>
      </Card>
    </Box>
  );
}
