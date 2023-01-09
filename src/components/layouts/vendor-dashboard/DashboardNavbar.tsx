import { Search } from "@mui/icons-material";
import { Box, Button, styled, Theme, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import Globe from "components/icons/Globe";
import Toggle from "components/icons/Toggle";
import { useRouter } from "next/router";
import { FC } from "react";
import AccountPopover from "./popovers/AccountPopover";
import NotificationsPopover from "./popovers/NoficationPopover";
import {  Paragraph } from "components/Typography";
// custom styled components
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  zIndex: 11,
  paddingTop: "1.5rem",
  
  paddingBottom: "1.5rem",
  backgroundColor: "#ffffff",
  boxShadow: theme.shadows[2],
  color: theme.palette.text.primary,
}));

const StyledToolBar = styled(Toolbar)(() => ({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
}));

const ToggleWrapper = styled(FlexRowCenter)(({ theme }) => ({
  width: 40,
  height: 40,
  flexShrink: 0,
  cursor: "pointer",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
}));

const CustomButton = styled(Button)(({ theme }) => ({
  height: "40px",
  width:"190px",
  flexShrink: 0,
  marginLeft: 16,
  padding: "0 20px",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.down("xs")]: { display: "none" },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: 200,
  padding: "5px 10px",
  borderRadius: "8px",
  color: "theme.palette.grey[300]",
  backgroundColor:"#FFFFFF",
  border: "1px solid #00706a",
  [theme.breakpoints.down("md")]:{ display: "none" },
}));

// ===================================================================
type DashboardNavbarProps = {
  handleDrawerToggle: () => void;
};
// ===================================================================

const DashboardNavbar: FC<DashboardNavbarProps> = ({ handleDrawerToggle }) => {
  const router = useRouter();
  const downLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <DashboardNavbarRoot position="sticky">
      <Container maxWidth="xl">
         <StyledToolBar disableGutters>
          {/* {downLg && (
          //  <ToggleWrapper onClick={handleDrawerToggle}>
          //     {/* <Toggle /> */}
          {/* //   </ToggleWrapper> */}
          {/* )}   */}

          <CustomButton
            onClick={() => router.push("/")}
            startIcon={<Globe sx={{ color: "#2B3445",width:"14px",height:"14px" }} />}
          >
            <Paragraph  style={{color: "#2B3445"}}>
            Browse Website
            </Paragraph>
          </CustomButton>
          <Button
          variant="outlined"
       

            style={{color:"white",backgroundColor:"#E09351",width:"91px",
            height:"40px", marginLeft:"12px", borderRadius:"8px"}}
        >
          <Paragraph >Contact</Paragraph>
        </Button>
        <Button
          variant="outlined"
       

            style={{color:"white",backgroundColor:"#00706A",width:"180px",
            height:"40px",padding: "9px 16px", marginLeft: "12px", borderRadius:"8px"}}
        >
          <Paragraph >Création de contenu</Paragraph>
        </Button>

          <Box flexGrow={1} />

          <FlexBox alignItems="center" gap={2}>
            <StyledInputBase
              placeholder="Search anything..."
              style={{color: "#7D879C"}}
              startAdornment={<Search sx={{ color: "#00706A", mr: 1,width:"16px" ,height:"16px" }} />}
              
            />

            <NotificationsPopover />
            <AccountPopover />
          </FlexBox>
        </StyledToolBar>
      </Container>
    </DashboardNavbarRoot>
  );
};
export default DashboardNavbar;
