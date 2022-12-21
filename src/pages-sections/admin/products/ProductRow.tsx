import { Delete, Edit, RemoveRedEye } from '@mui/icons-material'
import { Avatar, Box, IconButton, useTheme, styled } from '@mui/material'
import { Done } from '@mui/icons-material'
import ClearIcon from '@mui/icons-material/Clear'
import BazaarSwitch from 'components/BazaarSwitch'
import { useState, useEffect } from 'react'
import { FlexBox } from 'components/flex-box'
import { Paragraph, Small } from 'components/Typography'
import currency from 'currency.js'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import {
  CategoryWrapper,
  StyledIconButton,
  StyledTableCell,
  StyledTableRow
} from '../StyledComponents'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'

// ========================================================================
type ProductRowProps = { product: any }
// ========================================================================

const ProductRow: FC<ProductRowProps> = ({ product }) => {
  const {
    category,
    name,
    price,
    image,
    qty,
    purchaseDate,
    id,
    published,
    payment,
    amount
  } = product

  // state
  const router = useRouter()
  const [productPulish, setProductPublish] = useState(published)
  const [productPulish1, setProductPublish1] = useState(published)
  const theme = useTheme()
  const StatusWrapper = styled(FlexBox)<{ payment: any }>(
    ({ theme, payment }) => ({
      borderRadius: '8px',
      padding: '3px 12px',
      display: 'inline-flex',
      color: payment ? theme.palette.error.main : theme.palette.success.main,
      backgroundColor: payment
        ? theme.palette.error[100]
        : theme.palette.success[100]
    })
  )
  // ========================================================================
  // ========================================================================
 
  
  

  return (
    <StyledTableRow tabIndex={-1} role='checkbox'>
      <StyledTableCell align='left'>
     
        <FlexBox alignItems='center' gap={1.5}>
        <Avatar src={product.image} sx={{ borderRadius: "8px" }} />
          <Box>
            <Paragraph>{product.name}</Paragraph>
          </Box>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align='left'>
      <Paragraph>{product.variants?.map(product=>(product.date_added))}</Paragraph>
      </StyledTableCell>

      <StyledTableCell align='left'>{product.total_allowed_quantity}</StyledTableCell>
      
      <StyledTableCell align='left'> {product.variants?.map(product=>(product.price))}</StyledTableCell>                           
         
      <StyledTableCell align='left'>{product.variants?.map(product=>(product.special_price))} </StyledTableCell> 



      <StyledTableCell align='left'>
        <BazaarSwitch
          color='info'
          checked={productPulish}
          onChange={() => setProductPublish(state => !state)}
        />
      </StyledTableCell>
      <StyledTableCell align='left'>
        <StatusWrapper
          gap={1}
          alignItems='center'
          payment={payment === 'Annulé' ? 1 : 0}
        >
          <Box>{payment}</Box>
          {payment === 'Annulé' && <ClearIcon sx={{ fontSize: 13 }} />}
          {payment !== 'Annulé' && <Done sx={{ fontSize: 13 }} />}
        </StatusWrapper>
      </StyledTableCell>

      <StyledTableCell align='center'>
        <IconButton
          onClick={() => router.push(`/admin/products/${id}`)}
          color='info'
          size='small'
        >
          <EditTwoToneIcon fontSize='small' />
        </IconButton>
        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>
        <IconButton color='primary' sx={{ ml: 2, p: 1 }}>
          <DeleteTwoToneIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  )
}

export default ProductRow

{
  /* <StyledIconButton>
          <DeleteTwoToneIcon />
        </StyledIconButton> */
}
// <StyledIconButton onClick={() => router.push(`/admin/products/${id}`)}>
//   {/ <Edit /> /}
// {/ </StyledIconButton> /}
