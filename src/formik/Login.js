import * as Yup from 'yup';

export const InitialValues = {
  email: '',
  password: '',
};

export const ValidationSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});
