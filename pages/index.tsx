import { Box } from "@mui/material";
import Setting from "components/Setting";
import { NextPage } from "next";
import Section1 from "pages-sections/inscription/Section1";
import { useState } from "react";
import StepContext from "StepContext";

const IndexPage: NextPage = () => {
  const [filterDemo, setFilterDemo] = useState("");

  return (
    <Box id="top" overflow="hidden" bgcolor="background.paper">
      <StepContext />
    </Box>
  );
};

export default IndexPage;
