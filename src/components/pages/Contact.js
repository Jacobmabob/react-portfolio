import React from 'react';
import Form from '../ContactForm';
import { FormContainer } from '../styles/form-styles/FormContainer';
import { FormContent } from '../styles/form-styles/FormContent';
import email_image from '../../assets/images/email.png'

export default function Contact() {
  return (
    <FormContainer>
      <FormContent className="input-container">
        <h1>Contact.</h1>
        <p>Interested in working together?
          <br></br> Feel free to reach out to me here. </p>
        <Form />
      </FormContent>
      <FormContent className="email-svg">
        <img src={email_image} />
      </FormContent>


    </FormContainer>
  );
}
