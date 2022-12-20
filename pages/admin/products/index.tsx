import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { TextField, Grid } from "@mui/material";
import SearchArea from "components/dashboard/SearchArea";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import Scrollbar from "components/Scrollbar";
import { H3 } from "components/Typography";
import useMuiTable from "hooks/useMuiTable";
import { GetStaticProps } from "next";
import { ProductRow } from "pages-sections/admin";
import React, { ReactElement } from "react";
import api from "utils/api/dashboard";

const tableHeading = [
  { id: "name", label: "Nom produit", align: "left" },
  { id: "date", label: "Date de référencement", align: "left" },
  { id: "qte", label: "Quantité", align: "left" },
  { id: "price", label: "Prix", align: "left" },
  { id: "pricepromo", label: "Prix Promo", align: "left" },
  { id: "published", label: "Publié", align: "left" },
  { id: "validation", label: "Validation", align: "left" },
  { id: "action", label: "Action", align: "center" },
];

// =============================================================================
ProductList.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

type ProductListProps = { products: any[] };
// =============================================================================

export default function ProductList(props: ProductListProps) {
  const { products } = props;

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({ listData: products });

  return (
    <Box py={4}>
      <H3 mb={2}>Liste de produits</H3>

      <SearchArea
        handleSearch={() => { }}
        buttonText="Ajout Produit"
        handleBtnClick={() => { }}
        searchPlaceholder="Search Product..."
      />

      <Grid container spacing={24}>
        <Grid item xs={4}>

          <TextField
            select
            sx={{ minWidth: 350, background: 'white' }}

            size="medium"
            name="Select category"
            placeholder="Select category"
            label="Select category"

          >
          </TextField>
        </Grid>
        <Grid item xs={4}>

          <TextField
            select
            sx={{ minWidth: 350, background: 'white' }}

            size="medium"
            name="Select category"
            placeholder="Select Brand"
            label="Select Brand"

          >
          </TextField>
        </Grid>

      </Grid>

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
                {filteredList.map((product, index) => (
                  <ProductRow product={product} key={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(products.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.products();

  return { props: { products } };
};
