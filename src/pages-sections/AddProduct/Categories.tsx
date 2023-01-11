import {
    Button,
    Box,
    Card,
    Grid,
    MenuItem,
    TextField,
    styled, 
    InputLabel
  } from '@mui/material'
  import { H3, H6, H4, Small } from 'components/Typography'
  import { Formik } from 'formik'
  import React, { FC } from 'react'
  import * as yup from 'yup'
  import AddBoxIcon from '@mui/icons-material/AddBox'
  import Scrolllist from 'components/Scrolllist'
  import { FlexBox, FlexRowCenter } from "components/flex-box";
  import InputBase from "@mui/material/InputBase";
  import { Search } from "@mui/icons-material";
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: "800px",
    padding: "5px 10px",
    borderRadius: "8px",
    color: theme.palette.grey[500],
    backgroundColor: theme.palette.grey[100],
    [theme.breakpoints.down("md")]: { display: "none" },
  }));
  const validationSchema = yup.object().shape({
   
  });

  const Categories:FC = () => {
    const initialValues = {

  
  };
    
    const handleFormSubmit = async (values) => {
      console.log(values);
    };
    return (
      // <Card sx={{ p: 6 }}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
            handleSubmit
          }) => (
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <Grid container spacing={2} paddingTop={3} paddingLeft={5}>
                  <FlexBox alignItems="center" gap={2}>
            <StyledInputBase
              placeholder="Cherche catégorie/sous catégorie..."
              startAdornment={<Search sx={{ color: "grey.500", mr: 1 }} />}
            />
             </FlexBox>
                <Grid item  xs={12}>
                <H4> Catégories</H4>

              
                <Scrolllist /> 
              </Grid>
              <Grid item xs={10}>
                <H6
                  borderColor='grey.900'
                  fontFamily={'open Sans'}
                  fontSize={12}
                  color={'inherit'}
                >
                  Dans le cas où les catégories présentées ne correspondant pas
                  à notre catégorie de produits veuillez proposer une autre
                  catégorie
                </H6>
              </Grid>
              <Grid item xs={3.5}>
                <TextField
                  fullWidth
                  name='add_category'
                  label='Ajout categorie'
                  color='info'
                  size='medium'
                  variant='outlined'
                  placeholder='Ajout categorie'
                  value={values.add_categorie}
                  onBlur={handleBlur}
                  error={!!touched.add_category && !!errors.add_category}
                  helperText={touched.add_category && errors.add_category}
                  InputProps={{
                    startAdornment: (
                      <AddBoxIcon
                        fontSize='small'
                        color='inherit'
                        sx={{ mr: 1 }}
                      />
                    )
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant='contained' color='info' type='submit'>
                  Valider
                </Button>
              </Grid>
              </Grid>
              
            </form>
         )}
         </Formik>
        //  </Card>
         )
}
         export default Categories