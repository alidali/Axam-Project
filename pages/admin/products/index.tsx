import { Box, Card, Stack, Table, TableContainer } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import { TextField, Grid } from '@mui/material'

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
//import { DataCategories } from "utils/api/getcategory";

const tableHeading = [
  { id: 'name', label: 'Nom produit', align: 'left' },
  { id: 'date_added', label: 'Date de référencement', align: 'left' },
  { id: 'total_allowed_quantity', label: 'Quantité', align: 'left' },
  { id: 'price', label: 'Prix', align: 'left' },
  { id: 'amount', label: 'Prix Promo', align: 'left' },
  { id: 'published', label: 'Publié', align: 'left' },
  { id: 'payment', label: 'Validation', align: 'left' },
  { id: 'action', label: 'Action', align: 'center' }
]

// =============================================================================
ProductList.getLayout = function getLayout (page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>
}
// =============================================================================

type ProductListProps = { products: any[] }

// =============================================================================

export default function ProductList (props: ProductListProps) {
  // ========================================================================
  // ========================================================================
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])

  useEffect(() => {
    const token =
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ0MDkwMjYsImlzcyI6ImVzaG9wIiwiZXhwIjoxNjY0NDEwODI2fQ.R9yCge_10pnDkSjL9aospCdvnRBGYFI4dsOsVaW7fkE'
    fetch('http://5.135.194.236:8181/app/v1/api/get_categories', {
      method: 'POST',
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json())

      .then(data => setData(data.data))

    fetch('http://5.135.194.236:8181/app/v1/api/get_products', {
      method: 'POST',
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json())

      .then(data2 => setData2(data2.data))
  }, [])
  console.log(data, 'data')
  console.log(data2.length, 'Num')
  const { products } = props

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({ listData: products })

  return (
    <Box py={4}>
      <H3 mb={2}>Liste des produits</H3>
    

      <Grid container spacing={9}>
        <Grid item xs={4}>
          <SearchArea
            handleSearch={() => {}}
            buttonText='Ajout Produit'
            handleBtnClick={() => {}}
            searchPlaceholder='Search Product'
          />
        </Grid>

        <Grid item xs={3}>
        <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Catégorie</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  
                  id='demo-simple-select'
                  label='Catégorie'
                  
                >
                  {data?.map(value => (
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
                  rowCount={products.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {data2.map((product, index) => (
                    <ProductRow product={product} key={index} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Stack alignItems='center' my={4}>
            <TablePagination
              onChange={handleChangePage}
              count={Math.ceil(products.length / rowsPerPage)}
            />
          </Stack>
        </Card>
      </Grid>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.products()

  return { props: { products } }
}
