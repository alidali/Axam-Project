import { Box, Card, Grid, Divider } from "@mui/material";
import { H3, H5, Paragraph } from "components/Typography";
import NextImage from "next/image";
import React from "react";
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';

const Tout = styled.div`

@media screen and (max-width: 768px) {
  display: flex-block;
}
`
const One =styled.div`
width:30%;
justify-content: space-between;
display: inline-block;
margin-right:17px;
margin-top:3%;
margin-bottom:3%;
@media screen and (max-width: 768px) {
  display: flex-block;
}

`
// const Two =styled.div`
// width:31%;
// justify-content: space-between;
// display: inline-block;
// margin-right:17px;
// margin-top:3%;
// margin-bottom:3%;
// @media screen and (min-width: 768px) {
//   display: flex-block;
// }
// `
// const Three =styled.div`
// width:31%;
// display: inline-block;
// justify-content: space-between;
// margin-top:3%;
// margin-bottom:3%;
// @media screen and (min-width: 768px) {
//   display: flex-block;
// }
// `
const WishCard1 = () => {
  return (

    <Tout>
      <One >
        <CardMedia
          component="img"
          alt="welcome"

          image="/assets/images/banners/friday.png"

        />
      </One>


      <One>
        <CardMedia
          component="img"
          alt="welcome"
          //  height="20%"
          // width="40%"
          image="/assets/images/banners/friday.png"

        />
      </One>

      <One>
        <CardMedia
          component="img"
          alt="welcome"
          //  height="20%"
          // width="40%"
          image="/assets/images/banners/friday.png"

        />
      </One>


    </Tout>

  );
};

export default WishCard1;