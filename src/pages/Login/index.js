import { useFormik } from 'formik';
import { Grid, Link, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import Button from '~/components/Button';
import Input from '~/components/Input';
import TurnOverLogo from '~/assets/images/turnoverbnb.png';
import { InitialValues, ValidationSchema } from '~/formik/Login';
import { LoginStyles, AlreadyHaveAccount } from '~/styles/LoginStyles';
import { login } from '~/services/api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { toastConfig } from '~/constants/toast';

export default function Login() {
  const history = useHistory();

  const onSubmit = useCallback(
    async values => {
      const makeLogin = await login(values);

      if (makeLogin.status !== 200) {
        return toast.error(makeLogin.data.message, toastConfig);
      }

      localStorage.setItem('access_token', makeLogin.data.access_token);
      localStorage.setItem('user', JSON.stringify(makeLogin.data.user));

      return (window.location.href = '/home');
    },
    [history]
  );

  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: ValidationSchema,
    onSubmit,
  });

  return (
    <Grid container sx={LoginStyles}>
      <Grid item xs={3} textAlign="center">
        <form onSubmit={formik.handleSubmit}>
          <img src={TurnOverLogo} alt="Logo" />
          <Input formik={formik} name="email" type="email" label="E-mail" />
          <Input
            formik={formik}
            name="password"
            type="password"
            label="Password"
          />
          <Button type="submit">Login</Button>
          <Link href="/signup">
            <Typography component="p" sx={AlreadyHaveAccount}>
              Don't have account?
            </Typography>
          </Link>
        </form>
      </Grid>
    </Grid>
  );
}
