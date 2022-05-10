import React from 'react';
import Button from '@mui/material/Button';
import { ButtonStyles, ButtonStylesContained } from '~/styles/buttonStyles';

export default function ButtonComponent({
  children,
  variant = 'filled',
  ...rest
}) {
  return (
    <Button
      variant="contained"
      sx={variant === 'filled' ? ButtonStyles : ButtonStylesContained}
      {...rest}
    >
      {children}
    </Button>
  );
}
