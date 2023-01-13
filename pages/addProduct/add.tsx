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
  "& .MuiTab-root.Mui-selected": { color: "#00706A" },
  "& .MuiTabs-indicator": { background: "#00706A" },
  marginTop:"1%",
}));

// =============================================================================
Add.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

export default function Add() {
  const [selectTab, setSelectTab] = useState("InformationsPage");
  const [disabledDescriptionPage, setDisabledDescriptionPage] = useState(true);
  const [disabledCategoriesPage, setDisabledCategoriesPage] = useState(true);
  const [disabledImagePage, setDisabledImagePage] = useState(true);

  const onClickNextInforamtionsPage = () => {
    setDisabledDescriptionPage(false)
    setSelectTab("DescriptionPage")
  }

  const onClickNextDescriptionPage = () => {
    setDisabledCategoriesPage(false)
    setSelectTab("CategoriesPage")
  }

  const onClickNextCategoriesPage = () => {
    setDisabledImagePage(false)
    setSelectTab("ImagePage")
  }


  return (
    <Box py={6}>
      <Card sx={{ px: 3, py: 2 }}> 
        <TabContext value={selectTab}>
          <Box sx={{ borderBottom: 1, borderColor: "grey.300" }}>
            <label style={{fontSize:'24px',color:'#2B3445',fontFamily:'Poppins', fontWeight:'bold'}}> Ajout Produit</label>
            <StyledTabList
              onChange={(_, value) => setSelectTab(value)}
              variant="scrollable"
              
            >
              <Tab label="Informations" value="InformationsPage"  sx={{fontWeight:'bold'}} disableRipple />
              <Tab label="Description" value="DescriptionPage"  sx={{fontWeight:'bold'}} disableRipple disabled={disabledDescriptionPage} />
              <Tab label="Catégories" value="CategoriesPage" sx={{fontWeight:'bold'}} disableRipple disabled={disabledCategoriesPage} />
              <Tab label="Images" value="ImagePage" sx={{fontWeight:'bold'}} disableRipple disabled={disabledImagePage}/>

            </StyledTabList>
          </Box>

           <StyledTabPanel value="InformationsPage">
            <Informations onClick={onClickNextInforamtionsPage}/>
          </StyledTabPanel>

          <StyledTabPanel value="DescriptionPage">
            <DescriptionPage onClick={onClickNextDescriptionPage}/>
          </StyledTabPanel> 
          <StyledTabPanel value="CategoriesPage">
            <Categories onClick={onClickNextCategoriesPage}/>
          </StyledTabPanel> 
          <StyledTabPanel value="ImagePage">
            <Photo />
          </StyledTabPanel> 
         
        
        </TabContext>
     </Card> 
    </Box>
  );
}