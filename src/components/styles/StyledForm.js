import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  > * {
    margin: .5rem 0;
    font-size: 1rem;
  }

  input {
    height: 1.3rem;
    border-radius: 0;
    border: 1px solid grey;
    // border-bottom: 3px solid grey;
    padding: .2rem;
    font-family: inherit;
    transition: 100ms border ease-in-out;
  }
  input::before {
    content: "";
    position: absolute;
    width:100px;
    height: 100px;
    background-color: black;
  }

  input:focus {
    border-color: grey;
    outline: none;
    background-color:  #F8F8F8;
  }

  textarea {
    border: 1px solid grey;
    border-color: grey;
    // border-bottom: 4px solid grey;
    font-family: inherit;
  }

  textarea:focus {
    border-color: grey;
    outline: none;
    background-color: #F8F8F8;
  }



`