import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .min(4, 'Please enter at least 4 characters')
    .max(10, 'Please enter no more than 10 characters')
    .required('* Required'),
  email: Yup.string().email('Invalid email address').required('* Required'),
  comment: Yup.string().required('* Required'),
});
