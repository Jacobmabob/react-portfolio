import React from "react";
import { StyledButton } from "./styles/Button.styled";

export default function Button ({ text, onClick }) {
  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  )
}