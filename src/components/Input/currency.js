import { TextField } from '@mui/material';
import React, { useCallback } from 'react';
import NumberFormat from 'react-number-format';
import { inputStyles } from '~/styles/inputStyles';

export const USD_SYMBOL = '$ ';
export const THOUSAND_SEPARATOR = ',';

export function Currency(props) {
  const { name, formik, label } = props;

  const onValueChange = useCallback(
    value => {
      formik.setFieldValue(name, value.floatValue);
    },
    [formik, name]
  );

  return (
    <NumberFormat
      prefix={USD_SYMBOL}
      name={name}
      variant="filled"
      fullWidth
      label={label}
      InputProps={{ disableUnderline: true }}
      data-testid={name}
      formik={formik}
      customInput={TextField}
      sx={inputStyles}
      fixedDecimalScale
      decimalScale={2}
      allowNegative={false}
      type="text"
      allowLeadingZeros
      thousandSeparator={THOUSAND_SEPARATOR}
      onValueChange={onValueChange}
    />
  );
}
