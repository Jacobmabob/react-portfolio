import React from "react";
import { StyledButton } from "./styles/Button.styled";

export default function Button ({ text, callback }) {
  return (
    <StyledButton>
      {text}
    </StyledButton>
  )
}