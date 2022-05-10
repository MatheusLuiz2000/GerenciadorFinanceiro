import React from 'react';
import { TextField } from '@mui/material';
import { inputStyles } from '~/styles/inputStyles';

export default function Input({ label, name, formik, type = 'text' }) {
  return (
    <>
      <TextField
        fullWidth
        label={label}
        variant="filled"
        InputProps={{ disableUnderline: true }}
        sx={inputStyles}
        name={name}
        type={type}
        value={formik.values[name]}
        errors={formik.errors[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched[name] && formik.errors[name]}
      />
    </>
  );
}
