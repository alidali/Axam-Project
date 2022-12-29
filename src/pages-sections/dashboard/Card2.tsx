import { ArrowDropUp } from "@mui/icons-material";
import { Box, Card } from "@mui/material";
import { FlexBox } from "components/flex-box";
import { H3, H6, H7, H8, Paragraph } from "components/Typography";
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
        p: 3,
        pr: 1,
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
          <H7 color="grey.600">{title}</H7>

          <Box>
          <div style={{display:"flex"}} >
            <H3>{amount}</H3>
            </div>
            <FlexBox mt={0.3} alignItems="center"  marginLeft={18} color="info.main">
              <ArrowDropUp />
              <Paragraph fontSize={12}  >{percentage} </Paragraph>
            </FlexBox>
            
            <H8 marginLeft={12}> Taux evolution par du mois </H8>
          </Box>
        </FlexBox>
      </Box>

      <Box sx={{ "& > div": { minHeight: "0px !important" } }}>{children}</Box>
    </Card>
  );
};

export default Card2;