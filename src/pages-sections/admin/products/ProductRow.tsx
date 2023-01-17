import { Delete, Edit } from '@mui/icons-material'
import { Avatar, Box, IconButton, useTheme, styled } from '@mui/material'
import { Done } from '@mui/icons-material'
import ClearIcon from '@mui/icons-material/Clear'
import Switch from '@mui/material/Switch';
import { useState, useEffect } from 'react'
import { FlexBox } from 'components/flex-box'
import { Paragraph, Small } from 'components/Typography'
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
  const {name, price,  id,  published, payment,total_allowed_quantity,special_price,date_added}
   = product

  // state

  const router = useRouter()
  const [productPulish, setProductPublish] = useState(published)

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
 
  const switchStyle = {
    borderRadius: 2,
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: " #7D879C"
    },
    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: '#236C68'
    },
    "& .MuiSwitch-track": {
      opacity: 9,
      borderRadius: 22 / 2,
      backgroundColor: "#EBEFF4",}
      ,
    "& .MuiSwitch-switchBase": {
      color: '#236C68'
    },
  }
  

  return (
    <StyledTableRow tabIndex={-1} role='checkbox'>
      <StyledTableCell align='center'>
     
        <FlexBox alignItems='center' gap={2}>
        <Avatar src={product.image} sx={{ borderRadius: "8px" }} />
          <Box>
            <Paragraph color="black" fontSize={'16px'} fontWeight={'bold'} textAlign='left'>{name}</Paragraph>
          </Box>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell  align='center'>
      <Paragraph color="black" fontSize={'16px'} fontWeight={'bold'}>{product.variants[0].date_added}</Paragraph>
      </StyledTableCell>

      <StyledTableCell  align='center'>
      <Paragraph color="black" fontSize={'16px'} fontWeight={'bold'}>{total_allowed_quantity}</Paragraph></StyledTableCell>
      
      <StyledTableCell align='center'>
      <Paragraph color="black" fontSize={'16px'} fontWeight={'bold'}>{product.variants[0].price}</Paragraph></StyledTableCell>                           
         
       
      <StyledTableCell align='center'>
      <Paragraph color="black"  fontSize={'16px'}fontWeight={'bold'}>
        {product.variants[0].special_price}  </Paragraph></StyledTableCell> 



      <StyledTableCell align='center'>
        <Switch 
    
    sx={switchStyle}
    defaultChecked
          checked={productPulish}
          onChange={() => setProductPublish(state => !state)}
        />
      </StyledTableCell>
      <StyledTableCell align='center'>
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
       
        <IconButton color='primary' sx={{ ml: 1, p: 1 }}>
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
