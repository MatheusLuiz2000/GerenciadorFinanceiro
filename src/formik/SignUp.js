import * as Yup from 'yup';

export const InitialValues = {
  email: '',
  password: '',
  name: '',
};

export const ValidationSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});
