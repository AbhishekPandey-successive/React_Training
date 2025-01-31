// 14.Create a new form and Implement form submission handling. Ensure that the form cannot be submitted if there are validation errors. Display a summary of errors if the user attempts to submit an invalid form.


import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const ErrorMessage = () => (
  <div>
    <h1>Displaying Error Messages</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={values => {
        
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="username" />
         
          {touched.username && errors.username && <div>{errors.username}</div>}
          <Field name="email" />
          
          {touched.email && errors.email && <div>{errors.email}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
); 

export default ErrorMessage