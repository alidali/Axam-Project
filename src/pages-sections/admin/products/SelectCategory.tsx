import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Grid } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

export default function BasicSelect() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token =
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ0MDkwMjYsImlzcyI6ImVzaG9wIiwiZXhwIjoxNjY0NDEwODI2fQ.R9yCge_10pnDkSjL9aospCdvnRBGYFI4dsOsVaW7fkE';
    fetch('http://5.135.194.236:8181/app/v1/api/get_categories', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())

      .then((data) => setData(data.data));
  }, []);
  console.log(data, 'ddd');



  return (
    <Grid item xs={3}>
      <FormControl fullWidth>
        <InputLabel id="category">Catégorie</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          disabled={true}
          >
           {data?.map(value => (
                  
         <MenuItem  value={value.id}>{value.name}   </MenuItem>))}
        
        </Select>
        
      </FormControl>
    </Grid>
  );
}
