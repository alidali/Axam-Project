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
  import { Spacer } from 'ui';
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: "800px",
    padding: "5px 10px",
    Height:"58px",
    borderRadius: "5px",
    border: "1px solid #D8E0E9",
    
    
    backgroundColor: "#ffff",
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
                  <Grid container spacing={2} paddingTop={3} paddingLeft={20}>
                  <FlexBox alignItems="center" gap={2}>
            <StyledInputBase
              placeholder="Cherche catégorie/sous catégorie..."
              style={{color: "black"}}
              startAdornment={<Search sx={{ color: "#00706A", mr: 1 }} />}
            />
             
             </FlexBox>
                <Grid item  xs={12}>
                <H4> Catégories recentes</H4>
                <Spacer height={10}/>
                <Grid item  xs={12}>
                <H4> Catégories</H4>
                </Grid>
              
                <Scrolllist /> 
              </Grid>
              <Grid item xs={10}>
                <H4>Autre</H4>
              </Grid>
                <Grid item xs={10}>
                <H6 color="#2B3445">
                  Dans le cas où les catégories présentées ne correspondant pas
                  à notre catégorie de produits veuillez proposer une autre
                  catégorie
                </H6>
              </Grid>
              <Grid item xs={3.5} sm={6}>
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
                 
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                  <Button variant='contained' color='info' type='submit'  style={{color:"white",backgroundColor:"#236C68"}}  sx={{  ml:15 ,height: 44, width: 210 ,sm:6 , xs:12, Radius:'5px'}}>
                 Enregister
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