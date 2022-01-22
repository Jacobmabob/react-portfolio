import React, { useState } from 'react';
import { StyledForm } from './styles/StyledForm';
import { StyledInput } from './styles/form-styles/StyledInputField';
import Button from "./Button";


export default function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    // console.log(`${name} = ${value}`)

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    // return name === 'email' ? setEmail(value) : setSubject(value);
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();


  };

  return (
    <StyledForm>
      <StyledInput>
        <label>
          Email *
        </label>
        <input
          // value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
        />
      </StyledInput>
      <StyledInput>
        <label>
          Subject *
        </label>
        <input
          name="subject"
          onChange={handleInputChange}
          type="text"
        />
      </StyledInput>
      <StyledInput>
        <label>
          Body *
        </label>
        <textarea
          rows="12"
          name="body"
          type="text"
          onChange={handleInputChange}
        />
      </StyledInput>
      <Button text="Submit"/>
    </StyledForm>
  );
}