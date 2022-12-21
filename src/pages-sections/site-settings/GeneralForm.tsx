import { Box, Button, Grid, styled, TextField } from "@mui/material";
import { H4 } from "components/Typography";
import DropZone from "components/DropZone";
import { Formik } from "formik";
import React, { FC } from "react";
import * as yup from "yup";

const UploadBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  padding: "5px 10px",
  borderRadius: "4px",
  display: "inline-block",
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
}));

// form field validation
const validationSchema = yup.object().shape({
  nom_vendeur: yup.string().required("Le nom du vendeur est obligatoire"),
  prenom_vendeur: yup.string().required("Le prénom du vendeur est obligatoire"),
  email: yup.string().required("L'email du vendeur est obligatoire"),
  mot_passe: yup.string().required(" Le mot de passe du vendeur est obligatoire"),
  phone: yup.number().required("Le numéro de téléphone  du vendeur est obligatoire"),
});

const GeneralForm: FC = () => {
  const initialValues = {
    nom_vendeur: "",
    prenom_vendeur: "",
    email: "",
    mot_passe:"",
    phone:"",
  };

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
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
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Grid container spacing={3}>
          <Grid item xs={12}>
              {/* <H4>Top Bar Left Content</H4> */}
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="info"
                size="medium"
                name="nom_vendeur"
                label="Nom du vendeur "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nom_vendeur}
                error={!!touched.nom_vendeur && !!errors.nom_vendeur}
                helperText={touched.nom_vendeur && errors.nom_vendeur}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="info"
                size="medium"
                onBlur={handleBlur}
                onChange={handleChange}
                name="prenom_vendeur"
                label="Prénom du vendeur"
                value={values.prenom_vendeur}
                error={!!touched.prenom_vendeur && !!errors.prenom_vendeur}
                helperText={touched.prenom_vendeur && errors.prenom_vendeur}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="info"
                size="medium"
                name="email"
                label="Email "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              
            <TextField
                fullWidth
                color="info"
                size="medium"
                type="password"
                name="mot_passe"
                label="Mot de passe "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mot_passe}
                error={!!touched.mot_passe && !!errors.mot_passe}
                helperText={touched.mot_passe && errors.mot_passe}
              />
             
            </Grid>

            <Grid item md={6} xs={12}>
              
              <TextField
                  fullWidth
                  color="info"
                  size="medium"
                  type="number"
                 
                  name="phone"
                  label="Téléphone "
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  error={!!touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
                />
               
              </Grid>
           
          </Grid>

          <Button type="submit" color="info" variant="contained" sx={{ mt: 4 }}>
           Valider
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default GeneralForm;
