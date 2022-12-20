import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import BazaarSwitch from "components/BazaarSwitch";
import { FlexBox } from "components/flex-box";
import { Paragraph, Small } from "components/Typography";
import currency from "currency.js";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import {
  CategoryWrapper,
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "../StyledComponents";

// ========================================================================
type ProductRowProps = { product: any };
// ========================================================================

const ProductRow: FC<ProductRowProps> = ({ product }) => {
  const { category, name, price, image, qty,purchaseDate, id, published } = product;

  // state
  const router = useRouter();
  const [productPulish, setProductPublish] = useState(published);
  const [productPulish1, setProductPublish1] = useState(published);

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar src={image} sx={{ borderRadius: "8px" }} />
          <Box>
            <Paragraph>{name}</Paragraph>
            <Small color="grey.600">#{id}</Small>
          </Box>
        </FlexBox>
      </StyledTableCell>
  

      <StyledTableCell align="left">
        <CategoryWrapper>{purchaseDate}</CategoryWrapper>
      </StyledTableCell>

 
     
      <StyledTableCell align="left">
      {qty}
      </StyledTableCell>
      <StyledTableCell align="left">
        {currency(price, { separator: "," }).format()}
      </StyledTableCell>
      <StyledTableCell align="left">
        {currency(price, { separator: "," }).format()}
      </StyledTableCell>

  
      <StyledTableCell align="left">
        <BazaarSwitch
          color="info"
          checked={productPulish}
          onChange={() => setProductPublish((state) => !state)}
        />
      </StyledTableCell>
      <StyledTableCell align="left">
        <BazaarSwitch
          color="info"
          checked={productPulish1}
          onChange={() => setProductPublish1((state) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={() => router.push(`/admin/products/${id}`)}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProductRow;