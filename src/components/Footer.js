import React from "react";
import { StyledFooter } from "./styles/Footer.styled";
import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'

export default function Footer() {
  return (
    <StyledFooter>
        <img src={github}></img>
        <img src={linkedin}></img>
    </StyledFooter>
  )
}