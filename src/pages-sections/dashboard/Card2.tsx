import { ArrowDropUp } from "@mui/icons-material";
import { Box, Card } from "@mui/material";
import { FlexBox } from "components/flex-box";
import { H3, H6, Paragraph } from "components/Typography";
import React, { FC } from "react";

// =========================================================
type Card2Props = {
  title: string;
  percentage: string;
  amount: string | number;
};
// =========================================================

const Card2: FC<Card2Props> = ({ children, title, amount, percentage }) => {
  return (
    <Card
      sx={{
        p: 2,
        gap: 2,
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }} 
    >
      <Box flexShrink={0} height="inherit">
        <FlexBox
          flexDirection="column"
          justifyContent="space-between"
          height="inherit"
        >
          <H6 color="#00706A">{title}</H6>

          <Box>
            <H3 color="#2B3445">{amount}</H3>
            <FlexBox mt={0.1} alignItems="center" color="info.main">
              <ArrowDropUp />
              <Paragraph fontSize={12}>{percentage}</Paragraph>
            </FlexBox>
          </Box>
        </FlexBox>
      </Box>

      <Box sx={{ "& > div": { minHeight: "0px !important",display:"flex-start"} }}>{children}</Box>
    </Card>
  );
};

export default Card2;
