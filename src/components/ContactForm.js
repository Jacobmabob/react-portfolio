import React, { useState } from 'react';

import { StyledForm } from './styles/StyledForm';
import { StyledInput } from './styles/form-styles/StyledInputField';

import { useFormik } from 'formik';
import * as Yup from "yup";
import emailjs, { send } from '@emailjs/browser'


import Button from "./Button";



export default function Form() {

  const [buttonState, setButtonState ] = useState('Send Message')

  const formik = useFormik({
    initialValues: {
      reply_to: "",
      subject: "",
      message: "",
      to_name: "jacobmccarthy.dev@gmail.com"
    },
    validationSchema: Yup.object({
      reply_to: Yup.string()
      .email("Invalid email address")
      .required("Required"),
      subject: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      message: Yup.string()
      .required("Required"),
    }),


    onSubmit: (values) => {
      const serviceID = "service_g8hwxzw";
      const templateID = "template_uckny3d";
      const userID = "user_htcdsYliLnUOOF1TkXHRG"; 

      try {
        emailjs.send( serviceID, templateID, values, userID)
          .then(() => {
            console.log('email sent!')
            alert("Thanks for reaching out! I'll get back to you shortly.")
            // resetForm();
          })
      }
      catch {
        console.log('there was a problem')
	      // setSubmitting(false);
      }
    }
  });

  


  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledInput>
        <label>
          Email *
        </label>
        <input
          id="reply_to"
          name="reply_to"
          onChange={formik.handleChange}
          type="reply_to"
          onBlur={formik.handleBlur}
          value={formik.values.reply_to}
        />
        {formik.touched.reply_to 
          && formik.errors.reply_to 
            ? <p className="form-error">{formik.errors.reply_to}</p> 
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
          Message *
        </label>
        <textarea
          id="message"
          rows="12"
          name="message"
          type="text"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message
          && formik.errors.message 
            ? <p className="form-error">{formik.errors.message}</p> 
            : null }
      </StyledInput>
      <Button className="submitButton" text="Submit" type="submit"/>
    </StyledForm>
  );
}