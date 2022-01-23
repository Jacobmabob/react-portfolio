import React, { useState } from 'react';
import { StyledForm } from './styles/StyledForm';
import { StyledInput } from './styles/form-styles/StyledInputField';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Button from "./Button";


export default function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      body: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
      subject: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      body: Yup.string()
      .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  });


  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledInput>
        <label>
          Email *
        </label>
        <input
          id="email"
          name="email"
          onChange={formik.handleChange}
          type="email"
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email 
          && formik.errors.email 
            ? <p className="form-error">{formik.errors.email}</p> 
            : null }

      </StyledInput>
      <StyledInput>
        <label>
          Subject *
        </label>
        
        <input
          id="subject"
          name="subject"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          value={formik.values.subject}
        />

          {formik.touched.subject
            && formik.errors.subject 
              ? <p className="form-error">{formik.errors.subject}</p> 
              : null }

      </StyledInput>
      <StyledInput>
        <label>
          Body *
        </label>
        <textarea
          id="body"
          rows="12"
          name="body"
          type="text"
          value={formik.values.body}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.body
          && formik.errors.body 
            ? <p className="form-error">{formik.errors.body}</p> 
            : null }
      </StyledInput>
      <Button text="Submit" type="submit"/>
    </StyledForm>
  );
}