import { Box, Card, Stack, Table, TableContainer, Button } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import { useRouter } from "next/router";
import { TextField, Grid } from '@mui/material'
import { Add } from "@mui/icons-material";
import SearchArea from 'components/dashboard/SearchArea'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState, useEffect } from 'react'
import TableHeader from 'components/data-table/TableHeader'
import TablePagination from 'components/data-table/TablePagination'
import VendorDashboardLayout from 'components/layouts/vendor-dashboard'
import Scrollbar from 'components/Scrollbar'
import { H3 } from 'components/Typography'
import useMuiTable from 'hooks/useMuiTable'
import { GetStaticProps } from 'next'
import { ProductRow } from 'pages-sections/admin'
import React, { ReactElement } from 'react'

import api from 'utils/api/dashboard'
import { fontSize, height } from '@mui/system'
//import { DataCategories } from "utils/api/getcategory";

const tableHeading = [
  { id: 'name', label: 'Nom produit', align: 'center' },
  { id: 'date_added', label: 'Date de référencement', align: 'center' },
  { id: 'total_allowed_quantity', label: 'Quantité', align: 'center' },
  { id: 'price', label: 'Prix', align: 'center' },
  { id: 'special_price', label: 'Prix Promo', align: 'center' },
  { id: 'published', label: 'Publié', align: 'center' },
  { id: 'payment', label: 'Validation', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' }
]

// =============================================================================
ProductList.getLayout = function getLayout (page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>
}
// =============================================================================

type ProductListProps = { products: any[] }

// =============================================================================

export default function ProductList () {
  // ========================================================================
  // ========================================================================
  const [dataCategories, setDataCategories] = useState([])
  const [dataProduct, setDataProduct] = useState([])
  const token ='Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ0MDkwMjYsImlzcyI6ImVzaG9wIiwiZXhwIjoxNjY0NDEwODI2fQ.R9yCge_10pnDkSjL9aospCdvnRBGYFI4dsOsVaW7fkE'


  useEffect(() => {
    fetch('http://5.135.194.236:8181/app/v1/api/get_categories', {
      method: 'POST',
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json())

      .then(fetchDataCategories => setDataCategories(fetchDataCategories.data))

    fetch('http://5.135.194.236:8181/app/v1/api/get_products', {
      method: 'POST',
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json())

      .then(fetchDataProduct => setDataProduct(fetchDataProduct.data))
  }, [])
  console.log(dataCategories, 'data')
  console.log(dataProduct.length, 'Num')

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({ listData: dataProduct })
  const router = useRouter();
  console.log("order : ",order)
  console.log("orderBy : ",orderBy)
  console.log("selected : ",selected)
  console.log("rowsPerPage : ",rowsPerPage)
  console.log("useMuiTable({ listData: dataProduct }) : ",useMuiTable({ listData: dataProduct }))

  return (
    <Box py={4}>
      <H3  style={{color:"black",fontStyle: "normal",fontWeight: 700,fontSize:20}} mb={2}>Liste des produits</H3>
    

      <Grid container spacing={7}>
     
        <Grid item xs={3}>
       
          <SearchArea
            handleSearch={() => {}}
            searchPlaceholder='Recherche produit'
          />
     
        </Grid>
     
        <Grid item xs={3}>
        <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Catégorie</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  sx={{marginRight:"3%"}}
                  id='demo-simple-select'
                  label='Catégorie'
                  
                >
                  {dataCategories?.map(value => (
                    <div>
                      <MenuItem value={value.id} > {value.name}</MenuItem>

                      {value.children.map(value => (
                        <div>
                          <MenuItem value={value.id} >{value.name}</MenuItem>
                          {value.children.map(value => (
                            <MenuItem  >{value.name}</MenuItem>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}    
              </Select>
              </FormControl> 
              </Grid>

        <Grid item xs={3}>
        <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Marque</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  
                  id='demo-simple-select'
                  label='Marque'
                 // onChange={handleChange}
                >
                   </Select>
         </FormControl> 
        </Grid>
        <Grid item xs={3}>
        <Button onClick={() => router.push("./products/create")} variant='contained' type='submit' style={{fontSize:'16px',fontWeight:'bold',color:"white",backgroundColor:"#236C68",width:"220px",height:"50px",marginLeft:"15%"}} >
         <Add/>Ajouter un produit
        </Button>
          
        </Grid>
       
      </Grid>

      <Grid style={{ paddingTop: 40 }}>
        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 900 }}>
              <Table>
                <TableHeader
             
                  order={order}
                  hideSelectBtn
                  orderBy={orderBy}
                  heading={tableHeading}
                  rowCount={dataProduct.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList?.map((product, index) => (
                    <ProductRow product={product} key={index} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Stack alignItems='center' my={4}>
            <TablePagination
              onChange={handleChangePage}
              count={Math.ceil(dataProduct.length / rowsPerPage)}
            />
          </Stack>
        </Card>
      </Grid>
    </Box>
  )
}

