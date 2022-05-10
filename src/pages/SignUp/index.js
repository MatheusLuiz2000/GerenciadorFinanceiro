import { useFormik } from 'formik';
import { Grid, Link, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import Button from '~/components/Button';
import { toast } from 'react-toastify';
import Input from '~/components/Input';
import TurnOverLogo from '~/assets/images/turnoverbnb.png';
import { InitialValues, ValidationSchema } from '~/formik/SignUp';
import { LoginStyles, AlreadyHaveAccount } from '~/styles/LoginStyles';
import { signUp } from '~/services/api';
import { useHistory } from 'react-router-dom';
import { toastConfig } from '~/constants/toast';

export default function SignUp() {
  const history = useHistory();

  const onSubmit = useCallback(
    async values => {
      const createAccount = await signUp(values);

      if (createAccount.status !== 200) {
        return toast.error('This email already exists!', toastConfig);
      }

      localStorage.setItem('access_token', createAccount.data.access_token);
      localStorage.setItem('user', JSON.stringify(createAccount.data.user));

      return history.push('/home');
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
          <Input formik={formik} name="name" type="username" label="Username" />
          <Input formik={formik} name="email" type="email" label="E-mail" />
          <Input
            formik={formik}
            name="password"
            type="password"
            label="Password"
          />
          <Button type="submit">Sign Up</Button>
          <Link href="/login">
            <Typography component="p" sx={AlreadyHaveAccount}>
              Already have an account?
            </Typography>
          </Link>
        </form>
      </Grid>
    </Grid>
  );
}
