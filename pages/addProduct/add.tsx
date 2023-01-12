import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, styled, Tab } from "@mui/material";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";

import Categories from "pages-sections/AddProduct/Categories"
import React, { ReactElement, useState } from "react";
import Informations from "pages-sections/AddProduct/Informations";
import DescriptionPage from "pages-sections/AddProduct/DescriptionPage";
import Photo from "pages-sections/AddProduct/Photo";
import Sliders from "pages-sections/AddProduct/Sliders";

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
Add.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

export default function Add() {
  const [selectTab, setSelectTab] = useState("AddProduct");

  return (
    <Box py={6}>
      <Card sx={{ px: 3, py: 2 }}> 
        <TabContext value={selectTab}>
          <Box sx={{ borderBottom: 2, borderColor: "grey.300" }}>
            <StyledTabList
              onChange={(_, value) => setSelectTab(value)}
              variant="scrollable"
              
            >
              <Tab label="Informations" value="Informations"  sx={{fontWeight:'bold'}} disableRipple />
              <Tab label="Description" value="DescriptionPage"  sx={{fontWeight:'bold'}} disableRipple />
              <Tab label="Catégories" value="Categories" sx={{fontWeight:'bold'}} disableRipple />
              <Tab label="Images" value="Image" sx={{fontWeight:'bold'}} disableRipple />
              <Tab label="Slider" value="Slider" sx={{fontWeight:'bold'}} disableRipple />
            </StyledTabList>
          </Box>

           <StyledTabPanel value="Informations">
            <Informations/>
          </StyledTabPanel>

          <StyledTabPanel value="DescriptionPage">
            <DescriptionPage/>
          </StyledTabPanel> 
          <StyledTabPanel value="Categories">
            <Categories/>
          </StyledTabPanel> 
          <StyledTabPanel value="Image">
            <Photo/>
          </StyledTabPanel> 
         
          <StyledTabPanel value="Slider">
            <Sliders/>
          </StyledTabPanel> 
        </TabContext>
     </Card> 
    </Box>
  );
}