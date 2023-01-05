import { Box, Card } from "@mui/material";
import { H3, H2, Paragraph } from "components/Typography";
import NextImage from "next/image";
import React from "react";

const WishCard = () => {
  return (
    <Card
      sx={{
        p: 3,
        height: "100%",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <H2 color="#00706A" mb={0.5}>
        Good Morning, Ines!
      </H2>
      <Paragraph color="grey.600">
      Voici ce qui se passe avec votre magasin aujourd&apos;hui!
      </Paragraph>

      <H3 mt={3}>15,350.25</H3>
      <Paragraph color="grey.600">Chiffre d&apos;affaire moyen</Paragraph>

      <H3 mt={1.5}>$10,360.66</H3>
      <Paragraph color="grey.600">Score</Paragraph>

      <Box
        sx={{
          right: 24,
          bottom: 0,
          position: "absolute",
          display: { xs: "none", sm: "block" },
        }}
      >
        <NextImage
          src="/assets/images/banners/dash.png"
          width={195}
          height={171}
          alt="Welcome"
        />
      </Box>
    </Card>
  );
};

export default WishCard;
